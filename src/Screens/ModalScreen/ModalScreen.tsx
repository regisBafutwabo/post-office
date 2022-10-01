import { ActivityIndicator, FlatList } from 'react-native';

import { useRoute } from '@react-navigation/native';

import ErrorCard from '../../Components/ErrorCard/ErrorCard';
import { useCustomerOrders } from '../../Hooks/useCustomerOrders';
import DeliveryCard from './components/DeliveryCard/DeliveryCard';
import { ModalScrenRouteProp } from './ModalScreen.types';

export default function ModalScreen() {
  const {
    params: { userId },
  } = useRoute<ModalScrenRouteProp>();

  const { loading, error, orders } = useCustomerOrders(userId);

  return (
    <>
      {loading && <ActivityIndicator color="#59c1cc" />}
      {error != null ? (
        <ErrorCard />
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(order) => order.trackingId ?? ''}
          renderItem={({ item: order }) => <DeliveryCard order={order} />}
        />
      )}
    </>
  );
}
