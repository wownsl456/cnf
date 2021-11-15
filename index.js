$(".menu_list>li").hover(function(){
   $(this).find('.menu_sub_list li').slideDown('fast'); 
}, function(){
    $(this).find('.menu_sub_list li').slideUp('fast');
});

var current = 0;
var count = $(".gram_img_slide_box li").size() - 1;

$(".gram_list li").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    
    current = $(this).index();
    
    var index = $(this).index();
    var pos = 750 * index;
    
    $(".gram_img_slide_box").animate({
        left: -pos
    }, 400);
});

$(".gram_list li").eq(current).click();

$(".arrow a").click(function(){
   var check = $(this).hasClass("prev_btn");
    var checky = $(this).hasClass("next_btn");
    
    if (check == true) {
        current -= 1;
    } else {
        current == 1;
    }
    
    if (current < 0) {
        current = count;
    }
    if (current > count) {
        current = 0;
    }
    
    if (checky == true) {
        current += 1;
    } else {
        current == 1;
    }
    
    if (current < 0) {
        current = count;
    }
    if (current > count) {
        current = 0;
    }
    
    
    $(".gram_list li").eq(current).click();
    
    return false;
});
