import { AdminActionWhereInput } from "./AdminActionWhereInput";
import { AdminActionOrderByInput } from "./AdminActionOrderByInput";

export type AdminActionFindManyArgs = {
  where?: AdminActionWhereInput;
  orderBy?: Array<AdminActionOrderByInput>;
  skip?: number;
  take?: number;
};
