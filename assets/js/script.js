
var param = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

//////

var colourChooser = (function(){

  var colours = JSON.parse($('#colour-data').html());
  console.log(colours);

})();

//////

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

      i = ++i >= $slides.length ? 0 : i;

      $($slides.removeClass('is-active').get(i)).addClass('is-active');

    });


  });

})();

$(function(){
  var $workspace = $('#js-workspace'),
      email = param('e');

  // console.log(email);

});
