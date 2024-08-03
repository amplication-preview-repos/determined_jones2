import { AdminAction } from "../adminAction/AdminAction";
import { Post } from "../post/Post";
import { JsonValue } from "type-fest";

export type User = {
  adminActions?: Array<AdminAction>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  posts?: Array<Post>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
