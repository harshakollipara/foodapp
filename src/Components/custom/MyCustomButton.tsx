import React from 'react';
import { View, Button } from 'react-native';


//***************************//
//* CUSTOM BUTTON COMPONENT *//
//***************************//

interface ButtonProps {
    title: string,
    onPress: any,
    color?: any,
}

interface State { }

export default class MyCustomButton extends React.Component<ButtonProps, State> {
    constructor(props: ButtonProps) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Button
                    title={this.props.title}
                    onPress={this.props.onPress}
                    color={this.props.color}
                />
            </View>
        )
    }
}