$(document).ready(function () {
    $("#formdados").submit(function () {
        return validar();
    });

    $("span").hide();
    $("#name").on("change keyup", verificarNome);
    $("#email").on("change keyup", verificarEmail);
    $("#age").on("change keyup", verificarIdade);
    $("#tel").on("change", verificarTelefone);

    /*  function validar() {
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
        if (nome.length === 0) {
            $(".errorNome").show();
        } else {
            $(".errorNome").hide();
        }
    }

    function verificarEmail() {
        var email = $("#email").val().trim();
        var testEmail = /^\S+@\S+.\S+$/;
        if (email.length === 0 || !testEmail(email)) {
            $(".errorEmail").hide();
        } else {
            $(".errorEmail").show();
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
        if (telefone < 9) {
            $(".errorTelefone").show();
        } else {
            $(".errorTelefone").hide();
        }

    }

});
