$(document).ready(function () {
    $("li").hover(function () {
        $(this).css("color", "red");
        $(this).css("background-color", "white");
    }, function () {
        $(this).css("color", "white");
        $(this).css("background-color", "red");
    });
});