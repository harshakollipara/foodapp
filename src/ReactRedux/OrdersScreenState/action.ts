export enum OrdersStateActionType {
  setOrderItems = 'SET_ORDER_ITEMS',
}

//setting order
export function setOrderItems(orderItemsData: any) {
  console.log('called setOrder', orderItemsData);
  return (dispatch: any) => {
    dispatch({
      type: OrdersStateActionType.setOrderItems,
      data: orderItemsData,
    });
  };
}

