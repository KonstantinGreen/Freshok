$(function () {

  $('button').mouseup(function () {
    this.blur();
  });


  $('.drop__submenu').hide();
  $(".drop__btn").click(function () {
    $(".drop__btn").toggleClass("drop__btn--active");
    $(".drop__submenu").slideToggle("200");
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


  $('.counter-block__box button').click(function () {
    var max_count = 99;
    var $input = $(this).parents('.counter-block').find('input.counter-block__num');
    if ($(this).hasClass('counter-block__btn--minus')) {
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


  $('.brands-slider__inner').slick({
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
  $(".filter__btn").toggleClass("filter__btn--active");
  $(".filter__submenu--category").slideToggle("200");
});

$("#filter-brands-btn").click(function () {
  $(".filter__btn").toggleClass("filter__btn--active");
  $(".filter__submenu--brands").slideToggle("200");
});


$("#filter-offer-btn").click(function () {
  $(".filter__btn").toggleClass("filter__btn--active");
  $(".filter__submenu--offer").slideToggle("200");
});


$("#filter-price-btn").click(function () {
  $(".filter__btn").toggleClass("filter__btn--active");
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


$('.select-style').styler({

});