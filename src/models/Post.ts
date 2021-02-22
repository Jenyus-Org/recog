export interface Post {
  title: string;
  upvotes: number;
  date: Date;
  body: string;
  tags: any[];
  comments: any[];
  author: string;
}
