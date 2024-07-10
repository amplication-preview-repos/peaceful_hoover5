import { SortOrder } from "../../util/SortOrder";

export type TeamOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  teamName?: SortOrder;
};
