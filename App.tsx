import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import { TailwindProvider } from 'tailwind-rn';

import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';

import getEnvVars from './env';
import { client } from './src/Apollo';
import RootNavigator from './src/Navigator/RootNavigator';
import utilities from './tailwind.json';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  console.warn('as', getEnvVars().stepzenApiUrl);
  return (
    // @ts-expect-error - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}
