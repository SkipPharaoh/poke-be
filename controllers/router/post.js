const express = require('express');
const router = express.Router();


// ROUTES //

// Home
router.get('/', (req,res) => {
    // res.send('🌊PokéDex App is live')
    res.status(200).json({
        body: "You found the PokéMon!"
    })
})

// Show
router.get('/:id', async (req,res) => {
    try {
        const onePost = await Holiday.findById(req.params.id)
        res.json(onePost)
    } catch(err) {
        res.send('error occured')
    }
})

// Create
router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const newPost = await Post.create(req.body)
        res.json(newPost)
    } catch(err) {
        console.log(err)
        res.send('error occured')
    }
})

// Delete
router.delete('/:id', async (req,res) => {
    try {
        const deletePost = await this.post.findByIdAndDelete(req.params.id)
        res.json(deletePost)
    } catch(err) {
        console.log(err)
    }
})

// Update
router.put('/', async (req, res) => {
    try {
        console.log(req.body)
        const updatePost = await this.post.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.json(updatePost)
    } catch(err) {
        console.log(err)
        res.send('error occured')
    }
})

module.exports = router