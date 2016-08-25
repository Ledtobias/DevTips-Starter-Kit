// Parallax Logo

$(document).scroll(function(){
  var wScroll = $(this).scrollTop();

  if(wScroll > $(window).height()){
    $('.logo').addClass('logoFixed').css({
      'transform' : 'translate(0px, 0px)'
    })
  } else {
    $('.logo').removeClass('logoFixed').css({
      'transform' : 'translate(0px, -'+ wScroll /2 +'%)'
    });
  }

// Parallax Scrolldown-Arrow

  $('.arrow_scrolldown').css({
    'transform' : 'translate(0px, '+ wScroll /2 +'%)',
    'opacity' : 1 - wScroll/150
  });

  // Menu FadeIn

  if (wScroll > $(window).height() -50){
    $('.menu').fadeIn().css({
      'display' : 'flex'
    });
  } else {
    $('.menu').fadeOut()
  }

});
