import { User } from "../user/User";

export type AdminAction = {
  action?: "Option1" | null;
  createdAt: Date;
  id: string;
  ipAddress: string | null;
  updatedAt: Date;
  user?: User | null;
};
