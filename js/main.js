
$(document).ready(function(){
    $("#lightgallery").lightGallery();

    $(".set > a").on("click", function() {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          $(this)
            .siblings(".content")
            .slideUp(200);
          $(".set > a i")
            .removeClass("fa-minus")
            .addClass("fa-plus");
        } else {
          $(".set > a i")
            .removeClass("fa-minus")
            .addClass("fa-plus");
          $(this)
            .find("i")
            .removeClass("fa-plus")
            .addClass("fa-minus");
          $(".set > a").removeClass("active");
          $(this).addClass("active");
          $(".content").slideUp(200);
          $(this)
            .siblings(".content")
            .slideDown(200);
        }
      });
	
      $(window).on('load', function(event) {
        $('body').removeClass('preloading');
           // $('.load').delay(1000).fadeOut('fast');
        $('.loader').delay(2000).fadeOut('fast');
     });
	
});