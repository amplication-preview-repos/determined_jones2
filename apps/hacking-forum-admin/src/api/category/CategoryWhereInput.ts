import { StringFilter } from "../../util/StringFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  posts?: PostListRelationFilter;
};
