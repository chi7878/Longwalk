$(document).ready(function () {
    const apiRoute = `https://taipeigrandtrail.travel.taipei`;
    $(".popup-box").overlayScrollbars({});

    $(".icon-btn__add").click(function (e) {
        e.preventDefault();
        $(".popup").removeClass("popup-hidden");
    });

    $(".icon-btn__edit").click(function (e) {
        $(".popup").removeClass("popup-hidden");
    });

    $(".popup-btn_close").click(function (e) {
        e.preventDefault();
        $(".popup").addClass("popup-hidden");
    });

    $('.login-out').click(function (e) { 
        e.preventDefault();
        $.ajax({
            type: "GET",
            url: `${apiRoute}/api/activity`,
            dataType: "json",
            success: function (response) {
                sessionStorage.removeItem('token');
                const path = location.href.replace(/\\/g,'/').replace(/\/[^\/]*$/, '');
                window.location.href =  `${path}/backstage-login.html`;
            }
        });
    });

    switch (true) {
        case window.location.href.indexOf("backstage-news") !== -1:
            loginStatus();
            newsFn();
            break;
        case window.location.href.indexOf("backstage-activity") !== -1:
            loginStatus();
            activityFn();
            break;
        case window.location.href.indexOf("backstage-videos") !== -1:
            loginStatus();
            videosFn();
            break;
        default:
            break;
    }

    function loginStatus() {
        if (!sessionStorage.getItem('token')) {
            const path = location.href.replace(/\\/g,'/').replace(/\/[^\/]*$/, '');
            window.location.href =  `${path}/backstage-login.html`;
        }
    }

    function newsFn() {
        let list =  [];
        let selectId = undefined;
        let file = [];
        let photoList = [];
        let deleteId = [];

        getData();

        function getData() {
            $.ajax({
                type: "GET",
                url: `${apiRoute}/api/news`,
                dataType: "json",
                success: function (response) {
                    list = response.reverse();
                    showData();
                    editEvent();
                    deleteEvent();
                }
            });
        }

        function postData(data) {
            let formData = new FormData();
            Object.keys(data).forEach(item => {
                if (item === 'file' || item === 'delete_ids') {
                    data[item].forEach((file, i) => formData.append(`${item}[${i}]`, file))
                } else {
                    formData.append(item, data[item]);
                }
            })

            $.ajax({
                type: "POST",
                url: `${apiRoute}/api/news`,
                dataType: "json",
                contentType:false,
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
                },
                data: formData,
                processData:false,
                success: function (response) {
                    $(".popup").addClass("popup-hidden");
                    selectId = undefined;
                    getData();
                }
            });
        }

        function showData() {
            let strHtml = "";
    
            list.forEach(function (item) {
                strHtml += `
                    <li class="content-item">
                        <p class="content-item__date">${item.created_at.split(' ')[0]}</p>
                        <p class="content-item__title">${item.title}</p>
                        <div class="icon-btns">
                            <div class="icon-btn icon-btn__edit" data-id="${item.id}">編輯</div>
                            <div class="icon-btn icon-btn__delete" data-id="${item.id}">刪除</div>
                        </div>
                    </li>
                `;
            });
    
            $(".content-list").html(strHtml);
        }

        function restPopup() {
            $(".input-value").val('');
            $(".input-textarea").val('');
            selectId = undefined;
            file = [];
            photoList = [];
            deleteId = [];
            $(".file-list").html('');
        }

        function fromData() {
            return {
                title: $(".input-value").val(),
                content: $(".input-textarea").val(),
            }
        }

        function editEvent() {
            $(".icon-btn__edit").click(function (e) {
                if (!list.find(item => item.id.toString() === e.currentTarget.dataset.id)) {
                    return;
                }
    
                $(".popup").removeClass("popup-hidden");
                $(".popup-box > h3,.popup-btn_confirm").text("編輯");
                restPopup();
                const findData = JSON.parse(JSON.stringify(list.find(item => item.id.toString() === e.currentTarget.dataset.id)));
                selectId = findData.id
                $(".input-value").val(findData.title);
                $(".input-textarea").val(findData.content);
                
                $.ajax({
                    type: "GET",
                    url: `${apiRoute}/api/news_photos`,
                    dataType: "json",
                    data: {news_id: e.currentTarget.dataset.id},
                    success: function (response) {
                        photoList = response;
                        showFileList();
                    }
                });
            });
        }

        function showFileList() {
            const list = photoList.concat(file);

            let strHtml = "";
            list.forEach(function (item) {
                strHtml += `
                <li class="file-item">
                    <p>${!item.id ? item.name : item.content.split('/storage/news/')[1]}</p>
                    <div class="file-delete" data-id="${!item.id ? -1 : item.id}"></div>
                </li>`;
            });
    
            $(".file-list").html(strHtml);
            deleteFile();
        }

        function deleteFile() {
            $(".file-delete").click(function (e) {
                if (e.currentTarget.dataset.id === '-1') {
                    const index  = file.findIndex(ele => ele.name === $(e.currentTarget).prev().text());
                    file.splice(index, 1);
                } else {
                    deleteId.push(e.currentTarget.dataset.id);
                    const index  = photoList.findIndex(ele => ele.id.toString() === e.currentTarget.dataset.id);
                    photoList.splice(index, 1);
                }

                showFileList();
            });
        }

        function deleteEvent() {
            $(".icon-btn__delete").click(function (e) {
                const data = {
                    id: e.currentTarget.dataset.id,
                    method: 'delete'
                }
                postData(data);
            });
        }

        $('.icon-btn__add, .popup-btn_close').click(function (e) { 
            restPopup();
        });

        $('.input-file').change(function (e) { 
            file.push(e.currentTarget.files[0]);
            $(".input-file").val('');
            showFileList();
        });

        $('.popup-btn_confirm').click(function (e) { 
            e.preventDefault();
            const data = fromData();
            data.method = selectId ? 'update' : 'new';
            data.file = file;
            data.delete_ids = deleteId;
            
            if (selectId) {
                data.id = selectId;
            }

            postData(data);
        });
    }

    function activityFn() {
        let list =  [];
        let selectId = undefined;
        let file = [];
        let photoList = [];
        let deleteId = [];

        getData();

        function getData() {
            $.ajax({
                type: "GET",
                url: `${apiRoute}/api/activity`,
                dataType: "json",
                success: function (response) {
                    list = response.map(item => {
                        const data = item;
                        data.time = '2021-05-05';
                        data.place = '富士山';

                        return data;
                    });

                    showData();
                    editEvent();
                    deleteEvent();
                }
            });
        }

        
        function postData(data) {
            let formData = new FormData();
            Object.keys(data).forEach(item => {
                if (item === 'file' || item === 'delete_ids') {
                    data[item].forEach((file, i) => formData.append(`${item}[${i}]`, file))
                } else {
                    formData.append(item, data[item]);
                }
            })

            $.ajax({
                type: "POST",
                url: `${apiRoute}/api/activity`,
                dataType: "json",
                contentType:false,
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
                },
                data: formData,
                processData:false,
                success: function (response) {
                    $(".popup").addClass("popup-hidden");
                    selectId = undefined;
                    getData();
                }
            });
        }

        function showData() {
            let strHtml = "";
    
            list.forEach(function (item) {
                strHtml += `
                <li class="content-item">
                    <p class="content-item__title">${item.title}</p>
                    <div class="icon-btns">
                        <div class="icon-btn icon-btn__edit" data-id="${item.id}">編輯</div>
                        <div class="icon-btn icon-btn__delete" data-id="${item.id}">刪除</div>
                    </div>            
                </li>
                `;
            });
    
            $(".content-list").html(strHtml);
        }

        function restPopup() {
            $(".input-value_title").val('');
            $(".input-value_time").val('');
            $(".input-value_place").val('');
            $(".input-textarea").val('');
            $(`.input-label_radio > input[value='0']`).prop('checked', true);
            selectId = undefined;
            file = [];
            photoList = [];
            deleteId = [];
            $(".file-list").html('');
        }

        function fromData() {
            return {
                title: $(".input-value_title").val(),
                start_time: $(".input-value_time").val(),
                end_time: $(".input-value_place").val(),
                content: $(".input-textarea").val(),
                status: $(`.input-label_radio > input[value='0']`)[0].checked ? 0 :
                    ($(`.input-label_radio > input[value='1']`)[0].checked ? 1 : 2)
            }
        }

        function editEvent() {
            $(".icon-btn__edit").click(function (e) {
                e.preventDefault();
    
                if (!list.find(item => item.id.toString() === e.currentTarget.dataset.id)) {
                    return;
                }
    
                $(".popup").removeClass("popup-hidden");
                $(".popup-box > h3,.popup-btn_confirm").text("編輯");
                restPopup();
                const findData = JSON.parse(JSON.stringify(list.find(item => item.id.toString() === e.currentTarget.dataset.id)));
                selectId = findData.id;
                $(".input-value_title").val(findData.title);
                $(".input-value_time").val(findData.start_time);
                $(".input-value_place").val(findData.end_time);
                $(".input-textarea").val(findData.content);
                $(`.input-label_radio > input[value='${findData.status}']`).prop('checked', true);

                $.ajax({
                    type: "GET",
                    url: `${apiRoute}/api/activity_photos`,
                    dataType: "json",
                    data: {activity_id: e.currentTarget.dataset.id},
                    success: function (response) {
                        photoList = response;
                        showFileList();
                    }
                });
            });
        }

        function showFileList() {
            const list = photoList.concat(file);

            let strHtml = "";
            list.forEach(function (item) {
                strHtml += `
                <li class="file-item">
                    <p>${!item.id ? item.name : item.content.split('/storage/activity/')[1]}</p>
                    <div class="file-delete" data-id="${!item.id ? -1 : item.id}"></div>
                </li>`;
            });
    
            $(".file-list").html(strHtml);
            deleteFile();
        }

        function deleteFile() {
            $(".file-delete").click(function (e) {
                if (e.currentTarget.dataset.id === '-1') {
                    const index  = file.findIndex(ele => ele.name === $(e.currentTarget).prev().text());
                    file.splice(index, 1);
                } else {
                    deleteId.push(e.currentTarget.dataset.id);
                    const index  = photoList.findIndex(ele => ele.id.toString() === e.currentTarget.dataset.id);
                    photoList.splice(index, 1);
                }

                showFileList();
            });
        }

        function deleteEvent() {
            $(".icon-btn__delete").click(function (e) {
                const data = {
                    id: e.currentTarget.dataset.id,
                    method: 'delete'
                }
                postData(data);
            });
        }

        $('.icon-btn__add, .popup-btn_close').click(function (e) { 
            restPopup();
        });

        $('.input-file').change(function (e) { 
            file.push(e.currentTarget.files[0]);
            $(".input-file").val('');
            showFileList();
        });

        $('.popup-btn_confirm').click(function (e) { 
            e.preventDefault();
            const data = fromData();
            data.method = selectId ? 'update' : 'new';
            data.file = file;
            data.delete_ids = deleteId;
            
            if (selectId) {
                data.id = selectId;
            }

            postData(data);
        });
    }    

    function videosFn() {
        let list = [];
        let file = undefined;
        getData();

        function getData() {
            $.ajax({
                type: "GET",
                url: `${apiRoute}/api/audio`,
                dataType: "json",
                success: function (response) {
                    list = response.reverse();
                    showData();
                    deleteEvent();
                }
            });
        }

        function showData() {
            let strHtml = "";
    
            list.forEach(function (item) {
                strHtml += `
                <li class="content-item">
                    <p class="content-item__title">${item.title}</p>
                    <div class="icon-btns">
                        <div class="icon-btn" style="display:none">編輯</div>
                        <div class="icon-btn icon-btn__delete" data-id="${item.id}">刪除</div>
                    </div>
                </li>
                `;
            });
    
            $(".content-list").html(strHtml);
        }

        function changeFileName(text) {
            $(".input-file__text").text(text);
            $(".input-file__text").attr("title", text);
        }

        function toggleStatus(status) {
            if (status) {
                $(".input-label_videos").hide();
                $(".input-upload").show();
            } else {
                $(".input-upload").hide();
                $(".input-label_videos").show();
            }
        }

        function restPopup() {
            $(".input-value_videos").val('');
            $(`.input-label_radio > input[value='0']`).prop('checked', true);
            changeFileName('選擇檔案');
            $(".input-label_videos > .input-value").val("");
            $(".input-file").val('');
        }

        function fromData() {
            return {
                title: $(".input-value_videos").val(),
                content: $(".input-label_videos > input").val(),
                file: file,
            }
        }

        function deleteEvent() {
            $(".icon-btn__delete").click(function (e) {
                $.ajax({
                    type: "PUT",
                    url: `${apiRoute}/api/audio`,
                    dataType: "json",
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem('token')}`
                    },
                    data: {
                        id: e.currentTarget.dataset.id,
                    },
                    success: function (response) {
                        $(".popup").addClass("popup-hidden");
                        getData();
                    }
                });
            });
        }

        $('.icon-btn__add').click(function (e) { 
            e.preventDefault();
            restPopup();
            toggleStatus(true);
        });

        $('.input-label_radio > input[name="status"]').change(function (e) {
            e.preventDefault();
            toggleStatus(e.currentTarget.value === '0');
        });

        $('.input-file').change(function (e) { 
            file = e.currentTarget.files[0];
            $(".input-file").val('');
            changeFileName(file.name);
        });

        $('.popup-btn_confirm').click(function (e) { 
            e.preventDefault();
            const data = fromData();
            data.status = $(`.input-label_radio > input[value='0']`)[0].checked ? 0 : 1;
            data.status === 0 ? delete data.content : delete data.file;
            data.method = 'new';
            let formData = new FormData();
            Object.keys(data).forEach(item => {
                formData.append(item, data[item]);
            })
            
            $.ajax({
                type: "POST",
                url: `${apiRoute}/api/audio`,
                dataType: "json",
                contentType:false,
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
                },
                data: formData,
                processData:false,
                success: function (response) {
                    $(".popup").addClass("popup-hidden");
                    getData();
                }
            });
        });
    }
});
