(function($) {
    $(document).ready(function() {
  
      $(".Fondo1").click(function() {
        $('.FONDOJM').css("background","linear-gradient(0deg, rgb(1 4 20) 0%, rgb(1 31 62), rgb(4 11 40) 100%)");
        $('.FONDOJM').css("background-attachment", "fixed");
      });
  
      $(".Fondo2").click(function() {
        $('.FONDOJM').css("background", "linear-gradient(0deg, rgb(15 0 22) 0%, rgb(18 0 18), rgb(67 1 88) 100%)");
        $('.FONDOJM').css("background-attachment", "fixed");
      });

      $(".Fondo3").click(function() {
        $('.FONDOJM').css("background-image", "url(./imagenes/background13.jpg)");
        $('.FONDOJM').css("background-attachment", "fixed");
        $('.FONDOJM').css("background-size", "cover");
      });
      
      $(".Fondo4").click(function() {
        $('.FONDOJM').css("background-image", "url(./imagenes/background9.jpg)");
        $('.FONDOJM').css("background-attachment", "fixed");
        $('.FONDOJM').css("background-size", "cover");
      });
  
      $(".Fondo5").click(function() {
        $('.FONDOJM').css("background-image", "url(./imagenes/background4.jpg)");
        $('.FONDOJM').css("background-attachment", "fixed");
        $('.FONDOJM').css("background-size", "cover");
      });



$(".foodie2").click(function() {
        $('.FONDOJM').css('background-image', "url(./imagenes/background4.jpg)");
      });





    });
  })(jQuery);


