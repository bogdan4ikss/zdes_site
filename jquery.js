$(document).ready(function(){
    $(".icon-bg").click(function () {
        $(".btn").toggleClass("active");
        $(".icon-bg").toggleClass("active");
        $(".container").toggleClass("active");
        $(".box-upload").toggleClass("active");
        $(".box-caption").toggleClass("active");
        $(".box-tags").toggleClass("active");
        $(".private").toggleClass("active");
        $(".set-time-limit").toggleClass("active");
        $(".button").toggleClass("active");
    });

    $(".button").click(function () {
        $(".button-overlay").toggleClass("active");
    });

    $(".iconmelon").click(function () {
        $(".box-upload-ing").toggleClass("active");
        $(".iconmelon-loaded").toggleClass("active");
    });

    $(".private").click(function () {
        $(".private-overlay").addClass("active");
        $(".private-overlay-wave").addClass("active");
    });
});

$(document).ready(function (){
    $('a[href^="#"]').on('click', function (e) {
      var hash = $(this).attr('href').split('#')[1];
      console.log(hash);
      $('html, body').stop(true,true).animate({
          scrollTop: $('#' + hash).offset().top - 100
      }, 1000);
      e.preventDefault();
    });
  });

