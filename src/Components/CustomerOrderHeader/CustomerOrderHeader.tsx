import { Text, TouchableOpacity, View } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';

import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';

import { ModalScreenNavigationProp } from '../../Screens/ModalScreen/ModalScreen.types';

export default function CustomerOrderHeader({ name }: { name: string }) {
  const navigation = useNavigation<ModalScreenNavigationProp>();
  const tw = useTailwind();

  return (
    <View style={tw('bg-white')}>
      <TouchableOpacity
        style={tw('absolute right-5 top-6 z-10')}
        onPress={() => navigation.goBack()}
      >
        <Icon name="closecircle" type="antdesign" color={'#59c1cc'} />
      </TouchableOpacity>
      <View style={[tw('items-center border-b py-6'), { borderColor: '#59c1cc' }]}>
        <Text style={tw('font-poppins-700 text-blue text-xl')}>{name}</Text>
        <Text style={tw('font-poppins-400')}>deliveries</Text>
      </View>
    </View>
  );
}
