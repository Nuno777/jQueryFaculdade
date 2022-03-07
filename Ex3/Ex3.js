$(document).ready(function () {
    $("img").hover(function () {
        var teste ="img/"+ $(this).attr("id")+"_over.gif"
        $(this).attr("src", teste)
    }, function () {
        var teste ="img/"+ $(this).attr("id")+".gif"
        $(this).attr("src", teste)
    });

    //ainda nao feito
     $("#img").mousedown(function () {
        $(this).attr('src', 'img/alunos_down.gif')
    });
    $("#img").mouseout(function () {
        $(this).attr('src', 'img/alunos.gif')
    });
});