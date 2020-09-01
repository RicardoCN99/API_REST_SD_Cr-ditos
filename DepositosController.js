'use strict';

var Depositos = require("./Model/appModelDepositos");

exports.novo = function (req, res) {
    var novoDeposito = new Depositos(req.body);
    novoDeposito.Referencia = Math.floor(Math.random() * 9999999999999999) + 1000000000000000;
    novoDeposito.Ativa = true;

    if (!novoDeposito.Nome || !novoDeposito.Valor) {
        res.status(400).send({ error: true, message: 'Não foi possível realizar a aposta.' });
    }
    else {
        Depositos.criarDepositos(novoDeposito, function (err, deposito) {
            if (err) {
                res.send(err);
            }
            else {
                res.json(deposito);
            }
        });
    }
};

exports.update = function (req, res) {
    Depositos.updateDepositos(req.params.Referencia, req.params.Nome, function (err, deposito) {
        if (err) {
            res.send(err)
        }
        else {
            res.send("A aposta foi realizada com sucesso.")
        }
    });
};

exports.view = function (req, res) {
    Depositos.verDepositos(req.params.Referencia, req.params.Nome, function (err, deposito) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(deposito);
        }
    });
};