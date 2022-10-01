/* eslint-disable @typescript-eslint/no-misused-promises */
import { useLayoutEffect, useState } from 'react';

import { ActivityIndicator, RefreshControl, ScrollView, View } from 'react-native';

import { useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';

import { GetCustomersQuery, GetCustomersQueryVariables } from '../../Apollo/generated/graphql';
import { GET_CUSTOMERS } from '../../Apollo/Queries/getCustomers.query';
import ErrorCard from '../../Components/ErrorCard/ErrorCard';
import Cover from './components/Cover';
import CustomerCard from './components/CustomerCard';
import Search from './components/Search';
import { CustomerScreenNavigationProp } from './CustomersScreen.type';

export default function CustomersScreen() {
  const navigation = useNavigation<CustomerScreenNavigationProp>();

  const { loading, data, error, refetch } = useQuery<GetCustomersQuery, GetCustomersQueryVariables>(
    GET_CUSTOMERS
  );

  const [input, setInput] = useState<string>('');

  const onRefetch = async () => {
    await refetch();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={{ backgroundColor: '#59c1cc', height: '100%' }}>
      {loading ? (
        <ActivityIndicator color={'white'} />
      ) : (
        <>
          <Cover />
          <Search input={input} setInput={setInput} />
          {error != null ? (
            <ErrorCard onRefetch={onRefetch} />
          ) : (
            <ScrollView
              style={{ backgroundColor: '#59c1cc' }}
              refreshControl={
                <RefreshControl
                  refreshing={loading}
                  onRefresh={onRefetch}
                  colors={['#59c1cc']}
                  tintColor="white"
                />
              }
            >
              {data?.getCustomers
                ?.filter((customer) =>
                  customer?.value?.name?.toLowerCase()?.includes(input.toLowerCase())
                )
                .map((customer) => (
                  <CustomerCard
                    key={customer?.name}
                    id={customer?.name ?? ''}
                    email={customer?.value?.email ?? ''}
                    name={customer?.value?.name ?? ''}
                  />
                ))}
            </ScrollView>
          )}
        </>
      )}
    </View>
  );
}
