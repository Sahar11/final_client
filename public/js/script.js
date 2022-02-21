/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
$(document).ready(function () {
    //Login URL
    $('#login-btn').on('click', function () {
        window.location.href = "login.html";
    });
    //SignUp URL
    $('#signup-btn').on('click', function () {
        window.location.href = "signUp.html";
    });
    //Mobile menu
    $('.menu-btn').on('click', function () {
        $('#menu ul').show();
    });
    //Sticky scroll
    $(window).scroll(function () {
        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
});

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}