import {
  useEffect,
  useState,
} from 'react';

import { useQuery } from '@apollo/client';

import {
  Customer,
  CustomerList,
} from '../Apollo/generated/graphql';
import { GET_CUSTOMERS } from '../Apollo/Queries/getCustomers.query';

export default function useCustomers() {
    const {loading, data, error} = useQuery(GET_CUSTOMERS);

    const [customers, setCustomers] = useState<Customer[]>([]);

    useEffect(()=>{
        if(!data) return;
        const customersData:Customer[] = data.getCustomers.map(({value}: CustomerList)=>({
            email: value?.email,
            name: value?.name
        }));

        setCustomers(customersData);
    },[]);
    
  return ({loading, error, customers})
}