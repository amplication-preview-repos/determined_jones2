import { PostCreateNestedManyWithoutCategoriesInput } from "./PostCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  posts?: PostCreateNestedManyWithoutCategoriesInput;
};
