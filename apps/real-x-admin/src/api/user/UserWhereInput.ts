import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MatchListRelationFilter } from "../match/MatchListRelationFilter";
import { AvailabilityListRelationFilter } from "../availability/AvailabilityListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  matches?: MatchListRelationFilter;
  availabilities?: AvailabilityListRelationFilter;
};
