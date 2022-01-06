$(document).ready(function () {
    const apiRoute = `https://taipeigrandtrail.travel.taipei`;

    $('.nav-item__btn_dropdown').click(function() {
        $('.nav-dropdown').toggle();
    });

    $('.nav-mobile__list > .nav-mobile__item:not(:nth-child(4))').click(function() {
        setTimeout(() =>{ 
            $('.nav-mobile__menu').removeClass('nav-mobile__menu_show');
            $('.menu').removeClass( "menu__active" );
        }, 0);
    });

    $(".news-list").overlayScrollbars({});
    $(".nav-mobile__menu-scrollbar").overlayScrollbars({});

    const id = new URLSearchParams(window.location.search).get('id');
    $('.theme-info > .theme-btn').hide();
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

                if (id === '17') {
                    let strHtml = '';
                    const list = [{title: '開發旅行社 - 富陽三寶變變變 + 101景觀台', href: 'https://www.kaifa04376942.com.tw/act0710.html'}, {title: '丘山行 - 富陽三寶變變變 + 一日郊山健行挑戰', href: 'https://hillmont.tw/activities/greenyourjourney/'}, {title: '易遊網 - 富陽三寶變變變 + 台北探索館', href: 'https://trip.eztravel.com.tw/domestic/introduction/ODT0000009355'}, {title: '永恆旅行社 - 富陽三寶變變變 + 101景觀台', href: 'https://www.kaifa04376942.com.tw/E-act0710.html'}];

                    list.forEach(function(data, i) {
                        strHtml += `<div><p>${data.title}</p><a target="_blank"><img src="images/專屬遊程+報名按鈕圖檔2.png"></a></div>`;
                    })

                    $('.theme-info > .theme-btn').hide();
                    $('.theme-btn-content').html(strHtml);
                } else if (id === '18') {
                    let strHtml = '';
                    const list = [{title: '開發旅行社 - 前進．探索未知的火山 + 北投老街', href: 'https://www.kaifa04376942.com.tw/act0724.html'}, {title: '丘山行 - 前進．探索未知的火山 + 一日郊山健行挑戰', href: 'https://hillmont.tw/activities/greenyourjourney2/'}, {title: '易遊網 - 前進．探索未知的火山 + 深坑老街', href: 'https://trip.eztravel.com.tw/domestic/introduction/ODT0000009356'}, {title: '永恆旅行社 - 前進．探索未知的火山 + 北投老街', href: 'https://www.kaifa04376942.com.tw/E-act0724.html'}];

                    list.forEach(function(data) {
                        strHtml += `<div><p>${data.title}</p><a target="_blank"><img src="images/專屬遊程+報名按鈕圖檔2.png"></a></div>`;
                    })

                    $('.theme-info > .theme-btn').hide();
                    $('.theme-btn-content').html(strHtml);
                } else if (id === '19') {
                    let strHtml = '';
                    const list = [{title: '開發旅行社-千階祈願，參道縱走+101景觀台+(與優人一起『雲腳』)', href: 'https://kaifa04376942.com.tw/act1200.html'}, {title: '可樂旅遊-千階祈願．參道縱走+與優人一起『雲腳』+貓空纜車、茶香麻糬體驗', href: 'https://www.colatour.com.tw/C10A_TourSell/C10A06_TourItinerary.aspx?PatternNo=96794'}, {title: '可樂旅遊-千階祈願．參道縱走+樟樹步道、貓空品茗', href: 'https://www.colatour.com.tw/C10A_TourSell/C10A06_TourItinerary.aspx?PatternNo=96821'}, {title: '丘山行-千階祈願．參道縱走', href: 'https://hillmont.tw/activities/greenyourjourney3'}, {title: '易遊網-千階祈願‧參道縱走+與優人一起『雲腳』+貓空茗茶一日遊', href: 'https://trip.eztravel.com.tw/domestic/project/PRM0000002858'}];

                    list.forEach(function(data) {
                        strHtml += `<div><p>${data.title}</p><a href="${data.href}" target="_blank"><img src="images/專屬遊程+報名按鈕圖檔1.png"></a></div>`;
                    })

                    $('.theme-info > .theme-btn').hide();
                    $('.theme-btn-content').html(strHtml);
                } else {
                    $('.theme-info > .theme-btn').show();
                    $('.theme-btn-group').hide();
                    $('.theme-btn').attr('class',`theme-btn theme-btn_null`);
                    $('.theme-btn').text('活動報名尚未開放');
                }

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
                if (response.length === 0) {
                    $('.info-carousel').hide();
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

    if(window.location.href.indexOf('newsInfo') === -1 && window.location.href.indexOf('themeactivity') === -1 && window.location.href.indexOf('routeInfo') === -1) {
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

    // $(window).scroll(function() {
    //     $('.box').hide();
    // });

    $('.box-svg').hide();
    if ($(document).width() <= 1056) {
        $('.alert-title').show();
        $('.map-path').click(function (e) { 
            e.preventDefault();
            const path = location.href.replace(/\\/g,'/').replace(/\/[^\/]*$/, '');
            window.location.href =  `${path}/relatedinfo.html?id=${e.currentTarget.dataset.id}`;
        });
    } else {
        let relatedData = [
            {title: '第一段', color: '#c37e7a', position: {top: 200, left: 500}},
            {title: '第二段', color: '#d0935b', position: {top: 200, left: 650}},
            {title: '第三段', color: '#79adb1', position: {top: 250, left: 700}}, 
            {title: '第四段', color: '#967796', position: {top: 200, left: 680}},
            {title: '第五段', color: '#d4c2c9', position: {top: 180, left: 580}},
            {title: '第六段', color: '#9eb382', position: {top: 380, left: 460}},
            {title: '第七段', color: '#dfdd84', position: {top: 450, left: 360}},
            {title: '第八段', color: '#b6cbd4', position: {top: 360, left: 380}}
        ]
        $('.map-box').mouseover(function(event) {
            if ( ['box-svg', 'bg-svg', 'text-svg', 'content-svg'].includes(event.target.className.baseVal) ) {
                $('.box-svg').show();
            } else if (event.target.nodeName === 'path') {
                const data = relatedData[parseInt(event.target.dataset.id, 10) - 1];
                $('.box-svg').show();
                $('.bg-svg').css('fill', data.color);
                $('.title-svg').text(data.title);
                $('.btn-svg').each(function(index) {
                    $(this).attr("href", 
                    `relatedinfo.html?id=${event.target.dataset.id}#${index === 0 ? 'shop' : (index === 1 ? 'travel' : 'attractions') }`);
                });

                $('.content-svg').attr({x: data.position.left, y: data.position.top});
                $('.title-svg').attr({x: data.position.left + 30, y: data.position.top + 20});
                $('.btn-svg').each(function(index) {
                    $(this).children('.bg-svg').attr({x: data.position.left + 12, y: data.position.top + ((index + 1) * 32)});
                    $(this).children('.text-svg').attr({
                        x: data.position.left + (index === 1 ? 24 : 28), 
                        y: data.position.top + (index === 0 ? 45 :(index === 1 ? 76 : 108 ))
                    });

                });
            }
                
        }).mouseout(function (event) {
            if (!['box-svg', 'bg-svg', 'text-svg', 'content-svg'].includes(event.target.className.baseVal)) {
                $('.box-svg').hide();
            }
        });
    }

});
