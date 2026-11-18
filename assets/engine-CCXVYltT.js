const Yr={ROTATE:0,DOLLY:1,PAN:2},Wr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},NE=0,mA=1,QE=2,rf=1,OE=2,si=3,Gn=0,Vt=1,kt=2,Ni=0,Kr=1,xs=2,xA=3,_A=4,kE=5,Vs=100,GE=101,zE=102,HE=103,VE=104,WE=200,qE=201,XE=202,YE=203,$h=204,ed=205,KE=206,JE=207,ZE=208,jE=209,$E=210,ey=211,ty=212,ny=213,iy=214,td=0,nd=1,id=2,ra=3,sd=4,rd=5,ad=6,od=7,c0=0,sy=1,ry=2,gs=0,ay=1,l0=2,oy=3,cy=4,ly=5,uy=6,hy=7,EA="attached",dy="detached",u0=300,ar=301,aa=302,cd=303,ld=304,Yl=306,_s=1e3,kn=1001,Sl=1002,tn=1003,af=1004,ro=1005,bt=1006,Al=1007,Yn=1008,Ye=1009,h0=1010,d0=1011,vo=1012,of=1013,or=1014,cn=1015,Bn=1016,cf=1017,lf=1018,Mo=1020,Kl=35902,Jl=35899,f0=1021,So=1022,Jt=1023,Co=1026,Io=1027,cs=1028,uf=1029,ls=1030,hf=1031,df=1033,Jr=33776,er=33777,Zr=33778,lo=33779,Cl=35840,ud=35841,oa=35842,wo=35843,Il=36196,bo=37492,To=37496,tr=37808,hd=37809,dd=37810,fd=37811,jr=37812,Ad=37813,pd=37814,gd=37815,md=37816,xd=37817,_d=37818,Ed=37819,yd=37820,vd=37821,ca=36492,Md=36494,wl=36495,bl=36283,Tl=36284,Bl=36285,Rl=36286,Bo=2300,Ro=2301,gu=2302,yA=2400,vA=2401,MA=2402,fy=2500,Ay=0,A0=1,Sd=2,py=3200,p0=3201,g0=0,gy=1,qn="",dt="srgb",sn="srgb-linear",Dl="linear",_t="srgb",gr=7680,SA=519,my=512,xy=513,_y=514,m0=515,Ey=516,yy=517,vy=518,My=519,Cd=35044,CA="300 es",li=2e3,Ll=2001;function x0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Do(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sy(){const n=Do("canvas");return n.style.display="block",n}const IA={};function Pl(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ie(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Ke(...n){const e="THREE."+n.shift();console.error(e,...n)}function Lo(...n){const e=n.join(" ");e in IA||(IA[e]=!0,Ie(...n))}function Cy(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}class fr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wA=1234567;const uo=Math.PI/180,la=180/Math.PI;function Kn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function qe(n,e,t){return Math.max(e,Math.min(t,n))}function ff(n,e){return(n%e+e)%e}function Iy(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function wy(n,e,t){return n!==e?(t-n)/(e-n):0}function ho(n,e,t){return(1-t)*n+t*e}function by(n,e,t,i){return ho(n,e,1-Math.exp(-t*i))}function Ty(n,e=1){return e-Math.abs(ff(n,e*2)-e)}function By(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ry(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Dy(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Ly(n,e){return n+Math.random()*(e-n)}function Py(n){return n*(.5-Math.random())}function Uy(n){n!==void 0&&(wA=n);let e=wA+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fy(n){return n*uo}function Ny(n){return n*la}function Qy(n){return(n&n-1)===0&&n!==0}function Oy(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ky(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Gy(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+i)/2),u=a((e+i)/2),h=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),p=a((i-e)/2);switch(s){case"XYX":n.set(o*u,c*h,c*d,o*l);break;case"YZY":n.set(c*d,o*u,c*h,o*l);break;case"ZXZ":n.set(c*h,c*d,o*u,o*l);break;case"XZX":n.set(o*u,c*p,c*f,o*l);break;case"YXY":n.set(c*f,o*u,c*p,o*l);break;case"ZYZ":n.set(c*p,c*f,o*u,o*l);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function pt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const at={DEG2RAD:uo,RAD2DEG:la,generateUUID:Kn,clamp:qe,euclideanModulo:ff,mapLinear:Iy,inverseLerp:wy,lerp:ho,damp:by,pingpong:Ty,smoothstep:By,smootherstep:Ry,randInt:Dy,randFloat:Ly,randFloatSpread:Py,seededRandom:Uy,degToRad:Fy,radToDeg:Ny,isPowerOfTwo:Qy,ceilPowerOfTwo:Oy,floorPowerOfTwo:ky,setQuaternionFromProperEuler:Gy,normalize:pt,denormalize:Xn};class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3],d=r[a+0],f=r[a+1],p=r[a+2],g=r[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=g;return}if(h!==g||c!==d||l!==f||u!==p){let m=c*d+l*f+u*p+h*g;m<0&&(d=-d,f=-f,p=-p,g=-g,m=-m);let A=1-o;if(m<.9995){const E=Math.acos(m),_=Math.sin(E);A=Math.sin(A*E)/_,o=Math.sin(o*E)/_,c=c*A+d*o,l=l*A+f*o,u=u*A+p*o,h=h*A+g*o}else{c=c*A+d*o,l=l*A+f*o,u=u*A+p*o,h=h*A+g*o;const E=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=E,l*=E,u*=E,h*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+u*h+c*f-l*d,e[t+1]=c*p+u*d+l*h-o*f,e[t+2]=l*p+u*f+o*d-c*h,e[t+3]=u*p-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(s/2),h=o(r/2),d=c(i/2),f=c(s/2),p=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"YZX":this._x=d*u*h+l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h-d*f*p;break;case"XZY":this._x=d*u*h-l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h+d*f*p;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-s*o,this._w=a*u-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class x{constructor(e=0,t=0,i=0){x.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bA.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bA.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+c*l+a*h-o*u,this.y=i+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mu.copy(this).projectOnVector(e),this.sub(mu)}reflect(e){return this.sub(mu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mu=new x,bA=new ot;class Ne{constructor(e,t,i,s,r,a,o,c,l){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],p=i[8],g=s[0],m=s[3],A=s[6],E=s[1],_=s[4],S=s[7],w=s[2],C=s[5],B=s[8];return r[0]=a*g+o*E+c*w,r[3]=a*m+o*_+c*C,r[6]=a*A+o*S+c*B,r[1]=l*g+u*E+h*w,r[4]=l*m+u*_+h*C,r[7]=l*A+u*S+h*B,r[2]=d*g+f*E+p*w,r[5]=d*m+f*_+p*C,r[8]=d*A+f*S+p*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*r*u+i*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,f=l*r-a*c,p=t*h+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/p;return e[0]=h*g,e[1]=(s*l-u*i)*g,e[2]=(o*i-s*a)*g,e[3]=d*g,e[4]=(u*t-s*c)*g,e[5]=(s*r-o*t)*g,e[6]=f*g,e[7]=(i*c-l*t)*g,e[8]=(a*t-i*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(xu.makeScale(e,t)),this}rotate(e){return this.premultiply(xu.makeRotation(-e)),this}translate(e,t){return this.premultiply(xu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xu=new Ne,TA=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),BA=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zy(){const n={enabled:!0,workingColorSpace:sn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_t&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(s.r=$r(s.r),s.g=$r(s.g),s.b=$r(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qn?Dl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Lo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Lo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[sn]:{primaries:e,whitePoint:i,transfer:Dl,toXYZ:TA,fromXYZ:BA,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dt},outputColorSpaceConfig:{drawingBufferColorSpace:dt}},[dt]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:TA,fromXYZ:BA,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dt}}}),n}const rt=zy();function Qi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $r(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let mr;class Hy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{mr===void 0&&(mr=Do("canvas")),mr.width=e.width,mr.height=e.height;const s=mr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=mr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Do("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Qi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Qi(t[i]/255)*255):t[i]=Qi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vy=0;class Af{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=Kn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(_u(s[a].image)):r.push(_u(s[a]))}else r=_u(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function _u(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hy.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let Wy=0;const Eu=new x;class Gt extends fr{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,i=kn,s=kn,r=bt,a=Yn,o=Jt,c=Ye,l=Gt.DEFAULT_ANISOTROPY,u=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=Kn(),this.name="",this.source=new Af(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Eu).x}get height(){return this.source.getSize(Eu).y}get depth(){return this.source.getSize(Eu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==u0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _s:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case Sl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _s:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case Sl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=u0;Gt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,i=0,s=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],p=c[9],g=c[2],m=c[6],A=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(p+m)<.1&&Math.abs(l+f+A-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,S=(f+1)/2,w=(A+1)/2,C=(u+d)/4,B=(h+g)/4,U=(p+m)/4;return _>S&&_>w?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=C/i,r=B/i):S>w?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=C/s,r=U/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=B/r,s=U/r),this.set(i,s,r,t),this}let E=Math.sqrt((m-p)*(m-p)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-p)/E,this.y=(h-g)/E,this.z=(d-u)/E,this.w=Math.acos((l+f+A-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qy extends fr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Gt(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Af(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends qy{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class _0 extends Gt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class E0 extends Gt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ei{constructor(e=new x(1/0,1/0,1/0),t=new x(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(r,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$o.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$o.copy(i.boundingBox)),$o.applyMatrix4(e.matrixWorld),this.union($o)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(La),ec.subVectors(this.max,La),xr.subVectors(e.a,La),_r.subVectors(e.b,La),Er.subVectors(e.c,La),Wi.subVectors(_r,xr),qi.subVectors(Er,_r),Rs.subVectors(xr,Er);let t=[0,-Wi.z,Wi.y,0,-qi.z,qi.y,0,-Rs.z,Rs.y,Wi.z,0,-Wi.x,qi.z,0,-qi.x,Rs.z,0,-Rs.x,-Wi.y,Wi.x,0,-qi.y,qi.x,0,-Rs.y,Rs.x,0];return!yu(t,xr,_r,Er,ec)||(t=[1,0,0,0,1,0,0,0,1],!yu(t,xr,_r,Er,ec))?!1:(tc.crossVectors(Wi,qi),t=[tc.x,tc.y,tc.z],yu(t,xr,_r,Er,ec))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xi=[new x,new x,new x,new x,new x,new x,new x,new x],Hn=new x,$o=new ei,xr=new x,_r=new x,Er=new x,Wi=new x,qi=new x,Rs=new x,La=new x,ec=new x,tc=new x,Ds=new x;function yu(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ds.fromArray(n,r);const o=s.x*Math.abs(Ds.x)+s.y*Math.abs(Ds.y)+s.z*Math.abs(Ds.z),c=e.dot(Ds),l=t.dot(Ds),u=i.dot(Ds);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Xy=new ei,Pa=new x,vu=new x;class Sn{constructor(e=new x,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Xy.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);const t=Pa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Pa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(vu)),this.expandByPoint(Pa.copy(e.center).sub(vu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const _i=new x,Mu=new x,nc=new x,Xi=new x,Su=new x,ic=new x,Cu=new x;class Is{constructor(e=new x,t=new x(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Mu.copy(e).add(t).multiplyScalar(.5),nc.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(Mu);const r=e.distanceTo(t)*.5,a=-this.direction.dot(nc),o=Xi.dot(this.direction),c=-Xi.dot(nc),l=Xi.lengthSq(),u=Math.abs(1-a*a);let h,d,f,p;if(u>0)if(h=a*c-o,d=a*o-c,p=r*u,h>=0)if(d>=-p)if(d<=p){const g=1/u;h*=g,d*=g,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-p?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=p?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Mu).addScaledVector(nc,d),f}intersectSphere(e,t){_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),s=_i.dot(_i)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,i,s,r){Su.subVectors(t,e),ic.subVectors(i,e),Cu.crossVectors(Su,ic);let a=this.direction.dot(Cu),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xi.subVectors(this.origin,e);const c=o*this.direction.dot(ic.crossVectors(Xi,ic));if(c<0)return null;const l=o*this.direction.dot(Su.cross(Xi));if(l<0||c+l>a)return null;const u=-o*Xi.dot(Cu);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xe{constructor(e,t,i,s,r,a,o,c,l,u,h,d,f,p,g,m){xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,u,h,d,f,p,g,m)}set(e,t,i,s,r,a,o,c,l,u,h,d,f,p,g,m){const A=this.elements;return A[0]=e,A[4]=t,A[8]=i,A[12]=s,A[1]=r,A[5]=a,A[9]=o,A[13]=c,A[2]=l,A[6]=u,A[10]=h,A[14]=d,A[3]=f,A[7]=p,A[11]=g,A[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/yr.setFromMatrixColumn(e,0).length(),r=1/yr.setFromMatrixColumn(e,1).length(),a=1/yr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,f=a*h,p=o*u,g=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+p*l,t[5]=d-g*l,t[9]=-o*c,t[2]=g-d*l,t[6]=p+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,p=l*u,g=l*h;t[0]=d+g*o,t[4]=p*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-p,t[6]=g+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,p=l*u,g=l*h;t[0]=d-g*o,t[4]=-a*h,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,f=a*h,p=o*u,g=o*h;t[0]=c*u,t[4]=p*l-f,t[8]=d*l+g,t[1]=c*h,t[5]=g*l+d,t[9]=f*l-p,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,p=o*c,g=o*l;t[0]=c*u,t[4]=g-d*h,t[8]=p*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+p,t[10]=d-g*h}else if(e.order==="XZY"){const d=a*c,f=a*l,p=o*c,g=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+g,t[5]=a*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=o*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yy,e,Ky)}lookAt(e,t,i){const s=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Yi.crossVectors(i,wn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Yi.crossVectors(i,wn)),Yi.normalize(),sc.crossVectors(wn,Yi),s[0]=Yi.x,s[4]=sc.x,s[8]=wn.x,s[1]=Yi.y,s[5]=sc.y,s[9]=wn.y,s[2]=Yi.z,s[6]=sc.z,s[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],p=i[2],g=i[6],m=i[10],A=i[14],E=i[3],_=i[7],S=i[11],w=i[15],C=s[0],B=s[4],U=s[8],y=s[12],v=s[1],R=s[5],b=s[9],D=s[13],N=s[2],F=s[6],Q=s[10],X=s[14],z=s[3],j=s[7],ie=s[11],te=s[15];return r[0]=a*C+o*v+c*N+l*z,r[4]=a*B+o*R+c*F+l*j,r[8]=a*U+o*b+c*Q+l*ie,r[12]=a*y+o*D+c*X+l*te,r[1]=u*C+h*v+d*N+f*z,r[5]=u*B+h*R+d*F+f*j,r[9]=u*U+h*b+d*Q+f*ie,r[13]=u*y+h*D+d*X+f*te,r[2]=p*C+g*v+m*N+A*z,r[6]=p*B+g*R+m*F+A*j,r[10]=p*U+g*b+m*Q+A*ie,r[14]=p*y+g*D+m*X+A*te,r[3]=E*C+_*v+S*N+w*z,r[7]=E*B+_*R+S*F+w*j,r[11]=E*U+_*b+S*Q+w*ie,r[15]=E*y+_*D+S*X+w*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],g=e[7],m=e[11],A=e[15];return p*(+r*c*h-s*l*h-r*o*d+i*l*d+s*o*f-i*c*f)+g*(+t*c*f-t*l*d+r*a*d-s*a*f+s*l*u-r*c*u)+m*(+t*l*h-t*o*f-r*a*h+i*a*f+r*o*u-i*l*u)+A*(-s*o*u-t*c*h+t*o*d+s*a*h-i*a*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],g=e[13],m=e[14],A=e[15],E=h*m*l-g*d*l+g*c*f-o*m*f-h*c*A+o*d*A,_=p*d*l-u*m*l-p*c*f+a*m*f+u*c*A-a*d*A,S=u*g*l-p*h*l+p*o*f-a*g*f-u*o*A+a*h*A,w=p*h*c-u*g*c-p*o*d+a*g*d+u*o*m-a*h*m,C=t*E+i*_+s*S+r*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/C;return e[0]=E*B,e[1]=(g*d*r-h*m*r-g*s*f+i*m*f+h*s*A-i*d*A)*B,e[2]=(o*m*r-g*c*r+g*s*l-i*m*l-o*s*A+i*c*A)*B,e[3]=(h*c*r-o*d*r-h*s*l+i*d*l+o*s*f-i*c*f)*B,e[4]=_*B,e[5]=(u*m*r-p*d*r+p*s*f-t*m*f-u*s*A+t*d*A)*B,e[6]=(p*c*r-a*m*r-p*s*l+t*m*l+a*s*A-t*c*A)*B,e[7]=(a*d*r-u*c*r+u*s*l-t*d*l-a*s*f+t*c*f)*B,e[8]=S*B,e[9]=(p*h*r-u*g*r-p*i*f+t*g*f+u*i*A-t*h*A)*B,e[10]=(a*g*r-p*o*r+p*i*l-t*g*l-a*i*A+t*o*A)*B,e[11]=(u*o*r-a*h*r-u*i*l+t*h*l+a*i*f-t*o*f)*B,e[12]=w*B,e[13]=(u*g*s-p*h*s+p*i*d-t*g*d-u*i*m+t*h*m)*B,e[14]=(p*o*s-a*g*s-p*i*c+t*g*c+a*i*m-t*o*m)*B,e[15]=(a*h*s-u*o*s+u*i*c-t*h*c-a*i*d+t*o*d)*B,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,f=r*u,p=r*h,g=a*u,m=a*h,A=o*h,E=c*l,_=c*u,S=c*h,w=i.x,C=i.y,B=i.z;return s[0]=(1-(g+A))*w,s[1]=(f+S)*w,s[2]=(p-_)*w,s[3]=0,s[4]=(f-S)*C,s[5]=(1-(d+A))*C,s[6]=(m+E)*C,s[7]=0,s[8]=(p+_)*B,s[9]=(m-E)*B,s[10]=(1-(d+g))*B,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=yr.set(s[0],s[1],s[2]).length();const a=yr.set(s[4],s[5],s[6]).length(),o=yr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Vn.copy(this);const l=1/r,u=1/a,h=1/o;return Vn.elements[0]*=l,Vn.elements[1]*=l,Vn.elements[2]*=l,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=h,Vn.elements[9]*=h,Vn.elements[10]*=h,t.setFromRotationMatrix(Vn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=li,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let p,g;if(c)p=r/(a-r),g=a*r/(a-r);else if(o===li)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ll)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=li,c=!1){const l=this.elements,u=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s);let p,g;if(c)p=1/(a-r),g=a/(a-r);else if(o===li)p=-2/(a-r),g=-(a+r)/(a-r);else if(o===Ll)p=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const yr=new x,Vn=new xe,Yy=new x(0,0,0),Ky=new x(1,1,1),Yi=new x,sc=new x,wn=new x,RA=new xe,DA=new ot;class Ai{constructor(e=0,t=0,i=0,s=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return RA.makeRotationFromQuaternion(e),this.setFromRotationMatrix(RA,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return DA.setFromEuler(this),this.setFromQuaternion(DA,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class pf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jy=0;const LA=new x,vr=new ot,Ei=new xe,rc=new x,Ua=new x,Zy=new x,jy=new ot,PA=new x(1,0,0),UA=new x(0,1,0),FA=new x(0,0,1),NA={type:"added"},$y={type:"removed"},Mr={type:"childadded",child:null},Iu={type:"childremoved",child:null};class Tt extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new x,t=new Ai,i=new ot,s=new x(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new Ne}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.multiply(vr),this}rotateOnWorldAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.premultiply(vr),this}rotateX(e){return this.rotateOnAxis(PA,e)}rotateY(e){return this.rotateOnAxis(UA,e)}rotateZ(e){return this.rotateOnAxis(FA,e)}translateOnAxis(e,t){return LA.copy(e).applyQuaternion(this.quaternion),this.position.add(LA.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(PA,e)}translateY(e){return this.translateOnAxis(UA,e)}translateZ(e){return this.translateOnAxis(FA,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?rc.copy(e):rc.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Ua,rc,this.up):Ei.lookAt(rc,Ua,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),vr.setFromRotationMatrix(Ei),this.quaternion.premultiply(vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(NA),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($y),Iu.child=e,this.dispatchEvent(Iu),Iu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(NA),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ua,e,Zy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ua,jy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Tt.DEFAULT_UP=new x(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new x,yi=new x,wu=new x,vi=new x,Sr=new x,Cr=new x,QA=new x,bu=new x,Tu=new x,Bu=new x,Ru=new ft,Du=new ft,Lu=new ft;class Rn{constructor(e=new x,t=new x,i=new x){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Wn.subVectors(e,t),s.cross(Wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Wn.subVectors(s,t),yi.subVectors(i,t),wu.subVectors(e,t);const a=Wn.dot(Wn),o=Wn.dot(yi),c=Wn.dot(wu),l=yi.dot(yi),u=yi.dot(wu),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-o*u)*d,p=(a*u-o*c)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vi.x),c.addScaledVector(a,vi.y),c.addScaledVector(o,vi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return Ru.setScalar(0),Du.setScalar(0),Lu.setScalar(0),Ru.fromBufferAttribute(e,t),Du.fromBufferAttribute(e,i),Lu.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ru,r.x),a.addScaledVector(Du,r.y),a.addScaledVector(Lu,r.z),a}static isFrontFacing(e,t,i,s){return Wn.subVectors(i,t),yi.subVectors(e,t),Wn.cross(yi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Wn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Rn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Sr.subVectors(s,i),Cr.subVectors(r,i),bu.subVectors(e,i);const c=Sr.dot(bu),l=Cr.dot(bu);if(c<=0&&l<=0)return t.copy(i);Tu.subVectors(e,s);const u=Sr.dot(Tu),h=Cr.dot(Tu);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(Sr,a);Bu.subVectors(e,r);const f=Sr.dot(Bu),p=Cr.dot(Bu);if(p>=0&&f<=p)return t.copy(r);const g=f*l-c*p;if(g<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(i).addScaledVector(Cr,o);const m=u*p-f*h;if(m<=0&&h-u>=0&&f-p>=0)return QA.subVectors(r,s),o=(h-u)/(h-u+(f-p)),t.copy(s).addScaledVector(QA,o);const A=1/(m+g+d);return a=g*A,o=d*A,t.copy(i).addScaledVector(Sr,a).addScaledVector(Cr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const y0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},ac={h:0,s:0,l:0};function Pu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Se{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=rt.workingColorSpace){if(e=ff(e,1),t=qe(t,0,1),i=qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Pu(a,r,e+1/3),this.g=Pu(a,r,e),this.b=Pu(a,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,t=dt){function i(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){const i=y0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return rt.workingToColorSpace(an.copy(this),e),Math.round(qe(an.r*255,0,255))*65536+Math.round(qe(an.g*255,0,255))*256+Math.round(qe(an.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(an.copy(this),t);const i=an.r,s=an.g,r=an.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=dt){rt.workingToColorSpace(an.copy(this),e);const t=an.r,i=an.g,s=an.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(ac);const i=ho(Ki.h,ac.h,t),s=ho(Ki.s,ac.s,t),r=ho(Ki.l,ac.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new Se;Se.NAMES=y0;let ev=0;class Jn extends fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=Kr,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$h,this.blendDst=ed,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=SA,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(i.blending=this.blending),this.side!==Gn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$h&&(i.blendSrc=this.blendSrc),this.blendDst!==ed&&(i.blendDst=this.blendDst),this.blendEquation!==Vs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ra&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==SA&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ui extends Jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=c0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new x,oc=new Me;let tv=0;class Ge{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Cd,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)oc.fromBufferAttribute(this,t),oc.applyMatrix3(e),this.setXY(t,oc.x,oc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cd&&(e.usage=this.usage),e}}class v0 extends Ge{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class M0 extends Ge{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class zt extends Ge{constructor(e,t,i){super(new Float32Array(e),t,i)}}let nv=0;const Pn=new xe,Uu=new Tt,Ir=new x,bn=new ei,Fa=new ei,Yt=new x;class Ze extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(x0(e)?M0:v0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ne().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,i){return Pn.makeTranslation(e,t,i),this.applyMatrix4(Pn),this}scale(e,t,i){return Pn.makeScale(e,t,i),this.applyMatrix4(Pn),this}lookAt(e){return Uu.lookAt(e),Uu.updateMatrix(),this.applyMatrix4(Uu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new zt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new x(-1/0,-1/0,-1/0),new x(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new x,1/0);return}if(e){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Fa.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(bn.min,Fa.min),bn.expandByPoint(Yt),Yt.addVectors(bn.max,Fa.max),bn.expandByPoint(Yt)):(bn.expandByPoint(Fa.min),bn.expandByPoint(Fa.max))}bn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Yt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Yt.fromBufferAttribute(o,l),c&&(Ir.fromBufferAttribute(e,l),Yt.add(Ir)),s=Math.max(s,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<i.count;U++)o[U]=new x,c[U]=new x;const l=new x,u=new x,h=new x,d=new Me,f=new Me,p=new Me,g=new x,m=new x;function A(U,y,v){l.fromBufferAttribute(i,U),u.fromBufferAttribute(i,y),h.fromBufferAttribute(i,v),d.fromBufferAttribute(r,U),f.fromBufferAttribute(r,y),p.fromBufferAttribute(r,v),u.sub(l),h.sub(l),f.sub(d),p.sub(d);const R=1/(f.x*p.y-p.x*f.y);isFinite(R)&&(g.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(R),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(R),o[U].add(g),o[y].add(g),o[v].add(g),c[U].add(m),c[y].add(m),c[v].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let U=0,y=E.length;U<y;++U){const v=E[U],R=v.start,b=v.count;for(let D=R,N=R+b;D<N;D+=3)A(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const _=new x,S=new x,w=new x,C=new x;function B(U){w.fromBufferAttribute(s,U),C.copy(w);const y=o[U];_.copy(y),_.sub(w.multiplyScalar(w.dot(y))).normalize(),S.crossVectors(C,y);const R=S.dot(c[U])<0?-1:1;a.setXYZW(U,_.x,_.y,_.z,R)}for(let U=0,y=E.length;U<y;++U){const v=E[U],R=v.start,b=v.count;for(let D=R,N=R+b;D<N;D+=3)B(e.getX(D+0)),B(e.getX(D+1)),B(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ge(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new x,r=new x,a=new x,o=new x,c=new x,l=new x,u=new x,h=new x;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,p),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,p=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?f=c[g]*o.data.stride+o.offset:f=c[g]*u;for(let A=0;A<u;A++)d[p++]=l[f++]}return new Ge(d,u,h)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ze,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,i);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const OA=new xe,Ls=new Is,cc=new Sn,kA=new x,lc=new x,uc=new x,hc=new x,Fu=new x,dc=new x,GA=new x,fc=new x;class Je extends Tt{constructor(e=new Ze,t=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){dc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(Fu.fromBufferAttribute(h,e),a?dc.addScaledVector(Fu,u):dc.addScaledVector(Fu.sub(t),u))}t.add(dc)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cc.copy(i.boundingSphere),cc.applyMatrix4(r),Ls.copy(e.ray).recast(e.near),!(cc.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(cc,kA)===null||Ls.origin.distanceToSquared(kA)>(e.far-e.near)**2))&&(OA.copy(r).invert(),Ls.copy(e.ray).applyMatrix4(OA),!(i.boundingBox!==null&&Ls.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ls)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,g=d.length;p<g;p++){const m=d[p],A=a[m.materialIndex],E=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=E,w=_;S<w;S+=3){const C=o.getX(S),B=o.getX(S+1),U=o.getX(S+2);s=Ac(this,A,e,i,l,u,h,C,B,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=p,A=g;m<A;m+=3){const E=o.getX(m),_=o.getX(m+1),S=o.getX(m+2);s=Ac(this,a,e,i,l,u,h,E,_,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,g=d.length;p<g;p++){const m=d[p],A=a[m.materialIndex],E=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let S=E,w=_;S<w;S+=3){const C=S,B=S+1,U=S+2;s=Ac(this,A,e,i,l,u,h,C,B,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=p,A=g;m<A;m+=3){const E=m,_=m+1,S=m+2;s=Ac(this,a,e,i,l,u,h,E,_,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function iv(n,e,t,i,s,r,a,o){let c;if(e.side===Vt?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===Gn,o),c===null)return null;fc.copy(o),fc.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(fc);return l<t.near||l>t.far?null:{distance:l,point:fc.clone(),object:n}}function Ac(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,lc),n.getVertexPosition(c,uc),n.getVertexPosition(l,hc);const u=iv(n,e,t,i,lc,uc,hc,GA);if(u){const h=new x;Rn.getBarycoord(GA,lc,uc,hc,h),s&&(u.uv=Rn.getInterpolatedAttribute(s,o,c,l,h,new Me)),r&&(u.uv1=Rn.getInterpolatedAttribute(r,o,c,l,h,new Me)),a&&(u.normal=Rn.getInterpolatedAttribute(a,o,c,l,h,new x),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new x,materialIndex:0};Rn.getNormal(lc,uc,hc,d.normal),u.face=d,u.barycoord=h}return u}class Es extends Ze{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,i,t,e,a,r,0),p("z","y","x",1,-1,i,t,-e,a,r,1),p("x","z","y",1,1,e,i,t,s,a,2),p("x","z","y",1,-1,e,i,-t,s,a,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(h,2));function p(g,m,A,E,_,S,w,C,B,U,y){const v=S/B,R=w/U,b=S/2,D=w/2,N=C/2,F=B+1,Q=U+1;let X=0,z=0;const j=new x;for(let ie=0;ie<Q;ie++){const te=ie*R-D;for(let pe=0;pe<F;pe++){const be=pe*v-b;j[g]=be*E,j[m]=te*_,j[A]=N,l.push(j.x,j.y,j.z),j[g]=0,j[m]=0,j[A]=C>0?1:-1,u.push(j.x,j.y,j.z),h.push(pe/B),h.push(1-ie/U),X+=1}}for(let ie=0;ie<U;ie++)for(let te=0;te<B;te++){const pe=d+te+F*ie,be=d+te+F*(ie+1),et=d+(te+1)+F*(ie+1),At=d+(te+1)+F*ie;c.push(pe,be,At),c.push(be,et,At),z+=6}o.addGroup(f,z,y),f+=z,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ua(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function dn(n){const e={};for(let t=0;t<n.length;t++){const i=ua(n[t]);for(const s in i)e[s]=i[s]}return e}function sv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function S0(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const rv={clone:ua,merge:dn};var av=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ov=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mt extends Jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=av,this.fragmentShader=ov,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ua(e.uniforms),this.uniformsGroups=sv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class C0 extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ji=new x,zA=new Me,HA=new Me;class Kt extends C0{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=la*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return la*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z)}getViewSize(e,t){return this.getViewBounds(e,zA,HA),t.subVectors(HA,zA)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(uo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const wr=-90,br=1;class I0 extends Tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Kt(wr,br,e,t);s.layers=this.layers,this.add(s);const r=new Kt(wr,br,e,t);r.layers=this.layers,this.add(r);const a=new Kt(wr,br,e,t);a.layers=this.layers,this.add(a);const o=new Kt(wr,br,e,t);o.layers=this.layers,this.add(o);const c=new Kt(wr,br,e,t);c.layers=this.layers,this.add(c);const l=new Kt(wr,br,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ll)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class w0 extends Gt{constructor(e=[],t=ar,i,s,r,a,o,c,l,u){super(e,t,i,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class b0 extends fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new w0(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Es(5,5,5),r=new Mt({name:"CubemapFromEquirect",uniforms:ua(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:Ni});r.uniforms.tEquirect.value=t;const a=new Je(s,r),o=t.minFilter;return t.minFilter===Yn&&(t.minFilter=bt),new I0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class Zt extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cv={type:"move"};class Nu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new x,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new x),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new x,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new x),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),A=this._getHandJoint(l,g);m!==null&&(A.matrix.fromArray(m.transform.matrix),A.matrix.decompose(A.position,A.rotation,A.scale),A.matrixWorldNeedsUpdate=!0,A.jointRadius=m.radius),A.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cv)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Zt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class gf extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class mf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cd,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const un=new x;class ha{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Pl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ge(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ha(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Pl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class T0 extends Jn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Tr;const Na=new x,Br=new x,Rr=new x,Dr=new Me,Qa=new Me,B0=new xe,pc=new x,Oa=new x,gc=new x,VA=new Me,Qu=new Me,WA=new Me;class lv extends Tt{constructor(e=new T0){if(super(),this.isSprite=!0,this.type="Sprite",Tr===void 0){Tr=new Ze;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new mf(t,5);Tr.setIndex([0,1,2,0,2,3]),Tr.setAttribute("position",new ha(i,3,0,!1)),Tr.setAttribute("uv",new ha(i,2,3,!1))}this.geometry=Tr,this.material=e,this.center=new Me(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ke('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Br.setFromMatrixScale(this.matrixWorld),B0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Br.multiplyScalar(-Rr.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;mc(pc.set(-.5,-.5,0),Rr,a,Br,s,r),mc(Oa.set(.5,-.5,0),Rr,a,Br,s,r),mc(gc.set(.5,.5,0),Rr,a,Br,s,r),VA.set(0,0),Qu.set(1,0),WA.set(1,1);let o=e.ray.intersectTriangle(pc,Oa,gc,!1,Na);if(o===null&&(mc(Oa.set(-.5,.5,0),Rr,a,Br,s,r),Qu.set(0,1),o=e.ray.intersectTriangle(pc,gc,Oa,!1,Na),o===null))return;const c=e.ray.origin.distanceTo(Na);c<e.near||c>e.far||t.push({distance:c,point:Na.clone(),uv:Rn.getInterpolation(Na,pc,Oa,gc,VA,Qu,WA,new Me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function mc(n,e,t,i,s,r){Dr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Qa.x=r*Dr.x-s*Dr.y,Qa.y=s*Dr.x+r*Dr.y):Qa.copy(Dr),n.copy(e),n.x+=Qa.x,n.y+=Qa.y,n.applyMatrix4(B0)}const qA=new x,XA=new ft,YA=new ft,uv=new x,KA=new xe,xc=new x,Ou=new Sn,JA=new xe,ku=new Is;class hv extends Je{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=EA,this.bindMatrix=new xe,this.bindMatrixInverse=new xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ei),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,xc),this.boundingBox.expandByPoint(xc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Sn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,xc),this.boundingSphere.expandByPoint(xc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ou.copy(this.boundingSphere),Ou.applyMatrix4(s),e.ray.intersectsSphere(Ou)!==!1&&(JA.copy(s).invert(),ku.copy(e.ray).applyMatrix4(JA),!(this.boundingBox!==null&&ku.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ku)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ft,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===EA?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===dy?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ie("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;XA.fromBufferAttribute(s.attributes.skinIndex,e),YA.fromBufferAttribute(s.attributes.skinWeight,e),qA.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=YA.getComponent(r);if(a!==0){const o=XA.getComponent(r);KA.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(uv.copy(qA).applyMatrix4(KA),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class R0 extends Tt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ma extends Gt{constructor(e=null,t=1,i=1,s,r,a,o,c,l=tn,u=tn,h,d){super(null,a,o,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ZA=new xe,dv=new xe;class xf{constructor(e=[],t=[]){this.uuid=Kn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ie("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new xe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:dv;ZA.multiplyMatrices(o,t[r]),ZA.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new xf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Ma(t,e,e,Jt,cn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let a=t[r];a===void 0&&(Ie("Skeleton: No bone found with UUID:",r),a=new R0),this.bones.push(a),this.boneInverses.push(new xe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=i[s];e.boneInverses.push(o.toArray())}return e}}class Id extends Ge{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Lr=new xe,jA=new xe,_c=[],$A=new ei,fv=new xe,ka=new Je,Ga=new Sn;class Av extends Je{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Id(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,fv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Lr),$A.copy(e.boundingBox).applyMatrix4(Lr),this.boundingBox.union($A)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Lr),Ga.copy(e.boundingSphere).applyMatrix4(Lr),this.boundingSphere.union(Ga)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(ka.geometry=this.geometry,ka.material=this.material,ka.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ga.copy(this.boundingSphere),Ga.applyMatrix4(i),e.ray.intersectsSphere(Ga)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Lr),jA.multiplyMatrices(i,Lr),ka.matrixWorld=jA,ka.raycast(e,_c);for(let a=0,o=_c.length;a<o;a++){const c=_c[a];c.instanceId=r,c.object=this,t.push(c)}_c.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Id(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ma(new Float32Array(s*this.count),s,this.count,cs,cn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Gu=new x,pv=new x,gv=new Ne;class ss{constructor(e=new x(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Gu.subVectors(i,t).cross(pv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Gu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||gv.getNormalMatrix(e),s=this.coplanarPoint(Gu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ps=new Sn,mv=new Me(.5,.5),Ec=new x;class _f{constructor(e=new ss,t=new ss,i=new ss,s=new ss,r=new ss,a=new ss){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=li,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],p=r[8],g=r[9],m=r[10],A=r[11],E=r[12],_=r[13],S=r[14],w=r[15];if(s[0].setComponents(l-a,f-u,A-p,w-E).normalize(),s[1].setComponents(l+a,f+u,A+p,w+E).normalize(),s[2].setComponents(l+o,f+h,A+g,w+_).normalize(),s[3].setComponents(l-o,f-h,A-g,w-_).normalize(),i)s[4].setComponents(c,d,m,S).normalize(),s[5].setComponents(l-c,f-d,A-m,w-S).normalize();else if(s[4].setComponents(l-c,f-d,A-m,w-S).normalize(),t===li)s[5].setComponents(l+c,f+d,A+m,w+S).normalize();else if(t===Ll)s[5].setComponents(c,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(e){Ps.center.set(0,0,0);const t=mv.distanceTo(e.center);return Ps.radius=.7071067811865476+t,Ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ec.x=s.normal.x>0?e.max.x:e.min.x,Ec.y=s.normal.y>0?e.max.y:e.min.y,Ec.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ws extends Jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ul=new x,Fl=new x,ep=new xe,za=new Is,yc=new Sn,zu=new x,tp=new x;class Sa extends Tt{constructor(e=new Ze,t=new ws){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ul.fromBufferAttribute(t,s-1),Fl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ul.distanceTo(Fl);e.setAttribute("lineDistance",new zt(i,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yc.copy(i.boundingSphere),yc.applyMatrix4(s),yc.radius+=r,e.ray.intersectsSphere(yc)===!1)return;ep.copy(s).invert(),za.copy(e.ray).applyMatrix4(ep);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,m=p-1;g<m;g+=l){const A=u.getX(g),E=u.getX(g+1),_=vc(this,e,za,c,A,E,g);_&&t.push(_)}if(this.isLineLoop){const g=u.getX(p-1),m=u.getX(f),A=vc(this,e,za,c,g,m,p-1);A&&t.push(A)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=f,m=p-1;g<m;g+=l){const A=vc(this,e,za,c,g,g+1,g);A&&t.push(A)}if(this.isLineLoop){const g=vc(this,e,za,c,p-1,f,p-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function vc(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(Ul.fromBufferAttribute(o,s),Fl.fromBufferAttribute(o,r),t.distanceSqToSegment(Ul,Fl,zu,tp)>i)return;zu.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(zu);if(!(l<e.near||l>e.far))return{distance:l,point:tp.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const np=new x,ip=new x;class Po extends Sa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)np.fromBufferAttribute(t,s),ip.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+np.distanceTo(ip);e.setAttribute("lineDistance",new zt(i,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ef extends Sa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class D0 extends Jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sp=new xe,wd=new Is,Mc=new Sn,Sc=new x;class xv extends Tt{constructor(e=new Ze,t=new D0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mc.copy(i.boundingSphere),Mc.applyMatrix4(s),Mc.radius+=r,e.ray.intersectsSphere(Mc)===!1)return;sp.copy(s).invert(),wd.copy(e.ray).applyMatrix4(sp);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,h=i.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let p=d,g=f;p<g;p++){const m=l.getX(p);Sc.fromBufferAttribute(h,m),rp(Sc,m,c,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let p=d,g=f;p<g;p++)Sc.fromBufferAttribute(h,p),rp(Sc,p,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function rp(n,e,t,i,s,r,a){const o=wd.distanceSqToPoint(n);if(o<t){const c=new x;wd.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Zl extends Gt{constructor(e,t,i,s,r,a,o,c,l,u,h,d){super(null,a,o,c,l,u,s,r,h,d),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class _v extends Zl{constructor(e,t,i,s,r,a){super(e,t,i,r,a),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=kn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class L0 extends Zl{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,ar),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Ev extends Gt{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class P0 extends Gt{constructor(e,t,i=or,s,r,a,o=tn,c=tn,l,u=Co,h=1){if(u!==Co&&u!==Io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Af(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class U0 extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yf extends Ze{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let p=0;const g=[],m=i/2;let A=0;E(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new zt(h,3)),this.setAttribute("normal",new zt(d,3)),this.setAttribute("uv",new zt(f,2));function E(){const S=new x,w=new x;let C=0;const B=(t-e)/i;for(let U=0;U<=r;U++){const y=[],v=U/r,R=v*(t-e)+e;for(let b=0;b<=s;b++){const D=b/s,N=D*c+o,F=Math.sin(N),Q=Math.cos(N);w.x=R*F,w.y=-v*i+m,w.z=R*Q,h.push(w.x,w.y,w.z),S.set(F,B,Q).normalize(),d.push(S.x,S.y,S.z),f.push(D,1-v),y.push(p++)}g.push(y)}for(let U=0;U<s;U++)for(let y=0;y<r;y++){const v=g[y][U],R=g[y+1][U],b=g[y+1][U+1],D=g[y][U+1];(e>0||y!==0)&&(u.push(v,R,D),C+=3),(t>0||y!==r-1)&&(u.push(R,b,D),C+=3)}l.addGroup(A,C,0),A+=C}function _(S){const w=p,C=new Me,B=new x;let U=0;const y=S===!0?e:t,v=S===!0?1:-1;for(let b=1;b<=s;b++)h.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),p++;const R=p;for(let b=0;b<=s;b++){const N=b/s*c+o,F=Math.cos(N),Q=Math.sin(N);B.x=y*Q,B.y=m*v,B.z=y*F,h.push(B.x,B.y,B.z),d.push(0,v,0),C.x=F*.5+.5,C.y=Q*.5*v+.5,f.push(C.x,C.y),p++}for(let b=0;b<s;b++){const D=w+b,N=R+b;S===!0?u.push(N,N+1,D):u.push(N+1,N,D),U+=3}l.addGroup(A,U,S===!0?1:2),A+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vf extends yf{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new vf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class F0{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ie("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);const u=i[s],d=i[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new Me:new x);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new x,s=[],r=[],a=[],o=new x,c=new xe;for(let f=0;f<=e;f++){const p=f/e;s[f]=this.getTangentAt(p,new x)}r[0]=new x,a[0]=new x;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(qe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(qe(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Mf(){let n=0,e=0,t=0,i=0;function s(r,a,o,c){n=r,e=o,t=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,h){let d=(a-r)/l-(o-r)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+h)+(c-o)/h;d*=u,f*=u,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const Cc=new x,Hu=new Mf,Vu=new Mf,Wu=new Mf;class yv extends F0{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new x){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(Cc.subVectors(s[0],s[1]).add(s[0]),l=Cc);const h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Cc.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Cc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);g<1e-4&&(g=1),p<1e-4&&(p=g),m<1e-4&&(m=g),Hu.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,p,g,m),Vu.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,p,g,m),Wu.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,p,g,m)}else this.curveType==="catmullrom"&&(Hu.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Vu.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Wu.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return i.set(Hu.calc(c),Vu.calc(c),Wu.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new x().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function vv(n,e){const t=1-n;return t*t*t*e}function Mv(n,e){const t=1-n;return 3*t*t*n*e}function Sv(n,e){return 3*(1-n)*n*n*e}function Cv(n,e){return n*n*n*e}function qu(n,e,t,i,s){return vv(n,e)+Mv(n,t)+Sv(n,i)+Cv(n,s)}class Iv extends F0{constructor(e=new x,t=new x,i=new x,s=new x){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new x){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(qu(e,s.x,r.x,a.x,o.x),qu(e,s.y,r.y,a.y,o.y),qu(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ys extends Ze{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,h=e/o,d=t/c,f=[],p=[],g=[],m=[];for(let A=0;A<u;A++){const E=A*d-a;for(let _=0;_<l;_++){const S=_*h-r;p.push(S,-E,0),g.push(0,0,1),m.push(_/o),m.push(1-A/c)}}for(let A=0;A<c;A++)for(let E=0;E<o;E++){const _=E+l*A,S=E+l*(A+1),w=E+1+l*(A+1),C=E+1+l*A;f.push(_,S,C),f.push(S,w,C)}this.setIndex(f),this.setAttribute("position",new zt(p,3)),this.setAttribute("normal",new zt(g,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.width,e.height,e.widthSegments,e.heightSegments)}}class Sf extends Ze{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let h=e;const d=(t-e)/s,f=new x,p=new Me;for(let g=0;g<=s;g++){for(let m=0;m<=i;m++){const A=r+m/i*a;f.x=h*Math.cos(A),f.y=h*Math.sin(A),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let g=0;g<s;g++){const m=g*(i+1);for(let A=0;A<i;A++){const E=A+m,_=E,S=E+i+1,w=E+i+2,C=E+1;o.push(_,S,C),o.push(S,w,C)}}this.setIndex(o),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(l,3)),this.setAttribute("uv",new zt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ki extends Ze{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new x,d=new x,f=[],p=[],g=[],m=[];for(let A=0;A<=i;A++){const E=[],_=A/i;let S=0;A===0&&a===0?S=.5/t:A===i&&c===Math.PI&&(S=-.5/t);for(let w=0;w<=t;w++){const C=w/t;h.x=-e*Math.cos(s+C*r)*Math.sin(a+_*o),h.y=e*Math.cos(a+_*o),h.z=e*Math.sin(s+C*r)*Math.sin(a+_*o),p.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),m.push(C+S,1-_),E.push(l++)}u.push(E)}for(let A=0;A<i;A++)for(let E=0;E<t;E++){const _=u[A][E+1],S=u[A][E],w=u[A+1][E],C=u[A+1][E+1];(A!==0||a>0)&&f.push(_,S,C),(A!==i-1||c<Math.PI)&&f.push(S,w,C)}this.setIndex(f),this.setAttribute("position",new zt(p,3)),this.setAttribute("normal",new zt(g,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Gi extends Jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=g0,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mi extends Gi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class N0 extends Jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=py,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wv extends Jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class bv extends ws{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Ic(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Tv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Bv(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function ap(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){const o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=n[o+c]}return s}function Q0(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}class Vo{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Rv extends Vo{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yA,endingEnd:yA}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case vA:r=e,o=2*t-i;break;case MA:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case vA:a=e,c=2*i-t;break;case MA:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}const l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-t)/(s-t),g=p*p,m=g*p,A=-d*m+2*d*g-d*p,E=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*p+1,_=(-1-f)*m+(1.5+f)*g+.5*p,S=f*m-f*g;for(let w=0;w!==o;++w)r[w]=A*a[u+w]+E*a[l+w]+_*a[c+w]+S*a[h+w];return r}}class Dv extends Vo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(i-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[l+d]*h+a[c+d]*u;return r}}class Lv extends Vo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class ti{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ic(t,this.TimeBufferType),this.values=Ic(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ic(e.times,Array),values:Ic(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Lv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Dv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Bo:t=this.InterpolantFactoryMethodDiscrete;break;case Ro:t=this.InterpolantFactoryMethodLinear;break;case gu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ie("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bo;case this.InterpolantFactoryMethodLinear:return Ro;case this.InterpolantFactoryMethodSmooth:return gu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ke("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(Ke("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=i[o];if(typeof c=="number"&&isNaN(c)){Ke("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ke("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Tv(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){Ke("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===gu,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{const h=o*i,d=h-i,f=h+i;for(let p=0;p!==i;++p){const g=t[h+p];if(g!==t[d+p]||g!==t[f+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}ti.prototype.ValueTypeName="";ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=Ro;class Ca extends ti{constructor(e,t,i){super(e,t,i)}}Ca.prototype.ValueTypeName="bool";Ca.prototype.ValueBufferType=Array;Ca.prototype.DefaultInterpolation=Bo;Ca.prototype.InterpolantFactoryMethodLinear=void 0;Ca.prototype.InterpolantFactoryMethodSmooth=void 0;class O0 extends ti{constructor(e,t,i,s){super(e,t,i,s)}}O0.prototype.ValueTypeName="color";class da extends ti{constructor(e,t,i,s){super(e,t,i,s)}}da.prototype.ValueTypeName="number";class Pv extends Vo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t);let l=e*o;for(let u=l+o;l!==u;l+=4)ot.slerpFlat(r,0,a,l-o,a,l,c);return r}}class fa extends ti{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Pv(this.times,this.values,this.getValueSize(),e)}}fa.prototype.ValueTypeName="quaternion";fa.prototype.InterpolantFactoryMethodSmooth=void 0;class Ia extends ti{constructor(e,t,i){super(e,t,i)}}Ia.prototype.ValueTypeName="string";Ia.prototype.ValueBufferType=Array;Ia.prototype.DefaultInterpolation=Bo;Ia.prototype.InterpolantFactoryMethodLinear=void 0;Ia.prototype.InterpolantFactoryMethodSmooth=void 0;class Aa extends ti{constructor(e,t,i,s){super(e,t,i,s)}}Aa.prototype.ValueTypeName="vector";class Uv{constructor(e="",t=-1,i=[],s=fy){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Kn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(Nv(i[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(ti.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const u=Bv(c);c=ap(c,1,u),l=ap(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new da(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}static parseAnimation(e,t){if(Ie("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ke("AnimationClip: No animation in JSONLoader data."),null;const i=function(h,d,f,p,g){if(f.length!==0){const m=[],A=[];Q0(f,m,A,p),m.length!==0&&g.push(new h(d,m,A))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let g=0;g<d[p].morphTargets.length;g++)f[d[p].morphTargets[g]]=-1;for(const g in f){const m=[],A=[];for(let E=0;E!==d[p].morphTargets.length;++E){const _=d[p];m.push(_.time),A.push(_.morphTarget===g?1:0)}s.push(new da(".morphTargetInfluence["+g+"]",m,A))}c=f.length*a}else{const f=".bones["+t[h].name+"]";i(Aa,f+".position",d,"pos",s),i(fa,f+".quaternion",d,"rot",s),i(Aa,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Fv(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return da;case"vector":case"vector2":case"vector3":case"vector4":return Aa;case"color":return O0;case"quaternion":return fa;case"bool":case"boolean":return Ca;case"string":return Ia}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Nv(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Fv(n.type);if(n.times===void 0){const t=[],i=[];Q0(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Di={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class k0{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],p=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Qv=new k0;class bs{constructor(e){this.manager=e!==void 0?e:Qv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}bs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Mi={};class Ov extends Error{constructor(e,t){super(e),this.response=t}}class nr extends bs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Di.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Mi[e]!==void 0){Mi[e].push({onLoad:t,onProgress:i,onError:s});return}Mi[e]=[],Mi[e].push({onLoad:t,onProgress:i,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ie("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Mi[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let g=0;const m=new ReadableStream({start(A){E();function E(){h.read().then(({done:_,value:S})=>{if(_)A.close();else{g+=S.byteLength;const w=new ProgressEvent("progress",{lengthComputable:p,loaded:g,total:f});for(let C=0,B=u.length;C<B;C++){const U=u[C];U.onProgress&&U.onProgress(w)}A.enqueue(S),E()}},_=>{A.error(_)})}}});return new Response(m)}else throw new Ov(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{Di.add(`file:${e}`,l);const u=Mi[e];delete Mi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=Mi[e];if(u===void 0)throw this.manager.itemError(e),l;delete Mi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Pr=new WeakMap;class kv extends bs{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Di.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=Pr.get(a);h===void 0&&(h=[],Pr.set(a,h)),h.push({onLoad:t,onError:s})}return a}const o=Do("img");function c(){u(),t&&t(this);const h=Pr.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}Pr.delete(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),Di.remove(`image:${e}`);const d=Pr.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onError&&p.onError(h)}Pr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Di.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class G0 extends bs{constructor(e){super(e)}load(e,t,i,s){const r=new Gt,a=new kv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class jl extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Xu=new xe,op=new x,cp=new x;class Cf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=Ye,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _f,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;op.setFromMatrixPosition(e.matrixWorld),t.position.copy(op),cp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cp),t.updateMatrixWorld(),Xu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xu,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Gv extends Cf{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=la*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class z0 extends jl{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Gv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const lp=new xe,Ha=new x,Yu=new x;class zv extends Cf{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new x(1,0,0),new x(-1,0,0),new x(0,0,1),new x(0,0,-1),new x(0,1,0),new x(0,-1,0)],this._cubeUps=[new x(0,1,0),new x(0,1,0),new x(0,1,0),new x(0,1,0),new x(0,0,1),new x(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ha.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ha),Yu.copy(i.position),Yu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Yu),i.updateMatrixWorld(),s.makeTranslation(-Ha.x,-Ha.y,-Ha.z),lp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lp,i.coordinateSystem,i.reversedDepth)}}class H0 extends jl{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new zv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class If extends C0{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Hv extends Cf{constructor(){super(new If(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class V0 extends jl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Hv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Vv extends jl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class fo{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ku=new WeakMap;class Wv extends bs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ie("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ie("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Di.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(Ku.has(a)===!0)s&&s(Ku.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Di.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Ku.set(c,l),Di.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Di.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class qv extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Xv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const wf="\\[\\]\\.:\\/",Yv=new RegExp("["+wf+"]","g"),bf="[^"+wf+"]",Kv="[^"+wf.replace("\\.","")+"]",Jv=/((?:WC+[\/:])*)/.source.replace("WC",bf),Zv=/(WCOD+)?/.source.replace("WCOD",Kv),jv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bf),$v=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bf),eM=new RegExp("^"+Jv+Zv+jv+$v+"$"),tM=["material","materials","bones","map"];class nM{constructor(e,t,i){const s=i||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class gt{constructor(e,t,i){this.path=t,this.parsedPath=i||gt.parseTrackName(t),this.node=gt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new gt.Composite(e,t,i):new gt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yv,"")}static parseTrackName(e){const t=eM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);tM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=gt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[s];if(a===void 0){const l=t.nodeName;Ke("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}gt.Composite=nM;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const up=new xe;class $l{constructor(e,t,i=0,s=1/0){this.ray=new Is(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new pf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ke("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return up.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(up),this}intersectObject(e,t=!0,i=[]){return bd(e,this,i,t),i.sort(hp),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)bd(e[s],this,i,t);return i.sort(hp),i}}function hp(n,e){return n.distance-e.distance}function bd(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)bd(r[a],e,t,!0)}}class dp{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class iM extends Po{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Ze;s.setAttribute("position",new zt(t,3)),s.setAttribute("color",new zt(i,3));const r=new ws({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,i){const s=new Se,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(i),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class sM extends fr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ie("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function fp(n,e,t,i){const s=rM(i);switch(t){case f0:return n*e;case cs:return n*e/s.components*s.byteLength;case uf:return n*e/s.components*s.byteLength;case ls:return n*e*2/s.components*s.byteLength;case hf:return n*e*2/s.components*s.byteLength;case So:return n*e*3/s.components*s.byteLength;case Jt:return n*e*4/s.components*s.byteLength;case df:return n*e*4/s.components*s.byteLength;case Jr:case er:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zr:case lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ud:case wo:return Math.max(n,16)*Math.max(e,8)/4;case Cl:case oa:return Math.max(n,8)*Math.max(e,8)/2;case Il:case bo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case To:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case dd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case fd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case jr:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ad:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case pd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case gd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case md:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case xd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case _d:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ed:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case yd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case vd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ca:case Md:case wl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case bl:case Tl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Bl:case Rl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rM(n){switch(n){case Ye:case h0:return{byteLength:1,components:1};case vo:case d0:case Bn:return{byteLength:2,components:1};case cf:case lf:return{byteLength:2,components:4};case or:case of:case cn:return{byteLength:4,components:1};case Kl:case Jl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"181"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="181");function W0(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function aM(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,o),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){const p=h[d],g=h[f];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++d,h[d]=g)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){const g=h[f];n.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var oM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,AM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_M=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,EM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,TM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,BM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,RM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,DM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,LM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NM="gl_FragColor = linearToOutputTexel( gl_FragColor );",QM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,GM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,VM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,KM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$M=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,eS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,aS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_S=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ES=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,MS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,CS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,IS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,BS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,DS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,US=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,FS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,HS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,VS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,WS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,YS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,JS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$S=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,AC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_C=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,CC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,RC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,UC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,QC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:oM,alphahash_pars_fragment:cM,alphamap_fragment:lM,alphamap_pars_fragment:uM,alphatest_fragment:hM,alphatest_pars_fragment:dM,aomap_fragment:fM,aomap_pars_fragment:AM,batching_pars_vertex:pM,batching_vertex:gM,begin_vertex:mM,beginnormal_vertex:xM,bsdfs:_M,iridescence_fragment:EM,bumpmap_pars_fragment:yM,clipping_planes_fragment:vM,clipping_planes_pars_fragment:MM,clipping_planes_pars_vertex:SM,clipping_planes_vertex:CM,color_fragment:IM,color_pars_fragment:wM,color_pars_vertex:bM,color_vertex:TM,common:BM,cube_uv_reflection_fragment:RM,defaultnormal_vertex:DM,displacementmap_pars_vertex:LM,displacementmap_vertex:PM,emissivemap_fragment:UM,emissivemap_pars_fragment:FM,colorspace_fragment:NM,colorspace_pars_fragment:QM,envmap_fragment:OM,envmap_common_pars_fragment:kM,envmap_pars_fragment:GM,envmap_pars_vertex:zM,envmap_physical_pars_fragment:$M,envmap_vertex:HM,fog_vertex:VM,fog_pars_vertex:WM,fog_fragment:qM,fog_pars_fragment:XM,gradientmap_pars_fragment:YM,lightmap_pars_fragment:KM,lights_lambert_fragment:JM,lights_lambert_pars_fragment:ZM,lights_pars_begin:jM,lights_toon_fragment:eS,lights_toon_pars_fragment:tS,lights_phong_fragment:nS,lights_phong_pars_fragment:iS,lights_physical_fragment:sS,lights_physical_pars_fragment:rS,lights_fragment_begin:aS,lights_fragment_maps:oS,lights_fragment_end:cS,logdepthbuf_fragment:lS,logdepthbuf_pars_fragment:uS,logdepthbuf_pars_vertex:hS,logdepthbuf_vertex:dS,map_fragment:fS,map_pars_fragment:AS,map_particle_fragment:pS,map_particle_pars_fragment:gS,metalnessmap_fragment:mS,metalnessmap_pars_fragment:xS,morphinstance_vertex:_S,morphcolor_vertex:ES,morphnormal_vertex:yS,morphtarget_pars_vertex:vS,morphtarget_vertex:MS,normal_fragment_begin:SS,normal_fragment_maps:CS,normal_pars_fragment:IS,normal_pars_vertex:wS,normal_vertex:bS,normalmap_pars_fragment:TS,clearcoat_normal_fragment_begin:BS,clearcoat_normal_fragment_maps:RS,clearcoat_pars_fragment:DS,iridescence_pars_fragment:LS,opaque_fragment:PS,packing:US,premultiplied_alpha_fragment:FS,project_vertex:NS,dithering_fragment:QS,dithering_pars_fragment:OS,roughnessmap_fragment:kS,roughnessmap_pars_fragment:GS,shadowmap_pars_fragment:zS,shadowmap_pars_vertex:HS,shadowmap_vertex:VS,shadowmask_pars_fragment:WS,skinbase_vertex:qS,skinning_pars_vertex:XS,skinning_vertex:YS,skinnormal_vertex:KS,specularmap_fragment:JS,specularmap_pars_fragment:ZS,tonemapping_fragment:jS,tonemapping_pars_fragment:$S,transmission_fragment:eC,transmission_pars_fragment:tC,uv_pars_fragment:nC,uv_pars_vertex:iC,uv_vertex:sC,worldpos_vertex:rC,background_vert:aC,background_frag:oC,backgroundCube_vert:cC,backgroundCube_frag:lC,cube_vert:uC,cube_frag:hC,depth_vert:dC,depth_frag:fC,distanceRGBA_vert:AC,distanceRGBA_frag:pC,equirect_vert:gC,equirect_frag:mC,linedashed_vert:xC,linedashed_frag:_C,meshbasic_vert:EC,meshbasic_frag:yC,meshlambert_vert:vC,meshlambert_frag:MC,meshmatcap_vert:SC,meshmatcap_frag:CC,meshnormal_vert:IC,meshnormal_frag:wC,meshphong_vert:bC,meshphong_frag:TC,meshphysical_vert:BC,meshphysical_frag:RC,meshtoon_vert:DC,meshtoon_frag:LC,points_vert:PC,points_frag:UC,shadow_vert:FC,shadow_frag:NC,sprite_vert:QC,sprite_frag:OC},ue={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},ai={basic:{uniforms:dn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:dn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Se(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:dn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:dn([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:dn([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Se(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:dn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:dn([ue.points,ue.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:dn([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:dn([ue.common,ue.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:dn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:dn([ue.sprite,ue.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:dn([ue.common,ue.displacementmap,{referencePosition:{value:new x},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:dn([ue.lights,ue.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};ai.physical={uniforms:dn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const wc={r:0,b:0,g:0},Us=new Ai,kC=new xe;function GC(n,e,t,i,s,r,a){const o=new Se(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function p(_){let S=_.isScene===!0?_.background:null;return S&&S.isTexture&&(S=(_.backgroundBlurriness>0?t:e).get(S)),S}function g(_){let S=!1;const w=p(_);w===null?A(o,c):w&&w.isColor&&(A(w,1),S=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(_,S){const w=p(S);w&&(w.isCubeTexture||w.mapping===Yl)?(u===void 0&&(u=new Je(new Es(1,1,1),new Mt({name:"BackgroundCubeMaterial",uniforms:ua(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,B,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Us.copy(S.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(kC.makeRotationFromEuler(Us)),u.material.toneMapped=rt.getTransfer(w.colorSpace)!==_t,(h!==w||d!==w.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=w,d=w.version,f=n.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Je(new ys(2,2),new Mt({name:"BackgroundMaterial",uniforms:ua(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=rt.getTransfer(w.colorSpace)!==_t,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||d!==w.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=w,d=w.version,f=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function A(_,S){_.getRGB(wc,S0(n)),i.buffers.color.setClear(wc.r,wc.g,wc.b,S,a)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,S=1){o.set(_),c=S,A(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,A(o,c)},render:g,addToRenderList:m,dispose:E}}function zC(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(v,R,b,D,N){let F=!1;const Q=h(D,b,R);r!==Q&&(r=Q,l(r.object)),F=f(v,D,b,N),F&&p(v,D,b,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,S(v,R,b,D),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return n.createVertexArray()}function l(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function h(v,R,b){const D=b.wireframe===!0;let N=i[v.id];N===void 0&&(N={},i[v.id]=N);let F=N[R.id];F===void 0&&(F={},N[R.id]=F);let Q=F[D];return Q===void 0&&(Q=d(c()),F[D]=Q),Q}function d(v){const R=[],b=[],D=[];for(let N=0;N<t;N++)R[N]=0,b[N]=0,D[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:b,attributeDivisors:D,object:v,attributes:{},index:null}}function f(v,R,b,D){const N=r.attributes,F=R.attributes;let Q=0;const X=b.getAttributes();for(const z in X)if(X[z].location>=0){const ie=N[z];let te=F[z];if(te===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(te=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(te=v.instanceColor)),ie===void 0||ie.attribute!==te||te&&ie.data!==te.data)return!0;Q++}return r.attributesNum!==Q||r.index!==D}function p(v,R,b,D){const N={},F=R.attributes;let Q=0;const X=b.getAttributes();for(const z in X)if(X[z].location>=0){let ie=F[z];ie===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(ie=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(ie=v.instanceColor));const te={};te.attribute=ie,ie&&ie.data&&(te.data=ie.data),N[z]=te,Q++}r.attributes=N,r.attributesNum=Q,r.index=D}function g(){const v=r.newAttributes;for(let R=0,b=v.length;R<b;R++)v[R]=0}function m(v){A(v,0)}function A(v,R){const b=r.newAttributes,D=r.enabledAttributes,N=r.attributeDivisors;b[v]=1,D[v]===0&&(n.enableVertexAttribArray(v),D[v]=1),N[v]!==R&&(n.vertexAttribDivisor(v,R),N[v]=R)}function E(){const v=r.newAttributes,R=r.enabledAttributes;for(let b=0,D=R.length;b<D;b++)R[b]!==v[b]&&(n.disableVertexAttribArray(b),R[b]=0)}function _(v,R,b,D,N,F,Q){Q===!0?n.vertexAttribIPointer(v,R,b,N,F):n.vertexAttribPointer(v,R,b,D,N,F)}function S(v,R,b,D){g();const N=D.attributes,F=b.getAttributes(),Q=R.defaultAttributeValues;for(const X in F){const z=F[X];if(z.location>=0){let j=N[X];if(j===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(j=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(j=v.instanceColor)),j!==void 0){const ie=j.normalized,te=j.itemSize,pe=e.get(j);if(pe===void 0)continue;const be=pe.buffer,et=pe.type,At=pe.bytesPerElement,K=et===n.INT||et===n.UNSIGNED_INT||j.gpuType===of;if(j.isInterleavedBufferAttribute){const ee=j.data,me=ee.stride,We=j.offset;if(ee.isInstancedInterleavedBuffer){for(let Te=0;Te<z.locationSize;Te++)A(z.location+Te,ee.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Te=0;Te<z.locationSize;Te++)m(z.location+Te);n.bindBuffer(n.ARRAY_BUFFER,be);for(let Te=0;Te<z.locationSize;Te++)_(z.location+Te,te/z.locationSize,et,ie,me*At,(We+te/z.locationSize*Te)*At,K)}else{if(j.isInstancedBufferAttribute){for(let ee=0;ee<z.locationSize;ee++)A(z.location+ee,j.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ee=0;ee<z.locationSize;ee++)m(z.location+ee);n.bindBuffer(n.ARRAY_BUFFER,be);for(let ee=0;ee<z.locationSize;ee++)_(z.location+ee,te/z.locationSize,et,ie,te*At,te/z.locationSize*ee*At,K)}}else if(Q!==void 0){const ie=Q[X];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(z.location,ie);break;case 3:n.vertexAttrib3fv(z.location,ie);break;case 4:n.vertexAttrib4fv(z.location,ie);break;default:n.vertexAttrib1fv(z.location,ie)}}}}E()}function w(){U();for(const v in i){const R=i[v];for(const b in R){const D=R[b];for(const N in D)u(D[N].object),delete D[N];delete R[b]}delete i[v]}}function C(v){if(i[v.id]===void 0)return;const R=i[v.id];for(const b in R){const D=R[b];for(const N in D)u(D[N].object),delete D[N];delete R[b]}delete i[v.id]}function B(v){for(const R in i){const b=i[R];if(b[v.id]===void 0)continue;const D=b[v.id];for(const N in D)u(D[N].object),delete D[N];delete b[v.id]}}function U(){y(),a=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:B,initAttributes:g,enableAttribute:m,disableUnusedAttributes:E}}function HC(n,e,t){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let p=0;p<h;p++)f+=u[p];t.update(f,i,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<l.length;p++)a(l[p],u[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g]*d[g];t.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function VC(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(B){return!(B!==Jt&&i.convert(B)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(B){const U=B===Bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Ye&&i.convert(B)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==cn&&!U)}function c(B){if(B==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ie("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),A=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=p>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:A,maxVertexUniforms:E,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:w,maxSamples:C}}function WC(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new ss,o=new Ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const p=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,A=n.get(h);if(!s||p===null||p.length===0||r&&!m)r?u(null):l();else{const E=r?0:i,_=E*4;let S=A.clippingState||null;c.value=S,S=u(p,d,_,f);for(let w=0;w!==_;++w)S[w]=t[w];A.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,p){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=c.value,p!==!0||m===null){const A=f+g*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<A)&&(m=new Float32Array(A));for(let _=0,S=f;_!==g;++_,S+=4)a.copy(h[_]).applyMatrix4(E,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function qC(n){let e=new WeakMap;function t(a,o){return o===cd?a.mapping=ar:o===ld&&(a.mapping=aa),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===cd||o===ld)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new b0(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const us=4,Ap=[.125,.215,.35,.446,.526,.582],Ws=20,XC=256,Va=new If,pp=new Se;let Ju=null,Zu=0,ju=0,$u=!1;const YC=new x;class gp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=YC}=r;Ju=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),ju=this._renderer.getActiveMipmapLevel(),$u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_p(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ju,Zu,ju),this._renderer.xr.enabled=$u,e.scissorTest=!1,Ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ar||e.mapping===aa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ju=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),ju=this._renderer.getActiveMipmapLevel(),$u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:bt,minFilter:bt,generateMipmaps:!1,type:Bn,format:Jt,colorSpace:sn,depthBuffer:!1},s=mp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mp(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=KC(r)),this._blurMaterial=ZC(r,e,t),this._ggxMaterial=JC(r,e,t)}return s}_compileMaterial(e){const t=new Je(new Ze,e);this._renderer.compile(t,Va)}_sceneToCubeUV(e,t,i,s,r){const c=new Kt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(pp),h.toneMapping=gs,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Je(new Es,new ui({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let A=!1;const E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,A=!0):(m.color.copy(pp),A=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[_],r.y,r.z)):S===1?(c.up.set(0,0,l[_]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[_],r.z)):(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[_]));const w=this._cubeSize;Ur(s,S*w,_>2?w:0,w,w),h.setRenderTarget(s),A&&h.render(g,c),h.render(e,c)}h.toneMapping=f,h.autoClear=d,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ar||e.mapping===aa;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_p()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xp());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Ur(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Va)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=.05+l*.95,f=h*d,{_lodMax:p}=this,g=this._sizeLods[i],m=3*g*(i>p-us?i-p+us:0),A=4*(this._cubeSize-g);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=p-t,Ur(r,m,A,3*g,2*g),s.setRenderTarget(r),s.render(o,Va),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-i,Ur(e,m,A,3*g,2*g),s.setRenderTarget(e),s.render(o,Va)}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=l;const d=l.uniforms,f=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ws-1),g=r/p,m=isFinite(r)?1+Math.floor(u*g):Ws;m>Ws&&Ie(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ws}`);const A=[];let E=0;for(let B=0;B<Ws;++B){const U=B/g,y=Math.exp(-U*U/2);A.push(y),B===0?E+=y:B<m&&(E+=2*y)}for(let B=0;B<A.length;B++)A[B]=A[B]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=A,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=p,d.mipInt.value=_-i;const S=this._sizeLods[s],w=3*S*(s>_-us?s-_+us:0),C=4*(this._cubeSize-S);Ur(t,w,C,3*S,2*S),c.setRenderTarget(t),c.render(h,Va)}}function KC(n){const e=[],t=[],i=[];let s=n;const r=n-us+1+Ap.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>n-us?c=Ap[a-n+us-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,g=3,m=2,A=1,E=new Float32Array(g*p*f),_=new Float32Array(m*p*f),S=new Float32Array(A*p*f);for(let C=0;C<f;C++){const B=C%3*2/3-1,U=C>2?0:-1,y=[B,U,0,B+2/3,U,0,B+2/3,U+1,0,B,U,0,B+2/3,U+1,0,B,U+1,0];E.set(y,g*p*C),_.set(d,m*p*C);const v=[C,C,C,C,C,C];S.set(v,A*p*C)}const w=new Ze;w.setAttribute("position",new Ge(E,g)),w.setAttribute("uv",new Ge(_,m)),w.setAttribute("faceIndex",new Ge(S,A)),i.push(new Je(w,null)),s>us&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function mp(n,e,t){const i=new fi(n,e,t);return i.texture.mapping=Yl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ur(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function JC(n,e,t){return new Mt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:XC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:eu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function ZC(n,e,t){const i=new Float32Array(Ws),s=new x(0,1,0);return new Mt({name:"SphericalGaussianBlur",defines:{n:Ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function xp(){return new Mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function _p(){return new Mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function eu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jC(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===cd||c===ld,u=c===ar||c===aa;if(l||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new gp(n)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return l&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new gp(n)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function $C(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Lo("WebGLRenderer: "+i+" extension not supported."),s}}}function eI(n,e,t,i){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function l(h){const d=[],f=h.index,p=h.attributes.position;let g=0;if(f!==null){const E=f.array;g=f.version;for(let _=0,S=E.length;_<S;_+=3){const w=E[_+0],C=E[_+1],B=E[_+2];d.push(w,C,C,B,B,w)}}else if(p!==void 0){const E=p.array;g=p.version;for(let _=0,S=E.length/3-1;_<S;_+=3){const w=_+0,C=_+1,B=_+2;d.push(w,C,C,B,B,w)}}else return;const m=new(x0(d)?M0:v0)(d,1);m.version=g;const A=r.get(h);A&&e.remove(A),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function tI(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){n.drawElements(i,f,r,d*a),t.update(f,i,1)}function l(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,r,d*a,p),t.update(f,i,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,p);let m=0;for(let A=0;A<p;A++)m+=f[A];t.update(m,i,1)}function h(d,f,p,g){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let A=0;A<d.length;A++)l(d[A]/a,f[A],g[A]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,g,0,p);let A=0;for(let E=0;E<p;E++)A+=f[E]*g[E];t.update(A,i,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function nI(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ke("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function iI(n,e,t){const i=new WeakMap,s=new ft;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let y=function(){B.dispose(),i.delete(o),o.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let _=0;f===!0&&(_=1),p===!0&&(_=2),g===!0&&(_=3);let S=o.attributes.position.count*_,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const C=new Float32Array(S*w*4*h),B=new _0(C,S,w,h);B.type=cn,B.needsUpdate=!0;const U=_*4;for(let v=0;v<h;v++){const R=m[v],b=A[v],D=E[v],N=S*w*4*v;for(let F=0;F<R.count;F++){const Q=F*U;f===!0&&(s.fromBufferAttribute(R,F),C[N+Q+0]=s.x,C[N+Q+1]=s.y,C[N+Q+2]=s.z,C[N+Q+3]=0),p===!0&&(s.fromBufferAttribute(b,F),C[N+Q+4]=s.x,C[N+Q+5]=s.y,C[N+Q+6]=s.z,C[N+Q+7]=0),g===!0&&(s.fromBufferAttribute(D,F),C[N+Q+8]=s.x,C[N+Q+9]=s.y,C[N+Q+10]=s.z,C[N+Q+11]=D.itemSize===4?s.w:1)}}d={count:h,texture:B,size:new Me(S,w)},i.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let g=0;g<l.length;g++)f+=l[g];const p=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",p),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function sI(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const q0=new Gt,Ep=new P0(1,1),X0=new _0,Y0=new E0,K0=new w0,yp=[],vp=[],Mp=new Float32Array(16),Sp=new Float32Array(9),Cp=new Float32Array(4);function wa(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=yp[s];if(r===void 0&&(r=new Float32Array(s),yp[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function tu(n,e){let t=vp[e];t===void 0&&(t=new Int32Array(e),vp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function rI(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function aI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2fv(this.addr,e),Xt(t,e)}}function oI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;n.uniform3fv(this.addr,e),Xt(t,e)}}function cI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4fv(this.addr,e),Xt(t,e)}}function lI(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,i))return;Cp.set(i),n.uniformMatrix2fv(this.addr,!1,Cp),Xt(t,i)}}function uI(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,i))return;Sp.set(i),n.uniformMatrix3fv(this.addr,!1,Sp),Xt(t,i)}}function hI(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,i))return;Mp.set(i),n.uniformMatrix4fv(this.addr,!1,Mp),Xt(t,i)}}function dI(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function fI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2iv(this.addr,e),Xt(t,e)}}function AI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3iv(this.addr,e),Xt(t,e)}}function pI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4iv(this.addr,e),Xt(t,e)}}function gI(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function mI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2uiv(this.addr,e),Xt(t,e)}}function xI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3uiv(this.addr,e),Xt(t,e)}}function _I(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4uiv(this.addr,e),Xt(t,e)}}function EI(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ep.compareFunction=m0,r=Ep):r=q0,t.setTexture2D(e||r,s)}function yI(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Y0,s)}function vI(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||K0,s)}function MI(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||X0,s)}function SI(n){switch(n){case 5126:return rI;case 35664:return aI;case 35665:return oI;case 35666:return cI;case 35674:return lI;case 35675:return uI;case 35676:return hI;case 5124:case 35670:return dI;case 35667:case 35671:return fI;case 35668:case 35672:return AI;case 35669:case 35673:return pI;case 5125:return gI;case 36294:return mI;case 36295:return xI;case 36296:return _I;case 35678:case 36198:case 36298:case 36306:case 35682:return EI;case 35679:case 36299:case 36307:return yI;case 35680:case 36300:case 36308:case 36293:return vI;case 36289:case 36303:case 36311:case 36292:return MI}}function CI(n,e){n.uniform1fv(this.addr,e)}function II(n,e){const t=wa(e,this.size,2);n.uniform2fv(this.addr,t)}function wI(n,e){const t=wa(e,this.size,3);n.uniform3fv(this.addr,t)}function bI(n,e){const t=wa(e,this.size,4);n.uniform4fv(this.addr,t)}function TI(n,e){const t=wa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function BI(n,e){const t=wa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function RI(n,e){const t=wa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function DI(n,e){n.uniform1iv(this.addr,e)}function LI(n,e){n.uniform2iv(this.addr,e)}function PI(n,e){n.uniform3iv(this.addr,e)}function UI(n,e){n.uniform4iv(this.addr,e)}function FI(n,e){n.uniform1uiv(this.addr,e)}function NI(n,e){n.uniform2uiv(this.addr,e)}function QI(n,e){n.uniform3uiv(this.addr,e)}function OI(n,e){n.uniform4uiv(this.addr,e)}function kI(n,e,t){const i=this.cache,s=e.length,r=tu(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||q0,r[a])}function GI(n,e,t){const i=this.cache,s=e.length,r=tu(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Y0,r[a])}function zI(n,e,t){const i=this.cache,s=e.length,r=tu(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||K0,r[a])}function HI(n,e,t){const i=this.cache,s=e.length,r=tu(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||X0,r[a])}function VI(n){switch(n){case 5126:return CI;case 35664:return II;case 35665:return wI;case 35666:return bI;case 35674:return TI;case 35675:return BI;case 35676:return RI;case 5124:case 35670:return DI;case 35667:case 35671:return LI;case 35668:case 35672:return PI;case 35669:case 35673:return UI;case 5125:return FI;case 36294:return NI;case 36295:return QI;case 36296:return OI;case 35678:case 36198:case 36298:case 36306:case 35682:return kI;case 35679:case 36299:case 36307:return GI;case 35680:case 36300:case 36308:case 36293:return zI;case 36289:case 36303:case 36311:case 36292:return HI}}class WI{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=SI(t.type)}}class qI{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=VI(t.type)}}class XI{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const eh=/(\w+)(\])?(\[|\.)?/g;function Ip(n,e){n.seq.push(e),n.map[e.id]=e}function YI(n,e,t){const i=n.name,s=i.length;for(eh.lastIndex=0;;){const r=eh.exec(i),a=eh.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Ip(t,l===void 0?new WI(o,n,e):new qI(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new XI(o),Ip(t,h)),t=h}}}class pl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);YI(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function wp(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const KI=37297;let JI=0;function ZI(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const bp=new Ne;function jI(n){rt._getMatrix(bp,rt.workingColorSpace,n);const e=`mat3( ${bp.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case Dl:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Tp(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ZI(n.getShaderSource(e),o)}else return r}function $I(n,e){const t=jI(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ew(n,e){let t;switch(e){case ay:t="Linear";break;case l0:t="Reinhard";break;case oy:t="Cineon";break;case cy:t="ACESFilmic";break;case uy:t="AgX";break;case hy:t="Neutral";break;case ly:t="Custom";break;default:Ie("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const bc=new x;function tw(){rt.getLuminanceCoefficients(bc);const n=bc.x.toFixed(4),e=bc.y.toFixed(4),t=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function iw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function sw(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ao(n){return n!==""}function Bp(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Td(n){return n.replace(rw,ow)}const aw=new Map;function ow(n,e){let t=Xe[e];if(t===void 0){const i=aw.get(e);if(i!==void 0)t=Xe[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Td(t)}const cw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dp(n){return n.replace(cw,lw)}function lw(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lp(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===rf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===OE?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function hw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ar:case aa:e="ENVMAP_TYPE_CUBE";break;case Yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case aa:e="ENVMAP_MODE_REFRACTION";break}return e}function fw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case c0:e="ENVMAP_BLENDING_MULTIPLY";break;case sy:e="ENVMAP_BLENDING_MIX";break;case ry:e="ENVMAP_BLENDING_ADD";break}return e}function Aw(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function pw(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=uw(t),l=hw(t),u=dw(t),h=fw(t),d=Aw(t),f=nw(t),p=iw(r),g=s.createProgram();let m,A,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ao).join(`
`),m.length>0&&(m+=`
`),A=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ao).join(`
`),A.length>0&&(A+=`
`)):(m=[Lp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),A=[Lp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gs?"#define TONE_MAPPING":"",t.toneMapping!==gs?Xe.tonemapping_pars_fragment:"",t.toneMapping!==gs?ew("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,$I("linearToOutputTexel",t.outputColorSpace),tw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ao).join(`
`)),a=Td(a),a=Bp(a,t),a=Rp(a,t),o=Td(o),o=Bp(o,t),o=Rp(o,t),a=Dp(a),o=Dp(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,A=["#define varying in",t.glslVersion===CA?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===CA?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);const _=E+m+a,S=E+A+o,w=wp(s,s.VERTEX_SHADER,_),C=wp(s,s.FRAGMENT_SHADER,S);s.attachShader(g,w),s.attachShader(g,C),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function B(R){if(n.debug.checkShaderErrors){const b=s.getProgramInfoLog(g)||"",D=s.getShaderInfoLog(w)||"",N=s.getShaderInfoLog(C)||"",F=b.trim(),Q=D.trim(),X=N.trim();let z=!0,j=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,w,C);else{const ie=Tp(s,w,"vertex"),te=Tp(s,C,"fragment");Ke("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+ie+`
`+te)}else F!==""?Ie("WebGLProgram: Program Info Log:",F):(Q===""||X==="")&&(j=!1);j&&(R.diagnostics={runnable:z,programLog:F,vertexShader:{log:Q,prefix:m},fragmentShader:{log:X,prefix:A}})}s.deleteShader(w),s.deleteShader(C),U=new pl(s,g),y=sw(s,g)}let U;this.getUniforms=function(){return U===void 0&&B(this),U};let y;this.getAttributes=function(){return y===void 0&&B(this),y};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(g,KI)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=JI++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=C,this}let gw=0;class mw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new xw(e),t.set(e,i)),i}}class xw{constructor(e){this.id=gw++,this.code=e,this.usedTimes=0}}function _w(n,e,t,i,s,r,a){const o=new pf,c=new mw,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,v,R,b,D){const N=b.fog,F=D.geometry,Q=y.isMeshStandardMaterial?b.environment:null,X=(y.isMeshStandardMaterial?t:e).get(y.envMap||Q),z=X&&X.mapping===Yl?X.image.height:null,j=p[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&Ie("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const ie=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,te=ie!==void 0?ie.length:0;let pe=0;F.morphAttributes.position!==void 0&&(pe=1),F.morphAttributes.normal!==void 0&&(pe=2),F.morphAttributes.color!==void 0&&(pe=3);let be,et,At,K;if(j){const mt=ai[j];be=mt.vertexShader,et=mt.fragmentShader}else be=y.vertexShader,et=y.fragmentShader,c.update(y),At=c.getVertexShaderID(y),K=c.getFragmentShaderID(y);const ee=n.getRenderTarget(),me=n.state.buffers.depth.getReversed(),We=D.isInstancedMesh===!0,Te=D.isBatchedMesh===!0,tt=!!y.map,jt=!!y.matcap,je=!!X,Rt=!!y.aoMap,L=!!y.lightMap,nt=!!y.bumpMap,it=!!y.normalMap,St=!!y.displacementMap,ye=!!y.emissiveMap,Lt=!!y.metalnessMap,Re=!!y.roughnessMap,Ve=y.anisotropy>0,T=y.clearcoat>0,M=y.dispersion>0,G=y.iridescence>0,Y=y.sheen>0,$=y.transmission>0,q=Ve&&!!y.anisotropyMap,we=T&&!!y.clearcoatMap,he=T&&!!y.clearcoatNormalMap,De=T&&!!y.clearcoatRoughnessMap,Ce=G&&!!y.iridescenceMap,ne=G&&!!y.iridescenceThicknessMap,ae=Y&&!!y.sheenColorMap,Fe=Y&&!!y.sheenRoughnessMap,Pe=!!y.specularMap,Ae=!!y.specularColorMap,Oe=!!y.specularIntensityMap,P=$&&!!y.transmissionMap,de=$&&!!y.thicknessMap,oe=!!y.gradientMap,ce=!!y.alphaMap,se=y.alphaTest>0,Z=!!y.alphaHash,_e=!!y.extensions;let ze=gs;y.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(ze=n.toneMapping);const Ct={shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:be,fragmentShader:et,defines:y.defines,customVertexShaderID:At,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Te,batchingColor:Te&&D._colorsTexture!==null,instancing:We,instancingColor:We&&D.instanceColor!==null,instancingMorph:We&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:sn,alphaToCoverage:!!y.alphaToCoverage,map:tt,matcap:jt,envMap:je,envMapMode:je&&X.mapping,envMapCubeUVHeight:z,aoMap:Rt,lightMap:L,bumpMap:nt,normalMap:it,displacementMap:d&&St,emissiveMap:ye,normalMapObjectSpace:it&&y.normalMapType===gy,normalMapTangentSpace:it&&y.normalMapType===g0,metalnessMap:Lt,roughnessMap:Re,anisotropy:Ve,anisotropyMap:q,clearcoat:T,clearcoatMap:we,clearcoatNormalMap:he,clearcoatRoughnessMap:De,dispersion:M,iridescence:G,iridescenceMap:Ce,iridescenceThicknessMap:ne,sheen:Y,sheenColorMap:ae,sheenRoughnessMap:Fe,specularMap:Pe,specularColorMap:Ae,specularIntensityMap:Oe,transmission:$,transmissionMap:P,thicknessMap:de,gradientMap:oe,opaque:y.transparent===!1&&y.blending===Kr&&y.alphaToCoverage===!1,alphaMap:ce,alphaTest:se,alphaHash:Z,combine:y.combine,mapUv:tt&&g(y.map.channel),aoMapUv:Rt&&g(y.aoMap.channel),lightMapUv:L&&g(y.lightMap.channel),bumpMapUv:nt&&g(y.bumpMap.channel),normalMapUv:it&&g(y.normalMap.channel),displacementMapUv:St&&g(y.displacementMap.channel),emissiveMapUv:ye&&g(y.emissiveMap.channel),metalnessMapUv:Lt&&g(y.metalnessMap.channel),roughnessMapUv:Re&&g(y.roughnessMap.channel),anisotropyMapUv:q&&g(y.anisotropyMap.channel),clearcoatMapUv:we&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:he&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&g(y.sheenRoughnessMap.channel),specularMapUv:Pe&&g(y.specularMap.channel),specularColorMapUv:Ae&&g(y.specularColorMap.channel),specularIntensityMapUv:Oe&&g(y.specularIntensityMap.channel),transmissionMapUv:P&&g(y.transmissionMap.channel),thicknessMapUv:de&&g(y.thicknessMap.channel),alphaMapUv:ce&&g(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(it||Ve),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(tt||ce),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:me,skinning:D.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:pe,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,decodeVideoTexture:tt&&y.map.isVideoTexture===!0&&rt.getTransfer(y.map.colorSpace)===_t,decodeVideoTextureEmissive:ye&&y.emissiveMap.isVideoTexture===!0&&rt.getTransfer(y.emissiveMap.colorSpace)===_t,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===kt,flipSided:y.side===Vt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:_e&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&y.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function A(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)v.push(R),v.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(E(v,y),_(v,y),v.push(n.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function E(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function _(y,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),y.push(o.mask)}function S(y){const v=p[y.type];let R;if(v){const b=ai[v];R=rv.clone(b.uniforms)}else R=y.uniforms;return R}function w(y,v){let R;for(let b=0,D=u.length;b<D;b++){const N=u[b];if(N.cacheKey===v){R=N,++R.usedTimes;break}}return R===void 0&&(R=new pw(n,v,y,r),u.push(R)),R}function C(y){if(--y.usedTimes===0){const v=u.indexOf(y);u[v]=u[u.length-1],u.pop(),y.destroy()}}function B(y){c.remove(y)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:A,getUniforms:S,acquireProgram:w,releaseProgram:C,releaseShaderCache:B,programs:u,dispose:U}}function Ew(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function yw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Pp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Up(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h,d,f,p,g,m){let A=n[e];return A===void 0?(A={id:h.id,object:h,geometry:d,material:f,groupOrder:p,renderOrder:h.renderOrder,z:g,group:m},n[e]=A):(A.id=h.id,A.object=h,A.geometry=d,A.material=f,A.groupOrder=p,A.renderOrder=h.renderOrder,A.z=g,A.group=m),e++,A}function o(h,d,f,p,g,m){const A=a(h,d,f,p,g,m);f.transmission>0?i.push(A):f.transparent===!0?s.push(A):t.push(A)}function c(h,d,f,p,g,m){const A=a(h,d,f,p,g,m);f.transmission>0?i.unshift(A):f.transparent===!0?s.unshift(A):t.unshift(A)}function l(h,d){t.length>1&&t.sort(h||yw),i.length>1&&i.sort(d||Pp),s.length>1&&s.sort(d||Pp)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function vw(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Up,n.set(i,[a])):s>=r.length?(a=new Up,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Mw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new x,color:new Se};break;case"SpotLight":t={position:new x,direction:new x,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new x,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new x,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new x,halfWidth:new x,halfHeight:new x};break}return n[e.id]=t,t}}}function Sw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Cw=0;function Iw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ww(n){const e=new Mw,t=Sw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new x);const s=new x,r=new xe,a=new xe;function o(l){let u=0,h=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let f=0,p=0,g=0,m=0,A=0,E=0,_=0,S=0,w=0,C=0,B=0;l.sort(Iw);for(let y=0,v=l.length;y<v;y++){const R=l[y],b=R.color,D=R.intensity,N=R.distance,F=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=b.r*D,h+=b.g*D,d+=b.b*D;else if(R.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(R.sh.coefficients[Q],D);B++}else if(R.isDirectionalLight){const Q=e.get(R);if(Q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const X=R.shadow,z=t.get(R);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,i.directionalShadow[f]=z,i.directionalShadowMap[f]=F,i.directionalShadowMatrix[f]=R.shadow.matrix,E++}i.directional[f]=Q,f++}else if(R.isSpotLight){const Q=e.get(R);Q.position.setFromMatrixPosition(R.matrixWorld),Q.color.copy(b).multiplyScalar(D),Q.distance=N,Q.coneCos=Math.cos(R.angle),Q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Q.decay=R.decay,i.spot[g]=Q;const X=R.shadow;if(R.map&&(i.spotLightMap[w]=R.map,w++,X.updateMatrices(R),R.castShadow&&C++),i.spotLightMatrix[g]=X.matrix,R.castShadow){const z=t.get(R);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,i.spotShadow[g]=z,i.spotShadowMap[g]=F,S++}g++}else if(R.isRectAreaLight){const Q=e.get(R);Q.color.copy(b).multiplyScalar(D),Q.halfWidth.set(R.width*.5,0,0),Q.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=Q,m++}else if(R.isPointLight){const Q=e.get(R);if(Q.color.copy(R.color).multiplyScalar(R.intensity),Q.distance=R.distance,Q.decay=R.decay,R.castShadow){const X=R.shadow,z=t.get(R);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,z.shadowCameraNear=X.camera.near,z.shadowCameraFar=X.camera.far,i.pointShadow[p]=z,i.pointShadowMap[p]=F,i.pointShadowMatrix[p]=R.shadow.matrix,_++}i.point[p]=Q,p++}else if(R.isHemisphereLight){const Q=e.get(R);Q.skyColor.copy(R.color).multiplyScalar(D),Q.groundColor.copy(R.groundColor).multiplyScalar(D),i.hemi[A]=Q,A++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const U=i.hash;(U.directionalLength!==f||U.pointLength!==p||U.spotLength!==g||U.rectAreaLength!==m||U.hemiLength!==A||U.numDirectionalShadows!==E||U.numPointShadows!==_||U.numSpotShadows!==S||U.numSpotMaps!==w||U.numLightProbes!==B)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=m,i.point.length=p,i.hemi.length=A,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=B,U.directionalLength=f,U.pointLength=p,U.spotLength=g,U.rectAreaLength=m,U.hemiLength=A,U.numDirectionalShadows=E,U.numPointShadows=_,U.numSpotShadows=S,U.numSpotMaps=w,U.numLightProbes=B,i.version=Cw++)}function c(l,u){let h=0,d=0,f=0,p=0,g=0;const m=u.matrixWorldInverse;for(let A=0,E=l.length;A<E;A++){const _=l[A];if(_.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(_.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(_.isRectAreaLight){const S=i.rectArea[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(_.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:i}}function Fp(n){const e=new ww(n),t=[],i=[];function s(u){l.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function bw(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Fp(n),e.set(s,[o])):r>=a.length?(o=new Fp(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Tw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Rw(n,e,t){let i=new _f;const s=new Me,r=new Me,a=new ft,o=new N0({depthPacking:p0}),c=new wv,l={},u=t.maxTextureSize,h={[Gn]:Vt,[Vt]:Gn,[kt]:kt},d=new Mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:Tw,fragmentShader:Bw}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Ze;p.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Je(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rf;let A=this.type;this.render=function(C,B,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const y=n.getRenderTarget(),v=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),b=n.state;b.setBlending(Ni),b.buffers.depth.getReversed()===!0?b.buffers.color.setClear(0,0,0,0):b.buffers.color.setClear(1,1,1,1),b.buffers.depth.setTest(!0),b.setScissorTest(!1);const D=A!==si&&this.type===si,N=A===si&&this.type!==si;for(let F=0,Q=C.length;F<Q;F++){const X=C[F],z=X.shadow;if(z===void 0){Ie("WebGLShadowMap:",X,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const j=z.getFrameExtents();if(s.multiply(j),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,z.mapSize.y=r.y)),z.map===null||D===!0||N===!0){const te=this.type!==si?{minFilter:tn,magFilter:tn}:{};z.map!==null&&z.map.dispose(),z.map=new fi(s.x,s.y,te),z.map.texture.name=X.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const ie=z.getViewportCount();for(let te=0;te<ie;te++){const pe=z.getViewport(te);a.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),b.viewport(a),z.updateMatrices(X,te),i=z.getFrustum(),S(B,U,z.camera,X,this.type)}z.isPointLightShadow!==!0&&this.type===si&&E(z,U),z.needsUpdate=!1}A=this.type,m.needsUpdate=!1,n.setRenderTarget(y,v,R)};function E(C,B){const U=e.update(g);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new fi(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(B,null,U,d,g,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(B,null,U,f,g,null)}function _(C,B,U,y){let v=null;const R=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)v=R;else if(v=U.isPointLight===!0?c:o,n.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const b=v.uuid,D=B.uuid;let N=l[b];N===void 0&&(N={},l[b]=N);let F=N[D];F===void 0&&(F=v.clone(),N[D]=F,B.addEventListener("dispose",w)),v=F}if(v.visible=B.visible,v.wireframe=B.wireframe,y===si?v.side=B.shadowSide!==null?B.shadowSide:B.side:v.side=B.shadowSide!==null?B.shadowSide:h[B.side],v.alphaMap=B.alphaMap,v.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,v.map=B.map,v.clipShadows=B.clipShadows,v.clippingPlanes=B.clippingPlanes,v.clipIntersection=B.clipIntersection,v.displacementMap=B.displacementMap,v.displacementScale=B.displacementScale,v.displacementBias=B.displacementBias,v.wireframeLinewidth=B.wireframeLinewidth,v.linewidth=B.linewidth,U.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const b=n.properties.get(v);b.light=U}return v}function S(C,B,U,y,v){if(C.visible===!1)return;if(C.layers.test(B.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===si)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const D=e.update(C),N=C.material;if(Array.isArray(N)){const F=D.groups;for(let Q=0,X=F.length;Q<X;Q++){const z=F[Q],j=N[z.materialIndex];if(j&&j.visible){const ie=_(C,j,y,v);C.onBeforeShadow(n,C,B,U,D,ie,z),n.renderBufferDirect(U,null,D,ie,C,z),C.onAfterShadow(n,C,B,U,D,ie,z)}}}else if(N.visible){const F=_(C,N,y,v);C.onBeforeShadow(n,C,B,U,D,F,null),n.renderBufferDirect(U,null,D,F,C,null),C.onAfterShadow(n,C,B,U,D,F,null)}}const b=C.children;for(let D=0,N=b.length;D<N;D++)S(b[D],B,U,y,v)}function w(C){C.target.removeEventListener("dispose",w);for(const U in l){const y=l[U],v=C.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}const Dw={[td]:nd,[id]:ad,[sd]:od,[ra]:rd,[nd]:td,[ad]:id,[od]:sd,[rd]:ra};function Lw(n,e){function t(){let P=!1;const de=new ft;let oe=null;const ce=new ft(0,0,0,0);return{setMask:function(se){oe!==se&&!P&&(n.colorMask(se,se,se,se),oe=se)},setLocked:function(se){P=se},setClear:function(se,Z,_e,ze,Ct){Ct===!0&&(se*=ze,Z*=ze,_e*=ze),de.set(se,Z,_e,ze),ce.equals(de)===!1&&(n.clearColor(se,Z,_e,ze),ce.copy(de))},reset:function(){P=!1,oe=null,ce.set(-1,0,0,0)}}}function i(){let P=!1,de=!1,oe=null,ce=null,se=null;return{setReversed:function(Z){if(de!==Z){const _e=e.get("EXT_clip_control");Z?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),de=Z;const ze=se;se=null,this.setClear(ze)}},getReversed:function(){return de},setTest:function(Z){Z?ee(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function(Z){oe!==Z&&!P&&(n.depthMask(Z),oe=Z)},setFunc:function(Z){if(de&&(Z=Dw[Z]),ce!==Z){switch(Z){case td:n.depthFunc(n.NEVER);break;case nd:n.depthFunc(n.ALWAYS);break;case id:n.depthFunc(n.LESS);break;case ra:n.depthFunc(n.LEQUAL);break;case sd:n.depthFunc(n.EQUAL);break;case rd:n.depthFunc(n.GEQUAL);break;case ad:n.depthFunc(n.GREATER);break;case od:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=Z}},setLocked:function(Z){P=Z},setClear:function(Z){se!==Z&&(de&&(Z=1-Z),n.clearDepth(Z),se=Z)},reset:function(){P=!1,oe=null,ce=null,se=null,de=!1}}}function s(){let P=!1,de=null,oe=null,ce=null,se=null,Z=null,_e=null,ze=null,Ct=null;return{setTest:function(mt){P||(mt?ee(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(mt){de!==mt&&!P&&(n.stencilMask(mt),de=mt)},setFunc:function(mt,ni,zn){(oe!==mt||ce!==ni||se!==zn)&&(n.stencilFunc(mt,ni,zn),oe=mt,ce=ni,se=zn)},setOp:function(mt,ni,zn){(Z!==mt||_e!==ni||ze!==zn)&&(n.stencilOp(mt,ni,zn),Z=mt,_e=ni,ze=zn)},setLocked:function(mt){P=mt},setClear:function(mt){Ct!==mt&&(n.clearStencil(mt),Ct=mt)},reset:function(){P=!1,de=null,oe=null,ce=null,se=null,Z=null,_e=null,ze=null,Ct=null}}}const r=new t,a=new i,o=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],p=null,g=!1,m=null,A=null,E=null,_=null,S=null,w=null,C=null,B=new Se(0,0,0),U=0,y=!1,v=null,R=null,b=null,D=null,N=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,X=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(z)[1]),Q=X>=1):z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Q=X>=2);let j=null,ie={};const te=n.getParameter(n.SCISSOR_BOX),pe=n.getParameter(n.VIEWPORT),be=new ft().fromArray(te),et=new ft().fromArray(pe);function At(P,de,oe,ce){const se=new Uint8Array(4),Z=n.createTexture();n.bindTexture(P,Z),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let _e=0;_e<oe;_e++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(de+_e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return Z}const K={};K[n.TEXTURE_2D]=At(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=At(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=At(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=At(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(n.DEPTH_TEST),a.setFunc(ra),nt(!1),it(mA),ee(n.CULL_FACE),Rt(Ni);function ee(P){u[P]!==!0&&(n.enable(P),u[P]=!0)}function me(P){u[P]!==!1&&(n.disable(P),u[P]=!1)}function We(P,de){return h[P]!==de?(n.bindFramebuffer(P,de),h[P]=de,P===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=de),P===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=de),!0):!1}function Te(P,de){let oe=f,ce=!1;if(P){oe=d.get(de),oe===void 0&&(oe=[],d.set(de,oe));const se=P.textures;if(oe.length!==se.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let Z=0,_e=se.length;Z<_e;Z++)oe[Z]=n.COLOR_ATTACHMENT0+Z;oe.length=se.length,ce=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,ce=!0);ce&&n.drawBuffers(oe)}function tt(P){return p!==P?(n.useProgram(P),p=P,!0):!1}const jt={[Vs]:n.FUNC_ADD,[GE]:n.FUNC_SUBTRACT,[zE]:n.FUNC_REVERSE_SUBTRACT};jt[HE]=n.MIN,jt[VE]=n.MAX;const je={[WE]:n.ZERO,[qE]:n.ONE,[XE]:n.SRC_COLOR,[$h]:n.SRC_ALPHA,[$E]:n.SRC_ALPHA_SATURATE,[ZE]:n.DST_COLOR,[KE]:n.DST_ALPHA,[YE]:n.ONE_MINUS_SRC_COLOR,[ed]:n.ONE_MINUS_SRC_ALPHA,[jE]:n.ONE_MINUS_DST_COLOR,[JE]:n.ONE_MINUS_DST_ALPHA,[ey]:n.CONSTANT_COLOR,[ty]:n.ONE_MINUS_CONSTANT_COLOR,[ny]:n.CONSTANT_ALPHA,[iy]:n.ONE_MINUS_CONSTANT_ALPHA};function Rt(P,de,oe,ce,se,Z,_e,ze,Ct,mt){if(P===Ni){g===!0&&(me(n.BLEND),g=!1);return}if(g===!1&&(ee(n.BLEND),g=!0),P!==kE){if(P!==m||mt!==y){if((A!==Vs||S!==Vs)&&(n.blendEquation(n.FUNC_ADD),A=Vs,S=Vs),mt)switch(P){case Kr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xs:n.blendFunc(n.ONE,n.ONE);break;case xA:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _A:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ke("WebGLState: Invalid blending: ",P);break}else switch(P){case Kr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case xA:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _A:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",P);break}E=null,_=null,w=null,C=null,B.set(0,0,0),U=0,m=P,y=mt}return}se=se||de,Z=Z||oe,_e=_e||ce,(de!==A||se!==S)&&(n.blendEquationSeparate(jt[de],jt[se]),A=de,S=se),(oe!==E||ce!==_||Z!==w||_e!==C)&&(n.blendFuncSeparate(je[oe],je[ce],je[Z],je[_e]),E=oe,_=ce,w=Z,C=_e),(ze.equals(B)===!1||Ct!==U)&&(n.blendColor(ze.r,ze.g,ze.b,Ct),B.copy(ze),U=Ct),m=P,y=!1}function L(P,de){P.side===kt?me(n.CULL_FACE):ee(n.CULL_FACE);let oe=P.side===Vt;de&&(oe=!oe),nt(oe),P.blending===Kr&&P.transparent===!1?Rt(Ni):Rt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const ce=P.stencilWrite;o.setTest(ce),ce&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ye(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)}function nt(P){v!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),v=P)}function it(P){P!==NE?(ee(n.CULL_FACE),P!==R&&(P===mA?n.cullFace(n.BACK):P===QE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),R=P}function St(P){P!==b&&(Q&&n.lineWidth(P),b=P)}function ye(P,de,oe){P?(ee(n.POLYGON_OFFSET_FILL),(D!==de||N!==oe)&&(n.polygonOffset(de,oe),D=de,N=oe)):me(n.POLYGON_OFFSET_FILL)}function Lt(P){P?ee(n.SCISSOR_TEST):me(n.SCISSOR_TEST)}function Re(P){P===void 0&&(P=n.TEXTURE0+F-1),j!==P&&(n.activeTexture(P),j=P)}function Ve(P,de,oe){oe===void 0&&(j===null?oe=n.TEXTURE0+F-1:oe=j);let ce=ie[oe];ce===void 0&&(ce={type:void 0,texture:void 0},ie[oe]=ce),(ce.type!==P||ce.texture!==de)&&(j!==oe&&(n.activeTexture(oe),j=oe),n.bindTexture(P,de||K[P]),ce.type=P,ce.texture=de)}function T(){const P=ie[j];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function G(){try{n.compressedTexImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function Y(){try{n.texSubImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function $(){try{n.texSubImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function we(){try{n.compressedTexSubImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function he(){try{n.texStorage2D(...arguments)}catch(P){P("WebGLState:",P)}}function De(){try{n.texStorage3D(...arguments)}catch(P){P("WebGLState:",P)}}function Ce(){try{n.texImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function ne(){try{n.texImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function ae(P){be.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),be.copy(P))}function Fe(P){et.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),et.copy(P))}function Pe(P,de){let oe=l.get(de);oe===void 0&&(oe=new WeakMap,l.set(de,oe));let ce=oe.get(P);ce===void 0&&(ce=n.getUniformBlockIndex(de,P.name),oe.set(P,ce))}function Ae(P,de){const ce=l.get(de).get(P);c.get(de)!==ce&&(n.uniformBlockBinding(de,ce,P.__bindingPointIndex),c.set(de,ce))}function Oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},j=null,ie={},h={},d=new WeakMap,f=[],p=null,g=!1,m=null,A=null,E=null,_=null,S=null,w=null,C=null,B=new Se(0,0,0),U=0,y=!1,v=null,R=null,b=null,D=null,N=null,be.set(0,0,n.canvas.width,n.canvas.height),et.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:me,bindFramebuffer:We,drawBuffers:Te,useProgram:tt,setBlending:Rt,setMaterial:L,setFlipSided:nt,setCullFace:it,setLineWidth:St,setPolygonOffset:ye,setScissorTest:Lt,activeTexture:Re,bindTexture:Ve,unbindTexture:T,compressedTexImage2D:M,compressedTexImage3D:G,texImage2D:Ce,texImage3D:ne,updateUBOMapping:Pe,uniformBlockBinding:Ae,texStorage2D:he,texStorage3D:De,texSubImage2D:Y,texSubImage3D:$,compressedTexSubImage2D:q,compressedTexSubImage3D:we,scissor:ae,viewport:Fe,reset:Oe}}function Pw(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Me,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(T,M){return f?new OffscreenCanvas(T,M):Do("canvas")}function g(T,M,G){let Y=1;const $=Ve(T);if(($.width>G||$.height>G)&&(Y=G/Math.max($.width,$.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(Y*$.width),we=Math.floor(Y*$.height);h===void 0&&(h=p(q,we));const he=M?p(q,we):h;return he.width=q,he.height=we,he.getContext("2d").drawImage(T,0,0,q,we),Ie("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+q+"x"+we+")."),he}else return"data"in T&&Ie("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function m(T){return T.generateMipmaps}function A(T){n.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(T,M,G,Y,$=!1){if(T!==null){if(n[T]!==void 0)return n[T];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=M;if(M===n.RED&&(G===n.FLOAT&&(q=n.R32F),G===n.HALF_FLOAT&&(q=n.R16F),G===n.UNSIGNED_BYTE&&(q=n.R8)),M===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(q=n.R8UI),G===n.UNSIGNED_SHORT&&(q=n.R16UI),G===n.UNSIGNED_INT&&(q=n.R32UI),G===n.BYTE&&(q=n.R8I),G===n.SHORT&&(q=n.R16I),G===n.INT&&(q=n.R32I)),M===n.RG&&(G===n.FLOAT&&(q=n.RG32F),G===n.HALF_FLOAT&&(q=n.RG16F),G===n.UNSIGNED_BYTE&&(q=n.RG8)),M===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(q=n.RG8UI),G===n.UNSIGNED_SHORT&&(q=n.RG16UI),G===n.UNSIGNED_INT&&(q=n.RG32UI),G===n.BYTE&&(q=n.RG8I),G===n.SHORT&&(q=n.RG16I),G===n.INT&&(q=n.RG32I)),M===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(q=n.RGB8UI),G===n.UNSIGNED_SHORT&&(q=n.RGB16UI),G===n.UNSIGNED_INT&&(q=n.RGB32UI),G===n.BYTE&&(q=n.RGB8I),G===n.SHORT&&(q=n.RGB16I),G===n.INT&&(q=n.RGB32I)),M===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),G===n.UNSIGNED_INT&&(q=n.RGBA32UI),G===n.BYTE&&(q=n.RGBA8I),G===n.SHORT&&(q=n.RGBA16I),G===n.INT&&(q=n.RGBA32I)),M===n.RGB&&(G===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),M===n.RGBA){const we=$?Dl:rt.getTransfer(Y);G===n.FLOAT&&(q=n.RGBA32F),G===n.HALF_FLOAT&&(q=n.RGBA16F),G===n.UNSIGNED_BYTE&&(q=we===_t?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function S(T,M){let G;return T?M===null||M===or||M===Mo?G=n.DEPTH24_STENCIL8:M===cn?G=n.DEPTH32F_STENCIL8:M===vo&&(G=n.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===or||M===Mo?G=n.DEPTH_COMPONENT24:M===cn?G=n.DEPTH_COMPONENT32F:M===vo&&(G=n.DEPTH_COMPONENT16),G}function w(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==tn&&T.minFilter!==bt?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function C(T){const M=T.target;M.removeEventListener("dispose",C),U(M),M.isVideoTexture&&u.delete(M)}function B(T){const M=T.target;M.removeEventListener("dispose",B),v(M)}function U(T){const M=i.get(T);if(M.__webglInit===void 0)return;const G=T.source,Y=d.get(G);if(Y){const $=Y[M.__cacheKey];$.usedTimes--,$.usedTimes===0&&y(T),Object.keys(Y).length===0&&d.delete(G)}i.remove(T)}function y(T){const M=i.get(T);n.deleteTexture(M.__webglTexture);const G=T.source,Y=d.get(G);delete Y[M.__cacheKey],a.memory.textures--}function v(T){const M=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let $=0;$<M.__webglFramebuffer[Y].length;$++)n.deleteFramebuffer(M.__webglFramebuffer[Y][$]);else n.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)n.deleteFramebuffer(M.__webglFramebuffer[Y]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=T.textures;for(let Y=0,$=G.length;Y<$;Y++){const q=i.get(G[Y]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(G[Y])}i.remove(T)}let R=0;function b(){R=0}function D(){const T=R;return T>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),R+=1,T}function N(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function F(T,M){const G=i.get(T);if(T.isVideoTexture&&Lt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&G.__version!==T.version){const Y=T.image;if(Y===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{K(G,T,M);return}}else T.isExternalTexture&&(G.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+M)}function Q(T,M){const G=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){K(G,T,M);return}else T.isExternalTexture&&(G.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+M)}function X(T,M){const G=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){K(G,T,M);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+M)}function z(T,M){const G=i.get(T);if(T.version>0&&G.__version!==T.version){ee(G,T,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+M)}const j={[_s]:n.REPEAT,[kn]:n.CLAMP_TO_EDGE,[Sl]:n.MIRRORED_REPEAT},ie={[tn]:n.NEAREST,[af]:n.NEAREST_MIPMAP_NEAREST,[ro]:n.NEAREST_MIPMAP_LINEAR,[bt]:n.LINEAR,[Al]:n.LINEAR_MIPMAP_NEAREST,[Yn]:n.LINEAR_MIPMAP_LINEAR},te={[my]:n.NEVER,[My]:n.ALWAYS,[xy]:n.LESS,[m0]:n.LEQUAL,[_y]:n.EQUAL,[vy]:n.GEQUAL,[Ey]:n.GREATER,[yy]:n.NOTEQUAL};function pe(T,M){if(M.type===cn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===bt||M.magFilter===Al||M.magFilter===ro||M.magFilter===Yn||M.minFilter===bt||M.minFilter===Al||M.minFilter===ro||M.minFilter===Yn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,j[M.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,j[M.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,j[M.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ie[M.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ie[M.minFilter]),M.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,te[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===tn||M.minFilter!==ro&&M.minFilter!==Yn||M.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function be(T,M){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",C));const Y=M.source;let $=d.get(Y);$===void 0&&($={},d.set(Y,$));const q=N(M);if(q!==T.__cacheKey){$[q]===void 0&&($[q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),$[q].usedTimes++;const we=$[T.__cacheKey];we!==void 0&&($[T.__cacheKey].usedTimes--,we.usedTimes===0&&y(M)),T.__cacheKey=q,T.__webglTexture=$[q].texture}return G}function et(T,M,G){return Math.floor(Math.floor(T/G)/M)}function At(T,M,G,Y){const q=T.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,G,Y,M.data);else{q.sort((ne,ae)=>ne.start-ae.start);let we=0;for(let ne=1;ne<q.length;ne++){const ae=q[we],Fe=q[ne],Pe=ae.start+ae.count,Ae=et(Fe.start,M.width,4),Oe=et(ae.start,M.width,4);Fe.start<=Pe+1&&Ae===Oe&&et(Fe.start+Fe.count-1,M.width,4)===Ae?ae.count=Math.max(ae.count,Fe.start+Fe.count-ae.start):(++we,q[we]=Fe)}q.length=we+1;const he=n.getParameter(n.UNPACK_ROW_LENGTH),De=n.getParameter(n.UNPACK_SKIP_PIXELS),Ce=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let ne=0,ae=q.length;ne<ae;ne++){const Fe=q[ne],Pe=Math.floor(Fe.start/4),Ae=Math.ceil(Fe.count/4),Oe=Pe%M.width,P=Math.floor(Pe/M.width),de=Ae,oe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Oe),n.pixelStorei(n.UNPACK_SKIP_ROWS,P),t.texSubImage2D(n.TEXTURE_2D,0,Oe,P,de,oe,G,Y,M.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,he),n.pixelStorei(n.UNPACK_SKIP_PIXELS,De),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ce)}}function K(T,M,G){let Y=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=n.TEXTURE_3D);const $=be(T,M),q=M.source;t.bindTexture(Y,T.__webglTexture,n.TEXTURE0+G);const we=i.get(q);if(q.version!==we.__version||$===!0){t.activeTexture(n.TEXTURE0+G);const he=rt.getPrimaries(rt.workingColorSpace),De=M.colorSpace===qn?null:rt.getPrimaries(M.colorSpace),Ce=M.colorSpace===qn||he===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let ne=g(M.image,!1,s.maxTextureSize);ne=Re(M,ne);const ae=r.convert(M.format,M.colorSpace),Fe=r.convert(M.type);let Pe=_(M.internalFormat,ae,Fe,M.colorSpace,M.isVideoTexture);pe(Y,M);let Ae;const Oe=M.mipmaps,P=M.isVideoTexture!==!0,de=we.__version===void 0||$===!0,oe=q.dataReady,ce=w(M,ne);if(M.isDepthTexture)Pe=S(M.format===Io,M.type),de&&(P?t.texStorage2D(n.TEXTURE_2D,1,Pe,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Pe,ne.width,ne.height,0,ae,Fe,null));else if(M.isDataTexture)if(Oe.length>0){P&&de&&t.texStorage2D(n.TEXTURE_2D,ce,Pe,Oe[0].width,Oe[0].height);for(let se=0,Z=Oe.length;se<Z;se++)Ae=Oe[se],P?oe&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Ae.width,Ae.height,ae,Fe,Ae.data):t.texImage2D(n.TEXTURE_2D,se,Pe,Ae.width,Ae.height,0,ae,Fe,Ae.data);M.generateMipmaps=!1}else P?(de&&t.texStorage2D(n.TEXTURE_2D,ce,Pe,ne.width,ne.height),oe&&At(M,ne,ae,Fe)):t.texImage2D(n.TEXTURE_2D,0,Pe,ne.width,ne.height,0,ae,Fe,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){P&&de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,Pe,Oe[0].width,Oe[0].height,ne.depth);for(let se=0,Z=Oe.length;se<Z;se++)if(Ae=Oe[se],M.format!==Jt)if(ae!==null)if(P){if(oe)if(M.layerUpdates.size>0){const _e=fp(Ae.width,Ae.height,M.format,M.type);for(const ze of M.layerUpdates){const Ct=Ae.data.subarray(ze*_e/Ae.data.BYTES_PER_ELEMENT,(ze+1)*_e/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,ze,Ae.width,Ae.height,1,ae,Ct)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Ae.width,Ae.height,ne.depth,ae,Ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,Pe,Ae.width,Ae.height,ne.depth,0,Ae.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Ae.width,Ae.height,ne.depth,ae,Fe,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,Pe,Ae.width,Ae.height,ne.depth,0,ae,Fe,Ae.data)}else{P&&de&&t.texStorage2D(n.TEXTURE_2D,ce,Pe,Oe[0].width,Oe[0].height);for(let se=0,Z=Oe.length;se<Z;se++)Ae=Oe[se],M.format!==Jt?ae!==null?P?oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,Ae.width,Ae.height,ae,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,se,Pe,Ae.width,Ae.height,0,Ae.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?oe&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Ae.width,Ae.height,ae,Fe,Ae.data):t.texImage2D(n.TEXTURE_2D,se,Pe,Ae.width,Ae.height,0,ae,Fe,Ae.data)}else if(M.isDataArrayTexture)if(P){if(de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,Pe,ne.width,ne.height,ne.depth),oe)if(M.layerUpdates.size>0){const se=fp(ne.width,ne.height,M.format,M.type);for(const Z of M.layerUpdates){const _e=ne.data.subarray(Z*se/ne.data.BYTES_PER_ELEMENT,(Z+1)*se/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,ne.width,ne.height,1,ae,Fe,_e)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ae,Fe,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,ne.width,ne.height,ne.depth,0,ae,Fe,ne.data);else if(M.isData3DTexture)P?(de&&t.texStorage3D(n.TEXTURE_3D,ce,Pe,ne.width,ne.height,ne.depth),oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ae,Fe,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,ne.width,ne.height,ne.depth,0,ae,Fe,ne.data);else if(M.isFramebufferTexture){if(de)if(P)t.texStorage2D(n.TEXTURE_2D,ce,Pe,ne.width,ne.height);else{let se=ne.width,Z=ne.height;for(let _e=0;_e<ce;_e++)t.texImage2D(n.TEXTURE_2D,_e,Pe,se,Z,0,ae,Fe,null),se>>=1,Z>>=1}}else if(Oe.length>0){if(P&&de){const se=Ve(Oe[0]);t.texStorage2D(n.TEXTURE_2D,ce,Pe,se.width,se.height)}for(let se=0,Z=Oe.length;se<Z;se++)Ae=Oe[se],P?oe&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,ae,Fe,Ae):t.texImage2D(n.TEXTURE_2D,se,Pe,ae,Fe,Ae);M.generateMipmaps=!1}else if(P){if(de){const se=Ve(ne);t.texStorage2D(n.TEXTURE_2D,ce,Pe,se.width,se.height)}oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae,Fe,ne)}else t.texImage2D(n.TEXTURE_2D,0,Pe,ae,Fe,ne);m(M)&&A(Y),we.__version=q.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ee(T,M,G){if(M.image.length!==6)return;const Y=be(T,M),$=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+G);const q=i.get($);if($.version!==q.__version||Y===!0){t.activeTexture(n.TEXTURE0+G);const we=rt.getPrimaries(rt.workingColorSpace),he=M.colorSpace===qn?null:rt.getPrimaries(M.colorSpace),De=M.colorSpace===qn||we===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Ce=M.isCompressedTexture||M.image[0].isCompressedTexture,ne=M.image[0]&&M.image[0].isDataTexture,ae=[];for(let Z=0;Z<6;Z++)!Ce&&!ne?ae[Z]=g(M.image[Z],!0,s.maxCubemapSize):ae[Z]=ne?M.image[Z].image:M.image[Z],ae[Z]=Re(M,ae[Z]);const Fe=ae[0],Pe=r.convert(M.format,M.colorSpace),Ae=r.convert(M.type),Oe=_(M.internalFormat,Pe,Ae,M.colorSpace),P=M.isVideoTexture!==!0,de=q.__version===void 0||Y===!0,oe=$.dataReady;let ce=w(M,Fe);pe(n.TEXTURE_CUBE_MAP,M);let se;if(Ce){P&&de&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Oe,Fe.width,Fe.height);for(let Z=0;Z<6;Z++){se=ae[Z].mipmaps;for(let _e=0;_e<se.length;_e++){const ze=se[_e];M.format!==Jt?Pe!==null?P?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,0,0,ze.width,ze.height,Pe,ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,Oe,ze.width,ze.height,0,ze.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,0,0,ze.width,ze.height,Pe,Ae,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,Oe,ze.width,ze.height,0,Pe,Ae,ze.data)}}}else{if(se=M.mipmaps,P&&de){se.length>0&&ce++;const Z=Ve(ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Oe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ne){P?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ae[Z].width,ae[Z].height,Pe,Ae,ae[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Oe,ae[Z].width,ae[Z].height,0,Pe,Ae,ae[Z].data);for(let _e=0;_e<se.length;_e++){const Ct=se[_e].image[Z].image;P?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,0,0,Ct.width,Ct.height,Pe,Ae,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,Oe,Ct.width,Ct.height,0,Pe,Ae,Ct.data)}}else{P?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Pe,Ae,ae[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Oe,Pe,Ae,ae[Z]);for(let _e=0;_e<se.length;_e++){const ze=se[_e];P?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,0,0,Pe,Ae,ze.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,Oe,Pe,Ae,ze.image[Z])}}}m(M)&&A(n.TEXTURE_CUBE_MAP),q.__version=$.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function me(T,M,G,Y,$,q){const we=r.convert(G.format,G.colorSpace),he=r.convert(G.type),De=_(G.internalFormat,we,he,G.colorSpace),Ce=i.get(M),ne=i.get(G);if(ne.__renderTarget=M,!Ce.__hasExternalTextures){const ae=Math.max(1,M.width>>q),Fe=Math.max(1,M.height>>q);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,q,De,ae,Fe,M.depth,0,we,he,null):t.texImage2D($,q,De,ae,Fe,0,we,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),ye(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,$,ne.__webglTexture,0,St(M)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,$,ne.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(T,M,G){if(n.bindRenderbuffer(n.RENDERBUFFER,T),M.depthBuffer){const Y=M.depthTexture,$=Y&&Y.isDepthTexture?Y.type:null,q=S(M.stencilBuffer,$),we=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=St(M);ye(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,q,M.width,M.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,q,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,q,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,T)}else{const Y=M.textures;for(let $=0;$<Y.length;$++){const q=Y[$],we=r.convert(q.format,q.colorSpace),he=r.convert(q.type),De=_(q.internalFormat,we,he,q.colorSpace),Ce=St(M);G&&ye(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,De,M.width,M.height):ye(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,De,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,De,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(M.depthTexture);Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),F(M.depthTexture,0);const $=Y.__webglTexture,q=St(M);if(M.depthTexture.format===Co)ye(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(M.depthTexture.format===Io)ye(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function tt(T){const M=i.get(T),G=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const $=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",$)};Y.addEventListener("dispose",$),M.__depthDisposeCallback=$}M.__boundDepthTexture=Y}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const Y=T.texture.mipmaps;Y&&Y.length>0?Te(M.__webglFramebuffer[0],T):Te(M.__webglFramebuffer,T)}else if(G){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=n.createRenderbuffer(),We(M.__webglDepthbuffer[Y],T,!1);else{const $=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,q)}}else{const Y=T.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),We(M.__webglDepthbuffer,T,!1);else{const $=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function jt(T,M,G){const Y=i.get(T);M!==void 0&&me(Y.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&tt(T)}function je(T){const M=T.texture,G=i.get(T),Y=i.get(M);T.addEventListener("dispose",B);const $=T.textures,q=T.isWebGLCubeRenderTarget===!0,we=$.length>1;if(we||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=M.version,a.memory.textures++),q){G.__webglFramebuffer=[];for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[he]=[];for(let De=0;De<M.mipmaps.length;De++)G.__webglFramebuffer[he][De]=n.createFramebuffer()}else G.__webglFramebuffer[he]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)G.__webglFramebuffer[he]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(we)for(let he=0,De=$.length;he<De;he++){const Ce=i.get($[he]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&ye(T)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let he=0;he<$.length;he++){const De=$[he];G.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[he]);const Ce=r.convert(De.format,De.colorSpace),ne=r.convert(De.type),ae=_(De.internalFormat,Ce,ne,De.colorSpace,T.isXRRenderTarget===!0),Fe=St(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,ae,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,G.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),We(G.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),pe(n.TEXTURE_CUBE_MAP,M);for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0)for(let De=0;De<M.mipmaps.length;De++)me(G.__webglFramebuffer[he][De],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,De);else me(G.__webglFramebuffer[he],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(M)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let he=0,De=$.length;he<De;he++){const Ce=$[he],ne=i.get(Ce);let ae=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ae=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,ne.__webglTexture),pe(ae,Ce),me(G.__webglFramebuffer,T,Ce,n.COLOR_ATTACHMENT0+he,ae,0),m(Ce)&&A(ae)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,Y.__webglTexture),pe(he,M),M.mipmaps&&M.mipmaps.length>0)for(let De=0;De<M.mipmaps.length;De++)me(G.__webglFramebuffer[De],T,M,n.COLOR_ATTACHMENT0,he,De);else me(G.__webglFramebuffer,T,M,n.COLOR_ATTACHMENT0,he,0);m(M)&&A(he),t.unbindTexture()}T.depthBuffer&&tt(T)}function Rt(T){const M=T.textures;for(let G=0,Y=M.length;G<Y;G++){const $=M[G];if(m($)){const q=E(T),we=i.get($).__webglTexture;t.bindTexture(q,we),A(q),t.unbindTexture()}}}const L=[],nt=[];function it(T){if(T.samples>0){if(ye(T)===!1){const M=T.textures,G=T.width,Y=T.height;let $=n.COLOR_BUFFER_BIT;const q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(T),he=M.length>1;if(he)for(let Ce=0;Ce<M.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const De=T.texture.mipmaps;De&&De.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ce=0;Ce<M.length;Ce++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[Ce]);const ne=i.get(M[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,G,Y,0,0,G,Y,$,n.NEAREST),c===!0&&(L.length=0,nt.length=0,L.push(n.COLOR_ATTACHMENT0+Ce),T.depthBuffer&&T.resolveDepthBuffer===!1&&(L.push(q),nt.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,nt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,L))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Ce=0;Ce<M.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,we.__webglColorRenderbuffer[Ce]);const ne=i.get(M[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const M=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function St(T){return Math.min(s.maxSamples,T.samples)}function ye(T){const M=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Lt(T){const M=a.render.frame;u.get(T)!==M&&(u.set(T,M),T.update())}function Re(T,M){const G=T.colorSpace,Y=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||G!==sn&&G!==qn&&(rt.getTransfer(G)===_t?(Y!==Jt||$!==Ye)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",G)),M}function Ve(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=b,this.setTexture2D=F,this.setTexture2DArray=Q,this.setTexture3D=X,this.setTextureCube=z,this.rebindTextures=jt,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ye}function Uw(n,e){function t(i,s=qn){let r;const a=rt.getTransfer(s);if(i===Ye)return n.UNSIGNED_BYTE;if(i===cf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===lf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Kl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===h0)return n.BYTE;if(i===d0)return n.SHORT;if(i===vo)return n.UNSIGNED_SHORT;if(i===of)return n.INT;if(i===or)return n.UNSIGNED_INT;if(i===cn)return n.FLOAT;if(i===Bn)return n.HALF_FLOAT;if(i===f0)return n.ALPHA;if(i===So)return n.RGB;if(i===Jt)return n.RGBA;if(i===Co)return n.DEPTH_COMPONENT;if(i===Io)return n.DEPTH_STENCIL;if(i===cs)return n.RED;if(i===uf)return n.RED_INTEGER;if(i===ls)return n.RG;if(i===hf)return n.RG_INTEGER;if(i===df)return n.RGBA_INTEGER;if(i===Jr||i===er||i===Zr||i===lo)if(a===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cl||i===ud||i===oa||i===wo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ud)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Il||i===bo||i===To)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Il||i===bo)return a===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===To)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===tr||i===hd||i===dd||i===fd||i===jr||i===Ad||i===pd||i===gd||i===md||i===xd||i===_d||i===Ed||i===yd||i===vd)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===tr)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hd)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dd)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fd)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jr)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ad)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pd)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gd)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===md)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xd)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_d)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ed)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yd)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vd)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ca||i===Md||i===wl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ca)return a===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Md)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bl||i===Tl||i===Bl||i===Rl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===bl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Mo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Fw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Qw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new U0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Mt({vertexShader:Fw,fragmentShader:Nw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Je(new ys(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ow extends fr{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,p=null;const g=typeof XRWebGLBinding<"u",m=new Qw,A={},E=t.getContextAttributes();let _=null,S=null;const w=[],C=[],B=new Me;let U=null;const y=new Kt;y.viewport=new ft;const v=new Kt;v.viewport=new ft;const R=[y,v],b=new qv;let D=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ee=w[K];return ee===void 0&&(ee=new Nu,w[K]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(K){let ee=w[K];return ee===void 0&&(ee=new Nu,w[K]=ee),ee.getGripSpace()},this.getHand=function(K){let ee=w[K];return ee===void 0&&(ee=new Nu,w[K]=ee),ee.getHandSpace()};function F(K){const ee=C.indexOf(K.inputSource);if(ee===-1)return;const me=w[ee];me!==void 0&&(me.update(K.inputSource,K.frame,l||a),me.dispatchEvent({type:K.type,data:K.inputSource}))}function Q(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",X);for(let K=0;K<w.length;K++){const ee=C[K];ee!==null&&(C[K]=null,w[K].disconnect(ee))}D=null,N=null,m.reset();for(const K in A)delete A[K];e.setRenderTarget(_),f=null,d=null,h=null,s=null,S=null,At.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",X),E.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(B),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,We=null,Te=null;E.depth&&(Te=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=E.stencil?Io:Co,We=E.stencil?Mo:or);const tt={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(tt),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new fi(d.textureWidth,d.textureHeight,{format:Jt,type:Ye,depthTexture:new P0(d.textureWidth,d.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const me={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new fi(f.framebufferWidth,f.framebufferHeight,{format:Jt,type:Ye,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),At.setContext(s),At.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(K){for(let ee=0;ee<K.removed.length;ee++){const me=K.removed[ee],We=C.indexOf(me);We>=0&&(C[We]=null,w[We].disconnect(me))}for(let ee=0;ee<K.added.length;ee++){const me=K.added[ee];let We=C.indexOf(me);if(We===-1){for(let tt=0;tt<w.length;tt++)if(tt>=C.length){C.push(me),We=tt;break}else if(C[tt]===null){C[tt]=me,We=tt;break}if(We===-1)break}const Te=w[We];Te&&Te.connect(me)}}const z=new x,j=new x;function ie(K,ee,me){z.setFromMatrixPosition(ee.matrixWorld),j.setFromMatrixPosition(me.matrixWorld);const We=z.distanceTo(j),Te=ee.projectionMatrix.elements,tt=me.projectionMatrix.elements,jt=Te[14]/(Te[10]-1),je=Te[14]/(Te[10]+1),Rt=(Te[9]+1)/Te[5],L=(Te[9]-1)/Te[5],nt=(Te[8]-1)/Te[0],it=(tt[8]+1)/tt[0],St=jt*nt,ye=jt*it,Lt=We/(-nt+it),Re=Lt*-nt;if(ee.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Re),K.translateZ(Lt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Te[10]===-1)K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Ve=jt+Lt,T=je+Lt,M=St-Re,G=ye+(We-Re),Y=Rt*je/T*Ve,$=L*je/T*Ve;K.projectionMatrix.makePerspective(M,G,Y,$,Ve,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function te(K,ee){ee===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ee.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ee=K.near,me=K.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(me=m.depthFar)),b.near=v.near=y.near=ee,b.far=v.far=y.far=me,(D!==b.near||N!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),D=b.near,N=b.far),b.layers.mask=K.layers.mask|6,y.layers.mask=b.layers.mask&3,v.layers.mask=b.layers.mask&5;const We=K.parent,Te=b.cameras;te(b,We);for(let tt=0;tt<Te.length;tt++)te(Te[tt],We);Te.length===2?ie(b,y,v):b.projectionMatrix.copy(y.projectionMatrix),pe(K,b,We)};function pe(K,ee,me){me===null?K.matrix.copy(ee.matrixWorld):(K.matrix.copy(me.matrixWorld),K.matrix.invert(),K.matrix.multiply(ee.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=la*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(b)},this.getCameraTexture=function(K){return A[K]};let be=null;function et(K,ee){if(u=ee.getViewerPose(l||a),p=ee,u!==null){const me=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let We=!1;me.length!==b.cameras.length&&(b.cameras.length=0,We=!0);for(let je=0;je<me.length;je++){const Rt=me[je];let L=null;if(f!==null)L=f.getViewport(Rt);else{const it=h.getViewSubImage(d,Rt);L=it.viewport,je===0&&(e.setRenderTargetTextures(S,it.colorTexture,it.depthStencilTexture),e.setRenderTarget(S))}let nt=R[je];nt===void 0&&(nt=new Kt,nt.layers.enable(je),nt.viewport=new ft,R[je]=nt),nt.matrix.fromArray(Rt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Rt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(L.x,L.y,L.width,L.height),je===0&&(b.matrix.copy(nt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),We===!0&&b.cameras.push(nt)}const Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){h=i.getBinding();const je=h.getDepthInformation(me[0]);je&&je.isValid&&je.texture&&m.init(je,s.renderState)}if(Te&&Te.includes("camera-access")&&g){e.state.unbindTexture(),h=i.getBinding();for(let je=0;je<me.length;je++){const Rt=me[je].camera;if(Rt){let L=A[Rt];L||(L=new U0,A[Rt]=L);const nt=h.getCameraImage(Rt);L.sourceTexture=nt}}}}for(let me=0;me<w.length;me++){const We=C[me],Te=w[me];We!==null&&Te!==void 0&&Te.update(We,ee,l||a)}be&&be(K,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),p=null}const At=new W0;At.setAnimationLoop(et),this.setAnimationLoop=function(K){be=K},this.dispose=function(){}}}const Fs=new Ai,kw=new xe;function Gw(n,e){function t(m,A){m.matrixAutoUpdate===!0&&m.updateMatrix(),A.value.copy(m.matrix)}function i(m,A){A.color.getRGB(m.fogColor.value,S0(n)),A.isFog?(m.fogNear.value=A.near,m.fogFar.value=A.far):A.isFogExp2&&(m.fogDensity.value=A.density)}function s(m,A,E,_,S){A.isMeshBasicMaterial||A.isMeshLambertMaterial?r(m,A):A.isMeshToonMaterial?(r(m,A),h(m,A)):A.isMeshPhongMaterial?(r(m,A),u(m,A)):A.isMeshStandardMaterial?(r(m,A),d(m,A),A.isMeshPhysicalMaterial&&f(m,A,S)):A.isMeshMatcapMaterial?(r(m,A),p(m,A)):A.isMeshDepthMaterial?r(m,A):A.isMeshDistanceMaterial?(r(m,A),g(m,A)):A.isMeshNormalMaterial?r(m,A):A.isLineBasicMaterial?(a(m,A),A.isLineDashedMaterial&&o(m,A)):A.isPointsMaterial?c(m,A,E,_):A.isSpriteMaterial?l(m,A):A.isShadowMaterial?(m.color.value.copy(A.color),m.opacity.value=A.opacity):A.isShaderMaterial&&(A.uniformsNeedUpdate=!1)}function r(m,A){m.opacity.value=A.opacity,A.color&&m.diffuse.value.copy(A.color),A.emissive&&m.emissive.value.copy(A.emissive).multiplyScalar(A.emissiveIntensity),A.map&&(m.map.value=A.map,t(A.map,m.mapTransform)),A.alphaMap&&(m.alphaMap.value=A.alphaMap,t(A.alphaMap,m.alphaMapTransform)),A.bumpMap&&(m.bumpMap.value=A.bumpMap,t(A.bumpMap,m.bumpMapTransform),m.bumpScale.value=A.bumpScale,A.side===Vt&&(m.bumpScale.value*=-1)),A.normalMap&&(m.normalMap.value=A.normalMap,t(A.normalMap,m.normalMapTransform),m.normalScale.value.copy(A.normalScale),A.side===Vt&&m.normalScale.value.negate()),A.displacementMap&&(m.displacementMap.value=A.displacementMap,t(A.displacementMap,m.displacementMapTransform),m.displacementScale.value=A.displacementScale,m.displacementBias.value=A.displacementBias),A.emissiveMap&&(m.emissiveMap.value=A.emissiveMap,t(A.emissiveMap,m.emissiveMapTransform)),A.specularMap&&(m.specularMap.value=A.specularMap,t(A.specularMap,m.specularMapTransform)),A.alphaTest>0&&(m.alphaTest.value=A.alphaTest);const E=e.get(A),_=E.envMap,S=E.envMapRotation;_&&(m.envMap.value=_,Fs.copy(S),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),m.envMapRotation.value.setFromMatrix4(kw.makeRotationFromEuler(Fs)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=A.reflectivity,m.ior.value=A.ior,m.refractionRatio.value=A.refractionRatio),A.lightMap&&(m.lightMap.value=A.lightMap,m.lightMapIntensity.value=A.lightMapIntensity,t(A.lightMap,m.lightMapTransform)),A.aoMap&&(m.aoMap.value=A.aoMap,m.aoMapIntensity.value=A.aoMapIntensity,t(A.aoMap,m.aoMapTransform))}function a(m,A){m.diffuse.value.copy(A.color),m.opacity.value=A.opacity,A.map&&(m.map.value=A.map,t(A.map,m.mapTransform))}function o(m,A){m.dashSize.value=A.dashSize,m.totalSize.value=A.dashSize+A.gapSize,m.scale.value=A.scale}function c(m,A,E,_){m.diffuse.value.copy(A.color),m.opacity.value=A.opacity,m.size.value=A.size*E,m.scale.value=_*.5,A.map&&(m.map.value=A.map,t(A.map,m.uvTransform)),A.alphaMap&&(m.alphaMap.value=A.alphaMap,t(A.alphaMap,m.alphaMapTransform)),A.alphaTest>0&&(m.alphaTest.value=A.alphaTest)}function l(m,A){m.diffuse.value.copy(A.color),m.opacity.value=A.opacity,m.rotation.value=A.rotation,A.map&&(m.map.value=A.map,t(A.map,m.mapTransform)),A.alphaMap&&(m.alphaMap.value=A.alphaMap,t(A.alphaMap,m.alphaMapTransform)),A.alphaTest>0&&(m.alphaTest.value=A.alphaTest)}function u(m,A){m.specular.value.copy(A.specular),m.shininess.value=Math.max(A.shininess,1e-4)}function h(m,A){A.gradientMap&&(m.gradientMap.value=A.gradientMap)}function d(m,A){m.metalness.value=A.metalness,A.metalnessMap&&(m.metalnessMap.value=A.metalnessMap,t(A.metalnessMap,m.metalnessMapTransform)),m.roughness.value=A.roughness,A.roughnessMap&&(m.roughnessMap.value=A.roughnessMap,t(A.roughnessMap,m.roughnessMapTransform)),A.envMap&&(m.envMapIntensity.value=A.envMapIntensity)}function f(m,A,E){m.ior.value=A.ior,A.sheen>0&&(m.sheenColor.value.copy(A.sheenColor).multiplyScalar(A.sheen),m.sheenRoughness.value=A.sheenRoughness,A.sheenColorMap&&(m.sheenColorMap.value=A.sheenColorMap,t(A.sheenColorMap,m.sheenColorMapTransform)),A.sheenRoughnessMap&&(m.sheenRoughnessMap.value=A.sheenRoughnessMap,t(A.sheenRoughnessMap,m.sheenRoughnessMapTransform))),A.clearcoat>0&&(m.clearcoat.value=A.clearcoat,m.clearcoatRoughness.value=A.clearcoatRoughness,A.clearcoatMap&&(m.clearcoatMap.value=A.clearcoatMap,t(A.clearcoatMap,m.clearcoatMapTransform)),A.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=A.clearcoatRoughnessMap,t(A.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),A.clearcoatNormalMap&&(m.clearcoatNormalMap.value=A.clearcoatNormalMap,t(A.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(A.clearcoatNormalScale),A.side===Vt&&m.clearcoatNormalScale.value.negate())),A.dispersion>0&&(m.dispersion.value=A.dispersion),A.iridescence>0&&(m.iridescence.value=A.iridescence,m.iridescenceIOR.value=A.iridescenceIOR,m.iridescenceThicknessMinimum.value=A.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=A.iridescenceThicknessRange[1],A.iridescenceMap&&(m.iridescenceMap.value=A.iridescenceMap,t(A.iridescenceMap,m.iridescenceMapTransform)),A.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=A.iridescenceThicknessMap,t(A.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),A.transmission>0&&(m.transmission.value=A.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),A.transmissionMap&&(m.transmissionMap.value=A.transmissionMap,t(A.transmissionMap,m.transmissionMapTransform)),m.thickness.value=A.thickness,A.thicknessMap&&(m.thicknessMap.value=A.thicknessMap,t(A.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=A.attenuationDistance,m.attenuationColor.value.copy(A.attenuationColor)),A.anisotropy>0&&(m.anisotropyVector.value.set(A.anisotropy*Math.cos(A.anisotropyRotation),A.anisotropy*Math.sin(A.anisotropyRotation)),A.anisotropyMap&&(m.anisotropyMap.value=A.anisotropyMap,t(A.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=A.specularIntensity,m.specularColor.value.copy(A.specularColor),A.specularColorMap&&(m.specularColorMap.value=A.specularColorMap,t(A.specularColorMap,m.specularColorMapTransform)),A.specularIntensityMap&&(m.specularIntensityMap.value=A.specularIntensityMap,t(A.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,A){A.matcap&&(m.matcap.value=A.matcap)}function g(m,A){const E=e.get(A).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function zw(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,_){const S=_.program;i.uniformBlockBinding(E,S)}function l(E,_){let S=s[E.id];S===void 0&&(p(E),S=u(E),s[E.id]=S,E.addEventListener("dispose",m));const w=_.program;i.updateUBOMapping(E,w);const C=e.render.frame;r[E.id]!==C&&(d(E),r[E.id]=C)}function u(E){const _=h();E.__bindingPointIndex=_;const S=n.createBuffer(),w=E.__size,C=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,w,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,S),S}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const _=s[E.id],S=E.uniforms,w=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let C=0,B=S.length;C<B;C++){const U=Array.isArray(S[C])?S[C]:[S[C]];for(let y=0,v=U.length;y<v;y++){const R=U[y];if(f(R,C,y,w)===!0){const b=R.__offset,D=Array.isArray(R.value)?R.value:[R.value];let N=0;for(let F=0;F<D.length;F++){const Q=D[F],X=g(Q);typeof Q=="number"||typeof Q=="boolean"?(R.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,b+N,R.__data)):Q.isMatrix3?(R.__data[0]=Q.elements[0],R.__data[1]=Q.elements[1],R.__data[2]=Q.elements[2],R.__data[3]=0,R.__data[4]=Q.elements[3],R.__data[5]=Q.elements[4],R.__data[6]=Q.elements[5],R.__data[7]=0,R.__data[8]=Q.elements[6],R.__data[9]=Q.elements[7],R.__data[10]=Q.elements[8],R.__data[11]=0):(Q.toArray(R.__data,N),N+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,b,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(E,_,S,w){const C=E.value,B=_+"_"+S;if(w[B]===void 0)return typeof C=="number"||typeof C=="boolean"?w[B]=C:w[B]=C.clone(),!0;{const U=w[B];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return w[B]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function p(E){const _=E.uniforms;let S=0;const w=16;for(let B=0,U=_.length;B<U;B++){const y=Array.isArray(_[B])?_[B]:[_[B]];for(let v=0,R=y.length;v<R;v++){const b=y[v],D=Array.isArray(b.value)?b.value:[b.value];for(let N=0,F=D.length;N<F;N++){const Q=D[N],X=g(Q),z=S%w,j=z%X.boundary,ie=z+j;S+=j,ie!==0&&w-ie<X.storage&&(S+=w-ie),b.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=S,S+=X.storage}}}const C=S%w;return C>0&&(S+=w-C),E.__size=S,E.__cache={},this}function g(E){const _={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(_.boundary=4,_.storage=4):E.isVector2?(_.boundary=8,_.storage=8):E.isVector3||E.isColor?(_.boundary=16,_.storage=12):E.isVector4?(_.boundary=16,_.storage=16):E.isMatrix3?(_.boundary=48,_.storage=48):E.isMatrix4?(_.boundary=64,_.storage=64):E.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ie("WebGLRenderer: Unsupported uniform value type.",E),_}function m(E){const _=E.target;_.removeEventListener("dispose",m);const S=a.indexOf(_.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function A(){for(const E in s)n.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:c,update:l,dispose:A}}const Hw=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Si=null;function Vw(){return Si===null&&(Si=new Ma(Hw,32,32,ls,Bn),Si.minFilter=bt,Si.magFilter=bt,Si.wrapS=kn,Si.wrapT=kn,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}class Ww{constructor(e={}){const{canvas:t=Sy(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const p=new Set([df,hf,uf]),g=new Set([Ye,or,vo,Mo,cf,lf]),m=new Uint32Array(4),A=new Int32Array(4);let E=null,_=null;const S=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let B=!1;this._outputColorSpace=dt;let U=0,y=0,v=null,R=-1,b=null;const D=new ft,N=new ft;let F=null;const Q=new Se(0);let X=0,z=t.width,j=t.height,ie=1,te=null,pe=null;const be=new ft(0,0,z,j),et=new ft(0,0,z,j);let At=!1;const K=new _f;let ee=!1,me=!1;const We=new xe,Te=new x,tt=new ft,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function Rt(){return v===null?ie:1}let L=i;function nt(I,O){return t.getContext(I,O)}try{const I={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r181"),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",_e,!1),L===null){const O="webgl2";if(L=nt(O,I),L===null)throw nt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw I("WebGLRenderer: "+I.message),I}let it,St,ye,Lt,Re,Ve,T,M,G,Y,$,q,we,he,De,Ce,ne,ae,Fe,Pe,Ae,Oe,P,de;function oe(){it=new $C(L),it.init(),Oe=new Uw(L,it),St=new VC(L,it,e,Oe),ye=new Lw(L,it),St.reversedDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),Lt=new nI(L),Re=new Ew,Ve=new Pw(L,it,ye,Re,St,Oe,Lt),T=new qC(C),M=new jC(C),G=new aM(L),P=new zC(L,G),Y=new eI(L,G,Lt,P),$=new sI(L,Y,G,Lt),Fe=new iI(L,St,Ve),Ce=new WC(Re),q=new _w(C,T,M,it,St,P,Ce),we=new Gw(C,Re),he=new vw,De=new bw(it),ae=new GC(C,T,M,ye,$,f,c),ne=new Rw(C,$,St),de=new zw(L,Lt,St,ye),Pe=new HC(L,it,Lt),Ae=new tI(L,it,Lt),Lt.programs=q.programs,C.capabilities=St,C.extensions=it,C.properties=Re,C.renderLists=he,C.shadowMap=ne,C.state=ye,C.info=Lt}oe();const ce=new Ow(C,L);this.xr=ce,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const I=it.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=it.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(I){I!==void 0&&(ie=I,this.setSize(z,j,!1))},this.getSize=function(I){return I.set(z,j)},this.setSize=function(I,O,V=!0){if(ce.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}z=I,j=O,t.width=Math.floor(I*ie),t.height=Math.floor(O*ie),V===!0&&(t.style.width=I+"px",t.style.height=O+"px"),this.setViewport(0,0,I,O)},this.getDrawingBufferSize=function(I){return I.set(z*ie,j*ie).floor()},this.setDrawingBufferSize=function(I,O,V){z=I,j=O,ie=V,t.width=Math.floor(I*V),t.height=Math.floor(O*V),this.setViewport(0,0,I,O)},this.getCurrentViewport=function(I){return I.copy(D)},this.getViewport=function(I){return I.copy(be)},this.setViewport=function(I,O,V,W){I.isVector4?be.set(I.x,I.y,I.z,I.w):be.set(I,O,V,W),ye.viewport(D.copy(be).multiplyScalar(ie).round())},this.getScissor=function(I){return I.copy(et)},this.setScissor=function(I,O,V,W){I.isVector4?et.set(I.x,I.y,I.z,I.w):et.set(I,O,V,W),ye.scissor(N.copy(et).multiplyScalar(ie).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(I){ye.setScissorTest(At=I)},this.setOpaqueSort=function(I){te=I},this.setTransparentSort=function(I){pe=I},this.getClearColor=function(I){return I.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(I=!0,O=!0,V=!0){let W=0;if(I){let k=!1;if(v!==null){const re=v.texture.format;k=p.has(re)}if(k){const re=v.texture.type,fe=g.has(re),Ee=ae.getClearColor(),ge=ae.getClearAlpha(),Ue=Ee.r,Qe=Ee.g,Be=Ee.b;fe?(m[0]=Ue,m[1]=Qe,m[2]=Be,m[3]=ge,L.clearBufferuiv(L.COLOR,0,m)):(A[0]=Ue,A[1]=Qe,A[2]=Be,A[3]=ge,L.clearBufferiv(L.COLOR,0,A))}else W|=L.COLOR_BUFFER_BIT}O&&(W|=L.DEPTH_BUFFER_BIT),V&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),ae.dispose(),he.dispose(),De.dispose(),Re.dispose(),T.dispose(),M.dispose(),$.dispose(),P.dispose(),de.dispose(),q.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",uA),ce.removeEventListener("sessionend",hA),Ts.stop()};function se(I){I.preventDefault(),Pl("WebGLRenderer: Context Lost."),B=!0}function Z(){Pl("WebGLRenderer: Context Restored."),B=!1;const I=Lt.autoReset,O=ne.enabled,V=ne.autoUpdate,W=ne.needsUpdate,k=ne.type;oe(),Lt.autoReset=I,ne.enabled=O,ne.autoUpdate=V,ne.needsUpdate=W,ne.type=k}function _e(I){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ze(I){const O=I.target;O.removeEventListener("dispose",ze),Ct(O)}function Ct(I){mt(I),Re.remove(I)}function mt(I){const O=Re.get(I).programs;O!==void 0&&(O.forEach(function(V){q.releaseProgram(V)}),I.isShaderMaterial&&q.releaseShaderCache(I))}this.renderBufferDirect=function(I,O,V,W,k,re){O===null&&(O=jt);const fe=k.isMesh&&k.matrixWorld.determinant()<0,Ee=RE(I,O,V,W,k);ye.setMaterial(W,fe);let ge=V.index,Ue=1;if(W.wireframe===!0){if(ge=Y.getWireframeAttribute(V),ge===void 0)return;Ue=2}const Qe=V.drawRange,Be=V.attributes.position;let st=Qe.start*Ue,xt=(Qe.start+Qe.count)*Ue;re!==null&&(st=Math.max(st,re.start*Ue),xt=Math.min(xt,(re.start+re.count)*Ue)),ge!==null?(st=Math.max(st,0),xt=Math.min(xt,ge.count)):Be!=null&&(st=Math.max(st,0),xt=Math.min(xt,Be.count));const Nt=xt-st;if(Nt<0||Nt===1/0)return;P.setup(k,W,Ee,V,ge);let Qt,yt=Pe;if(ge!==null&&(Qt=G.get(ge),yt=Ae,yt.setIndex(Qt)),k.isMesh)W.wireframe===!0?(ye.setLineWidth(W.wireframeLinewidth*Rt()),yt.setMode(L.LINES)):yt.setMode(L.TRIANGLES);else if(k.isLine){let Le=W.linewidth;Le===void 0&&(Le=1),ye.setLineWidth(Le*Rt()),k.isLineSegments?yt.setMode(L.LINES):k.isLineLoop?yt.setMode(L.LINE_LOOP):yt.setMode(L.LINE_STRIP)}else k.isPoints?yt.setMode(L.POINTS):k.isSprite&&yt.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Lo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))yt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Le=k._multiDrawStarts,Pt=k._multiDrawCounts,ut=k._multiDrawCount,Cn=ge?G.get(ge).bytesPerElement:1,pr=Re.get(W).currentProgram.getUniforms();for(let In=0;In<ut;In++)pr.setValue(L,"_gl_DrawID",In),yt.render(Le[In]/Cn,Pt[In])}else if(k.isInstancedMesh)yt.renderInstances(st,Nt,k.count);else if(V.isInstancedBufferGeometry){const Le=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Pt=Math.min(V.instanceCount,Le);yt.renderInstances(st,Nt,Pt)}else yt.render(st,Nt)};function ni(I,O,V){I.transparent===!0&&I.side===kt&&I.forceSinglePass===!1?(I.side=Vt,I.needsUpdate=!0,jo(I,O,V),I.side=Gn,I.needsUpdate=!0,jo(I,O,V),I.side=kt):jo(I,O,V)}this.compile=function(I,O,V=null){V===null&&(V=I),_=De.get(V),_.init(O),w.push(_),V.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(_.pushLight(k),k.castShadow&&_.pushShadow(k))}),I!==V&&I.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(_.pushLight(k),k.castShadow&&_.pushShadow(k))}),_.setupLights();const W=new Set;return I.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const re=k.material;if(re)if(Array.isArray(re))for(let fe=0;fe<re.length;fe++){const Ee=re[fe];ni(Ee,V,k),W.add(Ee)}else ni(re,V,k),W.add(re)}),_=w.pop(),W},this.compileAsync=function(I,O,V=null){const W=this.compile(I,O,V);return new Promise(k=>{function re(){if(W.forEach(function(fe){Re.get(fe).currentProgram.isReady()&&W.delete(fe)}),W.size===0){k(I);return}setTimeout(re,10)}it.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let zn=null;function BE(I){zn&&zn(I)}function uA(){Ts.stop()}function hA(){Ts.start()}const Ts=new W0;Ts.setAnimationLoop(BE),typeof self<"u"&&Ts.setContext(self),this.setAnimationLoop=function(I){zn=I,ce.setAnimationLoop(I),I===null?Ts.stop():Ts.start()},ce.addEventListener("sessionstart",uA),ce.addEventListener("sessionend",hA),this.render=function(I,O){if(O!==void 0&&O.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(O),O=ce.getCamera()),I.isScene===!0&&I.onBeforeRender(C,I,O,v),_=De.get(I,w.length),_.init(O),w.push(_),We.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),K.setFromProjectionMatrix(We,li,O.reversedDepth),me=this.localClippingEnabled,ee=Ce.init(this.clippingPlanes,me),E=he.get(I,S.length),E.init(),S.push(E),ce.enabled===!0&&ce.isPresenting===!0){const re=C.xr.getDepthSensingMesh();re!==null&&Au(re,O,-1/0,C.sortObjects)}Au(I,O,0,C.sortObjects),E.finish(),C.sortObjects===!0&&E.sort(te,pe),je=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,je&&ae.addToRenderList(E,I),this.info.render.frame++,ee===!0&&Ce.beginShadows();const V=_.state.shadowsArray;ne.render(V,I,O),ee===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=E.opaque,k=E.transmissive;if(_.setupLights(),O.isArrayCamera){const re=O.cameras;if(k.length>0)for(let fe=0,Ee=re.length;fe<Ee;fe++){const ge=re[fe];fA(W,k,I,ge)}je&&ae.render(I);for(let fe=0,Ee=re.length;fe<Ee;fe++){const ge=re[fe];dA(E,I,ge,ge.viewport)}}else k.length>0&&fA(W,k,I,O),je&&ae.render(I),dA(E,I,O);v!==null&&y===0&&(Ve.updateMultisampleRenderTarget(v),Ve.updateRenderTargetMipmap(v)),I.isScene===!0&&I.onAfterRender(C,I,O),P.resetDefaultState(),R=-1,b=null,w.pop(),w.length>0?(_=w[w.length-1],ee===!0&&Ce.setGlobalState(C.clippingPlanes,_.state.camera)):_=null,S.pop(),S.length>0?E=S[S.length-1]:E=null};function Au(I,O,V,W){if(I.visible===!1)return;if(I.layers.test(O.layers)){if(I.isGroup)V=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(O);else if(I.isLight)_.pushLight(I),I.castShadow&&_.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||K.intersectsSprite(I)){W&&tt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(We);const fe=$.update(I),Ee=I.material;Ee.visible&&E.push(I,fe,Ee,V,tt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||K.intersectsObject(I))){const fe=$.update(I),Ee=I.material;if(W&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),tt.copy(I.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),tt.copy(fe.boundingSphere.center)),tt.applyMatrix4(I.matrixWorld).applyMatrix4(We)),Array.isArray(Ee)){const ge=fe.groups;for(let Ue=0,Qe=ge.length;Ue<Qe;Ue++){const Be=ge[Ue],st=Ee[Be.materialIndex];st&&st.visible&&E.push(I,fe,st,V,tt.z,Be)}}else Ee.visible&&E.push(I,fe,Ee,V,tt.z,null)}}const re=I.children;for(let fe=0,Ee=re.length;fe<Ee;fe++)Au(re[fe],O,V,W)}function dA(I,O,V,W){const{opaque:k,transmissive:re,transparent:fe}=I;_.setupLightsView(V),ee===!0&&Ce.setGlobalState(C.clippingPlanes,V),W&&ye.viewport(D.copy(W)),k.length>0&&Zo(k,O,V),re.length>0&&Zo(re,O,V),fe.length>0&&Zo(fe,O,V),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function fA(I,O,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[W.id]===void 0&&(_.state.transmissionRenderTarget[W.id]=new fi(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Bn:Ye,minFilter:Yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const re=_.state.transmissionRenderTarget[W.id],fe=W.viewport||D;re.setSize(fe.z*C.transmissionResolutionScale,fe.w*C.transmissionResolutionScale);const Ee=C.getRenderTarget(),ge=C.getActiveCubeFace(),Ue=C.getActiveMipmapLevel();C.setRenderTarget(re),C.getClearColor(Q),X=C.getClearAlpha(),X<1&&C.setClearColor(16777215,.5),C.clear(),je&&ae.render(V);const Qe=C.toneMapping;C.toneMapping=gs;const Be=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),_.setupLightsView(W),ee===!0&&Ce.setGlobalState(C.clippingPlanes,W),Zo(I,V,W),Ve.updateMultisampleRenderTarget(re),Ve.updateRenderTargetMipmap(re),it.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let xt=0,Nt=O.length;xt<Nt;xt++){const Qt=O[xt],{object:yt,geometry:Le,material:Pt,group:ut}=Qt;if(Pt.side===kt&&yt.layers.test(W.layers)){const Cn=Pt.side;Pt.side=Vt,Pt.needsUpdate=!0,AA(yt,V,W,Le,Pt,ut),Pt.side=Cn,Pt.needsUpdate=!0,st=!0}}st===!0&&(Ve.updateMultisampleRenderTarget(re),Ve.updateRenderTargetMipmap(re))}C.setRenderTarget(Ee,ge,Ue),C.setClearColor(Q,X),Be!==void 0&&(W.viewport=Be),C.toneMapping=Qe}function Zo(I,O,V){const W=O.isScene===!0?O.overrideMaterial:null;for(let k=0,re=I.length;k<re;k++){const fe=I[k],{object:Ee,geometry:ge,group:Ue}=fe;let Qe=fe.material;Qe.allowOverride===!0&&W!==null&&(Qe=W),Ee.layers.test(V.layers)&&AA(Ee,O,V,ge,Qe,Ue)}}function AA(I,O,V,W,k,re){I.onBeforeRender(C,O,V,W,k,re),I.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),k.onBeforeRender(C,O,V,W,I,re),k.transparent===!0&&k.side===kt&&k.forceSinglePass===!1?(k.side=Vt,k.needsUpdate=!0,C.renderBufferDirect(V,O,W,k,I,re),k.side=Gn,k.needsUpdate=!0,C.renderBufferDirect(V,O,W,k,I,re),k.side=kt):C.renderBufferDirect(V,O,W,k,I,re),I.onAfterRender(C,O,V,W,k,re)}function jo(I,O,V){O.isScene!==!0&&(O=jt);const W=Re.get(I),k=_.state.lights,re=_.state.shadowsArray,fe=k.state.version,Ee=q.getParameters(I,k.state,re,O,V),ge=q.getProgramCacheKey(Ee);let Ue=W.programs;W.environment=I.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(I.isMeshStandardMaterial?M:T).get(I.envMap||W.environment),W.envMapRotation=W.environment!==null&&I.envMap===null?O.environmentRotation:I.envMapRotation,Ue===void 0&&(I.addEventListener("dispose",ze),Ue=new Map,W.programs=Ue);let Qe=Ue.get(ge);if(Qe!==void 0){if(W.currentProgram===Qe&&W.lightsStateVersion===fe)return gA(I,Ee),Qe}else Ee.uniforms=q.getUniforms(I),I.onBeforeCompile(Ee,C),Qe=q.acquireProgram(Ee,ge),Ue.set(ge,Qe),W.uniforms=Ee.uniforms;const Be=W.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Be.clippingPlanes=Ce.uniform),gA(I,Ee),W.needsLights=LE(I),W.lightsStateVersion=fe,W.needsLights&&(Be.ambientLightColor.value=k.state.ambient,Be.lightProbe.value=k.state.probe,Be.directionalLights.value=k.state.directional,Be.directionalLightShadows.value=k.state.directionalShadow,Be.spotLights.value=k.state.spot,Be.spotLightShadows.value=k.state.spotShadow,Be.rectAreaLights.value=k.state.rectArea,Be.ltc_1.value=k.state.rectAreaLTC1,Be.ltc_2.value=k.state.rectAreaLTC2,Be.pointLights.value=k.state.point,Be.pointLightShadows.value=k.state.pointShadow,Be.hemisphereLights.value=k.state.hemi,Be.directionalShadowMap.value=k.state.directionalShadowMap,Be.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Be.spotShadowMap.value=k.state.spotShadowMap,Be.spotLightMatrix.value=k.state.spotLightMatrix,Be.spotLightMap.value=k.state.spotLightMap,Be.pointShadowMap.value=k.state.pointShadowMap,Be.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Qe,W.uniformsList=null,Qe}function pA(I){if(I.uniformsList===null){const O=I.currentProgram.getUniforms();I.uniformsList=pl.seqWithValue(O.seq,I.uniforms)}return I.uniformsList}function gA(I,O){const V=Re.get(I);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function RE(I,O,V,W,k){O.isScene!==!0&&(O=jt),Ve.resetTextureUnits();const re=O.fog,fe=W.isMeshStandardMaterial?O.environment:null,Ee=v===null?C.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:sn,ge=(W.isMeshStandardMaterial?M:T).get(W.envMap||fe),Ue=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Qe=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Be=!!V.morphAttributes.position,st=!!V.morphAttributes.normal,xt=!!V.morphAttributes.color;let Nt=gs;W.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(Nt=C.toneMapping);const Qt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,yt=Qt!==void 0?Qt.length:0,Le=Re.get(W),Pt=_.state.lights;if(ee===!0&&(me===!0||I!==b)){const ln=I===b&&W.id===R;Ce.setState(W,I,ln)}let ut=!1;W.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Pt.state.version||Le.outputColorSpace!==Ee||k.isBatchedMesh&&Le.batching===!1||!k.isBatchedMesh&&Le.batching===!0||k.isBatchedMesh&&Le.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Le.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Le.instancing===!1||!k.isInstancedMesh&&Le.instancing===!0||k.isSkinnedMesh&&Le.skinning===!1||!k.isSkinnedMesh&&Le.skinning===!0||k.isInstancedMesh&&Le.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Le.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Le.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Le.instancingMorph===!1&&k.morphTexture!==null||Le.envMap!==ge||W.fog===!0&&Le.fog!==re||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==Ce.numPlanes||Le.numIntersection!==Ce.numIntersection)||Le.vertexAlphas!==Ue||Le.vertexTangents!==Qe||Le.morphTargets!==Be||Le.morphNormals!==st||Le.morphColors!==xt||Le.toneMapping!==Nt||Le.morphTargetsCount!==yt)&&(ut=!0):(ut=!0,Le.__version=W.version);let Cn=Le.currentProgram;ut===!0&&(Cn=jo(W,O,k));let pr=!1,In=!1,Da=!1;const Ut=Cn.getUniforms(),_n=Le.uniforms;if(ye.useProgram(Cn.program)&&(pr=!0,In=!0,Da=!0),W.id!==R&&(R=W.id,In=!0),pr||b!==I){ye.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Ut.setValue(L,"projectionMatrix",I.projectionMatrix),Ut.setValue(L,"viewMatrix",I.matrixWorldInverse);const En=Ut.map.cameraPosition;En!==void 0&&En.setValue(L,Te.setFromMatrixPosition(I.matrixWorld)),St.logarithmicDepthBuffer&&Ut.setValue(L,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ut.setValue(L,"isOrthographic",I.isOrthographicCamera===!0),b!==I&&(b=I,In=!0,Da=!0)}if(k.isSkinnedMesh){Ut.setOptional(L,k,"bindMatrix"),Ut.setOptional(L,k,"bindMatrixInverse");const ln=k.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Ut.setValue(L,"boneTexture",ln.boneTexture,Ve))}k.isBatchedMesh&&(Ut.setOptional(L,k,"batchingTexture"),Ut.setValue(L,"batchingTexture",k._matricesTexture,Ve),Ut.setOptional(L,k,"batchingIdTexture"),Ut.setValue(L,"batchingIdTexture",k._indirectTexture,Ve),Ut.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&Ut.setValue(L,"batchingColorTexture",k._colorsTexture,Ve));const Ln=V.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&Fe.update(k,V,Cn),(In||Le.receiveShadow!==k.receiveShadow)&&(Le.receiveShadow=k.receiveShadow,Ut.setValue(L,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(_n.envMap.value=ge,_n.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(_n.envMapIntensity.value=O.environmentIntensity),_n.dfgLUT!==void 0&&(_n.dfgLUT.value=Vw()),In&&(Ut.setValue(L,"toneMappingExposure",C.toneMappingExposure),Le.needsLights&&DE(_n,Da),re&&W.fog===!0&&we.refreshFogUniforms(_n,re),we.refreshMaterialUniforms(_n,W,ie,j,_.state.transmissionRenderTarget[I.id]),pl.upload(L,pA(Le),_n,Ve)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(pl.upload(L,pA(Le),_n,Ve),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ut.setValue(L,"center",k.center),Ut.setValue(L,"modelViewMatrix",k.modelViewMatrix),Ut.setValue(L,"normalMatrix",k.normalMatrix),Ut.setValue(L,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const ln=W.uniformsGroups;for(let En=0,pu=ln.length;En<pu;En++){const Bs=ln[En];de.update(Bs,Cn),de.bind(Bs,Cn)}}return Cn}function DE(I,O){I.ambientLightColor.needsUpdate=O,I.lightProbe.needsUpdate=O,I.directionalLights.needsUpdate=O,I.directionalLightShadows.needsUpdate=O,I.pointLights.needsUpdate=O,I.pointLightShadows.needsUpdate=O,I.spotLights.needsUpdate=O,I.spotLightShadows.needsUpdate=O,I.rectAreaLights.needsUpdate=O,I.hemisphereLights.needsUpdate=O}function LE(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(I,O,V){const W=Re.get(I);W.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Re.get(I.texture).__webglTexture=O,Re.get(I.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:V,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,O){const V=Re.get(I);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0};const PE=L.createFramebuffer();this.setRenderTarget=function(I,O=0,V=0){v=I,U=O,y=V;let W=!0,k=null,re=!1,fe=!1;if(I){const ge=Re.get(I);if(ge.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(L.FRAMEBUFFER,null),W=!1;else if(ge.__webglFramebuffer===void 0)Ve.setupRenderTarget(I);else if(ge.__hasExternalTextures)Ve.rebindTextures(I,Re.get(I.texture).__webglTexture,Re.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Be=I.depthTexture;if(ge.__boundDepthTexture!==Be){if(Be!==null&&Re.has(Be)&&(I.width!==Be.image.width||I.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(I)}}const Ue=I.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(fe=!0);const Qe=Re.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Qe[O])?k=Qe[O][V]:k=Qe[O],re=!0):I.samples>0&&Ve.useMultisampledRTT(I)===!1?k=Re.get(I).__webglMultisampledFramebuffer:Array.isArray(Qe)?k=Qe[V]:k=Qe,D.copy(I.viewport),N.copy(I.scissor),F=I.scissorTest}else D.copy(be).multiplyScalar(ie).floor(),N.copy(et).multiplyScalar(ie).floor(),F=At;if(V!==0&&(k=PE),ye.bindFramebuffer(L.FRAMEBUFFER,k)&&W&&ye.drawBuffers(I,k),ye.viewport(D),ye.scissor(N),ye.setScissorTest(F),re){const ge=Re.get(I.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,ge.__webglTexture,V)}else if(fe){const ge=O;for(let Ue=0;Ue<I.textures.length;Ue++){const Qe=Re.get(I.textures[Ue]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ue,Qe.__webglTexture,V,ge)}}else if(I!==null&&V!==0){const ge=Re.get(I.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ge.__webglTexture,V)}R=-1},this.readRenderTargetPixels=function(I,O,V,W,k,re,fe,Ee=0){if(!(I&&I.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Re.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge){ye.bindFramebuffer(L.FRAMEBUFFER,ge);try{const Ue=I.textures[Ee],Qe=Ue.format,Be=Ue.type;if(!St.textureFormatReadable(Qe)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Be)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=I.width-W&&V>=0&&V<=I.height-k&&(I.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ee),L.readPixels(O,V,W,k,Oe.convert(Qe),Oe.convert(Be),re))}finally{const Ue=v!==null?Re.get(v).__webglFramebuffer:null;ye.bindFramebuffer(L.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(I,O,V,W,k,re,fe,Ee=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Re.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge)if(O>=0&&O<=I.width-W&&V>=0&&V<=I.height-k){ye.bindFramebuffer(L.FRAMEBUFFER,ge);const Ue=I.textures[Ee],Qe=Ue.format,Be=Ue.type;if(!St.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,st),L.bufferData(L.PIXEL_PACK_BUFFER,re.byteLength,L.STREAM_READ),I.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ee),L.readPixels(O,V,W,k,Oe.convert(Qe),Oe.convert(Be),0);const xt=v!==null?Re.get(v).__webglFramebuffer:null;ye.bindFramebuffer(L.FRAMEBUFFER,xt);const Nt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Cy(L,Nt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,st),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,re),L.deleteBuffer(st),L.deleteSync(Nt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,O=null,V=0){const W=Math.pow(2,-V),k=Math.floor(I.image.width*W),re=Math.floor(I.image.height*W),fe=O!==null?O.x:0,Ee=O!==null?O.y:0;Ve.setTexture2D(I,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,fe,Ee,k,re),ye.unbindTexture()};const UE=L.createFramebuffer(),FE=L.createFramebuffer();this.copyTextureToTexture=function(I,O,V=null,W=null,k=0,re=null){re===null&&(k!==0?(Lo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=k,k=0):re=0);let fe,Ee,ge,Ue,Qe,Be,st,xt,Nt;const Qt=I.isCompressedTexture?I.mipmaps[re]:I.image;if(V!==null)fe=V.max.x-V.min.x,Ee=V.max.y-V.min.y,ge=V.isBox3?V.max.z-V.min.z:1,Ue=V.min.x,Qe=V.min.y,Be=V.isBox3?V.min.z:0;else{const Ln=Math.pow(2,-k);fe=Math.floor(Qt.width*Ln),Ee=Math.floor(Qt.height*Ln),I.isDataArrayTexture?ge=Qt.depth:I.isData3DTexture?ge=Math.floor(Qt.depth*Ln):ge=1,Ue=0,Qe=0,Be=0}W!==null?(st=W.x,xt=W.y,Nt=W.z):(st=0,xt=0,Nt=0);const yt=Oe.convert(O.format),Le=Oe.convert(O.type);let Pt;O.isData3DTexture?(Ve.setTexture3D(O,0),Pt=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ve.setTexture2DArray(O,0),Pt=L.TEXTURE_2D_ARRAY):(Ve.setTexture2D(O,0),Pt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const ut=L.getParameter(L.UNPACK_ROW_LENGTH),Cn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),pr=L.getParameter(L.UNPACK_SKIP_PIXELS),In=L.getParameter(L.UNPACK_SKIP_ROWS),Da=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Qt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Qt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ue),L.pixelStorei(L.UNPACK_SKIP_ROWS,Qe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Be);const Ut=I.isDataArrayTexture||I.isData3DTexture,_n=O.isDataArrayTexture||O.isData3DTexture;if(I.isDepthTexture){const Ln=Re.get(I),ln=Re.get(O),En=Re.get(Ln.__renderTarget),pu=Re.get(ln.__renderTarget);ye.bindFramebuffer(L.READ_FRAMEBUFFER,En.__webglFramebuffer),ye.bindFramebuffer(L.DRAW_FRAMEBUFFER,pu.__webglFramebuffer);for(let Bs=0;Bs<ge;Bs++)Ut&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Re.get(I).__webglTexture,k,Be+Bs),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Re.get(O).__webglTexture,re,Nt+Bs)),L.blitFramebuffer(Ue,Qe,fe,Ee,st,xt,fe,Ee,L.DEPTH_BUFFER_BIT,L.NEAREST);ye.bindFramebuffer(L.READ_FRAMEBUFFER,null),ye.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||I.isRenderTargetTexture||Re.has(I)){const Ln=Re.get(I),ln=Re.get(O);ye.bindFramebuffer(L.READ_FRAMEBUFFER,UE),ye.bindFramebuffer(L.DRAW_FRAMEBUFFER,FE);for(let En=0;En<ge;En++)Ut?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ln.__webglTexture,k,Be+En):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ln.__webglTexture,k),_n?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ln.__webglTexture,re,Nt+En):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ln.__webglTexture,re),k!==0?L.blitFramebuffer(Ue,Qe,fe,Ee,st,xt,fe,Ee,L.COLOR_BUFFER_BIT,L.NEAREST):_n?L.copyTexSubImage3D(Pt,re,st,xt,Nt+En,Ue,Qe,fe,Ee):L.copyTexSubImage2D(Pt,re,st,xt,Ue,Qe,fe,Ee);ye.bindFramebuffer(L.READ_FRAMEBUFFER,null),ye.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else _n?I.isDataTexture||I.isData3DTexture?L.texSubImage3D(Pt,re,st,xt,Nt,fe,Ee,ge,yt,Le,Qt.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(Pt,re,st,xt,Nt,fe,Ee,ge,yt,Qt.data):L.texSubImage3D(Pt,re,st,xt,Nt,fe,Ee,ge,yt,Le,Qt):I.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,re,st,xt,fe,Ee,yt,Le,Qt.data):I.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,re,st,xt,Qt.width,Qt.height,yt,Qt.data):L.texSubImage2D(L.TEXTURE_2D,re,st,xt,fe,Ee,yt,Le,Qt);L.pixelStorei(L.UNPACK_ROW_LENGTH,ut),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Cn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,pr),L.pixelStorei(L.UNPACK_SKIP_ROWS,In),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Da),re===0&&O.generateMipmaps&&L.generateMipmap(Pt),ye.unbindTexture()},this.initRenderTarget=function(I){Re.get(I).__webglFramebuffer===void 0&&Ve.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?Ve.setTextureCube(I,0):I.isData3DTexture?Ve.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?Ve.setTexture2DArray(I,0):Ve.setTexture2D(I,0),ye.unbindTexture()},this.resetState=function(){U=0,y=0,v=null,ye.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const zi=.1,Tc=.0083,cr=.3,qw=.5,Xw=.6,Yw=.6,Kw=.95,Jw=1.25,Np=.88,Qp=25*Math.PI/180,Op=.9,J0=.003,Zw=50*Math.PI/180,Z0=3,jw=.05,$w=.6,eb=1/20,tb=6e3,nb=zi*60/(2*Math.PI),ba=window.matchMedia("(prefers-reduced-motion: reduce)"),ib=1,sb=60,kp=160,Gp=120,pa={nightLights:!0,namedAsteroidModels:!1,edition:null,holograms:!0},Ao=n=>pa.holograms&&n.status==="Planned";function Wo(n){return(pa.namedAsteroidModels||n.model_named_shown)&&n.model_named?n.model_named:n.model||null}const nu=new Set(["planet","moon","asteroid","comet"]),rb=nu,ga=1495978707e-1,Bd=2.1,zp=1e3/Math.log(1+1/Bd),j0=1e5,$0=5,iu={name:"diagram",au:n=>zp*Math.log(1+n/Bd),toAu:n=>Bd*(Math.exp(n/zp)-1),aroundBody(n,e){const t=Math.max(0,n-e.radiusKm);return e.radius+Math.hypot(e.unit*e.knee*Math.log(1+t/e.knee),cr*(e.clear??1))},fromBody(n,e){const t=Math.sqrt(Math.max(0,(n-e.radius)**2-(cr*(e.clear??1))**2));return e.radiusKm+e.knee*Math.expm1(t/(e.unit*e.knee))}},Ks=6371/5,ex={name:"true",au:n=>n*ga/Ks,toAu:n=>n*Ks/ga,aroundBody:n=>n/Ks,fromBody:n=>n*Ks},Uo={diagram:iu,true:ex};let jn=iu;function ab(n){jn=Uo[n]}const Hp=(n,e,t)=>n>0&&e>0?n**(1-t)*e**t:n+(e-n)*t;function tx(n,e){const t={radius:e.radiusD,radiusKm:e.radiusKm,unit:e.radiusD/e.radiusKm,knee:e.knee,clear:e.clear};return[iu.aroundBody(n,t)-e.radiusD,Math.max(0,n-e.radiusKm)/Ks]}function ob(n){const e=t=>t>0?Hp(iu.au(t),ex.au(t),n):0;jn={name:"mixed",au:e,toAu(t){let i=Math.log(1e-6),s=Math.log(1e4);for(let r=0;r<60;r++){const a=(i+s)/2;e(Math.exp(a))>t?s=a:i=a}return Math.exp((i+s)/2)},aroundBody(t,i){const[s,r]=tx(t,i);return i.radius+Hp(s,r,n)}}}const J=new Map,Rd=[],cb=new Date("2000-01-01T12:00:00Z"),Vp=new WeakMap;function lb(n,e,t,i){let s=Vp.get(n);return s||Vp.set(n,s={peri:NaN,inc:NaN,node:NaN}),(s.peri!==e||s.inc!==t||s.node!==i)&&(s.peri=e,s.inc=t,s.node=i,s.cp=Math.cos(-e),s.sp=Math.sin(-e),s.ci=Math.cos(t),s.si=Math.sin(t),s.cn=Math.cos(-i),s.sn=Math.sin(-i)),s}function Ar(n){return(n-cb)/864e5}const Hi=n=>jn.au(n),ub=n=>jn.toAu(n),hb=new Set(["asteroid","comet"]),su=(n,e)=>jn.aroundBody(n,e);function Tf(n){const e=1+(n.e||0);return n.a_au!==void 0?Hi(n.a_au*e):n.a_km!==void 0&&n.scale?su(n.a_km*e,n.scale):(n.a||0)*e}function Wp(n,e){if(!n||(n.a_au!==void 0&&(n.a=Hi(n.a_au)),n.a_km===void 0||!e))return;n.scale=nx(e),n.a=su(n.a_km,n.scale),n.node??=0,n.peri??=0;const t=n.plane??e.pole??"ecliptic";n.frame=t==="ecliptic"?null:Ab(t)}function nx(n){return{radius:n.radius,radiusD:n.radius_diagram??n.radius,radiusKm:n.radius_km,unit:n.radius/n.radius_km,knee:n.knee??(hb.has(n.type)?$0:j0),clear:n.diagram_clearance??1}}function qp(n,e,t){if(n*e<=t)return 1/0;let i=1e-4,s=1e9;for(let r=0;r<80;r++){const a=Math.sqrt(i*s);n*a*Math.log(1+e/a)>t?s=a:i=a}return Math.sqrt(i*s)}function Nl(n,e){return n.orbit.a_au*ga*Math.cbrt(n.gm/(3*e.gm))}function ma(n,e){return su(e,nx(n))}function db(n,e,t=jn){return n.a_au!==void 0?t.toAu(e):n.a_km!==void 0&&n.scale?t.fromBody(e,n.scale):null}function Xp(n,e){return n.a_au!==void 0?{above:!1,ends:[Uo.diagram.au(e),Uo.true.au(e)]}:n.a_km!==void 0&&n.scale?{above:!0,ends:tx(e,n.scale)}:null}function fb(n,e,t){return(t==="L1"?-1:1)*ma(n,Nl(n,e))}function ix(n,e,t){const i=(n.M0+n.rate*e)*(Math.PI/180);return t.set(-n.amp.x*Math.cos(i),n.amp.y*Math.cos(i),n.amp.z*Math.sin(i))}function Ab(n){const e=vs(n),t=vs({ra:0,dec:90}).cross(e);t.lengthSq()<1e-12&&t.set(1,0,0),t.normalize();const i=e.clone().cross(t);return{x:t,y:e,z:i.negate()}}const th=new x,nh=new x,ih=new x,pb=new xe;function gb(n,e,t){const i=$n(e,t),s=$n(e,t+.001);th.set(-i.x,-i.y,-i.z).normalize(),nh.set(i.x,i.y,i.z).cross(ih.set(s.x-i.x,s.y-i.y,s.z-i.z)).normalize(),ih.crossVectors(th,nh),n.quaternion.setFromRotationMatrix(pb.makeBasis(th,nh,ih))}const Yp=23.4392911*(Math.PI/180);function vs({ra:n,dec:e}){const t=n*(Math.PI/180),i=e*(Math.PI/180),s=Math.cos(i)*Math.cos(t),r=Math.cos(i)*Math.sin(t),a=Math.sin(i),o=Math.cos(Yp),c=Math.sin(Yp),l=r*o+a*c,u=-r*c+a*o;return new x(s,u,-l)}function $n(n,e,t=e){if(!n||n.a===0)return{x:0,y:0,z:0};const i=(n.M0+n.rate*e)%360*(Math.PI/180);return Bf(n,_b(i,n.e||0),t)}const mb=new Set(["trajectory","libration","suborbital","landed"]),sx=(n,e)=>n?.hold_days??e,Kp=(n,e)=>{const t=$n(n,e);return Math.atan2(-t.z,t.x)*(180/Math.PI)};function xb(n,e={}){const t=Ar(n);J.forEach(({data:i})=>{i.orbit&&(!i.parent||i.parent==="Sun")&&!i.lagrange&&!mb.has(i.orbit_type)&&(i.orbit.hold_days=t)}),Object.entries(e).forEach(([i,{from:s,angle:r=0}])=>{const a=J.get(i)?.data.orbit,o=J.get(s)?.data.orbit;if(a?.hold_days===void 0||!o)return console.warn(`holdOrbits: can't place ${i} from ${s}`);const c=Kp(o,t)+r;for(let l=0;l<4;l++)a.M0+=((c-Kp(a,t))%360+540)%360-180})}function _b(n,e){let t=e<.8?n:Math.PI;for(let i=0;i<50;i++){const s=(t-e*Math.sin(t)-n)/(1-e*Math.cos(t));if(t-=s,Math.abs(s)<1e-14)break}return t}function Bf(n,e,t){const i=n.e||0,s=n.a_au!==void 0,r=!s&&n.a_km!==void 0&&n.scale,a=s?n.a_au:r?n.a_km:n.a,o=a*(Math.cos(e)-i),c=a*Math.sqrt(1-i*i)*Math.sin(e),l=Math.hypot(o,c),u=l>0&&s?Hi(l)/l:l>0&&r?su(l,n.scale)/l:1;if(n.node===void 0||n.peri===void 0){const B=(n.i||0)*(Math.PI/180);return{x:o*u,y:-c*Math.sin(B)*u,z:-c*Math.cos(B)*u}}const h=(n.peri+(n.peri_rate||0)*t)*(Math.PI/180),d=(n.node+(n.node_rate||0)*t)*(Math.PI/180),f=n.i*(Math.PI/180),p=lb(n,h,f,d),g=o*p.cp+c*p.sp,m=c*p.cp-o*p.sp,A=-m*p.si,E=m*p.ci,_=(g*p.cn+E*p.sn)*u,S=-A*u,w=-(E*p.cn-g*p.sn)*u,C=n.frame;return C?{x:_*C.x.x+S*C.y.x+w*C.z.x,y:_*C.x.y+S*C.y.y+w*C.z.y,z:_*C.x.z+S*C.y.z+w*C.z.z}:{x:_,y:S,z:w}}const Jp=1,Eb=2.5;function rx(n,e){const t=J.get(n);if(!t)return new x;const i=$n(t.data.orbit,sx(t.data.orbit,e)),s=new x(i.x,i.y,i.z);return t.data.parent&&t.data.parent!=="Sun"&&s.add(rx(t.data.parent,e)),s}const yb=n=>Ar(new Date(`${n}T12:00:00Z`));function sh(n,e){const t=n.length,i=[],s=new Array(t).fill(0);for(let a=0;a<t-1;a++)i.push((e[a+1]-e[a])/(n[a+1]-n[a]));s[0]=i[0],s[t-1]=i[t-2];for(let a=1;a<t-1;a++){if(i[a-1]*i[a]<=0){s[a]=0;continue}const o=2*(n[a+1]-n[a])+(n[a]-n[a-1]),c=n[a+1]-n[a]+2*(n[a]-n[a-1]);s[a]=(o+c)/(o/i[a-1]+c/i[a])}let r=0;return a=>{for(a<n[r]&&(r=0);r<t-2&&a>n[r+1];)r++;const o=n[r+1]-n[r],c=at.clamp((a-n[r])/o,0,1),l=c*c,u=l*c;return(2*u-3*l+1)*e[r]+(u-2*l+c)*o*s[r]+(-2*u+3*l)*e[r+1]+(u-l)*o*s[r+1]}}function ir(n){if(n.trajectoryPlan)return n.trajectoryPlan;const e=n.data.trajectory||{},t=(e.waypoints||[]).map(l=>({...l,days:yb(l.date)})),i=e.arrival_orbit&&t.length?t[t.length-1]:null,s=t.map((l,u)=>{const h=rx(l.at,l.days);if(i&&u===t.length-1){const p=$n(e.arrival_orbit,l.days);return h.add(new x(p.x,p.y,p.z))}const d=J.get(l.at)?.data.radius||1,f=new x(h.x,0,h.z).normalize();return h.addScaledVector(f,d*Eb)}),r={days:[],angle:[],radius:[],height:[]},a=[];let o=s.length?Math.atan2(s[0].x,s[0].z):0;for(let l=0;l+1<t.length;l++){const u=s[l],h=s[l+1],d=t[l+1],f=t[l].days,p=d.days-f,g=Math.hypot(u.x,u.z),m=Math.hypot(h.x,h.z);let A=Math.atan2(h.x,h.z)-Math.atan2(u.x,u.z);for(;A<0;)A+=Math.PI*2;p<30&&A>Math.PI*11/6&&(A-=Math.PI*2);const E=d.extreme!==void 0?Hi(d.extreme)-(g+m)/2:0,_=y=>g+(m-g)*y+E*Math.sin(Math.PI*y),S=Math.max(8,Math.ceil(p/Jp)),w=[0];for(let y=1;y<=S;y++)w.push(w[y-1]+Math.pow(ub(_((y-.5)/S)),-1.5));const C=.9856*p/S*w[S]*(Math.PI/180),B=d.revs??Math.max(0,Math.round((C-A)/(Math.PI*2))),U=A+B*Math.PI*2;for(let y=l===0?0:1;y<=8;y++){const v=y/8,R=Math.round(v*S);r.days.push(f+p*v),r.angle.push(o+U*(w[R]/w[S])),r.radius.push(_(v)),r.height.push(u.y+(h.y-u.y)*v)}o+=U,a.push({to:d.label||d.at,revs:B})}const c=[];if(r.days.length>1){const l=sh(r.days,r.angle),u=sh(r.days,r.radius),h=sh(r.days,r.height),d=r.days[0],f=r.days[r.days.length-1];for(let p=d;;p+=Jp){const g=Math.min(p,f),m=l(g),A=u(g);if(c.push({days:g,pos:new x(A*Math.sin(m),h(g),A*Math.cos(m))}),g===f)break}}return n.trajectoryPlan={waypoints:t,points:s,samples:c,arrival:i,legs:a,arrivalOrbit:e.arrival_orbit},n.trajectoryPlan}function vb(n,e,t){const i=ir(n);if(!i.samples.length)return!1;if(i.arrival&&e>=i.arrival.days){const r=$n(i.arrivalOrbit,e),a=J.get(i.arrival.at);return t.set(r.x,r.y,r.z),a&&t.add(a.group.position),!0}return ax(i,e,t),!1}function ax(n,e,t){const i=n.samples;if(e<=i[0].days)return Ld(t.copy(i[0].pos));let s=0,r=i.length-1;for(;r-s>1;){const c=s+r>>1;i[c].days<=e?s=c:r=c}const a=i[s],o=i[r];return Ld(t.copy(a.pos).lerp(o.pos,at.clamp((e-a.days)/(o.days-a.days||1),0,1)))}let Dd=null;function ox(n){Dd=n}function Ld(n){if(!Dd)return n;const e=n.length();return e>0?n.multiplyScalar(Hi(Dd(e))/e):n}function lr(n){if(!n||n==="Sun")return"Sun";const e=J.get(n);return!e||!e.data?"Sun":e.data.system?e.data.system:e.data.parent==="Sun"?n:lr(e.data.parent)}const Mb=["diagram","true"];let Li="diagram";const Pd={diagram:{cameraNear:.1,cameraFar:1e6,maxDistance:1e5,flightReach:15e3,logFlights:!1,flightArchMax:800,shadowReachMin:180,shadowHalfMin:.05,shadowLocal:!1,relative:!1},true:{cameraNear:null,cameraFar:2e7,maxDistance:1e7,logFlights:!0,flightArchMax:1/0,shadowReachMin:180,shadowHalfMin:1e-8,shadowLocal:!0,relative:!0}};let Ft=Pd.diagram;const Sb=25/695700,Cb=5,Ib=6371,wb=.62,bb=1.49,Tb=.7,Bb=new Set(["star","planet","moon","asteroid","comet"]),Rb=.35,Db=8,Zp=[1,$0],Lb=.3,qs={diagram:{bodyRadius(n){const e=n.radius_km,t=n.diagram_scale??1;return n.type==="star"?e*Sb*t:n.model&&!n.planetMoon?t*bb*Math.pow(2*e,Tb)/2:t*Cb*Math.pow(e/Ib,wb)},craftSize:n=>cr*(n.diagram_scale??1)},true:{bodyRadius:n=>n.radius_km/Ks,craftSize:n=>(n.size_m??1)/1e3/Ks}};function Pb(n){const e=(t,i)=>t**(1-n)*i**n;return{bodyRadius:t=>e(qs.diagram.bodyRadius(t),qs.true.bodyRadius(t)),craftSize:t=>e(qs.diagram.craftSize(t),qs.true.craftSize(t)),craftRadius:t=>e(t.radius_diagram,qs.true.craftSize(t)/2)}}function ru(n,e=Li,t=null){Li=e,Ft=t?Pd.true:Pd[e],t?ob(t.orbit):ab(e);const i=t?Pb(t.size):qs[e],s=new Map(n.map(r=>[r.name,r]));n.forEach(r=>{if(r.type==="moon"&&(r.planetMoon=s.get(r.parent)?.type==="planet"),r.type==="mission"){r.radius_diagram??=r.radius,r.model_size=i.craftSize(r),r.radius=t?i.craftRadius(r):e==="diagram"?r.radius_diagram:r.model_size/2;return}!Bb.has(r.type)||r.radius_km===void 0||(r.radius_diagram=qs.diagram.bodyRadius(r),r.radius=i.bodyRadius(r),r.model&&(r.model_scale=2*r.radius))}),e==="diagram"&&!t&&Ub(n,s),n.forEach(r=>{const a=s.get(r.parent);if(r.ring?.inner_km&&(r.ring.inner_radius=r.ring.inner_km/r.radius_km,r.ring.outer_radius=r.ring.outer_km/r.radius_km),r.suborbital?.apogee_km!==void 0&&a&&(r.suborbital.apogee=ma(a,a.radius_km+r.suborbital.apogee_km)-a.radius,r.suborbital.duration=r.suborbital.duration_min/1440),r.lagrange){const c=s.get(r.lagrange.body);r.lagrange.offset=fb(c,s.get("Sun"),r.lagrange.point),r.orbit={a:Hi(c.orbit.a_au)+r.lagrange.offset,e:0}}Wp(r.orbit,a);const o=r.trajectory?.waypoints;o?.length&&Wp(r.trajectory.arrival_orbit,s.get(o[o.length-1].at))}),n.forEach(r=>{r.orbit_type==="libration"&&Fb(r.orbit,s.get(r.parent),s)})}function Ub(n,e){const t=e.get("Sun"),i=n.filter(a=>a.type==="planet"&&a.parent==="Sun"&&a.orbit?.a_au).sort((a,o)=>a.orbit.a_au-o.orbit.a_au),s=a=>Hi(a.orbit.a_au*(1-a.orbit.e)),r=a=>Hi(a.orbit.a_au*(1+a.orbit.e));i.forEach((a,o)=>{if(!a.gm)return;const c=s(a)-(o?r(i[o-1]):t.radius),l=o<i.length-1?s(i[o+1])-r(a):1/0;a.hill=Rb*Math.min(c,l),a.knee=Math.min(j0,qp(a.radius/a.radius_km,Nl(a,t)-a.radius_km,a.hill-a.radius))}),n.forEach(a=>{if(a.type!=="asteroid"&&a.type!=="comet"||!a.gm||!a.orbit?.a_au)return;a.hill=Db*a.radius;const o=qp(a.radius/a.radius_km,Nl(a,t)-a.radius_km,a.hill-a.radius);a.knee=Math.min(Math.max(o,Zp[0]),Zp[1])})}function Fb(n,e,t){const i=t.get(e.lagrange.body),s=Nl(i,t.get("Sun")),r=(ma(i,s*1.001)-ma(i,s*.999))/(s*.002),a=Math.abs(e.lagrange.offset)/s,o=Math.sqrt(r*a),{y:c,z:l}=n.amplitude_km;n.amp={x:Lb*c*o,y:l*o,z:c*o},n.a=Math.max(n.amp.y,n.amp.z),n.rate=360/n.period_days,n.M0??=0}function Nb(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,c=new Ze;let l=0;for(let u=0;u<n.length;++u){const h=n[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0;const h=[];for(let d=0;d<n.length;++d){const f=n[d].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+u);u+=n[d].attributes.position.count}c.setIndex(h)}for(const u in r){const h=jp(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let g=0;g<a[u].length;++g)f.push(a[u][g][d]);const p=jp(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(p)}}return c}function jp(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){const u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const a=new e(r),o=new Ge(a,t,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const h=c/t;for(let d=0,f=u.count;d<f;d++)for(let p=0;p<t;p++){const g=u.getComponent(d,p);o.setComponent(d+h,p,g)}}else a.set(u.array,c);c+=u.count*t}return s!==void 0&&(o.gpuType=s),o}function $p(n,e){if(e===Ay)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Sd||e===A0){let t=n.getIndex();if(t===null){const a=[],o=n.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===Sd)for(let a=1;a<=i;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}const He=new gf;He.background=new Se(0);const H=new Kt(60,window.innerWidth/window.innerHeight,.1,1e6);H.position.set(0,400,1200);H.lookAt(0,0,0);let ke;function Qb(n){ke=new Ww({canvas:n,antialias:!0,powerPreference:"high-performance"})}function mn(n){for(let e=n;e;e=e.parent)if(e===He)return!0;return!1}class Ob extends bs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Vb(t)}),this.register(function(t){return new Wb(t)}),this.register(function(t){return new eT(t)}),this.register(function(t){return new tT(t)}),this.register(function(t){return new nT(t)}),this.register(function(t){return new Xb(t)}),this.register(function(t){return new Yb(t)}),this.register(function(t){return new Kb(t)}),this.register(function(t){return new Jb(t)}),this.register(function(t){return new Hb(t)}),this.register(function(t){return new Zb(t)}),this.register(function(t){return new qb(t)}),this.register(function(t){return new $b(t)}),this.register(function(t){return new jb(t)}),this.register(function(t){return new Gb(t)}),this.register(function(t){return new iT(t)}),this.register(function(t){return new sT(t)})}load(e,t,i,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=fo.extractUrlBase(e);a=fo.resolveURL(l,this.path)}else a=fo.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new nr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===cx){try{a[$e.KHR_BINARY_GLTF]=new rT(e)}catch(h){s&&s(h);return}r=JSON.parse(a[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new xT(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case $e.KHR_MATERIALS_UNLIT:a[h]=new zb;break;case $e.KHR_DRACO_MESH_COMPRESSION:a[h]=new aT(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:a[h]=new oT;break;case $e.KHR_MESH_QUANTIZATION:a[h]=new cT;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function kb(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Gb{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Se(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],sn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new V0(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new H0(u),l.distance=h;break;case"spot":l=new z0(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ri(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return i._getNodeRef(t.cache,o,c)})}}class zb{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return ui}extendParams(e,t,i){const s=[];e.color=new Se(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],sn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,dt))}return Promise.all(s)}}class Hb{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Vb{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Me(o,o)}return Promise.all(r)}}class Wb{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class qb{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class Xb{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],sn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,dt)),a.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class Yb{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Kb{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(o[0],o[1],o[2],sn),Promise.all(r)}}class Jb{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Zb{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Se().setRGB(o[0],o[1],o[2],sn),a.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,dt)),Promise.all(r)}}class jb{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class $b{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class eT{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class tT{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=i.textureLoader;if(o.uri){const l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return i.loadTextureImage(e,a.source,c)}}class nT{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=i.textureLoader;if(o.uri){const l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return i.loadTextureImage(e,a.source,c)}}class iT{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class sT{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const l of s.primitives)if(l.mode!==Qn.TRIANGLES&&l.mode!==Qn.TRIANGLE_STRIP&&l.mode!==Qn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const p of h){const g=new xe,m=new x,A=new ot,E=new x(1,1,1),_=new Av(p.geometry,p.material,d);for(let S=0;S<d;S++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&A.fromBufferAttribute(c.ROTATION,S),c.SCALE&&E.fromBufferAttribute(c.SCALE,S),_.setMatrixAt(S,g.compose(m,A,E));for(const S in c)if(S==="_COLOR_0"){const w=c[S];_.instanceColor=new Id(w.array,w.itemSize,w.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&p.geometry.setAttribute(S,c[S]);Tt.prototype.copy.call(_,p),this.parser.assignFinalMaterial(_),f.push(_)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const cx="glTF",Wa=12,eg={JSON:1313821514,BIN:5130562};class rT{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Wa),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==cx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Wa,r=new DataView(e,Wa);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===eg.JSON){const l=new Uint8Array(e,Wa+a,o);this.content=i.decode(l)}else if(c===eg.BIN){const l=Wa+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class aT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const h=Ud[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Ud[u]||u.toLowerCase();if(a[u]!==void 0){const d=i.accessors[e.attributes[u]],f=ea[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const p in f.attributes){const g=f.attributes[p],m=c[p];m!==void 0&&(g.normalized=m)}h(f)},o,l,sn,d)})})}}class oT{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class cT{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class lx extends Vo{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=s-t,h=(i-t)/u,d=h*h,f=d*h,p=e*l,g=p-l,m=-2*f+3*d,A=f-d,E=1-m,_=A-d+h;for(let S=0;S!==o;S++){const w=a[g+S+o],C=a[g+S+c]*u,B=a[p+S+o],U=a[p+S]*u;r[S]=E*w+_*C+m*B+A*U}return r}}const lT=new ot;class uT extends lx{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return lT.fromArray(r).normalize().toArray(r),r}}const Qn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ea={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},tg={9728:tn,9729:bt,9984:af,9985:Al,9986:ro,9987:Yn},ng={33071:kn,33648:Sl,10497:_s},rh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ud={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Zi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},hT={CUBICSPLINE:void 0,LINEAR:Ro,STEP:Bo},ah={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function dT(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Gi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gn})),n.DefaultMaterial}function Ns(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ri(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function fT(n,e,t){let i=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(i){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;a.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function AT(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function pT(n){let e;const t=n.extensions&&n.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+oh(t.attributes):e=n.indices+":"+oh(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+oh(n.targets[i]);return e}function oh(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Fd(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function gT(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const mT=new xe;class xT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new kb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=i&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&a<98?this.textureLoader=new G0(this.options.manager):this.textureLoader=new Wv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new nr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return Ns(r,o,s),ri(o,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())r(u,o.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){i.load(fo.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=rh[s.type],o=ea[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Ge(l,a,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=rh[s.type],l=ea[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0;let g,m;if(f&&f!==h){const A=Math.floor(d/f),E="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+A+":"+s.count;let _=t.cache.get(E);_||(g=new l(o,A*f,s.count*f/u),_=new mf(g,f/u),t.cache.add(E,_)),m=new ha(_,c,d%f/u,p)}else o===null?g=new l(s.count*c):g=new l(o,d,s.count*c),m=new Ge(g,c,p);if(s.sparse!==void 0){const A=rh.SCALAR,E=ea[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,S=s.sparse.values.byteOffset||0,w=new E(a[1],_,s.sparse.count*A),C=new l(a[2],S,s.sparse.count*c);o!==null&&(m=new Ge(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let B=0,U=w.length;B<U;B++){const y=w[B];if(m.setX(y,C[B*c]),c>=2&&m.setY(y,C[B*c+1]),c>=3&&m.setZ(y,C[B*c+2]),c>=4&&m.setW(y,C[B*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=i.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){const s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return u.magFilter=tg[d.magFilter]||bt,u.minFilter=tg[d.minFilter]||Yn,u.wrapS=ng[d.wrapS]||_s,u.wrapT=ng[d.wrapT]||_s,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==tn&&u.minFilter!==bt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=s.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=i.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(g){const m=new Gt(g);m.needsUpdate=!0,d(m)}),t.load(fo.resolveURL(h,r.path),p,void 0,f)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),ri(h,a),h.userData.mimeType=a.mimeType||gT(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let c=this.cache.get(o);c||(c=new D0,Jn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(o,c)),i=c}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let c=this.cache.get(o);c||(c=new ws,Jn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(o,c)),i=c}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=i.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return Gi}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[$e.KHR_MATERIALS_UNLIT]){const h=s[$e.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Se(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],sn),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,dt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=kt);const u=r.alphaMode||ah.OPAQUE;if(u===ah.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===ah.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==ui&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Me(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==ui&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==ui){const h=r.emissiveFactor;o.emissive=new Se().setRGB(h[0],h[1],h[2],sn)}return r.emissiveTexture!==void 0&&a!==ui&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,dt)),Promise.all(l).then(function(){const h=new a(o);return r.name&&(h.name=r.name),ri(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ns(s,h,r),h})}createUniqueName(e){const t=gt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return ig(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=pT(l),h=s[u];if(h)a.push(h.promise);else{let d;l.extensions&&l.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=ig(new Ze,l,t),s[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?dT(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,p=u.length;f<p;f++){const g=u[f],m=a[f];let A;const E=l[f];if(m.mode===Qn.TRIANGLES||m.mode===Qn.TRIANGLE_STRIP||m.mode===Qn.TRIANGLE_FAN||m.mode===void 0)A=r.isSkinnedMesh===!0?new hv(g,E):new Je(g,E),A.isSkinnedMesh===!0&&A.normalizeSkinWeights(),m.mode===Qn.TRIANGLE_STRIP?A.geometry=$p(A.geometry,A0):m.mode===Qn.TRIANGLE_FAN&&(A.geometry=$p(A.geometry,Sd));else if(m.mode===Qn.LINES)A=new Po(g,E);else if(m.mode===Qn.LINE_STRIP)A=new Sa(g,E);else if(m.mode===Qn.LINE_LOOP)A=new Ef(g,E);else if(m.mode===Qn.POINTS)A=new xv(g,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(A.geometry.morphAttributes).length>0&&AT(A,r),A.name=t.createUniqueName(r.name||"mesh_"+e),ri(A,r),m.extensions&&Ns(s,A,m),t.assignFinalMaterial(A),h.push(A)}for(let f=0,p=h.length;f<p;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Ns(s,h[0],r),h[0];const d=new Zt;r.extensions&&Ns(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=h.length;f<p;f++)d.add(h[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Kt(at.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new If(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ri(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),a=s,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const h=a[l];if(h){o.push(h);const d=new xe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new xf(o,c)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],p=s.samplers[f.sampler],g=f.target,m=g.node,A=s.parameters!==void 0?s.parameters[p.input]:p.input,E=s.parameters!==void 0?s.parameters[p.output]:p.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",A)),c.push(this.getDependency("accessor",E)),l.push(p),u.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],p=h[2],g=h[3],m=h[4],A=[];for(let _=0,S=d.length;_<S;_++){const w=d[_],C=f[_],B=p[_],U=g[_],y=m[_];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const v=i._createAnimationTracks(w,C,B,U,y);if(v)for(let R=0;R<v.length;R++)A.push(v[R])}const E=new Uv(r,void 0,A);return ri(E,s),E})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const a=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,u=o.length;l<u;l++)a.push(i.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,mT)});for(let f=0,p=h.length;f<p;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new R0:l.length>1?u=new Zt:l.length===1?u=l[0]:u=new Tt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),ri(u,r),r.extensions&&Ns(i,u,r),r.matrix!==void 0){const h=new xe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new Zt;i.name&&(r.name=s.createUniqueName(i.name)),ri(r,i),i.extensions&&Ns(t,r,i);const a=i.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof Jn||d instanceof Gt)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){const a=[],o=e.name?e.name:e.uuid,c=[];Zi[r.path]===Zi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Zi[r.path]){case Zi.weights:l=da;break;case Zi.rotation:l=fa;break;case Zi.translation:case Zi.scale:l=Aa;break;default:switch(i.itemSize){case 1:l=da;break;case 2:case 3:default:l=Aa;break}break}const u=s.interpolation!==void 0?hT[s.interpolation]:Ro,h=this._getArrayFromAccessor(i);for(let d=0,f=c.length;d<f;d++){const p=new l(c[d]+"."+Zi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),a.push(p)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Fd(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof fa?uT:lx;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function _T(n,e,t){const i=e.attributes,s=new ei;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new x(c[0],c[1],c[2]),new x(l[0],l[1],l[2])),o.normalized){const u=Fd(ea[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new x,c=new x;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){const g=Fd(ea[d.componentType]);c.multiplyScalar(g)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}n.boundingBox=s;const a=new Sn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=a}function ig(n,e,t){const i=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){n.setAttribute(o,c)})}for(const a in i){const o=Ud[a]||a.toLowerCase();o in n.attributes||s.push(r(i[a],o))}if(e.indices!==void 0&&!n.index){const a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});s.push(a)}return rt.workingColorSpace!==sn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${rt.workingColorSpace}" not supported.`),ri(n,e),_T(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?fT(n,e.targets,t):n})}const ch=new WeakMap;class ET extends bs{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,s){const r=new nr(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,s)},i,s)}parse(e,t,i=()=>{}){this.decodeDracoFile(e,t,null,null,dt,i).catch(i)}decodeDracoFile(e,t,i,s,r=sn,a=()=>{}){const o={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){const i=JSON.stringify(t);if(ch.has(e)){const c=ch.get(e);if(c.key===i)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s;const r=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(r,a).then(c=>(s=c,new Promise((l,u)=>{s._callbacks[r]={resolve:l,reject:u},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return o.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),ch.set(e,{key:i,promise:o}),o}_createGeometry(e){const t=new Ze;e.index&&t.setIndex(new Ge(e.index.array,1));for(let i=0;i<e.attributes.length;i++){const{name:s,array:r,itemSize:a,stride:o,vertexColorSpace:c}=e.attributes[i];let l;if(a===o)l=new Ge(r,a);else{const u=new mf(r,o);l=new ha(u,a,0)}s==="color"&&(this._assignVertexColorSpace(l,c),l.normalized=!(r instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==dt)return;const i=new Se;for(let s=0,r=e.count;s<r;s++)i.fromBufferAttribute(e,s),rt.colorSpaceToWorking(i,dt),e.setXYZ(s,i.r,i.g,i.b)}_loadLibrary(e,t){const i=new nr(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((s,r)=>{i.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(i=>{const s=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const r=yT.toString(),a=["/* draco decoder */",s,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){const a=r.data;switch(a.type){case"decode":s._callbacks[a.id].resolve(a);break;case"error":s._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=t,i._taskLoad+=t,i})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function yT(){let n,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":n=o.decoderConfig,e=new Promise(function(u){n.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(n)});break;case"decode":const c=o.buffer,l=o.taskConfig;e.then(u=>{const h=u.draco,d=new h.Decoder;try{const f=t(h,d,new Int8Array(c),l),p=f.attributes.map(g=>g.array.buffer);f.index&&p.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},p)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{h.destroy(d)}});break}};function t(a,o,c,l){const u=l.attributeIDs,h=l.attributeTypes;let d,f;const p=o.GetEncodedGeometryType(c);if(p===a.TRIANGULAR_MESH)d=new a.Mesh,f=o.DecodeArrayToMesh(c,c.byteLength,d);else if(p===a.POINT_CLOUD)d=new a.PointCloud,f=o.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const g={index:null,attributes:[]};for(const m in u){const A=self[h[m]];let E,_;if(l.useUniqueIDs)_=u[m],E=o.GetAttributeByUniqueId(d,_);else{if(_=o.GetAttributeId(d,a[u[m]]),_===-1)continue;E=o.GetAttribute(d,_)}const S=s(a,o,d,m,A,E);m==="color"&&(S.vertexColorSpace=l.vertexColorSpace),g.attributes.push(S)}return p===a.TRIANGULAR_MESH&&(g.index=i(a,o,d)),a.destroy(d),g}function i(a,o,c){const u=c.num_faces()*3,h=u*4,d=a._malloc(h);o.GetTrianglesUInt32Array(c,h,d);const f=new Uint32Array(a.HEAPF32.buffer,d,u).slice();return a._free(d),{array:f,itemSize:1}}function s(a,o,c,l,u,h){const d=c.num_points(),f=h.num_components(),p=r(a,u),g=f*u.BYTES_PER_ELEMENT,m=Math.ceil(g/4)*4,A=m/u.BYTES_PER_ELEMENT,E=d*g,_=d*m,S=a._malloc(E);o.GetAttributeDataArrayForAllPoints(c,h,p,E,S);const w=new u(a.HEAPF32.buffer,S,E/u.BYTES_PER_ELEMENT);let C;if(g===m)C=w.slice();else{C=new u(_/u.BYTES_PER_ELEMENT);let B=0;for(let U=0,y=w.length;U<y;U++){for(let v=0;v<f;v++)C[B+v]=w[U*f+v];B+=A}}return a._free(S),{name:l,count:d,itemSize:f,array:C,stride:A}}function r(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}const Rf=new k0,qo=new G0(Rf),ux=new ET;ux.setDecoderPath("draco/");const Ql=new Ob;Ql.setDRACOLoader(ux);const vT=2048*1024,MT=8192;function ST(n){const e=n.image;if(!e)return;const t=Math.min(Math.sqrt(vT/(e.width*e.height)),MT/e.width);if(t>=1)return;const i=document.createElement("canvas");i.width=Math.round(e.width*t),i.height=Math.max(1,Math.round(e.height*t));const s=i.getContext("2d");s.imageSmoothingQuality="high",s.drawImage(e,0,0,i.width,i.height),n.image=i,n.needsUpdate=!0}function oo(n){return qo.load(Ms(n),ST)}function Ms(n){return n?n.startsWith("/")?n.slice(1):n:null}const Df=[];function hx(n,e=new Set){return n.traverse(t=>{if(!t.material)return;(Array.isArray(t.material)?t.material:[t.material]).forEach(s=>{for(const r in s){const a=s[r];a&&a.isTexture&&e.add(a)}s.uniforms&&Object.values(s.uniforms).forEach(r=>{r&&r.value&&r.value.isTexture&&e.add(r.value)})})}),e}function CT(){const n=Df.shift();if(n){try{ke.initTexture(n.texture)}catch(e){console.warn("Texture upload failed",e)}n.done()}}function IT(n){return new Promise(e=>Df.push({texture:n,done:e}))}function dx(n){const e=[...hx(n)].map(t=>new Promise(i=>Df.push({texture:t,done:i})));return Promise.all(e).then(()=>Promise.all([ke.compileAsync(n,H,He),fx(n)])).catch(t=>console.warn("Shader warm-up failed",t))}const wT={[Gn]:Vt,[Vt]:Gn,[kt]:kt},sg=new Map;let rg=null;function fx(n){if(!ke.shadowMap.enabled||ke.shadowMap.type===si)return Promise.resolve();const e=new Zt;if(n.traverse(s=>{!s.isMesh||!s.castShadow||s.customDepthMaterial||s.isSkinnedMesh||s.isInstancedMesh||(Array.isArray(s.material)?s.material:[s.material]).forEach(r=>{if(!r)return;const a=new N0({depthPacking:p0});a.side=r.shadowSide??wT[r.side],a.wireframe=r.wireframe,a.alphaMap=r.alphaMap,a.alphaTest=r.alphaToCoverage===!0?.5:r.alphaTest,a.map=r.map,a.displacementMap=r.displacementMap,a.displacementScale=r.displacementScale,a.displacementBias=r.displacementBias;const o=s.geometry,c=[a.side,a.wireframe,!!a.alphaMap,a.alphaTest>0,!!a.map,!!a.displacementMap,s.receiveShadow,!!o.morphAttributes.position,!!o.morphAttributes.normal,Object.keys(o.attributes).sort().join("+")].join();if(sg.has(c))return;sg.set(c,a);const l=new Je(o,a);l.receiveShadow=s.receiveShadow,l.morphTargetInfluences=s.morphTargetInfluences,e.add(l)})}),!e.children.length)return Promise.resolve();rg??=new fi(1,1);const t=ke.getRenderTarget();ke.setRenderTarget(rg);let i;try{i=ke.compileAsync(e,H,He)}finally{ke.setRenderTarget(t)}return i}function Ax(n,e){const t=e.elements;if(n.isInterleavedBufferAttribute||n.normalized||n.itemSize!==3||t[3]!==0||t[7]!==0||t[11]!==0||t[15]!==1)return(s,r)=>s.fromBufferAttribute(n,r).applyMatrix4(e);const i=n.array;return(s,r)=>{const a=i[3*r],o=i[3*r+1],c=i[3*r+2];return s.set(t[0]*a+t[4]*o+t[8]*c+t[12],t[1]*a+t[5]*o+t[9]*c+t[13],t[2]*a+t[6]*o+t[10]*c+t[14])}}const ag=new WeakMap,bT=new xe,og=new Is,Qs=new x,Os=new x,ks=new x;function TT(n){const e=n.attributes.position,t=n.index,i=`${e.version}:${t?t.version:-1}:${e.count}:${t?t.count:-1}`,s=ag.get(n);if(s?.key===i)return s;const r=Math.floor((t?t.count:e.count)/3),a=new Float64Array(r*3),o=new Float64Array(r),c=u=>t?t.getX(u):u;for(let u=0;u<r;u++){Qs.fromBufferAttribute(e,c(3*u)),Os.fromBufferAttribute(e,c(3*u+1)),ks.fromBufferAttribute(e,c(3*u+2));const h=(Qs.x+Os.x+ks.x)/3,d=(Qs.y+Os.y+ks.y)/3,f=(Qs.z+Os.z+ks.z)/3;a[3*u]=h,a[3*u+1]=d,a[3*u+2]=f,o[u]=Math.sqrt(Math.max((Qs.x-h)**2+(Qs.y-d)**2+(Qs.z-f)**2,(Os.x-h)**2+(Os.y-d)**2+(Os.z-f)**2,(ks.x-h)**2+(ks.y-d)**2+(ks.z-f)**2))*(1+1e-6)+1e-9}const l={key:i,centres:a,radii:o,count:r};return ag.set(n,l),l}const BT=2e3;function au(n,e){const t=e.layers.test(n.layers)?RT(n,e):void 0,i=e.children.length?n.intersectObjects(e.children,!0)[0]:void 0;return t&&i?t.distance<=i.distance?t:i:t||i}function RT(n,e){const t=e.geometry,i=t?.attributes.position;if((i?(t.index?t.index.count:i.count)/3:0)<BT||Array.isArray(e.material)||t.groups.length||t.morphAttributes.position){const A=[];return e.raycast(n,A),A.sort((E,_)=>E.distance-_.distance)[0]}const{centres:r,radii:a,count:o}=TT(t);og.copy(n.ray).applyMatrix4(bT.copy(e.matrixWorld).invert());const{origin:c,direction:l}=og,u=t.index,h=[];for(let A=0;A<o;A++){const E=r[3*A]-c.x,_=r[3*A+1]-c.y,S=r[3*A+2]-c.z,w=Math.max(0,E*l.x+_*l.y+S*l.z),C=E-l.x*w,B=_-l.y*w,U=S-l.z*w;C*C+B*B+U*U<=a[A]*a[A]&&h.push(A)}if(!h.length)return;const d=new Uint32Array(h.length*3);h.forEach((A,E)=>{for(let _=0;_<3;_++)d[3*E+_]=u?u.getX(3*A+_):3*A+_});const f=new Ze;f.setAttribute("position",i),f.setIndex(new Ge(d,1)),t.boundingSphere||t.computeBoundingSphere(),f.boundingSphere=t.boundingSphere,f.boundingBox=t.boundingBox;const p=new Je(f,e.material);p.matrixWorld.copy(e.matrixWorld),p.layers.mask=e.layers.mask;const g=[];p.raycast(n,g),g.sort((A,E)=>A.distance-E.distance);const m=g[0];return m&&(m.object=e,m.faceIndex!==void 0&&(m.faceIndex=h[m.faceIndex])),m}const px=new x(0,1,0);function gl(n,e=Li){return e==="diagram"&&n.diagram_coords||n.landed_coords||{lat:45,lon:10}}const Ss=[],lh=6;function DT(n){const e=n&&(n.highLevel||n.lowLevel);if(!e)return null;if(n.supportsLevel===e&&n.supportsScale===n.mesh.scale.x)return n.supports;const{position:t,quaternion:i}=n.mesh;if(n.supportsLevel===e&&n.supports&&t.x===0&&t.z===0&&n.supportsTurn?.equals(i)&&n.supportsY===t.y){const p=n.mesh.scale.x/n.supportsScale,g=m=>{m.x*=p,m.z*=p,m.y=t.y+(m.y-t.y)*p};return n.supports.points.forEach(g),g(n.supports.centre),n.supports.reach*=p,n.supports.width*=p,n.supportsScale=n.mesh.scale.x,n.supports}n.supportsScale=n.mesh.scale.x,n.supportsTurn=i.clone(),n.supportsY=t.y,n.group.updateMatrixWorld(!0);const s=new xe().copy(n.group.matrixWorld).invert(),r=new xe,a=new x,o=p=>e.traverse(g=>{if(!g.isMesh||!g.geometry.attributes.position)return;r.multiplyMatrices(s,g.matrixWorld);const m=g.geometry.attributes.position,A=Ax(m,r);for(let E=0;E<m.count;E++)p(A(a,E))});let c=1/0,l=-1/0;o(p=>{c=Math.min(c,p.y),l=Math.max(l,p.y)});const u=c+(l-c)*.03,h=new Array(lh).fill(null);o(p=>{if(p.y>u)return;const g=Math.hypot(p.x,p.z),m=Math.min(lh-1,Math.floor((Math.atan2(p.z,p.x)+Math.PI)/(2*Math.PI)*lh));(!h[m]||g>h[m].r)&&(h[m]={r:g,point:new x(p.x,c,p.z)})});const d=h.filter(Boolean).map(p=>p.point),f=Math.max(0,...h.filter(Boolean).map(p=>p.r));return n.supportsLevel=e,n.supports=d.length<3?null:{points:d,centre:d.reduce((p,g)=>p.add(g),new x).divideScalar(d.length),reach:l-c+f,width:2*f},n.supports}const LT=Math.cos(at.degToRad(35));function PT(n,e,t,i,s){const r=DT(n);if(!r)return null;const a=new ot().setFromUnitVectors(px,s),o=s.clone().negate().transformDirection(e.matrixWorld),c=[];for(const p of r.points){const g=p.clone().applyQuaternion(a).add(i).addScaledVector(s,r.reach),m=au(new $l(e.localToWorld(g),o,0,r.reach*3),t);if(!m)return null;c.push(e.worldToLocal(m.point.clone()))}const l=c.reduce((p,g)=>p.add(g),new x).divideScalar(c.length),u=new x;for(let p=0;p<c.length;p++)u.add(c[p].clone().sub(l).cross(c[(p+1)%c.length].clone().sub(l)));if(u.lengthSq()<1e-12||(u.normalize(),u.dot(s)<0&&u.negate(),u.dot(s)<LT))return null;const h=u.clone().multiplyScalar(r.points[0].y),d=l.clone().sub(i).sub(h).dot(u)/s.dot(u),f=(n.data.land_lift||0)*r.width;return{position:i.clone().addScaledVector(s,d).addScaledVector(u,f),normal:u}}function Xo(n){J.forEach(e=>{const t=e.data;if(t.orbit_type!=="landed"||e!==n&&t.parent!==n.data.name)return;const i=J.get(t.parent);!i||e.group.parent!==i.meshGroup||Ss.some(s=>s.data===t)||Ss.push({group:e.group,data:t})}),ou()}let Lf=!1;function UT(){Lf=!0,J.forEach(n=>{n.landedAt=null,Ss.some(e=>e.data===n.data)||gx(n)})}function gx(n){const e=J.get(n.data.parent);if(n.data.orbit_type!=="landed"||!e||n.group.parent!==e.meshGroup)return;const t=n.group.position.clone(),i=r=>{const a=xx(e,n.data,r)?.hit;return a?e.meshGroup.worldToLocal(a.point.clone()):null},s=i(gl(n.data))||t.clone();if(n.landedAt={ground:s,offset:t.sub(s),bodyScale:e.mesh.scale.x,ownScale:n.mesh.scale.x},n.data.diagram_coords){const r=i(gl(n.data,"diagram")),a=i(gl(n.data,"true"));r&&a&&Object.assign(n.landedAt,{diagram:r,real:a,turn:n.group.quaternion.clone()})}}const qa=new x,Fr=new ot,cg=new ot,FT=new ot;function NT(n){J.forEach(e=>{const t=e.landedAt;if(!t)return;const i=J.get(e.data.parent);if(qa.copy(t.ground),Fr.identity(),t.real){const s=at.lerp(t.diagram.length(),t.real.length(),n);cg.setFromUnitVectors(qa.copy(t.diagram).normalize(),t.real.clone().normalize()),Fr.slerpQuaternions(FT,cg,n),qa.applyQuaternion(Fr).multiplyScalar(s),Fr.setFromUnitVectors(t.ground.clone().normalize(),qa.clone().normalize()),e.group.quaternion.copy(t.turn).premultiply(Fr)}e.group.position.copy(qa).multiplyScalar(i.mesh.scale.x/t.bodyScale).add(t.offset.clone().applyQuaternion(Fr).multiplyScalar(e.mesh.scale.x/t.ownScale))})}function QT(){Lf=!1,J.forEach(n=>{n.landedAt=null})}const OT=.5,kT=1e-7,lg=new x,GT=new x;function Pf(n){const e=J.get(n.data.parent);if(!e)return;const t=e.mesh.children.filter(a=>a.isMesh&&!a.rotation.x&&!a.rotation.y&&!a.rotation.z&&a.scale.x===1),i=[];J.forEach(a=>{a.data.orbit_type==="landed"&&a.data.parent===e.data.name&&a.group.parent===e.meshGroup&&i.push(a)});const s=i.map(a=>a.data.name).sort().join("|");if(e.surfaceSite===n&&t.every(a=>a.userData.refinedFor===n&&a.userData.refinedSites===s)||n.group.parent!==e.meshGroup)return;n.group.getWorldPosition(lg),e.mesh.updateWorldMatrix(!0,!0);let r=!1;t.forEach(a=>{if(a.userData.refinedFor===n&&a.userData.refinedSites===s)return;a.userData.surfaceGeometry??=a.geometry;const o=h=>a.worldToLocal(h.clone()).add(a.position),c=o(lg),l=i.map(h=>o(h.group.getWorldPosition(new x))),u=WT(a.userData.surfaceGeometry,c,kT/a.getWorldScale(GT).x,l);u.computeBoundingBox(),u.computeBoundingSphere(),a.geometry!==a.userData.surfaceGeometry&&a.geometry.dispose(),a.geometry=u,a.position.copy(c),r=!0,a.userData.refinedFor=n,a.userData.refinedSites=s}),e.surfaceSite=n,r&&Xo(e)}function zT(){J.forEach(n=>{n.surfaceSite&&(n.surfaceSite=null,n.mesh.children.forEach(e=>{e.userData&&(e.userData.refinedFor=null)}))})}const ii=new Rn,HT=new x,VT=1e-5;function WT(n,e,t,i){const s=Object.keys(n.attributes),r=s.map(b=>n.attributes[b].itemSize),a=s.map(b=>Array.from(n.attributes[b].array)),o=a[s.indexOf("position")];let c=n.attributes.position.count;const l=c;let u=1/0,h=0;for(let b=0;b<c;b++){const D=Math.hypot(o[3*b],o[3*b+1],o[3*b+2]);u=Math.min(u,D),h=Math.max(h,D)}const d=h-u<=VT*h?(u+h)/2:null;for(let b=0;b<c;b++)o[3*b]-=e.x,o[3*b+1]-=e.y,o[3*b+2]-=e.z;const f=i.map(b=>b.clone().sub(e)),p=(b,D)=>(a.forEach((N,F)=>{const Q=r[F];for(let X=0;X<Q;X++)N.push(b.reduce((z,j,ie)=>z+N[j*Q+X]*D[ie],0))}),c++),g=new Map,m=(b,D)=>b<D?b*2**26+D:D*2**26+b,A=new Array(c);{const b=Math.max(h,1e-30)*1e-9,D=new Map;for(let N=0;N<c;N++){const F=`${Math.round(o[3*N]/b)},${Math.round(o[3*N+1]/b)},${Math.round(o[3*N+2]/b)}`;D.has(F)||D.set(F,N),A[N]=D.get(F)}}const E=new Map,_=(b,D)=>{let N=g.get(m(b,D));if(N===void 0){N=p([b,D],[.5,.5]),g.set(m(b,D),N);const F=m(A[b],A[D]);E.has(F)||E.set(F,N),A[N]=E.get(F)}return N},S=(b,D)=>D.set(o[3*b],o[3*b+1],o[3*b+2]),w=(b,D,N)=>{S(b,ii.a),S(D,ii.b),S(N,ii.c);const F=Math.max(ii.a.distanceTo(ii.b),ii.b.distanceTo(ii.c),ii.c.distanceTo(ii.a));return F<=t?!1:f.some(Q=>F>OT*ii.closestPointToPoint(Q,HT).distanceTo(Q))},C=[],B=(b,D,N)=>{if(!w(b,D,N)){C.push(b,D,N);return}const F=_(b,D),Q=_(D,N),X=_(N,b);B(b,F,X),B(F,D,Q),B(X,Q,N),B(F,Q,X)},U=n.index?n.index.array:Array.from({length:c},(b,D)=>D);for(let b=0;b<U.length;b+=3)B(U[b],U[b+1],U[b+2]);const y=(b,D,N)=>{let F=g.get(m(b,D));F===void 0&&E.has(m(A[b],A[D]))&&(F=_(b,D)),F===void 0?N.push(b):(y(b,F,N),y(F,D,N))},v=[];for(let b=0;b<C.length;b+=3){const D=C[b],N=C[b+1],F=C[b+2],Q=[];if(y(D,N,Q),y(N,F,Q),y(F,D,Q),Q.length===3){v.push(D,N,F);continue}const X=p([D,N,F],[1/3,1/3,1/3]);Q.forEach((z,j)=>v.push(z,Q[(j+1)%Q.length],X))}if(d!==null){const b=s.includes("normal")?a[s.indexOf("normal")]:null;for(let D=l;D<c;D++){const N=o[3*D]+e.x,F=o[3*D+1]+e.y,Q=o[3*D+2]+e.z,X=Math.hypot(N,F,Q);if(!(X>0))continue;const z=d/X;o[3*D]=N*z-e.x,o[3*D+1]=F*z-e.y,o[3*D+2]=Q*z-e.z,b&&(b[3*D]=N/X,b[3*D+1]=F/X,b[3*D+2]=Q/X)}}const R=new Ze;return s.forEach((b,D)=>R.setAttribute(b,new Ge(new Float32Array(a[D]),r[D],n.attributes[b].normalized))),R.setIndex(v),R}const mx=[];function qT(n){mx.push(n)}function xx(n,e,t=gl(e)){let i=null;if((n.highLevel||n.mesh).traverse(g=>{g.isMesh&&!i&&!g.material.transparent&&(i=g)}),!i||!i.geometry)return null;n.meshGroup.updateMatrixWorld(!0),i.updateMatrixWorld(!0),i.geometry.computeBoundingBox();const s=i.geometry.boundingBox,r=s.getCenter(new x),a=s.getSize(new x),{lat:o,lon:c}=t,l=(90-o)*(Math.PI/180),u=(c+180)*(Math.PI/180),h=new x(-(Math.sin(l)*Math.cos(u)),Math.cos(l),Math.sin(l)*Math.sin(u)).normalize(),d=Math.max(a.x,a.y,a.z),f=new x().crossVectors(h,Math.abs(h.y)<.9?px:new x(1,0,0)).normalize();let p=null;for(let g=0;g<5&&!p;g++){const m=g===0?h:h.clone().applyAxisAngle(f.clone().applyAxisAngle(h,g*Math.PI/2),.002),A=r.clone().addScaledVector(m,d*2).applyMatrix4(i.matrixWorld),E=m.clone().negate().transformDirection(i.matrixWorld).normalize();p=au(new $l(A,E),i)||null}return{targetMesh:i,dir:h,hit:p}}const ug=4;let _x=()=>null;function XT(n){_x=n}function YT(){const n=J.get(_x())?.data,e=n?.orbit_type==="landed"?n.parent:n?.name,t=i=>n&&i.data.name===n.name?0:e&&i.data.parent===e?1:2;return[...Ss].sort((i,s)=>t(i)-t(s))}let uh=-1/0,hh=0,Nd=!0;const KT=6;function JT(){Nd=!0}function ou(){const n=performance.now();(Nd||n-uh>ug+KT)&&(uh=n,hh=0,Nd=!1);for(const e of YT()){if(hh&&performance.now()-uh>ug)break;const t=J.get(e.data.parent);if(t&&t.mesh&&t.meshGroup&&(!Wo(t.data)||t.data.isModelLoaded)){const s=xx(t,e.data);if(!s)continue;const{targetMesh:r,dir:a,hit:o}=s;let c,l;const u=new Ne().getNormalMatrix(t.meshGroup.matrixWorld),h=new Ne().copy(u).invert();if(o){c=t.meshGroup.worldToLocal(o.point.clone());const p=new Ne().getNormalMatrix(o.object.matrixWorld);l=o.face.normal.clone().applyMatrix3(p).normalize().applyMatrix3(h).normalize();const m=PT(J.get(e.data.name),t.meshGroup,r,c,l);m&&(c=m.position,l=m.normal)}else{r.geometry.boundingSphere||r.geometry.computeBoundingSphere();const{center:p,radius:g}=r.geometry.boundingSphere,m=p.clone().addScaledVector(a,g).applyMatrix4(r.matrixWorld);c=t.meshGroup.worldToLocal(m),l=a.clone().transformDirection(r.matrixWorld).applyMatrix3(h).normalize(),console.warn(`Couldn't find ${t.data.name}'s surface under ${e.data.name}; placed it on the bounding sphere.`)}t.meshGroup.add(e.group),e.group.position.copy(c);const d=new x(0,1,0),f=new ot().setFromUnitVectors(d,l);e.group.quaternion.copy(f),e.group.scale.set(1,1,1),e.group.updateMatrixWorld(!0),t.meshGroup.updateMatrixWorld(!0),Ss.splice(Ss.indexOf(e),1),Lf&&gx(J.get(e.data.name)),hh++,mx.forEach(p=>p(e.data))}}}const Uf=[];function Ex(){return new Mt({uniforms:{uTime:{value:0},uColor:{value:new Se(65535)}},vertexShader:`
            varying vec3 vNormal; varying vec3 vWorldPosition;
            void main() { vNormal = normalize(mat3(modelMatrix) * normal);
            vec4 worldPos = modelMatrix * vec4(position, 1.0); vWorldPosition = worldPos.xyz;
            gl_Position = projectionMatrix * viewMatrix * worldPos; }
        `,fragmentShader:`
            uniform float uTime; uniform vec3 uColor; varying vec3 vNormal; varying vec3 vWorldPosition;
            void main() { vec3 viewDir = normalize(cameraPosition - vWorldPosition);
            float fresnel = dot(viewDir, vNormal); fresnel = 1.0 - abs(fresnel); fresnel = pow(fresnel, 2.0);
            float shimmer = sin(vWorldPosition.y * 0.5 + uTime * 2.0) * 0.5 + 0.5; 
            shimmer *= sin(vWorldPosition.z * 0.3 + uTime * 1.5) * 0.5 + 0.5; 
            vec3 finalColor = uColor + (fresnel * vec3(0.5, 0.8, 1.0)); 
            float alpha = 0.05 + (fresnel * 0.7) + (shimmer * 0.2); 
            gl_FragColor = vec4(finalColor, alpha); }
        `,transparent:!0,blending:xs,side:kt,depthWrite:!1})}const Xs=[];let dh=0;const ZT=2;function yx(){if(dh>=ZT||Xs.length===0)return;const n=Xs.shift();n&&(dh++,o1(n.item,n.isPriority,()=>{dh--,yx()}))}function ta(n,e=!1){if(!n||n.isModelLoaded||n.isModelLoading)return;if(n.isModelQueued){const i=Xs.findIndex(s=>s.item===n);e&&i>0&&Xs.unshift(...Xs.splice(i,1));return}if(!Wo(n)){n.isModelLoaded=!0;return}n.isModelQueued=!0,e?Xs.unshift({item:n,isPriority:!0}):Xs.push({item:n,isPriority:!1}),yx()}function hg(n,e){if(!n||!n.isMeshPhysicalMaterial)return n;if(!e.has(n)){const t=new Gi;t.copy(n),n.transmission>0&&(t.transparent=!0,t.opacity=Math.min(n.opacity,.35),t.depthWrite=!1),e.set(n,t)}return e.get(n)}function jT(n,e){const t=new Map;e.traverse(i=>{if(i.isMesh&&(i.material=Array.isArray(i.material)?i.material.map(s=>hg(s,t)):hg(i.material,t),i.userData=n,i.castShadow=!0,i.receiveShadow=!0,rb.has(n.type)&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>{s.shadowSide=Vt}),i.material&&(i.material.map&&(i.material.map.colorSpace=dt),i.material.metalness!==void 0&&(i.material.metalness=Math.min(i.material.metalness,.4),i.material.roughness=Math.max(i.material.roughness,.6))),Ao(n))){const s=Ex();i.material=s,Uf.push(s),i.castShadow=!1,i.receiveShadow=!1}})}const $T=1e5;function e1(n){n.updateMatrixWorld(!0);let e=0;n.traverse(d=>{d.isMesh&&(e+=(d.geometry.index?d.geometry.index.count:d.geometry.attributes.position.count)/3)});const t=Math.max(1,e/$T);let i=1;const s=()=>(i=i*16807%2147483647)/2147483647,r=new x,a=new x,o=new x;let c=0,l=0,u=0,h=0;return n.traverse(d=>{if(!d.isMesh)return;const f=d.geometry.attributes.position,p=d.geometry.index,g=(p?p.count:f.count)/3,m=Ax(f,d.matrixWorld),A=p?p.array:null;for(let E=0;E<g;E+=t){const _=Math.min(g-1,Math.floor(E+(t>1?s()*t:0)))*3;m(r,A?A[_]:_),m(a,A?A[_+1]:_+1),m(o,A?A[_+2]:_+2);const S=a.x-r.x,w=a.y-r.y,C=a.z-r.z,B=o.x-r.x,U=o.y-r.y,y=o.z-r.z,v=w*y-C*U,R=C*B-S*y,b=S*U-w*B,D=Math.sqrt(v*v+R*R+b*b)/2,N=D/3;c+=(r.x+a.x+o.x)*N,l+=(r.y+a.y+o.y)*N,u+=(r.z+a.z+o.z)*N,h+=D}}),h>0?new x(c,l,u).divideScalar(h):null}const dg=new Set(["skinIndex","skinWeight"]);function t1(n){const e=g=>Object.keys(g.attributes).filter(m=>!dg.has(m)).sort().map(m=>m+g.attributes[m].itemSize).join(),t=(g,m)=>[g.material.uuid,g.castShadow,g.receiveShadow,g.renderOrder,m,g.frustumCulled,g.layers.mask,e(g.geometry)].join("|");let i=0,s=!1,r=!1;const a=new Set;if(n.traverse(g=>{g.isMesh?(i++,s||=g.isSkinnedMesh,g.isInstancedMesh||g.isBatchedMesh||Array.isArray(g.material)||Object.keys(g.geometry.morphAttributes).length?r=!0:a.add(t(g,g.visible))):(g.isLight||g.isCamera||g.isLine||g.isPoints||g.isSprite)&&(r=!0)}),r||i<2||a.size===i&&!s)return;n.updateMatrixWorld(!0);const o=new xe().copy(n.matrixWorld).invert(),c=new Map,l=new xe,u=new Ne,h=new xe,d=new xe,f=new x;n.traverse(g=>{if(!g.isMesh)return;const m=g.geometry,A=new Ze;for(const[C,B]of Object.entries(m.attributes)){if(dg.has(C))continue;const U=new Float32Array(B.count*B.itemSize);for(let y=0;y<B.count;y++)for(let v=0;v<B.itemSize;v++)U[y*B.itemSize+v]=B.getComponent(y,v);A.setAttribute(C,new Ge(U,B.itemSize))}const E=A.attributes.position.count,_=m.index?Array.from({length:m.index.count},(C,B)=>m.index.getX(B)):Array.from({length:E},(C,B)=>B);l.multiplyMatrices(o,g.matrixWorld);let S=!0;for(let C=g;C&&C!==n;C=C.parent)S&&=C.visible;if(g.isSkinnedMesh){const{bones:C,boneInverses:B}=g.skeleton,U=m.attributes.skinIndex,y=m.attributes.skinWeight,{position:v,normal:R,tangent:b}=A.attributes;u.getNormalMatrix(l);for(let D=0;D<E;D++){h.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);for(let N=0;N<4;N++){const F=y.getComponent(D,N);if(!F)continue;const Q=U.getComponent(D,N);d.multiplyMatrices(C[Q].matrixWorld,B[Q]);for(let X=0;X<16;X++)h.elements[X]+=d.elements[X]*F}h.premultiply(g.bindMatrixInverse).multiply(g.bindMatrix),f.fromBufferAttribute(v,D).applyMatrix4(h).applyMatrix4(l),v.setXYZ(D,f.x,f.y,f.z),R&&(f.fromBufferAttribute(R,D).transformDirection(h).applyMatrix3(u).normalize(),R.setXYZ(D,f.x,f.y,f.z)),b&&(f.set(b.getX(D),b.getY(D),b.getZ(D)).transformDirection(h).transformDirection(l),b.setXYZ(D,f.x,f.y,f.z))}}else A.applyMatrix4(l);if(l.determinant()<0)for(let C=0;C<_.length;C+=3)[_[C+1],_[C+2]]=[_[C+2],_[C+1]];A.setIndex(_);const w=t(g,S);c.has(w)||c.set(w,{mesh:g,shown:S,geometries:[]}),c.get(w).geometries.push(A)});const p=[];for(const{mesh:g,shown:m,geometries:A}of c.values()){const E=A.length>1?Nb(A):A[0];if(!E)return;const _=new Je(E,g.material);_.name=g.name,_.castShadow=g.castShadow,_.receiveShadow=g.receiveShadow,_.renderOrder=g.renderOrder,_.visible=m,_.frustumCulled=g.frustumCulled,_.layers.mask=g.layers.mask,p.push(_)}n.clear(),p.forEach(g=>n.add(g))}function vx(n,e,t){t1(t);const i=new Zt;i.add(t);const s=new ei().setFromObject(t),r=e1(t)||s.getCenter(new x);t.position.x=-r.x,t.position.z=-r.z,n.orbit_type==="landed"?t.position.y=-s.min.y:t.position.y=-r.y;const a=s.getSize(new x),o=Math.max(a.x,a.y,a.z),c=n.built?.modelSize??(n.type==="mission"?cr:n.model_scale||1),l=1/(o||1)*c;return i.scale.set(l,l,l),n.model_offset&&i.position.set(n.model_offset.x,n.model_offset.y,n.model_offset.z),jT(n,t),i.userData.detailLevel=!0,i}function n1(n,e){const t=e===n.model&&n.model_low||(e?e.replace(".glb","-low.glb"):null);return t&&t!==e?t:null}const Qd=[];function Mx(){return new Promise(n=>Qd.push(n))}function i1(){Qd.length!==0&&Qd.shift()()}const s1=new fi(1,1),ml=new gf;ml.overrideMaterial=new ui;const r1=new Kt;function Sx(n){const e=[];n.traverse(i=>{i.isMesh&&i.frustumCulled&&(i.frustumCulled=!1,e.push(i))}),ml.add(n);const t=ke.getRenderTarget();ke.setRenderTarget(s1),ke.render(ml,r1),ke.setRenderTarget(t),ml.remove(n),e.forEach(i=>{i.frustumCulled=!0})}const Cx=new Set,fg=new x,Bc=new x;function Ix(n){if(!n.detailRoot||!n.detailRadius)return 0;n.detailRoot.getWorldPosition(fg),n.detailRoot.getWorldScale(Bc);const e=n.detailRadius*Math.max(Bc.x,Bc.y,Bc.z),t=H.position.distanceTo(fg);if(t===0)return 1/0;const i=H.fov*(Math.PI/180);return 2*e/t*window.innerHeight/(2*Math.tan(i/2))}function wx(n){const e=n?.high_detail_px;return e?[e,e*Gp/kp]:[kp,Gp]}function a1(){Cx.forEach(n=>{if(!n.group.visible)return;const e=Ix(n),t=n.highLevel.visible,[i,s]=wx(n.data),r=t?e>s:e>i;r!==t&&(n.highLevel.visible=r,n.lowLevel.visible=!r)})}async function o1(n,e,t){const i=J.get(n.name),s=Wo(n);if(!i||!s){n.isModelLoaded=!0,t&&t();return}n.isModelLoading=!0;const r=n1(n,s);try{let a,o=!!r;try{a=await Ql.loadAsync(Ms(r||s))}catch(f){if(!r)throw f;o=!1,a=await Ql.loadAsync(Ms(s))}const c=vx(n,s,a.scene);await dx(c),await Mx(),Sx(c);const l=new Zt;l.add(c);const u=i.mesh;for(let f=u.children.length-1;f>=0;f--){const p=u.children[f];!p.isLine2&&!p.isLine&&u.remove(p)}const h=new ei().setFromObject(l),d=n.orbit_type==="landed"?h.getCenter(new x).y:0;i.detailRadius=Math.max(...[0,1,2,3,4,5,6,7].map(f=>Math.hypot(f&1?h.max.x:h.min.x,(f&2?h.max.y:h.min.y)-d,f&4?h.max.z:h.min.z))),i.detailCenterY=h.getCenter(new x).y,i.frameRadius=u1(l,h,i.detailRadius,n.orbit_type==="landed"),u.add(l),i.detailRoot=l,i.lowLevel=c,n.hasHighDetail=!o,n.isModelLoaded=!0,Xo(i),n.wantsHighDetail&&Ff(n)}catch(a){console.warn(`Failed to load model for ${n.name}`,a),n.isModelLoaded=!0}n.isModelLoading=!1,t&&t()}function Ff(n){if(!n||n.hasHighDetail||n.isHighDetailLoading)return;const e=Wo(n);if(!e)return;const t=J.get(n.name);if(!t||!t.detailRoot){n.wantsHighDetail=!0;return}n.isHighDetailLoading=!0,Ql.loadAsync(Ms(e)).then(i=>{const s=vx(n,e,i.scene);return dx(s).then(Mx).then(()=>{Sx(s),s.visible=!1,t.detailRoot.add(s),t.highLevel=s,Cx.add(t),n.hasHighDetail=!0,Xo(t)})}).catch(i=>console.warn(`Failed to load full-detail model for ${n.name}`,i)).finally(()=>{n.isHighDetailLoading=!1})}function c1(n){n&&J.forEach(e=>{lr(e.data.name)===n&&ta(e.data,!1)})}const l1=5e4;function u1(n,e,t,i){const s=new x(0,i?e.getCenter(new x).y:0,0),r=new x;let a=0,o=0;if(n.updateMatrixWorld(!0),n.traverse(l=>{const u=l.isMesh&&l.geometry&&l.geometry.attributes.position;if(!u)return;const h=Math.max(1,Math.floor(u.count/l1));for(let d=0;d<u.count;d+=h)r.fromBufferAttribute(u,d).applyMatrix4(l.matrixWorld),a+=r.distanceToSquared(s),o++}),!o)return t;const c=Math.min(Math.sqrt(a/o),t);return Math.sqrt(c*t)}const bx=[];let Ag=!1;function h1(){Ag||(Ag=!0,bx.forEach(n=>ta(n,!0)))}const d1=`// 4D simplex noise.\r
// From "webgl-noise" by Ian McEwan and Stefan Gustavson (Ashima Arts), MIT licence:\r
// https://github.com/ashima/webgl-noise\r
\r
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }\r
float mod289(float x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }\r
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 10.0) * x); }\r
float permute(float x) { return mod289(((x * 34.0) + 10.0) * x); }\r
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }\r
float taylorInvSqrt(float r) { return 1.79284291400159 - 0.85373472095314 * r; }\r
\r
vec4 grad4(float j, vec4 ip) {\r
    const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\r
    vec4 p, s;\r
    p.xyz = floor(fract(vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\r
    p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\r
    s = vec4(lessThan(p, vec4(0.0)));\r
    p.xyz = p.xyz + (s.xyz * 2.0 - 1.0) * s.www;\r
    return p;\r
}\r
\r
float snoise(vec4 v) {\r
    const vec4 C = vec4(0.138196601125011, 0.276393202250021, 0.414589803375032, -0.447213595499958);\r
    const float F4 = 0.309016994374947451;\r
\r
    vec4 i = floor(v + dot(v, vec4(F4)));\r
    vec4 x0 = v - i + dot(i, C.xxxx);\r
\r
    vec4 i0;\r
    vec3 isX = step(x0.yzw, x0.xxx);\r
    vec3 isYZ = step(x0.zww, x0.yyz);\r
    i0.x = isX.x + isX.y + isX.z;\r
    i0.yzw = 1.0 - isX;\r
    i0.y += isYZ.x + isYZ.y;\r
    i0.zw += 1.0 - isYZ.xy;\r
    i0.z += isYZ.z;\r
    i0.w += 1.0 - isYZ.z;\r
\r
    vec4 i3 = clamp(i0, 0.0, 1.0);\r
    vec4 i2 = clamp(i0 - 1.0, 0.0, 1.0);\r
    vec4 i1 = clamp(i0 - 2.0, 0.0, 1.0);\r
\r
    vec4 x1 = x0 - i1 + C.xxxx;\r
    vec4 x2 = x0 - i2 + C.yyyy;\r
    vec4 x3 = x0 - i3 + C.zzzz;\r
    vec4 x4 = x0 + C.wwww;\r
\r
    i = mod289(i);\r
    float j0 = permute(permute(permute(permute(i.w) + i.z) + i.y) + i.x);\r
    vec4 j1 = permute(permute(permute(permute(\r
                i.w + vec4(i1.w, i2.w, i3.w, 1.0))\r
              + i.z + vec4(i1.z, i2.z, i3.z, 1.0))\r
              + i.y + vec4(i1.y, i2.y, i3.y, 1.0))\r
              + i.x + vec4(i1.x, i2.x, i3.x, 1.0));\r
\r
    vec4 ip = vec4(1.0 / 294.0, 1.0 / 49.0, 1.0 / 7.0, 0.0);\r
    vec4 p0 = grad4(j0, ip);\r
    vec4 p1 = grad4(j1.x, ip);\r
    vec4 p2 = grad4(j1.y, ip);\r
    vec4 p3 = grad4(j1.z, ip);\r
    vec4 p4 = grad4(j1.w, ip);\r
\r
    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));\r
    p0 *= norm.x;\r
    p1 *= norm.y;\r
    p2 *= norm.z;\r
    p3 *= norm.w;\r
    p4 *= taylorInvSqrt(dot(p4, p4));\r
\r
    vec3 m0 = max(0.6 - vec3(dot(x0, x0), dot(x1, x1), dot(x2, x2)), 0.0);\r
    vec2 m1 = max(0.6 - vec2(dot(x3, x3), dot(x4, x4)), 0.0);\r
    m0 = m0 * m0;\r
    m1 = m1 * m1;\r
    return 49.0 * (dot(m0 * m0, vec3(dot(p0, x0), dot(p1, x1), dot(p2, x2)))\r
                 + dot(m1 * m1, vec2(dot(p3, x3), dot(p4, x4))));\r
}\r
`,pg=`// Shared by the Sun's shaders.\r
\r
// Hot-body colour ramp: red follows brightness, green its square, blue its fourth power, so\r
// bright plasma reads white-yellow and dimmer plasma orange-red. uTint sets where on that\r
// curve 1.0 lands; uBrightness scales the result.\r
vec3 plasmaColor(float brightness, float tint, float gain) {\r
    float b = brightness * tint;\r
    float b2 = b * b;\r
    return vec3(b, b2, b2 * b2) / tint * gain;\r
}\r
`,f1=`varying vec3 vDirection;\r
\r
void main() {\r
    vDirection = position;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}\r
`,A1=`// Draws evolving plasma noise onto the inside of a unit sphere; a cube camera at its centre\r
// captures it into the cube map the Sun's surface samples. Time is the fourth dimension, so\r
// the pattern boils in place instead of sliding across the surface.\r
\r
uniform float uTime;\r
uniform float uFrequency;\r
uniform float uSpeed;\r
uniform float uPersistence;\r
uniform float uContrast;\r
uniform float uFlatten;\r
\r
varying vec3 vDirection;\r
\r
float fbm(vec4 p) {\r
    float sum = 0.0;\r
    float amplitude = 1.0;\r
    for (int i = 0; i < OCTAVES; i++) {\r
        sum += snoise(p) * amplitude;\r
        p.xyz *= 2.0;\r
        amplitude *= uPersistence;\r
    }\r
    return sum;\r
}\r
\r
void main() {\r
    vec3 dir = normalize(vDirection);\r
    float t = uTime * uSpeed;\r
\r
    float plasma = fbm(vec4(dir * uFrequency + 7.3, t)) * uContrast + 0.5;\r
\r
    // Broad, slow patches of brighter activity on top of the fine granulation.\r
    float activity = max(snoise(vec4(dir * 2.0, t * 0.5)), 0.0);\r
    plasma *= mix(1.0, activity, uFlatten);\r
\r
    gl_FragColor = vec4(plasma, plasma, plasma, 1.0);\r
}\r
`,p1=`// The Sun's photosphere. The noise cube map is read three times through copies of the surface\r
// direction that each turn slowly about a different axis; averaging them makes the plasma\r
// churn rather than drift in one direction.\r
\r
uniform float uTime;\r
uniform float uLayerSpin;\r
\r
varying vec3 vWorldNormal;\r
varying vec3 vWorldPosition;\r
varying vec3 vLayerA;\r
varying vec3 vLayerB;\r
varying vec3 vLayerC;\r
varying vec3 vLocalDir;   // for the solar cycle's latitude (surface.frag)\r
\r
mat2 rotate2d(float a) {\r
    float s = sin(a);\r
    float c = cos(a);\r
    return mat2(c, -s, s, c);\r
}\r
\r
void main() {\r
    vec3 dir = normalize(position);\r
    vLocalDir = dir;\r
    float t = uTime * uLayerSpin;\r
\r
    vLayerA = dir;\r
    vLayerA.yz = rotate2d(t) * vLayerA.yz;\r
    vLayerB = dir;\r
    vLayerB.zx = rotate2d(t + 2.094) * vLayerB.zx;\r
    vLayerC = dir;\r
    vLayerC.xy = rotate2d(t + 4.189) * vLayerC.xy;\r
\r
    vec4 world = modelMatrix * vec4(position, 1.0);\r
    vWorldPosition = world.xyz;\r
    vWorldNormal = normalize(mat3(modelMatrix) * dir);\r
    gl_Position = projectionMatrix * viewMatrix * world;\r
}\r
`,g1=`uniform samplerCube uNoise;\r
uniform float uBase;\r
uniform float uOffset;\r
uniform float uLimbPower;\r
uniform float uLimbStrength;\r
uniform float uTint;\r
uniform float uBrightness;\r
// The solar cycle (sun.js setCycle): a map of the surface's magnetic field by latitude (v, south\r
// to north) and date (u), mid-grey for none, lighter for one polarity and darker for the other.\r
// Read at one date, it paints the surface in bands; the map has no longitudes, so the bands are\r
// broken into illustrative active regions by a noise over the sphere that drifts with the date.\r
// uCycleLook 0 is activity (bright faculae round dark spots), 1 a magnetogram (grey, yellow and\r
// blue, as the butterfly diagram).\r
uniform sampler2D uCycleMap;\r
uniform float uCycleU;\r
uniform float uCycleMix;\r
uniform float uCycleLook;\r
uniform float uCycleGain;\r
\r
varying vec3 vWorldNormal;\r
varying vec3 vWorldPosition;\r
varying vec3 vLayerA;\r
varying vec3 vLayerB;\r
varying vec3 vLayerC;\r
varying vec3 vLocalDir;\r
\r
// Value noise for the active regions (cheap: only read while the cycle is on).\r
float hash3(vec3 p) {\r
    p = fract(p * 0.3183099 + 0.1);\r
    p *= 17.0;\r
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));\r
}\r
float valueNoise(vec3 x) {\r
    vec3 i = floor(x);\r
    vec3 f = fract(x);\r
    f = f * f * (3.0 - 2.0 * f);\r
    return mix(mix(mix(hash3(i), hash3(i + vec3(1, 0, 0)), f.x),\r
                   mix(hash3(i + vec3(0, 1, 0)), hash3(i + vec3(1, 1, 0)), f.x), f.y),\r
               mix(mix(hash3(i + vec3(0, 0, 1)), hash3(i + vec3(1, 0, 1)), f.x),\r
                   mix(hash3(i + vec3(0, 1, 1)), hash3(i + vec3(1, 1, 1)), f.x), f.y), f.z);\r
}\r
// Turned off the lattice's axes, so its cells don't line up with the bands as boxes.\r
const mat3 REGION_TURN = mat3(0.8, 0.6, 0.0, -0.48, 0.64, 0.6, 0.36, -0.48, 0.8);\r
float regionNoise(vec3 x) {\r
    x = REGION_TURN * x;\r
    return valueNoise(x) * 0.6 + valueNoise(x * 2.3 + 7.1) * 0.3 + valueNoise(x * 5.1 + 3.7) * 0.1;\r
}\r
\r
void main() {\r
    float plasma = (textureCube(uNoise, vLayerA).r\r
                  + textureCube(uNoise, vLayerB).r\r
                  + textureCube(uNoise, vLayerC).r) / 3.0;\r
\r
    // Brighter towards the limb, where the eye looks through more of the glowing layer.\r
    vec3 toCamera = normalize(cameraPosition - vWorldPosition);\r
    float limb = pow(1.0 - max(dot(normalize(vWorldNormal), toCamera), 0.0), uLimbPower) * uLimbStrength;\r
\r
    float brightness = plasma * uBase + uOffset + limb;\r
    vec3 colour = clamp(plasmaColor(brightness, uTint, uBrightness), 0.0, 1.0);\r
\r
    if (uCycleMix > 0.0) {\r
        float v = asin(clamp(vLocalDir.y, -1.0, 1.0)) / 3.14159265 + 0.5;\r
        float field = (texture2D(uCycleMap, vec2(uCycleU, v)).r - 0.5) * 2.0;\r
        float strength = clamp(abs(field) * uCycleGain, 0.0, 1.0);\r
        // Active regions: patches about ten degrees across, moving on as the years pass; near the\r
        // poles the field is spread thin and even instead.\r
        vec3 drift = vec3(0.0, 0.0, uCycleU * 160.0);\r
        float region = regionNoise(vLocalDir * 7.0 + drift);\r
        float polar = smoothstep(0.75, 0.92, abs(vLocalDir.y));\r
        float patches = mix(smoothstep(0.44, 0.76, region), 0.75, polar);\r
        float core = smoothstep(0.7, 0.9, region) * (1.0 - polar);\r
        // Leading and trailing polarities side by side in each region.\r
        float flip = step(regionNoise(vLocalDir * 9.0 - drift + 11.0), 0.42) * (1.0 - polar);\r
        float polaritySign = (field > 0.0 ? 1.0 : -1.0) * (flip > 0.5 ? -1.0 : 1.0);\r
        float local = strength * patches;\r
\r
        // Activity: faculae brighten round each region; its core is a dark spot.\r
        vec3 activity = clamp(plasmaColor(brightness * 0.85 + local * (0.5 + plasma), uTint, uBrightness), 0.0, 1.0);\r
        activity = mix(activity, vec3(0.22, 0.05, 0.02), core * smoothstep(0.35, 0.8, strength) * 0.9);\r
        // Magnetogram: grey where it's quiet, mottled by the plasma so it reads as a surface.\r
        vec3 polarity = polaritySign > 0.0 ? vec3(1.0, 0.93, 0.25) : vec3(0.18, 0.3, 1.0);\r
        vec3 grey = vec3(0.3 + 0.18 * plasma) + limb * 0.12;\r
        vec3 magnetogram = mix(grey, polarity, clamp(local * 1.4, 0.0, 1.0));\r
        colour = mix(colour, mix(activity, magnetogram, uCycleLook), uCycleMix);\r
    }\r
    gl_FragColor = vec4(colour, 1.0);\r
}\r
`,gg=`// A flat shape centred on the Sun that always faces the camera, built in view space.\r
// position.xy is a unit direction, position.z runs 0 (inner edge) to 1 (outer edge).\r
// The corona starts at the limb; the halo is a full disc whose size never drops below\r
// uMinPixels on screen, so the Sun still reads as a bright star from across the system.\r
\r
uniform float uInner;        // inner radius, world units\r
uniform float uOuter;        // outer radius, world units\r
uniform float uMinPixels;    // minimum outer radius on screen (0 = none)\r
uniform float uViewportHeight;\r
\r
varying float vRadial;\r
\r
void main() {\r
    vec4 centre = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);\r
    float outer = uOuter;\r
    if (uMinPixels > 0.0) {\r
        // World units per pixel at the Sun's distance.\r
        float worldPerPixel = 2.0 * -centre.z / (projectionMatrix[1][1] * uViewportHeight);\r
        outer = max(outer, uMinPixels * worldPerPixel);\r
    }\r
    float radius = mix(uInner, outer, position.z);\r
    vRadial = position.z;\r
    gl_Position = projectionMatrix * (centre + vec4(position.xy * radius, 0.0, 0.0));\r
}\r
`,m1=`// Glow around the disc: strongest at the limb, falling off with the square of the distance,\r
// and coloured on the same ramp as the surface so the two meet without a seam.\r
\r
uniform float uTint;\r
uniform float uBrightness;\r
uniform float uFalloffColor;\r
uniform float uOpacity;\r
\r
varying float vRadial;\r
\r
void main() {\r
    float glow = 1.0 - vRadial;\r
    glow *= glow;\r
    vec3 color = plasmaColor(1.0 + glow * uFalloffColor, uTint, uBrightness);\r
    float alpha = glow * uOpacity;\r
    gl_FragColor = vec4(color * alpha, alpha);\r
}\r
`,x1=`// Soft star-like glow for when the Sun is small on screen.\r
\r
uniform vec3 uColor;\r
uniform float uOpacity;\r
\r
varying float vRadial;\r
\r
void main() {\r
    float glow = exp(-vRadial * vRadial * 6.0) * (1.0 - vRadial);\r
    float alpha = glow * uOpacity;\r
    gl_FragColor = vec4(uColor * alpha, alpha);\r
}\r
`,_1=`// Coronal loops and rays: thin camera-facing ribbons animated entirely on the GPU.\r
// Loops arc between two footpoints on the surface, rising and fading on a repeating cycle.\r
// Rays (STRAND_RAYS) run straight out from one footpoint and taper to a point.\r
// Everything is in the Sun's object space, where its radius is 1.\r
\r
attribute vec2 aStrand;   // x: 0..1 along the strand, y: -1 / 1 across it\r
attribute vec3 aFootA;    // footpoint on the unit sphere\r
attribute vec3 aFootB;    // loops: the other footpoint\r
attribute vec4 aSeed;     // x: cycle offset, y: cycle speed, z: size, w: colour\r
\r
uniform float uTime;\r
uniform float uCycleSpeed;\r
uniform vec3 uCameraLocal;\r
uniform float uWidth;\r
uniform float uArch;\r
uniform float uLength;\r
uniform float uNoiseFrequency;\r
uniform float uNoiseAmplitude;\r
uniform float uOpacity;\r
uniform float uHue;\r
uniform float uHueSpread;\r
\r
varying float vAcross;\r
varying float vOpacity;\r
varying vec3 vColor;\r
\r
// Cheap swirling displacement: a few layers of sines, each fed through a fixed rotation and\r
// back into itself so the result twists rather than repeats.\r
vec3 swirl(vec3 p, float t) {\r
    const mat3 turn = mat3(0.00, 0.80, 0.60, -0.80, 0.36, -0.48, -0.60, -0.48, 0.64);\r
    vec3 sum = vec3(0.0);\r
    float amplitude = 1.0;\r
    float frequency = 1.0;\r
    for (int i = 0; i < 4; i++) {\r
        p = turn * p + vec3(0.0, 0.0, t * 0.35);\r
        vec3 s = sin(p.yzx * frequency) * amplitude;\r
        p += s;\r
        sum += s;\r
        amplitude *= 0.707;\r
        frequency /= 0.707;\r
    }\r
    return sum;\r
}\r
\r
// Warm palette: deep red-orange (v = 0) through orange to golden yellow (v = 1). An explicit\r
// gradient rather than a cosine palette, so no setting can stray into green.\r
vec3 warm(float v) {\r
    v = clamp(v, 0.0, 1.0);\r
    vec3 red = vec3(1.0, 0.28, 0.08);\r
    vec3 orange = vec3(1.0, 0.55, 0.15);\r
    vec3 yellow = vec3(1.0, 0.85, 0.4);\r
    return v < 0.5 ? mix(red, orange, v * 2.0) : mix(orange, yellow, v * 2.0 - 1.0);\r
}\r
\r
#ifdef STRAND_RAYS\r
vec3 strandPoint(float u, float cycle) {\r
    float reach = u * uLength * (aSeed.z + 0.2);\r
    vec3 p = aFootA * (1.0 + reach);\r
    p += swirl(p * uNoiseFrequency, uTime) * reach * uNoiseAmplitude;\r
    return p;\r
}\r
#else\r
vec3 strandPoint(float u, float cycle) {\r
    float span = distance(aFootA, aFootB);\r
    vec3 up = normalize(aFootA + aFootB);\r
    vec3 p = mix(aFootA, aFootB, u);\r
    float lift = sin(u * 3.14159265) * span * uArch * cycle;\r
    p += up * lift;\r
    p += swirl(p * uNoiseFrequency, uTime) * lift * uNoiseAmplitude;\r
    return p;\r
}\r
#endif\r
\r
void main() {\r
    float u = aStrand.x;\r
    // Each strand runs its own rise-and-fade cycle.\r
    float cycle = fract(uTime * uCycleSpeed * aSeed.y + aSeed.x);\r
\r
    vec3 p = strandPoint(u, cycle);\r
    vec3 ahead = strandPoint(min(u + 0.01, 1.0), cycle);\r
    vec3 behind = strandPoint(max(u - 0.01, 0.0), cycle);\r
    vec3 tangent = normalize(ahead - behind);\r
    vec3 side = normalize(cross(normalize(p - uCameraLocal), tangent));\r
\r
#ifdef STRAND_RAYS\r
    float width = uWidth * (1.0 - u);\r
    vOpacity = uOpacity * (0.5 + aSeed.w);\r
    vColor = warm(aSeed.w * uHueSpread + uHue);\r
#else\r
    float width = uWidth * (1.0 + cycle);\r
    // Transparent at the base, fading out as the loop grows.\r
    vOpacity = smoothstep(1.0, 1.04, length(p)) * (1.0 - cycle) * uOpacity;\r
    vColor = warm(aSeed.w * uHueSpread + uHue);\r
#endif\r
\r
    vAcross = aStrand.y;\r
    p += side * width * aStrand.y;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);\r
}\r
`,E1=`varying float vAcross;\r
varying float vOpacity;\r
varying vec3 vColor;\r
\r
void main() {\r
    // Soft edges across the ribbon.\r
    float alpha = smoothstep(1.0, 0.0, abs(vAcross));\r
    alpha *= alpha * vOpacity;\r
    gl_FragColor = vec4(vColor * alpha, alpha);\r
}\r
`,ct={noise:{resolution:256,octaves:5,frequency:7,speed:.12,persistence:.8,contrast:.25,flatten:.72},surface:{layerSpin:.015,base:4,offset:1,limbPower:2.5,limbStrength:1.2,tint:.3,brightness:.7},corona:{extent:.35,tint:.46,brightness:1.06,falloffColor:.5,opacity:1},loops:{count:500,segments:24,regions:7,arch:.5,width:.012,cycleSpeed:.3,noiseFrequency:4,noiseAmplitude:.2,opacity:.45,hue:.1,hueSpread:.8},rays:{count:400,segments:12,length:.2,width:.02,cycleSpeed:.3,noiseFrequency:8,noiseAmplitude:.2,opacity:.06,hue:.35,hueSpread:.5},halo:{extent:3,minPixels:22,color:[1,.78,.45],opacity:.9},detailPixels:40,detailFadePixels:80,noisePixels:60,noiseFacesPerFrame:2},Od={transparent:!0,depthWrite:!1,blending:xs,premultipliedAlpha:!0};function Rc(n){return n.raycast=()=>{},n}function mg(n=96){const e=[],t=[];for(let s=0;s<=n;s++){const r=s/n*Math.PI*2;if(e.push(Math.cos(r),Math.sin(r),0,Math.cos(r),Math.sin(r),1),s<n){const a=s*2;t.push(a,a+1,a+2,a+1,a+3,a+2)}}const i=new Ze;return i.setAttribute("position",new zt(e,3)),i.setIndex(t),i}function kd(n){const e=n()*2-1,t=n()*Math.PI*2,i=Math.sqrt(1-e*e);return new x(i*Math.cos(t),e,i*Math.sin(t))}function xg(n,e,t){const i=kd(t).cross(n).normalize();return n.clone().applyAxisAngle(i,t()*e).normalize()}function y1(n){let e=n;return()=>(e=e*16807%2147483647)/2147483647}function _g({count:n,segments:e},t){const i=(e+1)*2,s=new Float32Array(n*i*2),r=new Float32Array(n*i*3),a=new Float32Array(n*i*3),o=new Float32Array(n*i*4),c=[];let l=0;for(let h=0;h<n;h++){const{a:d,b:f,random:p}=t(h),g=l;for(let m=0;m<=e;m++){for(const A of[-1,1])s.set([m/e,A],l*2),r.set([d.x,d.y,d.z],l*3),a.set([f.x,f.y,f.z],l*3),o.set(p,l*4),l++;if(m<e){const A=g+m*2;c.push(A,A+1,A+2,A+1,A+3,A+2)}}}const u=new Ze;return u.setAttribute("aStrand",new Ge(s,2)),u.setAttribute("aFootA",new Ge(r,3)),u.setAttribute("aFootB",new Ge(a,3)),u.setAttribute("aSeed",new Ge(o,4)),u.setIndex(c),u.boundingSphere=new Sn(new x,1.6),u}function Eg(n,e){return new Mt({...Od,defines:e?{STRAND_RAYS:""}:{},uniforms:{uTime:{value:0},uCycleSpeed:{value:n.cycleSpeed},uCameraLocal:{value:new x},uWidth:{value:n.width},uArch:{value:n.arch??0},uLength:{value:n.length??0},uNoiseFrequency:{value:n.noiseFrequency},uNoiseAmplitude:{value:n.noiseAmplitude},uOpacity:{value:n.opacity},uHue:{value:n.hue},uHueSpread:{value:n.hueSpread}},vertexShader:_1,fragmentShader:E1})}const v1=new x,Tx=new Ma(new Uint8Array([128,128,128,255]),1,1);Tx.needsUpdate=!0;const M1=.8;function S1({radius:n,renderer:e}){const t=new Zt;t.scale.setScalar(n);const i=y1(20240613),s=new b0(ct.noise.resolution,{generateMipmaps:!1,minFilter:bt,magFilter:bt}),r=new I0(.1,10,s),a=new gf,o=new Mt({side:Vt,defines:{OCTAVES:ct.noise.octaves},uniforms:{uTime:{value:0},uFrequency:{value:ct.noise.frequency},uSpeed:{value:ct.noise.speed},uPersistence:{value:ct.noise.persistence},uContrast:{value:ct.noise.contrast},uFlatten:{value:ct.noise.flatten}},vertexShader:f1,fragmentShader:d1+A1}),c=new Je(new ki(1,48,32),o);a.add(c);const l=new Je(new ki(1,128,64),new Mt({uniforms:{uTime:{value:0},uNoise:{value:s.texture},uLayerSpin:{value:ct.surface.layerSpin},uBase:{value:ct.surface.base},uOffset:{value:ct.surface.offset},uLimbPower:{value:ct.surface.limbPower},uLimbStrength:{value:ct.surface.limbStrength},uTint:{value:ct.surface.tint},uBrightness:{value:ct.surface.brightness},uCycleMap:{value:Tx},uCycleU:{value:0},uCycleMix:{value:0},uCycleLook:{value:0},uCycleGain:{value:1}},vertexShader:p1,fragmentShader:pg+g1}));t.add(l);const u=Rc(new Je(mg(),new Mt({...Od,uniforms:{uInner:{value:0},uOuter:{value:0},uMinPixels:{value:0},uViewportHeight:{value:1},uTint:{value:ct.corona.tint},uBrightness:{value:ct.corona.brightness},uFalloffColor:{value:ct.corona.falloffColor},uOpacity:{value:ct.corona.opacity}},vertexShader:gg,fragmentShader:pg+m1})));u.frustumCulled=!1,t.add(u);const h=Rc(new Je(mg(64),new Mt({...Od,uniforms:{uInner:{value:0},uOuter:{value:0},uMinPixels:{value:ct.halo.minPixels},uViewportHeight:{value:1},uColor:{value:new Se(...ct.halo.color)},uOpacity:{value:ct.halo.opacity}},vertexShader:gg,fragmentShader:x1})));h.frustumCulled=!1,t.add(h);const d=Array.from({length:ct.loops.regions},()=>{const F=(i()<.5?1:-1)*(.15+i()*.45),Q=i()*Math.PI*2;return new x(Math.cos(F)*Math.cos(Q),Math.sin(F),Math.cos(F)*Math.sin(Q))}),f=Rc(new Je(_g(ct.loops,()=>{const F=i()<.2,Q=F?kd(i):d[Math.floor(i()*d.length)],X=xg(Q,F?.05:.18,i),z=xg(X,.05+i()*.3,i);return{a:X,b:z,random:[i(),i(),i(),i()]}}),Eg(ct.loops,!1)));t.add(f);const p=Rc(new Je(_g(ct.rays,()=>{const F=kd(i);return{a:F,b:F,random:[i(),i(),i(),i()]}}),Eg(ct.rays,!0)));t.add(p);const g=new x,m=new Me,A=new x;let E=!1;r.coordinateSystem=e.coordinateSystem,r.updateCoordinateSystem(),r.updateMatrixWorld();let _=0,S=0,w=null;function C(F,Q=ct.noiseFacesPerFrame){if(!E)return;o.uniforms.uTime.value=F;const X=e.getRenderTarget();for(let z=0;z<Q;z++)e.setRenderTarget(s,_),e.render(a,r.children[_]),_=(_+1)%6;e.setRenderTarget(X)}const B=new fi(4,4),U=new Kt(60,1,.01,100);U.position.set(0,0,3),U.lookAt(0,0,0),U.updateMatrixWorld();function y(){const F=t.parent;F&&F.remove(t),t.scale.setScalar(1),t.visible=f.visible=p.visible=!0;for(const X of[f,p])X.material.uniforms.uCameraLocal.value.copy(U.position);const Q=e.getRenderTarget();e.setRenderTarget(B),e.render(t,U),e.setRenderTarget(Q),t.scale.setScalar(n),F&&F.add(t)}t.visible=!1,Promise.all([e.compileAsync(c,r.children[0],a),e.compileAsync(t,U)]).then(()=>{E=!0,C(0,6),y(),B.dispose()});function v(F,Q,{strandsTime:X=F}={}){t.getWorldPosition(g);const z=t.getWorldScale(v1).x,j=Q.position.distanceTo(g);e.getSize(m);const ie=Math.tan(at.degToRad(Q.fov)/2),te=j>z?z/j/ie*(m.y/2):1/0;A.copy(g).project(Q);const pe=A.z<1&&Math.abs(A.x)<1.5&&Math.abs(A.y)<1.5;l.material.uniforms.uTime.value=F;const be=w===null?0:Math.max(0,F-w);w=F,N(be),pe&&te>ct.noisePixels&&(S+=be,C(S)),u.material.uniforms.uInner.value=z*.98,u.material.uniforms.uOuter.value=z*(1+ct.corona.extent),u.material.uniforms.uViewportHeight.value=m.y,h.material.uniforms.uOuter.value=z*ct.halo.extent,h.material.uniforms.uViewportHeight.value=m.y,h.material.uniforms.uOpacity.value=ct.halo.opacity*(1-at.smoothstep(te,20,120));const et=at.smoothstep(te,ct.detailPixels,ct.detailFadePixels);if(f.visible=p.visible=et>0,et>0){f.material.uniforms.uOpacity.value=ct.loops.opacity*et,p.material.uniforms.uOpacity.value=ct.rays.opacity*et;for(const At of[f,p])At.material.uniforms.uTime.value=X,At.worldToLocal(At.material.uniforms.uCameraLocal.value.copy(Q.position))}}function R(F){S=F}const b={mix:0,mixTo:0,look:0,lookTo:0};function D(F){const Q=l.material.uniforms;if(!F){b.mixTo=0;return}F.map&&(Q.uCycleMap.value=F.map),F.u!==void 0&&(Q.uCycleU.value=at.clamp(F.u,0,1)),F.gain!==void 0&&(Q.uCycleGain.value=F.gain),F.look!==void 0&&(b.lookTo=F.look,b.mix===0&&(b.look=F.look)),b.mixTo=1}function N(F){const Q=F/M1,X=(j,ie)=>ie>j?Math.min(ie,j+Q):Math.max(ie,j-Q);b.mix=X(b.mix,b.mixTo),b.look=X(b.look,b.lookTo);const z=l.material.uniforms;z.uCycleMix.value=b.mix*b.mix*(3-2*b.mix),z.uCycleLook.value=b.look*b.look*(3-2*b.look)}return{group:t,update:v,setNoiseTime:R,setCycle:D,noiseMaterial:o}}let Bx=1,An=new Date;const C1=new Xv;let Zn=0,ur=null;function I1(n){Zn=ur??Zn+n}function w1(n){ur=n}function b1(){return new Date(An)}function T1(n){An.setTime(new Date(n).getTime())}function B1(n){Bx=n}const xl=new Map;function cu(n,e){xl.has(n)||xl.set(n,[]),xl.get(n).push(e)}function nn(n,e){xl.get(n)?.forEach(t=>t(e))}const R1=new x(0,0,0),D1=new x(0,1,0);function lu(n){let e=0;for(let t=0;t<n.length;t++)e=(e<<5)-e+n.charCodeAt(t),e|=0;return Math.abs(e)}function L1(n,e=.25){const t=lu(n||"asteroid"),i=.2+(t&255)/255*.8,s=.2+(t>>8&255)/255*.8,r=.2+(t>>16&255)/255*.8,a=i+s+r,o=t&1?1:-1,c=t>>1&1?1:-1,l=t>>2&1?1:-1;return{x:o*(i/a)*e,y:c*(s/a)*e,z:l*(r/a)*e}}function P1(n){const e=lu(n||"asteroid"),t=5+(e&255)/255*14,i=(e>>8&255)/255*(Math.PI/3),s=(e>>16&255)/255*Math.PI*2;return{period:(e>>24&1?1:-1)*t/24,pole:new x(Math.sin(i)*Math.cos(s),Math.cos(i),Math.sin(i)*Math.sin(s)),offset:e%360}}function U1(n){const e=lu(`${n||"asteroid"}/tumble`);return{nutation:(35+(e&255)/255*40)*Math.PI/180,precession:1.5+(e>>8&255)/255*2,offset:(e>>16&255)/255*Math.PI*2}}const yg={spin:{axis:"+y",rate:2,wobble:8,tilt:35,period:90},sun:{axis:"+y",rate:1.5,wobble:5,period:120},nadir:{axis:"-y",along:"+z",rate:0,wobble:3,period:40},tumble:{rate:3}},fh=new x,vg=new x,Mg=new x,Nr=new x,qr=new x,ji=new x,Sg=new xe,Cg=new xe,Ig=new ot,Dc=new ot;function wg(n){const e=/^([+-]?)([xyz])$/.exec(String(n||"+y").trim().toLowerCase())||["","","y"],t=new x;return t[e[2]]=e[1]==="-"?-1:1,t}function F1(n){if(n.motion)return n.motion;const e=n.data.motion||{},t=yg[e.mode]?e.mode:"spin",i={...yg[t],...e},s=lu(n.data.name),r=s%360*Math.PI/180,a=at.degToRad(i.tilt||0);return n.motion={mode:t,axis:wg(i.axis),along:wg(i.along),rate:at.degToRad(i.rate||0),wobble:at.degToRad(i.wobble||0),period:i.period||90,phase:(s>>9)%628/100,rest:new x(Math.sin(a)*Math.cos(r),Math.cos(a),Math.sin(a)*Math.sin(r))},n.motion}function N1(n,e,t,i){return e?(qr.set(1,0,0),Math.abs(n.x)>.9&&qr.set(0,0,1),qr.cross(n).normalize().applyAxisAngle(n,t),i.copy(n).multiplyScalar(Math.cos(e)).addScaledVector(qr,Math.sin(e))):i.copy(n)}function Q1(n,e,t,i){const s=F1(n),r=n.meshGroup,a=e/s.period*Math.PI*2+s.phase;if(s.mode==="tumble"){n.tumbleSpeed||(n.tumbleSpeed=L1(n.data.name,s.rate)),r.rotateX(n.tumbleSpeed.x*t),r.rotateY(n.tumbleSpeed.y*t),r.rotateZ(n.tumbleSpeed.z*t);return}const o=J.get(n.data.parent);if(s.mode==="nadir"&&o&&n.data.orbit){Nr.subVectors(o.group.position,n.group.position).normalize();const c=$n(n.data.orbit,i),l=$n(n.data.orbit,i+.001);ji.set(l.x-c.x,l.y-c.y,l.z-c.z),ji.addScaledVector(Nr,-ji.dot(Nr)),ji.lengthSq()<1e-16&&ji.crossVectors(Nr,D1),ji.normalize(),qr.crossVectors(Nr,ji),Sg.makeBasis(Nr,ji,qr),Mg.crossVectors(s.axis,s.along),Cg.makeBasis(s.axis,s.along,Mg).transpose(),r.quaternion.setFromRotationMatrix(Sg.multiply(Cg)),Dc.setFromAxisAngle(s.axis,s.wobble*Math.sin(a)),r.quaternion.multiply(Dc);return}s.mode==="sun"?fh.subVectors(R1,n.group.position).normalize():fh.copy(s.rest),N1(fh,s.wobble,a,vg),Ig.setFromUnitVectors(s.axis,vg),Dc.setFromAxisAngle(s.axis,s.rate*e+s.phase),r.quaternion.copy(Ig).multiply(Dc)}let sr=null;function Gd(n){return n?n.orbit_color?n.orbit_color:n.type==="planet"?n.color||"#4a90e2":n.type==="moon"?J.get(n.parent)?.data.orbit_color||"#888888":n.type==="comet"?"#ffffff":"#888888":"#888888"}function bg(n){return n?n.type==="asteroid"||n.type==="comet"||n.type==="mission"?.18:n.type==="planet"?.65:n.type==="moon"?.4:.35:.35}function O1(n,e,t){const i=ir(n);if(i.samples.length<2)return null;const s=new Ze().setFromPoints(i.samples.map(a=>a.pos)),r=new Sa(s,new ws({color:new Se(e),transparent:!0,opacity:t,depthWrite:!1}));return r.userData={baseColor:e,baseOpacity:t},r.userData.curve={closed:!1,turns:0,range:()=>{const a=ir(n).samples;return[a[0].days,a[a.length-1].days]},at:(a,o)=>ax(ir(n),a,o)},r}function Nf(n,e,t){const i=[];for(let s=0;s<e;s++){const r=Bf(n,s/e*2*Math.PI,t);i.push(new x(r.x,r.y,r.z))}return i}function Rx(n){return at.clamp(Math.ceil(2*Math.PI*Math.sqrt(Tf(n)/(8*J0))),128,4096)}function Tg(n,e="#888888",t=.4){if(!n||n.a===0||n.rate===0)return null;const i=Rx(n),s=Ar(An),r=Nf(n,i,s),a=new Ze().setFromPoints(r),o=new ws({color:new Se(e),transparent:!0,opacity:t,depthWrite:!1}),c=new Ef(a,o);return c.userData={baseColor:e,baseOpacity:t,orbit:n,segments:i,days:s},c.userData.curve=J1(c),c}const k1=.1;function G1(n,e){const t=n?.userData.orbit;if(!t||!(t.node_rate||t.peri_rate)||n.userData.morph||Math.abs(e-n.userData.days)*(Math.abs(t.node_rate||0)+Math.abs(t.peri_rate||0))<k1)return;const s=n.userData.loop??n.geometry;s.setFromPoints(Nf(t,n.userData.segments,e)),s.computeBoundingSphere(),n.userData.days=e,n.userData.near&&(n.userData.near.cam=null),n.userData.far=null}const z1=.05,H1=.1,V1=.01,W1=.02,q1=1.08,Lc=96,X1=2e-5,$i=new x,Pc=new x,Y1=new xe;function K1(n,e){J.forEach(t=>{Bg(t.orbitLine,n,e);const i=t.trajectoryLines;i&&[i.cruise,i.arrived].forEach(s=>{s&&s!==t.orbitLine&&Bg(s,n,e)})})}function J1(n){const e=n.userData.orbit;return{closed:!0,range:()=>[0,2*Math.PI],turns:(Math.abs(e.node_rate||0)+Math.abs(e.peri_rate||0))*(Math.PI/180),at:(t,i,s)=>{const r=Bf(n.userData.orbit,t,s);return i.set(r.x,r.y,r.z)}}}function Bg(n,e,t){const i=n?.userData.curve;if(!i||!n.parent)return;if(!n.visible){Pi(n);return}n.parent.updateWorldMatrix(!0,!1),$i.copy(e).applyMatrix4(Y1.copy(n.parent.matrixWorld).invert());const s=n.userData.near,r=n.userData.loop??n.geometry;r.boundingSphere||r.computeBoundingSphere();const a=r.boundingSphere,o=n.userData.far;if(o&&o.distances===jn&&o.whole===r&&o.radius===a.radius&&o.cam.distanceTo($i)+Math.abs(t-o.days)*i.turns*a.radius<o.slack||(n.userData.far=null,s?.cam&&s.cam.distanceTo($i)<H1*s.distance&&Math.abs(t-s.days)*i.turns*a.radius<V1*s.distance))return;const c=z1*a.radius;if($i.distanceTo(a.center)>a.radius+c){Pi(n);return}const l=n.userData.morph&&n.userData.orbit&&r.userData.reach;if(l){const te=$i.length();if(te<l[0]-2*c||te>l[1]+2*c){Pi(n);return}}const u=te=>i.at(te,Pc,t),h=te=>u(te).distanceTo($i),[d,f]=i.range(),p=f-d;let g=d,m=1/0;for(let te=0;te<=Lc;te++){const pe=d+p*(te/Lc),be=h(pe);be<m&&(m=be,g=pe)}const A=(Math.sqrt(5)-1)/2;let E=g-p/Lc,_=g+p/Lc;i.closed||(E=Math.max(E,d),_=Math.min(_,f));const S=u(_).clone(),w=u(E).distanceTo(S)/(_-E)||1;let C=_-A*(_-E),B=E+A*(_-E),U=h(C),y=h(B);for(let te=0;te<80&&(_-E)*w>X1*Math.min(U,y);te++)U<y?(_=B,B=C,y=U,C=_-A*(_-E),U=h(C)):(E=C,C=B,U=y,B=E+A*(_-E),y=h(B));g=(E+_)/2;const v=Math.max(h(g),c*1e-12);if(v>c){Pi(n),n.userData.far={cam:$i.clone(),days:t,slack:(v-c)/2,distances:jn,whole:r,radius:a.radius};return}const R=u(g).clone(),b=p*1e-9*(g+p*1e-9>f&&!i.closed?-1:1),D=u(g+b).distanceTo(R)/Math.abs(b)||1,N=i.closed?p/2:Math.max(g-d,f-g),F=[];let Q=0,X=W1*v/D;for(;Q+X<N;)Q+=X,F.push(Q),X*=q1;let z;if(i.closed)z=[...F.map(te=>g-te).reverse(),g,...F.map(te=>g+te)];else{const te=F.filter(be=>be<g-d).map(be=>g-be).reverse(),pe=F.filter(be=>be<f-g).map(be=>g+be);z=[...g>d?[d]:[],...te,g,...pe,...g<f?[f]:[]]}const j=new Float32Array(z.length*3);z.forEach((te,pe)=>{u(te).sub(R),j[3*pe]=Pc.x,j[3*pe+1]=Pc.y,j[3*pe+2]=Pc.z});const ie=new Ze;ie.setAttribute("position",new Ge(j,3)),s?.geometry.dispose(),n.userData.loop??=n.geometry,n.geometry=ie,n.position.copy(R),n.material.isLineDashedMaterial&&n.computeLineDistances(),n.userData.near={cam:$i.clone(),distance:v,days:t,geometry:ie}}function Pi(n){const e=n.userData.near;e&&(e.geometry.dispose(),n.geometry=n.userData.loop,n.position.set(0,0,0),n.userData.near=null,n.userData.loop=null)}function Dx({y:n,z:e}){const t=Math.max(n,e)**2/Math.max(Math.min(n,e),1e-6);return at.clamp(Math.ceil(2*Math.PI*Math.sqrt(t/(8*J0))),128,4096)}function Lx(n){const e=[],t=Dx(n.amp),i={...n,M0:0};for(let s=0;s<t;s++)e.push(ix(i,s/t*(360/n.rate),new x));return e}function Z1(n){if(!n?.amp||!n.rate)return null;const e=new Ze().setFromPoints(Lx(n)),t=new ws({color:new Se("#888888"),transparent:!0,opacity:.18,depthWrite:!1}),i=new Ef(e,t);return i.userData={baseColor:"#888888",baseOpacity:.18},i.userData.curve={closed:!0,turns:0,range:()=>[0,2*Math.PI],at:(s,r)=>r.set(-n.amp.x*Math.cos(s),n.amp.y*Math.cos(s),n.amp.z*Math.sin(s))},i}function Rg(n,e){const t=(90-n)*(Math.PI/180),i=(e+180)*(Math.PI/180);return new x(-(Math.sin(t)*Math.cos(i)),Math.cos(t),Math.sin(t)*Math.sin(i)).normalize()}function Dg(n,e,t){const i=n.duration||.05;return Qf(n,e,t%i/i)}function Qf(n,e,t){const i=n.apogee||1.5,s=Rg(n.start_coords.lat,n.start_coords.lon),r=Rg(n.end_coords.lat,n.end_coords.lon),a=new ot().setFromUnitVectors(new x(0,1,0),s),o=new ot().setFromUnitVectors(new x(0,1,0),r),c=new ot().slerpQuaternions(a,o,t),l=new x(0,1,0).applyQuaternion(c),u=e+4*i*t*(1-t);return l.multiplyScalar(u)}function Of(n,e){const t=[];for(let s=0;s<=128;s++)t.push(Qf(n.suborbital,e,s/128));return t}function j1(n,e){if(!n.suborbital)return null;const t=new Ze().setFromPoints(Of(n,e)),i=new bv({color:16755200,dashSize:2,gapSize:1,transparent:!0,opacity:.6,depthWrite:!1}),s=new Sa(t,i);return s.computeLineDistances(),s.userData.baseColor="#ffaa00",s.userData.baseOpacity=.6,s.userData.curve={closed:!1,turns:0,range:()=>[0,1],at:(r,a)=>a.copy(Qf(n.suborbital,J.get(n.parent)?.data.radius||1,r))},s}function $1(n,e){try{const t=new ki(n*1.005,64,64),i=oo(e);i.colorSpace=dt;const s=new x,r=new Mt({uniforms:{tNight:{value:i},uSun:{value:s}},vertexShader:`
                varying vec2 vUv; varying vec3 vNormal; varying vec3 vWorldPosition;
                void main() { vUv = uv; vNormal = normalize(mat3(modelMatrix) * normal);
                vec4 worldPos = modelMatrix * vec4(position, 1.0); vWorldPosition = worldPos.xyz;
                gl_Position = projectionMatrix * viewMatrix * worldPos; }
            `,fragmentShader:`
                uniform sampler2D tNight; uniform vec3 uSun; varying vec2 vUv; varying vec3 vNormal; varying vec3 vWorldPosition;
                void main() { vec3 sunDir = normalize(uSun - vWorldPosition);
                float dotProd = dot(vNormal, sunDir); float alpha = 1.0 - smoothstep(-0.2, 0.2, dotProd);
                vec4 color = texture2D(tNight, vUv); gl_FragColor = vec4(color.rgb, alpha * color.a); }
            `,transparent:!0,blending:xs,side:Gn,depthWrite:!1}),a=new Je(t,r);return a.onBeforeRender=(o,c)=>s.copy(c.position),a}catch{return null}}function eB(n){const e=new Zt;let t,i;if(Ao(n)){const o=Ex();Uf.push(o),t=o,i=o}else t=new Gi({color:16763904,roughness:.3,metalness:.8}),i=new Gi({color:17663,roughness:.2,metalness:.5,emissive:4403});const s=new Je(new Es(1,1,1),t);Ao(n)||(s.castShadow=!1,s.receiveShadow=!0),e.add(s);const r=new Je(new Es(3,.1,.8),i);Ao(n)||(r.castShadow=!1,r.receiveShadow=!0),e.add(r);const a=n.type==="mission"?(n.model_size??cr)/3:(n.radius||1)*.5;return e.scale.set(a,a,a),n.orbit_type==="landed"&&(e.position.y=a/2),e.traverse(o=>{o.userData=n}),e}const Lg=new x(0,1,0),tB=new x(0,0,1);function nB(n){n.forEach(e=>{const t=new Zt,i=new Zt,s=new ot,r=e.type==="asteroid"||e.type==="comet"?P1(e.name):null;r&&(e.rot_period??=r.period,e.rot_offset??=r.offset),e.pole?s.setFromUnitVectors(Lg,vs(e.pole)):e.tilt?s.setFromAxisAngle(tB,e.tilt*Math.PI/180):r&&e.tilt===void 0&&s.setFromUnitVectors(Lg,r.pole),i.quaternion.copy(s);const a=new Zt;e.orbit_type==="suborbital"&&(a.rotation.x=Math.PI/2),a.userData=e,i.add(a),t.add(i);const o=e.type==="asteroid"&&e.menu_holder==="named"&&!e.rotation_mode&&!e.pole&&e.tilt===void 0?U1(e.name):null;if(J.set(e.name,{group:t,meshGroup:i,mesh:a,data:e,axis:s,tumble:o}),e.built={radius:e.radius,modelSize:e.type==="mission"?e.model_size:e.model_scale},e.type==="star")sr=S1({radius:e.radius,renderer:ke}),a.add(sr.group),Rd.push(a);else{let c;if(e.type==="reference_point")c=new iM(1),c.visible=!1;else if(e.texture){const l=oo(e.texture);l.colorSpace=dt;const u=e.segments||(e.type==="star"?48:32),h=new ki(e.radius,u,u);let d={map:l,roughness:1,metalness:0};if(e.roughness_map&&(d.roughnessMap=e.roughness_map===e.texture?l:oo(e.roughness_map)),e.normal_map){const p=oo(e.normal_map);p.colorSpace=qn,d.normalMap=p;const g=e.normal_scale??1;d.normalScale=new Me(g,g)}d.shadowSide=Vt;const f=new Gi(d);if(e.night_texture&&pa.nightLights){const p=$1(e.radius,e.night_texture);p&&a.add(p)}c=new Je(h,f),c.userData=e,c.castShadow=!0,c.receiveShadow=!0,e.texture_detail&&Qx.push({mesh:c,item:e,state:"waiting"})}else{const l=eB(e);a.add(l),c=l}(e.texture||e.type==="reference_point")&&a.add(c),e.type!=="reference_point"&&Rd.push(a)}if(e.ring){const c=e.radius*(e.ring.inner_radius||1.4),l=e.radius*(e.ring.outer_radius||2.5),u=new Sf(c,l,128),h=u.attributes.position,d=new x;for(let m=0;m<h.count;m++){d.fromBufferAttribute(h,m);const E=(Math.sqrt(d.x*d.x+d.y*d.y)-c)/(l-c);u.attributes.uv.setXY(m,E,.5)}const f=oo(e.ring.texture);f.colorSpace=dt;const p=new Gi({map:f,side:kt,transparent:!0,opacity:e.ring.opacity??.9,alphaTest:.1,roughness:.7,emissive:new Se(16777215).multiplyScalar(e.ring.emissive||.1)}),g=new Je(u,p);g.rotation.x=-Math.PI/2,g.receiveShadow=!0,g.castShadow=!0,i.add(g),J.get(e.name).ring={mesh:g,innerRadius:c,outerRadius:l,builtInner:c,builtOuter:l,opacity:e.ring.opacity??.9}}}),J.forEach(e=>{const{group:t,data:i}=e;if(Wo(i)){const s=lr(i.name);(s==="Sun"||i.preload||J.get(s)?.data.preload)&&bx.push(i)}if(i.orbit_type==="landed")Ss.push({group:t,data:i});else if(He.add(t),i.orbit_type==="trajectory"){const s=Gd(i),r=bg(i),a=O1(e,s,r);a&&He.add(a);const o=ir(e);let c=null;if(o.arrival){c=Tg(o.arrivalOrbit,s,r);const l=J.get(o.arrival.at);c&&l&&l.group.add(c)}e.trajectoryLines={cruise:a,arrived:c},e.orbitLine=a||c}else if(i.parent){let s=null;if(i.orbit_type==="libration"){s=i.show_orbit!==!1?Z1(i.orbit):null;const r=J.get(i.parent);r&&s&&r.mesh.add(s)}else if(i.orbit_type==="suborbital"){const r=J.get(i.parent),a=r&&r.data.radius||1;s=j1(i,a),r&&s&&r.meshGroup.add(s)}else if(i.show_orbit!==!1){const r=Gd(i),a=bg(i);if(s=Tg(i.orbit,r,a),s){const o=J.get(i.parent);o?o.group.add(s):He.add(s)}}s&&(e.orbitLine=s)}}),J.forEach(e=>{if(e.data.parent){const t=J.get(e.data.parent);t&&(t.data.isParent=!0)}})}function iB(n,e){const t=n.trajectoryLines;if(!t)return;const i=e?t.arrived:t.cruise;t.cruise&&(t.cruise.visible=!e),t.arrived&&(t.arrived.visible=e),i&&n.orbitLine!==i&&(n.orbitLine=i,nn("orbit-change",{data:n.data}))}function sB(){Gf(1/0),kf(),Ox()}function kf(){J.forEach(n=>{const{data:e}=n,{built:t}=e;if(!t)return;const i=e.type==="mission"?(e.model_size??1)/(t.modelSize??e.model_size??1):t.radius?e.radius/t.radius:1;n.mesh.scale.setScalar(i),n.ring&&(n.ring.mesh.scale.setScalar(i),n.ring.innerRadius=n.ring.builtInner*i,n.ring.outerRadius=n.ring.builtOuter*i)})}const rB=720,_l=6,aB=3,oB=4;function uu(n){J.forEach(e=>{const t=e.trajectoryLines;t?[t.cruise,t.arrived].forEach(i=>i&&n(i,e)):e.orbitLine&&n(e.orbitLine,e)})}const Xa=new x,po=[];let Px=null;function cB(n){Gf(1/0),po.length=0,Px=n,uu((e,t)=>po.push({line:e,obj:t}))}function Ux(n=oB){if(!po.length)return;const e=performance.now();do{const{line:t,obj:i}=po.shift();lB(t,i)}while(po.length&&performance.now()-e<n)}function lB(n,e){Pi(n);const t=n.userData.orbit,i=e.trajectoryLines?.cruise===n?ir(e):null;let s=null;if(t&&Xp(t,1)){const r=n.geometry.attributes.position,a=Math.ceil(r.count/rB),o=Math.ceil(r.count/a);s=new Float64Array(o*_l);for(let c=0,l=0;c<o;c++,l+=_l){Xa.fromBufferAttribute(r,c*a);const u=Xa.length()||1,{above:h,ends:[d,f]}=Xp(t,db(t,u,Px));s[l]=Xa.x/u,s[l+1]=Xa.y/u,s[l+2]=Xa.z/u,s[l+3]=d,s[l+4]=f,s[l+5]=d>0&&f>0?Math.log(f/d):NaN,s.above=h}}else if(i)s=i.samples.map(r=>r.pos);else if(!n.userData.curve||t)return;if(n.userData.morph={real:s,geometry:n.geometry},s){const r=s instanceof Float64Array?s.length/_l:s.length;n.geometry=new Ze,n.geometry.setAttribute("position",new Ge(new Float32Array(r*3),3))}}const Uc=new x;function Fx(n){uu((e,t)=>{const i=e.userData.morph;if(!i||i.settling)return;const{data:s}=t;if(!i.real){s.orbit_type==="libration"?uB(e,i,s.orbit.amp):s.orbit_type==="suborbital"&&(go(e,Of(s,J.get(s.parent)?.data.radius||1)),e.computeLineDistances());return}e.userData.near&&(e.userData.near.cam=null),e.userData.far=null;const r=e.userData.loop??e.geometry,a=r.attributes.position,o=a.array;if(i.real instanceof Float64Array){const c=i.real,l=c.above?e.userData.orbit.scale.radius:0;for(let u=0,h=0,d=0;u<a.count;u++,h+=_l,d+=3){const f=c[h+3],p=c[h+5],g=l+(p===p?f*Math.exp(n*p):f+(c[h+4]-f)*n);o[d]=c[h]*g,o[d+1]=c[h+1]*g,o[d+2]=c[h+2]*g}}else i.real.forEach((c,l)=>{Ld(Uc.copy(c)),o[3*l]=Uc.x,o[3*l+1]=Uc.y,o[3*l+2]=Uc.z});a.needsUpdate=!0,Nx(r)})}function Nx(n){const e=n.attributes.position.array,t=n.attributes.position.count*3;let i=1/0,s=1/0,r=1/0,a=-1/0,o=-1/0,c=-1/0;for(let m=0;m<t;m+=3){const A=e[m],E=e[m+1],_=e[m+2];A<i&&(i=A),A>a&&(a=A),E<s&&(s=E),E>o&&(o=E),_<r&&(r=_),_>c&&(c=_)}const l=n.boundingSphere??=new Sn,u=(i+a)/2,h=(s+o)/2,d=(r+c)/2;let f=0,p=1/0,g=0;for(let m=0;m<t;m+=3){const A=e[m]-u,E=e[m+1]-h,_=e[m+2]-d,S=A*A+E*E+_*_;S>f&&(f=S);const w=e[m]*e[m]+e[m+1]*e[m+1]+e[m+2]*e[m+2];w<p&&(p=w),w>g&&(g=w)}l.center.set(u,h,d),l.radius=Math.sqrt(f),n.userData.reach=[Math.sqrt(p),Math.sqrt(g)]}function uB(n,e,t){const i=Dx(t);let s=e.halo;if(!s||s.segments<i){const c=new Float64Array(i),l=new Float64Array(i);for(let u=0;u<i;u++){const h=u/i*2*Math.PI;c[u]=Math.cos(h),l[u]=Math.sin(h)}Pi(n),s&&n.geometry.dispose(),n.geometry=new Ze,n.geometry.setAttribute("position",new Ge(new Float32Array(i*3),3)),s=e.halo={segments:i,cos:c,sin:l}}n.userData.near&&(n.userData.near.cam=null),n.userData.far=null;const r=n.userData.loop??n.geometry,a=r.attributes.position,o=a.array;for(let c=0,l=0;c<s.segments;c++,l+=3)o[l]=-t.x*s.cos[c],o[l+1]=t.y*s.cos[c],o[l+2]=t.z*s.sin[c];a.needsUpdate=!0,Nx(r)}const El=[];function hB(){J.forEach(n=>{n.trajectoryLines&&(n.trajectoryPlan=null)}),uu((n,e)=>{const t=n.userData.morph;t&&(t.settling=!0,El[e.trajectoryLines?.cruise===n?"unshift":"push"]({line:n,obj:e}))})}function Gf(n=aB){if(!El.length)return;const e=performance.now(),t=Ar(An);do{const{line:i,obj:s}=El.shift(),r=i.userData.morph;Pi(i),(r.real||r.halo)&&(i.geometry.dispose(),i.geometry=r.geometry),i.userData.morph=null,kx(i,s,t)}while(El.length&&performance.now()-e<n)}function go(n,e){Pi(n),n.geometry.dispose(),n.geometry=new Ze().setFromPoints(e)}const dB=1400,Qx=[];function fB(){for(const n of Qx){if(n.state!=="waiting"||!n.mesh.visible)continue;(n.mesh.parent??n.mesh).getWorldPosition(Pg);const e=H.position.distanceTo(Pg);window.innerHeight*n.item.radius/Math.max(e,1e-9)/Math.tan(H.fov*Math.PI/360)>dB&&AB(n)}}const Pg=new x;async function AB(n){n.state="loading";try{const e=await(await fetch(Ms(n.item.texture_detail))).blob(),t=await createImageBitmap(e,{imageOrientation:"flipY"});if(t.width>ke.capabilities.maxTextureSize){t.close(),n.state="done";return}const i=n.mesh.material,s=i.map,r=new Gt(t);r.flipY=!1,r.colorSpace=dt,r.anisotropy=ke.capabilities.getMaxAnisotropy(),r.needsUpdate=!0,await IT(r),i.map=r,i.roughnessMap===s&&(i.roughnessMap=r),s?.dispose(),n.state="done"}catch(e){console.warn(`Detail map ${n.item.texture_detail} failed`,e),n.state="done"}}function Ox(){const n=Ar(An);J.forEach(e=>{e.trajectoryLines&&(e.trajectoryPlan=null)}),uu((e,t)=>kx(e,t,n))}function kx(n,e,t){const{data:i}=e;e.trajectoryLines?.cruise===n?go(n,ir(e).samples.map(s=>s.pos)):i.orbit_type==="libration"?go(n,Lx(i.orbit)):i.orbit_type==="suborbital"?(go(n,Of(i,J.get(i.parent)?.data.radius||1)),n.computeLineDistances()):pB(n,t)}function pB(n,e){const t=n.userData.orbit;t&&(Pi(n),n.userData.segments=Rx(t),n.userData.days=e,go(n,Nf(t,n.userData.segments,e)))}const Ug={type:"change"},zf={type:"start"},Gx={type:"end"},Fc=new Is,Fg=new ss,gB=Math.cos(70*at.DEG2RAD),Wt=new x,yn=2*Math.PI,Et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ah=1e-6;class mB extends sM{constructor(e,t=null){super(e,t),this.state=Et.NONE,this.target=new x,this.cursor=new x,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yr.ROTATE,MIDDLE:Yr.DOLLY,RIGHT:Yr.PAN},this.touches={ONE:Wr.ROTATE,TWO:Wr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new x,this._lastQuaternion=new ot,this._lastTargetPosition=new x,this._quat=new ot().setFromUnitVectors(e.up,new x(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new dp,this._sphericalDelta=new dp,this._scale=1,this._panOffset=new x,this._rotateStart=new Me,this._rotateEnd=new Me,this._rotateDelta=new Me,this._panStart=new Me,this._panEnd=new Me,this._panDelta=new Me,this._dollyStart=new Me,this._dollyEnd=new Me,this._dollyDelta=new Me,this._dollyDirection=new x,this._mouse=new Me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_B.bind(this),this._onPointerDown=xB.bind(this),this._onPointerUp=EB.bind(this),this._onContextMenu=wB.bind(this),this._onMouseWheel=MB.bind(this),this._onKeyDown=SB.bind(this),this._onTouchStart=CB.bind(this),this._onTouchMove=IB.bind(this),this._onMouseDown=yB.bind(this),this._onMouseMove=vB.bind(this),this._interceptControlDown=bB.bind(this),this._interceptControlUp=TB.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ug),this.update(),this.state=Et.NONE}update(e=null){const t=this.object.position;Wt.copy(t).sub(this.target),Wt.applyQuaternion(this._quat),this._spherical.setFromVector3(Wt),this.autoRotate&&this.state===Et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=yn:i>Math.PI&&(i-=yn),s<-Math.PI?s+=yn:s>Math.PI&&(s-=yn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Wt.setFromSpherical(this._spherical),Wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Wt.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new x(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new x(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Fc.origin.copy(this.object.position),Fc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fc.direction))<gB?this.object.lookAt(this.target):(Fg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fc.intersectPlane(Fg,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ah||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ah||this._lastTargetPosition.distanceToSquared(this.target)>Ah?(this.dispatchEvent(Ug),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?yn/60*this.autoRotateSpeed*e:yn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Wt.setFromMatrixColumn(t,0),Wt.multiplyScalar(-e),this._panOffset.add(Wt)}_panUp(e,t){this.screenSpacePanning===!0?Wt.setFromMatrixColumn(t,1):(Wt.setFromMatrixColumn(t,0),Wt.crossVectors(this.object.up,Wt)),Wt.multiplyScalar(e),this._panOffset.add(Wt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Wt.copy(s).sub(this.target);let r=Wt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/t.clientHeight),this._rotateUp(yn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/t.clientHeight),this._rotateUp(yn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Me,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function xB(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function _B(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function EB(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Gx),this.state=Et.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function yB(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Yr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Et.DOLLY;break;case Yr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Et.ROTATE}break;case Yr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Et.PAN}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(zf)}function vB(n){switch(this.state){case Et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function MB(n){this.enabled===!1||this.enableZoom===!1||this.state!==Et.NONE||(n.preventDefault(),this.dispatchEvent(zf),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Gx))}function SB(n){this.enabled!==!1&&this._handleKeyDown(n)}function CB(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Wr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Et.TOUCH_ROTATE;break;case Wr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Et.TOUCH_PAN;break;default:this.state=Et.NONE}break;case 2:switch(this.touches.TWO){case Wr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Et.TOUCH_DOLLY_PAN;break;case Wr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Et.TOUCH_DOLLY_ROTATE;break;default:this.state=Et.NONE}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(zf)}function IB(n){switch(this._trackPointer(n),this.state){case Et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Et.NONE}}function wB(n){this.enabled!==!1&&n.preventDefault()}function bB(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function TB(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ng=Math.PI/180;function zx(n,e,t,i,s){const r=Math.min(e/t,.999),a=e*Math.sqrt(1-r*r),o=Math.cos(n),c=Math.sin(n);return s.set(o*a-c*i,c*a+o*i,e*r)}function Hf(n,e,t){const i=(90-n)*Ng,s=(e+180)*Ng;return t.set(-(Math.sin(i)*Math.cos(s)),Math.cos(i),Math.sin(i)*Math.sin(s)).normalize()}function Vf(n){const{radius:e,radius_km:t}=n.data;return e&&t?e/t:0}function BB(n,e,t,i,s,r){return n.mesh.updateWorldMatrix(!0,!1),Hf(e,t,r).transformDirection(n.mesh.matrixWorld),n.mesh.getWorldPosition(s),s.addScaledVector(r,(n.data.radius||1)+i*Vf(n))}const fn=new x,hs=new x,Ot=new x(0,1,0);let le=null,gn=!1,Ui=null,pi=!1,Fi=0,hi=null;const Hx=2;let ve,Oi=!1,Yo=!0,yl=null;const RB=new x,Ol=new x,na=new x,xa=new x;let xn=!1,oi=0,Ti=2.5;const Bi=new x,Qg=new ot,ph=new x(0,0,-1),Un=new x,Og=new Is,kg=new x,Ya=new x,gh=new x,mh=new ot,Gg=new ot,Ci=new x,Dt=new x,DB=new x,zg=new x,Nc=new x,LB=new x,PB=new x,Xr=new x,mo=new ot,xo=new ot,Qc=new ot;let Fo={left:0,right:0,top:0,bottom:0};function UB({left:n=0,right:e=0,top:t=0,bottom:i=0}={}){Fo={left:n,right:e,top:t,bottom:i}}let kl=!1;function Vx(){return{left:Fo.left,right:window.innerWidth-Fo.right}}function FB(){const n=Vx();return n.right-n.left}function Wx(){return{top:Fo.top,bottom:window.innerHeight-Fo.bottom}}function Gl(){const n=H.fov*(Math.PI/180),e=Wx(),t=2*Math.atan(Math.tan(n/2)*(e.bottom-e.top)/window.innerHeight),i=2*Math.atan(Math.tan(n/2)*FB()/window.innerHeight);return Math.min(t,i)}let Ka=0,Ja=0;function NB(n){let e=0,t=0;if(kl){const s=Vx(),r=Wx();e=window.innerWidth/2-(s.left+s.right)/2,t=window.innerHeight/2-(r.top+r.bottom)/2}else if(pi&&hi){const{left:s,right:r,top:a,bottom:o}=hi.insets;e=(r-s)/2,t=(o-a)/2}const i=1-Math.exp(-n*6);if(Ka+=(e-Ka)*i,Ja+=(t-Ja)*i,e===0&&t===0&&Math.abs(Ka)<.5&&Math.abs(Ja)<.5){Ka=0,Ja=0,H.view&&H.view.enabled&&H.clearViewOffset();return}H.setViewOffset(window.innerWidth,window.innerHeight,Ka,Ja,window.innerWidth,window.innerHeight)}const ds=new x,Hg=new x;function Mn(n){return n?n.detailRoot&&n.detailRadius?(n.detailRoot.getWorldScale(ds),n.detailRadius*Math.max(ds.x,ds.y,ds.z)):n.data.type==="mission"?(n.data.model_size??cr)*.6:n.data.radius||1:1}function Bt(n,e){if(n.getWorldPosition(e),n.userData&&n.userData.orbit_type==="landed"){const t=J.get(n.userData.name),i=t&&t.detailRoot?t.detailCenterY:(t?.data.built?.modelSize??cr)*.3;n.getWorldScale(ds),Hg.set(0,1,0).transformDirection(n.matrixWorld),e.addScaledVector(Hg,i*Math.max(ds.x,ds.y,ds.z))}return e}let wt=null;const QB=1.1,Oc=new x,OB=new x,hr=new x,kc=[];let ms=null;function Wf(){return wt?.look?.ra!==void 0||wt?.look?.sun!==void 0}function Ko(n,e){if(!wt||wt.body.mesh!==n)return null;if(wt.look?.sun!==void 0){const{sun:s,elevation:r=0,radii:a}=wt.look;n.getWorldPosition(Oc),J.get("Sun")?.mesh.getWorldPosition(e),e.sub(Oc).setY(0).normalize().applyAxisAngle(Ot,s*Math.PI/180);const o=r*Math.PI/180;return e.multiplyScalar(Math.cos(o)).setY(Math.sin(o)),a?(wt.body.data.radius||1)*a:zd(wt.body)}if(Wf()){const{ra:s,dec:r=0,radii:a}=wt.look;return e.copy(vs({ra:s,dec:r})).negate(),a?(wt.body.data.radius||1)*a:qx(n)}if(wt.look){const{lat:s=0,lon:r=0,radii:a}=wt.look;return n.updateWorldMatrix(!0,!1),Hf(s,r,e).transformDirection(n.matrixWorld),a?(wt.body.data.radius||1)*a:zd(wt.body)}if(n.getWorldPosition(Oc),kc.length=0,e.set(0,0,0),wt.names.forEach(s=>{const r=J.get(s);if(!r||!mn(r.mesh))return;const a=Bt(r.mesh,new x).sub(Oc);kc.push(a),e.add(OB.copy(a).normalize())}),!kc.length||e.lengthSq()<1e-12)return null;e.normalize();const t=Math.tan(Yw*Gl()/2);let i=qf(wt.body)*QB;return kc.forEach(s=>{const r=s.dot(e),a=Math.sqrt(Math.max(0,s.lengthSq()-r*r));i=Math.max(i,r+a/t)}),i}function gi(n){if(!n||!n.userData)return 20;if(ms?.radii&&ms.mesh===n)return(n.userData.radius||1)*ms.radii;const e=Ko(n,hr);return e!==null?e:qx(n)}function qx(n){if(n.userData.type==="mission"){const t=J.get(n.userData.name);let i=Mn(t);return t&&t.frameRadius&&t.detailRadius&&(i*=t.frameRadius/t.detailRadius),i/Math.sin(qw*Gl()/2)}const e=J.get(n.userData.name);return e?zd(e):20}function zd(n){const e=n.data.type;return e==="reference_point"||e==="star"?Xx(n)/Math.sin(Kw*Gl()/2):qf(n)/Math.sin(Xw*Gl()/2)}function qf(n){const e=n.data;let t=n.detailRoot?Mn(n):e.radius||1;return e.ring&&(t=Math.max(t,(e.radius||1)*(e.ring.outer_radius||2.5))),t}function Xx(n){const e=n.data;if(e.type==="star")return(e.radius||1)*Jw;let t=qf(n);const i=t;return J.forEach(s=>{const r=s.data;if(r.parent!==e.name)return;const a=Mn(s);let o=0;r.orbit_type==="landed"?o=i+a*2:r.orbit_type==="suborbital"?o=i+(r.suborbital?.apogee||1.5)+a:r.orbit&&(o=Tf(r.orbit)+a),t=Math.max(t,o)}),t}function Xf(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}const kB=1.35,GB=.3,zB=.6,HB=.3,VB=.92,WB=.6,qB=40*Math.PI/180,XB=1.3,YB=.45,KB=.4,JB=.15,Yx=.45,ZB=60*Math.PI/180,Vg=4,Js=n=>n?.userData.orbit_type==="landed",Hd=(n,e=null)=>(Js(n)?kB:1)*(Js(e)?XB:1);let rr=0,zl=null,rs=null;function Kx(n){if(!zl)return Xf(n);const{up:e,down:t}=zl,i=a=>a*a*a-a*a*a*a/2,s=1/(1-(e+t)/2);let r;return n<e?r=e*i(n/e):n<=1-t?r=e/2+(n-e):r=e/2+(1-t-e)+t*(.5-i((1-n)/t)),Math.min(r*s,1)}function Jo(n,e,t){const i=at.clamp((n-e)/(t-e),0,1);return i*i*(3-2*i)}const jB=1.5,$B=.2,e3=10*Math.PI/180,t3=.13;function Jx(n,e,t,i){const s=J.get(n.userData.parent);Bi.set(0,1,0),s&&Bi.subVectors(e,s.mesh.getWorldPosition(DB)).normalize();const r=Math.sin(i*$B)*jB,a=Zw+Math.sin(i*t3)*e3;return zg.setFromSphericalCoords(t,a,r),Qg.setFromUnitVectors(Ot,Bi),zg.applyQuaternion(Qg)}let Yf=0;function n3(n,e){const t=H.position.x-n.x,i=H.position.z-n.z;t*t+i*i<1e-12||(Yf=Math.atan2(t,i)-e*zi)}function hu(n,e,t){if(Bt(n,Dt),isNaN(Dt.x)){t.copy(n.position);return}const i=gi(n),s=Math.sin(e*.2)*(i*.02),r=i+s;if(n.userData.orbit_type==="landed")t.copy(Dt).add(Jx(n,Dt,r,e));else if(Ko(n,hr)!==null)t.copy(Dt).addScaledVector(hr,r);else{const a=ht.live&&gn&&n===le?ht.az:e*zi+Yf;Vd(n,a,e,r,t),Zx(n,Dt,r),jx(t),t.add(Dt)}Zf(t,n)}const i3=1.15,s3=12*Math.PI/180,r3=6,Wg=2*zi/r3,a3=.2,o3=.05,Kf=[];let _o=0;const Gc=new x,Qr=new x,c3=new ot,xh={centre:0,width:0};function Zx(n,e,t){_o=0;const i=n.userData.parent;J.forEach(s=>{if(s.mesh===n)return;let r;if(du.includes(s.data.type))s.group.getWorldPosition(Gc),r=s.data.radius||1;else if(s.data.name===i&&e_.includes(s.data.type))Bt(s.mesh,Gc),r=Mn(s);else return;const a=Gc.sub(e).length();if(a<=r)return;const o=Math.min(r*i3,(r+a)/2);if(t<=a-o)return;const c=Math.sqrt(a*a-o*o),l=t>=c?Math.asin(o/a):Math.acos(Math.min(1,(t*t+a*a-o*o)/(2*t*a))),u=Kf[_o]??={dir:new x,half:0};u.dir.copy(Gc).divideScalar(a),u.half=Math.min(l+s3,Math.PI*.9),_o++})}function jx(n){for(let e=0;e<2;e++)for(let t=0;t<_o;t++){const{dir:i,half:s}=Kf[t],r=n.angleTo(i);r>=s||(Qr.crossVectors(i,n),Qr.lengthSq()<1e-12&&Qr.crossVectors(i,Ot),Qr.lengthSq()<1e-12&&Qr.set(1,0,0),n.applyQuaternion(c3.setFromAxisAngle(Qr.normalize(),s-r)))}}function l3(n,e,t){const{dir:i,half:s}=n,r=(Math.cos(s)-e*i.y)/Math.max(t*Math.hypot(i.x,i.z),1e-9);return r>=1?null:(xh.centre=Math.atan2(i.x,i.z),xh.width=r<=-1?Math.PI:Math.acos(r),xh)}const Hl=Math.PI*2,u3=n=>n-Hl*Math.floor((n+Math.PI)/Hl),qg=n=>n-Hl*Math.floor(n/Hl),ht={live:!1,az:0,vel:0,dir:1};function Vd(n,e,t,i,s){const r=Math.sin(t*o3)*a3;if(ms?.elevation!==void 0&&ms.mesh===n){const a=at.clamp(ms.elevation*Math.PI/180+r*.25,-1.5,1.5);return s.set(Math.sin(e)*Math.cos(a)*i,Math.sin(a)*i,Math.cos(e)*Math.cos(a)*i)}return s.set(Math.sin(e)*i,r*i,Math.cos(e)*i)}function h3(n,e,t,i,s){Vd(le,0,e,1,s);const r=s.y/s.length(),a=Math.sqrt(1-r*r);ht.live||(ht.live=!0,ht.az=Math.atan2(H.position.x-t.x,H.position.z-t.z),ht.vel=zi,ht.dir=1),Zx(le,t,i);const o=ht.vel===0?ht.dir:Math.sign(ht.vel);let c=1/0;for(let h=0;h<_o;h++){const d=l3(Kf[h],r,a);if(!d||d.width>=Math.PI)continue;const f=u3(ht.az-d.centre);if(Math.abs(f)<d.width){const p=f===0?-o:Math.sign(f);ht.az=d.centre+p*d.width,ht.dir=p,Math.sign(ht.vel)!==p&&(ht.vel=0);continue}c=Math.min(c,o>0?qg(d.centre-d.width-ht.az):qg(ht.az-d.centre-d.width))}const l=Math.abs(ht.vel);ht.dir===o&&c<l*l/(2*Wg)+l*n&&(ht.dir=-o);const u=Wg*n;return ht.vel+=Math.max(-u,Math.min(u,ht.dir*zi-ht.vel)),ht.az+=ht.vel*n,Vd(le,ht.az,e,i,s),jx(s),s.add(t)}const du=["star","planet","moon"],dr=1.08,vl=1.35,Xg=160,d3=1.2;let ia=null,Jf=0;const $x=new x,_h=new x,Za=new x,e_=["mission","asteroid","comet"];function f3(){const n=[];return J.forEach(e=>{du.includes(e.data.type)?n.push({center:e.group.getWorldPosition(new x),radius:e.data.radius||1}):e_.includes(e.data.type)&&mn(e.group)&&n.push({center:Bt(e.mesh,new x),radius:Mn(e)})}),n}const Yg=new x;function Zf(n,e){e&&Bt(e,Yg),J.forEach(t=>{if(!du.includes(t.data.type)||t.mesh===e)return;t.group.getWorldPosition(Za);const i=t.data.radius||1,s=e?Math.min(i*dr,Yg.distanceTo(Za)):i*dr,r=n.distanceTo(Za);r<s&&r>1e-6&&n.sub(Za).multiplyScalar(s/r).add(Za)})}function A3(n,e){const t=new x;for(let i=1;i<Xg;i++){n.getPoint(i/Xg,t);for(const s of e)if(t.distanceTo(s.center)<s.radius*dr)return s}return null}function p3(n,e,t){const i=new x().subVectors(e,n),s=at.clamp(new x().subVectors(t,n).dot(i)/Math.max(i.lengthSq(),1e-12),0,1);return{distance:n.clone().addScaledVector(i,s).distanceTo(t),interior:s>0&&s<1}}function g3(n,e,t,i,s){const r=new x().subVectors(n,t.center).normalize(),a=new x().subVectors(e,t.center).normalize(),o=r.angleTo(a),c=new x().crossVectors(r,a);c.lengthSq()<1e-8&&(c.crossVectors(r,s),c.lengthSq()<1e-8&&c.crossVectors(r,new x(1,0,0))),c.normalize();const l=Math.max(2,Math.ceil(o/(Math.PI/4))),u=[];for(let h=1;h<l;h++)u.push(r.clone().applyAxisAngle(c,o*h/l).multiplyScalar(t.radius*i).add(t.center));return u}function m3(n,e,t,i){for(let s=1;s<n.length-1;s++)for(const r of e){const a=n[s].distanceTo(r.center);if(a<r.radius*t){const o=a>1e-6?n[s].clone().sub(r.center):i.clone();n[s].copy(o.normalize().multiplyScalar(r.radius*t).add(r.center))}}for(let s=0;s<4;s++){let r=!1;const a=[n[0]];for(let o=1;o<n.length;o++){const c=a[a.length-1],l=n[o],u=e.find(h=>{const{distance:d,interior:f}=p3(c,l,h.center);return f&&d<h.radius*d3});u&&(a.push(...g3(c,l,u,t,i)),r=!0),a.push(l)}if(n=a,!r)break}return n}const x3=4;function Kg(n,e){if(!Ft.logFlights&&Js(n)&&mn(n)){const d=Bt(n,new x),f=e.clone().sub(d),p=f.length(),g=Math.min(p*Vg,gi(n)*Vg);return g>p?[f.multiplyScalar(g/p).add(d)]:[]}if(!Ft.logFlights||!n||n.userData.orbit_type!=="landed"||!mn(n))return[];const t=J.get(n.userData.parent);if(!t)return[];const i=Bt(n,new x),s=i.clone().sub(t.group.getWorldPosition(new x)),r=new x().subVectors(e,i),a=r.length();if(!(a>0))return[];r.divideScalar(a),r.dot(s)<.1*s.length()&&r.copy(s).normalize();const o=s.dot(r),c=s.lengthSq()-((t.data.radius||1)*vl)**2,l=-o+Math.sqrt(Math.max(o*o-c,0));if(!(l>a*1.5))return[];const u=Math.ceil(Math.log(l/a)/Math.log(x3)),h=[];for(let d=1;d<=u;d++)h.push(i.clone().addScaledVector(r,a*(l/a)**(d/u)));return h}function _3(n,e,t=[],i=[]){const s=f3().map(f=>{const p=Math.min(n.distanceTo(f.center),e.distanceTo(f.center));return p>f.radius*dr?f:{center:f.center,radius:p/(dr*1.02)}}),r=t.at(-1)??n,a=i.at(-1)??e,o=new x().subVectors(a,r),c=o.length(),l=o.clone().normalize(),u=new x(0,1,0);Math.abs(l.dot(Ot))>.9?u.set(0,0,1):u.crossVectors(l,Ot).cross(l).normalize();const h=r.clone().lerp(a,.5).addScaledVector(u,Math.min(c*.15,Ft.flightArchMax));let d;for(const f of[vl,vl*1.25,vl*1.6]){const p=[...t.length?[n,...t.slice(0,-1)]:[],...m3([r.clone(),h.clone(),a.clone()],s,f,u),...i.length?[...i.slice(0,-1).reverse(),e]:[]].map(g=>g.clone());if(d=new yv(p,!1,"centripetal"),!A3(d,s))break}return d}let t_=Z0;function E3(n=Z0){t_=n}const Jg=10,y3=60;function n_(n,e,t,i=null){const s=ba.matches?0:t_,r=Ft.logFlights?((i??v3(n,e,t))-Jg)/(y3-Jg):n/Ft.flightReach;return Math.max((1.5+at.clamp(r,0,1)*2)*s,jw)}function v3(n,e,t){return e=Math.max(e,1e-9),t=Math.max(t,1e-9),Math.log((n/2+e)/e)+Math.log((n/2+t)/t)}const Zg=48,jg=64,M3=4,Eh=new x,yh=new x;function $g(n,e,t){return Eh.subVectors(n,t),yh.subVectors(e,t),Math.atan2(Eh.clone().cross(yh).length(),Eh.dot(yh))}const S3=2.5;function C3(n,e,t,i,s,r=0){const a=n.points.length-1,o=new Set([0,1]);for(let A=0;A<a;A++){for(let E=0;E<=Zg;E++){const _=.5*10**(-12*(1-E/Zg));o.add((A+_)/a).add((A+1-_)/a)}for(let E=1;E<jg;E++)o.add((A+E/jg)/a)}const c=[...o].sort((A,E)=>A-E),l=c.map(A=>n.getPoint(A)),u=l[0],h=l[l.length-1],d=[];J.forEach(A=>{if(!du.includes(A.data.type))return;const E=A.group.getWorldPosition(new x),_=A.data.radius||1;u.distanceTo(E)<_*dr||h.distanceTo(E)<_*dr||d.push({center:E,radius:_})}),e=Math.max(e,1e-9),t=Math.max(t,1e-9);const f=new Float64Array(c.length),p=new Float64Array(c.length),g=new Float64Array(c.length),m=new Float64Array(c.length);l.forEach((A,E)=>{let _=Math.min(e+A.distanceTo(u),t+A.distanceTo(h));for(const S of d)_=Math.min(_,A.distanceTo(S.center)-S.radius);f[E]=Math.max(_,1e-9)});for(let A=1;A<c.length;A++){const E=l[A].distanceTo(l[A-1]),_=f[A-1],S=f[A];let w=Math.abs(S-_)>1e-9*_?E*Math.log(S/_)/(S-_):E/_;r>0&&(w*=1+(S3-1)*Jo(1-l[A].distanceTo(h)/r,0,1));const C=M3*Math.max($g(l[A-1],l[A],i),$g(l[A-1],l[A],s));g[A]=g[A-1]+E,p[A]=p[A-1]+w+C,m[A]=w>0?w/(w+C):1}return{t:c,clearance:f,effort:p,along:g,travelShare:m,length:g[c.length-1],total:p[c.length-1]}}let pn=null;const i_=.3;function s_(n,e,t){const{effort:i}=n;let s=0,r=i.length-1;for(;r-s>1;){const d=s+r>>1;i[d]<=e?s=d:r=d}const a=n.along[r]-n.along[s],o=n.clearance[s],c=a>0?(n.clearance[r]-o)/a:0,l=Math.max(e-i[s],0)*n.travelShare[r],u=Math.abs(c)>1e-9?o*Math.expm1(l*c)/c:l*o,h=a>0?at.clamp(u/a,0,1):0;return ia.getPoint(n.t[s]+(n.t[r]-n.t[s])*h,t),(n.along[s]+a*h)/n.length}let sa=null;const Gs=new x,vh=new x,I3=new x;function r_(n,e,t,i,s=H.up){Gs.set(1,0,0),Math.abs(s.x)>.9&&Gs.set(0,0,1),Gs.addScaledVector(s,-Gs.dot(s)).normalize(),vh.crossVectors(s,Gs);const r=g=>Math.atan2(g.dot(vh),g.dot(Gs)),a=g=>Math.asin(at.clamp(g.dot(s),-1,1)),o=r(n);let c=at.euclideanModulo(r(e)-o+Math.PI,2*Math.PI)-Math.PI;sa!==null&&(c+=2*Math.PI*Math.round((sa-c)/(2*Math.PI))),sa=c;const l=o+c*t,u=a(n),h=a(e),d=u+(h-u)*t,f=I3.copy(Gs).multiplyScalar(Math.cos(l)).addScaledVector(vh,Math.sin(l)).multiplyScalar(Math.cos(d)).addScaledVector(s,Math.sin(d)),p=Jo(Math.max(Math.abs(u),Math.abs(h)),w3,b3);if(p>0){const g=n.angleTo(e);Or.crossVectors(n,e),Or.lengthSq()<1e-12&&Or.crossVectors(n,s),Or.lengthSq()<1e-12&&Or.set(1,0,0),em.copy(n).applyAxisAngle(Or.normalize(),g*t),f.lerp(em,p).normalize()}return i.copy(f)}const w3=55*Math.PI/180,b3=75*Math.PI/180,Or=new x,em=new x;let en=null;const Wd=new x,kr=new x,Mh=new x;function T3(){return!en||!mn(en.mesh)?Wd.set(0,0,0):Bt(en.mesh,Wd).sub(en.start)}const B3=new x,R3=new x;function D3(n){return!wt||wt.body.mesh!==n||!wt.names.length?[]:wt.names.map(e=>J.get(e)).filter(e=>e?.data.orbit_type==="landed")}function a_(){if(!xn||!en||!mn(en.mesh)||en.mesh===le)return le;if(!le)return en.mesh;const n=H.position.distanceTo(Bt(en.mesh,B3))-Mn(J.get(en.mesh.userData.name)),e=H.position.distanceTo(Bt(le,R3))-Mn(J.get(le.userData.name));return n<e?en.mesh:le}function o_(n,{arrivalTime:e=null,destView:t=null,from:i=null,to:s=null}={}){RB.copy(H.position),Ol.copy(ve.target),en=i&&mn(i)?{mesh:i,start:Bt(i,new x)}:null,ia=_3(H.position,n,Kg(i,H.position),Kg(s,n)),$x.copy(n);const r=H.position.distanceTo(ve.target),a=t??n.distanceTo(xa),o=s?Bt(s,new x):xa;pn=Ft.logFlights||Js(i)?C3(ia,r,a,Ol,o,Hd(s)>1?J.get(s.userData.parent)?.data.radius??0:0):null;const c=pn?pn.length:ia.getLength();sa=null,xn=!0,oi=0,Ti=n_(c,r,a,pn?.total)*Hd(s,en?.mesh);const l=Js(en?.mesh);if(zl=null,l||Js(s)){let p=l?YB:GB,g=Js(s)?zB:KB;const m=Math.min(1,.95/(p+g));zl={up:p*m,down:g*m}}rr=l?JB:0,No.copy(H.up);const u=en?.mesh.userData.orbit_type==="landed"?Vl(i,new x):No,h=s?Vl(s,new x):Ot,d=u.angleTo(Ot)>1e-4,f=h.angleTo(Ot)>1e-4;if(rs=d||f?{from:d?0:HB,to:f?VB:WB}:null,rs&&!ba.matches){const p=u.angleTo(h);Ti=Math.max(Ti,1.5*p/((rs.to-rs.from)*qB)),Ti=Math.max(Ti,P3(o))}Jf=pn||e===null||rs?Zn+Ti:e,ve.enabled=!1}const Sh=240,L3=18,zc=new x,Ch=new x,Ih=new x,wh=new x,tm=new x;function P3(n){let e=0;sa=null;for(let t=0;t<=Sh;t++){const i=t/Sh,s=Kx(i);pn?s_(pn,s*pn.total,zc):ia.getPointAt(s,zc);const r=rr>0?Jo(i,rr,rr+Yx):Xf(Math.min(i/(pn?i_:.2),1));Ch.subVectors(Ol,zc),Ih.subVectors(n,zc),Ch.lengthSq()>0&&Ih.lengthSq()>0&&(r_(Ch.normalize(),Ih.normalize(),r,wh,No),t>0&&(e=Math.max(e,wh.angleTo(tm)*Sh)),tm.copy(wh))}return sa=null,Math.min(e/ZB,L3)}function jf(){if(!xn)return;const n=1-oi;n<=0||(Ti=Math.min(Ti,$w/n))}function Ta(){Oi&&(ht.live=!1),Oi=!1,ve.autoRotate=!1,clearTimeout(yl)}let qd=null;function $f(n){const e=qd;qd=null,e?.(n)}function U3(n,{region:e=null,look:t=null,frame:i=null}={}){const s=J.get(n);if(!s)return Promise.resolve(!1);$f(!1);const r=new Promise(o=>{qd=o}),a=()=>{ms=i&&!t?{mesh:s.mesh,radii:i.radii,elevation:i.elevation}:null,wt=t?{body:s,names:[],look:{...t}}:e?.length?{body:s,names:[...e]}:null,eA(s.mesh,s.data)};return Ba||Dn?Cs=a:a(),r}function eA(n,e){if(Ui=null,Ba||Dn){Cs=()=>eA(n,e);return}if(e&&e.orbit_type==="landed"&&!mn(n)){Ui={mesh:n,data:e};const a=J.get(e.parent);a&&ta(a.data,!0),e.isModelLoaded||ta(e,!0),ou(),Ui&&(kl=!0,nn("select",{data:e,waiting:!0}));return}Ta(),pi=!1,hi=null;const t=le;if(le=n,gn=!1,e){e.isModelLoaded||ta(e,!0),Ff(e);const a=lr(e.name);c1(a)}const i=new x,s=Zn+n_(H.position.distanceTo(n.getWorldPosition(new x)),H.position.distanceTo(ve.target),gi(n))*Hd(n,t),r=new x;Bt(n,r),n3(r,s),hu(n,s,i),o_(i,{arrivalTime:s,destView:i.distanceTo(r),from:t,to:n}),Yf+=(s-Jf)*zi,kl=!0,nn("select",{data:e,waiting:!1,region:wt?.names.length&&wt.body.mesh===n?[...wt.names]:null})}function F3(n){Yo=n,ve.enabled=n&&!xn&&!Dn,n||Ta()}qT(n=>{if(!Ui||Ui.data!==n)return;const{mesh:e}=Ui;Ui=null,eA(e,n)});function c_(){Ui=null,wt=null,ms=null,Cs=null,Ta(),le=null,gn=!1,xn=!1,ve.enabled=Yo&&!Dn,kl=!1,$f(!1),nn("deselect")}const Hc=12,Vc=3,Wc=1e3,N3=3,Fn=new x,qc=new x,Gr=new ot,nm=new ot,Q3=new ot,Xc=new x,No=new x(0,1,0),im=new x;function Vl(n,e){return e.copy(Ot),!n||!mn(n)||(n.userData.orbit_type==="landed"||n===le&&!Wf()&&Ko(n,hr)!==null)&&(n.updateWorldMatrix(!0,!1),e.set(0,1,0).transformDirection(n.matrixWorld)),e}function O3(n){if(xn&&rs){en?.mesh.userData.orbit_type==="landed"?Vl(en.mesh,Xc):Xc.copy(No),Vl(le,im);const e=Jo(oi,rs.from,rs.to);Gr.setFromUnitVectors(Xc,im),H.up.copy(Xc).applyQuaternion(Q3.identity().slerp(Gr,e)).normalize(),ve._quat.setFromUnitVectors(H.up,Ot),ve._quatInverse.copy(ve._quat).invert();return}if(Fn.copy(Ot),le&&le.userData.orbit_type==="landed"&&mn(le)){le.updateWorldMatrix(!0,!1),Fn.set(0,1,0).transformDirection(le.matrixWorld),Bt(le,qc);const e=H.position.distanceTo(qc)/gi(le);let t=Ft.logFlights?Math.log(Wc/e)/Math.log(Wc/Vc):(Hc-e)/(Hc-Vc);t=Math.min(Math.max(t,0),1),t=t*t*(3-2*t),Gr.setFromUnitVectors(Ot,Fn),Fn.copy(Ot).applyQuaternion(Gr.slerp(nm,1-t)).normalize()}else if(le&&!Wf()&&Ko(le,hr)!==null){le.updateWorldMatrix(!0,!1),Fn.set(0,1,0).transformDirection(le.matrixWorld),le.getWorldPosition(qc);const e=H.position.distanceTo(qc)/gi(le);let t=Ft.logFlights?Math.log(Wc/e)/Math.log(Wc/Vc):(Hc-e)/(Hc-Vc);t=Math.min(Math.max(t,0),1),t=t*t*(3-2*t),Gr.setFromUnitVectors(Ot,Fn),Fn.copy(Ot).applyQuaternion(Gr.slerp(nm,1-t)).normalize()}if(H.up.dot(Fn)>.99999){if(H.up.equals(Fn))return;H.up.copy(Fn)}else H.up.lerp(Fn,1-Math.exp(-n*N3)),H.up.lengthSq()<1e-6&&H.up.copy(Fn),H.up.normalize();ve._quat.setFromUnitVectors(H.up,Ot),ve._quatInverse.copy(ve._quat).invert()}function k3(n,e){return Ba&&H3(),G3(n,e)?(O3(n),H.lookAt(ve.target),!0):!1}function G3(n,e){if(Dn)return Y3(n,e),!0;if(xn){oi+=n/Ti,oi>=1&&(oi=1,xn=!1,ve.enabled=Yo,le&&(gn=!0,ht.live=!1,Bt(le,Xr),le.getWorldQuaternion(mo),nn("arrive",{data:le.userData}),$f(!0)));const t=Kx(oi),i=LB,s=PB;le?(hu(le,Jf,i),Bt(le,s)):(i.copy(na),s.copy(xa));let r=t;pn?r=s_(pn,t*pn.total,H.position):ia.getPointAt(t,H.position),_h.subVectors(i,$x),pn?(H.position.addScaledVector(_h,r),H.position.addScaledVector(T3(),1-r)):H.position.addScaledVector(_h,t*t*(3-2*t));let a;rr>0?a=Jo(oi,rr,rr+Yx):a=Xf(Math.min(oi/(pn?i_:.2),1)),kr.copy(Ol).sub(H.position),pn&&kr.add(Wd),Mh.subVectors(s,H.position);const o=kr.length(),c=Mh.length();a<1&&o>0&&c>0?(r_(kr.divideScalar(o),Mh.divideScalar(c),a,kr,No),ve.target.copy(H.position).addScaledVector(kr,o**(1-a)*c**a)):ve.target.copy(s),ve.update()}else if(le&&gn){if(Bt(le,Dt),isNaN(Dt.x))return gn=!1,!1;if(le.getWorldQuaternion(xo),le.userData.orbit_type==="landed"?Qc.copy(xo).multiply(mo.invert()):Qc.identity(),H.position.sub(Xr).applyQuaternion(Qc).add(Dt),ve.target.sub(Xr).applyQuaternion(Qc).add(Dt),Xr.copy(Dt),mo.copy(xo),Oi)ve.update(n);else{const t=gi(le),i=Math.sin(e*.2)*(t*.02),s=t+i;le.userData.orbit_type==="landed"?Ci.copy(Dt).add(Jx(le,Dt,s,e)):Ko(le,hr)!==null?Ci.copy(Dt).addScaledVector(hr,s):h3(ur===null?n:0,e,Dt,s,Ci),Zf(Ci,le),Un.copy(H.position),fn.subVectors(Ci,Un);const r=fn.length();if(r>5){hs.copy(fn).normalize(),Og.set(Un,hs);let f=!1,p=1/0;J.forEach(g=>{if(g.mesh!==le&&!(!g.group.visible&&g.data.type==="mission")&&["star","planet","moon"].includes(g.data.type)){const m=(g.data.radius||1)*1.5,A=g.group.position;Og.closestPointToPoint(A,Nc);const E=Un.distanceTo(Nc);E<r&&E>.1&&Nc.distanceTo(A)<m&&E<p&&(p=E,Bi.subVectors(Nc,A).normalize(),Bi.lengthSq()<.001&&Bi.set(0,1,0),kg.copy(A).addScaledVector(Bi,m*1.2),f=!0)}}),f&&Ci.copy(kg)}const a=Un.distanceTo(Ci);Ya.copy(Dt);let o=Tc;if(a>5){const f=gi(le),p=Math.max(f*15,150),g=Math.max(f*4,40);if(a>g)if(fn.subVectors(Ci,Un).normalize(),gh.copy(Un).addScaledVector(fn,a),a>p)Ya.copy(gh),o=.1;else{const m=(a-g)/(p-g);Ya.lerp(gh,m),o=Tc+(.1-Tc)*m}}fn.subVectors(ve.target,Un).normalize(),hs.subVectors(Ya,Un).normalize(),mh.setFromUnitVectors(ph,fn),Gg.setFromUnitVectors(ph,hs);const c=1-Math.pow(1-o,n*60);mh.slerp(Gg,c),Bi.copy(ph).applyQuaternion(mh).normalize();const l=ve.target.distanceTo(Un),u=Ya.distanceTo(Un),h=l+(u-l)*c;ve.target.copy(Un).addScaledVector(Bi,h);const d=1-Math.pow(1-Tc,n*60);H.position.lerp(Ci,d),ve.update()}}else if(pi)if(Oi)ve.update(n);else{Fi=Math.min(1,Fi+n/Hx);const t=ur===null?zi*n*Fi*Fi:0;H.position.applyAxisAngle(Ot,t),ve.target.applyAxisAngle(Ot,t),ve.update()}return!0}const ja=new x;function tA(n,e,t=H.position){const i=[],s=hi?new Set(hi.names):null;J.forEach(p=>{const g=p.data.orbit;if(!(!(s?s.has(p.data.name):p.data.type==="planet")||!g||!g.a||!g.rate))for(let A=0;A<64;A++){const E=$n(g,360/g.rate*(A/64));i.push(new x(E.x,E.y,E.z))}});const r=i.length;for(let p=1;p<8;p++)for(let g=0;g<r;g++)i.push(i[g].clone().applyAxisAngle(Ot,p*Math.PI/4));ja.set(t.x,0,t.z),ja.lengthSq()<1e-12&&ja.set(0,0,1),ja.normalize();const a=ja.clone().multiplyScalar(Math.cos(Qp));if(a.y=Math.sin(Qp),e.set(0,0,0),!i.length)return n.copy(a).multiplyScalar(1200);let o=Np,c=Np;if(hi){const{left:p,right:g,top:m,bottom:A}=hi.insets;o=Op*Math.max(.1,1-(p+g)/window.innerWidth),c=Op*Math.max(.1,1-(m+A)/window.innerHeight)}const l=new Kt(H.fov,window.innerWidth/window.innerHeight,H.near,H.far),u=new x,h=p=>(l.position.copy(a).multiplyScalar(p),l.lookAt(e),l.updateMatrixWorld(),i.every(g=>(u.copy(g).project(l),u.z<1&&Math.abs(u.x)<=o&&Math.abs(u.y)<=c)));let d=1,f=ve.maxDistance;for(let p=0;p<40;p++){const g=(d+f)/2;h(g)?f=g:d=g}return n.copy(a).multiplyScalar(f)}function sm(){if(!pi||!hi)return null;let n=0;return hi.names.forEach(e=>{const t=J.get(e)?.data.orbit;t&&(n=Math.max(n,Tf(t)))}),n||null}function l_({animate:n=!0,frame:e=null}={}){if(Ba||Dn){Cs=()=>l_({animate:n,frame:e});return}const t=le;c_(),Ta(),le=null,gn=!1,pi=!0,Fi=0,hi=e&&e.names?.length?{names:[...e.names],insets:{left:0,right:0,top:0,bottom:0,...e.insets}}:null,tA(na,xa),n?o_(na,{from:t}):(H.position.copy(na),ve.target.copy(xa),ve.update())}let Ba=!1,Cs=null;function z3(){Ba=!0}function H3(){Ba=!1;const n=Cs;Cs=null,H.near=Ft.cameraNear??H.near,H.far=Ft.cameraFar,H.updateProjectionMatrix(),ve.maxDistance=Ft.maxDistance,Ta(),xn?(pi&&tA(na,xa,na.clone()),oi=1):J3(Zn),n?.()}const V3=.15,W3=.5;let Dn=null;function q3(n){const e=gn&&le&&!xn?le:null,t={subject:e,p:0,ease:Oi?W3:V3,reach:n,reach0:n(),offset:new x,cam:H.position.clone(),target:ve.target.clone()};e&&(Bt(e,Dt),t.offset.subVectors(H.position,Dt).divideScalar(gi(e)),e.userData.orbit_type==="landed"&&t.offset.applyQuaternion(e.getWorldQuaternion(xo).invert())),Ta(),ve.enabled=!1,H.far=Ft.cameraFar,H.updateProjectionMatrix(),ve.maxDistance=Ft.maxDistance,Dn=t}function X3(n){Dn&&(Dn.p=n)}const rm=new x;function Y3(n,e){const t=Dn;if(!t.subject){if(pi&&ur===null){Fi=Math.min(1,Fi+n/Hx);const l=zi*n*Fi*Fi;t.cam.applyAxisAngle(Ot,l),t.target.applyAxisAngle(Ot,l)}const c=t.reach()/t.reach0;H.position.copy(t.cam).multiplyScalar(c),ve.target.copy(t.target).multiplyScalar(c),ve.update();return}const i=t.subject;if(ht.live&&ur===null&&(ht.az+=ht.vel*n),Bt(i,Dt),isNaN(Dt.x))return;fn.copy(t.offset).multiplyScalar(gi(i)),i.userData.orbit_type==="landed"&&fn.applyQuaternion(i.getWorldQuaternion(xo)),hu(i,e,rm),hs.subVectors(rm,Dt),t.reached=Math.max(t.reached??0,Math.min(t.p/t.ease,1));const s=t.reached,r=s*s*(3-2*s),a=fn.length(),o=hs.length();a>0&&o>0&&(fn.divideScalar(a).lerp(hs.divideScalar(o),r),fn.lengthSq()<1e-12&&fn.copy(hs),fn.setLength(a**(1-r)*o**r)),H.position.copy(Dt).add(fn),Zf(H.position,i),ve.target.copy(Dt),ve.update()}function K3(){const n=Dn;if(!n)return;Dn=null,H.near=Ft.cameraNear??H.near,H.far=Ft.cameraFar,H.updateProjectionMatrix(),ve.maxDistance=Ft.maxDistance,ve.enabled=Yo,n.subject&&n.subject===le&&(gn=!0,Bt(le,Xr),le.getWorldQuaternion(mo));const e=Cs;Cs=null,e?.()}function J3(n){xn||Oi||(ht.live=!1,gn&&le?(hu(le,n,H.position),Bt(le,ve.target),Xr.copy(ve.target),le.getWorldQuaternion(mo)):pi&&tA(H.position,ve.target),ve.update())}const am=6*Math.PI/180,Z3=1.15,om=.05,es=new x,cm=new x;function u_({turn:n=null,zoom:e=0}={}){if(!ve||!Yo||Dn||!n&&!e)return!1;if(jf(),ve.dispatchEvent({type:"start"}),es.subVectors(H.position,ve.target),n){es.applyAxisAngle(H.up,-n[0]*am),cm.crossVectors(H.up,es).normalize();const t=es.angleTo(H.up),i=Math.min(Math.max(t-n[1]*am,om),Math.PI-om);es.applyAxisAngle(cm,i-t)}else{const t=Math.min(Math.max(es.length()*Z3**-e,ve.minDistance),ve.maxDistance);es.setLength(t)}return H.position.copy(ve.target).add(es),ve.dispatchEvent({type:"end"}),!0}function j3(){XT(()=>Ui?.data.name??le?.userData.name??null),ve=new mB(H,ke.domElement),ve.enableDamping=!0,ve.maxDistance=Ft.maxDistance,ve.addEventListener("start",()=>{(gn||pi)&&(Oi=!0,ve.autoRotate=!1,clearTimeout(yl)),nn("steer")}),ve.addEventListener("end",()=>{!Oi||ba.matches||(clearTimeout(yl),yl=setTimeout(()=>{Oi&&(gn||pi)&&(ve.autoRotate=!0)},tb))}),ke.domElement.addEventListener("keydown",n=>{if(n.altKey||n.ctrlKey||n.metaKey)return;const e={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,1],ArrowDown:[0,-1]}[n.key],t={"+":1,"=":1,"-":-1,_:-1}[n.key];!e&&!t||u_(e?{turn:e}:{zoom:t})&&n.preventDefault()}),ve.autoRotateSpeed=-nb}const lm=3,$3=.6,h_=[.04,.6],d_=[.42,.96],eR=Math.min(h_[0],1-d_[1]),tR=30;let lt=null;function nA(){return lt!==null}const f_=()=>[...J.values()].map(n=>n.data);function nR(n){if(lt){if(n===lt.to)return;if(!lt.started){lt=null,nn("scale-mode",{mode:Li});return}[lt.from,lt.to]=[lt.to,lt.from],lt.p=1-lt.p,lt.duration=lm,nn("scale-change",{from:lt.from,to:lt.to});return}n!==Li&&(lt={from:Li,to:n,planned:Li,p:0,duration:lm,started:!1},nn("scale-change",{from:lt.from,to:n}))}function iR(){lt?.started&&(lt.duration=Math.min(lt.duration,$3/Math.max(1-lt.p,1e-6)))}function sR(n){if(lt){if(!lt.started){if(xn){jf();return}rR()}if(lt.p=Math.min(1,lt.p+n/lt.duration),lt.p>=1){aR();return}A_(lt.p)}}function rR(){lt.started=!0;const n=le&&gn?J.get(le.userData.name):null;lt.to==="true"&&n?.data.orbit_type==="landed"&&Pf(n),UT(),cB(Uo[lt.planned]),ox(Uo[lt.planned].toAu),A_(0);const e=sm()!==null;q3(()=>e&&sm()||Hi(tR))}function A_(n){const e=lt.to==="true"?n:1-n,t=([s,r])=>{const a=Math.min(Math.max((e-s)/(r-s),0),1);return a*a*a*(a*(a*6-15)+10)},i={orbit:t(h_),size:t(d_)};Ux(n>eR?1/0:void 0),ru(f_(),lt.from,i),kf(),NT(i.size),Fx(i.orbit),X3(n),nn("scale-progress",{progress:n})}function aR(){const{to:n}=lt;lt=null;const e=f_();if(Ux(1/0),ru(e,n),kf(),Fx(n==="true"?1:0),ox(null),hB(),QT(),n==="true"){zT();const t=le&&gn?J.get(le.userData.name):null;t?.data.orbit_type==="landed"&&Pf(t)}new Set(e.filter(t=>t.orbit_type==="landed").map(t=>t.parent)).forEach(t=>{const i=J.get(t);i&&Xo(i)}),nn("scale-progress",{progress:1}),nn("scale-mode",{mode:n}),K3()}const oR=new x;let Ys="Sun";function cR(){if(Ys="Sun",le&&le.userData)Ys=lr(le.userData.name);else{let n=1/0;J.forEach(e=>{if(e.data.parent==="Sun"&&e.data.type!=="mission"){const t=H.position.distanceTo(e.group.position);t<n&&(n=t,Ys=e.data.name)}})}J.forEach(n=>{const{group:e,data:t}=n;let i=e.position;e.parent&&!e.parent.isScene&&(e.updateWorldMatrix(!0,!1),i=oR.setFromMatrixPosition(e.matrixWorld));const s=H.position.distanceTo(i);if(s===0)return;const r=lr(t.name),a=H.fov*(Math.PI/180),c=(t.type==="mission"?Mn(n):t.radius||1)/s*window.innerHeight/(2*Math.tan(a/2)),l=ib;let u=r===Ys&&Ys!=="Sun";t.type==="mission"||t.type==="asteroid"||t.type==="comet"?(n.mesh===le?e.visible=!0:e.visible=u||c>l,(u||c>3)&&!t.isModelLoaded&&ta(t,!1),t.isModelLoaded&&!t.hasHighDetail&&e.visible&&Ix(n)>Math.min(sb,wx(t)[0]/2)&&Ff(t)):e.visible=!0})}const Xd=new x(0,0,0),lR=new x(0,1,0),uR=.1,hR=new Vv(16777215,uR);He.add(hR);const Qo=new H0(16777215,2.5,0,0);Qo.position.set(0,0,0);Qo.castShadow=!1;He.add(Qo);const Yd=1024,vn=new V0(16777215,0);vn.castShadow=!0;vn.shadow.mapSize.set(Yd,Yd);vn.shadow.radius=1.5;He.add(vn);He.add(vn.target);const Yc=.2,bh=2.5,p_=.5,dR=.6,fR=8,Th=Math.sin(at.degToRad(25)),vt=new z0(16773856,0,0,Math.PI/8,.7,0);vt.castShadow=!0;vt.shadow.mapSize.set(1024,1024);vt.shadow.intensity=p_;vt.shadow.autoUpdate=!1;let Kc=0;He.add(vt,vt.target);let ts=null;const Ii=new x,Bh=new x,$a=new x,zr=new x,ns=new x,Rh=new x,um=new x,Dh=new x,Lh=new xe,Jc=new x,eo=new x;let Zc=1/0;function hm(n,e,t=null,i=1/0){let s=0;return J.forEach(r=>{if(r.ring){const{mesh:l,innerRadius:u,outerRadius:h,opacity:d}=r.ring;if(l.updateWorldMatrix(!0,!1),Lh.copy(l.matrixWorld).invert(),Jc.copy(n).applyMatrix4(Lh),eo.copy(e).transformDirection(Lh),Math.abs(eo.z)>1e-6){const f=-Jc.z/eo.z;if(f>1e-6){const p=Math.hypot(Jc.x+f*eo.x,Jc.y+f*eo.y),g=(h-u)*.02,m=at.smoothstep(p,u-g,u+g)*(1-at.smoothstep(p,h-g,h+g));s=Math.max(s,d*m)}}}if(r===t||!nu.has(r.data.type))return;r.group.getWorldPosition(um),Dh.subVectors(um,n);const a=Dh.dot(e);if(a<=0||a>=i)return;const o=Mn(r),c=Dh.addScaledVector(e,-a).length();s=Math.max(s,1-at.smoothstep(c,o*.95,o*1.05))}),s}const AR=30,pR=new x;function gR(){return gn&&!xn?!0:xn?H.position.distanceTo(Bt(le,pR))<gi(le)*AR:!1}function mR(n){const t=le&&le.userData&&le.userData.type==="mission"&&!Ao(le.userData)&&gR()?le:null;t!==ts&&vt.intensity<.02&&(ts=t);const i=t&&t===ts?Kc:0;if(vt.intensity+=(i-vt.intensity)*(1-Math.exp(-n*3/dR)),!ts)return;Bt(ts,vt.target.position);const s=J.get(ts.userData.parent);if(s&&s.group.getWorldPosition(Bh),zr.subVectors(Xd,vt.target.position),Zc=zr.length(),zr.divideScalar(Zc||1),ts.userData.orbit_type==="landed"&&s){Ii.subVectors(vt.target.position,Bh).normalize();let l=at.smoothstep(Ii.dot(zr),-.1,0);l*=1-hm(vt.target.position,zr,s,Zc),Kc=at.lerp(bh,Yc,l)}else if(Kc=at.lerp(Yc,bh,hm(vt.target.position,zr,null,Zc)),Ii.subVectors(vt.target.position,Xd).normalize(),s&&nu.has(s.data.type)){$a.subVectors(Bh,vt.target.position).normalize();const l=Ii.dot($a);l<Th&&(Ii.addScaledVector($a,-l),Ii.lengthSq()<1e-8&&Ii.set(1,0,0).cross($a),Ii.normalize().multiplyScalar(Math.sqrt(1-Th**2)).addScaledVector($a,Th))}const r=Mn(J.get(ts.userData.name)),a=r*fR;vt.position.copy(vt.target.position).addScaledVector(Ii,a),vt.angle=Math.atan(r*2.5/a),vt.target.updateMatrixWorld();const o=at.clamp((Kc-Yc)/(bh-Yc),0,1);vt.shadow.intensity=p_*o;const c=vt.intensity>.01&&o>.01;if(vt.shadow.autoUpdate=c,c){const l=vt.shadow.camera;l.near=a*.5,l.far=a+r*4,l.updateProjectionMatrix(),vt.shadow.normalBias=r*5/vt.shadow.mapSize.x,vt.shadow.bias=-1e-4}}const dm=2**.25,fm=36,xR=1,Am=2.5,_R=3;let jc=0;const ER=new xe,Ph=new x,Uh=new x,yR=new x,vR=new x,$c=new x,MR=new x;let Kd=null,Fh=0;const SR=2**24;function g_(n){let e=n;return e&&e.data.type==="mission"&&(e=J.get(e.data.parent)??null),e&&nu.has(e.data.type)?e:null}const Jd=new x;function CR(n){const e=g_(n)??Kd;return e.group.getWorldPosition(Jd),{centre:Jd,radius:Mn(e)}}const IR=1e3;function wR(n){const e=Ys!=="Sun"?J.get(Ys):null,t=e&&e.data.radius||1,i=a_(),s=i&&i.userData?J.get(i.userData.name):null,r=g_(s),a=e&&(H.position.distanceTo(e.group.position)<Math.max(t*fm,Ft.shadowReachMin)||r&&H.position.distanceTo(r.group.getWorldPosition(Jd))<Mn(r)*fm);e!==Kd&&(jc=0,Kd=e,Fh=e?Xx(e):0);const o=n/xR;jc=at.clamp(jc+(a?o:-o),0,1);const c=at.smoothstep(jc,0,1);if(!e||c<=0){Qo.intensity=Am,vn.intensity=0,vn.shadow.autoUpdate=!1;return}Qo.intensity=Am*(1-c),vn.intensity=_R*c,vn.shadow.autoUpdate=!0;const l=xn&&i?Bt(i,MR):ve.target,h=H.position.distanceTo(l)*Math.tan(at.degToRad(H.fov)/2);let d=Math.hypot(h,h*H.aspect)*1.05;s&&(d=Math.max(d,Mn(s)*1.5)),d=Math.max(Ft.shadowHalfMin,Math.min(d,Fh*1.2)),d=dm**Math.ceil(Math.log(d)/Math.log(dm));const f=2*d/Yd;Rh.subVectors(Xd,l).normalize(),ER.lookAt(Rh,vR,lR).extractBasis(Ph,Uh,yR),i?Bt(i,$c):e.group.getWorldPosition($c),ns.subVectors(l,$c);const p=ns.dot(Ph),g=ns.dot(Uh);ns.addScaledVector(Ph,Math.round(p/f)*f-p).addScaledVector(Uh,Math.round(g/f)*f-g).add($c);const m=Ft.shadowLocal?CR(s):null,A=m&&s&&s.data.orbit_type==="landed",E=A?d*IR:m?m.centre.distanceTo(ns)+m.radius+d:Fh+ns.distanceTo(e.group.position)+d;vn.position.copy(ns).addScaledVector(Rh,E),vn.target.position.copy(ns);const _=vn.shadow.camera;_.left=_.bottom=-d,_.right=_.top=d,_.near=d*.5,_.far=A?E*2:E+(m?d:Math.max(d,t))*2,_.updateProjectionMatrix();const S=_.far-_.near;vn.shadow.normalBias=f,vn.shadow.bias=-(m?Math.max(f*.5,2*S/SR):f*.5)/S}class bR{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0,this.workerCreator=null}_initWorker(e){if(!this.workers[e]){const t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){const i=this.workersResolve[e];if(i&&i(t),this.queue.length){const{resolve:s,msg:r,transfer:a}=this.queue.shift();this.workersResolve[e]=s,this.workers[e].postMessage(r,a)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(i=>{const s=this._getIdleWorker();s!==-1?(this._initWorker(s),this.workerStatus|=1<<s,this.workersResolve[s]=i,this.workers[s].postMessage(e,t)):this.queue.push({resolve:i,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const TR=0,pm=2,BR=1,gm=2,RR=0,DR=1,LR=10,PR=0,m_=9,x_=15,__=16,E_=22,y_=37,v_=43,M_=76,S_=83,C_=97,I_=100,w_=103,b_=109,T_=122,B_=123,R_=131,D_=132,L_=133,P_=134,U_=137,F_=138,N_=139,Q_=140,O_=141,k_=142,G_=145,z_=146,H_=148,V_=152,W_=157,q_=158,X_=165,Y_=166,K_=1000054e3,J_=1000054001,Z_=1000054004,j_=1000054005,iA=1000066e3,$_=1000066004;class to{constructor(e,t,i,s){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(e.buffer,e.byteOffset+t,i),this._littleEndian=s,this._offset=0}_nextUint8(){const e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){const e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){const e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){const e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){const e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint8Array(e){const t=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,e);return this._offset+=e,t}_skip(e){return this._offset+=e,this}_scan(e,t=0){const i=this._offset;let s=0;for(;this._dataView.getUint8(this._offset)!==t&&s<e;)s++,this._offset++;return s<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+i,s)}}const hn=[171,75,84,88,32,50,48,187,13,10,26,10];function mm(n){return new TextDecoder().decode(n)}function UR(n){const e=new Uint8Array(n.buffer,n.byteOffset,hn.length);if(e[0]!==hn[0]||e[1]!==hn[1]||e[2]!==hn[2]||e[3]!==hn[3]||e[4]!==hn[4]||e[5]!==hn[5]||e[6]!==hn[6]||e[7]!==hn[7]||e[8]!==hn[8]||e[9]!==hn[9]||e[10]!==hn[10]||e[11]!==hn[11])throw new Error("Missing KTX 2.0 identifier.");const t={vkFormat:0,typeSize:1,pixelWidth:0,pixelHeight:0,pixelDepth:0,layerCount:0,faceCount:1,levelCount:0,supercompressionScheme:0,levels:[],dataFormatDescriptor:[{vendorId:0,descriptorType:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],keyValue:{},globalData:null},i=17*Uint32Array.BYTES_PER_ELEMENT,s=new to(n,hn.length,i,!0);t.vkFormat=s._nextUint32(),t.typeSize=s._nextUint32(),t.pixelWidth=s._nextUint32(),t.pixelHeight=s._nextUint32(),t.pixelDepth=s._nextUint32(),t.layerCount=s._nextUint32(),t.faceCount=s._nextUint32(),t.levelCount=s._nextUint32(),t.supercompressionScheme=s._nextUint32();const r=s._nextUint32(),a=s._nextUint32(),o=s._nextUint32(),c=s._nextUint32(),l=s._nextUint64(),u=s._nextUint64(),h=3*Math.max(t.levelCount,1)*8,d=new to(n,hn.length+i,h,!0);for(let te=0,pe=Math.max(t.levelCount,1);te<pe;te++)t.levels.push({levelData:new Uint8Array(n.buffer,n.byteOffset+d._nextUint64(),d._nextUint64()),uncompressedByteLength:d._nextUint64()});const f=new to(n,r,a,!0);f._skip(4);const p=f._nextUint16(),g=f._nextUint16(),m=f._nextUint16(),A=f._nextUint16(),E={vendorId:p,descriptorType:g,versionNumber:m,colorModel:f._nextUint8(),colorPrimaries:f._nextUint8(),transferFunction:f._nextUint8(),flags:f._nextUint8(),texelBlockDimension:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],bytesPlane:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],samples:[]},_=(A/4-6)/4;for(let te=0;te<_;te++){const pe={bitOffset:f._nextUint16(),bitLength:f._nextUint8(),channelType:f._nextUint8(),samplePosition:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],sampleLower:Number.NEGATIVE_INFINITY,sampleUpper:Number.POSITIVE_INFINITY};64&pe.channelType?(pe.sampleLower=f._nextInt32(),pe.sampleUpper=f._nextInt32()):(pe.sampleLower=f._nextUint32(),pe.sampleUpper=f._nextUint32()),E.samples[te]=pe}t.dataFormatDescriptor.length=0,t.dataFormatDescriptor.push(E);const S=new to(n,o,c,!0);for(;S._offset<c;){const te=S._nextUint32(),pe=S._scan(te),be=mm(pe);if(t.keyValue[be]=S._nextUint8Array(te-pe.byteLength-1),be.match(/^ktx/i)){const et=mm(t.keyValue[be]);t.keyValue[be]=et.substring(0,et.lastIndexOf("\0"))}S._skip(te%4?4-te%4:0)}if(u<=0)return t;const w=new to(n,l,u,!0),C=w._nextUint16(),B=w._nextUint16(),U=w._nextUint32(),y=w._nextUint32(),v=w._nextUint32(),R=w._nextUint32(),b=[];for(let te=0,pe=Math.max(t.levelCount,1);te<pe;te++)b.push({imageFlags:w._nextUint32(),rgbSliceByteOffset:w._nextUint32(),rgbSliceByteLength:w._nextUint32(),alphaSliceByteOffset:w._nextUint32(),alphaSliceByteLength:w._nextUint32()});const D=l+w._offset,N=D+U,F=N+y,Q=F+v,X=new Uint8Array(n.buffer,n.byteOffset+D,U),z=new Uint8Array(n.buffer,n.byteOffset+N,y),j=new Uint8Array(n.buffer,n.byteOffset+F,v),ie=new Uint8Array(n.buffer,n.byteOffset+Q,R);return t.globalData={endpointCount:C,selectorCount:B,imageDescs:b,endpointsData:X,selectorsData:z,tablesData:j,extendedData:ie},t}let Nh,bi,Zd;const Qh={env:{emscripten_notify_memory_growth:function(n){Zd=new Uint8Array(bi.exports.memory.buffer)}}};class FR{init(){return Nh||(Nh=typeof fetch<"u"?fetch("data:application/wasm;base64,"+xm).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,Qh)).then(this._init):WebAssembly.instantiate(Buffer.from(xm,"base64"),Qh).then(this._init),Nh)}_init(e){bi=e.instance,Qh.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!bi)throw new Error("ZSTDDecoder: Await .init() before decoding.");const i=e.byteLength,s=bi.exports.malloc(i);Zd.set(e,s),t=t||Number(bi.exports.ZSTD_findDecompressedSize(s,i));const r=bi.exports.malloc(t),a=bi.exports.ZSTD_decompress(r,t,s,i),o=Zd.slice(r,r+a);return bi.exports.free(s),bi.exports.free(r),o}}const xm="AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ",NR="display-p3",QR="display-p3-linear";({...rt.spaces[dt]});const Oh=new WeakMap;let kh=0,Gh;class On extends bs{constructor(e){super(e),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new bR,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}async detectSupportAsync(e){return console.warn('KTX2Loader: "detectSupportAsync()" has been deprecated. Use "detectSupport()" and "await renderer.init();" when creating the renderer.'),await e.init(),this.detectSupport(e)}detectSupport(e){return e.isWebGPURenderer===!0?this.workerConfig={astcSupported:e.hasFeature("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:e.hasFeature("texture-compression-etc1"),etc2Supported:e.hasFeature("texture-compression-etc2"),dxtSupported:e.hasFeature("texture-compression-s3tc"),bptcSupported:e.hasFeature("texture-compression-bc"),pvrtcSupported:e.hasFeature("texture-compression-pvrtc")}:(this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),astcHDRSupported:e.extensions.has("WEBGL_compressed_texture_astc")&&e.extensions.get("WEBGL_compressed_texture_astc").getSupportedProfiles().includes("hdr"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},typeof navigator<"u"&&navigator.platform.indexOf("Linux")>=0&&navigator.userAgent.indexOf("Firefox")>=0&&this.workerConfig.astcSupported&&this.workerConfig.etc2Supported&&this.workerConfig.bptcSupported&&this.workerConfig.dxtSupported&&(this.workerConfig.astcSupported=!1,this.workerConfig.etc2Supported=!1)),this}init(){if(!this.transcoderPending){const e=new nr(this.manager);e.setPath(this.transcoderPath),e.setWithCredentials(this.withCredentials);const t=e.loadAsync("basis_transcoder.js"),i=new nr(this.manager);i.setPath(this.transcoderPath),i.setResponseType("arraybuffer"),i.setWithCredentials(this.withCredentials);const s=i.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([t,s]).then(([r,a])=>{const o=On.BasisWorker.toString(),c=["/* constants */","let _EngineFormat = "+JSON.stringify(On.EngineFormat),"let _EngineType = "+JSON.stringify(On.EngineType),"let _TranscoderFormat = "+JSON.stringify(On.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(On.BasisFormat),"/* basis_transcoder.js */",r,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([c])),this.transcoderBinary=a,this.workerPool.setWorkerCreator(()=>{const l=new Worker(this.workerSourceURL),u=this.transcoderBinary.slice(0);return l.postMessage({type:"init",config:this.workerConfig,transcoderBinary:u},[u]),l})}),kh>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),kh++}return this.transcoderPending}load(e,t,i,s){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const r=new nr(this.manager);r.setPath(this.path),r.setCrossOrigin(this.crossOrigin),r.setWithCredentials(this.withCredentials),r.setRequestHeader(this.requestHeader),r.setResponseType("arraybuffer"),r.load(e,a=>{this.parse(a,t,s)},i,s)}parse(e,t,i){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(Oh.has(e))return Oh.get(e).promise.then(t).catch(i);this._createTexture(e).then(s=>t?t(s):null).catch(i)}_createTextureFrom(e,t){const{type:i,error:s,data:{faces:r,width:a,height:o,format:c,type:l,dfdFlags:u}}=e;if(i==="error")return Promise.reject(s);let h;if(t.faceCount===6)h=new L0(r,c,l);else{const d=r[0].mipmaps;h=t.layerCount>1?new _v(d,a,o,t.layerCount,c,l):new Zl(d,a,o,c,l)}return h.minFilter=r[0].mipmaps.length===1?bt:Yn,h.magFilter=bt,h.generateMipmaps=!1,h.needsUpdate=!0,h.colorSpace=eE(t),h.premultiplyAlpha=!!(u&BR),h}async _createTexture(e,t={}){const i=UR(new Uint8Array(e)),s=i.vkFormat===iA&&i.dataFormatDescriptor[0].colorModel===167;if(!(i.vkFormat===PR||s&&!this.workerConfig.astcHDRSupported))return kR(i);const a=t,o=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:e,taskConfig:a},[e])).then(c=>this._createTextureFrom(c.data,i));return Oh.set(e,{promise:o}),o}dispose(){this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),kh--}}On.BasisFormat={ETC1S:0,UASTC:1,UASTC_HDR:2};On.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16,BC6H:22,RGB_HALF:24,RGBA_HALF:25};On.EngineFormat={RGBAFormat:Jt,RGBA_ASTC_4x4_Format:tr,RGB_BPTC_UNSIGNED_Format:wl,RGBA_BPTC_Format:ca,RGBA_ETC2_EAC_Format:To,RGBA_PVRTC_4BPPV1_Format:oa,RGBA_S3TC_DXT5_Format:lo,RGB_ETC1_Format:Il,RGB_ETC2_Format:bo,RGB_PVRTC_4BPPV1_Format:Cl,RGBA_S3TC_DXT1_Format:er};On.EngineType={UnsignedByteType:Ye,HalfFloatType:Bn,FloatType:cn};On.BasisWorker=function(){let n,e,t;const i=_EngineFormat,s=_EngineType,r=_TranscoderFormat,a=_BasisFormat;self.addEventListener("message",function(p){const g=p.data;switch(g.type){case"init":n=g.config,o(g.transcoderBinary);break;case"transcode":e.then(()=>{try{const{faces:m,buffers:A,width:E,height:_,hasAlpha:S,format:w,type:C,dfdFlags:B}=c(g.buffer);self.postMessage({type:"transcode",id:g.id,data:{faces:m,width:E,height:_,hasAlpha:S,format:w,type:C,dfdFlags:B}},A)}catch(m){console.error(m),self.postMessage({type:"error",id:g.id,error:m.message})}});break}});function o(p){e=new Promise(g=>{t={wasmBinary:p,onRuntimeInitialized:g},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function c(p){const g=new t.KTX2File(new Uint8Array(p));function m(){g.close(),g.delete()}if(!g.isValid())throw m(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");let A;if(g.isUASTC())A=a.UASTC;else if(g.isETC1S())A=a.ETC1S;else if(g.isHDR())A=a.UASTC_HDR;else throw new Error("THREE.KTX2Loader: Unknown Basis encoding");const E=g.getWidth(),_=g.getHeight(),S=g.getLayers()||1,w=g.getLevels(),C=g.getFaces(),B=g.getHasAlpha(),U=g.getDFDFlags(),{transcoderFormat:y,engineFormat:v,engineType:R}=h(A,E,_,B);if(!E||!_||!w)throw m(),new Error("THREE.KTX2Loader:	Invalid texture");if(!g.startTranscoding())throw m(),new Error("THREE.KTX2Loader: .startTranscoding failed");const b=[],D=[];for(let N=0;N<C;N++){const F=[];for(let Q=0;Q<w;Q++){const X=[];let z,j;for(let te=0;te<S;te++){const pe=g.getImageLevelInfo(Q,te,N);N===0&&Q===0&&te===0&&(pe.origWidth%4!==0||pe.origHeight%4!==0)&&console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),w>1?(z=pe.origWidth,j=pe.origHeight):(z=pe.width,j=pe.height);let be=new Uint8Array(g.getImageTranscodedSizeInBytes(Q,te,0,y));const et=g.transcodeImage(be,Q,te,N,y,0,-1,-1);if(R===s.HalfFloatType&&(be=new Uint16Array(be.buffer,be.byteOffset,be.byteLength/Uint16Array.BYTES_PER_ELEMENT)),!et)throw m(),new Error("THREE.KTX2Loader: .transcodeImage failed.");X.push(be)}const ie=f(X);F.push({data:ie,width:z,height:j}),D.push(ie.buffer)}b.push({mipmaps:F,width:E,height:_,format:v,type:R})}return m(),{faces:b,buffers:D,width:E,height:_,hasAlpha:B,dfdFlags:U,format:v,type:R}}const l=[{if:"astcSupported",basisFormat:[a.UASTC],transcoderFormat:[r.ASTC_4x4,r.ASTC_4x4],engineFormat:[i.RGBA_ASTC_4x4_Format,i.RGBA_ASTC_4x4_Format],engineType:[s.UnsignedByteType],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.BC7_M5,r.BC7_M5],engineFormat:[i.RGBA_BPTC_Format,i.RGBA_BPTC_Format],engineType:[s.UnsignedByteType],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.BC1,r.BC3],engineFormat:[i.RGBA_S3TC_DXT1_Format,i.RGBA_S3TC_DXT5_Format],engineType:[s.UnsignedByteType],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.ETC1,r.ETC2],engineFormat:[i.RGB_ETC2_Format,i.RGBA_ETC2_EAC_Format],engineType:[s.UnsignedByteType],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.ETC1],engineFormat:[i.RGB_ETC1_Format],engineType:[s.UnsignedByteType],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.PVRTC1_4_RGB,r.PVRTC1_4_RGBA],engineFormat:[i.RGB_PVRTC_4BPPV1_Format,i.RGBA_PVRTC_4BPPV1_Format],engineType:[s.UnsignedByteType],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0},{if:"bptcSupported",basisFormat:[a.UASTC_HDR],transcoderFormat:[r.BC6H],engineFormat:[i.RGB_BPTC_UNSIGNED_Format],engineType:[s.HalfFloatType],priorityHDR:1,needsPowerOfTwo:!1},{basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.RGBA32,r.RGBA32],engineFormat:[i.RGBAFormat,i.RGBAFormat],engineType:[s.UnsignedByteType,s.UnsignedByteType],priorityETC1S:100,priorityUASTC:100,needsPowerOfTwo:!1},{basisFormat:[a.UASTC_HDR],transcoderFormat:[r.RGBA_HALF],engineFormat:[i.RGBAFormat],engineType:[s.HalfFloatType],priorityHDR:100,needsPowerOfTwo:!1}],u={[a.ETC1S]:l.filter(p=>p.basisFormat.includes(a.ETC1S)).sort((p,g)=>p.priorityETC1S-g.priorityETC1S),[a.UASTC]:l.filter(p=>p.basisFormat.includes(a.UASTC)).sort((p,g)=>p.priorityUASTC-g.priorityUASTC),[a.UASTC_HDR]:l.filter(p=>p.basisFormat.includes(a.UASTC_HDR)).sort((p,g)=>p.priorityHDR-g.priorityHDR)};function h(p,g,m,A){const E=u[p];for(let _=0;_<E.length;_++){const S=E[_];if(S.if&&!n[S.if]||!S.basisFormat.includes(p)||A&&S.transcoderFormat.length<2||S.needsPowerOfTwo&&!(d(g)&&d(m)))continue;const w=S.transcoderFormat[A?1:0],C=S.engineFormat[A?1:0],B=S.engineType[0];return{transcoderFormat:w,engineFormat:C,engineType:B}}throw new Error("THREE.KTX2Loader: Failed to identify transcoding target.")}function d(p){return p<=2?!0:(p&p-1)===0&&p!==0}function f(p){if(p.length===1)return p[0];let g=0;for(let E=0;E<p.length;E++){const _=p[E];g+=_.byteLength}const m=new Uint8Array(g);let A=0;for(let E=0;E<p.length;E++){const _=p[E];m.set(_,A),A+=_.byteLength}return m}};const OR=new Set([Jt,So,ls,cs]),zh={[b_]:Jt,[w_]:ls,[I_]:cs,[C_]:Jt,[S_]:ls,[M_]:cs,[v_]:Jt,[y_]:Jt,[E_]:ls,[__]:ls,[x_]:cs,[m_]:cs,[B_]:So,[T_]:So,[V_]:To,[H_]:bo,[iA]:tr,[q_]:tr,[W_]:tr,[$_]:jr,[Y_]:jr,[X_]:jr,[P_]:er,[L_]:er,[D_]:Jr,[R_]:Jr,[F_]:Zr,[U_]:Zr,[Q_]:Tl,[N_]:bl,[k_]:Rl,[O_]:Bl,[z_]:ca,[G_]:ca,[j_]:oa,[J_]:oa,[Z_]:wo,[K_]:wo},Hr={[b_]:cn,[w_]:cn,[I_]:cn,[C_]:Bn,[S_]:Bn,[M_]:Bn,[v_]:Ye,[y_]:Ye,[E_]:Ye,[__]:Ye,[x_]:Ye,[m_]:Ye,[B_]:Kl,[T_]:Jl,[V_]:Ye,[H_]:Ye,[iA]:Bn,[q_]:Ye,[W_]:Ye,[$_]:Bn,[Y_]:Ye,[X_]:Ye,[P_]:Ye,[L_]:Ye,[D_]:Ye,[R_]:Ye,[F_]:Ye,[U_]:Ye,[Q_]:Ye,[N_]:Ye,[k_]:Ye,[O_]:Ye,[z_]:Ye,[G_]:Ye,[j_]:Ye,[J_]:Ye,[Z_]:Ye,[K_]:Ye};async function kR(n){const{vkFormat:e}=n;if(zh[e]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat: "+e);Hr[e]===void 0&&console.warn('THREE.KTX2Loader: Missing ".type" for vkFormat: '+e);let t;n.supercompressionScheme===pm&&(Gh||(Gh=new Promise(async a=>{const o=new FR;await o.init(),a(o)})),t=await Gh);const i=[];for(let a=0;a<n.levels.length;a++){const o=Math.max(1,n.pixelWidth>>a),c=Math.max(1,n.pixelHeight>>a),l=n.pixelDepth?Math.max(1,n.pixelDepth>>a):0,u=n.levels[a];let h;if(n.supercompressionScheme===TR)h=u.levelData;else if(n.supercompressionScheme===pm)h=t.decode(u.levelData,u.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");let d;Hr[e]===cn?d=new Float32Array(h.buffer,h.byteOffset,h.byteLength/Float32Array.BYTES_PER_ELEMENT):Hr[e]===Bn?d=new Uint16Array(h.buffer,h.byteOffset,h.byteLength/Uint16Array.BYTES_PER_ELEMENT):Hr[e]===Kl||Hr[e]===Jl?d=new Uint32Array(h.buffer,h.byteOffset,h.byteLength/Uint32Array.BYTES_PER_ELEMENT):d=h,i.push({data:d,width:o,height:c,depth:l})}const s=n.levelCount===0||i.length>1;let r;if(OR.has(zh[e]))r=n.pixelDepth===0?new Ma(i[0].data,n.pixelWidth,n.pixelHeight):new E0(i[0].data,n.pixelWidth,n.pixelHeight,n.pixelDepth),r.minFilter=s?af:tn,r.magFilter=tn,r.generateMipmaps=n.levelCount===0;else{if(n.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");r=new Zl(i,n.pixelWidth,n.pixelHeight),r.minFilter=s?Yn:bt,r.magFilter=bt}return r.mipmaps=i,r.type=Hr[e],r.format=zh[e],r.colorSpace=eE(n),r.needsUpdate=!0,Promise.resolve(r)}function eE(n){const e=n.dataFormatDescriptor[0];return e.colorPrimaries===DR?e.transferFunction===gm?dt:sn:e.colorPrimaries===LR?e.transferFunction===gm?NR:QR:(e.colorPrimaries===RR||console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`),qn)}let tE=!0;function GR(n){tE=n}const nE=["px","nx","py","ny","pz","nz"],zR=1,iE=new On().setTranscoderPath("basis/"),sE=23.4392911*(Math.PI/180),HR=new Ne().set(-.0548755604,-.8734370902,-.4838350155,.4941094279,-.44482963,.7469822445,-.867666149,-.1980763734,.4559837762),_m=Math.cos(sE),Em=Math.sin(sE),VR=new Ne().set(1,0,0,0,-Em,-_m,0,_m,-Em),Hh=HR.clone().multiply(VR),WR=new Ne().set(-1,0,0,0,0,-1,0,-1,0),qR=`
    varying vec3 vDir;
    void main() {
        vDir = position;
        // A unit box round the camera, turned with the view but never moved, drawn at the far plane.
        vec4 p = projectionMatrix * vec4(mat3(viewMatrix) * position, 1.0);
        gl_Position = p.xyww;
    }`,XR=`
    uniform mat3 toSky;
    uniform float intensity;
    // A survey of the whole sky over the Milky Way (setSkySurvey): galactic, longitude 0 in the
    // middle increasing to the left, north at the top (how surveys are published, as a flat map).
    uniform mat3 toGalactic;
    uniform sampler2D survey;
    uniform float surveyMix;
    // One picture on the sky (setSkyPatch): centred on patchDir, patchTan the tangent of its
    // half-width, north up and east to the left, as an astronomer's image is.
    uniform sampler2D patchImage;
    uniform float patchMix, patchTan, patchAspect;
    uniform vec3 patchDir, patchRight, patchUp;
    #ifdef SKY_CUBE
    uniform samplerCube sky;
    #else
    uniform sampler2D sky;
    #endif
    varying vec3 vDir;
    void main() {
        vec3 d = toSky * normalize(vDir);
        #ifdef SKY_CUBE
        vec4 col = textureCube(sky, d);
        #else
        // d is galactic: longitude to the left of the middle, south at the top (v = 1).
        float l = atan(d.y, d.x), b = asin(clamp(d.z, -1.0, 1.0));
        vec4 col = texture2D(sky, vec2(0.5 - l / 6.28318530718, 0.5 - b / 3.14159265359));
        #endif
        vec3 n = normalize(vDir);
        if (surveyMix > 0.0) {
            vec3 g = toGalactic * n;
            float gLon = atan(g.y, g.x), gb = asin(clamp(g.z, -1.0, 1.0));
            vec3 s = texture2D(survey, vec2(0.5 - gLon / 6.28318530718, 0.5 + gb / 3.14159265359)).rgb;
            col.rgb = mix(col.rgb, s, surveyMix);
        }
        if (patchMix > 0.0) {
            float k = dot(n, patchDir);
            if (k > 0.0) {
                vec3 p = n / k;
                vec2 q = vec2(dot(p, patchRight) / (patchTan), dot(p, patchUp) / (patchTan / patchAspect));
                float reach = max(abs(q.x), abs(q.y));
                if (reach < 1.0) {
                    vec4 pc = texture2D(patchImage, q * 0.5 + 0.5);
                    float edge = 1.0 - smoothstep(0.9, 1.0, reach);
                    col.rgb = mix(col.rgb, pc.rgb, patchMix * edge);
                }
            }
        }
        gl_FragColor = vec4(col.rgb * intensity, 1.0);
        #include <colorspace_fragment>
    }`;let ci=null;function ym(n){ci&&(ci.visible=n)}function rE(n,e){try{ke.initTexture(n)}catch(a){console.warn("Sky upload failed",a)}const t=e?WR.clone().multiply(Hh):Hh.clone(),i=new Mt({defines:e?{SKY_CUBE:""}:{},uniforms:{sky:{value:n},toSky:{value:t},intensity:{value:1},toGalactic:{value:Hh.clone()},survey:{value:$t.survey.texture??Oo},surveyMix:{value:0},patchImage:{value:$t.patch.texture??Oo},patchMix:{value:0},patchTan:{value:.1},patchAspect:{value:1},patchDir:{value:$t.patch.dir},patchRight:{value:$t.patch.right},patchUp:{value:$t.patch.up}},vertexShader:qR,fragmentShader:XR,side:Vt,depthTest:!1,depthWrite:!1});if(ci=new Je(new Es(2,2,2),i),ci.name="sky",ci.frustumCulled=!1,ci.renderOrder=-1e9,ci.raycast=()=>{},He.add(ci),ba.matches||!tE)return;const s=performance.now();i.uniforms.intensity.value=0;const r=()=>{i.uniforms.intensity.value=Math.min(1,(performance.now()-s)/(zR*1e3)),i.uniforms.intensity.value<1&&requestAnimationFrame(r)};requestAnimationFrame(r)}function YR(){const n=qo.load("textures/milky_way.jpg");n.colorSpace=dt,n.generateMipmaps=!1,n.minFilter=bt,n.wrapS=_s,rE(n,!1)}let vm=!1;function KR(){vm||(vm=!0,Promise.all(nE.map(n=>iE.loadAsync(`textures/milky_way_${n}.ktx2`))).then(n=>{const e=new L0(n.map(t=>({width:t.image.width,height:t.image.height,mipmaps:t.mipmaps})),n[0].format,n[0].type);e.colorSpace=dt,e.minFilter=bt,e.magFilter=bt,e.generateMipmaps=!1,e.needsUpdate=!0,rE(e,!0),performance.mark("sky-ready")}).catch(n=>{console.warn("Compressed sky unavailable, using the JPEG",n),YR()}))}const JR=1.2,Oo=new Ma(new Uint8Array([0,0,0,255]),1,1);Oo.needsUpdate=!0;const $t={survey:{texture:null,mix:0,target:0},patch:{texture:null,mix:0,target:0,dir:new x(1,0,0),right:new x(0,0,1),up:new x(0,1,0),tan:.1,aspect:1}};function aE(n,e){const t=qo.load(Ms(n),e,void 0,()=>console.warn(`Sky image didn't load: ${n}`));return t.colorSpace=dt,t.generateMipmaps=!1,t.minFilter=bt,t}function ZR(n,{opacity:e=1}={}){const t=$t.survey;if(!n){t.target=0;return}t.path!==n&&(t.texture?.dispose(),t.texture=aE(n),t.texture.wrapS=_s,t.path=n,t.mix=0),t.target=e}const jR=vs({ra:0,dec:90});function Ml(n){const e=$t.patch;if(!n){e.target=0;return}e.path!==n.image&&(e.texture?.dispose(),e.texture=aE(n.image,i=>{e.aspect=i.image.width/i.image.height}),e.path=n.image,e.mix=0),e.dir.copy(vs({ra:n.ra,dec:n.dec??0}));const t=new x().crossVectors(jR,e.dir);t.lengthSq()<1e-10&&t.set(1,0,0),t.normalize(),e.right.copy(t).negate(),e.up.crossVectors(e.dir,t).normalize(),e.tan=Math.tan((n.size_deg??10)/2*Math.PI/180),e.target=n.opacity??1}function $R(n){const e=n/JR;for(const i of[$t.survey,$t.patch])i.mix=i.target>i.mix?Math.min(i.target,i.mix+e):Math.max(i.target,i.mix-e);if(!ci)return;const t=ci.material.uniforms;t.surveyMix.value=$t.survey.texture?$t.survey.mix:0,t.survey.value=$t.survey.texture??Oo,t.patchMix.value=$t.patch.texture?$t.patch.mix:0,t.patchImage.value=$t.patch.texture??Oo,t.patchTan.value=$t.patch.tan,t.patchAspect.value=$t.patch.aspect}const e2=.05,t2=1e-7,n2=1e6,i2=5,Vr=new x,Mm=new x;He.matrixWorldAutoUpdate=!1;const s2=Tt.prototype.updateMatrixWorld,ko=[];function oE(n,e,t){if(t=t||!n.visible,t&&n.userData.detailLevel){n.matrixWorldNeedsUpdate=!0;return}if(n.updateMatrixWorld!==s2){n.updateMatrixWorld(e),n.traverse(s=>ko.push(s));return}ko.push(n),n.matrixAutoUpdate&&n.updateMatrix(),(n.matrixWorldNeedsUpdate||e)&&((n.matrixWorldAutoUpdate===!0||n===He)&&(n.parent===null?n.matrixWorld.copy(n.matrix):n.matrixWorld.multiplyMatrices(n.parent.matrixWorld,n.matrix)),n.matrixWorldNeedsUpdate=!1,e=!0);const i=n.children;for(let s=0,r=i.length;s<r;s++)oE(i[s],e,t)}function Sm(){ko.length=0,oE(He,!1,!1)}function r2(){if(!Ft.relative){Sm(),ke.render(He,H);return}Vr.copy(H.position),He.position.copy(Vr).negate(),H.position.set(0,0,0);const{autoClear:n}=ke,e=ke.shadowMap.autoUpdate,{background:t}=He;Sm();const i=a2(),s=H.far,r=at.clamp(Math.ceil(Math.log(s/i)/Math.log(n2)),1,i2),a=Math.pow(s/i,1/r);for(let o=r-1;o>=0;o--)H.near=i*Math.pow(a,o),H.far=o===r-1?s:i*Math.pow(a,o+1),H.updateProjectionMatrix(),o<r-1&&(ke.autoClear=!1,ke.clearDepth(),ke.shadowMap.autoUpdate=!1,He.background=null,ym(!1)),ke.render(He,H);ke.autoClear=n,ke.shadowMap.autoUpdate=e,He.background=t,ym(!0),H.near=i,H.far=s,H.updateProjectionMatrix(),H.position.copy(Vr),H.updateMatrixWorld(),He.position.set(0,0,0),He.updateMatrix();for(let o=0;o<ko.length;o++){const c=ko[o].matrixWorld.elements;c[12]+=Vr.x,c[13]+=Vr.y,c[14]+=Vr.z}}function a2(){let n=1/0;return J.forEach(e=>{e.group.visible&&(Mm.setFromMatrixPosition(e.mesh.matrixWorld),n=Math.min(n,H.position.distanceTo(Mm)-Mn(e)))}),Math.max(t2,e2*n)}const Cm=.6,o2=[64,24],c2=new x(0,1,0),_a=new Map,Ea=new Map;function cE(n,e){const t=qo.load(Ms(n),e,void 0,()=>console.warn(`Layer image didn't load: ${n}`));return t.colorSpace=dt,t.anisotropy=4,t}function l2(n){return new ui({map:n,transparent:!0,opacity:0,depthWrite:!1,side:kt,toneMapped:!1})}function u2(n,e){const t=J.get(e.body);if(!t)return console.warn(`Layer "${n}": no object called "${e.body}"`),!1;if(e.place!=="limb"&&e.place!=="sun-line")return console.warn(`Layer "${n}": unknown place "${e.place}"`),!1;sA(n,{now:!0});const i={id:n,spec:e,obj:t,aspect:0,opacity:0,target:e.opacity??1,removing:!1},s=cE(e.image,a=>{i.aspect=a.image.width/a.image.height}),r=e.place==="limb"?new ys(1,1,...o2):new ys(1,1);return i.mesh=new Je(r,l2(s)),i.mesh.visible=!1,i.mesh.frustumCulled=!1,i.mesh.renderOrder=1,i.mesh.matrixAutoUpdate=!1,He.add(i.mesh),_a.set(n,i),!0}function sA(n,{now:e=!1}={}){const t=_a.get(n);if(t){if(e||t.opacity===0){lE(t);return}t.removing=!0,t.target=0}}function lE(n){He.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.map?.dispose(),n.mesh.material.dispose(),_a.get(n.id)===n&&_a.delete(n.id)}function h2(){[..._a.keys()].forEach(n=>sA(n)),[...Ea.keys()].forEach(n=>uE(n,null))}const fs=new x,As=new x,Zs=new x,Ri=new x,zs=new x,is=new x,Eo=new xe,el=new x;function d2(n){for(const e of _a.values()){const t=n/Cm;if(e.opacity=e.target>e.opacity?Math.min(e.target,e.opacity+t):Math.max(e.target,e.opacity-t),e.removing&&e.opacity===0){lE(e);continue}const{obj:i,mesh:s}=e,r=e.aspect>0&&i.group.visible&&e.opacity>0;s.visible=r,r&&(s.material.opacity=e.opacity,i.mesh.updateWorldMatrix(!0,!1),i.mesh.getWorldPosition(fs),e.spec.place==="limb"?f2(e):A2(e))}for(const[e,t]of Ea){const i=n/Cm;t.opacity=t.target>t.opacity?Math.min(t.target,t.opacity+i):Math.max(t.target,t.opacity-i),t.mesh.material.opacity=t.opacity,t.mesh.visible=t.opacity>0,t.removing&&t.opacity===0&&hE(e,t)}}function f2(n){const{spec:e,obj:t,mesh:i}=n;As.subVectors(H.position,fs).normalize(),Ri.set(0,1,0).applyQuaternion(H.quaternion),Zs.crossVectors(Ri,As).normalize(),Ri.crossVectors(As,Zs),Eo.makeBasis(Zs,Ri,As).setPosition(fs),i.matrix.copy(Eo),i.matrixWorldNeedsUpdate=!0;const s=t.data.radius||1,r=Vf(t)*(e.exaggerate??1),a=1-(e.ground_row??1),o=1-(e.top_row??0),l=(e.top_km??100)/(o-a)*r,u=s+(.5-a)*l,h=e.width_deg!==void 0?e.width_deg*Math.PI/180:Math.min(Math.PI,l*n.aspect/u),d=(e.angle??45)*Math.PI/180,f=i.geometry.attributes.position,p=i.geometry.attributes.uv,g=H.position.distanceTo(fs);for(let m=0;m<f.count;m++){const A=p.getX(m),E=p.getY(m),_=d+(.5-A)*h,S=Math.max(0,s+(E-a)*l);zx(_,S,g,0,el),f.setXYZ(m,el.x,el.y,el.z)}f.needsUpdate=!0}function A2(n){const{spec:e,obj:t,mesh:i}=n;is.copy(fs).negate().normalize(),is.lengthSq()===0&&is.set(1,0,0),As.subVectors(H.position,fs).normalize(),zs.copy(As).addScaledVector(is,-As.dot(is)),zs.lengthSq()<1e-8&&zs.copy(c2).addScaledVector(is,-is.y),zs.normalize(),Zs.copy(is).negate(),Ri.crossVectors(zs,Zs),Ri.dot(As.set(0,1,0).applyQuaternion(H.quaternion))<0&&(Ri.negate(),zs.negate());const s=(t.data.radius||1)/(e.radius??.05),r=s/n.aspect,[a,o]=e.centre??[.5,.5];Eo.makeBasis(Zs.multiplyScalar(s),Ri.multiplyScalar(r),zs),fs.addScaledVector(Zs,.5-a).addScaledVector(Ri,o-.5),Eo.setPosition(fs),i.matrix.copy(Eo),i.matrixWorldNeedsUpdate=!0}function uE(n,e){const t=J.get(n),i=Ea.get(n);if(!e)return i&&(i.target=0,i.removing=!0),!0;if(!t||!t.data.texture||!t.data.built?.radius)return console.warn(`Surface overlay: "${n}" isn't a textured sphere`),!1;i&&hE(n,i);const s=cE(e.image),r=e.lit===!1?new ui({map:s,transparent:!0,opacity:0,toneMapped:!1}):new Gi({map:s,transparent:!0,opacity:0,roughness:1,metalness:0});r.depthWrite=!1;const a=t.data.segments||32,o=new Je(new ki(t.data.built.radius*1.002,a*2,a),r);return o.receiveShadow=e.lit!==!1,o.renderOrder=1,o.visible=!1,t.mesh.add(o),Ea.set(n,{mesh:o,opacity:0,target:e.opacity??1,removing:!1}),!0}function hE(n,e){e.mesh.parent?.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.map?.dispose(),e.mesh.material.dispose(),Ea.get(n)===e&&Ea.delete(n)}const jd=.8,dE=.58,Im=.8,wm=1.3,p2=.45,g2=1.3,$d=55,bm=30,tl=1800,m2=38,di=48,x2=400,rA=Math.log(x2);function _2(n,e){const t=n.radius||1,i=n.radius_km,s=ma(n,i)-t;for(let r=0;r<di;r++){const a=Math.exp(r/(di-1)*rA);e[r]=Math.max(t,ma(n,a*i)-s)}e[0]=t}function Wl(n,e){if(e<=1)return e*n[0];const t=Math.min(1,Math.log(e)/rA)*(di-1),i=Math.min(Math.floor(t),di-2);return n[i]+(n[i+1]-n[i])*(t-i)}const E2=`
uniform float uTable[${di}];
float remapR(float r) {
    if (r <= 1.0) return r * uTable[0];
    float f = min(1.0, log(r) / ${rA.toFixed(6)}) * ${(di-1).toFixed(1)};
    int i = int(min(floor(f), ${(di-2).toFixed(1)}));
    return mix(uTable[i], uTable[i + 1], f - float(i));
}
vec3 remapP(vec3 p) { float r = length(p); return r > 0.0 ? p / r * remapR(r) : p; }
`,ya=at.smoothstep;function y2(n,e){return n*Math.pow(2/(1+Math.max(e,-.94)),dE)}function Tm(n,e,t,i){let{x:s}=n;const r=n.length();if(r<1e-6)return i.copy(n);const a=s/r;s>0?s*=1+(e/t-1)*ya(r,1.5,6)*a:s*=1+g2*ya(r,2.5,9),i.set(s,n.y,n.z);const o=i.length(),c=.95*y2(e,i.x/o);if(o>.7*c){const l=.7*c+.3*c*Math.tanh((o-.7*c)/(.3*c));i.multiplyScalar(l/o)}return i}const fE=[2,3,4.5,6.5,8.5],Bm=12,v2=[73,76,79],Rm=8,nl=64;function M2(){const n=[];for(const t of fE){const i=Math.acos(Math.sqrt(1/t));for(let s=0;s<Bm;s++){const r=s/Bm*Math.PI*2,a=[];for(let o=0;o<=nl;o++){const c=-i+2*i*o/nl,l=t*Math.cos(c)**2;a.push(new x(l*Math.cos(c)*Math.cos(r),l*Math.cos(c)*Math.sin(r),l*Math.sin(c)))}n.push({points:a,open:!1})}}const e=new Iv;for(const t of[1,-1])for(const i of v2){const s=i*Math.PI/180,r=1/Math.cos(s)**2,a=Math.acos(Math.sqrt(2.5/r));for(let o=0;o<Rm;o++){const c=(o+.5)/Rm*Math.PI*2,l=p=>{const g=r*Math.cos(p)**2;return new x(g*Math.cos(p)*Math.cos(c),g*Math.cos(p)*Math.sin(c),t*g*Math.sin(p))},u=[],h=16;for(let p=0;p<=h;p++)u.push(l(s+(a-s)*p/h));const d=u[u.length-1],f=5+(i-72)*.7;e.v0.copy(d),e.v1.set(d.x*.4-4,d.y*1.4,d.z*1.5+t*2),e.v2.set(-$d*.35,Math.sin(c)*7,t*f),e.v3.set(-$d,Math.sin(c)*9,t*f*.9);for(let p=1;p<=nl-h;p++)u.push(e.getPoint(p/(nl-h)));n.push({points:u,open:!0})}}return n}const Ra={transparent:!0,depthWrite:!1,blending:xs,toneMapped:!1};function S2(){return new Mt({...Ra,uniforms:{uTime:{value:0},uOpacity:{value:0},uStorm:{value:0}},vertexShader:`
            attribute float aAlong;
            attribute float aOpen;
            varying float vAlong;
            varying float vOpen;
            void main() {
                vAlong = aAlong; vOpen = aOpen;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }`,fragmentShader:`
            uniform float uTime, uOpacity, uStorm;
            varying float vAlong;
            varying float vOpen;
            void main() {
                // Light running along each line: down the open ones into the tail, both ways
                // round the closed ones.
                float run = vOpen > 0.5 ? fract(vAlong * 3.0 - uTime * 0.12) : fract(abs(vAlong - 0.5) * 4.0 - uTime * 0.1);
                float glint = smoothstep(0.8, 1.0, run);
                vec3 closedColour = vec3(0.49, 1.0, 0.83);
                vec3 openColour = vec3(0.65, 0.71, 0.97);
                vec3 colour = mix(closedColour, openColour, vOpen);
                float fadeTail = vOpen > 0.5 ? 1.0 - smoothstep(0.6, 1.0, vAlong) : 1.0;
                float a = (0.28 + 0.9 * glint) * (1.0 + 0.6 * uStorm) * fadeTail;
                gl_FragColor = vec4(colour * a * uOpacity, 1.0);
            }`})}function il(n,{edge:e=!0}={}){return new Mt({...Ra,side:kt,uniforms:{uOpacity:{value:0},uColour:{value:new Se(n)},uBright:{value:1}},vertexShader:`
            attribute float aFade;
            varying vec3 vNormal;
            varying vec3 vView;
            varying float vFade;
            void main() {
                vec4 view = modelViewMatrix * vec4(position, 1.0);
                vNormal = normalize(normalMatrix * normal);
                vView = normalize(-view.xyz);
                vFade = aFade;
                gl_Position = projectionMatrix * view;
            }`,fragmentShader:`
            uniform float uOpacity, uBright;
            uniform vec3 uColour;
            varying vec3 vNormal;
            varying vec3 vView;
            varying float vFade;
            void main() {
                float facing = abs(dot(normalize(vNormal), normalize(vView)));
                float a = ${e?"pow(1.0 - facing, 2.5)":"pow(facing, 1.5)"} * vFade;
                gl_FragColor = vec4(uColour * a * uOpacity * uBright, 1.0);
            }`})}function C2(){return new Mt({...Ra,side:kt,uniforms:{uTime:{value:0},uOpacity:{value:0},uBright:{value:.5}},vertexShader:`
            attribute float aUp;      // 0 at the curtain's foot (or the band's edge), 1 at its top
            attribute float aPsi;     // round the oval, from the Sun's side
            attribute float aBand;    // 1: the glow on the ground; 0: the curtain
            varying float vUp;
            varying float vPsi;
            varying float vBand;
            void main() {
                vUp = aUp; vPsi = aPsi; vBand = aBand;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }`,fragmentShader:`
            uniform float uTime, uOpacity, uBright;
            varying float vUp;
            varying float vPsi;
            varying float vBand;
            void main() {
                // Folds in the curtain, drifting; strongest on the night side.
                float folds = 0.55 + 0.45 * sin(vPsi * 23.0 + uTime * 0.7 + 2.0 * sin(vPsi * 7.0 - uTime * 0.4));
                float night = 0.3 + 0.7 * smoothstep(0.3, -0.5, cos(vPsi));
                vec3 green = vec3(0.35, 1.0, 0.55);
                vec3 red = vec3(1.0, 0.3, 0.45);
                vec3 colour;
                float a;
                if (vBand > 0.5) {
                    colour = green;
                    a = 1.0 - abs(vUp * 2.0 - 1.0);
                    a = a * a * 0.6;
                } else {
                    colour = mix(green, red, smoothstep(0.35, 1.0, vUp));
                    a = pow(1.0 - vUp, 0.7) * smoothstep(0.0, 0.08, vUp) * folds;
                }
                gl_FragColor = vec4(colour * a * night * uBright * uOpacity, 1.0);
            }`})}function I2(){return new Mt({...Ra,uniforms:{uTable:{value:new Float32Array(di)},uTime:{value:0},uOpacity:{value:0},uSpeed:{value:6},uDensity:{value:.5},uNose:{value:13},uFlare:{value:20}},vertexShader:`
            ${E2}
            uniform float uTime, uSpeed, uNose, uFlare, uDensity;
            attribute vec3 aSeed;     // its distance off the Sun line (body radii), angle round it, and phase
            attribute float aEnd;     // 0 at its head, 1 at its tail
            varying float vAlpha;
            void main() {
                float span = ${(bm+$d).toFixed(1)};
                float s = fract(aSeed.z + uTime * uSpeed / span);
                float x = ${bm.toFixed(1)} - s * span + aEnd * (1.2 + uSpeed * 0.25);
                // Turned aside round the bow shock: the flow keeps outside its cross-section there.
                float shock2 = max(0.0, (uNose - x) * uFlare);
                float rho = sqrt(aSeed.x * aSeed.x + shock2);
                vec3 p = vec3(x, rho * cos(aSeed.y), rho * sin(aSeed.y));
                float shown = step(fract(aSeed.z * 7.13), uDensity);
                vAlpha = (1.0 - aEnd) * smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.8, 1.0, s)) * shown;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(remapP(p), 1.0);
            }`,fragmentShader:`
            uniform float uOpacity;
            varying float vAlpha;
            void main() {
                gl_FragColor = vec4(vec3(1.0, 0.95, 0.55) * vAlpha * uOpacity * 0.8, 1.0);
            }`})}function w2(n){const e=n.reduce((o,c)=>o+c.points.length,0),t=new Ze;t.setAttribute("position",new Ge(new Float32Array(e*3),3));const i=new Float32Array(e),s=new Float32Array(e),r=[];let a=0;for(const o of n){const c=o.points.length;for(let l=0;l<c;l++)i[a+l]=l/(c-1),s[a+l]=o.open?1:0,l>0&&r.push(a+l-1,a+l);a+=c}return t.setAttribute("aAlong",new Ge(i,1)),t.setAttribute("aOpen",new Ge(s,1)),t.setIndex(r),t.userData.quiet=n.flatMap(o=>o.points),t}function Dm(n,e=[36,48]){const[t,i]=e,s=new Ze,r=(t+1)*(i+1);s.setAttribute("position",new Ge(new Float32Array(r*3),3));const a=new Float32Array(r),o=[],c=[];for(let l=0;l<=t;l++){const u=l/t*n;for(let h=0;h<=i;h++){const d=h/i*Math.PI*2;if(o.push(new x(Math.cos(u),Math.sin(u)*Math.cos(d),Math.sin(u)*Math.sin(d))),a[l*(i+1)+h]=1-ya(u,n*.7,n),l<t&&h<i){const f=l*(i+1)+h,p=f+i+1;c.push(f,p,f+1,p,p+1,f+1)}}}return s.setAttribute("aFade",new Ge(a,1)),s.setIndex(c),s.userData.dirs=o,s}function Lm(n,e){const t=35*Math.PI/180,i=[],s=24;for(let h=0;h<=s;h++){const d=-t+2*t*h/s;i.push([e*Math.cos(d)**3,e*Math.cos(d)**2*Math.sin(d)])}for(let h=s;h>=0;h--){const d=-t+2*t*h/s;i.push([n*Math.cos(d)**3,n*Math.cos(d)**2*Math.sin(d)])}i.push(i[0]);const r=64,a=[],o=[],c=[],l=i.length;for(let h=0;h<=r;h++){const d=h/r*Math.PI*2;for(const[f,p]of i)a.push(new x(f*Math.cos(d),f*Math.sin(d),p)),c.push(1);if(h<r)for(let f=0;f<l-1;f++){const p=h*l+f,g=p+l;o.push(p,g,p+1,g,g+1,p+1)}}const u=new Ze;return u.setAttribute("position",new Ge(new Float32Array(a.length*3),3)),u.setAttribute("aFade",new Ge(new Float32Array(c),1)),u.setIndex(o),u.userData.quiet=a,u}const js=180;function b2(){const n=(js+1)*4,e=n*2,t=new Ze;t.setAttribute("position",new Ge(new Float32Array(e*3),3));const i=new Float32Array(e),s=new Float32Array(e),r=new Float32Array(e),a=[];for(let o=0;o<2;o++)for(let c=0;c<=js;c++){const l=o*n+c*4,u=c/js*Math.PI*2;[0,1,0,1].forEach((h,d)=>{i[l+d]=h,s[l+d]=u,r[l+d]=d>=2?1:0}),c<js&&(a.push(l,l+4,l+1,l+4,l+5,l+1),a.push(l+2,l+6,l+3,l+6,l+7,l+3))}return t.setAttribute("aUp",new Ge(i,1)),t.setAttribute("aPsi",new Ge(s,1)),t.setAttribute("aBand",new Ge(r,1)),t.setIndex(a),t}function T2(){const n=new Ze,e=new Float32Array(tl*2*3),t=new Float32Array(tl*2);let i=12345;const s=()=>(i=Math.imul(i,1664525)+1013904223>>>0)/4294967296;for(let r=0;r<tl;r++){const a=m2*Math.sqrt(s()),o=s()*Math.PI*2,c=s();for(let l=0;l<2;l++)e.set([a,o,c],(r*2+l)*3),t[r*2+l]=l}return n.setAttribute("position",new Ge(new Float32Array(tl*2*3),3)),n.setAttribute("aSeed",new Ge(e,3)),n.setAttribute("aEnd",new Ge(t,1)),n}const Go=new Map,va=["field","boundary","belts","aurora","wind"];function AE(n,e){const t=Go.get(n);if(!e)return t&&va.forEach(a=>{t.target[a]=0}),!0;const i=J.get(n),s=i?.data.magnetosphere;if(!s)return console.warn(`No magnetosphere for "${n}" in data.json`),!1;const r=t??B2(i,s);return va.forEach(a=>{r.target[a]=e[a]===!1?0:e.opacity??1}),Go.set(n,r),!0}function B2(n,e){const t=new Zt;t.matrixAutoUpdate=!1;const i={field:new Po(w2(M2()),S2()),magnetopause:new Je(Dm(Math.PI*.82),il("#A6B5F8")),shock:new Je(Dm(Math.PI*.7),il("#FFB4FF")),aurora:new Je(b2(),C2()),wind:new Po(T2(),I2())},[s,r]=e.belts??[[1.2,2.5],[3,6]];return i.innerBelt=new Je(Lm(...s),il("#FFB4FF",{edge:!1})),i.outerBelt=new Je(Lm(...r),il("#66EEFA",{edge:!1})),Object.values(i).forEach(a=>{a.frustumCulled=!1,a.visible=!1,a.renderOrder=2,t.add(a)}),He.add(t),{obj:n,params:e,group:t,meshes:i,opacity:Object.fromEntries(va.map(a=>[a,0])),target:Object.fromEntries(va.map(a=>[a,0])),table:new Float32Array(di),builtTable:null,builtR0:-1,builtOval:-1}}function R2(n,e){He.remove(e.group),Object.values(e.meshes).forEach(t=>{t.geometry.dispose(),t.material.dispose()}),Go.delete(n)}const $s=new x,sl=new x,as=new x,ql=new x,os=new x,rl=new x,Pm=new xe;function Vh(n,e,t){const i=n.array;for(let s=0;s<e.length;s++)t(e[s],sl),i[s*3]=sl.x,i[s*3+1]=sl.y,i[s*3+2]=sl.z;n.needsUpdate=!0}function D2(n,e){const{meshes:t,table:i}=n,s=n.params.standoff_re??10,r=(l,u)=>{const h=l.length();return h>0?u.copy(l).multiplyScalar(Wl(i,h)/h):u.copy(l)};Vh(t.field.geometry.attributes.position,t.field.geometry.userData.quiet,(l,u)=>r(Tm(l,e,s,$s),u));for(const[l,u,h]of[[t.magnetopause,1,dE],[t.shock,wm,Im]])Vh(l.geometry.attributes.position,l.geometry.userData.dirs,(d,f)=>{const p=u*e*Math.pow(2/(1+Math.max(d.x,-.94)),h);return r($s.copy(d).multiplyScalar(p),f)}),l.geometry.computeVertexNormals();for(const l of[t.innerBelt,t.outerBelt])Vh(l.geometry.attributes.position,l.geometry.userData.quiet,(u,h)=>r(Tm(u,e,s,$s),h)),l.geometry.computeVertexNormals();const a=t.wind.material.uniforms;a.uTable.value.set(i);const o=wm*e,c=o*Math.pow(2,Im);a.uNose.value=o,a.uFlare.value=c*c/o}const al=4*Math.PI/180;function L2(n,e,t){const{table:i}=n,s=n.obj.data.radius_km,r=n.meshes.aurora.geometry.attributes.position,a=r.array,o=(js+1)*4,c=1+100/s,l=1+(100+t)/s,u=1+110/s;for(let h=0;h<2;h++){const d=h?-1:1;os.set(-Math.sin(al),0,d*Math.cos(al)),as.set(Math.cos(al),0,d*Math.sin(al)),ql.crossVectors(os,as);for(let f=0;f<=js;f++){const p=f/js*Math.PI*2,g=h*o+f*4,m=(e-2*Math.cos(p))*Math.PI/180,A=(E,_,S)=>{$s.copy(os).multiplyScalar(Math.cos(E)).addScaledVector(as,Math.sin(E)*Math.cos(p)).addScaledVector(ql,Math.sin(E)*Math.sin(p));const w=Wl(i,_);a[(g+S)*3]=$s.x*w,a[(g+S)*3+1]=$s.y*w,a[(g+S)*3+2]=$s.z*w};A(m,c,0),A(m,l,1),A(m-2.5*Math.PI/180,u,2),A(m+2.5*Math.PI/180,u,3)}}r.needsUpdate=!0}function P2(n){if(!n.builtTable)return!0;for(let e=0;e<di;e+=6)if(Math.abs(n.table[e]-n.builtTable[e])>1e-4*n.table[e])return!0;return!1}function U2(n,e,t){const i=e/jd;let s=!1;if(va.forEach(_=>{const S=n.target[_];n.opacity[_]=S>n.opacity[_]?Math.min(S,n.opacity[_]+i):Math.max(S,n.opacity[_]-i),n.opacity[_]>0&&(s=!0)}),!s&&va.every(_=>n.target[_]===0)){R2(t,n);return}const{obj:r,params:a,meshes:o}=n;r.mesh.updateWorldMatrix(!0,!1),r.mesh.getWorldPosition(rl),as.copy(rl).negate().normalize();const c=a.pole??{lat:90,lon:0};Hf(c.lat,c.lon,os).transformDirection(r.mesh.matrixWorld),os.addScaledVector(as,-os.dot(as)).normalize(),ql.crossVectors(os,as),Pm.makeBasis(as,ql,os).setPosition(rl),n.group.matrix.copy(Pm),n.group.matrixWorldNeedsUpdate=!0;const l=gE(t),u=(a.standoff_re??10)*(1-p2*l);_2(r.data,n.table),(P2(n)||Math.abs(u-n.builtR0)>.02)&&(D2(n,u),n.builtR0=u,n.builtTable=n.table.slice(),n.builtOval=-1);const h=90-(a.aurora_lat??67)+12*l;Math.abs(h-n.builtOval)>.05&&(L2(n,h,250+150*l),n.builtOval=h);const d=H.position.distanceTo(rl),f=_=>ya(d,Wl(n.table,_)*.75,Wl(n.table,_)*1.25),[p,g]=a.belts??[[1.2,2.5],[3,6]],m=(_,S)=>{_.visible=S>0,_.material.uniforms.uOpacity.value=S};m(o.field,n.opacity.field*f(fE.at(-1))),o.field.material.uniforms.uTime.value=Zn,o.field.material.uniforms.uStorm.value=l;const A=f(u*.8);m(o.magnetopause,n.opacity.boundary*.55*A),m(o.shock,n.opacity.boundary*.3*A),m(o.innerBelt,n.opacity.belts*.35*f(p[1]*1.6)),m(o.outerBelt,n.opacity.belts*.3*f(g[1]*1.2)),o.outerBelt.material.uniforms.uBright.value=1+1.5*l,m(o.aurora,n.opacity.aurora),o.aurora.material.uniforms.uTime.value=Zn,o.aurora.material.uniforms.uBright.value=.45+1.4*l,m(o.wind,n.opacity.wind*A);const E=o.wind.material.uniforms;E.uTime.value=Zn,E.uSpeed.value=5*(1+1.5*l),E.uDensity.value=.35+.65*l}const Vi=new Map,yo=64,F2=30,N2=1;function Q2(){return new Mt({...Ra,side:kt,uniforms:{uOpacity:{value:0},uTime:{value:0},uWidth:{value:1}},vertexShader:`
            varying vec3 vLocal;
            varying vec3 vNormal;
            varying vec3 vView;
            void main() {
                vLocal = position;
                vec4 view = modelViewMatrix * vec4(position, 1.0);
                vNormal = normalize(normalMatrix * normal);
                vView = normalize(-view.xyz);
                gl_Position = projectionMatrix * view;
            }`,fragmentShader:`
            uniform float uOpacity, uTime, uWidth;
            varying vec3 vLocal;
            varying vec3 vNormal;
            varying vec3 vView;
            void main() {
                float off = acos(clamp(vLocal.y, -1.0, 1.0)) / uWidth;   // 0 on its axis, 1 at its edge
                float edge = 1.0 - smoothstep(0.5, 1.0, off);
                // Faint ribs running out from the Sun, as a CME's loops of field look in a coronagraph.
                float ribs = 0.75 + 0.25 * sin(atan(vLocal.z, vLocal.x) * 11.0 + uTime * 0.2) * smoothstep(0.05, 0.35, off);
                // Brightest where the front is seen edge on: a bright leading edge, from any side.
                float rim = 0.15 + 0.85 * pow(1.0 - abs(dot(normalize(vNormal), normalize(vView))), 3.0);
                vec3 colour = mix(vec3(1.0, 0.95, 0.85), vec3(1.0, 0.55, 0.85), smoothstep(0.3, 1.0, off));
                gl_FragColor = vec4(colour * edge * ribs * rim * uOpacity * 0.6, 1.0);
            }`})}function O2(n,e){aA(n,{now:!0});const t=new Date(e.launch).getTime();if(isNaN(t))return console.warn(`CME "${n}": launch date not understood`),!1;const i=(e.width_deg??60)/2*Math.PI/180,s=new ki(1,64,24,0,Math.PI*2,0,i),r=[0,1].map(()=>{const o=new Je(s,Q2());return o.material.uniforms.uWidth.value=i,o.frustumCulled=!1,o.visible=!1,o.renderOrder=2,He.add(o),o}),a=new Sa(new Ze,new Mt({...Ra,uniforms:{uOpacity:{value:0}},vertexShader:`
            attribute float aOff;
            varying float vOff;
            void main() { vOff = aOff; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
            uniform float uOpacity;
            varying float vOff;
            void main() { gl_FragColor = vec4(vec3(1.0, 0.85, 0.95) * (1.0 - smoothstep(0.6, 1.0, abs(vOff))) * uOpacity, 1.0); }`}));return a.geometry.setAttribute("position",new Ge(new Float32Array(yo*3),3)),a.geometry.setAttribute("aOff",new Ge(Float32Array.from({length:yo},(o,c)=>c/(yo-1)*2-1),1)),a.frustumCulled=!1,a.visible=!1,a.renderOrder=2,He.add(a),Vi.set(n,{id:n,launch:t,width:i,shells:r,arc:a,toward:e.toward??"Earth",speed:e.speed_km_s??1e3,dir:new x(1,0,0),fixed:!1,opacity:0,target:1,removing:!1}),!0}function aA(n,{now:e=!1}={}){const t=Vi.get(n);if(t){if(e){pE(t);return}t.target=0,t.removing=!0}}function pE(n){He.remove(n.arc),n.arc.geometry.dispose(),n.arc.material.dispose(),n.shells.forEach(e=>{He.remove(e),e.material.dispose()}),n.shells[0].geometry.dispose(),Vi.get(n.id)===n&&Vi.delete(n.id)}const Um=new x(0,1,0),Fm=new ot;function k2(n,e){return(J.get("Sun")?.data?.radius_km??695700)+n.speed*Math.max(0,e-n.launch)/1e3}function G2(n,e){if(n.opacity=n.target>n.opacity?Math.min(n.target,n.opacity+e/jd):Math.max(n.target,n.opacity-e/jd),n.removing&&n.opacity===0){pE(n);return}const t=An.getTime(),i=t<n.launch;if(i||!n.fixed){const c=J.get(n.toward);c&&!i&&c.data.orbit&&(c.data.parent??"Sun")==="Sun"?n.dir.copy($n(c.data.orbit,Ar(new Date(n.launch)))).normalize():c&&n.dir.copy(c.group.position).normalize(),n.fixed=!i}const s=k2(n,t)/ga,r=J.get("Sun")?.data.radius??1,a=Math.max(r*1.02,jn.au(s)),o=1-ya(s,2.5,4);if(Fm.setFromUnitVectors(Um,n.dir),n.shells.forEach((c,l)=>{const u=a*(l?.88:1);c.visible=!i&&o>0&&n.opacity>0,c.quaternion.copy(Fm),c.scale.setScalar(Math.max(u,r*1.02)),c.position.set(0,0,0),c.material.uniforms.uOpacity.value=n.opacity*o*(l?.5:1),c.material.uniforms.uTime.value=Zn}),n.arc.visible=n.shells[0].visible,n.arc.visible){const c=n.arc.geometry.attributes.position.array;for(let l=0;l<yo;l++){const u=(l/(yo-1)*2-1)*n.width;ol.copy(n.dir).applyAxisAngle(Um,u).multiplyScalar(Math.max(a,r*1.02)),c[l*3]=ol.x,c[l*3+1]=ol.y,c[l*3+2]=ol.z}n.arc.geometry.attributes.position.needsUpdate=!0,n.arc.material.uniforms.uOpacity.value=n.opacity*o}}const ol=new x,ef=new x;function gE(n){const e=J.get(n);if(!e||!Vi.size)return 0;const t=An.getTime(),i=e.group.position.length(),s=jn.toAu(i)*ga;ef.copy(e.group.position).normalize();let r=0;for(const a of Vi.values()){if(a.removing||t<a.launch||ef.angleTo(a.dir)>a.width)continue;const o=J.get("Sun")?.data.radius_km??695700,c=a.launch+(s-o)/a.speed*1e3,l=(t-c)/36e5;l<0||(r=Math.max(r,ya(l,0,N2)*Math.exp(-l/F2)))}return r}function z2(n,e){const t=Vi.get(n),i=J.get(e);if(!t||!i||ef.copy(i.group.position).normalize().angleTo(t.dir)>t.width)return null;const s=jn.toAu(i.group.position.length())*ga,r=J.get("Sun")?.data.radius_km??695700;return new Date(t.launch+(s-r)/t.speed*1e3)}function H2(){[...Go.keys()].forEach(n=>AE(n,null)),[...Vi.keys()].forEach(n=>aA(n))}function V2(n){for(const e of[...Vi.values()])G2(e,n);for(const[e,t]of[...Go])U2(t,n,e)}const W2=.6,q2=10,Nm=260,X2=.035,mE=15,oA={transparent:!0,depthWrite:!1,blending:xs,toneMapped:!1};function co(n,e,{align:t="left",weight:i=500}={}){const r=`${i} 48px Poppins, Arial, sans-serif`,a=document.createElement("canvas"),o=a.getContext("2d");o.font=r;const c=Math.ceil(o.measureText(n).width)+32;a.width=c,a.height=68,o.font=r,o.textBaseline="middle",o.shadowColor="rgba(0, 0, 0, 0.85)",o.shadowBlur=12,o.fillStyle=e,o.fillText(n,16,a.height/2);const l=new Ev(a);l.colorSpace=dt;const u=new lv(new T0({map:l,transparent:!0,depthWrite:!1,toneMapped:!1}));return u.center.set(t==="left"?0:t==="right"?1:.5,.5),u.userData.aspect=a.width/a.height,u.renderOrder=3,u.frustumCulled=!1,u}const Qm=new x;function cl(n){n.getWorldPosition(Qm);const t=2*H.position.distanceTo(Qm)*Math.tan(H.fov*Math.PI/360)*mE*34/24/window.innerHeight;n.scale.set(t*n.userData.aspect,t,1)}function Y2(n){return new Mt({...oA,uniforms:{uOpacity:{value:0},uColour:{value:new Se(n)}},vertexShader:`
            varying vec3 vNormal;
            varying vec3 vView;
            void main() {
                vec4 view = modelViewMatrix * vec4(position, 1.0);
                vNormal = normalize(normalMatrix * normal);
                vView = normalize(-view.xyz);
                gl_Position = projectionMatrix * view;
            }`,fragmentShader:`
            uniform float uOpacity;
            uniform vec3 uColour;
            varying vec3 vNormal;
            varying vec3 vView;
            void main() {
                float edge = pow(1.0 - abs(dot(normalize(vNormal), normalize(vView))), 4.0);
                gl_FragColor = vec4(uColour * edge * uOpacity, 1.0);
            }`})}function K2(n,e){return new Mt({...oA,side:kt,uniforms:{uOpacity:{value:0},uTime:{value:0},uColour:{value:new Se(n)},uRainbow:{value:e?1:0}},vertexShader:`
            varying vec2 vUv;
            void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
            uniform float uOpacity, uTime, uRainbow;
            uniform vec3 uColour;
            varying vec2 vUv;
            vec3 hue(float h) { return clamp(abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0); }
            void main() {
                float across = (vUv.x - 0.5) * 2.0;
                float down = 1.0 - vUv.y;                  // 0 where it comes in, 1 where it stops
                float core = exp(-across * across * 6.0);
                float photons = smoothstep(0.75, 1.0, fract(down * 7.0 - uTime * 0.9));
                float a = core * (0.35 + 0.9 * photons) * smoothstep(0.0, 0.2, down) * (0.7 + 0.3 * down);
                vec3 colour = uRainbow > 0.5 ? hue(0.8 * (1.0 - vUv.x)) * 1.2 : uColour;
                gl_FragColor = vec4(colour * a * uOpacity, 1.0);
            }`})}function J2(n){return new Mt({...oA,side:kt,uniforms:{uOpacity:{value:0},uTime:{value:0},uColour:{value:new Se(n)}},vertexShader:`
            varying vec2 vUv;
            void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
            uniform float uOpacity, uTime;
            uniform vec3 uColour;
            varying vec2 vUv;
            void main() {
                float r = length(vUv - 0.5) * 2.0;
                float pulse = 0.75 + 0.25 * sin(uTime * 3.0);
                float a = exp(-r * r * 5.0) * pulse * (1.0 - smoothstep(0.85, 1.0, r));
                gl_FragColor = vec4(uColour * a * uOpacity, 1.0);
            }`})}const zo=new Map;function xE(n,e){const t=zo.get(n);if(!e)return t&&(t.layersTarget=0,t.beams.forEach(o=>{o.target=0})),!0;const i=J.get(n),s=i?.data.atmosphere;if(!s)return console.warn(`No atmosphere for "${n}" in data.json`),!1;const r=t??j2(i,s);r.spec=e,r.layersTarget=e.layers===!1?0:1;const a=e.light===!1?[]:e.light===void 0||e.light===!0?r.beams.map(o=>o.band):e.light;return r.beams.forEach(o=>{o.target=a.includes(o.band)?1:0}),zo.set(n,r),!0}const Om=["#66EEFA","#7DFFD3","#A6B5F8","#FFB4FF","#FFF488"],Z2={gamma:"#FFB4FF",xray:"#D2C4FF",euv:"#A68CFF",uv:"#66EEFA",visible:"#FFFFFF",infrared:"#FF9A7A",radio:"#7DFFD3"};function j2(n,e){const t=new Zt;t.matrixAutoUpdate=!1;const i=new Zt;He.add(t,i);const s=new ki(1,96,48),r=(e.layers??[]).map((f,p)=>{const g=f.colour??Om[p%Om.length],m=new Je(s,Y2(g));m.frustumCulled=!1,m.renderOrder=2,i.add(m);const A=co(f.name,g);return t.add(A),{...f,mesh:m,label:A}}),a=Math.max(Nm,...r.map(f=>f.top_km).filter(f=>f<=Nm*1.5)),o=[];for(let f=0;f<=a;f+=50)o.push({km:f,label:co(f?`${f} km`:"ground","#ffffff",{align:"right",weight:400})});const c=new Ze;c.setAttribute("position",new Ge(new Float32Array((2+o.length*2)*3),3));const l=new Po(c,new ws({color:16777215,transparent:!0,opacity:0,depthWrite:!1}));l.frustumCulled=!1,t.add(l),o.forEach(f=>t.add(f.label));const u=co("","#ffffff",{align:"right",weight:400});t.add(u);const h=new ys(1,1),d=(e.absorption??[]).map(f=>{const p=f.colour??Z2[f.band]??"#ffffff",g=new Je(new ys(1,1,1,24),K2(p,f.band==="visible")),m=new Je(h,J2(p));[g,m].forEach(E=>{E.frustumCulled=!1,E.matrixAutoUpdate=!1,E.renderOrder=3,t.add(E)});const A=co(f.label??f.band,p,{align:"center"});return t.add(A),{...f,beam:g,glow:m,label:A,opacity:0,target:0}});return{obj:n,params:e,group:t,shells:i,layers:r,beams:d,ticks:o,rulerLine:l,scaleLabel:u,top:a,layersOpacity:0,layersTarget:0,spec:{},builtExaggerate:null}}function $2(n,e){He.remove(e.group,e.shells),e.group.traverse(t=>{t.geometry?.dispose(),t.material?.map?.dispose(),t.material?.dispose()}),e.shells.traverse(t=>{t.material?.dispose()}),e.layers[0]?.mesh.geometry.dispose(),zo.delete(n)}const no=new x,ll=new x,Wh=new x,ul=new x,km=new xe,Gm=new xe,zm=new ot,eD=new x(0,0,1),Nn=new x,tD=new x;function Hm(n,e,t){return e>n?Math.min(e,n+t):Math.max(e,n-t)}function nD(n,e,t,i){const s=e/W2;if(n.layersOpacity=Hm(n.layersOpacity,n.layersTarget,s),n.beams.forEach(y=>{y.opacity=Hm(y.opacity,y.target,s)}),n.layersOpacity===0&&n.layersTarget===0&&n.beams.every(y=>y.opacity===0&&y.target===0)){$2(t,n);return}const{obj:r,spec:a}=n;r.mesh.updateWorldMatrix(!0,!1),r.mesh.getWorldPosition(no);const o=r.data.radius||1,c=a.exaggerate??q2,l=Vf(r)*c,u=y=>o+y*l;ll.subVectors(H.position,no).normalize(),ul.set(0,1,0).applyQuaternion(H.quaternion),Wh.crossVectors(ul,ll).normalize(),ul.crossVectors(ll,Wh),km.makeBasis(Wh,ul,ll).setPosition(no),n.group.matrix.copy(km),n.group.matrixWorldNeedsUpdate=!0,n.shells.position.copy(no);const h=(a.angle??45)*Math.PI/180,d=(a.span??40)*Math.PI/180,f=H.position.distanceTo(no),p=(y,v,R,b=0)=>zx(y,v,f,b,R),g=h-d/2-.05,m=window.innerHeight/(2*f*Math.tan(H.fov*Math.PI/360));let A=0,E=-1/0;n.layers.forEach(y=>{const v=Math.min(y.top_km,n.top*1.15);y.mesh.scale.setScalar(u(v)),y.mesh.visible=n.layersOpacity>0,y.mesh.material.uniforms.uOpacity.value=n.layersOpacity*.4,p(g,u((A+v)/2),y.label.position);const R=u((A+v)/2),b=(R-E)*m>mE*1.3;b&&(E=R),y.label.material.opacity=n.layersOpacity,y.label.visible=n.layersOpacity>0&&b,y.label.material.rotation=g-Math.PI/2,cl(y.label),A=v});const _=h+d/2+.06,S=n.rulerLine.geometry.attributes.position;let w=0;const C=()=>S.setXYZ(w++,Nn.x,Nn.y,0);if(p(_,u(0),Nn),C(),p(_,u(n.top),Nn),C(),n.ticks.forEach(y=>{p(_,u(y.km),Nn),C(),p(_+.012,u(y.km),Nn),C(),p(_+.016,u(y.km),y.label.position),y.label.material.rotation=_-Math.PI/2,y.label.center.set(0,.5),y.label.material.opacity=n.layersOpacity*.85,y.label.visible=n.layersOpacity>0,cl(y.label)}),S.needsUpdate=!0,n.rulerLine.material.opacity=n.layersOpacity*.6,n.rulerLine.visible=n.layersOpacity>0,n.builtExaggerate!==c){const y=co(`heights × ${c}`,"#ffffff",{weight:400});n.scaleLabel.material.map.dispose(),n.scaleLabel.material.map=y.material.map,n.scaleLabel.userData.aspect=y.userData.aspect,n.scaleLabel.material.needsUpdate=!0,n.builtExaggerate=c}p(_+.07,u(n.top*.5),n.scaleLabel.position),n.scaleLabel.center.set(.5,.5),n.scaleLabel.material.rotation=_-Math.PI/2+Math.PI/2,n.scaleLabel.material.opacity=n.layersOpacity*.7,n.scaleLabel.visible=n.layersOpacity>0,cl(n.scaleLabel);const B=n.beams.length,U=o*X2;n.beams.forEach((y,v)=>{const R=h+d/2-(B>1?d*v/(B-1):d/2),b=u(n.top),D=u(Math.max(0,y.stops_km)),N=y.opacity>0;if(y.beam.visible=y.glow.visible=y.label.visible=N,!N)return;const F=y.beam.geometry.attributes.position,Q=y.beam.geometry.attributes.uv;for(let X=0;X<F.count;X++)p(R,D+Q.getY(X)*(b-D),Nn,(Q.getX(X)-.5)*U),F.setXYZ(X,Nn.x,Nn.y,Nn.z);F.needsUpdate=!0,y.beam.matrix.identity(),y.beam.matrixWorldNeedsUpdate=!0,zm.setFromAxisAngle(eD,R-Math.PI/2),y.beam.material.uniforms.uOpacity.value=y.opacity,y.beam.material.uniforms.uTime.value=i,p(R,D,Nn),Gm.compose(Nn,zm,tD.set(U*7,U*7,1)),y.glow.matrix.copy(Gm),y.glow.matrixWorldNeedsUpdate=!0,y.glow.material.uniforms.uOpacity.value=y.opacity,y.glow.material.uniforms.uTime.value=i+v,p(R,b+o*.03,y.label.position),y.label.center.set(0,.5),y.label.material.rotation=R,y.label.material.opacity=y.opacity,cl(y.label)})}function iD(){[...zo.keys()].forEach(n=>xE(n,null))}function sD(n,e){for(const[t,i]of[...zo])nD(i,n,t,e)}const Vm=.8,rD=2.5,aD=30,Ho=new Map;let io=null;function oD(n){return new Mt({transparent:!0,depthWrite:!1,blending:xs,toneMapped:!1,side:kt,uniforms:{uOpacity:{value:0},uColour:{value:new Se(n)},uTime:{value:0}},vertexShader:`
            varying float vAlong;
            varying vec3 vNormal;
            varying vec3 vView;
            void main() {
                vAlong = -position.y;            // 0 at the craft, 1 at the far end
                vec4 view = modelViewMatrix * vec4(position, 1.0);
                vNormal = normalize(normalMatrix * normal);
                vView = normalize(-view.xyz);
                gl_Position = projectionMatrix * view;
            }`,fragmentShader:`
            uniform float uOpacity, uTime;
            uniform vec3 uColour;
            varying float vAlong;
            varying vec3 vNormal;
            varying vec3 vView;
            void main() {
                float rim = 0.25 + 0.75 * pow(1.0 - abs(dot(normalize(vNormal), normalize(vView))), 2.0);
                float fade = pow(1.0 - vAlong, 1.5) * smoothstep(0.0, 0.01, vAlong);
                float pulse = 0.8 + 0.2 * smoothstep(0.8, 1.0, fract(vAlong * 6.0 - uTime * 0.25));
                gl_FragColor = vec4(uColour * rim * fade * pulse * uOpacity * 0.5, 1.0);
            }`})}function _E(n,e){const t=Ho.get(n);if(!e)return t&&(t.target=0),io===n&&(Ml(null),io=null),!0;const i=J.get(e.from);if(!i)return console.warn(`Pointing "${n}": no object called "${e.from}"`),!1;const s=(e.cone_deg??rD)*Math.PI/180,r=new vf(Math.tan(s),1,48,1,!0).translate(0,-.5,0),a=t??{id:n,opacity:0};return a.mesh&&(He.remove(a.mesh),a.mesh.geometry.dispose(),a.mesh.material.dispose()),a.mesh=new Je(r,oD(e.colour??"#66EEFA")),a.mesh.frustumCulled=!1,a.mesh.renderOrder=2,a.mesh.visible=!1,He.add(a.mesh),a.obj=i,a.dir=vs({ra:e.ra,dec:e.dec??0}),a.target=e.opacity??1,Ho.set(n,a),e.image?(Ml({ra:e.ra,dec:e.dec??0,image:e.image,size_deg:e.size_deg}),io=n):io===n&&(Ml(null),io=null),!0}const cD=new x(0,-1,0),qh=new x;function lD(n,e){for(const t of[...Ho.values()]){if(t.opacity=t.target>t.opacity?Math.min(t.target,t.opacity+n/Vm):Math.max(t.target,t.opacity-n/Vm),t.opacity===0&&t.target===0){He.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),Ho.delete(t.id);continue}t.obj.mesh.updateWorldMatrix(!0,!1),t.obj.mesh.getWorldPosition(qh),t.mesh.position.copy(qh),t.mesh.quaternion.setFromUnitVectors(cD,t.dir),t.mesh.scale.setScalar(Math.max(1e-6,H.position.distanceTo(qh)*aD)),t.mesh.visible=t.obj.group.visible,t.mesh.material.uniforms.uOpacity.value=t.opacity,t.mesh.material.uniforms.uTime.value=e}}function uD(){[...Ho.keys()].forEach(n=>_E(n,null))}let Wm=0;const hD=window.devicePixelRatio,EE=Math.min(hD,1.25),so=[1,.85,.72],dD=13,fD=9,AD=40,pD=3e3,It={step:0,changedAt:0,lastFrame:0,gpu:[],intervals:[],timer:null};function gD(){const n=ke.getContext(),e=n.getExtension("EXT_disjoint_timer_query_webgl2");return e?{gl:n,ext:e,pending:[],query:null}:null}function mD(n){It.lastFrame&&n-It.lastFrame<250&&qm(It.intervals,n-It.lastFrame),It.lastFrame=n;const e=It.timer;if(!e)return;const{gl:t,ext:i}=e,s=t.getParameter(i.GPU_DISJOINT_EXT);for(;e.pending.length&&t.getQueryParameter(e.pending[0],t.QUERY_RESULT_AVAILABLE);){const r=e.pending.shift();s||qm(It.gpu,t.getQueryParameter(r,t.QUERY_RESULT)/1e6),t.deleteQuery(r)}e.pending.length<4&&(e.query=t.createQuery(),t.beginQuery(i.TIME_ELAPSED_EXT,e.query))}function xD(n){const e=It.timer;if(e&&e.query&&(e.gl.endQuery(e.ext.TIME_ELAPSED_EXT),e.pending.push(e.query),e.query=null),n-It.changedAt<pD)return;const t=s=>[...s].sort((r,a)=>r-a)[s.length>>1];let i=It.step;if(e){if(It.gpu.length<90)return;const s=t(It.gpu),r=It.step>0?(so[It.step-1]/so[It.step])**2:0;s>dD&&It.step<so.length-1?i++:r&&s*r<fD&&i--}else{if(It.intervals.length<90)return;t(It.intervals)>AD&&It.step<so.length-1&&i++}i!==It.step&&(It.step=i,It.changedAt=n,It.gpu.length=0,It.intervals.length=0,ke.setPixelRatio(EE*so[i]))}function qm(n,e){n.push(e),n.length>120&&n.shift()}const wi=new x,Xm=new x,_D=new ot,tf=new ot,nf=new x(0,1,0);function Ym(n,e){n.meshGroup.quaternion.copy(n.axis).multiply(tf.setFromAxisAngle(nf,e))}const ED=new ot,yD=new x(1,0,0);function vD(n,e,t){n.meshGroup.quaternion.copy(n.axis).multiply(tf.setFromAxisAngle(nf,t)).multiply(ED.setFromAxisAngle(yD,n.tumble.nutation)).multiply(tf.setFromAxisAngle(nf,e-t))}const yE=[];function MD(n){yE.push(n)}let Xh=null;function SD(){if(Xh?.length===J.size)return Xh;const n=[],e=new Set,t=i=>{if(!i||e.has(i))return;e.add(i);const s=i.data;[s.parent,s.lagrange?.body,s.trajectory?.waypoints?.at(-1)?.at].forEach(r=>t(J.get(r))),n.push(i)};return J.forEach(t),Xh=n}function vE(){requestAnimationFrame(vE);const n=C1.getDelta(),e=Math.min(n,eb);I1(e);const t=ur===null?e:0,i=Zn;CT(),i1(),An.setTime(An.getTime()+n*Bx*1e3);const s=Ar(An);if(JT(),Ss.length>0&&ou(),sR(e),Gf(),Uf.forEach(a=>{a.uniforms.uTime.value=i}),Wm++,Wm%10===0&&cR(),SD().forEach(a=>{const{group:o,meshGroup:c,data:l}=a;if(l.orbit_type==="landed")return;G1(a.orbitLine,s);let u;if(l.orbit_type==="trajectory"){const h=vb(a,s,o.position);iB(a,h)}else if(l.lagrange){const h=J.get(l.lagrange.body).group.position;wi.copy(h).normalize().multiplyScalar(l.lagrange.offset),o.position.copy(h).add(wi),a.mesh.rotation.set(0,Math.atan2(-h.z,h.x),0)}else if(l.orbit_type==="libration"){const h=J.get(l.parent);h&&(ix(l.orbit,s,wi).applyQuaternion(h.mesh.quaternion),o.position.copy(h.group.position).add(wi))}else if(l.orbit_type==="suborbital"){const h=J.get(l.parent);if(h){const d=h.data.radius||1,f=l.suborbital.duration||.05;let p=s;l.suborbital.progress!==void 0&&(p=l.suborbital.progress*f);const g=Dg(l.suborbital,d,p),m=Dg(l.suborbital,d,p+1e-4);g.applyEuler(h.meshGroup.rotation),m.applyEuler(h.meshGroup.rotation),o.position.set(h.group.position.x+g.x,h.group.position.y+g.y,h.group.position.z+g.z),wi.subVectors(m,g).normalize(),Xm.copy(o.position).add(wi),o.lookAt(Xm),c.rotation.z-=e*.5}}else if(u=$n(l.orbit,sx(l.orbit,s)),l.parent&&l.parent!=="Sun"){const h=J.get(l.parent);h&&o.position.set(h.group.position.x+u.x,h.group.position.y+u.y,h.group.position.z+u.z)}else o.position.set(u.x,u.y,u.z);if(!(!o.visible&&!l.isParent))if(l.rotation_mode==="utc"){wi.copy(o.position).negate().applyQuaternion(_D.copy(a.axis).invert());const h=Math.atan2(wi.x,wi.z),d=An.getUTCHours(),f=An.getUTCMinutes(),p=An.getUTCSeconds(),g=An.getUTCMilliseconds(),A=((d+f/60+p/3600+g/36e5)/24-.5)*Math.PI*2;Ym(a,h-Math.PI/2+A)}else if(l.rotation_mode==="locked"&&l.orbit)gb(c,l.orbit,s);else if(l.rot_period){const h=s/l.rot_period*Math.PI*2,d=(l.rot_offset||0)*(Math.PI/180);a.tumble?vD(a,h+d,h/a.tumble.precession+a.tumble.offset):Ym(a,h+d)}else l.type==="mission"&&l.orbit_type!=="suborbital"&&Q1(a,i,t,s)}),!k3(e,i))return;a1(),fB(),NB(e),wR(e),mR(e),d2(e),V2(e),sD(e,i),lD(e,i),$R(e);for(const a of yE)a(e);if(Ft.relative){K1(H.position,s);const a=a_(),o=a&&J.get(a.userData.name),c=o?.data.orbit_type==="landed"?o:D3(a)[0];c&&!nA()&&Pf(c)}sr&&sr.update(i,H,{strandsTime:ba.matches?0:i});const r=performance.now();mD(r),r2(),xD(r)}window.addEventListener("resize",()=>{H.aspect=window.innerWidth/window.innerHeight,H.updateProjectionMatrix(),ke.setSize(window.innerWidth,window.innerHeight),J.forEach(n=>{n.orbitLine&&n.orbitLine.material.resolution&&n.orbitLine.material.resolution.set(window.innerWidth,window.innerHeight)})});const Yh=new Sn,Km=new xe,ps=new x,Hs=new x,Kh=new x,Jm=new x;function ME(n){const e=n.mesh;let t=0,i=0,s=0;if(e.traverse(c=>{c.geometry&&(t++,i+=c.geometry.id,s=Math.imul(s,31)+c.geometry.id|0)}),!t)return null;const r=n.reticleSphereKey;if(r&&r.count===t&&r.sum===i&&r.mix===s)return n.reticleSphere;e.updateWorldMatrix(!0,!0),Km.copy(e.matrixWorld).invert();const a=new Sn;let o=!0;return e.traverse(c=>{c.geometry&&(c.geometry.boundingSphere||c.geometry.computeBoundingSphere(),Yh.copy(c.geometry.boundingSphere).applyMatrix4(c.matrixWorld).applyMatrix4(Km),o?(a.copy(Yh),o=!1):a.union(Yh))}),n.reticleSphereKey={count:t,sum:i,mix:s},n.reticleSphere=a,a}function CD(n){if(!n||!n.mesh||!mn(n.group))return null;n.mesh.updateWorldMatrix(!0,!1);const e=ME(n);if(!e)return null;Hs.copy(e.center).applyMatrix4(n.mesh.matrixWorld),n.mesh.getWorldScale(ps);const t=e.radius*Math.max(ps.x,ps.y,ps.z),i=H.position.distanceTo(Hs),s=i<=t;if(Jm.setFromMatrixColumn(H.matrixWorld,1),Kh.copy(Hs).addScaledVector(Jm,t).project(H),Hs.project(H),Hs.z>1)return null;const r=window.innerWidth,a=window.innerHeight,o=(Hs.x*.5+.5)*r,c=(-Hs.y*.5+.5)*a,l=(Kh.x*.5+.5)*r,u=(-Kh.y*.5+.5)*a;return{cx:o,cy:c,bodyR:s?1/0:Math.hypot(l-o,u-c),distance:i,w:r,h:a}}const ID=new Set(["planet","moon","asteroid","comet"]);function wD(n){const e=[];for(const t of n){if(!ID.has(t.data.type)||!t.mesh||!mn(t.group))continue;const i=ME(t);i&&(t.mesh.updateWorldMatrix(!0,!1),t.mesh.getWorldScale(ps),e.push({obj:t,centre:i.center.clone().applyMatrix4(t.mesh.matrixWorld),r:i.radius*Math.max(ps.x,ps.y,ps.z)*.999}))}return e}const Zm=new x,hl=new x,jm=new x;function bD(n,e){if(!n||!n.mesh)return null;n.mesh.getWorldPosition(Zm),hl.subVectors(Zm,H.position);const t=hl.lengthSq();if(!(t>0))return null;let i=null,s=1/0;for(const{obj:r,centre:a,r:o}of e){if(r===n)continue;const c=at.clamp(jm.subVectors(a,H.position).dot(hl)/t,0,1);c<1&&c<s&&jm.copy(H.position).addScaledVector(hl,c).distanceToSquared(a)<o*o&&(i=r,s=c)}return i}const sf=new $l,Jh=new Me;function TD(n){for(let e=n;e;e=e.parent){if(!e.visible)return!1;if(e===He)return!0}return!1}function BD(n){const e=[],t=i=>{i.visible&&(i.layers.test(sf.layers)&&i.raycast(sf,e),i.children.forEach(t))};return n.forEach(i=>{TD(i)&&t(i)}),e.sort((i,s)=>i.distance-s.distance)}function RD(n,e){Jh.x=n/window.innerWidth*2-1,Jh.y=-(e/window.innerHeight)*2+1,sf.setFromCamera(Jh,H);const t=BD(Rd);if(!t.length)return null;let i=t[0].object,s=0;for(;i&&!i.userData.name&&s<10;)i=i.parent,s++;return i&&i.userData&&i.userData.name?i.userData.name:null}const DD="#66EEFA";let SE=new Set,CE=new Set;function LD({hovered:n=[],shown:e=[]}={}){SE=new Set(n),CE=new Set(e),fu()}function fu(){let n=null;J.forEach(e=>{e.mesh===le&&e.data.type==="reference_point"&&(n=e.data.name)}),J.forEach(e=>{if(e.orbitLine&&e.orbitLine.material){const t=SE.has(e.data.name),i=le===e.mesh||n!==null&&e.data.parent===n,s=CE.has(e.data.name),r=e.orbitLine.material,a=e.orbitLine.userData.baseColor||"#888888",o=e.orbitLine.userData.baseOpacity||.35;t||i||s?(r.opacity=.95,r.color.set(DD)):(r.opacity=o,r.color.set(a))}})}cu("select",fu);cu("deselect",fu);cu("orbit-change",fu);const PD=4,UD=.04,Xl=new $l,Zh=new x,$m=new x,e0=new Me,dl=new x,t0=new Map;function cA(n){return(n.data.built?.modelSize??n.data.model_size??1)/2}function IE(n){return n.detailRoot?.children.find(e=>e.visible)??null}function FD(n,e,t){return!n?.detailRoot||!Array.isArray(e)?null:(n.mesh.updateWorldMatrix(!0,!1),t.set(e[0]||0,e[1]||0,e[2]||0).multiplyScalar(cA(n)).applyMatrix4(n.mesh.matrixWorld))}function ND(n,e,t){const i=`${n.data.name}|${e.join(",")}`,s=ke.info.render.frame,r=t0.get(i);if(r&&s-r.frame<PD&&s>=r.frame)return r.hidden;const a=IE(n);let o=!1;if(a){Zh.subVectors(t,H.position);const c=Zh.length();Xl.set(H.position,Zh.normalize());const l=au(Xl,a);n.mesh.getWorldScale($m);const u=UD*2*cA(n)*$m.x;o=!!l&&l.distance<c-u}return t0.set(i,{frame:s,hidden:o}),o}function QD(n,e,t){const i=J.get(n),s=i&&IE(i);if(!s||!mn(i.group))return null;H.updateMatrixWorld(),e0.set(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),Xl.setFromCamera(e0,H);const r=au(Xl,s);return r?(i.mesh.updateWorldMatrix(!0,!1),dl.copy(r.point).applyMatrix4(i.mesh.matrixWorld.clone().invert()).divideScalar(cA(i)),[dl.x,dl.y,dl.z].map(a=>Math.round(a*1e3)/1e3)):null}Rf.onProgress=function(n,e,t){nn("progress",{progress:e/t})};let lA=!1;const fl={frame:-1,spheres:[]};function OD(){const n=ke.info.render.frame;return fl.frame!==n&&(fl.frame=n,fl.spheres=wD(J.values())),fl.spheres}const Tn={frame:-1,view:new xe,lens:new xe,w:0,h:0,places:new Map,hiders:new Map};function wE(){const n=ke.info.render.frame;return(Tn.frame!==n||!Tn.view.equals(H.matrixWorld)||!Tn.lens.equals(H.projectionMatrix)||Tn.w!==window.innerWidth||Tn.h!==window.innerHeight)&&(Tn.frame=n,Tn.view.copy(H.matrixWorld),Tn.lens.copy(H.projectionMatrix),Tn.w=window.innerWidth,Tn.h=window.innerHeight,Tn.places.clear(),Tn.hiders.clear()),Tn}function n0(n){const{hiders:e}=wE();return e.has(n)||e.set(n,bD(J.get(n),OD())),e.get(n)}Rf.onLoad=()=>{lA&&kD()};let i0=!1;function kD(){if(i0){r0();return}i0=!0,performance.mark("warmup-start");const n=hx(He);He.background&&He.background.isTexture&&n.add(He.background),n.forEach(t=>{try{ke.initTexture(t)}catch(i){console.warn("Texture upload failed",i)}});const e=5e3;Promise.race([Promise.all([ke.compileAsync(He,H),fx(He)]).then(()=>performance.mark("warmup-shaders-ready")).catch(t=>console.warn("Shader warm-up failed",t)),new Promise(t=>setTimeout(t,e))]).then(r0)}let s0=!1;function r0(){s0||(s0=!0,performance.mark("scene-ready"),bE(),nn("ready"))}function bE(){KR(),h1()}function XD({canvas:n,dataUrl:e="./data.json",options:t={}}={}){for(const s of Object.keys(pa))s in t&&(pa[s]=t[s]);return Qb(n),ke.setPixelRatio(EE),ke.setSize(window.innerWidth,window.innerHeight),ke.shadowMap.enabled=!0,ke.shadowMap.type=rf,ke.toneMapping=l0,ke.toneMappingExposure=1.2,ke.debug.checkShaderErrors=!1,It.timer=gD(),iE.detectSupport(ke),nE.forEach(s=>fetch(`textures/milky_way_${s}.ktx2`).catch(()=>{})),j3(),{canvas:ke.domElement,start(){HD(e),vE()},on:cu,onFrame:MD,flyTo:U3,showOverview:l_,deselect:c_,hurry(){iR(),jf()},isChangingScale:nA,getDate:b1,setDate:T1,setTimeRate:B1,holdOrbits(s,r){xb(s,r),Ox()},getObject:o0,listObjects:TE,projectBody(s){H.updateMatrixWorld();const{places:r}=wE();if(r.has(s))return r.get(s);const a=CD(J.get(s)),o=a&&{x:a.cx,y:a.cy,radius:a.bodyR,distance:a.distance};return r.set(s,o),o},projectPoint(s,{lat:r=0,lon:a=0,alt_km:o=0}={}){const c=J.get(s);if(!c||!mn(c.group))return null;H.updateMatrixWorld(),BB(c,r,a,o,on,a0);const l=a0.dot(GD.subVectors(H.position,on))>0;return on.project(H),on.z>1?null:{x:(on.x*.5+.5)*window.innerWidth,y:(-on.y*.5+.5)*window.innerHeight,facing:l}},projectPart(s,r){const a=J.get(s);if(!a||!mn(a.group)||(H.updateMatrixWorld(),!FD(a,r,on)))return null;const o=ND(a,r,on);return on.project(H),on.z>1?null:{x:(on.x*.5+.5)*window.innerWidth,y:(-on.y*.5+.5)*window.innerHeight,hidden:o}},pickPart:QD,projectSky(s,r=0){return H.updateMatrixWorld(),on.copy(vs({ra:s,dec:r})).multiplyScalar(H.far*.1).add(H.position).project(H),on.z>1?null:{x:(on.x*.5+.5)*window.innerWidth,y:(-on.y*.5+.5)*window.innerHeight}},setPointing:_E,clearPointings:uD,setSkySurvey:ZR,setSkyPatch:Ml,addLayer:u2,removeLayer:sA,clearLayers:h2,setSurfaceOverlay:uE,setMagnetosphere:AE,addCme:O2,removeCme:aA,cmeArrival:z2,clearSpaceWeather:H2,getStormLevel:gE,setAtmosphere:xE,clearAtmospheres:iD,setSunCycle(s){if(!sr)return;if(!s){sr.setCycle(null);return}const{map:r,at:a,look:o,gain:c}=s;sr.setCycle({map:r?zD(r):void 0,u:a,gain:c,look:o===void 0?void 0:o==="magnetogram"?1:0})},isHidden(s){return!!n0(s)},hiddenBehind(s){return n0(s)?.data.name??null},getSelection(){return le?le.userData:null},getTime(){return An.getTime()},getSystem:lr,getOrbitColor(s){return Gd(o0(s))},pick:RD,setOrbitHighlights:LD,setScaleMode:VD,getScaleMode:()=>Li,setMotionPaused(s){w1(s?Zn:null)},setViewInsets:UB,setFlightPace:E3,setUserControl:F3,nudgeView:u_,setSceneVisible:GR,loadDeferred:bE}}const on=new x,a0=new x,GD=new x,jh=new Map;function zD(n){if(!jh.has(n)){const e=qo.load(Ms(n),void 0,void 0,()=>console.warn(`Solar cycle map didn't load: ${n}`));e.wrapS=e.wrapT=kn,jh.set(n,e)}return jh.get(n)}async function HD(n){try{const e=await fetch(n);if(!e.ok)throw new Error(`data.json responded ${e.status}`);const t=await e.json(),i=t.filter(r=>r.type==="credits"),s=WD(t.filter(r=>r.type!=="credits"),pa.edition);s.forEach(qD),ru(s),nB(s),ou(),nn("built",{entries:[...s,...i]}),lA=!0,performance.mark("system-ready")}catch(e){console.error("Loading System Failed:",e),nn("error",{error:e})}}function VD(n,{animate:e=!0}={}){if(!Mb.includes(n))throw new Error(`Unknown scale mode: ${n}`);if(!lA)return;if(nA()||e&&!ba.matches){nR(n);return}if(n===Li)return;const t=TE();ru(t,n),sB(),new Set(t.filter(i=>i.orbit_type==="landed").map(i=>i.parent)).forEach(i=>{const s=J.get(i);s&&Xo(s)}),z3(),nn("scale-mode",{mode:n})}function TE(){return[...J.values()].map(n=>n.data)}function o0(n){return J.get(n)?.data??null}function WD(n,e){if(!e)return n;const t=new Map(n.filter(s=>s.editions?.includes(e)).map(s=>[s.name,s])),i=s=>[s.parent,s.menu_parent,s.system].filter(Boolean);for(let s=!0;s;){s=!1;for(const[r,a]of t){const o=i(a).find(c=>!t.has(c));o&&(console.warn(`"${r}" is in the ${e} edition, but "${o}" isn't; left out`),t.delete(r),s=!0)}}return n.filter(s=>t.has(s.name)).map(s=>{const r=s.in_edition?.[e];if(!r)return s;const a={...s};return Object.entries(r).forEach(([o,c])=>{a[o]=c&&typeof c=="object"&&!Array.isArray(c)?{...s[o],...c}:c}),a})}function qD(n){if(!Array.isArray(n.status_timeline))return;const e=new Date().toISOString().slice(0,10);for(const t of n.status_timeline)t.from&&t.status&&t.from<=e&&(n.status=t.status)}export{XD as c};
