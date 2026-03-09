"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=a(function(R,c){
var s=require('@stdlib/stats-base-dists-normal-cdf/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-special-ln/dist');function l(e,r,n){return u(e)||u(r)||u(n)||n<=0?NaN:e<=0?0:s(N(e),r,n)}c.exports=l
});var q=a(function(b,o){
var y=require('@stdlib/utils-constant-function/dist'),d=require('@stdlib/stats-base-dists-normal-cdf/dist'),i=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-ln/dist');function F(e,r){if(i(e)||i(r)||r<=0)return y(NaN);return n;function n(t){return i(t)?NaN:t<=0?0:d(p(t),e,r)}}o.exports=F
});var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=f(),D=q();C(v,"factory",D);module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
