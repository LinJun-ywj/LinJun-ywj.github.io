$(function() {
            //换肤效果
            $('.theme ul li').eq(0).click(function() {
                $('html,body').css('background-color', '#fff')
            });
            $('.theme ul li').eq(1).click(function() {
                    $('html,body').css('background-color', '#aaa')
                })
                //header部分导航栏
            $('.title>img').fadeIn(1000)
            for (var i = 0; i < $('.nav>li').length; i++) {
                $('.nav>li').eq(i).mouseover(function() {
                    $(this).css({
                        backgroundColor: '#aaa',
                    });
                })
                $('.nav>li').eq(i).mouseout(function() {
                    $(this).css({
                        backgroundColor: '#bbb',
                    });
                })
            }
            //artcile部分
            $('.msg').fadeIn(1500)
            $('.msg').mouseover(function() {
                $(this).css({
                    transform: 'translate(-2px,-2px)',
                    boxShadow: '5px 5px 5px #aaa'
                })
            })
            $('.msg').mouseout(function() {
                $(this).css({
                    transform: 'translate(2px,2px)',
                    boxShadow: 'none'
                })
            })
        })
