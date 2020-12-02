import localData from '../../ApiManager/localData.json';

export enum LocationStateActionType {
  isDataLoading = 'IS_DATA_LOADING',
  failedToLoadData = 'FAILED_TO_LOAD_DATA',
  showLocation = 'SET_LOCATION',
}
export function isDataLoading() {
  return (dispatch: any) => {
    dispatch({
      type: LocationStateActionType.isDataLoading,
    });
  };
}

//For Rendering Location data on the screen
export function showLocation(locationData: any[]) {
  return (dispatch: any) => {
    dispatch({
      type: LocationStateActionType.showLocation,
      data: locationData,
    });
  };
}

export const failedToLoadData = (errorMsg: any) => ({
  type: LocationStateActionType.failedToLoadData,
  data: errorMsg,
});

//data api call for location of shops
export function callLocationData() {
  return (dispatch: any) => {
    const response = localData.map((data: any) => data);
    const LocationResponseJson = response[0].location;
    dispatch(showLocation(LocationResponseJson));
  };
}
