const initialState = {
  items: [],
  isLoaded: false,
}

const products =(state=initialState, action)=>{
  switch(action.type){
    case "SET_PRODUCTS":
      return {
        ...state,
        items:action.items,
        isLoaded:true,
      };
    case "SET_LOADED":
      return {
        ...state,
        isLoaded:action.items,
      };
    default:
      return state;
  }
}
export default products