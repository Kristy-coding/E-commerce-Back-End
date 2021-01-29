// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products

Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,{
  through: 'product_tag',
  as: 'tags'

})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: 'product_tag',
  as: 'products'
})

Product.findAll({ include: 'tags'}).then(data =>{
  data.forEach(prod =>{
    prod.tags.forEach(tag => {console.log(tag.tag_name)})
  })
}).catch(err => {
  console.log(err)
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
