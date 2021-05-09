$(document).ready(function () {
    const apiRoute = `https://taipeigrandtrail.travel.taipei`;
    $('.login-btn').click(function (e) { 
        e.preventDefault();
        const data = {
            email: $('.input-value')[0].value,
            password : $('.input-value')[1].value,
        }

        $.ajax({
            type: "POST",
            url: `${apiRoute}/api/token`,
            dataType: "json",
            data: data,
            success: function (response) {
                if (response.message && response.message === 'email or password error.') {
                    $('.error-text').text('帳號或密碼錯誤!!')
                } else {
                    sessionStorage.setItem('token', response.token)
                    console.log(response.token);
                    const path = location.href.replace(/\\/g,'/').replace(/\/[^\/]*$/, '');
                    window.location.href =  `${path}/backstage-news.html`;
                }
            }
        });

    });
});