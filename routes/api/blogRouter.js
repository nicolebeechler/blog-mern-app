const express = require('express')
const router = express.Router()
const blogCtrl = require('../../controllers/api/blogController')
const userCtrl = require('../../controllers/api/userController')


/*

*/
// get all the blogs
router.get('/', blogCtrl.indexBlogs, blogCtrl.jsonBlogs)
// get individual post
router.get('/:id',blogCtrl.showBlog, blogCtrl.jsonBlog)
// create a blog
router.post('/', userCtrl.Auth, blogCtrl.createBlog, blogCtrl.jsonBlog)
// update a blog
router.put('/:id', userCtrl.Auth, blogCtrl.updateBlog, blogCtrl.jsonBlog)
// delete a blog
router.delete('/:id', userCtrl.Auth, blogCtrl.deleteBlog, blogCtrl.jsonBlog)


module.exports = router