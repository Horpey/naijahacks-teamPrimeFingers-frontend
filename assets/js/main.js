"use strict";
function homeSliderHeightFix() {
  $("#home").height($(window).height())
}
var $ = jQuery,
  header,
  bannerRevSlider;
$(document).ready(function(a) {
  var b = a('[data-action="matx_revslider"]'),
    c = {
      style: "",
      enable: !1
    },
    d = {
      enable: !0
    };
  b.each(function() {
    var b = a(this);
    "matx_revslider_2" == b.attr("id") && (c = {
      style: "matx-revslider-2-arrow",
      enable: !0
    }), "matx_revslider_2" == b.attr("id") && (c = {
      style: "matx-revslider-2-arrow",
      enable: !0
    }), "matx_revslider_3" == b.attr("id") && (d = {
      enable: !1
    }), void 0 == b.revolution ? revslider_showDoubleJqueryError(b) : (bannerRevSlider = b.show().revolution({
      sliderType: "standard",
      jsFileLocation: "assets/libs/revolution/js/",
      sliderLayout: "fullscreen",
      responsiveLevels: [1240, 1024, 778, 485],
      gridwidth: [1400, 1170, 778, 480],
      gridheight: [800, 700, 1050, 500],
      delay: 6e3,
      shuffle: "off",
      navigation: {
        keyboardNavigation: "on",
        onHoverStop: "off",
        arrows: {
          style: c.style,
          enable: c.enable,
          rtl: !1,
          hide_onmobile: !1,
          hide_onleave: !0,
          hide_delay: 200,
          hide_delay_mobile: 1200,
          hide_under: 0,
          hide_over: 9999,
          tmp: "",
          left: {
            container: "slider",
            h_align: "left",
            v_align: "center",
            h_offset: 30,
            v_offset: 0
          },
          right: {
            container: "slider",
            h_align: "right",
            v_align: "center",
            h_offset: 30,
            v_offset: 0
          }
        },
        bullets: {
          style: "",
          enable: d.enable,
          hide_onmobile: !1,
          hide_onleave: !1,
          hide_delay: 200,
          hide_delay_mobile: 1200,
          hide_under: 0,
          hide_over: 9999,
          tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>',
          direction: "horizontal",
          space: 10,
          h_align: "center",
          v_align: "middle",
          h_offset: 0,
          v_offset: 50
        }
      },
      lazyType: "none",
      parallax: {
        type: "mouse+scroll",
        origo: "slidercenter",
        speed: 2e3,
        levels: [1, 2, 3, 20, 25, 30, 35, 40, 45, 50],
        disable_onmobile: "on"
      },
      shadow: 0,
      spinner: "spinner2",
      autoHeight: "on",
      disableProgressBar: "off",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: !1,
      fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: !1
      }
    }), b.bind("revolution.slide.onchange", function(b, c) {
      c.currentslide.hasClass("slider-color-schema-white") ? a("body").removeClass("color-schema-white").addClass("color-schema-dark") : c.currentslide.hasClass("slider-color-schema-dark") && a("body").removeClass("color-schema-dark").addClass("color-schema-white")
    }))
  }), homeSliderHeightFix(), backButton = a("#backToTop"), header = a("header.main-header");
  var e = {
    button: backButton,
    show: function() {
      var a = this;
      if (a.button.hasClass("hide-bottom")) {
        a.button.removeClass("hide-bottom");
        var b = setTimeout(function() {
          a.button.removeClass("shade-on"), clearTimeout(b)
        }, 800)
      }
    },
    hide: function() {
      var a = this;
      a.button.hasClass("hide-bottom") || a.button.addClass("shade-on").addClass("hide-bottom")
    },
    enableBackToTop: function() {
      var a = this;
      a.button.hasClass("rotate") || a.button.addClass("rotate").data("action", "top")
    },
    enableSectionCall: function() {
      var a = this;
      a.button.hasClass("rotate") && a.button.removeClass("rotate").data("action", "bottom")
    }
  };
  backButton.on("click", function() {
    if (a(this).data("action") && "top" == a(this).data("action")) a("html, body").stop(!0, !0).animate({
        scrollTop: "0px"
      }, 1500, "easeOutQuad");
    else {
      var b = a(".section-main.section-active"),
        c = b.next();
      a("html, body").stop(!0, !0).animate({
        scrollTop: c.offset().top - header.outerHeight() + "px"
      }, 800, "easeOutQuad")
    }
  }), function() {
    var b = a(".section-main"),
      c = function(a, b) {
        return b.index(a)
      };
    b.length > 0 && b.waypoint({
      handler: function(d, f) {
        var g,
          h,
          i,
          j;
        j = b.length, g = a(this), h = c(a(this), b), i = h - 1, "up" === f && (g = b.eq(i)), b.removeClass("section-active"), g.addClass("section-active"), h == j - 1 ? (a(".menu-smooth-scroll").parent("li").removeClass("active"), e.enableBackToTop()) : e.enableSectionCall(), "home" == g.attr("id") ? e.hide() : e.show();
        var k = a('.menu-smooth-scroll[href="#' + g.attr("id") + '"]');
        k.parent("li").addClass("active").siblings().removeClass("active"), "home" == g.attr("id") && a(".menu-smooth-scroll").parent("li").removeClass("active")
      },
      offset: "35%"
    })
  }(), a(".mailchimpForm").ajaxChimp({
    callback: function(b) {
      "success" === b.result ? (a(".mailchimpForm .mdl-textfield").removeClass("is-dirty").find("input[type=text]").val(""), swal("Thanks!", "Almost finished... Please confirm your email address.", "success")) : "error" === b.result && swal("Ops!", "Please enter a valid email address.", "error")
    },
    url: "https://coderpixel.us10.list-manage.com/subscribe/post?u=3918a7d4d5fe9e4c1baa3d912&amp;id=1a52016f23"
  }), a("#contactForm").on("submit", function(b) {
    b.preventDefault();
    var c = a(this),
      d = a(this).serialize(),
      e = c.find("#name"),
      f = c.find("#email"),
      g = c.find("#message"),
      h = c.find(".form-loader-area"),
      i = c.find('button, input[type="submit"]');
    h.show(), i.attr("disabled", "disabled");
    var j = function(a) {
        swal("Thanks!", "Your message has been sent successfully!", "success"), c.find("input:not('[type=submit]'), textarea").val(""), c.find(".is-dirty, .is-invalid").removeClass("is-dirty is-invalid")
      },
      k = function(a) {
        c.find(".is-invalid").removeClass("is-invalid"), a.name && e.closest(".mdl-textfield").addClass("is-invalid"), a.email && f.closest(".mdl-textfield").addClass("is-invalid"), a.message && g.closest(".mdl-textfield").addClass("is-invalid")
      };
    a.ajax({
      type: "POST",
      url: "assets/inc/sendEmail.php",
      data: d
    }).done(function(a) {
      var b = JSON.parse(a);
      b.OK ? j(b) : k(b);
      var c = setTimeout(function() {
        h.hide(), clearTimeout(c)
      }, 1e3)
    }).fail(function() {
      sweetAlert("Oops...", "Something went wrong, Try again later!", "error");
      var a = setTimeout(function() {
        h.hide(), i.removeAttr("disabled"), clearTimeout(a)
      }, 1e3)
    })
  }), a("#map-open").click(function(b) {
    b.preventDefault(), a(this).hide().siblings(".btn").show(), a(".map-wrapper").css("margin-top", "0px")
  }), a("#map-close").click(function(b) {
    b.preventDefault(), a(this).hide().siblings(".btn").show(), a(".map-wrapper").css("margin-top", "-" + a(".map-wrapper").height() + "px")
  });
  var f = [{
      featureType: "landscape",
      stylers: [{
        saturation: -100
      }, {
        lightness: 50
      }, {
        visibility: "on"
      }]
    }, {
      featureType: "poi",
      stylers: [{
        saturation: -100
      }, {
        lightness: 40
      }, {
        visibility: "simplified"
      }]
    }, {
      featureType: "road.highway",
      stylers: [{
        saturation: -100
      }, {
        visibility: "simplified"
      }]
    }, {
      featureType: "road.arterial",
      stylers: [{
        saturation: -100
      }, {
        lightness: 20
      }, {
        visibility: "on"
      }]
    }, {
      featureType: "road.local",
      stylers: [{
        saturation: -100
      }, {
        lightness: 30
      }, {
        visibility: "on"
      }]
    }, {
      featureType: "transit",
      stylers: [{
        saturation: -100
      }, {
        visibility: "simplified"
      }]
    }, {
      featureType: "administrative.province",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: "water",
      elementType: "labels",
      stylers: [{
        visibility: "on"
      }, {
        lightness: -0
      }, {
        saturation: -0
      }]
    }, {
      featureType: "water",
      elementType: "geometry",
      stylers: [{
        hue: "#00baff"
      }, {
        lightness: -10
      }, {
        saturation: -95
      }]
    }],
    g = "#map",
    h = a.browser.mobile !== !0;
  a(g).length > 0 && window.google && window.google.maps && (window.mapOps = {
    lat: 23.77997,
    lng: 90.42428,
    content: "<p>Coder Pixel, Gulshan 1, Dhaka, Bangladesh</p>",
    icon: "img/marker-icon.png",
    zoom: 16,
    panBy: {
      x: 0,
      y: -40
    }
  }, window.map = new GMaps({
    div: g,
    lat: mapOps.lat,
    lng: mapOps.lng,
    scrollwheel: !1,
    draggable: h,
    zoom: mapOps.zoom,
    disableDefaultUI: !0,
    styles: f
  }), map.addMarker({
    lat: mapOps.lat,
    lng: mapOps.lng,
    icon: mapOps.icon,
    infoWindow: {
      content: mapOps.content
    }
  }), map.panBy(mapOps.panBy.x, mapOps.panBy.y))
}), $(window).load(function() {
  var a = setTimeout(function() {
    $(".init-animation").addClass("animated").css({
      visibility: "visible",
      "animation-duration": "2s",
      "animation-name": "fadeIn"
    }), clearTimeout(a)
  }, 1400);
  $(window).scrollTop() > 0 && $(".main-header").addClass("is-sticky")
}), $(window).on("scroll", function(a) {
  $(this).scrollTop() > 0 ? header.addClass("is-sticky") : header.removeClass("is-sticky")
}), doneResize(function() {
  homeSliderHeightFix(), map.setCenter({
    lat: mapOps.lat,
    lng: mapOps.lng
  }), map.panBy(mapOps.panBy.x, mapOps.panBy.y)
});