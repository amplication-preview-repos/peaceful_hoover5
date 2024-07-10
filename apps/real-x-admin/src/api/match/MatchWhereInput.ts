import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MatchWhereInput = {
  id?: StringFilter;
  opponent?: StringNullableFilter;
  matchDateTime?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
