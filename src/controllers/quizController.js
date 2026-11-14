var quizModel = require("../models/quizModel");


function enviarRespostas(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var acertos = req.body.acertos;
    var idUsuario = req.body.idUsuario;

    console.log(acertos);
    console.log(idUsuario);
    

    // Faça as validações dos valores
    if (acertos == undefined) {
        res.status(400).send("Acertos está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("idUsuario está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.enviarRespostas(acertos, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao tentar enviar respostas! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    enviarRespostas
}