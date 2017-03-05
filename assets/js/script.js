
function removeStupidBEMClass($el, pattern){
  $el.removeClass(function (index, className) {
    return (className.match (pattern) || []).join(' ');
  });
}

function getdata(id){
  return JSON.parse($(id).html());
}

$(function(){

});
