import React from 'react';
import { View, Text, FlatList, Image, Alert, ScrollView, } from 'react-native';
import { connect } from 'react-redux';
import { getSetOrderItems } from '../ReactRedux/OrdersScreenState/selector';
import { State } from '../ReactRedux/state';
import { ordersStyle } from '../Components/commons/components.style';



interface orderProps {
  navigation: any,
  route: any,
  count: number,

  orderItemsData: () => void;

}

interface orderState {
}

class OrdersScreen extends React.Component<orderProps, orderState>{
  constructor(props: orderProps) {
    super(props);
    this.state = {
    }
  }

  renderItem = (data: any) => {
    return data.map((item: any) => {
      let totalQty = 0;
      let totalPrice = 0;
      item.forEach((item: any) => {
        totalQty += item.qty;
        totalPrice += item.qty * item.price;
      })
      return (
        <View style={ordersStyle.container}>
          <FlatList
            data={item}
            keyExtractor={(item, index) => `productName-${index}`}
            renderItem={({ item }) => {
              return (
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                  <Image style={ordersStyle.imgStyle} source={{ uri: item.image_url }} />
                  <View style={{ alignContent: 'center', justifyContent: 'center', marginLeft: 15 }}>
                    <Text style={ordersStyle.productTextStyle}>{item.name} </Text>
                    <Text style={ordersStyle.priceTextStyle}>Price: {item.qty} X {item.price} = {item.price * item.qty} {item.currency}.</Text>
                  </View>
                </View>
              )
            }}
          />
          <View style={{
            flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, borderTopWidth: 1, borderTopColor: 'gray',
          }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 15 }}>Total Price: {totalPrice} Rs.</Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold', marginRight: 15 }}>Total Items: {totalQty}</Text>
          </View>
        </View>
      )
    })
  }

  render() {
    return (
      <View>
        <ScrollView>
          {
            this.props.orderItemsData.length > 0 ?
              this.renderItem(this.props.orderItemsData) :
              <View style={ordersStyle.noOrdersContainerStyle}>
                <Image source={require('../Components/images/no_orders.png')} style={ordersStyle.noOrdersImageStyle} />
                <Text style={ordersStyle.noOrdersTextStyle}>No Recent Orders...</Text>
              </View>

          }
        </ScrollView>
      </View>
    )
  }

}

const mapStateToProps = (state: State) => ({
  orderItemsData: getSetOrderItems(state),
});

export default connect(mapStateToProps, null)(OrdersScreen);