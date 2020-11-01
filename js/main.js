$('#votes').on('click', () => {
    if($('.votes').is(":visible")) {
        $('.votes').fadeOut(500);
    } else {
        $('.votes').fadeIn(500);
    }
});