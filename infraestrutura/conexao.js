const mysql = require('mysql')

const conexao = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'druida',
  database: 'agenda-petshop',
  //multipleStatements que o sql faça duas chamadas na mesma linha.
  multipleStatements: true
})

module.exports = conexao
