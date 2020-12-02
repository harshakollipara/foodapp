import React from 'react';
import { View, Text, Alert, Image } from 'react-native';
import MyCustomButton from '../Components/custom/MyCustomButton';
import { loginScreenStyle } from '../Components/commons/components.style';
import CustomTextField from '../Components/custom/custom-text-field/custom-text-field';
import CustomSubmitButton from '../Components/custom/custom-submit-button/custom-submit-button';
import { connect } from 'react-redux';
import { State } from '../ReactRedux/state';
import { setUserLoggedInStatus } from '../ReactRedux/HomeScreenState/action';

interface LoginProps {
  setUserLoggedInStatus: (userStatus: Boolean) => void;
}

interface LoginState {
  phone: any, confirmResult: any, verificationCode: string, userId: string, CurrentUser: any, isLoggedIn: boolean,
}
class LoginScreen extends React.Component<LoginProps, LoginState>{
  props: any;

  constructor(props: LoginProps) {
    super(props);
    this.state = ({
      phone: '',
      confirmResult: null,
      verificationCode: '',
      userId: '',
      CurrentUser: null,
      isLoggedIn: false,
    })
  }

  validatePhoneNumber() {
    var regexp = /^[0-9]\d{9}$/
    return regexp.test(this.state.phone)
  }

  handleSendCode = async () => {
    // Request to send OTP    
    if (this.validatePhoneNumber()) {
      this.setState({ confirmResult: true })
    } else {
      Alert.alert('Invalid Phone Number', 'Please add your 10 digit mobile number');
    }
  }

  handleVerifyCode = () => {
    // Request for OTP verification

    if (this.state.verificationCode.length == 4) {
      Alert.alert('Log In Successfull', 'You are successfully logged in');
      this.props.setUserLoggedIn(true);
      this.props.navigation.navigate('Home')
    } else {
      Alert.alert('Please enter 4 digit OTP')
    }


  }

  renderConfirmationCodeView() {
    return (
      <View>
        <View style={{ borderRadius: 10, margin: 5, marginTop: 15 }}>
          <View style={{ marginHorizontal: 50, marginLeft: 10 }}>
            <CustomTextField label=''
              placeholder='Verification code'
              value={this.state.verificationCode}
              onChangeText={verificationCode => {
                this.setState({ verificationCode })
              }}
              numeric={true}
              maxLength={4}

            />
          </View>

        </View>

        <View style={{ alignSelf: "center", marginHorizontal: 45 }}>
          <Text style={{ color: '#757474', alignSelf: "center" }}>
            Please Enter 4 digit OTP...
        </Text>
        </View>
        <View>
          <CustomSubmitButton
            text={'Verify Code'}
            onPress={this.handleVerifyCode}
          />
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={loginScreenStyle.page}>

        <View style={{ margin: 5, marginBottom: 15 }}>
          <Image style={{
            width: 130, height: 110,
            alignItems: "flex-start",
            alignSelf: "center",
            marginTop: 20
          }}
            source={require('../Components/images/burger_2.png')} />
        </View>

        <View style={{ marginLeft: 5, }}>
          <Text style={{
            color: '#d1bd0a', fontSize: 25, fontWeight: "bold",
            alignSelf: "center"
          }}>WELCOME</Text>
        </View>

        <View style={{ marginTop: 20, alignSelf: "center", }}>
          <Text style={{ color: '#757474' }}>
            Signin with mobile number</Text>
        </View>

        {this.state.confirmResult ?
          this.renderConfirmationCodeView() :
          <View >
            <CustomTextField label='Mobile Number'
              placeholder='Please Enter Mobile Number'

              value={this.state.phone}
              onChangeText={phone => {
                this.setState({ phone })
              }}
              numeric={false}
              maxLength={15}
            />

            <View style={{ alignSelf: "center", marginHorizontal: 45 }}>
              <Text style={{ color: '#757474', alignSelf: "center" }}>
                After entering 10 digit mobile number please sign in
              </Text>
            </View>

            <CustomSubmitButton
              text={'Sign In'}
              onPress={this.handleSendCode}
            />
            <View>

            </View>
          </View>
        }
      </View>
    )
  }
}

const mapStateToProps = (state: State) => ({

});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  setUserLoggedIn: (status: boolean) => {
    dispatch(setUserLoggedInStatus(status));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
