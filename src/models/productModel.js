module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    maxMinute: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    percentageAdd: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  })

  return Product
}
