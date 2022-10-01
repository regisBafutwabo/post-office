import { ActivityIndicator } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';

import { Image } from '@rneui/themed';

import { CoverImageProps } from './CoverImage.types';

export default function CoverImage({ uri }: CoverImageProps) {
  const tw = useTailwind();

  return (
    <Image
      source={{ uri }}
      containerStyle={tw('w-full h-64')}
      PlaceholderContent={<ActivityIndicator color="white" />}
      placeholderStyle={tw('self-center')}
    />
  );
}
