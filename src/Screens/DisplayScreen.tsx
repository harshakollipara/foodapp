import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { displayScreenStyle } from '../Components/commons/components.style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { addToCart } from '../ReactRedux/CartScreenState/action';

interface Props {
  navigation: any,
  route: any,
  count: number,

  addOrder: (value: any) => void;
  addItemToCart: (value: any) => void;

}

interface State {
  count: number,
  name: string,
  ButtonStateHolder: boolean,
  favouriteItem: boolean,
  addToFavouritesText: string,
}

class DisplayScreen extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 1,
      name: '',
      ButtonStateHolder: true,
      favouriteItem: false,
      addToFavouritesText: "Add To Favourites",
    }
  }
  addFavouriteTrue() {
    this.setState({ favouriteItem: true });
    this.setState({ addToFavouritesText: 'Remove From Favourite' });
  }
  addFavouriteFalse() {
    this.setState({ favouriteItem: false });
    this.setState({ addToFavouritesText: 'Add To Favourites' });
  }

  render() {
    const { nm } = this.props.route.params;
    return (
      <>
        <ScrollView style={{ backgroundColor: 'white' }}>
          <View style={{ marginBottom: 100, }}>
            <Image style={displayScreenStyle.dispalyPageImageStyle} source={{ uri: nm.image_url }} />
            <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold' }}>{nm.name}</Text>
            <Text style={displayScreenStyle.textAlignmet}>Rating :{nm.rating}</Text>
            <Text style={displayScreenStyle.textAlignmet}>Price:{nm.price}</Text>

            <View style={displayScreenStyle.customiseViewStyle}>
              <Text style={{ color: '#6495ed', fontSize: 18 }}>Customise ?</Text>
            </View>

            <View style={{ borderBottomWidth: 1, marginHorizontal: 20 }}>

              {
                this.state.favouriteItem ? (
                  <>
                    <TouchableOpacity onPress={() => this.addFavouriteFalse()}>
                      <FontAwesome style={{ alignSelf: 'center', marginTop: 10 }} name='star' size={25} color='orange' />
                    </TouchableOpacity>
                    <Text style={{ color: '#6495ed', fontSize: 18, alignSelf: 'center', marginBottom: 20 }}>{this.state.addToFavouritesText}</Text>
                  </>
                ) :
                  (<>
                    <TouchableOpacity onPress={() => this.addFavouriteTrue()} >
                      <FontAwesome style={{ alignSelf: 'center', marginTop: 10 }} name='star-o' size={25} color='black' />
                    </TouchableOpacity>
                    <Text style={{ color: '#6495ed', fontSize: 18, alignSelf: 'center', marginBottom: 20 }}>{this.state.addToFavouritesText}</Text>
                  </>
                  )
              }

            </View>


            <View style={{ borderBottomWidth: 1 }}>
              <Text style={{ fontSize: 25, alignSelf: 'center' }}>Quantity</Text>
              <View style={{ flexDirection: 'row', alignSelf: 'center', marginVertical: 20 }}>

                <TouchableOpacity
                  disabled={this.state.count <= 1}
                  onPress={() => this.setState({ count: this.state.count - 1 })}
                >
                  <FontAwesome name='minus' size={25} color='black' style={{ marginHorizontal: 15, marginTop: 8 }} />
                </TouchableOpacity>


                <Text style={displayScreenStyle.counterText}>{this.state.count}</Text>


                <TouchableOpacity
                  onPress={() => this.setState({ count: this.state.count + 1 })}
                >
                  <FontAwesome name='plus' size={25} color='black' style={{ marginHorizontal: 15, marginTop: 8 }} />
                </TouchableOpacity>

              </View>
            </View>

            <View style={{ borderBottomWidth: 1, }}>
              <Text style={{ fontSize: 20, alignSelf: 'center', padding: 10 }}
                onPress={() => { this.props.navigation.navigate('Nutrition') }}>Nutrition and Ingrediants </Text>
            </View>

          </View>
        </ScrollView>

        <View style={displayScreenStyle.buttonContainer}>
          <View style={displayScreenStyle.buttonBottomView}>
            <TouchableOpacity
              disabled={this.state.count === 0 ? this.state.ButtonStateHolder : false}
              onPress={() => {
                for (let i: number = 0; i < this.state.count; i++) {
                  this.props.addItemToCart(nm);
                } this.props.navigation.navigate('Shopping Cart'),
                  this.setState({ count: 1 })
              }}
            >
              <Text style={displayScreenStyle.buttonTextStyle}>Add To Order</Text>
            </TouchableOpacity>
          </View>
        </View>

      </>
    )
  }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  addItemToCart: (product: any) => {
    dispatch(addToCart(product));
  }
});



export default connect(null, mapDispatchToProps)(DisplayScreen);
