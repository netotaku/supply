var designChooser = (function(){

  var $sliders = $('.js-print-slider'),
      $chooser = $('.js-change-design');

  function setData(modifier){
    $chooser.data('chosen', modifier);
  }

  $sliders.each(function(){
    var $first = $('.js-print-slide', $(this)).first().addClass('is-active');
    setData($first.data('modifier'));
  })

  $chooser.on('click', function(e){
    e.stopPropagation();

    $sliders.each(function(){

      var $this = $(this),
          $slides = $('.js-print-slide', $this),
          i = $('.is-active', $(this)).index(),
          $active = $($slides.removeClass('is-active').get(i = ++i >= $slides.length ? 0 : i)).addClass('is-active');

      setData($active.data('modifier'));

    });

  });

})();
