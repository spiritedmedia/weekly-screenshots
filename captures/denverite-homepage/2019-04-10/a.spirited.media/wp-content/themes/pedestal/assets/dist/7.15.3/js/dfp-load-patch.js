!function(){"use strict";function e(e){if(!e.isEmpty){var t=e.slot.getSlotElementId(),a=document.getElementById(t);if(a&&null===a.querySelector(".js-dfp-disclaimer")){a.insertAdjacentHTML("afterbegin",'<div class="dfp-disclaimer js-dfp-disclaimer">ADVERTISEMENT</div>')}}}var g=window.googletag||{};g.cmd=g.cmd||[],function(){var e=document.createElement("script");e.async=!0,e.type="text/javascript",e.src="https://www.googletagservices.com/tag/js/gpt.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();var t=document.getElementById("dfp-load"),u=t.getAttribute("data-dfp-path"),f=t.getAttribute("data-dfp-site"),a=t.getAttribute("data-dfp-article-id"),s=t.getAttribute("data-dfp-topics");jQuery(function(c){var p="desktop";"none"===c(".js-rail").css("display")&&(p="mobile"),c(".js-dfp").each(function(e,i){var t=c(i);if("none"!=t.css("display")){var a=t.data("dfp-sizes"),s=t.data("dfp-name"),d=t.data("dfp-unique"),n=t.data("dfp-slottarget");if(!n&&d&&(n=d),a&&s){var r=[];c.each(a.split(","),function(e,t){if(t=c.trim(t)){var a=t.split("x");if(2===a.length){for(var s=0;s<a.length;s++)a[s]=parseInt(a[s]);r.push(a)}else{console.warn("Pedestal DFP: Bad dimensions!",t,i)}}}),"mobile"==p&&(n=n.replace(/artclbox/gi,"m"));var l="/"+u,o=f+"-"+p+"-"+n;t.attr("id",o),g.cmd.push(function(){g.defineSlot(l,r,o).setTargeting("slot",[n]).addService(g.pubads()),g.display(o)})}else{console.warn("Pedestal DFP: Slot missing required parameters",i)}}})}),g.cmd.push(function(){g.pubads().enableSingleRequest(),g.pubads().collapseEmptyDivs(!0),g.pubads().addEventListener("slotRenderEnded",e),a&&g.pubads().setTargeting("sm_article",[a]),s&&g.pubads().setTargeting("sm_topic",s.split(" ")),g.enableServices()}),window.googletag=g}();