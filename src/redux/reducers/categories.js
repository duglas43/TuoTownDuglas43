const initialState = {
  sortBy:"popular",
  payload:0
}
const categories = (state = initialState, action) => {
  switch (action.type) {
    case "setCategory": {
      return {
        ...state,
        payload: action.payload,
      };
    }
    default:{
      return state;
    }
  }
  return state;
};
export default categories;