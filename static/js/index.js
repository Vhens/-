/**
 * Created by zjwen on 2018/4/23.
 */
(function(){
    var nav = $('#nav');
    var OFFER_TOP = 80;

    if($(this).scrollTop() > OFFER_TOP){
        nav.css({'background':'rgba(0,0,0,.6)'})
    };
    $(window).scroll(function(){
        if($(this).scrollTop() > OFFER_TOP){
            nav.css({'background':'rgba(0,0,0,.6)'})
            return ;
        }
        nav.css({'background':''})
    })
})();

(function(){
    var _swpier_pagination = $('._swpier_pagination');
    var _swpier_pagination2 = $('._swpier_pagination2');

    var _navgator_go = $('#content .handbook .main .navigator .go');
    var _navgator_go_text1 = '消费者，自用省钱<br>轻松五步，马上开始';
    var _navgator_go_text2 = '合伙人，分享赚钱<br>轻松五步，马上开始';

    var _swpier_pagination_line = _swpier_pagination.find('.line');
    var _swpier_pagination_line2 = _swpier_pagination2.find('.line');

    var _swiper_container = $('.swiper-container');
    var _swiper_container2 = $('.swiper-container2');

    var consumer_btn = $('#consumer-btn');
    var merge_btn = $('#merge-btn');

    var swiper1 = new Swiper('.swiper-container', {
        init: false,
        slidesPerView: 3,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        on:{
            init:function() {
                _swpier_pagination_line.removeClass('_action');
                _swpier_pagination_line.eq(0).addClass('_action');
            },
            slideChange:function () {
                var index = this.activeIndex;
                _swpier_pagination_line.removeClass('_action');
                _swpier_pagination_line.eq(index).addClass('_action');
            }
        }
    });
    _swpier_pagination_line.each(function(){
        $(this).click(function(){
            var index = $(this).index();
            swiper1.slideTo(index, 500, false);
        });
    });

    var swiper2 = new Swiper('.swiper-container2', {
        init: false,
        slidesPerView: 3,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        on:{
            init:function() {
                _swpier_pagination_line2.removeClass('_action');
                _swpier_pagination_line2.eq(0).addClass('_action');
            },
            slideChange:function () {
                var index = this.activeIndex;
                _swpier_pagination_line2.removeClass('_action');
                _swpier_pagination_line2.eq(index).addClass('_action');
            }
        }
    });
    _swpier_pagination_line2.each(function(){
        $(this).click(function(){
            var index = $(this).index();
            swiper2.slideTo(index, 500, false);
        });
    });

    var _show_tabs = $('._show_tabs').find('span');
    var _show_lines = $('._show_lines').find('span');

    consumer_btn.click(function () {
        _show_tabs.eq(0).click();
    })
    merge_btn.click(function () {
        _show_tabs.eq(1).click();
    })


    swiper1.init();
    swiper2.init();
    _show_tabs.each(function(){
        $(this).click(function(){
            var index = $(this).index();
            _show_tabs.removeClass('action');
            _show_lines.removeClass('action');

            _show_tabs.eq(index).addClass('action');
            _show_lines.eq(index).addClass('action');

            if(index){
                _swpier_pagination.hide();
                _swpier_pagination2.show();

                _swiper_container.addClass('_swpier_flexd');
                _swiper_container2.removeClass('_swpier_flexd');
                _navgator_go.html(_navgator_go_text2);

                swiper2.slideTo(0, 500, false);
            }else{
                _swpier_pagination.show();
                _swpier_pagination2.hide();

                _swiper_container.removeClass('_swpier_flexd');
                _swiper_container2.addClass('_swpier_flexd');
                _navgator_go.html(_navgator_go_text1);

                swiper1.slideTo(0, 500, false);
            }
        })
    })
})();

(function() {
    var _about = $('#about .tabs .tabs-main').find('.tab');
    var _main = $('#about .main').children('div');

    _about.each(function(){
        $(this).click(function(){
            _about.removeClass('action');
            var index = $(this).index();
            $(this).addClass('action');
            _main.hide();
            _main.eq(index).show();
        })
    })
})();

(function(){
    var video_btn = $('#banner .main .main-from .download .btn .video');
    var player_form = $('.player-form');



    var options = {};

    var player = videojs('player', options, function onPlayerReady() {


        video_btn.click(function(){
            player_form.toggle();
            this.play();
            this.currentTime(0)
        }.bind(this));

        $(document).mouseup(function(e){
            if(!player_form.is(e.target) && player_form.has(e.target).length === 0){
                if(player_form.css("display") !== 'none'){
                    player_form.hide();
                    this.currentTime(0);
                    this.load();
                }

            }
        }.bind(this));
    });
})();

(function () {
    var banner_btn = $('#banner .main .main-from .download .btn .down');
    banner_btn.hover(function () {
        $(this).children('#download-fixed').toggle();
    })
})()