var quizModel = require("../models/quizModel");


function enviarTentativa(req, res) {
    var idUsuario = req.body.idUsuario;

    console.log(idUsuario);

    if (idUsuario == undefined) {
        res.status(400).send("idUsuario está undefined!");
    } else {

        quizModel.enviarTentativa(idUsuario)
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

async function enviarRespostas(req, res) {

    var respostas = req.body.respostas;
    var idUsuario = req.body.idUsuario;

    var id_tentativa = await quizModel.enviarTentativa(idUsuario);

    for (let i = 0; i < respostas.length; i++) {
        const id_pergunta = respostas[i].id_pergunta;
        const id_alternativa = respostas[i].id_alternativa;


        if (id_pergunta == undefined) {
            res.status(400).send("o id_pergunta está undefined!");
        } else if (id_alternativa == undefined) {
            res.status(400).send("o id_alternativa está undefined!");
        } else if (id_tentativa == undefined) {
            res.status(400).send("o id_tentativa está undefined!");
        } else if (idUsuario == undefined) {
            res.status(400).send("O idUsuario está undefined!");
        } else if (respostas == undefined) {
            res.status(400).send("a respostas está undefined");
        } else {

            // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
            quizModel.enviarRespostas(id_tentativa, id_pergunta, id_alternativa)
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

}



module.exports = {
    enviarTentativa,
    enviarRespostas
}