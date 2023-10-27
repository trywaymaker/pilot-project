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
});