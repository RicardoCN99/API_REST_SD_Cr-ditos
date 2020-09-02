let router = require("express").Router();

router.get("/", function (request, result) {
    result.json({
        status: "A API funciona",
        message: "Bem vindo a SD!"
    })
}); //comment

var SaldosController = require('./SaldosController');
var DepositosController = require('./DepositosController');

router.route('/Saldos')
    .post(SaldosController.novo);

router.route('/Saldos/:nome')
    .put(SaldosController.update)
    .patch(SaldosController.update)
    .get(SaldosController.view);

router.route('/Depositos')
    .post(DepositosController.novo);

router.route('/Depositos/:Referencia/:Nome')
    .put(DepositosController.update)
    .patch(DepositosController.update)
    .get(DepositosController.view);

module.exports = router;
