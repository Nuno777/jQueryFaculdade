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
        var pass = $("#password").val().trim();
        var passConfirm = $("#passwordConfirm").val().trim();
        var testEmail = /^\S+@\S+.\S+$/;

        if (!testEmail.test(email)) {
            mensagem += "\nCampo email deve ter um email valido";
        }
        if (nome === "") {
            mensagem += "\nCampo nome deve estar preenchido";
        }
        if (email.length === 0) {
            mensagem += "\nCampo email deve estar preenchido";
        }
        if (telefone.length === 0) {
            mensagem += "\nCampo telefone deve estar preenchido";
        }
        if (idade.length === 0) {
            mensagem += "\nCampo idade deve eatar preenchido";
        }

        if (isNaN(telefone) || Number.isInteger(Number(telefone)) === false) {
            mensagem += "\nCampo telefone deve ser um numero com 9 digitos";
        }
        if (isNaN(idade) || Number.isInteger(Number(idade)) === false) {
            mensagem += "\nCampo idade deve ser um numero superior ou igual a 18";
        }

        //password
        if (pass.length == 0) {
            mensagem += "\nCampo password deve esatr preenchido";
        } else if (pass.length < 6) {
            mensagem += "\nCampo password deve ter pelo menos 6 digitos";
        } else if (pass != passConfirm) {
            mensagem += "\nPassword diferentes";
        }

        if (mensagem !== "Erros na submissao:") {
            alert(mensagem);
            return false;
        }
        return true;
    }
});
