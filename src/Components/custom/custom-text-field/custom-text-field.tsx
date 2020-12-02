import React, { Component, Ref } from 'react';
import { View, TextInput, Animated, Platform } from 'react-native';
import { sharedStyle } from '../../commons/shared-style';
import { style } from './style';
import { baseTheme } from '../../../styles/baseTheme';
import FormAnimationManager from '../../commons/form-animation-manager';

interface CustomTextFieldProps {
    label: string;
    placeholder: string;
    onChangeText: (value: string) => void;
    value?: string;
    disabled?: boolean;
    autofocus?: boolean;
    handleRef?: (ref: TextInput) => void;
    multiline?: boolean;
    maxLength?: number;
    numeric?: boolean;
    onBlur?: () => void;
}

interface CustomTextFieldState {
    labelOpacity: Animated.Value;
    labelPosition: Animated.Value;
    labelColor: string;
    fieldBorderColor: string;
    value: string;
}


export default class CustomTextField extends Component<CustomTextFieldProps, CustomTextFieldState> {

    constructor(props: CustomTextFieldProps) {
        super(props);
        this.state = {
            labelOpacity: this.props.value && this.props.value.length > 0 ? new Animated.Value(1) : new Animated.Value(0),
            labelPosition: this.props.value && this.props.value.length > 0 ? new Animated.Value(sharedStyle.labelVisible.top) : new Animated.Value(sharedStyle.labelHidden.top),
            labelColor: sharedStyle.labelActive.color,
            fieldBorderColor: sharedStyle.fieldInactive.borderColor,
            value: this.props.value ? this.props.value : ''
        }
    }

    private updateParentState = (value: string) => {
        this.props.onChangeText(value);
        this.setState({ value: value });
    };

    componentDidUpdate(prevProps: CustomTextFieldProps) {
        if (prevProps != null && this.props != null && this.props.value != null && prevProps.value != this.props.value) {
            this.setState({ ...this.state, value: this.props.value });
        }
    }

    render() {

        return (
            <View style={sharedStyle.container}>
                <View style={[sharedStyle.wrapper, { borderColor: this.state.fieldBorderColor }]}>
                    <Animated.Text
                        style={[sharedStyle.label,
                        {
                            opacity: this.state.labelOpacity,
                            top: this.state.labelPosition,
                            color: this.state.labelColor
                        }]}>
                        {this.props.label}
                    </Animated.Text>
                    <TextInput
                        ref={ref => ref && this.props.handleRef && this.props.handleRef(ref)}
                        style={[sharedStyle.textInput, Platform.OS == 'android' && sharedStyle.textInputMargin]}
                        onFocus={() => { FormAnimationManager.activateField(this, this.state.value) }}
                        onBlur={() => { FormAnimationManager.deactivateField(this, this.state.value); this.props.onBlur && this.props.onBlur() }}
                        onChangeText={(value) => { FormAnimationManager.handleLabelTransition(value, this.state.labelOpacity, this.state.labelPosition, this); this.updateParentState(value); }}
                        value={this.state.value || this.props.value}
                        keyboardType={this.props.numeric ? 'phone-pad' : 'default'}
                        defaultValue={this.props.value}
                        editable={!this.props.disabled}
                        placeholder={this.props.placeholder}
                        autoFocus={this.props.autofocus}
                        multiline={this.props.multiline}
                        maxLength={this.props.maxLength}

                    />
                </View>
            </View>
        );
    }
}


