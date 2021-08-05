const Sequelize=require('sequelize');

const sequelize=new Sequelize("Tollywood","XXX","XXXX",{
    dialect:"mysql",
    host:"localhost"
})

module.exports=sequelize;
