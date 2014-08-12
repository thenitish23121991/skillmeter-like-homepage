
$(document).ready(function(){

setTimeout(function(){
$('.middle_head').addClass('show');
},800);

setTimeout(function(){
$('.middle_lower_left').addClass('show');
$('.middle_lower_right').addClass('show');
},1200);


$(window).scroll(function(){

var scrolled = $(window).scrollTop();

if(scrolled > 500){
$('.slide2_options_container').addClass('show');
}

});

});


