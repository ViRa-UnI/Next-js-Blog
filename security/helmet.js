```javascript
const helmet = require('helmet');
const express = require('express');
const app = express();

app.use(helmet());

// Set Content Security Policy
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", 'data:'],
    connectSrc: ["'self'"],
    fontSrc: ["'self'"],
    objectSrc: ["'none'"],
    mediaSrc: ["'self'"],
    frameSrc: ["'none'"],
  }
}));

// Set Referrer Policy
app.use(helmet.referrerPolicy({ policy: 'same-origin' }));

// Set HSTS
app.use(helmet.hsts({
  maxAge: 31536000,
  includeSubDomains: true,
  preload: true
}));

// Hide X-Powered-By
app.use(helmet.hidePoweredBy());

// Set X-Content-Type-Options
app.use(helmet.xssFilter());

// Set X-Frame-Options
app.use(helmet.frameguard({ action: 'deny' }));

// Set X-Download-Options
app.use(helmet.ieNoOpen());

// Set Expect-CT
app.use(helmet.expectCt({
  enforce: true,
  maxAge: 30,
  reportUri: '/report-uri'
}));

module.exports = app;
```