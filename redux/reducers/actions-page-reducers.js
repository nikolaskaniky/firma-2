export const selectedPageReducer = (state = "create", action) => {
  switch (action.type) {
    case "SET_PAGE_ACTION":
      return (state = action.payload);
    default:
      return state;
  }
};
