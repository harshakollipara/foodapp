import React from 'react';
import { View, Text } from 'react-native';
import CustomActivityIndicator from '../Components/custom/CustomActivityIndicator';
import { MenuResultsList } from '../Components/custom/ResultsList';
import { homeStyle } from '../Components/commons/components.style';

//all imports necessary for redux 
import { connect } from 'react-redux';
import { callMenuScreenData } from '../ReactRedux/MenuScreenState/action';
import { getErrorMsg, getMenuItemData } from '../ReactRedux/MenuScreenState/selector';
import { State } from '../ReactRedux/state';

interface menuProps {
  itemAsProps: any,
  title: any,
  filterResults: any,
  navigation: any
  //for redux 
  callMenuDataApi: () => void; //newly added for redux testing
  menuData: any[]; //arraydata after search from redux
  route: any
}

interface menuState {
  searchItem: any,
  data: any[],
  isLoading: boolean
  errorMsg: any,
  //for redux
  menuFoodList: any[],
}

class MenuScreen extends React.Component<menuProps, menuState>{
  constructor(props: menuProps) {
    super(props);
    this.state = {
      searchItem: '',
      data: [],
      isLoading: true,
      errorMsg: '',
      //for Redux
      menuFoodList: [],

    }
  }

  async componentDidMount() {

    await this.props.callMenuDataApi();
    this.setState({
      isLoading: false,
      menuFoodList: this.props.menuData,
    })
  }

  render() {
    const { data, isLoading, errorMsg } = this.state;

    return (
      <View style={homeStyle.container}>
        {errorMsg ? <Text>{errorMsg}</Text> : null}
        {isLoading ? <CustomActivityIndicator animating={isLoading} /> :
          <MenuResultsList navigation={this.props.navigation} filterResults={this.state.menuFoodList} title="Menu" />
        }
      </View>)
  }
}

const mapStateToProps = (state: State) => ({
  erroMessage: getErrorMsg(state),
  menuData: getMenuItemData(state)
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  callMenuDataApi: () => {
    dispatch(callMenuScreenData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);

