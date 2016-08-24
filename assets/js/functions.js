// Parallax Logo

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  if(wScroll > $(window).height() - 200){
    $('.logo').addClass('logoFixed').css({
      'transform' : 'translate(0px, '+ 100% - 200 +'%)',
      position : 'fixed'
    })
  } else {
    $('.logo').removeClass('logoFixed').css({
      'transform' : 'translate(0px, '+ wScroll /1.2 +'%)',
      position : 'static'
    });
  }

// Parallax Scrolldown-Arrow

  $('.arrow_scrolldown').css({
    'transform' : 'translate(0px, '+ wScroll /2 +'%)',
    'opacity' : 1 - wScroll/150
  });

});
