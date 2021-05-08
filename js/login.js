$(document).ready(function () {
    const apiRoute = `https://taipeigrandtrail.travel.taipei/`;
    $('.login-btn').click(function (e) { 
        e.preventDefault();
        const data = {
            email: $('.input-value')[0].value,
            password : $('.input-value')[1].value,
        }
        console.log(data);

        $.ajax({
            type: "GET",
            url: `${apiRoute}/api/token`,
            dataType: "json",
            success: function (response) {
                console.log(response);
            }
        });

    });
});