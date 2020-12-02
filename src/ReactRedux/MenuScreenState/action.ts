import localData from '../../ApiManager/localData.json';

export enum MenuStateActionType {
    isDataLoading = 'IS_DATA_LOADING',
    failedToLoadData = 'FAILED_TO_LOAD_DATA',
    setMenuFoodItems = "SET_MENU_FOOD_ITEMS"
}

export function isDataLoading() {
    return (dispatch: any) => {
        dispatch({
            type: MenuStateActionType.isDataLoading,
           
        });
    }
}

//For Rendering food items on the Menu screen
export function setMenuFoodItems(foodItems:any[]) {
    return (dispatch: any) => {
        dispatch({
            type: MenuStateActionType.setMenuFoodItems,
            data: foodItems
        });
    }
}

export const failedToLoadData = (errorMsg: any) => ({
    type: MenuStateActionType.failedToLoadData,
    data:  errorMsg
  });

  //data api call for food items
  export function callMenuScreenData() {

  return async (dispatch :any) => {
    const response = await localData.map((data: any) => data);
      const MenuResponseJson = response[0].menu;
      dispatch(setMenuFoodItems(MenuResponseJson));
  }
}

