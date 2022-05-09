export const testActions = (item) => (dispatch) => {
  dispatch({
    type: "GET_USER_PROFILE",
    payload: item,
  });
};
