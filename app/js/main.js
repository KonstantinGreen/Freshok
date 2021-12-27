$(function () {

  $('.slider-product').slick({
    infinite: false,
    arrows: true,
    prevArrow: '<button type="button" class="slider-main__arrow slider-main__arrow--prev"><svg class="slider-main__arrowsvg"><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slider-main__arrow slider-main__arrow--next"><svg class="slider-main__arrowsvg"><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [{
      breakpoint: 769,
      settings: {
        arrows: false,
        dots: true
      }
    }, ]
  });

  $('.cards-slider__list').slick({
    infinite: true,
    arrows: true,
    slidesToShow: 4,
    appendArrows: $('.cards-slider__buttons'),
    prevArrow: '.cards-slider__arrow--prev',
    nextArrow: '.cards-slider__arrow--next',
    responsive: [{
        breakpoint: 1260,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 951,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 2,
          dots: true,
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          dots: true,
          autoplay: true,
        }
      },

    ]
  });

  $("[data-fancybox]").fancybox({
    loop: true,
  });

  $(".star").rateYo({
    starWidth: "16px",
    starHeight: "16px",
    normalFill: "#ccccce",
    rateFill: "#ffc35b",
    spacing: "6px",
    readOnly: true,
    starSvg: '<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_17_953)"><path d="M0.0229731 6.16432C0.0780973 5.9946 0.224753 5.87091 0.401315 5.84529L5.36139 5.12451L7.57966 0.629933C7.6586 0.469933 7.82157 0.368652 7.99997 0.368652C8.17841 0.368652 8.34135 0.469933 8.42032 0.629933L10.6387 5.12451L15.5987 5.84529C15.7752 5.87091 15.9219 5.9946 15.977 6.16429C16.0322 6.334 15.9862 6.52028 15.8584 6.64481L12.2694 10.1434L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4365 15.5776L8 13.2451L3.56374 15.5775C3.40577 15.6606 3.21443 15.6467 3.07009 15.5419C2.92574 15.437 2.8534 15.2593 2.88356 15.0834L3.73096 10.1434L0.141566 6.64478C0.0138168 6.52028 -0.0322151 6.334 0.0229731 6.16432Z"/></g></svg>'
  });


  $(".reviews__star").rateYo({
    rating: 0,
    fullStar: true,
    starWidth: "16px",
    starHeight: "16px",
    normalFill: "#ccccce",
    rateFill: "#ffc35b",
    spacing: "6px",
    starSvg: '<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_17_953)"><path d="M0.0229731 6.16432C0.0780973 5.9946 0.224753 5.87091 0.401315 5.84529L5.36139 5.12451L7.57966 0.629933C7.6586 0.469933 7.82157 0.368652 7.99997 0.368652C8.17841 0.368652 8.34135 0.469933 8.42032 0.629933L10.6387 5.12451L15.5987 5.84529C15.7752 5.87091 15.9219 5.9946 15.977 6.16429C16.0322 6.334 15.9862 6.52028 15.8584 6.64481L12.2694 10.1434L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4365 15.5776L8 13.2451L3.56374 15.5775C3.40577 15.6606 3.21443 15.6467 3.07009 15.5419C2.92574 15.437 2.8534 15.2593 2.88356 15.0834L3.73096 10.1434L0.141566 6.64478C0.0138168 6.52028 -0.0322151 6.334 0.0229731 6.16432Z"/></g></svg>'
  });

  $('.product-one-tabs__link').on('click', function (e) {
    e.preventDefault();
    $('.product-one-tabs__link').removeClass('product-one-tabs__link--active');
    $(this).addClass('product-one-tabs__link--active');

    $('.product-one-tabs__content-item').removeClass('product-one-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-one-tabs__content-item--active');
  });


  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-440px";
    }
    prevScrollpos = currentScrollPos;
  }

  $('button').mouseup(function () {
    this.blur();
  });


  $('.drop__submenu').hide();
  $(".drop__btn").click(function () {
    $(".drop__btn").toggleClass("drop__btn--active");
    $(".drop__submenu").slideToggle("200");
  });


  $(".jq-selectbox__select").click(function () {
    $(".jq-selectbox__select").toggleClass("select-style--active");
  });




  $('.slider-main__list').slick({
    infinite: false,
    prevArrow: '<button type="button" class="slider-main__arrow slider-main__arrow--prev"><svg class="slider-main__arrowsvg"><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slider-main__arrow slider-main__arrow--next"><svg class="slider-main__arrowsvg"><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [{
      breakpoint: 769,
      settings: {
        arrows: false,
        dots: true,
        autoplay: true
      }
    }, ]
  });


  $('.form-buy__box button').click(function () {
    var max_count = 99;
    var $input = $(this).parents('.form-buy').find('.form-buy__num');
    if ($(this).hasClass('form-buy__btn--minus')) {
      var count = parseFloat($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
    } else {
      var count = parseFloat($input.val()) + 1
      count = count > max_count ? max_count : count;
      $input.val(count);
    }

    $input.change();
    return false;
  });



  $('.burger').on('click', function () {
    $('.rightside-menu').removeClass('rightside-menu--close');
  });
  $('.rightside-menu__close').on('click', function () {
    $('.rightside-menu').addClass('rightside-menu--close');
  });


  $('.brands-slider__list').slick({
    slidesToShow: 6,
    infinite: true,
    autoplay: false,
    arrows: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true

        }
      }
    ]
  });

  if (window.innerWidth < 769) {
    $('.form-search').hide();
    $(".general-btn--search").click(function () {
      $(".form-search").toggleClass(".form-search--active");
      $(".form-search").slideToggle("200");
    });
  }


  var cur_width = $(window).width();

  $(window).resize(function () {
    if ($(window).width() <= 768 && cur_width > 768) {
      //reload
      location.reload();
    } else if ($(window).width() > 768 && cur_width <= 768) {
      //reload
      location.reload();
    }
  });


  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

});





