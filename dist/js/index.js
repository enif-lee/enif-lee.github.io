'use strict';


/*********************************************************************************
 * Page Module
 *********************************************************************************/
var pages = {
    getEvent: function (index) {
        if (pages[index] != undefined) { pages[index]($('section.fullpage').eq(index-1)); pages[index] = null; }
        $("#nav .item").removeClass('active').eq(index).addClass('active');
    },
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
            setTimeout(()=>{$page.find('.hidden').removeClass('hidden')},1000);
        }, 1000);
    },
    3: function ($page) {

    },
    4: function ($page) {

    },
    5: function ($page) {

    },
    6: function () {

    }
}


/*********************************************************************************
 * Navigation Module1
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

$('.fullpage').waitForImages(true).done(function () {
    $('#page_loader').fadeOut();
    pages.getEvent(1);
});

$('#da-thumbs > li').hoverdir();