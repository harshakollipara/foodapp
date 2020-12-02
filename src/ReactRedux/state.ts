import { Action } from 'redux';
import {IHomeState,defaultHomeState} from './HomeScreenState/state'
import { IMenuState,defaultMenuState} from './MenuScreenState/state';
import { IOffersState,defaultOffersState} from './OffersScreenState/state';
import { IOrderState, defaultOrderState } from './OrdersScreenState/state';
import { ICartState, defaultCartState } from './CartScreenState/state';
import { ILocationState, defaultLocationState } from './LocationScreenState/state';


interface IState {
  homeState: IHomeState,
  menuState: IMenuState,
  offersState : IOffersState,
  orderState: IOrderState,
  cartState: ICartState,
  locationState: ILocationState,

}

export default function createState() {
  return {
    homeState: defaultHomeState(),
    menuState : defaultMenuState(),
    offersState : defaultOffersState(),
    orderState: defaultOrderState(),
    cartState: defaultCartState(),
    locationState:defaultLocationState(),
  }
}

export function emptyState(state: State, action: Action) {
  return {
    homeState: defaultHomeState(),  
    menuState : defaultMenuState(),
    offersState : defaultOffersState(),
    orderState: defaultOrderState(),
    cartState: defaultCartState(),
    locationState:defaultLocationState(),
  };
}
export type State = IState



