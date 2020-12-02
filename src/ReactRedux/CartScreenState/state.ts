export interface ICartState {
  cartItemsData: any[];
  total?: number;
  qty?: any;
}

export function defaultCartState(): ICartState {
  return {
    cartItemsData: [],
    total: 0,
    qty: 0,
  };
}
