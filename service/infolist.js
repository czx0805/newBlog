var infoList = function () {

};
infoList.prototype = {
    init: function () {
        var tagName = location.href.match(/(\?)(.+)/) ? location.href.match(/(\?)(.+)/)[2] : "";
        switch (tagName) {
            case "work" :
                this.setTagStyle(tagName);
                this.getWorkInfo();
                break;
            case "blog" :
                this.setTagStyle(tagName);
                this.getBlogInfo();
                break;
            case "about" :
                this.setTagStyle(tagName);
                this.getAboutInfo();
                break;
            default:
                location.replace("../index.html");
        }
    },
    setTagStyle: function (tagName) {
        $("header ." + tagName).css({
            "color": "rgb(255,255,255)",
            "backgroundColor": "rgb(81,179,200)"
        });
        $("header ." + tagName).addClass("check" + tagName.replace(/\w/, tagName.match(/\w/)[0].toUpperCase()));
        $("header ." + tagName).removeClass(tagName);

    },
    getWorkInfo: function () {

    },
    getBlogInfo: function () {
        $.getJSON("../resource/blogSrc.json", function (data) {
            console.info(data.data);
            var htmlObj = [];
            $.each(data.data,function () {
                var htmlSrc = '<div class="article">' +
                    '<h2>'+this.title+'</h2>' +
                    '<img class="pageImg" src="'+this.img+'"/>' +
                    '<div class="articleIntro">'+
                        this.introduce+
                    '</div>' +
                    '<div class="read">阅读全文 </div>' +
                    '</div>';
                htmlObj.push(htmlSrc);
            });
            $(".containerBlog .blogLeft").append(htmlObj);
        });
    },
    getAboutInfo: function () {

    }
};
$(function () {
    $(".title h2").unbind("click");
    $(".title h2").bind("click", function (e) {
        location.replace("../index.html");
    });
    var info = new infoList();
    info.init();
});