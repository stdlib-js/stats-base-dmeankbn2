"use strict";var a=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=a(function(E,t){
var b=require('@stdlib/blas-ext-base-dsumkbn2/dist');function f(r,e,n){return r<=0?NaN:r===1||n===0?e[0]:b(r,e,n)/r}t.exports=f
});var d=a(function(O,v){
var k=require('@stdlib/blas-ext-base-dsumkbn2/dist').ndarray;function p(r,e,n,u){return r<=0?NaN:r===1||n===0?e[u]:k(r,e,n,u)/r}v.exports=p
});var q=a(function(g,o){
var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=s(),j=d();y(m,"ndarray",j);o.exports=m
});var l=require("path").join,x=require('@stdlib/utils-try-require/dist'),R=q(),i,c=x(l(__dirname,"./native.js"));c instanceof Error?i=R:i=c;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
