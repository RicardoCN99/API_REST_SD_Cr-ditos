'use strict';

var Saldos = require("./Model/appModelSaldos");

exports.novo = function (req, res) {
    var novoSaldo = new Saldos(req.body);

    if (!novoSaldo.Nome || !novoSaldo.Saldo) {
        res.status(400).send({ error: true, message: 'Não foi possível criar esta conta.' });
    }
    else {
        Saldos.criarSaldos(novoSaldo, function (err, saldo) {
            if (err) {
                res.send(err);
            }
            else {
                res.send("O seu saldo inicial é de 100 Créditos");
            }
        });
    }
};

exports.update = function (req, res) {
    Saldos.updateSaldos(req.params.nome, req.body, function (err, saldo) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(saldo);
        }
    });
};

exports.view = function (req, res) {
    Saldos.verSaldos(req.params.nome, function (err, saldo) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(saldo);
        }
    });
};