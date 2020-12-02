import {Action} from '../action-type';
import {IHomeState, defaultHomeState} from './state';
import {HomeStateActionType} from './action';

const homeStateReducer = (
  state: IHomeState | undefined,
  action: Action,
): IHomeState => {
  if (!state) {
    return defaultHomeState();
  }

  if (action.type === HomeStateActionType.setFoodItems) {
    return {...state, foodItems: action.data};
  }
  if (action.type === HomeStateActionType.userState) {
    return {...state, userStatus: action.data};
  }
  if (action.type === HomeStateActionType.failedToLoadData) {
    return {...state, errorMsg: action.data};
  }

  if (action.type === HomeStateActionType.setOfferItems) {
    return {...state, offersData: action.data};
  }

  return state;
};

export default homeStateReducer;
