import React, { Component, Fragment } from 'react';
import { style } from './style';
import { baseTheme } from '../../../styles/baseTheme';
import { Animated, TouchableOpacity, ActivityIndicator, Text, Keyboard, Alert } from 'react-native';

interface CustomSubmitButtonProps {
    text: string;
    onPress: () => void;
    disabled?: boolean;
    loading?: boolean;
    outline?: boolean;
}

interface CustomSubmitButtonState {
    borderRadius: Animated.Value,
    wrapperPadding: Animated.Value
}

export default class CustomSubmitButton extends Component<CustomSubmitButtonProps, CustomSubmitButtonState> {
    keyboardDidShowListener: any;
    keyboardDidHideListener: any;

    constructor(props: CustomSubmitButtonProps) {
        super(props);
        this.state = {
            borderRadius: new Animated.Value(baseTheme.dimensions.borderRadiuses.buttons),
           wrapperPadding: new Animated.Value(baseTheme.metrics.paddings.containers),
           
        }
    }

    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            this._keyboardDidShow.bind(this),
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this._keyboardDidHide.bind(this),
        );
    }
    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();

    }


    _keyboardDidShow() {
        Animated.timing(
            this.state.borderRadius,
            {
                useNativeDriver:false,
                toValue: 0,
                duration: 400,
            },
        ).start();
        Animated.timing(
            this.state.wrapperPadding,
            {
                useNativeDriver:false,
                toValue: 0,
                duration: 200,
            },
        ).start();
    }
    _keyboardDidHide() {
        Animated.timing(
            this.state.borderRadius,
            {
                useNativeDriver:false,
                toValue: baseTheme.dimensions.borderRadiuses.buttons,
                duration: 400,
                
            },
        ).start();
        Animated.timing(
            this.state.wrapperPadding,
            {
                useNativeDriver:false,
                toValue: baseTheme.metrics.paddings.containers,
                duration: 200,
            },
        ).start();
    }


    render() {
        return (
            <Animated.View style={[style.container, { padding: this.state.wrapperPadding }]}>
                <Animated.View style={[style.wrapper, { borderRadius: this.state.borderRadius }]}>
                    <TouchableOpacity
                        onPress={this.props.onPress}
                        style={[style.button, this.props.outline && style.outline, this.props.disabled && style.disabled]}
                        disabled={this.props.disabled}
                    >
                        <Fragment>
                            {!this.props.loading && (
                                <Text style={[style.text, this.props.outline && style.textOutline, this.props.loading && style.hidden]}>{this.props.text}</Text>
                            )}
                            {this.props.loading && (
                                <ActivityIndicator style={!this.props.loading && style.hidden} color={baseTheme.colors.primary.sugar_cane} />
                            )}

                        </Fragment>
                    </TouchableOpacity>
                </Animated.View>
            </Animated.View>
        );
    }
}