$("#filter-category-btn").click(function () {
  $(this).toggleClass("filter__btn--active");
  $(".filter__submenu--category").slideToggle("200");
});

$("#filter-brands-btn").click(function () {
  $(this).toggleClass("filter__btn--active");
  $(".filter__submenu--brands").slideToggle("200");
});


$("#filter-offer-btn").click(function () {
  $(this).toggleClass("filter__btn--active");
  $(".filter__submenu--offer").slideToggle("200");
});


$("#filter-price-btn").click(function () {
  $(this).toggleClass("filter__btn--active");
  $(".filter__submenu--price").slideToggle("200");
});


var Scrollbar = window.Scrollbar;

var options = {
  'damping': 0.05,
  'alwaysShowTracks': false,
}

Scrollbar.init(document.querySelector('.filter__submenu'), options);
Scrollbar.init(document.querySelector('.filter__submenu--offer'), options);
Scrollbar.init(document.querySelector('.filter__submenu--brands'), options);
Scrollbar.init(document.querySelector('.filter__submenu--price'), options);





var $range = $(".filter-price__input");
var $inputFrom = $("#filter-price__box-input-from");
var $inputTo = $("#filter-price__box-input-to");
var instance;
var min = 0;
var max = 10000000000;
var from = 0;
var to = 0;


$range.ionRangeSlider({
  skin: "round",
  type: "double",
  min: min,
  max: max,
  onStart: updateInputs,
  onChange: updateInputs,
  onFinish: updateInputs
});

instance = $range.data("ionRangeSlider");

function updateInputs(data) {
  from = data.from;
  to = data.to;

  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);
}

$inputFrom.on("change", function () {
  var val = $(this).prop("value");

  // validate
  if (val < min) {
    val = min;
  } else if (val > to) {
    val = to;
  }

  instance.update({
    from: val
  });

  $(this).prop("value", val);

});

$inputTo.on("change", function () {
  var val = $(this).prop("value");

  // validate
  if (val < from) {
    val = from;
  } else if (val > max) {
    val = max;
  }

  instance.update({
    to: val
  });

  $(this).prop("value", val);
});


$('.filter-content__btn').on('click', function () {
  $('.filter-content__btn').removeClass('filter-content__btn--active');
  $(this).addClass('filter-content__btn--active')
});

$('#filter-btn-list').on('click', function () {
  $('.product-card').addClass('product-card--list')
  $('.catalog-content__list').addClass('catalog-content__list--wide')
  $('.catalog-content__item').addClass('catalog-content__item--list')
});

$('#filter-btn-grid').on('click', function () {
  $('.product-card').removeClass('product-card--list')
  $('.catalog-content__list').removeClass('catalog-content__list--wide')
  $('.catalog-content__item').removeClass('catalog-content__item--list')
});


$('.filters-btn').on('click', function () {
  $('#filters-btn').toggleClass('filters-btn--active');
  $('.filters').toggleClass('filters--active');
  $('.catalog__close-btn').addClass('catalog__close-btn--active')
});

$('.catalog__close-btn').on('click', function () {
  $('.catalog__close-btn').removeClass('catalog__close-btn--active')
  $('.filters').removeClass('filters--active')
});

$('.select-style').styler({

});


if ($('#filter-btn-grid').hasClass('filter-content__btn--active')) {
  $('.product-card').addClass('product-card--grid')
}