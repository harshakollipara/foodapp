import { State } from '../state';
import { ICartState } from './state';

export function getCartState(state: State): ICartState {
  return state.cartState;
}

export function getCartItems(state:State){
  return getCartState(state).cartItemsData;
}


