import {State} from '../state';
import {IHomeState} from './state';

export function getHomeState(state: State): IHomeState {
  return state.homeState;
}

export function getFoodItemData(state: State) {
  return getHomeState(state).foodItems;
}

export function getErrorMsg(state: State) {
  return getHomeState(state).errorMsg;
}

export function getOfferData(state: State) {
  return getHomeState(state).offersData;
}
export function getUserLoginStatus(state: State) {
  return getHomeState(state).userStatus;
}
