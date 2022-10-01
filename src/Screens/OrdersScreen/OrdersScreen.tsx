import { SafeAreaView, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';

export default function OrdersScreen() {
  const tw = useTailwind();

  return (
    <SafeAreaView>
      <Text style={tw('text-blue-600')}>OrdersScreen</Text>
    </SafeAreaView>
  );
}
