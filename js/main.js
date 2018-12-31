document.addEventListener("DOMContentLoaded", function () {
    var open_menu = document.getElementById("open-slide-menu");
    var close_menu = document.getElementById("close_menu");
    // console.log(open_menu);
    open_menu.addEventListener("click", function () {
        document.getElementById("side-menu").style.height = "320px";
    });
    close_menu.addEventListener("click", function () {
        document.getElementById("side-menu").style.height = "0";
    });
    
});
