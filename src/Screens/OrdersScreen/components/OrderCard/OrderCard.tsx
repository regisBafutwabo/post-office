import { TouchableOpacity, View } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';

import { useNavigation } from '@react-navigation/native';
import { Card, Icon, Text } from '@rneui/themed';

import { OrdersScreenNavigationProps } from '../../OrdersScreen.types';
import { OrderCardProps } from './OrderCard.types';

export default function OrderCard({ item }: OrderCardProps) {
  const navigation = useNavigation<OrdersScreenNavigationProps>();
  const tw = useTailwind();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Order', { order: item })}>
      <Card
        wrapperStyle={tw('flex-row items-center justify-between')}
        containerStyle={tw('bg-white rounded-lg px-5')}
      >
        <View>
          <View>
            <Icon color="#eb6a7c" name="truck-delivery" type="material-community" />
            <Text style={[tw('font-poppins-400'), { fontSize: 10 }]}>
              {new Date(item.createdAt).toDateString()}
            </Text>
          </View>
        </View>
        <View>
          <Text style={[tw('font-poppins-400 text-gray-400'), { fontSize: 10 }]}>
            {item.carrier} - {item.trackingId}
          </Text>
          <Text style={tw('font-poppins-400 text-gray-500 text-xl')}>
            {item.trackingItems?.customer?.name}
          </Text>
        </View>
        <View style={tw('flex-row items-center')}>
          <Text style={tw('text-pink font-poppins-400')}>
            {item?.trackingItems?.items?.length}x
          </Text>
          <Icon name="box" type="feather" style={tw('ml-2')} />
        </View>
      </Card>
    </TouchableOpacity>
  );
}
