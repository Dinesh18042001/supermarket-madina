let nav = document.querySelector(".navbar");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
};




$('.banner-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav: false,
    // autoplay: true, 
    // autoplayTimeout: 3000, 
    // autoplayHoverPause: true, 
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.contagious-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav: false,
    autoplay: true, 
    autoplayTimeout: 3000, 
    autoplayHoverPause: true, 
    responsive:{
        0:{
            items:2
        },
        600:{
            items:5
        },
        1000:{
            items:8
        }
    }
})

// counter 
$(document).ready(function() {

    $('.counter').each(function () {
    $(this).prop('Counter',0).animate({
    Counter: $(this).text()
    }, {
    duration: 4000,
    easing: 'swing',
    step: function (now) {
    $(this).text(Math.ceil(now));
    }
    });
    });
    
    });



    $('.owl-testimonial').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        navText : [
            '<i class="fa-solid fa-chevron-left"></i>',
            '<i class="fa-solid fa-chevron-right"></i>'
        ],
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })



    
    