import json, math, re, sys
from pathlib import Path
from openpyxl import Workbook
from openpyxl.styles import Font, Alignment, PatternFill, Border, Side
from openpyxl.worksheet.table import Table, TableStyleInfo

PROJECT = Path(__file__).resolve().parents[3]
DATA = PROJECT / "public" / "data.json"
REG = PROJECT / "factcheck" / "registry.json"
OUT = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else PROJECT / "factcheck" / "OUniverse wording - comments welcome.xlsx"

data = [o for o in json.load(open(DATA, encoding="utf-8")) if o.get("type") != "credits"]
reg = json.load(open(REG, encoding="utf-8"))

def what_is_it(o):
    t, p, s = o.get("type"), o.get("parent", ""), o.get("status", "")
    if t == "star": return "Star"
    if t == "planet": return "Planet"
    if t == "moon": return f"Moon of {p}"
    if t == "asteroid": return "Asteroid named after OU people" if re.match(r"^\d+ ", o["name"]) else "Asteroid"
    if t == "comet": return "Comet"
    if t == "reference_point": return "Point in space"
    if t == "mission":
        yr = o.get("launch_year", "")
        when = f", {yr}" if yr and yr[:1].isdigit() else ""
        if o.get("orbit_type") == "landed" and p == "Earth": where = "OU facility"
        elif o.get("orbit_type") == "suborbital": where = "Sounding rocket"
        elif o.get("orbit_type") == "landed": where = f"Lander or rover, {p}"
        elif p == "Sun": where = "Spacecraft in deep space"
        elif p.startswith("Earth-Sun"): where = f"Spacecraft at {p}"
        elif p == "Earth": where = "Satellite or observatory in Earth orbit"
        else: where = f"Spacecraft at {p}"
        return f"{where} ({s.lower()}{when})" if s else where
    return t or ""

# Claims we couldn't confirm from public sources, phrased as questions for colleagues.
def unsure(name):
    e = reg["objects"].get(name)
    if not e: return ""
    items = [c["claim"].strip("“”\"") for c in e["claims"]
             if c["status"] in ("unverified", "user-supplied", "disputed") and c["field"] in ("ou_involvement", "description")]
    return "\n".join("• " + re.sub(r"\s+", " ", i) for i in items)

wb = Workbook()
ws = wb.active
ws.title = "OUniverse wording"
ws.sheet_view.showGridLines = False
ws.sheet_view.zoomScale = 100

ARIAL = "Arial"
NAVY = "060645"       # OU core blue
LIGHT = "E3F7FB"      # pale OU light blue
YELLOW = "FFF6CC"     # cells to write in
GREY = "6B6E8F"
thin = Side(style="thin", color="D5D8E8")
box = Border(left=thin, right=thin, top=thin, bottom=thin)
wrap_top = Alignment(wrap_text=True, vertical="top")

widths = {"A": 22, "B": 24, "C": 62, "D": 62, "E": 46, "F": 34, "G": 16}
for col, w in widths.items():
    ws.column_dimensions[col].width = w

# --- Title and a two-line welcome ---
ws["A1"] = "OUniverse: help us get the words right"
ws["A1"].font = Font(name=ARIAL, size=18, bold=True, color=NAVY)
ws.row_dimensions[1].height = 30
ws.merge_cells("A2:G2")
ws["A2"] = ("OUniverse is an interactive 3D Solar System showing space missions the Open University has been part of. "
            "Below is the text visitors read for each planet and mission. If something is wrong, missing or could be clearer, "
            "just type in the yellow Feedback column. You don't need to change anything else, and a rough note is fine.")
ws["A2"].font = Font(name=ARIAL, size=11, color="222244")
ws["A2"].alignment = wrap_top
ws.row_dimensions[2].height = 48

