/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n    query GetCustomers {\n        getCustomers {\n            name\n            value {\n                email\n                name\n            }\n        }\n}\n": types.GetCustomersDocument,
    "\n  query GetOrders {\n    getOrders {\n      name\n      value {\n        Address\n        City\n        Lat\n        Lng\n        carrier\n        createdAt\n        shippingCost\n        trackingId\n        trackingItems {\n          customer_id\n          items {\n            item_id\n            name\n            price\n            quantity\n          }\n          customer {\n            email\n            name\n          }\n        }\n      }\n    }\n  }\n": types.GetOrdersDocument,
};

export function graphql(source: "\n    query GetCustomers {\n        getCustomers {\n            name\n            value {\n                email\n                name\n            }\n        }\n}\n"): (typeof documents)["\n    query GetCustomers {\n        getCustomers {\n            name\n            value {\n                email\n                name\n            }\n        }\n}\n"];
export function graphql(source: "\n  query GetOrders {\n    getOrders {\n      name\n      value {\n        Address\n        City\n        Lat\n        Lng\n        carrier\n        createdAt\n        shippingCost\n        trackingId\n        trackingItems {\n          customer_id\n          items {\n            item_id\n            name\n            price\n            quantity\n          }\n          customer {\n            email\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetOrders {\n    getOrders {\n      name\n      value {\n        Address\n        City\n        Lat\n        Lng\n        carrier\n        createdAt\n        shippingCost\n        trackingId\n        trackingItems {\n          customer_id\n          items {\n            item_id\n            name\n            price\n            quantity\n          }\n          customer {\n            email\n            name\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;