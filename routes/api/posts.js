const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Post = require('../../models/Post');
const Profile = require('../../models/Profile');
const User = require('../../models/User');


// @route POST api/posts
// @desc Create a post
// @access Private
router.post('/', [auth, [
  check('text', 'Text is required').not().isEmpty()
]], async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {

    const user = await User.findById(req.user.id).select('-password');

    const newPost = new Post ({
      text: req.body.text,
      name: user.name,
      avatar: user.avatar,
      user: req.user.id
    });

    const post = await newPost.save();

    res.json(post);

    
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// @route GET api/posts
// @desc Get all posts
// @access Private
router.get('/', auth, async (req, res) => {
  try {
    // Get Posts and sort from most recent (-1)
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// @route GET api/posts/:id
// @desc Get post by id
// @access Private
router.get('/:id', auth, async (req, res) => {
  try {
    // Get Post by id
    const post = await Post.findById(req.params.id);

    // Check to see if there is a post with that id
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    res.json(post);
    
  } catch (err) {
    console.error(err.message);
    // If id is not equal to the formatted Object ID then return post not found message
    if (err.kind == 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.status(500).send('Server Error');
  }
});


// @route DELETE api/posts
// @desc Delete a post by id
// @access Private
router.delete('/:id', auth, async (req, res) => {
  try {
    // Get post by id
    const post = await Post.findById(req.params.id);

    // If post doesnt exist
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    // Make sure user deleting post is the owner of the post
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await post.remove();

    res.json({ msg: 'Post Removed' });

  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.status(500).send('Server Error');
  }
});



// @route PUT api/posts/like/:id
// @desc Like a post
// @access Private
router.put('/like/:id', auth, async (req, res) => {

  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has already been liked
    // Compare current user to the user thats logged in - turn into string so that it matches the id in the req
    // If the length is greater than 0, means it has already been liked (already a like in the req.user.id that matches the user attempting the like)
    if (post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
      return res.status(400).json({ msg: 'Post already liked' });
    }

    // If the user hasnt already liked the post, take likes array and add the like to the beginning of the array
    post.likes.unshift({ user: req.user.id });

    // Save it back to the DB
    await post.save();

    res.json(post.likes);
    
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// @route PUT api/posts/unlike/:id
// @desc Unlike a post
// @access Private
router.put('/unlike/:id', auth, async (req, res) => {

  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has already been liked
    // Compare current user to the user thats logged in - turn into string so that it matches the id in the req
    // If the length is equal to 0, means post has not yet been liked
    if (post.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
      return res.status(400).json({ msg: 'Post has not yet been liked' });
    }

    // Get remove index
    const removeIndex = post.likes.map(like => like.user.toString()).indexOf(req.user.id);

    // Splice out of array
    post.likes.splice(removeIndex, 1);

    // Save it back to the DB
    await post.save();

    res.json(post.likes);
    
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;