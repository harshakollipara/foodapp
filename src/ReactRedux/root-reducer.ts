import { Action, combineReducers } from 'redux';
import homeStateReducer from './HomeScreenState/reducer';
import menuStateReducer from './MenuScreenState/reducer';
import offersStateReducer from './OffersScreenState/reducer';
import ordersStateReducer from './OrdersScreenState/reducer';
import cartStateReducer from './CartScreenState/reducer';
import locationStateReducer from './LocationScreenState/reducer';

import { State } from './state';


const AppReducer = combineReducers(
  {
    homeState: homeStateReducer,
    menuState : menuStateReducer,
    offersState : offersStateReducer,
    orderState: ordersStateReducer,
    cartState: cartStateReducer,
    locationState: locationStateReducer,
  },
);

const RootReducer = (state: State, action: Action) => {
 
  return AppReducer(state, action)
}

export default RootReducer;
