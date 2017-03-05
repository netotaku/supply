
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

var basket = (function(){

})();

var chooseDesign = (function(){

  var $slider = $('.js-print-slider');
      $slides = $('.js-print-slide', $slider);

  $slides.first().addClass('is-active');

  $('.js-toggle-design').on('click', function(e){
    e.preventDefault();
    var i = $('.is-active', $slider).index();
    i = ++i >= $slides.length ? 0 : i;
    $($slides.removeClass('is-active').get(i)).addClass('is-active');
  });

})();

$(function(){
  var $workspace = $('#js-workspace'),
      email = param('e');

  // console.log(email);

});
