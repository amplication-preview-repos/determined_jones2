import { Category } from "../category/Category";
import { User } from "../user/User";

export type Post = {
  category?: Category | null;
  content: string | null;
  createdAt: Date;
  id: string;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
