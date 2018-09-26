var _createClass=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function DonateForm(){var e,a,o=$(".js-donate-form");e=o.data("nrh-endpoint-domain"),o.on("change",".js-donate-form-frequency",function(){var t=void 0;t=""===$(this).val()?"/donateform":"/memberform",o.attr("action",e+t)}),a=void 0,o.on("change",".js-donate-form-frequency",function(){var t=o.find(".js-donate-form-amount"),e=$(this).val(),n=parseInt(t.val()),i=n;"yearly"===e&&""!==a||""===e&&"yearly"!==a?i=12*n:"monthly"===e&&(i=n/12),i=Math.ceil(i),t.val(i),a=e})}function localStorageCookie(t,e){var n=!1;if(function(t){try{var e=window[t],n="__storage_test__";return e.setItem(n,n),e.removeItem(n),!0}catch(t){return!1}}("localStorage")&&(n=!0),null!=e&&("object"===(void 0===e?"undefined":_typeof(e))&&(e=JSON.stringify(e)),n?localStorage.setItem(t,e):o(t,e,30)),void 0===e){if(n)var i=localStorage.getItem(t);else i=function(t){for(var e=t+"=",n=document.cookie.split(";"),i=0,a=n.length;i<a;i++){for(var o=n[i];" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(e))return o.substring(e.length,o.length)}return null}(t);try{var a=JSON.parse(i)}catch(t){a=i}return a}function o(t,e,n){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3);var a="; expires="+i.toGMTString();document.cookie=t+"="+e+a+"; path=/"}null===e&&(n?localStorage.removeItem(t):o(t,"",-1))}!function(c,l,a,o){"use strict";var t,e;t=["foundation-mq-small","foundation-mq-small-only","foundation-mq-medium","foundation-mq-medium-only","foundation-mq-large","foundation-mq-large-only","foundation-mq-xlarge","foundation-mq-xlarge-only","foundation-mq-xxlarge","foundation-data-attribute-namespace"],(e=c("head")).prepend(c.map(t,function(t){if(0===e.has("."+t).length)return'<meta class="'+t+'" />'})),c(function(){"undefined"!=typeof FastClick&&void 0!==a.body&&FastClick.attach(a.body)});var u=function(t,e){if("string"==typeof t){if(e){var n;if(e.jquery){if(!(n=e[0]))return e}else n=e;return c(n.querySelectorAll(t))}return c(a.querySelectorAll(t))}return c(t,e)},n=function(t){var e=[];return t||e.push("data"),0<this.namespace.length&&e.push(this.namespace),e.push(this.name),e.join("-")},i=function(t){for(var e=t.split("-"),n=e.length,i=[];n--;)0!==n?i.push(e[n]):0<this.namespace.length?i.push(this.namespace,e[n]):i.push(e[n]);return i.reverse().join("-")},s=function(n,i){var a=this,t=function(){var t=u(this),e=!t.data(a.attr_name(!0)+"-init");t.data(a.attr_name(!0)+"-init",c.extend({},a.settings,i||n,a.data_options(t))),e&&a.events(this)};if(u(this.scope).is("["+this.attr_name()+"]")?t.call(this.scope):u("["+this.attr_name()+"]",this.scope).each(t),"string"==typeof n)return this[n].call(this,i)};function r(t){this.selector=t,this.query=""}l.matchMedia||(l.matchMedia=function(){var e=l.styleMedia||l.media;if(!e){var n,i=a.createElement("style"),t=a.getElementsByTagName("script")[0];i.type="text/css",i.id="matchmediajs-test",t.parentNode.insertBefore(i,t),n="getComputedStyle"in l&&l.getComputedStyle(i,null)||i.currentStyle,e={matchMedium:function(t){var e="@media "+t+"{ #matchmediajs-test { width: 1px; } }";return i.styleSheet?i.styleSheet.cssText=e:i.textContent=e,"1px"===n.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}()),function(e){for(var n,a=0,t=["webkit","moz"],i=l.requestAnimationFrame,o=l.cancelAnimationFrame,s=void 0!==e.fx;a<t.length&&!i;a++)i=l[t[a]+"RequestAnimationFrame"],o=o||l[t[a]+"CancelAnimationFrame"]||l[t[a]+"CancelRequestAnimationFrame"];function r(){n&&(i(r),s&&e.fx.tick())}i?(l.requestAnimationFrame=i,l.cancelAnimationFrame=o,s&&(e.fx.timer=function(t){t()&&e.timers.push(t)&&!n&&(n=!0,r())},e.fx.stop=function(){n=!1})):(l.requestAnimationFrame=function(t){var e=(new Date).getTime(),n=Math.max(0,16-(e-a)),i=l.setTimeout(function(){t(e+n)},n);return a=e+n,i},l.cancelAnimationFrame=function(t){clearTimeout(t)})}(c),r.prototype.toString=function(){return this.query||(this.query=u(this.selector).css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""))},l.Foundation={name:"Foundation",version:"5.5.3",media_queries:{small:new r(".foundation-mq-small"),"small-only":new r(".foundation-mq-small-only"),medium:new r(".foundation-mq-medium"),"medium-only":new r(".foundation-mq-medium-only"),large:new r(".foundation-mq-large"),"large-only":new r(".foundation-mq-large-only"),xlarge:new r(".foundation-mq-xlarge"),"xlarge-only":new r(".foundation-mq-xlarge-only"),xxlarge:new r(".foundation-mq-xxlarge")},stylesheet:c("<style></style>").appendTo("head")[0].sheet,global:{namespace:o},init:function(t,e,n,i,a){var o=[t,n,i,a],s=[];if(this.rtl=/rtl/i.test(u("html").attr("dir")),this.scope=t||this.scope,this.set_namespace(),e&&"string"==typeof e&&!/reflow/i.test(e))this.libs.hasOwnProperty(e)&&s.push(this.init_lib(e,o));else for(var r in this.libs)s.push(this.init_lib(r,e));return u(l).load(function(){u(l).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")}),t},init_lib:function(t,e){return this.libs.hasOwnProperty(t)?(this.patch(this.libs[t]),e&&e.hasOwnProperty(t)?(void 0!==this.libs[t].settings?c.extend(!0,this.libs[t].settings,e[t]):void 0!==this.libs[t].defaults&&c.extend(!0,this.libs[t].defaults,e[t]),this.libs[t].init.apply(this.libs[t],[this.scope,e[t]])):(e=e instanceof Array?e:new Array(e),this.libs[t].init.apply(this.libs[t],e))):function(){}},patch:function(t){t.scope=this.scope,t.namespace=this.global.namespace,t.rtl=this.rtl,t.data_options=this.utils.data_options,t.attr_name=n,t.add_namespace=i,t.bindings=s,t.S=this.utils.S},inherit:function(t,e){for(var n=e.split(" "),i=n.length;i--;)this.utils.hasOwnProperty(n[i])&&(t[n[i]]=this.utils[n[i]])},set_namespace:function(){var t=this.global.namespace===o?c(".foundation-data-attribute-namespace").css("font-family"):this.global.namespace;this.global.namespace=t===o||/false/i.test(t)?"":t},libs:{},utils:{S:u,throttle:function(n,i){var a=null;return function(){var t=this,e=arguments;null==a&&(a=setTimeout(function(){n.apply(t,e),a=null},i))}},debounce:function(i,a,o){var s,r;return function(){var t=this,e=arguments,n=o&&!s;return clearTimeout(s),s=setTimeout(function(){s=null,o||(r=i.apply(t,e))},a),n&&(r=i.apply(t,e)),r}},data_options:function(t,n){n=n||"options";var e,i,a,o,s={},r=function(t){var e=Foundation.global.namespace;return 0<e.length?t.data(e+"-"+n):t.data(n)},l=r(t);if("object"===(void 0===l?"undefined":_typeof(l)))return l;function u(t){return"string"==typeof t?c.trim(t):t}for(e=(a=(l||":").split(";")).length;e--;)i=[(i=a[e].split(":"))[0],i.slice(1).join(":")],/true/i.test(i[1])&&(i[1]=!0),/false/i.test(i[1])&&(i[1]=!1),o=i[1],isNaN(o-0)||null===o||""===o||!1===o||!0===o||(-1===i[1].indexOf(".")?i[1]=parseInt(i[1],10):i[1]=parseFloat(i[1])),2===i.length&&0<i[0].length&&(s[u(i[0])]=u(i[1]));return s},register_media:function(t,e){var n;Foundation.media_queries[t]===o&&(c("head").append('<meta class="'+e+'"/>'),Foundation.media_queries[t]=(("string"==typeof(n=c("."+e).css("font-family"))||n instanceof String)&&(n=n.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g,"")),n))},add_custom_rule:function(t,e){e===o&&Foundation.stylesheet?Foundation.stylesheet.insertRule(t,Foundation.stylesheet.cssRules.length):Foundation.media_queries[e]!==o&&Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[e]+"{ "+t+" }",Foundation.stylesheet.cssRules.length)},image_loaded:function(t,e){var n=this,i=t.length;(0===i||function(t){for(var e=t.length-1;0<=e;e--)if(t.attr("height")===o)return!1;return!0}(t))&&e(t),t.each(function(){!function(t,e){function n(){e(t[0])}t.attr("src")?t[0].complete||4===t[0].readyState?n():function(){if(this.one("load",n),/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var t=this.attr("src"),e=t.match(/\?/)?"&":"?";e+="random="+(new Date).getTime(),this.attr("src",t+e)}}.call(t):n()}(n.S(this),function(){0===(i-=1)&&e(t)})})},random_str:function(){return this.fidx||(this.fidx=0),this.prefix=this.prefix||[this.name||"F",(+new Date).toString(36)].join("-"),this.prefix+(this.fidx++).toString(36)},match:function(t){return l.matchMedia(t).matches},is_small_up:function(){return this.match(Foundation.media_queries.small)},is_medium_up:function(){return this.match(Foundation.media_queries.medium)},is_large_up:function(){return this.match(Foundation.media_queries.large)},is_xlarge_up:function(){return this.match(Foundation.media_queries.xlarge)},is_xxlarge_up:function(){return this.match(Foundation.media_queries.xxlarge)},is_small_only:function(){return!(this.is_medium_up()||this.is_large_up()||this.is_xlarge_up()||this.is_xxlarge_up())},is_medium_only:function(){return this.is_medium_up()&&!this.is_large_up()&&!this.is_xlarge_up()&&!this.is_xxlarge_up()},is_large_only:function(){return this.is_medium_up()&&this.is_large_up()&&!this.is_xlarge_up()&&!this.is_xxlarge_up()},is_xlarge_only:function(){return this.is_medium_up()&&this.is_large_up()&&this.is_xlarge_up()&&!this.is_xxlarge_up()},is_xxlarge_only:function(){return this.is_medium_up()&&this.is_large_up()&&this.is_xlarge_up()&&this.is_xxlarge_up()}}},c.fn.foundation=function(){var t=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(t)),this})}}(jQuery,window,window.document),String.prototype.toCamelCase=function(){return this.replace(/\s(.)/g,function(t){return t.toUpperCase()}).replace(/\s/g,"").replace(/^(.)/,function(t){return t.toLowerCase()})},String.prototype.capFirst=function(){return this.charAt(0).toUpperCase()+this.slice(1)},String.prototype.escAttr=function(t){return t=t?"&#13;":"\n",this.replace(/&/g,"&amp;").replace(/'/g,"&apos;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r\n/g,t).replace(/[\r\n]/g,t)},Object.defineProperty(Object.prototype,"toAttsString",{value:function(){var t="";for(var e in this)if(this.hasOwnProperty(e)){var n=this[e];Array.isArray(n)&&(n=n.join(" ")),("string"==typeof n||n instanceof String)&&(t+=e+'="'+n.escAttr()+'" ')}return t},enumerable:!1}),window.PedUtils=new(function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"debounce",value:function(i,a,o){var s;return function(){var t=this,e=arguments,n=o&&!s;clearTimeout(s),s=setTimeout(function(){s=null,o||i.apply(t,e)},a||200),n&&i.apply(t,e)}}},{key:"throttle",value:function(t,e){var n=!1;return function(){n||(t.call(),n=!0,setTimeout(function(){n=!1},e))}}},{key:"removeHash",value:function(){history.pushState("",document.title,window.location.pathname+window.location.search)}},{key:"focusAtEnd",value:function(t){if(0<t.length){var e=t[0],n=e.value.length;(e.selectionStart||"0"==e.selectionStart)&&(e.selectionStart=n,e.selectionEnd=n,e.focus())}}},{key:"genStr",value:function(){for(var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:8,e="",n="23456789abdegjkmnpqrvwxyz",i=0;i<t;i++)e+=n.charAt(Math.floor(Math.random()*n.length));return e}},{key:"getURLParams",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",i={};return e||(e=location.search),e.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(t,e,n){i[e]=n}),t?i[t]:i}}]),t}()),function(i){var t=i("body");t.addClass("has-closed-modal");var n=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([readonly])','select:not([disabled]):not([type="hidden"]):not([readonly])','textarea:not([disabled]):not([type="hidden"]):not([readonly])','button:not([disabled]):not([type="hidden"]):not([readonly])',"iframe","object","embed","*[tabindex]","*[contenteditable]"].join(),a=[];window.Modal=function(){function e(){_classCallCheck(this,e);var t={uniqueID:"modal-"+a.length};return arguments[0]&&"object"===_typeof(arguments[0])&&(this.options=i.extend(arguments[0],t)),this.$target=i("#"+this.options.target),this.modalClass=this.$target.data("modal-class"),this.isOpen=!1,this.$site=i(".js-site"),this.$modal=i("#modal"),this.$modalContent=i("#modal-content"),this.$modalOverlay=i("#modal-overlay"),this.$modalOverlay.on("click",this,function(t){t.data.close()}),this.$modalFrame=i("#modal-frame"),this.$modalFrame.on("click",this,function(t){var e=i(t.target),n=t.data;(e.is(".js-modal__frame")||e.is(".js-modal__close-button")||e.parents(".js-modal__close-button").length)&&n.close()}).on("keydown",this,function(t){var e=t.data;27==t.which&&(e.close(),t.preventDefault())}),a.push(this),arguments[1]&&"function"==typeof arguments[1]&&arguments[1].call(this),this}return _createClass(e,[{key:"getOptions",value:function(){return this.options}},{key:"isOpen",value:function(){return this.isOpen}},{key:"open",value:function(){this.$modalTriggerElement=i(document.activeElement),this.closeAll(),this.$placeholder=i("<div></div>").hide(),this.$target.after(this.$placeholder),this.$detached=this.$target.detach(),this.$modalContent.append(this.$detached),this.$modal.addClass(this.modalClass),this.trigger("modal:open"),this.$site.attr("tabindex","-1").attr("aria-hidden",!0).find(n).attr("tabindex","-1"),t.removeClass("has-closed-modal").addClass("has-open-modal"),this.$modalFrame.removeAttr("aria-hidden"),this.$modalContent.attr("tabindex","0").focus(),this.isOpen=!0,this.trigger("modal:opened")}},{key:"close",value:function(){if(!this.isOpen)return!1;t.removeClass("has-open-modal").addClass("has-closed-modal"),this.$placeholder.replaceWith(this.$target),this.$modalContent.html(""),this.$modalFrame.attr("aria-hidden","true"),this.$modal.removeClass(this.modalClass),this.trigger("modal:close"),this.$site.removeAttr("tabindex").removeAttr("aria-hidden").find(n).removeAttr("tabindex"),this.$modalTriggerElement.focus(),this.$modalTriggerElement=null,this.isOpen=!1}},{key:"closeAll",value:function(){for(var t=0;t<a.length;t++)a[t].close()}},{key:"on",value:function(t,e){var n=t+"-"+this.options.uniqueID;return this.$modalContent.on(n,e),this}},{key:"trigger",value:function(t){var e=t+"-"+this.options.uniqueID;this.$modalContent.trigger(e,this)}}]),e}()}(jQuery);var PedSubscriberClass=function(){function t(){var n=this;_classCallCheck(this,t),this.storageKey="subscriberData",this.version=1,$(document).on("ready",function(){var t=localStorageCookie(n.storageKey);t&&"data"in t&&n.triggerEvent("ready",t)}),$(".js-signup-email-form").on("pedFormSubmission:success",function(t,e){return n.listenForEmailSignups(t,e)}),this.maybeRefresh()}return _createClass(t,[{key:"maybeRefresh",value:function(){var t=PedUtils.getURLParams("mc_eid"),e=localStorageCookie(this.storageKey);if(e&&"data"in e){var n=!1;if("mc_id"in e.data&&(n=e.data.mc_id),"updated"in e){var i=(new Date).getTime()/1e3,a=new Date(e.updated).getTime()/1e3;if((a+=1209600)<=i)return this.fetchData(n),!0}this.triggerEvent("ready",e)}else if(t)return this.fetchData(t),!0;return!1}},{key:"fetchData",value:function(t){var e=this,n={action:"get_subscriber_data",subscriberID:t},i=this.storageKey;$.post(PedVars.ajaxurl,n,function(t){t.success&&(localStorageCookie(i,t.data),e.triggerEvent("ready",t.data))})}},{key:"listenForEmailSignups",value:function(t,e){"emailAddress"in e&&this.fetchData(e.emailAddress)}},{key:"triggerEvent",value:function(t,e){var n="pedSubscriber:"+t;$(document).trigger(n,[e])}}]),t}(),PedSubscriber=new PedSubscriberClass;function ScrollDepth(t,e,n){var r=jQuery,i=r(window),l=[];if(this.selector=t,this.label=e,this.percs=n,this.$element=r(this.selector),this.eventNamespace="scroll.depth"+this.label.toCamelCase().capFirst(),this.$element.length){var a=r.proxy(function(){var t,e,n={},i=this.percs,a=this.$element.offset().top,o=this.$element.height();i.sort(function(t,e){return t-e});for(var s=0;s<i.length;s++)switch(e=(t=i[s])+"%",t){case 0:n[e]=a;break;case 100:n[e]=o-5+a;break;default:n[e]=parseInt(o*(.01*t),10)+a}return n},this),o=r.proxy(function(o){var s;this.$element.length&&o>=this.$element.offset().top&&r.each(a(),r.proxy(function(t,e){var n,i,a;-1===r.inArray(t,l)&&e<=o&&(s=Math.round(parseFloat(t)),n=t,i=this.label,a=s,"function"==typeof window.ga&&window.ga("send","event","Scroll Depth",n,i,a,{nonInteraction:!0}),l.push(t))},this))},this);i.on(this.eventNamespace,PedUtils.throttle(r.proxy(function(){var t=window.innerHeight||i.height(),e=i.scrollTop()+t;l.length>=this.percs.length||!this.$element.length?i.off(this.eventNamespace):o(e)},this),750))}}function ShareButtons(o){if(this.result=!1,o(".js-share-buttons").length){var s=o(window),e=o("body"),r=o(".js-main-header");this.getCutoffs=function(){var t=o("#wpadminbar"),e=r.offset(),n=o(".js-main-footer").offset(),i=e?e.top+r.height():0,a=n?n.top-s.height():0;return 0<t.length&&(i-=t.height()),{top:i,bottom:a}},this.cutoffs=this.getCutoffs(),this.scroll=function(){var t=s.scrollTop();t>this.cutoffs.top&&t<this.cutoffs.bottom?e.addClass("has-sticky-share-buttons"):e.removeClass("has-sticky-share-buttons")},this.resize=function(){this.cutoffs=this.getCutoffs()},this.result=!0}}jQuery(document).ready(function(t){var e=t(window),n=new ShareButtons(t),i=n.result;if(!i)return!1;var a=t.proxy(n.scroll,n);e.on("scroll",PedUtils.throttle(a,50));var o=t.proxy(n.resize,n);e.on("resize",PedUtils.throttle(o,250));var s=o;"function"==typeof MutationObserver&&new MutationObserver(function(t){t.forEach(function(){s.call()})}).observe(document.body,{attributes:!1,childList:!0,characterData:!1});return i}),function(r){var t={init:function(){r(document).foundation(),r("html").removeClass("no-js").addClass("js"),this.showVideoControls=480<=r(window).width(),this.bindEvents(),this.handleSubscriptionForms(),this.responsiveIframes(),this.disabledAnchors(),this.analyticsEventTracking(),this.scrollDepthTracking(),this.lazyLoad(),this.setupModals(),DonateForm(),PedUtils.focusAtEnd(r("#search-standalone-input"))},showVideoControls:!0,bindEvents:function(){var t=!1;r(window).resize(r.proxy(function(){t&&clearTimeout(t),t=setTimeout(r.proxy(function(){this.responsiveIframes()},this),30)},this))},handleSubscriptionForms:function(){r(".js-signup-email-form").on("submit",function(t){t.preventDefault();var n=r(this),i=n.find(".js-form-submit"),a=n.find(".js-fail-message"),e=n.attr("action"),o=0<=e.indexOf("?")?"&":"?";e+=o+r.param({"ajax-request":1}),n.removeClass("is-failed"),n.addClass("is-loading"),i.prop("disabled",!0),r.post(e,n.serialize(),function(){if(n.find(".js-success-message").length){var t=n.find(".js-success-message-email"),e=n.find(".js-email-input").val();n.removeClass("is-loading"),n.addClass("is-success"),n.trigger("pedFormSubmission:success",[{emailAddress:e}]),e&&t.length&&t.text(e).addClass("u-font-weight--bold")}}).fail(function(t){var e=t.responseText;n.removeClass("is-loading"),n.addClass("is-failed"),a.length&&e.length?a.text(e):i.before(e)}).always(function(){i.prop("disabled",!1)})})},responsiveIframes:function(){r(".pedestal-responsive").each(function(){var t=r(this),e=t.parent().width();window.self!==window.top&&(e=parent.innerWidth);var n=t.data("true-height")?t.data("true-height"):360,i=e/(t.data("true-width")?t.data("true-width"):640)*n;r(this).css("height",i+"px").css("width",e+"px")})},disabledAnchors:function(){r("a.disabled").click(function(t){t.preventDefault()})},analyticsEventTracking:function(){var o=!1;r("body").is(".js-debug-ga")&&(o=!0),("function"==typeof ga||o)&&(r("body").on("click","a[data-ga-category]",function(t){var e=r(this),n=e.data("ga-category"),i=t.currentTarget.href,a=e.data("ga-label");if(o)return console.group("Google Analytics Event Data"),console.log("Category: ",n),console.log("Action: ",i),console.log("Label: ",a),console.groupEnd(),void t.preventDefault();ga("send","event",n,i,a)}).on("submit","form[data-ga-category]",function(t){var e=r(this),n=e.data("ga-category"),i=e.attr("action"),a=e.data("ga-label");if(o)return console.group("Google Analytics Event Data"),console.log("Category: ",n),console.log("Action: ",i),console.log("Label: ",a),console.groupEnd(),void t.preventDefault();ga("send","event",n,i,a)}),r(document).on("pedSubscriber:ready",function(t,e){var n="reader-cookie-set",i=window.location.href,a="subscriber";if(e.data.current_member?a="member":0<e.data.donate_365&&(a="donor"),o)return console.group("Subscriber Google Analytics Event Data"),console.log("Category: ",n),console.log("Action: ",i),console.log("Label: ",a),void console.groupEnd();ga("send","event",n,i,a)}))},scrollDepthTracking:function(){new ScrollDepth(".js-original-content-body","Original Content Body",[0,50,100])},lazyLoad:function(){var s=this.showVideoControls?1:0;r(".content-wrapper").on("click",".js-yt-placeholder-link",function(t){var e=r(this),n=e.data("youtube-id");if(n){var i=e.parents(".js-yt-placeholder"),a={autoplay:1,cc_load_policy:1,color:"white",controls:s,rel:0,showinfo:0},o="<iframe ";o+='src="'+("https://www.youtube.com/embed/"+n+"?"+r.param(a))+'" ',o+='frameborder="0" ',o+="allowfullscreen ",o+="/>",i.append(o),e.fadeOut(750,function(){e.remove()}),t.preventDefault()}})},setupModals:function(){r(".js-modal-trigger").each(function(t,e){var n=r(e),i=n.data("modal-id");if(i){var a=new Modal({target:i});"search-modal"==i&&a.on("modal:opened",function(){var t=r(".js-modal-search-field");PedUtils.focusAtEnd(t)}),n.on("click",a,function(t){t.data.open(),t.preventDefault()})}})}};r(document).ready(function(){t.init()})}(jQuery);