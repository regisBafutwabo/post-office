import { Dispatch, SetStateAction } from 'react';

import debounce from 'lodash/debounce';
import { useTailwind } from 'tailwind-rn/dist';

import { Icon, Input } from '@rneui/themed';

export default function Search(props: {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}) {
  const { input, setInput } = props;
  const tw = useTailwind();

  const onChangeText = (value: string) => {
    setInput(value);
    debounce(() => console.warn(input), 1000);
  };

  return (
    <Input
      placeholder="Search By Customer"
      inputStyle={tw(' bg-white border-y-0 p-1 font-poppins-400')}
      leftIcon={<Icon name="search" color="#59c1cc" />}
      leftIconContainerStyle={tw('bg-white p-2')}
      inputContainerStyle={tw('border-y-0 bg-white rounded mt-2')}
      containerStyle={tw('rounded items-center')}
      value={input}
      onChangeText={onChangeText}
    />
  );
}
