!function(e){"use strict";var o,s,t,n,i,r,a,h,l,p,f,u,c,d,v,m,y=(s="sf-breadcrumb",t="sf-js-enabled",n="sf-with-ul",i="sf-arrows",r=function(){var o=/iPhone|iPad|iPod/i.test(navigator.userAgent);return o&&e(window).on("load",function(){e("body").children().on("click",e.noop)}),o}(),a="behavior"in(o=document.documentElement.style)&&"fill"in o&&/iemobile/i.test(navigator.userAgent),h=function(e,o){var s=t;o.cssArrows&&(s+=" "+i),e.toggleClass(s)},l=function(e){e.children("a").toggleClass(n)},p=function(e){var o=e.css("ms-touch-action");o="pan-y"===o?"auto":"pan-y",e.css("ms-touch-action",o)},f=function(o){var s=e(this),t=s.siblings(o.data.popUpSelector);t.length>0&&t.is(":hidden")&&(s.one("click.superfish",!1),"MSPointerDown"===o.type?s.trigger("focus"):e.proxy(u,s.parent("li"))())},u=function(){var o=e(this),s=m(o);clearTimeout(s.sfTimer),o.siblings().superfish("hide").end().superfish("show")},c=function(){var o=e(this),s=m(o);r?e.proxy(d,o,s)():(clearTimeout(s.sfTimer),s.sfTimer=setTimeout(e.proxy(d,o,s),s.delay))},d=function(o){o.retainPath=e.inArray(this[0],o.$path)>-1,this.superfish("hide"),this.parents("."+o.hoverClass).length||(o.onIdle.call(v(this)),o.$path.length&&e.proxy(u,o.$path)())},v=function(e){return e.closest("."+t)},m=function(e){return v(e).data("sf-options")},{hide:function(o){if(this.length){var s=m(this);if(!s)return this;var t=!0===s.retainPath?s.$path:"",n=this.find("li."+s.hoverClass).add(this).not(t).removeClass(s.hoverClass).children(s.popUpSelector),i=s.speedOut;o&&(n.show(),i=0),s.retainPath=!1,s.onBeforeHide.call(n),n.stop(!0,!0).animate(s.animationOut,i,function(){var o=e(this);s.onHide.call(o)})}return this},show:function(){var e=m(this);if(!e)return this;var o=this.addClass(e.hoverClass).children(e.popUpSelector);return e.onBeforeShow.call(o),o.stop(!0,!0).animate(e.animation,e.speed,function(){e.onShow.call(o)}),this},destroy:function(){return this.each(function(){var o,t=e(this),n=t.data("sf-options");if(!n)return!1;o=t.find(n.popUpSelector).parent("li"),clearTimeout(n.sfTimer),h(t,n),l(o),p(t),t.off(".superfish").off(".hoverIntent"),o.children(n.popUpSelector).attr("style",function(e,o){return o.replace(/display[^;]+;?/g,"")}),n.$path.removeClass(n.hoverClass+" "+s).addClass(n.pathClass),t.find("."+n.hoverClass).removeClass(n.hoverClass),n.onDestroy.call(t),t.removeData("sf-options")})},init:function(o){return this.each(function(){var t=e(this);if(t.data("sf-options"))return!1;var n=e.extend({},e.fn.superfish.defaults,o),i=t.find(n.popUpSelector).parent("li");n.$path=function(o,t){return o.find("li."+t.pathClass).slice(0,t.pathLevels).addClass(t.hoverClass+" "+s).filter(function(){return e(this).children(t.popUpSelector).hide().show().length}).removeClass(t.pathClass)}(t,n),t.data("sf-options",n),h(t,n),l(i),p(t),function(o,s){var t="li:has("+s.popUpSelector+")";e.fn.hoverIntent&&!s.disableHI?o.hoverIntent(u,c,t):o.on("mouseenter.superfish",t,u).on("mouseleave.superfish",t,c);var n="MSPointerDown.superfish";r||(n+=" touchend.superfish"),a&&(n+=" mousedown.superfish"),o.on("focusin.superfish","li",u).on("focusout.superfish","li",c).on(n,"a",s,f)}(t,n),i.not("."+s).superfish("hide",!0),n.onInit.call(this)})}});e.fn.superfish=function(o,s){return y[o]?y[o].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof o&&o?e.error("Method "+o+" does not exist on jQuery.fn.superfish"):y.init.apply(this,arguments)},e.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:e.noop,onBeforeShow:e.noop,onShow:e.noop,onBeforeHide:e.noop,onHide:e.noop,onIdle:e.noop,onDestroy:e.noop},e.fn.extend({hideSuperfishUl:y.hide,showSuperfishUl:y.show})}(jQuery);