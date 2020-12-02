import React from 'react';
import { View, Image, Alert, ScrollView, Button, Text } from 'react-native';
import { profileScreenStyle } from '../Components/commons/components.style';
import UtilityManager from '../utility/UtilityManager';
import { ErrorType } from '../utility/Validation/errorMessages';
import MyTextInput from '../Components/custom/MyTextInput';
import MyCustomButton from '../Components/custom/MyCustomButton';
import CustomSubmitButton from '../Components/custom/custom-submit-button/custom-submit-button';
import { connect } from 'react-redux';
import { getUserLoginStatus } from '../ReactRedux/HomeScreenState/selector';
import { State } from '../ReactRedux/state';

interface ProfileProps {
  navigation: any;
  onPress: any;
  name: boolean;
  userName: boolean;
  email: boolean;
  password: boolean;
  phoneNumber: boolean;
  userLoggedInStatus: boolean;
}

interface ProfileState {
  showContent: boolean;
  name: boolean;
  userName: boolean;
  email: boolean;
  password: boolean;
  phoneNumber: boolean;
  editable: boolean;
  hidePassword: boolean;
  buttonName: boolean;
}

class ProfileScreen extends React.Component<ProfileProps, ProfileState> {
  constructor(props: ProfileProps) {
    super(props);
    this.state = {
      showContent: false,
      name: false,
      userName: false,
      email: false,
      password: false,
      phoneNumber: false,
      editable: false,
      hidePassword: true,
      buttonName: false,
    };
  }

  doEditProfile() {
    this.setState({ editable: true, buttonName: true });
  }

  getAllValidations() {
    if (this.state.name && this.state.userName && this.state.email) {
      this.setState({ editable: false, buttonName: false });
      Alert.alert('Your Profile is Updated');
    } else {
      Alert.alert('Fill all the required fields', '');
    }
  }

  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center' }}>
        {this.props.userLoggedInStatus ?
          <ScrollView >
            <View style={profileScreenStyle.viewStyle}>
              <Image
                source={require('../Components/images/profile.jpg')}
                resizeMode={'contain'}
                style={profileScreenStyle.imageStyle}
              />

              <MyTextInput
                label={'Name'}
                placeholder={'Name'}
                editable={this.state.editable}
                onChangeText={(newName: any) => {
                  this.setState({
                    name: UtilityManager.uiValidationInstance.validateName(
                      newName,
                    ),
                  });
                }}
                error={this.state.name ? null : ErrorType.userName}
              />
              <MyTextInput
                label={'Phone number'}
                placeholder={'Phone Number'}
                editable={false}
                value="9999999999"
              />

              <MyTextInput
                label={'Email'}
                placeholder={'Email'}
                editable={this.state.editable}
                onChangeText={(newEmail: any) => {
                  this.setState({
                    email: UtilityManager.uiValidationInstance.validateEmail(
                      newEmail,
                    ),
                  });
                }}
                error={this.state.email ? null : ErrorType.email}
              />
              <MyTextInput
                label={'Username'}
                placeholder={'Username'}
                editable={this.state.editable}
                onChangeText={(newUsername: any) => {
                  this.setState({
                    userName: UtilityManager.uiValidationInstance.validateUserName(
                      newUsername,
                    ),
                  });
                }}
                error={this.state.userName ? null : ErrorType.userName}
              />

              <View style={profileScreenStyle.buttonStyle}></View>
              {this.state.buttonName ? (
                <MyCustomButton
                  title="Save Profile"
                  onPress={() => {
                    this.getAllValidations();
                  }}
                />
              ) : (
                  <MyCustomButton
                    title="Edit Profile"
                    onPress={() => {
                      this.doEditProfile();
                    }}
                  />
                )}
            </View>
          </ScrollView>
          : <View>
            <Text style={{ fontWeight: 'bold', alignSelf: 'center', fontSize: 20 }}> Please log in to View & Edit profile </Text>
            <CustomSubmitButton
              text={'Login'}
              onPress={() => this.props.navigation.navigate('Login')}
            />
          </View>
        }
      </View>
    );
  }
}

const mapStateToProps = (state: State) => ({
  userLoggedInStatus: getUserLoginStatus(state),
});

export default connect(mapStateToProps, null)(ProfileScreen);
