// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { ActivatorTypes } from './sources/activator/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type AcceptOwner = {
  id: Scalars['Bytes'];
  owner: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type AcceptOwner_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type AcceptOwner_orderBy =
  | 'id'
  | 'owner'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type ActivationFailed = {
  id: Scalars['Bytes'];
  near_account: Scalars['String'];
  activationInfo_payer: Scalars['Bytes'];
  activationInfo_price: Scalars['BigInt'];
  activationInfo_publicKey: Scalars['String'];
  activationInfo_status: Scalars['Int'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type ActivationFailed_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  near_account?: InputMaybe<Scalars['String']>;
  near_account_not?: InputMaybe<Scalars['String']>;
  near_account_gt?: InputMaybe<Scalars['String']>;
  near_account_lt?: InputMaybe<Scalars['String']>;
  near_account_gte?: InputMaybe<Scalars['String']>;
  near_account_lte?: InputMaybe<Scalars['String']>;
  near_account_in?: InputMaybe<Array<Scalars['String']>>;
  near_account_not_in?: InputMaybe<Array<Scalars['String']>>;
  near_account_contains?: InputMaybe<Scalars['String']>;
  near_account_contains_nocase?: InputMaybe<Scalars['String']>;
  near_account_not_contains?: InputMaybe<Scalars['String']>;
  near_account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  near_account_starts_with?: InputMaybe<Scalars['String']>;
  near_account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  near_account_not_starts_with?: InputMaybe<Scalars['String']>;
  near_account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  near_account_ends_with?: InputMaybe<Scalars['String']>;
  near_account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  near_account_not_ends_with?: InputMaybe<Scalars['String']>;
  near_account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  activationInfo_payer?: InputMaybe<Scalars['Bytes']>;
  activationInfo_payer_not?: InputMaybe<Scalars['Bytes']>;
  activationInfo_payer_in?: InputMaybe<Array<Scalars['Bytes']>>;
  activationInfo_payer_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  activationInfo_payer_contains?: InputMaybe<Scalars['Bytes']>;
  activationInfo_payer_not_contains?: InputMaybe<Scalars['Bytes']>;
  activationInfo_price?: InputMaybe<Scalars['BigInt']>;
  activationInfo_price_not?: InputMaybe<Scalars['BigInt']>;
  activationInfo_price_gt?: InputMaybe<Scalars['BigInt']>;
  activationInfo_price_lt?: InputMaybe<Scalars['BigInt']>;
  activationInfo_price_gte?: InputMaybe<Scalars['BigInt']>;
  activationInfo_price_lte?: InputMaybe<Scalars['BigInt']>;
  activationInfo_price_in?: InputMaybe<Array<Scalars['BigInt']>>;
  activationInfo_price_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  activationInfo_publicKey?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_not?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_gt?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_lt?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_gte?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_lte?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_in?: InputMaybe<Array<Scalars['String']>>;
  activationInfo_publicKey_not_in?: InputMaybe<Array<Scalars['String']>>;
  activationInfo_publicKey_contains?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_contains_nocase?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_not_contains?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_not_contains_nocase?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_starts_with?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_starts_with_nocase?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_not_starts_with?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_ends_with?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_ends_with_nocase?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_not_ends_with?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  activationInfo_status?: InputMaybe<Scalars['Int']>;
  activationInfo_status_not?: InputMaybe<Scalars['Int']>;
  activationInfo_status_gt?: InputMaybe<Scalars['Int']>;
  activationInfo_status_lt?: InputMaybe<Scalars['Int']>;
  activationInfo_status_gte?: InputMaybe<Scalars['Int']>;
  activationInfo_status_lte?: InputMaybe<Scalars['Int']>;
  activationInfo_status_in?: InputMaybe<Array<Scalars['Int']>>;
  activationInfo_status_not_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ActivationFailed_orderBy =
  | 'id'
  | 'near_account'
  | 'activationInfo_payer'
  | 'activationInfo_price'
  | 'activationInfo_publicKey'
  | 'activationInfo_status'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type ActivationRequest = {
  id: Scalars['Bytes'];
  near_account: Scalars['String'];
  activationInfo_payer: Scalars['Bytes'];
  activationInfo_price: Scalars['BigInt'];
  activationInfo_publicKey: Scalars['String'];
  activationInfo_status: Scalars['Int'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type ActivationRequest_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  near_account?: InputMaybe<Scalars['String']>;
  near_account_not?: InputMaybe<Scalars['String']>;
  near_account_gt?: InputMaybe<Scalars['String']>;
  near_account_lt?: InputMaybe<Scalars['String']>;
  near_account_gte?: InputMaybe<Scalars['String']>;
  near_account_lte?: InputMaybe<Scalars['String']>;
  near_account_in?: InputMaybe<Array<Scalars['String']>>;
  near_account_not_in?: InputMaybe<Array<Scalars['String']>>;
  near_account_contains?: InputMaybe<Scalars['String']>;
  near_account_contains_nocase?: InputMaybe<Scalars['String']>;
  near_account_not_contains?: InputMaybe<Scalars['String']>;
  near_account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  near_account_starts_with?: InputMaybe<Scalars['String']>;
  near_account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  near_account_not_starts_with?: InputMaybe<Scalars['String']>;
  near_account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  near_account_ends_with?: InputMaybe<Scalars['String']>;
  near_account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  near_account_not_ends_with?: InputMaybe<Scalars['String']>;
  near_account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  activationInfo_payer?: InputMaybe<Scalars['Bytes']>;
  activationInfo_payer_not?: InputMaybe<Scalars['Bytes']>;
  activationInfo_payer_in?: InputMaybe<Array<Scalars['Bytes']>>;
  activationInfo_payer_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  activationInfo_payer_contains?: InputMaybe<Scalars['Bytes']>;
  activationInfo_payer_not_contains?: InputMaybe<Scalars['Bytes']>;
  activationInfo_price?: InputMaybe<Scalars['BigInt']>;
  activationInfo_price_not?: InputMaybe<Scalars['BigInt']>;
  activationInfo_price_gt?: InputMaybe<Scalars['BigInt']>;
  activationInfo_price_lt?: InputMaybe<Scalars['BigInt']>;
  activationInfo_price_gte?: InputMaybe<Scalars['BigInt']>;
  activationInfo_price_lte?: InputMaybe<Scalars['BigInt']>;
  activationInfo_price_in?: InputMaybe<Array<Scalars['BigInt']>>;
  activationInfo_price_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  activationInfo_publicKey?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_not?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_gt?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_lt?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_gte?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_lte?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_in?: InputMaybe<Array<Scalars['String']>>;
  activationInfo_publicKey_not_in?: InputMaybe<Array<Scalars['String']>>;
  activationInfo_publicKey_contains?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_contains_nocase?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_not_contains?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_not_contains_nocase?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_starts_with?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_starts_with_nocase?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_not_starts_with?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_ends_with?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_ends_with_nocase?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_not_ends_with?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  activationInfo_status?: InputMaybe<Scalars['Int']>;
  activationInfo_status_not?: InputMaybe<Scalars['Int']>;
  activationInfo_status_gt?: InputMaybe<Scalars['Int']>;
  activationInfo_status_lt?: InputMaybe<Scalars['Int']>;
  activationInfo_status_gte?: InputMaybe<Scalars['Int']>;
  activationInfo_status_lte?: InputMaybe<Scalars['Int']>;
  activationInfo_status_in?: InputMaybe<Array<Scalars['Int']>>;
  activationInfo_status_not_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ActivationRequest_orderBy =
  | 'id'
  | 'near_account'
  | 'activationInfo_payer'
  | 'activationInfo_price'
  | 'activationInfo_publicKey'
  | 'activationInfo_status'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type ActivationSuccess = {
  id: Scalars['Bytes'];
  near_account: Scalars['String'];
  activationInfo_payer: Scalars['Bytes'];
  activationInfo_price: Scalars['BigInt'];
  activationInfo_publicKey: Scalars['String'];
  activationInfo_status: Scalars['Int'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type ActivationSuccess_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  near_account?: InputMaybe<Scalars['String']>;
  near_account_not?: InputMaybe<Scalars['String']>;
  near_account_gt?: InputMaybe<Scalars['String']>;
  near_account_lt?: InputMaybe<Scalars['String']>;
  near_account_gte?: InputMaybe<Scalars['String']>;
  near_account_lte?: InputMaybe<Scalars['String']>;
  near_account_in?: InputMaybe<Array<Scalars['String']>>;
  near_account_not_in?: InputMaybe<Array<Scalars['String']>>;
  near_account_contains?: InputMaybe<Scalars['String']>;
  near_account_contains_nocase?: InputMaybe<Scalars['String']>;
  near_account_not_contains?: InputMaybe<Scalars['String']>;
  near_account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  near_account_starts_with?: InputMaybe<Scalars['String']>;
  near_account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  near_account_not_starts_with?: InputMaybe<Scalars['String']>;
  near_account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  near_account_ends_with?: InputMaybe<Scalars['String']>;
  near_account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  near_account_not_ends_with?: InputMaybe<Scalars['String']>;
  near_account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  activationInfo_payer?: InputMaybe<Scalars['Bytes']>;
  activationInfo_payer_not?: InputMaybe<Scalars['Bytes']>;
  activationInfo_payer_in?: InputMaybe<Array<Scalars['Bytes']>>;
  activationInfo_payer_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  activationInfo_payer_contains?: InputMaybe<Scalars['Bytes']>;
  activationInfo_payer_not_contains?: InputMaybe<Scalars['Bytes']>;
  activationInfo_price?: InputMaybe<Scalars['BigInt']>;
  activationInfo_price_not?: InputMaybe<Scalars['BigInt']>;
  activationInfo_price_gt?: InputMaybe<Scalars['BigInt']>;
  activationInfo_price_lt?: InputMaybe<Scalars['BigInt']>;
  activationInfo_price_gte?: InputMaybe<Scalars['BigInt']>;
  activationInfo_price_lte?: InputMaybe<Scalars['BigInt']>;
  activationInfo_price_in?: InputMaybe<Array<Scalars['BigInt']>>;
  activationInfo_price_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  activationInfo_publicKey?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_not?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_gt?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_lt?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_gte?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_lte?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_in?: InputMaybe<Array<Scalars['String']>>;
  activationInfo_publicKey_not_in?: InputMaybe<Array<Scalars['String']>>;
  activationInfo_publicKey_contains?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_contains_nocase?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_not_contains?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_not_contains_nocase?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_starts_with?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_starts_with_nocase?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_not_starts_with?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_ends_with?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_ends_with_nocase?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_not_ends_with?: InputMaybe<Scalars['String']>;
  activationInfo_publicKey_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  activationInfo_status?: InputMaybe<Scalars['Int']>;
  activationInfo_status_not?: InputMaybe<Scalars['Int']>;
  activationInfo_status_gt?: InputMaybe<Scalars['Int']>;
  activationInfo_status_lt?: InputMaybe<Scalars['Int']>;
  activationInfo_status_gte?: InputMaybe<Scalars['Int']>;
  activationInfo_status_lte?: InputMaybe<Scalars['Int']>;
  activationInfo_status_in?: InputMaybe<Array<Scalars['Int']>>;
  activationInfo_status_not_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ActivationSuccess_orderBy =
  | 'id'
  | 'near_account'
  | 'activationInfo_payer'
  | 'activationInfo_price'
  | 'activationInfo_publicKey'
  | 'activationInfo_status'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  acceptOwner?: Maybe<AcceptOwner>;
  acceptOwners: Array<AcceptOwner>;
  activationFailed?: Maybe<ActivationFailed>;
  activationFaileds: Array<ActivationFailed>;
  activationRequest?: Maybe<ActivationRequest>;
  activationRequests: Array<ActivationRequest>;
  activationSuccess?: Maybe<ActivationSuccess>;
  activationSuccesses: Array<ActivationSuccess>;
  refund?: Maybe<Refund>;
  refunds: Array<Refund>;
  setPaused?: Maybe<SetPaused>;
  setPauseds: Array<SetPaused>;
  setPrice?: Maybe<SetPrice>;
  setPrices: Array<SetPrice>;
  transferOwner?: Maybe<TransferOwner>;
  transferOwners: Array<TransferOwner>;
  withdrawl?: Maybe<Withdrawl>;
  withdrawls: Array<Withdrawl>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryacceptOwnerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryacceptOwnersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AcceptOwner_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AcceptOwner_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryactivationFailedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryactivationFailedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ActivationFailed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ActivationFailed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryactivationRequestArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryactivationRequestsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ActivationRequest_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ActivationRequest_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryactivationSuccessArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryactivationSuccessesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ActivationSuccess_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ActivationSuccess_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrefundArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrefundsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Refund_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Refund_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysetPausedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysetPausedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SetPaused_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SetPaused_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysetPriceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysetPricesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SetPrice_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SetPrice_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferOwnerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferOwnersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferOwner_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferOwner_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywithdrawlArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywithdrawlsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdrawl_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdrawl_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Refund = {
  id: Scalars['Bytes'];
  near_account: Scalars['String'];
  to: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type Refund_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  near_account?: InputMaybe<Scalars['String']>;
  near_account_not?: InputMaybe<Scalars['String']>;
  near_account_gt?: InputMaybe<Scalars['String']>;
  near_account_lt?: InputMaybe<Scalars['String']>;
  near_account_gte?: InputMaybe<Scalars['String']>;
  near_account_lte?: InputMaybe<Scalars['String']>;
  near_account_in?: InputMaybe<Array<Scalars['String']>>;
  near_account_not_in?: InputMaybe<Array<Scalars['String']>>;
  near_account_contains?: InputMaybe<Scalars['String']>;
  near_account_contains_nocase?: InputMaybe<Scalars['String']>;
  near_account_not_contains?: InputMaybe<Scalars['String']>;
  near_account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  near_account_starts_with?: InputMaybe<Scalars['String']>;
  near_account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  near_account_not_starts_with?: InputMaybe<Scalars['String']>;
  near_account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  near_account_ends_with?: InputMaybe<Scalars['String']>;
  near_account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  near_account_not_ends_with?: InputMaybe<Scalars['String']>;
  near_account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Refund_orderBy =
  | 'id'
  | 'near_account'
  | 'to'
  | 'amount'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type SetPaused = {
  id: Scalars['Bytes'];
  paused: Scalars['Boolean'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type SetPaused_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  paused?: InputMaybe<Scalars['Boolean']>;
  paused_not?: InputMaybe<Scalars['Boolean']>;
  paused_in?: InputMaybe<Array<Scalars['Boolean']>>;
  paused_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type SetPaused_orderBy =
  | 'id'
  | 'paused'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type SetPrice = {
  id: Scalars['Bytes'];
  price: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type SetPrice_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  price?: InputMaybe<Scalars['BigInt']>;
  price_not?: InputMaybe<Scalars['BigInt']>;
  price_gt?: InputMaybe<Scalars['BigInt']>;
  price_lt?: InputMaybe<Scalars['BigInt']>;
  price_gte?: InputMaybe<Scalars['BigInt']>;
  price_lte?: InputMaybe<Scalars['BigInt']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']>>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type SetPrice_orderBy =
  | 'id'
  | 'price'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Subscription = {
  acceptOwner?: Maybe<AcceptOwner>;
  acceptOwners: Array<AcceptOwner>;
  activationFailed?: Maybe<ActivationFailed>;
  activationFaileds: Array<ActivationFailed>;
  activationRequest?: Maybe<ActivationRequest>;
  activationRequests: Array<ActivationRequest>;
  activationSuccess?: Maybe<ActivationSuccess>;
  activationSuccesses: Array<ActivationSuccess>;
  refund?: Maybe<Refund>;
  refunds: Array<Refund>;
  setPaused?: Maybe<SetPaused>;
  setPauseds: Array<SetPaused>;
  setPrice?: Maybe<SetPrice>;
  setPrices: Array<SetPrice>;
  transferOwner?: Maybe<TransferOwner>;
  transferOwners: Array<TransferOwner>;
  withdrawl?: Maybe<Withdrawl>;
  withdrawls: Array<Withdrawl>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionacceptOwnerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionacceptOwnersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AcceptOwner_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AcceptOwner_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionactivationFailedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionactivationFailedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ActivationFailed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ActivationFailed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionactivationRequestArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionactivationRequestsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ActivationRequest_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ActivationRequest_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionactivationSuccessArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionactivationSuccessesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ActivationSuccess_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ActivationSuccess_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrefundArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrefundsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Refund_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Refund_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsetPausedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsetPausedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SetPaused_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SetPaused_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsetPriceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsetPricesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SetPrice_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SetPrice_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferOwnerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferOwnersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferOwner_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferOwner_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwithdrawlArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwithdrawlsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdrawl_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdrawl_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type TransferOwner = {
  id: Scalars['Bytes'];
  to: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type TransferOwner_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type TransferOwner_orderBy =
  | 'id'
  | 'to'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Withdrawl = {
  id: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  to: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type Withdrawl_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Withdrawl_orderBy =
  | 'id'
  | 'amount'
  | 'to'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AcceptOwner: ResolverTypeWrapper<AcceptOwner>;
  AcceptOwner_filter: AcceptOwner_filter;
  AcceptOwner_orderBy: AcceptOwner_orderBy;
  ActivationFailed: ResolverTypeWrapper<ActivationFailed>;
  ActivationFailed_filter: ActivationFailed_filter;
  ActivationFailed_orderBy: ActivationFailed_orderBy;
  ActivationRequest: ResolverTypeWrapper<ActivationRequest>;
  ActivationRequest_filter: ActivationRequest_filter;
  ActivationRequest_orderBy: ActivationRequest_orderBy;
  ActivationSuccess: ResolverTypeWrapper<ActivationSuccess>;
  ActivationSuccess_filter: ActivationSuccess_filter;
  ActivationSuccess_orderBy: ActivationSuccess_orderBy;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  OrderDirection: OrderDirection;
  Query: ResolverTypeWrapper<{}>;
  Refund: ResolverTypeWrapper<Refund>;
  Refund_filter: Refund_filter;
  Refund_orderBy: Refund_orderBy;
  SetPaused: ResolverTypeWrapper<SetPaused>;
  SetPaused_filter: SetPaused_filter;
  SetPaused_orderBy: SetPaused_orderBy;
  SetPrice: ResolverTypeWrapper<SetPrice>;
  SetPrice_filter: SetPrice_filter;
  SetPrice_orderBy: SetPrice_orderBy;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  TransferOwner: ResolverTypeWrapper<TransferOwner>;
  TransferOwner_filter: TransferOwner_filter;
  TransferOwner_orderBy: TransferOwner_orderBy;
  Withdrawl: ResolverTypeWrapper<Withdrawl>;
  Withdrawl_filter: Withdrawl_filter;
  Withdrawl_orderBy: Withdrawl_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AcceptOwner: AcceptOwner;
  AcceptOwner_filter: AcceptOwner_filter;
  ActivationFailed: ActivationFailed;
  ActivationFailed_filter: ActivationFailed_filter;
  ActivationRequest: ActivationRequest;
  ActivationRequest_filter: ActivationRequest_filter;
  ActivationSuccess: ActivationSuccess;
  ActivationSuccess_filter: ActivationSuccess_filter;
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Query: {};
  Refund: Refund;
  Refund_filter: Refund_filter;
  SetPaused: SetPaused;
  SetPaused_filter: SetPaused_filter;
  SetPrice: SetPrice;
  SetPrice_filter: SetPrice_filter;
  String: Scalars['String'];
  Subscription: {};
  TransferOwner: TransferOwner;
  TransferOwner_filter: TransferOwner_filter;
  Withdrawl: Withdrawl;
  Withdrawl_filter: Withdrawl_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = {};

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AcceptOwnerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AcceptOwner'] = ResolversParentTypes['AcceptOwner']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ActivationFailedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ActivationFailed'] = ResolversParentTypes['ActivationFailed']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  near_account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  activationInfo_payer?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  activationInfo_price?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  activationInfo_publicKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  activationInfo_status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ActivationRequestResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ActivationRequest'] = ResolversParentTypes['ActivationRequest']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  near_account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  activationInfo_payer?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  activationInfo_price?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  activationInfo_publicKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  activationInfo_status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ActivationSuccessResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ActivationSuccess'] = ResolversParentTypes['ActivationSuccess']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  near_account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  activationInfo_payer?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  activationInfo_price?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  activationInfo_publicKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  activationInfo_status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  acceptOwner?: Resolver<Maybe<ResolversTypes['AcceptOwner']>, ParentType, ContextType, RequireFields<QueryacceptOwnerArgs, 'id' | 'subgraphError'>>;
  acceptOwners?: Resolver<Array<ResolversTypes['AcceptOwner']>, ParentType, ContextType, RequireFields<QueryacceptOwnersArgs, 'skip' | 'first' | 'subgraphError'>>;
  activationFailed?: Resolver<Maybe<ResolversTypes['ActivationFailed']>, ParentType, ContextType, RequireFields<QueryactivationFailedArgs, 'id' | 'subgraphError'>>;
  activationFaileds?: Resolver<Array<ResolversTypes['ActivationFailed']>, ParentType, ContextType, RequireFields<QueryactivationFailedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  activationRequest?: Resolver<Maybe<ResolversTypes['ActivationRequest']>, ParentType, ContextType, RequireFields<QueryactivationRequestArgs, 'id' | 'subgraphError'>>;
  activationRequests?: Resolver<Array<ResolversTypes['ActivationRequest']>, ParentType, ContextType, RequireFields<QueryactivationRequestsArgs, 'skip' | 'first' | 'subgraphError'>>;
  activationSuccess?: Resolver<Maybe<ResolversTypes['ActivationSuccess']>, ParentType, ContextType, RequireFields<QueryactivationSuccessArgs, 'id' | 'subgraphError'>>;
  activationSuccesses?: Resolver<Array<ResolversTypes['ActivationSuccess']>, ParentType, ContextType, RequireFields<QueryactivationSuccessesArgs, 'skip' | 'first' | 'subgraphError'>>;
  refund?: Resolver<Maybe<ResolversTypes['Refund']>, ParentType, ContextType, RequireFields<QueryrefundArgs, 'id' | 'subgraphError'>>;
  refunds?: Resolver<Array<ResolversTypes['Refund']>, ParentType, ContextType, RequireFields<QueryrefundsArgs, 'skip' | 'first' | 'subgraphError'>>;
  setPaused?: Resolver<Maybe<ResolversTypes['SetPaused']>, ParentType, ContextType, RequireFields<QuerysetPausedArgs, 'id' | 'subgraphError'>>;
  setPauseds?: Resolver<Array<ResolversTypes['SetPaused']>, ParentType, ContextType, RequireFields<QuerysetPausedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  setPrice?: Resolver<Maybe<ResolversTypes['SetPrice']>, ParentType, ContextType, RequireFields<QuerysetPriceArgs, 'id' | 'subgraphError'>>;
  setPrices?: Resolver<Array<ResolversTypes['SetPrice']>, ParentType, ContextType, RequireFields<QuerysetPricesArgs, 'skip' | 'first' | 'subgraphError'>>;
  transferOwner?: Resolver<Maybe<ResolversTypes['TransferOwner']>, ParentType, ContextType, RequireFields<QuerytransferOwnerArgs, 'id' | 'subgraphError'>>;
  transferOwners?: Resolver<Array<ResolversTypes['TransferOwner']>, ParentType, ContextType, RequireFields<QuerytransferOwnersArgs, 'skip' | 'first' | 'subgraphError'>>;
  withdrawl?: Resolver<Maybe<ResolversTypes['Withdrawl']>, ParentType, ContextType, RequireFields<QuerywithdrawlArgs, 'id' | 'subgraphError'>>;
  withdrawls?: Resolver<Array<ResolversTypes['Withdrawl']>, ParentType, ContextType, RequireFields<QuerywithdrawlsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type RefundResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Refund'] = ResolversParentTypes['Refund']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  near_account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SetPausedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SetPaused'] = ResolversParentTypes['SetPaused']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  paused?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SetPriceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SetPrice'] = ResolversParentTypes['SetPrice']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  acceptOwner?: SubscriptionResolver<Maybe<ResolversTypes['AcceptOwner']>, "acceptOwner", ParentType, ContextType, RequireFields<SubscriptionacceptOwnerArgs, 'id' | 'subgraphError'>>;
  acceptOwners?: SubscriptionResolver<Array<ResolversTypes['AcceptOwner']>, "acceptOwners", ParentType, ContextType, RequireFields<SubscriptionacceptOwnersArgs, 'skip' | 'first' | 'subgraphError'>>;
  activationFailed?: SubscriptionResolver<Maybe<ResolversTypes['ActivationFailed']>, "activationFailed", ParentType, ContextType, RequireFields<SubscriptionactivationFailedArgs, 'id' | 'subgraphError'>>;
  activationFaileds?: SubscriptionResolver<Array<ResolversTypes['ActivationFailed']>, "activationFaileds", ParentType, ContextType, RequireFields<SubscriptionactivationFailedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  activationRequest?: SubscriptionResolver<Maybe<ResolversTypes['ActivationRequest']>, "activationRequest", ParentType, ContextType, RequireFields<SubscriptionactivationRequestArgs, 'id' | 'subgraphError'>>;
  activationRequests?: SubscriptionResolver<Array<ResolversTypes['ActivationRequest']>, "activationRequests", ParentType, ContextType, RequireFields<SubscriptionactivationRequestsArgs, 'skip' | 'first' | 'subgraphError'>>;
  activationSuccess?: SubscriptionResolver<Maybe<ResolversTypes['ActivationSuccess']>, "activationSuccess", ParentType, ContextType, RequireFields<SubscriptionactivationSuccessArgs, 'id' | 'subgraphError'>>;
  activationSuccesses?: SubscriptionResolver<Array<ResolversTypes['ActivationSuccess']>, "activationSuccesses", ParentType, ContextType, RequireFields<SubscriptionactivationSuccessesArgs, 'skip' | 'first' | 'subgraphError'>>;
  refund?: SubscriptionResolver<Maybe<ResolversTypes['Refund']>, "refund", ParentType, ContextType, RequireFields<SubscriptionrefundArgs, 'id' | 'subgraphError'>>;
  refunds?: SubscriptionResolver<Array<ResolversTypes['Refund']>, "refunds", ParentType, ContextType, RequireFields<SubscriptionrefundsArgs, 'skip' | 'first' | 'subgraphError'>>;
  setPaused?: SubscriptionResolver<Maybe<ResolversTypes['SetPaused']>, "setPaused", ParentType, ContextType, RequireFields<SubscriptionsetPausedArgs, 'id' | 'subgraphError'>>;
  setPauseds?: SubscriptionResolver<Array<ResolversTypes['SetPaused']>, "setPauseds", ParentType, ContextType, RequireFields<SubscriptionsetPausedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  setPrice?: SubscriptionResolver<Maybe<ResolversTypes['SetPrice']>, "setPrice", ParentType, ContextType, RequireFields<SubscriptionsetPriceArgs, 'id' | 'subgraphError'>>;
  setPrices?: SubscriptionResolver<Array<ResolversTypes['SetPrice']>, "setPrices", ParentType, ContextType, RequireFields<SubscriptionsetPricesArgs, 'skip' | 'first' | 'subgraphError'>>;
  transferOwner?: SubscriptionResolver<Maybe<ResolversTypes['TransferOwner']>, "transferOwner", ParentType, ContextType, RequireFields<SubscriptiontransferOwnerArgs, 'id' | 'subgraphError'>>;
  transferOwners?: SubscriptionResolver<Array<ResolversTypes['TransferOwner']>, "transferOwners", ParentType, ContextType, RequireFields<SubscriptiontransferOwnersArgs, 'skip' | 'first' | 'subgraphError'>>;
  withdrawl?: SubscriptionResolver<Maybe<ResolversTypes['Withdrawl']>, "withdrawl", ParentType, ContextType, RequireFields<SubscriptionwithdrawlArgs, 'id' | 'subgraphError'>>;
  withdrawls?: SubscriptionResolver<Array<ResolversTypes['Withdrawl']>, "withdrawls", ParentType, ContextType, RequireFields<SubscriptionwithdrawlsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export type TransferOwnerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TransferOwner'] = ResolversParentTypes['TransferOwner']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WithdrawlResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Withdrawl'] = ResolversParentTypes['Withdrawl']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  AcceptOwner?: AcceptOwnerResolvers<ContextType>;
  ActivationFailed?: ActivationFailedResolvers<ContextType>;
  ActivationRequest?: ActivationRequestResolvers<ContextType>;
  ActivationSuccess?: ActivationSuccessResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  Refund?: RefundResolvers<ContextType>;
  SetPaused?: SetPausedResolvers<ContextType>;
  SetPrice?: SetPriceResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  TransferOwner?: TransferOwnerResolvers<ContextType>;
  Withdrawl?: WithdrawlResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = ActivatorTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch (relativeModuleId) {
    case ".graphclient/sources/activator/introspectionSchema":
      return import("./sources/activator/introspectionSchema") as T;

    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
  const pubsub = new PubSub();
  const sourcesStore = rootStore.child('sources');
  const logger = new DefaultLogger("GraphClient");
  const cache = new (MeshCache as any)({
    ...({} as any),
    importFn,
    store: rootStore.child('cache'),
    pubsub,
    logger,
  } as any)

  const sources: MeshResolvedSource[] = [];
  const transforms: MeshTransform[] = [];
  const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
  const activatorTransforms = [];
  const additionalTypeDefs = [] as any[];
  const activatorHandler = new GraphqlHandler({
    name: "activator",
    config: { "endpoint": "https://api.thegraph.com/subgraphs/name/gaozhengxin/near-activator-on-polygon" },
    baseDir,
    cache,
    pubsub,
    store: sourcesStore.child("activator"),
    logger: logger.child("activator"),
    importFn,
  });
  sources[0] = {
    name: 'activator',
    handler: activatorHandler,
    transforms: activatorTransforms
  }
  const additionalResolvers = [] as any[]
  const merger = new (BareMerger as any)({
    cache,
    pubsub,
    logger: logger.child('bareMerger'),
    store: rootStore.child('bareMerger')
  })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [

      ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler(): MeshHTTPHandler<MeshContext> {
  return createMeshHTTPHandler<MeshContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));