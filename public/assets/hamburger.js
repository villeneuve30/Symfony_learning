$(document).ready(function() {
    $(".hamburger").on("click", menuDisplay);

    function menuDisplay(){
        $(this).toggleClass('active');
        $(this).toggleClass('not-active');
        $(".hidden-menu").toggleClass("activeMenu");
    }
});



