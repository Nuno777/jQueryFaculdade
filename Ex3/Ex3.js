$(document).ready(function () {
    $("img").hover(function () {
        var teste = "img/" + $(this).attr("id") + "_over.gif"
        $(this).attr("src", teste)
    }, function () {
        teste = "img/" + $(this).attr("id") + ".gif"
        $(this).attr("src", teste)
    });
    $("img").mousedown(function () {
        teste = "img/" + $(this).attr('id') + '_down.gif'
        $(this).attr("src", teste)
    });
});