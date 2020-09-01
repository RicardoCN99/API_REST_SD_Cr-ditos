'use strict';

var sql = require("./db.js");

var Saldos = function (saldo)
{
    this.Nome = saldo.Nome;
    this.Saldo = saldo.Saldo;
}

Saldos.criarSaldos = function (novoSaldo, result)
{
    sql.query("INSERT INTO Saldos SET ?", novoSaldo, function (err, res)
    {
        if (err)
        {
            result(err, null);
        }
        else
        {
            console.log("Conta do banco criada com sucesso com saldo inicial de 100 créditos.")
            result(null, res.insertID);
        }
    })
}

Saldos.updateSaldos = function (nome, valor, result) {
    sql.query("UPDATE Saldos SET Saldo = Saldo + ? WHERE Nome = ?", [valor.Saldo, nome])
    sql.query("SELECT Saldo FROM Saldos WHERE Nome = ?", nome, function (err, res) {
        if (err)
        {
            result(null, err);
        }
        else
        {
            if(valor.Saldo == 5){
                console.log("Foram depositados 5 créditos na conta do servidor e retirados 5 créditos da conta do utilizador " + nome);
            }
            else if(valor.Saldo > 5){
                console.log("Foram depositados " + valor.Saldo + " na conta do utilizador" + nome);
            }
            result(null, res);
        }
    })
}

Saldos.verSaldos = function (nome, result) {
    sql.query("SELECT Saldo FROM Saldos WHERE Nome = ?", nome, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, res);
        }
    })
}

module.exports = Saldos;