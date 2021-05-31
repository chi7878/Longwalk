$(document).ready(function () {
    const path = location.href.replace(/\\/g,'/').replace(/\/[^\/]*$/, '');
    const id = new URLSearchParams(window.location.search).get('id');
    let list =  [
        {   
            id: 1,
            title: '第一段  捷運關渡站-二子坪',
            color: '#c37e7a',
            list: [ 
                {image: '../images/routeFeature/image3.jpeg', title: '面天山'},
                {image: '../images/routeFeature/image2.jpeg', title: '水圳'},
                {image: '../images/routeFeature/image1.jpeg', title: '大菁'}
            ]
        },
        {   
            id: 2,
            title: '第二段  二子坪服務站-小油坑服務站',
            color: '#d0935b',
            list: [ 
                {image: '', title: '大屯山'},
                {image: '', title: '火山'},
                {image: '', title: '楓香'}
            ]
        },
        {   
            id: 3,
            title: '第三段  小油坑服務站-風櫃口',
            color: '#79adb1',
            list: [ 
                {image: '', title: '七星山'},
                {image: '', title: '箭竹草原'},
                {image: '', title: '小毛氈苔'}
            ]
        },
        {   
            id: 4,
            title: '第四段  風櫃口-中華科大',
            color: '#967796',
            list: [ 
                {image: '', title: '白石湖'},
                {image: '', title: '濕地'},
                {image: '', title: '淘金釀'} 
            ]
        },
        {   
            id: 5,
            title: '第五段  捷運劍潭站-碧山巖',
            color: '#d4c2c9',
            list: [ 
                {image: '', title: '劍潭山'},
                {image: '', title: '圓山飯店隧道'},
                {image: '', title: '蝴蝶'}
            ]
        },
        {   
            id: 6,
            title: '第六段  中華科大-捷運麟光站',
            color: '#9eb382',
            list: [ 
                {image: '', title: '南港山'},
                {image: '', title: '巨石峭壁'},
                {image: '', title: '青剛櫟'}
            ]
        },
        {   
            id: 7,
            title: '第七段  名門社區公車站-政大後山',
            color: '#dfdd84',
            list: [ 
                {image: '', title: '樟湖山'},
                {image: '', title: '茶園'},
                {image: '', title: '杜英'}
            ]
        },
        {   
            id: 8 ,
            title: '第八段  捷運動物園站-捷運關渡站',
            color: '#b6cbd4',
            list: [ 
                {image: '', title: '代定'},
                {image: '', title: '代定'},
                {image: '', title: '代定'}
            ]
        },

    ];
    const data = list.find(item => item.id.toString() === id);
    if(!data) {
        window.location.href =  `${path}/index.html`;
        return;
    }
    $('.main_relared-info > h1').text(data.title);
    console.log($('.main'));
    $('body').append(`<style>.main_relared-info > h1:before{background-color: ${data.color}}.main_relared-info > h1:after{background-color: ${data.color}}</style>`)
    $('.relared-info__img').css('background-color', data.color);
    $('.relared-info__box').css('border-color', data.color);
    $('.relared-info__btn').css('border-color', data.color);
    $('.relared-info__btn').css('color', data.color);

    $.getJSON( "../relatedData.json", function( data ) {
        if (!id) return
        const findData = data.find(item => item.id.toString() === id);
        console.log(findData);
        let strHtml = '';
                
        findData.shop.forEach(function(data) {
            const phone = data.cellphone.map(item => `<li>${item}</li>`).join('');
            

            strHtml += `
            <div class="relared-info__list">
                <a href="${data.href}" class="relared-info__list-title" target="_blank">📍${data.name}</a>
                <div class="relared-info__list-content">
                    <p>優惠內容:</p>
                    <p>${data.content}</p>
                </div>
                <div class="relared-info__list-content">
                    <p>地址:</p>
                    <p>${data.address}</p>
                </div>
                <div class="relared-info__list-content">
                    <p>聯絡電話:</p>
                    <ul>
                    ${phone}
                    </ul>
                </div>
            </div>`;
        })
    
        $('.relared-info-shop').html(strHtml);

        


      });
});