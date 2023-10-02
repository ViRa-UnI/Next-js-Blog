```javascript
import dynamic from 'next/dynamic';

// Dynamically import Homepage component
const DynamicHomepage = dynamic(() => import('../frontend-ui/homepage.js'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

// Dynamically import PostPage component
const DynamicPostPage = dynamic(() => import('../frontend-ui/postPage.js'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

// Dynamically import UserProfilePage component
const DynamicUserProfilePage = dynamic(() => import('../frontend-ui/userProfilePage.js'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

export { DynamicHomepage, DynamicPostPage, DynamicUserProfilePage };
```