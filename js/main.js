$(window).enllax({
type: 'background',
ratio: 0.5,
direction: 'vertical'
});


$(document).ready(function() {
$('.owl-carousel').owlCarousel({
    loop: true,
    // margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        765:{
            items:2
        },
        1200:{
            items: 3
        }
    },
    autoplay:true,
    autoplayTimeout:6000,
    speed:1000,
    smartSpeed:1000,
    nav:true,
    navText : ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"]
});
  $(".popup").magnificPopup({type:"image"});
  $(".popup_content").magnificPopup({
    type:"inline",
    midClick: true
  });
});


$(document).ready(function(){
    $(".click-1").click(function(){
        $(".toggle-1").fadeIn(400);
        $("body").css("overflow","hidden");
    });
    $(".close-i").click(function(){
        $(".toggle-1").fadeOut(400);
        $("body").css("overflow","inherit");
    });
    $(".click-2").click(function(){
        $(".toggle-2").fadeIn(400);
        $("body").css("overflow","hidden");
    });
    $(".close-i").click(function(){
        $(".toggle-2").fadeOut(400);
        $("body").css("overflow","inherit");
    });
    $(".click-3").click(function(){
        $(".toggle-3").fadeIn(400);
        $("body").css("overflow","hidden");
    });
    $(".close-i").click(function(){
        $(".toggle-3").fadeOut(400);
        $("body").css("overflow","inherit");
    });
    $(".work-click-1").click(function(){
        $(".work-toggle-1").fadeIn(400);
        $("body").css("overflow","hidden");
    });
    $(".close-i").click(function(){
        $(".work-toggle-1").fadeOut(400);
        $("body").css("overflow","inherit");
    });
    $(".fade-scroll").click(function(){
        $(".work-toggle-1").fadeOut(400);
        $("body").css("overflow","inherit");
    });
    $(".application-scroll").click(function(event){   
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
    
  });
});