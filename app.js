$('.digital-t').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navigation: true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})
$('.succ-sto').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navigation: true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
$('.logo').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    navigation: false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

$(function() {
    // Add the hover() method for #language-wrapper
    $('#language-wrapper').hover(
      function() {
        $('.language-text').fadeIn();
      },
      function() {
        $('.language-text').fadeOut();
      }
    );
  });