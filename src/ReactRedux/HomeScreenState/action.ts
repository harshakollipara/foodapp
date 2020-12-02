import localData from '../../ApiManager/localData.json';

export enum HomeStateActionType {
    isDataLoading = 'IS_DATA_LOADING',
    setFoodItems='SET_FOOD_ITEMS',
    failedToLoadData = 'FAILED_TO_LOAD_DATA',
    setSearchFoodItems = 'SET_SEARCH_FOOD_ITEMS',
    setOfferItems =  "SET_OFFER_ITEMS" ,
    userState= "USER_STATE",

}


export function isDataLoading() {
    return (dispatch: any) => {
        dispatch({
            type: HomeStateActionType.isDataLoading,
           
        });
    }
}

export function setUserLoggedInStatus(userStatus:boolean) {
    return (dispatch: any) => {
        dispatch({
            type: HomeStateActionType.userState,
            data: userStatus
        });
    }
}

//For Rendering food items on the screen
export function setFoodItems(foodItems:any[]) {
    return (dispatch: any) => {
        dispatch({
            type: HomeStateActionType.setFoodItems,
            data: foodItems
        });
    }
}

//For Rendering offers data on the screen
export function setOfferItems(offersList:any[]) {
    return (dispatch: any) => {
        dispatch({
            type: HomeStateActionType.setOfferItems,
            data: offersList
        });
    }
}

export const failedToLoadData = (errorMsg: any) => ({
    type: HomeStateActionType.failedToLoadData,
    data:  errorMsg
  });

 
  //data api call for homescreen items
  export function callAppData() {
   return  (dispatch :any) => {
    const response =  localData.map((data: any) => data);
    const responseJson = response[0].products;
    dispatch(setFoodItems(responseJson));
    const OfferResponseJson = response[0].offers;
      dispatch(setOfferItems(OfferResponseJson));

  }
}

