// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace ActivatorTypes {
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

  export type QuerySdk = {
      /** null **/
  acceptOwner: InContextSdkMethod<Query['acceptOwner'], QueryacceptOwnerArgs, MeshContext>,
  /** null **/
  acceptOwners: InContextSdkMethod<Query['acceptOwners'], QueryacceptOwnersArgs, MeshContext>,
  /** null **/
  activationFailed: InContextSdkMethod<Query['activationFailed'], QueryactivationFailedArgs, MeshContext>,
  /** null **/
  activationFaileds: InContextSdkMethod<Query['activationFaileds'], QueryactivationFailedsArgs, MeshContext>,
  /** null **/
  activationRequest: InContextSdkMethod<Query['activationRequest'], QueryactivationRequestArgs, MeshContext>,
  /** null **/
  activationRequests: InContextSdkMethod<Query['activationRequests'], QueryactivationRequestsArgs, MeshContext>,
  /** null **/
  activationSuccess: InContextSdkMethod<Query['activationSuccess'], QueryactivationSuccessArgs, MeshContext>,
  /** null **/
  activationSuccesses: InContextSdkMethod<Query['activationSuccesses'], QueryactivationSuccessesArgs, MeshContext>,
  /** null **/
  refund: InContextSdkMethod<Query['refund'], QueryrefundArgs, MeshContext>,
  /** null **/
  refunds: InContextSdkMethod<Query['refunds'], QueryrefundsArgs, MeshContext>,
  /** null **/
  setPaused: InContextSdkMethod<Query['setPaused'], QuerysetPausedArgs, MeshContext>,
  /** null **/
  setPauseds: InContextSdkMethod<Query['setPauseds'], QuerysetPausedsArgs, MeshContext>,
  /** null **/
  setPrice: InContextSdkMethod<Query['setPrice'], QuerysetPriceArgs, MeshContext>,
  /** null **/
  setPrices: InContextSdkMethod<Query['setPrices'], QuerysetPricesArgs, MeshContext>,
  /** null **/
  transferOwner: InContextSdkMethod<Query['transferOwner'], QuerytransferOwnerArgs, MeshContext>,
  /** null **/
  transferOwners: InContextSdkMethod<Query['transferOwners'], QuerytransferOwnersArgs, MeshContext>,
  /** null **/
  withdrawl: InContextSdkMethod<Query['withdrawl'], QuerywithdrawlArgs, MeshContext>,
  /** null **/
  withdrawls: InContextSdkMethod<Query['withdrawls'], QuerywithdrawlsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  acceptOwner: InContextSdkMethod<Subscription['acceptOwner'], SubscriptionacceptOwnerArgs, MeshContext>,
  /** null **/
  acceptOwners: InContextSdkMethod<Subscription['acceptOwners'], SubscriptionacceptOwnersArgs, MeshContext>,
  /** null **/
  activationFailed: InContextSdkMethod<Subscription['activationFailed'], SubscriptionactivationFailedArgs, MeshContext>,
  /** null **/
  activationFaileds: InContextSdkMethod<Subscription['activationFaileds'], SubscriptionactivationFailedsArgs, MeshContext>,
  /** null **/
  activationRequest: InContextSdkMethod<Subscription['activationRequest'], SubscriptionactivationRequestArgs, MeshContext>,
  /** null **/
  activationRequests: InContextSdkMethod<Subscription['activationRequests'], SubscriptionactivationRequestsArgs, MeshContext>,
  /** null **/
  activationSuccess: InContextSdkMethod<Subscription['activationSuccess'], SubscriptionactivationSuccessArgs, MeshContext>,
  /** null **/
  activationSuccesses: InContextSdkMethod<Subscription['activationSuccesses'], SubscriptionactivationSuccessesArgs, MeshContext>,
  /** null **/
  refund: InContextSdkMethod<Subscription['refund'], SubscriptionrefundArgs, MeshContext>,
  /** null **/
  refunds: InContextSdkMethod<Subscription['refunds'], SubscriptionrefundsArgs, MeshContext>,
  /** null **/
  setPaused: InContextSdkMethod<Subscription['setPaused'], SubscriptionsetPausedArgs, MeshContext>,
  /** null **/
  setPauseds: InContextSdkMethod<Subscription['setPauseds'], SubscriptionsetPausedsArgs, MeshContext>,
  /** null **/
  setPrice: InContextSdkMethod<Subscription['setPrice'], SubscriptionsetPriceArgs, MeshContext>,
  /** null **/
  setPrices: InContextSdkMethod<Subscription['setPrices'], SubscriptionsetPricesArgs, MeshContext>,
  /** null **/
  transferOwner: InContextSdkMethod<Subscription['transferOwner'], SubscriptiontransferOwnerArgs, MeshContext>,
  /** null **/
  transferOwners: InContextSdkMethod<Subscription['transferOwners'], SubscriptiontransferOwnersArgs, MeshContext>,
  /** null **/
  withdrawl: InContextSdkMethod<Subscription['withdrawl'], SubscriptionwithdrawlArgs, MeshContext>,
  /** null **/
  withdrawls: InContextSdkMethod<Subscription['withdrawls'], SubscriptionwithdrawlsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["activator"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
