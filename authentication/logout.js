```javascript
import { signOut } from 'next-auth/client';

const logout = async (req, res) => {
  try {
    await signOut({ callbackUrl: 'http://localhost:3000' });
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error logging out', error });
  }
};

export default logout;
```