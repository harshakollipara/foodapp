import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import { State } from '../../ReactRedux/state';
import { getCartItems } from '../../ReactRedux/CartScreenState/selector';

interface AppProps {
    navigation?: any,
    cartItemsData: () => void,
}

function HeaderRightButton({ navigation, cartItemsData }: AppProps) {
    return (
        <View style={{ flexDirection: "row", alignItems: 'center' }}>
            <View style={{ padding: 5 }}>
                {cartItemsData.length > 0
                    ? <View style={{
                        position: "absolute", height: 30, width: 30, borderRadius: 15,
                        backgroundColor: 'orange', alignItems: 'center',
                        justifyContent: 'center', zIndex: 2000
                    }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>{cartItemsData.length}</Text>
                    </View>
                    : null
                }
                <TouchableOpacity
                    style={{ marginRight: 10 }}
                    onPress={() => navigation.navigate('Shopping Cart')}>
                    <AntDesign name="shoppingcart" size={45} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const mapStateToProps = (state: State) => ({
    cartItemsData: getCartItems(state),
});


export default connect(mapStateToProps, null)(HeaderRightButton);