import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { ActivityIndicatorStyle } from '../commons/components.style';

//****************************//
//* ACTIVITY INDICATOR CLASS *//
//****************************//
interface Props {
    animating: boolean,
}

export default class CustomActivityIndicator extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <View style={ActivityIndicatorStyle.viewStyle}>
                <ActivityIndicator
                    animating={this.props.animating}
                    color='#bc2b78'
                    size="large"
                    style={ActivityIndicatorStyle.activityIndicatorStyle} />
            </View>
        )
    }
}