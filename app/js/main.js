$(function () {

  $('button').mouseup(function () {
    this.blur();
  });



  $('.drop__list-item ul').hide();
  $(".drop__list-item a").click(function () {
    $(".drop__list-link--leader").toggleClass("drop__list-link--leader--active");
    $(this).parent(".drop__list-item").children("ul").slideToggle("200");
  });


  $('.slider').slick({
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><svg class="slider__arrow"><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="slider__arrow"><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>'

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