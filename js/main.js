$(document).ready(function () {
    const apiRoute = `https://taipeigrandtrail.travel.taipei`;

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
    $(".nav-mobile__list").overlayScrollbars({});

    $.ajax({
        type: "GET",
        url: `${apiRoute}/api/activity`,
        dataType: "json",
        success: function (response) {
            let strHtml = '';
            let phoneStrHtml = '';
            response.forEach(function(data) {
                strHtml += `
                <a href="themeactivity.html?id=${data.id}" class="nav-dropdown__item">
                    <img class="nav-dropdown__icon" src="./images/activityicon.png" alt="">
                    <p class="nav-dropdown__title">${data.title}</p>
                </a>`;
                phoneStrHtml += `
                <a href="themeactivity.html?id=${data.id}" class="nav-mobile__activity-item">
                    <img src="./images/activityicon.png" alt="">
                    <p>${data.title}</p>
                </a>`;
            })
            $('.nav-dropdown').html(strHtml);
            $('.nav-mobile__activity-list').html(strHtml);

            if (window.location.href.indexOf('themeactivity') !== -1) {
                const id = new URLSearchParams(window.location.search).get('id');
                const findData = response.find(function(data) {
                    return data.id.toString() === id;
                })
        
                $('.theme-box > h3').text(findData.title);
                $('.theme-box > p').text(findData.content);
                $('.theme-btn').attr('class',`theme-btn theme-btn_${findData.status === '0' ? 'null' : (findData.status === '1' ? 'open' : 'close')}`);
                $('.theme-btn').text(findData.status === '0' ? '活動報名尚未開放' : (findData.status === '1' ? '活動報名' : '報名已額滿'));
            }
        }
    });

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
        $('.nav-mobile__item_activity').slideToggle("slow");
        $('.nav-mobile__span').toggleClass("nav-mobile__span_rotate");
    })

    $('.menu').click(function(event) {
        $('.menu').toggleClass( "menu__active" );
        $('.nav-mobile__menu').toggleClass( "nav-mobile__menu_show" );
    })

    $(window).click(function (e) { 
        const classlist = ['', '__item', '__icon', '__title'];
        if (!classlist.find(item => `nav-dropdown${item}` === e.target.className) && 
        'nav-item__btn nav-item__btn_dropdown' !== e.target.className) {
            $('.nav-dropdown').hide();
        }
    });

    $('.map').hover(function (event) {
            console.log(123, event);
            
        }, function () {
            // out
        }
    );
});