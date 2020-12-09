$('#votes').on('click', () => {
    if($('.votes').is(":visible")) {
        $('.votes').fadeOut(500);
        $('.holder').show(0);
    } else {
        $('.holder').hide(0);
        $('.votes').fadeIn(500);
    }
});