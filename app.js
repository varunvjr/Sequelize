
const express=require("express");
const app=express();
const sequelize=require("./util/database");
const Actor=require("./model/Actor");
const Movie=require("./model/Movie");
const actorName="NTR"
app.get("/",(req,res)=>{
    Movie.hasMany(Actor,{
        foreignKey:"movie_ID",
        allowNull:false
    });
    sequelize
        .sync()
        .then(()=>{
           return Movie.findAll({
               include:[{
                   model:Actor,
                   where:{actorName:"RDJ"}
               }]
           })
        })
        .then((movies)=>{
            console.log("Movies",movies);
        })
        .catch((err)=>{
            console.log(err)
        })

})
app.listen(8080,()=>{
    console.log("Server running on port 8080");
})