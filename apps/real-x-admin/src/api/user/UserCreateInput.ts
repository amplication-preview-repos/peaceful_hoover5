import { InputJsonValue } from "../../types";
import { MatchCreateNestedManyWithoutUsersInput } from "./MatchCreateNestedManyWithoutUsersInput";
import { AvailabilityCreateNestedManyWithoutUsersInput } from "./AvailabilityCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  matches?: MatchCreateNestedManyWithoutUsersInput;
  availabilities?: AvailabilityCreateNestedManyWithoutUsersInput;
};
