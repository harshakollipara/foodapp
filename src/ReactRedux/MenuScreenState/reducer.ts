import { Action } from '../action-type';
import { IMenuState, defaultMenuState } from './state';
import { MenuStateActionType } from './action';

const menuStateReducer = (state: IMenuState | undefined, action: Action): IMenuState => {
  if (!state) {
    return defaultMenuState();
  }

  if (action.type === MenuStateActionType.failedToLoadData) {
    return { ...state, errorMsg : action.data};
     }
         
       if (action.type === MenuStateActionType.setMenuFoodItems) {
        return { ...state, menusData : action.data};
         }

  return state;
};

export default menuStateReducer;
