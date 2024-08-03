import { AdminAction as TAdminAction } from "../api/adminAction/AdminAction";

export const ADMINACTION_TITLE_FIELD = "ipAddress";

export const AdminActionTitle = (record: TAdminAction): string => {
  return record.ipAddress?.toString() || String(record.id);
};
