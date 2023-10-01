```javascript
import axios from 'axios';

// Function to subscribe user to the newsletter
export const subscribeToNewsletter = async (email) => {
  try {
    const response = await axios.post('/api/newsletter', { email });
    if (response.status === 200) {
      alert('Subscribed to newsletter successfully!');
    }
  } catch (error) {
    console.error('Error subscribing to newsletter', error);
  }
};

// Function to unsubscribe user from the newsletter
export const unsubscribeFromNewsletter = async (email) => {
  try {
    const response = await axios.delete('/api/newsletter', { data: { email } });
    if (response.status === 200) {
      alert('Unsubscribed from newsletter successfully!');
    }
  } catch (error) {
    console.error('Error unsubscribing from newsletter', error);
  }
};
```