const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};
const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART": {
      const newItems = {
        ...state.items,
        [action.payload.id]: [
          ...(state.items[action.payload.id] || []),
          action.payload,
        ],
      };
      return {
        ...state,
        items: newItems,
        totalCount: Object.values(newItems).reduce(
          (acc, item) => acc + item.length,
          0
        ),
        totalPrice: Object.values(newItems).reduce((prev, current) => {
          return prev + current.reduce((obj, sum) => obj + sum.price, 0);
        }, 0),
      };
    }
    case("DEL_ONE_PRODUCT"):{
      const newItems={
          ...state.items,
          [action.payload]:[
            ...state.items[action.payload].filter((elem,i,arr)=>i<arr.length-1),
          ],
      }
      const removeProperty = prop => ({ [prop]:_, ...rest }) => rest
      const removePayload=removeProperty([action.payload])
      return{
        ...state,
        items:(newItems[action.payload].length===0 ? removePayload(newItems):newItems),
        totalPrice: Object.values(newItems).reduce((prev, current) => {
          return prev + current.reduce((obj, sum) => obj + sum.price, 0);
        }, 0),
        totalCount: Object.values(newItems).reduce(
          (acc, item) => acc + item.length,
          0
        ),
      }
    }
    case("DEL_WHOLE_PRODUCT"):{
      delete state.items[action.payload]
      const newItems={
        ...state.items
    }
    return{
      ...state,
        items:newItems,
        totalPrice: Object.values(newItems).reduce((prev, current) => {
          return prev + current.reduce((obj, sum) => obj + sum.price, 0);
        }, 0),
        totalCount: Object.values(newItems).reduce(
          (acc, item) => acc + item.length,
          0
        ),
    }

    }
    default:
      return state;
  }
};
export default cart;
