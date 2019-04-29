/**
 * jQuery(selector[,context])
 */

 (function (global, factory) {

     "use strict";

     if (typeof module === "object" && typeof module.exports === "object") {
         module.exports = global.document ?
             factory(global, true) :
             function (w) {
                 if (!w.document) {
                     throw new Error("jQuery requires a window with a document");
                 }
                 return factory(w);
             };
     } else {
         factory(global);
     }

     // 如果尚未定义此窗口，则传递此窗口
 })(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
	// 定义jQuery的本地副本
	jQuery = function (selector, context) {
	    return new jQuery.fn.init(selector, context);
    },
    //局部变量(原型属性和方法)的声明
    jQuery.fn = jQuery.prototype = {

            // The current version of jQuery being used
            jquery: version,
            constructor: jQuery,
            // The default length of a jQuery object is 0
            length: 0,
            toArray: function () {
                return slice.call(this);
            },
    
    },
    jQuery.extend = jQuery.fn.extend = function () {}

    jQuery.extend({/**静态属性和方法 */});
    return jQuery;
 })