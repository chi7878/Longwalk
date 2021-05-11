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
                $('.info-content-date__info').text(`發布日期：${findData.created_at.split(' ')[0]}`);
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
                console.log(response);
                let strHtml = '';
                response.forEach(item => {
                    strHtml += `
                    <div class="info-carousel__link">
                        <div class="info-carousel__wrapper">
                            <img src="${item.content}" alt="carousel image">
                        </div>
                    </div> 
                    `
                });
                $('.info-carousel').html(strHtml);
            }
        });
    }
    

});
