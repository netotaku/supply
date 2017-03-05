


/////////

var colourChooser = (function(){

  var colours = getdata('#colour-data'),
      $chooser = $('.js-change-colour'),
      $fill = $('.js-fill-polygon', $chooser),
      $theme = $('.theme'),
      i = 0;

  $chooser.on('click', function(e){
    e.stopPropagation();
    removeStupidBEMClass($theme, /(^|\s)theme--\S+/g);
    removeStupidBEMClass($fill, /(^|\s)shirt__fill__polygon--\S+/g);
    var colour = colours[i = (++i >= colours.length) ? 0 : i];
    $fill.addClass('shirt__fill__polygon--'+colour.modifier);
    $theme.addClass('theme--'+colour.modifier);
  });

})();
