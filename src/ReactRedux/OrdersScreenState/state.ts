export interface IOrderState{
  orderItemsData: any[],
}

export function defaultOrderState(): IOrderState{
  return{
      orderItemsData:[],
  };
}