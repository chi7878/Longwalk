$(document).ready(function () {
    $(".icon-btn__add").click(function (e) {
        e.preventDefault();
        $(".popup").removeClass("popup-hidden");
    });

    $(".icon-btn__edit").click(function (e) {
        e.preventDefault();
        $(".popup").removeClass("popup-hidden");
    });

    $(".popup-btn_close").click(function (e) {
        e.preventDefault();
        $(".popup").addClass("popup-hidden");
    });

    switch (true) {
        case window.location.href.indexOf("backstage-news") !== -1:
            newsFn();
            break;
        case window.location.href.indexOf("backstage-videos") !== -1:
            videosFn();
            break;
    }

    function newsFn() {
        const list =  [
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

        let strHtml = "";

        list.forEach(function (item) {
            strHtml += `
            <li class="content-item">
                <p class="content-item__title">${item.title}</p>
                <div class="icon-btns">
                    <div class="icon-btn icon-btn__edit" data-id="${item.id}">編輯</div>
                    <div class="icon-btn">刪除</div>
                </div>
            </li>
            `;
        });

        $(".content-list").html(strHtml);

        $(".icon-btn__edit").click(function (e) {
            e.preventDefault();

            if (!list.find((item) => item.id == e.currentTarget.dataset.id)) {
                return;
            }

            $(".popup").removeClass("popup-hidden");
            $(".popup-box > h3,.popup-btn_confirm").text("編輯");
            console.log(e.currentTarget.dataset.id);
            const findData = JSON.parse(JSON.stringify(list.find((item) => item.id == e.currentTarget.dataset.id)));
            $(".input-value_videos").val(findData.title);
            $(`.input-label_radio > input[value='${findData.id}']`).attr("checked", true);
            $(".input-file__text").text("");
            $(".input-file__text").attr("title", "");
            $(".input-label_videos > .input-value").val("");

            if (findData.id === 1) {
                $(".input-label_videos").hide();
                $(".input-upload").show();
                $(".input-file__text").text(findData.content);
                $(".input-file__text").attr("title", findData.content);
            } else {
                $(".input-upload").hide();
                $(".input-label_videos").show();
                $(".input-label_videos > .input-value").val(findData.content);
            }
        });

        $('.input-label_radio > input[name="status"]').change(function (e) {
            e.preventDefault();
            console.log(e.currentTarget.value);
        });
    }

    function videosFn() {
        const list = [
            {
                id: 1,
                status: 0,
                title: "標題1",
                content: "https://www.youtube.com/embed/4j0Fgmsxr-o",
            },
            {
                id: 2,
                status: 1,
                title: "標題232424",
                content: "https://127.0.0.1:8000/storage/audio/222.jpg",
            },
        ];
        let file = undefined;
        let selectId = undefined;

        showData();


        function showData() {
            let strHtml = "";
    
            list.forEach(function (item) {
                strHtml += `
                <li class="content-item">
                    <p class="content-item__title">${item.title}</p>
                    <div class="icon-btns">
                        <div class="icon-btn icon-btn__edit" data-id="${item.id}">編輯</div>
                        <div class="icon-btn">刪除</div>
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
                content: "https://www.youtube.com/embed/4j0Fgmsxr-o",
                file: file,
            }
        }

        $('.icon-btn__add').click(function (e) { 
            e.preventDefault();
            restPopup();
            toggleStatus(false);
        });

        $(".icon-btn__edit").click(function (e) {
            e.preventDefault();

            if (!list.find(item => item.id.toString() === e.currentTarget.dataset.id)) {
                return;
            }

            $(".popup").removeClass("popup-hidden");
            $(".popup-box > h3,.popup-btn_confirm").text("編輯");
            restPopup();
            const findData = JSON.parse(JSON.stringify(list.find(item => item.id.toString() === e.currentTarget.dataset.id)));
            selectId = findData.id
            $(".input-value_videos").val(findData.title);
            $(`.input-label_radio > input[value='${findData.status}']`).prop('checked', true);

            if (findData.status === 1) {
                toggleStatus(true);
                changeFileName(findData.content);
            } else {
                toggleStatus(false);
                $(".input-label_videos > .input-value").val(findData.content);
            }
        });

        $('.input-label_radio > input[name="status"]').change(function (e) {
            e.preventDefault();
            toggleStatus(e.currentTarget.value === '1');
        });

        $('.input-file').change(function (e) { 
            file = e.currentTarget.files[0];
            changeFileName(file.name);
        });

        $('.popup-btn_confirm').click(function (e) { 
            e.preventDefault();
            console.log(fromData(), selectId);
        });

        $(".popup-btn_close").click(function (e) {
            selectId = undefined;
        });
    }
});
