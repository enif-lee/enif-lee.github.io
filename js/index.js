'use strict';


/*********************************************************************************
 * Page Module
 *********************************************************************************/
var pages = {
    getEvent: function (index) {
        if (pages[index] != undefined) { pages[index]($('section.fullpage').eq(index-1)); pages[index] = null; }
        $("#nav .item").removeClass('active').eq(index).addClass('active');
    },

    // 각 페이지에 대한 에니메이션 정의 
    1: function ($page) {
        var $cube = $page.find('.shape');
        $cube.shape();
        setTimeout(() => {
            $cube.shape('flip up');
        }, 2000);
        setTimeout(() => {
            $cube.shape('flip up');
        }, 4000);
        setTimeout(() => {
            $cube.find('.side').animate({ width: 460, height: 400 })
        }, 5500);
    },
    2: function ($page) {
        setTimeout(() => {
            $page.find('.wrap.fullpage').addClass('brightness');
            $page.find('#title').typeIt({
                strings: 'To be contributer.',
                speed: 50,
                autoStart: false
            });
            setTimeout(() => {
                $page.find('.content').fadeTo('fast',1);
            }, 1000)
        }, 1000);
    },
    3: function ($page) {
        // $('section.fullpage').eq(2).css('background', 'url("../img/goals.jpg")');
    },
    4: function ($page) {

    },
    5: function ($page) {

    },
    6: function () {

    }
}


/*********************************************************************************
 * Navigation Module
 *********************************************************************************/

var navigationBar = {
    move : function (index) {
        $("#nav .item").removeClass('active').eq(index).addClass('active');
        $("#main").moveTo(index);
    },
    getIndex : function () {
        return $("#nav .item").index($("#nav .item.active"))+1;
    }
}

/*********************************************************************************
 * Main Script
 *********************************************************************************/

$("#main").onepage_scroll({
    sectionContainer: "section",
    easing: "ease",
    animationTime: 500,
    pagination: false,
    updateURL: false,
    beforeMove :pages.getEvent,
    loop: false,
    keyboard: true,
    responsiveFallback: false,
    direction: "vertical"
});


$("#nav .item").on('click', function () {
    navigationBar.move($("#nav .item").index(this));
});

$('.fullpage').imagesLoaded({ background: true }).done(function () {
    $('#page_loader').fadeOut();
    pages.getEvent(1);
});

$('#da-thumbs > li').hoverdir();