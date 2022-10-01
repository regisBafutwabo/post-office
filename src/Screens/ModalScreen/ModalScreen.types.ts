import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList, TabStackParamList } from '../../Navigator/Navigator.types';

export type ModalScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, ''>,
  NativeStackNavigationProp<RootStackParamList, 'MyModal'>
>;

export type ModalScrenRouteProp = RouteProp<RootStackParamList, 'MyModal'>;
