$(document).ready(function () {
    $("img").hover(function () {
        var teste ="img/"+ $(this).attr("id")+"_over.gif"
        $(this).attr("src", teste)
    }, function () {
         teste ="img/"+ $(this).attr("id")+".gif"
        $(this).attr("src", teste)
    });

    //ainda nao feito
     $("#img").mousedown(function () {
        teste="img/"+$(this).attr('src')+ '_down.gif'
        $(this).attr("src", teste)
    });
    $("#img").mouseout(function () {
        $(this).attr('src', 'img/alunos.gif')
    });
});