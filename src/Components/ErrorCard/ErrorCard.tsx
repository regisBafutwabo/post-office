import { Text } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';

import { Button, Card, Icon } from '@rneui/themed';

import { ErrorCardProps } from './ErrorCard.types';

export default function ErrorCard({ onRefetch }: ErrorCardProps) {
  const tw = useTailwind();

  return (
    <Card containerStyle={tw('bg-white rounded')}>
      <Icon name="heart-broken" type="font-awesome-5" iconStyle={tw('text-red-500')} />
      <Text style={tw('text-red-500 font-poppins-400 self-center')}>
        Oops! Something seems to be broken.
      </Text>
      {onRefetch != null && (
        <Button
          size="md"
          buttonStyle={tw('w-24 self-center mt-2 rounded bg-blue')}
          onPress={onRefetch}
        >
          Try Again
        </Button>
      )}
    </Card>
  );
}
