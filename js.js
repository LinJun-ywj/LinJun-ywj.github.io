$(function() {
    //换肤效果
    $('.theme ul li').eq(0).click(function() {
        $('html,body').css('background-color', '#fff')
    }).mouseover(function() {
        $(this).css('transform', 'scale(1.1)')
    }).mouseout(function() {
        $(this).css('transform', 'scale(1)')
    });
    $('.theme ul li').eq(1).click(function() {
        $('html,body').css('background-color', '#aaa')
    }).mouseover(function() {
        $(this).css('transform', 'scale(1.1)')
    }).mouseout(function() {
        $(this).css('transform', 'scale(1)')
    });;
    //header部分导航栏
    $('.title>img').fadeIn(1000)
    for (var i = 0; i < $('.nav>li').length; i++) {
        $('.nav>li').eq(i).mouseover(function() {
            $(this).css({
                backgroundColor: 'rgb(150,150,150)',
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
            transform: 'scale(1.05)'
        }).children('.ul1').css('visibility', 'visible')
    })
    $('.msg').mouseout(function() {
        $(this).css({
            transform: 'scale(1)'
        }).children('.ul1').css('visibility', 'hidden')
    })
})
