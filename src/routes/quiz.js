var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/enviarRespostas", function (req, res) {
    quizController.enviarRespostas(req, res);
})


module.exports = router;