# --- Missing missions: one per box along the row ---
ws["A4"] = "Missing a mission?"
ws["A4"].font = Font(name=ARIAL, size=12, bold=True, color=NAVY)
ws.merge_cells("B4:G4")
ws["B4"] = "Add one per yellow box, working along the row: the mission name, then what the OU did (people, instrument, role). For example: “Chandrayaan-2: the OU tested the X-ray detectors for its CLASS instrument”."
ws["B4"].font = Font(name=ARIAL, size=10, italic=True, color=GREY)
ws["B4"].alignment = wrap_top
ws.row_dimensions[4].height = 30
for r in (5, 6):
    ws.row_dimensions[r].height = 62
    ws.cell(row=r, column=1).value = "Your suggestions →" if r == 5 else "More room →"
    ws.cell(row=r, column=1).font = Font(name=ARIAL, size=10, color=GREY)
    ws.cell(row=r, column=1).alignment = Alignment(vertical="center")
    for c in range(2, 8):
        cell = ws.cell(row=r, column=c)
        cell.fill = PatternFill("solid", fgColor=YELLOW)
        cell.border = box
        cell.alignment = wrap_top
        cell.font = Font(name=ARIAL, size=10)

# --- The main list ---
HEAD = 8
headers = ["Planet or mission", "What it is", "What the OU did", "About it (general text)",
           "Feedback: your suggested wording or comments", "Can you confirm? (we couldn't find a public source)", "Your name (optional)"]
ws.row_dimensions[HEAD - 1].height = 8
for i, h in enumerate(headers, 1):
    c = ws.cell(row=HEAD, column=i, value=h)
    c.font = Font(name=ARIAL, size=10, bold=True, color="FFFFFF")
    c.fill = PatternFill("solid", fgColor=NAVY)
    c.alignment = Alignment(wrap_text=True, vertical="center")
ws.row_dimensions[HEAD].height = 32

def lines(text, width):
    if not text: return 1
    per = max(8, int(width * 1.15))  # rough characters per line for Arial 10
    return sum(max(1, math.ceil(len(part) / per)) for part in str(text).split("\n"))

r = HEAD
for o in data:
    r += 1
    ou = o.get("ou_involvement", "")
    row = [o["name"], what_is_it(o), ou or "No OU text yet. Do you know what the OU did? Please add it in Feedback.",
           o.get("description", ""), "", unsure(o["name"]), ""]
    for i, v in enumerate(row, 1):
        c = ws.cell(row=r, column=i, value=v)
        c.font = Font(name=ARIAL, size=10)
        c.alignment = wrap_top
        c.border = box
    ws.cell(row=r, column=1).font = Font(name=ARIAL, size=10, bold=True, color=NAVY)
    ws.cell(row=r, column=2).font = Font(name=ARIAL, size=9, color=GREY)
    if not ou:
        ws.cell(row=r, column=3).font = Font(name=ARIAL, size=10, italic=True, color=GREY)
    ws.cell(row=r, column=6).font = Font(name=ARIAL, size=9, color="7A4B00")
    for col in (5, 7):
        ws.cell(row=r, column=col).fill = PatternFill("solid", fgColor=YELLOW)
    h = max(lines(row[2], widths["C"]), lines(row[3], widths["D"]), lines(row[5], widths["F"] - 2), lines(row[1], widths["B"]))
    ws.row_dimensions[r].height = min(409, 13.5 * h + 8)

last = r
tab = Table(displayName="OUniverseText", ref=f"A{HEAD}:G{last}")
# Light banding only; our own header colours stay on top.
tab.tableStyleInfo = TableStyleInfo(name="TableStyleLight1", showRowStripes=False, showColumnStripes=False)
ws.add_table(tab)

# A closing line so people know it's the end and who to contact.
ws.cell(row=last + 2, column=1, value="Thank you. The OUniverse team will review every comment before anything changes on the site.").font = Font(name=ARIAL, size=10, italic=True, color=GREY)

ws.print_title_rows = f"{HEAD}:{HEAD}"
ws.page_setup.orientation = "landscape"
ws.page_setup.fitToWidth = 1
ws.page_setup.fitToHeight = 0
ws.sheet_properties.pageSetUpPr.fitToPage = True
ws.freeze_panes = None

wb.save(OUT)
print("rows:", last - HEAD, "saved:", OUT)
