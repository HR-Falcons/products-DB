const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres', 'hakeem', '', {
  host: 'localhost',
  dialect: 'postgres'
});

function defineTable (tableName, definition) {
  return sequelize.define(tableName, definition, {
    freezeTableName: true,
    timestamps: false
  });
}

const relatedDef = {
 id: {
  type: DataTypes.INTEGER,
  allowNull: false,
  primaryKey: true
 },
  current_product_id: {
   type: DataTypes.INTEGER
 },
  related_product_id: {
   type: DataTypes.INTEGER
 }
}

const skusDef = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  styleid: {
    type: DataTypes.INTEGER,
  },
  size: {
    type: DataTypes.STRING,
  },
  quantity: {
    type: DataTypes.INTEGER,
  },

};

const productDef = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
  },
  slogan: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  category: {
    type: DataTypes.STRING,
  },
  default_price: {
    type: DataTypes.INTEGER,
  }

};

const featuresDef  = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  product_id: {
    type: DataTypes.INTEGER,
  },
  feature: {
    type: DataTypes.STRING,
  },
  value: {
    type: DataTypes.STRING,
  },

};

const stylesDef = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
  },
  sale_price: {
    type: DataTypes.FLOAT,
  },
  original_price: {
    type: DataTypes.FLOAT,
  },
  default_style: {
    type: DataTypes.INTEGER,
  }

};

const photosDef = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  styleid: {
    type: DataTypes.INTEGER,
  },
  url: {
    type: DataTypes.STRING,
  },
  thumbnail_url: {
    type: DataTypes.STRING,
  },

};

const Product = defineTable('product', productDef,);

const Styles = defineTable('styles', stylesDef);

const Photos = defineTable('photos', photosDef);

const Skus = defineTable('skus', skusDef);

const Features = defineTable('features', featuresDef);

const Related = defineTable('related', relatedDef);

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = {
  Photos,
  Product,
  Features,
  Skus,
  Styles,
  Related
};