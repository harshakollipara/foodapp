import React from 'react';
import { View, Text } from 'react-native';
import CustomActivityIndicator from '../Components/custom/CustomActivityIndicator';
import { LocationResultsList } from '../Components/custom/ResultsList';
import { locationStyle } from '../Components/commons/components.style';

//all imports necessary for redux 
import { connect } from 'react-redux';
import { callLocationData } from '../ReactRedux/LocationScreenState/action';
import { getErrorMsg, getLocationData } from '../ReactRedux/LocationScreenState/selector';
import { State } from '../ReactRedux/state';


interface locationScreenProps {
    itemAsProps: any,
    title: any,
    filterResults: any,
    navigation: any,
    erroMessage: string,
    locationReduxData: any[],
    callLocationListApi: () => void,
}

interface locationScreenState {
    isLoading: boolean
    errorMsg: any,
    locationRedux: any[],

}

class LocationScreen extends React.Component<locationScreenProps, locationScreenState>{
    constructor(props: locationScreenProps) {
        super(props);
        this.state = {
            isLoading: true,
            errorMsg: '',
            locationRedux: [],
        }
    }

    async componentDidMount() {
        await this.props.callLocationListApi();
        this.setState({
            isLoading: false,
            locationRedux: this.props.locationReduxData
        })
    }

    render() {
        const { isLoading, errorMsg } = this.state;
        return (
            <View style={locationStyle.container}>

                {errorMsg ? <Text>{errorMsg}</Text> : null}
                {isLoading ? <CustomActivityIndicator animating={isLoading} /> :
                    <LocationResultsList horizantalScroll={false} navigation={this.props.navigation} filterResults={this.state.locationRedux} title="Current Offers For You" />
                }
            </View>
        )
    }

}

const mapStateToProps = (state: State) => ({
    erroMessage: getErrorMsg(state),
    locationReduxData: getLocationData(state),

});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    callLocationListApi: () => {
        dispatch(callLocationData());
    },

});

export default connect(mapStateToProps, mapDispatchToProps)(LocationScreen);

