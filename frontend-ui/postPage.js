```javascript
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { PostSchema } from '../backend-api/postRoutes.js';
import { CommentSchema } from '../backend-api/commentRoutes.js';

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`/api/posts/${id}`);
      setPost(response.data);
    };

    const fetchComments = async () => {
      const response = await axios.get(`/api/comments/${id}`);
      setComments(response.data);
    };

    fetchPost();
    fetchComments();
  }, [id]);

  return (
    <div id="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <div id="comment-section">
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.content}</p>
            <p>By {comment.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
```