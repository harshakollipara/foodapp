import {State} from '../state';
import {ILocationState} from './state';

export function getLocationState(state: State): ILocationState {
  return state.locationState;
}

export function getErrorMsg(state: State) {
  return getLocationState(state).errorMsg;
}

export function getLocationData(state: State) {
  return getLocationState(state).locationData;
}
