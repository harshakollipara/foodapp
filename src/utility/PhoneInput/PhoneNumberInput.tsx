import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import PhoneInput from 'react-native-phone-input';
import {colors} from '../../Theme/Colors';
import {Images} from '../../Assets/Images';
import {sizes} from '../../Assets/Font';
import LocalizedStrings from '../../Utilities/Localization/LocalizedStrings';
import CountryPicker from './CountryPicker';
import {AsYouType} from 'libphonenumber-js';
import {VALIDATIONS} from '../../Constants/Constants';
import {getDefaultCountryCode} from '../../Utilities/Wrapper';
interface props {
  phoneValid: any;
}

interface state {
  valid: any;
  type: any;
  value: any;
  code: any;
  hasFocus: boolean;
  pickerData: any;
}

export default class PhoneNumberInput extends Component<props, state> {
  phone: any;
  myCountryPicker: any;
  constructor(props: props) {
    super(props);
    this.state = {
      valid: true,
      type: '',
      value: '',
      code: '',
      hasFocus: false,
      pickerData: [],
    };
  }

  updateInfo = () => {
    let formattedPhoneNo = new AsYouType(
      this.phone.getISOCode().toUpperCase(),
    ).input(this.phone.getValue());

    this.setState(
      {
        valid: this.phone.isValidNumber(),
        type: this.phone.getNumberType(),
        value: formattedPhoneNo,
        code: this.phone.getCountryCode(),
      },
      () => {
        this.phone.setState({
          formattedNumber: formattedPhoneNo,
          inputValue: formattedPhoneNo,
          value: formattedPhoneNo,
        });
        this.props.phoneValid(this.phone.isValidNumber(), formattedPhoneNo);
      },
    );
  };
  componentDidMount() {
    this.setState({
      pickerData: this.phone.getPickerData(),
    });
  }

  onPressFlag = () => {
    this.myCountryPicker.showModal();
  };

  selectCountry = (iso2: any) => {
    this.setState(
      {
        value: '',
        code: '',
        type: '',
      },
      () => {
        this.resetPhoneInputState(iso2);
        this.phone.selectCountry(iso2);
      },
    );
  };
  resetPhoneInputState = (iso2: any) => {
    this.phone.setState({
      iso2: iso2,
      formattedNumber: '',
      value: null,
      inputValue: '',
    });
  };
  setFocus = (hasFocus: boolean) => {
    this.setState({hasFocus});
  };

  onNumberChange = () => {
    this.setState({
      code: this.updateInfo(),
    });
  };
  render() {
    const {valid} = this.state;
    return (
      <>
        <View style={styles.mainContainer}>
          <Text style={styles.LabelTextStyle}>
            {LocalizedStrings.phoneNumber()}
          </Text>
          <View
            style={
              this.state.hasFocus
                ? valid
                  ? [styles.container, styles.focusedInputStyle]
                  : [styles.container, styles.errorInputStyle]
                : valid
                ? [styles.container, styles.inputStyleColor]
                : [styles.container, styles.errorInputStyle]
            }>
            <PhoneInput
              ref={(ref: any) => {
                this.phone = ref;
              }}
              initialCountry={getDefaultCountryCode().toLowerCase()}
              allowZeroAfterCountryCode={false}
              value={this.state.value}
              onPressFlag={this.onPressFlag}
              style={styles.phoneInputStyle}
              flagStyle={styles.flagStyle}
              pickerBackgroundColor={colors.gray5}
              textStyle={
                valid
                  ? [styles.textStyle, {color: colors.blue}]
                  : [styles.textStyle, {color: colors.damageRed}]
              }
              pickerItemStyle={styles.pickerItemStyle}
              buttonTextStyle={styles.buttonTextStyle}
              onChangePhoneNumber={this.onNumberChange}
              pickerButtonColor="#000000"
              textProps={{
                placeholder: LocalizedStrings.phoneNumber(),
                maxLength: VALIDATIONS.PHONE_NUMBER_LENGTH,
                onFocus: () => {
                  this.setFocus(true);
                },
                onBlur: () => {
                  this.setFocus(false);
                },
              }}
            />
            <CountryPicker
              ref={(ref: any) => {
                this.myCountryPicker = ref;
              }}
              onCountryChange={this.selectCountry}
            />
          </View>
          {!valid ? (
            <View style={styles.errorViewStyle}>
              <View style={styles.imagesView}>
                <Image style={styles.image} source={Images.alert} />
              </View>
              <Text style={styles.errorLabelStyle}>
                {LocalizedStrings.inValidPhoneNumber()}
              </Text>
            </View>
          ) : null}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    backgroundColor: colors.gray7,
    paddingHorizontal: sizes.size10,
    borderRadius: 2,
  },
  LabelTextStyle: {
    fontSize: sizes.size14,
    paddingLeft: sizes.size6,
    marginTop: sizes.size15,
    marginBottom: sizes.size6,
    color: colors.gray3,
  },
  phoneInputStyle: {
    alignItems: 'center',
    height: sizes.size40,
  },
  flagStyle: {
    height: sizes.size24,
    width: '10%',
  },
  textStyle: {
    borderLeftWidth: 1,
    borderColor: colors.gray5,
    height: sizes.size36,
    width: '102%',
    fontSize: sizes.size16,
    flex: 1,
    paddingHorizontal: sizes.size15,
  },
  pickerItemStyle: {
    flexGrow: 1,
  },
  buttonTextStyle: {
    marginHorizontal: sizes.size10,
  },
  errorViewStyle: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginVertical: sizes.size3,
  },
  imagesView: {
    alignSelf: 'center',
    paddingRight: sizes.size4,
  },
  image: {
    height: sizes.size16,
    width: sizes.size16,
  },
  errorLabelStyle: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    fontSize: sizes.size12,
    color: colors.damageRed,
  },
  inputStyleColor: {
    borderColor: colors.gray_5,
  },
  focusedInputStyle: {
    borderColor: colors.blue,
  },
  errorInputStyle: {
    borderColor: colors.damageRed,
  },
});
