
$(document).ready(function(){


  function changeBackgroundImage(img){
  $('.main-promo .promo-background').clone(true).css("background-image", 'url("' + img + '")').appendTo('.main-promo');
  $('.main-promo .promo-background').first().css('z-index', '20').fadeOut(1000, function(){
    $(this).remove();
    });
  };

  function cycleActive() {
  //Check to make sure the first item exists, otherwise select the first item
  if( $('.promo-list .active').next().length > 0)
  {
    $('.promo-list .active').next().click();
  }
  else
  {
    $('.promo-list li').first().click();
  }
  };


  $('.promo-list li').click(function(){
    // clearTimeout(timer);
    $('.promo-list .active').removeClass('active');
    $(this).addClass('active');
    changeBackgroundImage($(this).data('image'));

    // setTimeout(cycleActive, 5000);
  });

    setInterval(cycleActive, 5000);

});



