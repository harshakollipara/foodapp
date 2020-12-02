//********************************//
//* COMMON STYLES FOR COMPONENTS *//
//********************************//

import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from './colors';

//*************************//
//* STYLES FOR SEARCHBAR *//
//*************************//

const CommonStyle = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background_Color,
  },
  text: {
    color: COLORS.text_Color,
    fontSize: 25,
  },
});

//*************************//
//* STYLES FOR SEARCHBAR *//
//*************************//

const SearchBarStyle = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    backgroundColor: '#A9A9A9',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconsStyle: {
    fontSize: 35,
    color: '#F0EEEE',
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

//*************************//
//* STYLES FOR SEARCHBAR *//
//*************************//

const ActivityIndicatorStyle = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  activityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
});

//*************************//
//* STYLES FOR RESULTS LIST *//
//*************************//

const resultsListStyle = StyleSheet.create({
  titleStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 15,
  },
});

//*************************//
//* STYLES FOR RESULT DETAILS *//
//*************************//

const resultDetailsStyle = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 200,
    borderRadius: 10,
    marginLeft: 15,
    marginBottom: 5,
  },
  itemNameStyle: {
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 10,
  },
  offerimageStyle: {
    width: 393,
    height: 270,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10,
  },
  homeofferimageStyle: {
    width: 393,
    height: 270,
    marginHorizontal: 5,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    borderWidth: 1,
  },
  viewContainer: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    alignSelf: 'auto',
    alignItems: 'center',
  },
});

//*************************//
//* STYLES FOR RESULT DETAILS of DetailsScreen *//
//*************************//

const resultDetailsScreenStyle = StyleSheet.create({
  imageStyle: {
    width: 150,
    height: 150,
    borderRadius: 4,
    alignSelf: 'center',
  },
  itemNameStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 0.8,
    borderColor: 'gray',
  },
  subTextStyle: {
    color: 'red',
    fontSize: 15,
    textAlign: 'center',
  },
  viewContainer: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    alignSelf: 'auto',
    alignItems: 'center',
  },
});

//*************************//
//* STYLES FOR Display DETAILS *//
//*************************//

const displayScreenStyle = StyleSheet.create({
  dispalyPageImageStyle: {
    margin: 20,
    width: 250,
    height: 200,
    borderRadius: 4,
    alignSelf: 'center',
  },
  itemNameStyle: {
    fontWeight: 'bold',
  },
  addBtn: {
    borderRadius: 30,
    alignItems: 'center',
    width: 200,
    margin: 10,
    marginHorizontal: '25%',
    backgroundColor: 'red',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    padding: 10,
    alignContent: 'center',
  },
  textAlignmet: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
  imageTextStyle: {
    marginHorizontal: 20,
    fontSize: 20,
    fontWeight: 'bold',
    alignContent: 'center',
  },
  customiseViewStyle: {
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 5,
    width: 150,
  },
  counterText: {
    fontSize: 30,
    textAlign: 'center',
  },
  counterIcon: {
    height: 20,
    width: 20,
    marginHorizontal: 20,
  },
  counterButtonsAlignment1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0,
  },
  buttonBottomView: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF9800',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  buttonTextStyle: {
    color: '#fff',
    fontSize: 22,
  },
});

//*************************//
//* STYLES FOR HOME SCREEN *//
//*************************//

const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//*************************//
//* STYLES FOR MENU SCREEN *//
//*************************//

const menuScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  imageStyle: {
    width: 120,
    height: 100,
    borderRadius: 4,
    margin: 10,
    alignSelf: 'center',
    marginRight: 20,
  },
  itemNameStyle: {
    marginLeft: 25,
    marginBottom: 10,
    fontSize: 20,
    alignSelf: 'center',
  },
});

//*************************//
//* STYLES FOR Profile SCREEN *//
//*************************//

const profileScreenStyle = StyleSheet.create({
  imageStyle: {
    width: 150,
    height: 150,
    borderRadius: 120,
    marginBottom: 5,
    marginTop: 15,
    transform: [{scaleY: 1}],
    alignSelf: 'center',
  },
  textStyle: {
    backgroundColor: '#ffffff',
    fontSize: 20,
    height: 50,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'red',
  },
  viewStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
    height: '98%',
    width: '95%',
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
    width: 100,
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
});

//*************************//
//* STYLES FOR ORDERS SCREEN  *//
//*************************//

const ordersStyle = StyleSheet.create({
  productTextStyle: {
    fontSize: 18,
  },
  priceTextStyle: {
    fontSize: 15,
  },
  container: {
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 15,
    backgroundColor: 'white',
  },

  imgStyle: {
    marginLeft: 15,
    marginTop: 5,
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  textTitleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    flexWrap: 'wrap',
  },
  noOrdersContainerStyle: {
    flex: 1,
    alignSelf: 'center',
  },
  noOrdersTextStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
  noOrdersImageStyle: {
    height: 300,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
  },
});

//*************************//
//* STYLES FOR CART SCREEN  *//
//*************************//

const cartStyle = StyleSheet.create({
  textTitleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    flexWrap: 'wrap',
  },
  totalTextStyle: {
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 5,
  },
  bottomViewStyle: {
    margin: 5,
    marginTop: 15,
  },
  textStyle: {
    fontSize: 18,
    marginEnd: 50,
  },
  container: {
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
  },
  buttonStyle: {
    color: 'red',
  },
  imgStyle: {
    padding: 10,
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  emptyCartContainerStyle: {
    flex: 1,
    alignSelf: 'center',
  },
  emptycartTextStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
  emptyCartImageStyle: {
    height: 300,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
  },
});

//*************************//
//* STYLES FOR LOGIN SCREEN *//
//*************************//

const loginScreenStyle = StyleSheet.create({
  buttonStyle: {
    margin: 5,
    marginTop: 15,
    height: 35,
    width: 115,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#aaa',
  },
  page: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  textInput: {
    alignSelf: 'center',
    width: '75%',
    borderBottomWidth: 1,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
});

//*************************//
//* STYLES FOR LOCATION SCREEN *//
//*************************//

const locationStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export {
  CommonStyle,
  SearchBarStyle,
  ActivityIndicatorStyle,
  resultsListStyle,
  resultDetailsStyle,
  displayScreenStyle,
  homeStyle,
  menuScreenStyle,
  profileScreenStyle,
  ordersStyle,
  cartStyle,
  resultDetailsScreenStyle,
  loginScreenStyle,
  locationStyle,
};
