module.exports = (sequelize, DataTypes) => {
  const PriceList = sequelize.define('price_list', {
    origin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tariff: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  })

  return PriceList
}
