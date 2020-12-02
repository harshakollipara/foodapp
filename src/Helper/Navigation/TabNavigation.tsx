import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/HomeScreen';
import ProfileScreen from '../../Screens/ProfileScreen';
import OrdersScreen from '../../Screens/OrdersScreen';
import MenuScreen from '../../Screens/MenuScreen';
import OffersScreen from '../../Screens/OffersScreen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: any;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home';
                    } else if (route.name === 'Menu') {
                        iconName = focused ? 'monitor-dashboard' : 'monitor-dashboard';
                    } else if (route.name === 'Orders') {
                        iconName = focused ? 'playlist-edit' : 'playlist-edit';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'bag-personal' : 'bag-personal';
                    } else if (route.name === 'Offers') {
                        iconName = focused ? 'gift-outline' : 'gift-outline';
                    }
                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}

        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Menu" component={MenuScreen} />
            <Tab.Screen name="Offers" component={OffersScreen} />
            <Tab.Screen name="Orders" component={OrdersScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}
