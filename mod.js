// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,a=e.__defineSetter__,i=e.__lookupGetter__,f=e.__lookupSetter__;var c=t,l=function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),v&&a&&a.call(r,n,t.set),r},y=n()?c:l;var v=function(r,n,t){y(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var p=function(r){return r!=r},b=Math.floor,w=Math.ceil,A=b,N=w;var _=function(r){return r<0?N(r):A(r)},m=Number.NEGATIVE_INFINITY,d=Number.POSITIVE_INFINITY,s=d,h=m;var U=function(r){return r===s||r===h};var j=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var g=function(){return j&&"symbol"==typeof Symbol.toStringTag},I=Object.prototype.toString,O=I;var S=function(r){return O.call(r)},E=Object.prototype.hasOwnProperty;var F=function(r,n){return null!=r&&E.call(r,n)},H="function"==typeof Symbol?Symbol.toStringTag:"",T=F,G=H,P=I;var L=S,M=function(r){var n,t,e;if(null==r)return P.call(r);t=r[G],n=T(r,G);try{r[G]=void 0}catch(n){return P.call(r)}return e=P.call(r),n?r[G]=t:delete r[G],e},V=g()?M:L,W=V,x="function"==typeof Uint32Array;var k="function"==typeof Uint32Array?Uint32Array:null,Y=function(r){return x&&r instanceof Uint32Array||"[object Uint32Array]"===W(r)},q=k;var C=function(){var r,n;if("function"!=typeof q)return!1;try{n=new q(n=[1,3.14,-3.14,4294967296,4294967297]),r=Y(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var z="function"==typeof Uint32Array?Uint32Array:void 0,B=function(){throw new Error("not implemented")},D=C()?z:B,J=V,K="function"==typeof Float64Array;var Q="function"==typeof Float64Array?Float64Array:null,R=function(r){return K&&r instanceof Float64Array||"[object Float64Array]"===J(r)},X=Q;var Z=function(){var r,n;if("function"!=typeof X)return!1;try{n=new X([1,3.14,-3.14,NaN]),r=R(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var $="function"==typeof Float64Array?Float64Array:void 0,rr=function(){throw new Error("not implemented")},nr=Z()?$:rr,tr=V,er="function"==typeof Uint8Array;var or="function"==typeof Uint8Array?Uint8Array:null,ur=function(r){return er&&r instanceof Uint8Array||"[object Uint8Array]"===tr(r)},ar=or;var ir=function(){var r,n;if("function"!=typeof ar)return!1;try{n=new ar(n=[1,3.14,-3.14,256,257]),r=ur(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var fr="function"==typeof Uint8Array?Uint8Array:void 0,cr=function(){throw new Error("not implemented")},lr=ir()?fr:cr,yr=V,vr="function"==typeof Uint16Array;var pr="function"==typeof Uint16Array?Uint16Array:null,br=function(r){return vr&&r instanceof Uint16Array||"[object Uint16Array]"===yr(r)},wr=pr;var Ar=function(){var r,n;if("function"!=typeof wr)return!1;try{n=new wr(n=[1,3.14,-3.14,65536,65537]),r=br(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Nr,_r="function"==typeof Uint16Array?Uint16Array:void 0,mr=function(){throw new Error("not implemented")},dr={uint16:Ar()?_r:mr,uint8:lr};(Nr=new dr.uint16(1))[0]=4660;var sr,hr,Ur=52===new dr.uint8(Nr.buffer)[0];!0===Ur?(sr=1,hr=0):(sr=0,hr=1);var jr=D,gr={HIGH:sr,LOW:hr},Ir=new nr(1),Or=new jr(Ir.buffer),Sr=gr.HIGH,Er=gr.LOW;var Fr=function(r,n){return Ir[0]=n,r[0]=Or[Sr],r[1]=Or[Er],r};var Hr=function(r,n){return 1===arguments.length?Fr([0,0],r):Fr(r,n)},Tr=D,Gr=!0===Ur?1:0,Pr=new nr(1),Lr=new Tr(Pr.buffer);var Mr,Vr,Wr=function(r){return Pr[0]=r,Lr[Gr]};!0===Ur?(Mr=1,Vr=0):(Mr=0,Vr=1);var xr=D,kr={HIGH:Mr,LOW:Vr},Yr=new nr(1),qr=new xr(Yr.buffer),Cr=kr.HIGH,zr=kr.LOW;var Br=function(r,n){return qr[Cr]=r,qr[zr]=n,Yr[0]},Dr=Hr,Jr=Wr,Kr=Br,Qr=[0,0];var Rr=U,Xr=p,Zr=function(r){return Math.abs(r)};var $r=function(r,n){return Xr(n)||Rr(n)?(r[0]=n,r[1]=0,r):0!==n&&Zr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var rn=Wr;var nn=function(r){var n=rn(r);return(n=(2146435072&n)>>>20)-1023|0},tn=d,en=m,on=p,un=U,an=function(r,n){var t,e;return Dr(Qr,r),t=Qr[0],t&=2147483647,e=Jr(n),Kr(t|=e&=2147483648,Qr[1])},fn=function(r,n){return 1===arguments.length?$r([0,0],r):$r(r,n)},cn=nn,ln=Hr,yn=Br,vn=[0,0],pn=[0,0];var bn=function(r,n){var t,e;return 0===n||0===r||on(r)||un(r)?r:(fn(vn,r),n+=vn[1],(n+=cn(r=vn[0]))<-1074?an(0,r):n>1023?r<0?en:tn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,ln(pn,r),t=pn[0],t&=2148532223,e*yn(t|=n+1023<<20,pn[1])))};var wn=bn,An=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Nn=p,_n=_,mn=m,dn=d,sn=function(r,n,t){var e,o,u;return u=(e=r-n)-(o=e*e)*An(o),wn(1-(n-e*u/(2-u)-r),t)};var hn=function(r){var n;return Nn(r)||r===dn?r:r===mn?0:r>709.782712893384?dn:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(n=_n(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),sn(r-.6931471803691238*n,1.9082149292705877e-10*n,n))},Un=D,jn=!0===Ur?0:1,gn=new nr(1),In=new Un(gn.buffer);var On=function(r,n){return gn[0]=r,In[jn]=n>>>0,gn[0]};var Sn=p,En=hn,Fn=On,Hn=d,Tn=m,Gn=function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015},Pn=function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))},Ln=function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)},Mn=function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))},Vn=function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818},Wn=function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))},xn=function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523},kn=function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))},Yn=.8450629115104675;var qn=function(r){var n,t,e,o,u,a,i,f;if(Sn(r))return NaN;if(r===Hn)return 0;if(r===Tn)return 2;if(0===r)return 1;if(r<0?(n=!0,t=-r):(n=!1,t=r),t<.84375)return t<13877787807814457e-33?1-r:(a=(o=.12837916709551256+(e=r*r)*Gn(e))/(u=1+e*Pn(e)),r<.25?1-(r+r*a):(o=r*a,.5-(o+=r-.5)));if(t<1.25)return i=(u=t-1)*Ln(u)-.0023621185607526594,f=1+u*Mn(u),n?1+Yn+i/f:1-Yn-i/f;if(t<28){if(u=1/(t*t),t<2.857142857142857)o=u*Vn(u)-.009864944034847148,u=1+u*Wn(u);else{if(r<-6)return 2;o=u*xn(u)-.0098649429247001,u=1+u*kn(u)}return e=Fn(t,0),o=En(-e*e-.5625)*En((e-t)*(e+t)+o/u),n?2-o/t:o/t}return n?2:0},Cn=Math.sqrt,zn=qn,Bn=Cn,Dn=p;var Jn=function(r,n,t){var e;return Dn(r)||Dn(n)||Dn(t)||t<0?NaN:0===t?r<n?0:1:(e=t*Bn(2),.5*zn(-(r-n)/e))};var Kn=function(r){return function(){return r}},Qn=p;var Rn=Kn,Xn=p;var Zn=function(r,n){return Qn(r)||Qn(n)?NaN:r<n?0:1};v(Zn,"factory",(function(r){return Xn(r)?Rn(NaN):function(n){if(Xn(n))return NaN;return n<r?0:1}}));var $n=Kn,rt=Zn.factory,nt=p,tt=Cn,et=qn;var ot=Jn;v(ot,"factory",(function(r,n){var t;return nt(r)||nt(n)||n<0?$n(NaN):0===n?rt(r):(t=n*tt(2),function(n){if(nt(n))return NaN;return.5*et(-(n-r)/t)})}));var ut=ot,at=D,it=!0===Ur?1:0,ft=new nr(1),ct=new at(ft.buffer);var lt=function(r,n){return ft[0]=r,ct[it]=n>>>0,ft[0]};var yt=Wr,vt=lt,pt=p,bt=m,wt=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},At=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},Nt=.6931471803691238,_t=1.9082149292705877e-10;var mt=function(r){var n,t,e,o,u,a,i,f,c,l,y;return 0===r?bt:pt(r)||r<0?NaN:(o=0,(t=yt(r))<1048576&&(o-=54,t=yt(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-1023|0,o+=(i=(t&=1048575)+614244&1048576|0)>>20|0,a=(r=vt(r,t|1072693248^i))-1,(1048575&2+t)<3?0===a?0===o?0:o*Nt+o*_t:(u=a*a*(.5-.3333333333333333*a),0===o?a-u:o*Nt-(u-o*_t-a)):(i=t-398458|0,f=440401-t|0,e=(l=(y=(c=a/(2+a))*c)*y)*wt(l),u=y*At(l)+e,(i|=f)>0?(n=.5*a*a,0===o?a-(n-c*(n+u)):o*Nt-(n-(c*(n+u)+o*_t)-a)):0===o?a-c*(a-u):o*Nt-(c*(a-u)-o*_t-a))))};function dt(r,n,t){return p(r)||p(n)||p(t)||t<=0?NaN:r<=0?0:ut(mt(r),n,t)}function st(r,n){return p(r)||p(n)||n<=0?Kn(NaN):function(t){if(p(t))return NaN;if(t<=0)return 0;return ut(mt(t),r,n)}}v(dt,"factory",st);export{dt as default,st as factory};
//# sourceMappingURL=mod.js.map
