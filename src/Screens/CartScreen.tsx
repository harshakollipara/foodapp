import React from 'react';
import { View, Text, FlatList, Image, Alert, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { State } from '../ReactRedux/state';
import { cartStyle } from '../Components/commons/components.style';
import { getCartItems } from '../ReactRedux/CartScreenState/selector';
import { removeFromCart, emptyCartOnOrder } from '../ReactRedux/CartScreenState/action';
import { setOrderItems } from '../ReactRedux/OrdersScreenState/action';
import MyCustomButton from '../Components/custom/MyCustomButton';
import { getUserLoginStatus } from '../ReactRedux/HomeScreenState/selector';

interface cartProps {
  navigation: any,
  route: any,
  count: number,
  userLoggedInStatus: boolean;
  cartItemsData: () => void,
  addOrder: (value: any) => void,
  removeCartItems: (value: any) => void,
  emptyCartItems: (value: any) => void,
}

interface cartState {

}

class CartScreen extends React.Component<cartProps, cartState>{
  constructor(props: cartProps) {
    super(props);
  }

  renderItem = (item: any) => {
    let totalQty = 0;
    let totalPrice = 0;
    item.forEach((item: any) => {
      totalQty += item.qty;
      totalPrice += item.qty * item.price;
    })
    return (
      <View style={{ backgroundColor: 'white', height: '100%' }}>
        <ScrollView>
          <FlatList
            data={item}
            keyExtractor={(item, index) => `productName-${index}`}
            renderItem={({ item }) => {
              return (
                <View style={cartStyle.container}>

                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image style={cartStyle.imgStyle} source={{ uri: item.image_url }} />
                    <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10 }}>
                      <Text style={cartStyle.textTitleStyle}>{item.name} </Text>
                      <Text style={cartStyle.textStyle}>{item.currency}: {item.price}</Text>
                      <Text style={cartStyle.textStyle}>Quantity: {item.qty}</Text>
                      <Text style={cartStyle.textStyle}>Sub Total: {item.currency} {item.price * item.qty}</Text>
                    </View>

                  </View>
                  <View>
                    <Text style={cartStyle.buttonStyle}
                      onPress={() => (Alert.alert(
                        "Remove From Cart",
                        "Did you really want to Remove order from your cart",
                        [
                          {
                            text: "Cancel",
                            onPress: () => { },
                            style: "cancel"
                          },
                          { text: "OK", onPress: () => (Alert.alert('Item is Removed', item.name), this.props.removeCartItems(item.name)) }
                        ],
                        { cancelable: false }
                      ))}>Remove from Cart</Text>
                  </View>

                </View>
              )
            }}
          />
          <View style={cartStyle.totalTextStyle}>
            <Text style={cartStyle.textStyle}>Total Items: {totalQty}</Text>
            <Text style={cartStyle.textStyle}>Total Price: {totalPrice} Rs.</Text>
          </View>
          <View style={cartStyle.bottomViewStyle}>
            <MyCustomButton
              title={'Order Now'}
              onPress={() => (this.props.userLoggedInStatus
                ? (Alert.alert(
                  "Confirm Order",
                  "Please confirm your order",
                  [
                    {
                      text: "Cancel",
                      onPress: () => Alert.alert('Order is cancelled'),
                      style: "cancel"
                    },
                    { text: "Confirm", onPress: () => (Alert.alert('Order is confirmed'), this.props.navigation.navigate('Orders')) }
                  ],
                  { cancelable: false }
                ), (this.props.addOrder(item), this.props.emptyCartItems(item)))
                : Alert.alert(
                  "You are not logged in",
                  "Please Log in to Order",
                  [
                    { text: "Cancel", onPress: () => { }, style: "cancel" },
                    { text: "Log In", onPress: () => this.props.navigation.navigate('Login') }
                  ], { cancelable: false }
                )
              )}
            />
          </View>
        </ScrollView>


      </View>
    )
  }


  render() {

    return (
      <View>
        {
          this.props.cartItemsData.length > 0
            ? this.renderItem(this.props.cartItemsData)
            : <View style={cartStyle.emptyCartContainerStyle}>
              <Image source={require('../Components/images/emptycart.png')} style={cartStyle.emptyCartImageStyle} />
              <Text style={cartStyle.emptycartTextStyle}>Add items to your cart</Text>
            </View>
        }
      </View>
    )
  }

}

const mapStateToProps = (state: State) => ({
  cartItemsData: getCartItems(state),
  userLoggedInStatus: getUserLoginStatus(state),
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  addOrder: (product: any) => {
    dispatch(setOrderItems(product));
  },
  removeCartItems: (product: any) => {
    dispatch(removeFromCart(product));
  },
  emptyCartItems: (product: any) => {
    dispatch(emptyCartOnOrder(product));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);