const sequelize=require("../util/database");
const Sequelize=require("sequelize");

const Actor=sequelize.define("actor",{
  id:{
    type:Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement: true,
    allowNull:false
  },
  actorName:{
    type:Sequelize.STRING,
    allowNull:false
  }
})
module.exports=Actor;