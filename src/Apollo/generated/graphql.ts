/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** `Date` scalar type represents a date. Date is serialized as an RFC 3339 section 5.6 full-date quoted string */
  Date: any;
};

export type Customer = {
  __typename?: 'Customer';
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CustomerList = {
  __typename?: 'CustomerList';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Customer>;
};

export type Items = {
  __typename?: 'Items';
  item_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type Order = {
  __typename?: 'Order';
  Address?: Maybe<Scalars['String']>;
  City?: Maybe<Scalars['String']>;
  Lat?: Maybe<Scalars['Float']>;
  Lng?: Maybe<Scalars['Float']>;
  carrier?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  shippingCost?: Maybe<Scalars['Int']>;
  trackingId?: Maybe<Scalars['String']>;
  trackingItems?: Maybe<TrackingItems>;
};

export type OrderList = {
  __typename?: 'OrderList';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Order>;
};

/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type Query = {
  __typename?: 'Query';
  getCustomerById?: Maybe<Customer>;
  getCustomers?: Maybe<Array<Maybe<CustomerList>>>;
  /** Result typed as JSON since it has fields ["-N6rOvLXK2t39x-Bp0UP", "-N6rQ_YDMNTjq_mCbhZN", "-N6rQsEqX4vt-0cBA336", "-N6rQvnBSkz2kglMvr5H", "-N6rSQz62DlXFPbd32CD"] that are invalid graphql identifiers */
  getOrders?: Maybe<Array<Maybe<OrderList>>>;
  getOrdersById?: Maybe<Order>;
  getTrackingItems?: Maybe<Array<Maybe<TrackingItemsList>>>;
  getTrackingItemsById?: Maybe<TrackingItems>;
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryGetCustomerByIdArgs = {
  id: Scalars['ID'];
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryGetOrdersByIdArgs = {
  id: Scalars['ID'];
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryGetTrackingItemsByIdArgs = {
  id: Scalars['ID'];
};

export type TrackingItems = {
  __typename?: 'TrackingItems';
  customer?: Maybe<Customer>;
  customer_id?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<Items>>>;
};

export type TrackingItemsList = {
  __typename?: 'TrackingItemsList';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<TrackingItems>;
};

export type GetCustomersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomersQuery = { __typename?: 'Query', getCustomers?: Array<{ __typename?: 'CustomerList', name?: string | null, value?: { __typename?: 'Customer', email?: string | null, name?: string | null } | null } | null> | null };

export type GetOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOrdersQuery = { __typename?: 'Query', getOrders?: Array<{ __typename?: 'OrderList', name?: string | null, value?: { __typename?: 'Order', Address?: string | null, City?: string | null, Lat?: number | null, Lng?: number | null, carrier?: string | null, createdAt?: any | null, shippingCost?: number | null, trackingId?: string | null, trackingItems?: { __typename?: 'TrackingItems', customer_id?: string | null, items?: Array<{ __typename?: 'Items', item_id?: number | null, name?: string | null, price?: number | null, quantity?: number | null } | null> | null, customer?: { __typename?: 'Customer', email?: string | null, name?: string | null } | null } | null } | null } | null> | null };


export const GetCustomersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCustomers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCustomers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetCustomersQuery, GetCustomersQueryVariables>;
export const GetOrdersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOrders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getOrders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Address"}},{"kind":"Field","name":{"kind":"Name","value":"City"}},{"kind":"Field","name":{"kind":"Name","value":"Lat"}},{"kind":"Field","name":{"kind":"Name","value":"Lng"}},{"kind":"Field","name":{"kind":"Name","value":"carrier"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"shippingCost"}},{"kind":"Field","name":{"kind":"Name","value":"trackingId"}},{"kind":"Field","name":{"kind":"Name","value":"trackingItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetOrdersQuery, GetOrdersQueryVariables>;