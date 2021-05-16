$(document).ready(function () {
    const apiRoute = `https://taipeigrandtrail.travel.taipei`;
    const path = location.href.replace(/\\/g,'/').replace(/\/[^\/]*$/, '');
    let newsList =  []; 
    const id = new URLSearchParams(window.location.search).get('id');

    $.ajax({
        type: "GET",
        url: `${apiRoute}/api/news`,
        dataType: "json",
        success: function (response) {
            newsList = response.reverse();
            if (window.location.href.indexOf('newsInfo') !== -1) {
                const findData = newsList.find((data) => data.id.toString() === id);
                
                if(!findData || id === null) {
                    window.location.href =  `${path}/index.html`;
                    return;
                }
        
                $('.info-content-title__info').text(findData.title);
                $('.info-content-date__info').text(`發布日期：${findData.edited_at.split(' ')[0]}`);
                $('.info-content-box > p').text(findData.content);
            } else {
                let strHtml = '';
                
                newsList.forEach(function(data) {
                    strHtml += `
                    <li class="news-item" data-id="${data.id}">
                        <p class="news-item__date">${data.created_at.split(' ')[0]}</p>
                        <p class="news-item__title" title="${data.title}">${data.title}</p>
                    </li>`;
                })
            
                $('.news-list').html(strHtml);
            
                $('.news-item').click(function (e) { 
                    e.preventDefault();
                    window.location.href =  `${path}/newsInfo.html?id=${e.currentTarget.dataset.id}`;
                });
            }
        }
    });

    if (window.location.href.indexOf('newsInfo') !== -1 && id !== null) { 
        $.ajax({
            type: "GET",
            url: `${apiRoute}/api/news_photos`,
            dataType: "json",
            data: {news_id: id},
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
                            <img src="${apiRoute}/api/activity_photo?model=news&file_name=${item.content.split('/storage/news/')[1]}" alt="carousel image">
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
    

});
