import NextAuth from 'next-auth'
// import Providers from 'next-auth/providers'
import GitHubProvider from "next-auth/providers/github"

export default NextAuth({
  providers: [
    //@ts-ignore
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  //@ts-ignore
  database: process.env.DB_URL,
  session: {
  //@ts-ignore
    jwt: true,
  },

  jwt: {
    secret: 'wijwfjwojfwcijij',
  },

  callbacks: {
    //@ts-ignore
    async jwt (token, user) {
      if(user) {
        token.id = user.id
      }
      return token
    },
      //@ts-ignore
    async session(session, token) {
      session.user.id = token.id
      return session
    }
  }
})