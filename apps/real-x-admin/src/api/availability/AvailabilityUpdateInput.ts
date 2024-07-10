import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AvailabilityUpdateInput = {
  availableFrom?: Date | null;
  availableTo?: Date | null;
  user?: UserWhereUniqueInput | null;
};
