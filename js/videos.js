$(document).ready(function () {
    const apiRoute = `https://taipeigrandtrail.travel.taipei`;
    let newsList =  [];

    $.ajax({
        type: "GET",
        url: `${apiRoute}/api/audio`,
        dataType: "json",
        success: function (response) {
            list = response.reverse();
            let strHtml = '';
                
            list.forEach(function(data) {
                let content = '';

                if (data.status === '1') {
                    content = `<iframe src="${data.content}" frameborder="0" allowfullscreen class="video"></iframe>`
                } else {
                    content = `<img src="${apiRoute}/api/activity_photo?model=audio&file_name=${data.content.split('/storage/audio/')[1]}" alt="">`
                }

                strHtml += `
                <li class="videos-item">
                    <div class="videos-item__${data.status === '1' ? 'video' : 'img'}">
                        ${content}
                    </div>                    
                    <p>${data.title}</p>
                </li>`;
            })
            
            $('.videos-list').html(strHtml);
        }
    });
    


});
