import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  content?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
