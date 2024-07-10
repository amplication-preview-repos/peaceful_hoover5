import { MatchWhereInput } from "./MatchWhereInput";

export type MatchListRelationFilter = {
  every?: MatchWhereInput;
  some?: MatchWhereInput;
  none?: MatchWhereInput;
};
