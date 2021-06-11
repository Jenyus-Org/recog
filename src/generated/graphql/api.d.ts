/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginUser
// ====================================================

export interface LoginUser_login_user {
  readonly __typename: "User";
  readonly id: string;
  readonly username: string;
  readonly firstName: string | null;
  readonly lastName: string | null;
}

export interface LoginUser_login {
  readonly __typename: "LoginUserPayload";
  readonly user: LoginUser_login_user;
  readonly accessToken: string;
  readonly accessTokenExpiresAt: any;
  readonly refreshToken: string;
}

export interface LoginUser {
  readonly login: LoginUser_login;
}

export interface LoginUserVariables {
  readonly input: LoginUserInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreatePost
// ====================================================

export interface CreatePost_createPost_author {
  readonly __typename: "User";
  readonly id: string;
  readonly username: string;
  readonly firstName: string | null;
  readonly lastName: string | null;
}

export interface CreatePost_createPost {
  readonly __typename: "Post";
  readonly id: string;
  readonly title: string;
  readonly body: string;
  readonly author: CreatePost_createPost_author;
}

export interface CreatePost {
  readonly createPost: CreatePost_createPost;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllPosts
// ====================================================

export interface AllPosts_posts {
  readonly __typename: "Post";
  readonly id: string;
  readonly title: string;
  readonly body: string;
}

export interface AllPosts {
  readonly posts: ReadonlyArray<AllPosts_posts>;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterUser
// ====================================================

export interface RegisterUser_register_user {
  readonly __typename: "User";
  readonly id: string;
}

export interface RegisterUser_register {
  readonly __typename: "RegisterUserPayload";
  readonly user: RegisterUser_register_user;
}

export interface RegisterUser {
  readonly register: RegisterUser_register;
}

export interface RegisterUserVariables {
  readonly input: RegisterUserInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RefreshToken
// ====================================================

export interface RefreshToken_refreshToken {
  readonly __typename: "RefreshTokenPayload";
  readonly accessToken: string;
  readonly accessTokenExpiresAt: any;
}

export interface RefreshToken {
  readonly refreshToken: RefreshToken_refreshToken;
}

export interface RefreshTokenVariables {
  readonly input: RefreshTokenInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface LoginUserInput {
  readonly username: string;
  readonly password: string;
}

export interface RefreshTokenInput {
  readonly refreshToken: string;
}

export interface RegisterUserInput {
  readonly username: string;
  readonly password: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
