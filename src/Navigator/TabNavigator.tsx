import { useLayoutEffect } from 'react';

import { useTailwind } from 'tailwind-rn/dist';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';

import CustomersScreen from '../Screens/CustomersScreen/CustomersScreen';
import OrdersScreen from '../Screens/OrdersScreen/OrdersScreen';
import { TabStackParamList } from './Navigator.types';

const Tab = createBottomTabNavigator<TabStackParamList>();

export default function TabNavigator() {
    const navigation = useNavigation();
    const tw= useTailwind();

    useLayoutEffect(()=>{
    navigation.setOptions({
        headerShown:false
    })
    },[]);

    return (
        <Tab.Navigator screenOptions={({route}) =>({
            tabBarActiveTintColor: "#59c1cc",
            tabBarInactiveTintColor: "gray",
            tabBarIcon: ({focused}) =>  
                <Icon 
                    name={route.name==="Customers" ? "people" : "box"} 
                    color={focused ? "#59c1cc" : "gray"} 
                    type={route.name==="Customers" ? "ionicon": "feather"}
                />
        })}>
            <Tab.Screen name="Customers" component={CustomersScreen} />
            <Tab.Screen name="Orders" component={OrdersScreen}/>
        </Tab.Navigator>
    )
}