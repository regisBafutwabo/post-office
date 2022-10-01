import { useLayoutEffect } from 'react';

import { View } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import DeliveryCard from '../../Components/DeliveryCard/DeliveryCard';
import { RootStackParamList } from '../../Navigator/Navigator.types';
import { OrdersScreenNavigationProps } from '../OrdersScreen/OrdersScreen.types';

export default function OrderScreen() {
  const tw = useTailwind();

  const { params } = useRoute<RouteProp<RootStackParamList, 'Order'>>();
  const navigation = useNavigation<OrdersScreenNavigationProps>();
  const { order } = params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: order.trackingItems?.customer?.name ?? '',
      headerBackTitle: 'Orders',
      headerTitleStyle: tw('font-poppins-600 text-black'),
      headerBackTitleStyle: tw('font-poppins-400 text-pink'),
      headerTintColor: '#eb6a7c',
    });
  }, []);

  return (
    <View>
      <DeliveryCard order={order} fullWidth />
    </View>
  );
}
