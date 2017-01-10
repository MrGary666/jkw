$(function() {
    /*轮播图*/
    $('#carousel-example-generic').hammer().on('swipeleft', function() {
        $(this).carousel('next');
    });
    $('#carousel-example-generic').hammer().on('swiperight', function() {
        $(this).carousel('prev');
    })
    var timer;
    var flag = true;

    function lock() {
        clearTimeout(timer);
        flag = false;
        timer = setTimeout(function() {
            flag = true;
        }, 200);
    }


    $('#dowebok').fullpage({
        navigation: false, // 显示导航
        loopBottom: true, // 底部轮滚
        loopTop: false, // 顶部轮滚
        css3: true, // 开启CSS3动画

        onLeave: function(index, nextIndex, direction) {
            var box = $("#box");
            var $ww = $(window).width();
            if($ww>787){
               // alert("111");
                // 底部
                if (index === 4 && nextIndex === 1) {
                    box.addClass("bottom");
                    return false;
                }
                if (index === 4 && nextIndex === 3 && box.hasClass("bottom")&& $ww>787) {
                    lock();
                    box.removeClass("bottom");
                    return false;
                }

                // 返回事件阻塞
                return flag
            }
            if($ww<787){
                box.addClass("bottom");
                return false;

            }
        }
    })

    $(window).resize(function() {
        autoScrolling();
        autoHeight();
    });

    function autoScrolling() {
        var $ww = $(window).width();
        if ($ww < 787) {
            $.fn.fullpage.setAutoScrolling(false);
        } else {
            $.fn.fullpage.setAutoScrolling(true);
        }
    }

    function autoHeight() {
        var $ww = $(window).width();
        var $hh = $(window).height();
        if ($ww < 787) {
            flag = true;
            /*页面总高度*/
            var box = $('#box').height();
            $('.fp-viewing-3').css({
                'height': box
            })
            var fh = $('.footer').height();
            $('#footer_box').css({
                    "height": fh
                })
                /*轮播图大小*/
                /*var banner = $('.carousel-inner img').css({
                    'height': "auto"
                });
                */
            var h1 = $('.carousel-inner').height();
            var h2 = $('.need_box').height();
            var h3 = $('.soft_box').height();
            var h4 = $('.service_box').height();
            /*$('.carousel-inner img').css({
                'height': h1
            });*/
            $('#dowebok').find('.fp-table').eq(0).find('.fp-slidesContainer').eq(0).css({
                'height': h1
            });
            $('#dowebok').find('.fp-section').eq(0).css({
                'height': h1
            });
            $('#dowebok').find('.fp-table').eq(0).css({
                'height': h1
            });
            $('#dowebok').find('.fp-tableCell').eq(0).css({
                'height': h1
            });
            $('#dowebok').find('.fp-table').eq(1).css({
                'height': h2
            });
            $('#dowebok').find('.fp-table').eq(2).css({
                'height': h3
            });
            $('#dowebok').find('.fp-table').eq(3).css({
                'height': h4
            });

            $('#dowebok').find('.fp-tableCell').eq(1).css({
                'height': h2
            });
            $('#dowebok').find('.fp-tableCell').eq(2).css({
                'height': h3
            });
            $('#dowebok').find('.fp-tableCell').eq(3).css({
                'height': h4
            });
        } else {
            $('.carousel-inner img').css({
                'height': $hh,
                'width': $ww
            });
            /*$('#dowebok').find('.fp-table').css({
                'height': $hh
            });*/
            $('#dowebok').find('.fp-table').eq(1).css({
                'height': $hh
            });
            $('.section').css({
                'height': $hh
            })
        }
    }
    autoScrolling();
    autoHeight();

});
