import { Action } from '../action-type';
import { ILocationState, defaultLocationState } from './state';
import { LocationStateActionType } from './action';

const locationStateReducer = (state: ILocationState | undefined, action: Action): ILocationState => {
  if (!state) {
    return defaultLocationState();
  }

  if (action.type === LocationStateActionType.failedToLoadData) {
    return { ...state, errorMsg : action.data};
     }
  
       if (action.type === LocationStateActionType.showLocation) {
        return { ...state, locationData : action.data};
         }

  return state;
};

export default locationStateReducer;
