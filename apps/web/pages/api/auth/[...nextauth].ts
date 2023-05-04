import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

interface SignInInterface {
  account: any;
  profile?: any;
}

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_AUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }: SignInInterface) {
      if (account.provider === "google") {
        return profile.email_verified && profile.email.endsWith("@deardigital.com")
      }
      return true
    },
  }
}
export default NextAuth(authOptions)
