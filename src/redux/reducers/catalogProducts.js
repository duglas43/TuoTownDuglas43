const initialState = {
  items: [],
  isLoaded: false,
}

const catalogProducts =(state=initialState, action)=>{
  switch(action.type){
    case "SET_CATALOG_PRODUCTS":
      return {
        ...state,
        items:action.items,
        isLoaded:true,
      };
    case "SET_CATALOG_LOADED":
      return {
        ...state,
        isLoaded:action.isLoaded,
      };
      default:
      return state;
  }
}
export default catalogProducts