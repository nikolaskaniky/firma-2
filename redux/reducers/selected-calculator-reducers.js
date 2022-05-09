export const selectedCalculatorReducer = (state = "website", action) => {
  switch (action.type) {
    case "WEBSITE":
      return (state = "website");
    case "COMPONENT":
      return (state = "component");
    default:
      return state;
  }
};
