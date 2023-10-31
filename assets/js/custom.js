$(document).ready(function(){
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    $('#jingle').click(function(){
        $(this).toggleClass("expand");
        tooltipList.forEach((el) => {
            el.hide();
        });
    });

    function elementScrolled(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }

    $(window).scroll(function(){
        if(elementScrolled('.about-us')) {
            $('.about-us').addClass('visible');
        }
        if(elementScrolled('.community')) {
            $('.community').addClass('visible');
        }
        $('.services .item').each(function(){
            if(elementScrolled($(this))) {
                $(this).addClass('visible');
            }
        });
        if(elementScrolled('footer')) {
            $('footer').addClass('visible');
        }
    });
});

// swiper js

var swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    slidesPerGroupSkip: 3,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    fade: true,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      1280: {
        slidesPerView: 3,
      },
      769:{
        slidesPerView: 2,
      },
      600:{
        slidesPerView: 1,
        slidesPerGroupSkip: 1,
      }
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });