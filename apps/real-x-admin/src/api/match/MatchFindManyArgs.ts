import { MatchWhereInput } from "./MatchWhereInput";
import { MatchOrderByInput } from "./MatchOrderByInput";

export type MatchFindManyArgs = {
  where?: MatchWhereInput;
  orderBy?: Array<MatchOrderByInput>;
  skip?: number;
  take?: number;
};
