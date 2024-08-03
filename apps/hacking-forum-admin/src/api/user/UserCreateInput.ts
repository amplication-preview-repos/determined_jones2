import { AdminActionCreateNestedManyWithoutUsersInput } from "./AdminActionCreateNestedManyWithoutUsersInput";
import { PostCreateNestedManyWithoutUsersInput } from "./PostCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  adminActions?: AdminActionCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  posts?: PostCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
