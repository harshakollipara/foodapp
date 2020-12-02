import {Action} from '../action-type';
import {IOffersState, defaultOffersState} from './state';
import {OffersStateActionType} from './action';

const OffersStateReducer = (
  state: IOffersState | undefined,
  action: Action,
): IOffersState => {
  if (!state) {
    return defaultOffersState();
  }

  if (action.type === OffersStateActionType.failedToLoadData) {
    return {...state, errorMsg: action.data};
  }

  if (action.type === OffersStateActionType.setOfferItems) {
    return {...state, offersData: action.data};
  }

  return state;
};

export default OffersStateReducer;
