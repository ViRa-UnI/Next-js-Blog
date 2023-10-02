```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PostSchema } from '../backend-api/postRoutes';
import { UserSchema } from '../backend-api/userRoutes';
import { validateData } from '../security/dataValidation';

const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchPosts();
    fetchUsers();
  }, []);

  const fetchPosts = async () => {
    const response = await axios.get('/api/posts');
    setPosts(response.data);
  };

  const fetchUsers = async () => {
    const response = await axios.get('/api/users');
    setUsers(response.data);
  };

  const handlePostDelete = async (id) => {
    await axios.delete(`/api/posts/${id}`);
    fetchPosts();
  };

  const handleUserDelete = async (id) => {
    await axios.delete(`/api/users/${id}`);
    fetchUsers();
  };

  const handlePostCreate = async (post) => {
    const isValid = validateData(PostSchema, post);
    if (isValid) {
      await axios.post('/api/posts', post);
      fetchPosts();
    }
  };

  const handleUserCreate = async (user) => {
    const isValid = validateData(UserSchema, user);
    if (isValid) {
      await axios.post('/api/users', user);
      fetchUsers();
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        <h2>Posts</h2>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <button onClick={() => handlePostDelete(post.id)}>Delete</button>
          </div>
        ))}
        <button onClick={handlePostCreate}>Create Post</button>
      </div>
      <div>
        <h2>Users</h2>
        {users.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <button onClick={() => handleUserDelete(user.id)}>Delete</button>
          </div>
        ))}
        <button onClick={handleUserCreate}>Create User</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
```