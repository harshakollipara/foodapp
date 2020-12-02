import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

interface AppProps {
  label?: any,
  placeholder: any,
  secureTextEntry?: any,
  onChangeText?: any,
  value?: any,
  autoCorrect?: any,
  error?: any,
  editable?: any,
}

export default class MyTextInput extends Component<AppProps> {
  render() {
    const {
      label,
      placeholder,
      secureTextEntry,
      onChangeText,
      value,
      autoCorrect,
      error,
      editable,
    } = this.props;
    return (

      <View style={styles.containerStyle}>
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          autoCorrect={autoCorrect}
          style={styles.TextInputStyle}
          value={value}
          onChangeText={onChangeText}
          editable={editable}
        />
        {error ? <Text style={styles.errorLabelStyle}>{error}</Text> : null}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 20,
    color: 'black',
    marginLeft: 5,
  },
  containerStyle: {
    marginHorizontal: 15,
    marginVertical: 10,
    width: '90%',
    flexDirection: 'column',
  },
  errorLabelStyle: {
    fontSize: 13,
    color: 'red',
  },
  TextInputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});
