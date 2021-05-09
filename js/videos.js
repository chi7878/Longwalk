$(document).ready(function () {
    const apiRoute = `https://taipeigrandtrail.travel.taipei`;
    let newsList =  [];

    $.ajax({
        type: "GET",
        url: `${apiRoute}/api/audio`,
        dataType: "json",
        success: function (response) {
            newsList = response.map(item => {
                const data = item;
                data.title = '12312312';
                data.date = '2020-12-12';
                return data;
            })

            // if (window.location.href.indexOf('newsInfo') !== -1) {
            //     const id = new URLSearchParams(window.location.search).get('id');
            //     const findData = newsList.find(function(data) {
            //         return data.id.toString() === id;
            //     })
        
            //     $('.info-content-title__info').text(findData.title);
            //     $('.info-content-date__info').text(`發布日期：${findData.date}`);
            //     $('.info-content-box > p').text(findData.content);
            // } else {
            //     let strHtml = '';
                
            //     newsList.forEach(function(data) {
            //         console.log(data);
            //         strHtml += `
            //         <li class="news-item" data-id="${data.id}">
            //             <p class="news-item__date">${data.date}</p>
            //             <p class="news-item__title" title="${data.title}">${data.title}</p>
            //         </li>`;
            //     })
            
            //     $('.news-list').html(strHtml);
            
            //     $('.news-item').click(function (e) { 
            //         e.preventDefault();
            //         console.log(window.location);
            //         window.location.href =  `${window.location.origin}/newsInfo.html?id=${e.currentTarget.dataset.id}`;
            //     });
            // }
        }
    });
    


});
