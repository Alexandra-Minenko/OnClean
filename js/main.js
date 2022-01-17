/*scrollup*/
$(document).ready(function(){
 
$(window).scroll(function(){
if ($(this).scrollTop() > 100) {
$('.scrollup').fadeIn();
} else {
$('.scrollup').fadeOut();
}
});
 
$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 600);
return false;
});
 
});

/*sloiler*/
$(function() {
	var test = $('#form'),
    down = $('#down'),
    up = $('#up'),
    toggle = $('#toggle');
	toggle.click(function() {
    test.slideToggle(1000, function() {
    });
});

});