$(document).ready(function () {
    $('.nav-item__btn_dropdown').click(function() {
        $('.nav-dropdown').toggle();
    })

    $(window).scroll(function (event) {
        if($(window).width() < 992) {
            return;
        }

        let scroll = $(window).scrollTop();

        if (scroll > 24){
            $('.nav').addClass('nav-scroll');
        } else {
            $('.nav').removeClass('nav-scroll');
        }
    });

    $(".news-list").overlayScrollbars({});

    $(".info-carousel").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnFocus: false,
        dots: true,
        centerMode: true,
        prevArrow: `<button type="button" class="prev-button carousel-button">Previous
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-circle-right" class="svg-inline--fa fa-chevron-circle-right fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path></svg>
        </button>`,
        nextArrow: `<button type="button" class="next-button carousel-button">Next
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-circle-right" class="svg-inline--fa fa-chevron-circle-right fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path></svg>
        </button>`,
        dotsClass: `dots-item`,
        focusOnSelect: true,
    });

    $('.nav-item__btn_news').click(function() {
        console.log(true);
        $('html,body').animate({
            scrollTop: $('#news').offset().top 
        }, 500);
    });

    $('.nav-mobile__href_activity').click(function() {
        $('.nav-mobile__item_activity').slideToggle( "slow" );
    })

    $('.menu').click(function() {
        $('.menu').toggleClass( "menu__active" );
        $('.nav-mobile__menu').toggleClass( "nav-mobile__menu_show" );
    })

    // $(window).click(function(event) {
    //     console.log(event);
    //     $('.nav-dropdown').hide();
    // })
});