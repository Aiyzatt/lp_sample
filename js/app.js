const _ua = ((u) => ({
  Tablet:
    (u.indexOf("windows") !== -1 &&
      u.indexOf("touch") !== -1 &&
      u.indexOf("tablet pc") === -1) ||
    u.indexOf("ipad") !== -1 ||
    (u.indexOf("android") !== -1 && u.indexOf("mobile") === -1) ||
    (u.indexOf("firefox") !== -1 && u.indexOf("tablet") !== -1) ||
    u.indexOf("kindle") !== -1 ||
    u.indexOf("silk") !== -1 ||
    u.indexOf("playbook") !== -1,
  Mobile:
    (u.indexOf("windows") !== -1 && u.indexOf("phone") !== -1) ||
    u.indexOf("iphone") !== -1 ||
    u.indexOf("ipod") !== -1 ||
    (u.indexOf("android") !== -1 && u.indexOf("mobile") !== -1) ||
    (u.indexOf("firefox") !== -1 && u.indexOf("mobile") !== -1) ||
    u.indexOf("blackberry") !== -1,
}))(window.navigator.userAgent.toLowerCase());

$(".hamburger").click(() => {
  if ($(".hamburger").hasClass("active")) {
    $(".gnav").fadeOut();
    $(".hamburger").removeClass("active");
  } else {
    $(".gnav").fadeIn();
    $(".hamburger").addClass("active");
  }
});

if (!_ua.Mobile) {
} else {
  $(".mainnav li a").click(() => {
    if ($(".hamburger").hasClass("is-active")) {
      $(".gnav").fadeOut();
      $(".hamburger").removeClass("is-active");
    }
    if ($(".hamburger").hasClass("active")) {
      $(".gnav").fadeOut();
      $(".hamburger").removeClass("active");
    }
  });
}

$(() => {
  $('a[href^="#"]').click(function () {
    const headerHight = 70;
    const speed = 400;
    const href = $(this).attr("href");
    const target = $(href === "#" || href === "" ? "html" : href);
    const position = target.offset().top - headerHight;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

$(() => {
  const retinaCheck = window.devicePixelRatio;
  if (retinaCheck >= 2) {
    $("img.retina").each(function () {
      const retinaImg = $(this)
        .attr("src")
        .replace(/\.(?=(?:png|jpg|jpeg)$)/i, "@2x.");
      $(this).attr("srcset", `${retinaImg} 2x`);
    });
  }
});

jQuery(document).ready(() => {
  hamburgersSet();
  CustomervoiceSlideSet();
  TopFaqSet();
  ScrollHintSet();
});

function hamburgersSet() {
  const forEach = (t, o, r) => {
    if ("[object Object]" === Object.prototype.toString.call(t))
      for (const c in t)
        Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else for (let e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
  };
  const hamburgers = document.querySelectorAll(".hamburger");
  if (hamburgers.length > 0) {
    forEach(hamburgers, (hamburger) => {
      hamburger.addEventListener(
        "click",
        function () {
          this.classList.toggle("is-active");
        },
        false
      );
    });
  }
}

function CustomervoiceSlideSet() {
  $(".slider_customervoice").slick({
    centerMode: true,
    slidesToShow: 3,
    autoplay: false,
    autoplaySpeed: 2200,
    arrows: true,

    responsive: [
      {
        breakpoint: 667,
        settings: {
          arrows: true,
          autoplay: true,
          centerMode: true,
          centerPadding: "0px",
          autoplaySpeed: 2200,
          initialSlide: 1,
          slidesToShow: 1,
        },
      },
    ],
  });
}

function TopFaqSet() {
  $(".js-faq_title").on("click", function () {
    $(this).next().slideToggle(200);
    $(this).toggleClass("open", 200);
  });
}

function ScrollHintSet() {
  new ScrollHint(".js-scrollable", {
    i18n: {
      scrollable: "スクロールできます",
    },
  });
}
