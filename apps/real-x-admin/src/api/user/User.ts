import { JsonValue } from "type-fest";
import { Match } from "../match/Match";
import { Availability } from "../availability/Availability";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  matches?: Array<Match>;
  availabilities?: Array<Availability>;
};
