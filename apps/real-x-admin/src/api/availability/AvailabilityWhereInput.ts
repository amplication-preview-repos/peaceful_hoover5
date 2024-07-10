import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AvailabilityWhereInput = {
  id?: StringFilter;
  availableFrom?: DateTimeNullableFilter;
  availableTo?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
