/*global $*/
/*jslint sloppy:true, browser: true, white: true*/
$("h1.page-title").text("My code runs!");
$(window).on('click', function (e) {
    $('img.logo').css({left: e.pageX});
});
setInterval(function() {
    $('.logo').css({
        'margin-left': randomMargin(),
        'margin-top': randomMargin()
    });
}, 200);
var myColor = "blue"
$(window).on('click', function (e) {
    $('.logo').css({left: e.pageX,
                    top: e.pageY});
    $('.logo').toggleClass('rotated');
});
