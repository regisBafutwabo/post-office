import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';
import { TailwindProvider } from 'tailwind-rn';

import { NavigationContainer } from '@react-navigation/native';

import RootNavigator from './src/Navigator/RootNavigator';
import utilities from './tailwind.json';

export default function App() {
const [fontsLoaded] = useFonts({
  "Poppins-Regular" : require('./assets/fonts/Poppins-Regular.ttf'),
  "Poppins-SemiBold": require('./assets/fonts/Poppins-SemiBold.ttf'),
  "Poppins-Bold": require('./assets/fonts/Poppins-Bold.ttf'),
"Poppins-Thin": require('./assets/fonts/Poppins-Thin.ttf'),
"Poppins-Medium": require('./assets/fonts/Poppins-Medium.ttf'),
"Poppins-Black":require('./assets/fonts/Poppins-Black.ttf')
});

  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
      <RootNavigator/>
      </NavigationContainer>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
