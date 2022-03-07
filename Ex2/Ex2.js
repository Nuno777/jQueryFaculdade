$(document).ready(function (){
    function relogio(){
        var d=new Date();
        var h=d.getHours();
        var m=d.getMinutes();
        var s=d.getSeconds();
        var d=h+":"+m+":"+s;
        $("#escrever").html(d);
        setTimeout(relogio,1000);
    }
    relogio();
});