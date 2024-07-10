import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MatchCreateInput = {
  opponent?: string | null;
  matchDateTime?: Date | null;
  user?: UserWhereUniqueInput | null;
};
