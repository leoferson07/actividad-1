const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define("User",{
    id:{
       type: DataTypes.INTEGER,
       primaryKey: true,
       allowNull: false,
       autoIncrement: true
     
       
    },
    nombre:{
       type: DataTypes.STRING,
       allowNull: false
    },
    contraseña:{
       type: DataTypes.STRING,
       allowNull: false
    },
},{timestamps: false, freezeTableName: true});
