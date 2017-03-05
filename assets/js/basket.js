var basket = (function(){

  function updateBasketLink(data){
    if(data.basket.length > 0){
      $link.html('<span class="theme__highlight button">View order ( ' + data.basket.length + ' )</span>');
    }
  }

  if($.cookie('supply') == undefined){
    $.cookie('supply', JSON.stringify({
      name: "",
      email: "",
      fullfilled: false,
      basket: []
    }), { expires: 7 });
  }

  var $modal = $('.js-basket'),
      $link = $('.js-view-basket'),
      data = JSON.parse($.cookie('supply'));


  updateBasketLink(data);

  /////////

  $('.js-view-basket').on('click', function(){
    $modal.show();

    var source = $("#js-basket-item-template").html(),
        template = Handlebars.compile(source);

    $('.js-basket-items', $modal).html(template(JSON.parse($.cookie('supply'))));

  });

  $('.js-close-basket').on('click', function(){
    $modal.hide();
  });

  $('.js-add-to-basket').on('click', function(e){
    e.stopPropagation();

    var data = JSON.parse($.cookie('supply'));

    data.basket.push({
      design: $('.js-change-design').data('chosen'),
      size: $('.js-change-size').data('chosen'),
      colour: $('.js-change-colour').data('chosen')
    });

    $.cookie('supply', JSON.stringify(data), { expires: 7 });

    updateBasketLink(JSON.parse($.cookie('supply')));

  });

})();
