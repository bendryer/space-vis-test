const ta={ROTATE:0,DOLLY:1,PAN:2},Zr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sE=0,DA=1,rE=2,Ef=1,aE=2,li=3,qn=0,Vt=1,Gt=2,Hi=0,na=1,Ss=2,LA=3,PA=4,oE=5,Ys=100,cE=101,lE=102,uE=103,hE=104,dE=200,fE=201,AE=202,pE=203,md=204,gd=205,mE=206,gE=207,xE=208,_E=209,yE=210,EE=211,vE=212,ME=213,SE=214,xd=0,_d=1,yd=2,da=3,Ed=4,vd=5,Md=6,Sd=7,b0=0,CE=1,IE=2,vs=0,wE=1,T0=2,bE=3,TE=4,BE=5,RE=6,DE=7,UA="attached",LE="detached",B0=300,hr=301,fa=302,Cd=303,Id=304,su=306,Cs=1e3,Vn=1001,Pl=1002,rn=1003,vf=1004,uo=1005,wt=1006,Sl=1007,Zn=1008,Je=1009,R0=1010,D0=1011,wo=1012,Mf=1013,dr=1014,hn=1015,Un=1016,Sf=1017,Cf=1018,bo=1020,ru=35902,au=35899,L0=1021,To=1022,Jt=1023,Bo=1026,Ro=1027,As=1028,If=1029,ps=1030,wf=1031,bf=1033,ia=33776,sr=33777,sa=33778,po=33779,Ul=35840,wd=35841,Aa=35842,Do=35843,Fl=36196,Lo=37492,Po=37496,rr=37808,bd=37809,Td=37810,Bd=37811,ra=37812,Rd=37813,Dd=37814,Ld=37815,Pd=37816,Ud=37817,Fd=37818,Nd=37819,Qd=37820,Od=37821,pa=36492,kd=36494,Nl=36495,Ql=36283,Ol=36284,kl=36285,Gl=36286,Uo=2300,Fo=2301,wu=2302,FA=2400,NA=2401,QA=2402,PE=2500,UE=0,P0=1,Gd=2,FE=3200,U0=3201,F0=0,NE=1,fi="",ft="srgb",on="srgb-linear",zl="linear",_t="srgb",vr=7680,OA=519,QE=512,OE=513,kE=514,N0=515,GE=516,zE=517,HE=518,VE=519,zd=35044,kA="300 es",pi=2e3,Hl=2001;function Q0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function No(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function WE(){const n=No("canvas");return n.style.display="block",n}const GA={};function Vl(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ie(...n){const e="THREE."+n.shift();console.warn(e,...n)}function je(...n){const e="THREE."+n.shift();console.error(e,...n)}function Qo(...n){const e=n.join(" ");e in GA||(GA[e]=!0,Ie(...n))}function qE(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}class yr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zA=1234567;const mo=Math.PI/180,ma=180/Math.PI;function $n(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function Oe(n,e,t){return Math.max(e,Math.min(t,n))}function Tf(n,e){return(n%e+e)%e}function XE(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function YE(n,e,t){return n!==e?(t-n)/(e-n):0}function go(n,e,t){return(1-t)*n+t*e}function KE(n,e,t,i){return go(n,e,1-Math.exp(-t*i))}function JE(n,e=1){return e-Math.abs(Tf(n,e*2)-e)}function jE(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ZE(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function $E(n,e){return n+Math.floor(Math.random()*(e-n+1))}function ev(n,e){return n+Math.random()*(e-n)}function tv(n){return n*(.5-Math.random())}function nv(n){n!==void 0&&(zA=n);let e=zA+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function iv(n){return n*mo}function sv(n){return n*ma}function rv(n){return(n&n-1)===0&&n!==0}function av(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ov(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function cv(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),h=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),A=a((i-e)/2);switch(s){case"XYX":n.set(o*u,l*h,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*A,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*A,o*c);break;case"ZYZ":n.set(l*A,l*f,o*u,o*c);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function jn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function pt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const et={DEG2RAD:mo,RAD2DEG:ma,generateUUID:$n,clamp:Oe,euclideanModulo:Tf,mapLinear:XE,inverseLerp:YE,lerp:go,damp:KE,pingpong:JE,smoothstep:jE,smootherstep:ZE,randInt:$E,randFloat:ev,randFloatSpread:tv,seededRandom:nv,degToRad:iv,radToDeg:sv,isPowerOfTwo:rv,ceilPowerOfTwo:av,floorPowerOfTwo:ov,setQuaternionFromProperEuler:cv,normalize:pt,denormalize:jn};class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Oe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Oe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],d=r[a+0],f=r[a+1],A=r[a+2],g=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=A,e[t+3]=g;return}if(h!==g||l!==d||c!==f||u!==A){let m=l*d+c*f+u*A+h*g;m<0&&(d=-d,f=-f,A=-A,g=-g,m=-m);let p=1-o;if(m<.9995){const E=Math.acos(m),_=Math.sin(E);p=Math.sin(p*E)/_,o=Math.sin(o*E)/_,l=l*p+d*o,c=c*p+f*o,u=u*p+A*o,h=h*p+g*o}else{l=l*p+d*o,c=c*p+f*o,u=u*p+A*o,h=h*p+g*o;const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],d=r[a+1],f=r[a+2],A=r[a+3];return e[t]=o*A+u*h+l*f-c*d,e[t+1]=l*A+u*d+c*h-o*f,e[t+2]=c*A+u*f+o*d-l*h,e[t+3]=u*A-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),d=l(i/2),f=l(s/2),A=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*A,this._y=c*f*h-d*u*A,this._z=c*u*A+d*f*h,this._w=c*u*h-d*f*A;break;case"YXZ":this._x=d*u*h+c*f*A,this._y=c*f*h-d*u*A,this._z=c*u*A-d*f*h,this._w=c*u*h+d*f*A;break;case"ZXY":this._x=d*u*h-c*f*A,this._y=c*f*h+d*u*A,this._z=c*u*A+d*f*h,this._w=c*u*h-d*f*A;break;case"ZYX":this._x=d*u*h-c*f*A,this._y=c*f*h+d*u*A,this._z=c*u*A-d*f*h,this._w=c*u*h+d*f*A;break;case"YZX":this._x=d*u*h+c*f*A,this._y=c*f*h+d*u*A,this._z=c*u*A-d*f*h,this._w=c*u*h-d*f*A;break;case"XZY":this._x=d*u*h-c*f*A,this._y=c*f*h-d*u*A,this._z=c*u*A+d*f*h,this._w=c*u*h+d*f*A;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Oe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class x{constructor(e=0,t=0,i=0){x.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(HA.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(HA.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Oe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bu.copy(this).projectOnVector(e),this.sub(bu)}reflect(e){return this.sub(bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Oe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bu=new x,HA=new ct;class Ne{constructor(e,t,i,s,r,a,o,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],A=i[8],g=s[0],m=s[3],p=s[6],E=s[1],_=s[4],S=s[7],w=s[2],C=s[5],B=s[8];return r[0]=a*g+o*E+l*w,r[3]=a*m+o*_+l*C,r[6]=a*p+o*S+l*B,r[1]=c*g+u*E+h*w,r[4]=c*m+u*_+h*C,r[7]=c*p+u*S+h*B,r[2]=d*g+f*E+A*w,r[5]=d*m+f*_+A*C,r[8]=d*p+f*S+A*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,A=t*h+i*d+s*f;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/A;return e[0]=h*g,e[1]=(s*c-u*i)*g,e[2]=(o*i-s*a)*g,e[3]=d*g,e[4]=(u*t-s*l)*g,e[5]=(s*r-o*t)*g,e[6]=f*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Tu.makeScale(e,t)),this}rotate(e){return this.premultiply(Tu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tu=new Ne,VA=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),WA=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lv(){const n={enabled:!0,workingColorSpace:on,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_t&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(s.r=aa(s.r),s.g=aa(s.g),s.b=aa(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fi?zl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Qo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Qo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[on]:{primaries:e,whitePoint:i,transfer:zl,toXYZ:VA,fromXYZ:WA,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ft},outputColorSpaceConfig:{drawingBufferColorSpace:ft}},[ft]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:VA,fromXYZ:WA,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ft}}}),n}const at=lv();function Vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function aa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Mr;class uv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Mr===void 0&&(Mr=No("canvas")),Mr.width=e.width,Mr.height=e.height;const s=Mr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Mr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=No("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Vi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vi(t[i]/255)*255):t[i]=Vi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hv=0;class Bf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Bu(s[a].image)):r.push(Bu(s[a]))}else r=Bu(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Bu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?uv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let dv=0;const Ru=new x;class zt extends yr{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,i=Vn,s=Vn,r=wt,a=Zn,o=Jt,l=Je,c=zt.DEFAULT_ANISOTROPY,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=$n(),this.name="",this.source=new Bf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ru).x}get height(){return this.source.getSize(Ru).y}get depth(){return this.source.getSize(Ru).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==B0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cs:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case Pl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cs:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case Pl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=B0;zt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,i=0,s=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],A=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(A-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(A+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,S=(f+1)/2,w=(p+1)/2,C=(u+d)/4,B=(h+g)/4,P=(A+m)/4;return _>S&&_>w?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=C/i,r=B/i):S>w?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=C/s,r=P/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=B/r,s=P/r),this.set(i,s,r,t),this}let E=Math.sqrt((m-A)*(m-A)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-A)/E,this.y=(h-g)/E,this.z=(d-u)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this.w=Oe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this.w=Oe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Oe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fv extends yr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new zt(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Bf(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends fv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class O0 extends zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class k0 extends zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tn{constructor(e=new x(1/0,1/0,1/0),t=new x(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yn):Yn.fromBufferAttribute(r,a),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rc.copy(i.boundingBox)),rc.applyMatrix4(e.matrixWorld),this.union(rc)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oa),ac.subVectors(this.max,Oa),Sr.subVectors(e.a,Oa),Cr.subVectors(e.b,Oa),Ir.subVectors(e.c,Oa),ji.subVectors(Cr,Sr),Zi.subVectors(Ir,Cr),Us.subVectors(Sr,Ir);let t=[0,-ji.z,ji.y,0,-Zi.z,Zi.y,0,-Us.z,Us.y,ji.z,0,-ji.x,Zi.z,0,-Zi.x,Us.z,0,-Us.x,-ji.y,ji.x,0,-Zi.y,Zi.x,0,-Us.y,Us.x,0];return!Du(t,Sr,Cr,Ir,ac)||(t=[1,0,0,0,1,0,0,0,1],!Du(t,Sr,Cr,Ir,ac))?!1:(oc.crossVectors(ji,Zi),t=[oc.x,oc.y,oc.z],Du(t,Sr,Cr,Ir,ac))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ci=[new x,new x,new x,new x,new x,new x,new x,new x],Yn=new x,rc=new Tn,Sr=new x,Cr=new x,Ir=new x,ji=new x,Zi=new x,Us=new x,Oa=new x,ac=new x,oc=new x,Fs=new x;function Du(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Fs.fromArray(n,r);const o=s.x*Math.abs(Fs.x)+s.y*Math.abs(Fs.y)+s.z*Math.abs(Fs.z),l=e.dot(Fs),c=t.dot(Fs),u=i.dot(Fs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Av=new Tn,ka=new x,Lu=new x;class dn{constructor(e=new x,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Av.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ka.subVectors(e,this.center);const t=ka.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ka,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ka.copy(e.center).add(Lu)),this.expandByPoint(ka.copy(e.center).sub(Lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ii=new x,Pu=new x,cc=new x,$i=new x,Uu=new x,lc=new x,Fu=new x;class Bs{constructor(e=new x,t=new x(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Pu.copy(e).add(t).multiplyScalar(.5),cc.copy(t).sub(e).normalize(),$i.copy(this.origin).sub(Pu);const r=e.distanceTo(t)*.5,a=-this.direction.dot(cc),o=$i.dot(this.direction),l=-$i.dot(cc),c=$i.lengthSq(),u=Math.abs(1-a*a);let h,d,f,A;if(u>0)if(h=a*l-o,d=a*o-l,A=r*u,h>=0)if(d>=-A)if(d<=A){const g=1/u;h*=g,d*=g,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-A?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=A?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Pu).addScaledVector(cc,d),f}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);const i=Ii.dot(this.direction),s=Ii.dot(Ii)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,i,s,r){Uu.subVectors(t,e),lc.subVectors(i,e),Fu.crossVectors(Uu,lc);let a=this.direction.dot(Fu),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$i.subVectors(this.origin,e);const l=o*this.direction.dot(lc.crossVectors($i,lc));if(l<0)return null;const c=o*this.direction.dot(Uu.cross($i));if(c<0||l+c>a)return null;const u=-o*$i.dot(Fu);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ge{constructor(e,t,i,s,r,a,o,l,c,u,h,d,f,A,g,m){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,h,d,f,A,g,m)}set(e,t,i,s,r,a,o,l,c,u,h,d,f,A,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=A,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/wr.setFromMatrixColumn(e,0).length(),r=1/wr.setFromMatrixColumn(e,1).length(),a=1/wr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,f=a*h,A=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+A*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=A+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,A=c*u,g=c*h;t[0]=d+g*o,t[4]=A*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-A,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,A=c*u,g=c*h;t[0]=d-g*o,t[4]=-a*h,t[8]=A+f*o,t[1]=f+A*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,A=o*u,g=o*h;t[0]=l*u,t[4]=A*c-f,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=f*c-A,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,A=o*l,g=o*c;t[0]=l*u,t[4]=g-d*h,t[8]=A*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+A,t[10]=d-g*h}else if(e.order==="XZY"){const d=a*l,f=a*c,A=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=a*u,t[9]=f*h-A,t[2]=A*h-f,t[6]=o*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pv,e,mv)}lookAt(e,t,i){const s=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),es.crossVectors(i,Dn),es.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),es.crossVectors(i,Dn)),es.normalize(),uc.crossVectors(Dn,es),s[0]=es.x,s[4]=uc.x,s[8]=Dn.x,s[1]=es.y,s[5]=uc.y,s[9]=Dn.y,s[2]=es.z,s[6]=uc.z,s[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],A=i[2],g=i[6],m=i[10],p=i[14],E=i[3],_=i[7],S=i[11],w=i[15],C=s[0],B=s[4],P=s[8],v=s[12],y=s[1],b=s[5],R=s[9],U=s[13],Q=s[2],F=s[6],k=s[10],X=s[14],z=s[3],te=s[7],ie=s[11],ee=s[15];return r[0]=a*C+o*y+l*Q+c*z,r[4]=a*B+o*b+l*F+c*te,r[8]=a*P+o*R+l*k+c*ie,r[12]=a*v+o*U+l*X+c*ee,r[1]=u*C+h*y+d*Q+f*z,r[5]=u*B+h*b+d*F+f*te,r[9]=u*P+h*R+d*k+f*ie,r[13]=u*v+h*U+d*X+f*ee,r[2]=A*C+g*y+m*Q+p*z,r[6]=A*B+g*b+m*F+p*te,r[10]=A*P+g*R+m*k+p*ie,r[14]=A*v+g*U+m*X+p*ee,r[3]=E*C+_*y+S*Q+w*z,r[7]=E*B+_*b+S*F+w*te,r[11]=E*P+_*R+S*k+w*ie,r[15]=E*v+_*U+S*X+w*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],A=e[3],g=e[7],m=e[11],p=e[15];return A*(+r*l*h-s*c*h-r*o*d+i*c*d+s*o*f-i*l*f)+g*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*u-r*l*u)+m*(+t*c*h-t*o*f-r*a*h+i*a*f+r*o*u-i*c*u)+p*(-s*o*u-t*l*h+t*o*d+s*a*h-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],A=e[12],g=e[13],m=e[14],p=e[15],E=h*m*c-g*d*c+g*l*f-o*m*f-h*l*p+o*d*p,_=A*d*c-u*m*c-A*l*f+a*m*f+u*l*p-a*d*p,S=u*g*c-A*h*c+A*o*f-a*g*f-u*o*p+a*h*p,w=A*h*l-u*g*l-A*o*d+a*g*d+u*o*m-a*h*m,C=t*E+i*_+s*S+r*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/C;return e[0]=E*B,e[1]=(g*d*r-h*m*r-g*s*f+i*m*f+h*s*p-i*d*p)*B,e[2]=(o*m*r-g*l*r+g*s*c-i*m*c-o*s*p+i*l*p)*B,e[3]=(h*l*r-o*d*r-h*s*c+i*d*c+o*s*f-i*l*f)*B,e[4]=_*B,e[5]=(u*m*r-A*d*r+A*s*f-t*m*f-u*s*p+t*d*p)*B,e[6]=(A*l*r-a*m*r-A*s*c+t*m*c+a*s*p-t*l*p)*B,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*f+t*l*f)*B,e[8]=S*B,e[9]=(A*h*r-u*g*r-A*i*f+t*g*f+u*i*p-t*h*p)*B,e[10]=(a*g*r-A*o*r+A*i*c-t*g*c-a*i*p+t*o*p)*B,e[11]=(u*o*r-a*h*r-u*i*c+t*h*c+a*i*f-t*o*f)*B,e[12]=w*B,e[13]=(u*g*s-A*h*s+A*i*d-t*g*d-u*i*m+t*h*m)*B,e[14]=(A*o*s-a*g*s-A*i*l+t*g*l+a*i*m-t*o*m)*B,e[15]=(a*h*s-u*o*s+u*i*l-t*h*l-a*i*d+t*o*d)*B,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,A=r*h,g=a*u,m=a*h,p=o*h,E=l*c,_=l*u,S=l*h,w=i.x,C=i.y,B=i.z;return s[0]=(1-(g+p))*w,s[1]=(f+S)*w,s[2]=(A-_)*w,s[3]=0,s[4]=(f-S)*C,s[5]=(1-(d+p))*C,s[6]=(m+E)*C,s[7]=0,s[8]=(A+_)*B,s[9]=(m-E)*B,s[10]=(1-(d+g))*B,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=wr.set(s[0],s[1],s[2]).length();const a=wr.set(s[4],s[5],s[6]).length(),o=wr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Kn.copy(this);const c=1/r,u=1/a,h=1/o;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=u,Kn.elements[5]*=u,Kn.elements[6]*=u,Kn.elements[8]*=h,Kn.elements[9]*=h,Kn.elements[10]*=h,t.setFromRotationMatrix(Kn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=pi,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let A,g;if(l)A=r/(a-r),g=a*r/(a-r);else if(o===pi)A=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Hl)A=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=A,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=pi,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s);let A,g;if(l)A=1/(a-r),g=a/(a-r);else if(o===pi)A=-2/(a-r),g=-(a+r)/(a-r);else if(o===Hl)A=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=A,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const wr=new x,Kn=new ge,pv=new x(0,0,0),mv=new x(1,1,1),es=new x,uc=new x,Dn=new x,qA=new ge,XA=new ct;class yi{constructor(e=0,t=0,i=0,s=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return qA.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qA,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return XA.setFromEuler(this),this.setFromQuaternion(XA,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class Rf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gv=0;const YA=new x,br=new ct,wi=new ge,hc=new x,Ga=new x,xv=new x,_v=new ct,KA=new x(1,0,0),JA=new x(0,1,0),jA=new x(0,0,1),ZA={type:"added"},yv={type:"removed"},Tr={type:"childadded",child:null},Nu={type:"childremoved",child:null};class bt extends yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new x,t=new yi,i=new ct,s=new x(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new Ne}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(KA,e)}rotateY(e){return this.rotateOnAxis(JA,e)}rotateZ(e){return this.rotateOnAxis(jA,e)}translateOnAxis(e,t){return YA.copy(e).applyQuaternion(this.quaternion),this.position.add(YA.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(KA,e)}translateY(e){return this.translateOnAxis(JA,e)}translateZ(e){return this.translateOnAxis(jA,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?hc.copy(e):hc.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Ga,hc,this.up):wi.lookAt(hc,Ga,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),br.setFromRotationMatrix(wi),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ZA),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yv),Nu.child=e,this.dispatchEvent(Nu),Nu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ZA),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,e,xv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,_v,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),A=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),A.length>0&&(i.nodes=A)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}bt.DEFAULT_UP=new x(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new x,bi=new x,Qu=new x,Ti=new x,Br=new x,Rr=new x,$A=new x,Ou=new x,ku=new x,Gu=new x,zu=new ot,Hu=new ot,Vu=new ot;class Fn{constructor(e=new x,t=new x,i=new x){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Jn.subVectors(e,t),s.cross(Jn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Jn.subVectors(s,t),bi.subVectors(i,t),Qu.subVectors(e,t);const a=Jn.dot(Jn),o=Jn.dot(bi),l=Jn.dot(Qu),c=bi.dot(bi),u=bi.dot(Qu),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,A=(a*u-o*l)*d;return r.set(1-f-A,A,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(a,Ti.y),l.addScaledVector(o,Ti.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return zu.setScalar(0),Hu.setScalar(0),Vu.setScalar(0),zu.fromBufferAttribute(e,t),Hu.fromBufferAttribute(e,i),Vu.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(zu,r.x),a.addScaledVector(Hu,r.y),a.addScaledVector(Vu,r.z),a}static isFrontFacing(e,t,i,s){return Jn.subVectors(i,t),bi.subVectors(e,t),Jn.cross(bi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),Jn.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Fn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Br.subVectors(s,i),Rr.subVectors(r,i),Ou.subVectors(e,i);const l=Br.dot(Ou),c=Rr.dot(Ou);if(l<=0&&c<=0)return t.copy(i);ku.subVectors(e,s);const u=Br.dot(ku),h=Rr.dot(ku);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Br,a);Gu.subVectors(e,r);const f=Br.dot(Gu),A=Rr.dot(Gu);if(A>=0&&f<=A)return t.copy(r);const g=f*c-l*A;if(g<=0&&c>=0&&A<=0)return o=c/(c-A),t.copy(i).addScaledVector(Rr,o);const m=u*A-f*h;if(m<=0&&h-u>=0&&f-A>=0)return $A.subVectors(r,s),o=(h-u)/(h-u+(f-A)),t.copy(s).addScaledVector($A,o);const p=1/(m+g+d);return a=g*p,o=d*p,t.copy(i).addScaledVector(Br,a).addScaledVector(Rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const G0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},dc={h:0,s:0,l:0};function Wu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Se{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=at.workingColorSpace){if(e=Tf(e,1),t=Oe(t,0,1),i=Oe(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Wu(a,r,e+1/3),this.g=Wu(a,r,e),this.b=Wu(a,r,e-1/3)}return at.colorSpaceToWorking(this,s),this}setStyle(e,t=ft){function i(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){const i=G0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return at.workingToColorSpace(ln.copy(this),e),Math.round(Oe(ln.r*255,0,255))*65536+Math.round(Oe(ln.g*255,0,255))*256+Math.round(Oe(ln.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(ln.copy(this),t);const i=ln.r,s=ln.g,r=ln.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=ft){at.workingToColorSpace(ln.copy(this),e);const t=ln.r,i=ln.g,s=ln.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+t,ts.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ts),e.getHSL(dc);const i=go(ts.h,dc.h,t),s=go(ts.s,dc.s,t),r=go(ts.l,dc.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new Se;Se.NAMES=G0;let Ev=0;class ei extends yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=na,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=md,this.blendDst=gd,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=OA,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==na&&(i.blending=this.blending),this.side!==qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==md&&(i.blendSrc=this.blendSrc),this.blendDst!==gd&&(i.blendDst=this.blendDst),this.blendEquation!==Ys&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==da&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==OA&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mi extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=b0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new x,fc=new Me;let vv=0;class ze{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=zd,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fc.fromBufferAttribute(this,t),fc.applyMatrix3(e),this.setXY(t,fc.x,fc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=jn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zd&&(e.usage=this.usage),e}}class z0 extends ze{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class H0 extends ze{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Dt extends ze{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Mv=0;const Qn=new ge,qu=new bt,Dr=new x,Ln=new Tn,za=new Tn,Yt=new x;class Ke extends yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Q0(e)?H0:z0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ne().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,i){return Qn.makeTranslation(e,t,i),this.applyMatrix4(Qn),this}scale(e,t,i){return Qn.makeScale(e,t,i),this.applyMatrix4(Qn),this}lookAt(e){return qu.lookAt(e),qu.updateMatrix(),this.applyMatrix4(qu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Dt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new x(-1/0,-1/0,-1/0),new x(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new x,1/0);return}if(e){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];za.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(Ln.min,za.min),Ln.expandByPoint(Yt),Yt.addVectors(Ln.max,za.max),Ln.expandByPoint(Yt)):(Ln.expandByPoint(za.min),Ln.expandByPoint(za.max))}Ln.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Yt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Yt.fromBufferAttribute(o,c),l&&(Dr.fromBufferAttribute(e,c),Yt.add(Dr)),s=Math.max(s,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new x,l[P]=new x;const c=new x,u=new x,h=new x,d=new Me,f=new Me,A=new Me,g=new x,m=new x;function p(P,v,y){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,v),h.fromBufferAttribute(i,y),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,v),A.fromBufferAttribute(r,y),u.sub(c),h.sub(c),f.sub(d),A.sub(d);const b=1/(f.x*A.y-A.x*f.y);isFinite(b)&&(g.copy(u).multiplyScalar(A.y).addScaledVector(h,-f.y).multiplyScalar(b),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-A.x).multiplyScalar(b),o[P].add(g),o[v].add(g),o[y].add(g),l[P].add(m),l[v].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let P=0,v=E.length;P<v;++P){const y=E[P],b=y.start,R=y.count;for(let U=b,Q=b+R;U<Q;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const _=new x,S=new x,w=new x,C=new x;function B(P){w.fromBufferAttribute(s,P),C.copy(w);const v=o[P];_.copy(v),_.sub(w.multiplyScalar(w.dot(v))).normalize(),S.crossVectors(C,v);const b=S.dot(l[P])<0?-1:1;a.setXYZW(P,_.x,_.y,_.z,b)}for(let P=0,v=E.length;P<v;++P){const y=E[P],b=y.start,R=y.count;for(let U=b,Q=b+R;U<Q;U+=3)B(e.getX(U+0)),B(e.getX(U+1)),B(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ze(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new x,r=new x,a=new x,o=new x,l=new x,c=new x,u=new x,h=new x;if(e)for(let d=0,f=e.count;d<f;d+=3){const A=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,A),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,A),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(A,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,A=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*u;for(let p=0;p<u;p++)d[A++]=c[f++]}return new ze(d,u,h)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ke,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ep=new ge,Ns=new Bs,Ac=new dn,tp=new x,pc=new x,mc=new x,gc=new x,Xu=new x,xc=new x,np=new x,_c=new x;class Ye extends bt{constructor(e=new Ke,t=new mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){xc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Xu.fromBufferAttribute(h,e),a?xc.addScaledVector(Xu,u):xc.addScaledVector(Xu.sub(t),u))}t.add(xc)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ac.copy(i.boundingSphere),Ac.applyMatrix4(r),Ns.copy(e.ray).recast(e.near),!(Ac.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(Ac,tp)===null||Ns.origin.distanceToSquared(tp)>(e.far-e.near)**2))&&(ep.copy(r).invert(),Ns.copy(e.ray).applyMatrix4(ep),!(i.boundingBox!==null&&Ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ns)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let A=0,g=d.length;A<g;A++){const m=d[A],p=a[m.materialIndex],E=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=E,w=_;S<w;S+=3){const C=o.getX(S),B=o.getX(S+1),P=o.getX(S+2);s=yc(this,p,e,i,c,u,h,C,B,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const A=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=A,p=g;m<p;m+=3){const E=o.getX(m),_=o.getX(m+1),S=o.getX(m+2);s=yc(this,a,e,i,c,u,h,E,_,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let A=0,g=d.length;A<g;A++){const m=d[A],p=a[m.materialIndex],E=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=E,w=_;S<w;S+=3){const C=S,B=S+1,P=S+2;s=yc(this,p,e,i,c,u,h,C,B,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const A=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=A,p=g;m<p;m+=3){const E=m,_=m+1,S=m+2;s=yc(this,a,e,i,c,u,h,E,_,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Sv(n,e,t,i,s,r,a,o){let l;if(e.side===Vt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===qn,o),l===null)return null;_c.copy(o),_c.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(_c);return c<t.near||c>t.far?null:{distance:c,point:_c.clone(),object:n}}function yc(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,pc),n.getVertexPosition(l,mc),n.getVertexPosition(c,gc);const u=Sv(n,e,t,i,pc,mc,gc,np);if(u){const h=new x;Fn.getBarycoord(np,pc,mc,gc,h),s&&(u.uv=Fn.getInterpolatedAttribute(s,o,l,c,h,new Me)),r&&(u.uv1=Fn.getInterpolatedAttribute(r,o,l,c,h,new Me)),a&&(u.normal=Fn.getInterpolatedAttribute(a,o,l,c,h,new x),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new x,materialIndex:0};Fn.getNormal(pc,mc,gc,d.normal),u.face=d,u.barycoord=h}return u}class Is extends Ke{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;A("z","y","x",-1,-1,i,t,e,a,r,0),A("z","y","x",1,-1,i,t,-e,a,r,1),A("x","z","y",1,1,e,i,t,s,a,2),A("x","z","y",1,-1,e,i,-t,s,a,3),A("x","y","z",1,-1,e,t,i,s,r,4),A("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(h,2));function A(g,m,p,E,_,S,w,C,B,P,v){const y=S/B,b=w/P,R=S/2,U=w/2,Q=C/2,F=B+1,k=P+1;let X=0,z=0;const te=new x;for(let ie=0;ie<k;ie++){const ee=ie*b-U;for(let pe=0;pe<F;pe++){const be=pe*y-R;te[g]=be*E,te[m]=ee*_,te[p]=Q,c.push(te.x,te.y,te.z),te[g]=0,te[m]=0,te[p]=C>0?1:-1,u.push(te.x,te.y,te.z),h.push(pe/B),h.push(1-ie/P),X+=1}}for(let ie=0;ie<P;ie++)for(let ee=0;ee<B;ee++){const pe=d+ee+F*ie,be=d+ee+F*(ie+1),tt=d+(ee+1)+F*(ie+1),At=d+(ee+1)+F*ie;l.push(pe,be,At),l.push(be,tt,At),z+=6}o.addGroup(f,z,v),f+=z,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ga(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function mn(n){const e={};for(let t=0;t<n.length;t++){const i=ga(n[t]);for(const s in i)e[s]=i[s]}return e}function Cv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function V0(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const Df={clone:ga,merge:mn};var Iv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Et extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Iv,this.fragmentShader=wv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ga(e.uniforms),this.uniformsGroups=Cv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class W0 extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ns=new x,ip=new Me,sp=new Me;class Kt extends W0{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ma*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ma*2*Math.atan(Math.tan(mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,ip,sp),t.subVectors(sp,ip)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Lr=-90,Pr=1;class q0 extends bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Kt(Lr,Pr,e,t);s.layers=this.layers,this.add(s);const r=new Kt(Lr,Pr,e,t);r.layers=this.layers,this.add(r);const a=new Kt(Lr,Pr,e,t);a.layers=this.layers,this.add(a);const o=new Kt(Lr,Pr,e,t);o.layers=this.layers,this.add(o);const l=new Kt(Lr,Pr,e,t);l.layers=this.layers,this.add(l);const c=new Kt(Lr,Pr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=A,i.texture.needsPMREMUpdate=!0}}class X0 extends zt{constructor(e=[],t=hr,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Y0 extends _i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new X0(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Is(5,5,5),r=new Et({name:"CubemapFromEquirect",uniforms:ga(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:Hi});r.uniforms.tEquirect.value=t;const a=new Ye(s,r),o=t.minFilter;return t.minFilter===Zn&&(t.minFilter=wt),new q0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class jt extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bv={type:"move"};class Yu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new x,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new x),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new x,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new x),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,A=.005;c.inputState.pinching&&d>f+A?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-A&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new jt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Lf extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ou{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zd,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const An=new x;class Wn{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=jn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=jn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Vl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ze(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Vl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class K0 extends ei{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ur;const Ha=new x,Fr=new x,Nr=new x,Qr=new Me,Va=new Me,J0=new ge,Ec=new x,Wa=new x,vc=new x,rp=new Me,Ku=new Me,ap=new Me;class Tv extends bt{constructor(e=new K0){if(super(),this.isSprite=!0,this.type="Sprite",Ur===void 0){Ur=new Ke;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ou(t,5);Ur.setIndex([0,1,2,0,2,3]),Ur.setAttribute("position",new Wn(i,3,0,!1)),Ur.setAttribute("uv",new Wn(i,2,3,!1))}this.geometry=Ur,this.material=e,this.center=new Me(.5,.5),this.count=1}raycast(e,t){e.camera===null&&je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fr.setFromMatrixScale(this.matrixWorld),J0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Nr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fr.multiplyScalar(-Nr.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;Mc(Ec.set(-.5,-.5,0),Nr,a,Fr,s,r),Mc(Wa.set(.5,-.5,0),Nr,a,Fr,s,r),Mc(vc.set(.5,.5,0),Nr,a,Fr,s,r),rp.set(0,0),Ku.set(1,0),ap.set(1,1);let o=e.ray.intersectTriangle(Ec,Wa,vc,!1,Ha);if(o===null&&(Mc(Wa.set(-.5,.5,0),Nr,a,Fr,s,r),Ku.set(0,1),o=e.ray.intersectTriangle(Ec,vc,Wa,!1,Ha),o===null))return;const l=e.ray.origin.distanceTo(Ha);l<e.near||l>e.far||t.push({distance:l,point:Ha.clone(),uv:Fn.getInterpolation(Ha,Ec,Wa,vc,rp,Ku,ap,new Me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Mc(n,e,t,i,s,r){Qr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Va.x=r*Qr.x-s*Qr.y,Va.y=s*Qr.x+r*Qr.y):Va.copy(Qr),n.copy(e),n.x+=Va.x,n.y+=Va.y,n.applyMatrix4(J0)}const op=new x,cp=new ot,lp=new ot,Bv=new x,up=new ge,Sc=new x,Ju=new dn,hp=new ge,ju=new Bs;class Rv extends Ye{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=UA,this.bindMatrix=new ge,this.bindMatrixInverse=new ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Tn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Sc),this.boundingBox.expandByPoint(Sc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new dn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Sc),this.boundingSphere.expandByPoint(Sc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ju.copy(this.boundingSphere),Ju.applyMatrix4(s),e.ray.intersectsSphere(Ju)!==!1&&(hp.copy(s).invert(),ju.copy(e.ray).applyMatrix4(hp),!(this.boundingBox!==null&&ju.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ju)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ot,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===UA?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===LE?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ie("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;cp.fromBufferAttribute(s.attributes.skinIndex,e),lp.fromBufferAttribute(s.attributes.skinWeight,e),op.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=lp.getComponent(r);if(a!==0){const o=cp.getComponent(r);up.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Bv.copy(op).applyMatrix4(up),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class j0 extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ta extends zt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=rn,u=rn,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dp=new ge,Dv=new ge;class Pf{constructor(e=[],t=[]){this.uuid=$n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ie("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new ge;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Dv;dp.multiplyMatrices(o,t[r]),dp.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Pf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Ta(t,e,e,Jt,hn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let a=t[r];a===void 0&&(Ie("Skeleton: No bone found with UUID:",r),a=new j0),this.bones.push(a),this.boneInverses.push(new ge().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=i[s];e.boneInverses.push(o.toArray())}return e}}class Hd extends ze{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Or=new ge,fp=new ge,Cc=[],Ap=new Tn,Lv=new ge,qa=new Ye,Xa=new dn;class Pv extends Ye{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hd(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Lv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Or),Ap.copy(e.boundingBox).applyMatrix4(Or),this.boundingBox.union(Ap)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Or),Xa.copy(e.boundingSphere).applyMatrix4(Or),this.boundingSphere.union(Xa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(qa.geometry=this.geometry,qa.material=this.material,qa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xa.copy(this.boundingSphere),Xa.applyMatrix4(i),e.ray.intersectsSphere(Xa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Or),fp.multiplyMatrices(i,Or),qa.matrixWorld=fp,qa.raycast(e,Cc);for(let a=0,o=Cc.length;a<o;a++){const l=Cc[a];l.instanceId=r,l.object=this,t.push(l)}Cc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Hd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ta(new Float32Array(s*this.count),s,this.count,As,hn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Zu=new x,Uv=new x,Fv=new Ne;class us{constructor(e=new x(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Zu.subVectors(i,t).cross(Uv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Zu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Fv.getNormalMatrix(e),s=this.coplanarPoint(Zu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qs=new dn,Nv=new Me(.5,.5),Ic=new x;class Uf{constructor(e=new us,t=new us,i=new us,s=new us,r=new us,a=new us){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=pi,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],A=r[8],g=r[9],m=r[10],p=r[11],E=r[12],_=r[13],S=r[14],w=r[15];if(s[0].setComponents(c-a,f-u,p-A,w-E).normalize(),s[1].setComponents(c+a,f+u,p+A,w+E).normalize(),s[2].setComponents(c+o,f+h,p+g,w+_).normalize(),s[3].setComponents(c-o,f-h,p-g,w-_).normalize(),i)s[4].setComponents(l,d,m,S).normalize(),s[5].setComponents(c-l,f-d,p-m,w-S).normalize();else if(s[4].setComponents(c-l,f-d,p-m,w-S).normalize(),t===pi)s[5].setComponents(c+l,f+d,p+m,w+S).normalize();else if(t===Hl)s[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qs)}intersectsSprite(e){Qs.center.set(0,0,0);const t=Nv.distanceTo(e.center);return Qs.radius=.7071067811865476+t,Qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ic.x=s.normal.x>0?e.max.x:e.min.x,Ic.y=s.normal.y>0?e.max.y:e.min.y,Ic.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ic)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rs extends ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wl=new x,ql=new x,pp=new ge,Ya=new Bs,wc=new dn,$u=new x,mp=new x;class Ba extends bt{constructor(e=new Ke,t=new Rs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Wl.fromBufferAttribute(t,s-1),ql.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Wl.distanceTo(ql);e.setAttribute("lineDistance",new Dt(i,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wc.copy(i.boundingSphere),wc.applyMatrix4(s),wc.radius+=r,e.ray.intersectsSphere(wc)===!1)return;pp.copy(s).invert(),Ya.copy(e.ray).applyMatrix4(pp);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),A=Math.min(u.count,a.start+a.count);for(let g=f,m=A-1;g<m;g+=c){const p=u.getX(g),E=u.getX(g+1),_=bc(this,e,Ya,l,p,E,g);_&&t.push(_)}if(this.isLineLoop){const g=u.getX(A-1),m=u.getX(f),p=bc(this,e,Ya,l,g,m,A-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),A=Math.min(d.count,a.start+a.count);for(let g=f,m=A-1;g<m;g+=c){const p=bc(this,e,Ya,l,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){const g=bc(this,e,Ya,l,A-1,f,A-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function bc(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(Wl.fromBufferAttribute(o,s),ql.fromBufferAttribute(o,r),t.distanceSqToSegment(Wl,ql,$u,mp)>i)return;$u.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo($u);if(!(c<e.near||c>e.far))return{distance:c,point:mp.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const gp=new x,xp=new x;class Oo extends Ba{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)gp.fromBufferAttribute(t,s),xp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+gp.distanceTo(xp);e.setAttribute("lineDistance",new Dt(i,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ff extends Ba{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Z0 extends ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _p=new ge,Vd=new Bs,Tc=new dn,Bc=new x;class Qv extends bt{constructor(e=new Ke,t=new Z0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Tc.copy(i.boundingSphere),Tc.applyMatrix4(s),Tc.radius+=r,e.ray.intersectsSphere(Tc)===!1)return;_p.copy(s).invert(),Vd.copy(e.ray).applyMatrix4(_p);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let A=d,g=f;A<g;A++){const m=c.getX(A);Bc.fromBufferAttribute(h,m),yp(Bc,m,l,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let A=d,g=f;A<g;A++)Bc.fromBufferAttribute(h,A),yp(Bc,A,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function yp(n,e,t,i,s,r,a){const o=Vd.distanceSqToPoint(n);if(o<t){const l=new x;Vd.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class cu extends zt{constructor(e,t,i,s,r,a,o,l,c,u,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Ov extends cu{constructor(e,t,i,s,r,a){super(e,t,i,r,a),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=Vn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $0 extends cu{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,hr),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class kv extends zt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ex extends zt{constructor(e,t,i=dr,s,r,a,o=rn,l=rn,c,u=Bo,h=1){if(u!==Bo&&u!==Ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class tx extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Nf extends Ke{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let A=0;const g=[],m=i/2;let p=0;E(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new Dt(h,3)),this.setAttribute("normal",new Dt(d,3)),this.setAttribute("uv",new Dt(f,2));function E(){const S=new x,w=new x;let C=0;const B=(t-e)/i;for(let P=0;P<=r;P++){const v=[],y=P/r,b=y*(t-e)+e;for(let R=0;R<=s;R++){const U=R/s,Q=U*l+o,F=Math.sin(Q),k=Math.cos(Q);w.x=b*F,w.y=-y*i+m,w.z=b*k,h.push(w.x,w.y,w.z),S.set(F,B,k).normalize(),d.push(S.x,S.y,S.z),f.push(U,1-y),v.push(A++)}g.push(v)}for(let P=0;P<s;P++)for(let v=0;v<r;v++){const y=g[v][P],b=g[v+1][P],R=g[v+1][P+1],U=g[v][P+1];(e>0||v!==0)&&(u.push(y,b,U),C+=3),(t>0||v!==r-1)&&(u.push(b,R,U),C+=3)}c.addGroup(p,C,0),p+=C}function _(S){const w=A,C=new Me,B=new x;let P=0;const v=S===!0?e:t,y=S===!0?1:-1;for(let R=1;R<=s;R++)h.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),A++;const b=A;for(let R=0;R<=s;R++){const Q=R/s*l+o,F=Math.cos(Q),k=Math.sin(Q);B.x=v*k,B.y=m*y,B.z=v*F,h.push(B.x,B.y,B.z),d.push(0,y,0),C.x=F*.5+.5,C.y=k*.5*y+.5,f.push(C.x,C.y),A++}for(let R=0;R<s;R++){const U=w+R,Q=b+R;S===!0?u.push(Q,Q+1,U):u.push(Q+1,Q,U),P+=3}c.addGroup(p,P,S===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qf extends Nf{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Qf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nx{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ie("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const u=i[s],d=i[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Me:new x);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new x,s=[],r=[],a=[],o=new x,l=new ge;for(let f=0;f<=e;f++){const A=f/e;s[f]=this.getTangentAt(A,new x)}r[0]=new x,a[0]=new x;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const A=Math.acos(Oe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,A))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Oe(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let A=1;A<=e;A++)r[A].applyMatrix4(l.makeRotationAxis(s[A],f*A)),a[A].crossVectors(s[A],r[A])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Of(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const Rc=new x,eh=new Of,th=new Of,nh=new Of;class Gv extends nx{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new x){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Rc.subVectors(s[0],s[1]).add(s[0]),c=Rc);const h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Rc.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Rc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let A=Math.pow(c.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);g<1e-4&&(g=1),A<1e-4&&(A=g),m<1e-4&&(m=g),eh.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,A,g,m),th.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,A,g,m),nh.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,A,g,m)}else this.curveType==="catmullrom"&&(eh.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),th.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),nh.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(eh.calc(l),th.calc(l),nh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new x().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function zv(n,e){const t=1-n;return t*t*t*e}function Hv(n,e){const t=1-n;return 3*t*t*n*e}function Vv(n,e){return 3*(1-n)*n*n*e}function Wv(n,e){return n*n*n*e}function ih(n,e,t,i,s){return zv(n,e)+Hv(n,t)+Vv(n,i)+Wv(n,s)}class qv extends nx{constructor(e=new x,t=new x,i=new x,s=new x){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new x){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ih(e,s.x,r.x,a.x,o.x),ih(e,s.y,r.y,a.y,o.y),ih(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ws extends Ke{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,f=[],A=[],g=[],m=[];for(let p=0;p<u;p++){const E=p*d-a;for(let _=0;_<c;_++){const S=_*h-r;A.push(S,-E,0),g.push(0,0,1),m.push(_/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const _=E+c*p,S=E+c*(p+1),w=E+1+c*(p+1),C=E+1+c*p;f.push(_,S,C),f.push(S,w,C)}this.setIndex(f),this.setAttribute("position",new Dt(A,3)),this.setAttribute("normal",new Dt(g,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.width,e.height,e.widthSegments,e.heightSegments)}}class kf extends Ke{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let h=e;const d=(t-e)/s,f=new x,A=new Me;for(let g=0;g<=s;g++){for(let m=0;m<=i;m++){const p=r+m/i*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),A.x=(f.x/t+1)/2,A.y=(f.y/t+1)/2,u.push(A.x,A.y)}h+=d}for(let g=0;g<s;g++){const m=g*(i+1);for(let p=0;p<i;p++){const E=p+m,_=E,S=E+i+1,w=E+i+2,C=E+1;o.push(_,S,C),o.push(S,w,C)}}this.setIndex(o),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(c,3)),this.setAttribute("uv",new Dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class qi extends Ke{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new x,d=new x,f=[],A=[],g=[],m=[];for(let p=0;p<=i;p++){const E=[],_=p/i;let S=0;p===0&&a===0?S=.5/t:p===i&&l===Math.PI&&(S=-.5/t);for(let w=0;w<=t;w++){const C=w/t;h.x=-e*Math.cos(s+C*r)*Math.sin(a+_*o),h.y=e*Math.cos(a+_*o),h.z=e*Math.sin(s+C*r)*Math.sin(a+_*o),A.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),m.push(C+S,1-_),E.push(c++)}u.push(E)}for(let p=0;p<i;p++)for(let E=0;E<t;E++){const _=u[p][E+1],S=u[p][E],w=u[p+1][E],C=u[p+1][E+1];(p!==0||a>0)&&f.push(_,S,C),(p!==i-1||l<Math.PI)&&f.push(S,w,C)}this.setIndex(f),this.setAttribute("position",new Dt(A,3)),this.setAttribute("normal",new Dt(g,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xv extends Ke{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,s=new x,r=new x;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],d=h.start,f=h.count;for(let A=d,g=d+f;A<g;A+=3)for(let m=0;m<3;m++){const p=o.getX(A+m),E=o.getX(A+(m+1)%3);s.fromBufferAttribute(a,p),r.fromBufferAttribute(a,E),Ep(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const u=3*o+c,h=3*o+(c+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,h),Ep(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Dt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Ep(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}class Xi extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=F0,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Si extends Xi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Oe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ix extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yv extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Kv extends Rs{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Dc(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Jv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function jv(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function vp(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=n[o+l]}return s}function sx(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}class Ko{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Zv extends Ko{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:FA,endingEnd:FA}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case NA:r=e,o=2*t-i;break;case QA:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case NA:a=e,l=2*i-t;break;case QA:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,A=(i-t)/(s-t),g=A*A,m=g*A,p=-d*m+2*d*g-d*A,E=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*A+1,_=(-1-f)*m+(1.5+f)*g+.5*A,S=f*m-f*g;for(let w=0;w!==o;++w)r[w]=p*a[u+w]+E*a[c+w]+_*a[l+w]+S*a[h+w];return r}}class $v extends Ko{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}}class eM extends Ko{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class si{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Dc(t,this.TimeBufferType),this.values=Dc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Dc(e.times,Array),values:Dc(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new eM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $v(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Uo:t=this.InterpolantFactoryMethodDiscrete;break;case Fo:t=this.InterpolantFactoryMethodLinear;break;case wu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ie("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Uo;case this.InterpolantFactoryMethodLinear:return Fo;case this.InterpolantFactoryMethodSmooth:return wu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){je("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){je("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Jv(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){je("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===wu,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{const h=o*i,d=h-i,f=h+i;for(let A=0;A!==i;++A){const g=t[h+A];if(g!==t[d+A]||g!==t[f+A]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}si.prototype.ValueTypeName="";si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=Fo;class Ra extends si{constructor(e,t,i){super(e,t,i)}}Ra.prototype.ValueTypeName="bool";Ra.prototype.ValueBufferType=Array;Ra.prototype.DefaultInterpolation=Uo;Ra.prototype.InterpolantFactoryMethodLinear=void 0;Ra.prototype.InterpolantFactoryMethodSmooth=void 0;class rx extends si{constructor(e,t,i,s){super(e,t,i,s)}}rx.prototype.ValueTypeName="color";class xa extends si{constructor(e,t,i,s){super(e,t,i,s)}}xa.prototype.ValueTypeName="number";class tM extends Ko{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t);let c=e*o;for(let u=c+o;c!==u;c+=4)ct.slerpFlat(r,0,a,c-o,a,c,l);return r}}class _a extends si{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new tM(this.times,this.values,this.getValueSize(),e)}}_a.prototype.ValueTypeName="quaternion";_a.prototype.InterpolantFactoryMethodSmooth=void 0;class Da extends si{constructor(e,t,i){super(e,t,i)}}Da.prototype.ValueTypeName="string";Da.prototype.ValueBufferType=Array;Da.prototype.DefaultInterpolation=Uo;Da.prototype.InterpolantFactoryMethodLinear=void 0;Da.prototype.InterpolantFactoryMethodSmooth=void 0;class ya extends si{constructor(e,t,i,s){super(e,t,i,s)}}ya.prototype.ValueTypeName="vector";class nM{constructor(e="",t=-1,i=[],s=PE){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=$n(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(sM(i[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(si.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=jv(l);l=vp(l,1,u),c=vp(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new xa(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}static parseAnimation(e,t){if(Ie("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return je("AnimationClip: No animation in JSONLoader data."),null;const i=function(h,d,f,A,g){if(f.length!==0){const m=[],p=[];sx(f,m,p,A),m.length!==0&&g.push(new h(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let A;for(A=0;A<d.length;A++)if(d[A].morphTargets)for(let g=0;g<d[A].morphTargets.length;g++)f[d[A].morphTargets[g]]=-1;for(const g in f){const m=[],p=[];for(let E=0;E!==d[A].morphTargets.length;++E){const _=d[A];m.push(_.time),p.push(_.morphTarget===g?1:0)}s.push(new xa(".morphTargetInfluence["+g+"]",m,p))}l=f.length*a}else{const f=".bones["+t[h].name+"]";i(ya,f+".position",d,"pos",s),i(_a,f+".quaternion",d,"rot",s),i(ya,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function iM(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xa;case"vector":case"vector2":case"vector3":case"vector4":return ya;case"color":return rx;case"quaternion":return _a;case"bool":case"boolean":return Ra;case"string":return Da}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function sM(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=iM(n.type);if(n.times===void 0){const t=[],i=[];sx(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Oi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class ax{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],A=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return A}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const rM=new ax;class Ds{constructor(e){this.manager=e!==void 0?e:rM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ds.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bi={};class aM extends Error{constructor(e,t){super(e),this.response=t}}class ar extends Ds{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Oi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Bi[e]!==void 0){Bi[e].push({onLoad:t,onProgress:i,onError:s});return}Bi[e]=[],Bi[e].push({onLoad:t,onProgress:i,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ie("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Bi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,A=f!==0;let g=0;const m=new ReadableStream({start(p){E();function E(){h.read().then(({done:_,value:S})=>{if(_)p.close();else{g+=S.byteLength;const w=new ProgressEvent("progress",{lengthComputable:A,loaded:g,total:f});for(let C=0,B=u.length;C<B;C++){const P=u[C];P.onProgress&&P.onProgress(w)}p.enqueue(S),E()}},_=>{p.error(_)})}}});return new Response(m)}else throw new aM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(A=>f.decode(A))}}}).then(c=>{Oi.add(`file:${e}`,c);const u=Bi[e];delete Bi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Bi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Bi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const kr=new WeakMap;class oM extends Ds{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Oi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=kr.get(a);h===void 0&&(h=[],kr.set(a,h)),h.push({onLoad:t,onError:s})}return a}const o=No("img");function l(){u(),t&&t(this);const h=kr.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}kr.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),Oi.remove(`image:${e}`);const d=kr.get(this)||[];for(let f=0;f<d.length;f++){const A=d[f];A.onError&&A.onError(h)}kr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Oi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class ox extends Ds{constructor(e){super(e)}load(e,t,i,s){const r=new zt,a=new oM(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class lu extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const sh=new ge,Mp=new x,Sp=new x;class Gf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=Je,this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uf,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Mp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mp),Sp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sp),t.updateMatrixWorld(),sh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class cM extends Gf{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=ma*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class cx extends lu{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new cM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Cp=new ge,Ka=new x,rh=new x;class lM extends Gf{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new x(1,0,0),new x(-1,0,0),new x(0,0,1),new x(0,0,-1),new x(0,1,0),new x(0,-1,0)],this._cubeUps=[new x(0,1,0),new x(0,1,0),new x(0,1,0),new x(0,1,0),new x(0,0,1),new x(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ka.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ka),rh.copy(i.position),rh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(rh),i.updateMatrixWorld(),s.makeTranslation(-Ka.x,-Ka.y,-Ka.z),Cp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cp,i.coordinateSystem,i.reversedDepth)}}class lx extends lu{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new lM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class zf extends W0{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class uM extends Gf{constructor(){super(new zf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ux extends lu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new uM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hM extends lu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class xo{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class dM extends Ke{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const ah=new WeakMap;class fM extends Ds{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ie("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ie("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Oi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{if(ah.has(a)===!0)s&&s(ah.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Oi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ah.set(l,c),Oi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Oi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class AM extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class pM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Hf="\\[\\]\\.:\\/",mM=new RegExp("["+Hf+"]","g"),Vf="[^"+Hf+"]",gM="[^"+Hf.replace("\\.","")+"]",xM=/((?:WC+[\/:])*)/.source.replace("WC",Vf),_M=/(WCOD+)?/.source.replace("WCOD",gM),yM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vf),EM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vf),vM=new RegExp("^"+xM+_M+yM+EM+"$"),MM=["material","materials","bones","map"];class SM{constructor(e,t,i){const s=i||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class mt{constructor(e,t,i){this.path=t,this.parsedPath=i||mt.parseTrackName(t),this.node=mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new mt.Composite(e,t,i):new mt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mM,"")}static parseTrackName(e){const t=vM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);MM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;je("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}mt.Composite=SM;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Wd extends ou{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const Ip=new ge;class uu{constructor(e,t,i=0,s=1/0){this.ray=new Bs(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Rf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ip.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ip),this}intersectObject(e,t=!0,i=[]){return qd(e,this,i,t),i.sort(wp),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)qd(e[s],this,i,t);return i.sort(wp),i}}function wp(n,e){return n.distance-e.distance}function qd(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)qd(r[a],e,t,!0)}}class bp{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Oe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Oe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Tp=new x,Lc=new x,Gr=new x,zr=new x,oh=new x,CM=new x,IM=new x;class wM{constructor(e=new x,t=new x){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Tp.subVectors(e,this.start),Lc.subVectors(this.end,this.start);const i=Lc.dot(Lc);let r=Lc.dot(Tp)/i;return t&&(r=Oe(r,0,1)),r}closestPointToPoint(e,t,i){const s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=CM,i=IM){const s=10000000000000001e-32;let r,a;const o=this.start,l=e.start,c=this.end,u=e.end;Gr.subVectors(c,o),zr.subVectors(u,l),oh.subVectors(o,l);const h=Gr.dot(Gr),d=zr.dot(zr),f=zr.dot(oh);if(h<=s&&d<=s)return t.copy(o),i.copy(l),t.sub(i),t.dot(t);if(h<=s)r=0,a=f/d,a=Oe(a,0,1);else{const A=Gr.dot(oh);if(d<=s)a=0,r=Oe(-A/h,0,1);else{const g=Gr.dot(zr),m=h*d-g*g;m!==0?r=Oe((g*f-A*d)/m,0,1):r=0,a=(g*r+f)/d,a<0?(a=0,r=Oe(-A/h,0,1)):a>1&&(a=1,r=Oe((g-A)/h,0,1))}}return t.copy(o).add(Gr.multiplyScalar(r)),i.copy(l).add(zr.multiplyScalar(a)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class bM extends Oo{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Ke;s.setAttribute("position",new Dt(t,3)),s.setAttribute("color",new Dt(i,3));const r=new Rs({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,i){const s=new Se,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(i),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class TM extends yr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ie("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Bp(n,e,t,i){const s=BM(i);switch(t){case L0:return n*e;case As:return n*e/s.components*s.byteLength;case If:return n*e/s.components*s.byteLength;case ps:return n*e*2/s.components*s.byteLength;case wf:return n*e*2/s.components*s.byteLength;case To:return n*e*3/s.components*s.byteLength;case Jt:return n*e*4/s.components*s.byteLength;case bf:return n*e*4/s.components*s.byteLength;case ia:case sr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sa:case po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wd:case Do:return Math.max(n,16)*Math.max(e,8)/4;case Ul:case Aa:return Math.max(n,8)*Math.max(e,8)/2;case Fl:case Lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Td:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ra:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Pd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Nd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Qd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Od:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case pa:case kd:case Nl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ql:case Ol:return Math.ceil(n/4)*Math.ceil(e/4)*8;case kl:case Gl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function BM(n){switch(n){case Je:case R0:return{byteLength:1,components:1};case wo:case D0:case Un:return{byteLength:2,components:1};case Sf:case Cf:return{byteLength:2,components:4};case dr:case Mf:case hn:return{byteLength:4,components:1};case ru:case au:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"181"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="181");function hx(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function RM(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,A)=>f.start-A.start);let d=0;for(let f=1;f<h.length;f++){const A=h[d],g=h[f];g.start<=A.start+A.count+1?A.count=Math.max(A.count,g.start+g.count-A.start):(++d,h[d]=g)}h.length=d+1;for(let f=0,A=h.length;f<A;f++){const g=h[f];n.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var DM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LM=`#ifdef USE_ALPHAHASH
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
#endif`,PM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QM=`#ifdef USE_AOMAP
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
#endif`,OM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kM=`#ifdef USE_BATCHING
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
#endif`,GM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,WM=`#ifdef USE_IRIDESCENCE
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
#endif`,qM=`#ifdef USE_BUMPMAP
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
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$M=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tS=`#define PI 3.141592653589793
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
} // validated`,nS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iS=`vec3 transformedNormal = objectNormal;
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
#endif`,sS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cS="gl_FragColor = linearToOutputTexel( gl_FragColor );",lS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uS=`#ifdef USE_ENVMAP
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
#endif`,hS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dS=`#ifdef USE_ENVMAP
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
#endif`,fS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AS=`#ifdef USE_ENVMAP
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
#endif`,pS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_S=`#ifdef USE_GRADIENTMAP
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
}`,yS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ES=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MS=`uniform bool receiveShadow;
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
#endif`,SS=`#ifdef USE_ENVMAP
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
#endif`,CS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TS=`PhysicalMaterial material;
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
#endif`,BS=`uniform sampler2D dfgLUT;
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
}`,RS=`
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
#endif`,DS=`#if defined( RE_IndirectDiffuse )
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
#endif`,LS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,US=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,GS=`#if defined( USE_POINTS_UV )
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
#endif`,zS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XS=`#ifdef USE_MORPHTARGETS
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
#endif`,YS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,JS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$S=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eC=`#ifdef USE_NORMALMAP
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
#endif`,tC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mC=`float getShadowMask() {
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
}`,gC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xC=`#ifdef USE_SKINNING
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
#endif`,_C=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yC=`#ifdef USE_SKINNING
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
#endif`,EC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,CC=`#ifdef USE_TRANSMISSION
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
#endif`,IC=`#ifdef USE_TRANSMISSION
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
#endif`,wC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DC=`uniform sampler2D t2D;
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
}`,LC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,UC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NC=`#include <common>
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
}`,QC=`#if DEPTH_PACKING == 3200
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
}`,OC=`#define DISTANCE
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
}`,kC=`#define DISTANCE
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
}`,GC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HC=`uniform float scale;
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
}`,VC=`uniform vec3 diffuse;
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
}`,WC=`#include <common>
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
}`,qC=`uniform vec3 diffuse;
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
}`,XC=`#define LAMBERT
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
}`,YC=`#define LAMBERT
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
}`,KC=`#define MATCAP
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
}`,JC=`#define MATCAP
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
}`,jC=`#define NORMAL
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
}`,ZC=`#define NORMAL
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
}`,$C=`#define PHONG
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
}`,eI=`#define PHONG
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
}`,tI=`#define STANDARD
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
}`,nI=`#define STANDARD
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
}`,iI=`#define TOON
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
}`,sI=`#define TOON
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
}`,rI=`uniform float size;
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
}`,aI=`uniform vec3 diffuse;
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
}`,oI=`#include <common>
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
}`,cI=`uniform vec3 color;
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
}`,lI=`uniform float rotation;
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
}`,uI=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:DM,alphahash_pars_fragment:LM,alphamap_fragment:PM,alphamap_pars_fragment:UM,alphatest_fragment:FM,alphatest_pars_fragment:NM,aomap_fragment:QM,aomap_pars_fragment:OM,batching_pars_vertex:kM,batching_vertex:GM,begin_vertex:zM,beginnormal_vertex:HM,bsdfs:VM,iridescence_fragment:WM,bumpmap_pars_fragment:qM,clipping_planes_fragment:XM,clipping_planes_pars_fragment:YM,clipping_planes_pars_vertex:KM,clipping_planes_vertex:JM,color_fragment:jM,color_pars_fragment:ZM,color_pars_vertex:$M,color_vertex:eS,common:tS,cube_uv_reflection_fragment:nS,defaultnormal_vertex:iS,displacementmap_pars_vertex:sS,displacementmap_vertex:rS,emissivemap_fragment:aS,emissivemap_pars_fragment:oS,colorspace_fragment:cS,colorspace_pars_fragment:lS,envmap_fragment:uS,envmap_common_pars_fragment:hS,envmap_pars_fragment:dS,envmap_pars_vertex:fS,envmap_physical_pars_fragment:SS,envmap_vertex:AS,fog_vertex:pS,fog_pars_vertex:mS,fog_fragment:gS,fog_pars_fragment:xS,gradientmap_pars_fragment:_S,lightmap_pars_fragment:yS,lights_lambert_fragment:ES,lights_lambert_pars_fragment:vS,lights_pars_begin:MS,lights_toon_fragment:CS,lights_toon_pars_fragment:IS,lights_phong_fragment:wS,lights_phong_pars_fragment:bS,lights_physical_fragment:TS,lights_physical_pars_fragment:BS,lights_fragment_begin:RS,lights_fragment_maps:DS,lights_fragment_end:LS,logdepthbuf_fragment:PS,logdepthbuf_pars_fragment:US,logdepthbuf_pars_vertex:FS,logdepthbuf_vertex:NS,map_fragment:QS,map_pars_fragment:OS,map_particle_fragment:kS,map_particle_pars_fragment:GS,metalnessmap_fragment:zS,metalnessmap_pars_fragment:HS,morphinstance_vertex:VS,morphcolor_vertex:WS,morphnormal_vertex:qS,morphtarget_pars_vertex:XS,morphtarget_vertex:YS,normal_fragment_begin:KS,normal_fragment_maps:JS,normal_pars_fragment:jS,normal_pars_vertex:ZS,normal_vertex:$S,normalmap_pars_fragment:eC,clearcoat_normal_fragment_begin:tC,clearcoat_normal_fragment_maps:nC,clearcoat_pars_fragment:iC,iridescence_pars_fragment:sC,opaque_fragment:rC,packing:aC,premultiplied_alpha_fragment:oC,project_vertex:cC,dithering_fragment:lC,dithering_pars_fragment:uC,roughnessmap_fragment:hC,roughnessmap_pars_fragment:dC,shadowmap_pars_fragment:fC,shadowmap_pars_vertex:AC,shadowmap_vertex:pC,shadowmask_pars_fragment:mC,skinbase_vertex:gC,skinning_pars_vertex:xC,skinning_vertex:_C,skinnormal_vertex:yC,specularmap_fragment:EC,specularmap_pars_fragment:vC,tonemapping_fragment:MC,tonemapping_pars_fragment:SC,transmission_fragment:CC,transmission_pars_fragment:IC,uv_pars_fragment:wC,uv_pars_vertex:bC,uv_vertex:TC,worldpos_vertex:BC,background_vert:RC,background_frag:DC,backgroundCube_vert:LC,backgroundCube_frag:PC,cube_vert:UC,cube_frag:FC,depth_vert:NC,depth_frag:QC,distanceRGBA_vert:OC,distanceRGBA_frag:kC,equirect_vert:GC,equirect_frag:zC,linedashed_vert:HC,linedashed_frag:VC,meshbasic_vert:WC,meshbasic_frag:qC,meshlambert_vert:XC,meshlambert_frag:YC,meshmatcap_vert:KC,meshmatcap_frag:JC,meshnormal_vert:jC,meshnormal_frag:ZC,meshphong_vert:$C,meshphong_frag:eI,meshphysical_vert:tI,meshphysical_frag:nI,meshtoon_vert:iI,meshtoon_frag:sI,points_vert:rI,points_frag:aI,shadow_vert:oI,shadow_frag:cI,sprite_vert:lI,sprite_frag:uI},le={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},wn={basic:{uniforms:mn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:mn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Se(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:mn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:mn([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:mn([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Se(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:mn([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:mn([le.points,le.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:mn([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:mn([le.common,le.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:mn([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:mn([le.sprite,le.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:mn([le.common,le.displacementmap,{referencePosition:{value:new x},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:mn([le.lights,le.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};wn.physical={uniforms:mn([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Pc={r:0,b:0,g:0},Os=new yi,hI=new ge;function dI(n,e,t,i,s,r,a){const o=new Se(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function A(_){let S=_.isScene===!0?_.background:null;return S&&S.isTexture&&(S=(_.backgroundBlurriness>0?t:e).get(S)),S}function g(_){let S=!1;const w=A(_);w===null?p(o,l):w&&w.isColor&&(p(w,1),S=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(_,S){const w=A(S);w&&(w.isCubeTexture||w.mapping===su)?(u===void 0&&(u=new Ye(new Is(1,1,1),new Et({name:"BackgroundCubeMaterial",uniforms:ga(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,B,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Os.copy(S.backgroundRotation),Os.x*=-1,Os.y*=-1,Os.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(hI.makeRotationFromEuler(Os)),u.material.toneMapped=at.getTransfer(w.colorSpace)!==_t,(h!==w||d!==w.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=w,d=w.version,f=n.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Ye(new ws(2,2),new Et({name:"BackgroundMaterial",uniforms:ga(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=at.getTransfer(w.colorSpace)!==_t,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||d!==w.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=w,d=w.version,f=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,S){_.getRGB(Pc,V0(n)),i.buffers.color.setClear(Pc.r,Pc.g,Pc.b,S,a)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,S=1){o.set(_),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(o,l)},render:g,addToRenderList:m,dispose:E}}function fI(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(y,b,R,U,Q){let F=!1;const k=h(U,R,b);r!==k&&(r=k,c(r.object)),F=f(y,U,R,Q),F&&A(y,U,R,Q),Q!==null&&e.update(Q,n.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,S(y,b,R,U),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function h(y,b,R){const U=R.wireframe===!0;let Q=i[y.id];Q===void 0&&(Q={},i[y.id]=Q);let F=Q[b.id];F===void 0&&(F={},Q[b.id]=F);let k=F[U];return k===void 0&&(k=d(l()),F[U]=k),k}function d(y){const b=[],R=[],U=[];for(let Q=0;Q<t;Q++)b[Q]=0,R[Q]=0,U[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:R,attributeDivisors:U,object:y,attributes:{},index:null}}function f(y,b,R,U){const Q=r.attributes,F=b.attributes;let k=0;const X=R.getAttributes();for(const z in X)if(X[z].location>=0){const ie=Q[z];let ee=F[z];if(ee===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(ee=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(ee=y.instanceColor)),ie===void 0||ie.attribute!==ee||ee&&ie.data!==ee.data)return!0;k++}return r.attributesNum!==k||r.index!==U}function A(y,b,R,U){const Q={},F=b.attributes;let k=0;const X=R.getAttributes();for(const z in X)if(X[z].location>=0){let ie=F[z];ie===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor));const ee={};ee.attribute=ie,ie&&ie.data&&(ee.data=ie.data),Q[z]=ee,k++}r.attributes=Q,r.attributesNum=k,r.index=U}function g(){const y=r.newAttributes;for(let b=0,R=y.length;b<R;b++)y[b]=0}function m(y){p(y,0)}function p(y,b){const R=r.newAttributes,U=r.enabledAttributes,Q=r.attributeDivisors;R[y]=1,U[y]===0&&(n.enableVertexAttribArray(y),U[y]=1),Q[y]!==b&&(n.vertexAttribDivisor(y,b),Q[y]=b)}function E(){const y=r.newAttributes,b=r.enabledAttributes;for(let R=0,U=b.length;R<U;R++)b[R]!==y[R]&&(n.disableVertexAttribArray(R),b[R]=0)}function _(y,b,R,U,Q,F,k){k===!0?n.vertexAttribIPointer(y,b,R,Q,F):n.vertexAttribPointer(y,b,R,U,Q,F)}function S(y,b,R,U){g();const Q=U.attributes,F=R.getAttributes(),k=b.defaultAttributeValues;for(const X in F){const z=F[X];if(z.location>=0){let te=Q[X];if(te===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(te=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(te=y.instanceColor)),te!==void 0){const ie=te.normalized,ee=te.itemSize,pe=e.get(te);if(pe===void 0)continue;const be=pe.buffer,tt=pe.type,At=pe.bytesPerElement,K=tt===n.INT||tt===n.UNSIGNED_INT||te.gpuType===Mf;if(te.isInterleavedBufferAttribute){const $=te.data,xe=$.stride,qe=te.offset;if($.isInstancedInterleavedBuffer){for(let Te=0;Te<z.locationSize;Te++)p(z.location+Te,$.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Te=0;Te<z.locationSize;Te++)m(z.location+Te);n.bindBuffer(n.ARRAY_BUFFER,be);for(let Te=0;Te<z.locationSize;Te++)_(z.location+Te,ee/z.locationSize,tt,ie,xe*At,(qe+ee/z.locationSize*Te)*At,K)}else{if(te.isInstancedBufferAttribute){for(let $=0;$<z.locationSize;$++)p(z.location+$,te.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let $=0;$<z.locationSize;$++)m(z.location+$);n.bindBuffer(n.ARRAY_BUFFER,be);for(let $=0;$<z.locationSize;$++)_(z.location+$,ee/z.locationSize,tt,ie,ee*At,ee/z.locationSize*$*At,K)}}else if(k!==void 0){const ie=k[X];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(z.location,ie);break;case 3:n.vertexAttrib3fv(z.location,ie);break;case 4:n.vertexAttrib4fv(z.location,ie);break;default:n.vertexAttrib1fv(z.location,ie)}}}}E()}function w(){P();for(const y in i){const b=i[y];for(const R in b){const U=b[R];for(const Q in U)u(U[Q].object),delete U[Q];delete b[R]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const b=i[y.id];for(const R in b){const U=b[R];for(const Q in U)u(U[Q].object),delete U[Q];delete b[R]}delete i[y.id]}function B(y){for(const b in i){const R=i[b];if(R[y.id]===void 0)continue;const U=R[y.id];for(const Q in U)u(U[Q].object),delete U[Q];delete R[y.id]}}function P(){v(),a=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:v,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:B,initAttributes:g,enableAttribute:m,disableUnusedAttributes:E}}function AI(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let A=0;A<h;A++)f+=u[A];t.update(f,i,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let A=0;A<c.length;A++)a(c[A],u[A],d[A]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let A=0;for(let g=0;g<h;g++)A+=u[g]*d[g];t.update(A,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function pI(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(B){return!(B!==Jt&&i.convert(B)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(B){const P=B===Un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Je&&i.convert(B)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==hn&&!P)}function l(B){if(B==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ie("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),A=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=A>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:A,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:w,maxSamples:C}}function mI(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new us,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const A=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||A===null||A.length===0||r&&!m)r?u(null):c();else{const E=r?0:i,_=E*4;let S=p.clippingState||null;l.value=S,S=u(A,d,_,f);for(let w=0;w!==_;++w)S[w]=t[w];p.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,A){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,A!==!0||m===null){const p=f+g*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,S=f;_!==g;++_,S+=4)a.copy(h[_]).applyMatrix4(E,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function gI(n){let e=new WeakMap;function t(a,o){return o===Cd?a.mapping=hr:o===Id&&(a.mapping=fa),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Cd||o===Id)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Y0(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const ms=4,Rp=[.125,.215,.35,.446,.526,.582],Ks=20,xI=256,Ja=new zf,Dp=new Se;let ch=null,lh=0,uh=0,hh=!1;const _I=new x;class Lp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=_I}=r;ch=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Up(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ch,lh,uh),this._renderer.xr.enabled=hh,e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hr||e.mapping===fa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ch=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:Un,format:Jt,colorSpace:on,depthBuffer:!1},s=Pp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pp(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=yI(r)),this._blurMaterial=vI(r,e,t),this._ggxMaterial=EI(r,e,t)}return s}_compileMaterial(e){const t=new Ye(new Ke,e);this._renderer.compile(t,Ja)}_sceneToCubeUV(e,t,i,s,r){const l=new Kt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Dp),h.toneMapping=vs,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ye(new Is,new mi({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let p=!1;const E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,p=!0):(m.color.copy(Dp),p=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[_],r.y,r.z)):S===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[_]));const w=this._cubeSize;Hr(s,S*w,_>2?w:0,w,w),h.setRenderTarget(s),p&&h.render(g,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===hr||e.mapping===fa;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Up());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Hr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ja)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=.05+c*.95,f=h*d,{_lodMax:A}=this,g=this._sizeLods[i],m=3*g*(i>A-ms?i-A+ms:0),p=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=A-t,Hr(r,m,p,3*g,2*g),s.setRenderTarget(r),s.render(o,Ja),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=A-i,Hr(e,m,p,3*g,2*g),s.setRenderTarget(e),s.render(o,Ja)}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const d=c.uniforms,f=this._sizeLods[i]-1,A=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ks-1),g=r/A,m=isFinite(r)?1+Math.floor(u*g):Ks;m>Ks&&Ie(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ks}`);const p=[];let E=0;for(let B=0;B<Ks;++B){const P=B/g,v=Math.exp(-P*P/2);p.push(v),B===0?E+=v:B<m&&(E+=2*v)}for(let B=0;B<p.length;B++)p[B]=p[B]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=A,d.mipInt.value=_-i;const S=this._sizeLods[s],w=3*S*(s>_-ms?s-_+ms:0),C=4*(this._cubeSize-S);Hr(t,w,C,3*S,2*S),l.setRenderTarget(t),l.render(h,Ja)}}function yI(n){const e=[],t=[],i=[];let s=n;const r=n-ms+1+Rp.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-ms?l=Rp[a-n+ms-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,A=6,g=3,m=2,p=1,E=new Float32Array(g*A*f),_=new Float32Array(m*A*f),S=new Float32Array(p*A*f);for(let C=0;C<f;C++){const B=C%3*2/3-1,P=C>2?0:-1,v=[B,P,0,B+2/3,P,0,B+2/3,P+1,0,B,P,0,B+2/3,P+1,0,B,P+1,0];E.set(v,g*A*C),_.set(d,m*A*C);const y=[C,C,C,C,C,C];S.set(y,p*A*C)}const w=new Ke;w.setAttribute("position",new ze(E,g)),w.setAttribute("uv",new ze(_,m)),w.setAttribute("faceIndex",new ze(S,p)),i.push(new Ye(w,null)),s>ms&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Pp(n,e,t){const i=new _i(n,e,t);return i.texture.mapping=su,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function EI(n,e,t){return new Et({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xI,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hu(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function vI(n,e,t){const i=new Float32Array(Ks),s=new x(0,1,0);return new Et({name:"SphericalGaussianBlur",defines:{n:Ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hu(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Up(){return new Et({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Fp(){return new Et({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function hu(){return`

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
	`}function MI(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Cd||l===Id,u=l===hr||l===fa;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Lp(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Lp(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function SI(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Qo("WebGLRenderer: "+i+" extension not supported."),s}}}function CI(n,e,t,i){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const A in d.attributes)e.remove(d.attributes[A]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,A=h.attributes.position;let g=0;if(f!==null){const E=f.array;g=f.version;for(let _=0,S=E.length;_<S;_+=3){const w=E[_+0],C=E[_+1],B=E[_+2];d.push(w,C,C,B,B,w)}}else if(A!==void 0){const E=A.array;g=A.version;for(let _=0,S=E.length/3-1;_<S;_+=3){const w=_+0,C=_+1,B=_+2;d.push(w,C,C,B,B,w)}}else return;const m=new(Q0(d)?H0:z0)(d,1);m.version=g;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function II(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*a),t.update(f,i,1)}function c(d,f,A){A!==0&&(n.drawElementsInstanced(i,f,r,d*a,A),t.update(f,i,A))}function u(d,f,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,A);let m=0;for(let p=0;p<A;p++)m+=f[p];t.update(m,i,1)}function h(d,f,A,g){if(A===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,g,0,A);let p=0;for(let E=0;E<A;E++)p+=f[E]*g[E];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function wI(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:je("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function bI(n,e,t){const i=new WeakMap,s=new ot;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let v=function(){B.dispose(),i.delete(o),o.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,A=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let _=0;f===!0&&(_=1),A===!0&&(_=2),g===!0&&(_=3);let S=o.attributes.position.count*_,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const C=new Float32Array(S*w*4*h),B=new O0(C,S,w,h);B.type=hn,B.needsUpdate=!0;const P=_*4;for(let y=0;y<h;y++){const b=m[y],R=p[y],U=E[y],Q=S*w*4*y;for(let F=0;F<b.count;F++){const k=F*P;f===!0&&(s.fromBufferAttribute(b,F),C[Q+k+0]=s.x,C[Q+k+1]=s.y,C[Q+k+2]=s.z,C[Q+k+3]=0),A===!0&&(s.fromBufferAttribute(R,F),C[Q+k+4]=s.x,C[Q+k+5]=s.y,C[Q+k+6]=s.z,C[Q+k+7]=0),g===!0&&(s.fromBufferAttribute(U,F),C[Q+k+8]=s.x,C[Q+k+9]=s.y,C[Q+k+10]=s.z,C[Q+k+11]=U.itemSize===4?s.w:1)}}d={count:h,texture:B,size:new Me(S,w)},i.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];const A=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",A),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function TI(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const dx=new zt,Np=new ex(1,1),fx=new O0,Ax=new k0,px=new X0,Qp=[],Op=[],kp=new Float32Array(16),Gp=new Float32Array(9),zp=new Float32Array(4);function La(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Qp[s];if(r===void 0&&(r=new Float32Array(s),Qp[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function du(n,e){let t=Op[e];t===void 0&&(t=new Int32Array(e),Op[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function BI(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function RI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2fv(this.addr,e),Xt(t,e)}}function DI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;n.uniform3fv(this.addr,e),Xt(t,e)}}function LI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4fv(this.addr,e),Xt(t,e)}}function PI(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,i))return;zp.set(i),n.uniformMatrix2fv(this.addr,!1,zp),Xt(t,i)}}function UI(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,i))return;Gp.set(i),n.uniformMatrix3fv(this.addr,!1,Gp),Xt(t,i)}}function FI(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,i))return;kp.set(i),n.uniformMatrix4fv(this.addr,!1,kp),Xt(t,i)}}function NI(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function QI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2iv(this.addr,e),Xt(t,e)}}function OI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3iv(this.addr,e),Xt(t,e)}}function kI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4iv(this.addr,e),Xt(t,e)}}function GI(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function zI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2uiv(this.addr,e),Xt(t,e)}}function HI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3uiv(this.addr,e),Xt(t,e)}}function VI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4uiv(this.addr,e),Xt(t,e)}}function WI(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Np.compareFunction=N0,r=Np):r=dx,t.setTexture2D(e||r,s)}function qI(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ax,s)}function XI(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||px,s)}function YI(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||fx,s)}function KI(n){switch(n){case 5126:return BI;case 35664:return RI;case 35665:return DI;case 35666:return LI;case 35674:return PI;case 35675:return UI;case 35676:return FI;case 5124:case 35670:return NI;case 35667:case 35671:return QI;case 35668:case 35672:return OI;case 35669:case 35673:return kI;case 5125:return GI;case 36294:return zI;case 36295:return HI;case 36296:return VI;case 35678:case 36198:case 36298:case 36306:case 35682:return WI;case 35679:case 36299:case 36307:return qI;case 35680:case 36300:case 36308:case 36293:return XI;case 36289:case 36303:case 36311:case 36292:return YI}}function JI(n,e){n.uniform1fv(this.addr,e)}function jI(n,e){const t=La(e,this.size,2);n.uniform2fv(this.addr,t)}function ZI(n,e){const t=La(e,this.size,3);n.uniform3fv(this.addr,t)}function $I(n,e){const t=La(e,this.size,4);n.uniform4fv(this.addr,t)}function ew(n,e){const t=La(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function tw(n,e){const t=La(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function nw(n,e){const t=La(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function iw(n,e){n.uniform1iv(this.addr,e)}function sw(n,e){n.uniform2iv(this.addr,e)}function rw(n,e){n.uniform3iv(this.addr,e)}function aw(n,e){n.uniform4iv(this.addr,e)}function ow(n,e){n.uniform1uiv(this.addr,e)}function cw(n,e){n.uniform2uiv(this.addr,e)}function lw(n,e){n.uniform3uiv(this.addr,e)}function uw(n,e){n.uniform4uiv(this.addr,e)}function hw(n,e,t){const i=this.cache,s=e.length,r=du(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||dx,r[a])}function dw(n,e,t){const i=this.cache,s=e.length,r=du(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ax,r[a])}function fw(n,e,t){const i=this.cache,s=e.length,r=du(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||px,r[a])}function Aw(n,e,t){const i=this.cache,s=e.length,r=du(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||fx,r[a])}function pw(n){switch(n){case 5126:return JI;case 35664:return jI;case 35665:return ZI;case 35666:return $I;case 35674:return ew;case 35675:return tw;case 35676:return nw;case 5124:case 35670:return iw;case 35667:case 35671:return sw;case 35668:case 35672:return rw;case 35669:case 35673:return aw;case 5125:return ow;case 36294:return cw;case 36295:return lw;case 36296:return uw;case 35678:case 36198:case 36298:case 36306:case 35682:return hw;case 35679:case 36299:case 36307:return dw;case 35680:case 36300:case 36308:case 36293:return fw;case 36289:case 36303:case 36311:case 36292:return Aw}}class mw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=KI(t.type)}}class gw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pw(t.type)}}class xw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const dh=/(\w+)(\])?(\[|\.)?/g;function Hp(n,e){n.seq.push(e),n.map[e.id]=e}function _w(n,e,t){const i=n.name,s=i.length;for(dh.lastIndex=0;;){const r=dh.exec(i),a=dh.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Hp(t,c===void 0?new mw(o,n,e):new gw(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new xw(o),Hp(t,h)),t=h}}}class Cl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);_w(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Vp(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const yw=37297;let Ew=0;function vw(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Wp=new Ne;function Mw(n){at._getMatrix(Wp,at.workingColorSpace,n);const e=`mat3( ${Wp.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(n)){case zl:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function qp(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+vw(n.getShaderSource(e),o)}else return r}function Sw(n,e){const t=Mw(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Cw(n,e){let t;switch(e){case wE:t="Linear";break;case T0:t="Reinhard";break;case bE:t="Cineon";break;case TE:t="ACESFilmic";break;case RE:t="AgX";break;case DE:t="Neutral";break;case BE:t="Custom";break;default:Ie("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Uc=new x;function Iw(){at.getLuminanceCoefficients(Uc);const n=Uc.x.toFixed(4),e=Uc.y.toFixed(4),t=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ww(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ho).join(`
`)}function bw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Tw(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ho(n){return n!==""}function Xp(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xd(n){return n.replace(Bw,Dw)}const Rw=new Map;function Dw(n,e){let t=Xe[e];if(t===void 0){const i=Rw.get(e);if(i!==void 0)t=Xe[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xd(t)}const Lw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kp(n){return n.replace(Lw,Pw)}function Pw(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jp(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Uw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ef?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===aE?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function Fw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case hr:case fa:e="ENVMAP_TYPE_CUBE";break;case su:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Nw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case fa:e="ENVMAP_MODE_REFRACTION";break}return e}function Qw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case b0:e="ENVMAP_BLENDING_MULTIPLY";break;case CE:e="ENVMAP_BLENDING_MIX";break;case IE:e="ENVMAP_BLENDING_ADD";break}return e}function Ow(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function kw(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Uw(t),c=Fw(t),u=Nw(t),h=Qw(t),d=Ow(t),f=ww(t),A=bw(r),g=s.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(ho).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(ho).join(`
`),p.length>0&&(p+=`
`)):(m=[Jp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),p=[Jp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vs?"#define TONE_MAPPING":"",t.toneMapping!==vs?Xe.tonemapping_pars_fragment:"",t.toneMapping!==vs?Cw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Sw("linearToOutputTexel",t.outputColorSpace),Iw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ho).join(`
`)),a=Xd(a),a=Xp(a,t),a=Yp(a,t),o=Xd(o),o=Xp(o,t),o=Yp(o,t),a=Kp(a),o=Kp(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===kA?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kA?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=E+m+a,S=E+p+o,w=Vp(s,s.VERTEX_SHADER,_),C=Vp(s,s.FRAGMENT_SHADER,S);s.attachShader(g,w),s.attachShader(g,C),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function B(b){if(n.debug.checkShaderErrors){const R=s.getProgramInfoLog(g)||"",U=s.getShaderInfoLog(w)||"",Q=s.getShaderInfoLog(C)||"",F=R.trim(),k=U.trim(),X=Q.trim();let z=!0,te=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,w,C);else{const ie=qp(s,w,"vertex"),ee=qp(s,C,"fragment");je("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+F+`
`+ie+`
`+ee)}else F!==""?Ie("WebGLProgram: Program Info Log:",F):(k===""||X==="")&&(te=!1);te&&(b.diagnostics={runnable:z,programLog:F,vertexShader:{log:k,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(w),s.deleteShader(C),P=new Cl(s,g),v=Tw(s,g)}let P;this.getUniforms=function(){return P===void 0&&B(this),P};let v;this.getAttributes=function(){return v===void 0&&B(this),v};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(g,yw)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ew++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=C,this}let Gw=0;class zw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Hw(e),t.set(e,i)),i}}class Hw{constructor(e){this.id=Gw++,this.code=e,this.usedTimes=0}}function Vw(n,e,t,i,s,r,a){const o=new Rf,l=new zw,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,y,b,R,U){const Q=R.fog,F=U.geometry,k=v.isMeshStandardMaterial?R.environment:null,X=(v.isMeshStandardMaterial?t:e).get(v.envMap||k),z=X&&X.mapping===su?X.image.height:null,te=A[v.type];v.precision!==null&&(f=s.getMaxPrecision(v.precision),f!==v.precision&&Ie("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const ie=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ee=ie!==void 0?ie.length:0;let pe=0;F.morphAttributes.position!==void 0&&(pe=1),F.morphAttributes.normal!==void 0&&(pe=2),F.morphAttributes.color!==void 0&&(pe=3);let be,tt,At,K;if(te){const gt=wn[te];be=gt.vertexShader,tt=gt.fragmentShader}else be=v.vertexShader,tt=v.fragmentShader,l.update(v),At=l.getVertexShaderID(v),K=l.getFragmentShaderID(v);const $=n.getRenderTarget(),xe=n.state.buffers.depth.getReversed(),qe=U.isInstancedMesh===!0,Te=U.isBatchedMesh===!0,nt=!!v.map,Zt=!!v.matcap,Ze=!!X,Bt=!!v.aoMap,D=!!v.lightMap,it=!!v.bumpMap,st=!!v.normalMap,St=!!v.displacementMap,Ee=!!v.emissiveMap,Lt=!!v.metalnessMap,Re=!!v.roughnessMap,We=v.anisotropy>0,T=v.clearcoat>0,M=v.dispersion>0,G=v.iridescence>0,Y=v.sheen>0,Z=v.transmission>0,q=We&&!!v.anisotropyMap,we=T&&!!v.clearcoatMap,he=T&&!!v.clearcoatNormalMap,De=T&&!!v.clearcoatRoughnessMap,Ce=G&&!!v.iridescenceMap,ne=G&&!!v.iridescenceThicknessMap,ae=Y&&!!v.sheenColorMap,Fe=Y&&!!v.sheenRoughnessMap,Pe=!!v.specularMap,Ae=!!v.specularColorMap,ke=!!v.specularIntensityMap,L=Z&&!!v.transmissionMap,de=Z&&!!v.thicknessMap,oe=!!v.gradientMap,ce=!!v.alphaMap,se=v.alphaTest>0,J=!!v.alphaHash,_e=!!v.extensions;let He=vs;v.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(He=n.toneMapping);const Ct={shaderID:te,shaderType:v.type,shaderName:v.name,vertexShader:be,fragmentShader:tt,defines:v.defines,customVertexShaderID:At,customFragmentShaderID:K,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Te,batchingColor:Te&&U._colorsTexture!==null,instancing:qe,instancingColor:qe&&U.instanceColor!==null,instancingMorph:qe&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?n.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:on,alphaToCoverage:!!v.alphaToCoverage,map:nt,matcap:Zt,envMap:Ze,envMapMode:Ze&&X.mapping,envMapCubeUVHeight:z,aoMap:Bt,lightMap:D,bumpMap:it,normalMap:st,displacementMap:d&&St,emissiveMap:Ee,normalMapObjectSpace:st&&v.normalMapType===NE,normalMapTangentSpace:st&&v.normalMapType===F0,metalnessMap:Lt,roughnessMap:Re,anisotropy:We,anisotropyMap:q,clearcoat:T,clearcoatMap:we,clearcoatNormalMap:he,clearcoatRoughnessMap:De,dispersion:M,iridescence:G,iridescenceMap:Ce,iridescenceThicknessMap:ne,sheen:Y,sheenColorMap:ae,sheenRoughnessMap:Fe,specularMap:Pe,specularColorMap:Ae,specularIntensityMap:ke,transmission:Z,transmissionMap:L,thicknessMap:de,gradientMap:oe,opaque:v.transparent===!1&&v.blending===na&&v.alphaToCoverage===!1,alphaMap:ce,alphaTest:se,alphaHash:J,combine:v.combine,mapUv:nt&&g(v.map.channel),aoMapUv:Bt&&g(v.aoMap.channel),lightMapUv:D&&g(v.lightMap.channel),bumpMapUv:it&&g(v.bumpMap.channel),normalMapUv:st&&g(v.normalMap.channel),displacementMapUv:St&&g(v.displacementMap.channel),emissiveMapUv:Ee&&g(v.emissiveMap.channel),metalnessMapUv:Lt&&g(v.metalnessMap.channel),roughnessMapUv:Re&&g(v.roughnessMap.channel),anisotropyMapUv:q&&g(v.anisotropyMap.channel),clearcoatMapUv:we&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:he&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&g(v.sheenRoughnessMap.channel),specularMapUv:Pe&&g(v.specularMap.channel),specularColorMapUv:Ae&&g(v.specularColorMap.channel),specularIntensityMapUv:ke&&g(v.specularIntensityMap.channel),transmissionMapUv:L&&g(v.transmissionMap.channel),thicknessMapUv:de&&g(v.thicknessMap.channel),alphaMapUv:ce&&g(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(st||We),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(nt||ce),fog:!!Q,useFog:v.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:xe,skinning:U.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:pe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&b.length>0,shadowMapType:n.shadowMap.type,toneMapping:He,decodeVideoTexture:nt&&v.map.isVideoTexture===!0&&at.getTransfer(v.map.colorSpace)===_t,decodeVideoTextureEmissive:Ee&&v.emissiveMap.isVideoTexture===!0&&at.getTransfer(v.emissiveMap.colorSpace)===_t,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Gt,flipSided:v.side===Vt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:_e&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&v.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function p(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const b in v.defines)y.push(b),y.push(v.defines[b]);return v.isRawShaderMaterial===!1&&(E(y,v),_(y,v),y.push(n.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function E(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function _(v,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),v.push(o.mask)}function S(v){const y=A[v.type];let b;if(y){const R=wn[y];b=Df.clone(R.uniforms)}else b=v.uniforms;return b}function w(v,y){let b;for(let R=0,U=u.length;R<U;R++){const Q=u[R];if(Q.cacheKey===y){b=Q,++b.usedTimes;break}}return b===void 0&&(b=new kw(n,y,v,r),u.push(b)),b}function C(v){if(--v.usedTimes===0){const y=u.indexOf(v);u[y]=u[u.length-1],u.pop(),v.destroy()}}function B(v){l.remove(v)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:w,releaseProgram:C,releaseShaderCache:B,programs:u,dispose:P}}function Ww(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function qw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function jp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Zp(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h,d,f,A,g,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:A,renderOrder:h.renderOrder,z:g,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=A,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function o(h,d,f,A,g,m){const p=a(h,d,f,A,g,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,A,g,m){const p=a(h,d,f,A,g,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||qw),i.length>1&&i.sort(d||jp),s.length>1&&s.sort(d||jp)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Xw(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Zp,n.set(i,[a])):s>=r.length?(a=new Zp,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Yw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new x,color:new Se};break;case"SpotLight":t={position:new x,direction:new x,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new x,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new x,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new x,halfWidth:new x,halfHeight:new x};break}return n[e.id]=t,t}}}function Kw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Jw=0;function jw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Zw(n){const e=new Yw,t=Kw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new x);const s=new x,r=new ge,a=new ge;function o(c){let u=0,h=0,d=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let f=0,A=0,g=0,m=0,p=0,E=0,_=0,S=0,w=0,C=0,B=0;c.sort(jw);for(let v=0,y=c.length;v<y;v++){const b=c[v],R=b.color,U=b.intensity,Q=b.distance,F=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=R.r*U,h+=R.g*U,d+=R.b*U;else if(b.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(b.sh.coefficients[k],U);B++}else if(b.isDirectionalLight){const k=e.get(b);if(k.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const X=b.shadow,z=t.get(b);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,i.directionalShadow[f]=z,i.directionalShadowMap[f]=F,i.directionalShadowMatrix[f]=b.shadow.matrix,E++}i.directional[f]=k,f++}else if(b.isSpotLight){const k=e.get(b);k.position.setFromMatrixPosition(b.matrixWorld),k.color.copy(R).multiplyScalar(U),k.distance=Q,k.coneCos=Math.cos(b.angle),k.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),k.decay=b.decay,i.spot[g]=k;const X=b.shadow;if(b.map&&(i.spotLightMap[w]=b.map,w++,X.updateMatrices(b),b.castShadow&&C++),i.spotLightMatrix[g]=X.matrix,b.castShadow){const z=t.get(b);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,i.spotShadow[g]=z,i.spotShadowMap[g]=F,S++}g++}else if(b.isRectAreaLight){const k=e.get(b);k.color.copy(R).multiplyScalar(U),k.halfWidth.set(b.width*.5,0,0),k.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=k,m++}else if(b.isPointLight){const k=e.get(b);if(k.color.copy(b.color).multiplyScalar(b.intensity),k.distance=b.distance,k.decay=b.decay,b.castShadow){const X=b.shadow,z=t.get(b);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,z.shadowCameraNear=X.camera.near,z.shadowCameraFar=X.camera.far,i.pointShadow[A]=z,i.pointShadowMap[A]=F,i.pointShadowMatrix[A]=b.shadow.matrix,_++}i.point[A]=k,A++}else if(b.isHemisphereLight){const k=e.get(b);k.skyColor.copy(b.color).multiplyScalar(U),k.groundColor.copy(b.groundColor).multiplyScalar(U),i.hemi[p]=k,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==f||P.pointLength!==A||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==E||P.numPointShadows!==_||P.numSpotShadows!==S||P.numSpotMaps!==w||P.numLightProbes!==B)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=m,i.point.length=A,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=B,P.directionalLength=f,P.pointLength=A,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=E,P.numPointShadows=_,P.numSpotShadows=S,P.numSpotMaps=w,P.numLightProbes=B,i.version=Jw++)}function l(c,u){let h=0,d=0,f=0,A=0,g=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const _=c[p];if(_.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(_.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(_.isRectAreaLight){const S=i.rectArea[A];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),A++}else if(_.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function $p(n){const e=new Zw(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function $w(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new $p(n),e.set(s,[o])):r>=a.length?(o=new $p(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const eb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tb=`uniform sampler2D shadow_pass;
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
}`;function nb(n,e,t){let i=new Uf;const s=new Me,r=new Me,a=new ot,o=new ix({depthPacking:U0}),l=new Yv,c={},u=t.maxTextureSize,h={[qn]:Vt,[Vt]:qn,[Gt]:Gt},d=new Et({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:eb,fragmentShader:tb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const A=new Ke;A.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ye(A,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ef;let p=this.type;this.render=function(C,B,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const v=n.getRenderTarget(),y=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),R=n.state;R.setBlending(Hi),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const U=p!==li&&this.type===li,Q=p===li&&this.type!==li;for(let F=0,k=C.length;F<k;F++){const X=C[F],z=X.shadow;if(z===void 0){Ie("WebGLShadowMap:",X,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const te=z.getFrameExtents();if(s.multiply(te),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/te.x),s.x=r.x*te.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/te.y),s.y=r.y*te.y,z.mapSize.y=r.y)),z.map===null||U===!0||Q===!0){const ee=this.type!==li?{minFilter:rn,magFilter:rn}:{};z.map!==null&&z.map.dispose(),z.map=new _i(s.x,s.y,ee),z.map.texture.name=X.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const ie=z.getViewportCount();for(let ee=0;ee<ie;ee++){const pe=z.getViewport(ee);a.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),R.viewport(a),z.updateMatrices(X,ee),i=z.getFrustum(),S(B,P,z.camera,X,this.type)}z.isPointLightShadow!==!0&&this.type===li&&E(z,P),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(v,y,b)};function E(C,B){const P=e.update(g);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new _i(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(B,null,P,d,g,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(B,null,P,f,g,null)}function _(C,B,P,v){let y=null;const b=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(b!==void 0)y=b;else if(y=P.isPointLight===!0?l:o,n.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const R=y.uuid,U=B.uuid;let Q=c[R];Q===void 0&&(Q={},c[R]=Q);let F=Q[U];F===void 0&&(F=y.clone(),Q[U]=F,B.addEventListener("dispose",w)),y=F}if(y.visible=B.visible,y.wireframe=B.wireframe,v===li?y.side=B.shadowSide!==null?B.shadowSide:B.side:y.side=B.shadowSide!==null?B.shadowSide:h[B.side],y.alphaMap=B.alphaMap,y.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,y.map=B.map,y.clipShadows=B.clipShadows,y.clippingPlanes=B.clippingPlanes,y.clipIntersection=B.clipIntersection,y.displacementMap=B.displacementMap,y.displacementScale=B.displacementScale,y.displacementBias=B.displacementBias,y.wireframeLinewidth=B.wireframeLinewidth,y.linewidth=B.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const R=n.properties.get(y);R.light=P}return y}function S(C,B,P,v,y){if(C.visible===!1)return;if(C.layers.test(B.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===li)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const U=e.update(C),Q=C.material;if(Array.isArray(Q)){const F=U.groups;for(let k=0,X=F.length;k<X;k++){const z=F[k],te=Q[z.materialIndex];if(te&&te.visible){const ie=_(C,te,v,y);C.onBeforeShadow(n,C,B,P,U,ie,z),n.renderBufferDirect(P,null,U,ie,C,z),C.onAfterShadow(n,C,B,P,U,ie,z)}}}else if(Q.visible){const F=_(C,Q,v,y);C.onBeforeShadow(n,C,B,P,U,F,null),n.renderBufferDirect(P,null,U,F,C,null),C.onAfterShadow(n,C,B,P,U,F,null)}}const R=C.children;for(let U=0,Q=R.length;U<Q;U++)S(R[U],B,P,v,y)}function w(C){C.target.removeEventListener("dispose",w);for(const P in c){const v=c[P],y=C.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}const ib={[xd]:_d,[yd]:Md,[Ed]:Sd,[da]:vd,[_d]:xd,[Md]:yd,[Sd]:Ed,[vd]:da};function sb(n,e){function t(){let L=!1;const de=new ot;let oe=null;const ce=new ot(0,0,0,0);return{setMask:function(se){oe!==se&&!L&&(n.colorMask(se,se,se,se),oe=se)},setLocked:function(se){L=se},setClear:function(se,J,_e,He,Ct){Ct===!0&&(se*=He,J*=He,_e*=He),de.set(se,J,_e,He),ce.equals(de)===!1&&(n.clearColor(se,J,_e,He),ce.copy(de))},reset:function(){L=!1,oe=null,ce.set(-1,0,0,0)}}}function i(){let L=!1,de=!1,oe=null,ce=null,se=null;return{setReversed:function(J){if(de!==J){const _e=e.get("EXT_clip_control");J?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),de=J;const He=se;se=null,this.setClear(He)}},getReversed:function(){return de},setTest:function(J){J?$(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(J){oe!==J&&!L&&(n.depthMask(J),oe=J)},setFunc:function(J){if(de&&(J=ib[J]),ce!==J){switch(J){case xd:n.depthFunc(n.NEVER);break;case _d:n.depthFunc(n.ALWAYS);break;case yd:n.depthFunc(n.LESS);break;case da:n.depthFunc(n.LEQUAL);break;case Ed:n.depthFunc(n.EQUAL);break;case vd:n.depthFunc(n.GEQUAL);break;case Md:n.depthFunc(n.GREATER);break;case Sd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=J}},setLocked:function(J){L=J},setClear:function(J){se!==J&&(de&&(J=1-J),n.clearDepth(J),se=J)},reset:function(){L=!1,oe=null,ce=null,se=null,de=!1}}}function s(){let L=!1,de=null,oe=null,ce=null,se=null,J=null,_e=null,He=null,Ct=null;return{setTest:function(gt){L||(gt?$(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(gt){de!==gt&&!L&&(n.stencilMask(gt),de=gt)},setFunc:function(gt,ri,Xn){(oe!==gt||ce!==ri||se!==Xn)&&(n.stencilFunc(gt,ri,Xn),oe=gt,ce=ri,se=Xn)},setOp:function(gt,ri,Xn){(J!==gt||_e!==ri||He!==Xn)&&(n.stencilOp(gt,ri,Xn),J=gt,_e=ri,He=Xn)},setLocked:function(gt){L=gt},setClear:function(gt){Ct!==gt&&(n.clearStencil(gt),Ct=gt)},reset:function(){L=!1,de=null,oe=null,ce=null,se=null,J=null,_e=null,He=null,Ct=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],A=null,g=!1,m=null,p=null,E=null,_=null,S=null,w=null,C=null,B=new Se(0,0,0),P=0,v=!1,y=null,b=null,R=null,U=null,Q=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,X=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(z)[1]),k=X>=1):z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),k=X>=2);let te=null,ie={};const ee=n.getParameter(n.SCISSOR_BOX),pe=n.getParameter(n.VIEWPORT),be=new ot().fromArray(ee),tt=new ot().fromArray(pe);function At(L,de,oe,ce){const se=new Uint8Array(4),J=n.createTexture();n.bindTexture(L,J),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let _e=0;_e<oe;_e++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(de+_e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return J}const K={};K[n.TEXTURE_2D]=At(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=At(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=At(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=At(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(n.DEPTH_TEST),a.setFunc(da),it(!1),st(DA),$(n.CULL_FACE),Bt(Hi);function $(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function xe(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function qe(L,de){return h[L]!==de?(n.bindFramebuffer(L,de),h[L]=de,L===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=de),L===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=de),!0):!1}function Te(L,de){let oe=f,ce=!1;if(L){oe=d.get(de),oe===void 0&&(oe=[],d.set(de,oe));const se=L.textures;if(oe.length!==se.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let J=0,_e=se.length;J<_e;J++)oe[J]=n.COLOR_ATTACHMENT0+J;oe.length=se.length,ce=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,ce=!0);ce&&n.drawBuffers(oe)}function nt(L){return A!==L?(n.useProgram(L),A=L,!0):!1}const Zt={[Ys]:n.FUNC_ADD,[cE]:n.FUNC_SUBTRACT,[lE]:n.FUNC_REVERSE_SUBTRACT};Zt[uE]=n.MIN,Zt[hE]=n.MAX;const Ze={[dE]:n.ZERO,[fE]:n.ONE,[AE]:n.SRC_COLOR,[md]:n.SRC_ALPHA,[yE]:n.SRC_ALPHA_SATURATE,[xE]:n.DST_COLOR,[mE]:n.DST_ALPHA,[pE]:n.ONE_MINUS_SRC_COLOR,[gd]:n.ONE_MINUS_SRC_ALPHA,[_E]:n.ONE_MINUS_DST_COLOR,[gE]:n.ONE_MINUS_DST_ALPHA,[EE]:n.CONSTANT_COLOR,[vE]:n.ONE_MINUS_CONSTANT_COLOR,[ME]:n.CONSTANT_ALPHA,[SE]:n.ONE_MINUS_CONSTANT_ALPHA};function Bt(L,de,oe,ce,se,J,_e,He,Ct,gt){if(L===Hi){g===!0&&(xe(n.BLEND),g=!1);return}if(g===!1&&($(n.BLEND),g=!0),L!==oE){if(L!==m||gt!==v){if((p!==Ys||S!==Ys)&&(n.blendEquation(n.FUNC_ADD),p=Ys,S=Ys),gt)switch(L){case na:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ss:n.blendFunc(n.ONE,n.ONE);break;case LA:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case PA:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:je("WebGLState: Invalid blending: ",L);break}else switch(L){case na:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case LA:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case PA:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",L);break}E=null,_=null,w=null,C=null,B.set(0,0,0),P=0,m=L,v=gt}return}se=se||de,J=J||oe,_e=_e||ce,(de!==p||se!==S)&&(n.blendEquationSeparate(Zt[de],Zt[se]),p=de,S=se),(oe!==E||ce!==_||J!==w||_e!==C)&&(n.blendFuncSeparate(Ze[oe],Ze[ce],Ze[J],Ze[_e]),E=oe,_=ce,w=J,C=_e),(He.equals(B)===!1||Ct!==P)&&(n.blendColor(He.r,He.g,He.b,Ct),B.copy(He),P=Ct),m=L,v=!1}function D(L,de){L.side===Gt?xe(n.CULL_FACE):$(n.CULL_FACE);let oe=L.side===Vt;de&&(oe=!oe),it(oe),L.blending===na&&L.transparent===!1?Bt(Hi):Bt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const ce=L.stencilWrite;o.setTest(ce),ce&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ee(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?$(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function it(L){y!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),y=L)}function st(L){L!==sE?($(n.CULL_FACE),L!==b&&(L===DA?n.cullFace(n.BACK):L===rE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),b=L}function St(L){L!==R&&(k&&n.lineWidth(L),R=L)}function Ee(L,de,oe){L?($(n.POLYGON_OFFSET_FILL),(U!==de||Q!==oe)&&(n.polygonOffset(de,oe),U=de,Q=oe)):xe(n.POLYGON_OFFSET_FILL)}function Lt(L){L?$(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function Re(L){L===void 0&&(L=n.TEXTURE0+F-1),te!==L&&(n.activeTexture(L),te=L)}function We(L,de,oe){oe===void 0&&(te===null?oe=n.TEXTURE0+F-1:oe=te);let ce=ie[oe];ce===void 0&&(ce={type:void 0,texture:void 0},ie[oe]=ce),(ce.type!==L||ce.texture!==de)&&(te!==oe&&(n.activeTexture(oe),te=oe),n.bindTexture(L,de||K[L]),ce.type=L,ce.texture=de)}function T(){const L=ie[te];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function G(){try{n.compressedTexImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function Y(){try{n.texSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Z(){try{n.texSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function we(){try{n.compressedTexSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function he(){try{n.texStorage2D(...arguments)}catch(L){L("WebGLState:",L)}}function De(){try{n.texStorage3D(...arguments)}catch(L){L("WebGLState:",L)}}function Ce(){try{n.texImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function ne(){try{n.texImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function ae(L){be.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),be.copy(L))}function Fe(L){tt.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),tt.copy(L))}function Pe(L,de){let oe=c.get(de);oe===void 0&&(oe=new WeakMap,c.set(de,oe));let ce=oe.get(L);ce===void 0&&(ce=n.getUniformBlockIndex(de,L.name),oe.set(L,ce))}function Ae(L,de){const ce=c.get(de).get(L);l.get(de)!==ce&&(n.uniformBlockBinding(de,ce,L.__bindingPointIndex),l.set(de,ce))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},te=null,ie={},h={},d=new WeakMap,f=[],A=null,g=!1,m=null,p=null,E=null,_=null,S=null,w=null,C=null,B=new Se(0,0,0),P=0,v=!1,y=null,b=null,R=null,U=null,Q=null,be.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:$,disable:xe,bindFramebuffer:qe,drawBuffers:Te,useProgram:nt,setBlending:Bt,setMaterial:D,setFlipSided:it,setCullFace:st,setLineWidth:St,setPolygonOffset:Ee,setScissorTest:Lt,activeTexture:Re,bindTexture:We,unbindTexture:T,compressedTexImage2D:M,compressedTexImage3D:G,texImage2D:Ce,texImage3D:ne,updateUBOMapping:Pe,uniformBlockBinding:Ae,texStorage2D:he,texStorage3D:De,texSubImage2D:Y,texSubImage3D:Z,compressedTexSubImage2D:q,compressedTexSubImage3D:we,scissor:ae,viewport:Fe,reset:ke}}function rb(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(T,M){return f?new OffscreenCanvas(T,M):No("canvas")}function g(T,M,G){let Y=1;const Z=We(T);if((Z.width>G||Z.height>G)&&(Y=G/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(Y*Z.width),we=Math.floor(Y*Z.height);h===void 0&&(h=A(q,we));const he=M?A(q,we):h;return he.width=q,he.height=we,he.getContext("2d").drawImage(T,0,0,q,we),Ie("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+we+")."),he}else return"data"in T&&Ie("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(T,M,G,Y,Z=!1){if(T!==null){if(n[T]!==void 0)return n[T];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=M;if(M===n.RED&&(G===n.FLOAT&&(q=n.R32F),G===n.HALF_FLOAT&&(q=n.R16F),G===n.UNSIGNED_BYTE&&(q=n.R8)),M===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(q=n.R8UI),G===n.UNSIGNED_SHORT&&(q=n.R16UI),G===n.UNSIGNED_INT&&(q=n.R32UI),G===n.BYTE&&(q=n.R8I),G===n.SHORT&&(q=n.R16I),G===n.INT&&(q=n.R32I)),M===n.RG&&(G===n.FLOAT&&(q=n.RG32F),G===n.HALF_FLOAT&&(q=n.RG16F),G===n.UNSIGNED_BYTE&&(q=n.RG8)),M===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(q=n.RG8UI),G===n.UNSIGNED_SHORT&&(q=n.RG16UI),G===n.UNSIGNED_INT&&(q=n.RG32UI),G===n.BYTE&&(q=n.RG8I),G===n.SHORT&&(q=n.RG16I),G===n.INT&&(q=n.RG32I)),M===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(q=n.RGB8UI),G===n.UNSIGNED_SHORT&&(q=n.RGB16UI),G===n.UNSIGNED_INT&&(q=n.RGB32UI),G===n.BYTE&&(q=n.RGB8I),G===n.SHORT&&(q=n.RGB16I),G===n.INT&&(q=n.RGB32I)),M===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),G===n.UNSIGNED_INT&&(q=n.RGBA32UI),G===n.BYTE&&(q=n.RGBA8I),G===n.SHORT&&(q=n.RGBA16I),G===n.INT&&(q=n.RGBA32I)),M===n.RGB&&(G===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),M===n.RGBA){const we=Z?zl:at.getTransfer(Y);G===n.FLOAT&&(q=n.RGBA32F),G===n.HALF_FLOAT&&(q=n.RGBA16F),G===n.UNSIGNED_BYTE&&(q=we===_t?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function S(T,M){let G;return T?M===null||M===dr||M===bo?G=n.DEPTH24_STENCIL8:M===hn?G=n.DEPTH32F_STENCIL8:M===wo&&(G=n.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===dr||M===bo?G=n.DEPTH_COMPONENT24:M===hn?G=n.DEPTH_COMPONENT32F:M===wo&&(G=n.DEPTH_COMPONENT16),G}function w(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==rn&&T.minFilter!==wt?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function C(T){const M=T.target;M.removeEventListener("dispose",C),P(M),M.isVideoTexture&&u.delete(M)}function B(T){const M=T.target;M.removeEventListener("dispose",B),y(M)}function P(T){const M=i.get(T);if(M.__webglInit===void 0)return;const G=T.source,Y=d.get(G);if(Y){const Z=Y[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&v(T),Object.keys(Y).length===0&&d.delete(G)}i.remove(T)}function v(T){const M=i.get(T);n.deleteTexture(M.__webglTexture);const G=T.source,Y=d.get(G);delete Y[M.__cacheKey],a.memory.textures--}function y(T){const M=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let Z=0;Z<M.__webglFramebuffer[Y].length;Z++)n.deleteFramebuffer(M.__webglFramebuffer[Y][Z]);else n.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)n.deleteFramebuffer(M.__webglFramebuffer[Y]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=T.textures;for(let Y=0,Z=G.length;Y<Z;Y++){const q=i.get(G[Y]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(G[Y])}i.remove(T)}let b=0;function R(){b=0}function U(){const T=b;return T>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),b+=1,T}function Q(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function F(T,M){const G=i.get(T);if(T.isVideoTexture&&Lt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&G.__version!==T.version){const Y=T.image;if(Y===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{K(G,T,M);return}}else T.isExternalTexture&&(G.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+M)}function k(T,M){const G=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){K(G,T,M);return}else T.isExternalTexture&&(G.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+M)}function X(T,M){const G=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){K(G,T,M);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+M)}function z(T,M){const G=i.get(T);if(T.version>0&&G.__version!==T.version){$(G,T,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+M)}const te={[Cs]:n.REPEAT,[Vn]:n.CLAMP_TO_EDGE,[Pl]:n.MIRRORED_REPEAT},ie={[rn]:n.NEAREST,[vf]:n.NEAREST_MIPMAP_NEAREST,[uo]:n.NEAREST_MIPMAP_LINEAR,[wt]:n.LINEAR,[Sl]:n.LINEAR_MIPMAP_NEAREST,[Zn]:n.LINEAR_MIPMAP_LINEAR},ee={[QE]:n.NEVER,[VE]:n.ALWAYS,[OE]:n.LESS,[N0]:n.LEQUAL,[kE]:n.EQUAL,[HE]:n.GEQUAL,[GE]:n.GREATER,[zE]:n.NOTEQUAL};function pe(T,M){if(M.type===hn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===wt||M.magFilter===Sl||M.magFilter===uo||M.magFilter===Zn||M.minFilter===wt||M.minFilter===Sl||M.minFilter===uo||M.minFilter===Zn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,te[M.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,te[M.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,te[M.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ie[M.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ie[M.minFilter]),M.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,ee[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===rn||M.minFilter!==uo&&M.minFilter!==Zn||M.type===hn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function be(T,M){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",C));const Y=M.source;let Z=d.get(Y);Z===void 0&&(Z={},d.set(Y,Z));const q=Q(M);if(q!==T.__cacheKey){Z[q]===void 0&&(Z[q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),Z[q].usedTimes++;const we=Z[T.__cacheKey];we!==void 0&&(Z[T.__cacheKey].usedTimes--,we.usedTimes===0&&v(M)),T.__cacheKey=q,T.__webglTexture=Z[q].texture}return G}function tt(T,M,G){return Math.floor(Math.floor(T/G)/M)}function At(T,M,G,Y){const q=T.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,G,Y,M.data);else{q.sort((ne,ae)=>ne.start-ae.start);let we=0;for(let ne=1;ne<q.length;ne++){const ae=q[we],Fe=q[ne],Pe=ae.start+ae.count,Ae=tt(Fe.start,M.width,4),ke=tt(ae.start,M.width,4);Fe.start<=Pe+1&&Ae===ke&&tt(Fe.start+Fe.count-1,M.width,4)===Ae?ae.count=Math.max(ae.count,Fe.start+Fe.count-ae.start):(++we,q[we]=Fe)}q.length=we+1;const he=n.getParameter(n.UNPACK_ROW_LENGTH),De=n.getParameter(n.UNPACK_SKIP_PIXELS),Ce=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let ne=0,ae=q.length;ne<ae;ne++){const Fe=q[ne],Pe=Math.floor(Fe.start/4),Ae=Math.ceil(Fe.count/4),ke=Pe%M.width,L=Math.floor(Pe/M.width),de=Ae,oe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,ke,L,de,oe,G,Y,M.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,he),n.pixelStorei(n.UNPACK_SKIP_PIXELS,De),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ce)}}function K(T,M,G){let Y=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=n.TEXTURE_3D);const Z=be(T,M),q=M.source;t.bindTexture(Y,T.__webglTexture,n.TEXTURE0+G);const we=i.get(q);if(q.version!==we.__version||Z===!0){t.activeTexture(n.TEXTURE0+G);const he=at.getPrimaries(at.workingColorSpace),De=M.colorSpace===fi?null:at.getPrimaries(M.colorSpace),Ce=M.colorSpace===fi||he===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let ne=g(M.image,!1,s.maxTextureSize);ne=Re(M,ne);const ae=r.convert(M.format,M.colorSpace),Fe=r.convert(M.type);let Pe=_(M.internalFormat,ae,Fe,M.colorSpace,M.isVideoTexture);pe(Y,M);let Ae;const ke=M.mipmaps,L=M.isVideoTexture!==!0,de=we.__version===void 0||Z===!0,oe=q.dataReady,ce=w(M,ne);if(M.isDepthTexture)Pe=S(M.format===Ro,M.type),de&&(L?t.texStorage2D(n.TEXTURE_2D,1,Pe,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Pe,ne.width,ne.height,0,ae,Fe,null));else if(M.isDataTexture)if(ke.length>0){L&&de&&t.texStorage2D(n.TEXTURE_2D,ce,Pe,ke[0].width,ke[0].height);for(let se=0,J=ke.length;se<J;se++)Ae=ke[se],L?oe&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Ae.width,Ae.height,ae,Fe,Ae.data):t.texImage2D(n.TEXTURE_2D,se,Pe,Ae.width,Ae.height,0,ae,Fe,Ae.data);M.generateMipmaps=!1}else L?(de&&t.texStorage2D(n.TEXTURE_2D,ce,Pe,ne.width,ne.height),oe&&At(M,ne,ae,Fe)):t.texImage2D(n.TEXTURE_2D,0,Pe,ne.width,ne.height,0,ae,Fe,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){L&&de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,Pe,ke[0].width,ke[0].height,ne.depth);for(let se=0,J=ke.length;se<J;se++)if(Ae=ke[se],M.format!==Jt)if(ae!==null)if(L){if(oe)if(M.layerUpdates.size>0){const _e=Bp(Ae.width,Ae.height,M.format,M.type);for(const He of M.layerUpdates){const Ct=Ae.data.subarray(He*_e/Ae.data.BYTES_PER_ELEMENT,(He+1)*_e/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,He,Ae.width,Ae.height,1,ae,Ct)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Ae.width,Ae.height,ne.depth,ae,Ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,Pe,Ae.width,Ae.height,ne.depth,0,Ae.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Ae.width,Ae.height,ne.depth,ae,Fe,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,Pe,Ae.width,Ae.height,ne.depth,0,ae,Fe,Ae.data)}else{L&&de&&t.texStorage2D(n.TEXTURE_2D,ce,Pe,ke[0].width,ke[0].height);for(let se=0,J=ke.length;se<J;se++)Ae=ke[se],M.format!==Jt?ae!==null?L?oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,Ae.width,Ae.height,ae,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,se,Pe,Ae.width,Ae.height,0,Ae.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?oe&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Ae.width,Ae.height,ae,Fe,Ae.data):t.texImage2D(n.TEXTURE_2D,se,Pe,Ae.width,Ae.height,0,ae,Fe,Ae.data)}else if(M.isDataArrayTexture)if(L){if(de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,Pe,ne.width,ne.height,ne.depth),oe)if(M.layerUpdates.size>0){const se=Bp(ne.width,ne.height,M.format,M.type);for(const J of M.layerUpdates){const _e=ne.data.subarray(J*se/ne.data.BYTES_PER_ELEMENT,(J+1)*se/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,ne.width,ne.height,1,ae,Fe,_e)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ae,Fe,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,ne.width,ne.height,ne.depth,0,ae,Fe,ne.data);else if(M.isData3DTexture)L?(de&&t.texStorage3D(n.TEXTURE_3D,ce,Pe,ne.width,ne.height,ne.depth),oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ae,Fe,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,ne.width,ne.height,ne.depth,0,ae,Fe,ne.data);else if(M.isFramebufferTexture){if(de)if(L)t.texStorage2D(n.TEXTURE_2D,ce,Pe,ne.width,ne.height);else{let se=ne.width,J=ne.height;for(let _e=0;_e<ce;_e++)t.texImage2D(n.TEXTURE_2D,_e,Pe,se,J,0,ae,Fe,null),se>>=1,J>>=1}}else if(ke.length>0){if(L&&de){const se=We(ke[0]);t.texStorage2D(n.TEXTURE_2D,ce,Pe,se.width,se.height)}for(let se=0,J=ke.length;se<J;se++)Ae=ke[se],L?oe&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,ae,Fe,Ae):t.texImage2D(n.TEXTURE_2D,se,Pe,ae,Fe,Ae);M.generateMipmaps=!1}else if(L){if(de){const se=We(ne);t.texStorage2D(n.TEXTURE_2D,ce,Pe,se.width,se.height)}oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae,Fe,ne)}else t.texImage2D(n.TEXTURE_2D,0,Pe,ae,Fe,ne);m(M)&&p(Y),we.__version=q.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function $(T,M,G){if(M.image.length!==6)return;const Y=be(T,M),Z=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+G);const q=i.get(Z);if(Z.version!==q.__version||Y===!0){t.activeTexture(n.TEXTURE0+G);const we=at.getPrimaries(at.workingColorSpace),he=M.colorSpace===fi?null:at.getPrimaries(M.colorSpace),De=M.colorSpace===fi||we===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Ce=M.isCompressedTexture||M.image[0].isCompressedTexture,ne=M.image[0]&&M.image[0].isDataTexture,ae=[];for(let J=0;J<6;J++)!Ce&&!ne?ae[J]=g(M.image[J],!0,s.maxCubemapSize):ae[J]=ne?M.image[J].image:M.image[J],ae[J]=Re(M,ae[J]);const Fe=ae[0],Pe=r.convert(M.format,M.colorSpace),Ae=r.convert(M.type),ke=_(M.internalFormat,Pe,Ae,M.colorSpace),L=M.isVideoTexture!==!0,de=q.__version===void 0||Y===!0,oe=Z.dataReady;let ce=w(M,Fe);pe(n.TEXTURE_CUBE_MAP,M);let se;if(Ce){L&&de&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,ke,Fe.width,Fe.height);for(let J=0;J<6;J++){se=ae[J].mipmaps;for(let _e=0;_e<se.length;_e++){const He=se[_e];M.format!==Jt?Pe!==null?L?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,0,0,He.width,He.height,Pe,He.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,ke,He.width,He.height,0,He.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,0,0,He.width,He.height,Pe,Ae,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,ke,He.width,He.height,0,Pe,Ae,He.data)}}}else{if(se=M.mipmaps,L&&de){se.length>0&&ce++;const J=We(ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,ke,J.width,J.height)}for(let J=0;J<6;J++)if(ne){L?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ae[J].width,ae[J].height,Pe,Ae,ae[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ke,ae[J].width,ae[J].height,0,Pe,Ae,ae[J].data);for(let _e=0;_e<se.length;_e++){const Ct=se[_e].image[J].image;L?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,0,0,Ct.width,Ct.height,Pe,Ae,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,ke,Ct.width,Ct.height,0,Pe,Ae,Ct.data)}}else{L?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Pe,Ae,ae[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ke,Pe,Ae,ae[J]);for(let _e=0;_e<se.length;_e++){const He=se[_e];L?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,0,0,Pe,Ae,He.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,ke,Pe,Ae,He.image[J])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),q.__version=Z.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function xe(T,M,G,Y,Z,q){const we=r.convert(G.format,G.colorSpace),he=r.convert(G.type),De=_(G.internalFormat,we,he,G.colorSpace),Ce=i.get(M),ne=i.get(G);if(ne.__renderTarget=M,!Ce.__hasExternalTextures){const ae=Math.max(1,M.width>>q),Fe=Math.max(1,M.height>>q);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,q,De,ae,Fe,M.depth,0,we,he,null):t.texImage2D(Z,q,De,ae,Fe,0,we,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),Ee(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,Z,ne.__webglTexture,0,St(M)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,Z,ne.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function qe(T,M,G){if(n.bindRenderbuffer(n.RENDERBUFFER,T),M.depthBuffer){const Y=M.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,q=S(M.stencilBuffer,Z),we=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=St(M);Ee(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,q,M.width,M.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,q,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,q,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,T)}else{const Y=M.textures;for(let Z=0;Z<Y.length;Z++){const q=Y[Z],we=r.convert(q.format,q.colorSpace),he=r.convert(q.type),De=_(q.internalFormat,we,he,q.colorSpace),Ce=St(M);G&&Ee(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,De,M.width,M.height):Ee(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,De,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,De,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(M.depthTexture);Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),F(M.depthTexture,0);const Z=Y.__webglTexture,q=St(M);if(M.depthTexture.format===Bo)Ee(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(M.depthTexture.format===Ro)Ee(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function nt(T){const M=i.get(T),G=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=Y}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const Y=T.texture.mipmaps;Y&&Y.length>0?Te(M.__webglFramebuffer[0],T):Te(M.__webglFramebuffer,T)}else if(G){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=n.createRenderbuffer(),qe(M.__webglDepthbuffer[Y],T,!1);else{const Z=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,q)}}else{const Y=T.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),qe(M.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Zt(T,M,G){const Y=i.get(T);M!==void 0&&xe(Y.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&nt(T)}function Ze(T){const M=T.texture,G=i.get(T),Y=i.get(M);T.addEventListener("dispose",B);const Z=T.textures,q=T.isWebGLCubeRenderTarget===!0,we=Z.length>1;if(we||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=M.version,a.memory.textures++),q){G.__webglFramebuffer=[];for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[he]=[];for(let De=0;De<M.mipmaps.length;De++)G.__webglFramebuffer[he][De]=n.createFramebuffer()}else G.__webglFramebuffer[he]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)G.__webglFramebuffer[he]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(we)for(let he=0,De=Z.length;he<De;he++){const Ce=i.get(Z[he]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&Ee(T)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let he=0;he<Z.length;he++){const De=Z[he];G.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[he]);const Ce=r.convert(De.format,De.colorSpace),ne=r.convert(De.type),ae=_(De.internalFormat,Ce,ne,De.colorSpace,T.isXRRenderTarget===!0),Fe=St(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,ae,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,G.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),qe(G.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),pe(n.TEXTURE_CUBE_MAP,M);for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0)for(let De=0;De<M.mipmaps.length;De++)xe(G.__webglFramebuffer[he][De],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,De);else xe(G.__webglFramebuffer[he],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(M)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let he=0,De=Z.length;he<De;he++){const Ce=Z[he],ne=i.get(Ce);let ae=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ae=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,ne.__webglTexture),pe(ae,Ce),xe(G.__webglFramebuffer,T,Ce,n.COLOR_ATTACHMENT0+he,ae,0),m(Ce)&&p(ae)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,Y.__webglTexture),pe(he,M),M.mipmaps&&M.mipmaps.length>0)for(let De=0;De<M.mipmaps.length;De++)xe(G.__webglFramebuffer[De],T,M,n.COLOR_ATTACHMENT0,he,De);else xe(G.__webglFramebuffer,T,M,n.COLOR_ATTACHMENT0,he,0);m(M)&&p(he),t.unbindTexture()}T.depthBuffer&&nt(T)}function Bt(T){const M=T.textures;for(let G=0,Y=M.length;G<Y;G++){const Z=M[G];if(m(Z)){const q=E(T),we=i.get(Z).__webglTexture;t.bindTexture(q,we),p(q),t.unbindTexture()}}}const D=[],it=[];function st(T){if(T.samples>0){if(Ee(T)===!1){const M=T.textures,G=T.width,Y=T.height;let Z=n.COLOR_BUFFER_BIT;const q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(T),he=M.length>1;if(he)for(let Ce=0;Ce<M.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const De=T.texture.mipmaps;De&&De.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ce=0;Ce<M.length;Ce++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[Ce]);const ne=i.get(M[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,G,Y,0,0,G,Y,Z,n.NEAREST),l===!0&&(D.length=0,it.length=0,D.push(n.COLOR_ATTACHMENT0+Ce),T.depthBuffer&&T.resolveDepthBuffer===!1&&(D.push(q),it.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,it)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,D))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Ce=0;Ce<M.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,we.__webglColorRenderbuffer[Ce]);const ne=i.get(M[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const M=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function St(T){return Math.min(s.maxSamples,T.samples)}function Ee(T){const M=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Lt(T){const M=a.render.frame;u.get(T)!==M&&(u.set(T,M),T.update())}function Re(T,M){const G=T.colorSpace,Y=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||G!==on&&G!==fi&&(at.getTransfer(G)===_t?(Y!==Jt||Z!==Je)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",G)),M}function We(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=R,this.setTexture2D=F,this.setTexture2DArray=k,this.setTexture3D=X,this.setTextureCube=z,this.rebindTextures=Zt,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ee}function ab(n,e){function t(i,s=fi){let r;const a=at.getTransfer(s);if(i===Je)return n.UNSIGNED_BYTE;if(i===Sf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Cf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ru)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===au)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===R0)return n.BYTE;if(i===D0)return n.SHORT;if(i===wo)return n.UNSIGNED_SHORT;if(i===Mf)return n.INT;if(i===dr)return n.UNSIGNED_INT;if(i===hn)return n.FLOAT;if(i===Un)return n.HALF_FLOAT;if(i===L0)return n.ALPHA;if(i===To)return n.RGB;if(i===Jt)return n.RGBA;if(i===Bo)return n.DEPTH_COMPONENT;if(i===Ro)return n.DEPTH_STENCIL;if(i===As)return n.RED;if(i===If)return n.RED_INTEGER;if(i===ps)return n.RG;if(i===wf)return n.RG_INTEGER;if(i===bf)return n.RGBA_INTEGER;if(i===ia||i===sr||i===sa||i===po)if(a===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===po)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ul||i===wd||i===Aa||i===Do)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ul)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wd)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Do)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fl||i===Lo||i===Po)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Fl||i===Lo)return a===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Po)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===rr||i===bd||i===Td||i===Bd||i===ra||i===Rd||i===Dd||i===Ld||i===Pd||i===Ud||i===Fd||i===Nd||i===Qd||i===Od)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===rr)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bd)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Td)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bd)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ra)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rd)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dd)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ld)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pd)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ud)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fd)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nd)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qd)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Od)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pa||i===kd||i===Nl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===pa)return a===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===kd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ql||i===Ol||i===kl||i===Gl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ql)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const ob=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cb=`
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

}`;class lb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new tx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Et({vertexShader:ob,fragmentShader:cb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new ws(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ub extends yr{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,A=null;const g=typeof XRWebGLBinding<"u",m=new lb,p={},E=t.getContextAttributes();let _=null,S=null;const w=[],C=[],B=new Me;let P=null;const v=new Kt;v.viewport=new ot;const y=new Kt;y.viewport=new ot;const b=[v,y],R=new AM;let U=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let $=w[K];return $===void 0&&($=new Yu,w[K]=$),$.getTargetRaySpace()},this.getControllerGrip=function(K){let $=w[K];return $===void 0&&($=new Yu,w[K]=$),$.getGripSpace()},this.getHand=function(K){let $=w[K];return $===void 0&&($=new Yu,w[K]=$),$.getHandSpace()};function F(K){const $=C.indexOf(K.inputSource);if($===-1)return;const xe=w[$];xe!==void 0&&(xe.update(K.inputSource,K.frame,c||a),xe.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",X);for(let K=0;K<w.length;K++){const $=C[K];$!==null&&(C[K]=null,w[K].disconnect($))}U=null,Q=null,m.reset();for(const K in p)delete p[K];e.setRenderTarget(_),f=null,d=null,h=null,s=null,S=null,At.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return A},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",k),s.addEventListener("inputsourceschange",X),E.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(B),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,qe=null,Te=null;E.depth&&(Te=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=E.stencil?Ro:Bo,qe=E.stencil?bo:dr);const nt={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(nt),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new _i(d.textureWidth,d.textureHeight,{format:Jt,type:Je,depthTexture:new ex(d.textureWidth,d.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const xe={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new _i(f.framebufferWidth,f.framebufferHeight,{format:Jt,type:Je,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),At.setContext(s),At.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(K){for(let $=0;$<K.removed.length;$++){const xe=K.removed[$],qe=C.indexOf(xe);qe>=0&&(C[qe]=null,w[qe].disconnect(xe))}for(let $=0;$<K.added.length;$++){const xe=K.added[$];let qe=C.indexOf(xe);if(qe===-1){for(let nt=0;nt<w.length;nt++)if(nt>=C.length){C.push(xe),qe=nt;break}else if(C[nt]===null){C[nt]=xe,qe=nt;break}if(qe===-1)break}const Te=w[qe];Te&&Te.connect(xe)}}const z=new x,te=new x;function ie(K,$,xe){z.setFromMatrixPosition($.matrixWorld),te.setFromMatrixPosition(xe.matrixWorld);const qe=z.distanceTo(te),Te=$.projectionMatrix.elements,nt=xe.projectionMatrix.elements,Zt=Te[14]/(Te[10]-1),Ze=Te[14]/(Te[10]+1),Bt=(Te[9]+1)/Te[5],D=(Te[9]-1)/Te[5],it=(Te[8]-1)/Te[0],st=(nt[8]+1)/nt[0],St=Zt*it,Ee=Zt*st,Lt=qe/(-it+st),Re=Lt*-it;if($.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Re),K.translateZ(Lt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Te[10]===-1)K.projectionMatrix.copy($.projectionMatrix),K.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const We=Zt+Lt,T=Ze+Lt,M=St-Re,G=Ee+(qe-Re),Y=Bt*Ze/T*We,Z=D*Ze/T*We;K.projectionMatrix.makePerspective(M,G,Y,Z,We,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ee(K,$){$===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices($.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let $=K.near,xe=K.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),R.near=y.near=v.near=$,R.far=y.far=v.far=xe,(U!==R.near||Q!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),U=R.near,Q=R.far),R.layers.mask=K.layers.mask|6,v.layers.mask=R.layers.mask&3,y.layers.mask=R.layers.mask&5;const qe=K.parent,Te=R.cameras;ee(R,qe);for(let nt=0;nt<Te.length;nt++)ee(Te[nt],qe);Te.length===2?ie(R,v,y):R.projectionMatrix.copy(v.projectionMatrix),pe(K,R,qe)};function pe(K,$,xe){xe===null?K.matrix.copy($.matrixWorld):(K.matrix.copy(xe.matrixWorld),K.matrix.invert(),K.matrix.multiply($.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy($.projectionMatrix),K.projectionMatrixInverse.copy($.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ma*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(R)},this.getCameraTexture=function(K){return p[K]};let be=null;function tt(K,$){if(u=$.getViewerPose(c||a),A=$,u!==null){const xe=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let qe=!1;xe.length!==R.cameras.length&&(R.cameras.length=0,qe=!0);for(let Ze=0;Ze<xe.length;Ze++){const Bt=xe[Ze];let D=null;if(f!==null)D=f.getViewport(Bt);else{const st=h.getViewSubImage(d,Bt);D=st.viewport,Ze===0&&(e.setRenderTargetTextures(S,st.colorTexture,st.depthStencilTexture),e.setRenderTarget(S))}let it=b[Ze];it===void 0&&(it=new Kt,it.layers.enable(Ze),it.viewport=new ot,b[Ze]=it),it.matrix.fromArray(Bt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(Bt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(D.x,D.y,D.width,D.height),Ze===0&&(R.matrix.copy(it.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),qe===!0&&R.cameras.push(it)}const Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){h=i.getBinding();const Ze=h.getDepthInformation(xe[0]);Ze&&Ze.isValid&&Ze.texture&&m.init(Ze,s.renderState)}if(Te&&Te.includes("camera-access")&&g){e.state.unbindTexture(),h=i.getBinding();for(let Ze=0;Ze<xe.length;Ze++){const Bt=xe[Ze].camera;if(Bt){let D=p[Bt];D||(D=new tx,p[Bt]=D);const it=h.getCameraImage(Bt);D.sourceTexture=it}}}}for(let xe=0;xe<w.length;xe++){const qe=C[xe],Te=w[xe];qe!==null&&Te!==void 0&&Te.update(qe,$,c||a)}be&&be(K,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),A=null}const At=new hx;At.setAnimationLoop(tt),this.setAnimationLoop=function(K){be=K},this.dispose=function(){}}}const ks=new yi,hb=new ge;function db(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,V0(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,_,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),A(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),_=E.envMap,S=E.envMapRotation;_&&(m.envMap.value=_,ks.copy(S),ks.x*=-1,ks.y*=-1,ks.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ks.y*=-1,ks.z*=-1),m.envMapRotation.value.setFromMatrix4(hb.makeRotationFromEuler(ks)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function A(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function fb(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,_){const S=_.program;i.uniformBlockBinding(E,S)}function c(E,_){let S=s[E.id];S===void 0&&(A(E),S=u(E),s[E.id]=S,E.addEventListener("dispose",m));const w=_.program;i.updateUBOMapping(E,w);const C=e.render.frame;r[E.id]!==C&&(d(E),r[E.id]=C)}function u(E){const _=h();E.__bindingPointIndex=_;const S=n.createBuffer(),w=E.__size,C=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,w,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,S),S}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const _=s[E.id],S=E.uniforms,w=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let C=0,B=S.length;C<B;C++){const P=Array.isArray(S[C])?S[C]:[S[C]];for(let v=0,y=P.length;v<y;v++){const b=P[v];if(f(b,C,v,w)===!0){const R=b.__offset,U=Array.isArray(b.value)?b.value:[b.value];let Q=0;for(let F=0;F<U.length;F++){const k=U[F],X=g(k);typeof k=="number"||typeof k=="boolean"?(b.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,R+Q,b.__data)):k.isMatrix3?(b.__data[0]=k.elements[0],b.__data[1]=k.elements[1],b.__data[2]=k.elements[2],b.__data[3]=0,b.__data[4]=k.elements[3],b.__data[5]=k.elements[4],b.__data[6]=k.elements[5],b.__data[7]=0,b.__data[8]=k.elements[6],b.__data[9]=k.elements[7],b.__data[10]=k.elements[8],b.__data[11]=0):(k.toArray(b.__data,Q),Q+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,R,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(E,_,S,w){const C=E.value,B=_+"_"+S;if(w[B]===void 0)return typeof C=="number"||typeof C=="boolean"?w[B]=C:w[B]=C.clone(),!0;{const P=w[B];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return w[B]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function A(E){const _=E.uniforms;let S=0;const w=16;for(let B=0,P=_.length;B<P;B++){const v=Array.isArray(_[B])?_[B]:[_[B]];for(let y=0,b=v.length;y<b;y++){const R=v[y],U=Array.isArray(R.value)?R.value:[R.value];for(let Q=0,F=U.length;Q<F;Q++){const k=U[Q],X=g(k),z=S%w,te=z%X.boundary,ie=z+te;S+=te,ie!==0&&w-ie<X.storage&&(S+=w-ie),R.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=S,S+=X.storage}}}const C=S%w;return C>0&&(S+=w-C),E.__size=S,E.__cache={},this}function g(E){const _={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(_.boundary=4,_.storage=4):E.isVector2?(_.boundary=8,_.storage=8):E.isVector3||E.isColor?(_.boundary=16,_.storage=12):E.isVector4?(_.boundary=16,_.storage=16):E.isMatrix3?(_.boundary=48,_.storage=48):E.isMatrix4?(_.boundary=64,_.storage=64):E.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ie("WebGLRenderer: Unsupported uniform value type.",E),_}function m(E){const _=E.target;_.removeEventListener("dispose",m);const S=a.indexOf(_.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const E in s)n.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}const Ab=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Ri=null;function pb(){return Ri===null&&(Ri=new Ta(Ab,32,32,ps,Un),Ri.minFilter=wt,Ri.magFilter=wt,Ri.wrapS=Vn,Ri.wrapT=Vn,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}class mb{constructor(e={}){const{canvas:t=WE(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const A=new Set([bf,wf,If]),g=new Set([Je,dr,wo,bo,Sf,Cf]),m=new Uint32Array(4),p=new Int32Array(4);let E=null,_=null;const S=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let B=!1;this._outputColorSpace=ft;let P=0,v=0,y=null,b=-1,R=null;const U=new ot,Q=new ot;let F=null;const k=new Se(0);let X=0,z=t.width,te=t.height,ie=1,ee=null,pe=null;const be=new ot(0,0,z,te),tt=new ot(0,0,z,te);let At=!1;const K=new Uf;let $=!1,xe=!1;const qe=new ge,Te=new x,nt=new ot,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function Bt(){return y===null?ie:1}let D=i;function it(I,N){return t.getContext(I,N)}try{const I={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r181"),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",_e,!1),D===null){const N="webgl2";if(D=it(N,I),D===null)throw it(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw I("WebGLRenderer: "+I.message),I}let st,St,Ee,Lt,Re,We,T,M,G,Y,Z,q,we,he,De,Ce,ne,ae,Fe,Pe,Ae,ke,L,de;function oe(){st=new SI(D),st.init(),ke=new ab(D,st),St=new pI(D,st,e,ke),Ee=new sb(D,st),St.reversedDepthBuffer&&d&&Ee.buffers.depth.setReversed(!0),Lt=new wI(D),Re=new Ww,We=new rb(D,st,Ee,Re,St,ke,Lt),T=new gI(C),M=new MI(C),G=new RM(D),L=new fI(D,G),Y=new CI(D,G,Lt,L),Z=new TI(D,Y,G,Lt),Fe=new bI(D,St,We),Ce=new mI(Re),q=new Vw(C,T,M,st,St,L,Ce),we=new db(C,Re),he=new Xw,De=new $w(st),ae=new dI(C,T,M,Ee,Z,f,l),ne=new nb(C,Z,St),de=new fb(D,Lt,St,Ee),Pe=new AI(D,st,Lt),Ae=new II(D,st,Lt),Lt.programs=q.programs,C.capabilities=St,C.extensions=st,C.properties=Re,C.renderLists=he,C.shadowMap=ne,C.state=Ee,C.info=Lt}oe();const ce=new ub(C,D);this.xr=ce,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const I=st.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=st.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(I){I!==void 0&&(ie=I,this.setSize(z,te,!1))},this.getSize=function(I){return I.set(z,te)},this.setSize=function(I,N,V=!0){if(ce.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}z=I,te=N,t.width=Math.floor(I*ie),t.height=Math.floor(N*ie),V===!0&&(t.style.width=I+"px",t.style.height=N+"px"),this.setViewport(0,0,I,N)},this.getDrawingBufferSize=function(I){return I.set(z*ie,te*ie).floor()},this.setDrawingBufferSize=function(I,N,V){z=I,te=N,ie=V,t.width=Math.floor(I*V),t.height=Math.floor(N*V),this.setViewport(0,0,I,N)},this.getCurrentViewport=function(I){return I.copy(U)},this.getViewport=function(I){return I.copy(be)},this.setViewport=function(I,N,V,W){I.isVector4?be.set(I.x,I.y,I.z,I.w):be.set(I,N,V,W),Ee.viewport(U.copy(be).multiplyScalar(ie).round())},this.getScissor=function(I){return I.copy(tt)},this.setScissor=function(I,N,V,W){I.isVector4?tt.set(I.x,I.y,I.z,I.w):tt.set(I,N,V,W),Ee.scissor(Q.copy(tt).multiplyScalar(ie).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(I){Ee.setScissorTest(At=I)},this.setOpaqueSort=function(I){ee=I},this.setTransparentSort=function(I){pe=I},this.getClearColor=function(I){return I.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(I=!0,N=!0,V=!0){let W=0;if(I){let O=!1;if(y!==null){const re=y.texture.format;O=A.has(re)}if(O){const re=y.texture.type,fe=g.has(re),ye=ae.getClearColor(),me=ae.getClearAlpha(),Ue=ye.r,Qe=ye.g,Be=ye.b;fe?(m[0]=Ue,m[1]=Qe,m[2]=Be,m[3]=me,D.clearBufferuiv(D.COLOR,0,m)):(p[0]=Ue,p[1]=Qe,p[2]=Be,p[3]=me,D.clearBufferiv(D.COLOR,0,p))}else W|=D.COLOR_BUFFER_BIT}N&&(W|=D.DEPTH_BUFFER_BIT),V&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),ae.dispose(),he.dispose(),De.dispose(),Re.dispose(),T.dispose(),M.dispose(),Z.dispose(),L.dispose(),de.dispose(),q.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",CA),ce.removeEventListener("sessionend",IA),Ls.stop()};function se(I){I.preventDefault(),Vl("WebGLRenderer: Context Lost."),B=!0}function J(){Vl("WebGLRenderer: Context Restored."),B=!1;const I=Lt.autoReset,N=ne.enabled,V=ne.autoUpdate,W=ne.needsUpdate,O=ne.type;oe(),Lt.autoReset=I,ne.enabled=N,ne.autoUpdate=V,ne.needsUpdate=W,ne.type=O}function _e(I){je("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function He(I){const N=I.target;N.removeEventListener("dispose",He),Ct(N)}function Ct(I){gt(I),Re.remove(I)}function gt(I){const N=Re.get(I).programs;N!==void 0&&(N.forEach(function(V){q.releaseProgram(V)}),I.isShaderMaterial&&q.releaseShaderCache(I))}this.renderBufferDirect=function(I,N,V,W,O,re){N===null&&(N=Zt);const fe=O.isMesh&&O.matrixWorld.determinant()<0,ye=Zy(I,N,V,W,O);Ee.setMaterial(W,fe);let me=V.index,Ue=1;if(W.wireframe===!0){if(me=Y.getWireframeAttribute(V),me===void 0)return;Ue=2}const Qe=V.drawRange,Be=V.attributes.position;let rt=Qe.start*Ue,xt=(Qe.start+Qe.count)*Ue;re!==null&&(rt=Math.max(rt,re.start*Ue),xt=Math.min(xt,(re.start+re.count)*Ue)),me!==null?(rt=Math.max(rt,0),xt=Math.min(xt,me.count)):Be!=null&&(rt=Math.max(rt,0),xt=Math.min(xt,Be.count));const Nt=xt-rt;if(Nt<0||Nt===1/0)return;L.setup(O,W,ye,V,me);let Qt,vt=Pe;if(me!==null&&(Qt=G.get(me),vt=Ae,vt.setIndex(Qt)),O.isMesh)W.wireframe===!0?(Ee.setLineWidth(W.wireframeLinewidth*Bt()),vt.setMode(D.LINES)):vt.setMode(D.TRIANGLES);else if(O.isLine){let Le=W.linewidth;Le===void 0&&(Le=1),Ee.setLineWidth(Le*Bt()),O.isLineSegments?vt.setMode(D.LINES):O.isLineLoop?vt.setMode(D.LINE_LOOP):vt.setMode(D.LINE_STRIP)}else O.isPoints?vt.setMode(D.POINTS):O.isSprite&&vt.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Qo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))vt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Le=O._multiDrawStarts,Pt=O._multiDrawCounts,dt=O._multiDrawCount,Bn=me?G.get(me).bytesPerElement:1,Er=Re.get(W).currentProgram.getUniforms();for(let Rn=0;Rn<dt;Rn++)Er.setValue(D,"_gl_DrawID",Rn),vt.render(Le[Rn]/Bn,Pt[Rn])}else if(O.isInstancedMesh)vt.renderInstances(rt,Nt,O.count);else if(V.isInstancedBufferGeometry){const Le=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Pt=Math.min(V.instanceCount,Le);vt.renderInstances(rt,Nt,Pt)}else vt.render(rt,Nt)};function ri(I,N,V){I.transparent===!0&&I.side===Gt&&I.forceSinglePass===!1?(I.side=Vt,I.needsUpdate=!0,sc(I,N,V),I.side=qn,I.needsUpdate=!0,sc(I,N,V),I.side=Gt):sc(I,N,V)}this.compile=function(I,N,V=null){V===null&&(V=I),_=De.get(V),_.init(N),w.push(_),V.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(_.pushLight(O),O.castShadow&&_.pushShadow(O))}),I!==V&&I.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(_.pushLight(O),O.castShadow&&_.pushShadow(O))}),_.setupLights();const W=new Set;return I.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const re=O.material;if(re)if(Array.isArray(re))for(let fe=0;fe<re.length;fe++){const ye=re[fe];ri(ye,V,O),W.add(ye)}else ri(re,V,O),W.add(re)}),_=w.pop(),W},this.compileAsync=function(I,N,V=null){const W=this.compile(I,N,V);return new Promise(O=>{function re(){if(W.forEach(function(fe){Re.get(fe).currentProgram.isReady()&&W.delete(fe)}),W.size===0){O(I);return}setTimeout(re,10)}st.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Xn=null;function jy(I){Xn&&Xn(I)}function CA(){Ls.stop()}function IA(){Ls.start()}const Ls=new hx;Ls.setAnimationLoop(jy),typeof self<"u"&&Ls.setContext(self),this.setAnimationLoop=function(I){Xn=I,ce.setAnimationLoop(I),I===null?Ls.stop():Ls.start()},ce.addEventListener("sessionstart",CA),ce.addEventListener("sessionend",IA),this.render=function(I,N){if(N!==void 0&&N.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(N),N=ce.getCamera()),I.isScene===!0&&I.onBeforeRender(C,I,N,y),_=De.get(I,w.length),_.init(N),w.push(_),qe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),K.setFromProjectionMatrix(qe,pi,N.reversedDepth),xe=this.localClippingEnabled,$=Ce.init(this.clippingPlanes,xe),E=he.get(I,S.length),E.init(),S.push(E),ce.enabled===!0&&ce.isPresenting===!0){const re=C.xr.getDepthSensingMesh();re!==null&&Cu(re,N,-1/0,C.sortObjects)}Cu(I,N,0,C.sortObjects),E.finish(),C.sortObjects===!0&&E.sort(ee,pe),Ze=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Ze&&ae.addToRenderList(E,I),this.info.render.frame++,$===!0&&Ce.beginShadows();const V=_.state.shadowsArray;ne.render(V,I,N),$===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=E.opaque,O=E.transmissive;if(_.setupLights(),N.isArrayCamera){const re=N.cameras;if(O.length>0)for(let fe=0,ye=re.length;fe<ye;fe++){const me=re[fe];bA(W,O,I,me)}Ze&&ae.render(I);for(let fe=0,ye=re.length;fe<ye;fe++){const me=re[fe];wA(E,I,me,me.viewport)}}else O.length>0&&bA(W,O,I,N),Ze&&ae.render(I),wA(E,I,N);y!==null&&v===0&&(We.updateMultisampleRenderTarget(y),We.updateRenderTargetMipmap(y)),I.isScene===!0&&I.onAfterRender(C,I,N),L.resetDefaultState(),b=-1,R=null,w.pop(),w.length>0?(_=w[w.length-1],$===!0&&Ce.setGlobalState(C.clippingPlanes,_.state.camera)):_=null,S.pop(),S.length>0?E=S[S.length-1]:E=null};function Cu(I,N,V,W){if(I.visible===!1)return;if(I.layers.test(N.layers)){if(I.isGroup)V=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(N);else if(I.isLight)_.pushLight(I),I.castShadow&&_.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||K.intersectsSprite(I)){W&&nt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(qe);const fe=Z.update(I),ye=I.material;ye.visible&&E.push(I,fe,ye,V,nt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||K.intersectsObject(I))){const fe=Z.update(I),ye=I.material;if(W&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),nt.copy(I.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),nt.copy(fe.boundingSphere.center)),nt.applyMatrix4(I.matrixWorld).applyMatrix4(qe)),Array.isArray(ye)){const me=fe.groups;for(let Ue=0,Qe=me.length;Ue<Qe;Ue++){const Be=me[Ue],rt=ye[Be.materialIndex];rt&&rt.visible&&E.push(I,fe,rt,V,nt.z,Be)}}else ye.visible&&E.push(I,fe,ye,V,nt.z,null)}}const re=I.children;for(let fe=0,ye=re.length;fe<ye;fe++)Cu(re[fe],N,V,W)}function wA(I,N,V,W){const{opaque:O,transmissive:re,transparent:fe}=I;_.setupLightsView(V),$===!0&&Ce.setGlobalState(C.clippingPlanes,V),W&&Ee.viewport(U.copy(W)),O.length>0&&ic(O,N,V),re.length>0&&ic(re,N,V),fe.length>0&&ic(fe,N,V),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function bA(I,N,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[W.id]===void 0&&(_.state.transmissionRenderTarget[W.id]=new _i(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Un:Je,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const re=_.state.transmissionRenderTarget[W.id],fe=W.viewport||U;re.setSize(fe.z*C.transmissionResolutionScale,fe.w*C.transmissionResolutionScale);const ye=C.getRenderTarget(),me=C.getActiveCubeFace(),Ue=C.getActiveMipmapLevel();C.setRenderTarget(re),C.getClearColor(k),X=C.getClearAlpha(),X<1&&C.setClearColor(16777215,.5),C.clear(),Ze&&ae.render(V);const Qe=C.toneMapping;C.toneMapping=vs;const Be=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),_.setupLightsView(W),$===!0&&Ce.setGlobalState(C.clippingPlanes,W),ic(I,V,W),We.updateMultisampleRenderTarget(re),We.updateRenderTargetMipmap(re),st.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let xt=0,Nt=N.length;xt<Nt;xt++){const Qt=N[xt],{object:vt,geometry:Le,material:Pt,group:dt}=Qt;if(Pt.side===Gt&&vt.layers.test(W.layers)){const Bn=Pt.side;Pt.side=Vt,Pt.needsUpdate=!0,TA(vt,V,W,Le,Pt,dt),Pt.side=Bn,Pt.needsUpdate=!0,rt=!0}}rt===!0&&(We.updateMultisampleRenderTarget(re),We.updateRenderTargetMipmap(re))}C.setRenderTarget(ye,me,Ue),C.setClearColor(k,X),Be!==void 0&&(W.viewport=Be),C.toneMapping=Qe}function ic(I,N,V){const W=N.isScene===!0?N.overrideMaterial:null;for(let O=0,re=I.length;O<re;O++){const fe=I[O],{object:ye,geometry:me,group:Ue}=fe;let Qe=fe.material;Qe.allowOverride===!0&&W!==null&&(Qe=W),ye.layers.test(V.layers)&&TA(ye,N,V,me,Qe,Ue)}}function TA(I,N,V,W,O,re){I.onBeforeRender(C,N,V,W,O,re),I.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),O.onBeforeRender(C,N,V,W,I,re),O.transparent===!0&&O.side===Gt&&O.forceSinglePass===!1?(O.side=Vt,O.needsUpdate=!0,C.renderBufferDirect(V,N,W,O,I,re),O.side=qn,O.needsUpdate=!0,C.renderBufferDirect(V,N,W,O,I,re),O.side=Gt):C.renderBufferDirect(V,N,W,O,I,re),I.onAfterRender(C,N,V,W,O,re)}function sc(I,N,V){N.isScene!==!0&&(N=Zt);const W=Re.get(I),O=_.state.lights,re=_.state.shadowsArray,fe=O.state.version,ye=q.getParameters(I,O.state,re,N,V),me=q.getProgramCacheKey(ye);let Ue=W.programs;W.environment=I.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(I.isMeshStandardMaterial?M:T).get(I.envMap||W.environment),W.envMapRotation=W.environment!==null&&I.envMap===null?N.environmentRotation:I.envMapRotation,Ue===void 0&&(I.addEventListener("dispose",He),Ue=new Map,W.programs=Ue);let Qe=Ue.get(me);if(Qe!==void 0){if(W.currentProgram===Qe&&W.lightsStateVersion===fe)return RA(I,ye),Qe}else ye.uniforms=q.getUniforms(I),I.onBeforeCompile(ye,C),Qe=q.acquireProgram(ye,me),Ue.set(me,Qe),W.uniforms=ye.uniforms;const Be=W.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Be.clippingPlanes=Ce.uniform),RA(I,ye),W.needsLights=eE(I),W.lightsStateVersion=fe,W.needsLights&&(Be.ambientLightColor.value=O.state.ambient,Be.lightProbe.value=O.state.probe,Be.directionalLights.value=O.state.directional,Be.directionalLightShadows.value=O.state.directionalShadow,Be.spotLights.value=O.state.spot,Be.spotLightShadows.value=O.state.spotShadow,Be.rectAreaLights.value=O.state.rectArea,Be.ltc_1.value=O.state.rectAreaLTC1,Be.ltc_2.value=O.state.rectAreaLTC2,Be.pointLights.value=O.state.point,Be.pointLightShadows.value=O.state.pointShadow,Be.hemisphereLights.value=O.state.hemi,Be.directionalShadowMap.value=O.state.directionalShadowMap,Be.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Be.spotShadowMap.value=O.state.spotShadowMap,Be.spotLightMatrix.value=O.state.spotLightMatrix,Be.spotLightMap.value=O.state.spotLightMap,Be.pointShadowMap.value=O.state.pointShadowMap,Be.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Qe,W.uniformsList=null,Qe}function BA(I){if(I.uniformsList===null){const N=I.currentProgram.getUniforms();I.uniformsList=Cl.seqWithValue(N.seq,I.uniforms)}return I.uniformsList}function RA(I,N){const V=Re.get(I);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Zy(I,N,V,W,O){N.isScene!==!0&&(N=Zt),We.resetTextureUnits();const re=N.fog,fe=W.isMeshStandardMaterial?N.environment:null,ye=y===null?C.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:on,me=(W.isMeshStandardMaterial?M:T).get(W.envMap||fe),Ue=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Qe=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Be=!!V.morphAttributes.position,rt=!!V.morphAttributes.normal,xt=!!V.morphAttributes.color;let Nt=vs;W.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(Nt=C.toneMapping);const Qt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,vt=Qt!==void 0?Qt.length:0,Le=Re.get(W),Pt=_.state.lights;if($===!0&&(xe===!0||I!==R)){const fn=I===R&&W.id===b;Ce.setState(W,I,fn)}let dt=!1;W.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Pt.state.version||Le.outputColorSpace!==ye||O.isBatchedMesh&&Le.batching===!1||!O.isBatchedMesh&&Le.batching===!0||O.isBatchedMesh&&Le.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Le.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Le.instancing===!1||!O.isInstancedMesh&&Le.instancing===!0||O.isSkinnedMesh&&Le.skinning===!1||!O.isSkinnedMesh&&Le.skinning===!0||O.isInstancedMesh&&Le.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Le.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Le.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Le.instancingMorph===!1&&O.morphTexture!==null||Le.envMap!==me||W.fog===!0&&Le.fog!==re||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==Ce.numPlanes||Le.numIntersection!==Ce.numIntersection)||Le.vertexAlphas!==Ue||Le.vertexTangents!==Qe||Le.morphTargets!==Be||Le.morphNormals!==rt||Le.morphColors!==xt||Le.toneMapping!==Nt||Le.morphTargetsCount!==vt)&&(dt=!0):(dt=!0,Le.__version=W.version);let Bn=Le.currentProgram;dt===!0&&(Bn=sc(W,N,O));let Er=!1,Rn=!1,Qa=!1;const Ut=Bn.getUniforms(),Mn=Le.uniforms;if(Ee.useProgram(Bn.program)&&(Er=!0,Rn=!0,Qa=!0),W.id!==b&&(b=W.id,Rn=!0),Er||R!==I){Ee.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Ut.setValue(D,"projectionMatrix",I.projectionMatrix),Ut.setValue(D,"viewMatrix",I.matrixWorldInverse);const Sn=Ut.map.cameraPosition;Sn!==void 0&&Sn.setValue(D,Te.setFromMatrixPosition(I.matrixWorld)),St.logarithmicDepthBuffer&&Ut.setValue(D,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ut.setValue(D,"isOrthographic",I.isOrthographicCamera===!0),R!==I&&(R=I,Rn=!0,Qa=!0)}if(O.isSkinnedMesh){Ut.setOptional(D,O,"bindMatrix"),Ut.setOptional(D,O,"bindMatrixInverse");const fn=O.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Ut.setValue(D,"boneTexture",fn.boneTexture,We))}O.isBatchedMesh&&(Ut.setOptional(D,O,"batchingTexture"),Ut.setValue(D,"batchingTexture",O._matricesTexture,We),Ut.setOptional(D,O,"batchingIdTexture"),Ut.setValue(D,"batchingIdTexture",O._indirectTexture,We),Ut.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&Ut.setValue(D,"batchingColorTexture",O._colorsTexture,We));const Nn=V.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&Fe.update(O,V,Bn),(Rn||Le.receiveShadow!==O.receiveShadow)&&(Le.receiveShadow=O.receiveShadow,Ut.setValue(D,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Mn.envMap.value=me,Mn.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(Mn.envMapIntensity.value=N.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=pb()),Rn&&(Ut.setValue(D,"toneMappingExposure",C.toneMappingExposure),Le.needsLights&&$y(Mn,Qa),re&&W.fog===!0&&we.refreshFogUniforms(Mn,re),we.refreshMaterialUniforms(Mn,W,ie,te,_.state.transmissionRenderTarget[I.id]),Cl.upload(D,BA(Le),Mn,We)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Cl.upload(D,BA(Le),Mn,We),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ut.setValue(D,"center",O.center),Ut.setValue(D,"modelViewMatrix",O.modelViewMatrix),Ut.setValue(D,"normalMatrix",O.normalMatrix),Ut.setValue(D,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const fn=W.uniformsGroups;for(let Sn=0,Iu=fn.length;Sn<Iu;Sn++){const Ps=fn[Sn];de.update(Ps,Bn),de.bind(Ps,Bn)}}return Bn}function $y(I,N){I.ambientLightColor.needsUpdate=N,I.lightProbe.needsUpdate=N,I.directionalLights.needsUpdate=N,I.directionalLightShadows.needsUpdate=N,I.pointLights.needsUpdate=N,I.pointLightShadows.needsUpdate=N,I.spotLights.needsUpdate=N,I.spotLightShadows.needsUpdate=N,I.rectAreaLights.needsUpdate=N,I.hemisphereLights.needsUpdate=N}function eE(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(I,N,V){const W=Re.get(I);W.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Re.get(I.texture).__webglTexture=N,Re.get(I.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:V,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,N){const V=Re.get(I);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0};const tE=D.createFramebuffer();this.setRenderTarget=function(I,N=0,V=0){y=I,P=N,v=V;let W=!0,O=null,re=!1,fe=!1;if(I){const me=Re.get(I);if(me.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(me.__webglFramebuffer===void 0)We.setupRenderTarget(I);else if(me.__hasExternalTextures)We.rebindTextures(I,Re.get(I.texture).__webglTexture,Re.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Be=I.depthTexture;if(me.__boundDepthTexture!==Be){if(Be!==null&&Re.has(Be)&&(I.width!==Be.image.width||I.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(I)}}const Ue=I.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(fe=!0);const Qe=Re.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Qe[N])?O=Qe[N][V]:O=Qe[N],re=!0):I.samples>0&&We.useMultisampledRTT(I)===!1?O=Re.get(I).__webglMultisampledFramebuffer:Array.isArray(Qe)?O=Qe[V]:O=Qe,U.copy(I.viewport),Q.copy(I.scissor),F=I.scissorTest}else U.copy(be).multiplyScalar(ie).floor(),Q.copy(tt).multiplyScalar(ie).floor(),F=At;if(V!==0&&(O=tE),Ee.bindFramebuffer(D.FRAMEBUFFER,O)&&W&&Ee.drawBuffers(I,O),Ee.viewport(U),Ee.scissor(Q),Ee.setScissorTest(F),re){const me=Re.get(I.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,me.__webglTexture,V)}else if(fe){const me=N;for(let Ue=0;Ue<I.textures.length;Ue++){const Qe=Re.get(I.textures[Ue]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ue,Qe.__webglTexture,V,me)}}else if(I!==null&&V!==0){const me=Re.get(I.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,me.__webglTexture,V)}b=-1},this.readRenderTargetPixels=function(I,N,V,W,O,re,fe,ye=0){if(!(I&&I.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Re.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me){Ee.bindFramebuffer(D.FRAMEBUFFER,me);try{const Ue=I.textures[ye],Qe=Ue.format,Be=Ue.type;if(!St.textureFormatReadable(Qe)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Be)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=I.width-W&&V>=0&&V<=I.height-O&&(I.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ye),D.readPixels(N,V,W,O,ke.convert(Qe),ke.convert(Be),re))}finally{const Ue=y!==null?Re.get(y).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(I,N,V,W,O,re,fe,ye=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Re.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me)if(N>=0&&N<=I.width-W&&V>=0&&V<=I.height-O){Ee.bindFramebuffer(D.FRAMEBUFFER,me);const Ue=I.textures[ye],Qe=Ue.format,Be=Ue.type;if(!St.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,rt),D.bufferData(D.PIXEL_PACK_BUFFER,re.byteLength,D.STREAM_READ),I.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ye),D.readPixels(N,V,W,O,ke.convert(Qe),ke.convert(Be),0);const xt=y!==null?Re.get(y).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,xt);const Nt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await qE(D,Nt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,rt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,re),D.deleteBuffer(rt),D.deleteSync(Nt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,N=null,V=0){const W=Math.pow(2,-V),O=Math.floor(I.image.width*W),re=Math.floor(I.image.height*W),fe=N!==null?N.x:0,ye=N!==null?N.y:0;We.setTexture2D(I,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,fe,ye,O,re),Ee.unbindTexture()};const nE=D.createFramebuffer(),iE=D.createFramebuffer();this.copyTextureToTexture=function(I,N,V=null,W=null,O=0,re=null){re===null&&(O!==0?(Qo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=O,O=0):re=0);let fe,ye,me,Ue,Qe,Be,rt,xt,Nt;const Qt=I.isCompressedTexture?I.mipmaps[re]:I.image;if(V!==null)fe=V.max.x-V.min.x,ye=V.max.y-V.min.y,me=V.isBox3?V.max.z-V.min.z:1,Ue=V.min.x,Qe=V.min.y,Be=V.isBox3?V.min.z:0;else{const Nn=Math.pow(2,-O);fe=Math.floor(Qt.width*Nn),ye=Math.floor(Qt.height*Nn),I.isDataArrayTexture?me=Qt.depth:I.isData3DTexture?me=Math.floor(Qt.depth*Nn):me=1,Ue=0,Qe=0,Be=0}W!==null?(rt=W.x,xt=W.y,Nt=W.z):(rt=0,xt=0,Nt=0);const vt=ke.convert(N.format),Le=ke.convert(N.type);let Pt;N.isData3DTexture?(We.setTexture3D(N,0),Pt=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(We.setTexture2DArray(N,0),Pt=D.TEXTURE_2D_ARRAY):(We.setTexture2D(N,0),Pt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const dt=D.getParameter(D.UNPACK_ROW_LENGTH),Bn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Er=D.getParameter(D.UNPACK_SKIP_PIXELS),Rn=D.getParameter(D.UNPACK_SKIP_ROWS),Qa=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Qt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ue),D.pixelStorei(D.UNPACK_SKIP_ROWS,Qe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Be);const Ut=I.isDataArrayTexture||I.isData3DTexture,Mn=N.isDataArrayTexture||N.isData3DTexture;if(I.isDepthTexture){const Nn=Re.get(I),fn=Re.get(N),Sn=Re.get(Nn.__renderTarget),Iu=Re.get(fn.__renderTarget);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,Iu.__webglFramebuffer);for(let Ps=0;Ps<me;Ps++)Ut&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.get(I).__webglTexture,O,Be+Ps),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.get(N).__webglTexture,re,Nt+Ps)),D.blitFramebuffer(Ue,Qe,fe,ye,rt,xt,fe,ye,D.DEPTH_BUFFER_BIT,D.NEAREST);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(O!==0||I.isRenderTargetTexture||Re.has(I)){const Nn=Re.get(I),fn=Re.get(N);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,nE),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,iE);for(let Sn=0;Sn<me;Sn++)Ut?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Nn.__webglTexture,O,Be+Sn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Nn.__webglTexture,O),Mn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,fn.__webglTexture,re,Nt+Sn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,fn.__webglTexture,re),O!==0?D.blitFramebuffer(Ue,Qe,fe,ye,rt,xt,fe,ye,D.COLOR_BUFFER_BIT,D.NEAREST):Mn?D.copyTexSubImage3D(Pt,re,rt,xt,Nt+Sn,Ue,Qe,fe,ye):D.copyTexSubImage2D(Pt,re,rt,xt,Ue,Qe,fe,ye);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Mn?I.isDataTexture||I.isData3DTexture?D.texSubImage3D(Pt,re,rt,xt,Nt,fe,ye,me,vt,Le,Qt.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Pt,re,rt,xt,Nt,fe,ye,me,vt,Qt.data):D.texSubImage3D(Pt,re,rt,xt,Nt,fe,ye,me,vt,Le,Qt):I.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,re,rt,xt,fe,ye,vt,Le,Qt.data):I.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,re,rt,xt,Qt.width,Qt.height,vt,Qt.data):D.texSubImage2D(D.TEXTURE_2D,re,rt,xt,fe,ye,vt,Le,Qt);D.pixelStorei(D.UNPACK_ROW_LENGTH,dt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Bn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Er),D.pixelStorei(D.UNPACK_SKIP_ROWS,Rn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Qa),re===0&&N.generateMipmaps&&D.generateMipmap(Pt),Ee.unbindTexture()},this.initRenderTarget=function(I){Re.get(I).__webglFramebuffer===void 0&&We.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?We.setTextureCube(I,0):I.isData3DTexture?We.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?We.setTexture2DArray(I,0):We.setTexture2D(I,0),Ee.unbindTexture()},this.resetState=function(){P=0,v=0,y=null,Ee.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}const Ei=.1,Fc=.0083,fr=.3,gb=.5,xb=.6,_b=.6,yb=.95,Eb=1.25,em=.88,tm=25*Math.PI/180,nm=.9,mx=.003,vb=50*Math.PI/180,gx=3,Mb=.05,Sb=.6,Cb=1/20,Ib=6e3,wb=Ei*60/(2*Math.PI),Pa=window.matchMedia("(prefers-reduced-motion: reduce)"),bb=1,Tb=60,Bb=160,Rb=120,Ea={nightLights:!0,namedAsteroidModels:!1,edition:null,holograms:!0},_o=n=>Ea.holograms&&n.status==="Planned";function Jo(n){return(Ea.namedAsteroidModels||n.model_named_shown)&&n.model_named?n.model_named:n.model||null}const fu=new Set(["planet","moon","asteroid","comet"]),Db=fu,va=1495978707e-1,Yd=2.1,im=1e3/Math.log(1+1/Yd),xx=1e5,_x=5,Au={name:"diagram",au:n=>im*Math.log(1+n/Yd),toAu:n=>Yd*(Math.exp(n/im)-1),aroundBody(n,e){const t=Math.max(0,n-e.radiusKm);return e.radius+Math.hypot(e.unit*e.knee*Math.log(1+t/e.knee),fr)},fromBody(n,e){const t=Math.sqrt(Math.max(0,(n-e.radius)**2-fr**2));return e.radiusKm+e.knee*Math.expm1(t/(e.unit*e.knee))}},$s=6371/5,yx={name:"true",au:n=>n*va/$s,toAu:n=>n*$s/va,aroundBody:n=>n/$s,fromBody:n=>n*$s},ko={diagram:Au,true:yx};let ni=Au;function Lb(n){ni=ko[n]}const sm=(n,e,t)=>n>0&&e>0?n**(1-t)*e**t:n+(e-n)*t;function Ex(n,e){const t={radius:e.radiusD,radiusKm:e.radiusKm,unit:e.radiusD/e.radiusKm,knee:e.knee};return[Au.aroundBody(n,t)-e.radiusD,Math.max(0,n-e.radiusKm)/$s]}function Pb(n){const e=t=>t>0?sm(Au.au(t),yx.au(t),n):0;ni={name:"mixed",au:e,toAu(t){let i=Math.log(1e-6),s=Math.log(1e4);for(let r=0;r<60;r++){const a=(i+s)/2;e(Math.exp(a))>t?s=a:i=a}return Math.exp((i+s)/2)},aroundBody(t,i){const[s,r]=Ex(t,i);return i.radius+sm(s,r,n)}}}const j=new Map,Kd=[],Ub=new Date("2000-01-01T12:00:00Z"),rm=new WeakMap;function Fb(n,e,t,i){let s=rm.get(n);return s||rm.set(n,s={peri:NaN,inc:NaN,node:NaN}),(s.peri!==e||s.inc!==t||s.node!==i)&&(s.peri=e,s.inc=t,s.node=i,s.cp=Math.cos(-e),s.sp=Math.sin(-e),s.ci=Math.cos(t),s.si=Math.sin(t),s.cn=Math.cos(-i),s.sn=Math.sin(-i)),s}function Ua(n){return(n-Ub)/864e5}const Yi=n=>ni.au(n),Nb=n=>ni.toAu(n),Qb=new Set(["asteroid","comet"]),pu=(n,e)=>ni.aroundBody(n,e);function Wf(n){const e=1+(n.e||0);return n.a_au!==void 0?Yi(n.a_au*e):n.a_km!==void 0&&n.scale?pu(n.a_km*e,n.scale):(n.a||0)*e}function am(n,e){if(!n||(n.a_au!==void 0&&(n.a=Yi(n.a_au)),n.a_km===void 0||!e))return;n.scale=vx(e),n.a=pu(n.a_km,n.scale),n.node??=0,n.peri??=0;const t=n.plane??e.pole??"ecliptic";n.frame=t==="ecliptic"?null:Gb(t)}function vx(n){return{radius:n.radius,radiusD:n.radius_diagram??n.radius,radiusKm:n.radius_km,unit:n.radius/n.radius_km,knee:n.knee??(Qb.has(n.type)?_x:xx)}}function om(n,e,t){if(n*e<=t)return 1/0;let i=1e-4,s=1e9;for(let r=0;r<80;r++){const a=Math.sqrt(i*s);n*a*Math.log(1+e/a)>t?s=a:i=a}return Math.sqrt(i*s)}function Xl(n,e){return n.orbit.a_au*va*Math.cbrt(n.gm/(3*e.gm))}function Ma(n,e){return pu(e,vx(n))}function Ob(n,e,t=ni){return n.a_au!==void 0?t.toAu(e):n.a_km!==void 0&&n.scale?t.fromBody(e,n.scale):null}function cm(n,e){return n.a_au!==void 0?{above:!1,ends:[ko.diagram.au(e),ko.true.au(e)]}:n.a_km!==void 0&&n.scale?{above:!0,ends:Ex(e,n.scale)}:null}function kb(n,e,t){return(t==="L1"?-1:1)*Ma(n,Xl(n,e))}function Mx(n,e,t){const i=(n.M0+n.rate*e)*(Math.PI/180);return t.set(-n.amp.x*Math.cos(i),n.amp.y*Math.cos(i),n.amp.z*Math.sin(i))}function Gb(n){const e=bs(n),t=bs({ra:0,dec:90}).cross(e);t.lengthSq()<1e-12&&t.set(1,0,0),t.normalize();const i=e.clone().cross(t);return{x:t,y:e,z:i.negate()}}const fh=new x,Ah=new x,ph=new x,zb=new ge;function Hb(n,e,t){const i=vi(e,t),s=vi(e,t+.001);fh.set(-i.x,-i.y,-i.z).normalize(),Ah.set(i.x,i.y,i.z).cross(ph.set(s.x-i.x,s.y-i.y,s.z-i.z)).normalize(),ph.crossVectors(fh,Ah),n.quaternion.setFromRotationMatrix(zb.makeBasis(fh,Ah,ph))}const lm=23.4392911*(Math.PI/180);function bs({ra:n,dec:e}){const t=n*(Math.PI/180),i=e*(Math.PI/180),s=Math.cos(i)*Math.cos(t),r=Math.cos(i)*Math.sin(t),a=Math.sin(i),o=Math.cos(lm),l=Math.sin(lm),c=r*o+a*l,u=-r*l+a*o;return new x(s,u,-c)}function vi(n,e,t=e){if(!n||n.a===0)return{x:0,y:0,z:0};const i=(n.M0+n.rate*e)%360*(Math.PI/180);return qf(n,qb(i,n.e||0),t)}const Vb=new Set(["trajectory","libration","suborbital","landed"]),Sx=(n,e)=>n?.hold_days??e,um=(n,e)=>{const t=vi(n,e);return Math.atan2(-t.z,t.x)*(180/Math.PI)};function Wb(n,e={}){const t=Ua(n);j.forEach(({data:i})=>{i.orbit&&(!i.parent||i.parent==="Sun")&&!i.lagrange&&!Vb.has(i.orbit_type)&&(i.orbit.hold_days=t)}),Object.entries(e).forEach(([i,{from:s,angle:r=0}])=>{const a=j.get(i)?.data.orbit,o=j.get(s)?.data.orbit;if(a?.hold_days===void 0||!o)return console.warn(`holdOrbits: can't place ${i} from ${s}`);const l=um(o,t)+r;for(let c=0;c<4;c++)a.M0+=((l-um(a,t))%360+540)%360-180})}function qb(n,e){let t=e<.8?n:Math.PI;for(let i=0;i<50;i++){const s=(t-e*Math.sin(t)-n)/(1-e*Math.cos(t));if(t-=s,Math.abs(s)<1e-14)break}return t}function qf(n,e,t){const i=n.e||0,s=n.a_au!==void 0,r=!s&&n.a_km!==void 0&&n.scale,a=s?n.a_au:r?n.a_km:n.a,o=a*(Math.cos(e)-i),l=a*Math.sqrt(1-i*i)*Math.sin(e),c=Math.hypot(o,l),u=c>0&&s?Yi(c)/c:c>0&&r?pu(c,n.scale)/c:1;if(n.node===void 0||n.peri===void 0){const B=(n.i||0)*(Math.PI/180);return{x:o*u,y:-l*Math.sin(B)*u,z:-l*Math.cos(B)*u}}const h=(n.peri+(n.peri_rate||0)*t)*(Math.PI/180),d=(n.node+(n.node_rate||0)*t)*(Math.PI/180),f=n.i*(Math.PI/180),A=Fb(n,h,f,d),g=o*A.cp+l*A.sp,m=l*A.cp-o*A.sp,p=-m*A.si,E=m*A.ci,_=(g*A.cn+E*A.sn)*u,S=-p*u,w=-(E*A.cn-g*A.sn)*u,C=n.frame;return C?{x:_*C.x.x+S*C.y.x+w*C.z.x,y:_*C.x.y+S*C.y.y+w*C.z.y,z:_*C.x.z+S*C.y.z+w*C.z.z}:{x:_,y:S,z:w}}const hm=1,Xb=2.5;function Cx(n,e){const t=j.get(n);if(!t)return new x;const i=vi(t.data.orbit,Sx(t.data.orbit,e)),s=new x(i.x,i.y,i.z);return t.data.parent&&t.data.parent!=="Sun"&&s.add(Cx(t.data.parent,e)),s}const Yb=n=>Ua(new Date(`${n}T12:00:00Z`));function mh(n,e){const t=n.length,i=[],s=new Array(t).fill(0);for(let a=0;a<t-1;a++)i.push((e[a+1]-e[a])/(n[a+1]-n[a]));s[0]=i[0],s[t-1]=i[t-2];for(let a=1;a<t-1;a++){if(i[a-1]*i[a]<=0){s[a]=0;continue}const o=2*(n[a+1]-n[a])+(n[a]-n[a-1]),l=n[a+1]-n[a]+2*(n[a]-n[a-1]);s[a]=(o+l)/(o/i[a-1]+l/i[a])}let r=0;return a=>{for(a<n[r]&&(r=0);r<t-2&&a>n[r+1];)r++;const o=n[r+1]-n[r],l=et.clamp((a-n[r])/o,0,1),c=l*l,u=c*l;return(2*u-3*c+1)*e[r]+(u-2*c+l)*o*s[r]+(-2*u+3*c)*e[r+1]+(u-c)*o*s[r+1]}}function or(n){if(n.trajectoryPlan)return n.trajectoryPlan;const e=n.data.trajectory||{},t=(e.waypoints||[]).map(c=>({...c,days:Yb(c.date)})),i=e.arrival_orbit&&t.length?t[t.length-1]:null,s=t.map((c,u)=>{const h=Cx(c.at,c.days);if(i&&u===t.length-1){const A=vi(e.arrival_orbit,c.days);return h.add(new x(A.x,A.y,A.z))}const d=j.get(c.at)?.data.radius||1,f=new x(h.x,0,h.z).normalize();return h.addScaledVector(f,d*Xb)}),r={days:[],angle:[],radius:[],height:[]},a=[];let o=s.length?Math.atan2(s[0].x,s[0].z):0;for(let c=0;c+1<t.length;c++){const u=s[c],h=s[c+1],d=t[c+1],f=t[c].days,A=d.days-f,g=Math.hypot(u.x,u.z),m=Math.hypot(h.x,h.z);let p=Math.atan2(h.x,h.z)-Math.atan2(u.x,u.z);for(;p<0;)p+=Math.PI*2;A<30&&p>Math.PI*11/6&&(p-=Math.PI*2);const E=d.extreme!==void 0?Yi(d.extreme)-(g+m)/2:0,_=v=>g+(m-g)*v+E*Math.sin(Math.PI*v),S=Math.max(8,Math.ceil(A/hm)),w=[0];for(let v=1;v<=S;v++)w.push(w[v-1]+Math.pow(Nb(_((v-.5)/S)),-1.5));const C=.9856*A/S*w[S]*(Math.PI/180),B=d.revs??Math.max(0,Math.round((C-p)/(Math.PI*2))),P=p+B*Math.PI*2;for(let v=c===0?0:1;v<=8;v++){const y=v/8,b=Math.round(y*S);r.days.push(f+A*y),r.angle.push(o+P*(w[b]/w[S])),r.radius.push(_(y)),r.height.push(u.y+(h.y-u.y)*y)}o+=P,a.push({to:d.label||d.at,revs:B})}const l=[];if(r.days.length>1){const c=mh(r.days,r.angle),u=mh(r.days,r.radius),h=mh(r.days,r.height),d=r.days[0],f=r.days[r.days.length-1];for(let A=d;;A+=hm){const g=Math.min(A,f),m=c(g),p=u(g);if(l.push({days:g,pos:new x(p*Math.sin(m),h(g),p*Math.cos(m))}),g===f)break}}return n.trajectoryPlan={waypoints:t,points:s,samples:l,arrival:i,legs:a,arrivalOrbit:e.arrival_orbit},n.trajectoryPlan}function Kb(n,e,t){const i=or(n);if(!i.samples.length)return!1;if(i.arrival&&e>=i.arrival.days){const r=vi(i.arrivalOrbit,e),a=j.get(i.arrival.at);return t.set(r.x,r.y,r.z),a&&t.add(a.group.position),!0}return Ix(i,e,t),!1}function Ix(n,e,t){const i=n.samples;if(e<=i[0].days)return jd(t.copy(i[0].pos));let s=0,r=i.length-1;for(;r-s>1;){const l=s+r>>1;i[l].days<=e?s=l:r=l}const a=i[s],o=i[r];return jd(t.copy(a.pos).lerp(o.pos,et.clamp((e-a.days)/(o.days-a.days||1),0,1)))}let Jd=null;function wx(n){Jd=n}function jd(n){if(!Jd)return n;const e=n.length();return e>0?n.multiplyScalar(Yi(Jd(e))/e):n}function Ar(n){if(!n||n==="Sun")return"Sun";const e=j.get(n);return!e||!e.data?"Sun":e.data.system?e.data.system:e.data.parent==="Sun"?n:Ar(e.data.parent)}const Jb=["diagram","true"];let ki="diagram";const Zd={diagram:{cameraNear:.1,cameraFar:1e6,maxDistance:1e5,flightReach:15e3,logFlights:!1,flightArchMax:800,shadowReachMin:180,shadowHalfMin:.05,shadowLocal:!1,relative:!1},true:{cameraNear:null,cameraFar:2e7,maxDistance:1e7,logFlights:!0,flightArchMax:1/0,shadowReachMin:180,shadowHalfMin:1e-8,shadowLocal:!0,relative:!0}};let Ft=Zd.diagram;const jb=25/695700,Zb=5,$b=6371,eT=.62,tT=1.49,nT=.7,iT=new Set(["star","planet","moon","asteroid","comet"]),sT=.35,rT=8,dm=[1,_x],aT=.3,Js={diagram:{bodyRadius(n){const e=n.radius_km,t=n.diagram_scale??1;return n.type==="star"?e*jb*t:n.model&&!n.planetMoon?t*tT*Math.pow(2*e,nT)/2:t*Zb*Math.pow(e/$b,eT)},craftSize:n=>fr*(n.diagram_scale??1)},true:{bodyRadius:n=>n.radius_km/$s,craftSize:n=>(n.size_m??1)/1e3/$s}};function oT(n){const e=(t,i)=>t**(1-n)*i**n;return{bodyRadius:t=>e(Js.diagram.bodyRadius(t),Js.true.bodyRadius(t)),craftSize:t=>e(Js.diagram.craftSize(t),Js.true.craftSize(t)),craftRadius:t=>e(t.radius_diagram,Js.true.craftSize(t)/2)}}function mu(n,e=ki,t=null){ki=e,Ft=t?Zd.true:Zd[e],t?Pb(t.orbit):Lb(e);const i=t?oT(t.size):Js[e],s=new Map(n.map(r=>[r.name,r]));n.forEach(r=>{if(r.type==="moon"&&(r.planetMoon=s.get(r.parent)?.type==="planet"),r.type==="mission"){r.radius_diagram??=r.radius,r.model_size=i.craftSize(r),r.radius=t?i.craftRadius(r):e==="diagram"?r.radius_diagram:r.model_size/2;return}!iT.has(r.type)||r.radius_km===void 0||(r.radius_diagram=Js.diagram.bodyRadius(r),r.radius=i.bodyRadius(r),r.model&&(r.model_scale=2*r.radius))}),e==="diagram"&&!t&&cT(n,s),n.forEach(r=>{const a=s.get(r.parent);if(r.ring?.inner_km&&(r.ring.inner_radius=r.ring.inner_km/r.radius_km,r.ring.outer_radius=r.ring.outer_km/r.radius_km),r.suborbital?.apogee_km!==void 0&&a&&(r.suborbital.apogee=Ma(a,a.radius_km+r.suborbital.apogee_km)-a.radius,r.suborbital.duration=r.suborbital.duration_min/1440),r.lagrange){const l=s.get(r.lagrange.body);r.lagrange.offset=kb(l,s.get("Sun"),r.lagrange.point),r.orbit={a:Yi(l.orbit.a_au)+r.lagrange.offset,e:0}}am(r.orbit,a);const o=r.trajectory?.waypoints;o?.length&&am(r.trajectory.arrival_orbit,s.get(o[o.length-1].at))}),n.forEach(r=>{r.orbit_type==="libration"&&lT(r.orbit,s.get(r.parent),s)})}function cT(n,e){const t=e.get("Sun"),i=n.filter(a=>a.type==="planet"&&a.parent==="Sun"&&a.orbit?.a_au).sort((a,o)=>a.orbit.a_au-o.orbit.a_au),s=a=>Yi(a.orbit.a_au*(1-a.orbit.e)),r=a=>Yi(a.orbit.a_au*(1+a.orbit.e));i.forEach((a,o)=>{if(!a.gm)return;const l=s(a)-(o?r(i[o-1]):t.radius),c=o<i.length-1?s(i[o+1])-r(a):1/0;a.hill=sT*Math.min(l,c),a.knee=Math.min(xx,om(a.radius/a.radius_km,Xl(a,t)-a.radius_km,a.hill-a.radius))}),n.forEach(a=>{if(a.type!=="asteroid"&&a.type!=="comet"||!a.gm||!a.orbit?.a_au)return;a.hill=rT*a.radius;const o=om(a.radius/a.radius_km,Xl(a,t)-a.radius_km,a.hill-a.radius);a.knee=Math.min(Math.max(o,dm[0]),dm[1])})}function lT(n,e,t){const i=t.get(e.lagrange.body),s=Xl(i,t.get("Sun")),r=(Ma(i,s*1.001)-Ma(i,s*.999))/(s*.002),a=Math.abs(e.lagrange.offset)/s,o=Math.sqrt(r*a),{y:l,z:c}=n.amplitude_km;n.amp={x:aT*l*o,y:c*o,z:l*o},n.a=Math.max(n.amp.y,n.amp.z),n.rate=360/n.period_days,n.M0??=0}function uT(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new Ke;let c=0;for(let u=0;u<n.length;++u){const h=n[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const h=[];for(let d=0;d<n.length;++d){const f=n[d].index;for(let A=0;A<f.count;++A)h.push(f.getX(A)+u);u+=n[d].attributes.position.count}l.setIndex(h)}for(const u in r){const h=fm(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let g=0;g<a[u].length;++g)f.push(a[u][g][d]);const A=fm(f);if(!A)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(A)}}return l}function fm(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const a=new e(r),o=new ze(a,t,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let d=0,f=u.count;d<f;d++)for(let A=0;A<t;A++){const g=u.getComponent(d,A);o.setComponent(d+h,A,g)}}else a.set(u.array,l);l+=u.count*t}return s!==void 0&&(o.gpuType=s),o}function Am(n,e){if(e===UE)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Gd||e===P0){let t=n.getIndex();if(t===null){const a=[],o=n.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===Gd)for(let a=1;a<=i;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}const Ve=new Lf;Ve.background=new Se(0);const H=new Kt(60,window.innerWidth/window.innerHeight,.1,1e6);H.position.set(0,400,1200);H.lookAt(0,0,0);let Ge;function hT(n){Ge=new mb({canvas:n,antialias:!0,powerPreference:"high-performance"})}function En(n){for(let e=n;e;e=e.parent)if(e===Ve)return!0;return!1}class dT extends Ds{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new gT(t)}),this.register(function(t){return new xT(t)}),this.register(function(t){return new wT(t)}),this.register(function(t){return new bT(t)}),this.register(function(t){return new TT(t)}),this.register(function(t){return new yT(t)}),this.register(function(t){return new ET(t)}),this.register(function(t){return new vT(t)}),this.register(function(t){return new MT(t)}),this.register(function(t){return new mT(t)}),this.register(function(t){return new ST(t)}),this.register(function(t){return new _T(t)}),this.register(function(t){return new IT(t)}),this.register(function(t){return new CT(t)}),this.register(function(t){return new AT(t)}),this.register(function(t){return new BT(t)}),this.register(function(t){return new RT(t)})}load(e,t,i,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=xo.extractUrlBase(e);a=xo.resolveURL(c,this.path)}else a=xo.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ar(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===bx){try{a[$e.KHR_BINARY_GLTF]=new DT(e)}catch(h){s&&s(h);return}r=JSON.parse(a[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new WT(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case $e.KHR_MATERIALS_UNLIT:a[h]=new pT;break;case $e.KHR_DRACO_MESH_COMPRESSION:a[h]=new LT(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:a[h]=new PT;break;case $e.KHR_MESH_QUANTIZATION:a[h]=new UT;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function fT(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class AT{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Se(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],on);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ux(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new lx(u),c.distance=h;break;case"spot":c=new cx(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ui(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class pT{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return mi}extendParams(e,t,i){const s=[];e.color=new Se(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],on),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,ft))}return Promise.all(s)}}class mT{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class gT{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Si}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Me(o,o)}return Promise.all(r)}}class xT{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Si}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class _T{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Si}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class yT{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Si}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],on)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,ft)),a.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class ET{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Si}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class vT{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Si}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(o[0],o[1],o[2],on),Promise.all(r)}}class MT{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Si}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class ST{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Si}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Se().setRGB(o[0],o[1],o[2],on),a.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,ft)),Promise.all(r)}}class CT{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Si}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class IT{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Si}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class wT{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class bT{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}}class TT{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}}class BT{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class RT{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==zn.TRIANGLES&&c.mode!==zn.TRIANGLE_STRIP&&c.mode!==zn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const A of h){const g=new ge,m=new x,p=new ct,E=new x(1,1,1),_=new Pv(A.geometry,A.material,d);for(let S=0;S<d;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,S),l.SCALE&&E.fromBufferAttribute(l.SCALE,S),_.setMatrixAt(S,g.compose(m,p,E));for(const S in l)if(S==="_COLOR_0"){const w=l[S];_.instanceColor=new Hd(w.array,w.itemSize,w.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&A.geometry.setAttribute(S,l[S]);bt.prototype.copy.call(_,A),this.parser.assignFinalMaterial(_),f.push(_)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const bx="glTF",ja=12,pm={JSON:1313821514,BIN:5130562};class DT{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ja),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==bx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-ja,r=new DataView(e,ja);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===pm.JSON){const c=new Uint8Array(e,ja+a,o);this.content=i.decode(c)}else if(l===pm.BIN){const c=ja+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class LT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=$d[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=$d[u]||u.toLowerCase();if(a[u]!==void 0){const d=i.accessors[e.attributes[u]],f=oa[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const A in f.attributes){const g=f.attributes[A],m=l[A];m!==void 0&&(g.normalized=m)}h(f)},o,c,on,d)})})}}class PT{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class UT{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class Tx extends Ko{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(i-t)/u,d=h*h,f=d*h,A=e*c,g=A-c,m=-2*f+3*d,p=f-d,E=1-m,_=p-d+h;for(let S=0;S!==o;S++){const w=a[g+S+o],C=a[g+S+l]*u,B=a[A+S+o],P=a[A+S]*u;r[S]=E*w+_*C+m*B+p*P}return r}}const FT=new ct;class NT extends Tx{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return FT.fromArray(r).normalize().toArray(r),r}}const zn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},oa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},mm={9728:rn,9729:wt,9984:vf,9985:Sl,9986:uo,9987:Zn},gm={33071:Vn,33648:Pl,10497:Cs},gh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$d={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},is={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},QT={CUBICSPLINE:void 0,LINEAR:Fo,STEP:Uo},xh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function OT(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Xi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:qn})),n.DefaultMaterial}function Gs(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ui(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function kT(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;a.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function GT(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function zT(n){let e;const t=n.extensions&&n.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+_h(t.attributes):e=n.indices+":"+_h(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+_h(n.targets[i]);return e}function _h(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function ef(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function HT(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const VT=new ge;class WT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new fT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&a<98?this.textureLoader=new ox(this.options.manager):this.textureLoader=new fM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ar(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return Gs(r,o,s),ui(o,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){i.load(xo.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=gh[s.type],o=oa[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new ze(c,a,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=gh[s.type],c=oa[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,A=s.normalized===!0;let g,m;if(f&&f!==h){const p=Math.floor(d/f),E="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let _=t.cache.get(E);_||(g=new c(o,p*f,s.count*f/u),_=new ou(g,f/u),t.cache.add(E,_)),m=new Wn(_,l,d%f/u,A)}else o===null?g=new c(s.count*l):g=new c(o,d,s.count*l),m=new ze(g,l,A);if(s.sparse!==void 0){const p=gh.SCALAR,E=oa[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,S=s.sparse.values.byteOffset||0,w=new E(a[1],_,s.sparse.count*p),C=new c(a[2],S,s.sparse.count*l);o!==null&&(m=new ze(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let B=0,P=w.length;B<P;B++){const v=w[B];if(m.setX(v,C[B*l]),l>=2&&m.setY(v,C[B*l+1]),l>=3&&m.setZ(v,C[B*l+2]),l>=4&&m.setW(v,C[B*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=A}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){const s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return u.magFilter=mm[d.magFilter]||wt,u.minFilter=mm[d.minFilter]||Zn,u.wrapS=gm[d.wrapS]||Cs,u.wrapT=gm[d.wrapT]||Cs,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==rn&&u.minFilter!==wt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=s.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let A=d;t.isImageBitmapLoader===!0&&(A=function(g){const m=new zt(g);m.needsUpdate=!0,d(m)}),t.load(xo.resolveURL(h,r.path),A,void 0,f)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),ui(h,a),h.userData.mimeType=a.mimeType||HT(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Z0,ei.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Rs,ei.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Xi}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[$e.KHR_MATERIALS_UNLIT]){const h=s[$e.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Se(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],on),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,ft)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Gt);const u=r.alphaMode||xh.OPAQUE;if(u===xh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===xh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==mi&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Me(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==mi&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==mi){const h=r.emissiveFactor;o.emissive=new Se().setRGB(h[0],h[1],h[2],on)}return r.emissiveTexture!==void 0&&a!==mi&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,ft)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),ui(h,r),t.associations.set(h,{materials:e}),r.extensions&&Gs(s,h,r),h})}createUniqueName(e){const t=mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return xm(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=zT(c),h=s[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=xm(new Ke,c,t),s[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?OT(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,A=u.length;f<A;f++){const g=u[f],m=a[f];let p;const E=c[f];if(m.mode===zn.TRIANGLES||m.mode===zn.TRIANGLE_STRIP||m.mode===zn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Rv(g,E):new Ye(g,E),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===zn.TRIANGLE_STRIP?p.geometry=Am(p.geometry,P0):m.mode===zn.TRIANGLE_FAN&&(p.geometry=Am(p.geometry,Gd));else if(m.mode===zn.LINES)p=new Oo(g,E);else if(m.mode===zn.LINE_STRIP)p=new Ba(g,E);else if(m.mode===zn.LINE_LOOP)p=new Ff(g,E);else if(m.mode===zn.POINTS)p=new Qv(g,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&GT(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ui(p,r),m.extensions&&Gs(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,A=h.length;f<A;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Gs(s,h[0],r),h[0];const d=new jt;r.extensions&&Gs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,A=h.length;f<A;f++)d.add(h[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Kt(et.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new zf(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ui(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const d=new ge;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Pf(o,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],A=s.samplers[f.sampler],g=f.target,m=g.node,p=s.parameters!==void 0?s.parameters[A.input]:A.input,E=s.parameters!==void 0?s.parameters[A.output]:A.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",E)),c.push(A),u.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],A=h[2],g=h[3],m=h[4],p=[];for(let _=0,S=d.length;_<S;_++){const w=d[_],C=f[_],B=A[_],P=g[_],v=m[_];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const y=i._createAnimationTracks(w,C,B,P,v);if(y)for(let b=0;b<y.length;b++)p.push(y[b])}const E=new nM(r,void 0,p);return ui(E,s),E})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const a=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(i.getDependency("node",o[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,VT)});for(let f=0,A=h.length;f<A;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new j0:c.length>1?u=new jt:c.length===1?u=c[0]:u=new bt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),ui(u,r),r.extensions&&Gs(i,u,r),r.matrix!==void 0){const h=new ge;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new jt;i.name&&(r.name=s.createUniqueName(i.name)),ui(r,i),i.extensions&&Gs(t,r,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof ei||d instanceof zt)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const a=[],o=e.name?e.name:e.uuid,l=[];is[r.path]===is.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(is[r.path]){case is.weights:c=xa;break;case is.rotation:c=_a;break;case is.translation:case is.scale:c=ya;break;default:switch(i.itemSize){case 1:c=xa;break;case 2:case 3:default:c=ya;break}break}const u=s.interpolation!==void 0?QT[s.interpolation]:Fo,h=this._getArrayFromAccessor(i);for(let d=0,f=l.length;d<f;d++){const A=new c(l[d]+"."+is[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(A),a.push(A)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=ef(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof _a?NT:Tx;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function qT(n,e,t){const i=e.attributes,s=new Tn;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new x(l[0],l[1],l[2]),new x(c[0],c[1],c[2])),o.normalized){const u=ef(oa[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new x,l=new x;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,A=d.max;if(f!==void 0&&A!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(A[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(A[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(A[2]))),d.normalized){const g=ef(oa[d.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}n.boundingBox=s;const a=new dn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=a}function xm(n,e,t){const i=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(const a in i){const o=$d[a]||a.toLowerCase();o in n.attributes||s.push(r(i[a],o))}if(e.indices!==void 0&&!n.index){const a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});s.push(a)}return at.workingColorSpace!==on&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),ui(n,e),qT(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?kT(n,e.targets,t):n})}const yh=new WeakMap;class XT extends Ds{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,s){const r=new ar(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,s)},i,s)}parse(e,t,i=()=>{}){this.decodeDracoFile(e,t,null,null,ft,i).catch(i)}decodeDracoFile(e,t,i,s,r=on,a=()=>{}){const o={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){const i=JSON.stringify(t);if(yh.has(e)){const l=yh.get(e);if(l.key===i)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s;const r=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(r,a).then(l=>(s=l,new Promise((c,u)=>{s._callbacks[r]={resolve:c,reject:u},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),yh.set(e,{key:i,promise:o}),o}_createGeometry(e){const t=new Ke;e.index&&t.setIndex(new ze(e.index.array,1));for(let i=0;i<e.attributes.length;i++){const{name:s,array:r,itemSize:a,stride:o,vertexColorSpace:l}=e.attributes[i];let c;if(a===o)c=new ze(r,a);else{const u=new ou(r,o);c=new Wn(u,a,0)}s==="color"&&(this._assignVertexColorSpace(c,l),c.normalized=!(r instanceof Float32Array)),t.setAttribute(s,c)}return t}_assignVertexColorSpace(e,t){if(t!==ft)return;const i=new Se;for(let s=0,r=e.count;s<r;s++)i.fromBufferAttribute(e,s),at.colorSpaceToWorking(i,ft),e.setXYZ(s,i.r,i.g,i.b)}_loadLibrary(e,t){const i=new ar(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((s,r)=>{i.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(i=>{const s=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const r=YT.toString(),a=["/* draco decoder */",s,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){const a=r.data;switch(a.type){case"decode":s._callbacks[a.id].resolve(a);break;case"error":s._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=t,i._taskLoad+=t,i})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function YT(){let n,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":n=o.decoderConfig,e=new Promise(function(u){n.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(n)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(u=>{const h=u.draco,d=new h.Decoder;try{const f=t(h,d,new Int8Array(l),c),A=f.attributes.map(g=>g.array.buffer);f.index&&A.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},A)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{h.destroy(d)}});break}};function t(a,o,l,c){const u=c.attributeIDs,h=c.attributeTypes;let d,f;const A=o.GetEncodedGeometryType(l);if(A===a.TRIANGULAR_MESH)d=new a.Mesh,f=o.DecodeArrayToMesh(l,l.byteLength,d);else if(A===a.POINT_CLOUD)d=new a.PointCloud,f=o.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const g={index:null,attributes:[]};for(const m in u){const p=self[h[m]];let E,_;if(c.useUniqueIDs)_=u[m],E=o.GetAttributeByUniqueId(d,_);else{if(_=o.GetAttributeId(d,a[u[m]]),_===-1)continue;E=o.GetAttribute(d,_)}const S=s(a,o,d,m,p,E);m==="color"&&(S.vertexColorSpace=c.vertexColorSpace),g.attributes.push(S)}return A===a.TRIANGULAR_MESH&&(g.index=i(a,o,d)),a.destroy(d),g}function i(a,o,l){const u=l.num_faces()*3,h=u*4,d=a._malloc(h);o.GetTrianglesUInt32Array(l,h,d);const f=new Uint32Array(a.HEAPF32.buffer,d,u).slice();return a._free(d),{array:f,itemSize:1}}function s(a,o,l,c,u,h){const d=l.num_points(),f=h.num_components(),A=r(a,u),g=f*u.BYTES_PER_ELEMENT,m=Math.ceil(g/4)*4,p=m/u.BYTES_PER_ELEMENT,E=d*g,_=d*m,S=a._malloc(E);o.GetAttributeDataArrayForAllPoints(l,h,A,E,S);const w=new u(a.HEAPF32.buffer,S,E/u.BYTES_PER_ELEMENT);let C;if(g===m)C=w.slice();else{C=new u(_/u.BYTES_PER_ELEMENT);let B=0;for(let P=0,v=w.length;P<v;P++){for(let y=0;y<f;y++)C[B+y]=w[P*f+y];B+=p}}return a._free(S),{name:c,count:d,itemSize:f,array:C,stride:p}}function r(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}const Xf=new ax,jo=new ox(Xf),Bx=new XT;Bx.setDecoderPath("draco/");const Yl=new dT;Yl.setDRACOLoader(Bx);const Eh=2048;function KT(n){const e=n.image;if(!e||e.width<=Eh)return;const t=Eh/e.width,i=document.createElement("canvas");i.width=Eh,i.height=Math.round(e.height*t);const s=i.getContext("2d");s.imageSmoothingQuality="high",s.drawImage(e,0,0,i.width,i.height),n.image=i,n.needsUpdate=!0}function Il(n){return jo.load(Ts(n),KT)}function Ts(n){return n?n.startsWith("/")?n.slice(1):n:null}const Yf=[];function Rx(n,e=new Set){return n.traverse(t=>{if(!t.material)return;(Array.isArray(t.material)?t.material:[t.material]).forEach(s=>{for(const r in s){const a=s[r];a&&a.isTexture&&e.add(a)}s.uniforms&&Object.values(s.uniforms).forEach(r=>{r&&r.value&&r.value.isTexture&&e.add(r.value)})})}),e}function JT(){const n=Yf.shift();if(n){try{Ge.initTexture(n.texture)}catch(e){console.warn("Texture upload failed",e)}n.done()}}function jT(n){return new Promise(e=>Yf.push({texture:n,done:e}))}function Dx(n){const e=[...Rx(n)].map(t=>new Promise(i=>Yf.push({texture:t,done:i})));return Promise.all(e).then(()=>Promise.all([Ge.compileAsync(n,H,Ve),Lx(n)])).catch(t=>console.warn("Shader warm-up failed",t))}const ZT={[qn]:Vt,[Vt]:qn,[Gt]:Gt},_m=new Map;let ym=null;function Lx(n){if(!Ge.shadowMap.enabled||Ge.shadowMap.type===li)return Promise.resolve();const e=new jt;if(n.traverse(s=>{!s.isMesh||!s.castShadow||s.customDepthMaterial||s.isSkinnedMesh||s.isInstancedMesh||(Array.isArray(s.material)?s.material:[s.material]).forEach(r=>{if(!r)return;const a=new ix({depthPacking:U0});a.side=r.shadowSide??ZT[r.side],a.wireframe=r.wireframe,a.alphaMap=r.alphaMap,a.alphaTest=r.alphaToCoverage===!0?.5:r.alphaTest,a.map=r.map,a.displacementMap=r.displacementMap,a.displacementScale=r.displacementScale,a.displacementBias=r.displacementBias;const o=s.geometry,l=[a.side,a.wireframe,!!a.alphaMap,a.alphaTest>0,!!a.map,!!a.displacementMap,s.receiveShadow,!!o.morphAttributes.position,!!o.morphAttributes.normal,Object.keys(o.attributes).sort().join("+")].join();if(_m.has(l))return;_m.set(l,a);const c=new Ye(o,a);c.receiveShadow=s.receiveShadow,c.morphTargetInfluences=s.morphTargetInfluences,e.add(c)})}),!e.children.length)return Promise.resolve();ym??=new _i(1,1);const t=Ge.getRenderTarget();Ge.setRenderTarget(ym);let i;try{i=Ge.compileAsync(e,H,Ve)}finally{Ge.setRenderTarget(t)}return i}function Px(n,e){const t=e.elements;if(n.isInterleavedBufferAttribute||n.normalized||n.itemSize!==3||t[3]!==0||t[7]!==0||t[11]!==0||t[15]!==1)return(s,r)=>s.fromBufferAttribute(n,r).applyMatrix4(e);const i=n.array;return(s,r)=>{const a=i[3*r],o=i[3*r+1],l=i[3*r+2];return s.set(t[0]*a+t[4]*o+t[8]*l+t[12],t[1]*a+t[5]*o+t[9]*l+t[13],t[2]*a+t[6]*o+t[10]*l+t[14])}}const Em=new WeakMap,$T=new ge,vm=new Bs,zs=new x,Hs=new x,Vs=new x;function e1(n){const e=n.attributes.position,t=n.index,i=`${e.version}:${t?t.version:-1}:${e.count}:${t?t.count:-1}`,s=Em.get(n);if(s?.key===i)return s;const r=Math.floor((t?t.count:e.count)/3),a=new Float64Array(r*3),o=new Float64Array(r),l=u=>t?t.getX(u):u;for(let u=0;u<r;u++){zs.fromBufferAttribute(e,l(3*u)),Hs.fromBufferAttribute(e,l(3*u+1)),Vs.fromBufferAttribute(e,l(3*u+2));const h=(zs.x+Hs.x+Vs.x)/3,d=(zs.y+Hs.y+Vs.y)/3,f=(zs.z+Hs.z+Vs.z)/3;a[3*u]=h,a[3*u+1]=d,a[3*u+2]=f,o[u]=Math.sqrt(Math.max((zs.x-h)**2+(zs.y-d)**2+(zs.z-f)**2,(Hs.x-h)**2+(Hs.y-d)**2+(Hs.z-f)**2,(Vs.x-h)**2+(Vs.y-d)**2+(Vs.z-f)**2))*(1+1e-6)+1e-9}const c={key:i,centres:a,radii:o,count:r};return Em.set(n,c),c}const t1=2e3;function gu(n,e){const t=e.layers.test(n.layers)?n1(n,e):void 0,i=e.children.length?n.intersectObjects(e.children,!0)[0]:void 0;return t&&i?t.distance<=i.distance?t:i:t||i}function n1(n,e){const t=e.geometry,i=t?.attributes.position;if((i?(t.index?t.index.count:i.count)/3:0)<t1||Array.isArray(e.material)||t.groups.length||t.morphAttributes.position){const p=[];return e.raycast(n,p),p.sort((E,_)=>E.distance-_.distance)[0]}const{centres:r,radii:a,count:o}=e1(t);vm.copy(n.ray).applyMatrix4($T.copy(e.matrixWorld).invert());const{origin:l,direction:c}=vm,u=t.index,h=[];for(let p=0;p<o;p++){const E=r[3*p]-l.x,_=r[3*p+1]-l.y,S=r[3*p+2]-l.z,w=Math.max(0,E*c.x+_*c.y+S*c.z),C=E-c.x*w,B=_-c.y*w,P=S-c.z*w;C*C+B*B+P*P<=a[p]*a[p]&&h.push(p)}if(!h.length)return;const d=new Uint32Array(h.length*3);h.forEach((p,E)=>{for(let _=0;_<3;_++)d[3*E+_]=u?u.getX(3*p+_):3*p+_});const f=new Ke;f.setAttribute("position",i),f.setIndex(new ze(d,1)),t.boundingSphere||t.computeBoundingSphere(),f.boundingSphere=t.boundingSphere,f.boundingBox=t.boundingBox;const A=new Ye(f,e.material);A.matrixWorld.copy(e.matrixWorld),A.layers.mask=e.layers.mask;const g=[];A.raycast(n,g),g.sort((p,E)=>p.distance-E.distance);const m=g[0];return m&&(m.object=e,m.faceIndex!==void 0&&(m.faceIndex=h[m.faceIndex])),m}const Ux=new x(0,1,0);function wl(n,e=ki){return e==="diagram"&&n.diagram_coords||n.landed_coords||{lat:45,lon:10}}const pr=[],vh=6;function i1(n){const e=n&&(n.highLevel||n.lowLevel);if(!e)return null;if(n.supportsLevel===e&&n.supportsScale===n.mesh.scale.x)return n.supports;const{position:t,quaternion:i}=n.mesh;if(n.supportsLevel===e&&n.supports&&t.x===0&&t.z===0&&n.supportsTurn?.equals(i)&&n.supportsY===t.y){const A=n.mesh.scale.x/n.supportsScale,g=m=>{m.x*=A,m.z*=A,m.y=t.y+(m.y-t.y)*A};return n.supports.points.forEach(g),g(n.supports.centre),n.supports.reach*=A,n.supports.width*=A,n.supportsScale=n.mesh.scale.x,n.supports}n.supportsScale=n.mesh.scale.x,n.supportsTurn=i.clone(),n.supportsY=t.y,n.group.updateMatrixWorld(!0);const s=new ge().copy(n.group.matrixWorld).invert(),r=new ge,a=new x,o=A=>e.traverse(g=>{if(!g.isMesh||!g.geometry.attributes.position)return;r.multiplyMatrices(s,g.matrixWorld);const m=g.geometry.attributes.position,p=Px(m,r);for(let E=0;E<m.count;E++)A(p(a,E))});let l=1/0,c=-1/0;o(A=>{l=Math.min(l,A.y),c=Math.max(c,A.y)});const u=l+(c-l)*.03,h=new Array(vh).fill(null);o(A=>{if(A.y>u)return;const g=Math.hypot(A.x,A.z),m=Math.min(vh-1,Math.floor((Math.atan2(A.z,A.x)+Math.PI)/(2*Math.PI)*vh));(!h[m]||g>h[m].r)&&(h[m]={r:g,point:new x(A.x,l,A.z)})});const d=h.filter(Boolean).map(A=>A.point),f=Math.max(0,...h.filter(Boolean).map(A=>A.r));return n.supportsLevel=e,n.supports=d.length<3?null:{points:d,centre:d.reduce((A,g)=>A.add(g),new x).divideScalar(d.length),reach:c-l+f,width:2*f},n.supports}const s1=Math.cos(et.degToRad(35));function r1(n,e,t,i,s){const r=i1(n);if(!r)return null;const a=new ct().setFromUnitVectors(Ux,s),o=s.clone().negate().transformDirection(e.matrixWorld),l=[];for(const A of r.points){const g=A.clone().applyQuaternion(a).add(i).addScaledVector(s,r.reach),m=gu(new uu(e.localToWorld(g),o,0,r.reach*3),t);if(!m)return null;l.push(e.worldToLocal(m.point.clone()))}const c=l.reduce((A,g)=>A.add(g),new x).divideScalar(l.length),u=new x;for(let A=0;A<l.length;A++)u.add(l[A].clone().sub(c).cross(l[(A+1)%l.length].clone().sub(c)));if(u.lengthSq()<1e-12||(u.normalize(),u.dot(s)<0&&u.negate(),u.dot(s)<s1))return null;const h=u.clone().multiplyScalar(r.points[0].y),d=c.clone().sub(i).sub(h).dot(u)/s.dot(u),f=(n.data.land_lift||0)*r.width;return{position:i.clone().addScaledVector(s,d).addScaledVector(u,f),normal:u}}function Zo(n){j.forEach(e=>{const t=e.data;if(t.orbit_type!=="landed"||e!==n&&t.parent!==n.data.name)return;const i=j.get(t.parent);!i||e.group.parent!==i.meshGroup||pr.some(s=>s.data===t)||pr.push({group:e.group,data:t})}),xu()}function a1(){j.forEach(n=>{n.landedAt=null;const e=j.get(n.data.parent);if(n.data.orbit_type!=="landed"||!e||n.group.parent!==e.meshGroup)return;const t=n.group.position.clone(),i=r=>{const a=Nx(e,n.data,r)?.hit;return a?e.meshGroup.worldToLocal(a.point.clone()):null},s=i(wl(n.data))||t.clone();if(n.landedAt={ground:s,offset:t.sub(s),bodyScale:e.mesh.scale.x,ownScale:n.mesh.scale.x},n.data.diagram_coords){const r=i(wl(n.data,"diagram")),a=i(wl(n.data,"true"));r&&a&&Object.assign(n.landedAt,{diagram:r,real:a,turn:n.group.quaternion.clone()})}})}const Za=new x,Vr=new ct,Mm=new ct,o1=new ct;function c1(n){j.forEach(e=>{const t=e.landedAt;if(!t)return;const i=j.get(e.data.parent);if(Za.copy(t.ground),Vr.identity(),t.real){const s=et.lerp(t.diagram.length(),t.real.length(),n);Mm.setFromUnitVectors(Za.copy(t.diagram).normalize(),t.real.clone().normalize()),Vr.slerpQuaternions(o1,Mm,n),Za.applyQuaternion(Vr).multiplyScalar(s),Vr.setFromUnitVectors(t.ground.clone().normalize(),Za.clone().normalize()),e.group.quaternion.copy(t.turn).premultiply(Vr)}e.group.position.copy(Za).multiplyScalar(i.mesh.scale.x/t.bodyScale).add(t.offset.clone().applyQuaternion(Vr).multiplyScalar(e.mesh.scale.x/t.ownScale))})}function l1(){j.forEach(n=>{n.landedAt=null})}const u1=.5,h1=1e-7,Sm=new x,d1=new x;function Kf(n){const e=j.get(n.data.parent);if(!e)return;const t=e.mesh.children.filter(a=>a.isMesh&&!a.rotation.x&&!a.rotation.y&&!a.rotation.z&&a.scale.x===1);if(e.surfaceSite===n&&t.every(a=>a.userData.refinedFor===n)||n.group.parent!==e.meshGroup)return;n.group.getWorldPosition(Sm),e.mesh.updateWorldMatrix(!0,!0);const i=[];j.forEach(a=>{a.data.orbit_type==="landed"&&a.data.parent===e.data.name&&a.group.parent===e.meshGroup&&i.push(a)});const s=i.map(a=>a.data.name).sort().join("|");let r=!1;t.forEach(a=>{if(a.userData.refinedFor===n&&a.userData.refinedSites===s)return;a.userData.surfaceGeometry??=a.geometry;const o=h=>a.worldToLocal(h.clone()).add(a.position),l=o(Sm),c=i.map(h=>o(h.group.getWorldPosition(new x))),u=m1(a.userData.surfaceGeometry,l,h1/a.getWorldScale(d1).x,c);u.computeBoundingBox(),u.computeBoundingSphere(),a.geometry!==a.userData.surfaceGeometry&&a.geometry.dispose(),a.geometry=u,a.position.copy(l),r=!0,a.userData.refinedFor=n,a.userData.refinedSites=s}),e.surfaceSite=n,r&&Zo(e)}function f1(){j.forEach(n=>{n.surfaceSite&&(n.surfaceSite=null,n.mesh.children.forEach(e=>{e.userData&&(e.userData.refinedFor=null)}))})}const ai=new Fn,A1=new x,p1=1e-5;function m1(n,e,t,i){const s=Object.keys(n.attributes),r=s.map(y=>n.attributes[y].itemSize),a=s.map(y=>Array.from(n.attributes[y].array)),o=a[s.indexOf("position")];let l=n.attributes.position.count;const c=l;let u=1/0,h=0;for(let y=0;y<l;y++){const b=Math.hypot(o[3*y],o[3*y+1],o[3*y+2]);u=Math.min(u,b),h=Math.max(h,b)}const d=h-u<=p1*h?(u+h)/2:null;for(let y=0;y<l;y++)o[3*y]-=e.x,o[3*y+1]-=e.y,o[3*y+2]-=e.z;const f=i.map(y=>y.clone().sub(e)),A=(y,b)=>(a.forEach((R,U)=>{const Q=r[U];for(let F=0;F<Q;F++)R.push(y.reduce((k,X,z)=>k+R[X*Q+F]*b[z],0))}),l++),g=new Map,m=(y,b)=>y<b?y*2**26+b:b*2**26+y,p=(y,b)=>{let R=g.get(m(y,b));return R===void 0&&(R=A([y,b],[.5,.5]),g.set(m(y,b),R)),R},E=(y,b)=>b.set(o[3*y],o[3*y+1],o[3*y+2]),_=(y,b,R)=>{E(y,ai.a),E(b,ai.b),E(R,ai.c);const U=Math.max(ai.a.distanceTo(ai.b),ai.b.distanceTo(ai.c),ai.c.distanceTo(ai.a));return U<=t?!1:f.some(Q=>U>u1*ai.closestPointToPoint(Q,A1).distanceTo(Q))},S=[],w=(y,b,R)=>{if(!_(y,b,R)){S.push(y,b,R);return}const U=p(y,b),Q=p(b,R),F=p(R,y);w(y,U,F),w(U,b,Q),w(F,Q,R),w(U,Q,F)},C=n.index?n.index.array:Array.from({length:l},(y,b)=>b);for(let y=0;y<C.length;y+=3)w(C[y],C[y+1],C[y+2]);const B=(y,b,R)=>{const U=g.get(m(y,b));U===void 0?R.push(y):(B(y,U,R),B(U,b,R))},P=[];for(let y=0;y<S.length;y+=3){const b=S[y],R=S[y+1],U=S[y+2],Q=[];if(B(b,R,Q),B(R,U,Q),B(U,b,Q),Q.length===3){P.push(b,R,U);continue}const F=A([b,R,U],[1/3,1/3,1/3]);Q.forEach((k,X)=>P.push(k,Q[(X+1)%Q.length],F))}if(d!==null){const y=s.includes("normal")?a[s.indexOf("normal")]:null;for(let b=c;b<l;b++){const R=o[3*b]+e.x,U=o[3*b+1]+e.y,Q=o[3*b+2]+e.z,F=Math.hypot(R,U,Q);if(!(F>0))continue;const k=d/F;o[3*b]=R*k-e.x,o[3*b+1]=U*k-e.y,o[3*b+2]=Q*k-e.z,y&&(y[3*b]=R/F,y[3*b+1]=U/F,y[3*b+2]=Q/F)}}const v=new Ke;return s.forEach((y,b)=>v.setAttribute(y,new ze(new Float32Array(a[b]),r[b],n.attributes[y].normalized))),v.setIndex(P),v}const Fx=[];function g1(n){Fx.push(n)}function Nx(n,e,t=wl(e)){let i=null;if((n.highLevel||n.mesh).traverse(g=>{g.isMesh&&!i&&!g.material.transparent&&(i=g)}),!i||!i.geometry)return null;n.meshGroup.updateMatrixWorld(!0),i.updateMatrixWorld(!0),i.geometry.computeBoundingBox();const s=i.geometry.boundingBox,r=s.getCenter(new x),a=s.getSize(new x),{lat:o,lon:l}=t,c=(90-o)*(Math.PI/180),u=(l+180)*(Math.PI/180),h=new x(-(Math.sin(c)*Math.cos(u)),Math.cos(c),Math.sin(c)*Math.sin(u)).normalize(),d=Math.max(a.x,a.y,a.z),f=new x().crossVectors(h,Math.abs(h.y)<.9?Ux:new x(1,0,0)).normalize();let A=null;for(let g=0;g<5&&!A;g++){const m=g===0?h:h.clone().applyAxisAngle(f.clone().applyAxisAngle(h,g*Math.PI/2),.002),p=r.clone().addScaledVector(m,d*2).applyMatrix4(i.matrixWorld),E=m.clone().negate().transformDirection(i.matrixWorld).normalize();A=gu(new uu(p,E),i)||null}return{targetMesh:i,dir:h,hit:A}}const Cm=4;let Qx=()=>null;function x1(n){Qx=n}function _1(){const n=j.get(Qx())?.data,e=n?.orbit_type==="landed"?n.parent:n?.name,t=i=>n&&i.data.name===n.name?0:e&&i.data.parent===e?1:2;return[...pr].sort((i,s)=>t(i)-t(s))}let Mh=-1/0,Sh=0;const y1=6;function xu(){const n=performance.now();n-Mh>Cm+y1&&(Mh=n,Sh=0);for(const e of _1()){if(Sh&&performance.now()-Mh>Cm)break;const t=j.get(e.data.parent);if(t&&t.mesh&&t.meshGroup&&(!Jo(t.data)||t.data.isModelLoaded)){const s=Nx(t,e.data);if(!s)continue;const{targetMesh:r,dir:a,hit:o}=s;let l,c;const u=new Ne().getNormalMatrix(t.meshGroup.matrixWorld),h=new Ne().copy(u).invert();if(o){l=t.meshGroup.worldToLocal(o.point.clone());const A=new Ne().getNormalMatrix(o.object.matrixWorld);c=o.face.normal.clone().applyMatrix3(A).normalize().applyMatrix3(h).normalize();const m=r1(j.get(e.data.name),t.meshGroup,r,l,c);m&&(l=m.position,c=m.normal)}else{r.geometry.boundingSphere||r.geometry.computeBoundingSphere();const{center:A,radius:g}=r.geometry.boundingSphere,m=A.clone().addScaledVector(a,g).applyMatrix4(r.matrixWorld);l=t.meshGroup.worldToLocal(m),c=a.clone().transformDirection(r.matrixWorld).applyMatrix3(h).normalize(),console.warn(`Couldn't find ${t.data.name}'s surface under ${e.data.name}; placed it on the bounding sphere.`)}t.meshGroup.add(e.group),e.group.position.copy(l);const d=new x(0,1,0),f=new ct().setFromUnitVectors(d,c);e.group.quaternion.copy(f),e.group.scale.set(1,1,1),e.group.updateMatrixWorld(!0),t.meshGroup.updateMatrixWorld(!0),pr.splice(pr.indexOf(e),1),Sh++,Fx.forEach(A=>A(e.data))}}}const Jf=[];function Ox(){return new Et({uniforms:{uTime:{value:0},uColor:{value:new Se(65535)}},vertexShader:`
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
        `,transparent:!0,blending:Ss,side:Gt,depthWrite:!1})}const js=[];let Ch=0;const E1=2;function kx(){if(Ch>=E1||js.length===0)return;const n=js.shift();n&&(Ch++,R1(n.item,n.isPriority,()=>{Ch--,kx()}))}function ca(n,e=!1){if(!n||n.isModelLoaded||n.isModelLoading)return;if(n.isModelQueued){const i=js.findIndex(s=>s.item===n);e&&i>0&&js.unshift(...js.splice(i,1));return}if(!Jo(n)){n.isModelLoaded=!0;return}n.isModelQueued=!0,e?js.unshift({item:n,isPriority:!0}):js.push({item:n,isPriority:!1}),kx()}function Im(n,e){if(!n||!n.isMeshPhysicalMaterial)return n;if(!e.has(n)){const t=new Xi;t.copy(n),n.transmission>0&&(t.transparent=!0,t.opacity=Math.min(n.opacity,.35),t.depthWrite=!1),e.set(n,t)}return e.get(n)}function v1(n,e){const t=new Map;e.traverse(i=>{if(i.isMesh&&(i.material=Array.isArray(i.material)?i.material.map(s=>Im(s,t)):Im(i.material,t),i.userData=n,i.castShadow=!0,i.receiveShadow=!0,Db.has(n.type)&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>{s.shadowSide=Vt}),i.material&&(i.material.map&&(i.material.map.colorSpace=ft),i.material.metalness!==void 0&&(i.material.metalness=Math.min(i.material.metalness,.4),i.material.roughness=Math.max(i.material.roughness,.6))),_o(n))){const s=Ox();i.material=s,Jf.push(s),i.castShadow=!1,i.receiveShadow=!1}})}const M1=1e5;function S1(n){n.updateMatrixWorld(!0);let e=0;n.traverse(d=>{d.isMesh&&(e+=(d.geometry.index?d.geometry.index.count:d.geometry.attributes.position.count)/3)});const t=Math.max(1,e/M1);let i=1;const s=()=>(i=i*16807%2147483647)/2147483647,r=new x,a=new x,o=new x;let l=0,c=0,u=0,h=0;return n.traverse(d=>{if(!d.isMesh)return;const f=d.geometry.attributes.position,A=d.geometry.index,g=(A?A.count:f.count)/3,m=Px(f,d.matrixWorld),p=A?A.array:null;for(let E=0;E<g;E+=t){const _=Math.min(g-1,Math.floor(E+(t>1?s()*t:0)))*3;m(r,p?p[_]:_),m(a,p?p[_+1]:_+1),m(o,p?p[_+2]:_+2);const S=a.x-r.x,w=a.y-r.y,C=a.z-r.z,B=o.x-r.x,P=o.y-r.y,v=o.z-r.z,y=w*v-C*P,b=C*B-S*v,R=S*P-w*B,U=Math.sqrt(y*y+b*b+R*R)/2,Q=U/3;l+=(r.x+a.x+o.x)*Q,c+=(r.y+a.y+o.y)*Q,u+=(r.z+a.z+o.z)*Q,h+=U}}),h>0?new x(l,c,u).divideScalar(h):null}const wm=new Set(["skinIndex","skinWeight"]);function C1(n){const e=g=>Object.keys(g.attributes).filter(m=>!wm.has(m)).sort().map(m=>m+g.attributes[m].itemSize).join(),t=(g,m)=>[g.material.uuid,g.castShadow,g.receiveShadow,g.renderOrder,m,g.frustumCulled,g.layers.mask,e(g.geometry)].join("|");let i=0,s=!1,r=!1;const a=new Set;if(n.traverse(g=>{g.isMesh?(i++,s||=g.isSkinnedMesh,g.isInstancedMesh||g.isBatchedMesh||Array.isArray(g.material)||Object.keys(g.geometry.morphAttributes).length?r=!0:a.add(t(g,g.visible))):(g.isLight||g.isCamera||g.isLine||g.isPoints||g.isSprite)&&(r=!0)}),r||i<2||a.size===i&&!s)return;n.updateMatrixWorld(!0);const o=new ge().copy(n.matrixWorld).invert(),l=new Map,c=new ge,u=new Ne,h=new ge,d=new ge,f=new x;n.traverse(g=>{if(!g.isMesh)return;const m=g.geometry,p=new Ke;for(const[C,B]of Object.entries(m.attributes)){if(wm.has(C))continue;const P=new Float32Array(B.count*B.itemSize);for(let v=0;v<B.count;v++)for(let y=0;y<B.itemSize;y++)P[v*B.itemSize+y]=B.getComponent(v,y);p.setAttribute(C,new ze(P,B.itemSize))}const E=p.attributes.position.count,_=m.index?Array.from({length:m.index.count},(C,B)=>m.index.getX(B)):Array.from({length:E},(C,B)=>B);c.multiplyMatrices(o,g.matrixWorld);let S=!0;for(let C=g;C&&C!==n;C=C.parent)S&&=C.visible;if(g.isSkinnedMesh){const{bones:C,boneInverses:B}=g.skeleton,P=m.attributes.skinIndex,v=m.attributes.skinWeight,{position:y,normal:b,tangent:R}=p.attributes;u.getNormalMatrix(c);for(let U=0;U<E;U++){h.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);for(let Q=0;Q<4;Q++){const F=v.getComponent(U,Q);if(!F)continue;const k=P.getComponent(U,Q);d.multiplyMatrices(C[k].matrixWorld,B[k]);for(let X=0;X<16;X++)h.elements[X]+=d.elements[X]*F}h.premultiply(g.bindMatrixInverse).multiply(g.bindMatrix),f.fromBufferAttribute(y,U).applyMatrix4(h).applyMatrix4(c),y.setXYZ(U,f.x,f.y,f.z),b&&(f.fromBufferAttribute(b,U).transformDirection(h).applyMatrix3(u).normalize(),b.setXYZ(U,f.x,f.y,f.z)),R&&(f.set(R.getX(U),R.getY(U),R.getZ(U)).transformDirection(h).transformDirection(c),R.setXYZ(U,f.x,f.y,f.z))}}else p.applyMatrix4(c);if(c.determinant()<0)for(let C=0;C<_.length;C+=3)[_[C+1],_[C+2]]=[_[C+2],_[C+1]];p.setIndex(_);const w=t(g,S);l.has(w)||l.set(w,{mesh:g,shown:S,geometries:[]}),l.get(w).geometries.push(p)});const A=[];for(const{mesh:g,shown:m,geometries:p}of l.values()){const E=p.length>1?uT(p):p[0];if(!E)return;const _=new Ye(E,g.material);_.name=g.name,_.castShadow=g.castShadow,_.receiveShadow=g.receiveShadow,_.renderOrder=g.renderOrder,_.visible=m,_.frustumCulled=g.frustumCulled,_.layers.mask=g.layers.mask,A.push(_)}n.clear(),A.forEach(g=>n.add(g))}function Gx(n,e,t){C1(t);const i=new jt;i.add(t);const s=new Tn().setFromObject(t),r=S1(t)||s.getCenter(new x);t.position.x=-r.x,t.position.z=-r.z,n.orbit_type==="landed"?t.position.y=-s.min.y:t.position.y=-r.y;const a=s.getSize(new x),o=Math.max(a.x,a.y,a.z),l=n.built?.modelSize??(n.type==="mission"?fr:n.model_scale||1),c=1/(o||1)*l;return i.scale.set(c,c,c),n.model_offset&&i.position.set(n.model_offset.x,n.model_offset.y,n.model_offset.z),v1(n,t),i.userData.detailLevel=!0,i}function I1(n,e){const t=e===n.model&&n.model_low||(e?e.replace(".glb","-low.glb"):null);return t&&t!==e?t:null}const tf=[];function zx(){return new Promise(n=>tf.push(n))}function w1(){tf.length!==0&&tf.shift()()}const b1=new _i(1,1),bl=new Lf;bl.overrideMaterial=new mi;const T1=new Kt;function Hx(n){const e=[];n.traverse(i=>{i.isMesh&&i.frustumCulled&&(i.frustumCulled=!1,e.push(i))}),bl.add(n);const t=Ge.getRenderTarget();Ge.setRenderTarget(b1),Ge.render(bl,T1),Ge.setRenderTarget(t),bl.remove(n),e.forEach(i=>{i.frustumCulled=!0})}const Vx=new Set,bm=new x,Nc=new x;function Wx(n){if(!n.detailRoot||!n.detailRadius)return 0;n.detailRoot.getWorldPosition(bm),n.detailRoot.getWorldScale(Nc);const e=n.detailRadius*Math.max(Nc.x,Nc.y,Nc.z),t=H.position.distanceTo(bm);if(t===0)return 1/0;const i=H.fov*(Math.PI/180);return 2*e/t*window.innerHeight/(2*Math.tan(i/2))}function B1(){Vx.forEach(n=>{if(!n.group.visible)return;const e=Wx(n),t=n.highLevel.visible,i=t?e>Rb:e>Bb;i!==t&&(n.highLevel.visible=i,n.lowLevel.visible=!i)})}async function R1(n,e,t){const i=j.get(n.name),s=Jo(n);if(!i||!s){n.isModelLoaded=!0,t&&t();return}n.isModelLoading=!0;const r=I1(n,s);try{let a,o=!!r;try{a=await Yl.loadAsync(Ts(r||s))}catch(f){if(!r)throw f;o=!1,a=await Yl.loadAsync(Ts(s))}const l=Gx(n,s,a.scene);await Dx(l),await zx(),Hx(l);const c=new jt;c.add(l);const u=i.mesh;for(let f=u.children.length-1;f>=0;f--){const A=u.children[f];!A.isLine2&&!A.isLine&&u.remove(A)}const h=new Tn().setFromObject(c),d=n.orbit_type==="landed"?h.getCenter(new x).y:0;i.detailRadius=Math.max(...[0,1,2,3,4,5,6,7].map(f=>Math.hypot(f&1?h.max.x:h.min.x,(f&2?h.max.y:h.min.y)-d,f&4?h.max.z:h.min.z))),i.detailCenterY=h.getCenter(new x).y,i.frameRadius=P1(c,h,i.detailRadius,n.orbit_type==="landed"),u.add(c),i.detailRoot=c,i.lowLevel=l,n.hasHighDetail=!o,n.isModelLoaded=!0,Zo(i),n.wantsHighDetail&&jf(n)}catch(a){console.warn(`Failed to load model for ${n.name}`,a),n.isModelLoaded=!0}n.isModelLoading=!1,t&&t()}function jf(n){if(!n||n.hasHighDetail||n.isHighDetailLoading)return;const e=Jo(n);if(!e)return;const t=j.get(n.name);if(!t||!t.detailRoot){n.wantsHighDetail=!0;return}n.isHighDetailLoading=!0,Yl.loadAsync(Ts(e)).then(i=>{const s=Gx(n,e,i.scene);return Dx(s).then(zx).then(()=>{Hx(s),s.visible=!1,t.detailRoot.add(s),t.highLevel=s,Vx.add(t),n.hasHighDetail=!0,Zo(t)})}).catch(i=>console.warn(`Failed to load full-detail model for ${n.name}`,i)).finally(()=>{n.isHighDetailLoading=!1})}function D1(n){n&&j.forEach(e=>{Ar(e.data.name)===n&&ca(e.data,!1)})}const L1=5e4;function P1(n,e,t,i){const s=new x(0,i?e.getCenter(new x).y:0,0),r=new x;let a=0,o=0;if(n.updateMatrixWorld(!0),n.traverse(c=>{const u=c.isMesh&&c.geometry&&c.geometry.attributes.position;if(!u)return;const h=Math.max(1,Math.floor(u.count/L1));for(let d=0;d<u.count;d+=h)r.fromBufferAttribute(u,d).applyMatrix4(c.matrixWorld),a+=r.distanceToSquared(s),o++}),!o)return t;const l=Math.min(Math.sqrt(a/o),t);return Math.sqrt(l*t)}const qx=[];let Tm=!1;function U1(){Tm||(Tm=!0,qx.forEach(n=>ca(n,!0)))}const F1=`// 4D simplex noise.\r
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
`,Bm=`// Shared by the Sun's shaders.\r
\r
// Hot-body colour ramp: red follows brightness, green its square, blue its fourth power, so\r
// bright plasma reads white-yellow and dimmer plasma orange-red. uTint sets where on that\r
// curve 1.0 lands; uBrightness scales the result.\r
vec3 plasmaColor(float brightness, float tint, float gain) {\r
    float b = brightness * tint;\r
    float b2 = b * b;\r
    return vec3(b, b2, b2 * b2) / tint * gain;\r
}\r
`,N1=`varying vec3 vDirection;\r
\r
void main() {\r
    vDirection = position;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}\r
`,Q1=`// Draws evolving plasma noise onto the inside of a unit sphere; a cube camera at its centre\r
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
`,O1=`// The Sun's photosphere. The noise cube map is read three times through copies of the surface\r
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
`,k1=`uniform samplerCube uNoise;\r
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
`,Rm=`// A flat shape centred on the Sun that always faces the camera, built in view space.\r
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
`,G1=`// Glow around the disc: strongest at the limb, falling off with the square of the distance,\r
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
`,z1=`// Soft star-like glow for when the Sun is small on screen.\r
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
`,H1=`// Coronal loops and rays: thin camera-facing ribbons animated entirely on the GPU.\r
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
`,V1=`varying float vAcross;\r
varying float vOpacity;\r
varying vec3 vColor;\r
\r
void main() {\r
    // Soft edges across the ribbon.\r
    float alpha = smoothstep(1.0, 0.0, abs(vAcross));\r
    alpha *= alpha * vOpacity;\r
    gl_FragColor = vec4(vColor * alpha, alpha);\r
}\r
`,lt={noise:{resolution:256,octaves:5,frequency:7,speed:.12,persistence:.8,contrast:.25,flatten:.72},surface:{layerSpin:.015,base:4,offset:1,limbPower:2.5,limbStrength:1.2,tint:.3,brightness:.7},corona:{extent:.35,tint:.46,brightness:1.06,falloffColor:.5,opacity:1},loops:{count:500,segments:24,regions:7,arch:.5,width:.012,cycleSpeed:.3,noiseFrequency:4,noiseAmplitude:.2,opacity:.45,hue:.1,hueSpread:.8},rays:{count:400,segments:12,length:.2,width:.02,cycleSpeed:.3,noiseFrequency:8,noiseAmplitude:.2,opacity:.06,hue:.35,hueSpread:.5},halo:{extent:3,minPixels:22,color:[1,.78,.45],opacity:.9},detailPixels:40,detailFadePixels:80,noisePixels:60,noiseFacesPerFrame:2},nf={transparent:!0,depthWrite:!1,blending:Ss,premultipliedAlpha:!0};function Qc(n){return n.raycast=()=>{},n}function Dm(n=96){const e=[],t=[];for(let s=0;s<=n;s++){const r=s/n*Math.PI*2;if(e.push(Math.cos(r),Math.sin(r),0,Math.cos(r),Math.sin(r),1),s<n){const a=s*2;t.push(a,a+1,a+2,a+1,a+3,a+2)}}const i=new Ke;return i.setAttribute("position",new Dt(e,3)),i.setIndex(t),i}function sf(n){const e=n()*2-1,t=n()*Math.PI*2,i=Math.sqrt(1-e*e);return new x(i*Math.cos(t),e,i*Math.sin(t))}function Lm(n,e,t){const i=sf(t).cross(n).normalize();return n.clone().applyAxisAngle(i,t()*e).normalize()}function W1(n){let e=n;return()=>(e=e*16807%2147483647)/2147483647}function Pm({count:n,segments:e},t){const i=(e+1)*2,s=new Float32Array(n*i*2),r=new Float32Array(n*i*3),a=new Float32Array(n*i*3),o=new Float32Array(n*i*4),l=[];let c=0;for(let h=0;h<n;h++){const{a:d,b:f,random:A}=t(h),g=c;for(let m=0;m<=e;m++){for(const p of[-1,1])s.set([m/e,p],c*2),r.set([d.x,d.y,d.z],c*3),a.set([f.x,f.y,f.z],c*3),o.set(A,c*4),c++;if(m<e){const p=g+m*2;l.push(p,p+1,p+2,p+1,p+3,p+2)}}}const u=new Ke;return u.setAttribute("aStrand",new ze(s,2)),u.setAttribute("aFootA",new ze(r,3)),u.setAttribute("aFootB",new ze(a,3)),u.setAttribute("aSeed",new ze(o,4)),u.setIndex(l),u.boundingSphere=new dn(new x,1.6),u}function Um(n,e){return new Et({...nf,defines:e?{STRAND_RAYS:""}:{},uniforms:{uTime:{value:0},uCycleSpeed:{value:n.cycleSpeed},uCameraLocal:{value:new x},uWidth:{value:n.width},uArch:{value:n.arch??0},uLength:{value:n.length??0},uNoiseFrequency:{value:n.noiseFrequency},uNoiseAmplitude:{value:n.noiseAmplitude},uOpacity:{value:n.opacity},uHue:{value:n.hue},uHueSpread:{value:n.hueSpread}},vertexShader:H1,fragmentShader:V1})}const q1=new x,Xx=new Ta(new Uint8Array([128,128,128,255]),1,1);Xx.needsUpdate=!0;const X1=.8;function Y1({radius:n,renderer:e}){const t=new jt;t.scale.setScalar(n);const i=W1(20240613),s=new Y0(lt.noise.resolution,{generateMipmaps:!1,minFilter:wt,magFilter:wt}),r=new q0(.1,10,s),a=new Lf,o=new Et({side:Vt,defines:{OCTAVES:lt.noise.octaves},uniforms:{uTime:{value:0},uFrequency:{value:lt.noise.frequency},uSpeed:{value:lt.noise.speed},uPersistence:{value:lt.noise.persistence},uContrast:{value:lt.noise.contrast},uFlatten:{value:lt.noise.flatten}},vertexShader:N1,fragmentShader:F1+Q1}),l=new Ye(new qi(1,48,32),o);a.add(l);const c=new Ye(new qi(1,128,64),new Et({uniforms:{uTime:{value:0},uNoise:{value:s.texture},uLayerSpin:{value:lt.surface.layerSpin},uBase:{value:lt.surface.base},uOffset:{value:lt.surface.offset},uLimbPower:{value:lt.surface.limbPower},uLimbStrength:{value:lt.surface.limbStrength},uTint:{value:lt.surface.tint},uBrightness:{value:lt.surface.brightness},uCycleMap:{value:Xx},uCycleU:{value:0},uCycleMix:{value:0},uCycleLook:{value:0},uCycleGain:{value:1}},vertexShader:O1,fragmentShader:Bm+k1}));t.add(c);const u=Qc(new Ye(Dm(),new Et({...nf,uniforms:{uInner:{value:0},uOuter:{value:0},uMinPixels:{value:0},uViewportHeight:{value:1},uTint:{value:lt.corona.tint},uBrightness:{value:lt.corona.brightness},uFalloffColor:{value:lt.corona.falloffColor},uOpacity:{value:lt.corona.opacity}},vertexShader:Rm,fragmentShader:Bm+G1})));u.frustumCulled=!1,t.add(u);const h=Qc(new Ye(Dm(64),new Et({...nf,uniforms:{uInner:{value:0},uOuter:{value:0},uMinPixels:{value:lt.halo.minPixels},uViewportHeight:{value:1},uColor:{value:new Se(...lt.halo.color)},uOpacity:{value:lt.halo.opacity}},vertexShader:Rm,fragmentShader:z1})));h.frustumCulled=!1,t.add(h);const d=Array.from({length:lt.loops.regions},()=>{const F=(i()<.5?1:-1)*(.15+i()*.45),k=i()*Math.PI*2;return new x(Math.cos(F)*Math.cos(k),Math.sin(F),Math.cos(F)*Math.sin(k))}),f=Qc(new Ye(Pm(lt.loops,()=>{const F=i()<.2,k=F?sf(i):d[Math.floor(i()*d.length)],X=Lm(k,F?.05:.18,i),z=Lm(X,.05+i()*.3,i);return{a:X,b:z,random:[i(),i(),i(),i()]}}),Um(lt.loops,!1)));t.add(f);const A=Qc(new Ye(Pm(lt.rays,()=>{const F=sf(i);return{a:F,b:F,random:[i(),i(),i(),i()]}}),Um(lt.rays,!0)));t.add(A);const g=new x,m=new Me,p=new x;let E=!1;r.coordinateSystem=e.coordinateSystem,r.updateCoordinateSystem(),r.updateMatrixWorld();let _=0,S=0,w=null;function C(F,k=lt.noiseFacesPerFrame){if(!E)return;o.uniforms.uTime.value=F;const X=e.getRenderTarget();for(let z=0;z<k;z++)e.setRenderTarget(s,_),e.render(a,r.children[_]),_=(_+1)%6;e.setRenderTarget(X)}const B=new _i(4,4),P=new Kt(60,1,.01,100);P.position.set(0,0,3),P.lookAt(0,0,0),P.updateMatrixWorld();function v(){const F=t.parent;F&&F.remove(t),t.scale.setScalar(1),t.visible=f.visible=A.visible=!0;for(const X of[f,A])X.material.uniforms.uCameraLocal.value.copy(P.position);const k=e.getRenderTarget();e.setRenderTarget(B),e.render(t,P),e.setRenderTarget(k),t.scale.setScalar(n),F&&F.add(t)}t.visible=!1,Promise.all([e.compileAsync(l,r.children[0],a),e.compileAsync(t,P)]).then(()=>{E=!0,C(0,6),v(),B.dispose()});function y(F,k,{strandsTime:X=F}={}){t.getWorldPosition(g);const z=t.getWorldScale(q1).x,te=k.position.distanceTo(g);e.getSize(m);const ie=Math.tan(et.degToRad(k.fov)/2),ee=te>z?z/te/ie*(m.y/2):1/0;p.copy(g).project(k);const pe=p.z<1&&Math.abs(p.x)<1.5&&Math.abs(p.y)<1.5;c.material.uniforms.uTime.value=F;const be=w===null?0:Math.max(0,F-w);w=F,Q(be),pe&&ee>lt.noisePixels&&(S+=be,C(S)),u.material.uniforms.uInner.value=z*.98,u.material.uniforms.uOuter.value=z*(1+lt.corona.extent),u.material.uniforms.uViewportHeight.value=m.y,h.material.uniforms.uOuter.value=z*lt.halo.extent,h.material.uniforms.uViewportHeight.value=m.y,h.material.uniforms.uOpacity.value=lt.halo.opacity*(1-et.smoothstep(ee,20,120));const tt=et.smoothstep(ee,lt.detailPixels,lt.detailFadePixels);if(f.visible=A.visible=tt>0,tt>0){f.material.uniforms.uOpacity.value=lt.loops.opacity*tt,A.material.uniforms.uOpacity.value=lt.rays.opacity*tt;for(const At of[f,A])At.material.uniforms.uTime.value=X,At.worldToLocal(At.material.uniforms.uCameraLocal.value.copy(k.position))}}function b(F){S=F}const R={mix:0,mixTo:0,look:0,lookTo:0};function U(F){const k=c.material.uniforms;if(!F){R.mixTo=0;return}F.map&&(k.uCycleMap.value=F.map),F.u!==void 0&&(k.uCycleU.value=et.clamp(F.u,0,1)),F.gain!==void 0&&(k.uCycleGain.value=F.gain),F.look!==void 0&&(R.lookTo=F.look,R.mix===0&&(R.look=F.look)),R.mixTo=1}function Q(F){const k=F/X1,X=(te,ie)=>ie>te?Math.min(ie,te+k):Math.max(ie,te-k);R.mix=X(R.mix,R.mixTo),R.look=X(R.look,R.lookTo);const z=c.material.uniforms;z.uCycleMix.value=R.mix*R.mix*(3-2*R.mix),z.uCycleLook.value=R.look*R.look*(3-2*R.look)}return{group:t,update:y,setNoiseTime:b,setCycle:U,noiseMaterial:o}}let Yx=1,xn=new Date;const K1=new pM;let ti=0,mr=null;function J1(n){ti=mr??ti+n}function j1(n){mr=n}function Z1(){return new Date(xn)}function $1(n){xn.setTime(new Date(n).getTime())}function eB(n){Yx=n}const Tl=new Map;function _u(n,e){Tl.has(n)||Tl.set(n,[]),Tl.get(n).push(e)}function an(n,e){Tl.get(n)?.forEach(t=>t(e))}const tB=new x(0,0,0),nB=new x(0,1,0);function yu(n){let e=0;for(let t=0;t<n.length;t++)e=(e<<5)-e+n.charCodeAt(t),e|=0;return Math.abs(e)}function iB(n,e=.25){const t=yu(n||"asteroid"),i=.2+(t&255)/255*.8,s=.2+(t>>8&255)/255*.8,r=.2+(t>>16&255)/255*.8,a=i+s+r,o=t&1?1:-1,l=t>>1&1?1:-1,c=t>>2&1?1:-1;return{x:o*(i/a)*e,y:l*(s/a)*e,z:c*(r/a)*e}}function sB(n){const e=yu(n||"asteroid"),t=5+(e&255)/255*14,i=(e>>8&255)/255*(Math.PI/3),s=(e>>16&255)/255*Math.PI*2;return{period:(e>>24&1?1:-1)*t/24,pole:new x(Math.sin(i)*Math.cos(s),Math.cos(i),Math.sin(i)*Math.sin(s)),offset:e%360}}function rB(n){const e=yu(`${n||"asteroid"}/tumble`);return{nutation:(35+(e&255)/255*40)*Math.PI/180,precession:1.5+(e>>8&255)/255*2,offset:(e>>16&255)/255*Math.PI*2}}const Fm={spin:{axis:"+y",rate:2,wobble:8,tilt:35,period:90},sun:{axis:"+y",rate:1.5,wobble:5,period:120},nadir:{axis:"-y",along:"+z",rate:0,wobble:3,period:40},tumble:{rate:3}},Ih=new x,Nm=new x,Qm=new x,Wr=new x,$r=new x,ss=new x,Om=new ge,km=new ge,Gm=new ct,Oc=new ct;function zm(n){const e=/^([+-]?)([xyz])$/.exec(String(n||"+y").trim().toLowerCase())||["","","y"],t=new x;return t[e[2]]=e[1]==="-"?-1:1,t}function aB(n){if(n.motion)return n.motion;const e=n.data.motion||{},t=Fm[e.mode]?e.mode:"spin",i={...Fm[t],...e},s=yu(n.data.name),r=s%360*Math.PI/180,a=et.degToRad(i.tilt||0);return n.motion={mode:t,axis:zm(i.axis),along:zm(i.along),rate:et.degToRad(i.rate||0),wobble:et.degToRad(i.wobble||0),period:i.period||90,phase:(s>>9)%628/100,rest:new x(Math.sin(a)*Math.cos(r),Math.cos(a),Math.sin(a)*Math.sin(r))},n.motion}function oB(n,e,t,i){return e?($r.set(1,0,0),Math.abs(n.x)>.9&&$r.set(0,0,1),$r.cross(n).normalize().applyAxisAngle(n,t),i.copy(n).multiplyScalar(Math.cos(e)).addScaledVector($r,Math.sin(e))):i.copy(n)}function cB(n,e,t,i){const s=aB(n),r=n.meshGroup,a=e/s.period*Math.PI*2+s.phase;if(s.mode==="tumble"){n.tumbleSpeed||(n.tumbleSpeed=iB(n.data.name,s.rate)),r.rotateX(n.tumbleSpeed.x*t),r.rotateY(n.tumbleSpeed.y*t),r.rotateZ(n.tumbleSpeed.z*t);return}const o=j.get(n.data.parent);if(s.mode==="nadir"&&o&&n.data.orbit){Wr.subVectors(o.group.position,n.group.position).normalize();const l=vi(n.data.orbit,i),c=vi(n.data.orbit,i+.001);ss.set(c.x-l.x,c.y-l.y,c.z-l.z),ss.addScaledVector(Wr,-ss.dot(Wr)),ss.lengthSq()<1e-16&&ss.crossVectors(Wr,nB),ss.normalize(),$r.crossVectors(Wr,ss),Om.makeBasis(Wr,ss,$r),Qm.crossVectors(s.axis,s.along),km.makeBasis(s.axis,s.along,Qm).transpose(),r.quaternion.setFromRotationMatrix(Om.multiply(km)),Oc.setFromAxisAngle(s.axis,s.wobble*Math.sin(a)),r.quaternion.multiply(Oc);return}s.mode==="sun"?Ih.subVectors(tB,n.group.position).normalize():Ih.copy(s.rest),oB(Ih,s.wobble,a,Nm),Gm.setFromUnitVectors(s.axis,Nm),Oc.setFromAxisAngle(s.axis,s.rate*e+s.phase),r.quaternion.copy(Gm).multiply(Oc)}let cr=null;function rf(n){return n?n.orbit_color?n.orbit_color:n.type==="planet"?n.color||"#4a90e2":n.type==="moon"?j.get(n.parent)?.data.orbit_color||"#888888":n.type==="comet"?"#ffffff":"#888888":"#888888"}function Hm(n){return n?n.type==="asteroid"||n.type==="comet"||n.type==="mission"?.18:n.type==="planet"?.65:n.type==="moon"?.4:.35:.35}function lB(n,e,t){const i=or(n);if(i.samples.length<2)return null;const s=new Ke().setFromPoints(i.samples.map(a=>a.pos)),r=new Ba(s,new Rs({color:new Se(e),transparent:!0,opacity:t,depthWrite:!1}));return r.userData={baseColor:e,baseOpacity:t},r.userData.curve={closed:!1,turns:0,range:()=>{const a=or(n).samples;return[a[0].days,a[a.length-1].days]},at:(a,o)=>Ix(or(n),a,o)},r}function Zf(n,e,t){const i=[];for(let s=0;s<e;s++){const r=qf(n,s/e*2*Math.PI,t);i.push(new x(r.x,r.y,r.z))}return i}function Kx(n){return et.clamp(Math.ceil(2*Math.PI*Math.sqrt(Wf(n)/(8*mx))),128,4096)}function Vm(n,e="#888888",t=.4){if(!n||n.a===0||n.rate===0)return null;const i=Kx(n),s=Ua(xn),r=Zf(n,i,s),a=new Ke().setFromPoints(r),o=new Rs({color:new Se(e),transparent:!0,opacity:t,depthWrite:!1}),l=new Ff(a,o);return l.userData={baseColor:e,baseOpacity:t,orbit:n,segments:i,days:s},l.userData.curve=yB(l),l}const uB=.1;function hB(n,e){const t=n?.userData.orbit;if(!t||!(t.node_rate||t.peri_rate)||n.userData.morph||Math.abs(e-n.userData.days)*(Math.abs(t.node_rate||0)+Math.abs(t.peri_rate||0))<uB)return;const s=n.userData.loop??n.geometry;s.setFromPoints(Zf(t,n.userData.segments,e)),s.computeBoundingSphere(),n.userData.days=e,n.userData.near&&(n.userData.near.cam=null),n.userData.far=null}const dB=.05,fB=.1,AB=.01,pB=.02,mB=1.08,kc=96,gB=2e-5,rs=new x,Gc=new x,xB=new ge;function _B(n,e){j.forEach(t=>{Wm(t.orbitLine,n,e);const i=t.trajectoryLines;i&&[i.cruise,i.arrived].forEach(s=>{s&&s!==t.orbitLine&&Wm(s,n,e)})})}function yB(n){const e=n.userData.orbit;return{closed:!0,range:()=>[0,2*Math.PI],turns:(Math.abs(e.node_rate||0)+Math.abs(e.peri_rate||0))*(Math.PI/180),at:(t,i,s)=>{const r=qf(n.userData.orbit,t,s);return i.set(r.x,r.y,r.z)}}}function Wm(n,e,t){const i=n?.userData.curve;if(!i||!n.parent)return;if(!n.visible){Gi(n);return}n.parent.updateWorldMatrix(!0,!1),rs.copy(e).applyMatrix4(xB.copy(n.parent.matrixWorld).invert());const s=n.userData.near,r=n.userData.loop??n.geometry;r.boundingSphere||r.computeBoundingSphere();const a=r.boundingSphere,o=n.userData.far;if(o&&o.distances===ni&&o.whole===r&&o.radius===a.radius&&o.cam.distanceTo(rs)+Math.abs(t-o.days)*i.turns*a.radius<o.slack||(n.userData.far=null,s?.cam&&s.cam.distanceTo(rs)<fB*s.distance&&Math.abs(t-s.days)*i.turns*a.radius<AB*s.distance))return;const l=dB*a.radius;if(rs.distanceTo(a.center)>a.radius+l){Gi(n);return}const c=n.userData.morph&&n.userData.orbit&&r.userData.reach;if(c){const ee=rs.length();if(ee<c[0]-2*l||ee>c[1]+2*l){Gi(n);return}}const u=ee=>i.at(ee,Gc,t),h=ee=>u(ee).distanceTo(rs),[d,f]=i.range(),A=f-d;let g=d,m=1/0;for(let ee=0;ee<=kc;ee++){const pe=d+A*(ee/kc),be=h(pe);be<m&&(m=be,g=pe)}const p=(Math.sqrt(5)-1)/2;let E=g-A/kc,_=g+A/kc;i.closed||(E=Math.max(E,d),_=Math.min(_,f));const S=u(_).clone(),w=u(E).distanceTo(S)/(_-E)||1;let C=_-p*(_-E),B=E+p*(_-E),P=h(C),v=h(B);for(let ee=0;ee<80&&(_-E)*w>gB*Math.min(P,v);ee++)P<v?(_=B,B=C,v=P,C=_-p*(_-E),P=h(C)):(E=C,C=B,P=v,B=E+p*(_-E),v=h(B));g=(E+_)/2;const y=Math.max(h(g),l*1e-12);if(y>l){Gi(n),n.userData.far={cam:rs.clone(),days:t,slack:(y-l)/2,distances:ni,whole:r,radius:a.radius};return}const b=u(g).clone(),R=A*1e-9*(g+A*1e-9>f&&!i.closed?-1:1),U=u(g+R).distanceTo(b)/Math.abs(R)||1,Q=i.closed?A/2:Math.max(g-d,f-g),F=[];let k=0,X=pB*y/U;for(;k+X<Q;)k+=X,F.push(k),X*=mB;let z;if(i.closed)z=[...F.map(ee=>g-ee).reverse(),g,...F.map(ee=>g+ee)];else{const ee=F.filter(be=>be<g-d).map(be=>g-be).reverse(),pe=F.filter(be=>be<f-g).map(be=>g+be);z=[...g>d?[d]:[],...ee,g,...pe,...g<f?[f]:[]]}const te=new Float32Array(z.length*3);z.forEach((ee,pe)=>{u(ee).sub(b),te[3*pe]=Gc.x,te[3*pe+1]=Gc.y,te[3*pe+2]=Gc.z});const ie=new Ke;ie.setAttribute("position",new ze(te,3)),s?.geometry.dispose(),n.userData.loop??=n.geometry,n.geometry=ie,n.position.copy(b),n.material.isLineDashedMaterial&&n.computeLineDistances(),n.userData.near={cam:rs.clone(),distance:y,days:t,geometry:ie}}function Gi(n){const e=n.userData.near;e&&(e.geometry.dispose(),n.geometry=n.userData.loop,n.position.set(0,0,0),n.userData.near=null,n.userData.loop=null)}function Jx({y:n,z:e}){const t=Math.max(n,e)**2/Math.max(Math.min(n,e),1e-6);return et.clamp(Math.ceil(2*Math.PI*Math.sqrt(t/(8*mx))),128,4096)}function jx(n){const e=[],t=Jx(n.amp),i={...n,M0:0};for(let s=0;s<t;s++)e.push(Mx(i,s/t*(360/n.rate),new x));return e}function EB(n){if(!n?.amp||!n.rate)return null;const e=new Ke().setFromPoints(jx(n)),t=new Rs({color:new Se("#888888"),transparent:!0,opacity:.18,depthWrite:!1}),i=new Ff(e,t);return i.userData={baseColor:"#888888",baseOpacity:.18},i.userData.curve={closed:!0,turns:0,range:()=>[0,2*Math.PI],at:(s,r)=>r.set(-n.amp.x*Math.cos(s),n.amp.y*Math.cos(s),n.amp.z*Math.sin(s))},i}function qm(n,e){const t=(90-n)*(Math.PI/180),i=(e+180)*(Math.PI/180);return new x(-(Math.sin(t)*Math.cos(i)),Math.cos(t),Math.sin(t)*Math.sin(i)).normalize()}function Xm(n,e,t){const i=n.duration||.05;return $f(n,e,t%i/i)}function $f(n,e,t){const i=n.apogee||1.5,s=qm(n.start_coords.lat,n.start_coords.lon),r=qm(n.end_coords.lat,n.end_coords.lon),a=new ct().setFromUnitVectors(new x(0,1,0),s),o=new ct().setFromUnitVectors(new x(0,1,0),r),l=new ct().slerpQuaternions(a,o,t),c=new x(0,1,0).applyQuaternion(l),u=e+4*i*t*(1-t);return c.multiplyScalar(u)}function eA(n,e){const t=[];for(let s=0;s<=128;s++)t.push($f(n.suborbital,e,s/128));return t}function vB(n,e){if(!n.suborbital)return null;const t=new Ke().setFromPoints(eA(n,e)),i=new Kv({color:16755200,dashSize:2,gapSize:1,transparent:!0,opacity:.6,depthWrite:!1}),s=new Ba(t,i);return s.computeLineDistances(),s.userData.curve={closed:!1,turns:0,range:()=>[0,1],at:(r,a)=>a.copy($f(n.suborbital,j.get(n.parent)?.data.radius||1,r))},s}function MB(n,e){try{const t=new qi(n*1.005,64,64),i=Il(e);i.colorSpace=ft;const s=new x,r=new Et({uniforms:{tNight:{value:i},uSun:{value:s}},vertexShader:`
                varying vec2 vUv; varying vec3 vNormal; varying vec3 vWorldPosition;
                void main() { vUv = uv; vNormal = normalize(mat3(modelMatrix) * normal);
                vec4 worldPos = modelMatrix * vec4(position, 1.0); vWorldPosition = worldPos.xyz;
                gl_Position = projectionMatrix * viewMatrix * worldPos; }
            `,fragmentShader:`
                uniform sampler2D tNight; uniform vec3 uSun; varying vec2 vUv; varying vec3 vNormal; varying vec3 vWorldPosition;
                void main() { vec3 sunDir = normalize(uSun - vWorldPosition);
                float dotProd = dot(vNormal, sunDir); float alpha = 1.0 - smoothstep(-0.2, 0.2, dotProd);
                vec4 color = texture2D(tNight, vUv); gl_FragColor = vec4(color.rgb, alpha * color.a); }
            `,transparent:!0,blending:Ss,side:qn,depthWrite:!1}),a=new Ye(t,r);return a.onBeforeRender=(o,l)=>s.copy(l.position),a}catch{return null}}function SB(n){const e=new jt;let t,i;if(_o(n)){const o=Ox();Jf.push(o),t=o,i=o}else t=new Xi({color:16763904,roughness:.3,metalness:.8}),i=new Xi({color:17663,roughness:.2,metalness:.5,emissive:4403});const s=new Ye(new Is(1,1,1),t);_o(n)||(s.castShadow=!1,s.receiveShadow=!0),e.add(s);const r=new Ye(new Is(3,.1,.8),i);_o(n)||(r.castShadow=!1,r.receiveShadow=!0),e.add(r);const a=n.type==="mission"?(n.model_size??fr)/3:(n.radius||1)*.5;return e.scale.set(a,a,a),n.orbit_type==="landed"&&(e.position.y=a/2),e.traverse(o=>{o.userData=n}),e}const Ym=new x(0,1,0),CB=new x(0,0,1);function IB(n){n.forEach(e=>{const t=new jt,i=new jt,s=new ct,r=e.type==="asteroid"||e.type==="comet"?sB(e.name):null;r&&(e.rot_period??=r.period,e.rot_offset??=r.offset),e.pole?s.setFromUnitVectors(Ym,bs(e.pole)):e.tilt?s.setFromAxisAngle(CB,e.tilt*Math.PI/180):r&&e.tilt===void 0&&s.setFromUnitVectors(Ym,r.pole),i.quaternion.copy(s);const a=new jt;e.orbit_type==="suborbital"&&(a.rotation.x=Math.PI/2),a.userData=e,i.add(a),t.add(i);const o=e.type==="asteroid"&&e.menu_holder==="named"&&!e.rotation_mode&&!e.pole&&e.tilt===void 0?rB(e.name):null;if(j.set(e.name,{group:t,meshGroup:i,mesh:a,data:e,axis:s,tumble:o}),e.built={radius:e.radius,modelSize:e.type==="mission"?e.model_size:e.model_scale},e.type==="star")cr=Y1({radius:e.radius,renderer:Ge}),a.add(cr.group),Kd.push(a);else{let l;if(e.type==="reference_point")l=new bM(1),l.visible=!1;else if(e.texture){const c=Il(e.texture);c.colorSpace=ft;const u=e.segments||(e.type==="star"?48:32),h=new qi(e.radius,u,u);let d={map:c,roughness:1,metalness:0};e.roughness_map&&(d.roughnessMap=e.roughness_map===e.texture?c:Il(e.roughness_map)),d.shadowSide=Vt;const f=new Xi(d);if(e.night_texture&&Ea.nightLights){const A=MB(e.radius,e.night_texture);A&&a.add(A)}l=new Ye(h,f),l.userData=e,l.castShadow=!0,l.receiveShadow=!0,e.texture_detail&&n_.push({mesh:l,item:e,state:"waiting"})}else{const c=SB(e);a.add(c),l=c}(e.texture||e.type==="reference_point")&&a.add(l),e.type!=="reference_point"&&Kd.push(a)}if(e.ring){const l=e.radius*(e.ring.inner_radius||1.4),c=e.radius*(e.ring.outer_radius||2.5),u=new kf(l,c,128),h=u.attributes.position,d=new x;for(let m=0;m<h.count;m++){d.fromBufferAttribute(h,m);const E=(Math.sqrt(d.x*d.x+d.y*d.y)-l)/(c-l);u.attributes.uv.setXY(m,E,.5)}const f=Il(e.ring.texture);f.colorSpace=ft;const A=new Xi({map:f,side:Gt,transparent:!0,opacity:e.ring.opacity||.9,alphaTest:.1,roughness:.7,emissive:new Se(16777215).multiplyScalar(e.ring.emissive||.1)}),g=new Ye(u,A);g.rotation.x=-Math.PI/2,g.receiveShadow=!0,g.castShadow=!0,i.add(g),j.get(e.name).ring={mesh:g,innerRadius:l,outerRadius:c,builtInner:l,builtOuter:c,opacity:e.ring.opacity||.9}}}),j.forEach(e=>{const{group:t,data:i}=e;if(Jo(i)){const s=Ar(i.name);(s==="Sun"||i.preload||j.get(s)?.data.preload)&&qx.push(i)}if(i.orbit_type==="landed")pr.push({group:t,data:i});else if(Ve.add(t),i.orbit_type==="trajectory"){const s=rf(i),r=Hm(i),a=lB(e,s,r);a&&Ve.add(a);const o=or(e);let l=null;if(o.arrival){l=Vm(o.arrivalOrbit,s,r);const c=j.get(o.arrival.at);l&&c&&c.group.add(l)}e.trajectoryLines={cruise:a,arrived:l},e.orbitLine=a||l}else if(i.parent){let s=null;if(i.orbit_type==="libration"){s=i.show_orbit!==!1?EB(i.orbit):null;const r=j.get(i.parent);r&&s&&r.mesh.add(s)}else if(i.orbit_type==="suborbital"){const r=j.get(i.parent),a=r&&r.data.radius||1;s=vB(i,a),r&&s&&r.meshGroup.add(s)}else if(i.show_orbit!==!1){const r=rf(i),a=Hm(i);if(s=Vm(i.orbit,r,a),s){const o=j.get(i.parent);o?o.group.add(s):Ve.add(s)}}s&&(e.orbitLine=s)}}),j.forEach(e=>{if(e.data.parent){const t=j.get(e.data.parent);t&&(t.data.isParent=!0)}})}function wB(n,e){const t=n.trajectoryLines;if(!t)return;const i=e?t.arrived:t.cruise;t.cruise&&(t.cruise.visible=!e),t.arrived&&(t.arrived.visible=e),i&&n.orbitLine!==i&&(n.orbitLine=i,an("orbit-change",{data:n.data}))}function bB(){nA(1/0),tA(),i_()}function tA(){j.forEach(n=>{const{data:e}=n,{built:t}=e;if(!t)return;const i=e.type==="mission"?(e.model_size??1)/(t.modelSize??e.model_size??1):t.radius?e.radius/t.radius:1;n.mesh.scale.setScalar(i),n.ring&&(n.ring.mesh.scale.setScalar(i),n.ring.innerRadius=n.ring.builtInner*i,n.ring.outerRadius=n.ring.builtOuter*i)})}const TB=720,Bl=6,BB=3,RB=4;function Eu(n){j.forEach(e=>{const t=e.trajectoryLines;t?[t.cruise,t.arrived].forEach(i=>i&&n(i,e)):e.orbitLine&&n(e.orbitLine,e)})}const $a=new x,yo=[];let Zx=null;function DB(n){nA(1/0),yo.length=0,Zx=n,Eu((e,t)=>yo.push({line:e,obj:t}))}function $x(n=RB){if(!yo.length)return;const e=performance.now();do{const{line:t,obj:i}=yo.shift();LB(t,i)}while(yo.length&&performance.now()-e<n)}function LB(n,e){Gi(n);const t=n.userData.orbit,i=e.trajectoryLines?.cruise===n?or(e):null;let s=null;if(t&&cm(t,1)){const r=n.geometry.attributes.position,a=Math.ceil(r.count/TB),o=Math.ceil(r.count/a);s=new Float64Array(o*Bl);for(let l=0,c=0;l<o;l++,c+=Bl){$a.fromBufferAttribute(r,l*a);const u=$a.length()||1,{above:h,ends:[d,f]}=cm(t,Ob(t,u,Zx));s[c]=$a.x/u,s[c+1]=$a.y/u,s[c+2]=$a.z/u,s[c+3]=d,s[c+4]=f,s[c+5]=d>0&&f>0?Math.log(f/d):NaN,s.above=h}}else if(i)s=i.samples.map(r=>r.pos);else if(!n.userData.curve||t)return;if(n.userData.morph={real:s,geometry:n.geometry},s){const r=s instanceof Float64Array?s.length/Bl:s.length;n.geometry=new Ke,n.geometry.setAttribute("position",new ze(new Float32Array(r*3),3))}}const zc=new x;function e_(n){Eu((e,t)=>{const i=e.userData.morph;if(!i||i.settling)return;const{data:s}=t;if(!i.real){s.orbit_type==="libration"?PB(e,i,s.orbit.amp):s.orbit_type==="suborbital"&&(Eo(e,eA(s,j.get(s.parent)?.data.radius||1)),e.computeLineDistances());return}e.userData.near&&(e.userData.near.cam=null),e.userData.far=null;const r=e.userData.loop??e.geometry,a=r.attributes.position,o=a.array;if(i.real instanceof Float64Array){const l=i.real,c=l.above?e.userData.orbit.scale.radius:0;for(let u=0,h=0,d=0;u<a.count;u++,h+=Bl,d+=3){const f=l[h+3],A=l[h+5],g=c+(A===A?f*Math.exp(n*A):f+(l[h+4]-f)*n);o[d]=l[h]*g,o[d+1]=l[h+1]*g,o[d+2]=l[h+2]*g}}else i.real.forEach((l,c)=>{jd(zc.copy(l)),o[3*c]=zc.x,o[3*c+1]=zc.y,o[3*c+2]=zc.z});a.needsUpdate=!0,t_(r)})}function t_(n){const e=n.attributes.position.array,t=n.attributes.position.count*3;let i=1/0,s=1/0,r=1/0,a=-1/0,o=-1/0,l=-1/0;for(let m=0;m<t;m+=3){const p=e[m],E=e[m+1],_=e[m+2];p<i&&(i=p),p>a&&(a=p),E<s&&(s=E),E>o&&(o=E),_<r&&(r=_),_>l&&(l=_)}const c=n.boundingSphere??=new dn,u=(i+a)/2,h=(s+o)/2,d=(r+l)/2;let f=0,A=1/0,g=0;for(let m=0;m<t;m+=3){const p=e[m]-u,E=e[m+1]-h,_=e[m+2]-d,S=p*p+E*E+_*_;S>f&&(f=S);const w=e[m]*e[m]+e[m+1]*e[m+1]+e[m+2]*e[m+2];w<A&&(A=w),w>g&&(g=w)}c.center.set(u,h,d),c.radius=Math.sqrt(f),n.userData.reach=[Math.sqrt(A),Math.sqrt(g)]}function PB(n,e,t){const i=Jx(t);let s=e.halo;if(!s||s.segments<i){const l=new Float64Array(i),c=new Float64Array(i);for(let u=0;u<i;u++){const h=u/i*2*Math.PI;l[u]=Math.cos(h),c[u]=Math.sin(h)}Gi(n),s&&n.geometry.dispose(),n.geometry=new Ke,n.geometry.setAttribute("position",new ze(new Float32Array(i*3),3)),s=e.halo={segments:i,cos:l,sin:c}}n.userData.near&&(n.userData.near.cam=null),n.userData.far=null;const r=n.userData.loop??n.geometry,a=r.attributes.position,o=a.array;for(let l=0,c=0;l<s.segments;l++,c+=3)o[c]=-t.x*s.cos[l],o[c+1]=t.y*s.cos[l],o[c+2]=t.z*s.sin[l];a.needsUpdate=!0,t_(r)}const Rl=[];function UB(){j.forEach(n=>{n.trajectoryLines&&(n.trajectoryPlan=null)}),Eu((n,e)=>{const t=n.userData.morph;t&&(t.settling=!0,Rl[e.trajectoryLines?.cruise===n?"unshift":"push"]({line:n,obj:e}))})}function nA(n=BB){if(!Rl.length)return;const e=performance.now(),t=Ua(xn);do{const{line:i,obj:s}=Rl.shift(),r=i.userData.morph;Gi(i),(r.real||r.halo)&&(i.geometry.dispose(),i.geometry=r.geometry),i.userData.morph=null,s_(i,s,t)}while(Rl.length&&performance.now()-e<n)}function Eo(n,e){Gi(n),n.geometry.dispose(),n.geometry=new Ke().setFromPoints(e)}const FB=1400,n_=[];function NB(){for(const n of n_){if(n.state!=="waiting"||!n.mesh.visible)continue;n.mesh.getWorldPosition(Km);const e=H.position.distanceTo(Km);window.innerHeight*n.item.radius/Math.max(e,1e-9)/Math.tan(H.fov*Math.PI/360)>FB&&QB(n)}}const Km=new x;async function QB(n){n.state="loading";try{const e=await(await fetch(Ts(n.item.texture_detail))).blob(),t=await createImageBitmap(e,{imageOrientation:"flipY"});if(t.width>Ge.capabilities.maxTextureSize){t.close(),n.state="done";return}const i=n.mesh.material,s=i.map,r=new zt(t);r.flipY=!1,r.colorSpace=ft,r.anisotropy=Ge.capabilities.getMaxAnisotropy(),r.needsUpdate=!0,await jT(r),i.map=r,i.roughnessMap===s&&(i.roughnessMap=r),s?.dispose(),n.state="done"}catch(e){console.warn(`Detail map ${n.item.texture_detail} failed`,e),n.state="done"}}function i_(){const n=Ua(xn);j.forEach(e=>{e.trajectoryLines&&(e.trajectoryPlan=null)}),Eu((e,t)=>s_(e,t,n))}function s_(n,e,t){const{data:i}=e;e.trajectoryLines?.cruise===n?Eo(n,or(e).samples.map(s=>s.pos)):i.orbit_type==="libration"?Eo(n,jx(i.orbit)):i.orbit_type==="suborbital"?(Eo(n,eA(i,j.get(i.parent)?.data.radius||1)),n.computeLineDistances()):OB(n,t)}function OB(n,e){const t=n.userData.orbit;t&&(Gi(n),n.userData.segments=Kx(t),n.userData.days=e,Eo(n,Zf(t,n.userData.segments,e)))}const Jm={type:"change"},iA={type:"start"},r_={type:"end"},Hc=new Bs,jm=new us,kB=Math.cos(70*et.DEG2RAD),Wt=new x,Cn=2*Math.PI,yt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wh=1e-6;class GB extends TM{constructor(e,t=null){super(e,t),this.state=yt.NONE,this.target=new x,this.cursor=new x,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ta.ROTATE,MIDDLE:ta.DOLLY,RIGHT:ta.PAN},this.touches={ONE:Zr.ROTATE,TWO:Zr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new x,this._lastQuaternion=new ct,this._lastTargetPosition=new x,this._quat=new ct().setFromUnitVectors(e.up,new x(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bp,this._sphericalDelta=new bp,this._scale=1,this._panOffset=new x,this._rotateStart=new Me,this._rotateEnd=new Me,this._rotateDelta=new Me,this._panStart=new Me,this._panEnd=new Me,this._panDelta=new Me,this._dollyStart=new Me,this._dollyEnd=new Me,this._dollyDelta=new Me,this._dollyDirection=new x,this._mouse=new Me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=HB.bind(this),this._onPointerDown=zB.bind(this),this._onPointerUp=VB.bind(this),this._onContextMenu=jB.bind(this),this._onMouseWheel=XB.bind(this),this._onKeyDown=YB.bind(this),this._onTouchStart=KB.bind(this),this._onTouchMove=JB.bind(this),this._onMouseDown=WB.bind(this),this._onMouseMove=qB.bind(this),this._interceptControlDown=ZB.bind(this),this._interceptControlUp=$B.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Jm),this.update(),this.state=yt.NONE}update(e=null){const t=this.object.position;Wt.copy(t).sub(this.target),Wt.applyQuaternion(this._quat),this._spherical.setFromVector3(Wt),this.autoRotate&&this.state===yt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Cn:i>Math.PI&&(i-=Cn),s<-Math.PI?s+=Cn:s>Math.PI&&(s-=Cn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Wt.setFromSpherical(this._spherical),Wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Wt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new x(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new x(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Hc.origin.copy(this.object.position),Hc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hc.direction))<kB?this.object.lookAt(this.target):(jm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hc.intersectPlane(jm,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>wh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wh||this._lastTargetPosition.distanceToSquared(this.target)>wh?(this.dispatchEvent(Jm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Cn/60*this.autoRotateSpeed*e:Cn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Wt.setFromMatrixColumn(t,0),Wt.multiplyScalar(-e),this._panOffset.add(Wt)}_panUp(e,t){this.screenSpacePanning===!0?Wt.setFromMatrixColumn(t,1):(Wt.setFromMatrixColumn(t,0),Wt.crossVectors(this.object.up,Wt)),Wt.multiplyScalar(e),this._panOffset.add(Wt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Wt.copy(s).sub(this.target);let r=Wt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Me,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function zB(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function HB(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function VB(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(r_),this.state=yt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function WB(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ta.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=yt.DOLLY;break;case ta.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=yt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=yt.ROTATE}break;case ta.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=yt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=yt.PAN}break;default:this.state=yt.NONE}this.state!==yt.NONE&&this.dispatchEvent(iA)}function qB(n){switch(this.state){case yt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case yt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case yt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function XB(n){this.enabled===!1||this.enableZoom===!1||this.state!==yt.NONE||(n.preventDefault(),this.dispatchEvent(iA),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(r_))}function YB(n){this.enabled!==!1&&this._handleKeyDown(n)}function KB(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Zr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=yt.TOUCH_ROTATE;break;case Zr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=yt.TOUCH_PAN;break;default:this.state=yt.NONE}break;case 2:switch(this.touches.TWO){case Zr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=yt.TOUCH_DOLLY_PAN;break;case Zr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=yt.TOUCH_DOLLY_ROTATE;break;default:this.state=yt.NONE}break;default:this.state=yt.NONE}this.state!==yt.NONE&&this.dispatchEvent(iA)}function JB(n){switch(this._trackPointer(n),this.state){case yt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case yt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case yt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case yt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=yt.NONE}}function jB(n){this.enabled!==!1&&n.preventDefault()}function ZB(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $B(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Zm=Math.PI/180;function a_(n,e,t,i,s){const r=Math.min(e/t,.999),a=e*Math.sqrt(1-r*r),o=Math.cos(n),l=Math.sin(n);return s.set(o*a-l*i,l*a+o*i,e*r)}function sA(n,e,t){const i=(90-n)*Zm,s=(e+180)*Zm;return t.set(-(Math.sin(i)*Math.cos(s)),Math.cos(i),Math.sin(i)*Math.sin(s)).normalize()}function rA(n){const{radius:e,radius_km:t}=n.data;return e&&t?e/t:0}function e3(n,e,t,i,s,r){return n.mesh.updateWorldMatrix(!0,!1),sA(e,t,r).transformDirection(n.mesh.matrixWorld),n.mesh.getWorldPosition(s),s.addScaledVector(r,(n.data.radius||1)+i*rA(n))}const gn=new x,gs=new x,kt=new x(0,1,0);let ue=null,yn=!1,zi=null,Mi=!1,fo=0,gi=null;const t3=2;let ve,Wi=!1,$o=!0,Dl=null;const n3=new x,Kl=new x,la=new x,Sa=new x;let vn=!1,hi=0,Fi=2.5;const Ni=new x,$m=new ct,bh=new x(0,0,-1),On=new x,eg=new Bs,tg=new x,eo=new x,Th=new x,Bh=new ct,ng=new ct,Di=new x,Rt=new x,i3=new x,ig=new x,Vc=new x,s3=new x,r3=new x,ea=new x,vo=new ct,Mo=new ct,Wc=new ct;let Go={left:0,right:0,top:0,bottom:0};function a3({left:n=0,right:e=0,top:t=0,bottom:i=0}={}){Go={left:n,right:e,top:t,bottom:i}}let Jl=!1;function o_(){return{left:Go.left,right:window.innerWidth-Go.right}}function o3(){const n=o_();return n.right-n.left}function c_(){return{top:Go.top,bottom:window.innerHeight-Go.bottom}}function jl(){const n=H.fov*(Math.PI/180),e=c_(),t=2*Math.atan(Math.tan(n/2)*(e.bottom-e.top)/window.innerHeight),i=2*Math.atan(Math.tan(n/2)*o3()/window.innerHeight);return Math.min(t,i)}let to=0,no=0;function c3(n){let e=0,t=0;if(Jl){const s=o_(),r=c_();e=window.innerWidth/2-(s.left+s.right)/2,t=window.innerHeight/2-(r.top+r.bottom)/2}else if(Mi&&gi){const{left:s,right:r,top:a,bottom:o}=gi.insets;e=(r-s)/2,t=(o-a)/2}const i=1-Math.exp(-n*6);if(to+=(e-to)*i,no+=(t-no)*i,e===0&&t===0&&Math.abs(to)<.5&&Math.abs(no)<.5){to=0,no=0,H.view&&H.view.enabled&&H.clearViewOffset();return}H.setViewOffset(window.innerWidth,window.innerHeight,to,no,window.innerWidth,window.innerHeight)}const xs=new x,sg=new x;function bn(n){return n?n.detailRoot&&n.detailRadius?(n.detailRoot.getWorldScale(xs),n.detailRadius*Math.max(xs.x,xs.y,xs.z)):n.data.type==="mission"?(n.data.model_size??fr)*.6:n.data.radius||1:1}function Tt(n,e){if(n.getWorldPosition(e),n.userData&&n.userData.orbit_type==="landed"){const t=j.get(n.userData.name),i=t&&t.detailRoot?t.detailCenterY:(t?.data.built?.modelSize??fr)*.3;n.getWorldScale(xs),sg.set(0,1,0).transformDirection(n.matrixWorld),e.addScaledVector(sg,i*Math.max(xs.x,xs.y,xs.z))}return e}let Ot=null;const l3=1.1,qc=new x,u3=new x,gr=new x,Xc=[];let Ms=null;function aA(){return Ot?.look?.ra!==void 0||Ot?.look?.sun!==void 0}function ec(n,e){if(!Ot||Ot.body.mesh!==n)return null;if(Ot.look?.sun!==void 0){const{sun:s,elevation:r=0,radii:a}=Ot.look;n.getWorldPosition(qc),j.get("Sun")?.mesh.getWorldPosition(e),e.sub(qc).setY(0).normalize().applyAxisAngle(kt,s*Math.PI/180);const o=r*Math.PI/180;return e.multiplyScalar(Math.cos(o)).setY(Math.sin(o)),a?(Ot.body.data.radius||1)*a:af(Ot.body)}if(aA()){const{ra:s,dec:r=0,radii:a}=Ot.look;return e.copy(bs({ra:s,dec:r})).negate(),a?(Ot.body.data.radius||1)*a:l_(n)}if(Ot.look){const{lat:s=0,lon:r=0,radii:a}=Ot.look;return n.updateWorldMatrix(!0,!1),sA(s,r,e).transformDirection(n.matrixWorld),a?(Ot.body.data.radius||1)*a:af(Ot.body)}if(n.getWorldPosition(qc),Xc.length=0,e.set(0,0,0),Ot.names.forEach(s=>{const r=j.get(s);if(!r||!En(r.mesh))return;const a=Tt(r.mesh,new x).sub(qc);Xc.push(a),e.add(u3.copy(a).normalize())}),!Xc.length||e.lengthSq()<1e-12)return null;e.normalize();const t=Math.tan(_b*jl()/2);let i=oA(Ot.body)*l3;return Xc.forEach(s=>{const r=s.dot(e),a=Math.sqrt(Math.max(0,s.lengthSq()-r*r));i=Math.max(i,r+a/t)}),i}function Ki(n){if(!n||!n.userData)return 20;if(Ms?.radii&&Ms.mesh===n)return(n.userData.radius||1)*Ms.radii;const e=ec(n,gr);return e!==null?e:l_(n)}function l_(n){if(n.userData.type==="mission"){const t=j.get(n.userData.name);let i=bn(t);return t&&t.frameRadius&&t.detailRadius&&(i*=t.frameRadius/t.detailRadius),i/Math.sin(gb*jl()/2)}const e=j.get(n.userData.name);return e?af(e):20}function af(n){const e=n.data.type;return e==="reference_point"||e==="star"?u_(n)/Math.sin(yb*jl()/2):oA(n)/Math.sin(xb*jl()/2)}function oA(n){const e=n.data;let t=n.detailRoot?bn(n):e.radius||1;return e.ring&&(t=Math.max(t,(e.radius||1)*(e.ring.outer_radius||2.5))),t}function u_(n){const e=n.data;if(e.type==="star")return(e.radius||1)*Eb;let t=oA(n);const i=t;return j.forEach(s=>{const r=s.data;if(r.parent!==e.name)return;const a=bn(s);let o=0;r.orbit_type==="landed"?o=i+a*2:r.orbit_type==="suborbital"?o=i+(r.suborbital?.apogee||1.5)+a:r.orbit&&(o=Wf(r.orbit)+a),t=Math.max(t,o)}),t}function cA(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}const h3=1.35,d3=.3,f3=.6,A3=.3,p3=.92,m3=.6,g3=40*Math.PI/180,x3=1.3,_3=.45,y3=.4,E3=.15,h_=.45,v3=60*Math.PI/180,M3=4,er=n=>n?.userData.orbit_type==="landed",of=(n,e=null)=>(er(n)?h3:1)*(er(e)?x3:1);let lr=0,Zl=null,hs=null;function d_(n){if(!Zl)return cA(n);const{up:e,down:t}=Zl,i=a=>a*a*a-a*a*a*a/2,s=1/(1-(e+t)/2);let r;return n<e?r=e*i(n/e):n<=1-t?r=e/2+(n-e):r=e/2+(1-t-e)+t*(.5-i((1-n)/t)),Math.min(r*s,1)}function tc(n,e,t){const i=et.clamp((n-e)/(t-e),0,1);return i*i*(3-2*i)}const S3=1.5,C3=.2,I3=10*Math.PI/180,w3=.13;function f_(n,e,t,i){const s=j.get(n.userData.parent);Ni.set(0,1,0),s&&Ni.subVectors(e,s.mesh.getWorldPosition(i3)).normalize();const r=Math.sin(i*C3)*S3,a=vb+Math.sin(i*w3)*I3;return ig.setFromSphericalCoords(t,a,r),$m.setFromUnitVectors(kt,Ni),ig.applyQuaternion($m)}let lA=0;function b3(n,e){const t=H.position.x-n.x,i=H.position.z-n.z;t*t+i*i<1e-12||(lA=Math.atan2(t,i)-e*Ei)}function vu(n,e,t){if(Tt(n,Rt),isNaN(Rt.x)){t.copy(n.position);return}const i=Ki(n),s=Math.sin(e*.2)*(i*.02),r=i+s;if(n.userData.orbit_type==="landed")t.copy(Rt).add(f_(n,Rt,r,e));else if(ec(n,gr)!==null)t.copy(Rt).addScaledVector(gr,r);else{const a=ht.live&&yn&&n===ue?ht.az:e*Ei+lA,o=Math.sin(e*p_)*A_;if(Ms?.elevation!==void 0&&Ms.mesh===n){const l=et.clamp(Ms.elevation*Math.PI/180+o*.25,-1.5,1.5);t.set(Math.sin(a)*Math.cos(l)*r,Math.sin(l)*r,Math.cos(a)*Math.cos(l)*r)}else t.set(Math.sin(a)*r,o*r,Math.cos(a)*r);m_(n,Rt,r),g_(t),t.add(Rt)}dA(t,n)}const T3=1.15,B3=12*Math.PI/180,R3=6,rg=2*Ei/R3,A_=.2,p_=.05,uA=[];let So=0;const Yc=new x,qr=new x,D3=new ct,Rh={centre:0,width:0};function m_(n,e,t){So=0;const i=n.userData.parent;j.forEach(s=>{if(s.mesh===n)return;let r;if(Mu.includes(s.data.type))s.group.getWorldPosition(Yc),r=s.data.radius||1;else if(s.data.name===i&&__.includes(s.data.type))Tt(s.mesh,Yc),r=bn(s);else return;const a=Yc.sub(e).length();if(a<=r)return;const o=Math.min(r*T3,(r+a)/2);if(t<=a-o)return;const l=Math.sqrt(a*a-o*o),c=t>=l?Math.asin(o/a):Math.acos(Math.min(1,(t*t+a*a-o*o)/(2*t*a))),u=uA[So]??={dir:new x,half:0};u.dir.copy(Yc).divideScalar(a),u.half=Math.min(c+B3,Math.PI*.9),So++})}function g_(n){for(let e=0;e<2;e++)for(let t=0;t<So;t++){const{dir:i,half:s}=uA[t],r=n.angleTo(i);r>=s||(qr.crossVectors(i,n),qr.lengthSq()<1e-12&&qr.crossVectors(i,kt),qr.lengthSq()<1e-12&&qr.set(1,0,0),n.applyQuaternion(D3.setFromAxisAngle(qr.normalize(),s-r)))}}function L3(n,e,t){const{dir:i,half:s}=n,r=(Math.cos(s)-e*i.y)/Math.max(t*Math.hypot(i.x,i.z),1e-9);return r>=1?null:(Rh.centre=Math.atan2(i.x,i.z),Rh.width=r<=-1?Math.PI:Math.acos(r),Rh)}const $l=Math.PI*2,P3=n=>n-$l*Math.floor((n+Math.PI)/$l),ag=n=>n-$l*Math.floor(n/$l),ht={live:!1,az:0,vel:0,dir:1};function U3(n,e,t,i,s){const r=Math.sin(e*p_)*A_,a=1/Math.sqrt(1+r*r),o=r*a;ht.live||(ht.live=!0,ht.az=Math.atan2(H.position.x-t.x,H.position.z-t.z),ht.vel=Ei,ht.dir=1),m_(ue,t,i);const l=ht.vel===0?ht.dir:Math.sign(ht.vel);let c=1/0;for(let d=0;d<So;d++){const f=L3(uA[d],o,a);if(!f||f.width>=Math.PI)continue;const A=P3(ht.az-f.centre);if(Math.abs(A)<f.width){const g=A===0?-l:Math.sign(A);ht.az=f.centre+g*f.width,ht.dir=g,Math.sign(ht.vel)!==g&&(ht.vel=0);continue}c=Math.min(c,l>0?ag(f.centre-f.width-ht.az):ag(ht.az-f.centre-f.width))}const u=Math.abs(ht.vel);ht.dir===l&&c<u*u/(2*rg)+u*n&&(ht.dir=-l);const h=rg*n;return ht.vel+=Math.max(-h,Math.min(h,ht.dir*Ei-ht.vel)),ht.az+=ht.vel*n,s.set(Math.sin(ht.az)*i,r*i,Math.cos(ht.az)*i),g_(s),s.add(t)}const Mu=["star","planet","moon"],xr=1.08,Ll=1.35,og=160,F3=1.2;let ua=null,hA=0;const x_=new x,Dh=new x,io=new x,__=["mission","asteroid","comet"];function N3(){const n=[];return j.forEach(e=>{Mu.includes(e.data.type)?n.push({center:e.group.getWorldPosition(new x),radius:e.data.radius||1}):__.includes(e.data.type)&&En(e.group)&&n.push({center:Tt(e.mesh,new x),radius:bn(e)})}),n}const cg=new x;function dA(n,e){e&&Tt(e,cg),j.forEach(t=>{if(!Mu.includes(t.data.type)||t.mesh===e)return;t.group.getWorldPosition(io);const i=t.data.radius||1,s=e?Math.min(i*xr,cg.distanceTo(io)):i*xr,r=n.distanceTo(io);r<s&&r>1e-6&&n.sub(io).multiplyScalar(s/r).add(io)})}function Q3(n,e){const t=new x;for(let i=1;i<og;i++){n.getPoint(i/og,t);for(const s of e)if(t.distanceTo(s.center)<s.radius*xr)return s}return null}function O3(n,e,t){const i=new x().subVectors(e,n),s=et.clamp(new x().subVectors(t,n).dot(i)/Math.max(i.lengthSq(),1e-12),0,1);return{distance:n.clone().addScaledVector(i,s).distanceTo(t),interior:s>0&&s<1}}function k3(n,e,t,i,s){const r=new x().subVectors(n,t.center).normalize(),a=new x().subVectors(e,t.center).normalize(),o=r.angleTo(a),l=new x().crossVectors(r,a);l.lengthSq()<1e-8&&(l.crossVectors(r,s),l.lengthSq()<1e-8&&l.crossVectors(r,new x(1,0,0))),l.normalize();const c=Math.max(2,Math.ceil(o/(Math.PI/4))),u=[];for(let h=1;h<c;h++)u.push(r.clone().applyAxisAngle(l,o*h/c).multiplyScalar(t.radius*i).add(t.center));return u}function G3(n,e,t,i){for(let s=1;s<n.length-1;s++)for(const r of e){const a=n[s].distanceTo(r.center);if(a<r.radius*t){const o=a>1e-6?n[s].clone().sub(r.center):i.clone();n[s].copy(o.normalize().multiplyScalar(r.radius*t).add(r.center))}}for(let s=0;s<4;s++){let r=!1;const a=[n[0]];for(let o=1;o<n.length;o++){const l=a[a.length-1],c=n[o],u=e.find(h=>{const{distance:d,interior:f}=O3(l,c,h.center);return f&&d<h.radius*F3});u&&(a.push(...k3(l,c,u,t,i)),r=!0),a.push(c)}if(n=a,!r)break}return n}const z3=4;function lg(n,e){if(!Ft.logFlights&&er(n)&&En(n)){const d=Tt(n,new x);return[e.clone().sub(d).multiplyScalar(M3).add(d)]}if(!Ft.logFlights||!n||n.userData.orbit_type!=="landed"||!En(n))return[];const t=j.get(n.userData.parent);if(!t)return[];const i=Tt(n,new x),s=i.clone().sub(t.group.getWorldPosition(new x)),r=new x().subVectors(e,i),a=r.length();if(!(a>0))return[];r.divideScalar(a),r.dot(s)<.1*s.length()&&r.copy(s).normalize();const o=s.dot(r),l=s.lengthSq()-((t.data.radius||1)*Ll)**2,c=-o+Math.sqrt(Math.max(o*o-l,0));if(!(c>a*1.5))return[];const u=Math.ceil(Math.log(c/a)/Math.log(z3)),h=[];for(let d=1;d<=u;d++)h.push(i.clone().addScaledVector(r,a*(c/a)**(d/u)));return h}function H3(n,e,t=[],i=[]){const s=N3().map(f=>{const A=Math.min(n.distanceTo(f.center),e.distanceTo(f.center));return A>f.radius*xr?f:{center:f.center,radius:A/(xr*1.02)}}),r=t.at(-1)??n,a=i.at(-1)??e,o=new x().subVectors(a,r),l=o.length(),c=o.clone().normalize(),u=new x(0,1,0);Math.abs(c.dot(kt))>.9?u.set(0,0,1):u.crossVectors(c,kt).cross(c).normalize();const h=r.clone().lerp(a,.5).addScaledVector(u,Math.min(l*.15,Ft.flightArchMax));let d;for(const f of[Ll,Ll*1.25,Ll*1.6]){const A=[...t.length?[n,...t.slice(0,-1)]:[],...G3([r.clone(),h.clone(),a.clone()],s,f,u),...i.length?[...i.slice(0,-1).reverse(),e]:[]].map(g=>g.clone());if(d=new Gv(A,!1,"centripetal"),!Q3(d,s))break}return d}let y_=gx;function V3(n=gx){y_=n}const ug=10,W3=60;function E_(n,e,t,i=null){const s=Pa.matches?0:y_,r=Ft.logFlights?((i??q3(n,e,t))-ug)/(W3-ug):n/Ft.flightReach;return Math.max((1.5+et.clamp(r,0,1)*2)*s,Mb)}function q3(n,e,t){return e=Math.max(e,1e-9),t=Math.max(t,1e-9),Math.log((n/2+e)/e)+Math.log((n/2+t)/t)}const hg=48,dg=64,X3=4,Lh=new x,Ph=new x;function fg(n,e,t){return Lh.subVectors(n,t),Ph.subVectors(e,t),Math.atan2(Lh.clone().cross(Ph).length(),Lh.dot(Ph))}const Y3=2.5;function K3(n,e,t,i,s,r=0){const a=n.points.length-1,o=new Set([0,1]);for(let p=0;p<a;p++){for(let E=0;E<=hg;E++){const _=.5*10**(-12*(1-E/hg));o.add((p+_)/a).add((p+1-_)/a)}for(let E=1;E<dg;E++)o.add((p+E/dg)/a)}const l=[...o].sort((p,E)=>p-E),c=l.map(p=>n.getPoint(p)),u=c[0],h=c[c.length-1],d=[];j.forEach(p=>{if(!Mu.includes(p.data.type))return;const E=p.group.getWorldPosition(new x),_=p.data.radius||1;u.distanceTo(E)<_*xr||h.distanceTo(E)<_*xr||d.push({center:E,radius:_})}),e=Math.max(e,1e-9),t=Math.max(t,1e-9);const f=new Float64Array(l.length),A=new Float64Array(l.length),g=new Float64Array(l.length),m=new Float64Array(l.length);c.forEach((p,E)=>{let _=Math.min(e+p.distanceTo(u),t+p.distanceTo(h));for(const S of d)_=Math.min(_,p.distanceTo(S.center)-S.radius);f[E]=Math.max(_,1e-9)});for(let p=1;p<l.length;p++){const E=c[p].distanceTo(c[p-1]),_=f[p-1],S=f[p];let w=Math.abs(S-_)>1e-9*_?E*Math.log(S/_)/(S-_):E/_;r>0&&(w*=1+(Y3-1)*tc(1-c[p].distanceTo(h)/r,0,1));const C=X3*Math.max(fg(c[p-1],c[p],i),fg(c[p-1],c[p],s));g[p]=g[p-1]+E,A[p]=A[p-1]+w+C,m[p]=w>0?w/(w+C):1}return{t:l,clearance:f,effort:A,along:g,travelShare:m,length:g[l.length-1],total:A[l.length-1]}}let _n=null;const v_=.3;function M_(n,e,t){const{effort:i}=n;let s=0,r=i.length-1;for(;r-s>1;){const d=s+r>>1;i[d]<=e?s=d:r=d}const a=n.along[r]-n.along[s],o=n.clearance[s],l=a>0?(n.clearance[r]-o)/a:0,c=Math.max(e-i[s],0)*n.travelShare[r],u=Math.abs(l)>1e-9?o*Math.expm1(c*l)/l:c*o,h=a>0?et.clamp(u/a,0,1):0;return ua.getPoint(n.t[s]+(n.t[r]-n.t[s])*h,t),(n.along[s]+a*h)/n.length}let ha=null;const Ws=new x,Uh=new x;function S_(n,e,t,i,s=H.up){Ws.set(1,0,0),Math.abs(s.x)>.9&&Ws.set(0,0,1),Ws.addScaledVector(s,-Ws.dot(s)).normalize(),Uh.crossVectors(s,Ws);const r=A=>Math.atan2(A.dot(Uh),A.dot(Ws)),a=A=>Math.asin(et.clamp(A.dot(s),-1,1)),o=r(n);let l=et.euclideanModulo(r(e)-o+Math.PI,2*Math.PI)-Math.PI;ha!==null&&(l+=2*Math.PI*Math.round((ha-l)/(2*Math.PI))),ha=l;const c=o+l*t,u=a(n),h=a(e),d=u+(h-u)*t;i.copy(Ws).multiplyScalar(Math.cos(c)).addScaledVector(Uh,Math.sin(c)).multiplyScalar(Math.cos(d)).addScaledVector(s,Math.sin(d));const f=tc(Math.max(Math.abs(u),Math.abs(h)),J3,j3);if(f>0){const A=n.angleTo(e);Xr.crossVectors(n,e),Xr.lengthSq()<1e-12&&Xr.crossVectors(n,s),Xr.lengthSq()<1e-12&&Xr.set(1,0,0),Ag.copy(n).applyAxisAngle(Xr.normalize(),A*t),i.lerp(Ag,f).normalize()}return i}const J3=55*Math.PI/180,j3=75*Math.PI/180,Xr=new x,Ag=new x;let sn=null;const cf=new x,Yr=new x,Fh=new x;function Z3(){return!sn||!En(sn.mesh)?cf.set(0,0,0):Tt(sn.mesh,cf).sub(sn.start)}const $3=new x,eR=new x;function C_(){if(!vn||!sn||!En(sn.mesh)||sn.mesh===ue)return ue;if(!ue)return sn.mesh;const n=H.position.distanceTo(Tt(sn.mesh,$3))-bn(j.get(sn.mesh.userData.name)),e=H.position.distanceTo(Tt(ue,eR))-bn(j.get(ue.userData.name));return n<e?sn.mesh:ue}function I_(n,{arrivalTime:e=null,destView:t=null,from:i=null,to:s=null}={}){n3.copy(H.position),Kl.copy(ve.target),sn=i&&En(i)?{mesh:i,start:Tt(i,new x)}:null,ua=H3(H.position,n,lg(i,H.position),lg(s,n)),x_.copy(n);const r=H.position.distanceTo(ve.target),a=t??n.distanceTo(Sa),o=s?Tt(s,new x):Sa;_n=Ft.logFlights||er(i)?K3(ua,r,a,Kl,o,of(s)>1?j.get(s.userData.parent)?.data.radius??0:0):null;const l=_n?_n.length:ua.getLength();ha=null,vn=!0,hi=0,Fi=E_(l,r,a,_n?.total)*of(s,sn?.mesh);const c=er(sn?.mesh);if(Zl=null,c||er(s)){let A=c?_3:d3,g=er(s)?f3:y3;const m=Math.min(1,.95/(A+g));Zl={up:A*m,down:g*m}}lr=c?E3:0,zo.copy(H.up);const u=sn?.mesh.userData.orbit_type==="landed"?eu(i,new x):zo,h=s?eu(s,new x):kt,d=u.angleTo(kt)>1e-4,f=h.angleTo(kt)>1e-4;if(hs=d||f?{from:d?0:A3,to:f?p3:m3}:null,hs&&!Pa.matches){const A=u.angleTo(h);Fi=Math.max(Fi,1.5*A/((hs.to-hs.from)*g3)),Fi=Math.max(Fi,nR(o))}hA=_n||e===null||hs?ti+Fi:e,ve.enabled=!1}const Nh=240,tR=18,Kc=new x,Qh=new x,Oh=new x,kh=new x,pg=new x;function nR(n){let e=0;ha=null;for(let t=0;t<=Nh;t++){const i=t/Nh,s=d_(i);_n?M_(_n,s*_n.total,Kc):ua.getPointAt(s,Kc);const r=lr>0?tc(i,lr,lr+h_):cA(Math.min(i/(_n?v_:.2),1));Qh.subVectors(Kl,Kc),Oh.subVectors(n,Kc),Qh.lengthSq()>0&&Oh.lengthSq()>0&&(S_(Qh.normalize(),Oh.normalize(),r,kh,zo),t>0&&(e=Math.max(e,kh.angleTo(pg)*Nh)),pg.copy(kh))}return ha=null,Math.min(e/v3,tR)}function fA(){if(!vn)return;const n=1-hi;n<=0||(Fi=Math.min(Fi,Sb/n))}function Fa(){Wi&&(ht.live=!1),Wi=!1,ve.autoRotate=!1,clearTimeout(Dl)}let lf=null;function AA(n){const e=lf;lf=null,e?.(n)}function iR(n,{region:e=null,look:t=null,frame:i=null}={}){const s=j.get(n);if(!s)return Promise.resolve(!1);AA(!1),Ms=i&&!t?{mesh:s.mesh,radii:i.radii,elevation:i.elevation}:null,Ot=t?{body:s,names:[],look:{...t}}:e?.length?{body:s,names:[...e]}:null;const r=new Promise(a=>{lf=a});return pA(s.mesh,s.data),r}function pA(n,e){if(zi=null,nc||ii){_r=()=>pA(n,e);return}if(e&&e.orbit_type==="landed"&&!En(n)){zi={mesh:n,data:e};const a=j.get(e.parent);a&&ca(a.data,!0),e.isModelLoaded||ca(e,!0),xu(),zi&&(Jl=!0,an("select",{data:e,waiting:!0}));return}Fa(),Mi=!1,gi=null;const t=ue;if(ue=n,yn=!1,e){e.isModelLoaded||ca(e,!0),jf(e);const a=Ar(e.name);D1(a)}const i=new x,s=ti+E_(H.position.distanceTo(n.getWorldPosition(new x)),H.position.distanceTo(ve.target),Ki(n))*of(n,t),r=new x;Tt(n,r),b3(r,s),vu(n,s,i),I_(i,{arrivalTime:s,destView:i.distanceTo(r),from:t,to:n}),lA+=(s-hA)*Ei,Jl=!0,an("select",{data:e,waiting:!1,region:Ot?.names.length&&Ot.body.mesh===n?[...Ot.names]:null})}function sR(n){$o=n,ve.enabled=n&&!vn,n||Fa()}g1(n=>{if(!zi||zi.data!==n)return;const{mesh:e}=zi;zi=null,pA(e,n)});function w_(){zi=null,Ot=null,Ms=null,_r=null,Fa(),ue=null,yn=!1,vn=!1,ve.enabled=$o&&!ii,Jl=!1,AA(!1),an("deselect")}const Jc=12,jc=3,Zc=1e3,rR=3,kn=new x,$c=new x,Kr=new ct,mg=new ct,aR=new ct,el=new x,zo=new x(0,1,0),gg=new x;function eu(n,e){return e.copy(kt),!n||!En(n)||(n.userData.orbit_type==="landed"||n===ue&&!aA()&&ec(n,gr)!==null)&&(n.updateWorldMatrix(!0,!1),e.set(0,1,0).transformDirection(n.matrixWorld)),e}function oR(n){if(vn&&hs){sn?.mesh.userData.orbit_type==="landed"?eu(sn.mesh,el):el.copy(zo),eu(ue,gg);const e=tc(hi,hs.from,hs.to);Kr.setFromUnitVectors(el,gg),H.up.copy(el).applyQuaternion(aR.identity().slerp(Kr,e)).normalize(),ve._quat.setFromUnitVectors(H.up,kt),ve._quatInverse.copy(ve._quat).invert();return}if(kn.copy(kt),ue&&ue.userData.orbit_type==="landed"&&En(ue)){ue.updateWorldMatrix(!0,!1),kn.set(0,1,0).transformDirection(ue.matrixWorld),Tt(ue,$c);const e=H.position.distanceTo($c)/Ki(ue);let t=Ft.logFlights?Math.log(Zc/e)/Math.log(Zc/jc):(Jc-e)/(Jc-jc);t=Math.min(Math.max(t,0),1),t=t*t*(3-2*t),Kr.setFromUnitVectors(kt,kn),kn.copy(kt).applyQuaternion(Kr.slerp(mg,1-t)).normalize()}else if(ue&&!aA()&&ec(ue,gr)!==null){ue.updateWorldMatrix(!0,!1),kn.set(0,1,0).transformDirection(ue.matrixWorld),ue.getWorldPosition($c);const e=H.position.distanceTo($c)/Ki(ue);let t=Ft.logFlights?Math.log(Zc/e)/Math.log(Zc/jc):(Jc-e)/(Jc-jc);t=Math.min(Math.max(t,0),1),t=t*t*(3-2*t),Kr.setFromUnitVectors(kt,kn),kn.copy(kt).applyQuaternion(Kr.slerp(mg,1-t)).normalize()}if(H.up.dot(kn)>.99999){if(H.up.equals(kn))return;H.up.copy(kn)}else H.up.lerp(kn,1-Math.exp(-n*rR)),H.up.lengthSq()<1e-6&&H.up.copy(kn),H.up.normalize();ve._quat.setFromUnitVectors(H.up,kt),ve._quatInverse.copy(ve._quat).invert()}function cR(n,e){return nc&&hR(),lR(n,e)?(oR(n),H.lookAt(ve.target),!0):!1}function lR(n,e){if(ii)return mR(n,e),!0;if(vn){hi+=n/Fi,hi>=1&&(hi=1,vn=!1,ve.enabled=$o,ue&&(yn=!0,ht.live=!1,Tt(ue,ea),ue.getWorldQuaternion(vo),an("arrive",{data:ue.userData}),AA(!0)));const t=d_(hi),i=s3,s=r3;ue?(vu(ue,hA,i),Tt(ue,s)):(i.copy(la),s.copy(Sa));let r=t;_n?r=M_(_n,t*_n.total,H.position):ua.getPointAt(t,H.position),Dh.subVectors(i,x_),_n?(H.position.addScaledVector(Dh,r),H.position.addScaledVector(Z3(),1-r)):H.position.addScaledVector(Dh,t*t*(3-2*t));let a;lr>0?a=tc(hi,lr,lr+h_):a=cA(Math.min(hi/(_n?v_:.2),1)),Yr.copy(Kl).sub(H.position),_n&&Yr.add(cf),Fh.subVectors(s,H.position);const o=Yr.length(),l=Fh.length();a<1&&o>0&&l>0?(S_(Yr.divideScalar(o),Fh.divideScalar(l),a,Yr,zo),ve.target.copy(H.position).addScaledVector(Yr,o**(1-a)*l**a)):ve.target.copy(s),ve.update()}else if(ue&&yn){if(Tt(ue,Rt),isNaN(Rt.x))return yn=!1,!1;if(ue.getWorldQuaternion(Mo),ue.userData.orbit_type==="landed"?Wc.copy(Mo).multiply(vo.invert()):Wc.identity(),H.position.sub(ea).applyQuaternion(Wc).add(Rt),ve.target.sub(ea).applyQuaternion(Wc).add(Rt),ea.copy(Rt),vo.copy(Mo),Wi)ve.update(n);else{const t=Ki(ue),i=Math.sin(e*.2)*(t*.02),s=t+i;ue.userData.orbit_type==="landed"?Di.copy(Rt).add(f_(ue,Rt,s,e)):ec(ue,gr)!==null?Di.copy(Rt).addScaledVector(gr,s):U3(mr===null?n:0,e,Rt,s,Di),dA(Di,ue),On.copy(H.position),gn.subVectors(Di,On);const r=gn.length();if(r>5){gs.copy(gn).normalize(),eg.set(On,gs);let f=!1,A=1/0;j.forEach(g=>{if(g.mesh!==ue&&!(!g.group.visible&&g.data.type==="mission")&&["star","planet","moon"].includes(g.data.type)){const m=(g.data.radius||1)*1.5,p=g.group.position;eg.closestPointToPoint(p,Vc);const E=On.distanceTo(Vc);E<r&&E>.1&&Vc.distanceTo(p)<m&&E<A&&(A=E,Ni.subVectors(Vc,p).normalize(),Ni.lengthSq()<.001&&Ni.set(0,1,0),tg.copy(p).addScaledVector(Ni,m*1.2),f=!0)}}),f&&Di.copy(tg)}const a=On.distanceTo(Di);eo.copy(Rt);let o=Fc;if(a>5){const f=Ki(ue),A=Math.max(f*15,150),g=Math.max(f*4,40);if(a>g)if(gn.subVectors(Di,On).normalize(),Th.copy(On).addScaledVector(gn,a),a>A)eo.copy(Th),o=.1;else{const m=(a-g)/(A-g);eo.lerp(Th,m),o=Fc+(.1-Fc)*m}}gn.subVectors(ve.target,On).normalize(),gs.subVectors(eo,On).normalize(),Bh.setFromUnitVectors(bh,gn),ng.setFromUnitVectors(bh,gs);const l=1-Math.pow(1-o,n*60);Bh.slerp(ng,l),Ni.copy(bh).applyQuaternion(Bh).normalize();const c=ve.target.distanceTo(On),u=eo.distanceTo(On),h=c+(u-c)*l;ve.target.copy(On).addScaledVector(Ni,h);const d=1-Math.pow(1-Fc,n*60);H.position.lerp(Di,d),ve.update()}}else if(Mi)if(Wi)ve.update(n);else{fo=Math.min(1,fo+n/t3);const t=mr===null?Ei*n*fo*fo:0;H.position.applyAxisAngle(kt,t),ve.target.applyAxisAngle(kt,t),ve.update()}return!0}const so=new x;function mA(n,e,t=H.position){const i=[],s=gi?new Set(gi.names):null;j.forEach(A=>{const g=A.data.orbit;if(!(!(s?s.has(A.data.name):A.data.type==="planet")||!g||!g.a||!g.rate))for(let p=0;p<64;p++){const E=vi(g,360/g.rate*(p/64));i.push(new x(E.x,E.y,E.z))}});const r=i.length;for(let A=1;A<8;A++)for(let g=0;g<r;g++)i.push(i[g].clone().applyAxisAngle(kt,A*Math.PI/4));so.set(t.x,0,t.z),so.lengthSq()<1e-12&&so.set(0,0,1),so.normalize();const a=so.clone().multiplyScalar(Math.cos(tm));if(a.y=Math.sin(tm),e.set(0,0,0),!i.length)return n.copy(a).multiplyScalar(1200);let o=em,l=em;if(gi){const{left:A,right:g,top:m,bottom:p}=gi.insets;o=nm*Math.max(.1,1-(A+g)/window.innerWidth),l=nm*Math.max(.1,1-(m+p)/window.innerHeight)}const c=new Kt(H.fov,window.innerWidth/window.innerHeight,H.near,H.far),u=new x,h=A=>(c.position.copy(a).multiplyScalar(A),c.lookAt(e),c.updateMatrixWorld(),i.every(g=>(u.copy(g).project(c),u.z<1&&Math.abs(u.x)<=o&&Math.abs(u.y)<=l)));let d=1,f=ve.maxDistance;for(let A=0;A<40;A++){const g=(d+f)/2;h(g)?f=g:d=g}return n.copy(a).multiplyScalar(f)}function xg(){if(!Mi||!gi)return null;let n=0;return gi.names.forEach(e=>{const t=j.get(e)?.data.orbit;t&&(n=Math.max(n,Wf(t)))}),n||null}function b_({animate:n=!0,frame:e=null}={}){if(nc||ii){_r=()=>b_({animate:n,frame:e});return}const t=ue;w_(),Fa(),ue=null,yn=!1,Mi=!0,fo=0,gi=e&&e.names?.length?{names:[...e.names],insets:{left:0,right:0,top:0,bottom:0,...e.insets}}:null,mA(la,Sa),n?I_(la,{from:t}):(H.position.copy(la),ve.target.copy(Sa),ve.update())}let nc=!1,_r=null;function uR(){nc=!0}function hR(){nc=!1;const n=_r;_r=null,H.near=Ft.cameraNear??H.near,H.far=Ft.cameraFar,H.updateProjectionMatrix(),ve.maxDistance=Ft.maxDistance,Fa(),vn?(Mi&&mA(la,Sa,la.clone()),hi=1):xR(ti),n?.()}const dR=.15,fR=.5;let ii=null;function AR(n){const e=yn&&ue&&!vn?ue:null,t={subject:e,p:0,ease:Wi?fR:dR,reach:n,reach0:n(),offset:new x,cam:H.position.clone(),target:ve.target.clone()};e&&(Tt(e,Rt),t.offset.subVectors(H.position,Rt).divideScalar(Ki(e)),e.userData.orbit_type==="landed"&&t.offset.applyQuaternion(e.getWorldQuaternion(Mo).invert())),Fa(),ve.enabled=!1,H.far=Ft.cameraFar,H.updateProjectionMatrix(),ve.maxDistance=Ft.maxDistance,ii=t}function pR(n){ii&&(ii.p=n)}const _g=new x;function mR(n,e){const t=ii;if(!t.subject){Mi&&mr===null&&(t.cam.applyAxisAngle(kt,Ei*n),t.target.applyAxisAngle(kt,Ei*n));const o=t.reach()/t.reach0;H.position.copy(t.cam).multiplyScalar(o),ve.target.copy(t.target).multiplyScalar(o),ve.update();return}const i=t.subject;if(ht.live&&mr===null&&(ht.az+=ht.vel*n),Tt(i,Rt),isNaN(Rt.x))return;gn.copy(t.offset).multiplyScalar(Ki(i)),i.userData.orbit_type==="landed"&&gn.applyQuaternion(i.getWorldQuaternion(Mo)),vu(i,e,_g),gs.subVectors(_g,Rt);let s=Math.min(t.p/t.ease,1);s=s*s*(3-2*s);const r=gn.length(),a=gs.length();r>0&&a>0&&(gn.divideScalar(r).lerp(gs.divideScalar(a),s),gn.lengthSq()<1e-12&&gn.copy(gs),gn.setLength(r**(1-s)*a**s)),H.position.copy(Rt).add(gn),dA(H.position,i),ve.target.copy(Rt),ve.update()}function gR(){const n=ii;if(!n)return;ii=null,H.near=Ft.cameraNear??H.near,H.far=Ft.cameraFar,H.updateProjectionMatrix(),ve.maxDistance=Ft.maxDistance,ve.enabled=$o,n.subject&&n.subject===ue&&(yn=!0,Tt(ue,ea),ue.getWorldQuaternion(vo));const e=_r;_r=null,e?.()}function xR(n){vn||Wi||(ht.live=!1,yn&&ue?(vu(ue,n,H.position),Tt(ue,ve.target),ea.copy(ve.target),ue.getWorldQuaternion(vo)):Mi&&mA(H.position,ve.target),ve.update())}const yg=6*Math.PI/180,_R=1.15,Eg=.05,as=new x,vg=new x;function T_({turn:n=null,zoom:e=0}={}){if(!ve||!$o||ii||!n&&!e)return!1;if(fA(),ve.dispatchEvent({type:"start"}),as.subVectors(H.position,ve.target),n){as.applyAxisAngle(H.up,-n[0]*yg),vg.crossVectors(H.up,as).normalize();const t=as.angleTo(H.up),i=Math.min(Math.max(t-n[1]*yg,Eg),Math.PI-Eg);as.applyAxisAngle(vg,i-t)}else{const t=Math.min(Math.max(as.length()*_R**-e,ve.minDistance),ve.maxDistance);as.setLength(t)}return H.position.copy(ve.target).add(as),ve.dispatchEvent({type:"end"}),!0}function yR(){x1(()=>zi?.data.name??ue?.userData.name??null),ve=new GB(H,Ge.domElement),ve.enableDamping=!0,ve.maxDistance=Ft.maxDistance,ve.addEventListener("start",()=>{(yn||Mi)&&(Wi=!0,ve.autoRotate=!1,clearTimeout(Dl)),an("steer")}),ve.addEventListener("end",()=>{!Wi||Pa.matches||(clearTimeout(Dl),Dl=setTimeout(()=>{Wi&&(yn||Mi)&&(ve.autoRotate=!0)},Ib))}),Ge.domElement.addEventListener("keydown",n=>{if(n.altKey||n.ctrlKey||n.metaKey)return;const e={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,1],ArrowDown:[0,-1]}[n.key],t={"+":1,"=":1,"-":-1,_:-1}[n.key];!e&&!t||T_(e?{turn:e}:{zoom:t})&&n.preventDefault()}),ve.autoRotateSpeed=-wb}const Mg=3,ER=.6,B_=[.04,.6],R_=[.42,.96],vR=Math.min(B_[0],1-R_[1]),MR=30;let ut=null;function gA(){return ut!==null}const D_=()=>[...j.values()].map(n=>n.data);function SR(n){if(ut){if(n===ut.to)return;if(!ut.started){ut=null,an("scale-mode",{mode:ki});return}[ut.from,ut.to]=[ut.to,ut.from],ut.p=1-ut.p,ut.duration=Mg,an("scale-change",{from:ut.from,to:ut.to});return}n!==ki&&(ut={from:ki,to:n,planned:ki,p:0,duration:Mg,started:!1},an("scale-change",{from:ut.from,to:n}))}function CR(){ut?.started&&(ut.duration=Math.min(ut.duration,ER/Math.max(1-ut.p,1e-6)))}function IR(n){if(ut){if(!ut.started){if(vn){fA();return}wR()}if(ut.p=Math.min(1,ut.p+n/ut.duration),ut.p>=1){bR();return}L_(ut.p)}}function wR(){ut.started=!0;const n=ue&&yn?j.get(ue.userData.name):null;ut.to==="true"&&n?.data.orbit_type==="landed"&&Kf(n),a1(),DB(ko[ut.planned]),wx(ko[ut.planned].toAu),L_(0);const e=xg()!==null;AR(()=>e&&xg()||Yi(MR))}function L_(n){const e=ut.to==="true"?n:1-n,t=([s,r])=>{const a=Math.min(Math.max((e-s)/(r-s),0),1);return a*a*a*(a*(a*6-15)+10)},i={orbit:t(B_),size:t(R_)};$x(n>vR?1/0:void 0),mu(D_(),ut.from,i),tA(),c1(i.size),e_(i.orbit),pR(n),an("scale-progress",{progress:n})}function bR(){const{to:n}=ut;ut=null;const e=D_();if($x(1/0),mu(e,n),tA(),e_(n==="true"?1:0),wx(null),UB(),l1(),n==="true"){f1();const t=ue&&yn?j.get(ue.userData.name):null;t?.data.orbit_type==="landed"&&Kf(t)}new Set(e.filter(t=>t.orbit_type==="landed").map(t=>t.parent)).forEach(t=>{const i=j.get(t);i&&Zo(i)}),an("scale-progress",{progress:1}),an("scale-mode",{mode:n}),gR()}let Zs="Sun";function TR(){if(Zs="Sun",ue&&ue.userData)Zs=Ar(ue.userData.name);else{let n=1/0;j.forEach(e=>{if(e.data.parent==="Sun"&&e.data.type!=="mission"){const t=H.position.distanceTo(e.group.position);t<n&&(n=t,Zs=e.data.name)}})}j.forEach(n=>{const{group:e,data:t}=n,i=H.position.distanceTo(e.position);if(i===0)return;const s=Ar(t.name),r=H.fov*(Math.PI/180),o=(t.type==="mission"?bn(n):t.radius||1)/i*window.innerHeight/(2*Math.tan(r/2)),l=bb;let c=s===Zs&&Zs!=="Sun";t.type==="mission"||t.type==="asteroid"||t.type==="comet"?(n.mesh===ue?e.visible=!0:e.visible=c||o>l,(c||o>3)&&!t.isModelLoaded&&ca(t,!1),t.isModelLoaded&&!t.hasHighDetail&&e.visible&&Wx(n)>Tb&&jf(t)):e.visible=!0})}const uf=new x(0,0,0),BR=new x(0,1,0),RR=.1,DR=new hM(16777215,RR);Ve.add(DR);const Ho=new lx(16777215,2.5,0,0);Ho.position.set(0,0,0);Ho.castShadow=!1;Ve.add(Ho);const hf=1024,In=new ux(16777215,0);In.castShadow=!0;In.shadow.mapSize.set(hf,hf);In.shadow.radius=1.5;Ve.add(In);Ve.add(In.target);const tl=.2,Gh=2.5,P_=.5,LR=.6,PR=8,zh=Math.sin(et.degToRad(25)),Mt=new cx(16773856,0,0,Math.PI/8,.7,0);Mt.castShadow=!0;Mt.shadow.mapSize.set(1024,1024);Mt.shadow.intensity=P_;Mt.shadow.autoUpdate=!1;let nl=0;Ve.add(Mt,Mt.target);let os=null;const Li=new x,Hh=new x,ro=new x,il=new x,cs=new x,Vh=new x,Sg=new x,Wh=new x,qh=new ge,sl=new x,ao=new x;function Cg(n,e,t=null){let i=0;return j.forEach(s=>{if(s.ring){const{mesh:l,innerRadius:c,outerRadius:u,opacity:h}=s.ring;if(l.updateWorldMatrix(!0,!1),qh.copy(l.matrixWorld).invert(),sl.copy(n).applyMatrix4(qh),ao.copy(e).transformDirection(qh),Math.abs(ao.z)>1e-6){const d=-sl.z/ao.z;if(d>1e-6){const f=Math.hypot(sl.x+d*ao.x,sl.y+d*ao.y),A=(u-c)*.02,g=et.smoothstep(f,c-A,c+A)*(1-et.smoothstep(f,u-A,u+A));i=Math.max(i,h*g)}}}if(s===t||!fu.has(s.data.type))return;s.group.getWorldPosition(Sg),Wh.subVectors(Sg,n);const r=Wh.dot(e);if(r<=0)return;const a=bn(s),o=Wh.addScaledVector(e,-r).length();i=Math.max(i,1-et.smoothstep(o,a*.95,a*1.05))}),i}const UR=30,FR=new x;function NR(){return yn&&!vn?!0:vn?H.position.distanceTo(Tt(ue,FR))<Ki(ue)*UR:!1}function QR(n){const t=ue&&ue.userData&&ue.userData.type==="mission"&&!_o(ue.userData)&&NR()?ue:null;t!==os&&Mt.intensity<.02&&(os=t);const i=t&&t===os?nl:0;if(Mt.intensity+=(i-Mt.intensity)*(1-Math.exp(-n*3/LR)),!os)return;Tt(os,Mt.target.position);const s=j.get(os.userData.parent);if(s&&s.group.getWorldPosition(Hh),il.subVectors(uf,Mt.target.position).normalize(),os.userData.orbit_type==="landed"&&s){Li.subVectors(Mt.target.position,Hh).normalize();let c=et.smoothstep(Li.dot(il),-.1,0);c*=1-Cg(Mt.target.position,il,s),nl=et.lerp(Gh,tl,c)}else if(nl=et.lerp(tl,Gh,Cg(Mt.target.position,il)),Li.subVectors(Mt.target.position,uf).normalize(),s&&fu.has(s.data.type)){ro.subVectors(Hh,Mt.target.position).normalize();const c=Li.dot(ro);c<zh&&(Li.addScaledVector(ro,-c),Li.lengthSq()<1e-8&&Li.set(1,0,0).cross(ro),Li.normalize().multiplyScalar(Math.sqrt(1-zh**2)).addScaledVector(ro,zh))}const r=bn(j.get(os.userData.name)),a=r*PR;Mt.position.copy(Mt.target.position).addScaledVector(Li,a),Mt.angle=Math.atan(r*2.5/a),Mt.target.updateMatrixWorld();const o=et.clamp((nl-tl)/(Gh-tl),0,1);Mt.shadow.intensity=P_*o;const l=Mt.intensity>.01&&o>.01;if(Mt.shadow.autoUpdate=l,l){const c=Mt.shadow.camera;c.near=a*.5,c.far=a+r*4,c.updateProjectionMatrix(),Mt.shadow.normalBias=r*5/Mt.shadow.mapSize.x,Mt.shadow.bias=-1e-4}}const Ig=2**.25,wg=36,OR=1,bg=2.5,kR=3;let rl=0;const GR=new ge,Xh=new x,Yh=new x,zR=new x,HR=new x,al=new x,VR=new x;let df=null,Kh=0;const WR=2**24;function U_(n){let e=n;return e&&e.data.type==="mission"&&(e=j.get(e.data.parent)??null),e&&fu.has(e.data.type)?e:null}const ff=new x;function qR(n){const e=U_(n)??df;return e.group.getWorldPosition(ff),{centre:ff,radius:bn(e)}}const XR=1e3;function YR(n){const e=Zs!=="Sun"?j.get(Zs):null,t=e&&e.data.radius||1,i=C_(),s=i&&i.userData?j.get(i.userData.name):null,r=U_(s),a=e&&(H.position.distanceTo(e.group.position)<Math.max(t*wg,Ft.shadowReachMin)||r&&H.position.distanceTo(r.group.getWorldPosition(ff))<bn(r)*wg);e!==df&&(rl=0,df=e,Kh=e?u_(e):0);const o=n/OR;rl=et.clamp(rl+(a?o:-o),0,1);const l=et.smoothstep(rl,0,1);if(!e||l<=0){Ho.intensity=bg,In.intensity=0,In.shadow.autoUpdate=!1;return}Ho.intensity=bg*(1-l),In.intensity=kR*l,In.shadow.autoUpdate=!0;const c=vn&&i?Tt(i,VR):ve.target,h=H.position.distanceTo(c)*Math.tan(et.degToRad(H.fov)/2);let d=Math.hypot(h,h*H.aspect)*1.05;s&&(d=Math.max(d,bn(s)*1.5)),d=Math.max(Ft.shadowHalfMin,Math.min(d,Kh*1.2)),d=Ig**Math.ceil(Math.log(d)/Math.log(Ig));const f=2*d/hf;Vh.subVectors(uf,c).normalize(),GR.lookAt(Vh,HR,BR).extractBasis(Xh,Yh,zR),i?Tt(i,al):e.group.getWorldPosition(al),cs.subVectors(c,al);const A=cs.dot(Xh),g=cs.dot(Yh);cs.addScaledVector(Xh,Math.round(A/f)*f-A).addScaledVector(Yh,Math.round(g/f)*f-g).add(al);const m=Ft.shadowLocal?qR(s):null,p=m&&s&&s.data.orbit_type==="landed",E=p?d*XR:m?m.centre.distanceTo(cs)+m.radius+d:Kh+cs.distanceTo(e.group.position)+d;In.position.copy(cs).addScaledVector(Vh,E),In.target.position.copy(cs);const _=In.shadow.camera;_.left=_.bottom=-d,_.right=_.top=d,_.near=d*.5,_.far=p?E*2:E+(m?d:Math.max(d,t))*2,_.updateProjectionMatrix();const S=_.far-_.near;In.shadow.normalBias=f,In.shadow.bias=-(m?Math.max(f*.5,2*S/WR):f*.5)/S}class KR{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0,this.workerCreator=null}_initWorker(e){if(!this.workers[e]){const t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){const i=this.workersResolve[e];if(i&&i(t),this.queue.length){const{resolve:s,msg:r,transfer:a}=this.queue.shift();this.workersResolve[e]=s,this.workers[e].postMessage(r,a)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(i=>{const s=this._getIdleWorker();s!==-1?(this._initWorker(s),this.workerStatus|=1<<s,this.workersResolve[s]=i,this.workers[s].postMessage(e,t)):this.queue.push({resolve:i,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const JR=0,Tg=2,jR=1,Bg=2,ZR=0,$R=1,e2=10,t2=0,F_=9,N_=15,Q_=16,O_=22,k_=37,G_=43,z_=76,H_=83,V_=97,W_=100,q_=103,X_=109,Y_=122,K_=123,J_=131,j_=132,Z_=133,$_=134,ey=137,ty=138,ny=139,iy=140,sy=141,ry=142,ay=145,oy=146,cy=148,ly=152,uy=157,hy=158,dy=165,fy=166,Ay=1000054e3,py=1000054001,my=1000054004,gy=1000054005,xA=1000066e3,xy=1000066004;class oo{constructor(e,t,i,s){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(e.buffer,e.byteOffset+t,i),this._littleEndian=s,this._offset=0}_nextUint8(){const e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){const e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){const e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){const e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){const e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint8Array(e){const t=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,e);return this._offset+=e,t}_skip(e){return this._offset+=e,this}_scan(e,t=0){const i=this._offset;let s=0;for(;this._dataView.getUint8(this._offset)!==t&&s<e;)s++,this._offset++;return s<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+i,s)}}const pn=[171,75,84,88,32,50,48,187,13,10,26,10];function Rg(n){return new TextDecoder().decode(n)}function n2(n){const e=new Uint8Array(n.buffer,n.byteOffset,pn.length);if(e[0]!==pn[0]||e[1]!==pn[1]||e[2]!==pn[2]||e[3]!==pn[3]||e[4]!==pn[4]||e[5]!==pn[5]||e[6]!==pn[6]||e[7]!==pn[7]||e[8]!==pn[8]||e[9]!==pn[9]||e[10]!==pn[10]||e[11]!==pn[11])throw new Error("Missing KTX 2.0 identifier.");const t={vkFormat:0,typeSize:1,pixelWidth:0,pixelHeight:0,pixelDepth:0,layerCount:0,faceCount:1,levelCount:0,supercompressionScheme:0,levels:[],dataFormatDescriptor:[{vendorId:0,descriptorType:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],keyValue:{},globalData:null},i=17*Uint32Array.BYTES_PER_ELEMENT,s=new oo(n,pn.length,i,!0);t.vkFormat=s._nextUint32(),t.typeSize=s._nextUint32(),t.pixelWidth=s._nextUint32(),t.pixelHeight=s._nextUint32(),t.pixelDepth=s._nextUint32(),t.layerCount=s._nextUint32(),t.faceCount=s._nextUint32(),t.levelCount=s._nextUint32(),t.supercompressionScheme=s._nextUint32();const r=s._nextUint32(),a=s._nextUint32(),o=s._nextUint32(),l=s._nextUint32(),c=s._nextUint64(),u=s._nextUint64(),h=3*Math.max(t.levelCount,1)*8,d=new oo(n,pn.length+i,h,!0);for(let ee=0,pe=Math.max(t.levelCount,1);ee<pe;ee++)t.levels.push({levelData:new Uint8Array(n.buffer,n.byteOffset+d._nextUint64(),d._nextUint64()),uncompressedByteLength:d._nextUint64()});const f=new oo(n,r,a,!0);f._skip(4);const A=f._nextUint16(),g=f._nextUint16(),m=f._nextUint16(),p=f._nextUint16(),E={vendorId:A,descriptorType:g,versionNumber:m,colorModel:f._nextUint8(),colorPrimaries:f._nextUint8(),transferFunction:f._nextUint8(),flags:f._nextUint8(),texelBlockDimension:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],bytesPlane:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],samples:[]},_=(p/4-6)/4;for(let ee=0;ee<_;ee++){const pe={bitOffset:f._nextUint16(),bitLength:f._nextUint8(),channelType:f._nextUint8(),samplePosition:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],sampleLower:Number.NEGATIVE_INFINITY,sampleUpper:Number.POSITIVE_INFINITY};64&pe.channelType?(pe.sampleLower=f._nextInt32(),pe.sampleUpper=f._nextInt32()):(pe.sampleLower=f._nextUint32(),pe.sampleUpper=f._nextUint32()),E.samples[ee]=pe}t.dataFormatDescriptor.length=0,t.dataFormatDescriptor.push(E);const S=new oo(n,o,l,!0);for(;S._offset<l;){const ee=S._nextUint32(),pe=S._scan(ee),be=Rg(pe);if(t.keyValue[be]=S._nextUint8Array(ee-pe.byteLength-1),be.match(/^ktx/i)){const tt=Rg(t.keyValue[be]);t.keyValue[be]=tt.substring(0,tt.lastIndexOf("\0"))}S._skip(ee%4?4-ee%4:0)}if(u<=0)return t;const w=new oo(n,c,u,!0),C=w._nextUint16(),B=w._nextUint16(),P=w._nextUint32(),v=w._nextUint32(),y=w._nextUint32(),b=w._nextUint32(),R=[];for(let ee=0,pe=Math.max(t.levelCount,1);ee<pe;ee++)R.push({imageFlags:w._nextUint32(),rgbSliceByteOffset:w._nextUint32(),rgbSliceByteLength:w._nextUint32(),alphaSliceByteOffset:w._nextUint32(),alphaSliceByteLength:w._nextUint32()});const U=c+w._offset,Q=U+P,F=Q+v,k=F+y,X=new Uint8Array(n.buffer,n.byteOffset+U,P),z=new Uint8Array(n.buffer,n.byteOffset+Q,v),te=new Uint8Array(n.buffer,n.byteOffset+F,y),ie=new Uint8Array(n.buffer,n.byteOffset+k,b);return t.globalData={endpointCount:C,selectorCount:B,imageDescs:R,endpointsData:X,selectorsData:z,tablesData:te,extendedData:ie},t}let Jh,Ui,Af;const jh={env:{emscripten_notify_memory_growth:function(n){Af=new Uint8Array(Ui.exports.memory.buffer)}}};class i2{init(){return Jh||(Jh=typeof fetch<"u"?fetch("data:application/wasm;base64,"+Dg).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,jh)).then(this._init):WebAssembly.instantiate(Buffer.from(Dg,"base64"),jh).then(this._init),Jh)}_init(e){Ui=e.instance,jh.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!Ui)throw new Error("ZSTDDecoder: Await .init() before decoding.");const i=e.byteLength,s=Ui.exports.malloc(i);Af.set(e,s),t=t||Number(Ui.exports.ZSTD_findDecompressedSize(s,i));const r=Ui.exports.malloc(t),a=Ui.exports.ZSTD_decompress(r,t,s,i),o=Af.slice(r,r+a);return Ui.exports.free(s),Ui.exports.free(r),o}}const Dg="AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ",s2="display-p3",r2="display-p3-linear";({...at.spaces[ft]});const Zh=new WeakMap;let $h=0,ed;class Hn extends Ds{constructor(e){super(e),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new KR,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}async detectSupportAsync(e){return console.warn('KTX2Loader: "detectSupportAsync()" has been deprecated. Use "detectSupport()" and "await renderer.init();" when creating the renderer.'),await e.init(),this.detectSupport(e)}detectSupport(e){return e.isWebGPURenderer===!0?this.workerConfig={astcSupported:e.hasFeature("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:e.hasFeature("texture-compression-etc1"),etc2Supported:e.hasFeature("texture-compression-etc2"),dxtSupported:e.hasFeature("texture-compression-s3tc"),bptcSupported:e.hasFeature("texture-compression-bc"),pvrtcSupported:e.hasFeature("texture-compression-pvrtc")}:(this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),astcHDRSupported:e.extensions.has("WEBGL_compressed_texture_astc")&&e.extensions.get("WEBGL_compressed_texture_astc").getSupportedProfiles().includes("hdr"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},typeof navigator<"u"&&navigator.platform.indexOf("Linux")>=0&&navigator.userAgent.indexOf("Firefox")>=0&&this.workerConfig.astcSupported&&this.workerConfig.etc2Supported&&this.workerConfig.bptcSupported&&this.workerConfig.dxtSupported&&(this.workerConfig.astcSupported=!1,this.workerConfig.etc2Supported=!1)),this}init(){if(!this.transcoderPending){const e=new ar(this.manager);e.setPath(this.transcoderPath),e.setWithCredentials(this.withCredentials);const t=e.loadAsync("basis_transcoder.js"),i=new ar(this.manager);i.setPath(this.transcoderPath),i.setResponseType("arraybuffer"),i.setWithCredentials(this.withCredentials);const s=i.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([t,s]).then(([r,a])=>{const o=Hn.BasisWorker.toString(),l=["/* constants */","let _EngineFormat = "+JSON.stringify(Hn.EngineFormat),"let _EngineType = "+JSON.stringify(Hn.EngineType),"let _TranscoderFormat = "+JSON.stringify(Hn.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(Hn.BasisFormat),"/* basis_transcoder.js */",r,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([l])),this.transcoderBinary=a,this.workerPool.setWorkerCreator(()=>{const c=new Worker(this.workerSourceURL),u=this.transcoderBinary.slice(0);return c.postMessage({type:"init",config:this.workerConfig,transcoderBinary:u},[u]),c})}),$h>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),$h++}return this.transcoderPending}load(e,t,i,s){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const r=new ar(this.manager);r.setPath(this.path),r.setCrossOrigin(this.crossOrigin),r.setWithCredentials(this.withCredentials),r.setRequestHeader(this.requestHeader),r.setResponseType("arraybuffer"),r.load(e,a=>{this.parse(a,t,s)},i,s)}parse(e,t,i){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(Zh.has(e))return Zh.get(e).promise.then(t).catch(i);this._createTexture(e).then(s=>t?t(s):null).catch(i)}_createTextureFrom(e,t){const{type:i,error:s,data:{faces:r,width:a,height:o,format:l,type:c,dfdFlags:u}}=e;if(i==="error")return Promise.reject(s);let h;if(t.faceCount===6)h=new $0(r,l,c);else{const d=r[0].mipmaps;h=t.layerCount>1?new Ov(d,a,o,t.layerCount,l,c):new cu(d,a,o,l,c)}return h.minFilter=r[0].mipmaps.length===1?wt:Zn,h.magFilter=wt,h.generateMipmaps=!1,h.needsUpdate=!0,h.colorSpace=_y(t),h.premultiplyAlpha=!!(u&jR),h}async _createTexture(e,t={}){const i=n2(new Uint8Array(e)),s=i.vkFormat===xA&&i.dataFormatDescriptor[0].colorModel===167;if(!(i.vkFormat===t2||s&&!this.workerConfig.astcHDRSupported))return o2(i);const a=t,o=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:e,taskConfig:a},[e])).then(l=>this._createTextureFrom(l.data,i));return Zh.set(e,{promise:o}),o}dispose(){this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),$h--}}Hn.BasisFormat={ETC1S:0,UASTC:1,UASTC_HDR:2};Hn.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16,BC6H:22,RGB_HALF:24,RGBA_HALF:25};Hn.EngineFormat={RGBAFormat:Jt,RGBA_ASTC_4x4_Format:rr,RGB_BPTC_UNSIGNED_Format:Nl,RGBA_BPTC_Format:pa,RGBA_ETC2_EAC_Format:Po,RGBA_PVRTC_4BPPV1_Format:Aa,RGBA_S3TC_DXT5_Format:po,RGB_ETC1_Format:Fl,RGB_ETC2_Format:Lo,RGB_PVRTC_4BPPV1_Format:Ul,RGBA_S3TC_DXT1_Format:sr};Hn.EngineType={UnsignedByteType:Je,HalfFloatType:Un,FloatType:hn};Hn.BasisWorker=function(){let n,e,t;const i=_EngineFormat,s=_EngineType,r=_TranscoderFormat,a=_BasisFormat;self.addEventListener("message",function(A){const g=A.data;switch(g.type){case"init":n=g.config,o(g.transcoderBinary);break;case"transcode":e.then(()=>{try{const{faces:m,buffers:p,width:E,height:_,hasAlpha:S,format:w,type:C,dfdFlags:B}=l(g.buffer);self.postMessage({type:"transcode",id:g.id,data:{faces:m,width:E,height:_,hasAlpha:S,format:w,type:C,dfdFlags:B}},p)}catch(m){console.error(m),self.postMessage({type:"error",id:g.id,error:m.message})}});break}});function o(A){e=new Promise(g=>{t={wasmBinary:A,onRuntimeInitialized:g},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function l(A){const g=new t.KTX2File(new Uint8Array(A));function m(){g.close(),g.delete()}if(!g.isValid())throw m(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");let p;if(g.isUASTC())p=a.UASTC;else if(g.isETC1S())p=a.ETC1S;else if(g.isHDR())p=a.UASTC_HDR;else throw new Error("THREE.KTX2Loader: Unknown Basis encoding");const E=g.getWidth(),_=g.getHeight(),S=g.getLayers()||1,w=g.getLevels(),C=g.getFaces(),B=g.getHasAlpha(),P=g.getDFDFlags(),{transcoderFormat:v,engineFormat:y,engineType:b}=h(p,E,_,B);if(!E||!_||!w)throw m(),new Error("THREE.KTX2Loader:	Invalid texture");if(!g.startTranscoding())throw m(),new Error("THREE.KTX2Loader: .startTranscoding failed");const R=[],U=[];for(let Q=0;Q<C;Q++){const F=[];for(let k=0;k<w;k++){const X=[];let z,te;for(let ee=0;ee<S;ee++){const pe=g.getImageLevelInfo(k,ee,Q);Q===0&&k===0&&ee===0&&(pe.origWidth%4!==0||pe.origHeight%4!==0)&&console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),w>1?(z=pe.origWidth,te=pe.origHeight):(z=pe.width,te=pe.height);let be=new Uint8Array(g.getImageTranscodedSizeInBytes(k,ee,0,v));const tt=g.transcodeImage(be,k,ee,Q,v,0,-1,-1);if(b===s.HalfFloatType&&(be=new Uint16Array(be.buffer,be.byteOffset,be.byteLength/Uint16Array.BYTES_PER_ELEMENT)),!tt)throw m(),new Error("THREE.KTX2Loader: .transcodeImage failed.");X.push(be)}const ie=f(X);F.push({data:ie,width:z,height:te}),U.push(ie.buffer)}R.push({mipmaps:F,width:E,height:_,format:y,type:b})}return m(),{faces:R,buffers:U,width:E,height:_,hasAlpha:B,dfdFlags:P,format:y,type:b}}const c=[{if:"astcSupported",basisFormat:[a.UASTC],transcoderFormat:[r.ASTC_4x4,r.ASTC_4x4],engineFormat:[i.RGBA_ASTC_4x4_Format,i.RGBA_ASTC_4x4_Format],engineType:[s.UnsignedByteType],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.BC7_M5,r.BC7_M5],engineFormat:[i.RGBA_BPTC_Format,i.RGBA_BPTC_Format],engineType:[s.UnsignedByteType],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.BC1,r.BC3],engineFormat:[i.RGBA_S3TC_DXT1_Format,i.RGBA_S3TC_DXT5_Format],engineType:[s.UnsignedByteType],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.ETC1,r.ETC2],engineFormat:[i.RGB_ETC2_Format,i.RGBA_ETC2_EAC_Format],engineType:[s.UnsignedByteType],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.ETC1],engineFormat:[i.RGB_ETC1_Format],engineType:[s.UnsignedByteType],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.PVRTC1_4_RGB,r.PVRTC1_4_RGBA],engineFormat:[i.RGB_PVRTC_4BPPV1_Format,i.RGBA_PVRTC_4BPPV1_Format],engineType:[s.UnsignedByteType],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0},{if:"bptcSupported",basisFormat:[a.UASTC_HDR],transcoderFormat:[r.BC6H],engineFormat:[i.RGB_BPTC_UNSIGNED_Format],engineType:[s.HalfFloatType],priorityHDR:1,needsPowerOfTwo:!1},{basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.RGBA32,r.RGBA32],engineFormat:[i.RGBAFormat,i.RGBAFormat],engineType:[s.UnsignedByteType,s.UnsignedByteType],priorityETC1S:100,priorityUASTC:100,needsPowerOfTwo:!1},{basisFormat:[a.UASTC_HDR],transcoderFormat:[r.RGBA_HALF],engineFormat:[i.RGBAFormat],engineType:[s.HalfFloatType],priorityHDR:100,needsPowerOfTwo:!1}],u={[a.ETC1S]:c.filter(A=>A.basisFormat.includes(a.ETC1S)).sort((A,g)=>A.priorityETC1S-g.priorityETC1S),[a.UASTC]:c.filter(A=>A.basisFormat.includes(a.UASTC)).sort((A,g)=>A.priorityUASTC-g.priorityUASTC),[a.UASTC_HDR]:c.filter(A=>A.basisFormat.includes(a.UASTC_HDR)).sort((A,g)=>A.priorityHDR-g.priorityHDR)};function h(A,g,m,p){const E=u[A];for(let _=0;_<E.length;_++){const S=E[_];if(S.if&&!n[S.if]||!S.basisFormat.includes(A)||p&&S.transcoderFormat.length<2||S.needsPowerOfTwo&&!(d(g)&&d(m)))continue;const w=S.transcoderFormat[p?1:0],C=S.engineFormat[p?1:0],B=S.engineType[0];return{transcoderFormat:w,engineFormat:C,engineType:B}}throw new Error("THREE.KTX2Loader: Failed to identify transcoding target.")}function d(A){return A<=2?!0:(A&A-1)===0&&A!==0}function f(A){if(A.length===1)return A[0];let g=0;for(let E=0;E<A.length;E++){const _=A[E];g+=_.byteLength}const m=new Uint8Array(g);let p=0;for(let E=0;E<A.length;E++){const _=A[E];m.set(_,p),p+=_.byteLength}return m}};const a2=new Set([Jt,To,ps,As]),td={[X_]:Jt,[q_]:ps,[W_]:As,[V_]:Jt,[H_]:ps,[z_]:As,[G_]:Jt,[k_]:Jt,[O_]:ps,[Q_]:ps,[N_]:As,[F_]:As,[K_]:To,[Y_]:To,[ly]:Po,[cy]:Lo,[xA]:rr,[hy]:rr,[uy]:rr,[xy]:ra,[fy]:ra,[dy]:ra,[$_]:sr,[Z_]:sr,[j_]:ia,[J_]:ia,[ty]:sa,[ey]:sa,[iy]:Ol,[ny]:Ql,[ry]:Gl,[sy]:kl,[oy]:pa,[ay]:pa,[gy]:Aa,[py]:Aa,[my]:Do,[Ay]:Do},Jr={[X_]:hn,[q_]:hn,[W_]:hn,[V_]:Un,[H_]:Un,[z_]:Un,[G_]:Je,[k_]:Je,[O_]:Je,[Q_]:Je,[N_]:Je,[F_]:Je,[K_]:ru,[Y_]:au,[ly]:Je,[cy]:Je,[xA]:Un,[hy]:Je,[uy]:Je,[xy]:Un,[fy]:Je,[dy]:Je,[$_]:Je,[Z_]:Je,[j_]:Je,[J_]:Je,[ty]:Je,[ey]:Je,[iy]:Je,[ny]:Je,[ry]:Je,[sy]:Je,[oy]:Je,[ay]:Je,[gy]:Je,[py]:Je,[my]:Je,[Ay]:Je};async function o2(n){const{vkFormat:e}=n;if(td[e]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat: "+e);Jr[e]===void 0&&console.warn('THREE.KTX2Loader: Missing ".type" for vkFormat: '+e);let t;n.supercompressionScheme===Tg&&(ed||(ed=new Promise(async a=>{const o=new i2;await o.init(),a(o)})),t=await ed);const i=[];for(let a=0;a<n.levels.length;a++){const o=Math.max(1,n.pixelWidth>>a),l=Math.max(1,n.pixelHeight>>a),c=n.pixelDepth?Math.max(1,n.pixelDepth>>a):0,u=n.levels[a];let h;if(n.supercompressionScheme===JR)h=u.levelData;else if(n.supercompressionScheme===Tg)h=t.decode(u.levelData,u.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");let d;Jr[e]===hn?d=new Float32Array(h.buffer,h.byteOffset,h.byteLength/Float32Array.BYTES_PER_ELEMENT):Jr[e]===Un?d=new Uint16Array(h.buffer,h.byteOffset,h.byteLength/Uint16Array.BYTES_PER_ELEMENT):Jr[e]===ru||Jr[e]===au?d=new Uint32Array(h.buffer,h.byteOffset,h.byteLength/Uint32Array.BYTES_PER_ELEMENT):d=h,i.push({data:d,width:o,height:l,depth:c})}const s=n.levelCount===0||i.length>1;let r;if(a2.has(td[e]))r=n.pixelDepth===0?new Ta(i[0].data,n.pixelWidth,n.pixelHeight):new k0(i[0].data,n.pixelWidth,n.pixelHeight,n.pixelDepth),r.minFilter=s?vf:rn,r.magFilter=rn,r.generateMipmaps=n.levelCount===0;else{if(n.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");r=new cu(i,n.pixelWidth,n.pixelHeight),r.minFilter=s?Zn:wt,r.magFilter=wt}return r.mipmaps=i,r.type=Jr[e],r.format=td[e],r.colorSpace=_y(n),r.needsUpdate=!0,Promise.resolve(r)}function _y(n){const e=n.dataFormatDescriptor[0];return e.colorPrimaries===$R?e.transferFunction===Bg?ft:on:e.colorPrimaries===e2?e.transferFunction===Bg?s2:r2:(e.colorPrimaries===ZR||console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`),fi)}const yy=["px","nx","py","ny","pz","nz"],c2=new Ne().set(-.0548755604,-.8734370902,-.4838350155,.4941094279,-.44482963,.7469822445,-.867666149,-.1980763734,.4559837762),l2=new Ne().set(-1,0,0,0,0,-1,0,-1,0);let Ey=!0;function u2(n){Ey=n}const h2=1,vy=new Hn().setTranscoderPath("basis/"),My=23.4392911*(Math.PI/180),Lg=Math.cos(My),Pg=Math.sin(My),d2=new Ne().set(1,0,0,0,-Pg,-Lg,0,Lg,-Pg),nd=c2.clone().multiply(d2),f2=`
    varying vec3 vDir;
    void main() {
        vDir = position;
        // A unit box round the camera, turned with the view but never moved, drawn at the far plane.
        vec4 p = projectionMatrix * vec4(mat3(viewMatrix) * position, 1.0);
        gl_Position = p.xyww;
    }`,A2=`
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
    }`;let di=null;function Ug(n){di&&(di.visible=n)}function Sy(n,e){try{Ge.initTexture(n)}catch(a){console.warn("Sky upload failed",a)}const t=e?l2.clone().multiply(nd):nd.clone(),i=new Et({defines:e?{SKY_CUBE:""}:{},uniforms:{sky:{value:n},toSky:{value:t},intensity:{value:1},toGalactic:{value:nd.clone()},survey:{value:nn.survey.texture??Vo},surveyMix:{value:0},patchImage:{value:nn.patch.texture??Vo},patchMix:{value:0},patchTan:{value:.1},patchAspect:{value:1},patchDir:{value:nn.patch.dir},patchRight:{value:nn.patch.right},patchUp:{value:nn.patch.up}},vertexShader:f2,fragmentShader:A2,side:Vt,depthTest:!1,depthWrite:!1});if(di=new Ye(new Is(2,2,2),i),di.name="sky",di.frustumCulled=!1,di.renderOrder=-1e9,di.raycast=()=>{},Ve.add(di),Pa.matches||!Ey)return;const s=performance.now();i.uniforms.intensity.value=0;const r=()=>{i.uniforms.intensity.value=Math.min(1,(performance.now()-s)/(h2*1e3)),i.uniforms.intensity.value<1&&requestAnimationFrame(r)};requestAnimationFrame(r)}function p2(){const n=jo.load("textures/milky_way.jpg");n.colorSpace=ft,n.generateMipmaps=!1,n.minFilter=wt,n.wrapS=Cs,Sy(n,!1)}let Fg=!1;function m2(){Fg||(Fg=!0,Promise.all(yy.map(n=>vy.loadAsync(`textures/milky_way_${n}.ktx2`))).then(n=>{const e=new $0(n.map(t=>({width:t.image.width,height:t.image.height,mipmaps:t.mipmaps})),n[0].format,n[0].type);e.colorSpace=ft,e.minFilter=wt,e.magFilter=wt,e.generateMipmaps=!1,e.needsUpdate=!0,Sy(e,!0),performance.mark("sky-ready")}).catch(n=>{console.warn("Compressed sky unavailable, using the JPEG",n),p2()}))}const g2=1.2,Vo=new Ta(new Uint8Array([0,0,0,255]),1,1);Vo.needsUpdate=!0;const nn={survey:{texture:null,mix:0,target:0},patch:{texture:null,mix:0,target:0,dir:new x(1,0,0),right:new x(0,0,1),up:new x(0,1,0),tan:.1,aspect:1}};function Cy(n,e){const t=jo.load(Ts(n),e,void 0,()=>console.warn(`Sky image didn't load: ${n}`));return t.colorSpace=ft,t.generateMipmaps=!1,t.minFilter=wt,t}function x2(n,{opacity:e=1}={}){const t=nn.survey;if(!n){t.target=0;return}t.path!==n&&(t.texture?.dispose(),t.texture=Cy(n),t.texture.wrapS=Cs,t.path=n,t.mix=0),t.target=e}const _2=bs({ra:0,dec:90});function pf(n){const e=nn.patch;if(!n){e.target=0;return}e.path!==n.image&&(e.texture?.dispose(),e.texture=Cy(n.image,i=>{e.aspect=i.image.width/i.image.height}),e.path=n.image,e.mix=0),e.dir.copy(bs({ra:n.ra,dec:n.dec??0}));const t=new x().crossVectors(_2,e.dir);t.lengthSq()<1e-10&&t.set(1,0,0),t.normalize(),e.right.copy(t).negate(),e.up.crossVectors(e.dir,t).normalize(),e.tan=Math.tan((n.size_deg??10)/2*Math.PI/180),e.target=n.opacity??1}function y2(n){const e=n/g2;for(const i of[nn.survey,nn.patch])i.mix=i.target>i.mix?Math.min(i.target,i.mix+e):Math.max(i.target,i.mix-e);if(!di)return;const t=di.material.uniforms;t.surveyMix.value=nn.survey.texture?nn.survey.mix:0,t.survey.value=nn.survey.texture??Vo,t.patchMix.value=nn.patch.texture?nn.patch.mix:0,t.patchImage.value=nn.patch.texture??Vo,t.patchTan.value=nn.patch.tan,t.patchAspect.value=nn.patch.aspect}const E2=.05,v2=1e-7,M2=1e6,S2=5,jr=new x,Ng=new x;Ve.matrixWorldAutoUpdate=!1;const C2=bt.prototype.updateMatrixWorld,Wo=[];function Iy(n,e,t){if(t=t||!n.visible,t&&n.userData.detailLevel){n.matrixWorldNeedsUpdate=!0;return}if(n.updateMatrixWorld!==C2){n.updateMatrixWorld(e),n.traverse(s=>Wo.push(s));return}Wo.push(n),n.matrixAutoUpdate&&n.updateMatrix(),(n.matrixWorldNeedsUpdate||e)&&((n.matrixWorldAutoUpdate===!0||n===Ve)&&(n.parent===null?n.matrixWorld.copy(n.matrix):n.matrixWorld.multiplyMatrices(n.parent.matrixWorld,n.matrix)),n.matrixWorldNeedsUpdate=!1,e=!0);const i=n.children;for(let s=0,r=i.length;s<r;s++)Iy(i[s],e,t)}function Qg(){Wo.length=0,Iy(Ve,!1,!1)}function I2(){if(!Ft.relative){Qg(),Ge.render(Ve,H);return}const n=w2(),e=H.far,t=et.clamp(Math.ceil(Math.log(e/n)/Math.log(M2)),1,S2),i=Math.pow(e/n,1/t);jr.copy(H.position),Ve.position.copy(jr).negate(),H.position.set(0,0,0);const{autoClear:s}=Ge,r=Ge.shadowMap.autoUpdate,{background:a}=Ve;Qg();for(let o=t-1;o>=0;o--)H.near=n*Math.pow(i,o),H.far=o===t-1?e:n*Math.pow(i,o+1),H.updateProjectionMatrix(),o<t-1&&(Ge.autoClear=!1,Ge.clearDepth(),Ge.shadowMap.autoUpdate=!1,Ve.background=null,Ug(!1)),Ge.render(Ve,H);Ge.autoClear=s,Ge.shadowMap.autoUpdate=r,Ve.background=a,Ug(!0),H.near=n,H.far=e,H.updateProjectionMatrix(),H.position.copy(jr),H.updateMatrixWorld(),Ve.position.set(0,0,0),Ve.updateMatrix();for(let o=0;o<Wo.length;o++){const l=Wo[o].matrixWorld.elements;l[12]+=jr.x,l[13]+=jr.y,l[14]+=jr.z}}function w2(){let n=1/0;return j.forEach(e=>{e.group.visible&&(e.mesh.visible||e.mesh.updateWorldMatrix(!0,!1),Ng.setFromMatrixPosition(e.mesh.matrixWorld),n=Math.min(n,H.position.distanceTo(Ng)-bn(e)))}),Math.max(v2,E2*n)}const Og=.6,b2=[64,24],T2=new x(0,1,0),Ca=new Map,Ia=new Map;function wy(n,e){const t=jo.load(Ts(n),e,void 0,()=>console.warn(`Layer image didn't load: ${n}`));return t.colorSpace=ft,t.anisotropy=4,t}function B2(n){return new mi({map:n,transparent:!0,opacity:0,depthWrite:!1,side:Gt,toneMapped:!1})}function R2(n,e){const t=j.get(e.body);if(!t)return console.warn(`Layer "${n}": no object called "${e.body}"`),!1;if(e.place!=="limb"&&e.place!=="sun-line")return console.warn(`Layer "${n}": unknown place "${e.place}"`),!1;_A(n,{now:!0});const i={id:n,spec:e,obj:t,aspect:0,opacity:0,target:e.opacity??1,removing:!1},s=wy(e.image,a=>{i.aspect=a.image.width/a.image.height}),r=e.place==="limb"?new ws(1,1,...b2):new ws(1,1);return i.mesh=new Ye(r,B2(s)),i.mesh.visible=!1,i.mesh.frustumCulled=!1,i.mesh.renderOrder=1,i.mesh.matrixAutoUpdate=!1,Ve.add(i.mesh),Ca.set(n,i),!0}function _A(n,{now:e=!1}={}){const t=Ca.get(n);if(t){if(e||t.opacity===0){by(t);return}t.removing=!0,t.target=0}}function by(n){Ve.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.map?.dispose(),n.mesh.material.dispose(),Ca.get(n.id)===n&&Ca.delete(n.id)}function D2(){[...Ca.keys()].forEach(n=>_A(n)),[...Ia.keys()].forEach(n=>Ty(n,null))}const _s=new x,ys=new x,tr=new x,Qi=new x,qs=new x,ls=new x,Co=new ge,ol=new x;function L2(n){for(const e of Ca.values()){const t=n/Og;if(e.opacity=e.target>e.opacity?Math.min(e.target,e.opacity+t):Math.max(e.target,e.opacity-t),e.removing&&e.opacity===0){by(e);continue}const{obj:i,mesh:s}=e,r=e.aspect>0&&i.group.visible&&e.opacity>0;s.visible=r,r&&(s.material.opacity=e.opacity,i.mesh.updateWorldMatrix(!0,!1),i.mesh.getWorldPosition(_s),e.spec.place==="limb"?P2(e):U2(e))}for(const[e,t]of Ia){const i=n/Og;t.opacity=t.target>t.opacity?Math.min(t.target,t.opacity+i):Math.max(t.target,t.opacity-i),t.mesh.material.opacity=t.opacity,t.mesh.visible=t.opacity>0,t.removing&&t.opacity===0&&By(e,t)}}function P2(n){const{spec:e,obj:t,mesh:i}=n;ys.subVectors(H.position,_s).normalize(),Qi.set(0,1,0).applyQuaternion(H.quaternion),tr.crossVectors(Qi,ys).normalize(),Qi.crossVectors(ys,tr),Co.makeBasis(tr,Qi,ys).setPosition(_s),i.matrix.copy(Co),i.matrixWorldNeedsUpdate=!0;const s=t.data.radius||1,r=rA(t)*(e.exaggerate??1),a=1-(e.ground_row??1),o=1-(e.top_row??0),c=(e.top_km??100)/(o-a)*r,u=s+(.5-a)*c,h=e.width_deg!==void 0?e.width_deg*Math.PI/180:Math.min(Math.PI,c*n.aspect/u),d=(e.angle??45)*Math.PI/180,f=i.geometry.attributes.position,A=i.geometry.attributes.uv,g=H.position.distanceTo(_s);for(let m=0;m<f.count;m++){const p=A.getX(m),E=A.getY(m),_=d+(.5-p)*h,S=Math.max(0,s+(E-a)*c);a_(_,S,g,0,ol),f.setXYZ(m,ol.x,ol.y,ol.z)}f.needsUpdate=!0}function U2(n){const{spec:e,obj:t,mesh:i}=n;ls.copy(_s).negate().normalize(),ls.lengthSq()===0&&ls.set(1,0,0),ys.subVectors(H.position,_s).normalize(),qs.copy(ys).addScaledVector(ls,-ys.dot(ls)),qs.lengthSq()<1e-8&&qs.copy(T2).addScaledVector(ls,-ls.y),qs.normalize(),tr.copy(ls).negate(),Qi.crossVectors(qs,tr),Qi.dot(ys.set(0,1,0).applyQuaternion(H.quaternion))<0&&(Qi.negate(),qs.negate());const s=(t.data.radius||1)/(e.radius??.05),r=s/n.aspect,[a,o]=e.centre??[.5,.5];Co.makeBasis(tr.multiplyScalar(s),Qi.multiplyScalar(r),qs),_s.addScaledVector(tr,.5-a).addScaledVector(Qi,o-.5),Co.setPosition(_s),i.matrix.copy(Co),i.matrixWorldNeedsUpdate=!0}function Ty(n,e){const t=j.get(n),i=Ia.get(n);if(!e)return i&&(i.target=0,i.removing=!0),!0;if(!t||!t.data.texture||!t.data.built?.radius)return console.warn(`Surface overlay: "${n}" isn't a textured sphere`),!1;i&&By(n,i);const s=wy(e.image),r=e.lit===!1?new mi({map:s,transparent:!0,opacity:0,toneMapped:!1}):new Xi({map:s,transparent:!0,opacity:0,roughness:1,metalness:0});r.depthWrite=!1;const a=t.data.segments||32,o=new Ye(new qi(t.data.built.radius*1.002,a*2,a),r);return o.receiveShadow=e.lit!==!1,o.renderOrder=1,o.visible=!1,t.mesh.add(o),Ia.set(n,{mesh:o,opacity:0,target:e.opacity??1,removing:!1}),!0}function By(n,e){e.mesh.parent?.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.map?.dispose(),e.mesh.material.dispose(),Ia.get(n)===e&&Ia.delete(n)}const mf=.8,Ry=.58,kg=.8,Gg=1.3,F2=.45,N2=1.3,gf=55,zg=30,cl=1800,Q2=38,xi=48,O2=400,yA=Math.log(O2);function k2(n,e){const t=n.radius||1,i=n.radius_km,s=Ma(n,i)-t;for(let r=0;r<xi;r++){const a=Math.exp(r/(xi-1)*yA);e[r]=Math.max(t,Ma(n,a*i)-s)}e[0]=t}function tu(n,e){if(e<=1)return e*n[0];const t=Math.min(1,Math.log(e)/yA)*(xi-1),i=Math.min(Math.floor(t),xi-2);return n[i]+(n[i+1]-n[i])*(t-i)}const G2=`
uniform float uTable[${xi}];
float remapR(float r) {
    if (r <= 1.0) return r * uTable[0];
    float f = min(1.0, log(r) / ${yA.toFixed(6)}) * ${(xi-1).toFixed(1)};
    int i = int(min(floor(f), ${(xi-2).toFixed(1)}));
    return mix(uTable[i], uTable[i + 1], f - float(i));
}
vec3 remapP(vec3 p) { float r = length(p); return r > 0.0 ? p / r * remapR(r) : p; }
`,wa=et.smoothstep;function z2(n,e){return n*Math.pow(2/(1+Math.max(e,-.94)),Ry)}function Hg(n,e,t,i){let{x:s}=n;const r=n.length();if(r<1e-6)return i.copy(n);const a=s/r;s>0?s*=1+(e/t-1)*wa(r,1.5,6)*a:s*=1+N2*wa(r,2.5,9),i.set(s,n.y,n.z);const o=i.length(),l=.95*z2(e,i.x/o);if(o>.7*l){const c=.7*l+.3*l*Math.tanh((o-.7*l)/(.3*l));i.multiplyScalar(c/o)}return i}const Dy=[2,3,4.5,6.5,8.5],Vg=12,H2=[73,76,79],Wg=8,ll=64;function V2(){const n=[];for(const t of Dy){const i=Math.acos(Math.sqrt(1/t));for(let s=0;s<Vg;s++){const r=s/Vg*Math.PI*2,a=[];for(let o=0;o<=ll;o++){const l=-i+2*i*o/ll,c=t*Math.cos(l)**2;a.push(new x(c*Math.cos(l)*Math.cos(r),c*Math.cos(l)*Math.sin(r),c*Math.sin(l)))}n.push({points:a,open:!1})}}const e=new qv;for(const t of[1,-1])for(const i of H2){const s=i*Math.PI/180,r=1/Math.cos(s)**2,a=Math.acos(Math.sqrt(2.5/r));for(let o=0;o<Wg;o++){const l=(o+.5)/Wg*Math.PI*2,c=A=>{const g=r*Math.cos(A)**2;return new x(g*Math.cos(A)*Math.cos(l),g*Math.cos(A)*Math.sin(l),t*g*Math.sin(A))},u=[],h=16;for(let A=0;A<=h;A++)u.push(c(s+(a-s)*A/h));const d=u[u.length-1],f=5+(i-72)*.7;e.v0.copy(d),e.v1.set(d.x*.4-4,d.y*1.4,d.z*1.5+t*2),e.v2.set(-gf*.35,Math.sin(l)*7,t*f),e.v3.set(-gf,Math.sin(l)*9,t*f*.9);for(let A=1;A<=ll-h;A++)u.push(e.getPoint(A/(ll-h)));n.push({points:u,open:!0})}}return n}const Na={transparent:!0,depthWrite:!1,blending:Ss,toneMapped:!1};function W2(){return new Et({...Na,uniforms:{uTime:{value:0},uOpacity:{value:0},uStorm:{value:0}},vertexShader:`
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
            }`})}function ul(n,{edge:e=!0}={}){return new Et({...Na,side:Gt,uniforms:{uOpacity:{value:0},uColour:{value:new Se(n)},uBright:{value:1}},vertexShader:`
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
            }`})}function q2(){return new Et({...Na,side:Gt,uniforms:{uTime:{value:0},uOpacity:{value:0},uBright:{value:.5}},vertexShader:`
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
            }`})}function X2(){return new Et({...Na,uniforms:{uTable:{value:new Float32Array(xi)},uTime:{value:0},uOpacity:{value:0},uSpeed:{value:6},uDensity:{value:.5},uNose:{value:13},uFlare:{value:20}},vertexShader:`
            ${G2}
            uniform float uTime, uSpeed, uNose, uFlare, uDensity;
            attribute vec3 aSeed;     // its distance off the Sun line (body radii), angle round it, and phase
            attribute float aEnd;     // 0 at its head, 1 at its tail
            varying float vAlpha;
            void main() {
                float span = ${(zg+gf).toFixed(1)};
                float s = fract(aSeed.z + uTime * uSpeed / span);
                float x = ${zg.toFixed(1)} - s * span + aEnd * (1.2 + uSpeed * 0.25);
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
            }`})}function Y2(n){const e=n.reduce((o,l)=>o+l.points.length,0),t=new Ke;t.setAttribute("position",new ze(new Float32Array(e*3),3));const i=new Float32Array(e),s=new Float32Array(e),r=[];let a=0;for(const o of n){const l=o.points.length;for(let c=0;c<l;c++)i[a+c]=c/(l-1),s[a+c]=o.open?1:0,c>0&&r.push(a+c-1,a+c);a+=l}return t.setAttribute("aAlong",new ze(i,1)),t.setAttribute("aOpen",new ze(s,1)),t.setIndex(r),t.userData.quiet=n.flatMap(o=>o.points),t}function qg(n,e=[36,48]){const[t,i]=e,s=new Ke,r=(t+1)*(i+1);s.setAttribute("position",new ze(new Float32Array(r*3),3));const a=new Float32Array(r),o=[],l=[];for(let c=0;c<=t;c++){const u=c/t*n;for(let h=0;h<=i;h++){const d=h/i*Math.PI*2;if(o.push(new x(Math.cos(u),Math.sin(u)*Math.cos(d),Math.sin(u)*Math.sin(d))),a[c*(i+1)+h]=1-wa(u,n*.7,n),c<t&&h<i){const f=c*(i+1)+h,A=f+i+1;l.push(f,A,f+1,A,A+1,f+1)}}}return s.setAttribute("aFade",new ze(a,1)),s.setIndex(l),s.userData.dirs=o,s}function Xg(n,e){const t=35*Math.PI/180,i=[],s=24;for(let h=0;h<=s;h++){const d=-t+2*t*h/s;i.push([e*Math.cos(d)**3,e*Math.cos(d)**2*Math.sin(d)])}for(let h=s;h>=0;h--){const d=-t+2*t*h/s;i.push([n*Math.cos(d)**3,n*Math.cos(d)**2*Math.sin(d)])}i.push(i[0]);const r=64,a=[],o=[],l=[],c=i.length;for(let h=0;h<=r;h++){const d=h/r*Math.PI*2;for(const[f,A]of i)a.push(new x(f*Math.cos(d),f*Math.sin(d),A)),l.push(1);if(h<r)for(let f=0;f<c-1;f++){const A=h*c+f,g=A+c;o.push(A,g,A+1,g,g+1,A+1)}}const u=new Ke;return u.setAttribute("position",new ze(new Float32Array(a.length*3),3)),u.setAttribute("aFade",new ze(new Float32Array(l),1)),u.setIndex(o),u.userData.quiet=a,u}const nr=180;function K2(){const n=(nr+1)*4,e=n*2,t=new Ke;t.setAttribute("position",new ze(new Float32Array(e*3),3));const i=new Float32Array(e),s=new Float32Array(e),r=new Float32Array(e),a=[];for(let o=0;o<2;o++)for(let l=0;l<=nr;l++){const c=o*n+l*4,u=l/nr*Math.PI*2;[0,1,0,1].forEach((h,d)=>{i[c+d]=h,s[c+d]=u,r[c+d]=d>=2?1:0}),l<nr&&(a.push(c,c+4,c+1,c+4,c+5,c+1),a.push(c+2,c+6,c+3,c+6,c+7,c+3))}return t.setAttribute("aUp",new ze(i,1)),t.setAttribute("aPsi",new ze(s,1)),t.setAttribute("aBand",new ze(r,1)),t.setIndex(a),t}function J2(){const n=new Ke,e=new Float32Array(cl*2*3),t=new Float32Array(cl*2);let i=12345;const s=()=>(i=Math.imul(i,1664525)+1013904223>>>0)/4294967296;for(let r=0;r<cl;r++){const a=Q2*Math.sqrt(s()),o=s()*Math.PI*2,l=s();for(let c=0;c<2;c++)e.set([a,o,l],(r*2+c)*3),t[r*2+c]=c}return n.setAttribute("position",new ze(new Float32Array(cl*2*3),3)),n.setAttribute("aSeed",new ze(e,3)),n.setAttribute("aEnd",new ze(t,1)),n}const qo=new Map,ba=["field","boundary","belts","aurora","wind"];function Ly(n,e){const t=qo.get(n);if(!e)return t&&ba.forEach(a=>{t.target[a]=0}),!0;const i=j.get(n),s=i?.data.magnetosphere;if(!s)return console.warn(`No magnetosphere for "${n}" in data.json`),!1;const r=t??j2(i,s);return ba.forEach(a=>{r.target[a]=e[a]===!1?0:e.opacity??1}),qo.set(n,r),!0}function j2(n,e){const t=new jt;t.matrixAutoUpdate=!1;const i={field:new Oo(Y2(V2()),W2()),magnetopause:new Ye(qg(Math.PI*.82),ul("#A6B5F8")),shock:new Ye(qg(Math.PI*.7),ul("#FFB4FF")),aurora:new Ye(K2(),q2()),wind:new Oo(J2(),X2())},[s,r]=e.belts??[[1.2,2.5],[3,6]];return i.innerBelt=new Ye(Xg(...s),ul("#FFB4FF",{edge:!1})),i.outerBelt=new Ye(Xg(...r),ul("#66EEFA",{edge:!1})),Object.values(i).forEach(a=>{a.frustumCulled=!1,a.visible=!1,a.renderOrder=2,t.add(a)}),Ve.add(t),{obj:n,params:e,group:t,meshes:i,opacity:Object.fromEntries(ba.map(a=>[a,0])),target:Object.fromEntries(ba.map(a=>[a,0])),table:new Float32Array(xi),builtTable:null,builtR0:-1,builtOval:-1}}function Z2(n,e){Ve.remove(e.group),Object.values(e.meshes).forEach(t=>{t.geometry.dispose(),t.material.dispose()}),qo.delete(n)}const ir=new x,hl=new x,ds=new x,nu=new x,fs=new x,dl=new x,Yg=new ge;function id(n,e,t){const i=n.array;for(let s=0;s<e.length;s++)t(e[s],hl),i[s*3]=hl.x,i[s*3+1]=hl.y,i[s*3+2]=hl.z;n.needsUpdate=!0}function $2(n,e){const{meshes:t,table:i}=n,s=n.params.standoff_re??10,r=(c,u)=>{const h=c.length();return h>0?u.copy(c).multiplyScalar(tu(i,h)/h):u.copy(c)};id(t.field.geometry.attributes.position,t.field.geometry.userData.quiet,(c,u)=>r(Hg(c,e,s,ir),u));for(const[c,u,h]of[[t.magnetopause,1,Ry],[t.shock,Gg,kg]])id(c.geometry.attributes.position,c.geometry.userData.dirs,(d,f)=>{const A=u*e*Math.pow(2/(1+Math.max(d.x,-.94)),h);return r(ir.copy(d).multiplyScalar(A),f)}),c.geometry.computeVertexNormals();for(const c of[t.innerBelt,t.outerBelt])id(c.geometry.attributes.position,c.geometry.userData.quiet,(u,h)=>r(Hg(u,e,s,ir),h)),c.geometry.computeVertexNormals();const a=t.wind.material.uniforms;a.uTable.value.set(i);const o=Gg*e,l=o*Math.pow(2,kg);a.uNose.value=o,a.uFlare.value=l*l/o}const fl=4*Math.PI/180;function eD(n,e,t){const{table:i}=n,s=n.obj.data.radius_km,r=n.meshes.aurora.geometry.attributes.position,a=r.array,o=(nr+1)*4,l=1+100/s,c=1+(100+t)/s,u=1+110/s;for(let h=0;h<2;h++){const d=h?-1:1;fs.set(-Math.sin(fl),0,d*Math.cos(fl)),ds.set(Math.cos(fl),0,d*Math.sin(fl)),nu.crossVectors(fs,ds);for(let f=0;f<=nr;f++){const A=f/nr*Math.PI*2,g=h*o+f*4,m=(e-2*Math.cos(A))*Math.PI/180,p=(E,_,S)=>{ir.copy(fs).multiplyScalar(Math.cos(E)).addScaledVector(ds,Math.sin(E)*Math.cos(A)).addScaledVector(nu,Math.sin(E)*Math.sin(A));const w=tu(i,_);a[(g+S)*3]=ir.x*w,a[(g+S)*3+1]=ir.y*w,a[(g+S)*3+2]=ir.z*w};p(m,l,0),p(m,c,1),p(m-2.5*Math.PI/180,u,2),p(m+2.5*Math.PI/180,u,3)}}r.needsUpdate=!0}function tD(n){if(!n.builtTable)return!0;for(let e=0;e<xi;e+=6)if(Math.abs(n.table[e]-n.builtTable[e])>1e-4*n.table[e])return!0;return!1}function nD(n,e,t){const i=e/mf;let s=!1;if(ba.forEach(_=>{const S=n.target[_];n.opacity[_]=S>n.opacity[_]?Math.min(S,n.opacity[_]+i):Math.max(S,n.opacity[_]-i),n.opacity[_]>0&&(s=!0)}),!s&&ba.every(_=>n.target[_]===0)){Z2(t,n);return}const{obj:r,params:a,meshes:o}=n;r.mesh.updateWorldMatrix(!0,!1),r.mesh.getWorldPosition(dl),ds.copy(dl).negate().normalize();const l=a.pole??{lat:90,lon:0};sA(l.lat,l.lon,fs).transformDirection(r.mesh.matrixWorld),fs.addScaledVector(ds,-fs.dot(ds)).normalize(),nu.crossVectors(fs,ds),Yg.makeBasis(ds,nu,fs).setPosition(dl),n.group.matrix.copy(Yg),n.group.matrixWorldNeedsUpdate=!0;const c=Uy(t),u=(a.standoff_re??10)*(1-F2*c);k2(r.data,n.table),(tD(n)||Math.abs(u-n.builtR0)>.02)&&($2(n,u),n.builtR0=u,n.builtTable=n.table.slice(),n.builtOval=-1);const h=90-(a.aurora_lat??67)+12*c;Math.abs(h-n.builtOval)>.05&&(eD(n,h,250+150*c),n.builtOval=h);const d=H.position.distanceTo(dl),f=_=>wa(d,tu(n.table,_)*.75,tu(n.table,_)*1.25),[A,g]=a.belts??[[1.2,2.5],[3,6]],m=(_,S)=>{_.visible=S>0,_.material.uniforms.uOpacity.value=S};m(o.field,n.opacity.field*f(Dy.at(-1))),o.field.material.uniforms.uTime.value=ti,o.field.material.uniforms.uStorm.value=c;const p=f(u*.8);m(o.magnetopause,n.opacity.boundary*.55*p),m(o.shock,n.opacity.boundary*.3*p),m(o.innerBelt,n.opacity.belts*.35*f(A[1]*1.6)),m(o.outerBelt,n.opacity.belts*.3*f(g[1]*1.2)),o.outerBelt.material.uniforms.uBright.value=1+1.5*c,m(o.aurora,n.opacity.aurora),o.aurora.material.uniforms.uTime.value=ti,o.aurora.material.uniforms.uBright.value=.45+1.4*c,m(o.wind,n.opacity.wind*p);const E=o.wind.material.uniforms;E.uTime.value=ti,E.uSpeed.value=5*(1+1.5*c),E.uDensity.value=.35+.65*c}const Ji=new Map,Io=64,iD=30,sD=1;function rD(){return new Et({...Na,side:Gt,uniforms:{uOpacity:{value:0},uTime:{value:0},uWidth:{value:1}},vertexShader:`
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
            }`})}function aD(n,e){EA(n,{now:!0});const t=new Date(e.launch).getTime();if(isNaN(t))return console.warn(`CME "${n}": launch date not understood`),!1;const i=(e.width_deg??60)/2*Math.PI/180,s=new qi(1,64,24,0,Math.PI*2,0,i),r=[0,1].map(()=>{const o=new Ye(s,rD());return o.material.uniforms.uWidth.value=i,o.frustumCulled=!1,o.visible=!1,o.renderOrder=2,Ve.add(o),o}),a=new Ba(new Ke,new Et({...Na,uniforms:{uOpacity:{value:0}},vertexShader:`
            attribute float aOff;
            varying float vOff;
            void main() { vOff = aOff; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
            uniform float uOpacity;
            varying float vOff;
            void main() { gl_FragColor = vec4(vec3(1.0, 0.85, 0.95) * (1.0 - smoothstep(0.6, 1.0, abs(vOff))) * uOpacity, 1.0); }`}));return a.geometry.setAttribute("position",new ze(new Float32Array(Io*3),3)),a.geometry.setAttribute("aOff",new ze(Float32Array.from({length:Io},(o,l)=>l/(Io-1)*2-1),1)),a.frustumCulled=!1,a.visible=!1,a.renderOrder=2,Ve.add(a),Ji.set(n,{id:n,launch:t,width:i,shells:r,arc:a,toward:e.toward??"Earth",speed:e.speed_km_s??1e3,dir:new x(1,0,0),fixed:!1,opacity:0,target:1,removing:!1}),!0}function EA(n,{now:e=!1}={}){const t=Ji.get(n);if(t){if(e){Py(t);return}t.target=0,t.removing=!0}}function Py(n){Ve.remove(n.arc),n.arc.geometry.dispose(),n.arc.material.dispose(),n.shells.forEach(e=>{Ve.remove(e),e.material.dispose()}),n.shells[0].geometry.dispose(),Ji.get(n.id)===n&&Ji.delete(n.id)}const Kg=new x(0,1,0),Jg=new ct;function oD(n,e){return(j.get("Sun")?.data?.radius_km??695700)+n.speed*Math.max(0,e-n.launch)/1e3}function cD(n,e){if(n.opacity=n.target>n.opacity?Math.min(n.target,n.opacity+e/mf):Math.max(n.target,n.opacity-e/mf),n.removing&&n.opacity===0){Py(n);return}const t=xn.getTime(),i=t<n.launch;if(i||!n.fixed){const l=j.get(n.toward);l&&n.dir.copy(l.group.position).normalize(),n.fixed=!i}const s=oD(n,t)/va,r=j.get("Sun")?.data.radius??1,a=Math.max(r*1.02,ni.au(s)),o=1-wa(s,2.5,4);if(Jg.setFromUnitVectors(Kg,n.dir),n.shells.forEach((l,c)=>{const u=a*(c?.88:1);l.visible=!i&&o>0&&n.opacity>0,l.quaternion.copy(Jg),l.scale.setScalar(Math.max(u,r*1.02)),l.position.set(0,0,0),l.material.uniforms.uOpacity.value=n.opacity*o*(c?.5:1),l.material.uniforms.uTime.value=ti}),n.arc.visible=n.shells[0].visible,n.arc.visible){const l=n.arc.geometry.attributes.position.array;for(let c=0;c<Io;c++){const u=(c/(Io-1)*2-1)*n.width;Al.copy(n.dir).applyAxisAngle(Kg,u).multiplyScalar(Math.max(a,r*1.02)),l[c*3]=Al.x,l[c*3+1]=Al.y,l[c*3+2]=Al.z}n.arc.geometry.attributes.position.needsUpdate=!0,n.arc.material.uniforms.uOpacity.value=n.opacity*o}}const Al=new x,jg=new x;function Uy(n){const e=j.get(n);if(!e||!Ji.size)return 0;const t=xn.getTime(),i=e.group.position.length(),s=ni.toAu(i)*va;jg.copy(e.group.position).normalize();let r=0;for(const a of Ji.values()){if(a.removing||t<a.launch||jg.angleTo(a.dir)>a.width)continue;const o=j.get("Sun")?.data.radius_km??695700,l=a.launch+(s-o)/a.speed*1e3,c=(t-l)/36e5;c<0||(r=Math.max(r,wa(c,0,sD)*Math.exp(-c/iD)))}return r}function lD(n,e){const t=Ji.get(n),i=j.get(e);if(!t||!i)return null;const s=ni.toAu(i.group.position.length())*va,r=j.get("Sun")?.data.radius_km??695700;return new Date(t.launch+(s-r)/t.speed*1e3)}function uD(){[...qo.keys()].forEach(n=>Ly(n,null)),[...Ji.keys()].forEach(n=>EA(n))}function hD(n){for(const e of[...Ji.values()])cD(e,n);for(const[e,t]of[...qo])nD(t,n,e)}const dD=.6,fD=10,Zg=260,AD=.035,Fy=15,vA={transparent:!0,depthWrite:!1,blending:Ss,toneMapped:!1};function Ao(n,e,{align:t="left",weight:i=500}={}){const r=`${i} 48px Poppins, Arial, sans-serif`,a=document.createElement("canvas"),o=a.getContext("2d");o.font=r;const l=Math.ceil(o.measureText(n).width)+32;a.width=l,a.height=68,o.font=r,o.textBaseline="middle",o.shadowColor="rgba(0, 0, 0, 0.85)",o.shadowBlur=12,o.fillStyle=e,o.fillText(n,16,a.height/2);const c=new kv(a);c.colorSpace=ft;const u=new Tv(new K0({map:c,transparent:!0,depthWrite:!1,toneMapped:!1}));return u.center.set(t==="left"?0:t==="right"?1:.5,.5),u.userData.aspect=a.width/a.height,u.renderOrder=3,u.frustumCulled=!1,u}const $g=new x;function pl(n){n.getWorldPosition($g);const t=2*H.position.distanceTo($g)*Math.tan(H.fov*Math.PI/360)*Fy*34/24/window.innerHeight;n.scale.set(t*n.userData.aspect,t,1)}function pD(n){return new Et({...vA,uniforms:{uOpacity:{value:0},uColour:{value:new Se(n)}},vertexShader:`
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
            }`})}function mD(n,e){return new Et({...vA,side:Gt,uniforms:{uOpacity:{value:0},uTime:{value:0},uColour:{value:new Se(n)},uRainbow:{value:e?1:0}},vertexShader:`
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
            }`})}function gD(n){return new Et({...vA,side:Gt,uniforms:{uOpacity:{value:0},uTime:{value:0},uColour:{value:new Se(n)}},vertexShader:`
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
            }`})}const Xo=new Map;function Ny(n,e){const t=Xo.get(n);if(!e)return t&&(t.layersTarget=0,t.beams.forEach(o=>{o.target=0})),!0;const i=j.get(n),s=i?.data.atmosphere;if(!s)return console.warn(`No atmosphere for "${n}" in data.json`),!1;const r=t??_D(i,s);r.spec=e,r.layersTarget=e.layers===!1?0:1;const a=e.light===!1?[]:e.light===void 0||e.light===!0?r.beams.map(o=>o.band):e.light;return r.beams.forEach(o=>{o.target=a.includes(o.band)?1:0}),Xo.set(n,r),!0}const e0=["#66EEFA","#7DFFD3","#A6B5F8","#FFB4FF","#FFF488"],xD={gamma:"#FFB4FF",xray:"#D2C4FF",euv:"#A68CFF",uv:"#66EEFA",visible:"#FFFFFF",infrared:"#FF9A7A",radio:"#7DFFD3"};function _D(n,e){const t=new jt;t.matrixAutoUpdate=!1;const i=new jt;Ve.add(t,i);const s=new qi(1,96,48),r=(e.layers??[]).map((f,A)=>{const g=f.colour??e0[A%e0.length],m=new Ye(s,pD(g));m.frustumCulled=!1,m.renderOrder=2,i.add(m);const p=Ao(f.name,g);return t.add(p),{...f,mesh:m,label:p}}),a=Math.max(Zg,...r.map(f=>f.top_km).filter(f=>f<=Zg*1.5)),o=[];for(let f=0;f<=a;f+=50)o.push({km:f,label:Ao(f?`${f} km`:"ground","#ffffff",{align:"right",weight:400})});const l=new Ke;l.setAttribute("position",new ze(new Float32Array((2+o.length*2)*3),3));const c=new Oo(l,new Rs({color:16777215,transparent:!0,opacity:0,depthWrite:!1}));c.frustumCulled=!1,t.add(c),o.forEach(f=>t.add(f.label));const u=Ao("","#ffffff",{align:"right",weight:400});t.add(u);const h=new ws(1,1),d=(e.absorption??[]).map(f=>{const A=f.colour??xD[f.band]??"#ffffff",g=new Ye(new ws(1,1,1,24),mD(A,f.band==="visible")),m=new Ye(h,gD(A));[g,m].forEach(E=>{E.frustumCulled=!1,E.matrixAutoUpdate=!1,E.renderOrder=3,t.add(E)});const p=Ao(f.label??f.band,A,{align:"center"});return t.add(p),{...f,beam:g,glow:m,label:p,opacity:0,target:0}});return{obj:n,params:e,group:t,shells:i,layers:r,beams:d,ticks:o,rulerLine:c,scaleLabel:u,top:a,layersOpacity:0,layersTarget:0,spec:{},builtExaggerate:null}}function yD(n,e){Ve.remove(e.group,e.shells),e.group.traverse(t=>{t.geometry?.dispose(),t.material?.map?.dispose(),t.material?.dispose()}),e.shells.traverse(t=>{t.material?.dispose()}),e.layers[0]?.mesh.geometry.dispose(),Xo.delete(n)}const co=new x,ml=new x,sd=new x,gl=new x,t0=new ge,n0=new ge,i0=new ct,ED=new x(0,0,1),Gn=new x,vD=new x;function s0(n,e,t){return e>n?Math.min(e,n+t):Math.max(e,n-t)}function MD(n,e,t,i){const s=e/dD;if(n.layersOpacity=s0(n.layersOpacity,n.layersTarget,s),n.beams.forEach(v=>{v.opacity=s0(v.opacity,v.target,s)}),n.layersOpacity===0&&n.layersTarget===0&&n.beams.every(v=>v.opacity===0&&v.target===0)){yD(t,n);return}const{obj:r,spec:a}=n;r.mesh.updateWorldMatrix(!0,!1),r.mesh.getWorldPosition(co);const o=r.data.radius||1,l=a.exaggerate??fD,c=rA(r)*l,u=v=>o+v*c;ml.subVectors(H.position,co).normalize(),gl.set(0,1,0).applyQuaternion(H.quaternion),sd.crossVectors(gl,ml).normalize(),gl.crossVectors(ml,sd),t0.makeBasis(sd,gl,ml).setPosition(co),n.group.matrix.copy(t0),n.group.matrixWorldNeedsUpdate=!0,n.shells.position.copy(co);const h=(a.angle??45)*Math.PI/180,d=(a.span??40)*Math.PI/180,f=H.position.distanceTo(co),A=(v,y,b,R=0)=>a_(v,y,f,R,b),g=h-d/2-.05,m=window.innerHeight/(2*f*Math.tan(H.fov*Math.PI/360));let p=0,E=-1/0;n.layers.forEach(v=>{const y=Math.min(v.top_km,n.top*1.15);v.mesh.scale.setScalar(u(y)),v.mesh.visible=n.layersOpacity>0,v.mesh.material.uniforms.uOpacity.value=n.layersOpacity*.4,A(g,u((p+y)/2),v.label.position);const b=u((p+y)/2),R=(b-E)*m>Fy*1.3;R&&(E=b),v.label.material.opacity=n.layersOpacity,v.label.visible=n.layersOpacity>0&&R,v.label.material.rotation=g-Math.PI/2,pl(v.label),p=y});const _=h+d/2+.06,S=n.rulerLine.geometry.attributes.position;let w=0;const C=()=>S.setXYZ(w++,Gn.x,Gn.y,0);if(A(_,u(0),Gn),C(),A(_,u(n.top),Gn),C(),n.ticks.forEach(v=>{A(_,u(v.km),Gn),C(),A(_+.012,u(v.km),Gn),C(),A(_+.016,u(v.km),v.label.position),v.label.material.rotation=_-Math.PI/2,v.label.center.set(0,.5),v.label.material.opacity=n.layersOpacity*.85,v.label.visible=n.layersOpacity>0,pl(v.label)}),S.needsUpdate=!0,n.rulerLine.material.opacity=n.layersOpacity*.6,n.rulerLine.visible=n.layersOpacity>0,n.builtExaggerate!==l){const v=Ao(`heights × ${l}`,"#ffffff",{weight:400});n.scaleLabel.material.map.dispose(),n.scaleLabel.material.map=v.material.map,n.scaleLabel.userData.aspect=v.userData.aspect,n.scaleLabel.material.needsUpdate=!0,n.builtExaggerate=l}A(_+.07,u(n.top*.5),n.scaleLabel.position),n.scaleLabel.center.set(.5,.5),n.scaleLabel.material.rotation=_-Math.PI/2+Math.PI/2,n.scaleLabel.material.opacity=n.layersOpacity*.7,n.scaleLabel.visible=n.layersOpacity>0,pl(n.scaleLabel);const B=n.beams.length,P=o*AD;n.beams.forEach((v,y)=>{const b=h+d/2-(B>1?d*y/(B-1):d/2),R=u(n.top),U=u(Math.max(0,v.stops_km)),Q=v.opacity>0;if(v.beam.visible=v.glow.visible=v.label.visible=Q,!Q)return;const F=v.beam.geometry.attributes.position,k=v.beam.geometry.attributes.uv;for(let X=0;X<F.count;X++)A(b,U+k.getY(X)*(R-U),Gn,(k.getX(X)-.5)*P),F.setXYZ(X,Gn.x,Gn.y,Gn.z);F.needsUpdate=!0,v.beam.matrix.identity(),v.beam.matrixWorldNeedsUpdate=!0,i0.setFromAxisAngle(ED,b-Math.PI/2),v.beam.material.uniforms.uOpacity.value=v.opacity,v.beam.material.uniforms.uTime.value=i,A(b,U,Gn),n0.compose(Gn,i0,vD.set(P*7,P*7,1)),v.glow.matrix.copy(n0),v.glow.matrixWorldNeedsUpdate=!0,v.glow.material.uniforms.uOpacity.value=v.opacity,v.glow.material.uniforms.uTime.value=i+y,A(b,R+o*.03,v.label.position),v.label.center.set(0,.5),v.label.material.rotation=b,v.label.material.opacity=v.opacity,pl(v.label)})}function SD(){[...Xo.keys()].forEach(n=>Ny(n,null))}function CD(n,e){for(const[t,i]of[...Xo])MD(i,n,t,e)}const r0=.8,ID=2.5,wD=30,Yo=new Map;let rd=null;function bD(n){return new Et({transparent:!0,depthWrite:!1,blending:Ss,toneMapped:!1,side:Gt,uniforms:{uOpacity:{value:0},uColour:{value:new Se(n)},uTime:{value:0}},vertexShader:`
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
            }`})}function Qy(n,e){const t=Yo.get(n);if(!e)return t&&(t.target=0),rd===n&&(pf(null),rd=null),!0;const i=j.get(e.from);if(!i)return console.warn(`Pointing "${n}": no object called "${e.from}"`),!1;const s=(e.cone_deg??ID)*Math.PI/180,r=new Qf(Math.tan(s),1,48,1,!0).translate(0,-.5,0),a=t??{id:n,opacity:0};return a.mesh&&(Ve.remove(a.mesh),a.mesh.geometry.dispose(),a.mesh.material.dispose()),a.mesh=new Ye(r,bD(e.colour??"#66EEFA")),a.mesh.frustumCulled=!1,a.mesh.renderOrder=2,a.mesh.visible=!1,Ve.add(a.mesh),a.obj=i,a.dir=bs({ra:e.ra,dec:e.dec??0}),a.target=e.opacity??1,Yo.set(n,a),e.image&&(pf({ra:e.ra,dec:e.dec??0,image:e.image,size_deg:e.size_deg}),rd=n),!0}const TD=new x(0,-1,0),ad=new x;function BD(n,e){for(const t of[...Yo.values()]){if(t.opacity=t.target>t.opacity?Math.min(t.target,t.opacity+n/r0):Math.max(t.target,t.opacity-n/r0),t.opacity===0&&t.target===0){Ve.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),Yo.delete(t.id);continue}t.obj.mesh.updateWorldMatrix(!0,!1),t.obj.mesh.getWorldPosition(ad),t.mesh.position.copy(ad),t.mesh.quaternion.setFromUnitVectors(TD,t.dir),t.mesh.scale.setScalar(Math.max(1e-6,H.position.distanceTo(ad)*wD)),t.mesh.visible=t.obj.group.visible,t.mesh.material.uniforms.uOpacity.value=t.opacity,t.mesh.material.uniforms.uTime.value=e}}function RD(){[...Yo.keys()].forEach(n=>Qy(n,null))}let a0=0;const DD=window.devicePixelRatio,Oy=Math.min(DD,1.25),lo=[1,.85,.72],LD=13,PD=9,UD=40,FD=3e3,It={step:0,changedAt:0,lastFrame:0,gpu:[],intervals:[],timer:null};function ND(){const n=Ge.getContext(),e=n.getExtension("EXT_disjoint_timer_query_webgl2");return e?{gl:n,ext:e,pending:[],query:null}:null}function QD(n){It.lastFrame&&n-It.lastFrame<250&&o0(It.intervals,n-It.lastFrame),It.lastFrame=n;const e=It.timer;if(!e)return;const{gl:t,ext:i}=e,s=t.getParameter(i.GPU_DISJOINT_EXT);for(;e.pending.length&&t.getQueryParameter(e.pending[0],t.QUERY_RESULT_AVAILABLE);){const r=e.pending.shift();s||o0(It.gpu,t.getQueryParameter(r,t.QUERY_RESULT)/1e6),t.deleteQuery(r)}e.pending.length<4&&(e.query=t.createQuery(),t.beginQuery(i.TIME_ELAPSED_EXT,e.query))}function OD(n){const e=It.timer;if(e&&e.query&&(e.gl.endQuery(e.ext.TIME_ELAPSED_EXT),e.pending.push(e.query),e.query=null),n-It.changedAt<FD)return;const t=s=>[...s].sort((r,a)=>r-a)[s.length>>1];let i=It.step;if(e){if(It.gpu.length<90)return;const s=t(It.gpu),r=It.step>0?(lo[It.step-1]/lo[It.step])**2:0;s>LD&&It.step<lo.length-1?i++:r&&s*r<PD&&i--}else{if(It.intervals.length<90)return;t(It.intervals)>UD&&It.step<lo.length-1&&i++}i!==It.step&&(It.step=i,It.changedAt=n,It.gpu.length=0,It.intervals.length=0,Ge.setPixelRatio(Oy*lo[i]))}function o0(n,e){n.push(e),n.length>120&&n.shift()}const Pi=new x,c0=new x,kD=new ct,xf=new ct,_f=new x(0,1,0);function l0(n,e){n.meshGroup.quaternion.copy(n.axis).multiply(xf.setFromAxisAngle(_f,e))}const GD=new ct,zD=new x(1,0,0);function HD(n,e,t){n.meshGroup.quaternion.copy(n.axis).multiply(xf.setFromAxisAngle(_f,t)).multiply(GD.setFromAxisAngle(zD,n.tumble.nutation)).multiply(xf.setFromAxisAngle(_f,e-t))}const ky=[];function VD(n){ky.push(n)}let od=null;function WD(){if(od?.length===j.size)return od;const n=[],e=new Set,t=i=>{if(!i||e.has(i))return;e.add(i);const s=i.data;[s.parent,s.lagrange?.body,s.trajectory?.waypoints?.at(-1)?.at].forEach(r=>t(j.get(r))),n.push(i)};return j.forEach(t),od=n}function Gy(){requestAnimationFrame(Gy);const n=K1.getDelta(),e=Math.min(n,Cb);J1(e);const t=mr===null?e:0,i=ti;JT(),w1(),xn.setTime(xn.getTime()+n*Yx*1e3);const s=Ua(xn);if(pr.length>0&&xu(),IR(e),nA(),Jf.forEach(a=>{a.uniforms.uTime.value=i}),a0++,a0%10===0&&TR(),WD().forEach(a=>{const{group:o,meshGroup:l,data:c}=a;if(c.orbit_type==="landed")return;hB(a.orbitLine,s);let u;if(c.orbit_type==="trajectory"){const h=Kb(a,s,o.position);wB(a,h)}else if(c.lagrange){const h=j.get(c.lagrange.body).group.position;Pi.copy(h).normalize().multiplyScalar(c.lagrange.offset),o.position.copy(h).add(Pi),a.mesh.rotation.set(0,Math.atan2(-h.z,h.x),0)}else if(c.orbit_type==="libration"){const h=j.get(c.parent);h&&(Mx(c.orbit,s,Pi).applyQuaternion(h.mesh.quaternion),o.position.copy(h.group.position).add(Pi))}else if(c.orbit_type==="suborbital"){const h=j.get(c.parent);if(h){const d=h.data.radius||1,f=c.suborbital.duration||.05;let A=s;c.suborbital.progress!==void 0&&(A=c.suborbital.progress*f);const g=Xm(c.suborbital,d,A),m=Xm(c.suborbital,d,A+1e-4);g.applyEuler(h.meshGroup.rotation),m.applyEuler(h.meshGroup.rotation),o.position.set(h.group.position.x+g.x,h.group.position.y+g.y,h.group.position.z+g.z),Pi.subVectors(m,g).normalize(),c0.copy(o.position).add(Pi),o.lookAt(c0),l.rotation.z-=e*.5}}else if(u=vi(c.orbit,Sx(c.orbit,s)),c.parent&&c.parent!=="Sun"){const h=j.get(c.parent);h&&o.position.set(h.group.position.x+u.x,h.group.position.y+u.y,h.group.position.z+u.z)}else o.position.set(u.x,u.y,u.z);if(!(!o.visible&&!c.isParent))if(c.rotation_mode==="utc"){Pi.copy(o.position).negate().applyQuaternion(kD.copy(a.axis).invert());const h=Math.atan2(Pi.x,Pi.z),d=xn.getUTCHours(),f=xn.getUTCMinutes(),A=xn.getUTCSeconds(),g=xn.getUTCMilliseconds(),p=((d+f/60+A/3600+g/36e5)/24-.5)*Math.PI*2;l0(a,h-Math.PI/2+p)}else if(c.rotation_mode==="locked"&&c.orbit)Hb(l,c.orbit,s);else if(c.rot_period){const h=s/c.rot_period*Math.PI*2,d=(c.rot_offset||0)*(Math.PI/180);a.tumble?HD(a,h+d,h/a.tumble.precession+a.tumble.offset):l0(a,h+d)}else c.type==="mission"&&c.orbit_type!=="suborbital"&&cB(a,i,t,s)}),!cR(e,i))return;B1(),NB(),c3(e),YR(e),QR(e),L2(e),hD(e),CD(e,i),BD(e,i),y2(e);for(const a of ky)a(e);if(Ft.relative){_B(H.position,s);const a=C_(),o=a&&j.get(a.userData.name);o?.data.orbit_type==="landed"&&!gA()&&Kf(o)}cr&&cr.update(i,H,{strandsTime:Pa.matches?0:i});const r=performance.now();QD(r),I2(),OD(r)}window.addEventListener("resize",()=>{H.aspect=window.innerWidth/window.innerHeight,H.updateProjectionMatrix(),Ge.setSize(window.innerWidth,window.innerHeight),j.forEach(n=>{n.orbitLine&&n.orbitLine.material.resolution&&n.orbitLine.material.resolution.set(window.innerWidth,window.innerHeight)})});const cd=new dn,u0=new ge,Es=new x,Xs=new x,ld=new x,h0=new x;function zy(n){const e=n.mesh;let t=0,i=0,s=0;if(e.traverse(l=>{l.geometry&&(t++,i+=l.geometry.id,s=Math.imul(s,31)+l.geometry.id|0)}),!t)return null;const r=n.reticleSphereKey;if(r&&r.count===t&&r.sum===i&&r.mix===s)return n.reticleSphere;e.updateWorldMatrix(!0,!0),u0.copy(e.matrixWorld).invert();const a=new dn;let o=!0;return e.traverse(l=>{l.geometry&&(l.geometry.boundingSphere||l.geometry.computeBoundingSphere(),cd.copy(l.geometry.boundingSphere).applyMatrix4(l.matrixWorld).applyMatrix4(u0),o?(a.copy(cd),o=!1):a.union(cd))}),n.reticleSphereKey={count:t,sum:i,mix:s},n.reticleSphere=a,a}function qD(n){if(!n||!n.mesh||!En(n.group))return null;n.mesh.updateWorldMatrix(!0,!1);const e=zy(n);if(!e)return null;Xs.copy(e.center).applyMatrix4(n.mesh.matrixWorld),n.mesh.getWorldScale(Es);const t=e.radius*Math.max(Es.x,Es.y,Es.z),i=H.position.distanceTo(Xs),s=i<=t;if(h0.setFromMatrixColumn(H.matrixWorld,1),ld.copy(Xs).addScaledVector(h0,t).project(H),Xs.project(H),Xs.z>1)return null;const r=window.innerWidth,a=window.innerHeight,o=(Xs.x*.5+.5)*r,l=(-Xs.y*.5+.5)*a,c=(ld.x*.5+.5)*r,u=(-ld.y*.5+.5)*a;return{cx:o,cy:l,bodyR:s?1/0:Math.hypot(c-o,u-l),distance:i,w:r,h:a}}const XD=new Set(["planet","moon","asteroid","comet"]);function YD(n){const e=[];for(const t of n){if(!XD.has(t.data.type)||!t.mesh||!En(t.group))continue;const i=zy(t);i&&(t.mesh.updateWorldMatrix(!0,!1),t.mesh.getWorldScale(Es),e.push({obj:t,centre:i.center.clone().applyMatrix4(t.mesh.matrixWorld),r:i.radius*Math.max(Es.x,Es.y,Es.z)*.999}))}return e}const d0=new x,xl=new x,f0=new x;function KD(n,e){if(!n||!n.mesh)return null;n.mesh.getWorldPosition(d0),xl.subVectors(d0,H.position);const t=xl.lengthSq();if(!(t>0))return null;let i=null,s=1/0;for(const{obj:r,centre:a,r:o}of e){if(r===n)continue;const l=et.clamp(f0.subVectors(a,H.position).dot(xl)/t,0,1);l<1&&l<s&&f0.copy(H.position).addScaledVector(xl,l).distanceToSquared(a)<o*o&&(i=r,s=l)}return i}const yf=new uu,ud=new Me;function JD(n){for(let e=n;e;e=e.parent){if(!e.visible)return!1;if(e===Ve)return!0}return!1}function jD(n){const e=[],t=i=>{i.visible&&(i.layers.test(yf.layers)&&i.raycast(yf,e),i.children.forEach(t))};return n.forEach(i=>{JD(i)&&t(i)}),e.sort((i,s)=>i.distance-s.distance)}function ZD(n,e){ud.x=n/window.innerWidth*2-1,ud.y=-(e/window.innerHeight)*2+1,yf.setFromCamera(ud,H);const t=jD(Kd);if(!t.length)return null;let i=t[0].object,s=0;for(;i&&!i.userData.name&&s<10;)i=i.parent,s++;return i&&i.userData&&i.userData.name?i.userData.name:null}const $D="#66EEFA";let Hy=new Set,Vy=new Set;function eL({hovered:n=[],shown:e=[]}={}){Hy=new Set(n),Vy=new Set(e),Su()}function Su(){let n=null;j.forEach(e=>{e.mesh===ue&&e.data.type==="reference_point"&&(n=e.data.name)}),j.forEach(e=>{if(e.orbitLine&&e.orbitLine.material){const t=Hy.has(e.data.name),i=ue===e.mesh||n!==null&&e.data.parent===n,s=Vy.has(e.data.name),r=e.orbitLine.material,a=e.orbitLine.userData.baseColor||"#888888",o=e.orbitLine.userData.baseOpacity||.35;t||i||s?(r.opacity=.95,r.color.set($D)):(r.opacity=o,r.color.set(a))}})}_u("select",Su);_u("deselect",Su);_u("orbit-change",Su);const tL=4,nL=.04,iu=new uu,hd=new x,A0=new x,p0=new Me,_l=new x,m0=new Map;function MA(n){return(n.data.built?.modelSize??n.data.model_size??1)/2}function Wy(n){return n.detailRoot?.children.find(e=>e.visible)??null}function iL(n,e,t){return!n?.detailRoot||!Array.isArray(e)?null:(n.mesh.updateWorldMatrix(!0,!1),t.set(e[0]||0,e[1]||0,e[2]||0).multiplyScalar(MA(n)).applyMatrix4(n.mesh.matrixWorld))}function sL(n,e,t){const i=`${n.data.name}|${e.join(",")}`,s=Ge.info.render.frame,r=m0.get(i);if(r&&s-r.frame<tL&&s>=r.frame)return r.hidden;const a=Wy(n);let o=!1;if(a){hd.subVectors(t,H.position);const l=hd.length();iu.set(H.position,hd.normalize());const c=gu(iu,a);n.mesh.getWorldScale(A0);const u=nL*2*MA(n)*A0.x;o=!!c&&c.distance<l-u}return m0.set(i,{frame:s,hidden:o}),o}function rL(n,e,t){const i=j.get(n),s=i&&Wy(i);if(!s||!En(i.group))return null;H.updateMatrixWorld(),p0.set(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),iu.setFromCamera(p0,H);const r=gu(iu,s);return r?(i.mesh.updateWorldMatrix(!0,!1),_l.copy(r.point).applyMatrix4(i.mesh.matrixWorld.clone().invert()).divideScalar(MA(i)),[_l.x,_l.y,_l.z].map(a=>Math.round(a*1e3)/1e3)):null}Xf.onProgress=function(n,e,t){an("progress",{progress:e/t})};let SA=!1;const yl={frame:-1,spheres:[]};function aL(){const n=Ge.info.render.frame;return yl.frame!==n&&(yl.frame=n,yl.spheres=YD(j.values())),yl.spheres}const Pn={frame:-1,view:new ge,lens:new ge,w:0,h:0,places:new Map,hiders:new Map};function qy(){const n=Ge.info.render.frame;return(Pn.frame!==n||!Pn.view.equals(H.matrixWorld)||!Pn.lens.equals(H.projectionMatrix)||Pn.w!==window.innerWidth||Pn.h!==window.innerHeight)&&(Pn.frame=n,Pn.view.copy(H.matrixWorld),Pn.lens.copy(H.projectionMatrix),Pn.w=window.innerWidth,Pn.h=window.innerHeight,Pn.places.clear(),Pn.hiders.clear()),Pn}function g0(n){const{hiders:e}=qy();return e.has(n)||e.set(n,KD(j.get(n),aL())),e.get(n)}Xf.onLoad=()=>{SA&&oL()};let x0=!1;function oL(){if(x0){y0();return}x0=!0,performance.mark("warmup-start");const n=Rx(Ve);Ve.background&&Ve.background.isTexture&&n.add(Ve.background),n.forEach(t=>{try{Ge.initTexture(t)}catch(i){console.warn("Texture upload failed",i)}});const e=5e3;Promise.race([Promise.all([Ge.compileAsync(Ve,H),Lx(Ve)]).then(()=>performance.mark("warmup-shaders-ready")).catch(t=>console.warn("Shader warm-up failed",t)),new Promise(t=>setTimeout(t,e))]).then(y0)}let _0=!1;function y0(){_0||(_0=!0,performance.mark("scene-ready"),Xy(),an("ready"))}function Xy(){m2(),U1()}function xL({canvas:n,dataUrl:e="./data.json",options:t={}}={}){for(const s of Object.keys(Ea))s in t&&(Ea[s]=t[s]);return hT(n),Ge.setPixelRatio(Oy),Ge.setSize(window.innerWidth,window.innerHeight),Ge.shadowMap.enabled=!0,Ge.shadowMap.type=Ef,Ge.toneMapping=T0,Ge.toneMappingExposure=1.2,Ge.debug.checkShaderErrors=!1,It.timer=ND(),vy.detectSupport(Ge),yy.forEach(s=>fetch(`textures/milky_way_${s}.ktx2`).catch(()=>{})),yR(),{canvas:Ge.domElement,start(){uL(e),Gy()},on:_u,onFrame:VD,flyTo:iR,showOverview:b_,deselect:w_,hurry(){CR(),fA()},isChangingScale:gA,getDate:Z1,setDate:$1,setTimeRate:eB,holdOrbits(s,r){Wb(s,r),i_()},getObject:v0,listObjects:Yy,projectBody(s){H.updateMatrixWorld();const{places:r}=qy();if(r.has(s))return r.get(s);const a=qD(j.get(s)),o=a&&{x:a.cx,y:a.cy,radius:a.bodyR,distance:a.distance};return r.set(s,o),o},projectPoint(s,{lat:r=0,lon:a=0,alt_km:o=0}={}){const l=j.get(s);if(!l||!En(l.group))return null;H.updateMatrixWorld(),e3(l,r,a,o,un,E0);const c=E0.dot(cL.subVectors(H.position,un))>0;return un.project(H),un.z>1?null:{x:(un.x*.5+.5)*window.innerWidth,y:(-un.y*.5+.5)*window.innerHeight,facing:c}},projectPart(s,r){const a=j.get(s);if(!a||!En(a.group)||(H.updateMatrixWorld(),!iL(a,r,un)))return null;const o=sL(a,r,un);return un.project(H),un.z>1?null:{x:(un.x*.5+.5)*window.innerWidth,y:(-un.y*.5+.5)*window.innerHeight,hidden:o}},pickPart:rL,projectSky(s,r=0){return H.updateMatrixWorld(),un.copy(bs({ra:s,dec:r})).multiplyScalar(H.far*.1).add(H.position).project(H),un.z>1?null:{x:(un.x*.5+.5)*window.innerWidth,y:(-un.y*.5+.5)*window.innerHeight}},setPointing:Qy,clearPointings:RD,setSkySurvey:x2,setSkyPatch:pf,addLayer:R2,removeLayer:_A,clearLayers:D2,setSurfaceOverlay:Ty,setMagnetosphere:Ly,addCme:aD,removeCme:EA,cmeArrival:lD,clearSpaceWeather:uD,getStormLevel:Uy,setAtmosphere:Ny,clearAtmospheres:SD,setSunCycle(s){if(!cr)return;if(!s){cr.setCycle(null);return}const{map:r,at:a,look:o,gain:l}=s;cr.setCycle({map:r?lL(r):void 0,u:a,gain:l,look:o===void 0?void 0:o==="magnetogram"?1:0})},isHidden(s){return!!g0(s)},hiddenBehind(s){return g0(s)?.data.name??null},getSelection(){return ue?ue.userData:null},getTime(){return xn.getTime()},getSystem:Ar,getOrbitColor(s){return rf(v0(s))},pick:ZD,setOrbitHighlights:eL,setScaleMode:hL,getScaleMode:()=>ki,setMotionPaused(s){j1(s?ti:null)},setViewInsets:a3,setFlightPace:V3,setUserControl:sR,nudgeView:T_,setSceneVisible:u2,loadDeferred:Xy}}const un=new x,E0=new x,cL=new x,dd=new Map;function lL(n){if(!dd.has(n)){const e=jo.load(Ts(n),void 0,void 0,()=>console.warn(`Solar cycle map didn't load: ${n}`));e.wrapS=e.wrapT=Vn,dd.set(n,e)}return dd.get(n)}async function uL(n){try{const e=await fetch(n);if(!e.ok)throw new Error(`data.json responded ${e.status}`);const t=await e.json(),i=t.filter(r=>r.type==="credits"),s=dL(t.filter(r=>r.type!=="credits"),Ea.edition);s.forEach(fL),mu(s),IB(s),xu(),an("built",{entries:[...s,...i]}),SA=!0,performance.mark("system-ready")}catch(e){console.error("Loading System Failed:",e),an("error",{error:e})}}function hL(n,{animate:e=!0}={}){if(!Jb.includes(n))throw new Error(`Unknown scale mode: ${n}`);if(!SA)return;if(gA()||e&&!Pa.matches){SR(n);return}if(n===ki)return;const t=Yy();mu(t,n),bB(),new Set(t.filter(i=>i.orbit_type==="landed").map(i=>i.parent)).forEach(i=>{const s=j.get(i);s&&Zo(s)}),uR(),an("scale-mode",{mode:n})}function Yy(){return[...j.values()].map(n=>n.data)}function v0(n){return j.get(n)?.data??null}function dL(n,e){if(!e)return n;const t=new Map(n.filter(s=>s.editions?.includes(e)).map(s=>[s.name,s])),i=s=>[s.parent,s.menu_parent,s.system].filter(Boolean);for(let s=!0;s;){s=!1;for(const[r,a]of t){const o=i(a).find(l=>!t.has(l));o&&(console.warn(`"${r}" is in the ${e} edition, but "${o}" isn't; left out`),t.delete(r),s=!0)}}return n.filter(s=>t.has(s.name)).map(s=>{const r=s.in_edition?.[e];if(!r)return s;const a={...s};return Object.entries(r).forEach(([o,l])=>{a[o]=l&&typeof l=="object"&&!Array.isArray(l)?{...s[o],...l}:l}),a})}function fL(n){if(!Array.isArray(n.status_timeline))return;const e=new Date().toISOString().slice(0,10);for(const t of n.status_timeline)t.from&&t.status&&t.from<=e&&(n.status=t.status)}const M0=new Tn,El=new x;class Ky extends dM{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Dt(e,3)),this.setAttribute("uv",new Dt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Wd(t,6,1);return this.setAttribute("instanceStart",new Wn(i,3,0)),this.setAttribute("instanceEnd",new Wn(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Wd(t,6,1);return this.setAttribute("instanceColorStart",new Wn(i,3,0)),this.setAttribute("instanceColorEnd",new Wn(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Xv(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),M0.setFromBufferAttribute(t),this.boundingBox.union(M0))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dn),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)El.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(El)),El.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(El));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}le.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Me(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};wn.line={uniforms:Df.merge([le.common,le.fog,le.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Jy extends Et{constructor(e){super({type:"LineMaterial",uniforms:Df.clone(wn.line.uniforms),vertexShader:wn.line.vertexShader,fragmentShader:wn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const fd=new ot,S0=new x,C0=new x,$t=new ot,en=new ot,oi=new ot,Ad=new x,pd=new ge,tn=new wM,I0=new x,vl=new Tn,Ml=new dn,ci=new ot;let Ai,ur;function w0(n,e,t){return ci.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),ci.multiplyScalar(1/ci.w),ci.x=ur/t.width,ci.y=ur/t.height,ci.applyMatrix4(n.projectionMatrixInverse),ci.multiplyScalar(1/ci.w),Math.abs(Math.max(ci.x,ci.y))}function AL(n,e){const t=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,a=Math.min(i.instanceCount,s.count);for(let o=0,l=a;o<l;o++){tn.start.fromBufferAttribute(s,o),tn.end.fromBufferAttribute(r,o),tn.applyMatrix4(t);const c=new x,u=new x;Ai.distanceSqToSegment(tn.start,tn.end,u,c),u.distanceTo(c)<ur*.5&&e.push({point:u,pointOnLine:c,distance:Ai.origin.distanceTo(u),object:n,face:null,faceIndex:o,uv:null,uv1:null})}}function pL(n,e,t){const i=e.projectionMatrix,r=n.material.resolution,a=n.matrixWorld,o=n.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,u=Math.min(o.instanceCount,l.count),h=-e.near;Ai.at(1,oi),oi.w=1,oi.applyMatrix4(e.matrixWorldInverse),oi.applyMatrix4(i),oi.multiplyScalar(1/oi.w),oi.x*=r.x/2,oi.y*=r.y/2,oi.z=0,Ad.copy(oi),pd.multiplyMatrices(e.matrixWorldInverse,a);for(let d=0,f=u;d<f;d++){if($t.fromBufferAttribute(l,d),en.fromBufferAttribute(c,d),$t.w=1,en.w=1,$t.applyMatrix4(pd),en.applyMatrix4(pd),$t.z>h&&en.z>h)continue;if($t.z>h){const _=$t.z-en.z,S=($t.z-h)/_;$t.lerp(en,S)}else if(en.z>h){const _=en.z-$t.z,S=(en.z-h)/_;en.lerp($t,S)}$t.applyMatrix4(i),en.applyMatrix4(i),$t.multiplyScalar(1/$t.w),en.multiplyScalar(1/en.w),$t.x*=r.x/2,$t.y*=r.y/2,en.x*=r.x/2,en.y*=r.y/2,tn.start.copy($t),tn.start.z=0,tn.end.copy(en),tn.end.z=0;const g=tn.closestPointToPointParameter(Ad,!0);tn.at(g,I0);const m=et.lerp($t.z,en.z,g),p=m>=-1&&m<=1,E=Ad.distanceTo(I0)<ur*.5;if(p&&E){tn.start.fromBufferAttribute(l,d),tn.end.fromBufferAttribute(c,d),tn.start.applyMatrix4(a),tn.end.applyMatrix4(a);const _=new x,S=new x;Ai.distanceSqToSegment(tn.start,tn.end,S,_),t.push({point:S,pointOnLine:_,distance:Ai.origin.distanceTo(S),object:n,face:null,faceIndex:d,uv:null,uv1:null})}}}class mL extends Ye{constructor(e=new Ky,t=new Jy({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let a=0,o=0,l=t.count;a<l;a++,o+=2)S0.fromBufferAttribute(t,a),C0.fromBufferAttribute(i,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+S0.distanceTo(C0);const r=new Wd(s,2,1);return e.setAttribute("instanceDistanceStart",new Wn(r,1,0)),e.setAttribute("instanceDistanceEnd",new Wn(r,1,1)),this}raycast(e,t){const i=this.material.worldUnits,s=e.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Ai=e.ray;const a=this.matrixWorld,o=this.geometry,l=this.material;ur=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),Ml.copy(o.boundingSphere).applyMatrix4(a);let c;if(i)c=ur*.5;else{const h=Math.max(s.near,Ml.distanceToPoint(Ai.origin));c=w0(s,h,l.resolution)}if(Ml.radius+=c,Ai.intersectsSphere(Ml)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),vl.copy(o.boundingBox).applyMatrix4(a);let u;if(i)u=ur*.5;else{const h=Math.max(s.near,vl.distanceToPoint(Ai.origin));u=w0(s,h,l.resolution)}vl.expandByScalar(u),Ai.intersectsBox(vl)!==!1&&(i?AL(this,t):pL(this,s,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(fd),this.material.uniforms.resolution.value.set(fd.z,fd.w))}}class gL extends Ky{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,i=new Float32Array(2*t);for(let s=0;s<t;s+=3)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5];return super.setPositions(i),this}setColors(e){const t=e.length-3,i=new Float32Array(2*t);for(let s=0;s<t;s+=3)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5];return super.setColors(i),this}setFromPoints(e){const t=e.length-1,i=new Float32Array(6*t);for(let s=0;s<t;s++)i[6*s]=e[s].x,i[6*s+1]=e[s].y,i[6*s+2]=e[s].z||0,i[6*s+3]=e[s+1].x,i[6*s+4]=e[s+1].y,i[6*s+5]=e[s+1].z||0;return super.setPositions(i),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class _L extends mL{constructor(e=new gL,t=new Jy({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}export{Ss as A,Vt as B,$0 as C,c2 as E,Dt as F,l2 as G,fM as I,Hn as K,wt as L,Ne as M,Kt as P,ct as Q,Cs as R,Et as S,zt as T,x as V,mb as W,Ye as a,Is as b,xL as c,yy as d,ft as e,et as f,jt as g,qi as h,ot as i,Ke as j,uu as k,Me as l,dn as m,Rs as n,Se as o,Ba as p,Jy as q,gL as r,_L as s,Lf as t,pM as u};
