const initialState={
  actualTab:0,
  items:[],
  actualItems:[],
  isLoaded:false,
  isActualLoaded:false,
}
const home = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTUAL_TAB": 
      return {
        ...state,
        actualTab: action.actualTab,
      };
      case "SET_HOME_PRODUCTS":
        return {
          ...state,
          items:action.items,
          isLoaded:true,
      };
      case "SET_HOME_LOADED":
        return {
          ...state,
          isLoaded:action.isLoaded,
        };
        case "SET_ACTUAL_HOME_PRODUCTS":
          return {
            ...state,
            actualItems:action.actualItems,
            isActualLoaded:true,
        };
        case "SET_ACTUAL_HOME_LOADED":
          return {
            ...state,
            isActualLoaded:action.isLoaded,
          };
    default:
      return state;
  }
}
export default home;