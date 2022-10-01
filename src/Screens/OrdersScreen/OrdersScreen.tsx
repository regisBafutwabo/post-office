import { useLayoutEffect, useMemo, useState } from 'react';

import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';

import { useNavigation } from '@react-navigation/native';
import { Button, Icon } from '@rneui/themed';

import { Order } from '../../Apollo/generated/graphql';
import CoverImage from '../../Components/CoverImage/CoverImage';
import ErrorCard from '../../Components/ErrorCard/ErrorCard';
import { useOrders } from '../../Hooks/useOrders';
import OrderCard from './components/OrderCard/OrderCard';
import { OrdersScreenNavigationProps } from './OrdersScreen.types';

export default function OrdersScreen() {
  const navigation = useNavigation<OrdersScreenNavigationProps>();
  const tw = useTailwind();

  const { loading, error, orders, refetch } = useOrders();

  const [ascending, setAscending] = useState(false);

  const sortedOrders = useMemo(
    () =>
      orders
        ? orders?.sort((a: Order, b: Order) => {
            if (ascending) {
              return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
            } else {
              return new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1;
            }
          })
        : [],
    [orders, ascending]
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      tabBarLabel: ({ focused, color }) => (
        <Text
          style={[tw('font-poppins-400'), { color: focused ? '#eb6a7c' : color, fontSize: 10 }]}
        >
          Orders
        </Text>
      ),
      tabBarIcon: ({ focused, color }) => (
        <Icon name={'box'} color={focused ? '#eb6a7c' : color} type={'font-awesome-5'} />
      ),
    });
  }, []);

  return (
    <View style={tw('bg-pink h-full')}>
      <CoverImage uri="https://links.papareact.com/m51" />
      <View style={tw('rounded')}>
        <Button
          titleStyle={[tw('font-poppins-400'), { color: 'gray' }]}
          color="pink"
          onPress={() => setAscending(!ascending)}
          style={tw('py-2 px-5 rounded-lg')}
        >{`Showing: ${ascending ? 'Oldest First' : 'Most Recent First'}`}</Button>
      </View>
      <ScrollView>
        {loading && <ActivityIndicator color="white" />}
        {error && <ErrorCard onRefetch={async () => await refetch()} />}
        {sortedOrders.map((order) => (
          <OrderCard key={order.trackingId} item={order} />
        ))}
      </ScrollView>
    </View>
  );
}
