import { Post } from "../post/Post";

export type Category = {
  createdAt: Date;
  id: string;
  posts?: Array<Post>;
  updatedAt: Date;
};
