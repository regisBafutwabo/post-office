import {
  useEffect,
  useState,
} from 'react';

import { useQuery } from '@apollo/client';

import {
  Order,
  OrderList,
} from '../Apollo/generated/graphql';
import { GET_ORDERS } from '../Apollo/Queries/getOrders.query';

export const useOrders = () =>{
    const {data, loading, error} = useQuery(GET_ORDERS);
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(()=>{
        if(!data) return;
        const ordersData:Order[] = data.getOrders.map(({value}: OrderList) =>({
            carrier: value?.carrier,
            createdAt: value?.createdAt,
            shippingCost: value?.shippingCost,
            trackingId: value?.trackingId,
            trackingItems: value?.trackingItems,
            Address: value?.Address,
            City: value?.City,
            Lat: value?.Lat,
            Lng: value?.Lng
        }) );

        setOrders(ordersData);
    },[data]);

    return({loading, error, orders})
}