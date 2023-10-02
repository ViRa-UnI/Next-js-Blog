```javascript
const express = require('express');
const router = express.Router();
const PostSchema = require('../models/PostSchema');
const UserSchema = require('../models/UserSchema');

// Route to get popular posts
router.get('/popular', async (req, res) => {
  try {
    const posts = await PostSchema.find().sort({ views: -1 }).limit(10);
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// Route to get user behavior
router.get('/user-behavior/:userId', async (req, res) => {
  try {
    const user = await UserSchema.findById(req.params.userId);
    const userPosts = await PostSchema.find({ author: user._id });
    const userComments = await CommentSchema.find({ author: user._id });
    res.json({
      posts: userPosts,
      comments: userComments,
    });
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
```