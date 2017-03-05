var sizeChooser = (function(){

  var i = 0,
      sizes = getdata('#size-data'),
      $chooser = $('.js-change-size'),
      $heading = $('.js-size-heading', $chooser),
      $subheading = $('.js-size-subheading', $chooser);

  function setText(i){
    var size = sizes[i];
    $heading.html(size.size);
    $subheading.html(size.label);
    $chooser.data('chosen', size.size + ' ' + size.label);
  }

  setText(i);

  $('.js-change-size').on('click', function(e){
    e.stopPropagation();
    setText(i = (++i >= sizes.length) ? 0 : i);
  });

})();
