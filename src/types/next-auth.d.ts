import "next-auth";

declare module "next-auth" {
  interface Session {
    user: any;
    accessToken: string;
    error?: string;
  }

  interface User {
    accessToken: string;
    accessTokenExpiresAt: number;
    refreshToken: string;
    user: any;
  }

  interface Account {}

  interface Profile {}
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string;
    accessTokenExpiresAt: number;
    refreshToken: string;
    user?: any;
    error?: any;
  }
}
