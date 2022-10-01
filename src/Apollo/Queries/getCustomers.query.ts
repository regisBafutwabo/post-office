import { gql } from '@apollo/client';

export const GET_CUSTOMERS = gql`
    query GetCustomers {
        getCustomers {
            name
            value {
                email
                name
            }
        }
}
`