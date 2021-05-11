$(document).ready(function () {
    const apiRoute = `https://taipeigrandtrail.travel.taipei`;
    let newsList =  [];

    $.ajax({
        type: "GET",
        url: `${apiRoute}/api/news`,
        dataType: "json",
        success: function (response) {
            newsList = response.reverse();
            if (window.location.href.indexOf('newsInfo') !== -1) {
                const id = new URLSearchParams(window.location.search).get('id');
                const findData = newsList.find(function(data) {
                    return data.id.toString() === id;
                })
        
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
                    const path = location.href.replace(/\\/g,'/').replace(/\/[^\/]*$/, '');
                    window.location.href =  `${path}/newsInfo.html?id=${e.currentTarget.dataset.id}`;
                });
            }
        }
    });
    


});
