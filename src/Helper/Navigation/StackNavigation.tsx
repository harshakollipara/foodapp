import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../Screens/LoginScreen';
import { TabNavigator } from '../Navigation/TabNavigation';
import DisplayScreen from '../../Screens/DisplayScreen';
import CustomTitle from '../../Components/custom/CustomTitle';
import HeaderRightButton from '../../Components/custom/HeaderRightButton';
import DetailsScreen from '../../Screens/DetailsScreen';
import CartScreen from '../../Screens/CartScreen';
import LocationScreen from '../../Screens/LocationScreen';
import NutritionAndIngredients from '../../Screens/NutritionAndIngredients';

const stack = createStackNavigator();

export function RootNavigator() {
    return (
        <NavigationContainer>
            <stack.Navigator
                initialRouteName="Home">
                <stack.Screen name="Login" component={LoginScreen} />
                <stack.Screen name="Product Details" component={DisplayScreen}
                    options={({ navigation }) => ({
                        headerRight: () => (<HeaderRightButton navigation={navigation} />),
                    })
                    }
                />
                <stack.Screen name="Shopping Cart" component={CartScreen}
                    options={({ navigation }) => ({
                        headerRight: () => (<HeaderRightButton navigation={navigation} />),
                    })
                    }
                />
                <stack.Screen name="Location" component={LocationScreen}
                    options={({ navigation }) => ({
                        headerRight: () => (<HeaderRightButton navigation={navigation} />),
                    })
                    }
                />
                <stack.Screen name="Nutrition" component={NutritionAndIngredients} />
                <stack.Screen
                    name="Details"
                    component={DetailsScreen}
                    options={({ navigation, route }) => ({
                        title: route.params.productName,
                        headerRight: () => (<HeaderRightButton navigation={navigation} />),
                    })} />

                <stack.Screen
                    name="Home"
                    component={TabNavigator}
                    options={({ navigation }) => ({
                        headerTitle: props => <CustomTitle />,
                        headerTitleAlign: 'center',
                        headerRight: () => (<HeaderRightButton navigation={navigation} />),
                    })
                    }
                />
            </stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;


