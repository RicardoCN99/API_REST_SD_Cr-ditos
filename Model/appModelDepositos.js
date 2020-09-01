'use strict';

var sql = require("./db.js");

var Depositos = function (deposito) {
    this.Nome = deposito.Nome;
    this.Referencia = deposito.Referencia;
    this.Valor = deposito.Valor;
    this.Ativa = deposito.Ativa;
}

Depositos.criarDepositos = function (novoDeposito, result) {
    sql.query("INSERT INTO Depositos SET ? ", novoDeposito) 
    sql.query("SELECT Referencia FROM Depositos WHERE Referencia = ? AND Nome = ? and Ativa = True",
        [novoDeposito.Referencia, novoDeposito.Nome], function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            console.log("A creditenote " + novoDeposito.Referencia + " com o valor de " + novoDeposito.Valor + " foi criada com sucesso.");
            result(null, res);
        }
    })
}

Depositos.updateDepositos = function (Referencia, Nome, result) {
    sql.query("UPDATE Depositos SET Ativa = False WHERE Referencia = ? AND Nome = ? AND Ativa = True",
        [Referencia, Nome], function (err, res) {
            if (err) {
                result(null, err);
            }
            else {
                if(res != ""){
                    console.log("A creditenote " + Referencia + " do utilizador " + Nome + " foi validada com sucesso.");
                }
                result(null, res);
            }
        })
}

Depositos.verDepositos = function (Referencia, Nome, result) {
    sql.query("SELECT Referencia, Valor FROM Depositos WHERE Referencia = ? AND Nome = ? AND Ativa = True",
        [Referencia, Nome], function (err, res) {
            if (err) {
                result(err, null);
            }
            else {
                if(res != ""){
                    console.log("A creditenote " + Referencia + " do utilizador " + Nome + " é válida.");
                }
                result(null, res);
            }
        })
}

module.exports = Depositos;