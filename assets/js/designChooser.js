var designChooser = (function(){

  var $sliders = $('.js-print-slider');

  $sliders.each(function(){
    $('.js-print-slide', $(this)).first().addClass('is-active');
  })

  $('.js-change-design').on('click', function(e){
    e.preventDefault();

    $sliders.each(function(){

      var $this = $(this),
          $slides = $('.js-print-slide', $this),
          i = $('.is-active', $(this)).index();

      $($slides.removeClass('is-active').get(i = ++i >= $slides.length ? 0 : i)).addClass('is-active');

    });

  });

})();
