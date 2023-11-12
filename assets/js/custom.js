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

    $('.carousel').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        autoplay: true,
        arrows: true,
        prevArrow:'<button class="slick-prev slick-arrow" aria-label="Previous" type="button" aria-disabled="false" style=""><img src="assets/images/icons/carousel-left-arrow.webp" alt="Prvious" class="img-fluid"/></button>',
        nextArrow:'<button class="slick-next slick-arrow slick-disabled" aria-label="Next" type="button" style="" aria-disabled="true"><img src="assets/images/icons/carousel-right-arrow.webp" alt="Next" class="img-fluid"/></button>',
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: false,
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
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