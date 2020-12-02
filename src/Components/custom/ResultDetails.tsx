import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { resultDetailsStyle, menuScreenStyle, resultDetailsScreenStyle } from '../commons/components.style';

interface resultDetailsProps {
    itemAsProp: any,
    navigation: any
}

interface productDetailsProps {
    itemAsProp: any,
    navigation: any,
    count: any,
}

interface ProductDetailsState {
    productQuantity: number,
    count: number,
    totalPrice: number
}

function ResultDetails({ itemAsProp, navigation }: resultDetailsProps) {
    return (
        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Product Details', { nm: itemAsProp })}>
                <Image style={resultDetailsStyle.imageStyle} source={{ uri: itemAsProp.image_url }} />
                <Text style={resultDetailsStyle.itemNameStyle}>{itemAsProp.name}</Text>
            </TouchableOpacity>
        </View>
    );
}

function OfferResultDetails({ itemAsProp, navigation }: resultDetailsProps) {
    return (
        <View>
            <Image style={resultDetailsStyle.offerimageStyle} source={{ uri: itemAsProp.offer_image_url }} />
        </View>
    );
}

function MenuResultDetails({ itemAsProp, navigation }: resultDetailsProps) {
    const capitalize = (str: any) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Details', { productName: itemAsProp.categorie_name })}>
                <View style={menuScreenStyle.container}>
                    <Text style={menuScreenStyle.itemNameStyle}>{capitalize(itemAsProp.categorie_name)}</Text>
                    <Image style={menuScreenStyle.imageStyle} source={{ uri: itemAsProp.menu_image_url }} />
                </View>
            </TouchableOpacity>
        </View>
    );
}


export class ProductDetails extends React.Component<productDetailsProps, ProductDetailsState> {
    constructor(props: productDetailsProps) {
        super(props);
        this.state = {
            productQuantity: 0,
            count: 0,
            totalPrice: 0
        }
    }

    render() {
        return (
            <View style={resultDetailsScreenStyle.container}>
                <View style={resultDetailsStyle.viewContainer}>
                    <View style={{ paddingBottom: 10 }}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Product Details', { nm: this.props.itemAsProp })}>
                            <Image style={resultDetailsScreenStyle.imageStyle} source={{ uri: this.props.itemAsProp.image_url }} />
                        </TouchableOpacity>
                        <Text style={resultDetailsScreenStyle.itemNameStyle}>{this.props.itemAsProp.name}</Text>
                        <Text style={resultDetailsScreenStyle.subTextStyle}>Rating :{this.props.itemAsProp.rating}</Text>
                        <Text style={resultDetailsScreenStyle.subTextStyle}>Price :{this.props.itemAsProp.price}</Text>
                    </View>
                </View>

            </View>
        );
    }
}

function LocationResultDetails({ itemAsProp, navigation }: resultDetailsProps) {
    return (
        <View style={{ borderColor: 'gray', borderBottomWidth: 1 }}>
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Address:</Text>
                <Text style={{ fontSize: 18 }}>{itemAsProp.address}{itemAsProp.zip_code}</Text>
            </View>
        </View>
    );
}

export { ResultDetails, OfferResultDetails, MenuResultDetails, LocationResultDetails };