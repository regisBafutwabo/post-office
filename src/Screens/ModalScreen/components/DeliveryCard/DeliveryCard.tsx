import { Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useTailwind } from 'tailwind-rn/dist';

import { Divider } from '@rneui/base';
import { Card, Icon } from '@rneui/themed';

import { DeliveryCardProps } from './DeliveryCard.types';

const DeliveryCard = ({ order }: DeliveryCardProps) => {
  const tw = useTailwind();

  return (
    <Card
      containerStyle={[
        tw('rounded-lg my-2 bg-blue'),
        {
          padding: 0,
          paddingTop: 16,
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        },
      ]}
    >
      <View style={tw('items-center p-5 -mt-3')}>
        <Icon name="box" type="font-awesome-5" size={50} color="white" />
      </View>
      <View>
        <Text style={tw('text-center uppercase text-white text-xs font-poppins-700')}>
          {order.carrier} - {order.trackingId}
        </Text>
        <Text style={tw('text-center text-white text-lg font-poppins-700 underline')}>
          Expected Delivery: {new Date().toLocaleDateString()}
        </Text>
      </View>

      <View style={tw('mx-auto pb-5 ')}>
        <Text style={tw('text-center text-white font-poppins-700 mt-5')}>Address</Text>
        <Text style={tw('text-sm text-center font-poppins-400 text-white')}>
          {order.Address}, {order.City}
        </Text>
        <Text style={tw('text-sm text-center italic font-poppins-400 text-white')}>
          ShippingCost: ${order.shippingCost?.toFixed(2)}
        </Text>
      </View>
      <Divider color="white" />
      <View style={tw('p-5')}>
        {order.trackingItems?.items?.map((item) => (
          <View style={tw('flex-row justify-between items-center')} key={item?.item_id}>
            <Text style={tw('text-sm italic text-white font-poppins-400')}>{item?.name}</Text>
            <Text style={tw('text-sm  text-white font-poppins-600')}>x {item?.quantity}</Text>
          </View>
        ))}
      </View>
      <View>
        <MapView
          initialRegion={{
            latitude: order.Lat ?? 0,
            longitude: order.Lng ?? 0,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          zoomEnabled
          zoomControlEnabled
          toolbarEnabled={true}
          rotateEnabled={false}
          style={[tw('w-full'), { height: 200 }]}
        >
          {order.Lat && order.Lng && (
            <Marker coordinate={{ latitude: order.Lat, longitude: order.Lng }} />
          )}
        </MapView>
      </View>
    </Card>
  );
};

export default DeliveryCard;
