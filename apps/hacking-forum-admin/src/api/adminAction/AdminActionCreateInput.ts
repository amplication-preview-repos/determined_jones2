import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AdminActionCreateInput = {
  action?: "Option1" | null;
  ipAddress?: string | null;
  user?: UserWhereUniqueInput | null;
};
