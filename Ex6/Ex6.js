$(document).ready(function () {
    $("#formdados").submit(function () {
        return validar();
    });

    $("span").hide();
    $("#name").on("change keyup", verificarNome);
    $("#email").on("change keyup", verificarEmail);
    $("#age").on("change keyup", verificarIdade);
    $("#tel").on("change", verificarTelefone);

    /* function validar() {
        $(".error").hide();

        verificarNome();
        verificarEmail();
        verificarIdade();
        verificarTelefone();

        if ($(".error:visible").length > 0) {
            return false;
        }
        return true;
    } */

    function verificarNome() {
        var nome = $("#name").val().trim();
        if (nome.length === 0 || nome.length < 3) {
            $(".errorNome").show();
        } else {
            $(".errorNome").hide();
        }
    }

    function verificarEmail() {
        var email = $("#email").val().trim();
        var testEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.length === 0 || !testEmail.test(email)) {
            $(".errorEmail").show();
        } else {
            $(".errorEmail").hide();
        }
    }

    function verificarIdade() {
        var idade = $("#age").val().trim();
        if (idade < 18) {
            $(".errorIdade").show();
        } else {
            $(".errorIdade").hide();
        }
    }

    function verificarTelefone() {
        var telefone = $("#tel").val().trim();
        var testTel = [0 - 9];
        if (telefone === 0 || !testTel.test(telefone)) {
            $(".errorTelefone").show();
        } else {
            $(".errorTelefone").hide();
        }

    }

});
