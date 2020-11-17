$(function(){
  //전체 메뉴
  
   var hamberger = $('.hamberger')
   var close = $('.menu .close')
   var menu = $('.menu')
 
   hamberger.click(function(){
     menu.show()
   })
 
   close.click(function(){
     menu.hide()
   })

   // 헤더 스크립트
  var header = $('.header')
  var goTop = $('.go_top') 


  $(window).scroll(function(){
    var scrollTopValue = $(document).scrollTop()
    
    if(scrollTopValue > 0){
      header.addClass('active')      
    }else(
      header.removeClass('active')      
    )


    if(scrollTopValue > 900){
      goTop.fadeIn()   
    }else(
      goTop.fadeOut()   
    )
  })

  goTop.click(function(){
  $('html, body').animate({scrollTop:0},400)
  }) 
   
})