import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MatchUpdateInput = {
  opponent?: string | null;
  matchDateTime?: Date | null;
  user?: UserWhereUniqueInput | null;
};
