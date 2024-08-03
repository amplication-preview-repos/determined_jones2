import { SortOrder } from "../../util/SortOrder";

export type AdminActionOrderByInput = {
  action?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  ipAddress?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
