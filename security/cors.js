```javascript
const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000', // replace with your frontend domain
  optionsSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // allow session cookie from browser to pass through
  exposedHeaders: ['x-auth-token']
};

app.use(cors(corsOptions));

module.exports = app;
```