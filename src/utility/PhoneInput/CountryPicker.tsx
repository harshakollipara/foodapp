import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import data from '../../Assets/Countries';
import {sizes, fontFamily} from '../../Assets/Font';
import {colors} from '../../Theme/Colors';
import BorderButton from '../Button/BorderButton';
import LocalizedStrings from '../../Utilities/Localization/LocalizedStrings';
import TextField from '../TextField/Textfield';
interface props {
  defaultCountry?: any;
  disableCountryChange?: any;
  onChangeText?: any;
  countryModalStyle?: any;
  modalContainer?: any;
  modalFlagStyle?: any;
  modalCountryItemCountryNameStyle?: any;
  modalCountryItemCountryDialCodeStyle?: any;
  onCountryChange: any;
}

interface state {
  defaultCountry: any;
  flag: any;
  modalVisible: boolean;
  dialCode: any;
  phoneNumber: string;
  mask: any;
  countryData: any;
}
export default class CountryPicker extends Component<props, state> {
  constructor(props: props) {
    super(props);
    const defaultCountry =
      data.filter(obj => obj.code === props.defaultCountry)[0] ||
      data.filter(obj => obj.code === 'TR')[0];
    this.state = {
      defaultCountry,
      flag: defaultCountry.flag,
      modalVisible: false,
      dialCode: defaultCountry.dialCode,
      phoneNumber: '',
      mask: defaultCountry.mask,
      countryData: data,
    };
  }

  showModal = () =>
    this.props.disableCountryChange
      ? null
      : this.setState({modalVisible: true});

  hideModal = () => {
    this.setState({
      modalVisible: false,
      countryData: data,
    });
  };

  onCountryChange = async (countryName: string) => {
    const countryData = await data;
    try {
      const country = await countryData.filter(
        obj => obj.name === countryName,
      )[0];
      this.setState({
        dialCode: country.dialCode,
        flag: country.flag,
        mask: country.mask,
        phoneNumber: '',
      });
      let iso2 = country.code;
      iso2 = iso2.toLowerCase();
      this.props.onCountryChange(iso2);
      this.hideModal();
    } catch (err) {
      const defaultCountry = this.state.defaultCountry;
      this.setState({
        dialCode: defaultCountry.dialCode,
        flag: defaultCountry.flag,
        mask: defaultCountry.mask,
        phoneNumber: '',
      });
    }
  };

  filterCountries = (value: string) => {
    const countryData = data.filter(
      obj => obj.name.indexOf(value) > -1 || obj.dialCode.indexOf(value) > -1,
    );
    this.setState({countryData});
  };
  listSeperator = () => {
    return (
      <View
        style={{height: 2, backgroundColor: colors.gray_5, width: '100%'}}
      />
    );
  };
  render() {
    const {
      countryModalStyle,
      modalContainer,
      modalFlagStyle,
      modalCountryItemCountryNameStyle,
      modalCountryItemCountryDialCodeStyle,
    } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}>
        <SafeAreaView style={{flex: 1, backgroundColor: colors.blackOpacity2}}>
          <View style={[styles.modalContainer, modalContainer]}>
            <View style={styles.filterInputStyleContainer}>
              <TextField
                onChangeText={this.filterCountries}
                placeholder={LocalizedStrings.search_country()}
                label={LocalizedStrings.search_country()}
              />
            </View>
            <FlatList
              style={{flex: 1}}
              data={this.state.countryData}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={this.listSeperator}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => this.onCountryChange(item.name)}>
                  <View style={[styles.countryModalStyle, countryModalStyle]}>
                    <Text style={[styles.modalFlagStyle, modalFlagStyle]}>
                      {item.flag}
                    </Text>
                    <View style={styles.modalCountryItemContainer}>
                      <Text
                        style={[
                          styles.modalCountryItemCountryNameStyle,
                          modalCountryItemCountryNameStyle,
                        ]}>
                        {item.name}
                      </Text>
                      <Text
                        style={[
                          styles.modalCountryItemCountryDialCodeStyle,
                          modalCountryItemCountryDialCodeStyle,
                        ]}>{`  ${item.dialCode}`}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
            <View
              style={{width: '80%', alignSelf: 'center', paddingVertical: 15}}>
              <BorderButton
                onPress={() => {
                  this.hideModal();
                }}
                backgroundColor={colors.btnBackground}
                title={'Close'}
              />
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalCountryItemCountryDialCodeStyle: {
    fontSize: sizes.size14,
    fontFamily: fontFamily.rubik_normal,
  },
  modalCountryItemCountryNameStyle: {
    flex: 1,
    fontSize: sizes.size14,
    paddingHorizontal: 10,
    fontFamily: fontFamily.rubik_normal,
  },
  modalCountryItemContainer: {
    flex: 1,
    paddingLeft: 5,
    flexDirection: 'row',
  },
  modalFlagStyle: {
    fontSize: 25,
  },
  modalContainer: {
    paddingTop: 15,
    paddingHorizontal: sizes.size10,
    borderRadius: sizes.size10,
    height: '75%',
    backgroundColor: colors.white,
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
  countryModalStyle: {
    flex: 1,
    height: sizes.size44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  filterInputStyleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneInputStyle: {
    flex: 1,
    borderColor: '#0000',
    fontSize: sizes.size16,
    fontFamily: fontFamily.rubik_normal,
  },

  buttonStyle: {
    alignItems: 'center',
    padding: 14,
    marginBottom: 10,
    borderRadius: 3,
  },
});
