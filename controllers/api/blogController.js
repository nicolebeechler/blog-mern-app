const Blog = require('../../models/blog')

module.exports = {
    indexBlogs,
    showBlog,
    createBlog,
    updateBlog,
    deleteBlog,
    jsonBlog,
    jsonBlogs
}

// viewControllers

function jsonBlog(_, res) {
    res.json(res.locals.data.blog)
}

function jsonBlogs(_, res) {
    res.json(res.locals.data.blogs)
}

/******* C - Create *******/

async function createBlog(req,res,next) {
    try{
        const blog = await Blog.create(req.body) //{ title, body, user }
        req.user.blogs.addToSet(blog)
        req.user.save()
        res.locals.data.blog = blog
        next()
    } catch(error) {
        res.status(400).json({msg: error.msg})
    }
}

/******* R - Read *******/

async function indexBlogs(req,res,next) {
    try{
        const blogs = await Blog.find({})
        res.locals.data.blogs = blogs
        next()
    } catch(error) {
        res.status(400).json({msg: error.msg})
    }
}

async function showBlog(req,res,next) {
    try{
        const blog = await Blog.findOne({_id: req.params.id})
        res.locals.data.blog = blog
        next()
    } catch(error) {
        res.status(400).json({msg: error.msg})
    }
}

/******* U - Update *******/

async function updateBlog(req,res,next) {
    try{
        const blog = await Blog.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        res.locals.data.blog = blog
        next()
    } catch(error) {
        res.status(400).json({msg: error.msg})
    }
}

/******* D - destroy/delete *******/

async function deleteBlog(req,res,next) {
    try{
        const blog = await Blog.findByIdAndDelete(req.params.id)
        req.user.blogs.pull(blog)
        req.user.save()
        res.locals.data.blog = blog
        next()
    } catch(error) {
        res.status(400).json({msg: error.msg})
    }
}