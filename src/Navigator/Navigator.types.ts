import { ParamListBase } from '@react-navigation/native';

export interface RootStackParamList extends ParamListBase {
  Main: any;
  MyModal: { userId: string; name: string };
  order: { order: any };
}

export interface TabStackParamList extends ParamListBase {
  Customers: undefined;
  Orders: undefined;
}
