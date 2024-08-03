import { AdminActionUpdateManyWithoutUsersInput } from "./AdminActionUpdateManyWithoutUsersInput";
import { PostUpdateManyWithoutUsersInput } from "./PostUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  adminActions?: AdminActionUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  posts?: PostUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
