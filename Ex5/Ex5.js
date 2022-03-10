$(document).ready(function () {
    $("#formdados").submit(function () {
        return validar();
    });
    function validar() {
        var mensagem = "\nErros na submissão:";
        var nome = $("#name").val().trim();
        var email = $("#email").val().trim();
        var idade = $("#age").val().trim();
        var telefone = $("#tel").val().trim();
        var password = $("#password").val().trim();
        var passwordConfirm = $("#passwordConfirm").val().trim();

        if (nome == "" || nome.length == 0) {
            alert(mensagem+"Erro no nome");
        }else if(password != passwordConfirm){
            alert(mensagem+"Password errada")
        }

    }
});
