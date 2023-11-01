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