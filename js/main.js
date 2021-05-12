$(document).ready(function () {
    const apiRoute = `https://taipeigrandtrail.travel.taipei`;

    $('.nav-item__btn_dropdown').click(function() {
        $('.nav-dropdown').toggle();
    });

    $('.nav-mobile__list > .nav-mobile__item:not(:nth-child(4))').click(function() {
        setTimeout(() => $('.nav-mobile__menu').removeClass('nav-mobile__menu_show'), 0);
    });

    $(".news-list").overlayScrollbars({});
    $(".nav-mobile__menu-scrollbar").overlayScrollbars({});

    const id = new URLSearchParams(window.location.search).get('id');

    $.ajax({
        type: "GET",
        url: `${apiRoute}/api/activity`,
        dataType: "json",
        success: function (response) {
            const path = location.href.replace(/\\/g,'/').replace(/\/[^\/]*$/, '');
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

            if (window.location.href.indexOf('themeactivity') !== -1 && id !== null) {
                const findData = response.find(function(data) {
                    return data.id.toString() === id;
                })
        
                $('.theme-box > h3').text(findData.title);
                $('.theme-box > p').text(findData.content);
                $('.theme-date__item:nth-child(1) > p').text(findData.start_time);
                $('.theme-date__item:nth-child(2) > p').text(findData.end_time);
                $('.theme-btn').attr('class',`theme-btn theme-btn_${findData.status === '0' ? 'null' : (findData.status === '1' ? 'open' : 'close')}`);
                $('.theme-btn').text(findData.status === '0' ? '活動報名尚未開放' : (findData.status === '1' ? '活動報名' : '報名已額滿'));
                $('.theme-btn').attr('href', findData.url);
            } else if (window.location.href.indexOf('themeactivity') !== -1 && id === null) {
                window.location.href =  `${path}/index.html`;
            }
        }
    });

    if (window.location.href.indexOf('themeactivity') !== -1 && id !== null) { 
        $.ajax({
            type: "GET",
            url: `${apiRoute}/api/activity_photos`,
            dataType: "json",
            data: {activity_id: id},
            success: function (response) {
                if(response.length === 0) {
                    $('.info-carousel-box').hide();
                    return;
                }

                let strHtml = '';
                response.forEach(item => {
                    strHtml += `
                    <div class="info-carousel__link">
                        <div class="info-carousel__wrapper">
                            <img src="${apiRoute}/api/activity_photo?model=activity&file_name=${item.content.split('/storage/activity/')[1]}" alt="carousel image">
                        </div>
                    </div> 
                    `
                });
                $('.info-carousel').html(strHtml);

                $(".info-carousel").slick({
                    pauseOnFocus: false,
                    dots: true,
                    prevArrow: `<button type="button" class="prev-button carousel-button">Previous
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-circle-right" class="svg-inline--fa fa-chevron-circle-right fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path></svg>
                    </button>`,
                    nextArrow: `<button type="button" class="next-button carousel-button">Next
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-circle-right" class="svg-inline--fa fa-chevron-circle-right fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path></svg>
                    </button>`,
                    dotsClass: `dots-item`,
                    focusOnSelect: true,
                });
            }
        });
    }

    if (window.location.href.indexOf('newsInfo') === -1 && window.location.href.indexOf('themeactivity') === -1) {
        $(".info-carousel").slick({
            pauseOnFocus: false,
            dots: true,
            prevArrow: `<button type="button" class="prev-button carousel-button">Previous
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-circle-right" class="svg-inline--fa fa-chevron-circle-right fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path></svg>
            </button>`,
            nextArrow: `<button type="button" class="next-button carousel-button">Next
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-circle-right" class="svg-inline--fa fa-chevron-circle-right fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path></svg>
            </button>`,
            dotsClass: `dots-item`,
            focusOnSelect: true,
        });
    }


    $('.nav-item__btn_news').click(function() {
        $('html,body').animate({scrollTop: $('#news').offset().top}, 500);
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

    $('.box').hide();
    if ($(document).width() <= 996) {
        $('.map-path').click(function (e) { 
            e.preventDefault();
            const path = location.href.replace(/\\/g,'/').replace(/\/[^\/]*$/, '');
            window.location.href =  `${path}/relatedinfo.html?id=${e.currentTarget.dataset.id}`;
        });
    } else {
        let relatedData = [
            {title: '第一段', color: '#c37e7a', position: {top: 330, left: 842}},
            {title: '第二段', color: '#d0935b', position: {top: 350, left: 1050}},
            {title: '第三段', color: '#79adb1', position: {top: 426, left: 1174}},
            {title: '第四段', color: '#967796', position: {top: 309, left: 1148}},
            {title: '第五段', color: '#d4c2c9', position: {top: 303, left: 928}},
            {title: '第六段', color: '#9eb382', position: {top: 920, left: 783}},
            {title: '第七段', color: '#dfdd84', position: {top: 715, left: 615}},
            {title: '第八段', color: '#b6cbd4', position: {top: 640, left: 611}}
        ]
        
        $('.map-box').mouseover(function(event) {
            if (['box', 'related-text', 'related-btn'].includes(event.target.className)) {
                $('.box').show();
            } else if (event.target.nodeName === 'path') {
                const data = relatedData[parseInt(event.target.dataset.id, 10) - 1];
                $('.related-text').text(data.title);
                $('.related-btn').each(function(index) {
                    $(this).css("background-color", data.color);
                    $(this).attr("href", 
                    `relatedinfo.html?id=${event.target.dataset.id}#${index === 0 ? 'shop' : (index === 1 ? 'travel' : 'attractions') }`);
                });

                $('.box').show();
                $('.box').attr('style', 
                `top: ${data.position.top}px;left:${data.position.left}px`);
            }
                
        }).mouseout(function (event) {
            $('.box').hide();
        });
    }

});