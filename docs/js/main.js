// optional
// $('#blogCarousel').carousel({
//     interval: 5000
// });
console.log("JQuery not Loaded");
jQuery(function($) {
  $("[role=tab-btn]").each(function(){
    var target = $(this).attr("target"); 

    $(this).unbind("click").bind("click", function(curr){
      $(this)
        .parent().parent().addClass("bg-white").siblings().removeClass("bg-white")

      curr.preventDefault()
        $(target).addClass("active").siblings().hide().removeClass("active").end().show();
        
    })
  })

  $("div.bubble.round").click(function(){
    var curr = this;
    $(this).addClass("viewing").siblings().removeClass("viewing")

    $(".tab-pane.active div.bubble.round").eq(0).each(function(){
      if(this == curr){ console.log("on current"); return }
      $(curr).insertBefore(this);

    //   $(curr).animate({
    //     'boxShadowX': '10px',
    //     'boxShadowY':'10px',
    //     'boxShadowBlur': '20px'
    })
  })


});
var myCarousel = document.querySelector('#blogCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
}); 
