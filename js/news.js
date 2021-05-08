$(document).ready(function () {
    const apiRoute = `https://taipeigrandtrail.travel.taipei/`;
    const newsList =  [
        {
            id: 1,
            title: "台灣新首富雲林起家廠區曝光！神祕鞋王張聰淵平時吃「員工餐廳」 買兩戶帝寶才曝光",
            content: "消息測試3",
            date: '2020-12-12',
        },
        {
            id: 2,
            title: "麥當勞隱藏美食曝！員工：很少人點",
            content: "消息測試2",
            date: '2020-12-12',
        },
    ];

    // $.ajax({
    //     type: "GET",
    //     url: `${apiRoute}/api/news`,
    //     dataType: "json",
    //     success: function (response) {
    //         console.log(response);
    //     }
    // });
    
    if (window.location.href.indexOf('newsInfo') !== -1) {
        const id = new URLSearchParams(window.location.search).get('id');
        const findData = newsList.find(function(data) {
            return data.id.toString() === id;
        })

        $('.info-content-title__info').text(findData.title);
        $('.info-content-date__info').text(`發布日期：${findData.date}`);
        $('.info-content-box > p').text(findData.content);
    } else {
        let strHtml = '';
        
        newsList.forEach(function(data) {
            console.log(data);
            strHtml += `
            <li class="news-item" data-id="${data.id}">
                <p class="news-item__date">${data.date}</p>
                <p class="news-item__title">${data.title}</p>
            </li>`;
        })
    
        $('.news-list').html(strHtml);
    
        $('.news-item').click(function (e) { 
            e.preventDefault();
            console.log(window.location);
            window.location.href =  `${window.location.origin}/newsInfo.html?id=${e.currentTarget.dataset.id}`;
        });
    }




});
