//scroll changes nav bar colour
$(document).scroll(function () {
    var nav = $('nav');
    if ($(document).scrollTop() > 300) {
        nav.removeClass('navbar-dark');
        nav.addClass('navbar-light');
        nav.attr('style', 'background-color: #eeeeee;');

    } else {
        nav.addClass('navbar-dark');
        nav.attr('style', 'background-color:;');
    }
})
