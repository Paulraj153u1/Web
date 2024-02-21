const express = require('express');
const app = express();

app.use(express.json());

const db = require('./models');
const postRouterGet = require('./routes/PostsRoutes');
app.use('/posts', postRouterGet);
app.use('/posts', postRouterGet);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Server running on port 3001');
  });
});
