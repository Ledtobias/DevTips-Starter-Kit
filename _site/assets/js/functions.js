// Parallax Logo

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.logo').css({
    'transform' : 'translate(0px, '+ wScroll /1 +'%)'
  });

  $('.arrow_scrolldown').css({
    'transform' : 'translate(0px, '+ wScroll /2 +'%)',
    'opacity' : 1 - wScroll
  });

});
