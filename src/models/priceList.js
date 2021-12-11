module.exports = (sequelize, DataTypes) => {
  const PriceList = sequelize.define('price_list', {
    origin: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    destination: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tariff: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  })

  return PriceList
}
