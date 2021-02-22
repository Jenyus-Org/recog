export interface Post {
  id: number;
  title: string;
  upvotes: number;
  date: Date;
  body: string;
  tags: any[];
  comments: any[];
  author: string;
}
