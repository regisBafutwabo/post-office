import { useLayoutEffect } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';

import CustomersScreen from '../Screens/CustomersScreen/CustomersScreen';
import OrdersScreen from '../Screens/OrdersScreen/OrdersScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#59c1cc',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ focused }) => (
          <Icon
            name={route.name === 'Customers' ? 'people' : 'box'}
            color={focused ? '#59c1cc' : 'gray'}
            type={route.name === 'Customers' ? 'ionicon' : 'font-awesome-5'}
          />
        ),
      })}
    >
      <Tab.Screen name="Customers" component={CustomersScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
    </Tab.Navigator>
  );
}
