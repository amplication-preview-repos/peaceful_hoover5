import { User } from "../user/User";

export type Match = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  opponent: string | null;
  matchDateTime: Date | null;
  user?: User | null;
};
