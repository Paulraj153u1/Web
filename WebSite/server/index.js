const express = require('express');
const app = express();
const cors= require("cors")
const db = require('./models');

//Middle ware
app.use(express.json());
app.use(cors());

// Routes
const postRouterGet = require('./routes/PostsRoutes');
app.use('/posts', postRouterGet);
app.use('/posts', postRouterGet);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Server running on port 3001');
  });
});
