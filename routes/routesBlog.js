import express from 'express';
import {signup,login} from '../controller/userController.js';
import {createBlog} from '../controller/blogController.js';

const route = express.Router();

route.post("/signup",signup);
route.post("/login",login);
route.post("/createblog",createBlog);

export default route;