// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-normal-cdf@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.4-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";function i(t,r,i){return e(t)||e(r)||e(i)||i<=0?NaN:t<=0?0:s(n(t),r,i)}function d(t,i){return e(t)||e(i)||i<=0?r(NaN):function(r){if(e(r))return NaN;if(r<=0)return 0;return s(n(r),t,i)}}t(i,"factory",d);export{i as default,d as factory};
//# sourceMappingURL=index.mjs.map