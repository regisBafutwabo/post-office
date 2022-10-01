import { ParamListBase } from '@react-navigation/native';
import { Order } from '../Apollo/generated/graphql';

export interface RootStackParamList extends ParamListBase {
  Main: any;
  MyModal: { userId: string; name: string };
  Order: { order: Order };
}

export interface TabStackParamList extends ParamListBase {
  Customers: undefined;
  Orders: undefined;
}
