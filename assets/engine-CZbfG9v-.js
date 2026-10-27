const Wr={ROTATE:0,DOLLY:1,PAN:2},zr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},BE=0,AA=1,RE=2,nf=1,DE=2,ni=3,kn=0,Vt=1,kt=2,Fi=0,qr=1,ms=2,pA=3,gA=4,LE=5,Gs=100,PE=101,UE=102,FE=103,NE=104,QE=200,OE=201,kE=202,GE=203,$h=204,ed=205,zE=206,HE=207,VE=208,WE=209,qE=210,XE=211,YE=212,KE=213,JE=214,td=0,nd=1,id=2,na=3,sd=4,rd=5,ad=6,od=7,i0=0,ZE=1,jE=2,ps=0,$E=1,s0=2,ey=3,ty=4,ny=5,iy=6,sy=7,mA="attached",ry="detached",r0=300,ir=301,ia=302,cd=303,ld=304,ql=306,xs=1e3,On=1001,vl=1002,tn=1003,sf=1004,to=1005,wt=1006,dl=1007,qn=1008,Ye=1009,a0=1010,o0=1011,xo=1012,rf=1013,sr=1014,cn=1015,Bn=1016,af=1017,of=1018,_o=1020,Xl=35902,Yl=35899,c0=1021,Eo=1022,Jt=1023,yo=1026,vo=1027,os=1028,cf=1029,cs=1030,lf=1031,uf=1033,Xr=33776,Zs=33777,Yr=33778,ro=33779,Ml=35840,ud=35841,sa=35842,Mo=35843,Sl=36196,So=37492,Co=37496,js=37808,hd=37809,dd=37810,fd=37811,Kr=37812,Ad=37813,pd=37814,gd=37815,md=37816,xd=37817,_d=37818,Ed=37819,yd=37820,vd=37821,ra=36492,Md=36494,Cl=36495,Il=36283,wl=36284,bl=36285,Tl=36286,Io=2300,wo=2301,Au=2302,xA=2400,_A=2401,EA=2402,ay=2500,oy=0,l0=1,Sd=2,cy=3200,u0=3201,h0=0,ly=1,oi="",dt="srgb",sn="srgb-linear",Bl="linear",_t="srgb",Ar=7680,yA=519,uy=512,hy=513,dy=514,d0=515,fy=516,Ay=517,py=518,gy=519,Cd=35044,vA="300 es",ci=2e3,Rl=2001;function f0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function bo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function my(){const n=bo("canvas");return n.style.display="block",n}const MA={};function Dl(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ie(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Ke(...n){const e="THREE."+n.shift();console.error(e,...n)}function To(...n){const e=n.join(" ");e in MA||(MA[e]=!0,Ie(...n))}function xy(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}class dr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let SA=1234567;const ao=Math.PI/180,aa=180/Math.PI;function Xn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function qe(n,e,t){return Math.max(e,Math.min(t,n))}function hf(n,e){return(n%e+e)%e}function _y(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Ey(n,e,t){return n!==e?(t-n)/(e-n):0}function oo(n,e,t){return(1-t)*n+t*e}function yy(n,e,t,i){return oo(n,e,1-Math.exp(-t*i))}function vy(n,e=1){return e-Math.abs(hf(n,e*2)-e)}function My(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Sy(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Cy(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Iy(n,e){return n+Math.random()*(e-n)}function wy(n){return n*(.5-Math.random())}function by(n){n!==void 0&&(SA=n);let e=SA+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ty(n){return n*ao}function By(n){return n*aa}function Ry(n){return(n&n-1)===0&&n!==0}function Dy(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ly(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Py(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),h=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),p=a((i-e)/2);switch(s){case"XYX":n.set(o*u,l*h,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*p,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*p,o*c);break;case"ZYZ":n.set(l*p,l*f,o*u,o*c);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function pt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const at={DEG2RAD:ao,RAD2DEG:aa,generateUUID:Xn,clamp:qe,euclideanModulo:hf,mapLinear:_y,inverseLerp:Ey,lerp:oo,damp:yy,pingpong:vy,smoothstep:My,smootherstep:Sy,randInt:Cy,randFloat:Iy,randFloatSpread:wy,seededRandom:by,degToRad:Ty,radToDeg:By,isPowerOfTwo:Ry,ceilPowerOfTwo:Dy,floorPowerOfTwo:Ly,setQuaternionFromProperEuler:Py,normalize:pt,denormalize:Wn};class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],d=r[a+0],f=r[a+1],p=r[a+2],m=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(h!==m||l!==d||c!==f||u!==p){let g=l*d+c*f+u*p+h*m;g<0&&(d=-d,f=-f,p=-p,m=-m,g=-g);let A=1-o;if(g<.9995){const y=Math.acos(g),_=Math.sin(y);A=Math.sin(A*y)/_,o=Math.sin(o*y)/_,l=l*A+d*o,c=c*A+f*o,u=u*A+p*o,h=h*A+m*o}else{l=l*A+d*o,c=c*A+f*o,u=u*A+p*o,h=h*A+m*o;const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-o*f,e[t+2]=c*p+u*f+o*d-l*h,e[t+3]=u*p-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),d=l(i/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class x{constructor(e=0,t=0,i=0){x.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(CA.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(CA.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pu.copy(this).projectOnVector(e),this.sub(pu)}reflect(e){return this.sub(pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pu=new x,CA=new ot;class Ne{constructor(e,t,i,s,r,a,o,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],p=i[8],m=s[0],g=s[3],A=s[6],y=s[1],_=s[4],S=s[7],w=s[2],C=s[5],B=s[8];return r[0]=a*m+o*y+l*w,r[3]=a*g+o*_+l*C,r[6]=a*A+o*S+l*B,r[1]=c*m+u*y+h*w,r[4]=c*g+u*_+h*C,r[7]=c*A+u*S+h*B,r[2]=d*m+f*y+p*w,r[5]=d*g+f*_+p*C,r[8]=d*A+f*S+p*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,p=t*h+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/p;return e[0]=h*m,e[1]=(s*c-u*i)*m,e[2]=(o*i-s*a)*m,e[3]=d*m,e[4]=(u*t-s*l)*m,e[5]=(s*r-o*t)*m,e[6]=f*m,e[7]=(i*l-c*t)*m,e[8]=(a*t-i*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(gu.makeScale(e,t)),this}rotate(e){return this.premultiply(gu.makeRotation(-e)),this}translate(e,t){return this.premultiply(gu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gu=new Ne,IA=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wA=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uy(){const n={enabled:!0,workingColorSpace:sn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_t&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(s.r=Jr(s.r),s.g=Jr(s.g),s.b=Jr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?Bl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return To("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return To("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[sn]:{primaries:e,whitePoint:i,transfer:Bl,toXYZ:IA,fromXYZ:wA,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dt},outputColorSpaceConfig:{drawingBufferColorSpace:dt}},[dt]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:IA,fromXYZ:wA,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dt}}}),n}const rt=Uy();function Ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Jr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let pr;class Fy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{pr===void 0&&(pr=bo("canvas")),pr.width=e.width,pr.height=e.height;const s=pr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=pr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ni(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ni(t[i]/255)*255):t[i]=Ni(t[i]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ny=0;class df{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=Xn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(mu(s[a].image)):r.push(mu(s[a]))}else r=mu(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function mu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fy.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let Qy=0;const xu=new x;class Gt extends dr{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,i=On,s=On,r=wt,a=qn,o=Jt,l=Ye,c=Gt.DEFAULT_ANISOTROPY,u=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=Xn(),this.name="",this.source=new df(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xu).x}get height(){return this.source.getSize(xu).y}get depth(){return this.source.getSize(xu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==r0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xs:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case vl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xs:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case vl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=r0;Gt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,i=0,s=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],m=l[2],g=l[6],A=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-m)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+m)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+A-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,S=(f+1)/2,w=(A+1)/2,C=(u+d)/4,B=(h+m)/4,P=(p+g)/4;return _>S&&_>w?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=C/i,r=B/i):S>w?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=C/s,r=P/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=B/r,s=P/r),this.set(i,s,r,t),this}let y=Math.sqrt((g-p)*(g-p)+(h-m)*(h-m)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(h-m)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+A-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Oy extends dr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Gt(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new df(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends Oy{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class A0 extends Gt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class p0 extends Gt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jn{constructor(e=new x(1/0,1/0,1/0),t=new x(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zn):zn.fromBufferAttribute(r,a),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jo.copy(i.boundingBox)),Jo.applyMatrix4(e.matrixWorld),this.union(Jo)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ba),Zo.subVectors(this.max,Ba),gr.subVectors(e.a,Ba),mr.subVectors(e.b,Ba),xr.subVectors(e.c,Ba),Vi.subVectors(mr,gr),Wi.subVectors(xr,mr),bs.subVectors(gr,xr);let t=[0,-Vi.z,Vi.y,0,-Wi.z,Wi.y,0,-bs.z,bs.y,Vi.z,0,-Vi.x,Wi.z,0,-Wi.x,bs.z,0,-bs.x,-Vi.y,Vi.x,0,-Wi.y,Wi.x,0,-bs.y,bs.x,0];return!_u(t,gr,mr,xr,Zo)||(t=[1,0,0,0,1,0,0,0,1],!_u(t,gr,mr,xr,Zo))?!1:(jo.crossVectors(Vi,Wi),t=[jo.x,jo.y,jo.z],_u(t,gr,mr,xr,Zo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xi=[new x,new x,new x,new x,new x,new x,new x,new x],zn=new x,Jo=new jn,gr=new x,mr=new x,xr=new x,Vi=new x,Wi=new x,bs=new x,Ba=new x,Zo=new x,jo=new x,Ts=new x;function _u(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ts.fromArray(n,r);const o=s.x*Math.abs(Ts.x)+s.y*Math.abs(Ts.y)+s.z*Math.abs(Ts.z),l=e.dot(Ts),c=t.dot(Ts),u=i.dot(Ts);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ky=new jn,Ra=new x,Eu=new x;class Sn{constructor(e=new x,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ky.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ra.subVectors(e,this.center);const t=Ra.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ra,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ra.copy(e.center).add(Eu)),this.expandByPoint(Ra.copy(e.center).sub(Eu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const _i=new x,yu=new x,$o=new x,qi=new x,vu=new x,ec=new x,Mu=new x;class Ms{constructor(e=new x,t=new x(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){yu.copy(e).add(t).multiplyScalar(.5),$o.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(yu);const r=e.distanceTo(t)*.5,a=-this.direction.dot($o),o=qi.dot(this.direction),l=-qi.dot($o),c=qi.lengthSq(),u=Math.abs(1-a*a);let h,d,f,p;if(u>0)if(h=a*l-o,d=a*o-l,p=r*u,h>=0)if(d>=-p)if(d<=p){const m=1/u;h*=m,d*=m,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(yu).addScaledVector($o,d),f}intersectSphere(e,t){_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),s=_i.dot(_i)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,i,s,r){vu.subVectors(t,e),ec.subVectors(i,e),Mu.crossVectors(vu,ec);let a=this.direction.dot(Mu),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qi.subVectors(this.origin,e);const l=o*this.direction.dot(ec.crossVectors(qi,ec));if(l<0)return null;const c=o*this.direction.dot(vu.cross(qi));if(c<0||l+c>a)return null;const u=-o*qi.dot(Mu);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xe{constructor(e,t,i,s,r,a,o,l,c,u,h,d,f,p,m,g){xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,h,d,f,p,m,g)}set(e,t,i,s,r,a,o,l,c,u,h,d,f,p,m,g){const A=this.elements;return A[0]=e,A[4]=t,A[8]=i,A[12]=s,A[1]=r,A[5]=a,A[9]=o,A[13]=l,A[2]=c,A[6]=u,A[10]=h,A[14]=d,A[3]=f,A[7]=p,A[11]=m,A[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/_r.setFromMatrixColumn(e,0).length(),r=1/_r.setFromMatrixColumn(e,1).length(),a=1/_r.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,f=a*h,p=o*u,m=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-m*c,t[9]=-o*l,t[2]=m-d*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,p=c*u,m=c*h;t[0]=d+m*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-p,t[6]=m+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,p=c*u,m=c*h;t[0]=d-m*o,t[4]=-a*h,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*u,t[9]=m-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,p=o*u,m=o*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+m,t[1]=l*h,t[5]=m*c+d,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,p=o*l,m=o*c;t[0]=l*u,t[4]=m-d*h,t[8]=p*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-m*h}else if(e.order==="XZY"){const d=a*l,f=a*c,p=o*l,m=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+m,t[5]=a*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=o*u,t[10]=m*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gy,e,zy)}lookAt(e,t,i){const s=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Xi.crossVectors(i,wn),Xi.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Xi.crossVectors(i,wn)),Xi.normalize(),tc.crossVectors(wn,Xi),s[0]=Xi.x,s[4]=tc.x,s[8]=wn.x,s[1]=Xi.y,s[5]=tc.y,s[9]=wn.y,s[2]=Xi.z,s[6]=tc.z,s[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],p=i[2],m=i[6],g=i[10],A=i[14],y=i[3],_=i[7],S=i[11],w=i[15],C=s[0],B=s[4],P=s[8],v=s[12],E=s[1],b=s[5],R=s[9],U=s[13],Q=s[2],F=s[6],k=s[10],X=s[14],z=s[3],te=s[7],ie=s[11],ee=s[15];return r[0]=a*C+o*E+l*Q+c*z,r[4]=a*B+o*b+l*F+c*te,r[8]=a*P+o*R+l*k+c*ie,r[12]=a*v+o*U+l*X+c*ee,r[1]=u*C+h*E+d*Q+f*z,r[5]=u*B+h*b+d*F+f*te,r[9]=u*P+h*R+d*k+f*ie,r[13]=u*v+h*U+d*X+f*ee,r[2]=p*C+m*E+g*Q+A*z,r[6]=p*B+m*b+g*F+A*te,r[10]=p*P+m*R+g*k+A*ie,r[14]=p*v+m*U+g*X+A*ee,r[3]=y*C+_*E+S*Q+w*z,r[7]=y*B+_*b+S*F+w*te,r[11]=y*P+_*R+S*k+w*ie,r[15]=y*v+_*U+S*X+w*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],m=e[7],g=e[11],A=e[15];return p*(+r*l*h-s*c*h-r*o*d+i*c*d+s*o*f-i*l*f)+m*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*u-r*l*u)+g*(+t*c*h-t*o*f-r*a*h+i*a*f+r*o*u-i*c*u)+A*(-s*o*u-t*l*h+t*o*d+s*a*h-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],m=e[13],g=e[14],A=e[15],y=h*g*c-m*d*c+m*l*f-o*g*f-h*l*A+o*d*A,_=p*d*c-u*g*c-p*l*f+a*g*f+u*l*A-a*d*A,S=u*m*c-p*h*c+p*o*f-a*m*f-u*o*A+a*h*A,w=p*h*l-u*m*l-p*o*d+a*m*d+u*o*g-a*h*g,C=t*y+i*_+s*S+r*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/C;return e[0]=y*B,e[1]=(m*d*r-h*g*r-m*s*f+i*g*f+h*s*A-i*d*A)*B,e[2]=(o*g*r-m*l*r+m*s*c-i*g*c-o*s*A+i*l*A)*B,e[3]=(h*l*r-o*d*r-h*s*c+i*d*c+o*s*f-i*l*f)*B,e[4]=_*B,e[5]=(u*g*r-p*d*r+p*s*f-t*g*f-u*s*A+t*d*A)*B,e[6]=(p*l*r-a*g*r-p*s*c+t*g*c+a*s*A-t*l*A)*B,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*f+t*l*f)*B,e[8]=S*B,e[9]=(p*h*r-u*m*r-p*i*f+t*m*f+u*i*A-t*h*A)*B,e[10]=(a*m*r-p*o*r+p*i*c-t*m*c-a*i*A+t*o*A)*B,e[11]=(u*o*r-a*h*r-u*i*c+t*h*c+a*i*f-t*o*f)*B,e[12]=w*B,e[13]=(u*m*s-p*h*s+p*i*d-t*m*d-u*i*g+t*h*g)*B,e[14]=(p*o*s-a*m*s-p*i*l+t*m*l+a*i*g-t*o*g)*B,e[15]=(a*h*s-u*o*s+u*i*l-t*h*l-a*i*d+t*o*d)*B,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,p=r*h,m=a*u,g=a*h,A=o*h,y=l*c,_=l*u,S=l*h,w=i.x,C=i.y,B=i.z;return s[0]=(1-(m+A))*w,s[1]=(f+S)*w,s[2]=(p-_)*w,s[3]=0,s[4]=(f-S)*C,s[5]=(1-(d+A))*C,s[6]=(g+y)*C,s[7]=0,s[8]=(p+_)*B,s[9]=(g-y)*B,s[10]=(1-(d+m))*B,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=_r.set(s[0],s[1],s[2]).length();const a=_r.set(s[4],s[5],s[6]).length(),o=_r.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Hn.copy(this);const c=1/r,u=1/a,h=1/o;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=h,Hn.elements[9]*=h,Hn.elements[10]*=h,t.setFromRotationMatrix(Hn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=ci,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let p,m;if(l)p=r/(a-r),m=a*r/(a-r);else if(o===ci)p=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Rl)p=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=ci,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s);let p,m;if(l)p=1/(a-r),m=a/(a-r);else if(o===ci)p=-2/(a-r),m=-(a+r)/(a-r);else if(o===Rl)p=-1/(a-r),m=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const _r=new x,Hn=new xe,Gy=new x(0,0,0),zy=new x(1,1,1),Xi=new x,tc=new x,wn=new x,bA=new xe,TA=new ot;class fi{constructor(e=0,t=0,i=0,s=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return bA.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bA,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return TA.setFromEuler(this),this.setFromQuaternion(TA,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class ff{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hy=0;const BA=new x,Er=new ot,Ei=new xe,nc=new x,Da=new x,Vy=new x,Wy=new ot,RA=new x(1,0,0),DA=new x(0,1,0),LA=new x(0,0,1),PA={type:"added"},qy={type:"removed"},yr={type:"childadded",child:null},Su={type:"childremoved",child:null};class bt extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new x,t=new fi,i=new ot,s=new x(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new Ne}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ff,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.multiply(Er),this}rotateOnWorldAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.premultiply(Er),this}rotateX(e){return this.rotateOnAxis(RA,e)}rotateY(e){return this.rotateOnAxis(DA,e)}rotateZ(e){return this.rotateOnAxis(LA,e)}translateOnAxis(e,t){return BA.copy(e).applyQuaternion(this.quaternion),this.position.add(BA.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(RA,e)}translateY(e){return this.translateOnAxis(DA,e)}translateZ(e){return this.translateOnAxis(LA,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?nc.copy(e):nc.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Da,nc,this.up):Ei.lookAt(nc,Da,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),Er.setFromRotationMatrix(Ei),this.quaternion.premultiply(Er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(PA),yr.child=e,this.dispatchEvent(yr),yr.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qy),Su.child=e,this.dispatchEvent(Su),Su.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(PA),yr.child=e,this.dispatchEvent(yr),yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,e,Vy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,Wy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}bt.DEFAULT_UP=new x(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new x,yi=new x,Cu=new x,vi=new x,vr=new x,Mr=new x,UA=new x,Iu=new x,wu=new x,bu=new x,Tu=new ft,Bu=new ft,Ru=new ft;class Rn{constructor(e=new x,t=new x,i=new x){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Vn.subVectors(e,t),s.cross(Vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Vn.subVectors(s,t),yi.subVectors(i,t),Cu.subVectors(e,t);const a=Vn.dot(Vn),o=Vn.dot(yi),l=Vn.dot(Cu),c=yi.dot(yi),u=yi.dot(Cu),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,p=(a*u-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(a,vi.y),l.addScaledVector(o,vi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Tu.setScalar(0),Bu.setScalar(0),Ru.setScalar(0),Tu.fromBufferAttribute(e,t),Bu.fromBufferAttribute(e,i),Ru.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Tu,r.x),a.addScaledVector(Bu,r.y),a.addScaledVector(Ru,r.z),a}static isFrontFacing(e,t,i,s){return Vn.subVectors(i,t),yi.subVectors(e,t),Vn.cross(yi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Vn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Rn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;vr.subVectors(s,i),Mr.subVectors(r,i),Iu.subVectors(e,i);const l=vr.dot(Iu),c=Mr.dot(Iu);if(l<=0&&c<=0)return t.copy(i);wu.subVectors(e,s);const u=vr.dot(wu),h=Mr.dot(wu);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(vr,a);bu.subVectors(e,r);const f=vr.dot(bu),p=Mr.dot(bu);if(p>=0&&f<=p)return t.copy(r);const m=f*c-l*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(i).addScaledVector(Mr,o);const g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return UA.subVectors(r,s),o=(h-u)/(h-u+(f-p)),t.copy(s).addScaledVector(UA,o);const A=1/(g+m+d);return a=m*A,o=d*A,t.copy(i).addScaledVector(vr,a).addScaledVector(Mr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const g0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},ic={h:0,s:0,l:0};function Du(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Se{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=rt.workingColorSpace){if(e=hf(e,1),t=qe(t,0,1),i=qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Du(a,r,e+1/3),this.g=Du(a,r,e),this.b=Du(a,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,t=dt){function i(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){const i=g0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return rt.workingToColorSpace(an.copy(this),e),Math.round(qe(an.r*255,0,255))*65536+Math.round(qe(an.g*255,0,255))*256+Math.round(qe(an.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(an.copy(this),t);const i=an.r,s=an.g,r=an.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=dt){rt.workingToColorSpace(an.copy(this),e);const t=an.r,i=an.g,s=an.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(ic);const i=oo(Yi.h,ic.h,t),s=oo(Yi.s,ic.s,t),r=oo(Yi.l,ic.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new Se;Se.NAMES=g0;let Xy=0;class Yn extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=qr,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$h,this.blendDst=ed,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yA,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qr&&(i.blending=this.blending),this.side!==kn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$h&&(i.blendSrc=this.blendSrc),this.blendDst!==ed&&(i.blendDst=this.blendDst),this.blendEquation!==Gs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==na&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yA&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class li extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=i0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new x,sc=new Me;let Yy=0;class Ge{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Cd,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)sc.fromBufferAttribute(this,t),sc.applyMatrix3(e),this.setXY(t,sc.x,sc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cd&&(e.usage=this.usage),e}}class m0 extends Ge{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class x0 extends Ge{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class zt extends Ge{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ky=0;const Ln=new xe,Lu=new bt,Sr=new x,bn=new jn,La=new jn,Yt=new x;class Ze extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ky++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(f0(e)?x0:m0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ne().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,i){return Ln.makeTranslation(e,t,i),this.applyMatrix4(Ln),this}scale(e,t,i){return Ln.makeScale(e,t,i),this.applyMatrix4(Ln),this}lookAt(e){return Lu.lookAt(e),Lu.updateMatrix(),this.applyMatrix4(Lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new zt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new x(-1/0,-1/0,-1/0),new x(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new x,1/0);return}if(e){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];La.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(bn.min,La.min),bn.expandByPoint(Yt),Yt.addVectors(bn.max,La.max),bn.expandByPoint(Yt)):(bn.expandByPoint(La.min),bn.expandByPoint(La.max))}bn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Yt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Yt.fromBufferAttribute(o,c),l&&(Sr.fromBufferAttribute(e,c),Yt.add(Sr)),s=Math.max(s,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new x,l[P]=new x;const c=new x,u=new x,h=new x,d=new Me,f=new Me,p=new Me,m=new x,g=new x;function A(P,v,E){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,v),h.fromBufferAttribute(i,E),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,v),p.fromBufferAttribute(r,E),u.sub(c),h.sub(c),f.sub(d),p.sub(d);const b=1/(f.x*p.y-p.x*f.y);isFinite(b)&&(m.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(b),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(b),o[P].add(m),o[v].add(m),o[E].add(m),l[P].add(g),l[v].add(g),l[E].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,v=y.length;P<v;++P){const E=y[P],b=E.start,R=E.count;for(let U=b,Q=b+R;U<Q;U+=3)A(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const _=new x,S=new x,w=new x,C=new x;function B(P){w.fromBufferAttribute(s,P),C.copy(w);const v=o[P];_.copy(v),_.sub(w.multiplyScalar(w.dot(v))).normalize(),S.crossVectors(C,v);const b=S.dot(l[P])<0?-1:1;a.setXYZW(P,_.x,_.y,_.z,b)}for(let P=0,v=y.length;P<v;++P){const E=y[P],b=E.start,R=E.count;for(let U=b,Q=b+R;U<Q;U+=3)B(e.getX(U+0)),B(e.getX(U+1)),B(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ge(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new x,r=new x,a=new x,o=new x,l=new x,c=new x,u=new x,h=new x;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),m=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,m),a.fromBufferAttribute(t,g),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,p=0;for(let m=0,g=l.length;m<g;m++){o.isInterleavedBufferAttribute?f=l[m]*o.data.stride+o.offset:f=l[m]*u;for(let A=0;A<u;A++)d[p++]=c[f++]}return new Ge(d,u,h)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ze,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const FA=new xe,Bs=new Ms,rc=new Sn,NA=new x,ac=new x,oc=new x,cc=new x,Pu=new x,lc=new x,QA=new x,uc=new x;class Je extends bt{constructor(e=new Ze,t=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){lc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Pu.fromBufferAttribute(h,e),a?lc.addScaledVector(Pu,u):lc.addScaledVector(Pu.sub(t),u))}t.add(lc)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),rc.copy(i.boundingSphere),rc.applyMatrix4(r),Bs.copy(e.ray).recast(e.near),!(rc.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(rc,NA)===null||Bs.origin.distanceToSquared(NA)>(e.far-e.near)**2))&&(FA.copy(r).invert(),Bs.copy(e.ray).applyMatrix4(FA),!(i.boundingBox!==null&&Bs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Bs)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,m=d.length;p<m;p++){const g=d[p],A=a[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let S=y,w=_;S<w;S+=3){const C=o.getX(S),B=o.getX(S+1),P=o.getX(S+2);s=hc(this,A,e,i,c,u,h,C,B,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),m=Math.min(o.count,f.start+f.count);for(let g=p,A=m;g<A;g+=3){const y=o.getX(g),_=o.getX(g+1),S=o.getX(g+2);s=hc(this,a,e,i,c,u,h,y,_,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,m=d.length;p<m;p++){const g=d[p],A=a[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let S=y,w=_;S<w;S+=3){const C=S,B=S+1,P=S+2;s=hc(this,A,e,i,c,u,h,C,B,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),m=Math.min(l.count,f.start+f.count);for(let g=p,A=m;g<A;g+=3){const y=g,_=g+1,S=g+2;s=hc(this,a,e,i,c,u,h,y,_,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Jy(n,e,t,i,s,r,a,o){let l;if(e.side===Vt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===kn,o),l===null)return null;uc.copy(o),uc.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(uc);return c<t.near||c>t.far?null:{distance:c,point:uc.clone(),object:n}}function hc(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,ac),n.getVertexPosition(l,oc),n.getVertexPosition(c,cc);const u=Jy(n,e,t,i,ac,oc,cc,QA);if(u){const h=new x;Rn.getBarycoord(QA,ac,oc,cc,h),s&&(u.uv=Rn.getInterpolatedAttribute(s,o,l,c,h,new Me)),r&&(u.uv1=Rn.getInterpolatedAttribute(r,o,l,c,h,new Me)),a&&(u.normal=Rn.getInterpolatedAttribute(a,o,l,c,h,new x),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new x,materialIndex:0};Rn.getNormal(ac,oc,cc,d.normal),u.face=d,u.barycoord=h}return u}class _s extends Ze{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,i,t,e,a,r,0),p("z","y","x",1,-1,i,t,-e,a,r,1),p("x","z","y",1,1,e,i,t,s,a,2),p("x","z","y",1,-1,e,i,-t,s,a,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(h,2));function p(m,g,A,y,_,S,w,C,B,P,v){const E=S/B,b=w/P,R=S/2,U=w/2,Q=C/2,F=B+1,k=P+1;let X=0,z=0;const te=new x;for(let ie=0;ie<k;ie++){const ee=ie*b-U;for(let pe=0;pe<F;pe++){const be=pe*E-R;te[m]=be*y,te[g]=ee*_,te[A]=Q,c.push(te.x,te.y,te.z),te[m]=0,te[g]=0,te[A]=C>0?1:-1,u.push(te.x,te.y,te.z),h.push(pe/B),h.push(1-ie/P),X+=1}}for(let ie=0;ie<P;ie++)for(let ee=0;ee<B;ee++){const pe=d+ee+F*ie,be=d+ee+F*(ie+1),et=d+(ee+1)+F*(ie+1),At=d+(ee+1)+F*ie;l.push(pe,be,At),l.push(be,et,At),z+=6}o.addGroup(f,z,v),f+=z,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function dn(n){const e={};for(let t=0;t<n.length;t++){const i=oa(n[t]);for(const s in i)e[s]=i[s]}return e}function Zy(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _0(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const jy={clone:oa,merge:dn};var $y=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ev=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mt extends Yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$y,this.fragmentShader=ev,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oa(e.uniforms),this.uniformsGroups=Zy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class E0 extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new x,OA=new Me,kA=new Me;class Kt extends E0{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=aa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return aa*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,OA,kA),t.subVectors(kA,OA)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ao*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Cr=-90,Ir=1;class y0 extends bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Kt(Cr,Ir,e,t);s.layers=this.layers,this.add(s);const r=new Kt(Cr,Ir,e,t);r.layers=this.layers,this.add(r);const a=new Kt(Cr,Ir,e,t);a.layers=this.layers,this.add(a);const o=new Kt(Cr,Ir,e,t);o.layers=this.layers,this.add(o);const l=new Kt(Cr,Ir,e,t);l.layers=this.layers,this.add(l);const c=new Kt(Cr,Ir,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class v0 extends Gt{constructor(e=[],t=ir,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class M0 extends di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new v0(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _s(5,5,5),r=new Mt({name:"CubemapFromEquirect",uniforms:oa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:Fi});r.uniforms.tEquirect.value=t;const a=new Je(s,r),o=t.minFilter;return t.minFilter===qn&&(t.minFilter=wt),new y0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class Zt extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tv={type:"move"};class Uu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new x,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new x),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new x,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new x),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const m of e.hand.values()){const g=t.getJointPose(m,i),A=this._getHandJoint(c,m);g!==null&&(A.matrix.fromArray(g.transform.matrix),A.matrix.decompose(A.position,A.rotation,A.scale),A.matrixWorldNeedsUpdate=!0,A.jointRadius=g.radius),A.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Zt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Af extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class pf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cd,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const un=new x;class ca{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Dl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ge(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ca(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Dl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class S0 extends Yn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let wr;const Pa=new x,br=new x,Tr=new x,Br=new Me,Ua=new Me,C0=new xe,dc=new x,Fa=new x,fc=new x,GA=new Me,Fu=new Me,zA=new Me;class nv extends bt{constructor(e=new S0){if(super(),this.isSprite=!0,this.type="Sprite",wr===void 0){wr=new Ze;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new pf(t,5);wr.setIndex([0,1,2,0,2,3]),wr.setAttribute("position",new ca(i,3,0,!1)),wr.setAttribute("uv",new ca(i,2,3,!1))}this.geometry=wr,this.material=e,this.center=new Me(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ke('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),br.setFromMatrixScale(this.matrixWorld),C0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Tr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&br.multiplyScalar(-Tr.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;Ac(dc.set(-.5,-.5,0),Tr,a,br,s,r),Ac(Fa.set(.5,-.5,0),Tr,a,br,s,r),Ac(fc.set(.5,.5,0),Tr,a,br,s,r),GA.set(0,0),Fu.set(1,0),zA.set(1,1);let o=e.ray.intersectTriangle(dc,Fa,fc,!1,Pa);if(o===null&&(Ac(Fa.set(-.5,.5,0),Tr,a,br,s,r),Fu.set(0,1),o=e.ray.intersectTriangle(dc,fc,Fa,!1,Pa),o===null))return;const l=e.ray.origin.distanceTo(Pa);l<e.near||l>e.far||t.push({distance:l,point:Pa.clone(),uv:Rn.getInterpolation(Pa,dc,Fa,fc,GA,Fu,zA,new Me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ac(n,e,t,i,s,r){Br.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Ua.x=r*Br.x-s*Br.y,Ua.y=s*Br.x+r*Br.y):Ua.copy(Br),n.copy(e),n.x+=Ua.x,n.y+=Ua.y,n.applyMatrix4(C0)}const HA=new x,VA=new ft,WA=new ft,iv=new x,qA=new xe,pc=new x,Nu=new Sn,XA=new xe,Qu=new Ms;class sv extends Je{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=mA,this.bindMatrix=new xe,this.bindMatrixInverse=new xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new jn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,pc),this.boundingBox.expandByPoint(pc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Sn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,pc),this.boundingSphere.expandByPoint(pc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nu.copy(this.boundingSphere),Nu.applyMatrix4(s),e.ray.intersectsSphere(Nu)!==!1&&(XA.copy(s).invert(),Qu.copy(e.ray).applyMatrix4(XA),!(this.boundingBox!==null&&Qu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Qu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ft,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===mA?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ry?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ie("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;VA.fromBufferAttribute(s.attributes.skinIndex,e),WA.fromBufferAttribute(s.attributes.skinWeight,e),HA.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=WA.getComponent(r);if(a!==0){const o=VA.getComponent(r);qA.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(iv.copy(HA).applyMatrix4(qA),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class I0 extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ea extends Gt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=tn,u=tn,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const YA=new xe,rv=new xe;class gf{constructor(e=[],t=[]){this.uuid=Xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ie("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new xe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:rv;YA.multiplyMatrices(o,t[r]),YA.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new gf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Ea(t,e,e,Jt,cn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let a=t[r];a===void 0&&(Ie("Skeleton: No bone found with UUID:",r),a=new I0),this.bones.push(a),this.boneInverses.push(new xe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=i[s];e.boneInverses.push(o.toArray())}return e}}class Id extends Ge{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Rr=new xe,KA=new xe,gc=[],JA=new jn,av=new xe,Na=new Je,Qa=new Sn;class ov extends Je{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Id(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,av)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Rr),JA.copy(e.boundingBox).applyMatrix4(Rr),this.boundingBox.union(JA)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Rr),Qa.copy(e.boundingSphere).applyMatrix4(Rr),this.boundingSphere.union(Qa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Na.geometry=this.geometry,Na.material=this.material,Na.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qa.copy(this.boundingSphere),Qa.applyMatrix4(i),e.ray.intersectsSphere(Qa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Rr),KA.multiplyMatrices(i,Rr),Na.matrixWorld=KA,Na.raycast(e,gc);for(let a=0,o=gc.length;a<o;a++){const l=gc[a];l.instanceId=r,l.object=this,t.push(l)}gc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Id(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ea(new Float32Array(s*this.count),s,this.count,os,cn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ou=new x,cv=new x,lv=new Ne;class is{constructor(e=new x(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ou.subVectors(i,t).cross(cv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ou),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||lv.getNormalMatrix(e),s=this.coplanarPoint(Ou).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new Sn,uv=new Me(.5,.5),mc=new x;class mf{constructor(e=new is,t=new is,i=new is,s=new is,r=new is,a=new is){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ci,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],p=r[8],m=r[9],g=r[10],A=r[11],y=r[12],_=r[13],S=r[14],w=r[15];if(s[0].setComponents(c-a,f-u,A-p,w-y).normalize(),s[1].setComponents(c+a,f+u,A+p,w+y).normalize(),s[2].setComponents(c+o,f+h,A+m,w+_).normalize(),s[3].setComponents(c-o,f-h,A-m,w-_).normalize(),i)s[4].setComponents(l,d,g,S).normalize(),s[5].setComponents(c-l,f-d,A-g,w-S).normalize();else if(s[4].setComponents(c-l,f-d,A-g,w-S).normalize(),t===ci)s[5].setComponents(c+l,f+d,A+g,w+S).normalize();else if(t===Rl)s[5].setComponents(l,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){Rs.center.set(0,0,0);const t=uv.distanceTo(e.center);return Rs.radius=.7071067811865476+t,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(mc.x=s.normal.x>0?e.max.x:e.min.x,mc.y=s.normal.y>0?e.max.y:e.min.y,mc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(mc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ss extends Yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ll=new x,Pl=new x,ZA=new xe,Oa=new Ms,xc=new Sn,ku=new x,jA=new x;class ya extends bt{constructor(e=new Ze,t=new Ss){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ll.fromBufferAttribute(t,s-1),Pl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ll.distanceTo(Pl);e.setAttribute("lineDistance",new zt(i,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xc.copy(i.boundingSphere),xc.applyMatrix4(s),xc.radius+=r,e.ray.intersectsSphere(xc)===!1)return;ZA.copy(s).invert(),Oa.copy(e.ray).applyMatrix4(ZA);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let m=f,g=p-1;m<g;m+=c){const A=u.getX(m),y=u.getX(m+1),_=_c(this,e,Oa,l,A,y,m);_&&t.push(_)}if(this.isLineLoop){const m=u.getX(p-1),g=u.getX(f),A=_c(this,e,Oa,l,m,g,p-1);A&&t.push(A)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let m=f,g=p-1;m<g;m+=c){const A=_c(this,e,Oa,l,m,m+1,m);A&&t.push(A)}if(this.isLineLoop){const m=_c(this,e,Oa,l,p-1,f,p-1);m&&t.push(m)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function _c(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(Ll.fromBufferAttribute(o,s),Pl.fromBufferAttribute(o,r),t.distanceSqToSegment(Ll,Pl,ku,jA)>i)return;ku.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ku);if(!(c<e.near||c>e.far))return{distance:c,point:jA.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const $A=new x,ep=new x;class Bo extends ya{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)$A.fromBufferAttribute(t,s),ep.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+$A.distanceTo(ep);e.setAttribute("lineDistance",new zt(i,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xf extends ya{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class w0 extends Yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const tp=new xe,wd=new Ms,Ec=new Sn,yc=new x;class hv extends bt{constructor(e=new Ze,t=new w0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ec.copy(i.boundingSphere),Ec.applyMatrix4(s),Ec.radius+=r,e.ray.intersectsSphere(Ec)===!1)return;tp.copy(s).invert(),wd.copy(e.ray).applyMatrix4(tp);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,m=f;p<m;p++){const g=c.getX(p);yc.fromBufferAttribute(h,g),np(yc,g,l,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let p=d,m=f;p<m;p++)yc.fromBufferAttribute(h,p),np(yc,p,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function np(n,e,t,i,s,r,a){const o=wd.distanceSqToPoint(n);if(o<t){const l=new x;wd.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Kl extends Gt{constructor(e,t,i,s,r,a,o,l,c,u,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class dv extends Kl{constructor(e,t,i,s,r,a){super(e,t,i,r,a),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=On,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class b0 extends Kl{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,ir),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class fv extends Gt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class T0 extends Gt{constructor(e,t,i=sr,s,r,a,o=tn,l=tn,c,u=yo,h=1){if(u!==yo&&u!==vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new df(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class B0 extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _f extends Ze{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let p=0;const m=[],g=i/2;let A=0;y(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new zt(h,3)),this.setAttribute("normal",new zt(d,3)),this.setAttribute("uv",new zt(f,2));function y(){const S=new x,w=new x;let C=0;const B=(t-e)/i;for(let P=0;P<=r;P++){const v=[],E=P/r,b=E*(t-e)+e;for(let R=0;R<=s;R++){const U=R/s,Q=U*l+o,F=Math.sin(Q),k=Math.cos(Q);w.x=b*F,w.y=-E*i+g,w.z=b*k,h.push(w.x,w.y,w.z),S.set(F,B,k).normalize(),d.push(S.x,S.y,S.z),f.push(U,1-E),v.push(p++)}m.push(v)}for(let P=0;P<s;P++)for(let v=0;v<r;v++){const E=m[v][P],b=m[v+1][P],R=m[v+1][P+1],U=m[v][P+1];(e>0||v!==0)&&(u.push(E,b,U),C+=3),(t>0||v!==r-1)&&(u.push(b,R,U),C+=3)}c.addGroup(A,C,0),A+=C}function _(S){const w=p,C=new Me,B=new x;let P=0;const v=S===!0?e:t,E=S===!0?1:-1;for(let R=1;R<=s;R++)h.push(0,g*E,0),d.push(0,E,0),f.push(.5,.5),p++;const b=p;for(let R=0;R<=s;R++){const Q=R/s*l+o,F=Math.cos(Q),k=Math.sin(Q);B.x=v*k,B.y=g*E,B.z=v*F,h.push(B.x,B.y,B.z),d.push(0,E,0),C.x=F*.5+.5,C.y=k*.5*E+.5,f.push(C.x,C.y),p++}for(let R=0;R<s;R++){const U=w+R,Q=b+R;S===!0?u.push(Q,Q+1,U):u.push(Q+1,Q,U),P+=3}c.addGroup(A,P,S===!0?1:2),A+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _f(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ef extends _f{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ef(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class R0{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ie("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const u=i[s],d=i[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Me:new x);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new x,s=[],r=[],a=[],o=new x,l=new xe;for(let f=0;f<=e;f++){const p=f/e;s[f]=this.getTangentAt(p,new x)}r[0]=new x,a[0]=new x;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(qe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(qe(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function yf(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const vc=new x,Gu=new yf,zu=new yf,Hu=new yf;class Av extends R0{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new x){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(vc.subVectors(s[0],s[1]).add(s[0]),c=vc);const h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(vc.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=vc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);m<1e-4&&(m=1),p<1e-4&&(p=m),g<1e-4&&(g=m),Gu.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,m,g),zu.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,m,g),Hu.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,m,g)}else this.curveType==="catmullrom"&&(Gu.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),zu.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Hu.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(Gu.calc(l),zu.calc(l),Hu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new x().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function pv(n,e){const t=1-n;return t*t*t*e}function gv(n,e){const t=1-n;return 3*t*t*n*e}function mv(n,e){return 3*(1-n)*n*n*e}function xv(n,e){return n*n*n*e}function Vu(n,e,t,i,s){return pv(n,e)+gv(n,t)+mv(n,i)+xv(n,s)}class _v extends R0{constructor(e=new x,t=new x,i=new x,s=new x){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new x){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Vu(e,s.x,r.x,a.x,o.x),Vu(e,s.y,r.y,a.y,o.y),Vu(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Es extends Ze{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,f=[],p=[],m=[],g=[];for(let A=0;A<u;A++){const y=A*d-a;for(let _=0;_<c;_++){const S=_*h-r;p.push(S,-y,0),m.push(0,0,1),g.push(_/o),g.push(1-A/l)}}for(let A=0;A<l;A++)for(let y=0;y<o;y++){const _=y+c*A,S=y+c*(A+1),w=y+1+c*(A+1),C=y+1+c*A;f.push(_,S,C),f.push(S,w,C)}this.setIndex(f),this.setAttribute("position",new zt(p,3)),this.setAttribute("normal",new zt(m,3)),this.setAttribute("uv",new zt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.width,e.height,e.widthSegments,e.heightSegments)}}class vf extends Ze{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let h=e;const d=(t-e)/s,f=new x,p=new Me;for(let m=0;m<=s;m++){for(let g=0;g<=i;g++){const A=r+g/i*a;f.x=h*Math.cos(A),f.y=h*Math.sin(A),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let m=0;m<s;m++){const g=m*(i+1);for(let A=0;A<i;A++){const y=A+g,_=y,S=y+i+1,w=y+i+2,C=y+1;o.push(_,S,C),o.push(S,w,C)}}this.setIndex(o),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(c,3)),this.setAttribute("uv",new zt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Oi extends Ze{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new x,d=new x,f=[],p=[],m=[],g=[];for(let A=0;A<=i;A++){const y=[],_=A/i;let S=0;A===0&&a===0?S=.5/t:A===i&&l===Math.PI&&(S=-.5/t);for(let w=0;w<=t;w++){const C=w/t;h.x=-e*Math.cos(s+C*r)*Math.sin(a+_*o),h.y=e*Math.cos(a+_*o),h.z=e*Math.sin(s+C*r)*Math.sin(a+_*o),p.push(h.x,h.y,h.z),d.copy(h).normalize(),m.push(d.x,d.y,d.z),g.push(C+S,1-_),y.push(c++)}u.push(y)}for(let A=0;A<i;A++)for(let y=0;y<t;y++){const _=u[A][y+1],S=u[A][y],w=u[A+1][y],C=u[A+1][y+1];(A!==0||a>0)&&f.push(_,S,C),(A!==i-1||l<Math.PI)&&f.push(S,w,C)}this.setIndex(f),this.setAttribute("position",new zt(p,3)),this.setAttribute("normal",new zt(m,3)),this.setAttribute("uv",new zt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ki extends Yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=h0,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mi extends ki{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class D0 extends Yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ev extends Yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class yv extends Ss{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Mc(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function vv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Mv(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function ip(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=n[o+l]}return s}function L0(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}class ko{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Sv extends ko{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xA,endingEnd:xA}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case _A:r=e,o=2*t-i;break;case EA:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case _A:a=e,l=2*i-t;break;case EA:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-t)/(s-t),m=p*p,g=m*p,A=-d*g+2*d*m-d*p,y=(1+d)*g+(-1.5-2*d)*m+(-.5+d)*p+1,_=(-1-f)*g+(1.5+f)*m+.5*p,S=f*g-f*m;for(let w=0;w!==o;++w)r[w]=A*a[u+w]+y*a[c+w]+_*a[l+w]+S*a[h+w];return r}}class Cv extends ko{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}}class Iv extends ko{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class $n{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Mc(t,this.TimeBufferType),this.values=Mc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Mc(e.times,Array),values:Mc(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Iv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Cv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Io:t=this.InterpolantFactoryMethodDiscrete;break;case wo:t=this.InterpolantFactoryMethodLinear;break;case Au:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ie("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Io;case this.InterpolantFactoryMethodLinear:return wo;case this.InterpolantFactoryMethodSmooth:return Au}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ke("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(Ke("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){Ke("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ke("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&vv(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){Ke("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Au,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{const h=o*i,d=h-i,f=h+i;for(let p=0;p!==i;++p){const m=t[h+p];if(m!==t[d+p]||m!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}$n.prototype.ValueTypeName="";$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=wo;class va extends $n{constructor(e,t,i){super(e,t,i)}}va.prototype.ValueTypeName="bool";va.prototype.ValueBufferType=Array;va.prototype.DefaultInterpolation=Io;va.prototype.InterpolantFactoryMethodLinear=void 0;va.prototype.InterpolantFactoryMethodSmooth=void 0;class P0 extends $n{constructor(e,t,i,s){super(e,t,i,s)}}P0.prototype.ValueTypeName="color";class la extends $n{constructor(e,t,i,s){super(e,t,i,s)}}la.prototype.ValueTypeName="number";class wv extends ko{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t);let c=e*o;for(let u=c+o;c!==u;c+=4)ot.slerpFlat(r,0,a,c-o,a,c,l);return r}}class ua extends $n{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new wv(this.times,this.values,this.getValueSize(),e)}}ua.prototype.ValueTypeName="quaternion";ua.prototype.InterpolantFactoryMethodSmooth=void 0;class Ma extends $n{constructor(e,t,i){super(e,t,i)}}Ma.prototype.ValueTypeName="string";Ma.prototype.ValueBufferType=Array;Ma.prototype.DefaultInterpolation=Io;Ma.prototype.InterpolantFactoryMethodLinear=void 0;Ma.prototype.InterpolantFactoryMethodSmooth=void 0;class ha extends $n{constructor(e,t,i,s){super(e,t,i,s)}}ha.prototype.ValueTypeName="vector";class bv{constructor(e="",t=-1,i=[],s=ay){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Xn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(Bv(i[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push($n.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=Mv(l);l=ip(l,1,u),c=ip(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new la(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}static parseAnimation(e,t){if(Ie("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ke("AnimationClip: No animation in JSONLoader data."),null;const i=function(h,d,f,p,m){if(f.length!==0){const g=[],A=[];L0(f,g,A,p),g.length!==0&&m.push(new h(d,g,A))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let m=0;m<d[p].morphTargets.length;m++)f[d[p].morphTargets[m]]=-1;for(const m in f){const g=[],A=[];for(let y=0;y!==d[p].morphTargets.length;++y){const _=d[p];g.push(_.time),A.push(_.morphTarget===m?1:0)}s.push(new la(".morphTargetInfluence["+m+"]",g,A))}l=f.length*a}else{const f=".bones["+t[h].name+"]";i(ha,f+".position",d,"pos",s),i(ua,f+".quaternion",d,"rot",s),i(ha,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Tv(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return la;case"vector":case"vector2":case"vector3":case"vector4":return ha;case"color":return P0;case"quaternion":return ua;case"bool":case"boolean":return va;case"string":return Ma}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Bv(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Tv(n.type);if(n.times===void 0){const t=[],i=[];L0(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Di={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class U0{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Rv=new U0;class Cs{constructor(e){this.manager=e!==void 0?e:Rv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Cs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Mi={};class Dv extends Error{constructor(e,t){super(e),this.response=t}}class $s extends Cs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Di.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Mi[e]!==void 0){Mi[e].push({onLoad:t,onProgress:i,onError:s});return}Mi[e]=[],Mi[e].push({onLoad:t,onProgress:i,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ie("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Mi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let m=0;const g=new ReadableStream({start(A){y();function y(){h.read().then(({done:_,value:S})=>{if(_)A.close();else{m+=S.byteLength;const w=new ProgressEvent("progress",{lengthComputable:p,loaded:m,total:f});for(let C=0,B=u.length;C<B;C++){const P=u[C];P.onProgress&&P.onProgress(w)}A.enqueue(S),y()}},_=>{A.error(_)})}}});return new Response(g)}else throw new Dv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Di.add(`file:${e}`,c);const u=Mi[e];delete Mi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Mi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Mi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Dr=new WeakMap;class Lv extends Cs{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Di.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=Dr.get(a);h===void 0&&(h=[],Dr.set(a,h)),h.push({onLoad:t,onError:s})}return a}const o=bo("img");function l(){u(),t&&t(this);const h=Dr.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}Dr.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),Di.remove(`image:${e}`);const d=Dr.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onError&&p.onError(h)}Dr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Di.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class F0 extends Cs{constructor(e){super(e)}load(e,t,i,s){const r=new Gt,a=new Lv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Jl extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Wu=new xe,sp=new x,rp=new x;class Mf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=Ye,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mf,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;sp.setFromMatrixPosition(e.matrixWorld),t.position.copy(sp),rp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rp),t.updateMatrixWorld(),Wu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wu,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Pv extends Mf{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=aa*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class N0 extends Jl{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Pv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ap=new xe,ka=new x,qu=new x;class Uv extends Mf{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new x(1,0,0),new x(-1,0,0),new x(0,0,1),new x(0,0,-1),new x(0,1,0),new x(0,-1,0)],this._cubeUps=[new x(0,1,0),new x(0,1,0),new x(0,1,0),new x(0,1,0),new x(0,0,1),new x(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ka.setFromMatrixPosition(e.matrixWorld),i.position.copy(ka),qu.copy(i.position),qu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(qu),i.updateMatrixWorld(),s.makeTranslation(-ka.x,-ka.y,-ka.z),ap.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ap,i.coordinateSystem,i.reversedDepth)}}class Q0 extends Jl{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Uv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Sf extends E0{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Fv extends Mf{constructor(){super(new Sf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class O0 extends Jl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Fv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Nv extends Jl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class co{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Xu=new WeakMap;class Qv extends Cs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ie("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ie("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Di.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{if(Xu.has(a)===!0)s&&s(Xu.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Di.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Xu.set(l,c),Di.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Di.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Ov extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class kv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Cf="\\[\\]\\.:\\/",Gv=new RegExp("["+Cf+"]","g"),If="[^"+Cf+"]",zv="[^"+Cf.replace("\\.","")+"]",Hv=/((?:WC+[\/:])*)/.source.replace("WC",If),Vv=/(WCOD+)?/.source.replace("WCOD",zv),Wv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",If),qv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",If),Xv=new RegExp("^"+Hv+Vv+Wv+qv+"$"),Yv=["material","materials","bones","map"];class Kv{constructor(e,t,i){const s=i||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class gt{constructor(e,t,i){this.path=t,this.parsedPath=i||gt.parseTrackName(t),this.node=gt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new gt.Composite(e,t,i):new gt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gv,"")}static parseTrackName(e){const t=Xv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);Yv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=gt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;Ke("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}gt.Composite=Kv;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const op=new xe;class Zl{constructor(e,t,i=0,s=1/0){this.ray=new Ms(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ff,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ke("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return op.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(op),this}intersectObject(e,t=!0,i=[]){return bd(e,this,i,t),i.sort(cp),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)bd(e[s],this,i,t);return i.sort(cp),i}}function cp(n,e){return n.distance-e.distance}function bd(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)bd(r[a],e,t,!0)}}class lp{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Jv extends Bo{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Ze;s.setAttribute("position",new zt(t,3)),s.setAttribute("color",new zt(i,3));const r=new Ss({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,i){const s=new Se,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(i),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Zv extends dr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ie("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function up(n,e,t,i){const s=jv(i);switch(t){case c0:return n*e;case os:return n*e/s.components*s.byteLength;case cf:return n*e/s.components*s.byteLength;case cs:return n*e*2/s.components*s.byteLength;case lf:return n*e*2/s.components*s.byteLength;case Eo:return n*e*3/s.components*s.byteLength;case Jt:return n*e*4/s.components*s.byteLength;case uf:return n*e*4/s.components*s.byteLength;case Xr:case Zs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Yr:case ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ud:case Mo:return Math.max(n,16)*Math.max(e,8)/4;case Ml:case sa:return Math.max(n,8)*Math.max(e,8)/2;case Sl:case So:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case js:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case dd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case fd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Kr:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ad:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case pd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case gd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case md:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case xd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case _d:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ed:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case yd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case vd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ra:case Md:case Cl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Il:case wl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case bl:case Tl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jv(n){switch(n){case Ye:case a0:return{byteLength:1,components:1};case xo:case o0:case Bn:return{byteLength:2,components:1};case af:case of:return{byteLength:2,components:4};case sr:case rf:case cn:return{byteLength:4,components:1};case Xl:case Yl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"181"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="181");function k0(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function $v(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){const p=h[d],m=h[f];m.start<=p.start+p.count+1?p.count=Math.max(p.count,m.start+m.count-p.start):(++d,h[d]=m)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){const m=h[f];n.bufferSubData(c,m.start*u.BYTES_PER_ELEMENT,u,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var eM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tM=`#ifdef USE_ALPHAHASH
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
#endif`,nM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aM=`#ifdef USE_AOMAP
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
#endif`,oM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cM=`#ifdef USE_BATCHING
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
#endif`,lM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fM=`#ifdef USE_IRIDESCENCE
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
#endif`,AM=`#ifdef USE_BUMPMAP
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
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,EM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,MM=`#define PI 3.141592653589793
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
} // validated`,SM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,CM=`vec3 transformedNormal = objectNormal;
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
#endif`,IM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BM="gl_FragColor = linearToOutputTexel( gl_FragColor );",RM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DM=`#ifdef USE_ENVMAP
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
#endif`,LM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,PM=`#ifdef USE_ENVMAP
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
#endif`,UM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FM=`#ifdef USE_ENVMAP
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
#endif`,NM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GM=`#ifdef USE_GRADIENTMAP
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
}`,zM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WM=`uniform bool receiveShadow;
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
#endif`,qM=`#ifdef USE_ENVMAP
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
#endif`,XM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZM=`PhysicalMaterial material;
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
#endif`,jM=`uniform sampler2D dfgLUT;
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
}`,$M=`
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
#endif`,eS=`#if defined( RE_IndirectDiffuse )
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
#endif`,tS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lS=`#if defined( USE_POINTS_UV )
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
#endif`,uS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pS=`#ifdef USE_MORPHTARGETS
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
#endif`,gS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_S=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ES=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vS=`#ifdef USE_NORMALMAP
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
#endif`,MS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,TS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,US=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,QS=`float getShadowMask() {
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
}`,OS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kS=`#ifdef USE_SKINNING
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
#endif`,GS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zS=`#ifdef USE_SKINNING
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
#endif`,HS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,XS=`#ifdef USE_TRANSMISSION
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
#endif`,YS=`#ifdef USE_TRANSMISSION
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
#endif`,KS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $S=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eC=`uniform sampler2D t2D;
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
}`,tC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rC=`#include <common>
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
}`,aC=`#if DEPTH_PACKING == 3200
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
}`,oC=`#define DISTANCE
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
}`,cC=`#define DISTANCE
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
}`,lC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hC=`uniform float scale;
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
}`,dC=`uniform vec3 diffuse;
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
}`,fC=`#include <common>
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
}`,AC=`uniform vec3 diffuse;
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
}`,pC=`#define LAMBERT
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
}`,gC=`#define LAMBERT
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
}`,mC=`#define MATCAP
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
}`,xC=`#define MATCAP
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
}`,_C=`#define NORMAL
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
}`,EC=`#define NORMAL
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
}`,yC=`#define PHONG
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
}`,vC=`#define PHONG
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
}`,MC=`#define STANDARD
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
}`,SC=`#define STANDARD
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
}`,CC=`#define TOON
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
}`,IC=`#define TOON
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
}`,wC=`uniform float size;
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
}`,bC=`uniform vec3 diffuse;
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
}`,TC=`#include <common>
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
}`,BC=`uniform vec3 color;
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
}`,RC=`uniform float rotation;
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
}`,DC=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:eM,alphahash_pars_fragment:tM,alphamap_fragment:nM,alphamap_pars_fragment:iM,alphatest_fragment:sM,alphatest_pars_fragment:rM,aomap_fragment:aM,aomap_pars_fragment:oM,batching_pars_vertex:cM,batching_vertex:lM,begin_vertex:uM,beginnormal_vertex:hM,bsdfs:dM,iridescence_fragment:fM,bumpmap_pars_fragment:AM,clipping_planes_fragment:pM,clipping_planes_pars_fragment:gM,clipping_planes_pars_vertex:mM,clipping_planes_vertex:xM,color_fragment:_M,color_pars_fragment:EM,color_pars_vertex:yM,color_vertex:vM,common:MM,cube_uv_reflection_fragment:SM,defaultnormal_vertex:CM,displacementmap_pars_vertex:IM,displacementmap_vertex:wM,emissivemap_fragment:bM,emissivemap_pars_fragment:TM,colorspace_fragment:BM,colorspace_pars_fragment:RM,envmap_fragment:DM,envmap_common_pars_fragment:LM,envmap_pars_fragment:PM,envmap_pars_vertex:UM,envmap_physical_pars_fragment:qM,envmap_vertex:FM,fog_vertex:NM,fog_pars_vertex:QM,fog_fragment:OM,fog_pars_fragment:kM,gradientmap_pars_fragment:GM,lightmap_pars_fragment:zM,lights_lambert_fragment:HM,lights_lambert_pars_fragment:VM,lights_pars_begin:WM,lights_toon_fragment:XM,lights_toon_pars_fragment:YM,lights_phong_fragment:KM,lights_phong_pars_fragment:JM,lights_physical_fragment:ZM,lights_physical_pars_fragment:jM,lights_fragment_begin:$M,lights_fragment_maps:eS,lights_fragment_end:tS,logdepthbuf_fragment:nS,logdepthbuf_pars_fragment:iS,logdepthbuf_pars_vertex:sS,logdepthbuf_vertex:rS,map_fragment:aS,map_pars_fragment:oS,map_particle_fragment:cS,map_particle_pars_fragment:lS,metalnessmap_fragment:uS,metalnessmap_pars_fragment:hS,morphinstance_vertex:dS,morphcolor_vertex:fS,morphnormal_vertex:AS,morphtarget_pars_vertex:pS,morphtarget_vertex:gS,normal_fragment_begin:mS,normal_fragment_maps:xS,normal_pars_fragment:_S,normal_pars_vertex:ES,normal_vertex:yS,normalmap_pars_fragment:vS,clearcoat_normal_fragment_begin:MS,clearcoat_normal_fragment_maps:SS,clearcoat_pars_fragment:CS,iridescence_pars_fragment:IS,opaque_fragment:wS,packing:bS,premultiplied_alpha_fragment:TS,project_vertex:BS,dithering_fragment:RS,dithering_pars_fragment:DS,roughnessmap_fragment:LS,roughnessmap_pars_fragment:PS,shadowmap_pars_fragment:US,shadowmap_pars_vertex:FS,shadowmap_vertex:NS,shadowmask_pars_fragment:QS,skinbase_vertex:OS,skinning_pars_vertex:kS,skinning_vertex:GS,skinnormal_vertex:zS,specularmap_fragment:HS,specularmap_pars_fragment:VS,tonemapping_fragment:WS,tonemapping_pars_fragment:qS,transmission_fragment:XS,transmission_pars_fragment:YS,uv_pars_fragment:KS,uv_pars_vertex:JS,uv_vertex:ZS,worldpos_vertex:jS,background_vert:$S,background_frag:eC,backgroundCube_vert:tC,backgroundCube_frag:nC,cube_vert:iC,cube_frag:sC,depth_vert:rC,depth_frag:aC,distanceRGBA_vert:oC,distanceRGBA_frag:cC,equirect_vert:lC,equirect_frag:uC,linedashed_vert:hC,linedashed_frag:dC,meshbasic_vert:fC,meshbasic_frag:AC,meshlambert_vert:pC,meshlambert_frag:gC,meshmatcap_vert:mC,meshmatcap_frag:xC,meshnormal_vert:_C,meshnormal_frag:EC,meshphong_vert:yC,meshphong_frag:vC,meshphysical_vert:MC,meshphysical_frag:SC,meshtoon_vert:CC,meshtoon_frag:IC,points_vert:wC,points_frag:bC,shadow_vert:TC,shadow_frag:BC,sprite_vert:RC,sprite_frag:DC},le={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},si={basic:{uniforms:dn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:dn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Se(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:dn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:dn([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:dn([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Se(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:dn([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:dn([le.points,le.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:dn([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:dn([le.common,le.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:dn([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:dn([le.sprite,le.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:dn([le.common,le.displacementmap,{referencePosition:{value:new x},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:dn([le.lights,le.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};si.physical={uniforms:dn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Sc={r:0,b:0,g:0},Ds=new fi,LC=new xe;function PC(n,e,t,i,s,r,a){const o=new Se(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function p(_){let S=_.isScene===!0?_.background:null;return S&&S.isTexture&&(S=(_.backgroundBlurriness>0?t:e).get(S)),S}function m(_){let S=!1;const w=p(_);w===null?A(o,l):w&&w.isColor&&(A(w,1),S=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(_,S){const w=p(S);w&&(w.isCubeTexture||w.mapping===ql)?(u===void 0&&(u=new Je(new _s(1,1,1),new Mt({name:"BackgroundCubeMaterial",uniforms:oa(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,B,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ds.copy(S.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(LC.makeRotationFromEuler(Ds)),u.material.toneMapped=rt.getTransfer(w.colorSpace)!==_t,(h!==w||d!==w.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=w,d=w.version,f=n.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Je(new Es(2,2),new Mt({name:"BackgroundMaterial",uniforms:oa(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=rt.getTransfer(w.colorSpace)!==_t,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||d!==w.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=w,d=w.version,f=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function A(_,S){_.getRGB(Sc,_0(n)),i.buffers.color.setClear(Sc.r,Sc.g,Sc.b,S,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,S=1){o.set(_),l=S,A(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,A(o,l)},render:m,addToRenderList:g,dispose:y}}function UC(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(E,b,R,U,Q){let F=!1;const k=h(U,R,b);r!==k&&(r=k,c(r.object)),F=f(E,U,R,Q),F&&p(E,U,R,Q),Q!==null&&e.update(Q,n.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,S(E,b,R,U),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function h(E,b,R){const U=R.wireframe===!0;let Q=i[E.id];Q===void 0&&(Q={},i[E.id]=Q);let F=Q[b.id];F===void 0&&(F={},Q[b.id]=F);let k=F[U];return k===void 0&&(k=d(l()),F[U]=k),k}function d(E){const b=[],R=[],U=[];for(let Q=0;Q<t;Q++)b[Q]=0,R[Q]=0,U[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:R,attributeDivisors:U,object:E,attributes:{},index:null}}function f(E,b,R,U){const Q=r.attributes,F=b.attributes;let k=0;const X=R.getAttributes();for(const z in X)if(X[z].location>=0){const ie=Q[z];let ee=F[z];if(ee===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(ee=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(ee=E.instanceColor)),ie===void 0||ie.attribute!==ee||ee&&ie.data!==ee.data)return!0;k++}return r.attributesNum!==k||r.index!==U}function p(E,b,R,U){const Q={},F=b.attributes;let k=0;const X=R.getAttributes();for(const z in X)if(X[z].location>=0){let ie=F[z];ie===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(ie=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(ie=E.instanceColor));const ee={};ee.attribute=ie,ie&&ie.data&&(ee.data=ie.data),Q[z]=ee,k++}r.attributes=Q,r.attributesNum=k,r.index=U}function m(){const E=r.newAttributes;for(let b=0,R=E.length;b<R;b++)E[b]=0}function g(E){A(E,0)}function A(E,b){const R=r.newAttributes,U=r.enabledAttributes,Q=r.attributeDivisors;R[E]=1,U[E]===0&&(n.enableVertexAttribArray(E),U[E]=1),Q[E]!==b&&(n.vertexAttribDivisor(E,b),Q[E]=b)}function y(){const E=r.newAttributes,b=r.enabledAttributes;for(let R=0,U=b.length;R<U;R++)b[R]!==E[R]&&(n.disableVertexAttribArray(R),b[R]=0)}function _(E,b,R,U,Q,F,k){k===!0?n.vertexAttribIPointer(E,b,R,Q,F):n.vertexAttribPointer(E,b,R,U,Q,F)}function S(E,b,R,U){m();const Q=U.attributes,F=R.getAttributes(),k=b.defaultAttributeValues;for(const X in F){const z=F[X];if(z.location>=0){let te=Q[X];if(te===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(te=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(te=E.instanceColor)),te!==void 0){const ie=te.normalized,ee=te.itemSize,pe=e.get(te);if(pe===void 0)continue;const be=pe.buffer,et=pe.type,At=pe.bytesPerElement,K=et===n.INT||et===n.UNSIGNED_INT||te.gpuType===rf;if(te.isInterleavedBufferAttribute){const $=te.data,me=$.stride,We=te.offset;if($.isInstancedInterleavedBuffer){for(let Te=0;Te<z.locationSize;Te++)A(z.location+Te,$.meshPerAttribute);E.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Te=0;Te<z.locationSize;Te++)g(z.location+Te);n.bindBuffer(n.ARRAY_BUFFER,be);for(let Te=0;Te<z.locationSize;Te++)_(z.location+Te,ee/z.locationSize,et,ie,me*At,(We+ee/z.locationSize*Te)*At,K)}else{if(te.isInstancedBufferAttribute){for(let $=0;$<z.locationSize;$++)A(z.location+$,te.meshPerAttribute);E.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let $=0;$<z.locationSize;$++)g(z.location+$);n.bindBuffer(n.ARRAY_BUFFER,be);for(let $=0;$<z.locationSize;$++)_(z.location+$,ee/z.locationSize,et,ie,ee*At,ee/z.locationSize*$*At,K)}}else if(k!==void 0){const ie=k[X];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(z.location,ie);break;case 3:n.vertexAttrib3fv(z.location,ie);break;case 4:n.vertexAttrib4fv(z.location,ie);break;default:n.vertexAttrib1fv(z.location,ie)}}}}y()}function w(){P();for(const E in i){const b=i[E];for(const R in b){const U=b[R];for(const Q in U)u(U[Q].object),delete U[Q];delete b[R]}delete i[E]}}function C(E){if(i[E.id]===void 0)return;const b=i[E.id];for(const R in b){const U=b[R];for(const Q in U)u(U[Q].object),delete U[Q];delete b[R]}delete i[E.id]}function B(E){for(const b in i){const R=i[b];if(R[E.id]===void 0)continue;const U=R[E.id];for(const Q in U)u(U[Q].object),delete U[Q];delete R[E.id]}}function P(){v(),a=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:v,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:B,initAttributes:m,enableAttribute:g,disableUnusedAttributes:y}}function FC(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let p=0;p<h;p++)f+=u[p];t.update(f,i,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)a(c[p],u[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let p=0;for(let m=0;m<h;m++)p+=u[m]*d[m];t.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function NC(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(B){return!(B!==Jt&&i.convert(B)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(B){const P=B===Bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Ye&&i.convert(B)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==cn&&!P)}function l(B){if(B==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ie("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),A=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=p>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:g,maxAttributes:A,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:w,maxSamples:C}}function QC(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new is,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const p=h.clippingPlanes,m=h.clipIntersection,g=h.clipShadows,A=n.get(h);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{const y=r?0:i,_=y*4;let S=A.clippingState||null;l.value=S,S=u(p,d,_,f);for(let w=0;w!==_;++w)S[w]=t[w];A.clippingState=S,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,p){const m=h!==null?h.length:0;let g=null;if(m!==0){if(g=l.value,p!==!0||g===null){const A=f+m*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<A)&&(g=new Float32Array(A));for(let _=0,S=f;_!==m;++_,S+=4)a.copy(h[_]).applyMatrix4(y,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function OC(n){let e=new WeakMap;function t(a,o){return o===cd?a.mapping=ir:o===ld&&(a.mapping=ia),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===cd||o===ld)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new M0(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const ls=4,hp=[.125,.215,.35,.446,.526,.582],zs=20,kC=256,Ga=new Sf,dp=new Se;let Yu=null,Ku=0,Ju=0,Zu=!1;const GC=new x;class fp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=GC}=r;Yu=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yu,Ku,Ju),this._renderer.xr.enabled=Zu,e.scissorTest=!1,Lr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ir||e.mapping===ia?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yu=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:Bn,format:Jt,colorSpace:sn,depthBuffer:!1},s=Ap(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ap(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zC(r)),this._blurMaterial=VC(r,e,t),this._ggxMaterial=HC(r,e,t)}return s}_compileMaterial(e){const t=new Je(new Ze,e);this._renderer.compile(t,Ga)}_sceneToCubeUV(e,t,i,s,r){const l=new Kt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(dp),h.toneMapping=ps,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Je(new _s,new li({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1})));const m=this._backgroundBox,g=m.material;let A=!1;const y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,A=!0):(g.color.copy(dp),A=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[_],r.y,r.z)):S===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[_]));const w=this._cubeSize;Lr(s,S*w,_>2?w:0,w,w),h.setRenderTarget(s),A&&h.render(m,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ir||e.mapping===ia;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pp());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Lr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ga)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=.05+c*.95,f=h*d,{_lodMax:p}=this,m=this._sizeLods[i],g=3*m*(i>p-ls?i-p+ls:0),A=4*(this._cubeSize-m);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Lr(r,g,A,3*m,2*m),s.setRenderTarget(r),s.render(o,Ga),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-i,Lr(e,g,A,3*m,2*m),s.setRenderTarget(e),s.render(o,Ga)}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const d=c.uniforms,f=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*zs-1),m=r/p,g=isFinite(r)?1+Math.floor(u*m):zs;g>zs&&Ie(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${zs}`);const A=[];let y=0;for(let B=0;B<zs;++B){const P=B/m,v=Math.exp(-P*P/2);A.push(v),B===0?y+=v:B<g&&(y+=2*v)}for(let B=0;B<A.length;B++)A[B]=A[B]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=A,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=p,d.mipInt.value=_-i;const S=this._sizeLods[s],w=3*S*(s>_-ls?s-_+ls:0),C=4*(this._cubeSize-S);Lr(t,w,C,3*S,2*S),l.setRenderTarget(t),l.render(h,Ga)}}function zC(n){const e=[],t=[],i=[];let s=n;const r=n-ls+1+hp.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-ls?l=hp[a-n+ls-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,m=3,g=2,A=1,y=new Float32Array(m*p*f),_=new Float32Array(g*p*f),S=new Float32Array(A*p*f);for(let C=0;C<f;C++){const B=C%3*2/3-1,P=C>2?0:-1,v=[B,P,0,B+2/3,P,0,B+2/3,P+1,0,B,P,0,B+2/3,P+1,0,B,P+1,0];y.set(v,m*p*C),_.set(d,g*p*C);const E=[C,C,C,C,C,C];S.set(E,A*p*C)}const w=new Ze;w.setAttribute("position",new Ge(y,m)),w.setAttribute("uv",new Ge(_,g)),w.setAttribute("faceIndex",new Ge(S,A)),i.push(new Je(w,null)),s>ls&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Ap(n,e,t){const i=new di(n,e,t);return i.texture.mapping=ql,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Lr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function HC(n,e,t){return new Mt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jl(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function VC(n,e,t){const i=new Float32Array(zs),s=new x(0,1,0);return new Mt({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jl(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function pp(){return new Mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jl(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function gp(){return new Mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function jl(){return`

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
	`}function WC(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===cd||l===ld,u=l===ir||l===ia;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new fp(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new fp(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function qC(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&To("WebGLRenderer: "+i+" extension not supported."),s}}}function XC(n,e,t,i){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,p=h.attributes.position;let m=0;if(f!==null){const y=f.array;m=f.version;for(let _=0,S=y.length;_<S;_+=3){const w=y[_+0],C=y[_+1],B=y[_+2];d.push(w,C,C,B,B,w)}}else if(p!==void 0){const y=p.array;m=p.version;for(let _=0,S=y.length/3-1;_<S;_+=3){const w=_+0,C=_+1,B=_+2;d.push(w,C,C,B,B,w)}}else return;const g=new(f0(d)?x0:m0)(d,1);g.version=m;const A=r.get(h);A&&e.remove(A),r.set(h,g)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function YC(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*a),t.update(f,i,1)}function c(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,r,d*a,p),t.update(f,i,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,p);let g=0;for(let A=0;A<p;A++)g+=f[A];t.update(g,i,1)}function h(d,f,p,m){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let A=0;A<d.length;A++)c(d[A]/a,f[A],m[A]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,m,0,p);let A=0;for(let y=0;y<p;y++)A+=f[y]*m[y];t.update(A,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function KC(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ke("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function JC(n,e,t){const i=new WeakMap,s=new ft;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let v=function(){B.dispose(),i.delete(o),o.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let _=0;f===!0&&(_=1),p===!0&&(_=2),m===!0&&(_=3);let S=o.attributes.position.count*_,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const C=new Float32Array(S*w*4*h),B=new A0(C,S,w,h);B.type=cn,B.needsUpdate=!0;const P=_*4;for(let E=0;E<h;E++){const b=g[E],R=A[E],U=y[E],Q=S*w*4*E;for(let F=0;F<b.count;F++){const k=F*P;f===!0&&(s.fromBufferAttribute(b,F),C[Q+k+0]=s.x,C[Q+k+1]=s.y,C[Q+k+2]=s.z,C[Q+k+3]=0),p===!0&&(s.fromBufferAttribute(R,F),C[Q+k+4]=s.x,C[Q+k+5]=s.y,C[Q+k+6]=s.z,C[Q+k+7]=0),m===!0&&(s.fromBufferAttribute(U,F),C[Q+k+8]=s.x,C[Q+k+9]=s.y,C[Q+k+10]=s.z,C[Q+k+11]=U.itemSize===4?s.w:1)}}d={count:h,texture:B,size:new Me(S,w)},i.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let m=0;m<c.length;m++)f+=c[m];const p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function ZC(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const G0=new Gt,mp=new T0(1,1),z0=new A0,H0=new p0,V0=new v0,xp=[],_p=[],Ep=new Float32Array(16),yp=new Float32Array(9),vp=new Float32Array(4);function Sa(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=xp[s];if(r===void 0&&(r=new Float32Array(s),xp[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $l(n,e){let t=_p[e];t===void 0&&(t=new Int32Array(e),_p[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function jC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function $C(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2fv(this.addr,e),Xt(t,e)}}function eI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;n.uniform3fv(this.addr,e),Xt(t,e)}}function tI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4fv(this.addr,e),Xt(t,e)}}function nI(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,i))return;vp.set(i),n.uniformMatrix2fv(this.addr,!1,vp),Xt(t,i)}}function iI(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,i))return;yp.set(i),n.uniformMatrix3fv(this.addr,!1,yp),Xt(t,i)}}function sI(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,i))return;Ep.set(i),n.uniformMatrix4fv(this.addr,!1,Ep),Xt(t,i)}}function rI(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function aI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2iv(this.addr,e),Xt(t,e)}}function oI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3iv(this.addr,e),Xt(t,e)}}function cI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4iv(this.addr,e),Xt(t,e)}}function lI(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function uI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2uiv(this.addr,e),Xt(t,e)}}function hI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3uiv(this.addr,e),Xt(t,e)}}function dI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4uiv(this.addr,e),Xt(t,e)}}function fI(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(mp.compareFunction=d0,r=mp):r=G0,t.setTexture2D(e||r,s)}function AI(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||H0,s)}function pI(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||V0,s)}function gI(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||z0,s)}function mI(n){switch(n){case 5126:return jC;case 35664:return $C;case 35665:return eI;case 35666:return tI;case 35674:return nI;case 35675:return iI;case 35676:return sI;case 5124:case 35670:return rI;case 35667:case 35671:return aI;case 35668:case 35672:return oI;case 35669:case 35673:return cI;case 5125:return lI;case 36294:return uI;case 36295:return hI;case 36296:return dI;case 35678:case 36198:case 36298:case 36306:case 35682:return fI;case 35679:case 36299:case 36307:return AI;case 35680:case 36300:case 36308:case 36293:return pI;case 36289:case 36303:case 36311:case 36292:return gI}}function xI(n,e){n.uniform1fv(this.addr,e)}function _I(n,e){const t=Sa(e,this.size,2);n.uniform2fv(this.addr,t)}function EI(n,e){const t=Sa(e,this.size,3);n.uniform3fv(this.addr,t)}function yI(n,e){const t=Sa(e,this.size,4);n.uniform4fv(this.addr,t)}function vI(n,e){const t=Sa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function MI(n,e){const t=Sa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function SI(n,e){const t=Sa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function CI(n,e){n.uniform1iv(this.addr,e)}function II(n,e){n.uniform2iv(this.addr,e)}function wI(n,e){n.uniform3iv(this.addr,e)}function bI(n,e){n.uniform4iv(this.addr,e)}function TI(n,e){n.uniform1uiv(this.addr,e)}function BI(n,e){n.uniform2uiv(this.addr,e)}function RI(n,e){n.uniform3uiv(this.addr,e)}function DI(n,e){n.uniform4uiv(this.addr,e)}function LI(n,e,t){const i=this.cache,s=e.length,r=$l(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||G0,r[a])}function PI(n,e,t){const i=this.cache,s=e.length,r=$l(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||H0,r[a])}function UI(n,e,t){const i=this.cache,s=e.length,r=$l(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||V0,r[a])}function FI(n,e,t){const i=this.cache,s=e.length,r=$l(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||z0,r[a])}function NI(n){switch(n){case 5126:return xI;case 35664:return _I;case 35665:return EI;case 35666:return yI;case 35674:return vI;case 35675:return MI;case 35676:return SI;case 5124:case 35670:return CI;case 35667:case 35671:return II;case 35668:case 35672:return wI;case 35669:case 35673:return bI;case 5125:return TI;case 36294:return BI;case 36295:return RI;case 36296:return DI;case 35678:case 36198:case 36298:case 36306:case 35682:return LI;case 35679:case 36299:case 36307:return PI;case 35680:case 36300:case 36308:case 36293:return UI;case 36289:case 36303:case 36311:case 36292:return FI}}class QI{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=mI(t.type)}}class OI{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=NI(t.type)}}class kI{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const ju=/(\w+)(\])?(\[|\.)?/g;function Mp(n,e){n.seq.push(e),n.map[e.id]=e}function GI(n,e,t){const i=n.name,s=i.length;for(ju.lastIndex=0;;){const r=ju.exec(i),a=ju.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Mp(t,c===void 0?new QI(o,n,e):new OI(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new kI(o),Mp(t,h)),t=h}}}class fl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);GI(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Sp(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const zI=37297;let HI=0;function VI(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Cp=new Ne;function WI(n){rt._getMatrix(Cp,rt.workingColorSpace,n);const e=`mat3( ${Cp.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case Bl:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ip(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+VI(n.getShaderSource(e),o)}else return r}function qI(n,e){const t=WI(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function XI(n,e){let t;switch(e){case $E:t="Linear";break;case s0:t="Reinhard";break;case ey:t="Cineon";break;case ty:t="ACESFilmic";break;case iy:t="AgX";break;case sy:t="Neutral";break;case ny:t="Custom";break;default:Ie("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cc=new x;function YI(){rt.getLuminanceCoefficients(Cc);const n=Cc.x.toFixed(4),e=Cc.y.toFixed(4),t=Cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KI(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function JI(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ZI(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function no(n){return n!==""}function wp(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jI=/^[ \t]*#include +<([\w\d./]+)>/gm;function Td(n){return n.replace(jI,ew)}const $I=new Map;function ew(n,e){let t=Xe[e];if(t===void 0){const i=$I.get(e);if(i!==void 0)t=Xe[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Td(t)}const tw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tp(n){return n.replace(tw,nw)}function nw(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bp(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function iw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===nf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===DE?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function sw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ir:case ia:e="ENVMAP_TYPE_CUBE";break;case ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ia:e="ENVMAP_MODE_REFRACTION";break}return e}function aw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case i0:e="ENVMAP_BLENDING_MULTIPLY";break;case ZE:e="ENVMAP_BLENDING_MIX";break;case jE:e="ENVMAP_BLENDING_ADD";break}return e}function ow(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function cw(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=iw(t),c=sw(t),u=rw(t),h=aw(t),d=ow(t),f=KI(t),p=JI(r),m=s.createProgram();let g,A,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(no).join(`
`),g.length>0&&(g+=`
`),A=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(no).join(`
`),A.length>0&&(A+=`
`)):(g=[Bp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),A=[Bp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ps?"#define TONE_MAPPING":"",t.toneMapping!==ps?Xe.tonemapping_pars_fragment:"",t.toneMapping!==ps?XI("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,qI("linearToOutputTexel",t.outputColorSpace),YI(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(no).join(`
`)),a=Td(a),a=wp(a,t),a=bp(a,t),o=Td(o),o=wp(o,t),o=bp(o,t),a=Tp(a),o=Tp(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,A=["#define varying in",t.glslVersion===vA?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vA?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);const _=y+g+a,S=y+A+o,w=Sp(s,s.VERTEX_SHADER,_),C=Sp(s,s.FRAGMENT_SHADER,S);s.attachShader(m,w),s.attachShader(m,C),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function B(b){if(n.debug.checkShaderErrors){const R=s.getProgramInfoLog(m)||"",U=s.getShaderInfoLog(w)||"",Q=s.getShaderInfoLog(C)||"",F=R.trim(),k=U.trim(),X=Q.trim();let z=!0,te=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,w,C);else{const ie=Ip(s,w,"vertex"),ee=Ip(s,C,"fragment");Ke("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+F+`
`+ie+`
`+ee)}else F!==""?Ie("WebGLProgram: Program Info Log:",F):(k===""||X==="")&&(te=!1);te&&(b.diagnostics={runnable:z,programLog:F,vertexShader:{log:k,prefix:g},fragmentShader:{log:X,prefix:A}})}s.deleteShader(w),s.deleteShader(C),P=new fl(s,m),v=ZI(s,m)}let P;this.getUniforms=function(){return P===void 0&&B(this),P};let v;this.getAttributes=function(){return v===void 0&&B(this),v};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(m,zI)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=HI++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=C,this}let lw=0;class uw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new hw(e),t.set(e,i)),i}}class hw{constructor(e){this.id=lw++,this.code=e,this.usedTimes=0}}function dw(n,e,t,i,s,r,a){const o=new ff,l=new uw,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function g(v,E,b,R,U){const Q=R.fog,F=U.geometry,k=v.isMeshStandardMaterial?R.environment:null,X=(v.isMeshStandardMaterial?t:e).get(v.envMap||k),z=X&&X.mapping===ql?X.image.height:null,te=p[v.type];v.precision!==null&&(f=s.getMaxPrecision(v.precision),f!==v.precision&&Ie("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const ie=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ee=ie!==void 0?ie.length:0;let pe=0;F.morphAttributes.position!==void 0&&(pe=1),F.morphAttributes.normal!==void 0&&(pe=2),F.morphAttributes.color!==void 0&&(pe=3);let be,et,At,K;if(te){const mt=si[te];be=mt.vertexShader,et=mt.fragmentShader}else be=v.vertexShader,et=v.fragmentShader,l.update(v),At=l.getVertexShaderID(v),K=l.getFragmentShaderID(v);const $=n.getRenderTarget(),me=n.state.buffers.depth.getReversed(),We=U.isInstancedMesh===!0,Te=U.isBatchedMesh===!0,tt=!!v.map,jt=!!v.matcap,je=!!X,Bt=!!v.aoMap,D=!!v.lightMap,nt=!!v.bumpMap,it=!!v.normalMap,St=!!v.displacementMap,ye=!!v.emissiveMap,Dt=!!v.metalnessMap,Re=!!v.roughnessMap,Ve=v.anisotropy>0,T=v.clearcoat>0,M=v.dispersion>0,G=v.iridescence>0,Y=v.sheen>0,j=v.transmission>0,q=Ve&&!!v.anisotropyMap,we=T&&!!v.clearcoatMap,he=T&&!!v.clearcoatNormalMap,De=T&&!!v.clearcoatRoughnessMap,Ce=G&&!!v.iridescenceMap,ne=G&&!!v.iridescenceThicknessMap,ae=Y&&!!v.sheenColorMap,Fe=Y&&!!v.sheenRoughnessMap,Pe=!!v.specularMap,Ae=!!v.specularColorMap,Oe=!!v.specularIntensityMap,L=j&&!!v.transmissionMap,de=j&&!!v.thicknessMap,oe=!!v.gradientMap,ce=!!v.alphaMap,se=v.alphaTest>0,J=!!v.alphaHash,_e=!!v.extensions;let ze=ps;v.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ze=n.toneMapping);const Ct={shaderID:te,shaderType:v.type,shaderName:v.name,vertexShader:be,fragmentShader:et,defines:v.defines,customVertexShaderID:At,customFragmentShaderID:K,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Te,batchingColor:Te&&U._colorsTexture!==null,instancing:We,instancingColor:We&&U.instanceColor!==null,instancingMorph:We&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?n.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:sn,alphaToCoverage:!!v.alphaToCoverage,map:tt,matcap:jt,envMap:je,envMapMode:je&&X.mapping,envMapCubeUVHeight:z,aoMap:Bt,lightMap:D,bumpMap:nt,normalMap:it,displacementMap:d&&St,emissiveMap:ye,normalMapObjectSpace:it&&v.normalMapType===ly,normalMapTangentSpace:it&&v.normalMapType===h0,metalnessMap:Dt,roughnessMap:Re,anisotropy:Ve,anisotropyMap:q,clearcoat:T,clearcoatMap:we,clearcoatNormalMap:he,clearcoatRoughnessMap:De,dispersion:M,iridescence:G,iridescenceMap:Ce,iridescenceThicknessMap:ne,sheen:Y,sheenColorMap:ae,sheenRoughnessMap:Fe,specularMap:Pe,specularColorMap:Ae,specularIntensityMap:Oe,transmission:j,transmissionMap:L,thicknessMap:de,gradientMap:oe,opaque:v.transparent===!1&&v.blending===qr&&v.alphaToCoverage===!1,alphaMap:ce,alphaTest:se,alphaHash:J,combine:v.combine,mapUv:tt&&m(v.map.channel),aoMapUv:Bt&&m(v.aoMap.channel),lightMapUv:D&&m(v.lightMap.channel),bumpMapUv:nt&&m(v.bumpMap.channel),normalMapUv:it&&m(v.normalMap.channel),displacementMapUv:St&&m(v.displacementMap.channel),emissiveMapUv:ye&&m(v.emissiveMap.channel),metalnessMapUv:Dt&&m(v.metalnessMap.channel),roughnessMapUv:Re&&m(v.roughnessMap.channel),anisotropyMapUv:q&&m(v.anisotropyMap.channel),clearcoatMapUv:we&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:he&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&m(v.sheenRoughnessMap.channel),specularMapUv:Pe&&m(v.specularMap.channel),specularColorMapUv:Ae&&m(v.specularColorMap.channel),specularIntensityMapUv:Oe&&m(v.specularIntensityMap.channel),transmissionMapUv:L&&m(v.transmissionMap.channel),thicknessMapUv:de&&m(v.thicknessMap.channel),alphaMapUv:ce&&m(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(it||Ve),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(tt||ce),fog:!!Q,useFog:v.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:me,skinning:U.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:pe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&b.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,decodeVideoTexture:tt&&v.map.isVideoTexture===!0&&rt.getTransfer(v.map.colorSpace)===_t,decodeVideoTextureEmissive:ye&&v.emissiveMap.isVideoTexture===!0&&rt.getTransfer(v.emissiveMap.colorSpace)===_t,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===kt,flipSided:v.side===Vt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:_e&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&v.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function A(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const b in v.defines)E.push(b),E.push(v.defines[b]);return v.isRawShaderMaterial===!1&&(y(E,v),_(E,v),E.push(n.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function y(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function _(v,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),E.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),v.push(o.mask)}function S(v){const E=p[v.type];let b;if(E){const R=si[E];b=jy.clone(R.uniforms)}else b=v.uniforms;return b}function w(v,E){let b;for(let R=0,U=u.length;R<U;R++){const Q=u[R];if(Q.cacheKey===E){b=Q,++b.usedTimes;break}}return b===void 0&&(b=new cw(n,E,v,r),u.push(b)),b}function C(v){if(--v.usedTimes===0){const E=u.indexOf(v);u[E]=u[u.length-1],u.pop(),v.destroy()}}function B(v){l.remove(v)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:A,getUniforms:S,acquireProgram:w,releaseProgram:C,releaseShaderCache:B,programs:u,dispose:P}}function fw(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Aw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Rp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Dp(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h,d,f,p,m,g){let A=n[e];return A===void 0?(A={id:h.id,object:h,geometry:d,material:f,groupOrder:p,renderOrder:h.renderOrder,z:m,group:g},n[e]=A):(A.id=h.id,A.object=h,A.geometry=d,A.material=f,A.groupOrder=p,A.renderOrder=h.renderOrder,A.z=m,A.group=g),e++,A}function o(h,d,f,p,m,g){const A=a(h,d,f,p,m,g);f.transmission>0?i.push(A):f.transparent===!0?s.push(A):t.push(A)}function l(h,d,f,p,m,g){const A=a(h,d,f,p,m,g);f.transmission>0?i.unshift(A):f.transparent===!0?s.unshift(A):t.unshift(A)}function c(h,d){t.length>1&&t.sort(h||Aw),i.length>1&&i.sort(d||Rp),s.length>1&&s.sort(d||Rp)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function pw(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Dp,n.set(i,[a])):s>=r.length?(a=new Dp,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function gw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new x,color:new Se};break;case"SpotLight":t={position:new x,direction:new x,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new x,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new x,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new x,halfWidth:new x,halfHeight:new x};break}return n[e.id]=t,t}}}function mw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let xw=0;function _w(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ew(n){const e=new gw,t=mw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new x);const s=new x,r=new xe,a=new xe;function o(c){let u=0,h=0,d=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let f=0,p=0,m=0,g=0,A=0,y=0,_=0,S=0,w=0,C=0,B=0;c.sort(_w);for(let v=0,E=c.length;v<E;v++){const b=c[v],R=b.color,U=b.intensity,Q=b.distance,F=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=R.r*U,h+=R.g*U,d+=R.b*U;else if(b.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(b.sh.coefficients[k],U);B++}else if(b.isDirectionalLight){const k=e.get(b);if(k.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const X=b.shadow,z=t.get(b);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,i.directionalShadow[f]=z,i.directionalShadowMap[f]=F,i.directionalShadowMatrix[f]=b.shadow.matrix,y++}i.directional[f]=k,f++}else if(b.isSpotLight){const k=e.get(b);k.position.setFromMatrixPosition(b.matrixWorld),k.color.copy(R).multiplyScalar(U),k.distance=Q,k.coneCos=Math.cos(b.angle),k.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),k.decay=b.decay,i.spot[m]=k;const X=b.shadow;if(b.map&&(i.spotLightMap[w]=b.map,w++,X.updateMatrices(b),b.castShadow&&C++),i.spotLightMatrix[m]=X.matrix,b.castShadow){const z=t.get(b);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,i.spotShadow[m]=z,i.spotShadowMap[m]=F,S++}m++}else if(b.isRectAreaLight){const k=e.get(b);k.color.copy(R).multiplyScalar(U),k.halfWidth.set(b.width*.5,0,0),k.halfHeight.set(0,b.height*.5,0),i.rectArea[g]=k,g++}else if(b.isPointLight){const k=e.get(b);if(k.color.copy(b.color).multiplyScalar(b.intensity),k.distance=b.distance,k.decay=b.decay,b.castShadow){const X=b.shadow,z=t.get(b);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,z.shadowCameraNear=X.camera.near,z.shadowCameraFar=X.camera.far,i.pointShadow[p]=z,i.pointShadowMap[p]=F,i.pointShadowMatrix[p]=b.shadow.matrix,_++}i.point[p]=k,p++}else if(b.isHemisphereLight){const k=e.get(b);k.skyColor.copy(b.color).multiplyScalar(U),k.groundColor.copy(b.groundColor).multiplyScalar(U),i.hemi[A]=k,A++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==f||P.pointLength!==p||P.spotLength!==m||P.rectAreaLength!==g||P.hemiLength!==A||P.numDirectionalShadows!==y||P.numPointShadows!==_||P.numSpotShadows!==S||P.numSpotMaps!==w||P.numLightProbes!==B)&&(i.directional.length=f,i.spot.length=m,i.rectArea.length=g,i.point.length=p,i.hemi.length=A,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=B,P.directionalLength=f,P.pointLength=p,P.spotLength=m,P.rectAreaLength=g,P.hemiLength=A,P.numDirectionalShadows=y,P.numPointShadows=_,P.numSpotShadows=S,P.numSpotMaps=w,P.numLightProbes=B,i.version=xw++)}function l(c,u){let h=0,d=0,f=0,p=0,m=0;const g=u.matrixWorldInverse;for(let A=0,y=c.length;A<y;A++){const _=c[A];if(_.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),h++}else if(_.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),f++}else if(_.isRectAreaLight){const S=i.rectArea[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),a.identity(),r.copy(_.matrixWorld),r.premultiply(g),a.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(_.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){const S=i.hemi[m];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:i}}function Lp(n){const e=new Ew(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function yw(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Lp(n),e.set(s,[o])):r>=a.length?(o=new Lp(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const vw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mw=`uniform sampler2D shadow_pass;
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
}`;function Sw(n,e,t){let i=new mf;const s=new Me,r=new Me,a=new ft,o=new D0({depthPacking:u0}),l=new Ev,c={},u=t.maxTextureSize,h={[kn]:Vt,[Vt]:kn,[kt]:kt},d=new Mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:vw,fragmentShader:Mw}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Ze;p.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Je(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nf;let A=this.type;this.render=function(C,B,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const v=n.getRenderTarget(),E=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),R=n.state;R.setBlending(Fi),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const U=A!==ni&&this.type===ni,Q=A===ni&&this.type!==ni;for(let F=0,k=C.length;F<k;F++){const X=C[F],z=X.shadow;if(z===void 0){Ie("WebGLShadowMap:",X,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const te=z.getFrameExtents();if(s.multiply(te),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/te.x),s.x=r.x*te.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/te.y),s.y=r.y*te.y,z.mapSize.y=r.y)),z.map===null||U===!0||Q===!0){const ee=this.type!==ni?{minFilter:tn,magFilter:tn}:{};z.map!==null&&z.map.dispose(),z.map=new di(s.x,s.y,ee),z.map.texture.name=X.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const ie=z.getViewportCount();for(let ee=0;ee<ie;ee++){const pe=z.getViewport(ee);a.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),R.viewport(a),z.updateMatrices(X,ee),i=z.getFrustum(),S(B,P,z.camera,X,this.type)}z.isPointLightShadow!==!0&&this.type===ni&&y(z,P),z.needsUpdate=!1}A=this.type,g.needsUpdate=!1,n.setRenderTarget(v,E,b)};function y(C,B){const P=e.update(m);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new di(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(B,null,P,d,m,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(B,null,P,f,m,null)}function _(C,B,P,v){let E=null;const b=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(b!==void 0)E=b;else if(E=P.isPointLight===!0?l:o,n.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const R=E.uuid,U=B.uuid;let Q=c[R];Q===void 0&&(Q={},c[R]=Q);let F=Q[U];F===void 0&&(F=E.clone(),Q[U]=F,B.addEventListener("dispose",w)),E=F}if(E.visible=B.visible,E.wireframe=B.wireframe,v===ni?E.side=B.shadowSide!==null?B.shadowSide:B.side:E.side=B.shadowSide!==null?B.shadowSide:h[B.side],E.alphaMap=B.alphaMap,E.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,E.map=B.map,E.clipShadows=B.clipShadows,E.clippingPlanes=B.clippingPlanes,E.clipIntersection=B.clipIntersection,E.displacementMap=B.displacementMap,E.displacementScale=B.displacementScale,E.displacementBias=B.displacementBias,E.wireframeLinewidth=B.wireframeLinewidth,E.linewidth=B.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const R=n.properties.get(E);R.light=P}return E}function S(C,B,P,v,E){if(C.visible===!1)return;if(C.layers.test(B.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===ni)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const U=e.update(C),Q=C.material;if(Array.isArray(Q)){const F=U.groups;for(let k=0,X=F.length;k<X;k++){const z=F[k],te=Q[z.materialIndex];if(te&&te.visible){const ie=_(C,te,v,E);C.onBeforeShadow(n,C,B,P,U,ie,z),n.renderBufferDirect(P,null,U,ie,C,z),C.onAfterShadow(n,C,B,P,U,ie,z)}}}else if(Q.visible){const F=_(C,Q,v,E);C.onBeforeShadow(n,C,B,P,U,F,null),n.renderBufferDirect(P,null,U,F,C,null),C.onAfterShadow(n,C,B,P,U,F,null)}}const R=C.children;for(let U=0,Q=R.length;U<Q;U++)S(R[U],B,P,v,E)}function w(C){C.target.removeEventListener("dispose",w);for(const P in c){const v=c[P],E=C.target.uuid;E in v&&(v[E].dispose(),delete v[E])}}}const Cw={[td]:nd,[id]:ad,[sd]:od,[na]:rd,[nd]:td,[ad]:id,[od]:sd,[rd]:na};function Iw(n,e){function t(){let L=!1;const de=new ft;let oe=null;const ce=new ft(0,0,0,0);return{setMask:function(se){oe!==se&&!L&&(n.colorMask(se,se,se,se),oe=se)},setLocked:function(se){L=se},setClear:function(se,J,_e,ze,Ct){Ct===!0&&(se*=ze,J*=ze,_e*=ze),de.set(se,J,_e,ze),ce.equals(de)===!1&&(n.clearColor(se,J,_e,ze),ce.copy(de))},reset:function(){L=!1,oe=null,ce.set(-1,0,0,0)}}}function i(){let L=!1,de=!1,oe=null,ce=null,se=null;return{setReversed:function(J){if(de!==J){const _e=e.get("EXT_clip_control");J?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),de=J;const ze=se;se=null,this.setClear(ze)}},getReversed:function(){return de},setTest:function(J){J?$(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function(J){oe!==J&&!L&&(n.depthMask(J),oe=J)},setFunc:function(J){if(de&&(J=Cw[J]),ce!==J){switch(J){case td:n.depthFunc(n.NEVER);break;case nd:n.depthFunc(n.ALWAYS);break;case id:n.depthFunc(n.LESS);break;case na:n.depthFunc(n.LEQUAL);break;case sd:n.depthFunc(n.EQUAL);break;case rd:n.depthFunc(n.GEQUAL);break;case ad:n.depthFunc(n.GREATER);break;case od:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=J}},setLocked:function(J){L=J},setClear:function(J){se!==J&&(de&&(J=1-J),n.clearDepth(J),se=J)},reset:function(){L=!1,oe=null,ce=null,se=null,de=!1}}}function s(){let L=!1,de=null,oe=null,ce=null,se=null,J=null,_e=null,ze=null,Ct=null;return{setTest:function(mt){L||(mt?$(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(mt){de!==mt&&!L&&(n.stencilMask(mt),de=mt)},setFunc:function(mt,ei,Gn){(oe!==mt||ce!==ei||se!==Gn)&&(n.stencilFunc(mt,ei,Gn),oe=mt,ce=ei,se=Gn)},setOp:function(mt,ei,Gn){(J!==mt||_e!==ei||ze!==Gn)&&(n.stencilOp(mt,ei,Gn),J=mt,_e=ei,ze=Gn)},setLocked:function(mt){L=mt},setClear:function(mt){Ct!==mt&&(n.clearStencil(mt),Ct=mt)},reset:function(){L=!1,de=null,oe=null,ce=null,se=null,J=null,_e=null,ze=null,Ct=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],p=null,m=!1,g=null,A=null,y=null,_=null,S=null,w=null,C=null,B=new Se(0,0,0),P=0,v=!1,E=null,b=null,R=null,U=null,Q=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,X=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(z)[1]),k=X>=1):z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),k=X>=2);let te=null,ie={};const ee=n.getParameter(n.SCISSOR_BOX),pe=n.getParameter(n.VIEWPORT),be=new ft().fromArray(ee),et=new ft().fromArray(pe);function At(L,de,oe,ce){const se=new Uint8Array(4),J=n.createTexture();n.bindTexture(L,J),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let _e=0;_e<oe;_e++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(de+_e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return J}const K={};K[n.TEXTURE_2D]=At(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=At(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=At(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=At(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(n.DEPTH_TEST),a.setFunc(na),nt(!1),it(AA),$(n.CULL_FACE),Bt(Fi);function $(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function me(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function We(L,de){return h[L]!==de?(n.bindFramebuffer(L,de),h[L]=de,L===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=de),L===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=de),!0):!1}function Te(L,de){let oe=f,ce=!1;if(L){oe=d.get(de),oe===void 0&&(oe=[],d.set(de,oe));const se=L.textures;if(oe.length!==se.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let J=0,_e=se.length;J<_e;J++)oe[J]=n.COLOR_ATTACHMENT0+J;oe.length=se.length,ce=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,ce=!0);ce&&n.drawBuffers(oe)}function tt(L){return p!==L?(n.useProgram(L),p=L,!0):!1}const jt={[Gs]:n.FUNC_ADD,[PE]:n.FUNC_SUBTRACT,[UE]:n.FUNC_REVERSE_SUBTRACT};jt[FE]=n.MIN,jt[NE]=n.MAX;const je={[QE]:n.ZERO,[OE]:n.ONE,[kE]:n.SRC_COLOR,[$h]:n.SRC_ALPHA,[qE]:n.SRC_ALPHA_SATURATE,[VE]:n.DST_COLOR,[zE]:n.DST_ALPHA,[GE]:n.ONE_MINUS_SRC_COLOR,[ed]:n.ONE_MINUS_SRC_ALPHA,[WE]:n.ONE_MINUS_DST_COLOR,[HE]:n.ONE_MINUS_DST_ALPHA,[XE]:n.CONSTANT_COLOR,[YE]:n.ONE_MINUS_CONSTANT_COLOR,[KE]:n.CONSTANT_ALPHA,[JE]:n.ONE_MINUS_CONSTANT_ALPHA};function Bt(L,de,oe,ce,se,J,_e,ze,Ct,mt){if(L===Fi){m===!0&&(me(n.BLEND),m=!1);return}if(m===!1&&($(n.BLEND),m=!0),L!==LE){if(L!==g||mt!==v){if((A!==Gs||S!==Gs)&&(n.blendEquation(n.FUNC_ADD),A=Gs,S=Gs),mt)switch(L){case qr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ms:n.blendFunc(n.ONE,n.ONE);break;case pA:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gA:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ke("WebGLState: Invalid blending: ",L);break}else switch(L){case qr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ms:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case pA:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gA:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",L);break}y=null,_=null,w=null,C=null,B.set(0,0,0),P=0,g=L,v=mt}return}se=se||de,J=J||oe,_e=_e||ce,(de!==A||se!==S)&&(n.blendEquationSeparate(jt[de],jt[se]),A=de,S=se),(oe!==y||ce!==_||J!==w||_e!==C)&&(n.blendFuncSeparate(je[oe],je[ce],je[J],je[_e]),y=oe,_=ce,w=J,C=_e),(ze.equals(B)===!1||Ct!==P)&&(n.blendColor(ze.r,ze.g,ze.b,Ct),B.copy(ze),P=Ct),g=L,v=!1}function D(L,de){L.side===kt?me(n.CULL_FACE):$(n.CULL_FACE);let oe=L.side===Vt;de&&(oe=!oe),nt(oe),L.blending===qr&&L.transparent===!1?Bt(Fi):Bt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const ce=L.stencilWrite;o.setTest(ce),ce&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ye(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?$(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)}function nt(L){E!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),E=L)}function it(L){L!==BE?($(n.CULL_FACE),L!==b&&(L===AA?n.cullFace(n.BACK):L===RE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),b=L}function St(L){L!==R&&(k&&n.lineWidth(L),R=L)}function ye(L,de,oe){L?($(n.POLYGON_OFFSET_FILL),(U!==de||Q!==oe)&&(n.polygonOffset(de,oe),U=de,Q=oe)):me(n.POLYGON_OFFSET_FILL)}function Dt(L){L?$(n.SCISSOR_TEST):me(n.SCISSOR_TEST)}function Re(L){L===void 0&&(L=n.TEXTURE0+F-1),te!==L&&(n.activeTexture(L),te=L)}function Ve(L,de,oe){oe===void 0&&(te===null?oe=n.TEXTURE0+F-1:oe=te);let ce=ie[oe];ce===void 0&&(ce={type:void 0,texture:void 0},ie[oe]=ce),(ce.type!==L||ce.texture!==de)&&(te!==oe&&(n.activeTexture(oe),te=oe),n.bindTexture(L,de||K[L]),ce.type=L,ce.texture=de)}function T(){const L=ie[te];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function G(){try{n.compressedTexImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function Y(){try{n.texSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function j(){try{n.texSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function we(){try{n.compressedTexSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function he(){try{n.texStorage2D(...arguments)}catch(L){L("WebGLState:",L)}}function De(){try{n.texStorage3D(...arguments)}catch(L){L("WebGLState:",L)}}function Ce(){try{n.texImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function ne(){try{n.texImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function ae(L){be.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),be.copy(L))}function Fe(L){et.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),et.copy(L))}function Pe(L,de){let oe=c.get(de);oe===void 0&&(oe=new WeakMap,c.set(de,oe));let ce=oe.get(L);ce===void 0&&(ce=n.getUniformBlockIndex(de,L.name),oe.set(L,ce))}function Ae(L,de){const ce=c.get(de).get(L);l.get(de)!==ce&&(n.uniformBlockBinding(de,ce,L.__bindingPointIndex),l.set(de,ce))}function Oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},te=null,ie={},h={},d=new WeakMap,f=[],p=null,m=!1,g=null,A=null,y=null,_=null,S=null,w=null,C=null,B=new Se(0,0,0),P=0,v=!1,E=null,b=null,R=null,U=null,Q=null,be.set(0,0,n.canvas.width,n.canvas.height),et.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:$,disable:me,bindFramebuffer:We,drawBuffers:Te,useProgram:tt,setBlending:Bt,setMaterial:D,setFlipSided:nt,setCullFace:it,setLineWidth:St,setPolygonOffset:ye,setScissorTest:Dt,activeTexture:Re,bindTexture:Ve,unbindTexture:T,compressedTexImage2D:M,compressedTexImage3D:G,texImage2D:Ce,texImage3D:ne,updateUBOMapping:Pe,uniformBlockBinding:Ae,texStorage2D:he,texStorage3D:De,texSubImage2D:Y,texSubImage3D:j,compressedTexSubImage2D:q,compressedTexSubImage3D:we,scissor:ae,viewport:Fe,reset:Oe}}function ww(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(T,M){return f?new OffscreenCanvas(T,M):bo("canvas")}function m(T,M,G){let Y=1;const j=Ve(T);if((j.width>G||j.height>G)&&(Y=G/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(Y*j.width),we=Math.floor(Y*j.height);h===void 0&&(h=p(q,we));const he=M?p(q,we):h;return he.width=q,he.height=we,he.getContext("2d").drawImage(T,0,0,q,we),Ie("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+we+")."),he}else return"data"in T&&Ie("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function g(T){return T.generateMipmaps}function A(T){n.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(T,M,G,Y,j=!1){if(T!==null){if(n[T]!==void 0)return n[T];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=M;if(M===n.RED&&(G===n.FLOAT&&(q=n.R32F),G===n.HALF_FLOAT&&(q=n.R16F),G===n.UNSIGNED_BYTE&&(q=n.R8)),M===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(q=n.R8UI),G===n.UNSIGNED_SHORT&&(q=n.R16UI),G===n.UNSIGNED_INT&&(q=n.R32UI),G===n.BYTE&&(q=n.R8I),G===n.SHORT&&(q=n.R16I),G===n.INT&&(q=n.R32I)),M===n.RG&&(G===n.FLOAT&&(q=n.RG32F),G===n.HALF_FLOAT&&(q=n.RG16F),G===n.UNSIGNED_BYTE&&(q=n.RG8)),M===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(q=n.RG8UI),G===n.UNSIGNED_SHORT&&(q=n.RG16UI),G===n.UNSIGNED_INT&&(q=n.RG32UI),G===n.BYTE&&(q=n.RG8I),G===n.SHORT&&(q=n.RG16I),G===n.INT&&(q=n.RG32I)),M===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(q=n.RGB8UI),G===n.UNSIGNED_SHORT&&(q=n.RGB16UI),G===n.UNSIGNED_INT&&(q=n.RGB32UI),G===n.BYTE&&(q=n.RGB8I),G===n.SHORT&&(q=n.RGB16I),G===n.INT&&(q=n.RGB32I)),M===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),G===n.UNSIGNED_INT&&(q=n.RGBA32UI),G===n.BYTE&&(q=n.RGBA8I),G===n.SHORT&&(q=n.RGBA16I),G===n.INT&&(q=n.RGBA32I)),M===n.RGB&&(G===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),M===n.RGBA){const we=j?Bl:rt.getTransfer(Y);G===n.FLOAT&&(q=n.RGBA32F),G===n.HALF_FLOAT&&(q=n.RGBA16F),G===n.UNSIGNED_BYTE&&(q=we===_t?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function S(T,M){let G;return T?M===null||M===sr||M===_o?G=n.DEPTH24_STENCIL8:M===cn?G=n.DEPTH32F_STENCIL8:M===xo&&(G=n.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===sr||M===_o?G=n.DEPTH_COMPONENT24:M===cn?G=n.DEPTH_COMPONENT32F:M===xo&&(G=n.DEPTH_COMPONENT16),G}function w(T,M){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==tn&&T.minFilter!==wt?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function C(T){const M=T.target;M.removeEventListener("dispose",C),P(M),M.isVideoTexture&&u.delete(M)}function B(T){const M=T.target;M.removeEventListener("dispose",B),E(M)}function P(T){const M=i.get(T);if(M.__webglInit===void 0)return;const G=T.source,Y=d.get(G);if(Y){const j=Y[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&v(T),Object.keys(Y).length===0&&d.delete(G)}i.remove(T)}function v(T){const M=i.get(T);n.deleteTexture(M.__webglTexture);const G=T.source,Y=d.get(G);delete Y[M.__cacheKey],a.memory.textures--}function E(T){const M=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let j=0;j<M.__webglFramebuffer[Y].length;j++)n.deleteFramebuffer(M.__webglFramebuffer[Y][j]);else n.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)n.deleteFramebuffer(M.__webglFramebuffer[Y]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=T.textures;for(let Y=0,j=G.length;Y<j;Y++){const q=i.get(G[Y]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(G[Y])}i.remove(T)}let b=0;function R(){b=0}function U(){const T=b;return T>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),b+=1,T}function Q(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function F(T,M){const G=i.get(T);if(T.isVideoTexture&&Dt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&G.__version!==T.version){const Y=T.image;if(Y===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{K(G,T,M);return}}else T.isExternalTexture&&(G.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+M)}function k(T,M){const G=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){K(G,T,M);return}else T.isExternalTexture&&(G.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+M)}function X(T,M){const G=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){K(G,T,M);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+M)}function z(T,M){const G=i.get(T);if(T.version>0&&G.__version!==T.version){$(G,T,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+M)}const te={[xs]:n.REPEAT,[On]:n.CLAMP_TO_EDGE,[vl]:n.MIRRORED_REPEAT},ie={[tn]:n.NEAREST,[sf]:n.NEAREST_MIPMAP_NEAREST,[to]:n.NEAREST_MIPMAP_LINEAR,[wt]:n.LINEAR,[dl]:n.LINEAR_MIPMAP_NEAREST,[qn]:n.LINEAR_MIPMAP_LINEAR},ee={[uy]:n.NEVER,[gy]:n.ALWAYS,[hy]:n.LESS,[d0]:n.LEQUAL,[dy]:n.EQUAL,[py]:n.GEQUAL,[fy]:n.GREATER,[Ay]:n.NOTEQUAL};function pe(T,M){if(M.type===cn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===wt||M.magFilter===dl||M.magFilter===to||M.magFilter===qn||M.minFilter===wt||M.minFilter===dl||M.minFilter===to||M.minFilter===qn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,te[M.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,te[M.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,te[M.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ie[M.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ie[M.minFilter]),M.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,ee[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===tn||M.minFilter!==to&&M.minFilter!==qn||M.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function be(T,M){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",C));const Y=M.source;let j=d.get(Y);j===void 0&&(j={},d.set(Y,j));const q=Q(M);if(q!==T.__cacheKey){j[q]===void 0&&(j[q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),j[q].usedTimes++;const we=j[T.__cacheKey];we!==void 0&&(j[T.__cacheKey].usedTimes--,we.usedTimes===0&&v(M)),T.__cacheKey=q,T.__webglTexture=j[q].texture}return G}function et(T,M,G){return Math.floor(Math.floor(T/G)/M)}function At(T,M,G,Y){const q=T.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,G,Y,M.data);else{q.sort((ne,ae)=>ne.start-ae.start);let we=0;for(let ne=1;ne<q.length;ne++){const ae=q[we],Fe=q[ne],Pe=ae.start+ae.count,Ae=et(Fe.start,M.width,4),Oe=et(ae.start,M.width,4);Fe.start<=Pe+1&&Ae===Oe&&et(Fe.start+Fe.count-1,M.width,4)===Ae?ae.count=Math.max(ae.count,Fe.start+Fe.count-ae.start):(++we,q[we]=Fe)}q.length=we+1;const he=n.getParameter(n.UNPACK_ROW_LENGTH),De=n.getParameter(n.UNPACK_SKIP_PIXELS),Ce=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let ne=0,ae=q.length;ne<ae;ne++){const Fe=q[ne],Pe=Math.floor(Fe.start/4),Ae=Math.ceil(Fe.count/4),Oe=Pe%M.width,L=Math.floor(Pe/M.width),de=Ae,oe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Oe),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Oe,L,de,oe,G,Y,M.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,he),n.pixelStorei(n.UNPACK_SKIP_PIXELS,De),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ce)}}function K(T,M,G){let Y=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=n.TEXTURE_3D);const j=be(T,M),q=M.source;t.bindTexture(Y,T.__webglTexture,n.TEXTURE0+G);const we=i.get(q);if(q.version!==we.__version||j===!0){t.activeTexture(n.TEXTURE0+G);const he=rt.getPrimaries(rt.workingColorSpace),De=M.colorSpace===oi?null:rt.getPrimaries(M.colorSpace),Ce=M.colorSpace===oi||he===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let ne=m(M.image,!1,s.maxTextureSize);ne=Re(M,ne);const ae=r.convert(M.format,M.colorSpace),Fe=r.convert(M.type);let Pe=_(M.internalFormat,ae,Fe,M.colorSpace,M.isVideoTexture);pe(Y,M);let Ae;const Oe=M.mipmaps,L=M.isVideoTexture!==!0,de=we.__version===void 0||j===!0,oe=q.dataReady,ce=w(M,ne);if(M.isDepthTexture)Pe=S(M.format===vo,M.type),de&&(L?t.texStorage2D(n.TEXTURE_2D,1,Pe,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Pe,ne.width,ne.height,0,ae,Fe,null));else if(M.isDataTexture)if(Oe.length>0){L&&de&&t.texStorage2D(n.TEXTURE_2D,ce,Pe,Oe[0].width,Oe[0].height);for(let se=0,J=Oe.length;se<J;se++)Ae=Oe[se],L?oe&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Ae.width,Ae.height,ae,Fe,Ae.data):t.texImage2D(n.TEXTURE_2D,se,Pe,Ae.width,Ae.height,0,ae,Fe,Ae.data);M.generateMipmaps=!1}else L?(de&&t.texStorage2D(n.TEXTURE_2D,ce,Pe,ne.width,ne.height),oe&&At(M,ne,ae,Fe)):t.texImage2D(n.TEXTURE_2D,0,Pe,ne.width,ne.height,0,ae,Fe,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){L&&de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,Pe,Oe[0].width,Oe[0].height,ne.depth);for(let se=0,J=Oe.length;se<J;se++)if(Ae=Oe[se],M.format!==Jt)if(ae!==null)if(L){if(oe)if(M.layerUpdates.size>0){const _e=up(Ae.width,Ae.height,M.format,M.type);for(const ze of M.layerUpdates){const Ct=Ae.data.subarray(ze*_e/Ae.data.BYTES_PER_ELEMENT,(ze+1)*_e/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,ze,Ae.width,Ae.height,1,ae,Ct)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Ae.width,Ae.height,ne.depth,ae,Ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,Pe,Ae.width,Ae.height,ne.depth,0,Ae.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Ae.width,Ae.height,ne.depth,ae,Fe,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,Pe,Ae.width,Ae.height,ne.depth,0,ae,Fe,Ae.data)}else{L&&de&&t.texStorage2D(n.TEXTURE_2D,ce,Pe,Oe[0].width,Oe[0].height);for(let se=0,J=Oe.length;se<J;se++)Ae=Oe[se],M.format!==Jt?ae!==null?L?oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,Ae.width,Ae.height,ae,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,se,Pe,Ae.width,Ae.height,0,Ae.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?oe&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Ae.width,Ae.height,ae,Fe,Ae.data):t.texImage2D(n.TEXTURE_2D,se,Pe,Ae.width,Ae.height,0,ae,Fe,Ae.data)}else if(M.isDataArrayTexture)if(L){if(de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,Pe,ne.width,ne.height,ne.depth),oe)if(M.layerUpdates.size>0){const se=up(ne.width,ne.height,M.format,M.type);for(const J of M.layerUpdates){const _e=ne.data.subarray(J*se/ne.data.BYTES_PER_ELEMENT,(J+1)*se/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,ne.width,ne.height,1,ae,Fe,_e)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ae,Fe,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,ne.width,ne.height,ne.depth,0,ae,Fe,ne.data);else if(M.isData3DTexture)L?(de&&t.texStorage3D(n.TEXTURE_3D,ce,Pe,ne.width,ne.height,ne.depth),oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ae,Fe,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,ne.width,ne.height,ne.depth,0,ae,Fe,ne.data);else if(M.isFramebufferTexture){if(de)if(L)t.texStorage2D(n.TEXTURE_2D,ce,Pe,ne.width,ne.height);else{let se=ne.width,J=ne.height;for(let _e=0;_e<ce;_e++)t.texImage2D(n.TEXTURE_2D,_e,Pe,se,J,0,ae,Fe,null),se>>=1,J>>=1}}else if(Oe.length>0){if(L&&de){const se=Ve(Oe[0]);t.texStorage2D(n.TEXTURE_2D,ce,Pe,se.width,se.height)}for(let se=0,J=Oe.length;se<J;se++)Ae=Oe[se],L?oe&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,ae,Fe,Ae):t.texImage2D(n.TEXTURE_2D,se,Pe,ae,Fe,Ae);M.generateMipmaps=!1}else if(L){if(de){const se=Ve(ne);t.texStorage2D(n.TEXTURE_2D,ce,Pe,se.width,se.height)}oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae,Fe,ne)}else t.texImage2D(n.TEXTURE_2D,0,Pe,ae,Fe,ne);g(M)&&A(Y),we.__version=q.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function $(T,M,G){if(M.image.length!==6)return;const Y=be(T,M),j=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+G);const q=i.get(j);if(j.version!==q.__version||Y===!0){t.activeTexture(n.TEXTURE0+G);const we=rt.getPrimaries(rt.workingColorSpace),he=M.colorSpace===oi?null:rt.getPrimaries(M.colorSpace),De=M.colorSpace===oi||we===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Ce=M.isCompressedTexture||M.image[0].isCompressedTexture,ne=M.image[0]&&M.image[0].isDataTexture,ae=[];for(let J=0;J<6;J++)!Ce&&!ne?ae[J]=m(M.image[J],!0,s.maxCubemapSize):ae[J]=ne?M.image[J].image:M.image[J],ae[J]=Re(M,ae[J]);const Fe=ae[0],Pe=r.convert(M.format,M.colorSpace),Ae=r.convert(M.type),Oe=_(M.internalFormat,Pe,Ae,M.colorSpace),L=M.isVideoTexture!==!0,de=q.__version===void 0||Y===!0,oe=j.dataReady;let ce=w(M,Fe);pe(n.TEXTURE_CUBE_MAP,M);let se;if(Ce){L&&de&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Oe,Fe.width,Fe.height);for(let J=0;J<6;J++){se=ae[J].mipmaps;for(let _e=0;_e<se.length;_e++){const ze=se[_e];M.format!==Jt?Pe!==null?L?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,0,0,ze.width,ze.height,Pe,ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,Oe,ze.width,ze.height,0,ze.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,0,0,ze.width,ze.height,Pe,Ae,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,Oe,ze.width,ze.height,0,Pe,Ae,ze.data)}}}else{if(se=M.mipmaps,L&&de){se.length>0&&ce++;const J=Ve(ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Oe,J.width,J.height)}for(let J=0;J<6;J++)if(ne){L?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ae[J].width,ae[J].height,Pe,Ae,ae[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Oe,ae[J].width,ae[J].height,0,Pe,Ae,ae[J].data);for(let _e=0;_e<se.length;_e++){const Ct=se[_e].image[J].image;L?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,0,0,Ct.width,Ct.height,Pe,Ae,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,Oe,Ct.width,Ct.height,0,Pe,Ae,Ct.data)}}else{L?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Pe,Ae,ae[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Oe,Pe,Ae,ae[J]);for(let _e=0;_e<se.length;_e++){const ze=se[_e];L?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,0,0,Pe,Ae,ze.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,Oe,Pe,Ae,ze.image[J])}}}g(M)&&A(n.TEXTURE_CUBE_MAP),q.__version=j.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function me(T,M,G,Y,j,q){const we=r.convert(G.format,G.colorSpace),he=r.convert(G.type),De=_(G.internalFormat,we,he,G.colorSpace),Ce=i.get(M),ne=i.get(G);if(ne.__renderTarget=M,!Ce.__hasExternalTextures){const ae=Math.max(1,M.width>>q),Fe=Math.max(1,M.height>>q);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,q,De,ae,Fe,M.depth,0,we,he,null):t.texImage2D(j,q,De,ae,Fe,0,we,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),ye(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,j,ne.__webglTexture,0,St(M)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,j,ne.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(T,M,G){if(n.bindRenderbuffer(n.RENDERBUFFER,T),M.depthBuffer){const Y=M.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,q=S(M.stencilBuffer,j),we=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=St(M);ye(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,q,M.width,M.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,q,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,q,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,T)}else{const Y=M.textures;for(let j=0;j<Y.length;j++){const q=Y[j],we=r.convert(q.format,q.colorSpace),he=r.convert(q.type),De=_(q.internalFormat,we,he,q.colorSpace),Ce=St(M);G&&ye(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,De,M.width,M.height):ye(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,De,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,De,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(M.depthTexture);Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),F(M.depthTexture,0);const j=Y.__webglTexture,q=St(M);if(M.depthTexture.format===yo)ye(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(M.depthTexture.format===vo)ye(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function tt(T){const M=i.get(T),G=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=Y}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const Y=T.texture.mipmaps;Y&&Y.length>0?Te(M.__webglFramebuffer[0],T):Te(M.__webglFramebuffer,T)}else if(G){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=n.createRenderbuffer(),We(M.__webglDepthbuffer[Y],T,!1);else{const j=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,q)}}else{const Y=T.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),We(M.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function jt(T,M,G){const Y=i.get(T);M!==void 0&&me(Y.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&tt(T)}function je(T){const M=T.texture,G=i.get(T),Y=i.get(M);T.addEventListener("dispose",B);const j=T.textures,q=T.isWebGLCubeRenderTarget===!0,we=j.length>1;if(we||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=M.version,a.memory.textures++),q){G.__webglFramebuffer=[];for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[he]=[];for(let De=0;De<M.mipmaps.length;De++)G.__webglFramebuffer[he][De]=n.createFramebuffer()}else G.__webglFramebuffer[he]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)G.__webglFramebuffer[he]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(we)for(let he=0,De=j.length;he<De;he++){const Ce=i.get(j[he]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&ye(T)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let he=0;he<j.length;he++){const De=j[he];G.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[he]);const Ce=r.convert(De.format,De.colorSpace),ne=r.convert(De.type),ae=_(De.internalFormat,Ce,ne,De.colorSpace,T.isXRRenderTarget===!0),Fe=St(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,ae,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,G.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),We(G.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),pe(n.TEXTURE_CUBE_MAP,M);for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0)for(let De=0;De<M.mipmaps.length;De++)me(G.__webglFramebuffer[he][De],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,De);else me(G.__webglFramebuffer[he],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(M)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let he=0,De=j.length;he<De;he++){const Ce=j[he],ne=i.get(Ce);let ae=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ae=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,ne.__webglTexture),pe(ae,Ce),me(G.__webglFramebuffer,T,Ce,n.COLOR_ATTACHMENT0+he,ae,0),g(Ce)&&A(ae)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,Y.__webglTexture),pe(he,M),M.mipmaps&&M.mipmaps.length>0)for(let De=0;De<M.mipmaps.length;De++)me(G.__webglFramebuffer[De],T,M,n.COLOR_ATTACHMENT0,he,De);else me(G.__webglFramebuffer,T,M,n.COLOR_ATTACHMENT0,he,0);g(M)&&A(he),t.unbindTexture()}T.depthBuffer&&tt(T)}function Bt(T){const M=T.textures;for(let G=0,Y=M.length;G<Y;G++){const j=M[G];if(g(j)){const q=y(T),we=i.get(j).__webglTexture;t.bindTexture(q,we),A(q),t.unbindTexture()}}}const D=[],nt=[];function it(T){if(T.samples>0){if(ye(T)===!1){const M=T.textures,G=T.width,Y=T.height;let j=n.COLOR_BUFFER_BIT;const q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(T),he=M.length>1;if(he)for(let Ce=0;Ce<M.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const De=T.texture.mipmaps;De&&De.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ce=0;Ce<M.length;Ce++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[Ce]);const ne=i.get(M[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,G,Y,0,0,G,Y,j,n.NEAREST),l===!0&&(D.length=0,nt.length=0,D.push(n.COLOR_ATTACHMENT0+Ce),T.depthBuffer&&T.resolveDepthBuffer===!1&&(D.push(q),nt.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,nt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,D))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Ce=0;Ce<M.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,we.__webglColorRenderbuffer[Ce]);const ne=i.get(M[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const M=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function St(T){return Math.min(s.maxSamples,T.samples)}function ye(T){const M=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Dt(T){const M=a.render.frame;u.get(T)!==M&&(u.set(T,M),T.update())}function Re(T,M){const G=T.colorSpace,Y=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||G!==sn&&G!==oi&&(rt.getTransfer(G)===_t?(Y!==Jt||j!==Ye)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",G)),M}function Ve(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=R,this.setTexture2D=F,this.setTexture2DArray=k,this.setTexture3D=X,this.setTextureCube=z,this.rebindTextures=jt,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ye}function bw(n,e){function t(i,s=oi){let r;const a=rt.getTransfer(s);if(i===Ye)return n.UNSIGNED_BYTE;if(i===af)return n.UNSIGNED_SHORT_4_4_4_4;if(i===of)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Yl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===a0)return n.BYTE;if(i===o0)return n.SHORT;if(i===xo)return n.UNSIGNED_SHORT;if(i===rf)return n.INT;if(i===sr)return n.UNSIGNED_INT;if(i===cn)return n.FLOAT;if(i===Bn)return n.HALF_FLOAT;if(i===c0)return n.ALPHA;if(i===Eo)return n.RGB;if(i===Jt)return n.RGBA;if(i===yo)return n.DEPTH_COMPONENT;if(i===vo)return n.DEPTH_STENCIL;if(i===os)return n.RED;if(i===cf)return n.RED_INTEGER;if(i===cs)return n.RG;if(i===lf)return n.RG_INTEGER;if(i===uf)return n.RGBA_INTEGER;if(i===Xr||i===Zs||i===Yr||i===ro)if(a===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Xr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Xr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Yr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ml||i===ud||i===sa||i===Mo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ud)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sl||i===So||i===Co)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Sl||i===So)return a===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Co)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===js||i===hd||i===dd||i===fd||i===Kr||i===Ad||i===pd||i===gd||i===md||i===xd||i===_d||i===Ed||i===yd||i===vd)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===js)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hd)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dd)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fd)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kr)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ad)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pd)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gd)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===md)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xd)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_d)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ed)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yd)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vd)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ra||i===Md||i===Cl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ra)return a===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Md)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Cl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Il||i===wl||i===bl||i===Tl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Il)return r.COMPRESSED_RED_RGTC1_EXT;if(i===wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_o?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Tw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bw=`
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

}`;class Rw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new B0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Mt({vertexShader:Tw,fragmentShader:Bw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Je(new Es(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dw extends dr{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null;const m=typeof XRWebGLBinding<"u",g=new Rw,A={},y=t.getContextAttributes();let _=null,S=null;const w=[],C=[],B=new Me;let P=null;const v=new Kt;v.viewport=new ft;const E=new Kt;E.viewport=new ft;const b=[v,E],R=new Ov;let U=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let $=w[K];return $===void 0&&($=new Uu,w[K]=$),$.getTargetRaySpace()},this.getControllerGrip=function(K){let $=w[K];return $===void 0&&($=new Uu,w[K]=$),$.getGripSpace()},this.getHand=function(K){let $=w[K];return $===void 0&&($=new Uu,w[K]=$),$.getHandSpace()};function F(K){const $=C.indexOf(K.inputSource);if($===-1)return;const me=w[$];me!==void 0&&(me.update(K.inputSource,K.frame,c||a),me.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",X);for(let K=0;K<w.length;K++){const $=C[K];$!==null&&(C[K]=null,w[K].disconnect($))}U=null,Q=null,g.reset();for(const K in A)delete A[K];e.setRenderTarget(_),f=null,d=null,h=null,s=null,S=null,At.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&m&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",k),s.addEventListener("inputsourceschange",X),y.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(B),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,We=null,Te=null;y.depth&&(Te=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=y.stencil?vo:yo,We=y.stencil?_o:sr);const tt={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(tt),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new di(d.textureWidth,d.textureHeight,{format:Jt,type:Ye,depthTexture:new T0(d.textureWidth,d.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const me={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new di(f.framebufferWidth,f.framebufferHeight,{format:Jt,type:Ye,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),At.setContext(s),At.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X(K){for(let $=0;$<K.removed.length;$++){const me=K.removed[$],We=C.indexOf(me);We>=0&&(C[We]=null,w[We].disconnect(me))}for(let $=0;$<K.added.length;$++){const me=K.added[$];let We=C.indexOf(me);if(We===-1){for(let tt=0;tt<w.length;tt++)if(tt>=C.length){C.push(me),We=tt;break}else if(C[tt]===null){C[tt]=me,We=tt;break}if(We===-1)break}const Te=w[We];Te&&Te.connect(me)}}const z=new x,te=new x;function ie(K,$,me){z.setFromMatrixPosition($.matrixWorld),te.setFromMatrixPosition(me.matrixWorld);const We=z.distanceTo(te),Te=$.projectionMatrix.elements,tt=me.projectionMatrix.elements,jt=Te[14]/(Te[10]-1),je=Te[14]/(Te[10]+1),Bt=(Te[9]+1)/Te[5],D=(Te[9]-1)/Te[5],nt=(Te[8]-1)/Te[0],it=(tt[8]+1)/tt[0],St=jt*nt,ye=jt*it,Dt=We/(-nt+it),Re=Dt*-nt;if($.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Re),K.translateZ(Dt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Te[10]===-1)K.projectionMatrix.copy($.projectionMatrix),K.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const Ve=jt+Dt,T=je+Dt,M=St-Re,G=ye+(We-Re),Y=Bt*je/T*Ve,j=D*je/T*Ve;K.projectionMatrix.makePerspective(M,G,Y,j,Ve,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ee(K,$){$===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices($.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let $=K.near,me=K.far;g.texture!==null&&(g.depthNear>0&&($=g.depthNear),g.depthFar>0&&(me=g.depthFar)),R.near=E.near=v.near=$,R.far=E.far=v.far=me,(U!==R.near||Q!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),U=R.near,Q=R.far),R.layers.mask=K.layers.mask|6,v.layers.mask=R.layers.mask&3,E.layers.mask=R.layers.mask&5;const We=K.parent,Te=R.cameras;ee(R,We);for(let tt=0;tt<Te.length;tt++)ee(Te[tt],We);Te.length===2?ie(R,v,E):R.projectionMatrix.copy(v.projectionMatrix),pe(K,R,We)};function pe(K,$,me){me===null?K.matrix.copy($.matrixWorld):(K.matrix.copy(me.matrixWorld),K.matrix.invert(),K.matrix.multiply($.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy($.projectionMatrix),K.projectionMatrixInverse.copy($.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=aa*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(R)},this.getCameraTexture=function(K){return A[K]};let be=null;function et(K,$){if(u=$.getViewerPose(c||a),p=$,u!==null){const me=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let We=!1;me.length!==R.cameras.length&&(R.cameras.length=0,We=!0);for(let je=0;je<me.length;je++){const Bt=me[je];let D=null;if(f!==null)D=f.getViewport(Bt);else{const it=h.getViewSubImage(d,Bt);D=it.viewport,je===0&&(e.setRenderTargetTextures(S,it.colorTexture,it.depthStencilTexture),e.setRenderTarget(S))}let nt=b[je];nt===void 0&&(nt=new Kt,nt.layers.enable(je),nt.viewport=new ft,b[je]=nt),nt.matrix.fromArray(Bt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Bt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(D.x,D.y,D.width,D.height),je===0&&(R.matrix.copy(nt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),We===!0&&R.cameras.push(nt)}const Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&m){h=i.getBinding();const je=h.getDepthInformation(me[0]);je&&je.isValid&&je.texture&&g.init(je,s.renderState)}if(Te&&Te.includes("camera-access")&&m){e.state.unbindTexture(),h=i.getBinding();for(let je=0;je<me.length;je++){const Bt=me[je].camera;if(Bt){let D=A[Bt];D||(D=new B0,A[Bt]=D);const nt=h.getCameraImage(Bt);D.sourceTexture=nt}}}}for(let me=0;me<w.length;me++){const We=C[me],Te=w[me];We!==null&&Te!==void 0&&Te.update(We,$,c||a)}be&&be(K,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),p=null}const At=new k0;At.setAnimationLoop(et),this.setAnimationLoop=function(K){be=K},this.dispose=function(){}}}const Ls=new fi,Lw=new xe;function Pw(n,e){function t(g,A){g.matrixAutoUpdate===!0&&g.updateMatrix(),A.value.copy(g.matrix)}function i(g,A){A.color.getRGB(g.fogColor.value,_0(n)),A.isFog?(g.fogNear.value=A.near,g.fogFar.value=A.far):A.isFogExp2&&(g.fogDensity.value=A.density)}function s(g,A,y,_,S){A.isMeshBasicMaterial||A.isMeshLambertMaterial?r(g,A):A.isMeshToonMaterial?(r(g,A),h(g,A)):A.isMeshPhongMaterial?(r(g,A),u(g,A)):A.isMeshStandardMaterial?(r(g,A),d(g,A),A.isMeshPhysicalMaterial&&f(g,A,S)):A.isMeshMatcapMaterial?(r(g,A),p(g,A)):A.isMeshDepthMaterial?r(g,A):A.isMeshDistanceMaterial?(r(g,A),m(g,A)):A.isMeshNormalMaterial?r(g,A):A.isLineBasicMaterial?(a(g,A),A.isLineDashedMaterial&&o(g,A)):A.isPointsMaterial?l(g,A,y,_):A.isSpriteMaterial?c(g,A):A.isShadowMaterial?(g.color.value.copy(A.color),g.opacity.value=A.opacity):A.isShaderMaterial&&(A.uniformsNeedUpdate=!1)}function r(g,A){g.opacity.value=A.opacity,A.color&&g.diffuse.value.copy(A.color),A.emissive&&g.emissive.value.copy(A.emissive).multiplyScalar(A.emissiveIntensity),A.map&&(g.map.value=A.map,t(A.map,g.mapTransform)),A.alphaMap&&(g.alphaMap.value=A.alphaMap,t(A.alphaMap,g.alphaMapTransform)),A.bumpMap&&(g.bumpMap.value=A.bumpMap,t(A.bumpMap,g.bumpMapTransform),g.bumpScale.value=A.bumpScale,A.side===Vt&&(g.bumpScale.value*=-1)),A.normalMap&&(g.normalMap.value=A.normalMap,t(A.normalMap,g.normalMapTransform),g.normalScale.value.copy(A.normalScale),A.side===Vt&&g.normalScale.value.negate()),A.displacementMap&&(g.displacementMap.value=A.displacementMap,t(A.displacementMap,g.displacementMapTransform),g.displacementScale.value=A.displacementScale,g.displacementBias.value=A.displacementBias),A.emissiveMap&&(g.emissiveMap.value=A.emissiveMap,t(A.emissiveMap,g.emissiveMapTransform)),A.specularMap&&(g.specularMap.value=A.specularMap,t(A.specularMap,g.specularMapTransform)),A.alphaTest>0&&(g.alphaTest.value=A.alphaTest);const y=e.get(A),_=y.envMap,S=y.envMapRotation;_&&(g.envMap.value=_,Ls.copy(S),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),g.envMapRotation.value.setFromMatrix4(Lw.makeRotationFromEuler(Ls)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=A.reflectivity,g.ior.value=A.ior,g.refractionRatio.value=A.refractionRatio),A.lightMap&&(g.lightMap.value=A.lightMap,g.lightMapIntensity.value=A.lightMapIntensity,t(A.lightMap,g.lightMapTransform)),A.aoMap&&(g.aoMap.value=A.aoMap,g.aoMapIntensity.value=A.aoMapIntensity,t(A.aoMap,g.aoMapTransform))}function a(g,A){g.diffuse.value.copy(A.color),g.opacity.value=A.opacity,A.map&&(g.map.value=A.map,t(A.map,g.mapTransform))}function o(g,A){g.dashSize.value=A.dashSize,g.totalSize.value=A.dashSize+A.gapSize,g.scale.value=A.scale}function l(g,A,y,_){g.diffuse.value.copy(A.color),g.opacity.value=A.opacity,g.size.value=A.size*y,g.scale.value=_*.5,A.map&&(g.map.value=A.map,t(A.map,g.uvTransform)),A.alphaMap&&(g.alphaMap.value=A.alphaMap,t(A.alphaMap,g.alphaMapTransform)),A.alphaTest>0&&(g.alphaTest.value=A.alphaTest)}function c(g,A){g.diffuse.value.copy(A.color),g.opacity.value=A.opacity,g.rotation.value=A.rotation,A.map&&(g.map.value=A.map,t(A.map,g.mapTransform)),A.alphaMap&&(g.alphaMap.value=A.alphaMap,t(A.alphaMap,g.alphaMapTransform)),A.alphaTest>0&&(g.alphaTest.value=A.alphaTest)}function u(g,A){g.specular.value.copy(A.specular),g.shininess.value=Math.max(A.shininess,1e-4)}function h(g,A){A.gradientMap&&(g.gradientMap.value=A.gradientMap)}function d(g,A){g.metalness.value=A.metalness,A.metalnessMap&&(g.metalnessMap.value=A.metalnessMap,t(A.metalnessMap,g.metalnessMapTransform)),g.roughness.value=A.roughness,A.roughnessMap&&(g.roughnessMap.value=A.roughnessMap,t(A.roughnessMap,g.roughnessMapTransform)),A.envMap&&(g.envMapIntensity.value=A.envMapIntensity)}function f(g,A,y){g.ior.value=A.ior,A.sheen>0&&(g.sheenColor.value.copy(A.sheenColor).multiplyScalar(A.sheen),g.sheenRoughness.value=A.sheenRoughness,A.sheenColorMap&&(g.sheenColorMap.value=A.sheenColorMap,t(A.sheenColorMap,g.sheenColorMapTransform)),A.sheenRoughnessMap&&(g.sheenRoughnessMap.value=A.sheenRoughnessMap,t(A.sheenRoughnessMap,g.sheenRoughnessMapTransform))),A.clearcoat>0&&(g.clearcoat.value=A.clearcoat,g.clearcoatRoughness.value=A.clearcoatRoughness,A.clearcoatMap&&(g.clearcoatMap.value=A.clearcoatMap,t(A.clearcoatMap,g.clearcoatMapTransform)),A.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=A.clearcoatRoughnessMap,t(A.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),A.clearcoatNormalMap&&(g.clearcoatNormalMap.value=A.clearcoatNormalMap,t(A.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(A.clearcoatNormalScale),A.side===Vt&&g.clearcoatNormalScale.value.negate())),A.dispersion>0&&(g.dispersion.value=A.dispersion),A.iridescence>0&&(g.iridescence.value=A.iridescence,g.iridescenceIOR.value=A.iridescenceIOR,g.iridescenceThicknessMinimum.value=A.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=A.iridescenceThicknessRange[1],A.iridescenceMap&&(g.iridescenceMap.value=A.iridescenceMap,t(A.iridescenceMap,g.iridescenceMapTransform)),A.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=A.iridescenceThicknessMap,t(A.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),A.transmission>0&&(g.transmission.value=A.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),A.transmissionMap&&(g.transmissionMap.value=A.transmissionMap,t(A.transmissionMap,g.transmissionMapTransform)),g.thickness.value=A.thickness,A.thicknessMap&&(g.thicknessMap.value=A.thicknessMap,t(A.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=A.attenuationDistance,g.attenuationColor.value.copy(A.attenuationColor)),A.anisotropy>0&&(g.anisotropyVector.value.set(A.anisotropy*Math.cos(A.anisotropyRotation),A.anisotropy*Math.sin(A.anisotropyRotation)),A.anisotropyMap&&(g.anisotropyMap.value=A.anisotropyMap,t(A.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=A.specularIntensity,g.specularColor.value.copy(A.specularColor),A.specularColorMap&&(g.specularColorMap.value=A.specularColorMap,t(A.specularColorMap,g.specularColorMapTransform)),A.specularIntensityMap&&(g.specularIntensityMap.value=A.specularIntensityMap,t(A.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,A){A.matcap&&(g.matcap.value=A.matcap)}function m(g,A){const y=e.get(A).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Uw(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const S=_.program;i.uniformBlockBinding(y,S)}function c(y,_){let S=s[y.id];S===void 0&&(p(y),S=u(y),s[y.id]=S,y.addEventListener("dispose",g));const w=_.program;i.updateUBOMapping(y,w);const C=e.render.frame;r[y.id]!==C&&(d(y),r[y.id]=C)}function u(y){const _=h();y.__bindingPointIndex=_;const S=n.createBuffer(),w=y.__size,C=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,w,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,S),S}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const _=s[y.id],S=y.uniforms,w=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let C=0,B=S.length;C<B;C++){const P=Array.isArray(S[C])?S[C]:[S[C]];for(let v=0,E=P.length;v<E;v++){const b=P[v];if(f(b,C,v,w)===!0){const R=b.__offset,U=Array.isArray(b.value)?b.value:[b.value];let Q=0;for(let F=0;F<U.length;F++){const k=U[F],X=m(k);typeof k=="number"||typeof k=="boolean"?(b.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,R+Q,b.__data)):k.isMatrix3?(b.__data[0]=k.elements[0],b.__data[1]=k.elements[1],b.__data[2]=k.elements[2],b.__data[3]=0,b.__data[4]=k.elements[3],b.__data[5]=k.elements[4],b.__data[6]=k.elements[5],b.__data[7]=0,b.__data[8]=k.elements[6],b.__data[9]=k.elements[7],b.__data[10]=k.elements[8],b.__data[11]=0):(k.toArray(b.__data,Q),Q+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,R,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,_,S,w){const C=y.value,B=_+"_"+S;if(w[B]===void 0)return typeof C=="number"||typeof C=="boolean"?w[B]=C:w[B]=C.clone(),!0;{const P=w[B];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return w[B]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function p(y){const _=y.uniforms;let S=0;const w=16;for(let B=0,P=_.length;B<P;B++){const v=Array.isArray(_[B])?_[B]:[_[B]];for(let E=0,b=v.length;E<b;E++){const R=v[E],U=Array.isArray(R.value)?R.value:[R.value];for(let Q=0,F=U.length;Q<F;Q++){const k=U[Q],X=m(k),z=S%w,te=z%X.boundary,ie=z+te;S+=te,ie!==0&&w-ie<X.storage&&(S+=w-ie),R.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=S,S+=X.storage}}}const C=S%w;return C>0&&(S+=w-C),y.__size=S,y.__cache={},this}function m(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ie("WebGLRenderer: Unsupported uniform value type.",y),_}function g(y){const _=y.target;_.removeEventListener("dispose",g);const S=a.indexOf(_.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function A(){for(const y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}const Fw=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Si=null;function Nw(){return Si===null&&(Si=new Ea(Fw,32,32,cs,Bn),Si.minFilter=wt,Si.magFilter=wt,Si.wrapS=On,Si.wrapT=On,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}class Qw{constructor(e={}){const{canvas:t=my(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const p=new Set([uf,lf,cf]),m=new Set([Ye,sr,xo,_o,af,of]),g=new Uint32Array(4),A=new Int32Array(4);let y=null,_=null;const S=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ps,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let B=!1;this._outputColorSpace=dt;let P=0,v=0,E=null,b=-1,R=null;const U=new ft,Q=new ft;let F=null;const k=new Se(0);let X=0,z=t.width,te=t.height,ie=1,ee=null,pe=null;const be=new ft(0,0,z,te),et=new ft(0,0,z,te);let At=!1;const K=new mf;let $=!1,me=!1;const We=new xe,Te=new x,tt=new ft,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function Bt(){return E===null?ie:1}let D=i;function nt(I,N){return t.getContext(I,N)}try{const I={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r181"),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",_e,!1),D===null){const N="webgl2";if(D=nt(N,I),D===null)throw nt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw I("WebGLRenderer: "+I.message),I}let it,St,ye,Dt,Re,Ve,T,M,G,Y,j,q,we,he,De,Ce,ne,ae,Fe,Pe,Ae,Oe,L,de;function oe(){it=new qC(D),it.init(),Oe=new bw(D,it),St=new NC(D,it,e,Oe),ye=new Iw(D,it),St.reversedDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),Dt=new KC(D),Re=new fw,Ve=new ww(D,it,ye,Re,St,Oe,Dt),T=new OC(C),M=new WC(C),G=new $v(D),L=new UC(D,G),Y=new XC(D,G,Dt,L),j=new ZC(D,Y,G,Dt),Fe=new JC(D,St,Ve),Ce=new QC(Re),q=new dw(C,T,M,it,St,L,Ce),we=new Pw(C,Re),he=new pw,De=new yw(it),ae=new PC(C,T,M,ye,j,f,l),ne=new Sw(C,j,St),de=new Uw(D,Dt,St,ye),Pe=new FC(D,it,Dt),Ae=new YC(D,it,Dt),Dt.programs=q.programs,C.capabilities=St,C.extensions=it,C.properties=Re,C.renderLists=he,C.shadowMap=ne,C.state=ye,C.info=Dt}oe();const ce=new Dw(C,D);this.xr=ce,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const I=it.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=it.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(I){I!==void 0&&(ie=I,this.setSize(z,te,!1))},this.getSize=function(I){return I.set(z,te)},this.setSize=function(I,N,V=!0){if(ce.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}z=I,te=N,t.width=Math.floor(I*ie),t.height=Math.floor(N*ie),V===!0&&(t.style.width=I+"px",t.style.height=N+"px"),this.setViewport(0,0,I,N)},this.getDrawingBufferSize=function(I){return I.set(z*ie,te*ie).floor()},this.setDrawingBufferSize=function(I,N,V){z=I,te=N,ie=V,t.width=Math.floor(I*V),t.height=Math.floor(N*V),this.setViewport(0,0,I,N)},this.getCurrentViewport=function(I){return I.copy(U)},this.getViewport=function(I){return I.copy(be)},this.setViewport=function(I,N,V,W){I.isVector4?be.set(I.x,I.y,I.z,I.w):be.set(I,N,V,W),ye.viewport(U.copy(be).multiplyScalar(ie).round())},this.getScissor=function(I){return I.copy(et)},this.setScissor=function(I,N,V,W){I.isVector4?et.set(I.x,I.y,I.z,I.w):et.set(I,N,V,W),ye.scissor(Q.copy(et).multiplyScalar(ie).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(I){ye.setScissorTest(At=I)},this.setOpaqueSort=function(I){ee=I},this.setTransparentSort=function(I){pe=I},this.getClearColor=function(I){return I.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(I=!0,N=!0,V=!0){let W=0;if(I){let O=!1;if(E!==null){const re=E.texture.format;O=p.has(re)}if(O){const re=E.texture.type,fe=m.has(re),Ee=ae.getClearColor(),ge=ae.getClearAlpha(),Ue=Ee.r,Qe=Ee.g,Be=Ee.b;fe?(g[0]=Ue,g[1]=Qe,g[2]=Be,g[3]=ge,D.clearBufferuiv(D.COLOR,0,g)):(A[0]=Ue,A[1]=Qe,A[2]=Be,A[3]=ge,D.clearBufferiv(D.COLOR,0,A))}else W|=D.COLOR_BUFFER_BIT}N&&(W|=D.DEPTH_BUFFER_BIT),V&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),ae.dispose(),he.dispose(),De.dispose(),Re.dispose(),T.dispose(),M.dispose(),j.dispose(),L.dispose(),de.dispose(),q.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",oA),ce.removeEventListener("sessionend",cA),Is.stop()};function se(I){I.preventDefault(),Dl("WebGLRenderer: Context Lost."),B=!0}function J(){Dl("WebGLRenderer: Context Restored."),B=!1;const I=Dt.autoReset,N=ne.enabled,V=ne.autoUpdate,W=ne.needsUpdate,O=ne.type;oe(),Dt.autoReset=I,ne.enabled=N,ne.autoUpdate=V,ne.needsUpdate=W,ne.type=O}function _e(I){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ze(I){const N=I.target;N.removeEventListener("dispose",ze),Ct(N)}function Ct(I){mt(I),Re.remove(I)}function mt(I){const N=Re.get(I).programs;N!==void 0&&(N.forEach(function(V){q.releaseProgram(V)}),I.isShaderMaterial&&q.releaseShaderCache(I))}this.renderBufferDirect=function(I,N,V,W,O,re){N===null&&(N=jt);const fe=O.isMesh&&O.matrixWorld.determinant()<0,Ee=SE(I,N,V,W,O);ye.setMaterial(W,fe);let ge=V.index,Ue=1;if(W.wireframe===!0){if(ge=Y.getWireframeAttribute(V),ge===void 0)return;Ue=2}const Qe=V.drawRange,Be=V.attributes.position;let st=Qe.start*Ue,xt=(Qe.start+Qe.count)*Ue;re!==null&&(st=Math.max(st,re.start*Ue),xt=Math.min(xt,(re.start+re.count)*Ue)),ge!==null?(st=Math.max(st,0),xt=Math.min(xt,ge.count)):Be!=null&&(st=Math.max(st,0),xt=Math.min(xt,Be.count));const Ft=xt-st;if(Ft<0||Ft===1/0)return;L.setup(O,W,Ee,V,ge);let Nt,yt=Pe;if(ge!==null&&(Nt=G.get(ge),yt=Ae,yt.setIndex(Nt)),O.isMesh)W.wireframe===!0?(ye.setLineWidth(W.wireframeLinewidth*Bt()),yt.setMode(D.LINES)):yt.setMode(D.TRIANGLES);else if(O.isLine){let Le=W.linewidth;Le===void 0&&(Le=1),ye.setLineWidth(Le*Bt()),O.isLineSegments?yt.setMode(D.LINES):O.isLineLoop?yt.setMode(D.LINE_LOOP):yt.setMode(D.LINE_STRIP)}else O.isPoints?yt.setMode(D.POINTS):O.isSprite&&yt.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)To("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))yt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Le=O._multiDrawStarts,Lt=O._multiDrawCounts,ht=O._multiDrawCount,Cn=ge?G.get(ge).bytesPerElement:1,fr=Re.get(W).currentProgram.getUniforms();for(let In=0;In<ht;In++)fr.setValue(D,"_gl_DrawID",In),yt.render(Le[In]/Cn,Lt[In])}else if(O.isInstancedMesh)yt.renderInstances(st,Ft,O.count);else if(V.isInstancedBufferGeometry){const Le=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Lt=Math.min(V.instanceCount,Le);yt.renderInstances(st,Ft,Lt)}else yt.render(st,Ft)};function ei(I,N,V){I.transparent===!0&&I.side===kt&&I.forceSinglePass===!1?(I.side=Vt,I.needsUpdate=!0,Ko(I,N,V),I.side=kn,I.needsUpdate=!0,Ko(I,N,V),I.side=kt):Ko(I,N,V)}this.compile=function(I,N,V=null){V===null&&(V=I),_=De.get(V),_.init(N),w.push(_),V.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(_.pushLight(O),O.castShadow&&_.pushShadow(O))}),I!==V&&I.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(_.pushLight(O),O.castShadow&&_.pushShadow(O))}),_.setupLights();const W=new Set;return I.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const re=O.material;if(re)if(Array.isArray(re))for(let fe=0;fe<re.length;fe++){const Ee=re[fe];ei(Ee,V,O),W.add(Ee)}else ei(re,V,O),W.add(re)}),_=w.pop(),W},this.compileAsync=function(I,N,V=null){const W=this.compile(I,N,V);return new Promise(O=>{function re(){if(W.forEach(function(fe){Re.get(fe).currentProgram.isReady()&&W.delete(fe)}),W.size===0){O(I);return}setTimeout(re,10)}it.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Gn=null;function ME(I){Gn&&Gn(I)}function oA(){Is.stop()}function cA(){Is.start()}const Is=new k0;Is.setAnimationLoop(ME),typeof self<"u"&&Is.setContext(self),this.setAnimationLoop=function(I){Gn=I,ce.setAnimationLoop(I),I===null?Is.stop():Is.start()},ce.addEventListener("sessionstart",oA),ce.addEventListener("sessionend",cA),this.render=function(I,N){if(N!==void 0&&N.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(N),N=ce.getCamera()),I.isScene===!0&&I.onBeforeRender(C,I,N,E),_=De.get(I,w.length),_.init(N),w.push(_),We.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),K.setFromProjectionMatrix(We,ci,N.reversedDepth),me=this.localClippingEnabled,$=Ce.init(this.clippingPlanes,me),y=he.get(I,S.length),y.init(),S.push(y),ce.enabled===!0&&ce.isPresenting===!0){const re=C.xr.getDepthSensingMesh();re!==null&&du(re,N,-1/0,C.sortObjects)}du(I,N,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(ee,pe),je=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,je&&ae.addToRenderList(y,I),this.info.render.frame++,$===!0&&Ce.beginShadows();const V=_.state.shadowsArray;ne.render(V,I,N),$===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=y.opaque,O=y.transmissive;if(_.setupLights(),N.isArrayCamera){const re=N.cameras;if(O.length>0)for(let fe=0,Ee=re.length;fe<Ee;fe++){const ge=re[fe];uA(W,O,I,ge)}je&&ae.render(I);for(let fe=0,Ee=re.length;fe<Ee;fe++){const ge=re[fe];lA(y,I,ge,ge.viewport)}}else O.length>0&&uA(W,O,I,N),je&&ae.render(I),lA(y,I,N);E!==null&&v===0&&(Ve.updateMultisampleRenderTarget(E),Ve.updateRenderTargetMipmap(E)),I.isScene===!0&&I.onAfterRender(C,I,N),L.resetDefaultState(),b=-1,R=null,w.pop(),w.length>0?(_=w[w.length-1],$===!0&&Ce.setGlobalState(C.clippingPlanes,_.state.camera)):_=null,S.pop(),S.length>0?y=S[S.length-1]:y=null};function du(I,N,V,W){if(I.visible===!1)return;if(I.layers.test(N.layers)){if(I.isGroup)V=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(N);else if(I.isLight)_.pushLight(I),I.castShadow&&_.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||K.intersectsSprite(I)){W&&tt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(We);const fe=j.update(I),Ee=I.material;Ee.visible&&y.push(I,fe,Ee,V,tt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||K.intersectsObject(I))){const fe=j.update(I),Ee=I.material;if(W&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),tt.copy(I.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),tt.copy(fe.boundingSphere.center)),tt.applyMatrix4(I.matrixWorld).applyMatrix4(We)),Array.isArray(Ee)){const ge=fe.groups;for(let Ue=0,Qe=ge.length;Ue<Qe;Ue++){const Be=ge[Ue],st=Ee[Be.materialIndex];st&&st.visible&&y.push(I,fe,st,V,tt.z,Be)}}else Ee.visible&&y.push(I,fe,Ee,V,tt.z,null)}}const re=I.children;for(let fe=0,Ee=re.length;fe<Ee;fe++)du(re[fe],N,V,W)}function lA(I,N,V,W){const{opaque:O,transmissive:re,transparent:fe}=I;_.setupLightsView(V),$===!0&&Ce.setGlobalState(C.clippingPlanes,V),W&&ye.viewport(U.copy(W)),O.length>0&&Yo(O,N,V),re.length>0&&Yo(re,N,V),fe.length>0&&Yo(fe,N,V),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function uA(I,N,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[W.id]===void 0&&(_.state.transmissionRenderTarget[W.id]=new di(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Bn:Ye,minFilter:qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const re=_.state.transmissionRenderTarget[W.id],fe=W.viewport||U;re.setSize(fe.z*C.transmissionResolutionScale,fe.w*C.transmissionResolutionScale);const Ee=C.getRenderTarget(),ge=C.getActiveCubeFace(),Ue=C.getActiveMipmapLevel();C.setRenderTarget(re),C.getClearColor(k),X=C.getClearAlpha(),X<1&&C.setClearColor(16777215,.5),C.clear(),je&&ae.render(V);const Qe=C.toneMapping;C.toneMapping=ps;const Be=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),_.setupLightsView(W),$===!0&&Ce.setGlobalState(C.clippingPlanes,W),Yo(I,V,W),Ve.updateMultisampleRenderTarget(re),Ve.updateRenderTargetMipmap(re),it.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let xt=0,Ft=N.length;xt<Ft;xt++){const Nt=N[xt],{object:yt,geometry:Le,material:Lt,group:ht}=Nt;if(Lt.side===kt&&yt.layers.test(W.layers)){const Cn=Lt.side;Lt.side=Vt,Lt.needsUpdate=!0,hA(yt,V,W,Le,Lt,ht),Lt.side=Cn,Lt.needsUpdate=!0,st=!0}}st===!0&&(Ve.updateMultisampleRenderTarget(re),Ve.updateRenderTargetMipmap(re))}C.setRenderTarget(Ee,ge,Ue),C.setClearColor(k,X),Be!==void 0&&(W.viewport=Be),C.toneMapping=Qe}function Yo(I,N,V){const W=N.isScene===!0?N.overrideMaterial:null;for(let O=0,re=I.length;O<re;O++){const fe=I[O],{object:Ee,geometry:ge,group:Ue}=fe;let Qe=fe.material;Qe.allowOverride===!0&&W!==null&&(Qe=W),Ee.layers.test(V.layers)&&hA(Ee,N,V,ge,Qe,Ue)}}function hA(I,N,V,W,O,re){I.onBeforeRender(C,N,V,W,O,re),I.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),O.onBeforeRender(C,N,V,W,I,re),O.transparent===!0&&O.side===kt&&O.forceSinglePass===!1?(O.side=Vt,O.needsUpdate=!0,C.renderBufferDirect(V,N,W,O,I,re),O.side=kn,O.needsUpdate=!0,C.renderBufferDirect(V,N,W,O,I,re),O.side=kt):C.renderBufferDirect(V,N,W,O,I,re),I.onAfterRender(C,N,V,W,O,re)}function Ko(I,N,V){N.isScene!==!0&&(N=jt);const W=Re.get(I),O=_.state.lights,re=_.state.shadowsArray,fe=O.state.version,Ee=q.getParameters(I,O.state,re,N,V),ge=q.getProgramCacheKey(Ee);let Ue=W.programs;W.environment=I.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(I.isMeshStandardMaterial?M:T).get(I.envMap||W.environment),W.envMapRotation=W.environment!==null&&I.envMap===null?N.environmentRotation:I.envMapRotation,Ue===void 0&&(I.addEventListener("dispose",ze),Ue=new Map,W.programs=Ue);let Qe=Ue.get(ge);if(Qe!==void 0){if(W.currentProgram===Qe&&W.lightsStateVersion===fe)return fA(I,Ee),Qe}else Ee.uniforms=q.getUniforms(I),I.onBeforeCompile(Ee,C),Qe=q.acquireProgram(Ee,ge),Ue.set(ge,Qe),W.uniforms=Ee.uniforms;const Be=W.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Be.clippingPlanes=Ce.uniform),fA(I,Ee),W.needsLights=IE(I),W.lightsStateVersion=fe,W.needsLights&&(Be.ambientLightColor.value=O.state.ambient,Be.lightProbe.value=O.state.probe,Be.directionalLights.value=O.state.directional,Be.directionalLightShadows.value=O.state.directionalShadow,Be.spotLights.value=O.state.spot,Be.spotLightShadows.value=O.state.spotShadow,Be.rectAreaLights.value=O.state.rectArea,Be.ltc_1.value=O.state.rectAreaLTC1,Be.ltc_2.value=O.state.rectAreaLTC2,Be.pointLights.value=O.state.point,Be.pointLightShadows.value=O.state.pointShadow,Be.hemisphereLights.value=O.state.hemi,Be.directionalShadowMap.value=O.state.directionalShadowMap,Be.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Be.spotShadowMap.value=O.state.spotShadowMap,Be.spotLightMatrix.value=O.state.spotLightMatrix,Be.spotLightMap.value=O.state.spotLightMap,Be.pointShadowMap.value=O.state.pointShadowMap,Be.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Qe,W.uniformsList=null,Qe}function dA(I){if(I.uniformsList===null){const N=I.currentProgram.getUniforms();I.uniformsList=fl.seqWithValue(N.seq,I.uniforms)}return I.uniformsList}function fA(I,N){const V=Re.get(I);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function SE(I,N,V,W,O){N.isScene!==!0&&(N=jt),Ve.resetTextureUnits();const re=N.fog,fe=W.isMeshStandardMaterial?N.environment:null,Ee=E===null?C.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:sn,ge=(W.isMeshStandardMaterial?M:T).get(W.envMap||fe),Ue=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Qe=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Be=!!V.morphAttributes.position,st=!!V.morphAttributes.normal,xt=!!V.morphAttributes.color;let Ft=ps;W.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Ft=C.toneMapping);const Nt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,yt=Nt!==void 0?Nt.length:0,Le=Re.get(W),Lt=_.state.lights;if($===!0&&(me===!0||I!==R)){const ln=I===R&&W.id===b;Ce.setState(W,I,ln)}let ht=!1;W.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Lt.state.version||Le.outputColorSpace!==Ee||O.isBatchedMesh&&Le.batching===!1||!O.isBatchedMesh&&Le.batching===!0||O.isBatchedMesh&&Le.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Le.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Le.instancing===!1||!O.isInstancedMesh&&Le.instancing===!0||O.isSkinnedMesh&&Le.skinning===!1||!O.isSkinnedMesh&&Le.skinning===!0||O.isInstancedMesh&&Le.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Le.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Le.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Le.instancingMorph===!1&&O.morphTexture!==null||Le.envMap!==ge||W.fog===!0&&Le.fog!==re||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==Ce.numPlanes||Le.numIntersection!==Ce.numIntersection)||Le.vertexAlphas!==Ue||Le.vertexTangents!==Qe||Le.morphTargets!==Be||Le.morphNormals!==st||Le.morphColors!==xt||Le.toneMapping!==Ft||Le.morphTargetsCount!==yt)&&(ht=!0):(ht=!0,Le.__version=W.version);let Cn=Le.currentProgram;ht===!0&&(Cn=Ko(W,N,O));let fr=!1,In=!1,Ta=!1;const Pt=Cn.getUniforms(),_n=Le.uniforms;if(ye.useProgram(Cn.program)&&(fr=!0,In=!0,Ta=!0),W.id!==b&&(b=W.id,In=!0),fr||R!==I){ye.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Pt.setValue(D,"projectionMatrix",I.projectionMatrix),Pt.setValue(D,"viewMatrix",I.matrixWorldInverse);const En=Pt.map.cameraPosition;En!==void 0&&En.setValue(D,Te.setFromMatrixPosition(I.matrixWorld)),St.logarithmicDepthBuffer&&Pt.setValue(D,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Pt.setValue(D,"isOrthographic",I.isOrthographicCamera===!0),R!==I&&(R=I,In=!0,Ta=!0)}if(O.isSkinnedMesh){Pt.setOptional(D,O,"bindMatrix"),Pt.setOptional(D,O,"bindMatrixInverse");const ln=O.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Pt.setValue(D,"boneTexture",ln.boneTexture,Ve))}O.isBatchedMesh&&(Pt.setOptional(D,O,"batchingTexture"),Pt.setValue(D,"batchingTexture",O._matricesTexture,Ve),Pt.setOptional(D,O,"batchingIdTexture"),Pt.setValue(D,"batchingIdTexture",O._indirectTexture,Ve),Pt.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&Pt.setValue(D,"batchingColorTexture",O._colorsTexture,Ve));const Dn=V.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Fe.update(O,V,Cn),(In||Le.receiveShadow!==O.receiveShadow)&&(Le.receiveShadow=O.receiveShadow,Pt.setValue(D,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(_n.envMap.value=ge,_n.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(_n.envMapIntensity.value=N.environmentIntensity),_n.dfgLUT!==void 0&&(_n.dfgLUT.value=Nw()),In&&(Pt.setValue(D,"toneMappingExposure",C.toneMappingExposure),Le.needsLights&&CE(_n,Ta),re&&W.fog===!0&&we.refreshFogUniforms(_n,re),we.refreshMaterialUniforms(_n,W,ie,te,_.state.transmissionRenderTarget[I.id]),fl.upload(D,dA(Le),_n,Ve)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(fl.upload(D,dA(Le),_n,Ve),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Pt.setValue(D,"center",O.center),Pt.setValue(D,"modelViewMatrix",O.modelViewMatrix),Pt.setValue(D,"normalMatrix",O.normalMatrix),Pt.setValue(D,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const ln=W.uniformsGroups;for(let En=0,fu=ln.length;En<fu;En++){const ws=ln[En];de.update(ws,Cn),de.bind(ws,Cn)}}return Cn}function CE(I,N){I.ambientLightColor.needsUpdate=N,I.lightProbe.needsUpdate=N,I.directionalLights.needsUpdate=N,I.directionalLightShadows.needsUpdate=N,I.pointLights.needsUpdate=N,I.pointLightShadows.needsUpdate=N,I.spotLights.needsUpdate=N,I.spotLightShadows.needsUpdate=N,I.rectAreaLights.needsUpdate=N,I.hemisphereLights.needsUpdate=N}function IE(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(I,N,V){const W=Re.get(I);W.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Re.get(I.texture).__webglTexture=N,Re.get(I.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:V,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,N){const V=Re.get(I);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0};const wE=D.createFramebuffer();this.setRenderTarget=function(I,N=0,V=0){E=I,P=N,v=V;let W=!0,O=null,re=!1,fe=!1;if(I){const ge=Re.get(I);if(ge.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(ge.__webglFramebuffer===void 0)Ve.setupRenderTarget(I);else if(ge.__hasExternalTextures)Ve.rebindTextures(I,Re.get(I.texture).__webglTexture,Re.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Be=I.depthTexture;if(ge.__boundDepthTexture!==Be){if(Be!==null&&Re.has(Be)&&(I.width!==Be.image.width||I.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(I)}}const Ue=I.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(fe=!0);const Qe=Re.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Qe[N])?O=Qe[N][V]:O=Qe[N],re=!0):I.samples>0&&Ve.useMultisampledRTT(I)===!1?O=Re.get(I).__webglMultisampledFramebuffer:Array.isArray(Qe)?O=Qe[V]:O=Qe,U.copy(I.viewport),Q.copy(I.scissor),F=I.scissorTest}else U.copy(be).multiplyScalar(ie).floor(),Q.copy(et).multiplyScalar(ie).floor(),F=At;if(V!==0&&(O=wE),ye.bindFramebuffer(D.FRAMEBUFFER,O)&&W&&ye.drawBuffers(I,O),ye.viewport(U),ye.scissor(Q),ye.setScissorTest(F),re){const ge=Re.get(I.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,ge.__webglTexture,V)}else if(fe){const ge=N;for(let Ue=0;Ue<I.textures.length;Ue++){const Qe=Re.get(I.textures[Ue]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ue,Qe.__webglTexture,V,ge)}}else if(I!==null&&V!==0){const ge=Re.get(I.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ge.__webglTexture,V)}b=-1},this.readRenderTargetPixels=function(I,N,V,W,O,re,fe,Ee=0){if(!(I&&I.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Re.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge){ye.bindFramebuffer(D.FRAMEBUFFER,ge);try{const Ue=I.textures[Ee],Qe=Ue.format,Be=Ue.type;if(!St.textureFormatReadable(Qe)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Be)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=I.width-W&&V>=0&&V<=I.height-O&&(I.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ee),D.readPixels(N,V,W,O,Oe.convert(Qe),Oe.convert(Be),re))}finally{const Ue=E!==null?Re.get(E).__webglFramebuffer:null;ye.bindFramebuffer(D.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(I,N,V,W,O,re,fe,Ee=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Re.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge)if(N>=0&&N<=I.width-W&&V>=0&&V<=I.height-O){ye.bindFramebuffer(D.FRAMEBUFFER,ge);const Ue=I.textures[Ee],Qe=Ue.format,Be=Ue.type;if(!St.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,st),D.bufferData(D.PIXEL_PACK_BUFFER,re.byteLength,D.STREAM_READ),I.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ee),D.readPixels(N,V,W,O,Oe.convert(Qe),Oe.convert(Be),0);const xt=E!==null?Re.get(E).__webglFramebuffer:null;ye.bindFramebuffer(D.FRAMEBUFFER,xt);const Ft=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await xy(D,Ft,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,st),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,re),D.deleteBuffer(st),D.deleteSync(Ft),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,N=null,V=0){const W=Math.pow(2,-V),O=Math.floor(I.image.width*W),re=Math.floor(I.image.height*W),fe=N!==null?N.x:0,Ee=N!==null?N.y:0;Ve.setTexture2D(I,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,fe,Ee,O,re),ye.unbindTexture()};const bE=D.createFramebuffer(),TE=D.createFramebuffer();this.copyTextureToTexture=function(I,N,V=null,W=null,O=0,re=null){re===null&&(O!==0?(To("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=O,O=0):re=0);let fe,Ee,ge,Ue,Qe,Be,st,xt,Ft;const Nt=I.isCompressedTexture?I.mipmaps[re]:I.image;if(V!==null)fe=V.max.x-V.min.x,Ee=V.max.y-V.min.y,ge=V.isBox3?V.max.z-V.min.z:1,Ue=V.min.x,Qe=V.min.y,Be=V.isBox3?V.min.z:0;else{const Dn=Math.pow(2,-O);fe=Math.floor(Nt.width*Dn),Ee=Math.floor(Nt.height*Dn),I.isDataArrayTexture?ge=Nt.depth:I.isData3DTexture?ge=Math.floor(Nt.depth*Dn):ge=1,Ue=0,Qe=0,Be=0}W!==null?(st=W.x,xt=W.y,Ft=W.z):(st=0,xt=0,Ft=0);const yt=Oe.convert(N.format),Le=Oe.convert(N.type);let Lt;N.isData3DTexture?(Ve.setTexture3D(N,0),Lt=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ve.setTexture2DArray(N,0),Lt=D.TEXTURE_2D_ARRAY):(Ve.setTexture2D(N,0),Lt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const ht=D.getParameter(D.UNPACK_ROW_LENGTH),Cn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),fr=D.getParameter(D.UNPACK_SKIP_PIXELS),In=D.getParameter(D.UNPACK_SKIP_ROWS),Ta=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Nt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Nt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ue),D.pixelStorei(D.UNPACK_SKIP_ROWS,Qe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Be);const Pt=I.isDataArrayTexture||I.isData3DTexture,_n=N.isDataArrayTexture||N.isData3DTexture;if(I.isDepthTexture){const Dn=Re.get(I),ln=Re.get(N),En=Re.get(Dn.__renderTarget),fu=Re.get(ln.__renderTarget);ye.bindFramebuffer(D.READ_FRAMEBUFFER,En.__webglFramebuffer),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,fu.__webglFramebuffer);for(let ws=0;ws<ge;ws++)Pt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.get(I).__webglTexture,O,Be+ws),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.get(N).__webglTexture,re,Ft+ws)),D.blitFramebuffer(Ue,Qe,fe,Ee,st,xt,fe,Ee,D.DEPTH_BUFFER_BIT,D.NEAREST);ye.bindFramebuffer(D.READ_FRAMEBUFFER,null),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(O!==0||I.isRenderTargetTexture||Re.has(I)){const Dn=Re.get(I),ln=Re.get(N);ye.bindFramebuffer(D.READ_FRAMEBUFFER,bE),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,TE);for(let En=0;En<ge;En++)Pt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Dn.__webglTexture,O,Be+En):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Dn.__webglTexture,O),_n?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ln.__webglTexture,re,Ft+En):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ln.__webglTexture,re),O!==0?D.blitFramebuffer(Ue,Qe,fe,Ee,st,xt,fe,Ee,D.COLOR_BUFFER_BIT,D.NEAREST):_n?D.copyTexSubImage3D(Lt,re,st,xt,Ft+En,Ue,Qe,fe,Ee):D.copyTexSubImage2D(Lt,re,st,xt,Ue,Qe,fe,Ee);ye.bindFramebuffer(D.READ_FRAMEBUFFER,null),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else _n?I.isDataTexture||I.isData3DTexture?D.texSubImage3D(Lt,re,st,xt,Ft,fe,Ee,ge,yt,Le,Nt.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Lt,re,st,xt,Ft,fe,Ee,ge,yt,Nt.data):D.texSubImage3D(Lt,re,st,xt,Ft,fe,Ee,ge,yt,Le,Nt):I.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,re,st,xt,fe,Ee,yt,Le,Nt.data):I.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,re,st,xt,Nt.width,Nt.height,yt,Nt.data):D.texSubImage2D(D.TEXTURE_2D,re,st,xt,fe,Ee,yt,Le,Nt);D.pixelStorei(D.UNPACK_ROW_LENGTH,ht),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Cn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,fr),D.pixelStorei(D.UNPACK_SKIP_ROWS,In),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ta),re===0&&N.generateMipmaps&&D.generateMipmap(Lt),ye.unbindTexture()},this.initRenderTarget=function(I){Re.get(I).__webglFramebuffer===void 0&&Ve.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?Ve.setTextureCube(I,0):I.isData3DTexture?Ve.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?Ve.setTexture2DArray(I,0):Ve.setTexture2D(I,0),ye.unbindTexture()},this.resetState=function(){P=0,v=0,E=null,ye.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const Ai=.1,Ic=.0083,rr=.3,Ow=.5,kw=.6,Gw=.6,zw=.95,Hw=1.25,Pp=.88,Up=25*Math.PI/180,Fp=.9,W0=.003,Vw=50*Math.PI/180,q0=3,Ww=.05,qw=.6,Xw=1/20,Yw=6e3,Kw=Ai*60/(2*Math.PI),Ca=window.matchMedia("(prefers-reduced-motion: reduce)"),Jw=1,Zw=60,jw=160,$w=120,da={nightLights:!0,namedAsteroidModels:!1,edition:null,holograms:!0},lo=n=>da.holograms&&n.status==="Planned";function Go(n){return(da.namedAsteroidModels||n.model_named_shown)&&n.model_named?n.model_named:n.model||null}const eu=new Set(["planet","moon","asteroid","comet"]),eb=eu,fa=1495978707e-1,Bd=2.1,Np=1e3/Math.log(1+1/Bd),X0=1e5,Y0=5,tu={name:"diagram",au:n=>Np*Math.log(1+n/Bd),toAu:n=>Bd*(Math.exp(n/Np)-1),aroundBody(n,e){const t=Math.max(0,n-e.radiusKm);return e.radius+Math.hypot(e.unit*e.knee*Math.log(1+t/e.knee),rr)},fromBody(n,e){const t=Math.sqrt(Math.max(0,(n-e.radius)**2-rr**2));return e.radiusKm+e.knee*Math.expm1(t/(e.unit*e.knee))}},qs=6371/5,K0={name:"true",au:n=>n*fa/qs,toAu:n=>n*qs/fa,aroundBody:n=>n/qs,fromBody:n=>n*qs},Ro={diagram:tu,true:K0};let Jn=tu;function tb(n){Jn=Ro[n]}const Qp=(n,e,t)=>n>0&&e>0?n**(1-t)*e**t:n+(e-n)*t;function J0(n,e){const t={radius:e.radiusD,radiusKm:e.radiusKm,unit:e.radiusD/e.radiusKm,knee:e.knee};return[tu.aroundBody(n,t)-e.radiusD,Math.max(0,n-e.radiusKm)/qs]}function nb(n){const e=t=>t>0?Qp(tu.au(t),K0.au(t),n):0;Jn={name:"mixed",au:e,toAu(t){let i=Math.log(1e-6),s=Math.log(1e4);for(let r=0;r<60;r++){const a=(i+s)/2;e(Math.exp(a))>t?s=a:i=a}return Math.exp((i+s)/2)},aroundBody(t,i){const[s,r]=J0(t,i);return i.radius+Qp(s,r,n)}}}const Z=new Map,Rd=[],ib=new Date("2000-01-01T12:00:00Z"),Op=new WeakMap;function sb(n,e,t,i){let s=Op.get(n);return s||Op.set(n,s={peri:NaN,inc:NaN,node:NaN}),(s.peri!==e||s.inc!==t||s.node!==i)&&(s.peri=e,s.inc=t,s.node=i,s.cp=Math.cos(-e),s.sp=Math.sin(-e),s.ci=Math.cos(t),s.si=Math.sin(t),s.cn=Math.cos(-i),s.sn=Math.sin(-i)),s}function Ia(n){return(n-ib)/864e5}const Gi=n=>Jn.au(n),rb=n=>Jn.toAu(n),ab=new Set(["asteroid","comet"]),nu=(n,e)=>Jn.aroundBody(n,e);function wf(n){const e=1+(n.e||0);return n.a_au!==void 0?Gi(n.a_au*e):n.a_km!==void 0&&n.scale?nu(n.a_km*e,n.scale):(n.a||0)*e}function kp(n,e){if(!n||(n.a_au!==void 0&&(n.a=Gi(n.a_au)),n.a_km===void 0||!e))return;n.scale=Z0(e),n.a=nu(n.a_km,n.scale),n.node??=0,n.peri??=0;const t=n.plane??e.pole??"ecliptic";n.frame=t==="ecliptic"?null:lb(t)}function Z0(n){return{radius:n.radius,radiusD:n.radius_diagram??n.radius,radiusKm:n.radius_km,unit:n.radius/n.radius_km,knee:n.knee??(ab.has(n.type)?Y0:X0)}}function Gp(n,e,t){if(n*e<=t)return 1/0;let i=1e-4,s=1e9;for(let r=0;r<80;r++){const a=Math.sqrt(i*s);n*a*Math.log(1+e/a)>t?s=a:i=a}return Math.sqrt(i*s)}function Ul(n,e){return n.orbit.a_au*fa*Math.cbrt(n.gm/(3*e.gm))}function Aa(n,e){return nu(e,Z0(n))}function ob(n,e,t=Jn){return n.a_au!==void 0?t.toAu(e):n.a_km!==void 0&&n.scale?t.fromBody(e,n.scale):null}function zp(n,e){return n.a_au!==void 0?{above:!1,ends:[Ro.diagram.au(e),Ro.true.au(e)]}:n.a_km!==void 0&&n.scale?{above:!0,ends:J0(e,n.scale)}:null}function cb(n,e,t){return(t==="L1"?-1:1)*Aa(n,Ul(n,e))}function j0(n,e,t){const i=(n.M0+n.rate*e)*(Math.PI/180);return t.set(-n.amp.x*Math.cos(i),n.amp.y*Math.cos(i),n.amp.z*Math.sin(i))}function lb(n){const e=ys(n),t=ys({ra:0,dec:90}).cross(e);t.lengthSq()<1e-12&&t.set(1,0,0),t.normalize();const i=e.clone().cross(t);return{x:t,y:e,z:i.negate()}}const $u=new x,eh=new x,th=new x,ub=new xe;function hb(n,e,t){const i=pi(e,t),s=pi(e,t+.001);$u.set(-i.x,-i.y,-i.z).normalize(),eh.set(i.x,i.y,i.z).cross(th.set(s.x-i.x,s.y-i.y,s.z-i.z)).normalize(),th.crossVectors($u,eh),n.quaternion.setFromRotationMatrix(ub.makeBasis($u,eh,th))}const Hp=23.4392911*(Math.PI/180);function ys({ra:n,dec:e}){const t=n*(Math.PI/180),i=e*(Math.PI/180),s=Math.cos(i)*Math.cos(t),r=Math.cos(i)*Math.sin(t),a=Math.sin(i),o=Math.cos(Hp),l=Math.sin(Hp),c=r*o+a*l,u=-r*l+a*o;return new x(s,u,-c)}function pi(n,e,t=e){if(!n||n.a===0)return{x:0,y:0,z:0};const i=(n.M0+n.rate*e)%360*(Math.PI/180);return bf(n,Ab(i,n.e||0),t)}const db=new Set(["trajectory","libration","suborbital","landed"]),$0=(n,e)=>n?.hold_days??e,Vp=(n,e)=>{const t=pi(n,e);return Math.atan2(-t.z,t.x)*(180/Math.PI)};function fb(n,e={}){const t=Ia(n);Z.forEach(({data:i})=>{i.orbit&&(!i.parent||i.parent==="Sun")&&!i.lagrange&&!db.has(i.orbit_type)&&(i.orbit.hold_days=t)}),Object.entries(e).forEach(([i,{from:s,angle:r=0}])=>{const a=Z.get(i)?.data.orbit,o=Z.get(s)?.data.orbit;if(a?.hold_days===void 0||!o)return console.warn(`holdOrbits: can't place ${i} from ${s}`);const l=Vp(o,t)+r;for(let c=0;c<4;c++)a.M0+=((l-Vp(a,t))%360+540)%360-180})}function Ab(n,e){let t=e<.8?n:Math.PI;for(let i=0;i<50;i++){const s=(t-e*Math.sin(t)-n)/(1-e*Math.cos(t));if(t-=s,Math.abs(s)<1e-14)break}return t}function bf(n,e,t){const i=n.e||0,s=n.a_au!==void 0,r=!s&&n.a_km!==void 0&&n.scale,a=s?n.a_au:r?n.a_km:n.a,o=a*(Math.cos(e)-i),l=a*Math.sqrt(1-i*i)*Math.sin(e),c=Math.hypot(o,l),u=c>0&&s?Gi(c)/c:c>0&&r?nu(c,n.scale)/c:1;if(n.node===void 0||n.peri===void 0){const B=(n.i||0)*(Math.PI/180);return{x:o*u,y:-l*Math.sin(B)*u,z:-l*Math.cos(B)*u}}const h=(n.peri+(n.peri_rate||0)*t)*(Math.PI/180),d=(n.node+(n.node_rate||0)*t)*(Math.PI/180),f=n.i*(Math.PI/180),p=sb(n,h,f,d),m=o*p.cp+l*p.sp,g=l*p.cp-o*p.sp,A=-g*p.si,y=g*p.ci,_=(m*p.cn+y*p.sn)*u,S=-A*u,w=-(y*p.cn-m*p.sn)*u,C=n.frame;return C?{x:_*C.x.x+S*C.y.x+w*C.z.x,y:_*C.x.y+S*C.y.y+w*C.z.y,z:_*C.x.z+S*C.y.z+w*C.z.z}:{x:_,y:S,z:w}}const Wp=1,pb=2.5;function ex(n,e){const t=Z.get(n);if(!t)return new x;const i=pi(t.data.orbit,$0(t.data.orbit,e)),s=new x(i.x,i.y,i.z);return t.data.parent&&t.data.parent!=="Sun"&&s.add(ex(t.data.parent,e)),s}const gb=n=>Ia(new Date(`${n}T12:00:00Z`));function nh(n,e){const t=n.length,i=[],s=new Array(t).fill(0);for(let a=0;a<t-1;a++)i.push((e[a+1]-e[a])/(n[a+1]-n[a]));s[0]=i[0],s[t-1]=i[t-2];for(let a=1;a<t-1;a++){if(i[a-1]*i[a]<=0){s[a]=0;continue}const o=2*(n[a+1]-n[a])+(n[a]-n[a-1]),l=n[a+1]-n[a]+2*(n[a]-n[a-1]);s[a]=(o+l)/(o/i[a-1]+l/i[a])}let r=0;return a=>{for(a<n[r]&&(r=0);r<t-2&&a>n[r+1];)r++;const o=n[r+1]-n[r],l=at.clamp((a-n[r])/o,0,1),c=l*l,u=c*l;return(2*u-3*c+1)*e[r]+(u-2*c+l)*o*s[r]+(-2*u+3*c)*e[r+1]+(u-c)*o*s[r+1]}}function er(n){if(n.trajectoryPlan)return n.trajectoryPlan;const e=n.data.trajectory||{},t=(e.waypoints||[]).map(c=>({...c,days:gb(c.date)})),i=e.arrival_orbit&&t.length?t[t.length-1]:null,s=t.map((c,u)=>{const h=ex(c.at,c.days);if(i&&u===t.length-1){const p=pi(e.arrival_orbit,c.days);return h.add(new x(p.x,p.y,p.z))}const d=Z.get(c.at)?.data.radius||1,f=new x(h.x,0,h.z).normalize();return h.addScaledVector(f,d*pb)}),r={days:[],angle:[],radius:[],height:[]},a=[];let o=s.length?Math.atan2(s[0].x,s[0].z):0;for(let c=0;c+1<t.length;c++){const u=s[c],h=s[c+1],d=t[c+1],f=t[c].days,p=d.days-f,m=Math.hypot(u.x,u.z),g=Math.hypot(h.x,h.z);let A=Math.atan2(h.x,h.z)-Math.atan2(u.x,u.z);for(;A<0;)A+=Math.PI*2;p<30&&A>Math.PI*11/6&&(A-=Math.PI*2);const y=d.extreme!==void 0?Gi(d.extreme)-(m+g)/2:0,_=v=>m+(g-m)*v+y*Math.sin(Math.PI*v),S=Math.max(8,Math.ceil(p/Wp)),w=[0];for(let v=1;v<=S;v++)w.push(w[v-1]+Math.pow(rb(_((v-.5)/S)),-1.5));const C=.9856*p/S*w[S]*(Math.PI/180),B=d.revs??Math.max(0,Math.round((C-A)/(Math.PI*2))),P=A+B*Math.PI*2;for(let v=c===0?0:1;v<=8;v++){const E=v/8,b=Math.round(E*S);r.days.push(f+p*E),r.angle.push(o+P*(w[b]/w[S])),r.radius.push(_(E)),r.height.push(u.y+(h.y-u.y)*E)}o+=P,a.push({to:d.label||d.at,revs:B})}const l=[];if(r.days.length>1){const c=nh(r.days,r.angle),u=nh(r.days,r.radius),h=nh(r.days,r.height),d=r.days[0],f=r.days[r.days.length-1];for(let p=d;;p+=Wp){const m=Math.min(p,f),g=c(m),A=u(m);if(l.push({days:m,pos:new x(A*Math.sin(g),h(m),A*Math.cos(g))}),m===f)break}}return n.trajectoryPlan={waypoints:t,points:s,samples:l,arrival:i,legs:a,arrivalOrbit:e.arrival_orbit},n.trajectoryPlan}function mb(n,e,t){const i=er(n);if(!i.samples.length)return!1;if(i.arrival&&e>=i.arrival.days){const r=pi(i.arrivalOrbit,e),a=Z.get(i.arrival.at);return t.set(r.x,r.y,r.z),a&&t.add(a.group.position),!0}return tx(i,e,t),!1}function tx(n,e,t){const i=n.samples;if(e<=i[0].days)return Ld(t.copy(i[0].pos));let s=0,r=i.length-1;for(;r-s>1;){const l=s+r>>1;i[l].days<=e?s=l:r=l}const a=i[s],o=i[r];return Ld(t.copy(a.pos).lerp(o.pos,at.clamp((e-a.days)/(o.days-a.days||1),0,1)))}let Dd=null;function nx(n){Dd=n}function Ld(n){if(!Dd)return n;const e=n.length();return e>0?n.multiplyScalar(Gi(Dd(e))/e):n}function ar(n){if(!n||n==="Sun")return"Sun";const e=Z.get(n);return!e||!e.data?"Sun":e.data.system?e.data.system:e.data.parent==="Sun"?n:ar(e.data.parent)}const xb=["diagram","true"];let Li="diagram";const Pd={diagram:{cameraNear:.1,cameraFar:1e6,maxDistance:1e5,flightReach:15e3,logFlights:!1,flightArchMax:800,shadowReachMin:180,shadowHalfMin:.05,shadowLocal:!1,relative:!1},true:{cameraNear:null,cameraFar:2e7,maxDistance:1e7,logFlights:!0,flightArchMax:1/0,shadowReachMin:180,shadowHalfMin:1e-8,shadowLocal:!0,relative:!0}};let Ut=Pd.diagram;const _b=25/695700,Eb=5,yb=6371,vb=.62,Mb=1.49,Sb=.7,Cb=new Set(["star","planet","moon","asteroid","comet"]),Ib=.35,wb=8,qp=[1,Y0],bb=.3,Hs={diagram:{bodyRadius(n){const e=n.radius_km,t=n.diagram_scale??1;return n.type==="star"?e*_b*t:n.model&&!n.planetMoon?t*Mb*Math.pow(2*e,Sb)/2:t*Eb*Math.pow(e/yb,vb)},craftSize:n=>rr*(n.diagram_scale??1)},true:{bodyRadius:n=>n.radius_km/qs,craftSize:n=>(n.size_m??1)/1e3/qs}};function Tb(n){const e=(t,i)=>t**(1-n)*i**n;return{bodyRadius:t=>e(Hs.diagram.bodyRadius(t),Hs.true.bodyRadius(t)),craftSize:t=>e(Hs.diagram.craftSize(t),Hs.true.craftSize(t)),craftRadius:t=>e(t.radius_diagram,Hs.true.craftSize(t)/2)}}function iu(n,e=Li,t=null){Li=e,Ut=t?Pd.true:Pd[e],t?nb(t.orbit):tb(e);const i=t?Tb(t.size):Hs[e],s=new Map(n.map(r=>[r.name,r]));n.forEach(r=>{if(r.type==="moon"&&(r.planetMoon=s.get(r.parent)?.type==="planet"),r.type==="mission"){r.radius_diagram??=r.radius,r.model_size=i.craftSize(r),r.radius=t?i.craftRadius(r):e==="diagram"?r.radius_diagram:r.model_size/2;return}!Cb.has(r.type)||r.radius_km===void 0||(r.radius_diagram=Hs.diagram.bodyRadius(r),r.radius=i.bodyRadius(r),r.model&&(r.model_scale=2*r.radius))}),e==="diagram"&&!t&&Bb(n,s),n.forEach(r=>{const a=s.get(r.parent);if(r.ring?.inner_km&&(r.ring.inner_radius=r.ring.inner_km/r.radius_km,r.ring.outer_radius=r.ring.outer_km/r.radius_km),r.suborbital?.apogee_km!==void 0&&a&&(r.suborbital.apogee=Aa(a,a.radius_km+r.suborbital.apogee_km)-a.radius,r.suborbital.duration=r.suborbital.duration_min/1440),r.lagrange){const l=s.get(r.lagrange.body);r.lagrange.offset=cb(l,s.get("Sun"),r.lagrange.point),r.orbit={a:Gi(l.orbit.a_au)+r.lagrange.offset,e:0}}kp(r.orbit,a);const o=r.trajectory?.waypoints;o?.length&&kp(r.trajectory.arrival_orbit,s.get(o[o.length-1].at))}),n.forEach(r=>{r.orbit_type==="libration"&&Rb(r.orbit,s.get(r.parent),s)})}function Bb(n,e){const t=e.get("Sun"),i=n.filter(a=>a.type==="planet"&&a.parent==="Sun"&&a.orbit?.a_au).sort((a,o)=>a.orbit.a_au-o.orbit.a_au),s=a=>Gi(a.orbit.a_au*(1-a.orbit.e)),r=a=>Gi(a.orbit.a_au*(1+a.orbit.e));i.forEach((a,o)=>{if(!a.gm)return;const l=s(a)-(o?r(i[o-1]):t.radius),c=o<i.length-1?s(i[o+1])-r(a):1/0;a.hill=Ib*Math.min(l,c),a.knee=Math.min(X0,Gp(a.radius/a.radius_km,Ul(a,t)-a.radius_km,a.hill-a.radius))}),n.forEach(a=>{if(a.type!=="asteroid"&&a.type!=="comet"||!a.gm||!a.orbit?.a_au)return;a.hill=wb*a.radius;const o=Gp(a.radius/a.radius_km,Ul(a,t)-a.radius_km,a.hill-a.radius);a.knee=Math.min(Math.max(o,qp[0]),qp[1])})}function Rb(n,e,t){const i=t.get(e.lagrange.body),s=Ul(i,t.get("Sun")),r=(Aa(i,s*1.001)-Aa(i,s*.999))/(s*.002),a=Math.abs(e.lagrange.offset)/s,o=Math.sqrt(r*a),{y:l,z:c}=n.amplitude_km;n.amp={x:bb*l*o,y:c*o,z:l*o},n.a=Math.max(n.amp.y,n.amp.z),n.rate=360/n.period_days,n.M0??=0}function Db(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new Ze;let c=0;for(let u=0;u<n.length;++u){const h=n[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const h=[];for(let d=0;d<n.length;++d){const f=n[d].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+u);u+=n[d].attributes.position.count}l.setIndex(h)}for(const u in r){const h=Xp(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let m=0;m<a[u].length;++m)f.push(a[u][m][d]);const p=Xp(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function Xp(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const a=new e(r),o=new Ge(a,t,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let d=0,f=u.count;d<f;d++)for(let p=0;p<t;p++){const m=u.getComponent(d,p);o.setComponent(d+h,p,m)}}else a.set(u.array,l);l+=u.count*t}return s!==void 0&&(o.gpuType=s),o}function Yp(n,e){if(e===oy)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Sd||e===l0){let t=n.getIndex();if(t===null){const a=[],o=n.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===Sd)for(let a=1;a<=i;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}const He=new Af;He.background=new Se(0);const H=new Kt(60,window.innerWidth/window.innerHeight,.1,1e6);H.position.set(0,400,1200);H.lookAt(0,0,0);let ke;function Lb(n){ke=new Qw({canvas:n,antialias:!0,powerPreference:"high-performance"})}function mn(n){for(let e=n;e;e=e.parent)if(e===He)return!0;return!1}class Pb extends Cs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ob(t)}),this.register(function(t){return new kb(t)}),this.register(function(t){return new Kb(t)}),this.register(function(t){return new Jb(t)}),this.register(function(t){return new Zb(t)}),this.register(function(t){return new zb(t)}),this.register(function(t){return new Hb(t)}),this.register(function(t){return new Vb(t)}),this.register(function(t){return new Wb(t)}),this.register(function(t){return new Qb(t)}),this.register(function(t){return new qb(t)}),this.register(function(t){return new Gb(t)}),this.register(function(t){return new Yb(t)}),this.register(function(t){return new Xb(t)}),this.register(function(t){return new Fb(t)}),this.register(function(t){return new jb(t)}),this.register(function(t){return new $b(t)})}load(e,t,i,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=co.extractUrlBase(e);a=co.resolveURL(c,this.path)}else a=co.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new $s(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ix){try{a[$e.KHR_BINARY_GLTF]=new eT(e)}catch(h){s&&s(h);return}r=JSON.parse(a[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new fT(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case $e.KHR_MATERIALS_UNLIT:a[h]=new Nb;break;case $e.KHR_DRACO_MESH_COMPRESSION:a[h]=new tT(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:a[h]=new nT;break;case $e.KHR_MESH_QUANTIZATION:a[h]=new iT;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function Ub(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Fb{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Se(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],sn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new O0(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Q0(u),c.distance=h;break;case"spot":c=new N0(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ii(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class Nb{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return li}extendParams(e,t,i){const s=[];e.color=new Se(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],sn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,dt))}return Promise.all(s)}}class Qb{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Ob{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Me(o,o)}return Promise.all(r)}}class kb{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Gb{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class zb{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],sn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,dt)),a.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class Hb{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Vb{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(o[0],o[1],o[2],sn),Promise.all(r)}}class Wb{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class qb{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Se().setRGB(o[0],o[1],o[2],sn),a.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,dt)),Promise.all(r)}}class Xb{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class Yb{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class Kb{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class Jb{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}}class Zb{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}}class jb{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class $b{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==Nn.TRIANGLES&&c.mode!==Nn.TRIANGLE_STRIP&&c.mode!==Nn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const p of h){const m=new xe,g=new x,A=new ot,y=new x(1,1,1),_=new ov(p.geometry,p.material,d);for(let S=0;S<d;S++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&A.fromBufferAttribute(l.ROTATION,S),l.SCALE&&y.fromBufferAttribute(l.SCALE,S),_.setMatrixAt(S,m.compose(g,A,y));for(const S in l)if(S==="_COLOR_0"){const w=l[S];_.instanceColor=new Id(w.array,w.itemSize,w.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&p.geometry.setAttribute(S,l[S]);bt.prototype.copy.call(_,p),this.parser.assignFinalMaterial(_),f.push(_)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const ix="glTF",za=12,Kp={JSON:1313821514,BIN:5130562};class eT{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,za),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ix)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-za,r=new DataView(e,za);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Kp.JSON){const c=new Uint8Array(e,za+a,o);this.content=i.decode(c)}else if(l===Kp.BIN){const c=za+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class tT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=Ud[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Ud[u]||u.toLowerCase();if(a[u]!==void 0){const d=i.accessors[e.attributes[u]],f=Zr[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const p in f.attributes){const m=f.attributes[p],g=l[p];g!==void 0&&(m.normalized=g)}h(f)},o,c,sn,d)})})}}class nT{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class iT{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class sx extends ko{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(i-t)/u,d=h*h,f=d*h,p=e*c,m=p-c,g=-2*f+3*d,A=f-d,y=1-g,_=A-d+h;for(let S=0;S!==o;S++){const w=a[m+S+o],C=a[m+S+l]*u,B=a[p+S+o],P=a[p+S]*u;r[S]=y*w+_*C+g*B+A*P}return r}}const sT=new ot;class rT extends sx{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return sT.fromArray(r).normalize().toArray(r),r}}const Nn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Zr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Jp={9728:tn,9729:wt,9984:sf,9985:dl,9986:to,9987:qn},Zp={33071:On,33648:vl,10497:xs},ih={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ud={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},aT={CUBICSPLINE:void 0,LINEAR:wo,STEP:Io},sh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function oT(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new ki({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:kn})),n.DefaultMaterial}function Ps(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ii(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function cT(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;a.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function lT(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function uT(n){let e;const t=n.extensions&&n.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+rh(t.attributes):e=n.indices+":"+rh(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+rh(n.targets[i]);return e}function rh(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Fd(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function hT(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const dT=new xe;class fT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ub,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&a<98?this.textureLoader=new F0(this.options.manager):this.textureLoader=new Qv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new $s(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return Ps(r,o,s),ii(o,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){i.load(co.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=ih[s.type],o=Zr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Ge(c,a,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=ih[s.type],c=Zr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0;let m,g;if(f&&f!==h){const A=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+A+":"+s.count;let _=t.cache.get(y);_||(m=new c(o,A*f,s.count*f/u),_=new pf(m,f/u),t.cache.add(y,_)),g=new ca(_,l,d%f/u,p)}else o===null?m=new c(s.count*l):m=new c(o,d,s.count*l),g=new Ge(m,l,p);if(s.sparse!==void 0){const A=ih.SCALAR,y=Zr[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,S=s.sparse.values.byteOffset||0,w=new y(a[1],_,s.sparse.count*A),C=new c(a[2],S,s.sparse.count*l);o!==null&&(g=new Ge(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let B=0,P=w.length;B<P;B++){const v=w[B];if(g.setX(v,C[B*l]),l>=2&&g.setY(v,C[B*l+1]),l>=3&&g.setZ(v,C[B*l+2]),l>=4&&g.setW(v,C[B*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){const s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return u.magFilter=Jp[d.magFilter]||wt,u.minFilter=Jp[d.minFilter]||qn,u.wrapS=Zp[d.wrapS]||xs,u.wrapT=Zp[d.wrapT]||xs,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==tn&&u.minFilter!==wt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=s.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(m){const g=new Gt(m);g.needsUpdate=!0,d(g)}),t.load(co.resolveURL(h,r.path),p,void 0,f)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),ii(h,a),h.userData.mimeType=a.mimeType||hT(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new w0,Yn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Ss,Yn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return ki}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[$e.KHR_MATERIALS_UNLIT]){const h=s[$e.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Se(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],sn),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,dt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=kt);const u=r.alphaMode||sh.OPAQUE;if(u===sh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===sh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==li&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Me(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==li&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==li){const h=r.emissiveFactor;o.emissive=new Se().setRGB(h[0],h[1],h[2],sn)}return r.emissiveTexture!==void 0&&a!==li&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,dt)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),ii(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ps(s,h,r),h})}createUniqueName(e){const t=gt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return jp(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=uT(c),h=s[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=jp(new Ze,c,t),s[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?oT(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,p=u.length;f<p;f++){const m=u[f],g=a[f];let A;const y=c[f];if(g.mode===Nn.TRIANGLES||g.mode===Nn.TRIANGLE_STRIP||g.mode===Nn.TRIANGLE_FAN||g.mode===void 0)A=r.isSkinnedMesh===!0?new sv(m,y):new Je(m,y),A.isSkinnedMesh===!0&&A.normalizeSkinWeights(),g.mode===Nn.TRIANGLE_STRIP?A.geometry=Yp(A.geometry,l0):g.mode===Nn.TRIANGLE_FAN&&(A.geometry=Yp(A.geometry,Sd));else if(g.mode===Nn.LINES)A=new Bo(m,y);else if(g.mode===Nn.LINE_STRIP)A=new ya(m,y);else if(g.mode===Nn.LINE_LOOP)A=new xf(m,y);else if(g.mode===Nn.POINTS)A=new hv(m,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(A.geometry.morphAttributes).length>0&&lT(A,r),A.name=t.createUniqueName(r.name||"mesh_"+e),ii(A,r),g.extensions&&Ps(s,A,g),t.assignFinalMaterial(A),h.push(A)}for(let f=0,p=h.length;f<p;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Ps(s,h[0],r),h[0];const d=new Zt;r.extensions&&Ps(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=h.length;f<p;f++)d.add(h[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Kt(at.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Sf(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ii(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const d=new xe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new gf(o,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],p=s.samplers[f.sampler],m=f.target,g=m.node,A=s.parameters!==void 0?s.parameters[p.input]:p.input,y=s.parameters!==void 0?s.parameters[p.output]:p.output;m.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",A)),l.push(this.getDependency("accessor",y)),c.push(p),u.push(m))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],p=h[2],m=h[3],g=h[4],A=[];for(let _=0,S=d.length;_<S;_++){const w=d[_],C=f[_],B=p[_],P=m[_],v=g[_];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const E=i._createAnimationTracks(w,C,B,P,v);if(E)for(let b=0;b<E.length;b++)A.push(E[b])}const y=new bv(r,void 0,A);return ii(y,s),y})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const a=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(i.getDependency("node",o[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,dT)});for(let f=0,p=h.length;f<p;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new I0:c.length>1?u=new Zt:c.length===1?u=c[0]:u=new bt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),ii(u,r),r.extensions&&Ps(i,u,r),r.matrix!==void 0){const h=new xe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new Zt;i.name&&(r.name=s.createUniqueName(i.name)),ii(r,i),i.extensions&&Ps(t,r,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof Yn||d instanceof Gt)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const a=[],o=e.name?e.name:e.uuid,l=[];Ji[r.path]===Ji.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Ji[r.path]){case Ji.weights:c=la;break;case Ji.rotation:c=ua;break;case Ji.translation:case Ji.scale:c=ha;break;default:switch(i.itemSize){case 1:c=la;break;case 2:case 3:default:c=ha;break}break}const u=s.interpolation!==void 0?aT[s.interpolation]:wo,h=this._getArrayFromAccessor(i);for(let d=0,f=l.length;d<f;d++){const p=new c(l[d]+"."+Ji[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),a.push(p)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Fd(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof ua?rT:sx;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function AT(n,e,t){const i=e.attributes,s=new jn;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new x(l[0],l[1],l[2]),new x(c[0],c[1],c[2])),o.normalized){const u=Fd(Zr[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new x,l=new x;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){const m=Fd(Zr[d.componentType]);l.multiplyScalar(m)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}n.boundingBox=s;const a=new Sn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=a}function jp(n,e,t){const i=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(const a in i){const o=Ud[a]||a.toLowerCase();o in n.attributes||s.push(r(i[a],o))}if(e.indices!==void 0&&!n.index){const a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});s.push(a)}return rt.workingColorSpace!==sn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${rt.workingColorSpace}" not supported.`),ii(n,e),AT(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?cT(n,e.targets,t):n})}const ah=new WeakMap;class pT extends Cs{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,s){const r=new $s(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,s)},i,s)}parse(e,t,i=()=>{}){this.decodeDracoFile(e,t,null,null,dt,i).catch(i)}decodeDracoFile(e,t,i,s,r=sn,a=()=>{}){const o={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){const i=JSON.stringify(t);if(ah.has(e)){const l=ah.get(e);if(l.key===i)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s;const r=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(r,a).then(l=>(s=l,new Promise((c,u)=>{s._callbacks[r]={resolve:c,reject:u},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),ah.set(e,{key:i,promise:o}),o}_createGeometry(e){const t=new Ze;e.index&&t.setIndex(new Ge(e.index.array,1));for(let i=0;i<e.attributes.length;i++){const{name:s,array:r,itemSize:a,stride:o,vertexColorSpace:l}=e.attributes[i];let c;if(a===o)c=new Ge(r,a);else{const u=new pf(r,o);c=new ca(u,a,0)}s==="color"&&(this._assignVertexColorSpace(c,l),c.normalized=!(r instanceof Float32Array)),t.setAttribute(s,c)}return t}_assignVertexColorSpace(e,t){if(t!==dt)return;const i=new Se;for(let s=0,r=e.count;s<r;s++)i.fromBufferAttribute(e,s),rt.colorSpaceToWorking(i,dt),e.setXYZ(s,i.r,i.g,i.b)}_loadLibrary(e,t){const i=new $s(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((s,r)=>{i.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(i=>{const s=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const r=gT.toString(),a=["/* draco decoder */",s,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){const a=r.data;switch(a.type){case"decode":s._callbacks[a.id].resolve(a);break;case"error":s._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=t,i._taskLoad+=t,i})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function gT(){let n,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":n=o.decoderConfig,e=new Promise(function(u){n.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(n)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(u=>{const h=u.draco,d=new h.Decoder;try{const f=t(h,d,new Int8Array(l),c),p=f.attributes.map(m=>m.array.buffer);f.index&&p.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},p)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{h.destroy(d)}});break}};function t(a,o,l,c){const u=c.attributeIDs,h=c.attributeTypes;let d,f;const p=o.GetEncodedGeometryType(l);if(p===a.TRIANGULAR_MESH)d=new a.Mesh,f=o.DecodeArrayToMesh(l,l.byteLength,d);else if(p===a.POINT_CLOUD)d=new a.PointCloud,f=o.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const m={index:null,attributes:[]};for(const g in u){const A=self[h[g]];let y,_;if(c.useUniqueIDs)_=u[g],y=o.GetAttributeByUniqueId(d,_);else{if(_=o.GetAttributeId(d,a[u[g]]),_===-1)continue;y=o.GetAttribute(d,_)}const S=s(a,o,d,g,A,y);g==="color"&&(S.vertexColorSpace=c.vertexColorSpace),m.attributes.push(S)}return p===a.TRIANGULAR_MESH&&(m.index=i(a,o,d)),a.destroy(d),m}function i(a,o,l){const u=l.num_faces()*3,h=u*4,d=a._malloc(h);o.GetTrianglesUInt32Array(l,h,d);const f=new Uint32Array(a.HEAPF32.buffer,d,u).slice();return a._free(d),{array:f,itemSize:1}}function s(a,o,l,c,u,h){const d=l.num_points(),f=h.num_components(),p=r(a,u),m=f*u.BYTES_PER_ELEMENT,g=Math.ceil(m/4)*4,A=g/u.BYTES_PER_ELEMENT,y=d*m,_=d*g,S=a._malloc(y);o.GetAttributeDataArrayForAllPoints(l,h,p,y,S);const w=new u(a.HEAPF32.buffer,S,y/u.BYTES_PER_ELEMENT);let C;if(m===g)C=w.slice();else{C=new u(_/u.BYTES_PER_ELEMENT);let B=0;for(let P=0,v=w.length;P<v;P++){for(let E=0;E<f;E++)C[B+E]=w[P*f+E];B+=A}}return a._free(S),{name:c,count:d,itemSize:f,array:C,stride:A}}function r(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}const Tf=new U0,zo=new F0(Tf),rx=new pT;rx.setDecoderPath("draco/");const Fl=new Pb;Fl.setDRACOLoader(rx);const oh=2048;function mT(n){const e=n.image;if(!e||e.width<=oh)return;const t=oh/e.width,i=document.createElement("canvas");i.width=oh,i.height=Math.round(e.height*t);const s=i.getContext("2d");s.imageSmoothingQuality="high",s.drawImage(e,0,0,i.width,i.height),n.image=i,n.needsUpdate=!0}function Al(n){return zo.load(vs(n),mT)}function vs(n){return n?n.startsWith("/")?n.slice(1):n:null}const Bf=[];function ax(n,e=new Set){return n.traverse(t=>{if(!t.material)return;(Array.isArray(t.material)?t.material:[t.material]).forEach(s=>{for(const r in s){const a=s[r];a&&a.isTexture&&e.add(a)}s.uniforms&&Object.values(s.uniforms).forEach(r=>{r&&r.value&&r.value.isTexture&&e.add(r.value)})})}),e}function xT(){const n=Bf.shift();if(n){try{ke.initTexture(n.texture)}catch(e){console.warn("Texture upload failed",e)}n.done()}}function _T(n){return new Promise(e=>Bf.push({texture:n,done:e}))}function ox(n){const e=[...ax(n)].map(t=>new Promise(i=>Bf.push({texture:t,done:i})));return Promise.all(e).then(()=>Promise.all([ke.compileAsync(n,H,He),cx(n)])).catch(t=>console.warn("Shader warm-up failed",t))}const ET={[kn]:Vt,[Vt]:kn,[kt]:kt},$p=new Map;let eg=null;function cx(n){if(!ke.shadowMap.enabled||ke.shadowMap.type===ni)return Promise.resolve();const e=new Zt;if(n.traverse(s=>{!s.isMesh||!s.castShadow||s.customDepthMaterial||s.isSkinnedMesh||s.isInstancedMesh||(Array.isArray(s.material)?s.material:[s.material]).forEach(r=>{if(!r)return;const a=new D0({depthPacking:u0});a.side=r.shadowSide??ET[r.side],a.wireframe=r.wireframe,a.alphaMap=r.alphaMap,a.alphaTest=r.alphaToCoverage===!0?.5:r.alphaTest,a.map=r.map,a.displacementMap=r.displacementMap,a.displacementScale=r.displacementScale,a.displacementBias=r.displacementBias;const o=s.geometry,l=[a.side,a.wireframe,!!a.alphaMap,a.alphaTest>0,!!a.map,!!a.displacementMap,s.receiveShadow,!!o.morphAttributes.position,!!o.morphAttributes.normal,Object.keys(o.attributes).sort().join("+")].join();if($p.has(l))return;$p.set(l,a);const c=new Je(o,a);c.receiveShadow=s.receiveShadow,c.morphTargetInfluences=s.morphTargetInfluences,e.add(c)})}),!e.children.length)return Promise.resolve();eg??=new di(1,1);const t=ke.getRenderTarget();ke.setRenderTarget(eg);let i;try{i=ke.compileAsync(e,H,He)}finally{ke.setRenderTarget(t)}return i}function lx(n,e){const t=e.elements;if(n.isInterleavedBufferAttribute||n.normalized||n.itemSize!==3||t[3]!==0||t[7]!==0||t[11]!==0||t[15]!==1)return(s,r)=>s.fromBufferAttribute(n,r).applyMatrix4(e);const i=n.array;return(s,r)=>{const a=i[3*r],o=i[3*r+1],l=i[3*r+2];return s.set(t[0]*a+t[4]*o+t[8]*l+t[12],t[1]*a+t[5]*o+t[9]*l+t[13],t[2]*a+t[6]*o+t[10]*l+t[14])}}const tg=new WeakMap,yT=new xe,ng=new Ms,Us=new x,Fs=new x,Ns=new x;function vT(n){const e=n.attributes.position,t=n.index,i=`${e.version}:${t?t.version:-1}:${e.count}:${t?t.count:-1}`,s=tg.get(n);if(s?.key===i)return s;const r=Math.floor((t?t.count:e.count)/3),a=new Float64Array(r*3),o=new Float64Array(r),l=u=>t?t.getX(u):u;for(let u=0;u<r;u++){Us.fromBufferAttribute(e,l(3*u)),Fs.fromBufferAttribute(e,l(3*u+1)),Ns.fromBufferAttribute(e,l(3*u+2));const h=(Us.x+Fs.x+Ns.x)/3,d=(Us.y+Fs.y+Ns.y)/3,f=(Us.z+Fs.z+Ns.z)/3;a[3*u]=h,a[3*u+1]=d,a[3*u+2]=f,o[u]=Math.sqrt(Math.max((Us.x-h)**2+(Us.y-d)**2+(Us.z-f)**2,(Fs.x-h)**2+(Fs.y-d)**2+(Fs.z-f)**2,(Ns.x-h)**2+(Ns.y-d)**2+(Ns.z-f)**2))*(1+1e-6)+1e-9}const c={key:i,centres:a,radii:o,count:r};return tg.set(n,c),c}const MT=2e3;function su(n,e){const t=e.layers.test(n.layers)?ST(n,e):void 0,i=e.children.length?n.intersectObjects(e.children,!0)[0]:void 0;return t&&i?t.distance<=i.distance?t:i:t||i}function ST(n,e){const t=e.geometry,i=t?.attributes.position;if((i?(t.index?t.index.count:i.count)/3:0)<MT||Array.isArray(e.material)||t.groups.length||t.morphAttributes.position){const A=[];return e.raycast(n,A),A.sort((y,_)=>y.distance-_.distance)[0]}const{centres:r,radii:a,count:o}=vT(t);ng.copy(n.ray).applyMatrix4(yT.copy(e.matrixWorld).invert());const{origin:l,direction:c}=ng,u=t.index,h=[];for(let A=0;A<o;A++){const y=r[3*A]-l.x,_=r[3*A+1]-l.y,S=r[3*A+2]-l.z,w=Math.max(0,y*c.x+_*c.y+S*c.z),C=y-c.x*w,B=_-c.y*w,P=S-c.z*w;C*C+B*B+P*P<=a[A]*a[A]&&h.push(A)}if(!h.length)return;const d=new Uint32Array(h.length*3);h.forEach((A,y)=>{for(let _=0;_<3;_++)d[3*y+_]=u?u.getX(3*A+_):3*A+_});const f=new Ze;f.setAttribute("position",i),f.setIndex(new Ge(d,1)),t.boundingSphere||t.computeBoundingSphere(),f.boundingSphere=t.boundingSphere,f.boundingBox=t.boundingBox;const p=new Je(f,e.material);p.matrixWorld.copy(e.matrixWorld),p.layers.mask=e.layers.mask;const m=[];p.raycast(n,m),m.sort((A,y)=>A.distance-y.distance);const g=m[0];return g&&(g.object=e,g.faceIndex!==void 0&&(g.faceIndex=h[g.faceIndex])),g}const ux=new x(0,1,0);function pl(n,e=Li){return e==="diagram"&&n.diagram_coords||n.landed_coords||{lat:45,lon:10}}const or=[],ch=6;function CT(n){const e=n&&(n.highLevel||n.lowLevel);if(!e)return null;if(n.supportsLevel===e&&n.supportsScale===n.mesh.scale.x)return n.supports;const{position:t,quaternion:i}=n.mesh;if(n.supportsLevel===e&&n.supports&&t.x===0&&t.z===0&&n.supportsTurn?.equals(i)&&n.supportsY===t.y){const p=n.mesh.scale.x/n.supportsScale,m=g=>{g.x*=p,g.z*=p,g.y=t.y+(g.y-t.y)*p};return n.supports.points.forEach(m),m(n.supports.centre),n.supports.reach*=p,n.supports.width*=p,n.supportsScale=n.mesh.scale.x,n.supports}n.supportsScale=n.mesh.scale.x,n.supportsTurn=i.clone(),n.supportsY=t.y,n.group.updateMatrixWorld(!0);const s=new xe().copy(n.group.matrixWorld).invert(),r=new xe,a=new x,o=p=>e.traverse(m=>{if(!m.isMesh||!m.geometry.attributes.position)return;r.multiplyMatrices(s,m.matrixWorld);const g=m.geometry.attributes.position,A=lx(g,r);for(let y=0;y<g.count;y++)p(A(a,y))});let l=1/0,c=-1/0;o(p=>{l=Math.min(l,p.y),c=Math.max(c,p.y)});const u=l+(c-l)*.03,h=new Array(ch).fill(null);o(p=>{if(p.y>u)return;const m=Math.hypot(p.x,p.z),g=Math.min(ch-1,Math.floor((Math.atan2(p.z,p.x)+Math.PI)/(2*Math.PI)*ch));(!h[g]||m>h[g].r)&&(h[g]={r:m,point:new x(p.x,l,p.z)})});const d=h.filter(Boolean).map(p=>p.point),f=Math.max(0,...h.filter(Boolean).map(p=>p.r));return n.supportsLevel=e,n.supports=d.length<3?null:{points:d,centre:d.reduce((p,m)=>p.add(m),new x).divideScalar(d.length),reach:c-l+f,width:2*f},n.supports}const IT=Math.cos(at.degToRad(35));function wT(n,e,t,i,s){const r=CT(n);if(!r)return null;const a=new ot().setFromUnitVectors(ux,s),o=s.clone().negate().transformDirection(e.matrixWorld),l=[];for(const p of r.points){const m=p.clone().applyQuaternion(a).add(i).addScaledVector(s,r.reach),g=su(new Zl(e.localToWorld(m),o,0,r.reach*3),t);if(!g)return null;l.push(e.worldToLocal(g.point.clone()))}const c=l.reduce((p,m)=>p.add(m),new x).divideScalar(l.length),u=new x;for(let p=0;p<l.length;p++)u.add(l[p].clone().sub(c).cross(l[(p+1)%l.length].clone().sub(c)));if(u.lengthSq()<1e-12||(u.normalize(),u.dot(s)<0&&u.negate(),u.dot(s)<IT))return null;const h=u.clone().multiplyScalar(r.points[0].y),d=c.clone().sub(i).sub(h).dot(u)/s.dot(u),f=(n.data.land_lift||0)*r.width;return{position:i.clone().addScaledVector(s,d).addScaledVector(u,f),normal:u}}function Ho(n){Z.forEach(e=>{const t=e.data;if(t.orbit_type!=="landed"||e!==n&&t.parent!==n.data.name)return;const i=Z.get(t.parent);!i||e.group.parent!==i.meshGroup||or.some(s=>s.data===t)||or.push({group:e.group,data:t})}),ru()}function bT(){Z.forEach(n=>{n.landedAt=null;const e=Z.get(n.data.parent);if(n.data.orbit_type!=="landed"||!e||n.group.parent!==e.meshGroup)return;const t=n.group.position.clone(),i=r=>{const a=dx(e,n.data,r)?.hit;return a?e.meshGroup.worldToLocal(a.point.clone()):null},s=i(pl(n.data))||t.clone();if(n.landedAt={ground:s,offset:t.sub(s),bodyScale:e.mesh.scale.x,ownScale:n.mesh.scale.x},n.data.diagram_coords){const r=i(pl(n.data,"diagram")),a=i(pl(n.data,"true"));r&&a&&Object.assign(n.landedAt,{diagram:r,real:a,turn:n.group.quaternion.clone()})}})}const Ha=new x,Pr=new ot,ig=new ot,TT=new ot;function BT(n){Z.forEach(e=>{const t=e.landedAt;if(!t)return;const i=Z.get(e.data.parent);if(Ha.copy(t.ground),Pr.identity(),t.real){const s=at.lerp(t.diagram.length(),t.real.length(),n);ig.setFromUnitVectors(Ha.copy(t.diagram).normalize(),t.real.clone().normalize()),Pr.slerpQuaternions(TT,ig,n),Ha.applyQuaternion(Pr).multiplyScalar(s),Pr.setFromUnitVectors(t.ground.clone().normalize(),Ha.clone().normalize()),e.group.quaternion.copy(t.turn).premultiply(Pr)}e.group.position.copy(Ha).multiplyScalar(i.mesh.scale.x/t.bodyScale).add(t.offset.clone().applyQuaternion(Pr).multiplyScalar(e.mesh.scale.x/t.ownScale))})}function RT(){Z.forEach(n=>{n.landedAt=null})}const DT=.5,LT=1e-7,sg=new x,PT=new x;function Rf(n){const e=Z.get(n.data.parent);if(!e)return;const t=e.mesh.children.filter(a=>a.isMesh&&!a.rotation.x&&!a.rotation.y&&!a.rotation.z&&a.scale.x===1);if(e.surfaceSite===n&&t.every(a=>a.userData.refinedFor===n)||n.group.parent!==e.meshGroup)return;n.group.getWorldPosition(sg),e.mesh.updateWorldMatrix(!0,!0);const i=[];Z.forEach(a=>{a.data.orbit_type==="landed"&&a.data.parent===e.data.name&&a.group.parent===e.meshGroup&&i.push(a)});const s=i.map(a=>a.data.name).sort().join("|");let r=!1;t.forEach(a=>{if(a.userData.refinedFor===n&&a.userData.refinedSites===s)return;a.userData.surfaceGeometry??=a.geometry;const o=h=>a.worldToLocal(h.clone()).add(a.position),l=o(sg),c=i.map(h=>o(h.group.getWorldPosition(new x))),u=QT(a.userData.surfaceGeometry,l,LT/a.getWorldScale(PT).x,c);u.computeBoundingBox(),u.computeBoundingSphere(),a.geometry!==a.userData.surfaceGeometry&&a.geometry.dispose(),a.geometry=u,a.position.copy(l),r=!0,a.userData.refinedFor=n,a.userData.refinedSites=s}),e.surfaceSite=n,r&&Ho(e)}function UT(){Z.forEach(n=>{n.surfaceSite&&(n.surfaceSite=null,n.mesh.children.forEach(e=>{e.userData&&(e.userData.refinedFor=null)}))})}const ti=new Rn,FT=new x,NT=1e-5;function QT(n,e,t,i){const s=Object.keys(n.attributes),r=s.map(E=>n.attributes[E].itemSize),a=s.map(E=>Array.from(n.attributes[E].array)),o=a[s.indexOf("position")];let l=n.attributes.position.count;const c=l;let u=1/0,h=0;for(let E=0;E<l;E++){const b=Math.hypot(o[3*E],o[3*E+1],o[3*E+2]);u=Math.min(u,b),h=Math.max(h,b)}const d=h-u<=NT*h?(u+h)/2:null;for(let E=0;E<l;E++)o[3*E]-=e.x,o[3*E+1]-=e.y,o[3*E+2]-=e.z;const f=i.map(E=>E.clone().sub(e)),p=(E,b)=>(a.forEach((R,U)=>{const Q=r[U];for(let F=0;F<Q;F++)R.push(E.reduce((k,X,z)=>k+R[X*Q+F]*b[z],0))}),l++),m=new Map,g=(E,b)=>E<b?E*2**26+b:b*2**26+E,A=(E,b)=>{let R=m.get(g(E,b));return R===void 0&&(R=p([E,b],[.5,.5]),m.set(g(E,b),R)),R},y=(E,b)=>b.set(o[3*E],o[3*E+1],o[3*E+2]),_=(E,b,R)=>{y(E,ti.a),y(b,ti.b),y(R,ti.c);const U=Math.max(ti.a.distanceTo(ti.b),ti.b.distanceTo(ti.c),ti.c.distanceTo(ti.a));return U<=t?!1:f.some(Q=>U>DT*ti.closestPointToPoint(Q,FT).distanceTo(Q))},S=[],w=(E,b,R)=>{if(!_(E,b,R)){S.push(E,b,R);return}const U=A(E,b),Q=A(b,R),F=A(R,E);w(E,U,F),w(U,b,Q),w(F,Q,R),w(U,Q,F)},C=n.index?n.index.array:Array.from({length:l},(E,b)=>b);for(let E=0;E<C.length;E+=3)w(C[E],C[E+1],C[E+2]);const B=(E,b,R)=>{const U=m.get(g(E,b));U===void 0?R.push(E):(B(E,U,R),B(U,b,R))},P=[];for(let E=0;E<S.length;E+=3){const b=S[E],R=S[E+1],U=S[E+2],Q=[];if(B(b,R,Q),B(R,U,Q),B(U,b,Q),Q.length===3){P.push(b,R,U);continue}const F=p([b,R,U],[1/3,1/3,1/3]);Q.forEach((k,X)=>P.push(k,Q[(X+1)%Q.length],F))}if(d!==null){const E=s.includes("normal")?a[s.indexOf("normal")]:null;for(let b=c;b<l;b++){const R=o[3*b]+e.x,U=o[3*b+1]+e.y,Q=o[3*b+2]+e.z,F=Math.hypot(R,U,Q);if(!(F>0))continue;const k=d/F;o[3*b]=R*k-e.x,o[3*b+1]=U*k-e.y,o[3*b+2]=Q*k-e.z,E&&(E[3*b]=R/F,E[3*b+1]=U/F,E[3*b+2]=Q/F)}}const v=new Ze;return s.forEach((E,b)=>v.setAttribute(E,new Ge(new Float32Array(a[b]),r[b],n.attributes[E].normalized))),v.setIndex(P),v}const hx=[];function OT(n){hx.push(n)}function dx(n,e,t=pl(e)){let i=null;if((n.highLevel||n.mesh).traverse(m=>{m.isMesh&&!i&&!m.material.transparent&&(i=m)}),!i||!i.geometry)return null;n.meshGroup.updateMatrixWorld(!0),i.updateMatrixWorld(!0),i.geometry.computeBoundingBox();const s=i.geometry.boundingBox,r=s.getCenter(new x),a=s.getSize(new x),{lat:o,lon:l}=t,c=(90-o)*(Math.PI/180),u=(l+180)*(Math.PI/180),h=new x(-(Math.sin(c)*Math.cos(u)),Math.cos(c),Math.sin(c)*Math.sin(u)).normalize(),d=Math.max(a.x,a.y,a.z),f=new x().crossVectors(h,Math.abs(h.y)<.9?ux:new x(1,0,0)).normalize();let p=null;for(let m=0;m<5&&!p;m++){const g=m===0?h:h.clone().applyAxisAngle(f.clone().applyAxisAngle(h,m*Math.PI/2),.002),A=r.clone().addScaledVector(g,d*2).applyMatrix4(i.matrixWorld),y=g.clone().negate().transformDirection(i.matrixWorld).normalize();p=su(new Zl(A,y),i)||null}return{targetMesh:i,dir:h,hit:p}}const rg=4;let fx=()=>null;function kT(n){fx=n}function GT(){const n=Z.get(fx())?.data,e=n?.orbit_type==="landed"?n.parent:n?.name,t=i=>n&&i.data.name===n.name?0:e&&i.data.parent===e?1:2;return[...or].sort((i,s)=>t(i)-t(s))}let lh=-1/0,uh=0;const zT=6;function ru(){const n=performance.now();n-lh>rg+zT&&(lh=n,uh=0);for(const e of GT()){if(uh&&performance.now()-lh>rg)break;const t=Z.get(e.data.parent);if(t&&t.mesh&&t.meshGroup&&(!Go(t.data)||t.data.isModelLoaded)){const s=dx(t,e.data);if(!s)continue;const{targetMesh:r,dir:a,hit:o}=s;let l,c;const u=new Ne().getNormalMatrix(t.meshGroup.matrixWorld),h=new Ne().copy(u).invert();if(o){l=t.meshGroup.worldToLocal(o.point.clone());const p=new Ne().getNormalMatrix(o.object.matrixWorld);c=o.face.normal.clone().applyMatrix3(p).normalize().applyMatrix3(h).normalize();const g=wT(Z.get(e.data.name),t.meshGroup,r,l,c);g&&(l=g.position,c=g.normal)}else{r.geometry.boundingSphere||r.geometry.computeBoundingSphere();const{center:p,radius:m}=r.geometry.boundingSphere,g=p.clone().addScaledVector(a,m).applyMatrix4(r.matrixWorld);l=t.meshGroup.worldToLocal(g),c=a.clone().transformDirection(r.matrixWorld).applyMatrix3(h).normalize(),console.warn(`Couldn't find ${t.data.name}'s surface under ${e.data.name}; placed it on the bounding sphere.`)}t.meshGroup.add(e.group),e.group.position.copy(l);const d=new x(0,1,0),f=new ot().setFromUnitVectors(d,c);e.group.quaternion.copy(f),e.group.scale.set(1,1,1),e.group.updateMatrixWorld(!0),t.meshGroup.updateMatrixWorld(!0),or.splice(or.indexOf(e),1),uh++,hx.forEach(p=>p(e.data))}}}const Df=[];function Ax(){return new Mt({uniforms:{uTime:{value:0},uColor:{value:new Se(65535)}},vertexShader:`
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
        `,transparent:!0,blending:ms,side:kt,depthWrite:!1})}const Vs=[];let hh=0;const HT=2;function px(){if(hh>=HT||Vs.length===0)return;const n=Vs.shift();n&&(hh++,$T(n.item,n.isPriority,()=>{hh--,px()}))}function jr(n,e=!1){if(!n||n.isModelLoaded||n.isModelLoading)return;if(n.isModelQueued){const i=Vs.findIndex(s=>s.item===n);e&&i>0&&Vs.unshift(...Vs.splice(i,1));return}if(!Go(n)){n.isModelLoaded=!0;return}n.isModelQueued=!0,e?Vs.unshift({item:n,isPriority:!0}):Vs.push({item:n,isPriority:!1}),px()}function ag(n,e){if(!n||!n.isMeshPhysicalMaterial)return n;if(!e.has(n)){const t=new ki;t.copy(n),n.transmission>0&&(t.transparent=!0,t.opacity=Math.min(n.opacity,.35),t.depthWrite=!1),e.set(n,t)}return e.get(n)}function VT(n,e){const t=new Map;e.traverse(i=>{if(i.isMesh&&(i.material=Array.isArray(i.material)?i.material.map(s=>ag(s,t)):ag(i.material,t),i.userData=n,i.castShadow=!0,i.receiveShadow=!0,eb.has(n.type)&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>{s.shadowSide=Vt}),i.material&&(i.material.map&&(i.material.map.colorSpace=dt),i.material.metalness!==void 0&&(i.material.metalness=Math.min(i.material.metalness,.4),i.material.roughness=Math.max(i.material.roughness,.6))),lo(n))){const s=Ax();i.material=s,Df.push(s),i.castShadow=!1,i.receiveShadow=!1}})}const WT=1e5;function qT(n){n.updateMatrixWorld(!0);let e=0;n.traverse(d=>{d.isMesh&&(e+=(d.geometry.index?d.geometry.index.count:d.geometry.attributes.position.count)/3)});const t=Math.max(1,e/WT);let i=1;const s=()=>(i=i*16807%2147483647)/2147483647,r=new x,a=new x,o=new x;let l=0,c=0,u=0,h=0;return n.traverse(d=>{if(!d.isMesh)return;const f=d.geometry.attributes.position,p=d.geometry.index,m=(p?p.count:f.count)/3,g=lx(f,d.matrixWorld),A=p?p.array:null;for(let y=0;y<m;y+=t){const _=Math.min(m-1,Math.floor(y+(t>1?s()*t:0)))*3;g(r,A?A[_]:_),g(a,A?A[_+1]:_+1),g(o,A?A[_+2]:_+2);const S=a.x-r.x,w=a.y-r.y,C=a.z-r.z,B=o.x-r.x,P=o.y-r.y,v=o.z-r.z,E=w*v-C*P,b=C*B-S*v,R=S*P-w*B,U=Math.sqrt(E*E+b*b+R*R)/2,Q=U/3;l+=(r.x+a.x+o.x)*Q,c+=(r.y+a.y+o.y)*Q,u+=(r.z+a.z+o.z)*Q,h+=U}}),h>0?new x(l,c,u).divideScalar(h):null}const og=new Set(["skinIndex","skinWeight"]);function XT(n){const e=m=>Object.keys(m.attributes).filter(g=>!og.has(g)).sort().map(g=>g+m.attributes[g].itemSize).join(),t=(m,g)=>[m.material.uuid,m.castShadow,m.receiveShadow,m.renderOrder,g,m.frustumCulled,m.layers.mask,e(m.geometry)].join("|");let i=0,s=!1,r=!1;const a=new Set;if(n.traverse(m=>{m.isMesh?(i++,s||=m.isSkinnedMesh,m.isInstancedMesh||m.isBatchedMesh||Array.isArray(m.material)||Object.keys(m.geometry.morphAttributes).length?r=!0:a.add(t(m,m.visible))):(m.isLight||m.isCamera||m.isLine||m.isPoints||m.isSprite)&&(r=!0)}),r||i<2||a.size===i&&!s)return;n.updateMatrixWorld(!0);const o=new xe().copy(n.matrixWorld).invert(),l=new Map,c=new xe,u=new Ne,h=new xe,d=new xe,f=new x;n.traverse(m=>{if(!m.isMesh)return;const g=m.geometry,A=new Ze;for(const[C,B]of Object.entries(g.attributes)){if(og.has(C))continue;const P=new Float32Array(B.count*B.itemSize);for(let v=0;v<B.count;v++)for(let E=0;E<B.itemSize;E++)P[v*B.itemSize+E]=B.getComponent(v,E);A.setAttribute(C,new Ge(P,B.itemSize))}const y=A.attributes.position.count,_=g.index?Array.from({length:g.index.count},(C,B)=>g.index.getX(B)):Array.from({length:y},(C,B)=>B);c.multiplyMatrices(o,m.matrixWorld);let S=!0;for(let C=m;C&&C!==n;C=C.parent)S&&=C.visible;if(m.isSkinnedMesh){const{bones:C,boneInverses:B}=m.skeleton,P=g.attributes.skinIndex,v=g.attributes.skinWeight,{position:E,normal:b,tangent:R}=A.attributes;u.getNormalMatrix(c);for(let U=0;U<y;U++){h.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);for(let Q=0;Q<4;Q++){const F=v.getComponent(U,Q);if(!F)continue;const k=P.getComponent(U,Q);d.multiplyMatrices(C[k].matrixWorld,B[k]);for(let X=0;X<16;X++)h.elements[X]+=d.elements[X]*F}h.premultiply(m.bindMatrixInverse).multiply(m.bindMatrix),f.fromBufferAttribute(E,U).applyMatrix4(h).applyMatrix4(c),E.setXYZ(U,f.x,f.y,f.z),b&&(f.fromBufferAttribute(b,U).transformDirection(h).applyMatrix3(u).normalize(),b.setXYZ(U,f.x,f.y,f.z)),R&&(f.set(R.getX(U),R.getY(U),R.getZ(U)).transformDirection(h).transformDirection(c),R.setXYZ(U,f.x,f.y,f.z))}}else A.applyMatrix4(c);if(c.determinant()<0)for(let C=0;C<_.length;C+=3)[_[C+1],_[C+2]]=[_[C+2],_[C+1]];A.setIndex(_);const w=t(m,S);l.has(w)||l.set(w,{mesh:m,shown:S,geometries:[]}),l.get(w).geometries.push(A)});const p=[];for(const{mesh:m,shown:g,geometries:A}of l.values()){const y=A.length>1?Db(A):A[0];if(!y)return;const _=new Je(y,m.material);_.name=m.name,_.castShadow=m.castShadow,_.receiveShadow=m.receiveShadow,_.renderOrder=m.renderOrder,_.visible=g,_.frustumCulled=m.frustumCulled,_.layers.mask=m.layers.mask,p.push(_)}n.clear(),p.forEach(m=>n.add(m))}function gx(n,e,t){XT(t);const i=new Zt;i.add(t);const s=new jn().setFromObject(t),r=qT(t)||s.getCenter(new x);t.position.x=-r.x,t.position.z=-r.z,n.orbit_type==="landed"?t.position.y=-s.min.y:t.position.y=-r.y;const a=s.getSize(new x),o=Math.max(a.x,a.y,a.z),l=n.built?.modelSize??(n.type==="mission"?rr:n.model_scale||1),c=1/(o||1)*l;return i.scale.set(c,c,c),n.model_offset&&i.position.set(n.model_offset.x,n.model_offset.y,n.model_offset.z),VT(n,t),i.userData.detailLevel=!0,i}function YT(n,e){const t=e===n.model&&n.model_low||(e?e.replace(".glb","-low.glb"):null);return t&&t!==e?t:null}const Nd=[];function mx(){return new Promise(n=>Nd.push(n))}function KT(){Nd.length!==0&&Nd.shift()()}const JT=new di(1,1),gl=new Af;gl.overrideMaterial=new li;const ZT=new Kt;function xx(n){const e=[];n.traverse(i=>{i.isMesh&&i.frustumCulled&&(i.frustumCulled=!1,e.push(i))}),gl.add(n);const t=ke.getRenderTarget();ke.setRenderTarget(JT),ke.render(gl,ZT),ke.setRenderTarget(t),gl.remove(n),e.forEach(i=>{i.frustumCulled=!0})}const _x=new Set,cg=new x,wc=new x;function Ex(n){if(!n.detailRoot||!n.detailRadius)return 0;n.detailRoot.getWorldPosition(cg),n.detailRoot.getWorldScale(wc);const e=n.detailRadius*Math.max(wc.x,wc.y,wc.z),t=H.position.distanceTo(cg);if(t===0)return 1/0;const i=H.fov*(Math.PI/180);return 2*e/t*window.innerHeight/(2*Math.tan(i/2))}function jT(){_x.forEach(n=>{if(!n.group.visible)return;const e=Ex(n),t=n.highLevel.visible,i=t?e>$w:e>jw;i!==t&&(n.highLevel.visible=i,n.lowLevel.visible=!i)})}async function $T(n,e,t){const i=Z.get(n.name),s=Go(n);if(!i||!s){n.isModelLoaded=!0,t&&t();return}n.isModelLoading=!0;const r=YT(n,s);try{let a,o=!!r;try{a=await Fl.loadAsync(vs(r||s))}catch(f){if(!r)throw f;o=!1,a=await Fl.loadAsync(vs(s))}const l=gx(n,s,a.scene);await ox(l),await mx(),xx(l);const c=new Zt;c.add(l);const u=i.mesh;for(let f=u.children.length-1;f>=0;f--){const p=u.children[f];!p.isLine2&&!p.isLine&&u.remove(p)}const h=new jn().setFromObject(c),d=n.orbit_type==="landed"?h.getCenter(new x).y:0;i.detailRadius=Math.max(...[0,1,2,3,4,5,6,7].map(f=>Math.hypot(f&1?h.max.x:h.min.x,(f&2?h.max.y:h.min.y)-d,f&4?h.max.z:h.min.z))),i.detailCenterY=h.getCenter(new x).y,i.frameRadius=n1(c,h,i.detailRadius,n.orbit_type==="landed"),u.add(c),i.detailRoot=c,i.lowLevel=l,n.hasHighDetail=!o,n.isModelLoaded=!0,Ho(i),n.wantsHighDetail&&Lf(n)}catch(a){console.warn(`Failed to load model for ${n.name}`,a),n.isModelLoaded=!0}n.isModelLoading=!1,t&&t()}function Lf(n){if(!n||n.hasHighDetail||n.isHighDetailLoading)return;const e=Go(n);if(!e)return;const t=Z.get(n.name);if(!t||!t.detailRoot){n.wantsHighDetail=!0;return}n.isHighDetailLoading=!0,Fl.loadAsync(vs(e)).then(i=>{const s=gx(n,e,i.scene);return ox(s).then(mx).then(()=>{xx(s),s.visible=!1,t.detailRoot.add(s),t.highLevel=s,_x.add(t),n.hasHighDetail=!0,Ho(t)})}).catch(i=>console.warn(`Failed to load full-detail model for ${n.name}`,i)).finally(()=>{n.isHighDetailLoading=!1})}function e1(n){n&&Z.forEach(e=>{ar(e.data.name)===n&&jr(e.data,!1)})}const t1=5e4;function n1(n,e,t,i){const s=new x(0,i?e.getCenter(new x).y:0,0),r=new x;let a=0,o=0;if(n.updateMatrixWorld(!0),n.traverse(c=>{const u=c.isMesh&&c.geometry&&c.geometry.attributes.position;if(!u)return;const h=Math.max(1,Math.floor(u.count/t1));for(let d=0;d<u.count;d+=h)r.fromBufferAttribute(u,d).applyMatrix4(c.matrixWorld),a+=r.distanceToSquared(s),o++}),!o)return t;const l=Math.min(Math.sqrt(a/o),t);return Math.sqrt(l*t)}const yx=[];let lg=!1;function i1(){lg||(lg=!0,yx.forEach(n=>jr(n,!0)))}const s1=`// 4D simplex noise.\r
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
`,ug=`// Shared by the Sun's shaders.\r
\r
// Hot-body colour ramp: red follows brightness, green its square, blue its fourth power, so\r
// bright plasma reads white-yellow and dimmer plasma orange-red. uTint sets where on that\r
// curve 1.0 lands; uBrightness scales the result.\r
vec3 plasmaColor(float brightness, float tint, float gain) {\r
    float b = brightness * tint;\r
    float b2 = b * b;\r
    return vec3(b, b2, b2 * b2) / tint * gain;\r
}\r
`,r1=`varying vec3 vDirection;\r
\r
void main() {\r
    vDirection = position;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}\r
`,a1=`// Draws evolving plasma noise onto the inside of a unit sphere; a cube camera at its centre\r
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
`,o1=`// The Sun's photosphere. The noise cube map is read three times through copies of the surface\r
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
`,c1=`uniform samplerCube uNoise;\r
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
`,hg=`// A flat shape centred on the Sun that always faces the camera, built in view space.\r
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
`,l1=`// Glow around the disc: strongest at the limb, falling off with the square of the distance,\r
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
`,u1=`// Soft star-like glow for when the Sun is small on screen.\r
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
`,h1=`// Coronal loops and rays: thin camera-facing ribbons animated entirely on the GPU.\r
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
`,d1=`varying float vAcross;\r
varying float vOpacity;\r
varying vec3 vColor;\r
\r
void main() {\r
    // Soft edges across the ribbon.\r
    float alpha = smoothstep(1.0, 0.0, abs(vAcross));\r
    alpha *= alpha * vOpacity;\r
    gl_FragColor = vec4(vColor * alpha, alpha);\r
}\r
`,ct={noise:{resolution:256,octaves:5,frequency:7,speed:.12,persistence:.8,contrast:.25,flatten:.72},surface:{layerSpin:.015,base:4,offset:1,limbPower:2.5,limbStrength:1.2,tint:.3,brightness:.7},corona:{extent:.35,tint:.46,brightness:1.06,falloffColor:.5,opacity:1},loops:{count:500,segments:24,regions:7,arch:.5,width:.012,cycleSpeed:.3,noiseFrequency:4,noiseAmplitude:.2,opacity:.45,hue:.1,hueSpread:.8},rays:{count:400,segments:12,length:.2,width:.02,cycleSpeed:.3,noiseFrequency:8,noiseAmplitude:.2,opacity:.06,hue:.35,hueSpread:.5},halo:{extent:3,minPixels:22,color:[1,.78,.45],opacity:.9},detailPixels:40,detailFadePixels:80,noisePixels:60,noiseFacesPerFrame:2},Qd={transparent:!0,depthWrite:!1,blending:ms,premultipliedAlpha:!0};function bc(n){return n.raycast=()=>{},n}function dg(n=96){const e=[],t=[];for(let s=0;s<=n;s++){const r=s/n*Math.PI*2;if(e.push(Math.cos(r),Math.sin(r),0,Math.cos(r),Math.sin(r),1),s<n){const a=s*2;t.push(a,a+1,a+2,a+1,a+3,a+2)}}const i=new Ze;return i.setAttribute("position",new zt(e,3)),i.setIndex(t),i}function Od(n){const e=n()*2-1,t=n()*Math.PI*2,i=Math.sqrt(1-e*e);return new x(i*Math.cos(t),e,i*Math.sin(t))}function fg(n,e,t){const i=Od(t).cross(n).normalize();return n.clone().applyAxisAngle(i,t()*e).normalize()}function f1(n){let e=n;return()=>(e=e*16807%2147483647)/2147483647}function Ag({count:n,segments:e},t){const i=(e+1)*2,s=new Float32Array(n*i*2),r=new Float32Array(n*i*3),a=new Float32Array(n*i*3),o=new Float32Array(n*i*4),l=[];let c=0;for(let h=0;h<n;h++){const{a:d,b:f,random:p}=t(h),m=c;for(let g=0;g<=e;g++){for(const A of[-1,1])s.set([g/e,A],c*2),r.set([d.x,d.y,d.z],c*3),a.set([f.x,f.y,f.z],c*3),o.set(p,c*4),c++;if(g<e){const A=m+g*2;l.push(A,A+1,A+2,A+1,A+3,A+2)}}}const u=new Ze;return u.setAttribute("aStrand",new Ge(s,2)),u.setAttribute("aFootA",new Ge(r,3)),u.setAttribute("aFootB",new Ge(a,3)),u.setAttribute("aSeed",new Ge(o,4)),u.setIndex(l),u.boundingSphere=new Sn(new x,1.6),u}function pg(n,e){return new Mt({...Qd,defines:e?{STRAND_RAYS:""}:{},uniforms:{uTime:{value:0},uCycleSpeed:{value:n.cycleSpeed},uCameraLocal:{value:new x},uWidth:{value:n.width},uArch:{value:n.arch??0},uLength:{value:n.length??0},uNoiseFrequency:{value:n.noiseFrequency},uNoiseAmplitude:{value:n.noiseAmplitude},uOpacity:{value:n.opacity},uHue:{value:n.hue},uHueSpread:{value:n.hueSpread}},vertexShader:h1,fragmentShader:d1})}const A1=new x,vx=new Ea(new Uint8Array([128,128,128,255]),1,1);vx.needsUpdate=!0;const p1=.8;function g1({radius:n,renderer:e}){const t=new Zt;t.scale.setScalar(n);const i=f1(20240613),s=new M0(ct.noise.resolution,{generateMipmaps:!1,minFilter:wt,magFilter:wt}),r=new y0(.1,10,s),a=new Af,o=new Mt({side:Vt,defines:{OCTAVES:ct.noise.octaves},uniforms:{uTime:{value:0},uFrequency:{value:ct.noise.frequency},uSpeed:{value:ct.noise.speed},uPersistence:{value:ct.noise.persistence},uContrast:{value:ct.noise.contrast},uFlatten:{value:ct.noise.flatten}},vertexShader:r1,fragmentShader:s1+a1}),l=new Je(new Oi(1,48,32),o);a.add(l);const c=new Je(new Oi(1,128,64),new Mt({uniforms:{uTime:{value:0},uNoise:{value:s.texture},uLayerSpin:{value:ct.surface.layerSpin},uBase:{value:ct.surface.base},uOffset:{value:ct.surface.offset},uLimbPower:{value:ct.surface.limbPower},uLimbStrength:{value:ct.surface.limbStrength},uTint:{value:ct.surface.tint},uBrightness:{value:ct.surface.brightness},uCycleMap:{value:vx},uCycleU:{value:0},uCycleMix:{value:0},uCycleLook:{value:0},uCycleGain:{value:1}},vertexShader:o1,fragmentShader:ug+c1}));t.add(c);const u=bc(new Je(dg(),new Mt({...Qd,uniforms:{uInner:{value:0},uOuter:{value:0},uMinPixels:{value:0},uViewportHeight:{value:1},uTint:{value:ct.corona.tint},uBrightness:{value:ct.corona.brightness},uFalloffColor:{value:ct.corona.falloffColor},uOpacity:{value:ct.corona.opacity}},vertexShader:hg,fragmentShader:ug+l1})));u.frustumCulled=!1,t.add(u);const h=bc(new Je(dg(64),new Mt({...Qd,uniforms:{uInner:{value:0},uOuter:{value:0},uMinPixels:{value:ct.halo.minPixels},uViewportHeight:{value:1},uColor:{value:new Se(...ct.halo.color)},uOpacity:{value:ct.halo.opacity}},vertexShader:hg,fragmentShader:u1})));h.frustumCulled=!1,t.add(h);const d=Array.from({length:ct.loops.regions},()=>{const F=(i()<.5?1:-1)*(.15+i()*.45),k=i()*Math.PI*2;return new x(Math.cos(F)*Math.cos(k),Math.sin(F),Math.cos(F)*Math.sin(k))}),f=bc(new Je(Ag(ct.loops,()=>{const F=i()<.2,k=F?Od(i):d[Math.floor(i()*d.length)],X=fg(k,F?.05:.18,i),z=fg(X,.05+i()*.3,i);return{a:X,b:z,random:[i(),i(),i(),i()]}}),pg(ct.loops,!1)));t.add(f);const p=bc(new Je(Ag(ct.rays,()=>{const F=Od(i);return{a:F,b:F,random:[i(),i(),i(),i()]}}),pg(ct.rays,!0)));t.add(p);const m=new x,g=new Me,A=new x;let y=!1;r.coordinateSystem=e.coordinateSystem,r.updateCoordinateSystem(),r.updateMatrixWorld();let _=0,S=0,w=null;function C(F,k=ct.noiseFacesPerFrame){if(!y)return;o.uniforms.uTime.value=F;const X=e.getRenderTarget();for(let z=0;z<k;z++)e.setRenderTarget(s,_),e.render(a,r.children[_]),_=(_+1)%6;e.setRenderTarget(X)}const B=new di(4,4),P=new Kt(60,1,.01,100);P.position.set(0,0,3),P.lookAt(0,0,0),P.updateMatrixWorld();function v(){const F=t.parent;F&&F.remove(t),t.scale.setScalar(1),t.visible=f.visible=p.visible=!0;for(const X of[f,p])X.material.uniforms.uCameraLocal.value.copy(P.position);const k=e.getRenderTarget();e.setRenderTarget(B),e.render(t,P),e.setRenderTarget(k),t.scale.setScalar(n),F&&F.add(t)}t.visible=!1,Promise.all([e.compileAsync(l,r.children[0],a),e.compileAsync(t,P)]).then(()=>{y=!0,C(0,6),v(),B.dispose()});function E(F,k,{strandsTime:X=F}={}){t.getWorldPosition(m);const z=t.getWorldScale(A1).x,te=k.position.distanceTo(m);e.getSize(g);const ie=Math.tan(at.degToRad(k.fov)/2),ee=te>z?z/te/ie*(g.y/2):1/0;A.copy(m).project(k);const pe=A.z<1&&Math.abs(A.x)<1.5&&Math.abs(A.y)<1.5;c.material.uniforms.uTime.value=F;const be=w===null?0:Math.max(0,F-w);w=F,Q(be),pe&&ee>ct.noisePixels&&(S+=be,C(S)),u.material.uniforms.uInner.value=z*.98,u.material.uniforms.uOuter.value=z*(1+ct.corona.extent),u.material.uniforms.uViewportHeight.value=g.y,h.material.uniforms.uOuter.value=z*ct.halo.extent,h.material.uniforms.uViewportHeight.value=g.y,h.material.uniforms.uOpacity.value=ct.halo.opacity*(1-at.smoothstep(ee,20,120));const et=at.smoothstep(ee,ct.detailPixels,ct.detailFadePixels);if(f.visible=p.visible=et>0,et>0){f.material.uniforms.uOpacity.value=ct.loops.opacity*et,p.material.uniforms.uOpacity.value=ct.rays.opacity*et;for(const At of[f,p])At.material.uniforms.uTime.value=X,At.worldToLocal(At.material.uniforms.uCameraLocal.value.copy(k.position))}}function b(F){S=F}const R={mix:0,mixTo:0,look:0,lookTo:0};function U(F){const k=c.material.uniforms;if(!F){R.mixTo=0;return}F.map&&(k.uCycleMap.value=F.map),F.u!==void 0&&(k.uCycleU.value=at.clamp(F.u,0,1)),F.gain!==void 0&&(k.uCycleGain.value=F.gain),F.look!==void 0&&(R.lookTo=F.look,R.mix===0&&(R.look=F.look)),R.mixTo=1}function Q(F){const k=F/p1,X=(te,ie)=>ie>te?Math.min(ie,te+k):Math.max(ie,te-k);R.mix=X(R.mix,R.mixTo),R.look=X(R.look,R.lookTo);const z=c.material.uniforms;z.uCycleMix.value=R.mix*R.mix*(3-2*R.mix),z.uCycleLook.value=R.look*R.look*(3-2*R.look)}return{group:t,update:E,setNoiseTime:b,setCycle:U,noiseMaterial:o}}let Mx=1,An=new Date;const m1=new kv;let Kn=0,cr=null;function x1(n){Kn=cr??Kn+n}function _1(n){cr=n}function E1(){return new Date(An)}function y1(n){An.setTime(new Date(n).getTime())}function v1(n){Mx=n}const ml=new Map;function au(n,e){ml.has(n)||ml.set(n,[]),ml.get(n).push(e)}function nn(n,e){ml.get(n)?.forEach(t=>t(e))}const M1=new x(0,0,0),S1=new x(0,1,0);function ou(n){let e=0;for(let t=0;t<n.length;t++)e=(e<<5)-e+n.charCodeAt(t),e|=0;return Math.abs(e)}function C1(n,e=.25){const t=ou(n||"asteroid"),i=.2+(t&255)/255*.8,s=.2+(t>>8&255)/255*.8,r=.2+(t>>16&255)/255*.8,a=i+s+r,o=t&1?1:-1,l=t>>1&1?1:-1,c=t>>2&1?1:-1;return{x:o*(i/a)*e,y:l*(s/a)*e,z:c*(r/a)*e}}function I1(n){const e=ou(n||"asteroid"),t=5+(e&255)/255*14,i=(e>>8&255)/255*(Math.PI/3),s=(e>>16&255)/255*Math.PI*2;return{period:(e>>24&1?1:-1)*t/24,pole:new x(Math.sin(i)*Math.cos(s),Math.cos(i),Math.sin(i)*Math.sin(s)),offset:e%360}}function w1(n){const e=ou(`${n||"asteroid"}/tumble`);return{nutation:(35+(e&255)/255*40)*Math.PI/180,precession:1.5+(e>>8&255)/255*2,offset:(e>>16&255)/255*Math.PI*2}}const gg={spin:{axis:"+y",rate:2,wobble:8,tilt:35,period:90},sun:{axis:"+y",rate:1.5,wobble:5,period:120},nadir:{axis:"-y",along:"+z",rate:0,wobble:3,period:40},tumble:{rate:3}},dh=new x,mg=new x,xg=new x,Ur=new x,Hr=new x,Zi=new x,_g=new xe,Eg=new xe,yg=new ot,Tc=new ot;function vg(n){const e=/^([+-]?)([xyz])$/.exec(String(n||"+y").trim().toLowerCase())||["","","y"],t=new x;return t[e[2]]=e[1]==="-"?-1:1,t}function b1(n){if(n.motion)return n.motion;const e=n.data.motion||{},t=gg[e.mode]?e.mode:"spin",i={...gg[t],...e},s=ou(n.data.name),r=s%360*Math.PI/180,a=at.degToRad(i.tilt||0);return n.motion={mode:t,axis:vg(i.axis),along:vg(i.along),rate:at.degToRad(i.rate||0),wobble:at.degToRad(i.wobble||0),period:i.period||90,phase:(s>>9)%628/100,rest:new x(Math.sin(a)*Math.cos(r),Math.cos(a),Math.sin(a)*Math.sin(r))},n.motion}function T1(n,e,t,i){return e?(Hr.set(1,0,0),Math.abs(n.x)>.9&&Hr.set(0,0,1),Hr.cross(n).normalize().applyAxisAngle(n,t),i.copy(n).multiplyScalar(Math.cos(e)).addScaledVector(Hr,Math.sin(e))):i.copy(n)}function B1(n,e,t,i){const s=b1(n),r=n.meshGroup,a=e/s.period*Math.PI*2+s.phase;if(s.mode==="tumble"){n.tumbleSpeed||(n.tumbleSpeed=C1(n.data.name,s.rate)),r.rotateX(n.tumbleSpeed.x*t),r.rotateY(n.tumbleSpeed.y*t),r.rotateZ(n.tumbleSpeed.z*t);return}const o=Z.get(n.data.parent);if(s.mode==="nadir"&&o&&n.data.orbit){Ur.subVectors(o.group.position,n.group.position).normalize();const l=pi(n.data.orbit,i),c=pi(n.data.orbit,i+.001);Zi.set(c.x-l.x,c.y-l.y,c.z-l.z),Zi.addScaledVector(Ur,-Zi.dot(Ur)),Zi.lengthSq()<1e-16&&Zi.crossVectors(Ur,S1),Zi.normalize(),Hr.crossVectors(Ur,Zi),_g.makeBasis(Ur,Zi,Hr),xg.crossVectors(s.axis,s.along),Eg.makeBasis(s.axis,s.along,xg).transpose(),r.quaternion.setFromRotationMatrix(_g.multiply(Eg)),Tc.setFromAxisAngle(s.axis,s.wobble*Math.sin(a)),r.quaternion.multiply(Tc);return}s.mode==="sun"?dh.subVectors(M1,n.group.position).normalize():dh.copy(s.rest),T1(dh,s.wobble,a,mg),yg.setFromUnitVectors(s.axis,mg),Tc.setFromAxisAngle(s.axis,s.rate*e+s.phase),r.quaternion.copy(yg).multiply(Tc)}let tr=null;function kd(n){return n?n.orbit_color?n.orbit_color:n.type==="planet"?n.color||"#4a90e2":n.type==="moon"?Z.get(n.parent)?.data.orbit_color||"#888888":n.type==="comet"?"#ffffff":"#888888":"#888888"}function Mg(n){return n?n.type==="asteroid"||n.type==="comet"||n.type==="mission"?.18:n.type==="planet"?.65:n.type==="moon"?.4:.35:.35}function R1(n,e,t){const i=er(n);if(i.samples.length<2)return null;const s=new Ze().setFromPoints(i.samples.map(a=>a.pos)),r=new ya(s,new Ss({color:new Se(e),transparent:!0,opacity:t,depthWrite:!1}));return r.userData={baseColor:e,baseOpacity:t},r.userData.curve={closed:!1,turns:0,range:()=>{const a=er(n).samples;return[a[0].days,a[a.length-1].days]},at:(a,o)=>tx(er(n),a,o)},r}function Pf(n,e,t){const i=[];for(let s=0;s<e;s++){const r=bf(n,s/e*2*Math.PI,t);i.push(new x(r.x,r.y,r.z))}return i}function Sx(n){return at.clamp(Math.ceil(2*Math.PI*Math.sqrt(wf(n)/(8*W0))),128,4096)}function Sg(n,e="#888888",t=.4){if(!n||n.a===0||n.rate===0)return null;const i=Sx(n),s=Ia(An),r=Pf(n,i,s),a=new Ze().setFromPoints(r),o=new Ss({color:new Se(e),transparent:!0,opacity:t,depthWrite:!1}),l=new xf(a,o);return l.userData={baseColor:e,baseOpacity:t,orbit:n,segments:i,days:s},l.userData.curve=z1(l),l}const D1=.1;function L1(n,e){const t=n?.userData.orbit;if(!t||!(t.node_rate||t.peri_rate)||n.userData.morph||Math.abs(e-n.userData.days)*(Math.abs(t.node_rate||0)+Math.abs(t.peri_rate||0))<D1)return;const s=n.userData.loop??n.geometry;s.setFromPoints(Pf(t,n.userData.segments,e)),s.computeBoundingSphere(),n.userData.days=e,n.userData.near&&(n.userData.near.cam=null),n.userData.far=null}const P1=.05,U1=.1,F1=.01,N1=.02,Q1=1.08,Bc=96,O1=2e-5,ji=new x,Rc=new x,k1=new xe;function G1(n,e){Z.forEach(t=>{Cg(t.orbitLine,n,e);const i=t.trajectoryLines;i&&[i.cruise,i.arrived].forEach(s=>{s&&s!==t.orbitLine&&Cg(s,n,e)})})}function z1(n){const e=n.userData.orbit;return{closed:!0,range:()=>[0,2*Math.PI],turns:(Math.abs(e.node_rate||0)+Math.abs(e.peri_rate||0))*(Math.PI/180),at:(t,i,s)=>{const r=bf(n.userData.orbit,t,s);return i.set(r.x,r.y,r.z)}}}function Cg(n,e,t){const i=n?.userData.curve;if(!i||!n.parent)return;if(!n.visible){Pi(n);return}n.parent.updateWorldMatrix(!0,!1),ji.copy(e).applyMatrix4(k1.copy(n.parent.matrixWorld).invert());const s=n.userData.near,r=n.userData.loop??n.geometry;r.boundingSphere||r.computeBoundingSphere();const a=r.boundingSphere,o=n.userData.far;if(o&&o.distances===Jn&&o.whole===r&&o.radius===a.radius&&o.cam.distanceTo(ji)+Math.abs(t-o.days)*i.turns*a.radius<o.slack||(n.userData.far=null,s?.cam&&s.cam.distanceTo(ji)<U1*s.distance&&Math.abs(t-s.days)*i.turns*a.radius<F1*s.distance))return;const l=P1*a.radius;if(ji.distanceTo(a.center)>a.radius+l){Pi(n);return}const c=n.userData.morph&&n.userData.orbit&&r.userData.reach;if(c){const ee=ji.length();if(ee<c[0]-2*l||ee>c[1]+2*l){Pi(n);return}}const u=ee=>i.at(ee,Rc,t),h=ee=>u(ee).distanceTo(ji),[d,f]=i.range(),p=f-d;let m=d,g=1/0;for(let ee=0;ee<=Bc;ee++){const pe=d+p*(ee/Bc),be=h(pe);be<g&&(g=be,m=pe)}const A=(Math.sqrt(5)-1)/2;let y=m-p/Bc,_=m+p/Bc;i.closed||(y=Math.max(y,d),_=Math.min(_,f));const S=u(_).clone(),w=u(y).distanceTo(S)/(_-y)||1;let C=_-A*(_-y),B=y+A*(_-y),P=h(C),v=h(B);for(let ee=0;ee<80&&(_-y)*w>O1*Math.min(P,v);ee++)P<v?(_=B,B=C,v=P,C=_-A*(_-y),P=h(C)):(y=C,C=B,P=v,B=y+A*(_-y),v=h(B));m=(y+_)/2;const E=Math.max(h(m),l*1e-12);if(E>l){Pi(n),n.userData.far={cam:ji.clone(),days:t,slack:(E-l)/2,distances:Jn,whole:r,radius:a.radius};return}const b=u(m).clone(),R=p*1e-9*(m+p*1e-9>f&&!i.closed?-1:1),U=u(m+R).distanceTo(b)/Math.abs(R)||1,Q=i.closed?p/2:Math.max(m-d,f-m),F=[];let k=0,X=N1*E/U;for(;k+X<Q;)k+=X,F.push(k),X*=Q1;let z;if(i.closed)z=[...F.map(ee=>m-ee).reverse(),m,...F.map(ee=>m+ee)];else{const ee=F.filter(be=>be<m-d).map(be=>m-be).reverse(),pe=F.filter(be=>be<f-m).map(be=>m+be);z=[...m>d?[d]:[],...ee,m,...pe,...m<f?[f]:[]]}const te=new Float32Array(z.length*3);z.forEach((ee,pe)=>{u(ee).sub(b),te[3*pe]=Rc.x,te[3*pe+1]=Rc.y,te[3*pe+2]=Rc.z});const ie=new Ze;ie.setAttribute("position",new Ge(te,3)),s?.geometry.dispose(),n.userData.loop??=n.geometry,n.geometry=ie,n.position.copy(b),n.material.isLineDashedMaterial&&n.computeLineDistances(),n.userData.near={cam:ji.clone(),distance:E,days:t,geometry:ie}}function Pi(n){const e=n.userData.near;e&&(e.geometry.dispose(),n.geometry=n.userData.loop,n.position.set(0,0,0),n.userData.near=null,n.userData.loop=null)}function Cx({y:n,z:e}){const t=Math.max(n,e)**2/Math.max(Math.min(n,e),1e-6);return at.clamp(Math.ceil(2*Math.PI*Math.sqrt(t/(8*W0))),128,4096)}function Ix(n){const e=[],t=Cx(n.amp),i={...n,M0:0};for(let s=0;s<t;s++)e.push(j0(i,s/t*(360/n.rate),new x));return e}function H1(n){if(!n?.amp||!n.rate)return null;const e=new Ze().setFromPoints(Ix(n)),t=new Ss({color:new Se("#888888"),transparent:!0,opacity:.18,depthWrite:!1}),i=new xf(e,t);return i.userData={baseColor:"#888888",baseOpacity:.18},i.userData.curve={closed:!0,turns:0,range:()=>[0,2*Math.PI],at:(s,r)=>r.set(-n.amp.x*Math.cos(s),n.amp.y*Math.cos(s),n.amp.z*Math.sin(s))},i}function Ig(n,e){const t=(90-n)*(Math.PI/180),i=(e+180)*(Math.PI/180);return new x(-(Math.sin(t)*Math.cos(i)),Math.cos(t),Math.sin(t)*Math.sin(i)).normalize()}function wg(n,e,t){const i=n.duration||.05;return Uf(n,e,t%i/i)}function Uf(n,e,t){const i=n.apogee||1.5,s=Ig(n.start_coords.lat,n.start_coords.lon),r=Ig(n.end_coords.lat,n.end_coords.lon),a=new ot().setFromUnitVectors(new x(0,1,0),s),o=new ot().setFromUnitVectors(new x(0,1,0),r),l=new ot().slerpQuaternions(a,o,t),c=new x(0,1,0).applyQuaternion(l),u=e+4*i*t*(1-t);return c.multiplyScalar(u)}function Ff(n,e){const t=[];for(let s=0;s<=128;s++)t.push(Uf(n.suborbital,e,s/128));return t}function V1(n,e){if(!n.suborbital)return null;const t=new Ze().setFromPoints(Ff(n,e)),i=new yv({color:16755200,dashSize:2,gapSize:1,transparent:!0,opacity:.6,depthWrite:!1}),s=new ya(t,i);return s.computeLineDistances(),s.userData.curve={closed:!1,turns:0,range:()=>[0,1],at:(r,a)=>a.copy(Uf(n.suborbital,Z.get(n.parent)?.data.radius||1,r))},s}function W1(n,e){try{const t=new Oi(n*1.005,64,64),i=Al(e);i.colorSpace=dt;const s=new x,r=new Mt({uniforms:{tNight:{value:i},uSun:{value:s}},vertexShader:`
                varying vec2 vUv; varying vec3 vNormal; varying vec3 vWorldPosition;
                void main() { vUv = uv; vNormal = normalize(mat3(modelMatrix) * normal);
                vec4 worldPos = modelMatrix * vec4(position, 1.0); vWorldPosition = worldPos.xyz;
                gl_Position = projectionMatrix * viewMatrix * worldPos; }
            `,fragmentShader:`
                uniform sampler2D tNight; uniform vec3 uSun; varying vec2 vUv; varying vec3 vNormal; varying vec3 vWorldPosition;
                void main() { vec3 sunDir = normalize(uSun - vWorldPosition);
                float dotProd = dot(vNormal, sunDir); float alpha = 1.0 - smoothstep(-0.2, 0.2, dotProd);
                vec4 color = texture2D(tNight, vUv); gl_FragColor = vec4(color.rgb, alpha * color.a); }
            `,transparent:!0,blending:ms,side:kn,depthWrite:!1}),a=new Je(t,r);return a.onBeforeRender=(o,l)=>s.copy(l.position),a}catch{return null}}function q1(n){const e=new Zt;let t,i;if(lo(n)){const o=Ax();Df.push(o),t=o,i=o}else t=new ki({color:16763904,roughness:.3,metalness:.8}),i=new ki({color:17663,roughness:.2,metalness:.5,emissive:4403});const s=new Je(new _s(1,1,1),t);lo(n)||(s.castShadow=!1,s.receiveShadow=!0),e.add(s);const r=new Je(new _s(3,.1,.8),i);lo(n)||(r.castShadow=!1,r.receiveShadow=!0),e.add(r);const a=n.type==="mission"?(n.model_size??rr)/3:(n.radius||1)*.5;return e.scale.set(a,a,a),n.orbit_type==="landed"&&(e.position.y=a/2),e.traverse(o=>{o.userData=n}),e}const bg=new x(0,1,0),X1=new x(0,0,1);function Y1(n){n.forEach(e=>{const t=new Zt,i=new Zt,s=new ot,r=e.type==="asteroid"||e.type==="comet"?I1(e.name):null;r&&(e.rot_period??=r.period,e.rot_offset??=r.offset),e.pole?s.setFromUnitVectors(bg,ys(e.pole)):e.tilt?s.setFromAxisAngle(X1,e.tilt*Math.PI/180):r&&e.tilt===void 0&&s.setFromUnitVectors(bg,r.pole),i.quaternion.copy(s);const a=new Zt;e.orbit_type==="suborbital"&&(a.rotation.x=Math.PI/2),a.userData=e,i.add(a),t.add(i);const o=e.type==="asteroid"&&e.menu_holder==="named"&&!e.rotation_mode&&!e.pole&&e.tilt===void 0?w1(e.name):null;if(Z.set(e.name,{group:t,meshGroup:i,mesh:a,data:e,axis:s,tumble:o}),e.built={radius:e.radius,modelSize:e.type==="mission"?e.model_size:e.model_scale},e.type==="star")tr=g1({radius:e.radius,renderer:ke}),a.add(tr.group),Rd.push(a);else{let l;if(e.type==="reference_point")l=new Jv(1),l.visible=!1;else if(e.texture){const c=Al(e.texture);c.colorSpace=dt;const u=e.segments||(e.type==="star"?48:32),h=new Oi(e.radius,u,u);let d={map:c,roughness:1,metalness:0};e.roughness_map&&(d.roughnessMap=e.roughness_map===e.texture?c:Al(e.roughness_map)),d.shadowSide=Vt;const f=new ki(d);if(e.night_texture&&da.nightLights){const p=W1(e.radius,e.night_texture);p&&a.add(p)}l=new Je(h,f),l.userData=e,l.castShadow=!0,l.receiveShadow=!0,e.texture_detail&&Rx.push({mesh:l,item:e,state:"waiting"})}else{const c=q1(e);a.add(c),l=c}(e.texture||e.type==="reference_point")&&a.add(l),e.type!=="reference_point"&&Rd.push(a)}if(e.ring){const l=e.radius*(e.ring.inner_radius||1.4),c=e.radius*(e.ring.outer_radius||2.5),u=new vf(l,c,128),h=u.attributes.position,d=new x;for(let g=0;g<h.count;g++){d.fromBufferAttribute(h,g);const y=(Math.sqrt(d.x*d.x+d.y*d.y)-l)/(c-l);u.attributes.uv.setXY(g,y,.5)}const f=Al(e.ring.texture);f.colorSpace=dt;const p=new ki({map:f,side:kt,transparent:!0,opacity:e.ring.opacity||.9,alphaTest:.1,roughness:.7,emissive:new Se(16777215).multiplyScalar(e.ring.emissive||.1)}),m=new Je(u,p);m.rotation.x=-Math.PI/2,m.receiveShadow=!0,m.castShadow=!0,i.add(m),Z.get(e.name).ring={mesh:m,innerRadius:l,outerRadius:c,builtInner:l,builtOuter:c,opacity:e.ring.opacity||.9}}}),Z.forEach(e=>{const{group:t,data:i}=e;if(Go(i)){const s=ar(i.name);(s==="Sun"||i.preload||Z.get(s)?.data.preload)&&yx.push(i)}if(i.orbit_type==="landed")or.push({group:t,data:i});else if(He.add(t),i.orbit_type==="trajectory"){const s=kd(i),r=Mg(i),a=R1(e,s,r);a&&He.add(a);const o=er(e);let l=null;if(o.arrival){l=Sg(o.arrivalOrbit,s,r);const c=Z.get(o.arrival.at);l&&c&&c.group.add(l)}e.trajectoryLines={cruise:a,arrived:l},e.orbitLine=a||l}else if(i.parent){let s=null;if(i.orbit_type==="libration"){s=i.show_orbit!==!1?H1(i.orbit):null;const r=Z.get(i.parent);r&&s&&r.mesh.add(s)}else if(i.orbit_type==="suborbital"){const r=Z.get(i.parent),a=r&&r.data.radius||1;s=V1(i,a),r&&s&&r.meshGroup.add(s)}else if(i.show_orbit!==!1){const r=kd(i),a=Mg(i);if(s=Sg(i.orbit,r,a),s){const o=Z.get(i.parent);o?o.group.add(s):He.add(s)}}s&&(e.orbitLine=s)}}),Z.forEach(e=>{if(e.data.parent){const t=Z.get(e.data.parent);t&&(t.data.isParent=!0)}})}function K1(n,e){const t=n.trajectoryLines;if(!t)return;const i=e?t.arrived:t.cruise;t.cruise&&(t.cruise.visible=!e),t.arrived&&(t.arrived.visible=e),i&&n.orbitLine!==i&&(n.orbitLine=i,nn("orbit-change",{data:n.data}))}function J1(){Qf(1/0),Nf(),Dx()}function Nf(){Z.forEach(n=>{const{data:e}=n,{built:t}=e;if(!t)return;const i=e.type==="mission"?(e.model_size??1)/(t.modelSize??e.model_size??1):t.radius?e.radius/t.radius:1;n.mesh.scale.setScalar(i),n.ring&&(n.ring.mesh.scale.setScalar(i),n.ring.innerRadius=n.ring.builtInner*i,n.ring.outerRadius=n.ring.builtOuter*i)})}const Z1=720,xl=6,j1=3,$1=4;function cu(n){Z.forEach(e=>{const t=e.trajectoryLines;t?[t.cruise,t.arrived].forEach(i=>i&&n(i,e)):e.orbitLine&&n(e.orbitLine,e)})}const Va=new x,uo=[];let wx=null;function eB(n){Qf(1/0),uo.length=0,wx=n,cu((e,t)=>uo.push({line:e,obj:t}))}function bx(n=$1){if(!uo.length)return;const e=performance.now();do{const{line:t,obj:i}=uo.shift();tB(t,i)}while(uo.length&&performance.now()-e<n)}function tB(n,e){Pi(n);const t=n.userData.orbit,i=e.trajectoryLines?.cruise===n?er(e):null;let s=null;if(t&&zp(t,1)){const r=n.geometry.attributes.position,a=Math.ceil(r.count/Z1),o=Math.ceil(r.count/a);s=new Float64Array(o*xl);for(let l=0,c=0;l<o;l++,c+=xl){Va.fromBufferAttribute(r,l*a);const u=Va.length()||1,{above:h,ends:[d,f]}=zp(t,ob(t,u,wx));s[c]=Va.x/u,s[c+1]=Va.y/u,s[c+2]=Va.z/u,s[c+3]=d,s[c+4]=f,s[c+5]=d>0&&f>0?Math.log(f/d):NaN,s.above=h}}else if(i)s=i.samples.map(r=>r.pos);else if(!n.userData.curve||t)return;if(n.userData.morph={real:s,geometry:n.geometry},s){const r=s instanceof Float64Array?s.length/xl:s.length;n.geometry=new Ze,n.geometry.setAttribute("position",new Ge(new Float32Array(r*3),3))}}const Dc=new x;function Tx(n){cu((e,t)=>{const i=e.userData.morph;if(!i||i.settling)return;const{data:s}=t;if(!i.real){s.orbit_type==="libration"?nB(e,i,s.orbit.amp):s.orbit_type==="suborbital"&&(ho(e,Ff(s,Z.get(s.parent)?.data.radius||1)),e.computeLineDistances());return}e.userData.near&&(e.userData.near.cam=null),e.userData.far=null;const r=e.userData.loop??e.geometry,a=r.attributes.position,o=a.array;if(i.real instanceof Float64Array){const l=i.real,c=l.above?e.userData.orbit.scale.radius:0;for(let u=0,h=0,d=0;u<a.count;u++,h+=xl,d+=3){const f=l[h+3],p=l[h+5],m=c+(p===p?f*Math.exp(n*p):f+(l[h+4]-f)*n);o[d]=l[h]*m,o[d+1]=l[h+1]*m,o[d+2]=l[h+2]*m}}else i.real.forEach((l,c)=>{Ld(Dc.copy(l)),o[3*c]=Dc.x,o[3*c+1]=Dc.y,o[3*c+2]=Dc.z});a.needsUpdate=!0,Bx(r)})}function Bx(n){const e=n.attributes.position.array,t=n.attributes.position.count*3;let i=1/0,s=1/0,r=1/0,a=-1/0,o=-1/0,l=-1/0;for(let g=0;g<t;g+=3){const A=e[g],y=e[g+1],_=e[g+2];A<i&&(i=A),A>a&&(a=A),y<s&&(s=y),y>o&&(o=y),_<r&&(r=_),_>l&&(l=_)}const c=n.boundingSphere??=new Sn,u=(i+a)/2,h=(s+o)/2,d=(r+l)/2;let f=0,p=1/0,m=0;for(let g=0;g<t;g+=3){const A=e[g]-u,y=e[g+1]-h,_=e[g+2]-d,S=A*A+y*y+_*_;S>f&&(f=S);const w=e[g]*e[g]+e[g+1]*e[g+1]+e[g+2]*e[g+2];w<p&&(p=w),w>m&&(m=w)}c.center.set(u,h,d),c.radius=Math.sqrt(f),n.userData.reach=[Math.sqrt(p),Math.sqrt(m)]}function nB(n,e,t){const i=Cx(t);let s=e.halo;if(!s||s.segments<i){const l=new Float64Array(i),c=new Float64Array(i);for(let u=0;u<i;u++){const h=u/i*2*Math.PI;l[u]=Math.cos(h),c[u]=Math.sin(h)}Pi(n),s&&n.geometry.dispose(),n.geometry=new Ze,n.geometry.setAttribute("position",new Ge(new Float32Array(i*3),3)),s=e.halo={segments:i,cos:l,sin:c}}n.userData.near&&(n.userData.near.cam=null),n.userData.far=null;const r=n.userData.loop??n.geometry,a=r.attributes.position,o=a.array;for(let l=0,c=0;l<s.segments;l++,c+=3)o[c]=-t.x*s.cos[l],o[c+1]=t.y*s.cos[l],o[c+2]=t.z*s.sin[l];a.needsUpdate=!0,Bx(r)}const _l=[];function iB(){Z.forEach(n=>{n.trajectoryLines&&(n.trajectoryPlan=null)}),cu((n,e)=>{const t=n.userData.morph;t&&(t.settling=!0,_l[e.trajectoryLines?.cruise===n?"unshift":"push"]({line:n,obj:e}))})}function Qf(n=j1){if(!_l.length)return;const e=performance.now(),t=Ia(An);do{const{line:i,obj:s}=_l.shift(),r=i.userData.morph;Pi(i),(r.real||r.halo)&&(i.geometry.dispose(),i.geometry=r.geometry),i.userData.morph=null,Lx(i,s,t)}while(_l.length&&performance.now()-e<n)}function ho(n,e){Pi(n),n.geometry.dispose(),n.geometry=new Ze().setFromPoints(e)}const sB=1400,Rx=[];function rB(){for(const n of Rx){if(n.state!=="waiting"||!n.mesh.visible)continue;n.mesh.getWorldPosition(Tg);const e=H.position.distanceTo(Tg);window.innerHeight*n.item.radius/Math.max(e,1e-9)/Math.tan(H.fov*Math.PI/360)>sB&&aB(n)}}const Tg=new x;async function aB(n){n.state="loading";try{const e=await(await fetch(vs(n.item.texture_detail))).blob(),t=await createImageBitmap(e,{imageOrientation:"flipY"});if(t.width>ke.capabilities.maxTextureSize){t.close(),n.state="done";return}const i=n.mesh.material,s=i.map,r=new Gt(t);r.flipY=!1,r.colorSpace=dt,r.anisotropy=ke.capabilities.getMaxAnisotropy(),r.needsUpdate=!0,await _T(r),i.map=r,i.roughnessMap===s&&(i.roughnessMap=r),s?.dispose(),n.state="done"}catch(e){console.warn(`Detail map ${n.item.texture_detail} failed`,e),n.state="done"}}function Dx(){const n=Ia(An);Z.forEach(e=>{e.trajectoryLines&&(e.trajectoryPlan=null)}),cu((e,t)=>Lx(e,t,n))}function Lx(n,e,t){const{data:i}=e;e.trajectoryLines?.cruise===n?ho(n,er(e).samples.map(s=>s.pos)):i.orbit_type==="libration"?ho(n,Ix(i.orbit)):i.orbit_type==="suborbital"?(ho(n,Ff(i,Z.get(i.parent)?.data.radius||1)),n.computeLineDistances()):oB(n,t)}function oB(n,e){const t=n.userData.orbit;t&&(Pi(n),n.userData.segments=Sx(t),n.userData.days=e,ho(n,Pf(t,n.userData.segments,e)))}const Bg={type:"change"},Of={type:"start"},Px={type:"end"},Lc=new Ms,Rg=new is,cB=Math.cos(70*at.DEG2RAD),Wt=new x,yn=2*Math.PI,Et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},fh=1e-6;class lB extends Zv{constructor(e,t=null){super(e,t),this.state=Et.NONE,this.target=new x,this.cursor=new x,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wr.ROTATE,MIDDLE:Wr.DOLLY,RIGHT:Wr.PAN},this.touches={ONE:zr.ROTATE,TWO:zr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new x,this._lastQuaternion=new ot,this._lastTargetPosition=new x,this._quat=new ot().setFromUnitVectors(e.up,new x(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new lp,this._sphericalDelta=new lp,this._scale=1,this._panOffset=new x,this._rotateStart=new Me,this._rotateEnd=new Me,this._rotateDelta=new Me,this._panStart=new Me,this._panEnd=new Me,this._panDelta=new Me,this._dollyStart=new Me,this._dollyEnd=new Me,this._dollyDelta=new Me,this._dollyDirection=new x,this._mouse=new Me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hB.bind(this),this._onPointerDown=uB.bind(this),this._onPointerUp=dB.bind(this),this._onContextMenu=_B.bind(this),this._onMouseWheel=pB.bind(this),this._onKeyDown=gB.bind(this),this._onTouchStart=mB.bind(this),this._onTouchMove=xB.bind(this),this._onMouseDown=fB.bind(this),this._onMouseMove=AB.bind(this),this._interceptControlDown=EB.bind(this),this._interceptControlUp=yB.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bg),this.update(),this.state=Et.NONE}update(e=null){const t=this.object.position;Wt.copy(t).sub(this.target),Wt.applyQuaternion(this._quat),this._spherical.setFromVector3(Wt),this.autoRotate&&this.state===Et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=yn:i>Math.PI&&(i-=yn),s<-Math.PI?s+=yn:s>Math.PI&&(s-=yn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Wt.setFromSpherical(this._spherical),Wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Wt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new x(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new x(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Lc.origin.copy(this.object.position),Lc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Lc.direction))<cB?this.object.lookAt(this.target):(Rg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Lc.intersectPlane(Rg,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>fh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>fh||this._lastTargetPosition.distanceToSquared(this.target)>fh?(this.dispatchEvent(Bg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?yn/60*this.autoRotateSpeed*e:yn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Wt.setFromMatrixColumn(t,0),Wt.multiplyScalar(-e),this._panOffset.add(Wt)}_panUp(e,t){this.screenSpacePanning===!0?Wt.setFromMatrixColumn(t,1):(Wt.setFromMatrixColumn(t,0),Wt.crossVectors(this.object.up,Wt)),Wt.multiplyScalar(e),this._panOffset.add(Wt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Wt.copy(s).sub(this.target);let r=Wt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/t.clientHeight),this._rotateUp(yn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/t.clientHeight),this._rotateUp(yn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Me,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function uB(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function hB(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function dB(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Px),this.state=Et.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function fB(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Wr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Et.DOLLY;break;case Wr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Et.ROTATE}break;case Wr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Et.PAN}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(Of)}function AB(n){switch(this.state){case Et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function pB(n){this.enabled===!1||this.enableZoom===!1||this.state!==Et.NONE||(n.preventDefault(),this.dispatchEvent(Of),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Px))}function gB(n){this.enabled!==!1&&this._handleKeyDown(n)}function mB(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case zr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Et.TOUCH_ROTATE;break;case zr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Et.TOUCH_PAN;break;default:this.state=Et.NONE}break;case 2:switch(this.touches.TWO){case zr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Et.TOUCH_DOLLY_PAN;break;case zr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Et.TOUCH_DOLLY_ROTATE;break;default:this.state=Et.NONE}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(Of)}function xB(n){switch(this._trackPointer(n),this.state){case Et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Et.NONE}}function _B(n){this.enabled!==!1&&n.preventDefault()}function EB(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yB(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Dg=Math.PI/180;function Ux(n,e,t,i,s){const r=Math.min(e/t,.999),a=e*Math.sqrt(1-r*r),o=Math.cos(n),l=Math.sin(n);return s.set(o*a-l*i,l*a+o*i,e*r)}function kf(n,e,t){const i=(90-n)*Dg,s=(e+180)*Dg;return t.set(-(Math.sin(i)*Math.cos(s)),Math.cos(i),Math.sin(i)*Math.sin(s)).normalize()}function Gf(n){const{radius:e,radius_km:t}=n.data;return e&&t?e/t:0}function vB(n,e,t,i,s,r){return n.mesh.updateWorldMatrix(!0,!1),kf(e,t,r).transformDirection(n.mesh.matrixWorld),n.mesh.getWorldPosition(s),s.addScaledVector(r,(n.data.radius||1)+i*Gf(n))}const fn=new x,us=new x,Ot=new x(0,1,0);let ue=null,gn=!1,Ui=null,gi=!1,io=0,ui=null;const MB=2;let ve,Qi=!1,Vo=!0,El=null;const SB=new x,Nl=new x,$r=new x,pa=new x;let xn=!1,ri=0,Ti=2.5;const Bi=new x,Lg=new ot,Ah=new x(0,0,-1),Pn=new x,Pg=new Ms,Ug=new x,Wa=new x,ph=new x,gh=new ot,Fg=new ot,Ci=new x,Rt=new x,CB=new x,Ng=new x,Pc=new x,IB=new x,wB=new x,Vr=new x,fo=new ot,Ao=new ot,Uc=new ot;let Do={left:0,right:0,top:0,bottom:0};function bB({left:n=0,right:e=0,top:t=0,bottom:i=0}={}){Do={left:n,right:e,top:t,bottom:i}}let Ql=!1;function Fx(){return{left:Do.left,right:window.innerWidth-Do.right}}function TB(){const n=Fx();return n.right-n.left}function Nx(){return{top:Do.top,bottom:window.innerHeight-Do.bottom}}function Ol(){const n=H.fov*(Math.PI/180),e=Nx(),t=2*Math.atan(Math.tan(n/2)*(e.bottom-e.top)/window.innerHeight),i=2*Math.atan(Math.tan(n/2)*TB()/window.innerHeight);return Math.min(t,i)}let qa=0,Xa=0;function BB(n){let e=0,t=0;if(Ql){const s=Fx(),r=Nx();e=window.innerWidth/2-(s.left+s.right)/2,t=window.innerHeight/2-(r.top+r.bottom)/2}else if(gi&&ui){const{left:s,right:r,top:a,bottom:o}=ui.insets;e=(r-s)/2,t=(o-a)/2}const i=1-Math.exp(-n*6);if(qa+=(e-qa)*i,Xa+=(t-Xa)*i,e===0&&t===0&&Math.abs(qa)<.5&&Math.abs(Xa)<.5){qa=0,Xa=0,H.view&&H.view.enabled&&H.clearViewOffset();return}H.setViewOffset(window.innerWidth,window.innerHeight,qa,Xa,window.innerWidth,window.innerHeight)}const hs=new x,Qg=new x;function Mn(n){return n?n.detailRoot&&n.detailRadius?(n.detailRoot.getWorldScale(hs),n.detailRadius*Math.max(hs.x,hs.y,hs.z)):n.data.type==="mission"?(n.data.model_size??rr)*.6:n.data.radius||1:1}function Tt(n,e){if(n.getWorldPosition(e),n.userData&&n.userData.orbit_type==="landed"){const t=Z.get(n.userData.name),i=t&&t.detailRoot?t.detailCenterY:(t?.data.built?.modelSize??rr)*.3;n.getWorldScale(hs),Qg.set(0,1,0).transformDirection(n.matrixWorld),e.addScaledVector(Qg,i*Math.max(hs.x,hs.y,hs.z))}return e}let Qt=null;const RB=1.1,Fc=new x,DB=new x,lr=new x,Nc=[];let gs=null;function zf(){return Qt?.look?.ra!==void 0||Qt?.look?.sun!==void 0}function Wo(n,e){if(!Qt||Qt.body.mesh!==n)return null;if(Qt.look?.sun!==void 0){const{sun:s,elevation:r=0,radii:a}=Qt.look;n.getWorldPosition(Fc),Z.get("Sun")?.mesh.getWorldPosition(e),e.sub(Fc).setY(0).normalize().applyAxisAngle(Ot,s*Math.PI/180);const o=r*Math.PI/180;return e.multiplyScalar(Math.cos(o)).setY(Math.sin(o)),a?(Qt.body.data.radius||1)*a:Gd(Qt.body)}if(zf()){const{ra:s,dec:r=0,radii:a}=Qt.look;return e.copy(ys({ra:s,dec:r})).negate(),a?(Qt.body.data.radius||1)*a:Qx(n)}if(Qt.look){const{lat:s=0,lon:r=0,radii:a}=Qt.look;return n.updateWorldMatrix(!0,!1),kf(s,r,e).transformDirection(n.matrixWorld),a?(Qt.body.data.radius||1)*a:Gd(Qt.body)}if(n.getWorldPosition(Fc),Nc.length=0,e.set(0,0,0),Qt.names.forEach(s=>{const r=Z.get(s);if(!r||!mn(r.mesh))return;const a=Tt(r.mesh,new x).sub(Fc);Nc.push(a),e.add(DB.copy(a).normalize())}),!Nc.length||e.lengthSq()<1e-12)return null;e.normalize();const t=Math.tan(Gw*Ol()/2);let i=Hf(Qt.body)*RB;return Nc.forEach(s=>{const r=s.dot(e),a=Math.sqrt(Math.max(0,s.lengthSq()-r*r));i=Math.max(i,r+a/t)}),i}function zi(n){if(!n||!n.userData)return 20;if(gs?.radii&&gs.mesh===n)return(n.userData.radius||1)*gs.radii;const e=Wo(n,lr);return e!==null?e:Qx(n)}function Qx(n){if(n.userData.type==="mission"){const t=Z.get(n.userData.name);let i=Mn(t);return t&&t.frameRadius&&t.detailRadius&&(i*=t.frameRadius/t.detailRadius),i/Math.sin(Ow*Ol()/2)}const e=Z.get(n.userData.name);return e?Gd(e):20}function Gd(n){const e=n.data.type;return e==="reference_point"||e==="star"?Ox(n)/Math.sin(zw*Ol()/2):Hf(n)/Math.sin(kw*Ol()/2)}function Hf(n){const e=n.data;let t=n.detailRoot?Mn(n):e.radius||1;return e.ring&&(t=Math.max(t,(e.radius||1)*(e.ring.outer_radius||2.5))),t}function Ox(n){const e=n.data;if(e.type==="star")return(e.radius||1)*Hw;let t=Hf(n);const i=t;return Z.forEach(s=>{const r=s.data;if(r.parent!==e.name)return;const a=Mn(s);let o=0;r.orbit_type==="landed"?o=i+a*2:r.orbit_type==="suborbital"?o=i+(r.suborbital?.apogee||1.5)+a:r.orbit&&(o=wf(r.orbit)+a),t=Math.max(t,o)}),t}function Vf(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}const LB=1.35,PB=.3,UB=.6,FB=.3,NB=.92,QB=.6,OB=40*Math.PI/180,kB=1.3,GB=.45,zB=.4,HB=.15,kx=.45,VB=60*Math.PI/180,WB=4,Xs=n=>n?.userData.orbit_type==="landed",zd=(n,e=null)=>(Xs(n)?LB:1)*(Xs(e)?kB:1);let nr=0,kl=null,ss=null;function Gx(n){if(!kl)return Vf(n);const{up:e,down:t}=kl,i=a=>a*a*a-a*a*a*a/2,s=1/(1-(e+t)/2);let r;return n<e?r=e*i(n/e):n<=1-t?r=e/2+(n-e):r=e/2+(1-t-e)+t*(.5-i((1-n)/t)),Math.min(r*s,1)}function qo(n,e,t){const i=at.clamp((n-e)/(t-e),0,1);return i*i*(3-2*i)}const qB=1.5,XB=.2,YB=10*Math.PI/180,KB=.13;function zx(n,e,t,i){const s=Z.get(n.userData.parent);Bi.set(0,1,0),s&&Bi.subVectors(e,s.mesh.getWorldPosition(CB)).normalize();const r=Math.sin(i*XB)*qB,a=Vw+Math.sin(i*KB)*YB;return Ng.setFromSphericalCoords(t,a,r),Lg.setFromUnitVectors(Ot,Bi),Ng.applyQuaternion(Lg)}let Wf=0;function JB(n,e){const t=H.position.x-n.x,i=H.position.z-n.z;t*t+i*i<1e-12||(Wf=Math.atan2(t,i)-e*Ai)}function lu(n,e,t){if(Tt(n,Rt),isNaN(Rt.x)){t.copy(n.position);return}const i=zi(n),s=Math.sin(e*.2)*(i*.02),r=i+s;if(n.userData.orbit_type==="landed")t.copy(Rt).add(zx(n,Rt,r,e));else if(Wo(n,lr)!==null)t.copy(Rt).addScaledVector(lr,r);else{const a=ut.live&&gn&&n===ue?ut.az:e*Ai+Wf,o=Math.sin(e*Vx)*Hx;if(gs?.elevation!==void 0&&gs.mesh===n){const l=at.clamp(gs.elevation*Math.PI/180+o*.25,-1.5,1.5);t.set(Math.sin(a)*Math.cos(l)*r,Math.sin(l)*r,Math.cos(a)*Math.cos(l)*r)}else t.set(Math.sin(a)*r,o*r,Math.cos(a)*r);Wx(n,Rt,r),qx(t),t.add(Rt)}Yf(t,n)}const ZB=1.15,jB=12*Math.PI/180,$B=6,Og=2*Ai/$B,Hx=.2,Vx=.05,qf=[];let po=0;const Qc=new x,Fr=new x,e3=new ot,mh={centre:0,width:0};function Wx(n,e,t){po=0;const i=n.userData.parent;Z.forEach(s=>{if(s.mesh===n)return;let r;if(uu.includes(s.data.type))s.group.getWorldPosition(Qc),r=s.data.radius||1;else if(s.data.name===i&&Yx.includes(s.data.type))Tt(s.mesh,Qc),r=Mn(s);else return;const a=Qc.sub(e).length();if(a<=r)return;const o=Math.min(r*ZB,(r+a)/2);if(t<=a-o)return;const l=Math.sqrt(a*a-o*o),c=t>=l?Math.asin(o/a):Math.acos(Math.min(1,(t*t+a*a-o*o)/(2*t*a))),u=qf[po]??={dir:new x,half:0};u.dir.copy(Qc).divideScalar(a),u.half=Math.min(c+jB,Math.PI*.9),po++})}function qx(n){for(let e=0;e<2;e++)for(let t=0;t<po;t++){const{dir:i,half:s}=qf[t],r=n.angleTo(i);r>=s||(Fr.crossVectors(i,n),Fr.lengthSq()<1e-12&&Fr.crossVectors(i,Ot),Fr.lengthSq()<1e-12&&Fr.set(1,0,0),n.applyQuaternion(e3.setFromAxisAngle(Fr.normalize(),s-r)))}}function t3(n,e,t){const{dir:i,half:s}=n,r=(Math.cos(s)-e*i.y)/Math.max(t*Math.hypot(i.x,i.z),1e-9);return r>=1?null:(mh.centre=Math.atan2(i.x,i.z),mh.width=r<=-1?Math.PI:Math.acos(r),mh)}const Gl=Math.PI*2,n3=n=>n-Gl*Math.floor((n+Math.PI)/Gl),kg=n=>n-Gl*Math.floor(n/Gl),ut={live:!1,az:0,vel:0,dir:1};function i3(n,e,t,i,s){const r=Math.sin(e*Vx)*Hx,a=1/Math.sqrt(1+r*r),o=r*a;ut.live||(ut.live=!0,ut.az=Math.atan2(H.position.x-t.x,H.position.z-t.z),ut.vel=Ai,ut.dir=1),Wx(ue,t,i);const l=ut.vel===0?ut.dir:Math.sign(ut.vel);let c=1/0;for(let d=0;d<po;d++){const f=t3(qf[d],o,a);if(!f||f.width>=Math.PI)continue;const p=n3(ut.az-f.centre);if(Math.abs(p)<f.width){const m=p===0?-l:Math.sign(p);ut.az=f.centre+m*f.width,ut.dir=m,Math.sign(ut.vel)!==m&&(ut.vel=0);continue}c=Math.min(c,l>0?kg(f.centre-f.width-ut.az):kg(ut.az-f.centre-f.width))}const u=Math.abs(ut.vel);ut.dir===l&&c<u*u/(2*Og)+u*n&&(ut.dir=-l);const h=Og*n;return ut.vel+=Math.max(-h,Math.min(h,ut.dir*Ai-ut.vel)),ut.az+=ut.vel*n,s.set(Math.sin(ut.az)*i,r*i,Math.cos(ut.az)*i),qx(s),s.add(t)}const uu=["star","planet","moon"],ur=1.08,yl=1.35,Gg=160,s3=1.2;let ea=null,Xf=0;const Xx=new x,xh=new x,Ya=new x,Yx=["mission","asteroid","comet"];function r3(){const n=[];return Z.forEach(e=>{uu.includes(e.data.type)?n.push({center:e.group.getWorldPosition(new x),radius:e.data.radius||1}):Yx.includes(e.data.type)&&mn(e.group)&&n.push({center:Tt(e.mesh,new x),radius:Mn(e)})}),n}const zg=new x;function Yf(n,e){e&&Tt(e,zg),Z.forEach(t=>{if(!uu.includes(t.data.type)||t.mesh===e)return;t.group.getWorldPosition(Ya);const i=t.data.radius||1,s=e?Math.min(i*ur,zg.distanceTo(Ya)):i*ur,r=n.distanceTo(Ya);r<s&&r>1e-6&&n.sub(Ya).multiplyScalar(s/r).add(Ya)})}function a3(n,e){const t=new x;for(let i=1;i<Gg;i++){n.getPoint(i/Gg,t);for(const s of e)if(t.distanceTo(s.center)<s.radius*ur)return s}return null}function o3(n,e,t){const i=new x().subVectors(e,n),s=at.clamp(new x().subVectors(t,n).dot(i)/Math.max(i.lengthSq(),1e-12),0,1);return{distance:n.clone().addScaledVector(i,s).distanceTo(t),interior:s>0&&s<1}}function c3(n,e,t,i,s){const r=new x().subVectors(n,t.center).normalize(),a=new x().subVectors(e,t.center).normalize(),o=r.angleTo(a),l=new x().crossVectors(r,a);l.lengthSq()<1e-8&&(l.crossVectors(r,s),l.lengthSq()<1e-8&&l.crossVectors(r,new x(1,0,0))),l.normalize();const c=Math.max(2,Math.ceil(o/(Math.PI/4))),u=[];for(let h=1;h<c;h++)u.push(r.clone().applyAxisAngle(l,o*h/c).multiplyScalar(t.radius*i).add(t.center));return u}function l3(n,e,t,i){for(let s=1;s<n.length-1;s++)for(const r of e){const a=n[s].distanceTo(r.center);if(a<r.radius*t){const o=a>1e-6?n[s].clone().sub(r.center):i.clone();n[s].copy(o.normalize().multiplyScalar(r.radius*t).add(r.center))}}for(let s=0;s<4;s++){let r=!1;const a=[n[0]];for(let o=1;o<n.length;o++){const l=a[a.length-1],c=n[o],u=e.find(h=>{const{distance:d,interior:f}=o3(l,c,h.center);return f&&d<h.radius*s3});u&&(a.push(...c3(l,c,u,t,i)),r=!0),a.push(c)}if(n=a,!r)break}return n}const u3=4;function Hg(n,e){if(!Ut.logFlights&&Xs(n)&&mn(n)){const d=Tt(n,new x);return[e.clone().sub(d).multiplyScalar(WB).add(d)]}if(!Ut.logFlights||!n||n.userData.orbit_type!=="landed"||!mn(n))return[];const t=Z.get(n.userData.parent);if(!t)return[];const i=Tt(n,new x),s=i.clone().sub(t.group.getWorldPosition(new x)),r=new x().subVectors(e,i),a=r.length();if(!(a>0))return[];r.divideScalar(a),r.dot(s)<.1*s.length()&&r.copy(s).normalize();const o=s.dot(r),l=s.lengthSq()-((t.data.radius||1)*yl)**2,c=-o+Math.sqrt(Math.max(o*o-l,0));if(!(c>a*1.5))return[];const u=Math.ceil(Math.log(c/a)/Math.log(u3)),h=[];for(let d=1;d<=u;d++)h.push(i.clone().addScaledVector(r,a*(c/a)**(d/u)));return h}function h3(n,e,t=[],i=[]){const s=r3().map(f=>{const p=Math.min(n.distanceTo(f.center),e.distanceTo(f.center));return p>f.radius*ur?f:{center:f.center,radius:p/(ur*1.02)}}),r=t.at(-1)??n,a=i.at(-1)??e,o=new x().subVectors(a,r),l=o.length(),c=o.clone().normalize(),u=new x(0,1,0);Math.abs(c.dot(Ot))>.9?u.set(0,0,1):u.crossVectors(c,Ot).cross(c).normalize();const h=r.clone().lerp(a,.5).addScaledVector(u,Math.min(l*.15,Ut.flightArchMax));let d;for(const f of[yl,yl*1.25,yl*1.6]){const p=[...t.length?[n,...t.slice(0,-1)]:[],...l3([r.clone(),h.clone(),a.clone()],s,f,u),...i.length?[...i.slice(0,-1).reverse(),e]:[]].map(m=>m.clone());if(d=new Av(p,!1,"centripetal"),!a3(d,s))break}return d}let Kx=q0;function d3(n=q0){Kx=n}const Vg=10,f3=60;function Jx(n,e,t,i=null){const s=Ca.matches?0:Kx,r=Ut.logFlights?((i??A3(n,e,t))-Vg)/(f3-Vg):n/Ut.flightReach;return Math.max((1.5+at.clamp(r,0,1)*2)*s,Ww)}function A3(n,e,t){return e=Math.max(e,1e-9),t=Math.max(t,1e-9),Math.log((n/2+e)/e)+Math.log((n/2+t)/t)}const Wg=48,qg=64,p3=4,_h=new x,Eh=new x;function Xg(n,e,t){return _h.subVectors(n,t),Eh.subVectors(e,t),Math.atan2(_h.clone().cross(Eh).length(),_h.dot(Eh))}const g3=2.5;function m3(n,e,t,i,s,r=0){const a=n.points.length-1,o=new Set([0,1]);for(let A=0;A<a;A++){for(let y=0;y<=Wg;y++){const _=.5*10**(-12*(1-y/Wg));o.add((A+_)/a).add((A+1-_)/a)}for(let y=1;y<qg;y++)o.add((A+y/qg)/a)}const l=[...o].sort((A,y)=>A-y),c=l.map(A=>n.getPoint(A)),u=c[0],h=c[c.length-1],d=[];Z.forEach(A=>{if(!uu.includes(A.data.type))return;const y=A.group.getWorldPosition(new x),_=A.data.radius||1;u.distanceTo(y)<_*ur||h.distanceTo(y)<_*ur||d.push({center:y,radius:_})}),e=Math.max(e,1e-9),t=Math.max(t,1e-9);const f=new Float64Array(l.length),p=new Float64Array(l.length),m=new Float64Array(l.length),g=new Float64Array(l.length);c.forEach((A,y)=>{let _=Math.min(e+A.distanceTo(u),t+A.distanceTo(h));for(const S of d)_=Math.min(_,A.distanceTo(S.center)-S.radius);f[y]=Math.max(_,1e-9)});for(let A=1;A<l.length;A++){const y=c[A].distanceTo(c[A-1]),_=f[A-1],S=f[A];let w=Math.abs(S-_)>1e-9*_?y*Math.log(S/_)/(S-_):y/_;r>0&&(w*=1+(g3-1)*qo(1-c[A].distanceTo(h)/r,0,1));const C=p3*Math.max(Xg(c[A-1],c[A],i),Xg(c[A-1],c[A],s));m[A]=m[A-1]+y,p[A]=p[A-1]+w+C,g[A]=w>0?w/(w+C):1}return{t:l,clearance:f,effort:p,along:m,travelShare:g,length:m[l.length-1],total:p[l.length-1]}}let pn=null;const Zx=.3;function jx(n,e,t){const{effort:i}=n;let s=0,r=i.length-1;for(;r-s>1;){const d=s+r>>1;i[d]<=e?s=d:r=d}const a=n.along[r]-n.along[s],o=n.clearance[s],l=a>0?(n.clearance[r]-o)/a:0,c=Math.max(e-i[s],0)*n.travelShare[r],u=Math.abs(l)>1e-9?o*Math.expm1(c*l)/l:c*o,h=a>0?at.clamp(u/a,0,1):0;return ea.getPoint(n.t[s]+(n.t[r]-n.t[s])*h,t),(n.along[s]+a*h)/n.length}let ta=null;const Qs=new x,yh=new x;function $x(n,e,t,i,s=H.up){Qs.set(1,0,0),Math.abs(s.x)>.9&&Qs.set(0,0,1),Qs.addScaledVector(s,-Qs.dot(s)).normalize(),yh.crossVectors(s,Qs);const r=p=>Math.atan2(p.dot(yh),p.dot(Qs)),a=p=>Math.asin(at.clamp(p.dot(s),-1,1)),o=r(n);let l=at.euclideanModulo(r(e)-o+Math.PI,2*Math.PI)-Math.PI;ta!==null&&(l+=2*Math.PI*Math.round((ta-l)/(2*Math.PI))),ta=l;const c=o+l*t,u=a(n),h=a(e),d=u+(h-u)*t;i.copy(Qs).multiplyScalar(Math.cos(c)).addScaledVector(yh,Math.sin(c)).multiplyScalar(Math.cos(d)).addScaledVector(s,Math.sin(d));const f=qo(Math.max(Math.abs(u),Math.abs(h)),x3,_3);if(f>0){const p=n.angleTo(e);Nr.crossVectors(n,e),Nr.lengthSq()<1e-12&&Nr.crossVectors(n,s),Nr.lengthSq()<1e-12&&Nr.set(1,0,0),Yg.copy(n).applyAxisAngle(Nr.normalize(),p*t),i.lerp(Yg,f).normalize()}return i}const x3=55*Math.PI/180,_3=75*Math.PI/180,Nr=new x,Yg=new x;let en=null;const Hd=new x,Qr=new x,vh=new x;function E3(){return!en||!mn(en.mesh)?Hd.set(0,0,0):Tt(en.mesh,Hd).sub(en.start)}const y3=new x,v3=new x;function e_(){if(!xn||!en||!mn(en.mesh)||en.mesh===ue)return ue;if(!ue)return en.mesh;const n=H.position.distanceTo(Tt(en.mesh,y3))-Mn(Z.get(en.mesh.userData.name)),e=H.position.distanceTo(Tt(ue,v3))-Mn(Z.get(ue.userData.name));return n<e?en.mesh:ue}function t_(n,{arrivalTime:e=null,destView:t=null,from:i=null,to:s=null}={}){SB.copy(H.position),Nl.copy(ve.target),en=i&&mn(i)?{mesh:i,start:Tt(i,new x)}:null,ea=h3(H.position,n,Hg(i,H.position),Hg(s,n)),Xx.copy(n);const r=H.position.distanceTo(ve.target),a=t??n.distanceTo(pa),o=s?Tt(s,new x):pa;pn=Ut.logFlights||Xs(i)?m3(ea,r,a,Nl,o,zd(s)>1?Z.get(s.userData.parent)?.data.radius??0:0):null;const l=pn?pn.length:ea.getLength();ta=null,xn=!0,ri=0,Ti=Jx(l,r,a,pn?.total)*zd(s,en?.mesh);const c=Xs(en?.mesh);if(kl=null,c||Xs(s)){let p=c?GB:PB,m=Xs(s)?UB:zB;const g=Math.min(1,.95/(p+m));kl={up:p*g,down:m*g}}nr=c?HB:0,Lo.copy(H.up);const u=en?.mesh.userData.orbit_type==="landed"?zl(i,new x):Lo,h=s?zl(s,new x):Ot,d=u.angleTo(Ot)>1e-4,f=h.angleTo(Ot)>1e-4;if(ss=d||f?{from:d?0:FB,to:f?NB:QB}:null,ss&&!Ca.matches){const p=u.angleTo(h);Ti=Math.max(Ti,1.5*p/((ss.to-ss.from)*OB)),Ti=Math.max(Ti,S3(o))}Xf=pn||e===null||ss?Kn+Ti:e,ve.enabled=!1}const Mh=240,M3=18,Oc=new x,Sh=new x,Ch=new x,Ih=new x,Kg=new x;function S3(n){let e=0;ta=null;for(let t=0;t<=Mh;t++){const i=t/Mh,s=Gx(i);pn?jx(pn,s*pn.total,Oc):ea.getPointAt(s,Oc);const r=nr>0?qo(i,nr,nr+kx):Vf(Math.min(i/(pn?Zx:.2),1));Sh.subVectors(Nl,Oc),Ch.subVectors(n,Oc),Sh.lengthSq()>0&&Ch.lengthSq()>0&&($x(Sh.normalize(),Ch.normalize(),r,Ih,Lo),t>0&&(e=Math.max(e,Ih.angleTo(Kg)*Mh)),Kg.copy(Ih))}return ta=null,Math.min(e/VB,M3)}function Kf(){if(!xn)return;const n=1-ri;n<=0||(Ti=Math.min(Ti,qw/n))}function wa(){Qi&&(ut.live=!1),Qi=!1,ve.autoRotate=!1,clearTimeout(El)}let Vd=null;function Jf(n){const e=Vd;Vd=null,e?.(n)}function C3(n,{region:e=null,look:t=null,frame:i=null}={}){const s=Z.get(n);if(!s)return Promise.resolve(!1);Jf(!1),gs=i&&!t?{mesh:s.mesh,radii:i.radii,elevation:i.elevation}:null,Qt=t?{body:s,names:[],look:{...t}}:e?.length?{body:s,names:[...e]}:null;const r=new Promise(a=>{Vd=a});return Zf(s.mesh,s.data),r}function Zf(n,e){if(Ui=null,Xo||Zn){hr=()=>Zf(n,e);return}if(e&&e.orbit_type==="landed"&&!mn(n)){Ui={mesh:n,data:e};const a=Z.get(e.parent);a&&jr(a.data,!0),e.isModelLoaded||jr(e,!0),ru(),Ui&&(Ql=!0,nn("select",{data:e,waiting:!0}));return}wa(),gi=!1,ui=null;const t=ue;if(ue=n,gn=!1,e){e.isModelLoaded||jr(e,!0),Lf(e);const a=ar(e.name);e1(a)}const i=new x,s=Kn+Jx(H.position.distanceTo(n.getWorldPosition(new x)),H.position.distanceTo(ve.target),zi(n))*zd(n,t),r=new x;Tt(n,r),JB(r,s),lu(n,s,i),t_(i,{arrivalTime:s,destView:i.distanceTo(r),from:t,to:n}),Wf+=(s-Xf)*Ai,Ql=!0,nn("select",{data:e,waiting:!1,region:Qt?.names.length&&Qt.body.mesh===n?[...Qt.names]:null})}function I3(n){Vo=n,ve.enabled=n&&!xn,n||wa()}OT(n=>{if(!Ui||Ui.data!==n)return;const{mesh:e}=Ui;Ui=null,Zf(e,n)});function n_(){Ui=null,Qt=null,gs=null,hr=null,wa(),ue=null,gn=!1,xn=!1,ve.enabled=Vo&&!Zn,Ql=!1,Jf(!1),nn("deselect")}const kc=12,Gc=3,zc=1e3,w3=3,Un=new x,Hc=new x,Or=new ot,Jg=new ot,b3=new ot,Vc=new x,Lo=new x(0,1,0),Zg=new x;function zl(n,e){return e.copy(Ot),!n||!mn(n)||(n.userData.orbit_type==="landed"||n===ue&&!zf()&&Wo(n,lr)!==null)&&(n.updateWorldMatrix(!0,!1),e.set(0,1,0).transformDirection(n.matrixWorld)),e}function T3(n){if(xn&&ss){en?.mesh.userData.orbit_type==="landed"?zl(en.mesh,Vc):Vc.copy(Lo),zl(ue,Zg);const e=qo(ri,ss.from,ss.to);Or.setFromUnitVectors(Vc,Zg),H.up.copy(Vc).applyQuaternion(b3.identity().slerp(Or,e)).normalize(),ve._quat.setFromUnitVectors(H.up,Ot),ve._quatInverse.copy(ve._quat).invert();return}if(Un.copy(Ot),ue&&ue.userData.orbit_type==="landed"&&mn(ue)){ue.updateWorldMatrix(!0,!1),Un.set(0,1,0).transformDirection(ue.matrixWorld),Tt(ue,Hc);const e=H.position.distanceTo(Hc)/zi(ue);let t=Ut.logFlights?Math.log(zc/e)/Math.log(zc/Gc):(kc-e)/(kc-Gc);t=Math.min(Math.max(t,0),1),t=t*t*(3-2*t),Or.setFromUnitVectors(Ot,Un),Un.copy(Ot).applyQuaternion(Or.slerp(Jg,1-t)).normalize()}else if(ue&&!zf()&&Wo(ue,lr)!==null){ue.updateWorldMatrix(!0,!1),Un.set(0,1,0).transformDirection(ue.matrixWorld),ue.getWorldPosition(Hc);const e=H.position.distanceTo(Hc)/zi(ue);let t=Ut.logFlights?Math.log(zc/e)/Math.log(zc/Gc):(kc-e)/(kc-Gc);t=Math.min(Math.max(t,0),1),t=t*t*(3-2*t),Or.setFromUnitVectors(Ot,Un),Un.copy(Ot).applyQuaternion(Or.slerp(Jg,1-t)).normalize()}if(H.up.dot(Un)>.99999){if(H.up.equals(Un))return;H.up.copy(Un)}else H.up.lerp(Un,1-Math.exp(-n*w3)),H.up.lengthSq()<1e-6&&H.up.copy(Un),H.up.normalize();ve._quat.setFromUnitVectors(H.up,Ot),ve._quatInverse.copy(ve._quat).invert()}function B3(n,e){return Xo&&L3(),R3(n,e)?(T3(n),H.lookAt(ve.target),!0):!1}function R3(n,e){if(Zn)return Q3(n,e),!0;if(xn){ri+=n/Ti,ri>=1&&(ri=1,xn=!1,ve.enabled=Vo,ue&&(gn=!0,ut.live=!1,Tt(ue,Vr),ue.getWorldQuaternion(fo),nn("arrive",{data:ue.userData}),Jf(!0)));const t=Gx(ri),i=IB,s=wB;ue?(lu(ue,Xf,i),Tt(ue,s)):(i.copy($r),s.copy(pa));let r=t;pn?r=jx(pn,t*pn.total,H.position):ea.getPointAt(t,H.position),xh.subVectors(i,Xx),pn?(H.position.addScaledVector(xh,r),H.position.addScaledVector(E3(),1-r)):H.position.addScaledVector(xh,t*t*(3-2*t));let a;nr>0?a=qo(ri,nr,nr+kx):a=Vf(Math.min(ri/(pn?Zx:.2),1)),Qr.copy(Nl).sub(H.position),pn&&Qr.add(Hd),vh.subVectors(s,H.position);const o=Qr.length(),l=vh.length();a<1&&o>0&&l>0?($x(Qr.divideScalar(o),vh.divideScalar(l),a,Qr,Lo),ve.target.copy(H.position).addScaledVector(Qr,o**(1-a)*l**a)):ve.target.copy(s),ve.update()}else if(ue&&gn){if(Tt(ue,Rt),isNaN(Rt.x))return gn=!1,!1;if(ue.getWorldQuaternion(Ao),ue.userData.orbit_type==="landed"?Uc.copy(Ao).multiply(fo.invert()):Uc.identity(),H.position.sub(Vr).applyQuaternion(Uc).add(Rt),ve.target.sub(Vr).applyQuaternion(Uc).add(Rt),Vr.copy(Rt),fo.copy(Ao),Qi)ve.update(n);else{const t=zi(ue),i=Math.sin(e*.2)*(t*.02),s=t+i;ue.userData.orbit_type==="landed"?Ci.copy(Rt).add(zx(ue,Rt,s,e)):Wo(ue,lr)!==null?Ci.copy(Rt).addScaledVector(lr,s):i3(cr===null?n:0,e,Rt,s,Ci),Yf(Ci,ue),Pn.copy(H.position),fn.subVectors(Ci,Pn);const r=fn.length();if(r>5){us.copy(fn).normalize(),Pg.set(Pn,us);let f=!1,p=1/0;Z.forEach(m=>{if(m.mesh!==ue&&!(!m.group.visible&&m.data.type==="mission")&&["star","planet","moon"].includes(m.data.type)){const g=(m.data.radius||1)*1.5,A=m.group.position;Pg.closestPointToPoint(A,Pc);const y=Pn.distanceTo(Pc);y<r&&y>.1&&Pc.distanceTo(A)<g&&y<p&&(p=y,Bi.subVectors(Pc,A).normalize(),Bi.lengthSq()<.001&&Bi.set(0,1,0),Ug.copy(A).addScaledVector(Bi,g*1.2),f=!0)}}),f&&Ci.copy(Ug)}const a=Pn.distanceTo(Ci);Wa.copy(Rt);let o=Ic;if(a>5){const f=zi(ue),p=Math.max(f*15,150),m=Math.max(f*4,40);if(a>m)if(fn.subVectors(Ci,Pn).normalize(),ph.copy(Pn).addScaledVector(fn,a),a>p)Wa.copy(ph),o=.1;else{const g=(a-m)/(p-m);Wa.lerp(ph,g),o=Ic+(.1-Ic)*g}}fn.subVectors(ve.target,Pn).normalize(),us.subVectors(Wa,Pn).normalize(),gh.setFromUnitVectors(Ah,fn),Fg.setFromUnitVectors(Ah,us);const l=1-Math.pow(1-o,n*60);gh.slerp(Fg,l),Bi.copy(Ah).applyQuaternion(gh).normalize();const c=ve.target.distanceTo(Pn),u=Wa.distanceTo(Pn),h=c+(u-c)*l;ve.target.copy(Pn).addScaledVector(Bi,h);const d=1-Math.pow(1-Ic,n*60);H.position.lerp(Ci,d),ve.update()}}else if(gi)if(Qi)ve.update(n);else{io=Math.min(1,io+n/MB);const t=cr===null?Ai*n*io*io:0;H.position.applyAxisAngle(Ot,t),ve.target.applyAxisAngle(Ot,t),ve.update()}return!0}const Ka=new x;function jf(n,e,t=H.position){const i=[],s=ui?new Set(ui.names):null;Z.forEach(p=>{const m=p.data.orbit;if(!(!(s?s.has(p.data.name):p.data.type==="planet")||!m||!m.a||!m.rate))for(let A=0;A<64;A++){const y=pi(m,360/m.rate*(A/64));i.push(new x(y.x,y.y,y.z))}});const r=i.length;for(let p=1;p<8;p++)for(let m=0;m<r;m++)i.push(i[m].clone().applyAxisAngle(Ot,p*Math.PI/4));Ka.set(t.x,0,t.z),Ka.lengthSq()<1e-12&&Ka.set(0,0,1),Ka.normalize();const a=Ka.clone().multiplyScalar(Math.cos(Up));if(a.y=Math.sin(Up),e.set(0,0,0),!i.length)return n.copy(a).multiplyScalar(1200);let o=Pp,l=Pp;if(ui){const{left:p,right:m,top:g,bottom:A}=ui.insets;o=Fp*Math.max(.1,1-(p+m)/window.innerWidth),l=Fp*Math.max(.1,1-(g+A)/window.innerHeight)}const c=new Kt(H.fov,window.innerWidth/window.innerHeight,H.near,H.far),u=new x,h=p=>(c.position.copy(a).multiplyScalar(p),c.lookAt(e),c.updateMatrixWorld(),i.every(m=>(u.copy(m).project(c),u.z<1&&Math.abs(u.x)<=o&&Math.abs(u.y)<=l)));let d=1,f=ve.maxDistance;for(let p=0;p<40;p++){const m=(d+f)/2;h(m)?f=m:d=m}return n.copy(a).multiplyScalar(f)}function jg(){if(!gi||!ui)return null;let n=0;return ui.names.forEach(e=>{const t=Z.get(e)?.data.orbit;t&&(n=Math.max(n,wf(t)))}),n||null}function i_({animate:n=!0,frame:e=null}={}){if(Xo||Zn){hr=()=>i_({animate:n,frame:e});return}const t=ue;n_(),wa(),ue=null,gn=!1,gi=!0,io=0,ui=e&&e.names?.length?{names:[...e.names],insets:{left:0,right:0,top:0,bottom:0,...e.insets}}:null,jf($r,pa),n?t_($r,{from:t}):(H.position.copy($r),ve.target.copy(pa),ve.update())}let Xo=!1,hr=null;function D3(){Xo=!0}function L3(){Xo=!1;const n=hr;hr=null,H.near=Ut.cameraNear??H.near,H.far=Ut.cameraFar,H.updateProjectionMatrix(),ve.maxDistance=Ut.maxDistance,wa(),xn?(gi&&jf($r,pa,$r.clone()),ri=1):k3(Kn),n?.()}const P3=.15,U3=.5;let Zn=null;function F3(n){const e=gn&&ue&&!xn?ue:null,t={subject:e,p:0,ease:Qi?U3:P3,reach:n,reach0:n(),offset:new x,cam:H.position.clone(),target:ve.target.clone()};e&&(Tt(e,Rt),t.offset.subVectors(H.position,Rt).divideScalar(zi(e)),e.userData.orbit_type==="landed"&&t.offset.applyQuaternion(e.getWorldQuaternion(Ao).invert())),wa(),ve.enabled=!1,H.far=Ut.cameraFar,H.updateProjectionMatrix(),ve.maxDistance=Ut.maxDistance,Zn=t}function N3(n){Zn&&(Zn.p=n)}const $g=new x;function Q3(n,e){const t=Zn;if(!t.subject){gi&&cr===null&&(t.cam.applyAxisAngle(Ot,Ai*n),t.target.applyAxisAngle(Ot,Ai*n));const o=t.reach()/t.reach0;H.position.copy(t.cam).multiplyScalar(o),ve.target.copy(t.target).multiplyScalar(o),ve.update();return}const i=t.subject;if(ut.live&&cr===null&&(ut.az+=ut.vel*n),Tt(i,Rt),isNaN(Rt.x))return;fn.copy(t.offset).multiplyScalar(zi(i)),i.userData.orbit_type==="landed"&&fn.applyQuaternion(i.getWorldQuaternion(Ao)),lu(i,e,$g),us.subVectors($g,Rt);let s=Math.min(t.p/t.ease,1);s=s*s*(3-2*s);const r=fn.length(),a=us.length();r>0&&a>0&&(fn.divideScalar(r).lerp(us.divideScalar(a),s),fn.lengthSq()<1e-12&&fn.copy(us),fn.setLength(r**(1-s)*a**s)),H.position.copy(Rt).add(fn),Yf(H.position,i),ve.target.copy(Rt),ve.update()}function O3(){const n=Zn;if(!n)return;Zn=null,H.near=Ut.cameraNear??H.near,H.far=Ut.cameraFar,H.updateProjectionMatrix(),ve.maxDistance=Ut.maxDistance,ve.enabled=Vo,n.subject&&n.subject===ue&&(gn=!0,Tt(ue,Vr),ue.getWorldQuaternion(fo));const e=hr;hr=null,e?.()}function k3(n){xn||Qi||(ut.live=!1,gn&&ue?(lu(ue,n,H.position),Tt(ue,ve.target),Vr.copy(ve.target),ue.getWorldQuaternion(fo)):gi&&jf(H.position,ve.target),ve.update())}const em=6*Math.PI/180,Wc=1.15,tm=.05,$i=new x,nm=new x;function G3(){kT(()=>Ui?.data.name??ue?.userData.name??null),ve=new lB(H,ke.domElement),ve.enableDamping=!0,ve.maxDistance=Ut.maxDistance,ve.addEventListener("start",()=>{(gn||gi)&&(Qi=!0,ve.autoRotate=!1,clearTimeout(El)),nn("steer")}),ve.addEventListener("end",()=>{!Qi||Ca.matches||(clearTimeout(El),El=setTimeout(()=>{Qi&&(gn||gi)&&(ve.autoRotate=!0)},Yw))}),ke.domElement.addEventListener("keydown",n=>{if(!Vo||Zn||n.altKey||n.ctrlKey||n.metaKey)return;const e={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,1],ArrowDown:[0,-1]}[n.key],t={"+":1/Wc,"=":1/Wc,"-":Wc,_:Wc}[n.key];if(!(!e&&!t)){if(n.preventDefault(),Kf(),ve.dispatchEvent({type:"start"}),$i.subVectors(H.position,ve.target),e){$i.applyAxisAngle(H.up,-e[0]*em),nm.crossVectors(H.up,$i).normalize();const i=$i.angleTo(H.up),s=Math.min(Math.max(i-e[1]*em,tm),Math.PI-tm);$i.applyAxisAngle(nm,s-i)}else{const i=Math.min(Math.max($i.length()*t,ve.minDistance),ve.maxDistance);$i.setLength(i)}H.position.copy(ve.target).add($i),ve.dispatchEvent({type:"end"})}}),ve.autoRotateSpeed=-Kw}const im=3,z3=.6,s_=[.04,.6],r_=[.42,.96],H3=Math.min(s_[0],1-r_[1]),V3=30;let lt=null;function $f(){return lt!==null}const a_=()=>[...Z.values()].map(n=>n.data);function W3(n){if(lt){if(n===lt.to)return;if(!lt.started){lt=null,nn("scale-mode",{mode:Li});return}[lt.from,lt.to]=[lt.to,lt.from],lt.p=1-lt.p,lt.duration=im,nn("scale-change",{from:lt.from,to:lt.to});return}n!==Li&&(lt={from:Li,to:n,planned:Li,p:0,duration:im,started:!1},nn("scale-change",{from:lt.from,to:n}))}function q3(){lt?.started&&(lt.duration=Math.min(lt.duration,z3/Math.max(1-lt.p,1e-6)))}function X3(n){if(lt){if(!lt.started){if(xn){Kf();return}Y3()}if(lt.p=Math.min(1,lt.p+n/lt.duration),lt.p>=1){K3();return}o_(lt.p)}}function Y3(){lt.started=!0;const n=ue&&gn?Z.get(ue.userData.name):null;lt.to==="true"&&n?.data.orbit_type==="landed"&&Rf(n),bT(),eB(Ro[lt.planned]),nx(Ro[lt.planned].toAu),o_(0);const e=jg()!==null;F3(()=>e&&jg()||Gi(V3))}function o_(n){const e=lt.to==="true"?n:1-n,t=([s,r])=>{const a=Math.min(Math.max((e-s)/(r-s),0),1);return a*a*a*(a*(a*6-15)+10)},i={orbit:t(s_),size:t(r_)};bx(n>H3?1/0:void 0),iu(a_(),lt.from,i),Nf(),BT(i.size),Tx(i.orbit),N3(n),nn("scale-progress",{progress:n})}function K3(){const{to:n}=lt;lt=null;const e=a_();if(bx(1/0),iu(e,n),Nf(),Tx(n==="true"?1:0),nx(null),iB(),RT(),n==="true"){UT();const t=ue&&gn?Z.get(ue.userData.name):null;t?.data.orbit_type==="landed"&&Rf(t)}new Set(e.filter(t=>t.orbit_type==="landed").map(t=>t.parent)).forEach(t=>{const i=Z.get(t);i&&Ho(i)}),nn("scale-progress",{progress:1}),nn("scale-mode",{mode:n}),O3()}let Ws="Sun";function J3(){if(Ws="Sun",ue&&ue.userData)Ws=ar(ue.userData.name);else{let n=1/0;Z.forEach(e=>{if(e.data.parent==="Sun"&&e.data.type!=="mission"){const t=H.position.distanceTo(e.group.position);t<n&&(n=t,Ws=e.data.name)}})}Z.forEach(n=>{const{group:e,data:t}=n,i=H.position.distanceTo(e.position);if(i===0)return;const s=ar(t.name),r=H.fov*(Math.PI/180),o=(t.type==="mission"?Mn(n):t.radius||1)/i*window.innerHeight/(2*Math.tan(r/2)),l=Jw;let c=s===Ws&&Ws!=="Sun";t.type==="mission"||t.type==="asteroid"||t.type==="comet"?(n.mesh===ue?e.visible=!0:e.visible=c||o>l,(c||o>3)&&!t.isModelLoaded&&jr(t,!1),t.isModelLoaded&&!t.hasHighDetail&&e.visible&&Ex(n)>Zw&&Lf(t)):e.visible=!0})}const Wd=new x(0,0,0),Z3=new x(0,1,0),j3=.1,$3=new Nv(16777215,j3);He.add($3);const Po=new Q0(16777215,2.5,0,0);Po.position.set(0,0,0);Po.castShadow=!1;He.add(Po);const qd=1024,vn=new O0(16777215,0);vn.castShadow=!0;vn.shadow.mapSize.set(qd,qd);vn.shadow.radius=1.5;He.add(vn);He.add(vn.target);const qc=.2,wh=2.5,c_=.5,eR=.6,tR=8,bh=Math.sin(at.degToRad(25)),vt=new N0(16773856,0,0,Math.PI/8,.7,0);vt.castShadow=!0;vt.shadow.mapSize.set(1024,1024);vt.shadow.intensity=c_;vt.shadow.autoUpdate=!1;let Xc=0;He.add(vt,vt.target);let es=null;const Ii=new x,Th=new x,Ja=new x,Yc=new x,ts=new x,Bh=new x,sm=new x,Rh=new x,Dh=new xe,Kc=new x,Za=new x;function rm(n,e,t=null){let i=0;return Z.forEach(s=>{if(s.ring){const{mesh:l,innerRadius:c,outerRadius:u,opacity:h}=s.ring;if(l.updateWorldMatrix(!0,!1),Dh.copy(l.matrixWorld).invert(),Kc.copy(n).applyMatrix4(Dh),Za.copy(e).transformDirection(Dh),Math.abs(Za.z)>1e-6){const d=-Kc.z/Za.z;if(d>1e-6){const f=Math.hypot(Kc.x+d*Za.x,Kc.y+d*Za.y),p=(u-c)*.02,m=at.smoothstep(f,c-p,c+p)*(1-at.smoothstep(f,u-p,u+p));i=Math.max(i,h*m)}}}if(s===t||!eu.has(s.data.type))return;s.group.getWorldPosition(sm),Rh.subVectors(sm,n);const r=Rh.dot(e);if(r<=0)return;const a=Mn(s),o=Rh.addScaledVector(e,-r).length();i=Math.max(i,1-at.smoothstep(o,a*.95,a*1.05))}),i}const nR=30,iR=new x;function sR(){return gn&&!xn?!0:xn?H.position.distanceTo(Tt(ue,iR))<zi(ue)*nR:!1}function rR(n){const t=ue&&ue.userData&&ue.userData.type==="mission"&&!lo(ue.userData)&&sR()?ue:null;t!==es&&vt.intensity<.02&&(es=t);const i=t&&t===es?Xc:0;if(vt.intensity+=(i-vt.intensity)*(1-Math.exp(-n*3/eR)),!es)return;Tt(es,vt.target.position);const s=Z.get(es.userData.parent);if(s&&s.group.getWorldPosition(Th),Yc.subVectors(Wd,vt.target.position).normalize(),es.userData.orbit_type==="landed"&&s){Ii.subVectors(vt.target.position,Th).normalize();let c=at.smoothstep(Ii.dot(Yc),-.1,0);c*=1-rm(vt.target.position,Yc,s),Xc=at.lerp(wh,qc,c)}else if(Xc=at.lerp(qc,wh,rm(vt.target.position,Yc)),Ii.subVectors(vt.target.position,Wd).normalize(),s&&eu.has(s.data.type)){Ja.subVectors(Th,vt.target.position).normalize();const c=Ii.dot(Ja);c<bh&&(Ii.addScaledVector(Ja,-c),Ii.lengthSq()<1e-8&&Ii.set(1,0,0).cross(Ja),Ii.normalize().multiplyScalar(Math.sqrt(1-bh**2)).addScaledVector(Ja,bh))}const r=Mn(Z.get(es.userData.name)),a=r*tR;vt.position.copy(vt.target.position).addScaledVector(Ii,a),vt.angle=Math.atan(r*2.5/a),vt.target.updateMatrixWorld();const o=at.clamp((Xc-qc)/(wh-qc),0,1);vt.shadow.intensity=c_*o;const l=vt.intensity>.01&&o>.01;if(vt.shadow.autoUpdate=l,l){const c=vt.shadow.camera;c.near=a*.5,c.far=a+r*4,c.updateProjectionMatrix(),vt.shadow.normalBias=r*5/vt.shadow.mapSize.x,vt.shadow.bias=-1e-4}}const am=2**.25,om=36,aR=1,cm=2.5,oR=3;let Jc=0;const cR=new xe,Lh=new x,Ph=new x,lR=new x,uR=new x,Zc=new x,hR=new x;let Xd=null,Uh=0;const dR=2**24;function l_(n){let e=n;return e&&e.data.type==="mission"&&(e=Z.get(e.data.parent)??null),e&&eu.has(e.data.type)?e:null}const Yd=new x;function fR(n){const e=l_(n)??Xd;return e.group.getWorldPosition(Yd),{centre:Yd,radius:Mn(e)}}const AR=1e3;function pR(n){const e=Ws!=="Sun"?Z.get(Ws):null,t=e&&e.data.radius||1,i=e_(),s=i&&i.userData?Z.get(i.userData.name):null,r=l_(s),a=e&&(H.position.distanceTo(e.group.position)<Math.max(t*om,Ut.shadowReachMin)||r&&H.position.distanceTo(r.group.getWorldPosition(Yd))<Mn(r)*om);e!==Xd&&(Jc=0,Xd=e,Uh=e?Ox(e):0);const o=n/aR;Jc=at.clamp(Jc+(a?o:-o),0,1);const l=at.smoothstep(Jc,0,1);if(!e||l<=0){Po.intensity=cm,vn.intensity=0,vn.shadow.autoUpdate=!1;return}Po.intensity=cm*(1-l),vn.intensity=oR*l,vn.shadow.autoUpdate=!0;const c=xn&&i?Tt(i,hR):ve.target,h=H.position.distanceTo(c)*Math.tan(at.degToRad(H.fov)/2);let d=Math.hypot(h,h*H.aspect)*1.05;s&&(d=Math.max(d,Mn(s)*1.5)),d=Math.max(Ut.shadowHalfMin,Math.min(d,Uh*1.2)),d=am**Math.ceil(Math.log(d)/Math.log(am));const f=2*d/qd;Bh.subVectors(Wd,c).normalize(),cR.lookAt(Bh,uR,Z3).extractBasis(Lh,Ph,lR),i?Tt(i,Zc):e.group.getWorldPosition(Zc),ts.subVectors(c,Zc);const p=ts.dot(Lh),m=ts.dot(Ph);ts.addScaledVector(Lh,Math.round(p/f)*f-p).addScaledVector(Ph,Math.round(m/f)*f-m).add(Zc);const g=Ut.shadowLocal?fR(s):null,A=g&&s&&s.data.orbit_type==="landed",y=A?d*AR:g?g.centre.distanceTo(ts)+g.radius+d:Uh+ts.distanceTo(e.group.position)+d;vn.position.copy(ts).addScaledVector(Bh,y),vn.target.position.copy(ts);const _=vn.shadow.camera;_.left=_.bottom=-d,_.right=_.top=d,_.near=d*.5,_.far=A?y*2:y+(g?d:Math.max(d,t))*2,_.updateProjectionMatrix();const S=_.far-_.near;vn.shadow.normalBias=f,vn.shadow.bias=-(g?Math.max(f*.5,2*S/dR):f*.5)/S}class gR{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0,this.workerCreator=null}_initWorker(e){if(!this.workers[e]){const t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){const i=this.workersResolve[e];if(i&&i(t),this.queue.length){const{resolve:s,msg:r,transfer:a}=this.queue.shift();this.workersResolve[e]=s,this.workers[e].postMessage(r,a)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(i=>{const s=this._getIdleWorker();s!==-1?(this._initWorker(s),this.workerStatus|=1<<s,this.workersResolve[s]=i,this.workers[s].postMessage(e,t)):this.queue.push({resolve:i,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const mR=0,lm=2,xR=1,um=2,_R=0,ER=1,yR=10,vR=0,u_=9,h_=15,d_=16,f_=22,A_=37,p_=43,g_=76,m_=83,x_=97,__=100,E_=103,y_=109,v_=122,M_=123,S_=131,C_=132,I_=133,w_=134,b_=137,T_=138,B_=139,R_=140,D_=141,L_=142,P_=145,U_=146,F_=148,N_=152,Q_=157,O_=158,k_=165,G_=166,z_=1000054e3,H_=1000054001,V_=1000054004,W_=1000054005,eA=1000066e3,q_=1000066004;class ja{constructor(e,t,i,s){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(e.buffer,e.byteOffset+t,i),this._littleEndian=s,this._offset=0}_nextUint8(){const e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){const e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){const e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){const e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){const e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint8Array(e){const t=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,e);return this._offset+=e,t}_skip(e){return this._offset+=e,this}_scan(e,t=0){const i=this._offset;let s=0;for(;this._dataView.getUint8(this._offset)!==t&&s<e;)s++,this._offset++;return s<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+i,s)}}const hn=[171,75,84,88,32,50,48,187,13,10,26,10];function hm(n){return new TextDecoder().decode(n)}function MR(n){const e=new Uint8Array(n.buffer,n.byteOffset,hn.length);if(e[0]!==hn[0]||e[1]!==hn[1]||e[2]!==hn[2]||e[3]!==hn[3]||e[4]!==hn[4]||e[5]!==hn[5]||e[6]!==hn[6]||e[7]!==hn[7]||e[8]!==hn[8]||e[9]!==hn[9]||e[10]!==hn[10]||e[11]!==hn[11])throw new Error("Missing KTX 2.0 identifier.");const t={vkFormat:0,typeSize:1,pixelWidth:0,pixelHeight:0,pixelDepth:0,layerCount:0,faceCount:1,levelCount:0,supercompressionScheme:0,levels:[],dataFormatDescriptor:[{vendorId:0,descriptorType:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],keyValue:{},globalData:null},i=17*Uint32Array.BYTES_PER_ELEMENT,s=new ja(n,hn.length,i,!0);t.vkFormat=s._nextUint32(),t.typeSize=s._nextUint32(),t.pixelWidth=s._nextUint32(),t.pixelHeight=s._nextUint32(),t.pixelDepth=s._nextUint32(),t.layerCount=s._nextUint32(),t.faceCount=s._nextUint32(),t.levelCount=s._nextUint32(),t.supercompressionScheme=s._nextUint32();const r=s._nextUint32(),a=s._nextUint32(),o=s._nextUint32(),l=s._nextUint32(),c=s._nextUint64(),u=s._nextUint64(),h=3*Math.max(t.levelCount,1)*8,d=new ja(n,hn.length+i,h,!0);for(let ee=0,pe=Math.max(t.levelCount,1);ee<pe;ee++)t.levels.push({levelData:new Uint8Array(n.buffer,n.byteOffset+d._nextUint64(),d._nextUint64()),uncompressedByteLength:d._nextUint64()});const f=new ja(n,r,a,!0);f._skip(4);const p=f._nextUint16(),m=f._nextUint16(),g=f._nextUint16(),A=f._nextUint16(),y={vendorId:p,descriptorType:m,versionNumber:g,colorModel:f._nextUint8(),colorPrimaries:f._nextUint8(),transferFunction:f._nextUint8(),flags:f._nextUint8(),texelBlockDimension:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],bytesPlane:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],samples:[]},_=(A/4-6)/4;for(let ee=0;ee<_;ee++){const pe={bitOffset:f._nextUint16(),bitLength:f._nextUint8(),channelType:f._nextUint8(),samplePosition:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],sampleLower:Number.NEGATIVE_INFINITY,sampleUpper:Number.POSITIVE_INFINITY};64&pe.channelType?(pe.sampleLower=f._nextInt32(),pe.sampleUpper=f._nextInt32()):(pe.sampleLower=f._nextUint32(),pe.sampleUpper=f._nextUint32()),y.samples[ee]=pe}t.dataFormatDescriptor.length=0,t.dataFormatDescriptor.push(y);const S=new ja(n,o,l,!0);for(;S._offset<l;){const ee=S._nextUint32(),pe=S._scan(ee),be=hm(pe);if(t.keyValue[be]=S._nextUint8Array(ee-pe.byteLength-1),be.match(/^ktx/i)){const et=hm(t.keyValue[be]);t.keyValue[be]=et.substring(0,et.lastIndexOf("\0"))}S._skip(ee%4?4-ee%4:0)}if(u<=0)return t;const w=new ja(n,c,u,!0),C=w._nextUint16(),B=w._nextUint16(),P=w._nextUint32(),v=w._nextUint32(),E=w._nextUint32(),b=w._nextUint32(),R=[];for(let ee=0,pe=Math.max(t.levelCount,1);ee<pe;ee++)R.push({imageFlags:w._nextUint32(),rgbSliceByteOffset:w._nextUint32(),rgbSliceByteLength:w._nextUint32(),alphaSliceByteOffset:w._nextUint32(),alphaSliceByteLength:w._nextUint32()});const U=c+w._offset,Q=U+P,F=Q+v,k=F+E,X=new Uint8Array(n.buffer,n.byteOffset+U,P),z=new Uint8Array(n.buffer,n.byteOffset+Q,v),te=new Uint8Array(n.buffer,n.byteOffset+F,E),ie=new Uint8Array(n.buffer,n.byteOffset+k,b);return t.globalData={endpointCount:C,selectorCount:B,imageDescs:R,endpointsData:X,selectorsData:z,tablesData:te,extendedData:ie},t}let Fh,bi,Kd;const Nh={env:{emscripten_notify_memory_growth:function(n){Kd=new Uint8Array(bi.exports.memory.buffer)}}};class SR{init(){return Fh||(Fh=typeof fetch<"u"?fetch("data:application/wasm;base64,"+dm).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,Nh)).then(this._init):WebAssembly.instantiate(Buffer.from(dm,"base64"),Nh).then(this._init),Fh)}_init(e){bi=e.instance,Nh.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!bi)throw new Error("ZSTDDecoder: Await .init() before decoding.");const i=e.byteLength,s=bi.exports.malloc(i);Kd.set(e,s),t=t||Number(bi.exports.ZSTD_findDecompressedSize(s,i));const r=bi.exports.malloc(t),a=bi.exports.ZSTD_decompress(r,t,s,i),o=Kd.slice(r,r+a);return bi.exports.free(s),bi.exports.free(r),o}}const dm="AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ",CR="display-p3",IR="display-p3-linear";({...rt.spaces[dt]});const Qh=new WeakMap;let Oh=0,kh;class Qn extends Cs{constructor(e){super(e),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new gR,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}async detectSupportAsync(e){return console.warn('KTX2Loader: "detectSupportAsync()" has been deprecated. Use "detectSupport()" and "await renderer.init();" when creating the renderer.'),await e.init(),this.detectSupport(e)}detectSupport(e){return e.isWebGPURenderer===!0?this.workerConfig={astcSupported:e.hasFeature("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:e.hasFeature("texture-compression-etc1"),etc2Supported:e.hasFeature("texture-compression-etc2"),dxtSupported:e.hasFeature("texture-compression-s3tc"),bptcSupported:e.hasFeature("texture-compression-bc"),pvrtcSupported:e.hasFeature("texture-compression-pvrtc")}:(this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),astcHDRSupported:e.extensions.has("WEBGL_compressed_texture_astc")&&e.extensions.get("WEBGL_compressed_texture_astc").getSupportedProfiles().includes("hdr"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},typeof navigator<"u"&&navigator.platform.indexOf("Linux")>=0&&navigator.userAgent.indexOf("Firefox")>=0&&this.workerConfig.astcSupported&&this.workerConfig.etc2Supported&&this.workerConfig.bptcSupported&&this.workerConfig.dxtSupported&&(this.workerConfig.astcSupported=!1,this.workerConfig.etc2Supported=!1)),this}init(){if(!this.transcoderPending){const e=new $s(this.manager);e.setPath(this.transcoderPath),e.setWithCredentials(this.withCredentials);const t=e.loadAsync("basis_transcoder.js"),i=new $s(this.manager);i.setPath(this.transcoderPath),i.setResponseType("arraybuffer"),i.setWithCredentials(this.withCredentials);const s=i.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([t,s]).then(([r,a])=>{const o=Qn.BasisWorker.toString(),l=["/* constants */","let _EngineFormat = "+JSON.stringify(Qn.EngineFormat),"let _EngineType = "+JSON.stringify(Qn.EngineType),"let _TranscoderFormat = "+JSON.stringify(Qn.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(Qn.BasisFormat),"/* basis_transcoder.js */",r,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([l])),this.transcoderBinary=a,this.workerPool.setWorkerCreator(()=>{const c=new Worker(this.workerSourceURL),u=this.transcoderBinary.slice(0);return c.postMessage({type:"init",config:this.workerConfig,transcoderBinary:u},[u]),c})}),Oh>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),Oh++}return this.transcoderPending}load(e,t,i,s){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const r=new $s(this.manager);r.setPath(this.path),r.setCrossOrigin(this.crossOrigin),r.setWithCredentials(this.withCredentials),r.setRequestHeader(this.requestHeader),r.setResponseType("arraybuffer"),r.load(e,a=>{this.parse(a,t,s)},i,s)}parse(e,t,i){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(Qh.has(e))return Qh.get(e).promise.then(t).catch(i);this._createTexture(e).then(s=>t?t(s):null).catch(i)}_createTextureFrom(e,t){const{type:i,error:s,data:{faces:r,width:a,height:o,format:l,type:c,dfdFlags:u}}=e;if(i==="error")return Promise.reject(s);let h;if(t.faceCount===6)h=new b0(r,l,c);else{const d=r[0].mipmaps;h=t.layerCount>1?new dv(d,a,o,t.layerCount,l,c):new Kl(d,a,o,l,c)}return h.minFilter=r[0].mipmaps.length===1?wt:qn,h.magFilter=wt,h.generateMipmaps=!1,h.needsUpdate=!0,h.colorSpace=X_(t),h.premultiplyAlpha=!!(u&xR),h}async _createTexture(e,t={}){const i=MR(new Uint8Array(e)),s=i.vkFormat===eA&&i.dataFormatDescriptor[0].colorModel===167;if(!(i.vkFormat===vR||s&&!this.workerConfig.astcHDRSupported))return bR(i);const a=t,o=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:e,taskConfig:a},[e])).then(l=>this._createTextureFrom(l.data,i));return Qh.set(e,{promise:o}),o}dispose(){this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),Oh--}}Qn.BasisFormat={ETC1S:0,UASTC:1,UASTC_HDR:2};Qn.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16,BC6H:22,RGB_HALF:24,RGBA_HALF:25};Qn.EngineFormat={RGBAFormat:Jt,RGBA_ASTC_4x4_Format:js,RGB_BPTC_UNSIGNED_Format:Cl,RGBA_BPTC_Format:ra,RGBA_ETC2_EAC_Format:Co,RGBA_PVRTC_4BPPV1_Format:sa,RGBA_S3TC_DXT5_Format:ro,RGB_ETC1_Format:Sl,RGB_ETC2_Format:So,RGB_PVRTC_4BPPV1_Format:Ml,RGBA_S3TC_DXT1_Format:Zs};Qn.EngineType={UnsignedByteType:Ye,HalfFloatType:Bn,FloatType:cn};Qn.BasisWorker=function(){let n,e,t;const i=_EngineFormat,s=_EngineType,r=_TranscoderFormat,a=_BasisFormat;self.addEventListener("message",function(p){const m=p.data;switch(m.type){case"init":n=m.config,o(m.transcoderBinary);break;case"transcode":e.then(()=>{try{const{faces:g,buffers:A,width:y,height:_,hasAlpha:S,format:w,type:C,dfdFlags:B}=l(m.buffer);self.postMessage({type:"transcode",id:m.id,data:{faces:g,width:y,height:_,hasAlpha:S,format:w,type:C,dfdFlags:B}},A)}catch(g){console.error(g),self.postMessage({type:"error",id:m.id,error:g.message})}});break}});function o(p){e=new Promise(m=>{t={wasmBinary:p,onRuntimeInitialized:m},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function l(p){const m=new t.KTX2File(new Uint8Array(p));function g(){m.close(),m.delete()}if(!m.isValid())throw g(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");let A;if(m.isUASTC())A=a.UASTC;else if(m.isETC1S())A=a.ETC1S;else if(m.isHDR())A=a.UASTC_HDR;else throw new Error("THREE.KTX2Loader: Unknown Basis encoding");const y=m.getWidth(),_=m.getHeight(),S=m.getLayers()||1,w=m.getLevels(),C=m.getFaces(),B=m.getHasAlpha(),P=m.getDFDFlags(),{transcoderFormat:v,engineFormat:E,engineType:b}=h(A,y,_,B);if(!y||!_||!w)throw g(),new Error("THREE.KTX2Loader:	Invalid texture");if(!m.startTranscoding())throw g(),new Error("THREE.KTX2Loader: .startTranscoding failed");const R=[],U=[];for(let Q=0;Q<C;Q++){const F=[];for(let k=0;k<w;k++){const X=[];let z,te;for(let ee=0;ee<S;ee++){const pe=m.getImageLevelInfo(k,ee,Q);Q===0&&k===0&&ee===0&&(pe.origWidth%4!==0||pe.origHeight%4!==0)&&console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),w>1?(z=pe.origWidth,te=pe.origHeight):(z=pe.width,te=pe.height);let be=new Uint8Array(m.getImageTranscodedSizeInBytes(k,ee,0,v));const et=m.transcodeImage(be,k,ee,Q,v,0,-1,-1);if(b===s.HalfFloatType&&(be=new Uint16Array(be.buffer,be.byteOffset,be.byteLength/Uint16Array.BYTES_PER_ELEMENT)),!et)throw g(),new Error("THREE.KTX2Loader: .transcodeImage failed.");X.push(be)}const ie=f(X);F.push({data:ie,width:z,height:te}),U.push(ie.buffer)}R.push({mipmaps:F,width:y,height:_,format:E,type:b})}return g(),{faces:R,buffers:U,width:y,height:_,hasAlpha:B,dfdFlags:P,format:E,type:b}}const c=[{if:"astcSupported",basisFormat:[a.UASTC],transcoderFormat:[r.ASTC_4x4,r.ASTC_4x4],engineFormat:[i.RGBA_ASTC_4x4_Format,i.RGBA_ASTC_4x4_Format],engineType:[s.UnsignedByteType],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.BC7_M5,r.BC7_M5],engineFormat:[i.RGBA_BPTC_Format,i.RGBA_BPTC_Format],engineType:[s.UnsignedByteType],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.BC1,r.BC3],engineFormat:[i.RGBA_S3TC_DXT1_Format,i.RGBA_S3TC_DXT5_Format],engineType:[s.UnsignedByteType],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.ETC1,r.ETC2],engineFormat:[i.RGB_ETC2_Format,i.RGBA_ETC2_EAC_Format],engineType:[s.UnsignedByteType],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.ETC1],engineFormat:[i.RGB_ETC1_Format],engineType:[s.UnsignedByteType],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.PVRTC1_4_RGB,r.PVRTC1_4_RGBA],engineFormat:[i.RGB_PVRTC_4BPPV1_Format,i.RGBA_PVRTC_4BPPV1_Format],engineType:[s.UnsignedByteType],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0},{if:"bptcSupported",basisFormat:[a.UASTC_HDR],transcoderFormat:[r.BC6H],engineFormat:[i.RGB_BPTC_UNSIGNED_Format],engineType:[s.HalfFloatType],priorityHDR:1,needsPowerOfTwo:!1},{basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.RGBA32,r.RGBA32],engineFormat:[i.RGBAFormat,i.RGBAFormat],engineType:[s.UnsignedByteType,s.UnsignedByteType],priorityETC1S:100,priorityUASTC:100,needsPowerOfTwo:!1},{basisFormat:[a.UASTC_HDR],transcoderFormat:[r.RGBA_HALF],engineFormat:[i.RGBAFormat],engineType:[s.HalfFloatType],priorityHDR:100,needsPowerOfTwo:!1}],u={[a.ETC1S]:c.filter(p=>p.basisFormat.includes(a.ETC1S)).sort((p,m)=>p.priorityETC1S-m.priorityETC1S),[a.UASTC]:c.filter(p=>p.basisFormat.includes(a.UASTC)).sort((p,m)=>p.priorityUASTC-m.priorityUASTC),[a.UASTC_HDR]:c.filter(p=>p.basisFormat.includes(a.UASTC_HDR)).sort((p,m)=>p.priorityHDR-m.priorityHDR)};function h(p,m,g,A){const y=u[p];for(let _=0;_<y.length;_++){const S=y[_];if(S.if&&!n[S.if]||!S.basisFormat.includes(p)||A&&S.transcoderFormat.length<2||S.needsPowerOfTwo&&!(d(m)&&d(g)))continue;const w=S.transcoderFormat[A?1:0],C=S.engineFormat[A?1:0],B=S.engineType[0];return{transcoderFormat:w,engineFormat:C,engineType:B}}throw new Error("THREE.KTX2Loader: Failed to identify transcoding target.")}function d(p){return p<=2?!0:(p&p-1)===0&&p!==0}function f(p){if(p.length===1)return p[0];let m=0;for(let y=0;y<p.length;y++){const _=p[y];m+=_.byteLength}const g=new Uint8Array(m);let A=0;for(let y=0;y<p.length;y++){const _=p[y];g.set(_,A),A+=_.byteLength}return g}};const wR=new Set([Jt,Eo,cs,os]),Gh={[y_]:Jt,[E_]:cs,[__]:os,[x_]:Jt,[m_]:cs,[g_]:os,[p_]:Jt,[A_]:Jt,[f_]:cs,[d_]:cs,[h_]:os,[u_]:os,[M_]:Eo,[v_]:Eo,[N_]:Co,[F_]:So,[eA]:js,[O_]:js,[Q_]:js,[q_]:Kr,[G_]:Kr,[k_]:Kr,[w_]:Zs,[I_]:Zs,[C_]:Xr,[S_]:Xr,[T_]:Yr,[b_]:Yr,[R_]:wl,[B_]:Il,[L_]:Tl,[D_]:bl,[U_]:ra,[P_]:ra,[W_]:sa,[H_]:sa,[V_]:Mo,[z_]:Mo},kr={[y_]:cn,[E_]:cn,[__]:cn,[x_]:Bn,[m_]:Bn,[g_]:Bn,[p_]:Ye,[A_]:Ye,[f_]:Ye,[d_]:Ye,[h_]:Ye,[u_]:Ye,[M_]:Xl,[v_]:Yl,[N_]:Ye,[F_]:Ye,[eA]:Bn,[O_]:Ye,[Q_]:Ye,[q_]:Bn,[G_]:Ye,[k_]:Ye,[w_]:Ye,[I_]:Ye,[C_]:Ye,[S_]:Ye,[T_]:Ye,[b_]:Ye,[R_]:Ye,[B_]:Ye,[L_]:Ye,[D_]:Ye,[U_]:Ye,[P_]:Ye,[W_]:Ye,[H_]:Ye,[V_]:Ye,[z_]:Ye};async function bR(n){const{vkFormat:e}=n;if(Gh[e]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat: "+e);kr[e]===void 0&&console.warn('THREE.KTX2Loader: Missing ".type" for vkFormat: '+e);let t;n.supercompressionScheme===lm&&(kh||(kh=new Promise(async a=>{const o=new SR;await o.init(),a(o)})),t=await kh);const i=[];for(let a=0;a<n.levels.length;a++){const o=Math.max(1,n.pixelWidth>>a),l=Math.max(1,n.pixelHeight>>a),c=n.pixelDepth?Math.max(1,n.pixelDepth>>a):0,u=n.levels[a];let h;if(n.supercompressionScheme===mR)h=u.levelData;else if(n.supercompressionScheme===lm)h=t.decode(u.levelData,u.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");let d;kr[e]===cn?d=new Float32Array(h.buffer,h.byteOffset,h.byteLength/Float32Array.BYTES_PER_ELEMENT):kr[e]===Bn?d=new Uint16Array(h.buffer,h.byteOffset,h.byteLength/Uint16Array.BYTES_PER_ELEMENT):kr[e]===Xl||kr[e]===Yl?d=new Uint32Array(h.buffer,h.byteOffset,h.byteLength/Uint32Array.BYTES_PER_ELEMENT):d=h,i.push({data:d,width:o,height:l,depth:c})}const s=n.levelCount===0||i.length>1;let r;if(wR.has(Gh[e]))r=n.pixelDepth===0?new Ea(i[0].data,n.pixelWidth,n.pixelHeight):new p0(i[0].data,n.pixelWidth,n.pixelHeight,n.pixelDepth),r.minFilter=s?sf:tn,r.magFilter=tn,r.generateMipmaps=n.levelCount===0;else{if(n.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");r=new Kl(i,n.pixelWidth,n.pixelHeight),r.minFilter=s?qn:wt,r.magFilter=wt}return r.mipmaps=i,r.type=kr[e],r.format=Gh[e],r.colorSpace=X_(n),r.needsUpdate=!0,Promise.resolve(r)}function X_(n){const e=n.dataFormatDescriptor[0];return e.colorPrimaries===ER?e.transferFunction===um?dt:sn:e.colorPrimaries===yR?e.transferFunction===um?CR:IR:(e.colorPrimaries===_R||console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`),oi)}let Y_=!0;function TR(n){Y_=n}const K_=["px","nx","py","ny","pz","nz"],BR=1,J_=new Qn().setTranscoderPath("basis/"),Z_=23.4392911*(Math.PI/180),RR=new Ne().set(-.0548755604,-.8734370902,-.4838350155,.4941094279,-.44482963,.7469822445,-.867666149,-.1980763734,.4559837762),fm=Math.cos(Z_),Am=Math.sin(Z_),DR=new Ne().set(1,0,0,0,-Am,-fm,0,fm,-Am),zh=RR.clone().multiply(DR),LR=new Ne().set(-1,0,0,0,0,-1,0,-1,0),PR=`
    varying vec3 vDir;
    void main() {
        vDir = position;
        // A unit box round the camera, turned with the view but never moved, drawn at the far plane.
        vec4 p = projectionMatrix * vec4(mat3(viewMatrix) * position, 1.0);
        gl_Position = p.xyww;
    }`,UR=`
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
    }`;let ai=null;function pm(n){ai&&(ai.visible=n)}function j_(n,e){try{ke.initTexture(n)}catch(a){console.warn("Sky upload failed",a)}const t=e?LR.clone().multiply(zh):zh.clone(),i=new Mt({defines:e?{SKY_CUBE:""}:{},uniforms:{sky:{value:n},toSky:{value:t},intensity:{value:1},toGalactic:{value:zh.clone()},survey:{value:$t.survey.texture??Uo},surveyMix:{value:0},patchImage:{value:$t.patch.texture??Uo},patchMix:{value:0},patchTan:{value:.1},patchAspect:{value:1},patchDir:{value:$t.patch.dir},patchRight:{value:$t.patch.right},patchUp:{value:$t.patch.up}},vertexShader:PR,fragmentShader:UR,side:Vt,depthTest:!1,depthWrite:!1});if(ai=new Je(new _s(2,2,2),i),ai.name="sky",ai.frustumCulled=!1,ai.renderOrder=-1e9,ai.raycast=()=>{},He.add(ai),Ca.matches||!Y_)return;const s=performance.now();i.uniforms.intensity.value=0;const r=()=>{i.uniforms.intensity.value=Math.min(1,(performance.now()-s)/(BR*1e3)),i.uniforms.intensity.value<1&&requestAnimationFrame(r)};requestAnimationFrame(r)}function FR(){const n=zo.load("textures/milky_way.jpg");n.colorSpace=dt,n.generateMipmaps=!1,n.minFilter=wt,n.wrapS=xs,j_(n,!1)}let gm=!1;function NR(){gm||(gm=!0,Promise.all(K_.map(n=>J_.loadAsync(`textures/milky_way_${n}.ktx2`))).then(n=>{const e=new b0(n.map(t=>({width:t.image.width,height:t.image.height,mipmaps:t.mipmaps})),n[0].format,n[0].type);e.colorSpace=dt,e.minFilter=wt,e.magFilter=wt,e.generateMipmaps=!1,e.needsUpdate=!0,j_(e,!0),performance.mark("sky-ready")}).catch(n=>{console.warn("Compressed sky unavailable, using the JPEG",n),FR()}))}const QR=1.2,Uo=new Ea(new Uint8Array([0,0,0,255]),1,1);Uo.needsUpdate=!0;const $t={survey:{texture:null,mix:0,target:0},patch:{texture:null,mix:0,target:0,dir:new x(1,0,0),right:new x(0,0,1),up:new x(0,1,0),tan:.1,aspect:1}};function $_(n,e){const t=zo.load(vs(n),e,void 0,()=>console.warn(`Sky image didn't load: ${n}`));return t.colorSpace=dt,t.generateMipmaps=!1,t.minFilter=wt,t}function OR(n,{opacity:e=1}={}){const t=$t.survey;if(!n){t.target=0;return}t.path!==n&&(t.texture?.dispose(),t.texture=$_(n),t.texture.wrapS=xs,t.path=n,t.mix=0),t.target=e}const kR=ys({ra:0,dec:90});function Jd(n){const e=$t.patch;if(!n){e.target=0;return}e.path!==n.image&&(e.texture?.dispose(),e.texture=$_(n.image,i=>{e.aspect=i.image.width/i.image.height}),e.path=n.image,e.mix=0),e.dir.copy(ys({ra:n.ra,dec:n.dec??0}));const t=new x().crossVectors(kR,e.dir);t.lengthSq()<1e-10&&t.set(1,0,0),t.normalize(),e.right.copy(t).negate(),e.up.crossVectors(e.dir,t).normalize(),e.tan=Math.tan((n.size_deg??10)/2*Math.PI/180),e.target=n.opacity??1}function GR(n){const e=n/QR;for(const i of[$t.survey,$t.patch])i.mix=i.target>i.mix?Math.min(i.target,i.mix+e):Math.max(i.target,i.mix-e);if(!ai)return;const t=ai.material.uniforms;t.surveyMix.value=$t.survey.texture?$t.survey.mix:0,t.survey.value=$t.survey.texture??Uo,t.patchMix.value=$t.patch.texture?$t.patch.mix:0,t.patchImage.value=$t.patch.texture??Uo,t.patchTan.value=$t.patch.tan,t.patchAspect.value=$t.patch.aspect}const zR=.05,HR=1e-7,VR=1e6,WR=5,Gr=new x,mm=new x;He.matrixWorldAutoUpdate=!1;const qR=bt.prototype.updateMatrixWorld,Fo=[];function eE(n,e,t){if(t=t||!n.visible,t&&n.userData.detailLevel){n.matrixWorldNeedsUpdate=!0;return}if(n.updateMatrixWorld!==qR){n.updateMatrixWorld(e),n.traverse(s=>Fo.push(s));return}Fo.push(n),n.matrixAutoUpdate&&n.updateMatrix(),(n.matrixWorldNeedsUpdate||e)&&((n.matrixWorldAutoUpdate===!0||n===He)&&(n.parent===null?n.matrixWorld.copy(n.matrix):n.matrixWorld.multiplyMatrices(n.parent.matrixWorld,n.matrix)),n.matrixWorldNeedsUpdate=!1,e=!0);const i=n.children;for(let s=0,r=i.length;s<r;s++)eE(i[s],e,t)}function xm(){Fo.length=0,eE(He,!1,!1)}function XR(){if(!Ut.relative){xm(),ke.render(He,H);return}const n=YR(),e=H.far,t=at.clamp(Math.ceil(Math.log(e/n)/Math.log(VR)),1,WR),i=Math.pow(e/n,1/t);Gr.copy(H.position),He.position.copy(Gr).negate(),H.position.set(0,0,0);const{autoClear:s}=ke,r=ke.shadowMap.autoUpdate,{background:a}=He;xm();for(let o=t-1;o>=0;o--)H.near=n*Math.pow(i,o),H.far=o===t-1?e:n*Math.pow(i,o+1),H.updateProjectionMatrix(),o<t-1&&(ke.autoClear=!1,ke.clearDepth(),ke.shadowMap.autoUpdate=!1,He.background=null,pm(!1)),ke.render(He,H);ke.autoClear=s,ke.shadowMap.autoUpdate=r,He.background=a,pm(!0),H.near=n,H.far=e,H.updateProjectionMatrix(),H.position.copy(Gr),H.updateMatrixWorld(),He.position.set(0,0,0),He.updateMatrix();for(let o=0;o<Fo.length;o++){const l=Fo[o].matrixWorld.elements;l[12]+=Gr.x,l[13]+=Gr.y,l[14]+=Gr.z}}function YR(){let n=1/0;return Z.forEach(e=>{e.group.visible&&(e.mesh.visible||e.mesh.updateWorldMatrix(!0,!1),mm.setFromMatrixPosition(e.mesh.matrixWorld),n=Math.min(n,H.position.distanceTo(mm)-Mn(e)))}),Math.max(HR,zR*n)}const _m=.6,KR=[64,24],JR=new x(0,1,0),ga=new Map,ma=new Map;function tE(n,e){const t=zo.load(vs(n),e,void 0,()=>console.warn(`Layer image didn't load: ${n}`));return t.colorSpace=dt,t.anisotropy=4,t}function ZR(n){return new li({map:n,transparent:!0,opacity:0,depthWrite:!1,side:kt,toneMapped:!1})}function jR(n,e){const t=Z.get(e.body);if(!t)return console.warn(`Layer "${n}": no object called "${e.body}"`),!1;if(e.place!=="limb"&&e.place!=="sun-line")return console.warn(`Layer "${n}": unknown place "${e.place}"`),!1;tA(n,{now:!0});const i={id:n,spec:e,obj:t,aspect:0,opacity:0,target:e.opacity??1,removing:!1},s=tE(e.image,a=>{i.aspect=a.image.width/a.image.height}),r=e.place==="limb"?new Es(1,1,...KR):new Es(1,1);return i.mesh=new Je(r,ZR(s)),i.mesh.visible=!1,i.mesh.frustumCulled=!1,i.mesh.renderOrder=1,i.mesh.matrixAutoUpdate=!1,He.add(i.mesh),ga.set(n,i),!0}function tA(n,{now:e=!1}={}){const t=ga.get(n);if(t){if(e||t.opacity===0){nE(t);return}t.removing=!0,t.target=0}}function nE(n){He.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.map?.dispose(),n.mesh.material.dispose(),ga.get(n.id)===n&&ga.delete(n.id)}function $R(){[...ga.keys()].forEach(n=>tA(n)),[...ma.keys()].forEach(n=>iE(n,null))}const ds=new x,fs=new x,Ys=new x,Ri=new x,Os=new x,ns=new x,go=new xe,jc=new x;function e2(n){for(const e of ga.values()){const t=n/_m;if(e.opacity=e.target>e.opacity?Math.min(e.target,e.opacity+t):Math.max(e.target,e.opacity-t),e.removing&&e.opacity===0){nE(e);continue}const{obj:i,mesh:s}=e,r=e.aspect>0&&i.group.visible&&e.opacity>0;s.visible=r,r&&(s.material.opacity=e.opacity,i.mesh.updateWorldMatrix(!0,!1),i.mesh.getWorldPosition(ds),e.spec.place==="limb"?t2(e):n2(e))}for(const[e,t]of ma){const i=n/_m;t.opacity=t.target>t.opacity?Math.min(t.target,t.opacity+i):Math.max(t.target,t.opacity-i),t.mesh.material.opacity=t.opacity,t.mesh.visible=t.opacity>0,t.removing&&t.opacity===0&&sE(e,t)}}function t2(n){const{spec:e,obj:t,mesh:i}=n;fs.subVectors(H.position,ds).normalize(),Ri.set(0,1,0).applyQuaternion(H.quaternion),Ys.crossVectors(Ri,fs).normalize(),Ri.crossVectors(fs,Ys),go.makeBasis(Ys,Ri,fs).setPosition(ds),i.matrix.copy(go),i.matrixWorldNeedsUpdate=!0;const s=t.data.radius||1,r=Gf(t)*(e.exaggerate??1),a=1-(e.ground_row??1),o=1-(e.top_row??0),c=(e.top_km??100)/(o-a)*r,u=s+(.5-a)*c,h=e.width_deg!==void 0?e.width_deg*Math.PI/180:Math.min(Math.PI,c*n.aspect/u),d=(e.angle??45)*Math.PI/180,f=i.geometry.attributes.position,p=i.geometry.attributes.uv,m=H.position.distanceTo(ds);for(let g=0;g<f.count;g++){const A=p.getX(g),y=p.getY(g),_=d+(.5-A)*h,S=Math.max(0,s+(y-a)*c);Ux(_,S,m,0,jc),f.setXYZ(g,jc.x,jc.y,jc.z)}f.needsUpdate=!0}function n2(n){const{spec:e,obj:t,mesh:i}=n;ns.copy(ds).negate().normalize(),ns.lengthSq()===0&&ns.set(1,0,0),fs.subVectors(H.position,ds).normalize(),Os.copy(fs).addScaledVector(ns,-fs.dot(ns)),Os.lengthSq()<1e-8&&Os.copy(JR).addScaledVector(ns,-ns.y),Os.normalize(),Ys.copy(ns).negate(),Ri.crossVectors(Os,Ys),Ri.dot(fs.set(0,1,0).applyQuaternion(H.quaternion))<0&&(Ri.negate(),Os.negate());const s=(t.data.radius||1)/(e.radius??.05),r=s/n.aspect,[a,o]=e.centre??[.5,.5];go.makeBasis(Ys.multiplyScalar(s),Ri.multiplyScalar(r),Os),ds.addScaledVector(Ys,.5-a).addScaledVector(Ri,o-.5),go.setPosition(ds),i.matrix.copy(go),i.matrixWorldNeedsUpdate=!0}function iE(n,e){const t=Z.get(n),i=ma.get(n);if(!e)return i&&(i.target=0,i.removing=!0),!0;if(!t||!t.data.texture||!t.data.built?.radius)return console.warn(`Surface overlay: "${n}" isn't a textured sphere`),!1;i&&sE(n,i);const s=tE(e.image),r=e.lit===!1?new li({map:s,transparent:!0,opacity:0,toneMapped:!1}):new ki({map:s,transparent:!0,opacity:0,roughness:1,metalness:0});r.depthWrite=!1;const a=t.data.segments||32,o=new Je(new Oi(t.data.built.radius*1.002,a*2,a),r);return o.receiveShadow=e.lit!==!1,o.renderOrder=1,o.visible=!1,t.mesh.add(o),ma.set(n,{mesh:o,opacity:0,target:e.opacity??1,removing:!1}),!0}function sE(n,e){e.mesh.parent?.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.map?.dispose(),e.mesh.material.dispose(),ma.get(n)===e&&ma.delete(n)}const Zd=.8,rE=.58,Em=.8,ym=1.3,i2=.45,s2=1.3,jd=55,vm=30,$c=1800,r2=38,hi=48,a2=400,nA=Math.log(a2);function o2(n,e){const t=n.radius||1,i=n.radius_km,s=Aa(n,i)-t;for(let r=0;r<hi;r++){const a=Math.exp(r/(hi-1)*nA);e[r]=Math.max(t,Aa(n,a*i)-s)}e[0]=t}function Hl(n,e){if(e<=1)return e*n[0];const t=Math.min(1,Math.log(e)/nA)*(hi-1),i=Math.min(Math.floor(t),hi-2);return n[i]+(n[i+1]-n[i])*(t-i)}const c2=`
uniform float uTable[${hi}];
float remapR(float r) {
    if (r <= 1.0) return r * uTable[0];
    float f = min(1.0, log(r) / ${nA.toFixed(6)}) * ${(hi-1).toFixed(1)};
    int i = int(min(floor(f), ${(hi-2).toFixed(1)}));
    return mix(uTable[i], uTable[i + 1], f - float(i));
}
vec3 remapP(vec3 p) { float r = length(p); return r > 0.0 ? p / r * remapR(r) : p; }
`,xa=at.smoothstep;function l2(n,e){return n*Math.pow(2/(1+Math.max(e,-.94)),rE)}function Mm(n,e,t,i){let{x:s}=n;const r=n.length();if(r<1e-6)return i.copy(n);const a=s/r;s>0?s*=1+(e/t-1)*xa(r,1.5,6)*a:s*=1+s2*xa(r,2.5,9),i.set(s,n.y,n.z);const o=i.length(),l=.95*l2(e,i.x/o);if(o>.7*l){const c=.7*l+.3*l*Math.tanh((o-.7*l)/(.3*l));i.multiplyScalar(c/o)}return i}const aE=[2,3,4.5,6.5,8.5],Sm=12,u2=[73,76,79],Cm=8,el=64;function h2(){const n=[];for(const t of aE){const i=Math.acos(Math.sqrt(1/t));for(let s=0;s<Sm;s++){const r=s/Sm*Math.PI*2,a=[];for(let o=0;o<=el;o++){const l=-i+2*i*o/el,c=t*Math.cos(l)**2;a.push(new x(c*Math.cos(l)*Math.cos(r),c*Math.cos(l)*Math.sin(r),c*Math.sin(l)))}n.push({points:a,open:!1})}}const e=new _v;for(const t of[1,-1])for(const i of u2){const s=i*Math.PI/180,r=1/Math.cos(s)**2,a=Math.acos(Math.sqrt(2.5/r));for(let o=0;o<Cm;o++){const l=(o+.5)/Cm*Math.PI*2,c=p=>{const m=r*Math.cos(p)**2;return new x(m*Math.cos(p)*Math.cos(l),m*Math.cos(p)*Math.sin(l),t*m*Math.sin(p))},u=[],h=16;for(let p=0;p<=h;p++)u.push(c(s+(a-s)*p/h));const d=u[u.length-1],f=5+(i-72)*.7;e.v0.copy(d),e.v1.set(d.x*.4-4,d.y*1.4,d.z*1.5+t*2),e.v2.set(-jd*.35,Math.sin(l)*7,t*f),e.v3.set(-jd,Math.sin(l)*9,t*f*.9);for(let p=1;p<=el-h;p++)u.push(e.getPoint(p/(el-h)));n.push({points:u,open:!0})}}return n}const ba={transparent:!0,depthWrite:!1,blending:ms,toneMapped:!1};function d2(){return new Mt({...ba,uniforms:{uTime:{value:0},uOpacity:{value:0},uStorm:{value:0}},vertexShader:`
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
            }`})}function tl(n,{edge:e=!0}={}){return new Mt({...ba,side:kt,uniforms:{uOpacity:{value:0},uColour:{value:new Se(n)},uBright:{value:1}},vertexShader:`
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
            }`})}function f2(){return new Mt({...ba,side:kt,uniforms:{uTime:{value:0},uOpacity:{value:0},uBright:{value:.5}},vertexShader:`
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
            }`})}function A2(){return new Mt({...ba,uniforms:{uTable:{value:new Float32Array(hi)},uTime:{value:0},uOpacity:{value:0},uSpeed:{value:6},uDensity:{value:.5},uNose:{value:13},uFlare:{value:20}},vertexShader:`
            ${c2}
            uniform float uTime, uSpeed, uNose, uFlare, uDensity;
            attribute vec3 aSeed;     // its distance off the Sun line (body radii), angle round it, and phase
            attribute float aEnd;     // 0 at its head, 1 at its tail
            varying float vAlpha;
            void main() {
                float span = ${(vm+jd).toFixed(1)};
                float s = fract(aSeed.z + uTime * uSpeed / span);
                float x = ${vm.toFixed(1)} - s * span + aEnd * (1.2 + uSpeed * 0.25);
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
            }`})}function p2(n){const e=n.reduce((o,l)=>o+l.points.length,0),t=new Ze;t.setAttribute("position",new Ge(new Float32Array(e*3),3));const i=new Float32Array(e),s=new Float32Array(e),r=[];let a=0;for(const o of n){const l=o.points.length;for(let c=0;c<l;c++)i[a+c]=c/(l-1),s[a+c]=o.open?1:0,c>0&&r.push(a+c-1,a+c);a+=l}return t.setAttribute("aAlong",new Ge(i,1)),t.setAttribute("aOpen",new Ge(s,1)),t.setIndex(r),t.userData.quiet=n.flatMap(o=>o.points),t}function Im(n,e=[36,48]){const[t,i]=e,s=new Ze,r=(t+1)*(i+1);s.setAttribute("position",new Ge(new Float32Array(r*3),3));const a=new Float32Array(r),o=[],l=[];for(let c=0;c<=t;c++){const u=c/t*n;for(let h=0;h<=i;h++){const d=h/i*Math.PI*2;if(o.push(new x(Math.cos(u),Math.sin(u)*Math.cos(d),Math.sin(u)*Math.sin(d))),a[c*(i+1)+h]=1-xa(u,n*.7,n),c<t&&h<i){const f=c*(i+1)+h,p=f+i+1;l.push(f,p,f+1,p,p+1,f+1)}}}return s.setAttribute("aFade",new Ge(a,1)),s.setIndex(l),s.userData.dirs=o,s}function wm(n,e){const t=35*Math.PI/180,i=[],s=24;for(let h=0;h<=s;h++){const d=-t+2*t*h/s;i.push([e*Math.cos(d)**3,e*Math.cos(d)**2*Math.sin(d)])}for(let h=s;h>=0;h--){const d=-t+2*t*h/s;i.push([n*Math.cos(d)**3,n*Math.cos(d)**2*Math.sin(d)])}i.push(i[0]);const r=64,a=[],o=[],l=[],c=i.length;for(let h=0;h<=r;h++){const d=h/r*Math.PI*2;for(const[f,p]of i)a.push(new x(f*Math.cos(d),f*Math.sin(d),p)),l.push(1);if(h<r)for(let f=0;f<c-1;f++){const p=h*c+f,m=p+c;o.push(p,m,p+1,m,m+1,p+1)}}const u=new Ze;return u.setAttribute("position",new Ge(new Float32Array(a.length*3),3)),u.setAttribute("aFade",new Ge(new Float32Array(l),1)),u.setIndex(o),u.userData.quiet=a,u}const Ks=180;function g2(){const n=(Ks+1)*4,e=n*2,t=new Ze;t.setAttribute("position",new Ge(new Float32Array(e*3),3));const i=new Float32Array(e),s=new Float32Array(e),r=new Float32Array(e),a=[];for(let o=0;o<2;o++)for(let l=0;l<=Ks;l++){const c=o*n+l*4,u=l/Ks*Math.PI*2;[0,1,0,1].forEach((h,d)=>{i[c+d]=h,s[c+d]=u,r[c+d]=d>=2?1:0}),l<Ks&&(a.push(c,c+4,c+1,c+4,c+5,c+1),a.push(c+2,c+6,c+3,c+6,c+7,c+3))}return t.setAttribute("aUp",new Ge(i,1)),t.setAttribute("aPsi",new Ge(s,1)),t.setAttribute("aBand",new Ge(r,1)),t.setIndex(a),t}function m2(){const n=new Ze,e=new Float32Array($c*2*3),t=new Float32Array($c*2);let i=12345;const s=()=>(i=Math.imul(i,1664525)+1013904223>>>0)/4294967296;for(let r=0;r<$c;r++){const a=r2*Math.sqrt(s()),o=s()*Math.PI*2,l=s();for(let c=0;c<2;c++)e.set([a,o,l],(r*2+c)*3),t[r*2+c]=c}return n.setAttribute("position",new Ge(new Float32Array($c*2*3),3)),n.setAttribute("aSeed",new Ge(e,3)),n.setAttribute("aEnd",new Ge(t,1)),n}const No=new Map,_a=["field","boundary","belts","aurora","wind"];function oE(n,e){const t=No.get(n);if(!e)return t&&_a.forEach(a=>{t.target[a]=0}),!0;const i=Z.get(n),s=i?.data.magnetosphere;if(!s)return console.warn(`No magnetosphere for "${n}" in data.json`),!1;const r=t??x2(i,s);return _a.forEach(a=>{r.target[a]=e[a]===!1?0:e.opacity??1}),No.set(n,r),!0}function x2(n,e){const t=new Zt;t.matrixAutoUpdate=!1;const i={field:new Bo(p2(h2()),d2()),magnetopause:new Je(Im(Math.PI*.82),tl("#A6B5F8")),shock:new Je(Im(Math.PI*.7),tl("#FFB4FF")),aurora:new Je(g2(),f2()),wind:new Bo(m2(),A2())},[s,r]=e.belts??[[1.2,2.5],[3,6]];return i.innerBelt=new Je(wm(...s),tl("#FFB4FF",{edge:!1})),i.outerBelt=new Je(wm(...r),tl("#66EEFA",{edge:!1})),Object.values(i).forEach(a=>{a.frustumCulled=!1,a.visible=!1,a.renderOrder=2,t.add(a)}),He.add(t),{obj:n,params:e,group:t,meshes:i,opacity:Object.fromEntries(_a.map(a=>[a,0])),target:Object.fromEntries(_a.map(a=>[a,0])),table:new Float32Array(hi),builtTable:null,builtR0:-1,builtOval:-1}}function _2(n,e){He.remove(e.group),Object.values(e.meshes).forEach(t=>{t.geometry.dispose(),t.material.dispose()}),No.delete(n)}const Js=new x,nl=new x,rs=new x,Vl=new x,as=new x,il=new x,bm=new xe;function Hh(n,e,t){const i=n.array;for(let s=0;s<e.length;s++)t(e[s],nl),i[s*3]=nl.x,i[s*3+1]=nl.y,i[s*3+2]=nl.z;n.needsUpdate=!0}function E2(n,e){const{meshes:t,table:i}=n,s=n.params.standoff_re??10,r=(c,u)=>{const h=c.length();return h>0?u.copy(c).multiplyScalar(Hl(i,h)/h):u.copy(c)};Hh(t.field.geometry.attributes.position,t.field.geometry.userData.quiet,(c,u)=>r(Mm(c,e,s,Js),u));for(const[c,u,h]of[[t.magnetopause,1,rE],[t.shock,ym,Em]])Hh(c.geometry.attributes.position,c.geometry.userData.dirs,(d,f)=>{const p=u*e*Math.pow(2/(1+Math.max(d.x,-.94)),h);return r(Js.copy(d).multiplyScalar(p),f)}),c.geometry.computeVertexNormals();for(const c of[t.innerBelt,t.outerBelt])Hh(c.geometry.attributes.position,c.geometry.userData.quiet,(u,h)=>r(Mm(u,e,s,Js),h)),c.geometry.computeVertexNormals();const a=t.wind.material.uniforms;a.uTable.value.set(i);const o=ym*e,l=o*Math.pow(2,Em);a.uNose.value=o,a.uFlare.value=l*l/o}const sl=4*Math.PI/180;function y2(n,e,t){const{table:i}=n,s=n.obj.data.radius_km,r=n.meshes.aurora.geometry.attributes.position,a=r.array,o=(Ks+1)*4,l=1+100/s,c=1+(100+t)/s,u=1+110/s;for(let h=0;h<2;h++){const d=h?-1:1;as.set(-Math.sin(sl),0,d*Math.cos(sl)),rs.set(Math.cos(sl),0,d*Math.sin(sl)),Vl.crossVectors(as,rs);for(let f=0;f<=Ks;f++){const p=f/Ks*Math.PI*2,m=h*o+f*4,g=(e-2*Math.cos(p))*Math.PI/180,A=(y,_,S)=>{Js.copy(as).multiplyScalar(Math.cos(y)).addScaledVector(rs,Math.sin(y)*Math.cos(p)).addScaledVector(Vl,Math.sin(y)*Math.sin(p));const w=Hl(i,_);a[(m+S)*3]=Js.x*w,a[(m+S)*3+1]=Js.y*w,a[(m+S)*3+2]=Js.z*w};A(g,l,0),A(g,c,1),A(g-2.5*Math.PI/180,u,2),A(g+2.5*Math.PI/180,u,3)}}r.needsUpdate=!0}function v2(n){if(!n.builtTable)return!0;for(let e=0;e<hi;e+=6)if(Math.abs(n.table[e]-n.builtTable[e])>1e-4*n.table[e])return!0;return!1}function M2(n,e,t){const i=e/Zd;let s=!1;if(_a.forEach(_=>{const S=n.target[_];n.opacity[_]=S>n.opacity[_]?Math.min(S,n.opacity[_]+i):Math.max(S,n.opacity[_]-i),n.opacity[_]>0&&(s=!0)}),!s&&_a.every(_=>n.target[_]===0)){_2(t,n);return}const{obj:r,params:a,meshes:o}=n;r.mesh.updateWorldMatrix(!0,!1),r.mesh.getWorldPosition(il),rs.copy(il).negate().normalize();const l=a.pole??{lat:90,lon:0};kf(l.lat,l.lon,as).transformDirection(r.mesh.matrixWorld),as.addScaledVector(rs,-as.dot(rs)).normalize(),Vl.crossVectors(as,rs),bm.makeBasis(rs,Vl,as).setPosition(il),n.group.matrix.copy(bm),n.group.matrixWorldNeedsUpdate=!0;const c=lE(t),u=(a.standoff_re??10)*(1-i2*c);o2(r.data,n.table),(v2(n)||Math.abs(u-n.builtR0)>.02)&&(E2(n,u),n.builtR0=u,n.builtTable=n.table.slice(),n.builtOval=-1);const h=90-(a.aurora_lat??67)+12*c;Math.abs(h-n.builtOval)>.05&&(y2(n,h,250+150*c),n.builtOval=h);const d=H.position.distanceTo(il),f=_=>xa(d,Hl(n.table,_)*.75,Hl(n.table,_)*1.25),[p,m]=a.belts??[[1.2,2.5],[3,6]],g=(_,S)=>{_.visible=S>0,_.material.uniforms.uOpacity.value=S};g(o.field,n.opacity.field*f(aE.at(-1))),o.field.material.uniforms.uTime.value=Kn,o.field.material.uniforms.uStorm.value=c;const A=f(u*.8);g(o.magnetopause,n.opacity.boundary*.55*A),g(o.shock,n.opacity.boundary*.3*A),g(o.innerBelt,n.opacity.belts*.35*f(p[1]*1.6)),g(o.outerBelt,n.opacity.belts*.3*f(m[1]*1.2)),o.outerBelt.material.uniforms.uBright.value=1+1.5*c,g(o.aurora,n.opacity.aurora),o.aurora.material.uniforms.uTime.value=Kn,o.aurora.material.uniforms.uBright.value=.45+1.4*c,g(o.wind,n.opacity.wind*A);const y=o.wind.material.uniforms;y.uTime.value=Kn,y.uSpeed.value=5*(1+1.5*c),y.uDensity.value=.35+.65*c}const Hi=new Map,mo=64,S2=30,C2=1;function I2(){return new Mt({...ba,side:kt,uniforms:{uOpacity:{value:0},uTime:{value:0},uWidth:{value:1}},vertexShader:`
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
            }`})}function w2(n,e){iA(n,{now:!0});const t=new Date(e.launch).getTime();if(isNaN(t))return console.warn(`CME "${n}": launch date not understood`),!1;const i=(e.width_deg??60)/2*Math.PI/180,s=new Oi(1,64,24,0,Math.PI*2,0,i),r=[0,1].map(()=>{const o=new Je(s,I2());return o.material.uniforms.uWidth.value=i,o.frustumCulled=!1,o.visible=!1,o.renderOrder=2,He.add(o),o}),a=new ya(new Ze,new Mt({...ba,uniforms:{uOpacity:{value:0}},vertexShader:`
            attribute float aOff;
            varying float vOff;
            void main() { vOff = aOff; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
            uniform float uOpacity;
            varying float vOff;
            void main() { gl_FragColor = vec4(vec3(1.0, 0.85, 0.95) * (1.0 - smoothstep(0.6, 1.0, abs(vOff))) * uOpacity, 1.0); }`}));return a.geometry.setAttribute("position",new Ge(new Float32Array(mo*3),3)),a.geometry.setAttribute("aOff",new Ge(Float32Array.from({length:mo},(o,l)=>l/(mo-1)*2-1),1)),a.frustumCulled=!1,a.visible=!1,a.renderOrder=2,He.add(a),Hi.set(n,{id:n,launch:t,width:i,shells:r,arc:a,toward:e.toward??"Earth",speed:e.speed_km_s??1e3,dir:new x(1,0,0),fixed:!1,opacity:0,target:1,removing:!1}),!0}function iA(n,{now:e=!1}={}){const t=Hi.get(n);if(t){if(e){cE(t);return}t.target=0,t.removing=!0}}function cE(n){He.remove(n.arc),n.arc.geometry.dispose(),n.arc.material.dispose(),n.shells.forEach(e=>{He.remove(e),e.material.dispose()}),n.shells[0].geometry.dispose(),Hi.get(n.id)===n&&Hi.delete(n.id)}const Tm=new x(0,1,0),Bm=new ot;function b2(n,e){return(Z.get("Sun")?.data?.radius_km??695700)+n.speed*Math.max(0,e-n.launch)/1e3}function T2(n,e){if(n.opacity=n.target>n.opacity?Math.min(n.target,n.opacity+e/Zd):Math.max(n.target,n.opacity-e/Zd),n.removing&&n.opacity===0){cE(n);return}const t=An.getTime(),i=t<n.launch;if(i||!n.fixed){const l=Z.get(n.toward);l&&n.dir.copy(l.group.position).normalize(),n.fixed=!i}const s=b2(n,t)/fa,r=Z.get("Sun")?.data.radius??1,a=Math.max(r*1.02,Jn.au(s)),o=1-xa(s,2.5,4);if(Bm.setFromUnitVectors(Tm,n.dir),n.shells.forEach((l,c)=>{const u=a*(c?.88:1);l.visible=!i&&o>0&&n.opacity>0,l.quaternion.copy(Bm),l.scale.setScalar(Math.max(u,r*1.02)),l.position.set(0,0,0),l.material.uniforms.uOpacity.value=n.opacity*o*(c?.5:1),l.material.uniforms.uTime.value=Kn}),n.arc.visible=n.shells[0].visible,n.arc.visible){const l=n.arc.geometry.attributes.position.array;for(let c=0;c<mo;c++){const u=(c/(mo-1)*2-1)*n.width;rl.copy(n.dir).applyAxisAngle(Tm,u).multiplyScalar(Math.max(a,r*1.02)),l[c*3]=rl.x,l[c*3+1]=rl.y,l[c*3+2]=rl.z}n.arc.geometry.attributes.position.needsUpdate=!0,n.arc.material.uniforms.uOpacity.value=n.opacity*o}}const rl=new x,Rm=new x;function lE(n){const e=Z.get(n);if(!e||!Hi.size)return 0;const t=An.getTime(),i=e.group.position.length(),s=Jn.toAu(i)*fa;Rm.copy(e.group.position).normalize();let r=0;for(const a of Hi.values()){if(a.removing||t<a.launch||Rm.angleTo(a.dir)>a.width)continue;const o=Z.get("Sun")?.data.radius_km??695700,l=a.launch+(s-o)/a.speed*1e3,c=(t-l)/36e5;c<0||(r=Math.max(r,xa(c,0,C2)*Math.exp(-c/S2)))}return r}function B2(n,e){const t=Hi.get(n),i=Z.get(e);if(!t||!i)return null;const s=Jn.toAu(i.group.position.length())*fa,r=Z.get("Sun")?.data.radius_km??695700;return new Date(t.launch+(s-r)/t.speed*1e3)}function R2(){[...No.keys()].forEach(n=>oE(n,null)),[...Hi.keys()].forEach(n=>iA(n))}function D2(n){for(const e of[...Hi.values()])T2(e,n);for(const[e,t]of[...No])M2(t,n,e)}const L2=.6,P2=10,Dm=260,U2=.035,uE=15,sA={transparent:!0,depthWrite:!1,blending:ms,toneMapped:!1};function so(n,e,{align:t="left",weight:i=500}={}){const r=`${i} 48px Poppins, Arial, sans-serif`,a=document.createElement("canvas"),o=a.getContext("2d");o.font=r;const l=Math.ceil(o.measureText(n).width)+32;a.width=l,a.height=68,o.font=r,o.textBaseline="middle",o.shadowColor="rgba(0, 0, 0, 0.85)",o.shadowBlur=12,o.fillStyle=e,o.fillText(n,16,a.height/2);const c=new fv(a);c.colorSpace=dt;const u=new nv(new S0({map:c,transparent:!0,depthWrite:!1,toneMapped:!1}));return u.center.set(t==="left"?0:t==="right"?1:.5,.5),u.userData.aspect=a.width/a.height,u.renderOrder=3,u.frustumCulled=!1,u}const Lm=new x;function al(n){n.getWorldPosition(Lm);const t=2*H.position.distanceTo(Lm)*Math.tan(H.fov*Math.PI/360)*uE*34/24/window.innerHeight;n.scale.set(t*n.userData.aspect,t,1)}function F2(n){return new Mt({...sA,uniforms:{uOpacity:{value:0},uColour:{value:new Se(n)}},vertexShader:`
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
            }`})}function N2(n,e){return new Mt({...sA,side:kt,uniforms:{uOpacity:{value:0},uTime:{value:0},uColour:{value:new Se(n)},uRainbow:{value:e?1:0}},vertexShader:`
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
            }`})}function Q2(n){return new Mt({...sA,side:kt,uniforms:{uOpacity:{value:0},uTime:{value:0},uColour:{value:new Se(n)}},vertexShader:`
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
            }`})}const Qo=new Map;function hE(n,e){const t=Qo.get(n);if(!e)return t&&(t.layersTarget=0,t.beams.forEach(o=>{o.target=0})),!0;const i=Z.get(n),s=i?.data.atmosphere;if(!s)return console.warn(`No atmosphere for "${n}" in data.json`),!1;const r=t??k2(i,s);r.spec=e,r.layersTarget=e.layers===!1?0:1;const a=e.light===!1?[]:e.light===void 0||e.light===!0?r.beams.map(o=>o.band):e.light;return r.beams.forEach(o=>{o.target=a.includes(o.band)?1:0}),Qo.set(n,r),!0}const Pm=["#66EEFA","#7DFFD3","#A6B5F8","#FFB4FF","#FFF488"],O2={gamma:"#FFB4FF",xray:"#D2C4FF",euv:"#A68CFF",uv:"#66EEFA",visible:"#FFFFFF",infrared:"#FF9A7A",radio:"#7DFFD3"};function k2(n,e){const t=new Zt;t.matrixAutoUpdate=!1;const i=new Zt;He.add(t,i);const s=new Oi(1,96,48),r=(e.layers??[]).map((f,p)=>{const m=f.colour??Pm[p%Pm.length],g=new Je(s,F2(m));g.frustumCulled=!1,g.renderOrder=2,i.add(g);const A=so(f.name,m);return t.add(A),{...f,mesh:g,label:A}}),a=Math.max(Dm,...r.map(f=>f.top_km).filter(f=>f<=Dm*1.5)),o=[];for(let f=0;f<=a;f+=50)o.push({km:f,label:so(f?`${f} km`:"ground","#ffffff",{align:"right",weight:400})});const l=new Ze;l.setAttribute("position",new Ge(new Float32Array((2+o.length*2)*3),3));const c=new Bo(l,new Ss({color:16777215,transparent:!0,opacity:0,depthWrite:!1}));c.frustumCulled=!1,t.add(c),o.forEach(f=>t.add(f.label));const u=so("","#ffffff",{align:"right",weight:400});t.add(u);const h=new Es(1,1),d=(e.absorption??[]).map(f=>{const p=f.colour??O2[f.band]??"#ffffff",m=new Je(new Es(1,1,1,24),N2(p,f.band==="visible")),g=new Je(h,Q2(p));[m,g].forEach(y=>{y.frustumCulled=!1,y.matrixAutoUpdate=!1,y.renderOrder=3,t.add(y)});const A=so(f.label??f.band,p,{align:"center"});return t.add(A),{...f,beam:m,glow:g,label:A,opacity:0,target:0}});return{obj:n,params:e,group:t,shells:i,layers:r,beams:d,ticks:o,rulerLine:c,scaleLabel:u,top:a,layersOpacity:0,layersTarget:0,spec:{},builtExaggerate:null}}function G2(n,e){He.remove(e.group,e.shells),e.group.traverse(t=>{t.geometry?.dispose(),t.material?.map?.dispose(),t.material?.dispose()}),e.shells.traverse(t=>{t.material?.dispose()}),e.layers[0]?.mesh.geometry.dispose(),Qo.delete(n)}const $a=new x,ol=new x,Vh=new x,cl=new x,Um=new xe,Fm=new xe,Nm=new ot,z2=new x(0,0,1),Fn=new x,H2=new x;function Qm(n,e,t){return e>n?Math.min(e,n+t):Math.max(e,n-t)}function V2(n,e,t,i){const s=e/L2;if(n.layersOpacity=Qm(n.layersOpacity,n.layersTarget,s),n.beams.forEach(v=>{v.opacity=Qm(v.opacity,v.target,s)}),n.layersOpacity===0&&n.layersTarget===0&&n.beams.every(v=>v.opacity===0&&v.target===0)){G2(t,n);return}const{obj:r,spec:a}=n;r.mesh.updateWorldMatrix(!0,!1),r.mesh.getWorldPosition($a);const o=r.data.radius||1,l=a.exaggerate??P2,c=Gf(r)*l,u=v=>o+v*c;ol.subVectors(H.position,$a).normalize(),cl.set(0,1,0).applyQuaternion(H.quaternion),Vh.crossVectors(cl,ol).normalize(),cl.crossVectors(ol,Vh),Um.makeBasis(Vh,cl,ol).setPosition($a),n.group.matrix.copy(Um),n.group.matrixWorldNeedsUpdate=!0,n.shells.position.copy($a);const h=(a.angle??45)*Math.PI/180,d=(a.span??40)*Math.PI/180,f=H.position.distanceTo($a),p=(v,E,b,R=0)=>Ux(v,E,f,R,b),m=h-d/2-.05,g=window.innerHeight/(2*f*Math.tan(H.fov*Math.PI/360));let A=0,y=-1/0;n.layers.forEach(v=>{const E=Math.min(v.top_km,n.top*1.15);v.mesh.scale.setScalar(u(E)),v.mesh.visible=n.layersOpacity>0,v.mesh.material.uniforms.uOpacity.value=n.layersOpacity*.4,p(m,u((A+E)/2),v.label.position);const b=u((A+E)/2),R=(b-y)*g>uE*1.3;R&&(y=b),v.label.material.opacity=n.layersOpacity,v.label.visible=n.layersOpacity>0&&R,v.label.material.rotation=m-Math.PI/2,al(v.label),A=E});const _=h+d/2+.06,S=n.rulerLine.geometry.attributes.position;let w=0;const C=()=>S.setXYZ(w++,Fn.x,Fn.y,0);if(p(_,u(0),Fn),C(),p(_,u(n.top),Fn),C(),n.ticks.forEach(v=>{p(_,u(v.km),Fn),C(),p(_+.012,u(v.km),Fn),C(),p(_+.016,u(v.km),v.label.position),v.label.material.rotation=_-Math.PI/2,v.label.center.set(0,.5),v.label.material.opacity=n.layersOpacity*.85,v.label.visible=n.layersOpacity>0,al(v.label)}),S.needsUpdate=!0,n.rulerLine.material.opacity=n.layersOpacity*.6,n.rulerLine.visible=n.layersOpacity>0,n.builtExaggerate!==l){const v=so(`heights × ${l}`,"#ffffff",{weight:400});n.scaleLabel.material.map.dispose(),n.scaleLabel.material.map=v.material.map,n.scaleLabel.userData.aspect=v.userData.aspect,n.scaleLabel.material.needsUpdate=!0,n.builtExaggerate=l}p(_+.07,u(n.top*.5),n.scaleLabel.position),n.scaleLabel.center.set(.5,.5),n.scaleLabel.material.rotation=_-Math.PI/2+Math.PI/2,n.scaleLabel.material.opacity=n.layersOpacity*.7,n.scaleLabel.visible=n.layersOpacity>0,al(n.scaleLabel);const B=n.beams.length,P=o*U2;n.beams.forEach((v,E)=>{const b=h+d/2-(B>1?d*E/(B-1):d/2),R=u(n.top),U=u(Math.max(0,v.stops_km)),Q=v.opacity>0;if(v.beam.visible=v.glow.visible=v.label.visible=Q,!Q)return;const F=v.beam.geometry.attributes.position,k=v.beam.geometry.attributes.uv;for(let X=0;X<F.count;X++)p(b,U+k.getY(X)*(R-U),Fn,(k.getX(X)-.5)*P),F.setXYZ(X,Fn.x,Fn.y,Fn.z);F.needsUpdate=!0,v.beam.matrix.identity(),v.beam.matrixWorldNeedsUpdate=!0,Nm.setFromAxisAngle(z2,b-Math.PI/2),v.beam.material.uniforms.uOpacity.value=v.opacity,v.beam.material.uniforms.uTime.value=i,p(b,U,Fn),Fm.compose(Fn,Nm,H2.set(P*7,P*7,1)),v.glow.matrix.copy(Fm),v.glow.matrixWorldNeedsUpdate=!0,v.glow.material.uniforms.uOpacity.value=v.opacity,v.glow.material.uniforms.uTime.value=i+E,p(b,R+o*.03,v.label.position),v.label.center.set(0,.5),v.label.material.rotation=b,v.label.material.opacity=v.opacity,al(v.label)})}function W2(){[...Qo.keys()].forEach(n=>hE(n,null))}function q2(n,e){for(const[t,i]of[...Qo])V2(i,n,t,e)}const Om=.8,X2=2.5,Y2=30,Oo=new Map;let Wh=null;function K2(n){return new Mt({transparent:!0,depthWrite:!1,blending:ms,toneMapped:!1,side:kt,uniforms:{uOpacity:{value:0},uColour:{value:new Se(n)},uTime:{value:0}},vertexShader:`
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
            }`})}function dE(n,e){const t=Oo.get(n);if(!e)return t&&(t.target=0),Wh===n&&(Jd(null),Wh=null),!0;const i=Z.get(e.from);if(!i)return console.warn(`Pointing "${n}": no object called "${e.from}"`),!1;const s=(e.cone_deg??X2)*Math.PI/180,r=new Ef(Math.tan(s),1,48,1,!0).translate(0,-.5,0),a=t??{id:n,opacity:0};return a.mesh&&(He.remove(a.mesh),a.mesh.geometry.dispose(),a.mesh.material.dispose()),a.mesh=new Je(r,K2(e.colour??"#66EEFA")),a.mesh.frustumCulled=!1,a.mesh.renderOrder=2,a.mesh.visible=!1,He.add(a.mesh),a.obj=i,a.dir=ys({ra:e.ra,dec:e.dec??0}),a.target=e.opacity??1,Oo.set(n,a),e.image&&(Jd({ra:e.ra,dec:e.dec??0,image:e.image,size_deg:e.size_deg}),Wh=n),!0}const J2=new x(0,-1,0),qh=new x;function Z2(n,e){for(const t of[...Oo.values()]){if(t.opacity=t.target>t.opacity?Math.min(t.target,t.opacity+n/Om):Math.max(t.target,t.opacity-n/Om),t.opacity===0&&t.target===0){He.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),Oo.delete(t.id);continue}t.obj.mesh.updateWorldMatrix(!0,!1),t.obj.mesh.getWorldPosition(qh),t.mesh.position.copy(qh),t.mesh.quaternion.setFromUnitVectors(J2,t.dir),t.mesh.scale.setScalar(Math.max(1e-6,H.position.distanceTo(qh)*Y2)),t.mesh.visible=t.obj.group.visible,t.mesh.material.uniforms.uOpacity.value=t.opacity,t.mesh.material.uniforms.uTime.value=e}}function j2(){[...Oo.keys()].forEach(n=>dE(n,null))}let km=0;const $2=window.devicePixelRatio,fE=Math.min($2,1.25),eo=[1,.85,.72],eD=13,tD=9,nD=40,iD=3e3,It={step:0,changedAt:0,lastFrame:0,gpu:[],intervals:[],timer:null};function sD(){const n=ke.getContext(),e=n.getExtension("EXT_disjoint_timer_query_webgl2");return e?{gl:n,ext:e,pending:[],query:null}:null}function rD(n){It.lastFrame&&n-It.lastFrame<250&&Gm(It.intervals,n-It.lastFrame),It.lastFrame=n;const e=It.timer;if(!e)return;const{gl:t,ext:i}=e,s=t.getParameter(i.GPU_DISJOINT_EXT);for(;e.pending.length&&t.getQueryParameter(e.pending[0],t.QUERY_RESULT_AVAILABLE);){const r=e.pending.shift();s||Gm(It.gpu,t.getQueryParameter(r,t.QUERY_RESULT)/1e6),t.deleteQuery(r)}e.pending.length<4&&(e.query=t.createQuery(),t.beginQuery(i.TIME_ELAPSED_EXT,e.query))}function aD(n){const e=It.timer;if(e&&e.query&&(e.gl.endQuery(e.ext.TIME_ELAPSED_EXT),e.pending.push(e.query),e.query=null),n-It.changedAt<iD)return;const t=s=>[...s].sort((r,a)=>r-a)[s.length>>1];let i=It.step;if(e){if(It.gpu.length<90)return;const s=t(It.gpu),r=It.step>0?(eo[It.step-1]/eo[It.step])**2:0;s>eD&&It.step<eo.length-1?i++:r&&s*r<tD&&i--}else{if(It.intervals.length<90)return;t(It.intervals)>nD&&It.step<eo.length-1&&i++}i!==It.step&&(It.step=i,It.changedAt=n,It.gpu.length=0,It.intervals.length=0,ke.setPixelRatio(fE*eo[i]))}function Gm(n,e){n.push(e),n.length>120&&n.shift()}const wi=new x,zm=new x,oD=new ot,$d=new ot,ef=new x(0,1,0);function Hm(n,e){n.meshGroup.quaternion.copy(n.axis).multiply($d.setFromAxisAngle(ef,e))}const cD=new ot,lD=new x(1,0,0);function uD(n,e,t){n.meshGroup.quaternion.copy(n.axis).multiply($d.setFromAxisAngle(ef,t)).multiply(cD.setFromAxisAngle(lD,n.tumble.nutation)).multiply($d.setFromAxisAngle(ef,e-t))}const AE=[];function hD(n){AE.push(n)}let Xh=null;function dD(){if(Xh?.length===Z.size)return Xh;const n=[],e=new Set,t=i=>{if(!i||e.has(i))return;e.add(i);const s=i.data;[s.parent,s.lagrange?.body,s.trajectory?.waypoints?.at(-1)?.at].forEach(r=>t(Z.get(r))),n.push(i)};return Z.forEach(t),Xh=n}function pE(){requestAnimationFrame(pE);const n=m1.getDelta(),e=Math.min(n,Xw);x1(e);const t=cr===null?e:0,i=Kn;xT(),KT(),An.setTime(An.getTime()+n*Mx*1e3);const s=Ia(An);if(or.length>0&&ru(),X3(e),Qf(),Df.forEach(a=>{a.uniforms.uTime.value=i}),km++,km%10===0&&J3(),dD().forEach(a=>{const{group:o,meshGroup:l,data:c}=a;if(c.orbit_type==="landed")return;L1(a.orbitLine,s);let u;if(c.orbit_type==="trajectory"){const h=mb(a,s,o.position);K1(a,h)}else if(c.lagrange){const h=Z.get(c.lagrange.body).group.position;wi.copy(h).normalize().multiplyScalar(c.lagrange.offset),o.position.copy(h).add(wi),a.mesh.rotation.set(0,Math.atan2(-h.z,h.x),0)}else if(c.orbit_type==="libration"){const h=Z.get(c.parent);h&&(j0(c.orbit,s,wi).applyQuaternion(h.mesh.quaternion),o.position.copy(h.group.position).add(wi))}else if(c.orbit_type==="suborbital"){const h=Z.get(c.parent);if(h){const d=h.data.radius||1,f=c.suborbital.duration||.05;let p=s;c.suborbital.progress!==void 0&&(p=c.suborbital.progress*f);const m=wg(c.suborbital,d,p),g=wg(c.suborbital,d,p+1e-4);m.applyEuler(h.meshGroup.rotation),g.applyEuler(h.meshGroup.rotation),o.position.set(h.group.position.x+m.x,h.group.position.y+m.y,h.group.position.z+m.z),wi.subVectors(g,m).normalize(),zm.copy(o.position).add(wi),o.lookAt(zm),l.rotation.z-=e*.5}}else if(u=pi(c.orbit,$0(c.orbit,s)),c.parent&&c.parent!=="Sun"){const h=Z.get(c.parent);h&&o.position.set(h.group.position.x+u.x,h.group.position.y+u.y,h.group.position.z+u.z)}else o.position.set(u.x,u.y,u.z);if(!(!o.visible&&!c.isParent))if(c.rotation_mode==="utc"){wi.copy(o.position).negate().applyQuaternion(oD.copy(a.axis).invert());const h=Math.atan2(wi.x,wi.z),d=An.getUTCHours(),f=An.getUTCMinutes(),p=An.getUTCSeconds(),m=An.getUTCMilliseconds(),A=((d+f/60+p/3600+m/36e5)/24-.5)*Math.PI*2;Hm(a,h-Math.PI/2+A)}else if(c.rotation_mode==="locked"&&c.orbit)hb(l,c.orbit,s);else if(c.rot_period){const h=s/c.rot_period*Math.PI*2,d=(c.rot_offset||0)*(Math.PI/180);a.tumble?uD(a,h+d,h/a.tumble.precession+a.tumble.offset):Hm(a,h+d)}else c.type==="mission"&&c.orbit_type!=="suborbital"&&B1(a,i,t,s)}),!B3(e,i))return;jT(),rB(),BB(e),pR(e),rR(e),e2(e),D2(e),q2(e,i),Z2(e,i),GR(e);for(const a of AE)a(e);if(Ut.relative){G1(H.position,s);const a=e_(),o=a&&Z.get(a.userData.name);o?.data.orbit_type==="landed"&&!$f()&&Rf(o)}tr&&tr.update(i,H,{strandsTime:Ca.matches?0:i});const r=performance.now();rD(r),XR(),aD(r)}window.addEventListener("resize",()=>{H.aspect=window.innerWidth/window.innerHeight,H.updateProjectionMatrix(),ke.setSize(window.innerWidth,window.innerHeight),Z.forEach(n=>{n.orbitLine&&n.orbitLine.material.resolution&&n.orbitLine.material.resolution.set(window.innerWidth,window.innerHeight)})});const Yh=new Sn,Vm=new xe,As=new x,ks=new x,Kh=new x,Wm=new x;function gE(n){const e=n.mesh;let t=0,i=0,s=0;if(e.traverse(l=>{l.geometry&&(t++,i+=l.geometry.id,s=Math.imul(s,31)+l.geometry.id|0)}),!t)return null;const r=n.reticleSphereKey;if(r&&r.count===t&&r.sum===i&&r.mix===s)return n.reticleSphere;e.updateWorldMatrix(!0,!0),Vm.copy(e.matrixWorld).invert();const a=new Sn;let o=!0;return e.traverse(l=>{l.geometry&&(l.geometry.boundingSphere||l.geometry.computeBoundingSphere(),Yh.copy(l.geometry.boundingSphere).applyMatrix4(l.matrixWorld).applyMatrix4(Vm),o?(a.copy(Yh),o=!1):a.union(Yh))}),n.reticleSphereKey={count:t,sum:i,mix:s},n.reticleSphere=a,a}function fD(n){if(!n||!n.mesh||!mn(n.group))return null;n.mesh.updateWorldMatrix(!0,!1);const e=gE(n);if(!e)return null;ks.copy(e.center).applyMatrix4(n.mesh.matrixWorld),n.mesh.getWorldScale(As);const t=e.radius*Math.max(As.x,As.y,As.z),i=H.position.distanceTo(ks),s=i<=t;if(Wm.setFromMatrixColumn(H.matrixWorld,1),Kh.copy(ks).addScaledVector(Wm,t).project(H),ks.project(H),ks.z>1)return null;const r=window.innerWidth,a=window.innerHeight,o=(ks.x*.5+.5)*r,l=(-ks.y*.5+.5)*a,c=(Kh.x*.5+.5)*r,u=(-Kh.y*.5+.5)*a;return{cx:o,cy:l,bodyR:s?1/0:Math.hypot(c-o,u-l),distance:i,w:r,h:a}}const AD=new Set(["planet","moon","asteroid","comet"]);function pD(n){const e=[];for(const t of n){if(!AD.has(t.data.type)||!t.mesh||!mn(t.group))continue;const i=gE(t);i&&(t.mesh.updateWorldMatrix(!0,!1),t.mesh.getWorldScale(As),e.push({obj:t,centre:i.center.clone().applyMatrix4(t.mesh.matrixWorld),r:i.radius*Math.max(As.x,As.y,As.z)*.999}))}return e}const qm=new x,ll=new x,Xm=new x;function gD(n,e){if(!n||!n.mesh)return null;n.mesh.getWorldPosition(qm),ll.subVectors(qm,H.position);const t=ll.lengthSq();if(!(t>0))return null;let i=null,s=1/0;for(const{obj:r,centre:a,r:o}of e){if(r===n)continue;const l=at.clamp(Xm.subVectors(a,H.position).dot(ll)/t,0,1);l<1&&l<s&&Xm.copy(H.position).addScaledVector(ll,l).distanceToSquared(a)<o*o&&(i=r,s=l)}return i}const tf=new Zl,Jh=new Me;function mD(n){for(let e=n;e;e=e.parent){if(!e.visible)return!1;if(e===He)return!0}return!1}function xD(n){const e=[],t=i=>{i.visible&&(i.layers.test(tf.layers)&&i.raycast(tf,e),i.children.forEach(t))};return n.forEach(i=>{mD(i)&&t(i)}),e.sort((i,s)=>i.distance-s.distance)}function _D(n,e){Jh.x=n/window.innerWidth*2-1,Jh.y=-(e/window.innerHeight)*2+1,tf.setFromCamera(Jh,H);const t=xD(Rd);if(!t.length)return null;let i=t[0].object,s=0;for(;i&&!i.userData.name&&s<10;)i=i.parent,s++;return i&&i.userData&&i.userData.name?i.userData.name:null}const ED="#66EEFA";let mE=new Set,xE=new Set;function yD({hovered:n=[],shown:e=[]}={}){mE=new Set(n),xE=new Set(e),hu()}function hu(){let n=null;Z.forEach(e=>{e.mesh===ue&&e.data.type==="reference_point"&&(n=e.data.name)}),Z.forEach(e=>{if(e.orbitLine&&e.orbitLine.material){const t=mE.has(e.data.name),i=ue===e.mesh||n!==null&&e.data.parent===n,s=xE.has(e.data.name),r=e.orbitLine.material,a=e.orbitLine.userData.baseColor||"#888888",o=e.orbitLine.userData.baseOpacity||.35;t||i||s?(r.opacity=.95,r.color.set(ED)):(r.opacity=o,r.color.set(a))}})}au("select",hu);au("deselect",hu);au("orbit-change",hu);const vD=4,MD=.04,Wl=new Zl,Zh=new x,Ym=new x,Km=new Me,ul=new x,Jm=new Map;function rA(n){return(n.data.built?.modelSize??n.data.model_size??1)/2}function _E(n){return n.detailRoot?.children.find(e=>e.visible)??null}function SD(n,e,t){return!n?.detailRoot||!Array.isArray(e)?null:(n.mesh.updateWorldMatrix(!0,!1),t.set(e[0]||0,e[1]||0,e[2]||0).multiplyScalar(rA(n)).applyMatrix4(n.mesh.matrixWorld))}function CD(n,e,t){const i=`${n.data.name}|${e.join(",")}`,s=ke.info.render.frame,r=Jm.get(i);if(r&&s-r.frame<vD&&s>=r.frame)return r.hidden;const a=_E(n);let o=!1;if(a){Zh.subVectors(t,H.position);const l=Zh.length();Wl.set(H.position,Zh.normalize());const c=su(Wl,a);n.mesh.getWorldScale(Ym);const u=MD*2*rA(n)*Ym.x;o=!!c&&c.distance<l-u}return Jm.set(i,{frame:s,hidden:o}),o}function ID(n,e,t){const i=Z.get(n),s=i&&_E(i);if(!s||!mn(i.group))return null;H.updateMatrixWorld(),Km.set(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),Wl.setFromCamera(Km,H);const r=su(Wl,s);return r?(i.mesh.updateWorldMatrix(!0,!1),ul.copy(r.point).applyMatrix4(i.mesh.matrixWorld.clone().invert()).divideScalar(rA(i)),[ul.x,ul.y,ul.z].map(a=>Math.round(a*1e3)/1e3)):null}Tf.onProgress=function(n,e,t){nn("progress",{progress:e/t})};let aA=!1;const hl={frame:-1,spheres:[]};function wD(){const n=ke.info.render.frame;return hl.frame!==n&&(hl.frame=n,hl.spheres=pD(Z.values())),hl.spheres}const Tn={frame:-1,view:new xe,lens:new xe,w:0,h:0,places:new Map,hiders:new Map};function EE(){const n=ke.info.render.frame;return(Tn.frame!==n||!Tn.view.equals(H.matrixWorld)||!Tn.lens.equals(H.projectionMatrix)||Tn.w!==window.innerWidth||Tn.h!==window.innerHeight)&&(Tn.frame=n,Tn.view.copy(H.matrixWorld),Tn.lens.copy(H.projectionMatrix),Tn.w=window.innerWidth,Tn.h=window.innerHeight,Tn.places.clear(),Tn.hiders.clear()),Tn}function Zm(n){const{hiders:e}=EE();return e.has(n)||e.set(n,gD(Z.get(n),wD())),e.get(n)}Tf.onLoad=()=>{aA&&bD()};let jm=!1;function bD(){if(jm){e0();return}jm=!0,performance.mark("warmup-start");const n=ax(He);He.background&&He.background.isTexture&&n.add(He.background),n.forEach(t=>{try{ke.initTexture(t)}catch(i){console.warn("Texture upload failed",i)}});const e=5e3;Promise.race([Promise.all([ke.compileAsync(He,H),cx(He)]).then(()=>performance.mark("warmup-shaders-ready")).catch(t=>console.warn("Shader warm-up failed",t)),new Promise(t=>setTimeout(t,e))]).then(e0)}let $m=!1;function e0(){$m||($m=!0,performance.mark("scene-ready"),yE(),nn("ready"))}function yE(){NR(),i1()}function UD({canvas:n,dataUrl:e="./data.json",options:t={}}={}){for(const s of Object.keys(da))s in t&&(da[s]=t[s]);return Lb(n),ke.setPixelRatio(fE),ke.setSize(window.innerWidth,window.innerHeight),ke.shadowMap.enabled=!0,ke.shadowMap.type=nf,ke.toneMapping=s0,ke.toneMappingExposure=1.2,ke.debug.checkShaderErrors=!1,It.timer=sD(),J_.detectSupport(ke),K_.forEach(s=>fetch(`textures/milky_way_${s}.ktx2`).catch(()=>{})),G3(),{canvas:ke.domElement,start(){RD(e),pE()},on:au,onFrame:hD,flyTo:C3,showOverview:i_,deselect:n_,hurry(){q3(),Kf()},isChangingScale:$f,getDate:E1,setDate:y1,setTimeRate:v1,holdOrbits(s,r){fb(s,r),Dx()},getObject:n0,listObjects:vE,projectBody(s){H.updateMatrixWorld();const{places:r}=EE();if(r.has(s))return r.get(s);const a=fD(Z.get(s)),o=a&&{x:a.cx,y:a.cy,radius:a.bodyR,distance:a.distance};return r.set(s,o),o},projectPoint(s,{lat:r=0,lon:a=0,alt_km:o=0}={}){const l=Z.get(s);if(!l||!mn(l.group))return null;H.updateMatrixWorld(),vB(l,r,a,o,on,t0);const c=t0.dot(TD.subVectors(H.position,on))>0;return on.project(H),on.z>1?null:{x:(on.x*.5+.5)*window.innerWidth,y:(-on.y*.5+.5)*window.innerHeight,facing:c}},projectPart(s,r){const a=Z.get(s);if(!a||!mn(a.group)||(H.updateMatrixWorld(),!SD(a,r,on)))return null;const o=CD(a,r,on);return on.project(H),on.z>1?null:{x:(on.x*.5+.5)*window.innerWidth,y:(-on.y*.5+.5)*window.innerHeight,hidden:o}},pickPart:ID,projectSky(s,r=0){return H.updateMatrixWorld(),on.copy(ys({ra:s,dec:r})).multiplyScalar(H.far*.1).add(H.position).project(H),on.z>1?null:{x:(on.x*.5+.5)*window.innerWidth,y:(-on.y*.5+.5)*window.innerHeight}},setPointing:dE,clearPointings:j2,setSkySurvey:OR,setSkyPatch:Jd,addLayer:jR,removeLayer:tA,clearLayers:$R,setSurfaceOverlay:iE,setMagnetosphere:oE,addCme:w2,removeCme:iA,cmeArrival:B2,clearSpaceWeather:R2,getStormLevel:lE,setAtmosphere:hE,clearAtmospheres:W2,setSunCycle(s){if(!tr)return;if(!s){tr.setCycle(null);return}const{map:r,at:a,look:o,gain:l}=s;tr.setCycle({map:r?BD(r):void 0,u:a,gain:l,look:o===void 0?void 0:o==="magnetogram"?1:0})},isHidden(s){return!!Zm(s)},hiddenBehind(s){return Zm(s)?.data.name??null},getSelection(){return ue?ue.userData:null},getTime(){return An.getTime()},getSystem:ar,getOrbitColor(s){return kd(n0(s))},pick:_D,setOrbitHighlights:yD,setScaleMode:DD,getScaleMode:()=>Li,setMotionPaused(s){_1(s?Kn:null)},setViewInsets:bB,setFlightPace:d3,setUserControl:I3,setSceneVisible:TR,loadDeferred:yE}}const on=new x,t0=new x,TD=new x,jh=new Map;function BD(n){if(!jh.has(n)){const e=zo.load(vs(n),void 0,void 0,()=>console.warn(`Solar cycle map didn't load: ${n}`));e.wrapS=e.wrapT=On,jh.set(n,e)}return jh.get(n)}async function RD(n){try{const e=await fetch(n);if(!e.ok)throw new Error(`data.json responded ${e.status}`);const t=await e.json(),i=t.filter(r=>r.type==="credits"),s=LD(t.filter(r=>r.type!=="credits"),da.edition);s.forEach(PD),iu(s),Y1(s),ru(),nn("built",{entries:[...s,...i]}),aA=!0,performance.mark("system-ready")}catch(e){console.error("Loading System Failed:",e),nn("error",{error:e})}}function DD(n,{animate:e=!0}={}){if(!xb.includes(n))throw new Error(`Unknown scale mode: ${n}`);if(!aA)return;if($f()||e&&!Ca.matches){W3(n);return}if(n===Li)return;const t=vE();iu(t,n),J1(),new Set(t.filter(i=>i.orbit_type==="landed").map(i=>i.parent)).forEach(i=>{const s=Z.get(i);s&&Ho(s)}),D3(),nn("scale-mode",{mode:n})}function vE(){return[...Z.values()].map(n=>n.data)}function n0(n){return Z.get(n)?.data??null}function LD(n,e){if(!e)return n;const t=new Map(n.filter(s=>s.editions?.includes(e)).map(s=>[s.name,s])),i=s=>[s.parent,s.menu_parent,s.system].filter(Boolean);for(let s=!0;s;){s=!1;for(const[r,a]of t){const o=i(a).find(l=>!t.has(l));o&&(console.warn(`"${r}" is in the ${e} edition, but "${o}" isn't; left out`),t.delete(r),s=!0)}}return n.filter(s=>t.has(s.name)).map(s=>{const r=s.in_edition?.[e];if(!r)return s;const a={...s};return Object.entries(r).forEach(([o,l])=>{a[o]=l&&typeof l=="object"&&!Array.isArray(l)?{...s[o],...l}:l}),a})}function PD(n){if(!Array.isArray(n.status_timeline))return;const e=new Date().toISOString().slice(0,10);for(const t of n.status_timeline)t.from&&t.status&&t.from<=e&&(n.status=t.status)}export{UD as c};
