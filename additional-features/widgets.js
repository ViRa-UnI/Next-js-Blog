```javascript
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POPULAR_POSTS, GET_RECENT_COMMENTS } from '../backend-api/queries';

const Widgets = () => {
  const { loading: loadingPosts, error: errorPosts, data: popularPosts } = useQuery(GET_POPULAR_POSTS);
  const { loading: loadingComments, error: errorComments, data: recentComments } = useQuery(GET_RECENT_COMMENTS);

  if (loadingPosts || loadingComments) return <p>Loading...</p>;
  if (errorPosts || errorComments) return <p>Error :(</p>;

  return (
    <div>
      <div id="post-list">
        <h2>Popular Posts</h2>
        {popularPosts.map((post, index) => (
          <div key={index}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>

      <div id="comment-section">
        <h2>Recent Comments</h2>
        {recentComments.map((comment, index) => (
          <div key={index}>
            <h3>{comment.user}</h3>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Widgets;
```