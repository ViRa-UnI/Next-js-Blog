```javascript
const jwt = require('jsonwebtoken');
const UserSchema = require('../backend-api/UserSchema');

// Middleware for role-based access control
const roleAccess = (roles) => {
  return async (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      const user = await UserSchema.findById(decodedToken.userId);

      if (!user) {
        throw new Error('No user found');
      }

      if (roles.includes(user.role)) {
        req.user = user;
        next();
      } else {
        throw new Error('Not authorized');
      }
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  };
};

module.exports = roleAccess;
```