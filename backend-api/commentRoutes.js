```javascript
const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const validateData = require('../security/dataValidation');

// Create a new comment
router.post('/', validateData(CommentSchema), async (req, res) => {
  const comment = new Comment({
    post: req.body.post,
    user: req.body.user,
    content: req.body.content
  });

  try {
    const savedComment = await comment.save();
    res.json(savedComment);
  } catch (err) {
    res.json({ message: err });
  }
});

// Get all comments for a post
router.get('/:postId', async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId });
    res.json(comments);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update a comment
router.patch('/:commentId', validateData(CommentSchema), async (req, res) => {
  try {
    const updatedComment = await Comment.updateOne(
      { _id: req.params.commentId },
      { $set: { content: req.body.content } }
    );
    res.json(updatedComment);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete a comment
router.delete('/:commentId', async (req, res) => {
  try {
    const removedComment = await Comment.remove({ _id: req.params.commentId });
    res.json(removedComment);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
```