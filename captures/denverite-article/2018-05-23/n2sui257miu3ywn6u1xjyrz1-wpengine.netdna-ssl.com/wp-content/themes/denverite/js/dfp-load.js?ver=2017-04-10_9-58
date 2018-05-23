// Ensure console is defined
window.console = console || {warn: function() {}, log: function() {}};

// Ensure googletag is defined
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

(function() {
  var gads = document.createElement('script');
  gads.async = true;
  gads.type = 'text/javascript';
  var useSSL = 'https:' === document.location.protocol;
  gads.src = (useSSL ? 'https:' : 'http:') +
  '//www.googletagservices.com/tag/js/gpt.js';
  var node = document.getElementsByTagName('script')[0];
  node.parentNode.insertBefore(gads, node);
})();

// We dynamically define ad slots on the page based on the ad markup present
googletag.cmd.push(function() {
  // The ad slots we will tell Google Tag about
  var slots = [];
  (function($) {
    // Get the width of the window once
    var winWidth = $(window).width();
    if(!winWidth) {
      winWidth = 320;
    }
    // For each ad markup on the page we will get the slot name and accepted
    // sizes for the slot before defining the ad position
    $('.js-dfp').each(function(elIndex, el) {
      var $el = $(el);
      var rawSize = $el.data('dfp-sizes');
      var slotName = $el.data('dfp-name');
      if (!rawSize || !slotName) {
        var msg = 'Pedestal DFP: Slot missing required parameters';
        console.warn(msg, el);
        return;
      }
      var sizes = [];
      $.each(rawSize.split(','), function(sizeIndex, adSize) {
        adSize = $.trim(adSize);
        if (!adSize) {
          return;
        }
        var dimensions = adSize.split('x');
        if (dimensions.length !== 2) {
          var msg = 'Pedestal DFP: Bad dimensions!';
          console.warn(msg, adSize, el);
          return;
        }
        for (var i = 0; i < dimensions.length; i++) {
          dimensions[i] = parseInt(dimensions[i]);
        }

        // Business logic to filter out any sizes that don't make sense for a
        // given ad unit
        var adWidth = dimensions[0];

        // If the ad is too wide for the given viewport then filter it out
        if ( adWidth > winWidth ) {
          return;
        }

        // 300x250's should not appear in the hero position if viewport is 640px or greater
        if ( winWidth > 640 && adSize === '300x250' && slotName.indexOf('Hero') !== -1 ) {
          return;
        }

        sizes.push(dimensions);
      });

      var path = '/104495818/' + slotName;
      var id = 'div-gpt-ad-' + slotName + '-0';
      slots.push(googletag
        .defineSlot(path, sizes, id)
        .addService(googletag.pubads())
      );
    });
  }(jQuery));

  // Additional options
  googletag.pubads().enableSingleRequest();
  googletag.pubads().collapseEmptyDivs(true);

  // Add 'ADVERTISEMENT' disclaimer text after all DFP units
  googletag.pubads().addEventListener('slotRenderEnded', function(e) {
    var id, div, html;
    if (false === e.isEmpty) {
      // e.slot.B should be like /104495818/BP_Header_300x50_M
      id = 'google_ads_iframe_' + e.slot.B + '_0__container__';
      div = document.getElementById(id);
      html = '<div class="dfp-disclaimer">ADVERTISEMENT</div>';
      div.insertAdjacentHTML('beforeend', html);
    }
  });
  googletag.enableServices();
});
