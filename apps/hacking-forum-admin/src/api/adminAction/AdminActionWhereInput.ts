import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AdminActionWhereInput = {
  action?: "Option1";
  id?: StringFilter;
  ipAddress?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
