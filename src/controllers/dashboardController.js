var dashboardModel = require("../models/dashboardModel");

async function buscarDesempenhoPorCategoria(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log(idUsuario);

    if (idUsuario == undefined) {
        res.status(400).send("idUsuario está undefined!");
    } else {

        dashboardModel.buscarDesempenhoPorCategoria(idUsuario)
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

    buscarDesempenhoPorCategoria
}