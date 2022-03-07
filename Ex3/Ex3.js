$(document).ready(function (){
    $("#imagem").hover(function(){
        $(this).attr('src','img/alunos_over.gif')
    },function(){
        $(this).attr('src','img/alunos_down.gif')
    });
    $("#imagem").mousedown(function(){
        $(this).attr('src','img/alunos_down.gif')
    });
    $("#imagem").mouseout(function(){
        $(this).attr('src','img/alunos.gif')
    });
});