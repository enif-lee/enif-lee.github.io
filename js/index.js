'use strict';

/*********************************************************************************
 * Data
 *********************************************************************************/

const datas = {
    hobbies :{
        cycle : {
            img : '/img/cycle_bg.jpg',
            title : 'Increase endurance',
            contents : 'CYCLE 테스트입니다.'
        },
        guitar : {
            img : '/img/guitar_bg.jpg',
            title : 'To grow up creativity',
            contents : 'Guitar 테스트입니다.'
        }
    }
}



/*********************************************************************************
 * Page Module
 *********************************************************************************/
var pages = {
    getEvent: function (index) {
        if (pages[index] != undefined) { pages[index]($('section.full-page').eq(index - 1)); pages[index] = null; }
        $("#nav .item").removeClass('active').eq(index).addClass('active');
    },

    // 각 페이지에 대한 에니메이션 정의 
    1: function ($page) {
        var $cube = $page.find('.shape');
        $cube.shape();
        setTimeout(function (){
            $cube.shape('flip up');
        }, 2000);
        setTimeout(function (){
            $cube.shape('flip up');
        }, 4000);
        setTimeout(function (){
            $cube.find('.side').animate({ width: 460, height: 400 })
        }, 5500);
    },
    2: function ($page) {
        setTimeout(function (){
            $page.find('.wrap.full-page').addClass('brightness');
            $page.find('#title').typeIt({
                strings: 'To be contributor.',
                speed: 50,
                autoStart: false
            });
            setTimeout(function (){
                $page.find('.content').fadeTo('fast', 1);
            }, 1000)
        }, 1000);
    },
    3: function ($page) {
        // $('section.full-page').eq(2).css('background', 'url("../img/goals.jpg")');
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
    move: function (index) {
        $("#nav .item").removeClass('active').eq(index).addClass('active');
        $("#main").moveTo(index);
    },
    getIndex: function () {
        return $("#nav .item").index($("#nav .item.active")) + 1;
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
    beforeMove: pages.getEvent,
    loop: false,
    keyboard: true,
    responsiveFallback: false,
    direction: "vertical"
});


$("#nav .item").on('click', function () {
    navigationBar.move($("#nav .item").index(this));
});

$('section.full-page').imagesLoaded({ background: true }).progress(function (instance, image) {
    var result = image.isLoaded ? 'loaded' : 'broken';
    console.log('image is ' + result + ' for ' + image.img.src);
}).done(function () {
    $('#page_loader').fadeOut();
    pages.getEvent(1);
});

$('#da-thumbs > li').hoverdir();



/*********************************************************************************
 * Hobbies Page
 *********************************************************************************/
(function ($) { 

    var $hobbies = $('section#hobbies');
    $hobbies.find('div.hover').on('click', function () {
        var type = $(this).data('value');
        var hobby = datas.hobbies[$(this).data('value')];

        $hobbies.find('div#selections').fadeTo('fast', 0, function () { 
            $(this).hide();
            $hobbies.find('p#contents').text(hobby.contents);
            $hobbies.addClass(type);

            $hobbies.find('div#explain').fadeTo('fast', 1, function () {
                console.log($(this).find('#title'));
                $(this).find('#title').typeIt({
                    strings : hobby.title,
                    speed: 100,
                    autoStart: false
                });
            });
        });
    });

    $hobbies.find('div#explain #close').on('click', function () {
        $hobbies.removeClass('cycle').removeClass('guitar');
        $hobbies.find('div#selections').show(function () {
            $(this).fadeTo(1000, 1);
        })
        $hobbies.find('div#explain').fadeTo('fast', 0, function () {
            $hobbies.find('h1#title').empty();
            $hobbies.find('p#contents').empty();
        });
    });

})(jQuery)