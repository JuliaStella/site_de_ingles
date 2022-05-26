/*const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize('site', 'root' ,'root',{
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch(function(){
  console.log("Erro: conexão com o banco de dados não realizada");
});

module.exports = sequelize;
*/