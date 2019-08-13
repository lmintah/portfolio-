$(window).on("load", function() {
  $(".loader .inner").fadeOut(500, function() {
    $(".loader").fadeOut(750);
  });

  $(".items").isotope({
    filter: '*',
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false,
    }
  });

})

$(document).ready(function(){
  $('#slides').superslides({
    animation:'fade',
    play: 3000,
    pagination: false,
  });

  let typed = new Typed(".typed", {
    strings: ["Software Developer.", "MBA Student.","Front-End Engineer.", "Freelancer."],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false,
  });

  $('.owl-carousel').owlCarousel({
      loop:false,
      items:4,
      responsive:{
          0:{
              items:1
          },
          480:{
              items:2
          },
          760:{
              items:3
          },
          938:{
              items:4
          },
      }
  });



    let skillTopOffset = $(".skillsSection").offset().top;

    let statsTopOffset = $(".statsSection").offset().top;

    let countUpFinished = false;


    $(window).scroll(function(){
      if (window.pageYOffset > skillTopOffset -$(window).height() + 200) {

        $('.chart').easyPieChart({
              easing: 'easeInOut',
              barColor: 'red',
              trackColor: false,
              scaleColor: false,
              lineWidth: 4,
              size: 152,
              onStep: function(from, to, percent){
                $(this.el).find('.percent').text(Math.round(percent));
              },
          });

      }

      if (!countUpFinished && window.pageYOffset > statsTopOffset -$(window).height() + 200) {

            $(".counter").each(function(){
              let element = $(this);
              let endVal = parseInt(element.text());
              element.countup(endVal);
            })

            countUpFinished = true;
        }

    });

    $("[data-fancybox]").fancybox();



    $("#filters a").click(function () {
      $("#filters .current").removeClass("current");
      $(this).addClass("current");

      let selector = $(this).attr("data-filter");

      $(".items").isotope({
          filter: selector,
          animationOptions: {
          duration: 1500,
          easing: 'linear',
          queue: false,
        }
      });

      return false;
    });


    $("#navigation li a").click(function(e){
      e.preventDefault();

      let targetElement = $(this).attr("href");
      let targetPosition = $(targetElement).offset().top;
      $("html, body").animate({scrollTop: targetPosition -50}, "slow");


    });







    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {

      let body = $("body");

      if ($(window).scrollTop() >= navTop) {
        body.css("padding-top", nav.outerHeight() + "px");
        body.addClass("fixedNav");
      } else {
        body.css("padding-top", 0);
        body.removeClass("");
      }


    }

});
