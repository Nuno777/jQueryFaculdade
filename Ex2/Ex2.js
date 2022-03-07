$(document).ready(function (){
    function horas(){
        var d=new Date();
        var h=d.getHours();
        var m=d.getMinutes();
        var s=d.getSeconds();
        var d=h+":"+m+":"+s;
    }
    horas();
});