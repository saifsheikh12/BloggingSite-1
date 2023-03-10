const express = require("express");
const router = express.Router();

const authorController = require("../controllers/authorController");
const blogController = require("../controllers/blogController");
const middleware = require("../middlewares/mid1");


// ==========================================================APIS=======================================================================================
router.post("/authors", authorController.createAuthor);
router.post("/login", authorController.login)
router.post("/blogs", middleware.authenticationMidd, blogController.createBlog);
router.get("/blogs", middleware.authenticationMidd, blogController.getBlogs);
router.put("/blogs/:blogId", middleware.mid1, middleware.authenticationMidd, middleware.authorisationMidd, blogController.updateBlogs);
router.delete("/blogs/:blogId", middleware.mid1, middleware.authenticationMidd, middleware.authorisationMidd, blogController.deleteBlogByParams);
router.delete("/blogs", middleware.authenticationMidd, middleware.deleteMidd, blogController.deleteByQuery);




module.exports = router;