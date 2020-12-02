export interface IMenuState {
    isLoading:boolean,
    errorMsg: string,
    menusData:any[]
  }
  
  export function defaultMenuState(): IMenuState {
    return { 
      isLoading:false,
      errorMsg : 'Data not loading.ERROR!!',
      menusData:[],
    };
  }
  