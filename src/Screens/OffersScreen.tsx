import React from 'react';
import localData from '../ApiManager/localData.json';
import { View, Text } from 'react-native';
import CustomActivityIndicator from '../Components/custom/CustomActivityIndicator';
import { OfferResultsList } from '../Components/custom/ResultsList';
import { homeStyle } from '../Components/commons/components.style';

//all imports necessary for redux 
import { connect } from 'react-redux';
import { callOffersData } from '../ReactRedux/OffersScreenState/action';
import { getErrorMsg, getOfferData } from '../ReactRedux/HomeScreenState/selector';
import { State } from '../ReactRedux/state';


interface offersProps {
  itemAsProps: any,
  title: any,
  filterResults: any,
  navigation: any,

  erroMessage: string;  //newly added for redux testing
  offersReduxData: any[];//arraydata for displaying offers from redux
  callOfferListApi: () => void;//data api call for offers list from redux
}

interface offersState {
  data: any[],
  isLoading: boolean
  errorMsg: any,
  offersRedux: any[],

}

class OffersScreen extends React.Component<offersProps, offersState>{
  constructor(props: offersProps) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      errorMsg: '',
      offersRedux: [],
    }
  }



  getData = async () => {
    const response = await localData.map((data: any) => data);
    const responseJson = response[0].offers;
    this.setState({ data: responseJson, isLoading: false })

  }

  async componentDidMount() {
    await this.props.callOfferListApi(); // fn call for food items
    this.setState({
      isLoading: false,
      offersRedux: this.props.offersReduxData
    })
  }

  render() {
    const { data, isLoading, errorMsg } = this.state;
    return (
      <View style={homeStyle.container}>

        {errorMsg ? <Text>{errorMsg}</Text> : null}
        {isLoading ? <CustomActivityIndicator animating={isLoading} /> :
          <OfferResultsList horizantalScroll={false} navigation={this.props.navigation} filterResults={this.state.offersRedux} title="Current Offers For You" />
        }

      </View>
    )
  }

}

const mapStateToProps = (state: State) => ({
  erroMessage: getErrorMsg(state),
  offersReduxData: getOfferData(state),

});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  callOfferListApi: () => {
    dispatch(callOffersData());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(OffersScreen);

