import { SortOrder } from "../../util/SortOrder";

export type MatchOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  opponent?: SortOrder;
  matchDateTime?: SortOrder;
  userId?: SortOrder;
};
