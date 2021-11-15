$(document).ready(function () {
    $('.prev').click(function () {
        $('.banner_list li').last().prependTo('.banner_list');
        $('.banner_list').css({
            marginLeft: -330
        });
        $('.banner_list').animate({
            marginLeft: 0
        }, 330);
        return false;
    });

    $('.next').click(function () {

        $('.banner_list').animate({
            marginLeft: -330
        }, function () {
            $('.banner_list li').first().appendTo('.banner_list');
            $('.banner_list').css({
                marginLeft: 0
            });

        })
        return false;

    });


});
