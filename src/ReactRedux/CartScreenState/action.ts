
export enum CartStateActionType {
  addToCart = 'ADD_TO_CART',
  removeFromCart = 'REMOVE_FROM_CART',
  emptyCartOnOrder = 'EMPTY_CART_ON_ORDER',
}

//Add to cart
export function addToCart(addedItems: any) {
  return (dispatch: any) => {
    dispatch({
      type: CartStateActionType.addToCart,
      data: addedItems
    });
  };
}

// Remove from Cart
export function removeFromCart(removedItems: any) {
  return (dispatch: any) => {
    dispatch({
      type: CartStateActionType.removeFromCart,
      data: removedItems,
    });
  };
}

// Empty cart items on Order Now
export function emptyCartOnOrder(emptyCart: any) {
  return (dispatch: any) => {
    dispatch({
      type: CartStateActionType.emptyCartOnOrder,
      data: emptyCart,
    });
  };
}
