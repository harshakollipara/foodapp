import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import CustomActivityIndicator from '../Components/custom/CustomActivityIndicator';
import { ResultsList } from '../Components/custom/ResultsList';
import { homeStyle } from '../Components/commons/components.style';
import { connect } from 'react-redux';
import { callAppData, } from '../ReactRedux/HomeScreenState/action';
import { getErrorMsg, getFoodItemData, getOfferData, getUserLoginStatus } from '../ReactRedux/HomeScreenState/selector';
import { State } from '../ReactRedux/state';
import CustomLoginButton from '../Components/custom/CustomLoginButton';
import CustomImageSlider from '../Components/custom/CustomImageSlider';


interface homeProps {
  itemAsProps: any,
  title: any,
  filterResults: any,
  navigation: any,
  horizantalScroll: boolean,
  onPress: any
  userLoggedInStatus: boolean,
  foodData: any[];
  erroMessage: string;
  callFoodApi: () => void;
  searchedItem: any[];
  callSearchedDataApi: () => void;
  offersReduxData: any[];
  callOfferListApi: () => void;
  callAppDataApi: () => void;
  route: any


}

interface homeState {
  searchItem: any,
  data: any[],
  isLoading: boolean
  errorMsg: any,
  arrayData: any,
  offersData: any,
  showContent: boolean,
  reduxDataitem: any[],
  searchReDuxData: any,
  offersRedux: any[],
  CurrentUser: any,
  isLoggedIn: boolean,
  Greetings: any
}

class HomeScreen extends React.Component<homeProps, homeState>{
  constructor(props: homeProps) {
    super(props);
    this.state = {
      Greetings: 'Hi',
      searchItem: '',
      data: [],
      isLoading: true,
      errorMsg: '',
      arrayData: [],
      offersData: [],
      showContent: true,
      reduxDataitem: [],
      searchReDuxData: [],
      offersRedux: [],
      CurrentUser: null,
      isLoggedIn: false
    }
  }

  async componentDidMount() {
    await this.props.callAppDataApi();
    this.setState({
      isLoading: false,
      reduxDataitem: this.props.foodData,
      searchReDuxData: this.props.foodData,
      offersRedux: this.props.offersReduxData
    })
  }

  render() {
    const { isLoading, errorMsg } = this.state;
    return (
      <ScrollView>
        <View style={homeStyle.container}>
          {this.props.userLoggedInStatus ? null :
            (
              <CustomLoginButton
                navigation={this.props.navigation}
                showContent={this.state.showContent}
                onPress={() => this.props.navigation.navigate('Login')} />
            )}

          {isLoading ? <CustomActivityIndicator animating={isLoading} /> :
            <View style={{ marginTop: 15 }}>
              <CustomImageSlider />
            </View>}

          <View style={{ height: 300, margin: 0, backgroundColor: '#fffff' }}>
            {errorMsg ? <Text>{errorMsg}</Text> : null}
            {
              isLoading ? <CustomActivityIndicator animating={isLoading} /> :
                <ResultsList navigation={this.props.navigation} filterResults={this.state.reduxDataitem} title="Menu" />
            }
          </View>

        </View>
      </ScrollView>)
  }
}

const mapStateToProps = (state: State) => ({
  foodData: getFoodItemData(state),
  erroMessage: getErrorMsg(state),
  offersReduxData: getOfferData(state),
  userLoggedInStatus: getUserLoginStatus(state),
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  callAppDataApi: () => {
    dispatch(callAppData());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);