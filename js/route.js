$(document).ready(function () {
    const path = location.href.replace(/\\/g,'/').replace(/\/[^\/]*$/, '');
    let list =  [
        {   
            id: 1,
            title: '第一段  捷運關渡站-二子坪',
            carousel: [
                {image: './images/routeFeature/第一段/(第一段)20-臺北大縱走-佳作10-葉清坤-蓮池映山旅-2019061609-二子坪步道.jpg', title: '標題'},
                {image: './images/routeFeature/第一段/(第一段)24-臺北大縱走-佳作14-楊景森-綠色隧道-2019071009-二子坪步道.jpg', title: '標題'},
            ],
            content: '大菁，適應力最強的植物之一，\n背坡貧脊的山地也長得很茂盛，\n在早期庶民的生活中是藍染的原料，\n此植物喜歡與淸淨的水相傍，\n不僅採收時需要在淸晨有露水時，\n採後也需要就近放入水池發酵。\n手藍染，現在已是簡樸生活、回歸自然的象徵。',
            list: [ 
                {image: './images/routeFeature/image3.jpeg', title: '面天山'},
                {image: './images/routeFeature/image2.jpeg', title: '水圳'},
                {image: './images/routeFeature/image1.jpg', title: '大菁'}
            ]
        },
        {   
            id: 2,
            title: '第二段  二子坪服務站-小油坑服務站',
            carousel: [
                {image: './images/routeFeature/第二段/(第二三段))23-臺北大縱走-佳作13-張淑鈴-小油坑步道-2019041717-小油坑風景區.jpg', title: '標題'},
                {image: './images/routeFeature/第二段/(第二段)01-臺北大縱走-金獎-利勝章-夕彩-2018110905-大屯主峰.jpg', title: '標題'},
                {image: './images/routeFeature/第二段/(第二段)04-臺北大縱走-優選01-陳紫晴-大屯山之夕-2019062018-大屯山.jpg', title: '標題'},
                {image: './images/routeFeature/第二段/(第二段)07-臺北大縱走-優選04-柯志勝-花現火山口-2019060707-陽明山頂湖.jpg', title: '標題'},
                {image: './images/routeFeature/第二段/(第二段)09-臺北大縱走-優選06-趙孜弘-林深不知處-2018121611-面天坪步道.jpg', title: '標題'},
                {image: './images/routeFeature/第二段/(第二段)10-臺北大縱走-優選07-戴仲男-大屯夕日-2018102918-大屯山頂.jpg', title: '標題'},
                {image: './images/routeFeature/第二段/(第二段)13-臺北大縱走-佳作03-王啟文-繡球曲線之美-2019062015-青楓步道.jpg', title: '標題'},
                {image: './images/routeFeature/第二段/(第二段)16-臺北大縱走-佳作06-楊明珠-大屯夜正美-2019030321-大屯山助航站.jpg', title: '標題'},
            ],
            content: '楓香，金縷梅科，臺灣特有種。\n為美洲、亞洲古老化石種的後裔，\n目前全世界僅剩下5種楓香。\n種子是蒴果，一粒果實擁有許多種子，\n中藥材就叫做「路路通」，經常掉滿地，但是很少被壓碎，\n具有相當的彈性，保護內部種子。\n此段山徑楓香老樹是重要地景，値得一一探訪。\n梭羅有本書，名為《種子的信仰》，\n我們也在楓香種子蒴果的生長意志與韌性中，\n看到生命如何忠於自我，走向圓滿。',
            list: [ 
                {image: './images/routeFeature/image4.jpeg', title: '大屯山'},
                {image: './images/routeFeature/image5.jpeg', title: '火山'},
                {image: './images/routeFeature/image6.jpg', title: '楓香'}
            ]
        },
        {   
            id: 3,
            title: '第三段  小油坑服務站-風櫃口',
            carousel: [
                {image: './images/routeFeature/第三段/(第三段)03-臺北大縱走-銅獎-邱憶玲-往東峰眺主峰-2019071016-七星東峰.jpg', title: '標題'},
                {image: './images/routeFeature/第三段/(第三段)08-臺北大縱走-優選05-黃柏雯-走進林中-2019012713-石梯嶺步道.jpg', title: '標題'},
                {image: './images/routeFeature/第三段/(第三段)12-臺北大縱走-佳作02-周文章-七星山東峰步道之美3-2019070709-冷水坑停車場.jpg', title: '標題'},
                {image: './images/routeFeature/第三段/(第三段)15-臺北大縱走-佳作05-黃柏雯-霧中樹-2019012712-石梯嶺步道.jpg', title: '標題'},
                {image: './images/routeFeature/第三段/(第三段)19-臺北大縱走-佳作09-楊景森-陽明山晨曦-2019071005-小油坑.jpg', title: '標題'},
                {image: './images/routeFeature/第三段/(第三段)21-臺北大縱走-佳作11-利勝章-登高必自卑-2019052212-七星山系.jpg', title: '標題'},
                {image: './images/routeFeature/第三段/(第三段)22-臺北大縱走-佳作12-蕭慶良-大家一起來做伴-2019070711-石梯嶺步道.jpg', title: '標題'},
                {image: './images/routeFeature/第三段/(第三段)25-臺北大縱走-佳作15-潘丁榮-七星山上的親子同行-2019071314-七星東峰.jpg', title: '標題'},
                {image: './images/routeFeature/第三段/(第三段)27-臺北大縱走-佳作17-張昭仁-雙扇蕨秘境-2019070907-擎天崗-風櫃口.jpg', title: '標題'},
                {image: './images/routeFeature/第三段/(第三段)29-臺北大縱走-佳作19-張一華-路徑上的偶遇-2019070610-擎天崗.jpg', title: '標題'},
                {image: './images/routeFeature/第三段/(第三段)30-臺北大縱走-佳作20-周文章-小油坑步道之美-2019063010-小油坑.jpg', title: '標題'},
            ],
            content: '生長在岩壁上的小毛氈苔，臺灣原生食蟲植物，\n在最惡劣的環境中，為獲得養份、發展出捕蟲能力，\n努力讓自己存活下來。\n昆欄，是冰河時期孑遺植物，單科、單屬、單種，\n就在時間長河中孑然一身的存留下來，\n與小毛氈苔一樣，憑藉著是面對貧脊環境時，\n努力生存下去的勇氣。\n它們在山徑中的存在，讓我們看到了歷史的縱深與\n自然的足印交會的痕跡，\n也讓我們體會到了\n何謂生命在大化流行的宇宙中孤獨存在的奇蹟。',
            list: [ 
                {image: './images/routeFeature/image7.jpeg', title: '七星山'},
                {image: './images/routeFeature/image8.jpeg', title: '箭竹草原'},
                {image: './images/routeFeature/image9.jpeg', title: '小毛氈苔'}
            ]
        },
        {   
            id: 4,
            title: '第四段  風櫃口-中華科大',
            carousel: [
                {image: './images/routeFeature/第四段/(第四段)05-臺北大縱走-優選02-林家儀-風華之夜-2019060219-碧山.jpg', title: '標題'},
                {image: './images/routeFeature/第四段/(第四段)11-臺北大縱走-佳作01-利勝章-潺潺溪流-2019051211-圓覺寺步道.jpg', title: '標題'},
                {image: './images/routeFeature/第四段/(第四段)28-臺北大縱走-佳作18-李政吉-白石湖-2019070614-深水坑.jpg', title: '標題'},
            ],
            content: '桃金孃能夠在貧脊土壤與缺水條件下成長，\n因為全株具有療效，所以野外很少見。\n果實也美味，能入菜、做果醬，\n現在更是知名保養品牌的保養原料。\n這是一種能抗高壓、全身充滿令人驚喜力量的植物，\n雖然生長速度極緩，但這是為了克服艱困的環境\n所演化出來的生命姿態，自在且堅定的步伐。\n做為臺北大縱走品牌發表的登場植物，\n意味著臺北大縱走値得全程細細況味，\n慢慢體會各種細緻與遼闊的美好。',
            list: [ 
                {image: './images/routeFeature/image10.jpeg', title: '白石湖'},
                {image: './images/routeFeature/image11.jpeg', title: '濕地'},
                {image: './images/routeFeature/image12.jpg', title: '淘金釀'} 
            ]
        },
        {   
            id: 5,
            title: '第五段  捷運劍潭站-碧山巖',
            carousel: [
                {image: './images/routeFeature/第五段/(第五段)26-臺北大縱走-佳作16-李清吉-老地方觀景台之美-2019062909-劍潭山老地方.jpg', title: '標題'},
            ],
            content: '在充滿歷史氣息與人文痕跡的這段步道，\n走過「三好十美」，\n我們可以看見前人早期開墾之辛、\n大時代的軍事緊張氣息、懷古鑑今；\n步上觀景步道，則又可俯瞰基隆河段、觀音夕照等自然美景，\n今日繁榮的大臺北、重要地標101大樓盡收眼底。\n然而，這段步道裡同時亦不乏豐富珍貴的自然林相與昆蟲生態。\n從繁華城市走進山林，唯有讓自己眞正安靜沉澱下來，\n才能聽見大自然的詠嘆調。',
            list: [ 
                {image: './images/routeFeature/image13.jpg', title: '劍潭山'},
                {image: './images/routeFeature/image14.jpeg', title: '圓山飯店隧道'},
                {image: './images/routeFeature/image15.jpeg', title: '蝴蝶'}
            ]
        },
        {   
            id: 6,
            title: '第六段  中華科大-捷運麟光站',
            carousel: [
                {image: './images/routeFeature/第六段/(第六段)02-臺北大縱走-銀獎-蕭文章-兩樹之間-2019041310-南緃走 (南港山步道).jpg', title: '標題'},
                {image: './images/routeFeature/第六段/(第六段)06-臺北大縱走-優選03-裴啟瑜-101雲海之美-2019022004-南港山九五峰.jpg', title: '標題'},
                {image: './images/routeFeature/第六段/(第六段)14-臺北大縱走-佳作04-劉維和-百萬夜景九五峰-2018070919-南港山九五峰.jpg', title: '標題'},
                {image: './images/routeFeature/第六段/(第六段)17-臺北大縱走-佳作07-潘桐錫-光耀台北-2019072118-九五峰.jpg', title: '標題'},
                {image: './images/routeFeature/第六段/(第六段)18-臺北大縱走-佳作08-張秀凰-熱力台北-2018072019-九五峰.jpg', title: '標題'},
            ],
            content: '靑剛櫟，總是會結出大量的果實，\n是臺灣黑熊及許多山區動物如飛鼠、山羌、山豬、山羊秋冬最愛的食物之一，\n是一種為了生存、需要維持族群數量而樂於分享的樹種，\n樹身堅硬，過去常會拿來做建材或是鐵路枕木使用。\n我們經常會在以動物為主角的卡通中，看到靑剛櫟可愛的果實\n成為動物們喜悅啃咬的食物，它是通往童年的媒介，\n也是人與自然緊密相繫的橋樑。\n而早期住民上山最愛的解渴良方──酸藤，\n也容易在此山徑上見到芳蹤，酸藤為了吸收更多陽光，\n常以纏繞方式爬上樹木頂端，林木總是不吝惜地與酸藤分享樹冠的風光，\n酸藤也在春夏交接時分，回報一抹緋紅，是分享也是共享。',
            list: [ 
                {image: './images/routeFeature/image16.jpeg', title: '南港山'},
                {image: './images/routeFeature/image17.jpeg', title: '巨石峭壁'},
                {image: './images/routeFeature/image18.jpg', title: '青剛櫟'}
            ]
        },
        {   
            id: 7,
            title: '第七段  名門社區公車站-政大後山',
            content: '杜英是臺灣原生種，主要生長在深山潮濕環境或是稜線上迎風地帶，\n萬綠叢中的點點紅葉是杜英成長週期的標誌(常綠樹木衰老前會轉紅色)，\n堅硬的果實表面有許多網紋，可作為佛珠使用，\n俗稱「金剛子」，意味著每個人一生刻畫滿滿的故事，\n是生命努力的標記。\n杜英在逆境中昂然挺立，不卑不亢的姿態，\n彷彿替臺北大縱走的末段留下了深刻的足印。',
            list: [ 
                {image: './images/routeFeature/image19.jpeg', title: '樟湖山'},
                {image: './images/routeFeature/image20.jpg', title: '茶園'},
                {image: './images/routeFeature/image21.jpeg', title: '杜英'}
            ]
        },
        {   
            id: 8 ,
            title: '第八段  捷運動物園站-捷運關渡站',
            content: '',
            list: [ 
                {image: '', title: '代定'},
                {image: '', title: '代定'},
                {image: '', title: '代定'}
            ]
        },

    ];
    const id = new URLSearchParams(window.location.search).get('id');
    const data = list.find(item => item.id.toString() === id);
    if(!data) {
        window.location.href =  `${path}/index.html`;
        return;
    }
    $('.info-content-box > h3').text(data.title);
    $('.info-content-box > p').text(data.content);
    let strHtml = '';
    let carouselHtml = '';
    data.list.forEach(item => {
        strHtml += `
            <li class="info-item">
                <div class="info-item__img">
                    <img src="${item.image}" />
                </div>
                <p>${item.title}</p>
            </li>
        `;
    });

    if(data.carousel) {
        data.carousel.forEach(item => {
            carouselHtml += `
            <a class="info-carousel__link">
                <div class="info-carousel__wrapper">
                    <img src="${item.image}" alt="carousel image">
                </div>
                <p class="info-carousel__title">${item.title}</p>
            </a>  
            `
        });
    } else {
        $('.info-carousel-box_route').hide();
    }
    
    $('.info-list').html(strHtml);
    $('.info-carousel').html(carouselHtml);
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
});
