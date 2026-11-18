var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/enviarTentativa", function (req, res) {
    quizController.enviarTentativa(req, res);
})

router.post("/enviarRespostas", function (req, res) {
    quizController.enviarRespostas(req, res);
})

router.get("/buscarDesempenhoPorCategoria", function (req, res) {
    quizController.buscarDesempenhoPorCategoria(req, res);
})

module.exports = router;