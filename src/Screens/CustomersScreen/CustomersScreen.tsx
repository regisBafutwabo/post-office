import React, {
  useLayoutEffect,
  useState,
} from 'react';

import {
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';

import { useNavigation } from '@react-navigation/native';
import {
  Icon,
  Image,
  Input,
} from '@rneui/themed';

import { CustomerScreenNavigationProp } from './CustomersScreen.type';

export default function CustomersScreen() {
    const tw = useTailwind();
    const navigation = useNavigation<CustomerScreenNavigationProp>();

    const [input, setInput] = useState<string>("");

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false
      })
    }, []);

  return (
    <ScrollView style={{backgroundColor: "#59c1cc"}}>
      <Image source={{uri: "https://links.papareact.com/3jc"}} containerStyle={tw("w-full h-64")} PlaceholderContent={<ActivityIndicator/>} placeholderStyle={tw("self-center")}/>
      <Input 
        placeholder="Search By Customer" 
        inputStyle={tw(' bg-white border-y-0 p-1 font-poppins-400')}  
        leftIcon={<Icon name="search" color="#59c1cc"/>} 
        leftIconContainerStyle={tw('bg-white p-2')} 
        inputContainerStyle={tw('border-y-0 bg-white rounded mt-2' )} 
        containerStyle={tw('rounded items-center')} 
        value={input} 
        onChangeText={setInput} />
    </ScrollView>
  )
}