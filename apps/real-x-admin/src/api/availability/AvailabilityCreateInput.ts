import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AvailabilityCreateInput = {
  availableFrom?: Date | null;
  availableTo?: Date | null;
  user?: UserWhereUniqueInput | null;
};
