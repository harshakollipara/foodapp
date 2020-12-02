import { State } from '../state';
import { IMenuState } from './state';


export function getMenutate(state: State): IMenuState {
  return state.menuState;
}

export function getMenuItemData(state: State) {
  return getMenutate(state).menusData;
}
  export function getErrorMsg(state: State) {
    return getMenutate(state).errorMsg;
}

