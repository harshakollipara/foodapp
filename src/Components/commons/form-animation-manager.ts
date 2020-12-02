import { Animated } from 'react-native';
import { AnimatedValue } from 'react-navigation';
import { State } from '@jest/types/build/Circus';
import { Component } from 'react';
import { sharedStyle } from './shared-style';
import { baseTheme } from '../../styles/baseTheme';

const FormAnimationManager = {

    handleLabelTransition: (value: string, labelOpacity: AnimatedValue, labelPosition: AnimatedValue, field: Component) => {
        if (value.length > 0) {
            Animated.timing(
                labelOpacity,
                {
                    useNativeDriver:false,
                    toValue: 1,
                    duration: 250,
                },
            ).start();
            Animated.timing(
                labelPosition,
                {
                    useNativeDriver:false,
                    toValue: sharedStyle.labelVisible.top,
                    duration: 250,
                },
            ).start();
            field.setState({
                labelColor: sharedStyle.labelActive.color,
            });
        } else {
            Animated.timing(
                labelOpacity,
                {
                    useNativeDriver:false,
                    toValue: 0,
                    duration: 250,
                },
            ).start();
            Animated.timing(
                labelPosition,
                {
                    useNativeDriver:false,
                    toValue: sharedStyle.labelHidden.top,
                    duration: 250,
                },
            ).start();
            field.setState({
                labelColor: sharedStyle.labelHidden.color,
            });
        }
    },


    handlelAccordionTransition: (contentOpacity: AnimatedValue, open: boolean, accordion: Component) => {
        if (!open) {
            Animated.timing(
                contentOpacity,
                {
                    useNativeDriver:false,
                    toValue: 1,
                    duration: 800,
                },
            ).start();
            accordion.setState({ open: true });
        } else {
            Animated.timing(
                contentOpacity,
                {
                    useNativeDriver:false,
                    toValue: 0,
                    duration: 100,
                },
            ).start();
            accordion.setState({ open: false });
        }
    },

    handleDatePickerTransition: (labelOpacity: AnimatedValue, labelPosition: AnimatedValue, field: Component) => {
        Animated.timing(
            labelOpacity,
            {
                useNativeDriver:false,
                toValue: 1,
                duration: 250,
            },
        ).start();
        Animated.timing(
            labelPosition,
            {
                useNativeDriver:false,
                toValue: sharedStyle.labelVisible.top,
                duration: 250,
            },
        ).start();
        field.setState({
            fieldBorderColor: sharedStyle.fieldActive.borderColor,
        });
    },

    handlePickerTransition: (labelOpacity: AnimatedValue, labelPosition: AnimatedValue) => {
        Animated.timing(
            labelOpacity,
            {
                useNativeDriver:false,
                toValue: 1,
                duration: 250,
            },
        ).start();
        Animated.timing(
            labelPosition,
            {
                useNativeDriver:false,
                toValue: sharedStyle.labelVisible.top,
                duration: 250,
            },
        ).start();
    },

    activateField: (field: Component, value: string) => {
        field.setState({
            labelColor: sharedStyle.labelActive.color,
            fieldBorderColor: sharedStyle.fieldActive.borderColor,
        });
    },

    deactivateField: (field: Component, value: string) => {
        field.setState({
            labelColor: sharedStyle.label.color,
            fieldBorderColor: sharedStyle.fieldInactive.borderColor,
        });
    },

};

export default FormAnimationManager;
