export interface ILocationState {
    isLoading:boolean,
    errorMsg: string,
    locationData:any[]
  }
  
  export function defaultLocationState(): ILocationState {
    return { 
      isLoading:false,
      errorMsg : 'Data not loading.ERROR!!',
      locationData:[],
    };
  }
  