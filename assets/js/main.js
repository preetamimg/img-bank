// // on scorll navbar
window.onscroll = function () {
    scrollFunction();
};
var first = true;
function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("navbar").classList.add('fixed-navbar');
    }
    else {
        document.getElementById("navbar").classList.remove('fixed-navbar');
    }
}

$(window).on("load", (function() {
    setTimeout((function() {
        $(".page-loader").fadeOut("slow"),
        $("body").removeClass("overflow-hidden")
    }
    ), 500)
}
));


// counter 

var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }
});



