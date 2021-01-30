// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category.... so each product is going to have a category_id, we state that the foreignKey on products will be the category_id
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products... and the link between them is still going to be that the products will have a category_id, that foreign key reference will link them 

Category.hasMany(Product, {
  foreignKey: 'category_id'
});


// THROUGH TABLES... both product and tag share ownership of a product_tag, we created a ProductTag table to connect these by their primary keys.
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
