
export interface IHomeState {
  isLoading:boolean,
  foodItems:any[],
  errorMsg: string,
  offersData:any[],
  userStatus:boolean,
 
}

export function defaultHomeState(): IHomeState {
  return { 
    isLoading:false,
    foodItems:[],
    errorMsg : 'Data not loading.ERROR!!',
    offersData:[],
    userStatus: false,
 
  };
}
