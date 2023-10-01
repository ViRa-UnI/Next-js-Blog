```javascript
import { post } from '../backend-api/postRoutes.js';

function shareOnFacebook() {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
  window.open(url, '_blank');
}

function shareOnTwitter() {
  const url = `https://twitter.com/intent/tweet?text=${post.title}&url=${window.location.href}`;
  window.open(url, '_blank');
}

function shareOnLinkedIn() {
  const url = `https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${post.title}`;
  window.open(url, '_blank');
}

export function SocialSharing() {
  return (
    <div id="social-sharing">
      <button onClick={shareOnFacebook}>Share on Facebook</button>
      <button onClick={shareOnTwitter}>Share on Twitter</button>
      <button onClick={shareOnLinkedIn}>Share on LinkedIn</button>
    </div>
  );
}
```