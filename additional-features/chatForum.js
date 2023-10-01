```javascript
import { useState, useEffect } from 'react';
import axios from 'axios';

const ChatForum = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get('/api/user');
      setUser(res.data);
    };

    const fetchPosts = async () => {
      const res = await axios.get('/api/posts');
      setPosts(res.data);
    };

    fetchUser();
    fetchPosts();
  }, []);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/posts', { content: newPost, user: user._id });
    setPosts([...posts, res.data]);
    setNewPost('');
  };

  return (
    <div id="forum">
      <h1>Forum</h1>
      {user && (
        <form onSubmit={handlePostSubmit}>
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="What's on your mind?"
          />
          <button type="submit">Post</button>
        </form>
      )}
      {posts.map((post) => (
        <div key={post._id} className="post">
          <h3>{post.user.username}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatForum;
```