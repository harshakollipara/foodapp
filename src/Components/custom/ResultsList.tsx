import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { resultsListStyle, } from '../commons/components.style';
import { OfferResultDetails, ResultDetails, MenuResultDetails, ProductDetails, LocationResultDetails } from './ResultDetails';

interface resultsListProps {
    title: any,
    filterResults: any,
    navigation: any,
}

interface productDetailsListProps {
    filterResults: any,
    navigation: any,
    count: any,
}

interface offerResultsListProps {
    title: any,
    filterResults: any,
    navigation: any,
    horizantalScroll: boolean,
}


interface resultDetailsProp {
    itemAsProp: any,
}

function ResultsList({ title, filterResults, navigation }: resultsListProps) {
    if (!filterResults.length) {
        return null;
    }
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={resultsListStyle.titleStyle}>{title}</Text>
                <Text style={{ color: 'blue', fontSize: 15, alignSelf: 'center' }}> Full Menu -&gt; </Text>
            </View>
            <FlatList
                alwaysBounceHorizontal
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={filterResults}
                keyExtractor={item => item.name}
                renderItem={({ item }) => {
                    return <ResultDetails itemAsProp={item} navigation={navigation} />
                }}
            />
        </View>
    );
}

function OfferResultsList({ title, filterResults, navigation, horizantalScroll }: offerResultsListProps) {
    if (!filterResults.length) {
        return null;
    }
    return (
        <View>
            <FlatList
                alwaysBounceHorizontal
                horizontal={horizantalScroll}
                data={filterResults}
                keyExtractor={item => item.offer_image_url}
                renderItem={({ item }) => {
                    return <OfferResultDetails itemAsProp={item} navigation={navigation} />
                }}
            />
        </View>
    );
}

function MenuResultsList({ title, filterResults, navigation }: resultsListProps) {
    if (!filterResults.length) {
        return null;
    }
    return (
        <View>
            <View style={{ borderWidth: 1, borderColor: 'gray', padding: 20 }}>
                <Text
                    style={{
                        fontSize: 20, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center',
                    }}>Now Serving breakfast at</Text>
                <Text style={{
                    fontSize: 16, textAlign: 'center', alignSelf: 'center',
                }}>Hinjewadi, Phase1 Mezza 9</Text>
                <Text onPress={() => navigation.navigate('Location')}
                    style={{
                        fontSize: 18, textAlign: 'center', alignSelf: 'center',
                        color: 'red'
                    }}>See Your nearby locations</Text>
            </View>
            <View style={{ marginBottom: 230, backgroundColor: 'white' }}>
                <FlatList
                    data={filterResults}
                    keyExtractor={item => item.menu_image_url}
                    renderItem={({ item }) => {
                        return <MenuResultDetails itemAsProp={item} navigation={navigation} />
                    }}
                />
            </View>
        </View>
    );
}


export class ProductDetailsList extends React.Component<productDetailsListProps> {
    constructor(props: productDetailsListProps) {
        super(props);
    }
    render() {
        return (
            <View style={{ marginBottom: 150, backgroundColor: 'white' }}>
                <FlatList
                    numColumns={2}
                    data={this.props.filterResults}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => {
                        return <ProductDetails itemAsProp={item} navigation={this.props.navigation} count={this.props.count}
                        />
                    }}
                />
            </View>
        );
    }
}

function LocationResultsList({ title, filterResults, navigation, horizantalScroll }: offerResultsListProps) {
    if (!filterResults.length) {
        return null;
    }
    return (
        <View>
            <FlatList
                horizontal={horizantalScroll}
                data={filterResults}
                keyExtractor={item => item.offer_image_url}
                renderItem={({ item }) => {
                    return <LocationResultDetails itemAsProp={item} navigation={navigation} />
                }}
            />
        </View>
    );
}


export { ResultsList, OfferResultsList, MenuResultsList, LocationResultsList };