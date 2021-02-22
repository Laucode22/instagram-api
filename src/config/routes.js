

const express = require('express');
const multer = require('multer');
const PostsController = require('../controllers/pos.controller');
const UsersController = require('../controllers/users.controller');
const auth = require('../middlewares/auth');

const routes = express.Router();
const upload = multer({dest: 'public/posts'});

 routes.put('/user', UsersController.create);
 routes.post('/user/login', UsersController.login);
 routes.post('/user/me',auth,  UsersController.me);
 routes.get('/user/check', UsersController.check);

 routes.get('/post',auth,  PostsController.feed);
 routes.put('/post', upload.single('image'), PostsController.create);


module.exports = routes;