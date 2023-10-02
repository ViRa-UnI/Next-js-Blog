```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Gravatar from 'react-gravatar';

const UserProfilePage = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch user data
    axios.get('/api/userRoutes')
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });

    // Fetch user's posts
    axios.get('/api/postRoutes')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });

    // Fetch user's comments
    axios.get('/api/commentRoutes')
      .then(response => {
        setComments(response.data);
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
      });
  }, []);

  return (
    <div id="user-profile">
      <h1>{user.name}</h1>
      <Gravatar email={user.email} size={100} />
      <p>{user.bio}</p>

      <h2>Posts</h2>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}

      <h2>Comments</h2>
      {comments.map(comment => (
        <div key={comment.id}>
          <p>{comment.content}</p>
        </div>
      ))}
    </div>
  );
};

export default UserProfilePage;
```