import { SortOrder } from "../../util/SortOrder";

export type AvailabilityOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  availableFrom?: SortOrder;
  availableTo?: SortOrder;
  userId?: SortOrder;
};
