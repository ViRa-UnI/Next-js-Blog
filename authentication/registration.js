```javascript
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { UserSchema } from '../schemas/UserSchema'
import { validateData } from '../security/dataValidation'

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Email',
      credentials: {
        email: { label: "Email", type: "text" },
        password: {  label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;

        // Validate the data
        const { error } = validateData(UserSchema, { email, password });
        if (error) throw new Error(error.details[0].message);

        // Check if the user exists in the database
        const user = await User.findOne({ email });
        if (!user) throw new Error('No user found with this email.');

        // Check if the password is correct
        const validPassword = await user.comparePassword(password);
        if (!validPassword) throw new Error('Incorrect password.');

        return Promise.resolve(user);
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error', 
    verifyRequest: '/auth/verify-request', 
    newUser: null 
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session(session, token) {
      session.user.id = token.id;
      return session;
    },
  },
  session: {
    jwt: true,
  },
  theme: 'light',
});
```