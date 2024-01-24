// aos
AOS.init({
    duration: 1400,
});
// aos

// 햄버거
$('#nav-icon3').click(function () {
    $(this).toggleClass('open');
});
// 햄버거

// 스크롤다운

var lastScroll = 0;
$(window).scroll(function (event) {

    var st = $(this).scrollTop();
    if (st > lastScroll) {
        $("header#header").addClass("active");
  
    }
    else {
        $("header#header").removeClass("active");
 
    }
    lastScroll = st;

    if ($(this).scrollTop() == 0) {

    }
});
//스크롤다운