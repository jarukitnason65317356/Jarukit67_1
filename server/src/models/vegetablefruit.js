module.exports =(sequelize,DataTypes)=>{
    const vegetablefruit =sequelize.define('vegetablefruit',{
        name :DataTypes.STRING,
        color :DataTypes.STRING,
        cotyledon :DataTypes.STRING,
        cultivationsite :DataTypes.STRING,
    })
    return vegetablefruit
}