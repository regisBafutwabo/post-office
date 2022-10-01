import { ActivityIndicator } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';

import { Image } from '@rneui/themed';

export default function Cover() {
  const tw = useTailwind();

  return (
    <Image
      source={{ uri: 'https://links.papareact.com/3jc' }}
      containerStyle={tw('w-full h-64')}
      PlaceholderContent={<ActivityIndicator color="white" />}
      placeholderStyle={tw('self-center')}
    />
  );
}
