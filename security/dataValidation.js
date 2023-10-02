```javascript
const Joi = require('joi');

const UserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const PostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  author: Joi.string().required(),
});

const CommentSchema = Joi.object({
  content: Joi.string().required(),
  author: Joi.string().required(),
  postId: Joi.string().required(),
});

function validateData(schema, data) {
  const { error } = schema.validate(data);
  if (error) {
    throw new Error(error.details[0].message);
  }
}

module.exports = {
  UserSchema,
  PostSchema,
  CommentSchema,
  validateData,
};
```