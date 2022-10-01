import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';

import { useNavigation } from '@react-navigation/native';
import { Card, Icon } from '@rneui/themed';

import ErrorCard from '../../../Components/ErrorCard/ErrorCard';
import { useCustomerOrders } from '../../../Hooks/useCustomerOrders';
import { CustomerScreenNavigationProp } from '../CustomersScreen.type';

export default function CustomerCard(props: { email: string; name: string; id: string }) {
  const { name, email, id } = props;
  const { loading, orders, error, refetch } = useCustomerOrders(id);

  const tw = useTailwind();
  const navigation = useNavigation<CustomerScreenNavigationProp>();

  const onRefetch = async () => {
    if (refetch) await refetch();
  };

  return (
    <>
      {error != null ? (
        <ErrorCard onRefetch={onRefetch} />
      ) : (
        <TouchableOpacity
          style={tw(' mx-4 my-2')}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('MyModal', { name, userId: id })}
        >
          <Card containerStyle={tw('p-4 mx-0 my-0 rounded-lg')}>
            <View style={tw('flex-row justify-between')}>
              <View>
                <View>
                  <Text style={tw('font-poppins-600 text-lg')}>{name}</Text>
                </View>
                <View style={tw('flex-row font-poppins-400 mt-2')}>
                  <Text>ID:</Text>
                  <Text style={tw('text-blue pl-1')}>{id}</Text>
                </View>
              </View>
              <View style={tw('flex-row items-end')}>
                <View>
                  {loading ? (
                    <ActivityIndicator color={'#59c1cc'} style={tw('pr-2')} />
                  ) : (
                    <Text style={tw('text-blue pr-2')}>{orders.length}X</Text>
                  )}
                </View>
                <Icon name="box" type="font-awesome-5" size={50} color={'#59c1cc'} />
              </View>
            </View>
            <View style={tw('mt-6')}>
              <Text style={tw('font-poppins-400')}>Email: {email}</Text>
            </View>
          </Card>
        </TouchableOpacity>
      )}
    </>
  );
}
