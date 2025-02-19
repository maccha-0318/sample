

$('.accordion-header').click(function() {
    $(this).next().slideToggle();
    $(this).toggleClass('active');
  });


  $(document).ready(function () {
    var nav = $(".nav");
    var fixedPosition = 10;

    $(window).scroll(function () {
        if ($(window).scrollTop() > fixedPosition) {
            nav.addClass("fixed");
        } else {
            nav.removeClass("fixed");
        }
    });
});

$("#button-top").on("click", function() {
    $("html, body").animate ({ scrollTop: 0 }, 500)
})

