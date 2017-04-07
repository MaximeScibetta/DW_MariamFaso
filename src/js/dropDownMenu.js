$(document).ready(function() {
    $(".menu__home__submenu").hide();
    $(".menu__agenda__submenu").hide();
    $(".menu__don__submenu").hide();
    $(".menu__actu__submenu").hide();
    $(".menu__contact__submenu").hide();

    /*HOME*/
    $(".menu__home").mouseover(function() {
        $(".menu__home__submenu").show();
    });

    $(".menu__home").mouseleave(function() {
        $(".menu__home__submenu").hide();
    });

    /*AGENDA*/
    $(".menu__agenda").mouseover(function() {
        $(".menu__agenda__submenu").show();
    });

    $(".menu__agenda").mouseleave(function() {
        $(".menu__agenda__submenu").hide();
    });

    /*DONS*/
    $(".menu__don").mouseover(function() {
        $(".menu__don__submenu").show();
    });

    $(".menu__don").mouseleave(function() {
        $(".menu__don__submenu").hide();
    });

    /*ACTUALITE*/
    $(".menu__actu").mouseover(function() {
        $(".menu__actu__submenu").show();
    });

    $(".menu__actu").mouseleave(function() {
        $(".menu__actu__submenu").hide();
    });

    /*CONTACT*/
    $(".menu__contact").mouseover(function() {
        $(".menu__contact__submenu").show();
    });

    $(".menu__contact").mouseleave(function() {
        $(".menu__contact__submenu").hide();
    });
});