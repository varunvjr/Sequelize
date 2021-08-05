const sequelize=require("../util/database");
const Sequelize=require("sequelize");

const Movie=sequelize.define("movie",{
  Id:{
    type:Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement: true,
    allowNull:false
  },
  movieName:{
    type:Sequelize.STRING,
    allowNull:false
  },
  releaseYear:{
    type:Sequelize.INTEGER,
    allowNull:false
  },
  language:{
    type:Sequelize.STRING,
    allowNull:false
  }
})
module.exports=Movie;