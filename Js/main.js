$(document).ready(function () {

    $('#telefone').mask('(00) 0000-0000');
    $('#cpf').mask('000.000.000-00', { reverse: true });
    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nomeCompleto: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },

        messages: {
            nomeCompleto: 'Por favor, insira seu Nome Completo',
            email: 'Por favor, insira seu Email',
            telefone: 'Por favor, insira seu Telefone',
            cpf: 'Por favor, insira seu CPF',
            endereco: 'Por favor, insira seu Endereço',
            cep: 'Por favor, insira seu Cep'
        },

        submitHandler: function(form){
            console.log(form)
        },

        invalidHandler: function(evento, validador){
            let camposIncoretos = validador.numberOfInvalids();
            if (camposIncoretos){
                alert(`Existem ${camposIncoretos} campos incorretos`)
            }
        }
    })
});