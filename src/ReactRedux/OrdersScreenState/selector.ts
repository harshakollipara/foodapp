import { State } from '../state';
import { IOrderState } from './state';

export function getOrderState(state: State): IOrderState {
  return state.orderState;
}

export function getSetOrderItems(state:State){
  return getOrderState(state).orderItemsData;
}


