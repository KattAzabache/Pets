// deslis lento
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
  $('html,body').animate({
     scrollTop: target.offset().top - 0 
    } , 1000);
      return false;
    }
  }
 });
});

/*scroll*/
$(document).ready(function() {
    $(document).scroll(function () {
        var scroll = $(this).scrollTop();
        var topDist = $(".navegacion").position();
        if (scroll > topDist.top) {
            console.log("prueba");
            $('.navbar').addClass("navbar-fixed-top");
        } else {
            console.log("no");
            $('.navbar').removeClass("navbar-fixed-top");
        }
    });
});