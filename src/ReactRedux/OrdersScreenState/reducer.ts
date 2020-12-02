import {Action} from '../action-type';
import {IOrderState, defaultOrderState} from './state';
import {OrdersStateActionType} from './action';

const ordersStateReducer = (state: IOrderState | undefined, action: Action,): IOrderState => {
  if (!state) {
    return defaultOrderState();
  }

  if (action.type === OrdersStateActionType.setOrderItems) {
    return {...state, orderItemsData:[...state.orderItemsData, action.data]};
  }
  
  return state;
};

export default ordersStateReducer;
   