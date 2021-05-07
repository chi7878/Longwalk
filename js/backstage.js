$(document).ready(function () {
    $('.icon-btn__add').click(function (e) { 
        e.preventDefault();
        $('.popup').removeClass('popup-hidden');
    });

    $('.icon-btn__edit').click(function (e) { 
        e.preventDefault();
        $('.popup').removeClass('popup-hidden');
    });

    $('.popup-btn_close').click(function (e) { 
        e.preventDefault();
        $('.popup').addClass('popup-hidden');
    });
});