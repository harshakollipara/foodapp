import localData from '../../ApiManager/localData.json';

export enum OffersStateActionType {
    isDataLoading = 'IS_DATA_LOADING',
    failedToLoadData = 'FAILED_TO_LOAD_DATA',
    setOfferItems =  "SET_OFFER_ITEMS" ,

}
export function isDataLoading() {
    return (dispatch: any) => {
        dispatch({
            type: OffersStateActionType.isDataLoading,
           
        });
    }
}

//For Rendering offers data on the screen
export function setOfferItems(offersList:any[]) {
    return (dispatch: any) => {
        dispatch({
            type: OffersStateActionType.setOfferItems,
            data: offersList
        });
    }
}

export const failedToLoadData = (errorMsg: any) => ({
    type: OffersStateActionType.failedToLoadData,
    data:  errorMsg
  });
 
  //data api call for offers items
  export function callOffersData() {
   return  (dispatch :any) => {
    const response =  localData.map((data: any) => data);
    const OfferResponseJson = response[0].offers;
      dispatch(setOfferItems(OfferResponseJson));
  }
}

