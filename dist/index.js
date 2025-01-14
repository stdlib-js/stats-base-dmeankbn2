"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var i=n(function(O,s){
var f=require('@stdlib/blas-ext-base-dsumkbn2/dist').ndarray;function y(r,e,a,u){return r<=0?NaN:r===1||a===0?e[u]:f(r,e,a,u)/r}s.exports=y
});var d=n(function(g,v){
var b=require('@stdlib/strided-base-stride2offset/dist'),k=i();function p(r,e,a){return k(r,e,a,b(r,a))}v.exports=p
});var m=n(function(h,q){
var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=d(),x=i();j(o,"ndarray",x);q.exports=o
});var l=require("path").join,R=require('@stdlib/utils-try-require/dist'),_=m(),t,c=R(l(__dirname,"./native.js"));c instanceof Error?t=_:t=c;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
