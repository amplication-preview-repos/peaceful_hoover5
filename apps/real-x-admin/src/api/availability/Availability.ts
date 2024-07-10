import { User } from "../user/User";

export type Availability = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  availableFrom: Date | null;
  availableTo: Date | null;
  user?: User | null;
};
