const express = require('express');
const { sequelize } = require('./models/Tag');
const routes = require('./routes');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
// when I do true ... I can reset the database modals (tables) if I made changes to them? ... this wouldn't reset the seeds though? Just the tables? equivalent to drop table if already exists?
sequelize.sync({force: false}).then(() => { 
  app.listen(PORT, () => 
    console.log(`App listening on port ${PORT}!`));
});


