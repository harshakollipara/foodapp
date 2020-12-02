import React from 'react';
import { View, Text } from 'react-native';
import CustomActivityIndicator from '../Components/custom/CustomActivityIndicator';
import { ProductDetailsList } from '../Components/custom/ResultsList';
import localData from '../ApiManager/localData.json';
import { homeStyle } from '../Components/commons/components.style';
import SearchBar from '../Components/custom/SearchBar';

interface Props {
  itemAsProps: any,
  title: any,
  filterResults: any,
  navigation: any,
  route: any,
}

interface State {
  searchItem: any,
  data: any[],
  isLoading: boolean
  errorMsg: any,
  count: any,
  arrayData: any[],
}



export default class DetailsScreen extends React.Component<Props, State>{
  productName: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      searchItem: '',
      data: [],
      isLoading: true,
      errorMsg: '',
      count: 0,
      arrayData: [],
    }
  }

  componentDidMount() {
    const { productName } = this.props.route.params;
    this.getData(productName);
  }

  getData = async (text: any) => {
    const response = await localData.map((data: any) => data);
    const responseJson = response[0].products;
    const result = responseJson.filter(function (item: any) {
      const itemData = item.categories[0].alias ? item.categories[0].alias.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({ data: result, isLoading: false, arrayData: result })
  }


  filterResultBySearch(text: any) {
    const result = this.state.arrayData.filter(function (item: any) {
      console.log('item.name', item.name);
      const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: result,
      isLoading: false
    });
  }

  render() {

    const { data, isLoading, errorMsg } = this.state;

    return (
      <View style={homeStyle.container}>

        {errorMsg ? <Text>{errorMsg}</Text> : null}
        {isLoading ? <CustomActivityIndicator animating={isLoading} /> :
          <View>
            <SearchBar onTermChange={(value: any) => this.filterResultBySearch(value)} />
            <ProductDetailsList navigation={this.props.navigation} filterResults={data} count={this.state.count} />
          </View>
        }
      </View>)
  }

}