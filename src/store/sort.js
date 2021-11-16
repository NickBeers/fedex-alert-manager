import { v4 } from "uuid";

// Action Types
export const SORT_ALTERS = "SORT_ALERTS";

// Action Creators

// Reducers
const sort = (state = "SORT_BY_DATE", action) => {
  switch (action.type) {
    case SORT_ALTERS:
      return action.sortBy;
    default:
      return state;
  }
};

export default sort;
