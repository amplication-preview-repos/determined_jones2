import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AdminActionUpdateInput = {
  action?: "Option1" | null;
  ipAddress?: string | null;
  user?: UserWhereUniqueInput | null;
};
