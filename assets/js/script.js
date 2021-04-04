AOS.init();

// Side navbar on smaller screens

$(document).ready(function(){
    $('.sidenav').sidenav();
});

$(document).ready(function() {
    $(window).resize(function() {
        // This will fire each time the window is resized:
        if($(window).width() <= 400) {
            $('#weatherDash').insertBefore('#weatherDashContent');
            $('#passGen').insertBefore('#passGenContent');
            $('.right-align').removeClass('right-align');
            $('#aboutMe').removeAttr('data-aos');
            $('#work').removeAttr('data-aos');
            $('#contact').removeAttr('data-aos');
        } else {
            
        }
    }).resize(); // This will simulate a resize to trigger the initial run.
});