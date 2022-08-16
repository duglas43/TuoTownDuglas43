const initialState={
  actualTab:0,
  actualItems:[],
  isLoaded:false,
}
const home = (state = initialState, action) => {
  switch (action.type) {
    case "setActualTab": 
      return {
        ...state,
        actualTab: action.actualTab,
      };
      case "SET_HOME_PRODUCTS":
        return {
          ...state,
          actualItems:action.actualItems,
          isLoaded:true,
      };
      case "SET_HOME_LOADED":
        return {
          ...state,
          isLoaded:action.isLoaded,
        };
    default:
      return state;
  }
}
export default home;