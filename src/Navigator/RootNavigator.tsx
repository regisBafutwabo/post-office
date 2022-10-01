import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CustomerOrderHeader from '../Components/CustomerOrderHeader/CustomerOrderHeader';
import ModalScreen from '../Screens/ModalScreen/ModalScreen';
import { RootStackParamList } from './Navigator.types';
import TabNavigator from './TabNavigator';

export default function RootNavigator() {
  const RootStack = createNativeStackNavigator<RootStackParamList>();

  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Group>
      <RootStack.Group
        screenOptions={{
          presentation: 'modal',
        }}
      >
        <RootStack.Screen
          options={{
            headerShown: true,
            header: (props) => (
              <CustomerOrderHeader name={(props?.route?.params as any)?.name || ''} />
            ),
          }}
          name="MyModal"
          component={ModalScreen}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}
