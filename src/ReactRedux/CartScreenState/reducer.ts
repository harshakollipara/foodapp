import {Action} from '../action-type';
import {ICartState, defaultCartState} from './state';
import {CartStateActionType} from './action';

const cartStateReducer = (
  state: ICartState | undefined,
  action: Action,
): ICartState => {
  if (!state) {
    return defaultCartState();
  }

  if (action.type === CartStateActionType.addToCart) {
    const existedItem = state.cartItemsData.find(
      (item: any) => item.name === action.data.name,
    );
    let tempCart = [];
    if (!existedItem) {
      return {
        ...state,
        cartItemsData: [...state.cartItemsData, action.data],
      };
    } else {
      tempCart = state.cartItemsData.map((cartItem) => {
        if (cartItem.name === action.data.name) {
          let newQty = cartItem.qty + 1;
          cartItem = {...cartItem, qty: newQty};
        }
        return cartItem;
      });
      return {...state, cartItemsData: tempCart};
    }
  }

  if (action.type === CartStateActionType.removeFromCart) {
    return {
      ...state,
      cartItemsData: state.cartItemsData.filter(
        (removeItems: any) => removeItems.name !== action.data,
      ),
    };
  }

  if (action.type === CartStateActionType.emptyCartOnOrder) {
    return {
      ...state,
      cartItemsData: [],
    };
  }

  return state;
};

export default cartStateReducer;
