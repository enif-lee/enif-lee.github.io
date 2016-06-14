'use strict';

/*********************************************************************************
 * Data
 *********************************************************************************/

const datas = {
    experiences : {
        conclusion : {
            title : '단정의 위험',
            contents : '친구의 알고리즘 자격 시험을 도와줄 때 이였습니다. 친구와 저는 백트래킹 문제를 보고 기존에 풀어왔던 패턴과 머릿속의 설계를 바탕으로 알고리즘을 작성했고 서로의 코드를 비교하였습니다. 그 때 저는 “이 문제는 이 방법 외에는 다른 방법이 없다!”라고 생각을 했지만 친구의 코드는 충격으로 다가왔습니다. 문제 풀이에 대한 접근 방법이 달라 섣불리 단정했던 사실이 대단히 큰 부끄러움으로 다가왔습니다. 그 경험 이후로 모든 개발에나 생활에서도 항상 다른 방법이 있다는 것을 고려하고 스스로의 의견보다는 다른 사람의 의견을 흥미롭게 귀담아 듣기 시작했습니다',
        },
        bestway : {
            title : '괜찮은 건 안돼, 최선은 무엇일까?',
            contents : '“소프트웨어의 악취를 제거하는 리팩토링 – 길벗”을 읽으며 기존의 잘못 개발했던 내용이 생각나 굉장히 부끄러우면서 공감했던 내용이 있습니다. 결과적으로 정합성, 안정성을 보장하지 못하는 여러 코드들은 기술 부채에 해당하며 추후 어떠한 오류를 뱉을지 모르는 악취라는 것, 이는 아직까지도 여전히 저에게 남겨진 숙제입니다. 당장의 일을 처리하려 무심코 넘어가거나 테스트용으로 작성했던 코드 마저 기능에 있어서는 언제 발생할지 모르는 버그라고 생각하기 시작했으며, 이 문단의 소 제목을 제 슬로건으로 삼은 이유기도 합니다.',
        },
        fundamental : {
            title : '원인과 원리',
            contents : 'Hibernate JPA를 사용한 프로젝트에서의 일입니다, 저를 포함에 대부분이 사람들이 ORM 프레임워크를 처음으로 써보게 되어 특정한 문제가 생길 때마다 기존 SQL Mapper처럼 쿼리를 짜는 방향으로 해결하려고 했습니다. 또한 영속성이란 개념을 제대로 이해하지 못해 잘못된 업데이트 이벤트가 발생되기도 했지만 근본적인 발생 원리에 대해선 접근하지 않고 임시적친 대책들 만으로 해결했습니다. 이러한 상황들을 통해 저는 "원리를 제대로 이해 못 한 사용은 문제를 발생시킨다"란 깨달음을 얻었으며 그 후 모든 문제는 해결에 초점보단 발생 원인과 기술적 원리에 대해서 우선 고민하게 되었습니다.',
        }
    },

    hobbies :{
        cycle : {
            img : '/img/cycle_bg.jpg',
            title : 'Increase endurance',
            contents : '실화를 바탕한 영화 "이미테이션 게임 "에서도 주인공은 자신의 임무에 몰입 중임에도 체력을 기르는 것을 소홀히 하지 않습니다. 왜 일까요? 힘을 쓰는 것도 아니지만, 많은 집중력을 쏟다 보면 금세 당이 떨어지고 몸이 피곤해집니다. 이것이 제가 취미로 자전거를 타는 이유입니다. 물론 지정된 목표까지 쉴 새 없이 달려 목표지점에 도달하여 얻는 성취감과 상쾌함도 있지만, 무엇보다 몸이 건강해진다는 것입니다. 체력과 건강이 좋지 않다면 개발은 물론이고 어떠한 일에서도 성공할 수 없다고 생각합니다.'
        },
        guitar : {
            img : '/img/guitar_bg.jpg',
            title : 'To grow up creativity',
            contents : '사실 AC/DC 같은 90년대 락을 굉장히 좋아하는 것이 제가 기타를 치는 주된 이유기도 하지만 중요한 점은 악기를 연주하게 되면 창의성과 학습능력이 발전한다는 것입니다. 정해진 악보에 따라 곡을 연주하기도 하지만 가끔은 멜로디가 없는 노래에 저만의 멜로디를 입히기도 하고 가끔 사람들과 하나가 되어 즉흥연주를 할 때, 기존의 알고 있던 멜로디가 아닌 다른 시도를 통해 좋은 멜로디를 만들어냅니다. 이는 업무를 진행할 때에도 기존의 정해진 패턴대로 개발하는 것이 아닌 다른 방법으로 해결할 순 없을지 고민하는 저의 모습에 많은 도움이 된 것 같습니다.'
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
                $page.find('.content').fadeTo('slow', 1);
            }, 1000)
        }, 1000);
    },
    3: function ($page) {
        // $('section.full-page').eq(2).css('background', 'url("../img/goals.jpg")');
        var delay = 500;
        $page.find('.selections > div > div').each(function () {
            $(this).delay((delay += 500)).fadeIn();
        });
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
 * Experiences Page
 *********************************************************************************/
(function (){
    contentModule({
        target  : 'section#experiences',
        menu    : 'div.selections',
        buttons : '.titles a',
        datas   : datas.experiences
    });
})();




/*********************************************************************************
 * Hobbies Page
 *********************************************************************************/
(function ($) { 
    contentModule({
        target  : 'section#hobbies',
        menu    : 'div#selections',
        buttons : 'div.hover',
        datas   : datas.hobbies
    });
})(jQuery)


/*********************************************************************************
 * Page Module
 *********************************************************************************/

function contentModule(options) {

    var $target = $(options.target),
        $menu   = $target.find(options.menu),
        $buttons= $target.find(options.buttons),
        $content= $target.find('div.explain'),
        datas   = options.datas;

    $buttons.on('click', function () {
        var type = $(this).data('type');
        var data = datas[type];

        console.log(data);

        $menu.fadeTo('fast', 0, function () { 
            $(this).hide();
            $target.find('p.contents').text(data.contents);
            $target.attr("data-type", type);

            $content.fadeTo('fast', 1, function () {
                $(this).find('.title').typeIt({
                    strings : data.title,
                    speed: 100,
                    autoStart: false
                });
            });
        });
    });

    $content.find('.close').on('click', function () {
        $target.attr("data-type", "");
        $menu.show(function () {
            $(this).fadeTo('fast', 1);
        });
        $content.fadeTo('fast', 0, function () {
            $content.find('h1.title').empty();
            $content.find('p.contents').empty();
        });
    });
}