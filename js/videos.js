$(document).ready(function () {
    const apiRoute = `https://taipeigrandtrail.travel.taipei`;
    let newsList =  [];

    $.ajax({
        type: "GET",
        url: `${apiRoute}/api/audio`,
        dataType: "json",
        success: function (response) {
            newsList = response.reverse();
            let strHtml = '';
                
            newsList.forEach(function(data) {
                console.log(data);
                strHtml += `
                <li class="videos-item">
                    <div class="videos-item__video">
                        <iframe src="${data.content}" frameborder="0" allowfullscreen class="video"></iframe>
                    </div>                    
                    <p>${data.title}</p>
                </li>`;
            })
            
            $('.videos-list').html(strHtml);
        }
    });
    


});
