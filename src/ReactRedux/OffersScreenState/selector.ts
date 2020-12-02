import { State } from '../state';
import { IOffersState } from './state';


export function getOffersState(state: State): IOffersState {
  return state.homeState;
}

  export function getErrorMsg(state: State) {
    return getOffersState(state).errorMsg;
}

export function getOfferData(state: State) {
    return getOffersState(state).offersData;
  }
