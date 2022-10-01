import { gql } from '@apollo/client';

export const GET_ORDERS = gql`
  query GetOrders {
    getOrders {
      name
      value {
        Address
        City
        Lat
        Lng
        carrier
        createdAt
        shippingCost
        trackingId
        trackingItems {
          customer_id
          items {
            item_id
            name
            price
            quantity
          }
          customer {
            email
            name
          }
        }
      }
    }
  }
`