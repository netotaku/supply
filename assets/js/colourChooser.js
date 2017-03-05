function data(id){
  return JSON.parse($('#colour-data').html());
}


function removeBEMClass($el){
  $el.removeClass(function (index, className) {
    return (className.match (/(^|\s)shirt__fill__polygon--\S+/g) || []).join(' ');
  });
}

// shirt__fill__polygon--

/////////

var colourChooser = (function(){

  var colours = data('#colour-data'),
      $chooser = $('.js-change-colour'),
      $fill = $('.js-fill-polygon', $chooser),
      i = 0;

  // console.log(colours);

  $chooser.on('click', function(e){
    e.preventDefault();
    removeBEMClass($fill);
    var colour = colours[i = (++i >= colours.length) ? 0 : i];
    $fill.addClass('shirt__fill__polygon--'+colour.modifier);
  });

})();
