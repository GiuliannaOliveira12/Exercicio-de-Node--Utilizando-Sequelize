const Sequelize = require('sequelize')

// conexao com o banco de dados mysql
const sequelize = new Sequelize('banco_prova','root','',{
    host:"localhost",
    dialect:'mysql'
})


module.exports={
    Sequelize:Sequelize,
    sequelize:sequelize
}