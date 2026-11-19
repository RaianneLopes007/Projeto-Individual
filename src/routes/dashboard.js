var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/buscarDesempenhoPorCategoria/:idUsuario", function (req, res) {
  dashboardController.buscarDesempenhoPorCategoria(req, res);
});



module.exports = router;