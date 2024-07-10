import { InputJsonValue } from "../../types";
import { MatchUpdateManyWithoutUsersInput } from "./MatchUpdateManyWithoutUsersInput";
import { AvailabilityUpdateManyWithoutUsersInput } from "./AvailabilityUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  matches?: MatchUpdateManyWithoutUsersInput;
  availabilities?: AvailabilityUpdateManyWithoutUsersInput;
};
