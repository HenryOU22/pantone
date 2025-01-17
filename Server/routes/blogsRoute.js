import { Router } from "express";
import { createBlog, deleteBlog, getBlogs, getSingleBlog, updateBlog } from "../controllers/blogController.js";
import authenticate from "../middleware/authenticate.js";





const blogsRoute = Router();




blogsRoute.get("/:id", authenticate, getSingleBlog);

blogsRoute.post("/", authenticate, createBlog);

blogsRoute.get("/", authenticate, getBlogs);

blogsRoute.patch("/:id", authenticate, updateBlog);

blogsRoute.delete("/:id", authenticate, deleteBlog);




export default blogsRoute;