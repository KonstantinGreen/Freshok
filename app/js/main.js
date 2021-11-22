$(function () {

  $('button').mouseup(function () {
    this.blur();
  });



  $('.drop__list-item ul').hide();
  $(".drop__list-item button").click(function () {
    $(".drop__list-btn").toggleClass("drop__list-btn--active");
    $(this).parent(".drop__list-item").children("ul").slideToggle("200");
  });


  $('.slider-main').slick({
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><svg class="slider__arrow-main"><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="slider__arrow-main"><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>'
  });


  $('.counter-block__box span').click(function () {
    var max_count = 99;
    var $input = $(this).parents('.counter-block').find('input.counter-block__num');
    if ($(this).hasClass('counter-block__minus')) {
      var count = parseFloat($input.val()) - 1;
      count = count < 1 ? 1 : count;
      if (count < 2) {
        $(this).addClass('dis');
      } else {
        $(this).removeClass('dis');
      }
      $input.val(count);
    } else {
      var count = parseFloat($input.val()) + 1
      count = count > max_count ? max_count : count;
      $input.val(count);
      if (count > 1) {
        $(this).parents('.counter-block').find(('.counter-block__minus')).removeClass('dis');
      }
    }

    $input.change();
    return false;
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