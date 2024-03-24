/**
 * GQty AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */
import { SchemaUnionsKey } from 'gqty'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: string
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any
}

export interface Chatroom_createdAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Chatroom_id_operator {
  equals?: InputMaybe<Scalars['Int']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Int']>
  greater_than_equal?: InputMaybe<Scalars['Int']>
  less_than?: InputMaybe<Scalars['Int']>
  less_than_equal?: InputMaybe<Scalars['Int']>
  not_equals?: InputMaybe<Scalars['Int']>
}

export interface Chatroom_lastMessage_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  equals?: InputMaybe<Scalars['JSON']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  not_equals?: InputMaybe<Scalars['JSON']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
}

export interface Chatroom_updatedAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Chatroom_user1LastViewed_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Chatroom_user1_id_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  equals?: InputMaybe<Scalars['JSON']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  not_equals?: InputMaybe<Scalars['JSON']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
}

export interface Chatroom_user2LastViewed_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Chatroom_user2_id_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  equals?: InputMaybe<Scalars['JSON']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  not_equals?: InputMaybe<Scalars['JSON']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
}

export interface Chatroom_where {
  AND?: InputMaybe<Array<InputMaybe<Chatroom_where_and>>>
  OR?: InputMaybe<Array<InputMaybe<Chatroom_where_or>>>
  createdAt?: InputMaybe<Chatroom_createdAt_operator>
  id?: InputMaybe<Chatroom_id_operator>
  lastMessage?: InputMaybe<Chatroom_lastMessage_operator>
  updatedAt?: InputMaybe<Chatroom_updatedAt_operator>
  user1LastViewed?: InputMaybe<Chatroom_user1LastViewed_operator>
  user1_id?: InputMaybe<Chatroom_user1_id_operator>
  user2LastViewed?: InputMaybe<Chatroom_user2LastViewed_operator>
  user2_id?: InputMaybe<Chatroom_user2_id_operator>
}

export interface Chatroom_where_and {
  createdAt?: InputMaybe<Chatroom_createdAt_operator>
  id?: InputMaybe<Chatroom_id_operator>
  lastMessage?: InputMaybe<Chatroom_lastMessage_operator>
  updatedAt?: InputMaybe<Chatroom_updatedAt_operator>
  user1LastViewed?: InputMaybe<Chatroom_user1LastViewed_operator>
  user1_id?: InputMaybe<Chatroom_user1_id_operator>
  user2LastViewed?: InputMaybe<Chatroom_user2LastViewed_operator>
  user2_id?: InputMaybe<Chatroom_user2_id_operator>
}

export interface Chatroom_where_or {
  createdAt?: InputMaybe<Chatroom_createdAt_operator>
  id?: InputMaybe<Chatroom_id_operator>
  lastMessage?: InputMaybe<Chatroom_lastMessage_operator>
  updatedAt?: InputMaybe<Chatroom_updatedAt_operator>
  user1LastViewed?: InputMaybe<Chatroom_user1LastViewed_operator>
  user1_id?: InputMaybe<Chatroom_user1_id_operator>
  user2LastViewed?: InputMaybe<Chatroom_user2LastViewed_operator>
  user2_id?: InputMaybe<Chatroom_user2_id_operator>
}

export enum ItemUpdate__status_MutationInput {
  draft = 'draft',
  published = 'published',
}

export enum ItemUpdate_periodType_MutationInput {
  days = 'days',
  months = 'months',
  weeks = 'weeks',
  years = 'years',
}

export enum ItemUpdate_rentingStatus_MutationInput {
  available = 'available',
  unavailable = 'unavailable',
}

export enum ItemVersion_Version__status {
  draft = 'draft',
  published = 'published',
}

export enum ItemVersion_Version_periodType {
  days = 'days',
  months = 'months',
  weeks = 'weeks',
  years = 'years',
}

export enum ItemVersion_Version_rentingStatus {
  available = 'available',
  unavailable = 'unavailable',
}

export enum Item__status {
  draft = 'draft',
  published = 'published',
}

export enum Item__status_Input {
  draft = 'draft',
  published = 'published',
}

export enum Item__status_MutationInput {
  draft = 'draft',
  published = 'published',
}

export interface Item__status_operator {
  all?: InputMaybe<Array<InputMaybe<Item__status_Input>>>
  equals?: InputMaybe<Item__status_Input>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Item__status_Input>>>
  not_equals?: InputMaybe<Item__status_Input>
  not_in?: InputMaybe<Array<InputMaybe<Item__status_Input>>>
}

export interface Item_availableAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Item_createdAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Item_createdBy_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  equals?: InputMaybe<Scalars['JSON']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  not_equals?: InputMaybe<Scalars['JSON']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
}

export interface Item_description_operator {
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
}

export interface Item_end_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Item_id_operator {
  equals?: InputMaybe<Scalars['Int']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Int']>
  greater_than_equal?: InputMaybe<Scalars['Int']>
  less_than?: InputMaybe<Scalars['Int']>
  less_than_equal?: InputMaybe<Scalars['Int']>
  not_equals?: InputMaybe<Scalars['Int']>
}

export interface Item_image_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  equals?: InputMaybe<Scalars['JSON']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  not_equals?: InputMaybe<Scalars['JSON']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
}

export interface Item_name_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export enum Item_periodType {
  days = 'days',
  months = 'months',
  weeks = 'weeks',
  years = 'years',
}

export enum Item_periodType_Input {
  days = 'days',
  months = 'months',
  weeks = 'weeks',
  years = 'years',
}

export enum Item_periodType_MutationInput {
  days = 'days',
  months = 'months',
  weeks = 'weeks',
  years = 'years',
}

export interface Item_periodType_operator {
  all?: InputMaybe<Array<InputMaybe<Item_periodType_Input>>>
  equals?: InputMaybe<Item_periodType_Input>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Item_periodType_Input>>>
  not_equals?: InputMaybe<Item_periodType_Input>
  not_in?: InputMaybe<Array<InputMaybe<Item_periodType_Input>>>
}

export interface Item_period_operator {
  equals?: InputMaybe<Scalars['Float']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Float']>
  greater_than_equal?: InputMaybe<Scalars['Float']>
  less_than?: InputMaybe<Scalars['Float']>
  less_than_equal?: InputMaybe<Scalars['Float']>
  not_equals?: InputMaybe<Scalars['Float']>
}

export interface Item_price_operator {
  equals?: InputMaybe<Scalars['Float']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Float']>
  greater_than_equal?: InputMaybe<Scalars['Float']>
  less_than?: InputMaybe<Scalars['Float']>
  less_than_equal?: InputMaybe<Scalars['Float']>
  not_equals?: InputMaybe<Scalars['Float']>
}

export interface Item_rating_operator {
  equals?: InputMaybe<Scalars['Float']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Float']>
  greater_than_equal?: InputMaybe<Scalars['Float']>
  less_than?: InputMaybe<Scalars['Float']>
  less_than_equal?: InputMaybe<Scalars['Float']>
  not_equals?: InputMaybe<Scalars['Float']>
}

export enum Item_rentingStatus {
  available = 'available',
  unavailable = 'unavailable',
}

export enum Item_rentingStatus_Input {
  available = 'available',
  unavailable = 'unavailable',
}

export enum Item_rentingStatus_MutationInput {
  available = 'available',
  unavailable = 'unavailable',
}

export interface Item_rentingStatus_operator {
  all?: InputMaybe<Array<InputMaybe<Item_rentingStatus_Input>>>
  equals?: InputMaybe<Item_rentingStatus_Input>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Item_rentingStatus_Input>>>
  not_equals?: InputMaybe<Item_rentingStatus_Input>
  not_in?: InputMaybe<Array<InputMaybe<Item_rentingStatus_Input>>>
}

export interface Item_start_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Item_tags_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  equals?: InputMaybe<Scalars['JSON']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  not_equals?: InputMaybe<Scalars['JSON']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
}

export interface Item_updatedAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Item_where {
  AND?: InputMaybe<Array<InputMaybe<Item_where_and>>>
  OR?: InputMaybe<Array<InputMaybe<Item_where_or>>>
  _status?: InputMaybe<Item__status_operator>
  availableAt?: InputMaybe<Item_availableAt_operator>
  createdAt?: InputMaybe<Item_createdAt_operator>
  createdBy?: InputMaybe<Item_createdBy_operator>
  description?: InputMaybe<Item_description_operator>
  end?: InputMaybe<Item_end_operator>
  id?: InputMaybe<Item_id_operator>
  image?: InputMaybe<Item_image_operator>
  name?: InputMaybe<Item_name_operator>
  period?: InputMaybe<Item_period_operator>
  periodType?: InputMaybe<Item_periodType_operator>
  price?: InputMaybe<Item_price_operator>
  rating?: InputMaybe<Item_rating_operator>
  rentingStatus?: InputMaybe<Item_rentingStatus_operator>
  start?: InputMaybe<Item_start_operator>
  tags?: InputMaybe<Item_tags_operator>
  updatedAt?: InputMaybe<Item_updatedAt_operator>
}

export interface Item_where_and {
  _status?: InputMaybe<Item__status_operator>
  availableAt?: InputMaybe<Item_availableAt_operator>
  createdAt?: InputMaybe<Item_createdAt_operator>
  createdBy?: InputMaybe<Item_createdBy_operator>
  description?: InputMaybe<Item_description_operator>
  end?: InputMaybe<Item_end_operator>
  id?: InputMaybe<Item_id_operator>
  image?: InputMaybe<Item_image_operator>
  name?: InputMaybe<Item_name_operator>
  period?: InputMaybe<Item_period_operator>
  periodType?: InputMaybe<Item_periodType_operator>
  price?: InputMaybe<Item_price_operator>
  rating?: InputMaybe<Item_rating_operator>
  rentingStatus?: InputMaybe<Item_rentingStatus_operator>
  start?: InputMaybe<Item_start_operator>
  tags?: InputMaybe<Item_tags_operator>
  updatedAt?: InputMaybe<Item_updatedAt_operator>
}

export interface Item_where_or {
  _status?: InputMaybe<Item__status_operator>
  availableAt?: InputMaybe<Item_availableAt_operator>
  createdAt?: InputMaybe<Item_createdAt_operator>
  createdBy?: InputMaybe<Item_createdBy_operator>
  description?: InputMaybe<Item_description_operator>
  end?: InputMaybe<Item_end_operator>
  id?: InputMaybe<Item_id_operator>
  image?: InputMaybe<Item_image_operator>
  name?: InputMaybe<Item_name_operator>
  period?: InputMaybe<Item_period_operator>
  periodType?: InputMaybe<Item_periodType_operator>
  price?: InputMaybe<Item_price_operator>
  rating?: InputMaybe<Item_rating_operator>
  rentingStatus?: InputMaybe<Item_rentingStatus_operator>
  start?: InputMaybe<Item_start_operator>
  tags?: InputMaybe<Item_tags_operator>
  updatedAt?: InputMaybe<Item_updatedAt_operator>
}

export interface Media_alt_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Media_createdAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Media_filename_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Media_filesize_operator {
  equals?: InputMaybe<Scalars['Float']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Float']>
  greater_than_equal?: InputMaybe<Scalars['Float']>
  less_than?: InputMaybe<Scalars['Float']>
  less_than_equal?: InputMaybe<Scalars['Float']>
  not_equals?: InputMaybe<Scalars['Float']>
}

export interface Media_height_operator {
  equals?: InputMaybe<Scalars['Float']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Float']>
  greater_than_equal?: InputMaybe<Scalars['Float']>
  less_than?: InputMaybe<Scalars['Float']>
  less_than_equal?: InputMaybe<Scalars['Float']>
  not_equals?: InputMaybe<Scalars['Float']>
}

export interface Media_id_operator {
  equals?: InputMaybe<Scalars['Int']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Int']>
  greater_than_equal?: InputMaybe<Scalars['Int']>
  less_than?: InputMaybe<Scalars['Int']>
  less_than_equal?: InputMaybe<Scalars['Int']>
  not_equals?: InputMaybe<Scalars['Int']>
}

export interface Media_mimeType_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Media_name_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Media_updatedAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Media_url_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Media_where {
  AND?: InputMaybe<Array<InputMaybe<Media_where_and>>>
  OR?: InputMaybe<Array<InputMaybe<Media_where_or>>>
  alt?: InputMaybe<Media_alt_operator>
  createdAt?: InputMaybe<Media_createdAt_operator>
  filename?: InputMaybe<Media_filename_operator>
  filesize?: InputMaybe<Media_filesize_operator>
  height?: InputMaybe<Media_height_operator>
  id?: InputMaybe<Media_id_operator>
  mimeType?: InputMaybe<Media_mimeType_operator>
  name?: InputMaybe<Media_name_operator>
  updatedAt?: InputMaybe<Media_updatedAt_operator>
  url?: InputMaybe<Media_url_operator>
  width?: InputMaybe<Media_width_operator>
}

export interface Media_where_and {
  alt?: InputMaybe<Media_alt_operator>
  createdAt?: InputMaybe<Media_createdAt_operator>
  filename?: InputMaybe<Media_filename_operator>
  filesize?: InputMaybe<Media_filesize_operator>
  height?: InputMaybe<Media_height_operator>
  id?: InputMaybe<Media_id_operator>
  mimeType?: InputMaybe<Media_mimeType_operator>
  name?: InputMaybe<Media_name_operator>
  updatedAt?: InputMaybe<Media_updatedAt_operator>
  url?: InputMaybe<Media_url_operator>
  width?: InputMaybe<Media_width_operator>
}

export interface Media_where_or {
  alt?: InputMaybe<Media_alt_operator>
  createdAt?: InputMaybe<Media_createdAt_operator>
  filename?: InputMaybe<Media_filename_operator>
  filesize?: InputMaybe<Media_filesize_operator>
  height?: InputMaybe<Media_height_operator>
  id?: InputMaybe<Media_id_operator>
  mimeType?: InputMaybe<Media_mimeType_operator>
  name?: InputMaybe<Media_name_operator>
  updatedAt?: InputMaybe<Media_updatedAt_operator>
  url?: InputMaybe<Media_url_operator>
  width?: InputMaybe<Media_width_operator>
}

export interface Media_width_operator {
  equals?: InputMaybe<Scalars['Float']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Float']>
  greater_than_equal?: InputMaybe<Scalars['Float']>
  less_than?: InputMaybe<Scalars['Float']>
  less_than_equal?: InputMaybe<Scalars['Float']>
  not_equals?: InputMaybe<Scalars['Float']>
}

export interface Message_createdAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Message_createdBy_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  equals?: InputMaybe<Scalars['JSON']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  not_equals?: InputMaybe<Scalars['JSON']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
}

export interface Message_id_operator {
  equals?: InputMaybe<Scalars['Int']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Int']>
  greater_than_equal?: InputMaybe<Scalars['Int']>
  less_than?: InputMaybe<Scalars['Int']>
  less_than_equal?: InputMaybe<Scalars['Int']>
  not_equals?: InputMaybe<Scalars['Int']>
}

export interface Message_message_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Message_room_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  equals?: InputMaybe<Scalars['JSON']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  not_equals?: InputMaybe<Scalars['JSON']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
}

export interface Message_updatedAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Message_where {
  AND?: InputMaybe<Array<InputMaybe<Message_where_and>>>
  OR?: InputMaybe<Array<InputMaybe<Message_where_or>>>
  createdAt?: InputMaybe<Message_createdAt_operator>
  createdBy?: InputMaybe<Message_createdBy_operator>
  id?: InputMaybe<Message_id_operator>
  message?: InputMaybe<Message_message_operator>
  room?: InputMaybe<Message_room_operator>
  updatedAt?: InputMaybe<Message_updatedAt_operator>
}

export interface Message_where_and {
  createdAt?: InputMaybe<Message_createdAt_operator>
  createdBy?: InputMaybe<Message_createdBy_operator>
  id?: InputMaybe<Message_id_operator>
  message?: InputMaybe<Message_message_operator>
  room?: InputMaybe<Message_room_operator>
  updatedAt?: InputMaybe<Message_updatedAt_operator>
}

export interface Message_where_or {
  createdAt?: InputMaybe<Message_createdAt_operator>
  createdBy?: InputMaybe<Message_createdBy_operator>
  id?: InputMaybe<Message_id_operator>
  message?: InputMaybe<Message_message_operator>
  room?: InputMaybe<Message_room_operator>
  updatedAt?: InputMaybe<Message_updatedAt_operator>
}

export interface PayloadPreferenceUpdate_UserRelationshipInput {
  relationTo?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>
  value?: InputMaybe<Scalars['JSON']>
}

export enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
  users = 'users',
}

export interface PayloadPreference_UserRelationshipInput {
  relationTo?: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>
  value?: InputMaybe<Scalars['JSON']>
}

export enum PayloadPreference_UserRelationshipInputRelationTo {
  users = 'users',
}

export enum PayloadPreference_User_RelationTo {
  users = 'users',
}

export interface PayloadPreference_createdAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface PayloadPreference_id_operator {
  equals?: InputMaybe<Scalars['Int']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Int']>
  greater_than_equal?: InputMaybe<Scalars['Int']>
  less_than?: InputMaybe<Scalars['Int']>
  less_than_equal?: InputMaybe<Scalars['Int']>
  not_equals?: InputMaybe<Scalars['Int']>
}

export interface PayloadPreference_key_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface PayloadPreference_updatedAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface PayloadPreference_user_Relation {
  relationTo?: InputMaybe<PayloadPreference_user_Relation_RelationTo>
  value?: InputMaybe<Scalars['JSON']>
}

export enum PayloadPreference_user_Relation_RelationTo {
  users = 'users',
}

export interface PayloadPreference_value_operator {
  contains?: InputMaybe<Scalars['JSON']>
  equals?: InputMaybe<Scalars['JSON']>
  exists?: InputMaybe<Scalars['Boolean']>
  intersects?: InputMaybe<Scalars['JSON']>
  like?: InputMaybe<Scalars['JSON']>
  not_equals?: InputMaybe<Scalars['JSON']>
  within?: InputMaybe<Scalars['JSON']>
}

export interface PayloadPreference_where {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_where_and>>>
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_where_or>>>
  createdAt?: InputMaybe<PayloadPreference_createdAt_operator>
  id?: InputMaybe<PayloadPreference_id_operator>
  key?: InputMaybe<PayloadPreference_key_operator>
  updatedAt?: InputMaybe<PayloadPreference_updatedAt_operator>
  user?: InputMaybe<PayloadPreference_user_Relation>
  value?: InputMaybe<PayloadPreference_value_operator>
}

export interface PayloadPreference_where_and {
  createdAt?: InputMaybe<PayloadPreference_createdAt_operator>
  id?: InputMaybe<PayloadPreference_id_operator>
  key?: InputMaybe<PayloadPreference_key_operator>
  updatedAt?: InputMaybe<PayloadPreference_updatedAt_operator>
  user?: InputMaybe<PayloadPreference_user_Relation>
  value?: InputMaybe<PayloadPreference_value_operator>
}

export interface PayloadPreference_where_or {
  createdAt?: InputMaybe<PayloadPreference_createdAt_operator>
  id?: InputMaybe<PayloadPreference_id_operator>
  key?: InputMaybe<PayloadPreference_key_operator>
  updatedAt?: InputMaybe<PayloadPreference_updatedAt_operator>
  user?: InputMaybe<PayloadPreference_user_Relation>
  value?: InputMaybe<PayloadPreference_value_operator>
}

export enum RentingUpdate_status_MutationInput {
  COMPLETED = 'COMPLETED',
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
}

export interface Renting_createdAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Renting_createdBy_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  equals?: InputMaybe<Scalars['JSON']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  not_equals?: InputMaybe<Scalars['JSON']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
}

export interface Renting_deliveryFee_operator {
  equals?: InputMaybe<Scalars['Float']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Float']>
  greater_than_equal?: InputMaybe<Scalars['Float']>
  less_than?: InputMaybe<Scalars['Float']>
  less_than_equal?: InputMaybe<Scalars['Float']>
  not_equals?: InputMaybe<Scalars['Float']>
}

export interface Renting_endDate_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Renting_file_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  equals?: InputMaybe<Scalars['JSON']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  not_equals?: InputMaybe<Scalars['JSON']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
}

export interface Renting_id_operator {
  equals?: InputMaybe<Scalars['Int']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Int']>
  greater_than_equal?: InputMaybe<Scalars['Int']>
  less_than?: InputMaybe<Scalars['Int']>
  less_than_equal?: InputMaybe<Scalars['Int']>
  not_equals?: InputMaybe<Scalars['Int']>
}

export interface Renting_insuranceFee_operator {
  equals?: InputMaybe<Scalars['Float']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Float']>
  greater_than_equal?: InputMaybe<Scalars['Float']>
  less_than?: InputMaybe<Scalars['Float']>
  less_than_equal?: InputMaybe<Scalars['Float']>
  not_equals?: InputMaybe<Scalars['Float']>
}

export interface Renting_rentalFee_operator {
  equals?: InputMaybe<Scalars['Float']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Float']>
  greater_than_equal?: InputMaybe<Scalars['Float']>
  less_than?: InputMaybe<Scalars['Float']>
  less_than_equal?: InputMaybe<Scalars['Float']>
  not_equals?: InputMaybe<Scalars['Float']>
}

export interface Renting_rentedBy__user_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  equals?: InputMaybe<Scalars['JSON']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  not_equals?: InputMaybe<Scalars['JSON']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
}

export interface Renting_rentedTo__item_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  equals?: InputMaybe<Scalars['JSON']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  not_equals?: InputMaybe<Scalars['JSON']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
}

export interface Renting_rentedTo__user_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  equals?: InputMaybe<Scalars['JSON']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  not_equals?: InputMaybe<Scalars['JSON']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
}

export interface Renting_startDate_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export enum Renting_status {
  COMPLETED = 'COMPLETED',
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
}

export enum Renting_status_Input {
  COMPLETED = 'COMPLETED',
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
}

export enum Renting_status_MutationInput {
  COMPLETED = 'COMPLETED',
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
}

export interface Renting_status_operator {
  all?: InputMaybe<Array<InputMaybe<Renting_status_Input>>>
  equals?: InputMaybe<Renting_status_Input>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Renting_status_Input>>>
  not_equals?: InputMaybe<Renting_status_Input>
  not_in?: InputMaybe<Array<InputMaybe<Renting_status_Input>>>
}

export interface Renting_totalPrice_operator {
  equals?: InputMaybe<Scalars['Float']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Float']>
  greater_than_equal?: InputMaybe<Scalars['Float']>
  less_than?: InputMaybe<Scalars['Float']>
  less_than_equal?: InputMaybe<Scalars['Float']>
  not_equals?: InputMaybe<Scalars['Float']>
}

export interface Renting_updatedAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Renting_where {
  AND?: InputMaybe<Array<InputMaybe<Renting_where_and>>>
  OR?: InputMaybe<Array<InputMaybe<Renting_where_or>>>
  createdAt?: InputMaybe<Renting_createdAt_operator>
  createdBy?: InputMaybe<Renting_createdBy_operator>
  deliveryFee?: InputMaybe<Renting_deliveryFee_operator>
  endDate?: InputMaybe<Renting_endDate_operator>
  file?: InputMaybe<Renting_file_operator>
  id?: InputMaybe<Renting_id_operator>
  insuranceFee?: InputMaybe<Renting_insuranceFee_operator>
  rentalFee?: InputMaybe<Renting_rentalFee_operator>
  rentedBy__user?: InputMaybe<Renting_rentedBy__user_operator>
  rentedTo__item?: InputMaybe<Renting_rentedTo__item_operator>
  rentedTo__user?: InputMaybe<Renting_rentedTo__user_operator>
  startDate?: InputMaybe<Renting_startDate_operator>
  status?: InputMaybe<Renting_status_operator>
  totalPrice?: InputMaybe<Renting_totalPrice_operator>
  updatedAt?: InputMaybe<Renting_updatedAt_operator>
}

export interface Renting_where_and {
  createdAt?: InputMaybe<Renting_createdAt_operator>
  createdBy?: InputMaybe<Renting_createdBy_operator>
  deliveryFee?: InputMaybe<Renting_deliveryFee_operator>
  endDate?: InputMaybe<Renting_endDate_operator>
  file?: InputMaybe<Renting_file_operator>
  id?: InputMaybe<Renting_id_operator>
  insuranceFee?: InputMaybe<Renting_insuranceFee_operator>
  rentalFee?: InputMaybe<Renting_rentalFee_operator>
  rentedBy__user?: InputMaybe<Renting_rentedBy__user_operator>
  rentedTo__item?: InputMaybe<Renting_rentedTo__item_operator>
  rentedTo__user?: InputMaybe<Renting_rentedTo__user_operator>
  startDate?: InputMaybe<Renting_startDate_operator>
  status?: InputMaybe<Renting_status_operator>
  totalPrice?: InputMaybe<Renting_totalPrice_operator>
  updatedAt?: InputMaybe<Renting_updatedAt_operator>
}

export interface Renting_where_or {
  createdAt?: InputMaybe<Renting_createdAt_operator>
  createdBy?: InputMaybe<Renting_createdBy_operator>
  deliveryFee?: InputMaybe<Renting_deliveryFee_operator>
  endDate?: InputMaybe<Renting_endDate_operator>
  file?: InputMaybe<Renting_file_operator>
  id?: InputMaybe<Renting_id_operator>
  insuranceFee?: InputMaybe<Renting_insuranceFee_operator>
  rentalFee?: InputMaybe<Renting_rentalFee_operator>
  rentedBy__user?: InputMaybe<Renting_rentedBy__user_operator>
  rentedTo__item?: InputMaybe<Renting_rentedTo__item_operator>
  rentedTo__user?: InputMaybe<Renting_rentedTo__user_operator>
  startDate?: InputMaybe<Renting_startDate_operator>
  status?: InputMaybe<Renting_status_operator>
  totalPrice?: InputMaybe<Renting_totalPrice_operator>
  updatedAt?: InputMaybe<Renting_updatedAt_operator>
}

export interface Tag_alt_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Tag_createdAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Tag_id_operator {
  equals?: InputMaybe<Scalars['Int']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Int']>
  greater_than_equal?: InputMaybe<Scalars['Int']>
  less_than?: InputMaybe<Scalars['Int']>
  less_than_equal?: InputMaybe<Scalars['Int']>
  not_equals?: InputMaybe<Scalars['Int']>
}

export interface Tag_name_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Tag_updatedAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Tag_where {
  AND?: InputMaybe<Array<InputMaybe<Tag_where_and>>>
  OR?: InputMaybe<Array<InputMaybe<Tag_where_or>>>
  alt?: InputMaybe<Tag_alt_operator>
  createdAt?: InputMaybe<Tag_createdAt_operator>
  id?: InputMaybe<Tag_id_operator>
  name?: InputMaybe<Tag_name_operator>
  updatedAt?: InputMaybe<Tag_updatedAt_operator>
}

export interface Tag_where_and {
  alt?: InputMaybe<Tag_alt_operator>
  createdAt?: InputMaybe<Tag_createdAt_operator>
  id?: InputMaybe<Tag_id_operator>
  name?: InputMaybe<Tag_name_operator>
  updatedAt?: InputMaybe<Tag_updatedAt_operator>
}

export interface Tag_where_or {
  alt?: InputMaybe<Tag_alt_operator>
  createdAt?: InputMaybe<Tag_createdAt_operator>
  id?: InputMaybe<Tag_id_operator>
  name?: InputMaybe<Tag_name_operator>
  updatedAt?: InputMaybe<Tag_updatedAt_operator>
}

export enum UserUpdate_roles_MutationInput {
  User = 'User',
  admin = 'admin',
}

export interface User_bio_operator {
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
}

export interface User_createdAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface User_email_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>
  contains?: InputMaybe<Scalars['EmailAddress']>
  equals?: InputMaybe<Scalars['EmailAddress']>
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>
  like?: InputMaybe<Scalars['EmailAddress']>
  not_equals?: InputMaybe<Scalars['EmailAddress']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>
}

export interface User_firstName_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface User_id_operator {
  equals?: InputMaybe<Scalars['Int']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Int']>
  greater_than_equal?: InputMaybe<Scalars['Int']>
  less_than?: InputMaybe<Scalars['Int']>
  less_than_equal?: InputMaybe<Scalars['Int']>
  not_equals?: InputMaybe<Scalars['Int']>
}

export interface User_lastName_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface User_phone_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface User_profileImage_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  equals?: InputMaybe<Scalars['JSON']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  not_equals?: InputMaybe<Scalars['JSON']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
}

export interface User_province_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface User_rating_operator {
  equals?: InputMaybe<Scalars['Float']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Float']>
  greater_than_equal?: InputMaybe<Scalars['Float']>
  less_than?: InputMaybe<Scalars['Float']>
  less_than_equal?: InputMaybe<Scalars['Float']>
  not_equals?: InputMaybe<Scalars['Float']>
}

export interface User_requestsMade_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  equals?: InputMaybe<Scalars['JSON']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  not_equals?: InputMaybe<Scalars['JSON']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
}

export interface User_requestsReceived_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  equals?: InputMaybe<Scalars['JSON']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  not_equals?: InputMaybe<Scalars['JSON']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
}

export enum User_roles {
  User = 'User',
  admin = 'admin',
}

export enum User_roles_Input {
  User = 'User',
  admin = 'admin',
}

export enum User_roles_MutationInput {
  User = 'User',
  admin = 'admin',
}

export interface User_roles_operator {
  all?: InputMaybe<Array<InputMaybe<User_roles_Input>>>
  equals?: InputMaybe<User_roles_Input>
  in?: InputMaybe<Array<InputMaybe<User_roles_Input>>>
  not_equals?: InputMaybe<User_roles_Input>
  not_in?: InputMaybe<Array<InputMaybe<User_roles_Input>>>
}

export interface User_updatedAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface User_where {
  AND?: InputMaybe<Array<InputMaybe<User_where_and>>>
  OR?: InputMaybe<Array<InputMaybe<User_where_or>>>
  bio?: InputMaybe<User_bio_operator>
  createdAt?: InputMaybe<User_createdAt_operator>
  email?: InputMaybe<User_email_operator>
  firstName?: InputMaybe<User_firstName_operator>
  id?: InputMaybe<User_id_operator>
  lastName?: InputMaybe<User_lastName_operator>
  phone?: InputMaybe<User_phone_operator>
  profileImage?: InputMaybe<User_profileImage_operator>
  province?: InputMaybe<User_province_operator>
  rating?: InputMaybe<User_rating_operator>
  requestsMade?: InputMaybe<User_requestsMade_operator>
  requestsReceived?: InputMaybe<User_requestsReceived_operator>
  roles?: InputMaybe<User_roles_operator>
  updatedAt?: InputMaybe<User_updatedAt_operator>
}

export interface User_where_and {
  bio?: InputMaybe<User_bio_operator>
  createdAt?: InputMaybe<User_createdAt_operator>
  email?: InputMaybe<User_email_operator>
  firstName?: InputMaybe<User_firstName_operator>
  id?: InputMaybe<User_id_operator>
  lastName?: InputMaybe<User_lastName_operator>
  phone?: InputMaybe<User_phone_operator>
  profileImage?: InputMaybe<User_profileImage_operator>
  province?: InputMaybe<User_province_operator>
  rating?: InputMaybe<User_rating_operator>
  requestsMade?: InputMaybe<User_requestsMade_operator>
  requestsReceived?: InputMaybe<User_requestsReceived_operator>
  roles?: InputMaybe<User_roles_operator>
  updatedAt?: InputMaybe<User_updatedAt_operator>
}

export interface User_where_or {
  bio?: InputMaybe<User_bio_operator>
  createdAt?: InputMaybe<User_createdAt_operator>
  email?: InputMaybe<User_email_operator>
  firstName?: InputMaybe<User_firstName_operator>
  id?: InputMaybe<User_id_operator>
  lastName?: InputMaybe<User_lastName_operator>
  phone?: InputMaybe<User_phone_operator>
  profileImage?: InputMaybe<User_profileImage_operator>
  province?: InputMaybe<User_province_operator>
  rating?: InputMaybe<User_rating_operator>
  requestsMade?: InputMaybe<User_requestsMade_operator>
  requestsReceived?: InputMaybe<User_requestsReceived_operator>
  roles?: InputMaybe<User_roles_operator>
  updatedAt?: InputMaybe<User_updatedAt_operator>
}

export interface mutationChatroomInput {
  createdAt?: InputMaybe<Scalars['String']>
  lastMessage?: InputMaybe<Scalars['Int']>
  updatedAt?: InputMaybe<Scalars['String']>
  user1LastViewed?: InputMaybe<Scalars['String']>
  user1_id?: InputMaybe<Scalars['Int']>
  user2LastViewed?: InputMaybe<Scalars['String']>
  user2_id?: InputMaybe<Scalars['Int']>
}

export interface mutationChatroomUpdateInput {
  createdAt?: InputMaybe<Scalars['String']>
  lastMessage?: InputMaybe<Scalars['Int']>
  updatedAt?: InputMaybe<Scalars['String']>
  user1LastViewed?: InputMaybe<Scalars['String']>
  user1_id?: InputMaybe<Scalars['Int']>
  user2LastViewed?: InputMaybe<Scalars['String']>
  user2_id?: InputMaybe<Scalars['Int']>
}

export interface mutationItemInput {
  _status?: InputMaybe<Item__status_MutationInput>
  availableAt?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['String']>
  createdBy?: InputMaybe<Scalars['Int']>
  description?: InputMaybe<Scalars['String']>
  end?: InputMaybe<Scalars['String']>
  image?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  name: Scalars['String']
  period?: InputMaybe<Scalars['Float']>
  periodType?: InputMaybe<Item_periodType_MutationInput>
  price?: InputMaybe<Scalars['Float']>
  rating?: InputMaybe<Scalars['Float']>
  rentingStatus?: InputMaybe<Item_rentingStatus_MutationInput>
  start?: InputMaybe<Scalars['String']>
  tags?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  updatedAt?: InputMaybe<Scalars['String']>
}

export interface mutationItemUpdateInput {
  _status?: InputMaybe<ItemUpdate__status_MutationInput>
  availableAt?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['String']>
  createdBy?: InputMaybe<Scalars['Int']>
  description?: InputMaybe<Scalars['String']>
  end?: InputMaybe<Scalars['String']>
  image?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  name?: InputMaybe<Scalars['String']>
  period?: InputMaybe<Scalars['Float']>
  periodType?: InputMaybe<ItemUpdate_periodType_MutationInput>
  price?: InputMaybe<Scalars['Float']>
  rating?: InputMaybe<Scalars['Float']>
  rentingStatus?: InputMaybe<ItemUpdate_rentingStatus_MutationInput>
  start?: InputMaybe<Scalars['String']>
  tags?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  updatedAt?: InputMaybe<Scalars['String']>
}

export interface mutationMediaInput {
  alt?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['String']>
  createdBy?: InputMaybe<Scalars['Int']>
  filename?: InputMaybe<Scalars['String']>
  filesize?: InputMaybe<Scalars['Float']>
  height?: InputMaybe<Scalars['Float']>
  mimeType?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
  width?: InputMaybe<Scalars['Float']>
}

export interface mutationMediaUpdateInput {
  alt?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['String']>
  createdBy?: InputMaybe<Scalars['Int']>
  filename?: InputMaybe<Scalars['String']>
  filesize?: InputMaybe<Scalars['Float']>
  height?: InputMaybe<Scalars['Float']>
  mimeType?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
  width?: InputMaybe<Scalars['Float']>
}

export interface mutationMessageInput {
  createdAt?: InputMaybe<Scalars['String']>
  createdBy?: InputMaybe<Scalars['Int']>
  message?: InputMaybe<Scalars['String']>
  room?: InputMaybe<Scalars['Int']>
  updatedAt?: InputMaybe<Scalars['String']>
}

export interface mutationMessageUpdateInput {
  createdAt?: InputMaybe<Scalars['String']>
  createdBy?: InputMaybe<Scalars['Int']>
  message?: InputMaybe<Scalars['String']>
  room?: InputMaybe<Scalars['Int']>
  updatedAt?: InputMaybe<Scalars['String']>
}

export interface mutationPayloadPreferenceInput {
  createdAt?: InputMaybe<Scalars['String']>
  key?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['String']>
  user?: InputMaybe<PayloadPreference_UserRelationshipInput>
  value?: InputMaybe<Scalars['JSON']>
}

export interface mutationPayloadPreferenceUpdateInput {
  createdAt?: InputMaybe<Scalars['String']>
  key?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['String']>
  user?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>
  value?: InputMaybe<Scalars['JSON']>
}

export interface mutationRentingInput {
  createdAt?: InputMaybe<Scalars['String']>
  createdBy?: InputMaybe<Scalars['Int']>
  deliveryFee?: InputMaybe<Scalars['Float']>
  endDate: Scalars['String']
  file?: InputMaybe<Scalars['Int']>
  insuranceFee?: InputMaybe<Scalars['Float']>
  rentalFee?: InputMaybe<Scalars['Float']>
  rentedBy: mutationRenting_RentedByInput
  rentedTo: mutationRenting_RentedToInput
  startDate: Scalars['String']
  status?: InputMaybe<Renting_status_MutationInput>
  totalPrice?: InputMaybe<Scalars['Float']>
  updatedAt?: InputMaybe<Scalars['String']>
}

export interface mutationRentingUpdateInput {
  createdAt?: InputMaybe<Scalars['String']>
  createdBy?: InputMaybe<Scalars['Int']>
  deliveryFee?: InputMaybe<Scalars['Float']>
  endDate?: InputMaybe<Scalars['String']>
  file?: InputMaybe<Scalars['Int']>
  insuranceFee?: InputMaybe<Scalars['Float']>
  rentalFee?: InputMaybe<Scalars['Float']>
  rentedBy: mutationRentingUpdate_RentedByInput
  rentedTo: mutationRentingUpdate_RentedToInput
  startDate?: InputMaybe<Scalars['String']>
  status?: InputMaybe<RentingUpdate_status_MutationInput>
  totalPrice?: InputMaybe<Scalars['Float']>
  updatedAt?: InputMaybe<Scalars['String']>
}

export interface mutationRentingUpdate_RentedByInput {
  user?: InputMaybe<Scalars['Int']>
}

export interface mutationRentingUpdate_RentedToInput {
  item?: InputMaybe<Scalars['Int']>
  user?: InputMaybe<Scalars['Int']>
}

export interface mutationRenting_RentedByInput {
  user?: InputMaybe<Scalars['Int']>
}

export interface mutationRenting_RentedToInput {
  item?: InputMaybe<Scalars['Int']>
  user?: InputMaybe<Scalars['Int']>
}

export interface mutationTagInput {
  alt?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['String']>
  createdBy?: InputMaybe<Scalars['Int']>
  name: Scalars['String']
  updatedAt?: InputMaybe<Scalars['String']>
}

export interface mutationTagUpdateInput {
  alt?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['String']>
  createdBy?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['String']>
}

export interface mutationUserInput {
  bio?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['String']>
  email: Scalars['String']
  firstName?: InputMaybe<Scalars['String']>
  hash?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  lockUntil?: InputMaybe<Scalars['String']>
  loginAttempts?: InputMaybe<Scalars['Float']>
  password: Scalars['String']
  phone: Scalars['String']
  profileImage?: InputMaybe<Scalars['Int']>
  province?: InputMaybe<Scalars['String']>
  rating?: InputMaybe<Scalars['Float']>
  requestsMade?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  requestsReceived?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  resetPasswordExpiration?: InputMaybe<Scalars['String']>
  resetPasswordToken?: InputMaybe<Scalars['String']>
  roles: Array<InputMaybe<User_roles_MutationInput>>
  salt?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['String']>
}

export interface mutationUserUpdateInput {
  bio?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  firstName?: InputMaybe<Scalars['String']>
  hash?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  lockUntil?: InputMaybe<Scalars['String']>
  loginAttempts?: InputMaybe<Scalars['Float']>
  password?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
  profileImage?: InputMaybe<Scalars['Int']>
  province?: InputMaybe<Scalars['String']>
  rating?: InputMaybe<Scalars['Float']>
  requestsMade?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  requestsReceived?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  resetPasswordExpiration?: InputMaybe<Scalars['String']>
  resetPasswordToken?: InputMaybe<Scalars['String']>
  roles?: InputMaybe<Array<InputMaybe<UserUpdate_roles_MutationInput>>>
  salt?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['String']>
}

export enum usersJWT_roles {
  User = 'User',
  admin = 'admin',
}

export interface versionsItem_createdAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface versionsItem_id_operator {
  equals?: InputMaybe<Scalars['Int']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Int']>
  greater_than_equal?: InputMaybe<Scalars['Int']>
  less_than?: InputMaybe<Scalars['Int']>
  less_than_equal?: InputMaybe<Scalars['Int']>
  not_equals?: InputMaybe<Scalars['Int']>
}

export interface versionsItem_latest_operator {
  equals?: InputMaybe<Scalars['Boolean']>
  exists?: InputMaybe<Scalars['Boolean']>
  not_equals?: InputMaybe<Scalars['Boolean']>
}

export interface versionsItem_parent_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  equals?: InputMaybe<Scalars['JSON']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  not_equals?: InputMaybe<Scalars['JSON']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
}

export interface versionsItem_updatedAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export enum versionsItem_version___status_Input {
  draft = 'draft',
  published = 'published',
}

export interface versionsItem_version___status_operator {
  all?: InputMaybe<Array<InputMaybe<versionsItem_version___status_Input>>>
  equals?: InputMaybe<versionsItem_version___status_Input>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<versionsItem_version___status_Input>>>
  not_equals?: InputMaybe<versionsItem_version___status_Input>
  not_in?: InputMaybe<Array<InputMaybe<versionsItem_version___status_Input>>>
}

export interface versionsItem_version__availableAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface versionsItem_version__createdAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface versionsItem_version__createdBy_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  equals?: InputMaybe<Scalars['JSON']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  not_equals?: InputMaybe<Scalars['JSON']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
}

export interface versionsItem_version__description_operator {
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
}

export interface versionsItem_version__end_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface versionsItem_version__image_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  equals?: InputMaybe<Scalars['JSON']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  not_equals?: InputMaybe<Scalars['JSON']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
}

export interface versionsItem_version__name_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export enum versionsItem_version__periodType_Input {
  days = 'days',
  months = 'months',
  weeks = 'weeks',
  years = 'years',
}

export interface versionsItem_version__periodType_operator {
  all?: InputMaybe<Array<InputMaybe<versionsItem_version__periodType_Input>>>
  equals?: InputMaybe<versionsItem_version__periodType_Input>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<versionsItem_version__periodType_Input>>>
  not_equals?: InputMaybe<versionsItem_version__periodType_Input>
  not_in?: InputMaybe<Array<InputMaybe<versionsItem_version__periodType_Input>>>
}

export interface versionsItem_version__period_operator {
  equals?: InputMaybe<Scalars['Float']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Float']>
  greater_than_equal?: InputMaybe<Scalars['Float']>
  less_than?: InputMaybe<Scalars['Float']>
  less_than_equal?: InputMaybe<Scalars['Float']>
  not_equals?: InputMaybe<Scalars['Float']>
}

export interface versionsItem_version__price_operator {
  equals?: InputMaybe<Scalars['Float']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Float']>
  greater_than_equal?: InputMaybe<Scalars['Float']>
  less_than?: InputMaybe<Scalars['Float']>
  less_than_equal?: InputMaybe<Scalars['Float']>
  not_equals?: InputMaybe<Scalars['Float']>
}

export interface versionsItem_version__rating_operator {
  equals?: InputMaybe<Scalars['Float']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Float']>
  greater_than_equal?: InputMaybe<Scalars['Float']>
  less_than?: InputMaybe<Scalars['Float']>
  less_than_equal?: InputMaybe<Scalars['Float']>
  not_equals?: InputMaybe<Scalars['Float']>
}

export enum versionsItem_version__rentingStatus_Input {
  available = 'available',
  unavailable = 'unavailable',
}

export interface versionsItem_version__rentingStatus_operator {
  all?: InputMaybe<Array<InputMaybe<versionsItem_version__rentingStatus_Input>>>
  equals?: InputMaybe<versionsItem_version__rentingStatus_Input>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<versionsItem_version__rentingStatus_Input>>>
  not_equals?: InputMaybe<versionsItem_version__rentingStatus_Input>
  not_in?: InputMaybe<Array<InputMaybe<versionsItem_version__rentingStatus_Input>>>
}

export interface versionsItem_version__start_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface versionsItem_version__tags_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  equals?: InputMaybe<Scalars['JSON']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  not_equals?: InputMaybe<Scalars['JSON']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
}

export interface versionsItem_version__updatedAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface versionsItem_where {
  AND?: InputMaybe<Array<InputMaybe<versionsItem_where_and>>>
  OR?: InputMaybe<Array<InputMaybe<versionsItem_where_or>>>
  createdAt?: InputMaybe<versionsItem_createdAt_operator>
  id?: InputMaybe<versionsItem_id_operator>
  latest?: InputMaybe<versionsItem_latest_operator>
  parent?: InputMaybe<versionsItem_parent_operator>
  updatedAt?: InputMaybe<versionsItem_updatedAt_operator>
  version___status?: InputMaybe<versionsItem_version___status_operator>
  version__availableAt?: InputMaybe<versionsItem_version__availableAt_operator>
  version__createdAt?: InputMaybe<versionsItem_version__createdAt_operator>
  version__createdBy?: InputMaybe<versionsItem_version__createdBy_operator>
  version__description?: InputMaybe<versionsItem_version__description_operator>
  version__end?: InputMaybe<versionsItem_version__end_operator>
  version__image?: InputMaybe<versionsItem_version__image_operator>
  version__name?: InputMaybe<versionsItem_version__name_operator>
  version__period?: InputMaybe<versionsItem_version__period_operator>
  version__periodType?: InputMaybe<versionsItem_version__periodType_operator>
  version__price?: InputMaybe<versionsItem_version__price_operator>
  version__rating?: InputMaybe<versionsItem_version__rating_operator>
  version__rentingStatus?: InputMaybe<versionsItem_version__rentingStatus_operator>
  version__start?: InputMaybe<versionsItem_version__start_operator>
  version__tags?: InputMaybe<versionsItem_version__tags_operator>
  version__updatedAt?: InputMaybe<versionsItem_version__updatedAt_operator>
}

export interface versionsItem_where_and {
  createdAt?: InputMaybe<versionsItem_createdAt_operator>
  id?: InputMaybe<versionsItem_id_operator>
  latest?: InputMaybe<versionsItem_latest_operator>
  parent?: InputMaybe<versionsItem_parent_operator>
  updatedAt?: InputMaybe<versionsItem_updatedAt_operator>
  version___status?: InputMaybe<versionsItem_version___status_operator>
  version__availableAt?: InputMaybe<versionsItem_version__availableAt_operator>
  version__createdAt?: InputMaybe<versionsItem_version__createdAt_operator>
  version__createdBy?: InputMaybe<versionsItem_version__createdBy_operator>
  version__description?: InputMaybe<versionsItem_version__description_operator>
  version__end?: InputMaybe<versionsItem_version__end_operator>
  version__image?: InputMaybe<versionsItem_version__image_operator>
  version__name?: InputMaybe<versionsItem_version__name_operator>
  version__period?: InputMaybe<versionsItem_version__period_operator>
  version__periodType?: InputMaybe<versionsItem_version__periodType_operator>
  version__price?: InputMaybe<versionsItem_version__price_operator>
  version__rating?: InputMaybe<versionsItem_version__rating_operator>
  version__rentingStatus?: InputMaybe<versionsItem_version__rentingStatus_operator>
  version__start?: InputMaybe<versionsItem_version__start_operator>
  version__tags?: InputMaybe<versionsItem_version__tags_operator>
  version__updatedAt?: InputMaybe<versionsItem_version__updatedAt_operator>
}

export interface versionsItem_where_or {
  createdAt?: InputMaybe<versionsItem_createdAt_operator>
  id?: InputMaybe<versionsItem_id_operator>
  latest?: InputMaybe<versionsItem_latest_operator>
  parent?: InputMaybe<versionsItem_parent_operator>
  updatedAt?: InputMaybe<versionsItem_updatedAt_operator>
  version___status?: InputMaybe<versionsItem_version___status_operator>
  version__availableAt?: InputMaybe<versionsItem_version__availableAt_operator>
  version__createdAt?: InputMaybe<versionsItem_version__createdAt_operator>
  version__createdBy?: InputMaybe<versionsItem_version__createdBy_operator>
  version__description?: InputMaybe<versionsItem_version__description_operator>
  version__end?: InputMaybe<versionsItem_version__end_operator>
  version__image?: InputMaybe<versionsItem_version__image_operator>
  version__name?: InputMaybe<versionsItem_version__name_operator>
  version__period?: InputMaybe<versionsItem_version__period_operator>
  version__periodType?: InputMaybe<versionsItem_version__periodType_operator>
  version__price?: InputMaybe<versionsItem_version__price_operator>
  version__rating?: InputMaybe<versionsItem_version__rating_operator>
  version__rentingStatus?: InputMaybe<versionsItem_version__rentingStatus_operator>
  version__start?: InputMaybe<versionsItem_version__start_operator>
  version__tags?: InputMaybe<versionsItem_version__tags_operator>
  version__updatedAt?: InputMaybe<versionsItem_version__updatedAt_operator>
}

export const scalarsEnumsHash: import('gqty').ScalarsEnumsHash = {
  Boolean: true,
  DateTime: true,
  EmailAddress: true,
  Float: true,
  Int: true,
  ItemUpdate__status_MutationInput: true,
  ItemUpdate_periodType_MutationInput: true,
  ItemUpdate_rentingStatus_MutationInput: true,
  ItemVersion_Version__status: true,
  ItemVersion_Version_periodType: true,
  ItemVersion_Version_rentingStatus: true,
  Item__status: true,
  Item__status_Input: true,
  Item__status_MutationInput: true,
  Item_periodType: true,
  Item_periodType_Input: true,
  Item_periodType_MutationInput: true,
  Item_rentingStatus: true,
  Item_rentingStatus_Input: true,
  Item_rentingStatus_MutationInput: true,
  JSON: true,
  JSONObject: true,
  PayloadPreferenceUpdate_UserRelationshipInputRelationTo: true,
  PayloadPreference_UserRelationshipInputRelationTo: true,
  PayloadPreference_User_RelationTo: true,
  PayloadPreference_user_Relation_RelationTo: true,
  RentingUpdate_status_MutationInput: true,
  Renting_status: true,
  Renting_status_Input: true,
  Renting_status_MutationInput: true,
  String: true,
  UserUpdate_roles_MutationInput: true,
  User_roles: true,
  User_roles_Input: true,
  User_roles_MutationInput: true,
  usersJWT_roles: true,
  versionsItem_version___status_Input: true,
  versionsItem_version__periodType_Input: true,
  versionsItem_version__rentingStatus_Input: true,
}
export const generatedSchema = {
  Access: {
    __typename: { __type: 'String!' },
    canAccessAdmin: { __type: 'Boolean!' },
    chatroom: { __type: 'chatroomAccess' },
    items: { __type: 'itemsAccess' },
    medias: { __type: 'mediasAccess' },
    message: { __type: 'messageAccess' },
    payload_preferences: { __type: 'payload_preferencesAccess' },
    renting: { __type: 'rentingAccess' },
    tags: { __type: 'tagsAccess' },
    users: { __type: 'usersAccess' },
  },
  Chatroom: {
    __typename: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    id: { __type: 'Int' },
    lastMessage: { __type: 'Message' },
    updatedAt: { __type: 'DateTime' },
    user1LastViewed: { __type: 'DateTime' },
    user1_id: { __type: 'User!' },
    user2LastViewed: { __type: 'DateTime' },
    user2_id: { __type: 'User!' },
  },
  ChatroomCreateAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  ChatroomCreateDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  ChatroomDeleteAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  ChatroomDeleteDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  ChatroomDocAccessFields: {
    __typename: { __type: 'String!' },
    createdAt: { __type: 'ChatroomDocAccessFields_createdAt' },
    lastMessage: { __type: 'ChatroomDocAccessFields_lastMessage' },
    updatedAt: { __type: 'ChatroomDocAccessFields_updatedAt' },
    user1LastViewed: { __type: 'ChatroomDocAccessFields_user1LastViewed' },
    user1_id: { __type: 'ChatroomDocAccessFields_user1_id' },
    user2LastViewed: { __type: 'ChatroomDocAccessFields_user2LastViewed' },
    user2_id: { __type: 'ChatroomDocAccessFields_user2_id' },
  },
  ChatroomDocAccessFields_createdAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'ChatroomDocAccessFields_createdAt_Create' },
    delete: { __type: 'ChatroomDocAccessFields_createdAt_Delete' },
    read: { __type: 'ChatroomDocAccessFields_createdAt_Read' },
    update: { __type: 'ChatroomDocAccessFields_createdAt_Update' },
  },
  ChatroomDocAccessFields_createdAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomDocAccessFields_createdAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomDocAccessFields_createdAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomDocAccessFields_createdAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomDocAccessFields_lastMessage: {
    __typename: { __type: 'String!' },
    create: { __type: 'ChatroomDocAccessFields_lastMessage_Create' },
    delete: { __type: 'ChatroomDocAccessFields_lastMessage_Delete' },
    read: { __type: 'ChatroomDocAccessFields_lastMessage_Read' },
    update: { __type: 'ChatroomDocAccessFields_lastMessage_Update' },
  },
  ChatroomDocAccessFields_lastMessage_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomDocAccessFields_lastMessage_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomDocAccessFields_lastMessage_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomDocAccessFields_lastMessage_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomDocAccessFields_updatedAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'ChatroomDocAccessFields_updatedAt_Create' },
    delete: { __type: 'ChatroomDocAccessFields_updatedAt_Delete' },
    read: { __type: 'ChatroomDocAccessFields_updatedAt_Read' },
    update: { __type: 'ChatroomDocAccessFields_updatedAt_Update' },
  },
  ChatroomDocAccessFields_updatedAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomDocAccessFields_updatedAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomDocAccessFields_updatedAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomDocAccessFields_updatedAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomDocAccessFields_user1LastViewed: {
    __typename: { __type: 'String!' },
    create: { __type: 'ChatroomDocAccessFields_user1LastViewed_Create' },
    delete: { __type: 'ChatroomDocAccessFields_user1LastViewed_Delete' },
    read: { __type: 'ChatroomDocAccessFields_user1LastViewed_Read' },
    update: { __type: 'ChatroomDocAccessFields_user1LastViewed_Update' },
  },
  ChatroomDocAccessFields_user1LastViewed_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomDocAccessFields_user1LastViewed_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomDocAccessFields_user1LastViewed_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomDocAccessFields_user1LastViewed_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomDocAccessFields_user1_id: {
    __typename: { __type: 'String!' },
    create: { __type: 'ChatroomDocAccessFields_user1_id_Create' },
    delete: { __type: 'ChatroomDocAccessFields_user1_id_Delete' },
    read: { __type: 'ChatroomDocAccessFields_user1_id_Read' },
    update: { __type: 'ChatroomDocAccessFields_user1_id_Update' },
  },
  ChatroomDocAccessFields_user1_id_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomDocAccessFields_user1_id_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomDocAccessFields_user1_id_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomDocAccessFields_user1_id_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomDocAccessFields_user2LastViewed: {
    __typename: { __type: 'String!' },
    create: { __type: 'ChatroomDocAccessFields_user2LastViewed_Create' },
    delete: { __type: 'ChatroomDocAccessFields_user2LastViewed_Delete' },
    read: { __type: 'ChatroomDocAccessFields_user2LastViewed_Read' },
    update: { __type: 'ChatroomDocAccessFields_user2LastViewed_Update' },
  },
  ChatroomDocAccessFields_user2LastViewed_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomDocAccessFields_user2LastViewed_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomDocAccessFields_user2LastViewed_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomDocAccessFields_user2LastViewed_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomDocAccessFields_user2_id: {
    __typename: { __type: 'String!' },
    create: { __type: 'ChatroomDocAccessFields_user2_id_Create' },
    delete: { __type: 'ChatroomDocAccessFields_user2_id_Delete' },
    read: { __type: 'ChatroomDocAccessFields_user2_id_Read' },
    update: { __type: 'ChatroomDocAccessFields_user2_id_Update' },
  },
  ChatroomDocAccessFields_user2_id_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomDocAccessFields_user2_id_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomDocAccessFields_user2_id_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomDocAccessFields_user2_id_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomFields: {
    __typename: { __type: 'String!' },
    createdAt: { __type: 'ChatroomFields_createdAt' },
    lastMessage: { __type: 'ChatroomFields_lastMessage' },
    updatedAt: { __type: 'ChatroomFields_updatedAt' },
    user1LastViewed: { __type: 'ChatroomFields_user1LastViewed' },
    user1_id: { __type: 'ChatroomFields_user1_id' },
    user2LastViewed: { __type: 'ChatroomFields_user2LastViewed' },
    user2_id: { __type: 'ChatroomFields_user2_id' },
  },
  ChatroomFields_createdAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'ChatroomFields_createdAt_Create' },
    delete: { __type: 'ChatroomFields_createdAt_Delete' },
    read: { __type: 'ChatroomFields_createdAt_Read' },
    update: { __type: 'ChatroomFields_createdAt_Update' },
  },
  ChatroomFields_createdAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomFields_createdAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomFields_createdAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomFields_createdAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomFields_lastMessage: {
    __typename: { __type: 'String!' },
    create: { __type: 'ChatroomFields_lastMessage_Create' },
    delete: { __type: 'ChatroomFields_lastMessage_Delete' },
    read: { __type: 'ChatroomFields_lastMessage_Read' },
    update: { __type: 'ChatroomFields_lastMessage_Update' },
  },
  ChatroomFields_lastMessage_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomFields_lastMessage_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomFields_lastMessage_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomFields_lastMessage_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomFields_updatedAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'ChatroomFields_updatedAt_Create' },
    delete: { __type: 'ChatroomFields_updatedAt_Delete' },
    read: { __type: 'ChatroomFields_updatedAt_Read' },
    update: { __type: 'ChatroomFields_updatedAt_Update' },
  },
  ChatroomFields_updatedAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomFields_updatedAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomFields_updatedAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomFields_updatedAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomFields_user1LastViewed: {
    __typename: { __type: 'String!' },
    create: { __type: 'ChatroomFields_user1LastViewed_Create' },
    delete: { __type: 'ChatroomFields_user1LastViewed_Delete' },
    read: { __type: 'ChatroomFields_user1LastViewed_Read' },
    update: { __type: 'ChatroomFields_user1LastViewed_Update' },
  },
  ChatroomFields_user1LastViewed_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomFields_user1LastViewed_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomFields_user1LastViewed_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomFields_user1LastViewed_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomFields_user1_id: {
    __typename: { __type: 'String!' },
    create: { __type: 'ChatroomFields_user1_id_Create' },
    delete: { __type: 'ChatroomFields_user1_id_Delete' },
    read: { __type: 'ChatroomFields_user1_id_Read' },
    update: { __type: 'ChatroomFields_user1_id_Update' },
  },
  ChatroomFields_user1_id_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomFields_user1_id_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomFields_user1_id_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomFields_user1_id_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomFields_user2LastViewed: {
    __typename: { __type: 'String!' },
    create: { __type: 'ChatroomFields_user2LastViewed_Create' },
    delete: { __type: 'ChatroomFields_user2LastViewed_Delete' },
    read: { __type: 'ChatroomFields_user2LastViewed_Read' },
    update: { __type: 'ChatroomFields_user2LastViewed_Update' },
  },
  ChatroomFields_user2LastViewed_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomFields_user2LastViewed_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomFields_user2LastViewed_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomFields_user2LastViewed_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomFields_user2_id: {
    __typename: { __type: 'String!' },
    create: { __type: 'ChatroomFields_user2_id_Create' },
    delete: { __type: 'ChatroomFields_user2_id_Delete' },
    read: { __type: 'ChatroomFields_user2_id_Read' },
    update: { __type: 'ChatroomFields_user2_id_Update' },
  },
  ChatroomFields_user2_id_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomFields_user2_id_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomFields_user2_id_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomFields_user2_id_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ChatroomReadAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  ChatroomReadDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  ChatroomUpdateAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  ChatroomUpdateDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  Chatroom_createdAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  Chatroom_id_operator: {
    equals: { __type: 'Int' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Int' },
    greater_than_equal: { __type: 'Int' },
    less_than: { __type: 'Int' },
    less_than_equal: { __type: 'Int' },
    not_equals: { __type: 'Int' },
  },
  Chatroom_lastMessage_operator: {
    all: { __type: '[JSON]' },
    equals: { __type: 'JSON' },
    exists: { __type: 'Boolean' },
    in: { __type: '[JSON]' },
    not_equals: { __type: 'JSON' },
    not_in: { __type: '[JSON]' },
  },
  Chatroom_updatedAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  Chatroom_user1LastViewed_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  Chatroom_user1_id_operator: {
    all: { __type: '[JSON]' },
    equals: { __type: 'JSON' },
    in: { __type: '[JSON]' },
    not_equals: { __type: 'JSON' },
    not_in: { __type: '[JSON]' },
  },
  Chatroom_user2LastViewed_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  Chatroom_user2_id_operator: {
    all: { __type: '[JSON]' },
    equals: { __type: 'JSON' },
    in: { __type: '[JSON]' },
    not_equals: { __type: 'JSON' },
    not_in: { __type: '[JSON]' },
  },
  Chatroom_where: {
    AND: { __type: '[Chatroom_where_and]' },
    OR: { __type: '[Chatroom_where_or]' },
    createdAt: { __type: 'Chatroom_createdAt_operator' },
    id: { __type: 'Chatroom_id_operator' },
    lastMessage: { __type: 'Chatroom_lastMessage_operator' },
    updatedAt: { __type: 'Chatroom_updatedAt_operator' },
    user1LastViewed: { __type: 'Chatroom_user1LastViewed_operator' },
    user1_id: { __type: 'Chatroom_user1_id_operator' },
    user2LastViewed: { __type: 'Chatroom_user2LastViewed_operator' },
    user2_id: { __type: 'Chatroom_user2_id_operator' },
  },
  Chatroom_where_and: {
    createdAt: { __type: 'Chatroom_createdAt_operator' },
    id: { __type: 'Chatroom_id_operator' },
    lastMessage: { __type: 'Chatroom_lastMessage_operator' },
    updatedAt: { __type: 'Chatroom_updatedAt_operator' },
    user1LastViewed: { __type: 'Chatroom_user1LastViewed_operator' },
    user1_id: { __type: 'Chatroom_user1_id_operator' },
    user2LastViewed: { __type: 'Chatroom_user2LastViewed_operator' },
    user2_id: { __type: 'Chatroom_user2_id_operator' },
  },
  Chatroom_where_or: {
    createdAt: { __type: 'Chatroom_createdAt_operator' },
    id: { __type: 'Chatroom_id_operator' },
    lastMessage: { __type: 'Chatroom_lastMessage_operator' },
    updatedAt: { __type: 'Chatroom_updatedAt_operator' },
    user1LastViewed: { __type: 'Chatroom_user1LastViewed_operator' },
    user1_id: { __type: 'Chatroom_user1_id_operator' },
    user2LastViewed: { __type: 'Chatroom_user2LastViewed_operator' },
    user2_id: { __type: 'Chatroom_user2_id_operator' },
  },
  Chatrooms: {
    __typename: { __type: 'String!' },
    docs: { __type: '[Chatroom]' },
    hasNextPage: { __type: 'Boolean' },
    hasPrevPage: { __type: 'Boolean' },
    limit: { __type: 'Int' },
    nextPage: { __type: 'Int' },
    offset: { __type: 'Int' },
    page: { __type: 'Int' },
    pagingCounter: { __type: 'Int' },
    prevPage: { __type: 'Int' },
    totalDocs: { __type: 'Int' },
    totalPages: { __type: 'Int' },
  },
  Item: {
    __typename: { __type: 'String!' },
    _status: { __type: 'Item__status' },
    availableAt: { __type: 'DateTime' },
    createdAt: { __type: 'DateTime' },
    createdBy: { __type: 'User' },
    description: { __type: 'String' },
    end: { __type: 'DateTime' },
    id: { __type: 'Int' },
    image: { __type: '[Media!]' },
    name: { __type: 'String' },
    period: { __type: 'Float' },
    periodType: { __type: 'Item_periodType' },
    price: { __type: 'Float' },
    rating: { __type: 'Float' },
    rentingStatus: { __type: 'Item_rentingStatus' },
    start: { __type: 'DateTime' },
    tags: { __type: '[Tag!]' },
    updatedAt: { __type: 'DateTime' },
  },
  ItemVersion: {
    __typename: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    id: { __type: 'Int' },
    latest: { __type: 'Boolean' },
    parent: { __type: 'Item' },
    updatedAt: { __type: 'DateTime' },
    version: { __type: 'ItemVersion_Version' },
  },
  ItemVersion_Version: {
    __typename: { __type: 'String!' },
    _status: { __type: 'ItemVersion_Version__status' },
    availableAt: { __type: 'DateTime' },
    createdAt: { __type: 'DateTime' },
    createdBy: { __type: 'User' },
    description: { __type: 'String' },
    end: { __type: 'DateTime' },
    image: { __type: '[Media!]' },
    name: { __type: 'String' },
    period: { __type: 'Float' },
    periodType: { __type: 'ItemVersion_Version_periodType' },
    price: { __type: 'Float' },
    rating: { __type: 'Float' },
    rentingStatus: { __type: 'ItemVersion_Version_rentingStatus' },
    start: { __type: 'DateTime' },
    tags: { __type: '[Tag!]' },
    updatedAt: { __type: 'DateTime' },
  },
  Item__status_operator: {
    all: { __type: '[Item__status_Input]' },
    equals: { __type: 'Item__status_Input' },
    exists: { __type: 'Boolean' },
    in: { __type: '[Item__status_Input]' },
    not_equals: { __type: 'Item__status_Input' },
    not_in: { __type: '[Item__status_Input]' },
  },
  Item_availableAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  Item_createdAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  Item_createdBy_operator: {
    all: { __type: '[JSON]' },
    equals: { __type: 'JSON' },
    in: { __type: '[JSON]' },
    not_equals: { __type: 'JSON' },
    not_in: { __type: '[JSON]' },
  },
  Item_description_operator: {
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
  },
  Item_end_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  Item_id_operator: {
    equals: { __type: 'Int' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Int' },
    greater_than_equal: { __type: 'Int' },
    less_than: { __type: 'Int' },
    less_than_equal: { __type: 'Int' },
    not_equals: { __type: 'Int' },
  },
  Item_image_operator: {
    all: { __type: '[JSON]' },
    equals: { __type: 'JSON' },
    in: { __type: '[JSON]' },
    not_equals: { __type: 'JSON' },
    not_in: { __type: '[JSON]' },
  },
  Item_name_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Item_periodType_operator: {
    all: { __type: '[Item_periodType_Input]' },
    equals: { __type: 'Item_periodType_Input' },
    exists: { __type: 'Boolean' },
    in: { __type: '[Item_periodType_Input]' },
    not_equals: { __type: 'Item_periodType_Input' },
    not_in: { __type: '[Item_periodType_Input]' },
  },
  Item_period_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Item_price_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Item_rating_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Item_rentingStatus_operator: {
    all: { __type: '[Item_rentingStatus_Input]' },
    equals: { __type: 'Item_rentingStatus_Input' },
    exists: { __type: 'Boolean' },
    in: { __type: '[Item_rentingStatus_Input]' },
    not_equals: { __type: 'Item_rentingStatus_Input' },
    not_in: { __type: '[Item_rentingStatus_Input]' },
  },
  Item_start_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  Item_tags_operator: {
    all: { __type: '[JSON]' },
    equals: { __type: 'JSON' },
    exists: { __type: 'Boolean' },
    in: { __type: '[JSON]' },
    not_equals: { __type: 'JSON' },
    not_in: { __type: '[JSON]' },
  },
  Item_updatedAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  Item_where: {
    AND: { __type: '[Item_where_and]' },
    OR: { __type: '[Item_where_or]' },
    _status: { __type: 'Item__status_operator' },
    availableAt: { __type: 'Item_availableAt_operator' },
    createdAt: { __type: 'Item_createdAt_operator' },
    createdBy: { __type: 'Item_createdBy_operator' },
    description: { __type: 'Item_description_operator' },
    end: { __type: 'Item_end_operator' },
    id: { __type: 'Item_id_operator' },
    image: { __type: 'Item_image_operator' },
    name: { __type: 'Item_name_operator' },
    period: { __type: 'Item_period_operator' },
    periodType: { __type: 'Item_periodType_operator' },
    price: { __type: 'Item_price_operator' },
    rating: { __type: 'Item_rating_operator' },
    rentingStatus: { __type: 'Item_rentingStatus_operator' },
    start: { __type: 'Item_start_operator' },
    tags: { __type: 'Item_tags_operator' },
    updatedAt: { __type: 'Item_updatedAt_operator' },
  },
  Item_where_and: {
    _status: { __type: 'Item__status_operator' },
    availableAt: { __type: 'Item_availableAt_operator' },
    createdAt: { __type: 'Item_createdAt_operator' },
    createdBy: { __type: 'Item_createdBy_operator' },
    description: { __type: 'Item_description_operator' },
    end: { __type: 'Item_end_operator' },
    id: { __type: 'Item_id_operator' },
    image: { __type: 'Item_image_operator' },
    name: { __type: 'Item_name_operator' },
    period: { __type: 'Item_period_operator' },
    periodType: { __type: 'Item_periodType_operator' },
    price: { __type: 'Item_price_operator' },
    rating: { __type: 'Item_rating_operator' },
    rentingStatus: { __type: 'Item_rentingStatus_operator' },
    start: { __type: 'Item_start_operator' },
    tags: { __type: 'Item_tags_operator' },
    updatedAt: { __type: 'Item_updatedAt_operator' },
  },
  Item_where_or: {
    _status: { __type: 'Item__status_operator' },
    availableAt: { __type: 'Item_availableAt_operator' },
    createdAt: { __type: 'Item_createdAt_operator' },
    createdBy: { __type: 'Item_createdBy_operator' },
    description: { __type: 'Item_description_operator' },
    end: { __type: 'Item_end_operator' },
    id: { __type: 'Item_id_operator' },
    image: { __type: 'Item_image_operator' },
    name: { __type: 'Item_name_operator' },
    period: { __type: 'Item_period_operator' },
    periodType: { __type: 'Item_periodType_operator' },
    price: { __type: 'Item_price_operator' },
    rating: { __type: 'Item_rating_operator' },
    rentingStatus: { __type: 'Item_rentingStatus_operator' },
    start: { __type: 'Item_start_operator' },
    tags: { __type: 'Item_tags_operator' },
    updatedAt: { __type: 'Item_updatedAt_operator' },
  },
  Items: {
    __typename: { __type: 'String!' },
    docs: { __type: '[Item]' },
    hasNextPage: { __type: 'Boolean' },
    hasPrevPage: { __type: 'Boolean' },
    limit: { __type: 'Int' },
    nextPage: { __type: 'Int' },
    offset: { __type: 'Int' },
    page: { __type: 'Int' },
    pagingCounter: { __type: 'Int' },
    prevPage: { __type: 'Int' },
    totalDocs: { __type: 'Int' },
    totalPages: { __type: 'Int' },
  },
  ItemsCreateAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  ItemsCreateDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  ItemsDeleteAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  ItemsDeleteDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  ItemsDocAccessFields: {
    __typename: { __type: 'String!' },
    _status: { __type: 'ItemsDocAccessFields__status' },
    availableAt: { __type: 'ItemsDocAccessFields_availableAt' },
    createdAt: { __type: 'ItemsDocAccessFields_createdAt' },
    createdBy: { __type: 'ItemsDocAccessFields_createdBy' },
    description: { __type: 'ItemsDocAccessFields_description' },
    end: { __type: 'ItemsDocAccessFields_end' },
    image: { __type: 'ItemsDocAccessFields_image' },
    name: { __type: 'ItemsDocAccessFields_name' },
    period: { __type: 'ItemsDocAccessFields_period' },
    periodType: { __type: 'ItemsDocAccessFields_periodType' },
    price: { __type: 'ItemsDocAccessFields_price' },
    rating: { __type: 'ItemsDocAccessFields_rating' },
    rentingStatus: { __type: 'ItemsDocAccessFields_rentingStatus' },
    start: { __type: 'ItemsDocAccessFields_start' },
    tags: { __type: 'ItemsDocAccessFields_tags' },
    updatedAt: { __type: 'ItemsDocAccessFields_updatedAt' },
  },
  ItemsDocAccessFields__status: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsDocAccessFields__status_Create' },
    delete: { __type: 'ItemsDocAccessFields__status_Delete' },
    read: { __type: 'ItemsDocAccessFields__status_Read' },
    update: { __type: 'ItemsDocAccessFields__status_Update' },
  },
  ItemsDocAccessFields__status_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields__status_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields__status_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields__status_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_availableAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsDocAccessFields_availableAt_Create' },
    delete: { __type: 'ItemsDocAccessFields_availableAt_Delete' },
    read: { __type: 'ItemsDocAccessFields_availableAt_Read' },
    update: { __type: 'ItemsDocAccessFields_availableAt_Update' },
  },
  ItemsDocAccessFields_availableAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_availableAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_availableAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_availableAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_createdAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsDocAccessFields_createdAt_Create' },
    delete: { __type: 'ItemsDocAccessFields_createdAt_Delete' },
    read: { __type: 'ItemsDocAccessFields_createdAt_Read' },
    update: { __type: 'ItemsDocAccessFields_createdAt_Update' },
  },
  ItemsDocAccessFields_createdAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_createdAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_createdAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_createdAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_createdBy: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsDocAccessFields_createdBy_Create' },
    delete: { __type: 'ItemsDocAccessFields_createdBy_Delete' },
    read: { __type: 'ItemsDocAccessFields_createdBy_Read' },
    update: { __type: 'ItemsDocAccessFields_createdBy_Update' },
  },
  ItemsDocAccessFields_createdBy_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_createdBy_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_createdBy_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_createdBy_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_description: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsDocAccessFields_description_Create' },
    delete: { __type: 'ItemsDocAccessFields_description_Delete' },
    read: { __type: 'ItemsDocAccessFields_description_Read' },
    update: { __type: 'ItemsDocAccessFields_description_Update' },
  },
  ItemsDocAccessFields_description_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_description_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_description_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_description_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_end: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsDocAccessFields_end_Create' },
    delete: { __type: 'ItemsDocAccessFields_end_Delete' },
    read: { __type: 'ItemsDocAccessFields_end_Read' },
    update: { __type: 'ItemsDocAccessFields_end_Update' },
  },
  ItemsDocAccessFields_end_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_end_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_end_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_end_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_image: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsDocAccessFields_image_Create' },
    delete: { __type: 'ItemsDocAccessFields_image_Delete' },
    read: { __type: 'ItemsDocAccessFields_image_Read' },
    update: { __type: 'ItemsDocAccessFields_image_Update' },
  },
  ItemsDocAccessFields_image_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_image_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_image_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_image_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_name: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsDocAccessFields_name_Create' },
    delete: { __type: 'ItemsDocAccessFields_name_Delete' },
    read: { __type: 'ItemsDocAccessFields_name_Read' },
    update: { __type: 'ItemsDocAccessFields_name_Update' },
  },
  ItemsDocAccessFields_name_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_name_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_name_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_name_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_period: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsDocAccessFields_period_Create' },
    delete: { __type: 'ItemsDocAccessFields_period_Delete' },
    read: { __type: 'ItemsDocAccessFields_period_Read' },
    update: { __type: 'ItemsDocAccessFields_period_Update' },
  },
  ItemsDocAccessFields_periodType: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsDocAccessFields_periodType_Create' },
    delete: { __type: 'ItemsDocAccessFields_periodType_Delete' },
    read: { __type: 'ItemsDocAccessFields_periodType_Read' },
    update: { __type: 'ItemsDocAccessFields_periodType_Update' },
  },
  ItemsDocAccessFields_periodType_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_periodType_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_periodType_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_periodType_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_period_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_period_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_period_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_period_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_price: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsDocAccessFields_price_Create' },
    delete: { __type: 'ItemsDocAccessFields_price_Delete' },
    read: { __type: 'ItemsDocAccessFields_price_Read' },
    update: { __type: 'ItemsDocAccessFields_price_Update' },
  },
  ItemsDocAccessFields_price_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_price_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_price_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_price_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_rating: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsDocAccessFields_rating_Create' },
    delete: { __type: 'ItemsDocAccessFields_rating_Delete' },
    read: { __type: 'ItemsDocAccessFields_rating_Read' },
    update: { __type: 'ItemsDocAccessFields_rating_Update' },
  },
  ItemsDocAccessFields_rating_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_rating_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_rating_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_rating_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_rentingStatus: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsDocAccessFields_rentingStatus_Create' },
    delete: { __type: 'ItemsDocAccessFields_rentingStatus_Delete' },
    read: { __type: 'ItemsDocAccessFields_rentingStatus_Read' },
    update: { __type: 'ItemsDocAccessFields_rentingStatus_Update' },
  },
  ItemsDocAccessFields_rentingStatus_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_rentingStatus_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_rentingStatus_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_rentingStatus_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_start: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsDocAccessFields_start_Create' },
    delete: { __type: 'ItemsDocAccessFields_start_Delete' },
    read: { __type: 'ItemsDocAccessFields_start_Read' },
    update: { __type: 'ItemsDocAccessFields_start_Update' },
  },
  ItemsDocAccessFields_start_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_start_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_start_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_start_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_tags: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsDocAccessFields_tags_Create' },
    delete: { __type: 'ItemsDocAccessFields_tags_Delete' },
    read: { __type: 'ItemsDocAccessFields_tags_Read' },
    update: { __type: 'ItemsDocAccessFields_tags_Update' },
  },
  ItemsDocAccessFields_tags_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_tags_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_tags_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_tags_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_updatedAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsDocAccessFields_updatedAt_Create' },
    delete: { __type: 'ItemsDocAccessFields_updatedAt_Delete' },
    read: { __type: 'ItemsDocAccessFields_updatedAt_Read' },
    update: { __type: 'ItemsDocAccessFields_updatedAt_Update' },
  },
  ItemsDocAccessFields_updatedAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_updatedAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_updatedAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsDocAccessFields_updatedAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields: {
    __typename: { __type: 'String!' },
    _status: { __type: 'ItemsFields__status' },
    availableAt: { __type: 'ItemsFields_availableAt' },
    createdAt: { __type: 'ItemsFields_createdAt' },
    createdBy: { __type: 'ItemsFields_createdBy' },
    description: { __type: 'ItemsFields_description' },
    end: { __type: 'ItemsFields_end' },
    image: { __type: 'ItemsFields_image' },
    name: { __type: 'ItemsFields_name' },
    period: { __type: 'ItemsFields_period' },
    periodType: { __type: 'ItemsFields_periodType' },
    price: { __type: 'ItemsFields_price' },
    rating: { __type: 'ItemsFields_rating' },
    rentingStatus: { __type: 'ItemsFields_rentingStatus' },
    start: { __type: 'ItemsFields_start' },
    tags: { __type: 'ItemsFields_tags' },
    updatedAt: { __type: 'ItemsFields_updatedAt' },
  },
  ItemsFields__status: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsFields__status_Create' },
    delete: { __type: 'ItemsFields__status_Delete' },
    read: { __type: 'ItemsFields__status_Read' },
    update: { __type: 'ItemsFields__status_Update' },
  },
  ItemsFields__status_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields__status_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields__status_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields__status_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_availableAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsFields_availableAt_Create' },
    delete: { __type: 'ItemsFields_availableAt_Delete' },
    read: { __type: 'ItemsFields_availableAt_Read' },
    update: { __type: 'ItemsFields_availableAt_Update' },
  },
  ItemsFields_availableAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_availableAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_availableAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_availableAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_createdAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsFields_createdAt_Create' },
    delete: { __type: 'ItemsFields_createdAt_Delete' },
    read: { __type: 'ItemsFields_createdAt_Read' },
    update: { __type: 'ItemsFields_createdAt_Update' },
  },
  ItemsFields_createdAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_createdAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_createdAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_createdAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_createdBy: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsFields_createdBy_Create' },
    delete: { __type: 'ItemsFields_createdBy_Delete' },
    read: { __type: 'ItemsFields_createdBy_Read' },
    update: { __type: 'ItemsFields_createdBy_Update' },
  },
  ItemsFields_createdBy_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_createdBy_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_createdBy_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_createdBy_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_description: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsFields_description_Create' },
    delete: { __type: 'ItemsFields_description_Delete' },
    read: { __type: 'ItemsFields_description_Read' },
    update: { __type: 'ItemsFields_description_Update' },
  },
  ItemsFields_description_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_description_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_description_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_description_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_end: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsFields_end_Create' },
    delete: { __type: 'ItemsFields_end_Delete' },
    read: { __type: 'ItemsFields_end_Read' },
    update: { __type: 'ItemsFields_end_Update' },
  },
  ItemsFields_end_Create: { __typename: { __type: 'String!' }, permission: { __type: 'Boolean!' } },
  ItemsFields_end_Delete: { __typename: { __type: 'String!' }, permission: { __type: 'Boolean!' } },
  ItemsFields_end_Read: { __typename: { __type: 'String!' }, permission: { __type: 'Boolean!' } },
  ItemsFields_end_Update: { __typename: { __type: 'String!' }, permission: { __type: 'Boolean!' } },
  ItemsFields_image: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsFields_image_Create' },
    delete: { __type: 'ItemsFields_image_Delete' },
    read: { __type: 'ItemsFields_image_Read' },
    update: { __type: 'ItemsFields_image_Update' },
  },
  ItemsFields_image_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_image_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_image_Read: { __typename: { __type: 'String!' }, permission: { __type: 'Boolean!' } },
  ItemsFields_image_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_name: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsFields_name_Create' },
    delete: { __type: 'ItemsFields_name_Delete' },
    read: { __type: 'ItemsFields_name_Read' },
    update: { __type: 'ItemsFields_name_Update' },
  },
  ItemsFields_name_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_name_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_name_Read: { __typename: { __type: 'String!' }, permission: { __type: 'Boolean!' } },
  ItemsFields_name_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_period: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsFields_period_Create' },
    delete: { __type: 'ItemsFields_period_Delete' },
    read: { __type: 'ItemsFields_period_Read' },
    update: { __type: 'ItemsFields_period_Update' },
  },
  ItemsFields_periodType: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsFields_periodType_Create' },
    delete: { __type: 'ItemsFields_periodType_Delete' },
    read: { __type: 'ItemsFields_periodType_Read' },
    update: { __type: 'ItemsFields_periodType_Update' },
  },
  ItemsFields_periodType_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_periodType_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_periodType_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_periodType_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_period_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_period_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_period_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_period_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_price: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsFields_price_Create' },
    delete: { __type: 'ItemsFields_price_Delete' },
    read: { __type: 'ItemsFields_price_Read' },
    update: { __type: 'ItemsFields_price_Update' },
  },
  ItemsFields_price_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_price_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_price_Read: { __typename: { __type: 'String!' }, permission: { __type: 'Boolean!' } },
  ItemsFields_price_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_rating: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsFields_rating_Create' },
    delete: { __type: 'ItemsFields_rating_Delete' },
    read: { __type: 'ItemsFields_rating_Read' },
    update: { __type: 'ItemsFields_rating_Update' },
  },
  ItemsFields_rating_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_rating_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_rating_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_rating_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_rentingStatus: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsFields_rentingStatus_Create' },
    delete: { __type: 'ItemsFields_rentingStatus_Delete' },
    read: { __type: 'ItemsFields_rentingStatus_Read' },
    update: { __type: 'ItemsFields_rentingStatus_Update' },
  },
  ItemsFields_rentingStatus_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_rentingStatus_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_rentingStatus_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_rentingStatus_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_start: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsFields_start_Create' },
    delete: { __type: 'ItemsFields_start_Delete' },
    read: { __type: 'ItemsFields_start_Read' },
    update: { __type: 'ItemsFields_start_Update' },
  },
  ItemsFields_start_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_start_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_start_Read: { __typename: { __type: 'String!' }, permission: { __type: 'Boolean!' } },
  ItemsFields_start_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_tags: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsFields_tags_Create' },
    delete: { __type: 'ItemsFields_tags_Delete' },
    read: { __type: 'ItemsFields_tags_Read' },
    update: { __type: 'ItemsFields_tags_Update' },
  },
  ItemsFields_tags_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_tags_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_tags_Read: { __typename: { __type: 'String!' }, permission: { __type: 'Boolean!' } },
  ItemsFields_tags_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_updatedAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsFields_updatedAt_Create' },
    delete: { __type: 'ItemsFields_updatedAt_Delete' },
    read: { __type: 'ItemsFields_updatedAt_Read' },
    update: { __type: 'ItemsFields_updatedAt_Update' },
  },
  ItemsFields_updatedAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_updatedAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_updatedAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsFields_updatedAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  ItemsReadAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  ItemsReadDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  ItemsReadVersionsAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  ItemsReadVersionsDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  ItemsUpdateAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  ItemsUpdateDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  Media: {
    __typename: { __type: 'String!' },
    alt: { __type: 'String' },
    createdAt: { __type: 'DateTime' },
    createdBy: { __type: 'User!' },
    filename: { __type: 'String' },
    filesize: { __type: 'Float' },
    height: { __type: 'Float' },
    id: { __type: 'Int' },
    mimeType: { __type: 'String' },
    name: { __type: 'String' },
    updatedAt: { __type: 'DateTime' },
    url: { __type: 'String' },
    width: { __type: 'Float' },
  },
  Media_alt_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Media_createdAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  Media_filename_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Media_filesize_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Media_height_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Media_id_operator: {
    equals: { __type: 'Int' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Int' },
    greater_than_equal: { __type: 'Int' },
    less_than: { __type: 'Int' },
    less_than_equal: { __type: 'Int' },
    not_equals: { __type: 'Int' },
  },
  Media_mimeType_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Media_name_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Media_updatedAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  Media_url_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Media_where: {
    AND: { __type: '[Media_where_and]' },
    OR: { __type: '[Media_where_or]' },
    alt: { __type: 'Media_alt_operator' },
    createdAt: { __type: 'Media_createdAt_operator' },
    filename: { __type: 'Media_filename_operator' },
    filesize: { __type: 'Media_filesize_operator' },
    height: { __type: 'Media_height_operator' },
    id: { __type: 'Media_id_operator' },
    mimeType: { __type: 'Media_mimeType_operator' },
    name: { __type: 'Media_name_operator' },
    updatedAt: { __type: 'Media_updatedAt_operator' },
    url: { __type: 'Media_url_operator' },
    width: { __type: 'Media_width_operator' },
  },
  Media_where_and: {
    alt: { __type: 'Media_alt_operator' },
    createdAt: { __type: 'Media_createdAt_operator' },
    filename: { __type: 'Media_filename_operator' },
    filesize: { __type: 'Media_filesize_operator' },
    height: { __type: 'Media_height_operator' },
    id: { __type: 'Media_id_operator' },
    mimeType: { __type: 'Media_mimeType_operator' },
    name: { __type: 'Media_name_operator' },
    updatedAt: { __type: 'Media_updatedAt_operator' },
    url: { __type: 'Media_url_operator' },
    width: { __type: 'Media_width_operator' },
  },
  Media_where_or: {
    alt: { __type: 'Media_alt_operator' },
    createdAt: { __type: 'Media_createdAt_operator' },
    filename: { __type: 'Media_filename_operator' },
    filesize: { __type: 'Media_filesize_operator' },
    height: { __type: 'Media_height_operator' },
    id: { __type: 'Media_id_operator' },
    mimeType: { __type: 'Media_mimeType_operator' },
    name: { __type: 'Media_name_operator' },
    updatedAt: { __type: 'Media_updatedAt_operator' },
    url: { __type: 'Media_url_operator' },
    width: { __type: 'Media_width_operator' },
  },
  Media_width_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Medias: {
    __typename: { __type: 'String!' },
    docs: { __type: '[Media]' },
    hasNextPage: { __type: 'Boolean' },
    hasPrevPage: { __type: 'Boolean' },
    limit: { __type: 'Int' },
    nextPage: { __type: 'Int' },
    offset: { __type: 'Int' },
    page: { __type: 'Int' },
    pagingCounter: { __type: 'Int' },
    prevPage: { __type: 'Int' },
    totalDocs: { __type: 'Int' },
    totalPages: { __type: 'Int' },
  },
  MediasCreateAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  MediasCreateDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  MediasDeleteAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  MediasDeleteDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  MediasDocAccessFields: {
    __typename: { __type: 'String!' },
    alt: { __type: 'MediasDocAccessFields_alt' },
    createdAt: { __type: 'MediasDocAccessFields_createdAt' },
    filename: { __type: 'MediasDocAccessFields_filename' },
    filesize: { __type: 'MediasDocAccessFields_filesize' },
    height: { __type: 'MediasDocAccessFields_height' },
    mimeType: { __type: 'MediasDocAccessFields_mimeType' },
    name: { __type: 'MediasDocAccessFields_name' },
    updatedAt: { __type: 'MediasDocAccessFields_updatedAt' },
    url: { __type: 'MediasDocAccessFields_url' },
    width: { __type: 'MediasDocAccessFields_width' },
  },
  MediasDocAccessFields_alt: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediasDocAccessFields_alt_Create' },
    delete: { __type: 'MediasDocAccessFields_alt_Delete' },
    read: { __type: 'MediasDocAccessFields_alt_Read' },
    update: { __type: 'MediasDocAccessFields_alt_Update' },
  },
  MediasDocAccessFields_alt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_alt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_alt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_alt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_createdAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediasDocAccessFields_createdAt_Create' },
    delete: { __type: 'MediasDocAccessFields_createdAt_Delete' },
    read: { __type: 'MediasDocAccessFields_createdAt_Read' },
    update: { __type: 'MediasDocAccessFields_createdAt_Update' },
  },
  MediasDocAccessFields_createdAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_createdAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_createdAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_createdAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_filename: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediasDocAccessFields_filename_Create' },
    delete: { __type: 'MediasDocAccessFields_filename_Delete' },
    read: { __type: 'MediasDocAccessFields_filename_Read' },
    update: { __type: 'MediasDocAccessFields_filename_Update' },
  },
  MediasDocAccessFields_filename_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_filename_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_filename_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_filename_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_filesize: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediasDocAccessFields_filesize_Create' },
    delete: { __type: 'MediasDocAccessFields_filesize_Delete' },
    read: { __type: 'MediasDocAccessFields_filesize_Read' },
    update: { __type: 'MediasDocAccessFields_filesize_Update' },
  },
  MediasDocAccessFields_filesize_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_filesize_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_filesize_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_filesize_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_height: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediasDocAccessFields_height_Create' },
    delete: { __type: 'MediasDocAccessFields_height_Delete' },
    read: { __type: 'MediasDocAccessFields_height_Read' },
    update: { __type: 'MediasDocAccessFields_height_Update' },
  },
  MediasDocAccessFields_height_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_height_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_height_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_height_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_mimeType: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediasDocAccessFields_mimeType_Create' },
    delete: { __type: 'MediasDocAccessFields_mimeType_Delete' },
    read: { __type: 'MediasDocAccessFields_mimeType_Read' },
    update: { __type: 'MediasDocAccessFields_mimeType_Update' },
  },
  MediasDocAccessFields_mimeType_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_mimeType_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_mimeType_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_mimeType_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_name: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediasDocAccessFields_name_Create' },
    delete: { __type: 'MediasDocAccessFields_name_Delete' },
    read: { __type: 'MediasDocAccessFields_name_Read' },
    update: { __type: 'MediasDocAccessFields_name_Update' },
  },
  MediasDocAccessFields_name_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_name_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_name_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_name_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_updatedAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediasDocAccessFields_updatedAt_Create' },
    delete: { __type: 'MediasDocAccessFields_updatedAt_Delete' },
    read: { __type: 'MediasDocAccessFields_updatedAt_Read' },
    update: { __type: 'MediasDocAccessFields_updatedAt_Update' },
  },
  MediasDocAccessFields_updatedAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_updatedAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_updatedAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_updatedAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_url: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediasDocAccessFields_url_Create' },
    delete: { __type: 'MediasDocAccessFields_url_Delete' },
    read: { __type: 'MediasDocAccessFields_url_Read' },
    update: { __type: 'MediasDocAccessFields_url_Update' },
  },
  MediasDocAccessFields_url_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_url_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_url_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_url_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_width: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediasDocAccessFields_width_Create' },
    delete: { __type: 'MediasDocAccessFields_width_Delete' },
    read: { __type: 'MediasDocAccessFields_width_Read' },
    update: { __type: 'MediasDocAccessFields_width_Update' },
  },
  MediasDocAccessFields_width_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_width_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_width_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasDocAccessFields_width_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields: {
    __typename: { __type: 'String!' },
    alt: { __type: 'MediasFields_alt' },
    createdAt: { __type: 'MediasFields_createdAt' },
    filename: { __type: 'MediasFields_filename' },
    filesize: { __type: 'MediasFields_filesize' },
    height: { __type: 'MediasFields_height' },
    mimeType: { __type: 'MediasFields_mimeType' },
    name: { __type: 'MediasFields_name' },
    updatedAt: { __type: 'MediasFields_updatedAt' },
    url: { __type: 'MediasFields_url' },
    width: { __type: 'MediasFields_width' },
  },
  MediasFields_alt: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediasFields_alt_Create' },
    delete: { __type: 'MediasFields_alt_Delete' },
    read: { __type: 'MediasFields_alt_Read' },
    update: { __type: 'MediasFields_alt_Update' },
  },
  MediasFields_alt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_alt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_alt_Read: { __typename: { __type: 'String!' }, permission: { __type: 'Boolean!' } },
  MediasFields_alt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_createdAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediasFields_createdAt_Create' },
    delete: { __type: 'MediasFields_createdAt_Delete' },
    read: { __type: 'MediasFields_createdAt_Read' },
    update: { __type: 'MediasFields_createdAt_Update' },
  },
  MediasFields_createdAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_createdAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_createdAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_createdAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_filename: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediasFields_filename_Create' },
    delete: { __type: 'MediasFields_filename_Delete' },
    read: { __type: 'MediasFields_filename_Read' },
    update: { __type: 'MediasFields_filename_Update' },
  },
  MediasFields_filename_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_filename_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_filename_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_filename_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_filesize: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediasFields_filesize_Create' },
    delete: { __type: 'MediasFields_filesize_Delete' },
    read: { __type: 'MediasFields_filesize_Read' },
    update: { __type: 'MediasFields_filesize_Update' },
  },
  MediasFields_filesize_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_filesize_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_filesize_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_filesize_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_height: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediasFields_height_Create' },
    delete: { __type: 'MediasFields_height_Delete' },
    read: { __type: 'MediasFields_height_Read' },
    update: { __type: 'MediasFields_height_Update' },
  },
  MediasFields_height_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_height_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_height_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_height_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_mimeType: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediasFields_mimeType_Create' },
    delete: { __type: 'MediasFields_mimeType_Delete' },
    read: { __type: 'MediasFields_mimeType_Read' },
    update: { __type: 'MediasFields_mimeType_Update' },
  },
  MediasFields_mimeType_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_mimeType_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_mimeType_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_mimeType_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_name: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediasFields_name_Create' },
    delete: { __type: 'MediasFields_name_Delete' },
    read: { __type: 'MediasFields_name_Read' },
    update: { __type: 'MediasFields_name_Update' },
  },
  MediasFields_name_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_name_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_name_Read: { __typename: { __type: 'String!' }, permission: { __type: 'Boolean!' } },
  MediasFields_name_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_updatedAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediasFields_updatedAt_Create' },
    delete: { __type: 'MediasFields_updatedAt_Delete' },
    read: { __type: 'MediasFields_updatedAt_Read' },
    update: { __type: 'MediasFields_updatedAt_Update' },
  },
  MediasFields_updatedAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_updatedAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_updatedAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_updatedAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_url: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediasFields_url_Create' },
    delete: { __type: 'MediasFields_url_Delete' },
    read: { __type: 'MediasFields_url_Read' },
    update: { __type: 'MediasFields_url_Update' },
  },
  MediasFields_url_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_url_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_url_Read: { __typename: { __type: 'String!' }, permission: { __type: 'Boolean!' } },
  MediasFields_url_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_width: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediasFields_width_Create' },
    delete: { __type: 'MediasFields_width_Delete' },
    read: { __type: 'MediasFields_width_Read' },
    update: { __type: 'MediasFields_width_Update' },
  },
  MediasFields_width_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_width_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_width_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasFields_width_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediasReadAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  MediasReadDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  MediasUpdateAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  MediasUpdateDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  Message: {
    __typename: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    createdBy: { __type: 'User!' },
    id: { __type: 'Int' },
    message: { __type: 'String' },
    room: { __type: 'Chatroom!' },
    updatedAt: { __type: 'DateTime' },
  },
  MessageCreateAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  MessageCreateDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  MessageDeleteAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  MessageDeleteDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  MessageDocAccessFields: {
    __typename: { __type: 'String!' },
    createdAt: { __type: 'MessageDocAccessFields_createdAt' },
    createdBy: { __type: 'MessageDocAccessFields_createdBy' },
    message: { __type: 'MessageDocAccessFields_message' },
    room: { __type: 'MessageDocAccessFields_room' },
    updatedAt: { __type: 'MessageDocAccessFields_updatedAt' },
  },
  MessageDocAccessFields_createdAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'MessageDocAccessFields_createdAt_Create' },
    delete: { __type: 'MessageDocAccessFields_createdAt_Delete' },
    read: { __type: 'MessageDocAccessFields_createdAt_Read' },
    update: { __type: 'MessageDocAccessFields_createdAt_Update' },
  },
  MessageDocAccessFields_createdAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageDocAccessFields_createdAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageDocAccessFields_createdAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageDocAccessFields_createdAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageDocAccessFields_createdBy: {
    __typename: { __type: 'String!' },
    create: { __type: 'MessageDocAccessFields_createdBy_Create' },
    delete: { __type: 'MessageDocAccessFields_createdBy_Delete' },
    read: { __type: 'MessageDocAccessFields_createdBy_Read' },
    update: { __type: 'MessageDocAccessFields_createdBy_Update' },
  },
  MessageDocAccessFields_createdBy_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageDocAccessFields_createdBy_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageDocAccessFields_createdBy_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageDocAccessFields_createdBy_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageDocAccessFields_message: {
    __typename: { __type: 'String!' },
    create: { __type: 'MessageDocAccessFields_message_Create' },
    delete: { __type: 'MessageDocAccessFields_message_Delete' },
    read: { __type: 'MessageDocAccessFields_message_Read' },
    update: { __type: 'MessageDocAccessFields_message_Update' },
  },
  MessageDocAccessFields_message_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageDocAccessFields_message_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageDocAccessFields_message_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageDocAccessFields_message_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageDocAccessFields_room: {
    __typename: { __type: 'String!' },
    create: { __type: 'MessageDocAccessFields_room_Create' },
    delete: { __type: 'MessageDocAccessFields_room_Delete' },
    read: { __type: 'MessageDocAccessFields_room_Read' },
    update: { __type: 'MessageDocAccessFields_room_Update' },
  },
  MessageDocAccessFields_room_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageDocAccessFields_room_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageDocAccessFields_room_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageDocAccessFields_room_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageDocAccessFields_updatedAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'MessageDocAccessFields_updatedAt_Create' },
    delete: { __type: 'MessageDocAccessFields_updatedAt_Delete' },
    read: { __type: 'MessageDocAccessFields_updatedAt_Read' },
    update: { __type: 'MessageDocAccessFields_updatedAt_Update' },
  },
  MessageDocAccessFields_updatedAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageDocAccessFields_updatedAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageDocAccessFields_updatedAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageDocAccessFields_updatedAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageFields: {
    __typename: { __type: 'String!' },
    createdAt: { __type: 'MessageFields_createdAt' },
    createdBy: { __type: 'MessageFields_createdBy' },
    message: { __type: 'MessageFields_message' },
    room: { __type: 'MessageFields_room' },
    updatedAt: { __type: 'MessageFields_updatedAt' },
  },
  MessageFields_createdAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'MessageFields_createdAt_Create' },
    delete: { __type: 'MessageFields_createdAt_Delete' },
    read: { __type: 'MessageFields_createdAt_Read' },
    update: { __type: 'MessageFields_createdAt_Update' },
  },
  MessageFields_createdAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageFields_createdAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageFields_createdAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageFields_createdAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageFields_createdBy: {
    __typename: { __type: 'String!' },
    create: { __type: 'MessageFields_createdBy_Create' },
    delete: { __type: 'MessageFields_createdBy_Delete' },
    read: { __type: 'MessageFields_createdBy_Read' },
    update: { __type: 'MessageFields_createdBy_Update' },
  },
  MessageFields_createdBy_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageFields_createdBy_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageFields_createdBy_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageFields_createdBy_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageFields_message: {
    __typename: { __type: 'String!' },
    create: { __type: 'MessageFields_message_Create' },
    delete: { __type: 'MessageFields_message_Delete' },
    read: { __type: 'MessageFields_message_Read' },
    update: { __type: 'MessageFields_message_Update' },
  },
  MessageFields_message_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageFields_message_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageFields_message_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageFields_message_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageFields_room: {
    __typename: { __type: 'String!' },
    create: { __type: 'MessageFields_room_Create' },
    delete: { __type: 'MessageFields_room_Delete' },
    read: { __type: 'MessageFields_room_Read' },
    update: { __type: 'MessageFields_room_Update' },
  },
  MessageFields_room_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageFields_room_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageFields_room_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageFields_room_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageFields_updatedAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'MessageFields_updatedAt_Create' },
    delete: { __type: 'MessageFields_updatedAt_Delete' },
    read: { __type: 'MessageFields_updatedAt_Read' },
    update: { __type: 'MessageFields_updatedAt_Update' },
  },
  MessageFields_updatedAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageFields_updatedAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageFields_updatedAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageFields_updatedAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MessageReadAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  MessageReadDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  MessageUpdateAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  MessageUpdateDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  Message_createdAt_operator: {
    equals: { __type: 'DateTime' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  Message_createdBy_operator: {
    all: { __type: '[JSON]' },
    equals: { __type: 'JSON' },
    in: { __type: '[JSON]' },
    not_equals: { __type: 'JSON' },
    not_in: { __type: '[JSON]' },
  },
  Message_id_operator: {
    equals: { __type: 'Int' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Int' },
    greater_than_equal: { __type: 'Int' },
    less_than: { __type: 'Int' },
    less_than_equal: { __type: 'Int' },
    not_equals: { __type: 'Int' },
  },
  Message_message_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Message_room_operator: {
    all: { __type: '[JSON]' },
    equals: { __type: 'JSON' },
    in: { __type: '[JSON]' },
    not_equals: { __type: 'JSON' },
    not_in: { __type: '[JSON]' },
  },
  Message_updatedAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  Message_where: {
    AND: { __type: '[Message_where_and]' },
    OR: { __type: '[Message_where_or]' },
    createdAt: { __type: 'Message_createdAt_operator' },
    createdBy: { __type: 'Message_createdBy_operator' },
    id: { __type: 'Message_id_operator' },
    message: { __type: 'Message_message_operator' },
    room: { __type: 'Message_room_operator' },
    updatedAt: { __type: 'Message_updatedAt_operator' },
  },
  Message_where_and: {
    createdAt: { __type: 'Message_createdAt_operator' },
    createdBy: { __type: 'Message_createdBy_operator' },
    id: { __type: 'Message_id_operator' },
    message: { __type: 'Message_message_operator' },
    room: { __type: 'Message_room_operator' },
    updatedAt: { __type: 'Message_updatedAt_operator' },
  },
  Message_where_or: {
    createdAt: { __type: 'Message_createdAt_operator' },
    createdBy: { __type: 'Message_createdBy_operator' },
    id: { __type: 'Message_id_operator' },
    message: { __type: 'Message_message_operator' },
    room: { __type: 'Message_room_operator' },
    updatedAt: { __type: 'Message_updatedAt_operator' },
  },
  Messages: {
    __typename: { __type: 'String!' },
    docs: { __type: '[Message]' },
    hasNextPage: { __type: 'Boolean' },
    hasPrevPage: { __type: 'Boolean' },
    limit: { __type: 'Int' },
    nextPage: { __type: 'Int' },
    offset: { __type: 'Int' },
    page: { __type: 'Int' },
    pagingCounter: { __type: 'Int' },
    prevPage: { __type: 'Int' },
    totalDocs: { __type: 'Int' },
    totalPages: { __type: 'Int' },
  },
  PayloadPreference: {
    __typename: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    id: { __type: 'Int' },
    key: { __type: 'String' },
    updatedAt: { __type: 'DateTime' },
    user: { __type: 'PayloadPreference_User_Relationship!' },
    value: { __type: 'JSON' },
  },
  PayloadPreferenceUpdate_UserRelationshipInput: {
    relationTo: { __type: 'PayloadPreferenceUpdate_UserRelationshipInputRelationTo' },
    value: { __type: 'JSON' },
  },
  PayloadPreference_User: {
    __typename: { __type: 'String!' },
    $on: { __type: '$PayloadPreference_User!' },
  },
  PayloadPreference_UserRelationshipInput: {
    relationTo: { __type: 'PayloadPreference_UserRelationshipInputRelationTo' },
    value: { __type: 'JSON' },
  },
  PayloadPreference_User_Relationship: {
    __typename: { __type: 'String!' },
    relationTo: { __type: 'PayloadPreference_User_RelationTo' },
    value: { __type: 'PayloadPreference_User' },
  },
  PayloadPreference_createdAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  PayloadPreference_id_operator: {
    equals: { __type: 'Int' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Int' },
    greater_than_equal: { __type: 'Int' },
    less_than: { __type: 'Int' },
    less_than_equal: { __type: 'Int' },
    not_equals: { __type: 'Int' },
  },
  PayloadPreference_key_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  PayloadPreference_updatedAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  PayloadPreference_user_Relation: {
    relationTo: { __type: 'PayloadPreference_user_Relation_RelationTo' },
    value: { __type: 'JSON' },
  },
  PayloadPreference_value_operator: {
    contains: { __type: 'JSON' },
    equals: { __type: 'JSON' },
    exists: { __type: 'Boolean' },
    intersects: { __type: 'JSON' },
    like: { __type: 'JSON' },
    not_equals: { __type: 'JSON' },
    within: { __type: 'JSON' },
  },
  PayloadPreference_where: {
    AND: { __type: '[PayloadPreference_where_and]' },
    OR: { __type: '[PayloadPreference_where_or]' },
    createdAt: { __type: 'PayloadPreference_createdAt_operator' },
    id: { __type: 'PayloadPreference_id_operator' },
    key: { __type: 'PayloadPreference_key_operator' },
    updatedAt: { __type: 'PayloadPreference_updatedAt_operator' },
    user: { __type: 'PayloadPreference_user_Relation' },
    value: { __type: 'PayloadPreference_value_operator' },
  },
  PayloadPreference_where_and: {
    createdAt: { __type: 'PayloadPreference_createdAt_operator' },
    id: { __type: 'PayloadPreference_id_operator' },
    key: { __type: 'PayloadPreference_key_operator' },
    updatedAt: { __type: 'PayloadPreference_updatedAt_operator' },
    user: { __type: 'PayloadPreference_user_Relation' },
    value: { __type: 'PayloadPreference_value_operator' },
  },
  PayloadPreference_where_or: {
    createdAt: { __type: 'PayloadPreference_createdAt_operator' },
    id: { __type: 'PayloadPreference_id_operator' },
    key: { __type: 'PayloadPreference_key_operator' },
    updatedAt: { __type: 'PayloadPreference_updatedAt_operator' },
    user: { __type: 'PayloadPreference_user_Relation' },
    value: { __type: 'PayloadPreference_value_operator' },
  },
  PayloadPreferences: {
    __typename: { __type: 'String!' },
    docs: { __type: '[PayloadPreference]' },
    hasNextPage: { __type: 'Boolean' },
    hasPrevPage: { __type: 'Boolean' },
    limit: { __type: 'Int' },
    nextPage: { __type: 'Int' },
    offset: { __type: 'Int' },
    page: { __type: 'Int' },
    pagingCounter: { __type: 'Int' },
    prevPage: { __type: 'Int' },
    totalDocs: { __type: 'Int' },
    totalPages: { __type: 'Int' },
  },
  PayloadPreferencesCreateAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  PayloadPreferencesCreateDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  PayloadPreferencesDeleteAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  PayloadPreferencesDeleteDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  PayloadPreferencesDocAccessFields: {
    __typename: { __type: 'String!' },
    createdAt: { __type: 'PayloadPreferencesDocAccessFields_createdAt' },
    key: { __type: 'PayloadPreferencesDocAccessFields_key' },
    updatedAt: { __type: 'PayloadPreferencesDocAccessFields_updatedAt' },
    user: { __type: 'PayloadPreferencesDocAccessFields_user' },
    value: { __type: 'PayloadPreferencesDocAccessFields_value' },
  },
  PayloadPreferencesDocAccessFields_createdAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'PayloadPreferencesDocAccessFields_createdAt_Create' },
    delete: { __type: 'PayloadPreferencesDocAccessFields_createdAt_Delete' },
    read: { __type: 'PayloadPreferencesDocAccessFields_createdAt_Read' },
    update: { __type: 'PayloadPreferencesDocAccessFields_createdAt_Update' },
  },
  PayloadPreferencesDocAccessFields_createdAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_createdAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_createdAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_createdAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_key: {
    __typename: { __type: 'String!' },
    create: { __type: 'PayloadPreferencesDocAccessFields_key_Create' },
    delete: { __type: 'PayloadPreferencesDocAccessFields_key_Delete' },
    read: { __type: 'PayloadPreferencesDocAccessFields_key_Read' },
    update: { __type: 'PayloadPreferencesDocAccessFields_key_Update' },
  },
  PayloadPreferencesDocAccessFields_key_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_key_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_key_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_key_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_updatedAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'PayloadPreferencesDocAccessFields_updatedAt_Create' },
    delete: { __type: 'PayloadPreferencesDocAccessFields_updatedAt_Delete' },
    read: { __type: 'PayloadPreferencesDocAccessFields_updatedAt_Read' },
    update: { __type: 'PayloadPreferencesDocAccessFields_updatedAt_Update' },
  },
  PayloadPreferencesDocAccessFields_updatedAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_updatedAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_updatedAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_updatedAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_user: {
    __typename: { __type: 'String!' },
    create: { __type: 'PayloadPreferencesDocAccessFields_user_Create' },
    delete: { __type: 'PayloadPreferencesDocAccessFields_user_Delete' },
    read: { __type: 'PayloadPreferencesDocAccessFields_user_Read' },
    update: { __type: 'PayloadPreferencesDocAccessFields_user_Update' },
  },
  PayloadPreferencesDocAccessFields_user_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_user_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_user_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_user_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_value: {
    __typename: { __type: 'String!' },
    create: { __type: 'PayloadPreferencesDocAccessFields_value_Create' },
    delete: { __type: 'PayloadPreferencesDocAccessFields_value_Delete' },
    read: { __type: 'PayloadPreferencesDocAccessFields_value_Read' },
    update: { __type: 'PayloadPreferencesDocAccessFields_value_Update' },
  },
  PayloadPreferencesDocAccessFields_value_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_value_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_value_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_value_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields: {
    __typename: { __type: 'String!' },
    createdAt: { __type: 'PayloadPreferencesFields_createdAt' },
    key: { __type: 'PayloadPreferencesFields_key' },
    updatedAt: { __type: 'PayloadPreferencesFields_updatedAt' },
    user: { __type: 'PayloadPreferencesFields_user' },
    value: { __type: 'PayloadPreferencesFields_value' },
  },
  PayloadPreferencesFields_createdAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'PayloadPreferencesFields_createdAt_Create' },
    delete: { __type: 'PayloadPreferencesFields_createdAt_Delete' },
    read: { __type: 'PayloadPreferencesFields_createdAt_Read' },
    update: { __type: 'PayloadPreferencesFields_createdAt_Update' },
  },
  PayloadPreferencesFields_createdAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_createdAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_createdAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_createdAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_key: {
    __typename: { __type: 'String!' },
    create: { __type: 'PayloadPreferencesFields_key_Create' },
    delete: { __type: 'PayloadPreferencesFields_key_Delete' },
    read: { __type: 'PayloadPreferencesFields_key_Read' },
    update: { __type: 'PayloadPreferencesFields_key_Update' },
  },
  PayloadPreferencesFields_key_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_key_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_key_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_key_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_updatedAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'PayloadPreferencesFields_updatedAt_Create' },
    delete: { __type: 'PayloadPreferencesFields_updatedAt_Delete' },
    read: { __type: 'PayloadPreferencesFields_updatedAt_Read' },
    update: { __type: 'PayloadPreferencesFields_updatedAt_Update' },
  },
  PayloadPreferencesFields_updatedAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_updatedAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_updatedAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_updatedAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_user: {
    __typename: { __type: 'String!' },
    create: { __type: 'PayloadPreferencesFields_user_Create' },
    delete: { __type: 'PayloadPreferencesFields_user_Delete' },
    read: { __type: 'PayloadPreferencesFields_user_Read' },
    update: { __type: 'PayloadPreferencesFields_user_Update' },
  },
  PayloadPreferencesFields_user_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_user_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_user_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_user_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_value: {
    __typename: { __type: 'String!' },
    create: { __type: 'PayloadPreferencesFields_value_Create' },
    delete: { __type: 'PayloadPreferencesFields_value_Delete' },
    read: { __type: 'PayloadPreferencesFields_value_Read' },
    update: { __type: 'PayloadPreferencesFields_value_Update' },
  },
  PayloadPreferencesFields_value_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_value_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_value_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_value_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesReadAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  PayloadPreferencesReadDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  PayloadPreferencesUpdateAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  PayloadPreferencesUpdateDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  Renting: {
    __typename: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    createdBy: { __type: 'User!' },
    deliveryFee: { __type: 'Float' },
    endDate: { __type: 'DateTime!' },
    file: { __type: 'Media' },
    id: { __type: 'Int' },
    insuranceFee: { __type: 'Float' },
    rentalFee: { __type: 'Float' },
    rentedBy: { __type: 'Renting_RentedBy' },
    rentedTo: { __type: 'Renting_RentedTo' },
    startDate: { __type: 'DateTime!' },
    status: { __type: 'Renting_status' },
    totalPrice: { __type: 'Float' },
    updatedAt: { __type: 'DateTime' },
  },
  RentingCreateAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  RentingCreateDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  RentingDeleteAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  RentingDeleteDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  RentingDocAccessFields: {
    __typename: { __type: 'String!' },
    createdAt: { __type: 'RentingDocAccessFields_createdAt' },
    createdBy: { __type: 'RentingDocAccessFields_createdBy' },
    deliveryFee: { __type: 'RentingDocAccessFields_deliveryFee' },
    endDate: { __type: 'RentingDocAccessFields_endDate' },
    file: { __type: 'RentingDocAccessFields_file' },
    insuranceFee: { __type: 'RentingDocAccessFields_insuranceFee' },
    rentalFee: { __type: 'RentingDocAccessFields_rentalFee' },
    rentedBy: { __type: 'RentingDocAccessFields_rentedBy' },
    rentedTo: { __type: 'RentingDocAccessFields_rentedTo' },
    startDate: { __type: 'RentingDocAccessFields_startDate' },
    status: { __type: 'RentingDocAccessFields_status' },
    totalPrice: { __type: 'RentingDocAccessFields_totalPrice' },
    updatedAt: { __type: 'RentingDocAccessFields_updatedAt' },
  },
  RentingDocAccessFields_createdAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingDocAccessFields_createdAt_Create' },
    delete: { __type: 'RentingDocAccessFields_createdAt_Delete' },
    read: { __type: 'RentingDocAccessFields_createdAt_Read' },
    update: { __type: 'RentingDocAccessFields_createdAt_Update' },
  },
  RentingDocAccessFields_createdAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_createdAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_createdAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_createdAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_createdBy: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingDocAccessFields_createdBy_Create' },
    delete: { __type: 'RentingDocAccessFields_createdBy_Delete' },
    read: { __type: 'RentingDocAccessFields_createdBy_Read' },
    update: { __type: 'RentingDocAccessFields_createdBy_Update' },
  },
  RentingDocAccessFields_createdBy_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_createdBy_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_createdBy_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_createdBy_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_deliveryFee: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingDocAccessFields_deliveryFee_Create' },
    delete: { __type: 'RentingDocAccessFields_deliveryFee_Delete' },
    read: { __type: 'RentingDocAccessFields_deliveryFee_Read' },
    update: { __type: 'RentingDocAccessFields_deliveryFee_Update' },
  },
  RentingDocAccessFields_deliveryFee_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_deliveryFee_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_deliveryFee_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_deliveryFee_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_endDate: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingDocAccessFields_endDate_Create' },
    delete: { __type: 'RentingDocAccessFields_endDate_Delete' },
    read: { __type: 'RentingDocAccessFields_endDate_Read' },
    update: { __type: 'RentingDocAccessFields_endDate_Update' },
  },
  RentingDocAccessFields_endDate_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_endDate_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_endDate_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_endDate_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_file: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingDocAccessFields_file_Create' },
    delete: { __type: 'RentingDocAccessFields_file_Delete' },
    read: { __type: 'RentingDocAccessFields_file_Read' },
    update: { __type: 'RentingDocAccessFields_file_Update' },
  },
  RentingDocAccessFields_file_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_file_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_file_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_file_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_insuranceFee: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingDocAccessFields_insuranceFee_Create' },
    delete: { __type: 'RentingDocAccessFields_insuranceFee_Delete' },
    read: { __type: 'RentingDocAccessFields_insuranceFee_Read' },
    update: { __type: 'RentingDocAccessFields_insuranceFee_Update' },
  },
  RentingDocAccessFields_insuranceFee_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_insuranceFee_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_insuranceFee_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_insuranceFee_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_rentalFee: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingDocAccessFields_rentalFee_Create' },
    delete: { __type: 'RentingDocAccessFields_rentalFee_Delete' },
    read: { __type: 'RentingDocAccessFields_rentalFee_Read' },
    update: { __type: 'RentingDocAccessFields_rentalFee_Update' },
  },
  RentingDocAccessFields_rentalFee_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_rentalFee_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_rentalFee_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_rentalFee_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_rentedBy: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingDocAccessFields_rentedBy_Create' },
    delete: { __type: 'RentingDocAccessFields_rentedBy_Delete' },
    fields: { __type: 'RentingDocAccessFields_rentedBy_Fields' },
    read: { __type: 'RentingDocAccessFields_rentedBy_Read' },
    update: { __type: 'RentingDocAccessFields_rentedBy_Update' },
  },
  RentingDocAccessFields_rentedBy_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_rentedBy_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_rentedBy_Fields: {
    __typename: { __type: 'String!' },
    user: { __type: 'RentingDocAccessFields_rentedBy_user' },
  },
  RentingDocAccessFields_rentedBy_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_rentedBy_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_rentedBy_user: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingDocAccessFields_rentedBy_user_Create' },
    delete: { __type: 'RentingDocAccessFields_rentedBy_user_Delete' },
    read: { __type: 'RentingDocAccessFields_rentedBy_user_Read' },
    update: { __type: 'RentingDocAccessFields_rentedBy_user_Update' },
  },
  RentingDocAccessFields_rentedBy_user_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_rentedBy_user_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_rentedBy_user_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_rentedBy_user_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_rentedTo: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingDocAccessFields_rentedTo_Create' },
    delete: { __type: 'RentingDocAccessFields_rentedTo_Delete' },
    fields: { __type: 'RentingDocAccessFields_rentedTo_Fields' },
    read: { __type: 'RentingDocAccessFields_rentedTo_Read' },
    update: { __type: 'RentingDocAccessFields_rentedTo_Update' },
  },
  RentingDocAccessFields_rentedTo_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_rentedTo_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_rentedTo_Fields: {
    __typename: { __type: 'String!' },
    item: { __type: 'RentingDocAccessFields_rentedTo_item' },
    user: { __type: 'RentingDocAccessFields_rentedTo_user' },
  },
  RentingDocAccessFields_rentedTo_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_rentedTo_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_rentedTo_item: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingDocAccessFields_rentedTo_item_Create' },
    delete: { __type: 'RentingDocAccessFields_rentedTo_item_Delete' },
    read: { __type: 'RentingDocAccessFields_rentedTo_item_Read' },
    update: { __type: 'RentingDocAccessFields_rentedTo_item_Update' },
  },
  RentingDocAccessFields_rentedTo_item_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_rentedTo_item_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_rentedTo_item_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_rentedTo_item_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_rentedTo_user: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingDocAccessFields_rentedTo_user_Create' },
    delete: { __type: 'RentingDocAccessFields_rentedTo_user_Delete' },
    read: { __type: 'RentingDocAccessFields_rentedTo_user_Read' },
    update: { __type: 'RentingDocAccessFields_rentedTo_user_Update' },
  },
  RentingDocAccessFields_rentedTo_user_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_rentedTo_user_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_rentedTo_user_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_rentedTo_user_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_startDate: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingDocAccessFields_startDate_Create' },
    delete: { __type: 'RentingDocAccessFields_startDate_Delete' },
    read: { __type: 'RentingDocAccessFields_startDate_Read' },
    update: { __type: 'RentingDocAccessFields_startDate_Update' },
  },
  RentingDocAccessFields_startDate_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_startDate_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_startDate_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_startDate_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_status: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingDocAccessFields_status_Create' },
    delete: { __type: 'RentingDocAccessFields_status_Delete' },
    read: { __type: 'RentingDocAccessFields_status_Read' },
    update: { __type: 'RentingDocAccessFields_status_Update' },
  },
  RentingDocAccessFields_status_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_status_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_status_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_status_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_totalPrice: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingDocAccessFields_totalPrice_Create' },
    delete: { __type: 'RentingDocAccessFields_totalPrice_Delete' },
    read: { __type: 'RentingDocAccessFields_totalPrice_Read' },
    update: { __type: 'RentingDocAccessFields_totalPrice_Update' },
  },
  RentingDocAccessFields_totalPrice_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_totalPrice_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_totalPrice_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_totalPrice_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_updatedAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingDocAccessFields_updatedAt_Create' },
    delete: { __type: 'RentingDocAccessFields_updatedAt_Delete' },
    read: { __type: 'RentingDocAccessFields_updatedAt_Read' },
    update: { __type: 'RentingDocAccessFields_updatedAt_Update' },
  },
  RentingDocAccessFields_updatedAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_updatedAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_updatedAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingDocAccessFields_updatedAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields: {
    __typename: { __type: 'String!' },
    createdAt: { __type: 'RentingFields_createdAt' },
    createdBy: { __type: 'RentingFields_createdBy' },
    deliveryFee: { __type: 'RentingFields_deliveryFee' },
    endDate: { __type: 'RentingFields_endDate' },
    file: { __type: 'RentingFields_file' },
    insuranceFee: { __type: 'RentingFields_insuranceFee' },
    rentalFee: { __type: 'RentingFields_rentalFee' },
    rentedBy: { __type: 'RentingFields_rentedBy' },
    rentedTo: { __type: 'RentingFields_rentedTo' },
    startDate: { __type: 'RentingFields_startDate' },
    status: { __type: 'RentingFields_status' },
    totalPrice: { __type: 'RentingFields_totalPrice' },
    updatedAt: { __type: 'RentingFields_updatedAt' },
  },
  RentingFields_createdAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingFields_createdAt_Create' },
    delete: { __type: 'RentingFields_createdAt_Delete' },
    read: { __type: 'RentingFields_createdAt_Read' },
    update: { __type: 'RentingFields_createdAt_Update' },
  },
  RentingFields_createdAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_createdAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_createdAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_createdAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_createdBy: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingFields_createdBy_Create' },
    delete: { __type: 'RentingFields_createdBy_Delete' },
    read: { __type: 'RentingFields_createdBy_Read' },
    update: { __type: 'RentingFields_createdBy_Update' },
  },
  RentingFields_createdBy_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_createdBy_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_createdBy_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_createdBy_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_deliveryFee: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingFields_deliveryFee_Create' },
    delete: { __type: 'RentingFields_deliveryFee_Delete' },
    read: { __type: 'RentingFields_deliveryFee_Read' },
    update: { __type: 'RentingFields_deliveryFee_Update' },
  },
  RentingFields_deliveryFee_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_deliveryFee_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_deliveryFee_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_deliveryFee_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_endDate: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingFields_endDate_Create' },
    delete: { __type: 'RentingFields_endDate_Delete' },
    read: { __type: 'RentingFields_endDate_Read' },
    update: { __type: 'RentingFields_endDate_Update' },
  },
  RentingFields_endDate_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_endDate_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_endDate_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_endDate_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_file: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingFields_file_Create' },
    delete: { __type: 'RentingFields_file_Delete' },
    read: { __type: 'RentingFields_file_Read' },
    update: { __type: 'RentingFields_file_Update' },
  },
  RentingFields_file_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_file_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_file_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_file_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_insuranceFee: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingFields_insuranceFee_Create' },
    delete: { __type: 'RentingFields_insuranceFee_Delete' },
    read: { __type: 'RentingFields_insuranceFee_Read' },
    update: { __type: 'RentingFields_insuranceFee_Update' },
  },
  RentingFields_insuranceFee_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_insuranceFee_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_insuranceFee_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_insuranceFee_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_rentalFee: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingFields_rentalFee_Create' },
    delete: { __type: 'RentingFields_rentalFee_Delete' },
    read: { __type: 'RentingFields_rentalFee_Read' },
    update: { __type: 'RentingFields_rentalFee_Update' },
  },
  RentingFields_rentalFee_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_rentalFee_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_rentalFee_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_rentalFee_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_rentedBy: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingFields_rentedBy_Create' },
    delete: { __type: 'RentingFields_rentedBy_Delete' },
    fields: { __type: 'RentingFields_rentedBy_Fields' },
    read: { __type: 'RentingFields_rentedBy_Read' },
    update: { __type: 'RentingFields_rentedBy_Update' },
  },
  RentingFields_rentedBy_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_rentedBy_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_rentedBy_Fields: {
    __typename: { __type: 'String!' },
    user: { __type: 'RentingFields_rentedBy_user' },
  },
  RentingFields_rentedBy_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_rentedBy_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_rentedBy_user: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingFields_rentedBy_user_Create' },
    delete: { __type: 'RentingFields_rentedBy_user_Delete' },
    read: { __type: 'RentingFields_rentedBy_user_Read' },
    update: { __type: 'RentingFields_rentedBy_user_Update' },
  },
  RentingFields_rentedBy_user_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_rentedBy_user_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_rentedBy_user_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_rentedBy_user_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_rentedTo: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingFields_rentedTo_Create' },
    delete: { __type: 'RentingFields_rentedTo_Delete' },
    fields: { __type: 'RentingFields_rentedTo_Fields' },
    read: { __type: 'RentingFields_rentedTo_Read' },
    update: { __type: 'RentingFields_rentedTo_Update' },
  },
  RentingFields_rentedTo_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_rentedTo_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_rentedTo_Fields: {
    __typename: { __type: 'String!' },
    item: { __type: 'RentingFields_rentedTo_item' },
    user: { __type: 'RentingFields_rentedTo_user' },
  },
  RentingFields_rentedTo_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_rentedTo_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_rentedTo_item: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingFields_rentedTo_item_Create' },
    delete: { __type: 'RentingFields_rentedTo_item_Delete' },
    read: { __type: 'RentingFields_rentedTo_item_Read' },
    update: { __type: 'RentingFields_rentedTo_item_Update' },
  },
  RentingFields_rentedTo_item_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_rentedTo_item_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_rentedTo_item_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_rentedTo_item_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_rentedTo_user: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingFields_rentedTo_user_Create' },
    delete: { __type: 'RentingFields_rentedTo_user_Delete' },
    read: { __type: 'RentingFields_rentedTo_user_Read' },
    update: { __type: 'RentingFields_rentedTo_user_Update' },
  },
  RentingFields_rentedTo_user_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_rentedTo_user_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_rentedTo_user_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_rentedTo_user_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_startDate: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingFields_startDate_Create' },
    delete: { __type: 'RentingFields_startDate_Delete' },
    read: { __type: 'RentingFields_startDate_Read' },
    update: { __type: 'RentingFields_startDate_Update' },
  },
  RentingFields_startDate_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_startDate_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_startDate_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_startDate_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_status: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingFields_status_Create' },
    delete: { __type: 'RentingFields_status_Delete' },
    read: { __type: 'RentingFields_status_Read' },
    update: { __type: 'RentingFields_status_Update' },
  },
  RentingFields_status_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_status_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_status_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_status_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_totalPrice: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingFields_totalPrice_Create' },
    delete: { __type: 'RentingFields_totalPrice_Delete' },
    read: { __type: 'RentingFields_totalPrice_Read' },
    update: { __type: 'RentingFields_totalPrice_Update' },
  },
  RentingFields_totalPrice_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_totalPrice_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_totalPrice_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_totalPrice_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_updatedAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingFields_updatedAt_Create' },
    delete: { __type: 'RentingFields_updatedAt_Delete' },
    read: { __type: 'RentingFields_updatedAt_Read' },
    update: { __type: 'RentingFields_updatedAt_Update' },
  },
  RentingFields_updatedAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_updatedAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_updatedAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingFields_updatedAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  RentingReadAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  RentingReadDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  RentingUpdateAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  RentingUpdateDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  Renting_RentedBy: { __typename: { __type: 'String!' }, user: { __type: 'User' } },
  Renting_RentedTo: {
    __typename: { __type: 'String!' },
    item: { __type: 'Item' },
    user: { __type: 'User' },
  },
  Renting_createdAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  Renting_createdBy_operator: {
    all: { __type: '[JSON]' },
    equals: { __type: 'JSON' },
    in: { __type: '[JSON]' },
    not_equals: { __type: 'JSON' },
    not_in: { __type: '[JSON]' },
  },
  Renting_deliveryFee_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Renting_endDate_operator: {
    equals: { __type: 'DateTime' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  Renting_file_operator: {
    all: { __type: '[JSON]' },
    equals: { __type: 'JSON' },
    exists: { __type: 'Boolean' },
    in: { __type: '[JSON]' },
    not_equals: { __type: 'JSON' },
    not_in: { __type: '[JSON]' },
  },
  Renting_id_operator: {
    equals: { __type: 'Int' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Int' },
    greater_than_equal: { __type: 'Int' },
    less_than: { __type: 'Int' },
    less_than_equal: { __type: 'Int' },
    not_equals: { __type: 'Int' },
  },
  Renting_insuranceFee_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Renting_rentalFee_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Renting_rentedBy__user_operator: {
    all: { __type: '[JSON]' },
    equals: { __type: 'JSON' },
    in: { __type: '[JSON]' },
    not_equals: { __type: 'JSON' },
    not_in: { __type: '[JSON]' },
  },
  Renting_rentedTo__item_operator: {
    all: { __type: '[JSON]' },
    equals: { __type: 'JSON' },
    in: { __type: '[JSON]' },
    not_equals: { __type: 'JSON' },
    not_in: { __type: '[JSON]' },
  },
  Renting_rentedTo__user_operator: {
    all: { __type: '[JSON]' },
    equals: { __type: 'JSON' },
    in: { __type: '[JSON]' },
    not_equals: { __type: 'JSON' },
    not_in: { __type: '[JSON]' },
  },
  Renting_startDate_operator: {
    equals: { __type: 'DateTime' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  Renting_status_operator: {
    all: { __type: '[Renting_status_Input]' },
    equals: { __type: 'Renting_status_Input' },
    exists: { __type: 'Boolean' },
    in: { __type: '[Renting_status_Input]' },
    not_equals: { __type: 'Renting_status_Input' },
    not_in: { __type: '[Renting_status_Input]' },
  },
  Renting_totalPrice_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Renting_updatedAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  Renting_where: {
    AND: { __type: '[Renting_where_and]' },
    OR: { __type: '[Renting_where_or]' },
    createdAt: { __type: 'Renting_createdAt_operator' },
    createdBy: { __type: 'Renting_createdBy_operator' },
    deliveryFee: { __type: 'Renting_deliveryFee_operator' },
    endDate: { __type: 'Renting_endDate_operator' },
    file: { __type: 'Renting_file_operator' },
    id: { __type: 'Renting_id_operator' },
    insuranceFee: { __type: 'Renting_insuranceFee_operator' },
    rentalFee: { __type: 'Renting_rentalFee_operator' },
    rentedBy__user: { __type: 'Renting_rentedBy__user_operator' },
    rentedTo__item: { __type: 'Renting_rentedTo__item_operator' },
    rentedTo__user: { __type: 'Renting_rentedTo__user_operator' },
    startDate: { __type: 'Renting_startDate_operator' },
    status: { __type: 'Renting_status_operator' },
    totalPrice: { __type: 'Renting_totalPrice_operator' },
    updatedAt: { __type: 'Renting_updatedAt_operator' },
  },
  Renting_where_and: {
    createdAt: { __type: 'Renting_createdAt_operator' },
    createdBy: { __type: 'Renting_createdBy_operator' },
    deliveryFee: { __type: 'Renting_deliveryFee_operator' },
    endDate: { __type: 'Renting_endDate_operator' },
    file: { __type: 'Renting_file_operator' },
    id: { __type: 'Renting_id_operator' },
    insuranceFee: { __type: 'Renting_insuranceFee_operator' },
    rentalFee: { __type: 'Renting_rentalFee_operator' },
    rentedBy__user: { __type: 'Renting_rentedBy__user_operator' },
    rentedTo__item: { __type: 'Renting_rentedTo__item_operator' },
    rentedTo__user: { __type: 'Renting_rentedTo__user_operator' },
    startDate: { __type: 'Renting_startDate_operator' },
    status: { __type: 'Renting_status_operator' },
    totalPrice: { __type: 'Renting_totalPrice_operator' },
    updatedAt: { __type: 'Renting_updatedAt_operator' },
  },
  Renting_where_or: {
    createdAt: { __type: 'Renting_createdAt_operator' },
    createdBy: { __type: 'Renting_createdBy_operator' },
    deliveryFee: { __type: 'Renting_deliveryFee_operator' },
    endDate: { __type: 'Renting_endDate_operator' },
    file: { __type: 'Renting_file_operator' },
    id: { __type: 'Renting_id_operator' },
    insuranceFee: { __type: 'Renting_insuranceFee_operator' },
    rentalFee: { __type: 'Renting_rentalFee_operator' },
    rentedBy__user: { __type: 'Renting_rentedBy__user_operator' },
    rentedTo__item: { __type: 'Renting_rentedTo__item_operator' },
    rentedTo__user: { __type: 'Renting_rentedTo__user_operator' },
    startDate: { __type: 'Renting_startDate_operator' },
    status: { __type: 'Renting_status_operator' },
    totalPrice: { __type: 'Renting_totalPrice_operator' },
    updatedAt: { __type: 'Renting_updatedAt_operator' },
  },
  Rentings: {
    __typename: { __type: 'String!' },
    docs: { __type: '[Renting]' },
    hasNextPage: { __type: 'Boolean' },
    hasPrevPage: { __type: 'Boolean' },
    limit: { __type: 'Int' },
    nextPage: { __type: 'Int' },
    offset: { __type: 'Int' },
    page: { __type: 'Int' },
    pagingCounter: { __type: 'Int' },
    prevPage: { __type: 'Int' },
    totalDocs: { __type: 'Int' },
    totalPages: { __type: 'Int' },
  },
  Tag: {
    __typename: { __type: 'String!' },
    alt: { __type: 'String' },
    createdAt: { __type: 'DateTime' },
    createdBy: { __type: 'User!' },
    id: { __type: 'Int' },
    name: { __type: 'String!' },
    updatedAt: { __type: 'DateTime' },
  },
  Tag_alt_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Tag_createdAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  Tag_id_operator: {
    equals: { __type: 'Int' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Int' },
    greater_than_equal: { __type: 'Int' },
    less_than: { __type: 'Int' },
    less_than_equal: { __type: 'Int' },
    not_equals: { __type: 'Int' },
  },
  Tag_name_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Tag_updatedAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  Tag_where: {
    AND: { __type: '[Tag_where_and]' },
    OR: { __type: '[Tag_where_or]' },
    alt: { __type: 'Tag_alt_operator' },
    createdAt: { __type: 'Tag_createdAt_operator' },
    id: { __type: 'Tag_id_operator' },
    name: { __type: 'Tag_name_operator' },
    updatedAt: { __type: 'Tag_updatedAt_operator' },
  },
  Tag_where_and: {
    alt: { __type: 'Tag_alt_operator' },
    createdAt: { __type: 'Tag_createdAt_operator' },
    id: { __type: 'Tag_id_operator' },
    name: { __type: 'Tag_name_operator' },
    updatedAt: { __type: 'Tag_updatedAt_operator' },
  },
  Tag_where_or: {
    alt: { __type: 'Tag_alt_operator' },
    createdAt: { __type: 'Tag_createdAt_operator' },
    id: { __type: 'Tag_id_operator' },
    name: { __type: 'Tag_name_operator' },
    updatedAt: { __type: 'Tag_updatedAt_operator' },
  },
  Tags: {
    __typename: { __type: 'String!' },
    docs: { __type: '[Tag]' },
    hasNextPage: { __type: 'Boolean' },
    hasPrevPage: { __type: 'Boolean' },
    limit: { __type: 'Int' },
    nextPage: { __type: 'Int' },
    offset: { __type: 'Int' },
    page: { __type: 'Int' },
    pagingCounter: { __type: 'Int' },
    prevPage: { __type: 'Int' },
    totalDocs: { __type: 'Int' },
    totalPages: { __type: 'Int' },
  },
  TagsCreateAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  TagsCreateDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  TagsDeleteAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  TagsDeleteDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  TagsDocAccessFields: {
    __typename: { __type: 'String!' },
    alt: { __type: 'TagsDocAccessFields_alt' },
    createdAt: { __type: 'TagsDocAccessFields_createdAt' },
    name: { __type: 'TagsDocAccessFields_name' },
    updatedAt: { __type: 'TagsDocAccessFields_updatedAt' },
  },
  TagsDocAccessFields_alt: {
    __typename: { __type: 'String!' },
    create: { __type: 'TagsDocAccessFields_alt_Create' },
    delete: { __type: 'TagsDocAccessFields_alt_Delete' },
    read: { __type: 'TagsDocAccessFields_alt_Read' },
    update: { __type: 'TagsDocAccessFields_alt_Update' },
  },
  TagsDocAccessFields_alt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  TagsDocAccessFields_alt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  TagsDocAccessFields_alt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  TagsDocAccessFields_alt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  TagsDocAccessFields_createdAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'TagsDocAccessFields_createdAt_Create' },
    delete: { __type: 'TagsDocAccessFields_createdAt_Delete' },
    read: { __type: 'TagsDocAccessFields_createdAt_Read' },
    update: { __type: 'TagsDocAccessFields_createdAt_Update' },
  },
  TagsDocAccessFields_createdAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  TagsDocAccessFields_createdAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  TagsDocAccessFields_createdAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  TagsDocAccessFields_createdAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  TagsDocAccessFields_name: {
    __typename: { __type: 'String!' },
    create: { __type: 'TagsDocAccessFields_name_Create' },
    delete: { __type: 'TagsDocAccessFields_name_Delete' },
    read: { __type: 'TagsDocAccessFields_name_Read' },
    update: { __type: 'TagsDocAccessFields_name_Update' },
  },
  TagsDocAccessFields_name_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  TagsDocAccessFields_name_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  TagsDocAccessFields_name_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  TagsDocAccessFields_name_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  TagsDocAccessFields_updatedAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'TagsDocAccessFields_updatedAt_Create' },
    delete: { __type: 'TagsDocAccessFields_updatedAt_Delete' },
    read: { __type: 'TagsDocAccessFields_updatedAt_Read' },
    update: { __type: 'TagsDocAccessFields_updatedAt_Update' },
  },
  TagsDocAccessFields_updatedAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  TagsDocAccessFields_updatedAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  TagsDocAccessFields_updatedAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  TagsDocAccessFields_updatedAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  TagsFields: {
    __typename: { __type: 'String!' },
    alt: { __type: 'TagsFields_alt' },
    createdAt: { __type: 'TagsFields_createdAt' },
    name: { __type: 'TagsFields_name' },
    updatedAt: { __type: 'TagsFields_updatedAt' },
  },
  TagsFields_alt: {
    __typename: { __type: 'String!' },
    create: { __type: 'TagsFields_alt_Create' },
    delete: { __type: 'TagsFields_alt_Delete' },
    read: { __type: 'TagsFields_alt_Read' },
    update: { __type: 'TagsFields_alt_Update' },
  },
  TagsFields_alt_Create: { __typename: { __type: 'String!' }, permission: { __type: 'Boolean!' } },
  TagsFields_alt_Delete: { __typename: { __type: 'String!' }, permission: { __type: 'Boolean!' } },
  TagsFields_alt_Read: { __typename: { __type: 'String!' }, permission: { __type: 'Boolean!' } },
  TagsFields_alt_Update: { __typename: { __type: 'String!' }, permission: { __type: 'Boolean!' } },
  TagsFields_createdAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'TagsFields_createdAt_Create' },
    delete: { __type: 'TagsFields_createdAt_Delete' },
    read: { __type: 'TagsFields_createdAt_Read' },
    update: { __type: 'TagsFields_createdAt_Update' },
  },
  TagsFields_createdAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  TagsFields_createdAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  TagsFields_createdAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  TagsFields_createdAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  TagsFields_name: {
    __typename: { __type: 'String!' },
    create: { __type: 'TagsFields_name_Create' },
    delete: { __type: 'TagsFields_name_Delete' },
    read: { __type: 'TagsFields_name_Read' },
    update: { __type: 'TagsFields_name_Update' },
  },
  TagsFields_name_Create: { __typename: { __type: 'String!' }, permission: { __type: 'Boolean!' } },
  TagsFields_name_Delete: { __typename: { __type: 'String!' }, permission: { __type: 'Boolean!' } },
  TagsFields_name_Read: { __typename: { __type: 'String!' }, permission: { __type: 'Boolean!' } },
  TagsFields_name_Update: { __typename: { __type: 'String!' }, permission: { __type: 'Boolean!' } },
  TagsFields_updatedAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'TagsFields_updatedAt_Create' },
    delete: { __type: 'TagsFields_updatedAt_Delete' },
    read: { __type: 'TagsFields_updatedAt_Read' },
    update: { __type: 'TagsFields_updatedAt_Update' },
  },
  TagsFields_updatedAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  TagsFields_updatedAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  TagsFields_updatedAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  TagsFields_updatedAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  TagsReadAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  TagsReadDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  TagsUpdateAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  TagsUpdateDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  User: {
    __typename: { __type: 'String!' },
    bio: { __type: 'String' },
    createdAt: { __type: 'DateTime' },
    email: { __type: 'EmailAddress!' },
    firstName: { __type: 'String' },
    hash: { __type: 'String' },
    id: { __type: 'Int' },
    lastName: { __type: 'String' },
    lockUntil: { __type: 'DateTime' },
    loginAttempts: { __type: 'Float' },
    password: { __type: 'String!' },
    phone: { __type: 'String!' },
    profileImage: { __type: 'Media' },
    province: { __type: 'String' },
    rating: { __type: 'Float' },
    requestsMade: { __type: '[Renting!]' },
    requestsReceived: { __type: '[Renting!]' },
    resetPasswordExpiration: { __type: 'DateTime' },
    resetPasswordToken: { __type: 'String' },
    roles: { __type: '[User_roles!]!' },
    salt: { __type: 'String' },
    updatedAt: { __type: 'DateTime' },
  },
  User_bio_operator: {
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
  },
  User_createdAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  User_email_operator: {
    all: { __type: '[EmailAddress]' },
    contains: { __type: 'EmailAddress' },
    equals: { __type: 'EmailAddress' },
    in: { __type: '[EmailAddress]' },
    like: { __type: 'EmailAddress' },
    not_equals: { __type: 'EmailAddress' },
    not_in: { __type: '[EmailAddress]' },
  },
  User_firstName_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  User_id_operator: {
    equals: { __type: 'Int' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Int' },
    greater_than_equal: { __type: 'Int' },
    less_than: { __type: 'Int' },
    less_than_equal: { __type: 'Int' },
    not_equals: { __type: 'Int' },
  },
  User_lastName_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  User_phone_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  User_profileImage_operator: {
    all: { __type: '[JSON]' },
    equals: { __type: 'JSON' },
    exists: { __type: 'Boolean' },
    in: { __type: '[JSON]' },
    not_equals: { __type: 'JSON' },
    not_in: { __type: '[JSON]' },
  },
  User_province_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  User_rating_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  User_requestsMade_operator: {
    all: { __type: '[JSON]' },
    equals: { __type: 'JSON' },
    exists: { __type: 'Boolean' },
    in: { __type: '[JSON]' },
    not_equals: { __type: 'JSON' },
    not_in: { __type: '[JSON]' },
  },
  User_requestsReceived_operator: {
    all: { __type: '[JSON]' },
    equals: { __type: 'JSON' },
    exists: { __type: 'Boolean' },
    in: { __type: '[JSON]' },
    not_equals: { __type: 'JSON' },
    not_in: { __type: '[JSON]' },
  },
  User_roles_operator: {
    all: { __type: '[User_roles_Input]' },
    equals: { __type: 'User_roles_Input' },
    in: { __type: '[User_roles_Input]' },
    not_equals: { __type: 'User_roles_Input' },
    not_in: { __type: '[User_roles_Input]' },
  },
  User_updatedAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  User_where: {
    AND: { __type: '[User_where_and]' },
    OR: { __type: '[User_where_or]' },
    bio: { __type: 'User_bio_operator' },
    createdAt: { __type: 'User_createdAt_operator' },
    email: { __type: 'User_email_operator' },
    firstName: { __type: 'User_firstName_operator' },
    id: { __type: 'User_id_operator' },
    lastName: { __type: 'User_lastName_operator' },
    phone: { __type: 'User_phone_operator' },
    profileImage: { __type: 'User_profileImage_operator' },
    province: { __type: 'User_province_operator' },
    rating: { __type: 'User_rating_operator' },
    requestsMade: { __type: 'User_requestsMade_operator' },
    requestsReceived: { __type: 'User_requestsReceived_operator' },
    roles: { __type: 'User_roles_operator' },
    updatedAt: { __type: 'User_updatedAt_operator' },
  },
  User_where_and: {
    bio: { __type: 'User_bio_operator' },
    createdAt: { __type: 'User_createdAt_operator' },
    email: { __type: 'User_email_operator' },
    firstName: { __type: 'User_firstName_operator' },
    id: { __type: 'User_id_operator' },
    lastName: { __type: 'User_lastName_operator' },
    phone: { __type: 'User_phone_operator' },
    profileImage: { __type: 'User_profileImage_operator' },
    province: { __type: 'User_province_operator' },
    rating: { __type: 'User_rating_operator' },
    requestsMade: { __type: 'User_requestsMade_operator' },
    requestsReceived: { __type: 'User_requestsReceived_operator' },
    roles: { __type: 'User_roles_operator' },
    updatedAt: { __type: 'User_updatedAt_operator' },
  },
  User_where_or: {
    bio: { __type: 'User_bio_operator' },
    createdAt: { __type: 'User_createdAt_operator' },
    email: { __type: 'User_email_operator' },
    firstName: { __type: 'User_firstName_operator' },
    id: { __type: 'User_id_operator' },
    lastName: { __type: 'User_lastName_operator' },
    phone: { __type: 'User_phone_operator' },
    profileImage: { __type: 'User_profileImage_operator' },
    province: { __type: 'User_province_operator' },
    rating: { __type: 'User_rating_operator' },
    requestsMade: { __type: 'User_requestsMade_operator' },
    requestsReceived: { __type: 'User_requestsReceived_operator' },
    roles: { __type: 'User_roles_operator' },
    updatedAt: { __type: 'User_updatedAt_operator' },
  },
  Users: {
    __typename: { __type: 'String!' },
    docs: { __type: '[User]' },
    hasNextPage: { __type: 'Boolean' },
    hasPrevPage: { __type: 'Boolean' },
    limit: { __type: 'Int' },
    nextPage: { __type: 'Int' },
    offset: { __type: 'Int' },
    page: { __type: 'Int' },
    pagingCounter: { __type: 'Int' },
    prevPage: { __type: 'Int' },
    totalDocs: { __type: 'Int' },
    totalPages: { __type: 'Int' },
  },
  UsersCreateAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  UsersCreateDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  UsersDeleteAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  UsersDeleteDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  UsersDocAccessFields: {
    __typename: { __type: 'String!' },
    bio: { __type: 'UsersDocAccessFields_bio' },
    createdAt: { __type: 'UsersDocAccessFields_createdAt' },
    email: { __type: 'UsersDocAccessFields_email' },
    firstName: { __type: 'UsersDocAccessFields_firstName' },
    lastName: { __type: 'UsersDocAccessFields_lastName' },
    password: { __type: 'UsersDocAccessFields_password' },
    phone: { __type: 'UsersDocAccessFields_phone' },
    profileImage: { __type: 'UsersDocAccessFields_profileImage' },
    province: { __type: 'UsersDocAccessFields_province' },
    rating: { __type: 'UsersDocAccessFields_rating' },
    requestsMade: { __type: 'UsersDocAccessFields_requestsMade' },
    requestsReceived: { __type: 'UsersDocAccessFields_requestsReceived' },
    roles: { __type: 'UsersDocAccessFields_roles' },
    updatedAt: { __type: 'UsersDocAccessFields_updatedAt' },
  },
  UsersDocAccessFields_bio: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersDocAccessFields_bio_Create' },
    delete: { __type: 'UsersDocAccessFields_bio_Delete' },
    read: { __type: 'UsersDocAccessFields_bio_Read' },
    update: { __type: 'UsersDocAccessFields_bio_Update' },
  },
  UsersDocAccessFields_bio_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_bio_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_bio_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_bio_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_createdAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersDocAccessFields_createdAt_Create' },
    delete: { __type: 'UsersDocAccessFields_createdAt_Delete' },
    read: { __type: 'UsersDocAccessFields_createdAt_Read' },
    update: { __type: 'UsersDocAccessFields_createdAt_Update' },
  },
  UsersDocAccessFields_createdAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_createdAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_createdAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_createdAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_email: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersDocAccessFields_email_Create' },
    delete: { __type: 'UsersDocAccessFields_email_Delete' },
    read: { __type: 'UsersDocAccessFields_email_Read' },
    update: { __type: 'UsersDocAccessFields_email_Update' },
  },
  UsersDocAccessFields_email_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_email_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_email_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_email_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_firstName: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersDocAccessFields_firstName_Create' },
    delete: { __type: 'UsersDocAccessFields_firstName_Delete' },
    read: { __type: 'UsersDocAccessFields_firstName_Read' },
    update: { __type: 'UsersDocAccessFields_firstName_Update' },
  },
  UsersDocAccessFields_firstName_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_firstName_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_firstName_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_firstName_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_lastName: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersDocAccessFields_lastName_Create' },
    delete: { __type: 'UsersDocAccessFields_lastName_Delete' },
    read: { __type: 'UsersDocAccessFields_lastName_Read' },
    update: { __type: 'UsersDocAccessFields_lastName_Update' },
  },
  UsersDocAccessFields_lastName_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_lastName_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_lastName_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_lastName_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_password: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersDocAccessFields_password_Create' },
    delete: { __type: 'UsersDocAccessFields_password_Delete' },
    read: { __type: 'UsersDocAccessFields_password_Read' },
    update: { __type: 'UsersDocAccessFields_password_Update' },
  },
  UsersDocAccessFields_password_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_password_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_password_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_password_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_phone: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersDocAccessFields_phone_Create' },
    delete: { __type: 'UsersDocAccessFields_phone_Delete' },
    read: { __type: 'UsersDocAccessFields_phone_Read' },
    update: { __type: 'UsersDocAccessFields_phone_Update' },
  },
  UsersDocAccessFields_phone_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_phone_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_phone_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_phone_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_profileImage: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersDocAccessFields_profileImage_Create' },
    delete: { __type: 'UsersDocAccessFields_profileImage_Delete' },
    read: { __type: 'UsersDocAccessFields_profileImage_Read' },
    update: { __type: 'UsersDocAccessFields_profileImage_Update' },
  },
  UsersDocAccessFields_profileImage_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_profileImage_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_profileImage_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_profileImage_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_province: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersDocAccessFields_province_Create' },
    delete: { __type: 'UsersDocAccessFields_province_Delete' },
    read: { __type: 'UsersDocAccessFields_province_Read' },
    update: { __type: 'UsersDocAccessFields_province_Update' },
  },
  UsersDocAccessFields_province_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_province_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_province_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_province_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_rating: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersDocAccessFields_rating_Create' },
    delete: { __type: 'UsersDocAccessFields_rating_Delete' },
    read: { __type: 'UsersDocAccessFields_rating_Read' },
    update: { __type: 'UsersDocAccessFields_rating_Update' },
  },
  UsersDocAccessFields_rating_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_rating_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_rating_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_rating_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_requestsMade: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersDocAccessFields_requestsMade_Create' },
    delete: { __type: 'UsersDocAccessFields_requestsMade_Delete' },
    read: { __type: 'UsersDocAccessFields_requestsMade_Read' },
    update: { __type: 'UsersDocAccessFields_requestsMade_Update' },
  },
  UsersDocAccessFields_requestsMade_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_requestsMade_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_requestsMade_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_requestsMade_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_requestsReceived: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersDocAccessFields_requestsReceived_Create' },
    delete: { __type: 'UsersDocAccessFields_requestsReceived_Delete' },
    read: { __type: 'UsersDocAccessFields_requestsReceived_Read' },
    update: { __type: 'UsersDocAccessFields_requestsReceived_Update' },
  },
  UsersDocAccessFields_requestsReceived_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_requestsReceived_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_requestsReceived_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_requestsReceived_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_roles: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersDocAccessFields_roles_Create' },
    delete: { __type: 'UsersDocAccessFields_roles_Delete' },
    read: { __type: 'UsersDocAccessFields_roles_Read' },
    update: { __type: 'UsersDocAccessFields_roles_Update' },
  },
  UsersDocAccessFields_roles_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_roles_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_roles_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_roles_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_updatedAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersDocAccessFields_updatedAt_Create' },
    delete: { __type: 'UsersDocAccessFields_updatedAt_Delete' },
    read: { __type: 'UsersDocAccessFields_updatedAt_Read' },
    update: { __type: 'UsersDocAccessFields_updatedAt_Update' },
  },
  UsersDocAccessFields_updatedAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_updatedAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_updatedAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_updatedAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields: {
    __typename: { __type: 'String!' },
    bio: { __type: 'UsersFields_bio' },
    createdAt: { __type: 'UsersFields_createdAt' },
    email: { __type: 'UsersFields_email' },
    firstName: { __type: 'UsersFields_firstName' },
    lastName: { __type: 'UsersFields_lastName' },
    password: { __type: 'UsersFields_password' },
    phone: { __type: 'UsersFields_phone' },
    profileImage: { __type: 'UsersFields_profileImage' },
    province: { __type: 'UsersFields_province' },
    rating: { __type: 'UsersFields_rating' },
    requestsMade: { __type: 'UsersFields_requestsMade' },
    requestsReceived: { __type: 'UsersFields_requestsReceived' },
    roles: { __type: 'UsersFields_roles' },
    updatedAt: { __type: 'UsersFields_updatedAt' },
  },
  UsersFields_bio: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersFields_bio_Create' },
    delete: { __type: 'UsersFields_bio_Delete' },
    read: { __type: 'UsersFields_bio_Read' },
    update: { __type: 'UsersFields_bio_Update' },
  },
  UsersFields_bio_Create: { __typename: { __type: 'String!' }, permission: { __type: 'Boolean!' } },
  UsersFields_bio_Delete: { __typename: { __type: 'String!' }, permission: { __type: 'Boolean!' } },
  UsersFields_bio_Read: { __typename: { __type: 'String!' }, permission: { __type: 'Boolean!' } },
  UsersFields_bio_Update: { __typename: { __type: 'String!' }, permission: { __type: 'Boolean!' } },
  UsersFields_createdAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersFields_createdAt_Create' },
    delete: { __type: 'UsersFields_createdAt_Delete' },
    read: { __type: 'UsersFields_createdAt_Read' },
    update: { __type: 'UsersFields_createdAt_Update' },
  },
  UsersFields_createdAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_createdAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_createdAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_createdAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_email: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersFields_email_Create' },
    delete: { __type: 'UsersFields_email_Delete' },
    read: { __type: 'UsersFields_email_Read' },
    update: { __type: 'UsersFields_email_Update' },
  },
  UsersFields_email_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_email_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_email_Read: { __typename: { __type: 'String!' }, permission: { __type: 'Boolean!' } },
  UsersFields_email_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_firstName: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersFields_firstName_Create' },
    delete: { __type: 'UsersFields_firstName_Delete' },
    read: { __type: 'UsersFields_firstName_Read' },
    update: { __type: 'UsersFields_firstName_Update' },
  },
  UsersFields_firstName_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_firstName_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_firstName_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_firstName_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_lastName: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersFields_lastName_Create' },
    delete: { __type: 'UsersFields_lastName_Delete' },
    read: { __type: 'UsersFields_lastName_Read' },
    update: { __type: 'UsersFields_lastName_Update' },
  },
  UsersFields_lastName_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_lastName_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_lastName_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_lastName_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_password: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersFields_password_Create' },
    delete: { __type: 'UsersFields_password_Delete' },
    read: { __type: 'UsersFields_password_Read' },
    update: { __type: 'UsersFields_password_Update' },
  },
  UsersFields_password_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_password_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_password_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_password_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_phone: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersFields_phone_Create' },
    delete: { __type: 'UsersFields_phone_Delete' },
    read: { __type: 'UsersFields_phone_Read' },
    update: { __type: 'UsersFields_phone_Update' },
  },
  UsersFields_phone_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_phone_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_phone_Read: { __typename: { __type: 'String!' }, permission: { __type: 'Boolean!' } },
  UsersFields_phone_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_profileImage: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersFields_profileImage_Create' },
    delete: { __type: 'UsersFields_profileImage_Delete' },
    read: { __type: 'UsersFields_profileImage_Read' },
    update: { __type: 'UsersFields_profileImage_Update' },
  },
  UsersFields_profileImage_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_profileImage_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_profileImage_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_profileImage_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_province: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersFields_province_Create' },
    delete: { __type: 'UsersFields_province_Delete' },
    read: { __type: 'UsersFields_province_Read' },
    update: { __type: 'UsersFields_province_Update' },
  },
  UsersFields_province_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_province_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_province_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_province_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_rating: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersFields_rating_Create' },
    delete: { __type: 'UsersFields_rating_Delete' },
    read: { __type: 'UsersFields_rating_Read' },
    update: { __type: 'UsersFields_rating_Update' },
  },
  UsersFields_rating_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_rating_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_rating_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_rating_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_requestsMade: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersFields_requestsMade_Create' },
    delete: { __type: 'UsersFields_requestsMade_Delete' },
    read: { __type: 'UsersFields_requestsMade_Read' },
    update: { __type: 'UsersFields_requestsMade_Update' },
  },
  UsersFields_requestsMade_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_requestsMade_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_requestsMade_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_requestsMade_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_requestsReceived: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersFields_requestsReceived_Create' },
    delete: { __type: 'UsersFields_requestsReceived_Delete' },
    read: { __type: 'UsersFields_requestsReceived_Read' },
    update: { __type: 'UsersFields_requestsReceived_Update' },
  },
  UsersFields_requestsReceived_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_requestsReceived_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_requestsReceived_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_requestsReceived_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_roles: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersFields_roles_Create' },
    delete: { __type: 'UsersFields_roles_Delete' },
    read: { __type: 'UsersFields_roles_Read' },
    update: { __type: 'UsersFields_roles_Update' },
  },
  UsersFields_roles_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_roles_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_roles_Read: { __typename: { __type: 'String!' }, permission: { __type: 'Boolean!' } },
  UsersFields_roles_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_updatedAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersFields_updatedAt_Create' },
    delete: { __type: 'UsersFields_updatedAt_Delete' },
    read: { __type: 'UsersFields_updatedAt_Read' },
    update: { __type: 'UsersFields_updatedAt_Update' },
  },
  UsersFields_updatedAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_updatedAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_updatedAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_updatedAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersReadAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  UsersReadDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  UsersUnlockAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  UsersUnlockDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  UsersUpdateAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  UsersUpdateDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  chatroomAccess: {
    __typename: { __type: 'String!' },
    create: { __type: 'ChatroomCreateAccess' },
    delete: { __type: 'ChatroomDeleteAccess' },
    fields: { __type: 'ChatroomFields' },
    read: { __type: 'ChatroomReadAccess' },
    update: { __type: 'ChatroomUpdateAccess' },
  },
  chatroomDocAccess: {
    __typename: { __type: 'String!' },
    create: { __type: 'ChatroomCreateDocAccess' },
    delete: { __type: 'ChatroomDeleteDocAccess' },
    fields: { __type: 'ChatroomDocAccessFields' },
    read: { __type: 'ChatroomReadDocAccess' },
    update: { __type: 'ChatroomUpdateDocAccess' },
  },
  itemsAccess: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsCreateAccess' },
    delete: { __type: 'ItemsDeleteAccess' },
    fields: { __type: 'ItemsFields' },
    read: { __type: 'ItemsReadAccess' },
    readVersions: { __type: 'ItemsReadVersionsAccess' },
    update: { __type: 'ItemsUpdateAccess' },
  },
  itemsDocAccess: {
    __typename: { __type: 'String!' },
    create: { __type: 'ItemsCreateDocAccess' },
    delete: { __type: 'ItemsDeleteDocAccess' },
    fields: { __type: 'ItemsDocAccessFields' },
    read: { __type: 'ItemsReadDocAccess' },
    readVersions: { __type: 'ItemsReadVersionsDocAccess' },
    update: { __type: 'ItemsUpdateDocAccess' },
  },
  mediasAccess: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediasCreateAccess' },
    delete: { __type: 'MediasDeleteAccess' },
    fields: { __type: 'MediasFields' },
    read: { __type: 'MediasReadAccess' },
    update: { __type: 'MediasUpdateAccess' },
  },
  mediasDocAccess: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediasCreateDocAccess' },
    delete: { __type: 'MediasDeleteDocAccess' },
    fields: { __type: 'MediasDocAccessFields' },
    read: { __type: 'MediasReadDocAccess' },
    update: { __type: 'MediasUpdateDocAccess' },
  },
  messageAccess: {
    __typename: { __type: 'String!' },
    create: { __type: 'MessageCreateAccess' },
    delete: { __type: 'MessageDeleteAccess' },
    fields: { __type: 'MessageFields' },
    read: { __type: 'MessageReadAccess' },
    update: { __type: 'MessageUpdateAccess' },
  },
  messageDocAccess: {
    __typename: { __type: 'String!' },
    create: { __type: 'MessageCreateDocAccess' },
    delete: { __type: 'MessageDeleteDocAccess' },
    fields: { __type: 'MessageDocAccessFields' },
    read: { __type: 'MessageReadDocAccess' },
    update: { __type: 'MessageUpdateDocAccess' },
  },
  mutation: {
    __typename: { __type: 'String!' },
    createChatroom: {
      __type: 'Chatroom',
      __args: { data: 'mutationChatroomInput!', draft: 'Boolean' },
    },
    createItem: { __type: 'Item', __args: { data: 'mutationItemInput!', draft: 'Boolean' } },
    createMedia: { __type: 'Media', __args: { data: 'mutationMediaInput!', draft: 'Boolean' } },
    createMessage: {
      __type: 'Message',
      __args: { data: 'mutationMessageInput!', draft: 'Boolean' },
    },
    createPayloadPreference: {
      __type: 'PayloadPreference',
      __args: { data: 'mutationPayloadPreferenceInput!', draft: 'Boolean' },
    },
    createRenting: {
      __type: 'Renting',
      __args: { data: 'mutationRentingInput!', draft: 'Boolean' },
    },
    createTag: { __type: 'Tag', __args: { data: 'mutationTagInput!', draft: 'Boolean' } },
    createUser: { __type: 'User', __args: { data: 'mutationUserInput!', draft: 'Boolean' } },
    deleteChatroom: { __type: 'Chatroom', __args: { id: 'Int!' } },
    deleteItem: { __type: 'Item', __args: { id: 'Int!' } },
    deleteMedia: { __type: 'Media', __args: { id: 'Int!' } },
    deleteMessage: { __type: 'Message', __args: { id: 'Int!' } },
    deletePayloadPreference: { __type: 'PayloadPreference', __args: { id: 'Int!' } },
    deleteRenting: { __type: 'Renting', __args: { id: 'Int!' } },
    deleteTag: { __type: 'Tag', __args: { id: 'Int!' } },
    deleteUser: { __type: 'User', __args: { id: 'Int!' } },
    forgotPasswordUser: {
      __type: 'Boolean!',
      __args: { disableEmail: 'Boolean', email: 'String!', expiration: 'Int' },
    },
    loginUser: { __type: 'usersLoginResult', __args: { email: 'String', password: 'String' } },
    logoutUser: { __type: 'String' },
    refreshTokenUser: { __type: 'usersRefreshedUser', __args: { token: 'String' } },
    resetPasswordUser: {
      __type: 'usersResetPassword',
      __args: { password: 'String', token: 'String' },
    },
    restoreVersionItem: { __type: 'Item', __args: { id: 'Int' } },
    unlockUser: { __type: 'Boolean!', __args: { email: 'String!' } },
    updateChatroom: {
      __type: 'Chatroom',
      __args: {
        autosave: 'Boolean',
        data: 'mutationChatroomUpdateInput!',
        draft: 'Boolean',
        id: 'Int!',
      },
    },
    updateItem: {
      __type: 'Item',
      __args: {
        autosave: 'Boolean',
        data: 'mutationItemUpdateInput!',
        draft: 'Boolean',
        id: 'Int!',
      },
    },
    updateMedia: {
      __type: 'Media',
      __args: {
        autosave: 'Boolean',
        data: 'mutationMediaUpdateInput!',
        draft: 'Boolean',
        id: 'Int!',
      },
    },
    updateMessage: {
      __type: 'Message',
      __args: {
        autosave: 'Boolean',
        data: 'mutationMessageUpdateInput!',
        draft: 'Boolean',
        id: 'Int!',
      },
    },
    updatePayloadPreference: {
      __type: 'PayloadPreference',
      __args: {
        autosave: 'Boolean',
        data: 'mutationPayloadPreferenceUpdateInput!',
        draft: 'Boolean',
        id: 'Int!',
      },
    },
    updateRenting: {
      __type: 'Renting',
      __args: {
        autosave: 'Boolean',
        data: 'mutationRentingUpdateInput!',
        draft: 'Boolean',
        id: 'Int!',
      },
    },
    updateTag: {
      __type: 'Tag',
      __args: {
        autosave: 'Boolean',
        data: 'mutationTagUpdateInput!',
        draft: 'Boolean',
        id: 'Int!',
      },
    },
    updateUser: {
      __type: 'User',
      __args: {
        autosave: 'Boolean',
        data: 'mutationUserUpdateInput!',
        draft: 'Boolean',
        id: 'Int!',
      },
    },
    verifyEmailUser: { __type: 'Boolean', __args: { token: 'String' } },
  },
  mutationChatroomInput: {
    createdAt: { __type: 'String' },
    lastMessage: { __type: 'Int' },
    updatedAt: { __type: 'String' },
    user1LastViewed: { __type: 'String' },
    user1_id: { __type: 'Int' },
    user2LastViewed: { __type: 'String' },
    user2_id: { __type: 'Int' },
  },
  mutationChatroomUpdateInput: {
    createdAt: { __type: 'String' },
    lastMessage: { __type: 'Int' },
    updatedAt: { __type: 'String' },
    user1LastViewed: { __type: 'String' },
    user1_id: { __type: 'Int' },
    user2LastViewed: { __type: 'String' },
    user2_id: { __type: 'Int' },
  },
  mutationItemInput: {
    _status: { __type: 'Item__status_MutationInput' },
    availableAt: { __type: 'String' },
    createdAt: { __type: 'String' },
    createdBy: { __type: 'Int' },
    description: { __type: 'String' },
    end: { __type: 'String' },
    image: { __type: '[Int]' },
    name: { __type: 'String!' },
    period: { __type: 'Float' },
    periodType: { __type: 'Item_periodType_MutationInput' },
    price: { __type: 'Float' },
    rating: { __type: 'Float' },
    rentingStatus: { __type: 'Item_rentingStatus_MutationInput' },
    start: { __type: 'String' },
    tags: { __type: '[Int]' },
    updatedAt: { __type: 'String' },
  },
  mutationItemUpdateInput: {
    _status: { __type: 'ItemUpdate__status_MutationInput' },
    availableAt: { __type: 'String' },
    createdAt: { __type: 'String' },
    createdBy: { __type: 'Int' },
    description: { __type: 'String' },
    end: { __type: 'String' },
    image: { __type: '[Int]' },
    name: { __type: 'String' },
    period: { __type: 'Float' },
    periodType: { __type: 'ItemUpdate_periodType_MutationInput' },
    price: { __type: 'Float' },
    rating: { __type: 'Float' },
    rentingStatus: { __type: 'ItemUpdate_rentingStatus_MutationInput' },
    start: { __type: 'String' },
    tags: { __type: '[Int]' },
    updatedAt: { __type: 'String' },
  },
  mutationMediaInput: {
    alt: { __type: 'String' },
    createdAt: { __type: 'String' },
    createdBy: { __type: 'Int' },
    filename: { __type: 'String' },
    filesize: { __type: 'Float' },
    height: { __type: 'Float' },
    mimeType: { __type: 'String' },
    name: { __type: 'String' },
    updatedAt: { __type: 'String' },
    url: { __type: 'String' },
    width: { __type: 'Float' },
  },
  mutationMediaUpdateInput: {
    alt: { __type: 'String' },
    createdAt: { __type: 'String' },
    createdBy: { __type: 'Int' },
    filename: { __type: 'String' },
    filesize: { __type: 'Float' },
    height: { __type: 'Float' },
    mimeType: { __type: 'String' },
    name: { __type: 'String' },
    updatedAt: { __type: 'String' },
    url: { __type: 'String' },
    width: { __type: 'Float' },
  },
  mutationMessageInput: {
    createdAt: { __type: 'String' },
    createdBy: { __type: 'Int' },
    message: { __type: 'String' },
    room: { __type: 'Int' },
    updatedAt: { __type: 'String' },
  },
  mutationMessageUpdateInput: {
    createdAt: { __type: 'String' },
    createdBy: { __type: 'Int' },
    message: { __type: 'String' },
    room: { __type: 'Int' },
    updatedAt: { __type: 'String' },
  },
  mutationPayloadPreferenceInput: {
    createdAt: { __type: 'String' },
    key: { __type: 'String' },
    updatedAt: { __type: 'String' },
    user: { __type: 'PayloadPreference_UserRelationshipInput' },
    value: { __type: 'JSON' },
  },
  mutationPayloadPreferenceUpdateInput: {
    createdAt: { __type: 'String' },
    key: { __type: 'String' },
    updatedAt: { __type: 'String' },
    user: { __type: 'PayloadPreferenceUpdate_UserRelationshipInput' },
    value: { __type: 'JSON' },
  },
  mutationRentingInput: {
    createdAt: { __type: 'String' },
    createdBy: { __type: 'Int' },
    deliveryFee: { __type: 'Float' },
    endDate: { __type: 'String!' },
    file: { __type: 'Int' },
    insuranceFee: { __type: 'Float' },
    rentalFee: { __type: 'Float' },
    rentedBy: { __type: 'mutationRenting_RentedByInput!' },
    rentedTo: { __type: 'mutationRenting_RentedToInput!' },
    startDate: { __type: 'String!' },
    status: { __type: 'Renting_status_MutationInput' },
    totalPrice: { __type: 'Float' },
    updatedAt: { __type: 'String' },
  },
  mutationRentingUpdateInput: {
    createdAt: { __type: 'String' },
    createdBy: { __type: 'Int' },
    deliveryFee: { __type: 'Float' },
    endDate: { __type: 'String' },
    file: { __type: 'Int' },
    insuranceFee: { __type: 'Float' },
    rentalFee: { __type: 'Float' },
    rentedBy: { __type: 'mutationRentingUpdate_RentedByInput!' },
    rentedTo: { __type: 'mutationRentingUpdate_RentedToInput!' },
    startDate: { __type: 'String' },
    status: { __type: 'RentingUpdate_status_MutationInput' },
    totalPrice: { __type: 'Float' },
    updatedAt: { __type: 'String' },
  },
  mutationRentingUpdate_RentedByInput: { user: { __type: 'Int' } },
  mutationRentingUpdate_RentedToInput: { item: { __type: 'Int' }, user: { __type: 'Int' } },
  mutationRenting_RentedByInput: { user: { __type: 'Int' } },
  mutationRenting_RentedToInput: { item: { __type: 'Int' }, user: { __type: 'Int' } },
  mutationTagInput: {
    alt: { __type: 'String' },
    createdAt: { __type: 'String' },
    createdBy: { __type: 'Int' },
    name: { __type: 'String!' },
    updatedAt: { __type: 'String' },
  },
  mutationTagUpdateInput: {
    alt: { __type: 'String' },
    createdAt: { __type: 'String' },
    createdBy: { __type: 'Int' },
    name: { __type: 'String' },
    updatedAt: { __type: 'String' },
  },
  mutationUserInput: {
    bio: { __type: 'String' },
    createdAt: { __type: 'String' },
    email: { __type: 'String!' },
    firstName: { __type: 'String' },
    hash: { __type: 'String' },
    lastName: { __type: 'String' },
    lockUntil: { __type: 'String' },
    loginAttempts: { __type: 'Float' },
    password: { __type: 'String!' },
    phone: { __type: 'String!' },
    profileImage: { __type: 'Int' },
    province: { __type: 'String' },
    rating: { __type: 'Float' },
    requestsMade: { __type: '[Int]' },
    requestsReceived: { __type: '[Int]' },
    resetPasswordExpiration: { __type: 'String' },
    resetPasswordToken: { __type: 'String' },
    roles: { __type: '[User_roles_MutationInput]!' },
    salt: { __type: 'String' },
    updatedAt: { __type: 'String' },
  },
  mutationUserUpdateInput: {
    bio: { __type: 'String' },
    createdAt: { __type: 'String' },
    email: { __type: 'String' },
    firstName: { __type: 'String' },
    hash: { __type: 'String' },
    lastName: { __type: 'String' },
    lockUntil: { __type: 'String' },
    loginAttempts: { __type: 'Float' },
    password: { __type: 'String' },
    phone: { __type: 'String' },
    profileImage: { __type: 'Int' },
    province: { __type: 'String' },
    rating: { __type: 'Float' },
    requestsMade: { __type: '[Int]' },
    requestsReceived: { __type: '[Int]' },
    resetPasswordExpiration: { __type: 'String' },
    resetPasswordToken: { __type: 'String' },
    roles: { __type: '[UserUpdate_roles_MutationInput]' },
    salt: { __type: 'String' },
    updatedAt: { __type: 'String' },
  },
  payload_preferencesAccess: {
    __typename: { __type: 'String!' },
    create: { __type: 'PayloadPreferencesCreateAccess' },
    delete: { __type: 'PayloadPreferencesDeleteAccess' },
    fields: { __type: 'PayloadPreferencesFields' },
    read: { __type: 'PayloadPreferencesReadAccess' },
    update: { __type: 'PayloadPreferencesUpdateAccess' },
  },
  payload_preferencesDocAccess: {
    __typename: { __type: 'String!' },
    create: { __type: 'PayloadPreferencesCreateDocAccess' },
    delete: { __type: 'PayloadPreferencesDeleteDocAccess' },
    fields: { __type: 'PayloadPreferencesDocAccessFields' },
    read: { __type: 'PayloadPreferencesReadDocAccess' },
    update: { __type: 'PayloadPreferencesUpdateDocAccess' },
  },
  query: {
    __typename: { __type: 'String!' },
    Access: { __type: 'Access' },
    Chatroom: { __type: 'Chatroom', __args: { draft: 'Boolean', id: 'Int!' } },
    Chatrooms: {
      __type: 'Chatrooms',
      __args: {
        draft: 'Boolean',
        limit: 'Int',
        page: 'Int',
        sort: 'String',
        where: 'Chatroom_where',
      },
    },
    Item: { __type: 'Item', __args: { draft: 'Boolean', id: 'Int!' } },
    Items: {
      __type: 'Items',
      __args: { draft: 'Boolean', limit: 'Int', page: 'Int', sort: 'String', where: 'Item_where' },
    },
    Media: { __type: 'Media', __args: { draft: 'Boolean', id: 'Int!' } },
    Medias: {
      __type: 'Medias',
      __args: { draft: 'Boolean', limit: 'Int', page: 'Int', sort: 'String', where: 'Media_where' },
    },
    Message: { __type: 'Message', __args: { draft: 'Boolean', id: 'Int!' } },
    Messages: {
      __type: 'Messages',
      __args: {
        draft: 'Boolean',
        limit: 'Int',
        page: 'Int',
        sort: 'String',
        where: 'Message_where',
      },
    },
    PayloadPreference: { __type: 'PayloadPreference', __args: { draft: 'Boolean', id: 'Int!' } },
    PayloadPreferences: {
      __type: 'PayloadPreferences',
      __args: {
        draft: 'Boolean',
        limit: 'Int',
        page: 'Int',
        sort: 'String',
        where: 'PayloadPreference_where',
      },
    },
    Renting: { __type: 'Renting', __args: { draft: 'Boolean', id: 'Int!' } },
    Rentings: {
      __type: 'Rentings',
      __args: {
        draft: 'Boolean',
        limit: 'Int',
        page: 'Int',
        sort: 'String',
        where: 'Renting_where',
      },
    },
    Tag: { __type: 'Tag', __args: { draft: 'Boolean', id: 'Int!' } },
    Tags: {
      __type: 'Tags',
      __args: { draft: 'Boolean', limit: 'Int', page: 'Int', sort: 'String', where: 'Tag_where' },
    },
    User: { __type: 'User', __args: { draft: 'Boolean', id: 'Int!' } },
    Users: {
      __type: 'Users',
      __args: { draft: 'Boolean', limit: 'Int', page: 'Int', sort: 'String', where: 'User_where' },
    },
    docAccessChatroom: { __type: 'chatroomDocAccess', __args: { id: 'Int!' } },
    docAccessItem: { __type: 'itemsDocAccess', __args: { id: 'Int!' } },
    docAccessMedia: { __type: 'mediasDocAccess', __args: { id: 'Int!' } },
    docAccessMessage: { __type: 'messageDocAccess', __args: { id: 'Int!' } },
    docAccessPayloadPreference: { __type: 'payload_preferencesDocAccess', __args: { id: 'Int!' } },
    docAccessRenting: { __type: 'rentingDocAccess', __args: { id: 'Int!' } },
    docAccessTag: { __type: 'tagsDocAccess', __args: { id: 'Int!' } },
    docAccessUser: { __type: 'usersDocAccess', __args: { id: 'Int!' } },
    initializedUser: { __type: 'Boolean' },
    meUser: { __type: 'usersMe' },
    versionItem: { __type: 'ItemVersion', __args: { id: 'Int' } },
    versionsItems: {
      __type: 'versionsItems',
      __args: { limit: 'Int', page: 'Int', sort: 'String', where: 'versionsItem_where' },
    },
  },
  rentingAccess: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingCreateAccess' },
    delete: { __type: 'RentingDeleteAccess' },
    fields: { __type: 'RentingFields' },
    read: { __type: 'RentingReadAccess' },
    update: { __type: 'RentingUpdateAccess' },
  },
  rentingDocAccess: {
    __typename: { __type: 'String!' },
    create: { __type: 'RentingCreateDocAccess' },
    delete: { __type: 'RentingDeleteDocAccess' },
    fields: { __type: 'RentingDocAccessFields' },
    read: { __type: 'RentingReadDocAccess' },
    update: { __type: 'RentingUpdateDocAccess' },
  },
  subscription: {},
  tagsAccess: {
    __typename: { __type: 'String!' },
    create: { __type: 'TagsCreateAccess' },
    delete: { __type: 'TagsDeleteAccess' },
    fields: { __type: 'TagsFields' },
    read: { __type: 'TagsReadAccess' },
    update: { __type: 'TagsUpdateAccess' },
  },
  tagsDocAccess: {
    __typename: { __type: 'String!' },
    create: { __type: 'TagsCreateDocAccess' },
    delete: { __type: 'TagsDeleteDocAccess' },
    fields: { __type: 'TagsDocAccessFields' },
    read: { __type: 'TagsReadDocAccess' },
    update: { __type: 'TagsUpdateDocAccess' },
  },
  usersAccess: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersCreateAccess' },
    delete: { __type: 'UsersDeleteAccess' },
    fields: { __type: 'UsersFields' },
    read: { __type: 'UsersReadAccess' },
    unlock: { __type: 'UsersUnlockAccess' },
    update: { __type: 'UsersUpdateAccess' },
  },
  usersDocAccess: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersCreateDocAccess' },
    delete: { __type: 'UsersDeleteDocAccess' },
    fields: { __type: 'UsersDocAccessFields' },
    read: { __type: 'UsersReadDocAccess' },
    unlock: { __type: 'UsersUnlockDocAccess' },
    update: { __type: 'UsersUpdateDocAccess' },
  },
  usersJWT: {
    __typename: { __type: 'String!' },
    collection: { __type: 'String!' },
    email: { __type: 'EmailAddress!' },
    roles: { __type: '[usersJWT_roles!]!' },
  },
  usersLoginResult: {
    __typename: { __type: 'String!' },
    exp: { __type: 'Int' },
    token: { __type: 'String' },
    user: { __type: 'User' },
  },
  usersMe: {
    __typename: { __type: 'String!' },
    collection: { __type: 'String' },
    exp: { __type: 'Int' },
    token: { __type: 'String' },
    user: { __type: 'User' },
  },
  usersRefreshedUser: {
    __typename: { __type: 'String!' },
    exp: { __type: 'Int' },
    refreshedToken: { __type: 'String' },
    user: { __type: 'usersJWT' },
  },
  usersResetPassword: {
    __typename: { __type: 'String!' },
    token: { __type: 'String' },
    user: { __type: 'User' },
  },
  versionsItem_createdAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  versionsItem_id_operator: {
    equals: { __type: 'Int' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Int' },
    greater_than_equal: { __type: 'Int' },
    less_than: { __type: 'Int' },
    less_than_equal: { __type: 'Int' },
    not_equals: { __type: 'Int' },
  },
  versionsItem_latest_operator: {
    equals: { __type: 'Boolean' },
    exists: { __type: 'Boolean' },
    not_equals: { __type: 'Boolean' },
  },
  versionsItem_parent_operator: {
    all: { __type: '[JSON]' },
    equals: { __type: 'JSON' },
    exists: { __type: 'Boolean' },
    in: { __type: '[JSON]' },
    not_equals: { __type: 'JSON' },
    not_in: { __type: '[JSON]' },
  },
  versionsItem_updatedAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  versionsItem_version___status_operator: {
    all: { __type: '[versionsItem_version___status_Input]' },
    equals: { __type: 'versionsItem_version___status_Input' },
    exists: { __type: 'Boolean' },
    in: { __type: '[versionsItem_version___status_Input]' },
    not_equals: { __type: 'versionsItem_version___status_Input' },
    not_in: { __type: '[versionsItem_version___status_Input]' },
  },
  versionsItem_version__availableAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  versionsItem_version__createdAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  versionsItem_version__createdBy_operator: {
    all: { __type: '[JSON]' },
    equals: { __type: 'JSON' },
    in: { __type: '[JSON]' },
    not_equals: { __type: 'JSON' },
    not_in: { __type: '[JSON]' },
  },
  versionsItem_version__description_operator: {
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
  },
  versionsItem_version__end_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  versionsItem_version__image_operator: {
    all: { __type: '[JSON]' },
    equals: { __type: 'JSON' },
    in: { __type: '[JSON]' },
    not_equals: { __type: 'JSON' },
    not_in: { __type: '[JSON]' },
  },
  versionsItem_version__name_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  versionsItem_version__periodType_operator: {
    all: { __type: '[versionsItem_version__periodType_Input]' },
    equals: { __type: 'versionsItem_version__periodType_Input' },
    exists: { __type: 'Boolean' },
    in: { __type: '[versionsItem_version__periodType_Input]' },
    not_equals: { __type: 'versionsItem_version__periodType_Input' },
    not_in: { __type: '[versionsItem_version__periodType_Input]' },
  },
  versionsItem_version__period_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  versionsItem_version__price_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  versionsItem_version__rating_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  versionsItem_version__rentingStatus_operator: {
    all: { __type: '[versionsItem_version__rentingStatus_Input]' },
    equals: { __type: 'versionsItem_version__rentingStatus_Input' },
    exists: { __type: 'Boolean' },
    in: { __type: '[versionsItem_version__rentingStatus_Input]' },
    not_equals: { __type: 'versionsItem_version__rentingStatus_Input' },
    not_in: { __type: '[versionsItem_version__rentingStatus_Input]' },
  },
  versionsItem_version__start_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  versionsItem_version__tags_operator: {
    all: { __type: '[JSON]' },
    equals: { __type: 'JSON' },
    exists: { __type: 'Boolean' },
    in: { __type: '[JSON]' },
    not_equals: { __type: 'JSON' },
    not_in: { __type: '[JSON]' },
  },
  versionsItem_version__updatedAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  versionsItem_where: {
    AND: { __type: '[versionsItem_where_and]' },
    OR: { __type: '[versionsItem_where_or]' },
    createdAt: { __type: 'versionsItem_createdAt_operator' },
    id: { __type: 'versionsItem_id_operator' },
    latest: { __type: 'versionsItem_latest_operator' },
    parent: { __type: 'versionsItem_parent_operator' },
    updatedAt: { __type: 'versionsItem_updatedAt_operator' },
    version___status: { __type: 'versionsItem_version___status_operator' },
    version__availableAt: { __type: 'versionsItem_version__availableAt_operator' },
    version__createdAt: { __type: 'versionsItem_version__createdAt_operator' },
    version__createdBy: { __type: 'versionsItem_version__createdBy_operator' },
    version__description: { __type: 'versionsItem_version__description_operator' },
    version__end: { __type: 'versionsItem_version__end_operator' },
    version__image: { __type: 'versionsItem_version__image_operator' },
    version__name: { __type: 'versionsItem_version__name_operator' },
    version__period: { __type: 'versionsItem_version__period_operator' },
    version__periodType: { __type: 'versionsItem_version__periodType_operator' },
    version__price: { __type: 'versionsItem_version__price_operator' },
    version__rating: { __type: 'versionsItem_version__rating_operator' },
    version__rentingStatus: { __type: 'versionsItem_version__rentingStatus_operator' },
    version__start: { __type: 'versionsItem_version__start_operator' },
    version__tags: { __type: 'versionsItem_version__tags_operator' },
    version__updatedAt: { __type: 'versionsItem_version__updatedAt_operator' },
  },
  versionsItem_where_and: {
    createdAt: { __type: 'versionsItem_createdAt_operator' },
    id: { __type: 'versionsItem_id_operator' },
    latest: { __type: 'versionsItem_latest_operator' },
    parent: { __type: 'versionsItem_parent_operator' },
    updatedAt: { __type: 'versionsItem_updatedAt_operator' },
    version___status: { __type: 'versionsItem_version___status_operator' },
    version__availableAt: { __type: 'versionsItem_version__availableAt_operator' },
    version__createdAt: { __type: 'versionsItem_version__createdAt_operator' },
    version__createdBy: { __type: 'versionsItem_version__createdBy_operator' },
    version__description: { __type: 'versionsItem_version__description_operator' },
    version__end: { __type: 'versionsItem_version__end_operator' },
    version__image: { __type: 'versionsItem_version__image_operator' },
    version__name: { __type: 'versionsItem_version__name_operator' },
    version__period: { __type: 'versionsItem_version__period_operator' },
    version__periodType: { __type: 'versionsItem_version__periodType_operator' },
    version__price: { __type: 'versionsItem_version__price_operator' },
    version__rating: { __type: 'versionsItem_version__rating_operator' },
    version__rentingStatus: { __type: 'versionsItem_version__rentingStatus_operator' },
    version__start: { __type: 'versionsItem_version__start_operator' },
    version__tags: { __type: 'versionsItem_version__tags_operator' },
    version__updatedAt: { __type: 'versionsItem_version__updatedAt_operator' },
  },
  versionsItem_where_or: {
    createdAt: { __type: 'versionsItem_createdAt_operator' },
    id: { __type: 'versionsItem_id_operator' },
    latest: { __type: 'versionsItem_latest_operator' },
    parent: { __type: 'versionsItem_parent_operator' },
    updatedAt: { __type: 'versionsItem_updatedAt_operator' },
    version___status: { __type: 'versionsItem_version___status_operator' },
    version__availableAt: { __type: 'versionsItem_version__availableAt_operator' },
    version__createdAt: { __type: 'versionsItem_version__createdAt_operator' },
    version__createdBy: { __type: 'versionsItem_version__createdBy_operator' },
    version__description: { __type: 'versionsItem_version__description_operator' },
    version__end: { __type: 'versionsItem_version__end_operator' },
    version__image: { __type: 'versionsItem_version__image_operator' },
    version__name: { __type: 'versionsItem_version__name_operator' },
    version__period: { __type: 'versionsItem_version__period_operator' },
    version__periodType: { __type: 'versionsItem_version__periodType_operator' },
    version__price: { __type: 'versionsItem_version__price_operator' },
    version__rating: { __type: 'versionsItem_version__rating_operator' },
    version__rentingStatus: { __type: 'versionsItem_version__rentingStatus_operator' },
    version__start: { __type: 'versionsItem_version__start_operator' },
    version__tags: { __type: 'versionsItem_version__tags_operator' },
    version__updatedAt: { __type: 'versionsItem_version__updatedAt_operator' },
  },
  versionsItems: {
    __typename: { __type: 'String!' },
    docs: { __type: '[ItemVersion]' },
    hasNextPage: { __type: 'Boolean' },
    hasPrevPage: { __type: 'Boolean' },
    limit: { __type: 'Int' },
    nextPage: { __type: 'Int' },
    offset: { __type: 'Int' },
    page: { __type: 'Int' },
    pagingCounter: { __type: 'Int' },
    prevPage: { __type: 'Int' },
    totalDocs: { __type: 'Int' },
    totalPages: { __type: 'Int' },
  },
  [SchemaUnionsKey]: { PayloadPreference_User: ['User'] },
} as const

export interface Access {
  __typename?: 'Access'
  canAccessAdmin: ScalarsEnums['Boolean']
  chatroom?: Maybe<chatroomAccess>
  items?: Maybe<itemsAccess>
  medias?: Maybe<mediasAccess>
  message?: Maybe<messageAccess>
  payload_preferences?: Maybe<payload_preferencesAccess>
  renting?: Maybe<rentingAccess>
  tags?: Maybe<tagsAccess>
  users?: Maybe<usersAccess>
}

export interface Chatroom {
  __typename?: 'Chatroom'
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  id?: Maybe<ScalarsEnums['Int']>
  lastMessage?: Maybe<Message>
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
  user1LastViewed?: Maybe<ScalarsEnums['DateTime']>
  user1_id: User
  user2LastViewed?: Maybe<ScalarsEnums['DateTime']>
  user2_id: User
}

export interface ChatroomCreateAccess {
  __typename?: 'ChatroomCreateAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface ChatroomCreateDocAccess {
  __typename?: 'ChatroomCreateDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface ChatroomDeleteAccess {
  __typename?: 'ChatroomDeleteAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface ChatroomDeleteDocAccess {
  __typename?: 'ChatroomDeleteDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface ChatroomDocAccessFields {
  __typename?: 'ChatroomDocAccessFields'
  createdAt?: Maybe<ChatroomDocAccessFields_createdAt>
  lastMessage?: Maybe<ChatroomDocAccessFields_lastMessage>
  updatedAt?: Maybe<ChatroomDocAccessFields_updatedAt>
  user1LastViewed?: Maybe<ChatroomDocAccessFields_user1LastViewed>
  user1_id?: Maybe<ChatroomDocAccessFields_user1_id>
  user2LastViewed?: Maybe<ChatroomDocAccessFields_user2LastViewed>
  user2_id?: Maybe<ChatroomDocAccessFields_user2_id>
}

export interface ChatroomDocAccessFields_createdAt {
  __typename?: 'ChatroomDocAccessFields_createdAt'
  create?: Maybe<ChatroomDocAccessFields_createdAt_Create>
  delete?: Maybe<ChatroomDocAccessFields_createdAt_Delete>
  read?: Maybe<ChatroomDocAccessFields_createdAt_Read>
  update?: Maybe<ChatroomDocAccessFields_createdAt_Update>
}

export interface ChatroomDocAccessFields_createdAt_Create {
  __typename?: 'ChatroomDocAccessFields_createdAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomDocAccessFields_createdAt_Delete {
  __typename?: 'ChatroomDocAccessFields_createdAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomDocAccessFields_createdAt_Read {
  __typename?: 'ChatroomDocAccessFields_createdAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomDocAccessFields_createdAt_Update {
  __typename?: 'ChatroomDocAccessFields_createdAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomDocAccessFields_lastMessage {
  __typename?: 'ChatroomDocAccessFields_lastMessage'
  create?: Maybe<ChatroomDocAccessFields_lastMessage_Create>
  delete?: Maybe<ChatroomDocAccessFields_lastMessage_Delete>
  read?: Maybe<ChatroomDocAccessFields_lastMessage_Read>
  update?: Maybe<ChatroomDocAccessFields_lastMessage_Update>
}

export interface ChatroomDocAccessFields_lastMessage_Create {
  __typename?: 'ChatroomDocAccessFields_lastMessage_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomDocAccessFields_lastMessage_Delete {
  __typename?: 'ChatroomDocAccessFields_lastMessage_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomDocAccessFields_lastMessage_Read {
  __typename?: 'ChatroomDocAccessFields_lastMessage_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomDocAccessFields_lastMessage_Update {
  __typename?: 'ChatroomDocAccessFields_lastMessage_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomDocAccessFields_updatedAt {
  __typename?: 'ChatroomDocAccessFields_updatedAt'
  create?: Maybe<ChatroomDocAccessFields_updatedAt_Create>
  delete?: Maybe<ChatroomDocAccessFields_updatedAt_Delete>
  read?: Maybe<ChatroomDocAccessFields_updatedAt_Read>
  update?: Maybe<ChatroomDocAccessFields_updatedAt_Update>
}

export interface ChatroomDocAccessFields_updatedAt_Create {
  __typename?: 'ChatroomDocAccessFields_updatedAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomDocAccessFields_updatedAt_Delete {
  __typename?: 'ChatroomDocAccessFields_updatedAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomDocAccessFields_updatedAt_Read {
  __typename?: 'ChatroomDocAccessFields_updatedAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomDocAccessFields_updatedAt_Update {
  __typename?: 'ChatroomDocAccessFields_updatedAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomDocAccessFields_user1LastViewed {
  __typename?: 'ChatroomDocAccessFields_user1LastViewed'
  create?: Maybe<ChatroomDocAccessFields_user1LastViewed_Create>
  delete?: Maybe<ChatroomDocAccessFields_user1LastViewed_Delete>
  read?: Maybe<ChatroomDocAccessFields_user1LastViewed_Read>
  update?: Maybe<ChatroomDocAccessFields_user1LastViewed_Update>
}

export interface ChatroomDocAccessFields_user1LastViewed_Create {
  __typename?: 'ChatroomDocAccessFields_user1LastViewed_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomDocAccessFields_user1LastViewed_Delete {
  __typename?: 'ChatroomDocAccessFields_user1LastViewed_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomDocAccessFields_user1LastViewed_Read {
  __typename?: 'ChatroomDocAccessFields_user1LastViewed_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomDocAccessFields_user1LastViewed_Update {
  __typename?: 'ChatroomDocAccessFields_user1LastViewed_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomDocAccessFields_user1_id {
  __typename?: 'ChatroomDocAccessFields_user1_id'
  create?: Maybe<ChatroomDocAccessFields_user1_id_Create>
  delete?: Maybe<ChatroomDocAccessFields_user1_id_Delete>
  read?: Maybe<ChatroomDocAccessFields_user1_id_Read>
  update?: Maybe<ChatroomDocAccessFields_user1_id_Update>
}

export interface ChatroomDocAccessFields_user1_id_Create {
  __typename?: 'ChatroomDocAccessFields_user1_id_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomDocAccessFields_user1_id_Delete {
  __typename?: 'ChatroomDocAccessFields_user1_id_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomDocAccessFields_user1_id_Read {
  __typename?: 'ChatroomDocAccessFields_user1_id_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomDocAccessFields_user1_id_Update {
  __typename?: 'ChatroomDocAccessFields_user1_id_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomDocAccessFields_user2LastViewed {
  __typename?: 'ChatroomDocAccessFields_user2LastViewed'
  create?: Maybe<ChatroomDocAccessFields_user2LastViewed_Create>
  delete?: Maybe<ChatroomDocAccessFields_user2LastViewed_Delete>
  read?: Maybe<ChatroomDocAccessFields_user2LastViewed_Read>
  update?: Maybe<ChatroomDocAccessFields_user2LastViewed_Update>
}

export interface ChatroomDocAccessFields_user2LastViewed_Create {
  __typename?: 'ChatroomDocAccessFields_user2LastViewed_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomDocAccessFields_user2LastViewed_Delete {
  __typename?: 'ChatroomDocAccessFields_user2LastViewed_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomDocAccessFields_user2LastViewed_Read {
  __typename?: 'ChatroomDocAccessFields_user2LastViewed_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomDocAccessFields_user2LastViewed_Update {
  __typename?: 'ChatroomDocAccessFields_user2LastViewed_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomDocAccessFields_user2_id {
  __typename?: 'ChatroomDocAccessFields_user2_id'
  create?: Maybe<ChatroomDocAccessFields_user2_id_Create>
  delete?: Maybe<ChatroomDocAccessFields_user2_id_Delete>
  read?: Maybe<ChatroomDocAccessFields_user2_id_Read>
  update?: Maybe<ChatroomDocAccessFields_user2_id_Update>
}

export interface ChatroomDocAccessFields_user2_id_Create {
  __typename?: 'ChatroomDocAccessFields_user2_id_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomDocAccessFields_user2_id_Delete {
  __typename?: 'ChatroomDocAccessFields_user2_id_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomDocAccessFields_user2_id_Read {
  __typename?: 'ChatroomDocAccessFields_user2_id_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomDocAccessFields_user2_id_Update {
  __typename?: 'ChatroomDocAccessFields_user2_id_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomFields {
  __typename?: 'ChatroomFields'
  createdAt?: Maybe<ChatroomFields_createdAt>
  lastMessage?: Maybe<ChatroomFields_lastMessage>
  updatedAt?: Maybe<ChatroomFields_updatedAt>
  user1LastViewed?: Maybe<ChatroomFields_user1LastViewed>
  user1_id?: Maybe<ChatroomFields_user1_id>
  user2LastViewed?: Maybe<ChatroomFields_user2LastViewed>
  user2_id?: Maybe<ChatroomFields_user2_id>
}

export interface ChatroomFields_createdAt {
  __typename?: 'ChatroomFields_createdAt'
  create?: Maybe<ChatroomFields_createdAt_Create>
  delete?: Maybe<ChatroomFields_createdAt_Delete>
  read?: Maybe<ChatroomFields_createdAt_Read>
  update?: Maybe<ChatroomFields_createdAt_Update>
}

export interface ChatroomFields_createdAt_Create {
  __typename?: 'ChatroomFields_createdAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomFields_createdAt_Delete {
  __typename?: 'ChatroomFields_createdAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomFields_createdAt_Read {
  __typename?: 'ChatroomFields_createdAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomFields_createdAt_Update {
  __typename?: 'ChatroomFields_createdAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomFields_lastMessage {
  __typename?: 'ChatroomFields_lastMessage'
  create?: Maybe<ChatroomFields_lastMessage_Create>
  delete?: Maybe<ChatroomFields_lastMessage_Delete>
  read?: Maybe<ChatroomFields_lastMessage_Read>
  update?: Maybe<ChatroomFields_lastMessage_Update>
}

export interface ChatroomFields_lastMessage_Create {
  __typename?: 'ChatroomFields_lastMessage_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomFields_lastMessage_Delete {
  __typename?: 'ChatroomFields_lastMessage_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomFields_lastMessage_Read {
  __typename?: 'ChatroomFields_lastMessage_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomFields_lastMessage_Update {
  __typename?: 'ChatroomFields_lastMessage_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomFields_updatedAt {
  __typename?: 'ChatroomFields_updatedAt'
  create?: Maybe<ChatroomFields_updatedAt_Create>
  delete?: Maybe<ChatroomFields_updatedAt_Delete>
  read?: Maybe<ChatroomFields_updatedAt_Read>
  update?: Maybe<ChatroomFields_updatedAt_Update>
}

export interface ChatroomFields_updatedAt_Create {
  __typename?: 'ChatroomFields_updatedAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomFields_updatedAt_Delete {
  __typename?: 'ChatroomFields_updatedAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomFields_updatedAt_Read {
  __typename?: 'ChatroomFields_updatedAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomFields_updatedAt_Update {
  __typename?: 'ChatroomFields_updatedAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomFields_user1LastViewed {
  __typename?: 'ChatroomFields_user1LastViewed'
  create?: Maybe<ChatroomFields_user1LastViewed_Create>
  delete?: Maybe<ChatroomFields_user1LastViewed_Delete>
  read?: Maybe<ChatroomFields_user1LastViewed_Read>
  update?: Maybe<ChatroomFields_user1LastViewed_Update>
}

export interface ChatroomFields_user1LastViewed_Create {
  __typename?: 'ChatroomFields_user1LastViewed_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomFields_user1LastViewed_Delete {
  __typename?: 'ChatroomFields_user1LastViewed_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomFields_user1LastViewed_Read {
  __typename?: 'ChatroomFields_user1LastViewed_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomFields_user1LastViewed_Update {
  __typename?: 'ChatroomFields_user1LastViewed_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomFields_user1_id {
  __typename?: 'ChatroomFields_user1_id'
  create?: Maybe<ChatroomFields_user1_id_Create>
  delete?: Maybe<ChatroomFields_user1_id_Delete>
  read?: Maybe<ChatroomFields_user1_id_Read>
  update?: Maybe<ChatroomFields_user1_id_Update>
}

export interface ChatroomFields_user1_id_Create {
  __typename?: 'ChatroomFields_user1_id_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomFields_user1_id_Delete {
  __typename?: 'ChatroomFields_user1_id_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomFields_user1_id_Read {
  __typename?: 'ChatroomFields_user1_id_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomFields_user1_id_Update {
  __typename?: 'ChatroomFields_user1_id_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomFields_user2LastViewed {
  __typename?: 'ChatroomFields_user2LastViewed'
  create?: Maybe<ChatroomFields_user2LastViewed_Create>
  delete?: Maybe<ChatroomFields_user2LastViewed_Delete>
  read?: Maybe<ChatroomFields_user2LastViewed_Read>
  update?: Maybe<ChatroomFields_user2LastViewed_Update>
}

export interface ChatroomFields_user2LastViewed_Create {
  __typename?: 'ChatroomFields_user2LastViewed_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomFields_user2LastViewed_Delete {
  __typename?: 'ChatroomFields_user2LastViewed_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomFields_user2LastViewed_Read {
  __typename?: 'ChatroomFields_user2LastViewed_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomFields_user2LastViewed_Update {
  __typename?: 'ChatroomFields_user2LastViewed_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomFields_user2_id {
  __typename?: 'ChatroomFields_user2_id'
  create?: Maybe<ChatroomFields_user2_id_Create>
  delete?: Maybe<ChatroomFields_user2_id_Delete>
  read?: Maybe<ChatroomFields_user2_id_Read>
  update?: Maybe<ChatroomFields_user2_id_Update>
}

export interface ChatroomFields_user2_id_Create {
  __typename?: 'ChatroomFields_user2_id_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomFields_user2_id_Delete {
  __typename?: 'ChatroomFields_user2_id_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomFields_user2_id_Read {
  __typename?: 'ChatroomFields_user2_id_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomFields_user2_id_Update {
  __typename?: 'ChatroomFields_user2_id_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ChatroomReadAccess {
  __typename?: 'ChatroomReadAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface ChatroomReadDocAccess {
  __typename?: 'ChatroomReadDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface ChatroomUpdateAccess {
  __typename?: 'ChatroomUpdateAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface ChatroomUpdateDocAccess {
  __typename?: 'ChatroomUpdateDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface Chatrooms {
  __typename?: 'Chatrooms'
  docs?: Maybe<Array<Maybe<Chatroom>>>
  hasNextPage?: Maybe<ScalarsEnums['Boolean']>
  hasPrevPage?: Maybe<ScalarsEnums['Boolean']>
  limit?: Maybe<ScalarsEnums['Int']>
  nextPage?: Maybe<ScalarsEnums['Int']>
  offset?: Maybe<ScalarsEnums['Int']>
  page?: Maybe<ScalarsEnums['Int']>
  pagingCounter?: Maybe<ScalarsEnums['Int']>
  prevPage?: Maybe<ScalarsEnums['Int']>
  totalDocs?: Maybe<ScalarsEnums['Int']>
  totalPages?: Maybe<ScalarsEnums['Int']>
}

export interface Item {
  __typename?: 'Item'
  _status?: Maybe<ScalarsEnums['Item__status']>
  availableAt?: Maybe<ScalarsEnums['DateTime']>
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  createdBy?: Maybe<User>
  description?: Maybe<ScalarsEnums['String']>
  end?: Maybe<ScalarsEnums['DateTime']>
  id?: Maybe<ScalarsEnums['Int']>
  image?: Maybe<Array<Media>>
  name?: Maybe<ScalarsEnums['String']>
  period?: Maybe<ScalarsEnums['Float']>
  periodType?: Maybe<ScalarsEnums['Item_periodType']>
  price?: Maybe<ScalarsEnums['Float']>
  rating?: Maybe<ScalarsEnums['Float']>
  rentingStatus?: Maybe<ScalarsEnums['Item_rentingStatus']>
  start?: Maybe<ScalarsEnums['DateTime']>
  tags?: Maybe<Array<Tag>>
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
}

export interface ItemVersion {
  __typename?: 'ItemVersion'
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  id?: Maybe<ScalarsEnums['Int']>
  latest?: Maybe<ScalarsEnums['Boolean']>
  parent?: Maybe<Item>
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
  version?: Maybe<ItemVersion_Version>
}

export interface ItemVersion_Version {
  __typename?: 'ItemVersion_Version'
  _status?: Maybe<ScalarsEnums['ItemVersion_Version__status']>
  availableAt?: Maybe<ScalarsEnums['DateTime']>
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  createdBy?: Maybe<User>
  description?: Maybe<ScalarsEnums['String']>
  end?: Maybe<ScalarsEnums['DateTime']>
  image?: Maybe<Array<Media>>
  name?: Maybe<ScalarsEnums['String']>
  period?: Maybe<ScalarsEnums['Float']>
  periodType?: Maybe<ScalarsEnums['ItemVersion_Version_periodType']>
  price?: Maybe<ScalarsEnums['Float']>
  rating?: Maybe<ScalarsEnums['Float']>
  rentingStatus?: Maybe<ScalarsEnums['ItemVersion_Version_rentingStatus']>
  start?: Maybe<ScalarsEnums['DateTime']>
  tags?: Maybe<Array<Tag>>
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
}

export interface Items {
  __typename?: 'Items'
  docs?: Maybe<Array<Maybe<Item>>>
  hasNextPage?: Maybe<ScalarsEnums['Boolean']>
  hasPrevPage?: Maybe<ScalarsEnums['Boolean']>
  limit?: Maybe<ScalarsEnums['Int']>
  nextPage?: Maybe<ScalarsEnums['Int']>
  offset?: Maybe<ScalarsEnums['Int']>
  page?: Maybe<ScalarsEnums['Int']>
  pagingCounter?: Maybe<ScalarsEnums['Int']>
  prevPage?: Maybe<ScalarsEnums['Int']>
  totalDocs?: Maybe<ScalarsEnums['Int']>
  totalPages?: Maybe<ScalarsEnums['Int']>
}

export interface ItemsCreateAccess {
  __typename?: 'ItemsCreateAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface ItemsCreateDocAccess {
  __typename?: 'ItemsCreateDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface ItemsDeleteAccess {
  __typename?: 'ItemsDeleteAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface ItemsDeleteDocAccess {
  __typename?: 'ItemsDeleteDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface ItemsDocAccessFields {
  __typename?: 'ItemsDocAccessFields'
  _status?: Maybe<ItemsDocAccessFields__status>
  availableAt?: Maybe<ItemsDocAccessFields_availableAt>
  createdAt?: Maybe<ItemsDocAccessFields_createdAt>
  createdBy?: Maybe<ItemsDocAccessFields_createdBy>
  description?: Maybe<ItemsDocAccessFields_description>
  end?: Maybe<ItemsDocAccessFields_end>
  image?: Maybe<ItemsDocAccessFields_image>
  name?: Maybe<ItemsDocAccessFields_name>
  period?: Maybe<ItemsDocAccessFields_period>
  periodType?: Maybe<ItemsDocAccessFields_periodType>
  price?: Maybe<ItemsDocAccessFields_price>
  rating?: Maybe<ItemsDocAccessFields_rating>
  rentingStatus?: Maybe<ItemsDocAccessFields_rentingStatus>
  start?: Maybe<ItemsDocAccessFields_start>
  tags?: Maybe<ItemsDocAccessFields_tags>
  updatedAt?: Maybe<ItemsDocAccessFields_updatedAt>
}

export interface ItemsDocAccessFields__status {
  __typename?: 'ItemsDocAccessFields__status'
  create?: Maybe<ItemsDocAccessFields__status_Create>
  delete?: Maybe<ItemsDocAccessFields__status_Delete>
  read?: Maybe<ItemsDocAccessFields__status_Read>
  update?: Maybe<ItemsDocAccessFields__status_Update>
}

export interface ItemsDocAccessFields__status_Create {
  __typename?: 'ItemsDocAccessFields__status_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields__status_Delete {
  __typename?: 'ItemsDocAccessFields__status_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields__status_Read {
  __typename?: 'ItemsDocAccessFields__status_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields__status_Update {
  __typename?: 'ItemsDocAccessFields__status_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_availableAt {
  __typename?: 'ItemsDocAccessFields_availableAt'
  create?: Maybe<ItemsDocAccessFields_availableAt_Create>
  delete?: Maybe<ItemsDocAccessFields_availableAt_Delete>
  read?: Maybe<ItemsDocAccessFields_availableAt_Read>
  update?: Maybe<ItemsDocAccessFields_availableAt_Update>
}

export interface ItemsDocAccessFields_availableAt_Create {
  __typename?: 'ItemsDocAccessFields_availableAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_availableAt_Delete {
  __typename?: 'ItemsDocAccessFields_availableAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_availableAt_Read {
  __typename?: 'ItemsDocAccessFields_availableAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_availableAt_Update {
  __typename?: 'ItemsDocAccessFields_availableAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_createdAt {
  __typename?: 'ItemsDocAccessFields_createdAt'
  create?: Maybe<ItemsDocAccessFields_createdAt_Create>
  delete?: Maybe<ItemsDocAccessFields_createdAt_Delete>
  read?: Maybe<ItemsDocAccessFields_createdAt_Read>
  update?: Maybe<ItemsDocAccessFields_createdAt_Update>
}

export interface ItemsDocAccessFields_createdAt_Create {
  __typename?: 'ItemsDocAccessFields_createdAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_createdAt_Delete {
  __typename?: 'ItemsDocAccessFields_createdAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_createdAt_Read {
  __typename?: 'ItemsDocAccessFields_createdAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_createdAt_Update {
  __typename?: 'ItemsDocAccessFields_createdAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_createdBy {
  __typename?: 'ItemsDocAccessFields_createdBy'
  create?: Maybe<ItemsDocAccessFields_createdBy_Create>
  delete?: Maybe<ItemsDocAccessFields_createdBy_Delete>
  read?: Maybe<ItemsDocAccessFields_createdBy_Read>
  update?: Maybe<ItemsDocAccessFields_createdBy_Update>
}

export interface ItemsDocAccessFields_createdBy_Create {
  __typename?: 'ItemsDocAccessFields_createdBy_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_createdBy_Delete {
  __typename?: 'ItemsDocAccessFields_createdBy_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_createdBy_Read {
  __typename?: 'ItemsDocAccessFields_createdBy_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_createdBy_Update {
  __typename?: 'ItemsDocAccessFields_createdBy_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_description {
  __typename?: 'ItemsDocAccessFields_description'
  create?: Maybe<ItemsDocAccessFields_description_Create>
  delete?: Maybe<ItemsDocAccessFields_description_Delete>
  read?: Maybe<ItemsDocAccessFields_description_Read>
  update?: Maybe<ItemsDocAccessFields_description_Update>
}

export interface ItemsDocAccessFields_description_Create {
  __typename?: 'ItemsDocAccessFields_description_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_description_Delete {
  __typename?: 'ItemsDocAccessFields_description_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_description_Read {
  __typename?: 'ItemsDocAccessFields_description_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_description_Update {
  __typename?: 'ItemsDocAccessFields_description_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_end {
  __typename?: 'ItemsDocAccessFields_end'
  create?: Maybe<ItemsDocAccessFields_end_Create>
  delete?: Maybe<ItemsDocAccessFields_end_Delete>
  read?: Maybe<ItemsDocAccessFields_end_Read>
  update?: Maybe<ItemsDocAccessFields_end_Update>
}

export interface ItemsDocAccessFields_end_Create {
  __typename?: 'ItemsDocAccessFields_end_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_end_Delete {
  __typename?: 'ItemsDocAccessFields_end_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_end_Read {
  __typename?: 'ItemsDocAccessFields_end_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_end_Update {
  __typename?: 'ItemsDocAccessFields_end_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_image {
  __typename?: 'ItemsDocAccessFields_image'
  create?: Maybe<ItemsDocAccessFields_image_Create>
  delete?: Maybe<ItemsDocAccessFields_image_Delete>
  read?: Maybe<ItemsDocAccessFields_image_Read>
  update?: Maybe<ItemsDocAccessFields_image_Update>
}

export interface ItemsDocAccessFields_image_Create {
  __typename?: 'ItemsDocAccessFields_image_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_image_Delete {
  __typename?: 'ItemsDocAccessFields_image_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_image_Read {
  __typename?: 'ItemsDocAccessFields_image_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_image_Update {
  __typename?: 'ItemsDocAccessFields_image_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_name {
  __typename?: 'ItemsDocAccessFields_name'
  create?: Maybe<ItemsDocAccessFields_name_Create>
  delete?: Maybe<ItemsDocAccessFields_name_Delete>
  read?: Maybe<ItemsDocAccessFields_name_Read>
  update?: Maybe<ItemsDocAccessFields_name_Update>
}

export interface ItemsDocAccessFields_name_Create {
  __typename?: 'ItemsDocAccessFields_name_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_name_Delete {
  __typename?: 'ItemsDocAccessFields_name_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_name_Read {
  __typename?: 'ItemsDocAccessFields_name_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_name_Update {
  __typename?: 'ItemsDocAccessFields_name_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_period {
  __typename?: 'ItemsDocAccessFields_period'
  create?: Maybe<ItemsDocAccessFields_period_Create>
  delete?: Maybe<ItemsDocAccessFields_period_Delete>
  read?: Maybe<ItemsDocAccessFields_period_Read>
  update?: Maybe<ItemsDocAccessFields_period_Update>
}

export interface ItemsDocAccessFields_periodType {
  __typename?: 'ItemsDocAccessFields_periodType'
  create?: Maybe<ItemsDocAccessFields_periodType_Create>
  delete?: Maybe<ItemsDocAccessFields_periodType_Delete>
  read?: Maybe<ItemsDocAccessFields_periodType_Read>
  update?: Maybe<ItemsDocAccessFields_periodType_Update>
}

export interface ItemsDocAccessFields_periodType_Create {
  __typename?: 'ItemsDocAccessFields_periodType_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_periodType_Delete {
  __typename?: 'ItemsDocAccessFields_periodType_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_periodType_Read {
  __typename?: 'ItemsDocAccessFields_periodType_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_periodType_Update {
  __typename?: 'ItemsDocAccessFields_periodType_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_period_Create {
  __typename?: 'ItemsDocAccessFields_period_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_period_Delete {
  __typename?: 'ItemsDocAccessFields_period_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_period_Read {
  __typename?: 'ItemsDocAccessFields_period_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_period_Update {
  __typename?: 'ItemsDocAccessFields_period_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_price {
  __typename?: 'ItemsDocAccessFields_price'
  create?: Maybe<ItemsDocAccessFields_price_Create>
  delete?: Maybe<ItemsDocAccessFields_price_Delete>
  read?: Maybe<ItemsDocAccessFields_price_Read>
  update?: Maybe<ItemsDocAccessFields_price_Update>
}

export interface ItemsDocAccessFields_price_Create {
  __typename?: 'ItemsDocAccessFields_price_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_price_Delete {
  __typename?: 'ItemsDocAccessFields_price_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_price_Read {
  __typename?: 'ItemsDocAccessFields_price_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_price_Update {
  __typename?: 'ItemsDocAccessFields_price_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_rating {
  __typename?: 'ItemsDocAccessFields_rating'
  create?: Maybe<ItemsDocAccessFields_rating_Create>
  delete?: Maybe<ItemsDocAccessFields_rating_Delete>
  read?: Maybe<ItemsDocAccessFields_rating_Read>
  update?: Maybe<ItemsDocAccessFields_rating_Update>
}

export interface ItemsDocAccessFields_rating_Create {
  __typename?: 'ItemsDocAccessFields_rating_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_rating_Delete {
  __typename?: 'ItemsDocAccessFields_rating_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_rating_Read {
  __typename?: 'ItemsDocAccessFields_rating_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_rating_Update {
  __typename?: 'ItemsDocAccessFields_rating_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_rentingStatus {
  __typename?: 'ItemsDocAccessFields_rentingStatus'
  create?: Maybe<ItemsDocAccessFields_rentingStatus_Create>
  delete?: Maybe<ItemsDocAccessFields_rentingStatus_Delete>
  read?: Maybe<ItemsDocAccessFields_rentingStatus_Read>
  update?: Maybe<ItemsDocAccessFields_rentingStatus_Update>
}

export interface ItemsDocAccessFields_rentingStatus_Create {
  __typename?: 'ItemsDocAccessFields_rentingStatus_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_rentingStatus_Delete {
  __typename?: 'ItemsDocAccessFields_rentingStatus_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_rentingStatus_Read {
  __typename?: 'ItemsDocAccessFields_rentingStatus_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_rentingStatus_Update {
  __typename?: 'ItemsDocAccessFields_rentingStatus_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_start {
  __typename?: 'ItemsDocAccessFields_start'
  create?: Maybe<ItemsDocAccessFields_start_Create>
  delete?: Maybe<ItemsDocAccessFields_start_Delete>
  read?: Maybe<ItemsDocAccessFields_start_Read>
  update?: Maybe<ItemsDocAccessFields_start_Update>
}

export interface ItemsDocAccessFields_start_Create {
  __typename?: 'ItemsDocAccessFields_start_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_start_Delete {
  __typename?: 'ItemsDocAccessFields_start_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_start_Read {
  __typename?: 'ItemsDocAccessFields_start_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_start_Update {
  __typename?: 'ItemsDocAccessFields_start_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_tags {
  __typename?: 'ItemsDocAccessFields_tags'
  create?: Maybe<ItemsDocAccessFields_tags_Create>
  delete?: Maybe<ItemsDocAccessFields_tags_Delete>
  read?: Maybe<ItemsDocAccessFields_tags_Read>
  update?: Maybe<ItemsDocAccessFields_tags_Update>
}

export interface ItemsDocAccessFields_tags_Create {
  __typename?: 'ItemsDocAccessFields_tags_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_tags_Delete {
  __typename?: 'ItemsDocAccessFields_tags_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_tags_Read {
  __typename?: 'ItemsDocAccessFields_tags_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_tags_Update {
  __typename?: 'ItemsDocAccessFields_tags_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_updatedAt {
  __typename?: 'ItemsDocAccessFields_updatedAt'
  create?: Maybe<ItemsDocAccessFields_updatedAt_Create>
  delete?: Maybe<ItemsDocAccessFields_updatedAt_Delete>
  read?: Maybe<ItemsDocAccessFields_updatedAt_Read>
  update?: Maybe<ItemsDocAccessFields_updatedAt_Update>
}

export interface ItemsDocAccessFields_updatedAt_Create {
  __typename?: 'ItemsDocAccessFields_updatedAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_updatedAt_Delete {
  __typename?: 'ItemsDocAccessFields_updatedAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_updatedAt_Read {
  __typename?: 'ItemsDocAccessFields_updatedAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsDocAccessFields_updatedAt_Update {
  __typename?: 'ItemsDocAccessFields_updatedAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields {
  __typename?: 'ItemsFields'
  _status?: Maybe<ItemsFields__status>
  availableAt?: Maybe<ItemsFields_availableAt>
  createdAt?: Maybe<ItemsFields_createdAt>
  createdBy?: Maybe<ItemsFields_createdBy>
  description?: Maybe<ItemsFields_description>
  end?: Maybe<ItemsFields_end>
  image?: Maybe<ItemsFields_image>
  name?: Maybe<ItemsFields_name>
  period?: Maybe<ItemsFields_period>
  periodType?: Maybe<ItemsFields_periodType>
  price?: Maybe<ItemsFields_price>
  rating?: Maybe<ItemsFields_rating>
  rentingStatus?: Maybe<ItemsFields_rentingStatus>
  start?: Maybe<ItemsFields_start>
  tags?: Maybe<ItemsFields_tags>
  updatedAt?: Maybe<ItemsFields_updatedAt>
}

export interface ItemsFields__status {
  __typename?: 'ItemsFields__status'
  create?: Maybe<ItemsFields__status_Create>
  delete?: Maybe<ItemsFields__status_Delete>
  read?: Maybe<ItemsFields__status_Read>
  update?: Maybe<ItemsFields__status_Update>
}

export interface ItemsFields__status_Create {
  __typename?: 'ItemsFields__status_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields__status_Delete {
  __typename?: 'ItemsFields__status_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields__status_Read {
  __typename?: 'ItemsFields__status_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields__status_Update {
  __typename?: 'ItemsFields__status_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_availableAt {
  __typename?: 'ItemsFields_availableAt'
  create?: Maybe<ItemsFields_availableAt_Create>
  delete?: Maybe<ItemsFields_availableAt_Delete>
  read?: Maybe<ItemsFields_availableAt_Read>
  update?: Maybe<ItemsFields_availableAt_Update>
}

export interface ItemsFields_availableAt_Create {
  __typename?: 'ItemsFields_availableAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_availableAt_Delete {
  __typename?: 'ItemsFields_availableAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_availableAt_Read {
  __typename?: 'ItemsFields_availableAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_availableAt_Update {
  __typename?: 'ItemsFields_availableAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_createdAt {
  __typename?: 'ItemsFields_createdAt'
  create?: Maybe<ItemsFields_createdAt_Create>
  delete?: Maybe<ItemsFields_createdAt_Delete>
  read?: Maybe<ItemsFields_createdAt_Read>
  update?: Maybe<ItemsFields_createdAt_Update>
}

export interface ItemsFields_createdAt_Create {
  __typename?: 'ItemsFields_createdAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_createdAt_Delete {
  __typename?: 'ItemsFields_createdAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_createdAt_Read {
  __typename?: 'ItemsFields_createdAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_createdAt_Update {
  __typename?: 'ItemsFields_createdAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_createdBy {
  __typename?: 'ItemsFields_createdBy'
  create?: Maybe<ItemsFields_createdBy_Create>
  delete?: Maybe<ItemsFields_createdBy_Delete>
  read?: Maybe<ItemsFields_createdBy_Read>
  update?: Maybe<ItemsFields_createdBy_Update>
}

export interface ItemsFields_createdBy_Create {
  __typename?: 'ItemsFields_createdBy_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_createdBy_Delete {
  __typename?: 'ItemsFields_createdBy_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_createdBy_Read {
  __typename?: 'ItemsFields_createdBy_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_createdBy_Update {
  __typename?: 'ItemsFields_createdBy_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_description {
  __typename?: 'ItemsFields_description'
  create?: Maybe<ItemsFields_description_Create>
  delete?: Maybe<ItemsFields_description_Delete>
  read?: Maybe<ItemsFields_description_Read>
  update?: Maybe<ItemsFields_description_Update>
}

export interface ItemsFields_description_Create {
  __typename?: 'ItemsFields_description_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_description_Delete {
  __typename?: 'ItemsFields_description_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_description_Read {
  __typename?: 'ItemsFields_description_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_description_Update {
  __typename?: 'ItemsFields_description_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_end {
  __typename?: 'ItemsFields_end'
  create?: Maybe<ItemsFields_end_Create>
  delete?: Maybe<ItemsFields_end_Delete>
  read?: Maybe<ItemsFields_end_Read>
  update?: Maybe<ItemsFields_end_Update>
}

export interface ItemsFields_end_Create {
  __typename?: 'ItemsFields_end_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_end_Delete {
  __typename?: 'ItemsFields_end_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_end_Read {
  __typename?: 'ItemsFields_end_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_end_Update {
  __typename?: 'ItemsFields_end_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_image {
  __typename?: 'ItemsFields_image'
  create?: Maybe<ItemsFields_image_Create>
  delete?: Maybe<ItemsFields_image_Delete>
  read?: Maybe<ItemsFields_image_Read>
  update?: Maybe<ItemsFields_image_Update>
}

export interface ItemsFields_image_Create {
  __typename?: 'ItemsFields_image_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_image_Delete {
  __typename?: 'ItemsFields_image_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_image_Read {
  __typename?: 'ItemsFields_image_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_image_Update {
  __typename?: 'ItemsFields_image_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_name {
  __typename?: 'ItemsFields_name'
  create?: Maybe<ItemsFields_name_Create>
  delete?: Maybe<ItemsFields_name_Delete>
  read?: Maybe<ItemsFields_name_Read>
  update?: Maybe<ItemsFields_name_Update>
}

export interface ItemsFields_name_Create {
  __typename?: 'ItemsFields_name_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_name_Delete {
  __typename?: 'ItemsFields_name_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_name_Read {
  __typename?: 'ItemsFields_name_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_name_Update {
  __typename?: 'ItemsFields_name_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_period {
  __typename?: 'ItemsFields_period'
  create?: Maybe<ItemsFields_period_Create>
  delete?: Maybe<ItemsFields_period_Delete>
  read?: Maybe<ItemsFields_period_Read>
  update?: Maybe<ItemsFields_period_Update>
}

export interface ItemsFields_periodType {
  __typename?: 'ItemsFields_periodType'
  create?: Maybe<ItemsFields_periodType_Create>
  delete?: Maybe<ItemsFields_periodType_Delete>
  read?: Maybe<ItemsFields_periodType_Read>
  update?: Maybe<ItemsFields_periodType_Update>
}

export interface ItemsFields_periodType_Create {
  __typename?: 'ItemsFields_periodType_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_periodType_Delete {
  __typename?: 'ItemsFields_periodType_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_periodType_Read {
  __typename?: 'ItemsFields_periodType_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_periodType_Update {
  __typename?: 'ItemsFields_periodType_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_period_Create {
  __typename?: 'ItemsFields_period_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_period_Delete {
  __typename?: 'ItemsFields_period_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_period_Read {
  __typename?: 'ItemsFields_period_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_period_Update {
  __typename?: 'ItemsFields_period_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_price {
  __typename?: 'ItemsFields_price'
  create?: Maybe<ItemsFields_price_Create>
  delete?: Maybe<ItemsFields_price_Delete>
  read?: Maybe<ItemsFields_price_Read>
  update?: Maybe<ItemsFields_price_Update>
}

export interface ItemsFields_price_Create {
  __typename?: 'ItemsFields_price_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_price_Delete {
  __typename?: 'ItemsFields_price_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_price_Read {
  __typename?: 'ItemsFields_price_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_price_Update {
  __typename?: 'ItemsFields_price_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_rating {
  __typename?: 'ItemsFields_rating'
  create?: Maybe<ItemsFields_rating_Create>
  delete?: Maybe<ItemsFields_rating_Delete>
  read?: Maybe<ItemsFields_rating_Read>
  update?: Maybe<ItemsFields_rating_Update>
}

export interface ItemsFields_rating_Create {
  __typename?: 'ItemsFields_rating_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_rating_Delete {
  __typename?: 'ItemsFields_rating_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_rating_Read {
  __typename?: 'ItemsFields_rating_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_rating_Update {
  __typename?: 'ItemsFields_rating_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_rentingStatus {
  __typename?: 'ItemsFields_rentingStatus'
  create?: Maybe<ItemsFields_rentingStatus_Create>
  delete?: Maybe<ItemsFields_rentingStatus_Delete>
  read?: Maybe<ItemsFields_rentingStatus_Read>
  update?: Maybe<ItemsFields_rentingStatus_Update>
}

export interface ItemsFields_rentingStatus_Create {
  __typename?: 'ItemsFields_rentingStatus_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_rentingStatus_Delete {
  __typename?: 'ItemsFields_rentingStatus_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_rentingStatus_Read {
  __typename?: 'ItemsFields_rentingStatus_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_rentingStatus_Update {
  __typename?: 'ItemsFields_rentingStatus_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_start {
  __typename?: 'ItemsFields_start'
  create?: Maybe<ItemsFields_start_Create>
  delete?: Maybe<ItemsFields_start_Delete>
  read?: Maybe<ItemsFields_start_Read>
  update?: Maybe<ItemsFields_start_Update>
}

export interface ItemsFields_start_Create {
  __typename?: 'ItemsFields_start_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_start_Delete {
  __typename?: 'ItemsFields_start_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_start_Read {
  __typename?: 'ItemsFields_start_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_start_Update {
  __typename?: 'ItemsFields_start_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_tags {
  __typename?: 'ItemsFields_tags'
  create?: Maybe<ItemsFields_tags_Create>
  delete?: Maybe<ItemsFields_tags_Delete>
  read?: Maybe<ItemsFields_tags_Read>
  update?: Maybe<ItemsFields_tags_Update>
}

export interface ItemsFields_tags_Create {
  __typename?: 'ItemsFields_tags_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_tags_Delete {
  __typename?: 'ItemsFields_tags_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_tags_Read {
  __typename?: 'ItemsFields_tags_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_tags_Update {
  __typename?: 'ItemsFields_tags_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_updatedAt {
  __typename?: 'ItemsFields_updatedAt'
  create?: Maybe<ItemsFields_updatedAt_Create>
  delete?: Maybe<ItemsFields_updatedAt_Delete>
  read?: Maybe<ItemsFields_updatedAt_Read>
  update?: Maybe<ItemsFields_updatedAt_Update>
}

export interface ItemsFields_updatedAt_Create {
  __typename?: 'ItemsFields_updatedAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_updatedAt_Delete {
  __typename?: 'ItemsFields_updatedAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_updatedAt_Read {
  __typename?: 'ItemsFields_updatedAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsFields_updatedAt_Update {
  __typename?: 'ItemsFields_updatedAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface ItemsReadAccess {
  __typename?: 'ItemsReadAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface ItemsReadDocAccess {
  __typename?: 'ItemsReadDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface ItemsReadVersionsAccess {
  __typename?: 'ItemsReadVersionsAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface ItemsReadVersionsDocAccess {
  __typename?: 'ItemsReadVersionsDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface ItemsUpdateAccess {
  __typename?: 'ItemsUpdateAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface ItemsUpdateDocAccess {
  __typename?: 'ItemsUpdateDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface Media {
  __typename?: 'Media'
  alt?: Maybe<ScalarsEnums['String']>
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  createdBy: User
  filename?: Maybe<ScalarsEnums['String']>
  filesize?: Maybe<ScalarsEnums['Float']>
  height?: Maybe<ScalarsEnums['Float']>
  id?: Maybe<ScalarsEnums['Int']>
  mimeType?: Maybe<ScalarsEnums['String']>
  name?: Maybe<ScalarsEnums['String']>
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
  url?: Maybe<ScalarsEnums['String']>
  width?: Maybe<ScalarsEnums['Float']>
}

export interface Medias {
  __typename?: 'Medias'
  docs?: Maybe<Array<Maybe<Media>>>
  hasNextPage?: Maybe<ScalarsEnums['Boolean']>
  hasPrevPage?: Maybe<ScalarsEnums['Boolean']>
  limit?: Maybe<ScalarsEnums['Int']>
  nextPage?: Maybe<ScalarsEnums['Int']>
  offset?: Maybe<ScalarsEnums['Int']>
  page?: Maybe<ScalarsEnums['Int']>
  pagingCounter?: Maybe<ScalarsEnums['Int']>
  prevPage?: Maybe<ScalarsEnums['Int']>
  totalDocs?: Maybe<ScalarsEnums['Int']>
  totalPages?: Maybe<ScalarsEnums['Int']>
}

export interface MediasCreateAccess {
  __typename?: 'MediasCreateAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface MediasCreateDocAccess {
  __typename?: 'MediasCreateDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface MediasDeleteAccess {
  __typename?: 'MediasDeleteAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface MediasDeleteDocAccess {
  __typename?: 'MediasDeleteDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface MediasDocAccessFields {
  __typename?: 'MediasDocAccessFields'
  alt?: Maybe<MediasDocAccessFields_alt>
  createdAt?: Maybe<MediasDocAccessFields_createdAt>
  filename?: Maybe<MediasDocAccessFields_filename>
  filesize?: Maybe<MediasDocAccessFields_filesize>
  height?: Maybe<MediasDocAccessFields_height>
  mimeType?: Maybe<MediasDocAccessFields_mimeType>
  name?: Maybe<MediasDocAccessFields_name>
  updatedAt?: Maybe<MediasDocAccessFields_updatedAt>
  url?: Maybe<MediasDocAccessFields_url>
  width?: Maybe<MediasDocAccessFields_width>
}

export interface MediasDocAccessFields_alt {
  __typename?: 'MediasDocAccessFields_alt'
  create?: Maybe<MediasDocAccessFields_alt_Create>
  delete?: Maybe<MediasDocAccessFields_alt_Delete>
  read?: Maybe<MediasDocAccessFields_alt_Read>
  update?: Maybe<MediasDocAccessFields_alt_Update>
}

export interface MediasDocAccessFields_alt_Create {
  __typename?: 'MediasDocAccessFields_alt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_alt_Delete {
  __typename?: 'MediasDocAccessFields_alt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_alt_Read {
  __typename?: 'MediasDocAccessFields_alt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_alt_Update {
  __typename?: 'MediasDocAccessFields_alt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_createdAt {
  __typename?: 'MediasDocAccessFields_createdAt'
  create?: Maybe<MediasDocAccessFields_createdAt_Create>
  delete?: Maybe<MediasDocAccessFields_createdAt_Delete>
  read?: Maybe<MediasDocAccessFields_createdAt_Read>
  update?: Maybe<MediasDocAccessFields_createdAt_Update>
}

export interface MediasDocAccessFields_createdAt_Create {
  __typename?: 'MediasDocAccessFields_createdAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_createdAt_Delete {
  __typename?: 'MediasDocAccessFields_createdAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_createdAt_Read {
  __typename?: 'MediasDocAccessFields_createdAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_createdAt_Update {
  __typename?: 'MediasDocAccessFields_createdAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_filename {
  __typename?: 'MediasDocAccessFields_filename'
  create?: Maybe<MediasDocAccessFields_filename_Create>
  delete?: Maybe<MediasDocAccessFields_filename_Delete>
  read?: Maybe<MediasDocAccessFields_filename_Read>
  update?: Maybe<MediasDocAccessFields_filename_Update>
}

export interface MediasDocAccessFields_filename_Create {
  __typename?: 'MediasDocAccessFields_filename_Create'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_filename_Delete {
  __typename?: 'MediasDocAccessFields_filename_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_filename_Read {
  __typename?: 'MediasDocAccessFields_filename_Read'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_filename_Update {
  __typename?: 'MediasDocAccessFields_filename_Update'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_filesize {
  __typename?: 'MediasDocAccessFields_filesize'
  create?: Maybe<MediasDocAccessFields_filesize_Create>
  delete?: Maybe<MediasDocAccessFields_filesize_Delete>
  read?: Maybe<MediasDocAccessFields_filesize_Read>
  update?: Maybe<MediasDocAccessFields_filesize_Update>
}

export interface MediasDocAccessFields_filesize_Create {
  __typename?: 'MediasDocAccessFields_filesize_Create'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_filesize_Delete {
  __typename?: 'MediasDocAccessFields_filesize_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_filesize_Read {
  __typename?: 'MediasDocAccessFields_filesize_Read'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_filesize_Update {
  __typename?: 'MediasDocAccessFields_filesize_Update'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_height {
  __typename?: 'MediasDocAccessFields_height'
  create?: Maybe<MediasDocAccessFields_height_Create>
  delete?: Maybe<MediasDocAccessFields_height_Delete>
  read?: Maybe<MediasDocAccessFields_height_Read>
  update?: Maybe<MediasDocAccessFields_height_Update>
}

export interface MediasDocAccessFields_height_Create {
  __typename?: 'MediasDocAccessFields_height_Create'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_height_Delete {
  __typename?: 'MediasDocAccessFields_height_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_height_Read {
  __typename?: 'MediasDocAccessFields_height_Read'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_height_Update {
  __typename?: 'MediasDocAccessFields_height_Update'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_mimeType {
  __typename?: 'MediasDocAccessFields_mimeType'
  create?: Maybe<MediasDocAccessFields_mimeType_Create>
  delete?: Maybe<MediasDocAccessFields_mimeType_Delete>
  read?: Maybe<MediasDocAccessFields_mimeType_Read>
  update?: Maybe<MediasDocAccessFields_mimeType_Update>
}

export interface MediasDocAccessFields_mimeType_Create {
  __typename?: 'MediasDocAccessFields_mimeType_Create'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_mimeType_Delete {
  __typename?: 'MediasDocAccessFields_mimeType_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_mimeType_Read {
  __typename?: 'MediasDocAccessFields_mimeType_Read'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_mimeType_Update {
  __typename?: 'MediasDocAccessFields_mimeType_Update'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_name {
  __typename?: 'MediasDocAccessFields_name'
  create?: Maybe<MediasDocAccessFields_name_Create>
  delete?: Maybe<MediasDocAccessFields_name_Delete>
  read?: Maybe<MediasDocAccessFields_name_Read>
  update?: Maybe<MediasDocAccessFields_name_Update>
}

export interface MediasDocAccessFields_name_Create {
  __typename?: 'MediasDocAccessFields_name_Create'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_name_Delete {
  __typename?: 'MediasDocAccessFields_name_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_name_Read {
  __typename?: 'MediasDocAccessFields_name_Read'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_name_Update {
  __typename?: 'MediasDocAccessFields_name_Update'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_updatedAt {
  __typename?: 'MediasDocAccessFields_updatedAt'
  create?: Maybe<MediasDocAccessFields_updatedAt_Create>
  delete?: Maybe<MediasDocAccessFields_updatedAt_Delete>
  read?: Maybe<MediasDocAccessFields_updatedAt_Read>
  update?: Maybe<MediasDocAccessFields_updatedAt_Update>
}

export interface MediasDocAccessFields_updatedAt_Create {
  __typename?: 'MediasDocAccessFields_updatedAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_updatedAt_Delete {
  __typename?: 'MediasDocAccessFields_updatedAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_updatedAt_Read {
  __typename?: 'MediasDocAccessFields_updatedAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_updatedAt_Update {
  __typename?: 'MediasDocAccessFields_updatedAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_url {
  __typename?: 'MediasDocAccessFields_url'
  create?: Maybe<MediasDocAccessFields_url_Create>
  delete?: Maybe<MediasDocAccessFields_url_Delete>
  read?: Maybe<MediasDocAccessFields_url_Read>
  update?: Maybe<MediasDocAccessFields_url_Update>
}

export interface MediasDocAccessFields_url_Create {
  __typename?: 'MediasDocAccessFields_url_Create'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_url_Delete {
  __typename?: 'MediasDocAccessFields_url_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_url_Read {
  __typename?: 'MediasDocAccessFields_url_Read'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_url_Update {
  __typename?: 'MediasDocAccessFields_url_Update'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_width {
  __typename?: 'MediasDocAccessFields_width'
  create?: Maybe<MediasDocAccessFields_width_Create>
  delete?: Maybe<MediasDocAccessFields_width_Delete>
  read?: Maybe<MediasDocAccessFields_width_Read>
  update?: Maybe<MediasDocAccessFields_width_Update>
}

export interface MediasDocAccessFields_width_Create {
  __typename?: 'MediasDocAccessFields_width_Create'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_width_Delete {
  __typename?: 'MediasDocAccessFields_width_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_width_Read {
  __typename?: 'MediasDocAccessFields_width_Read'
  permission: ScalarsEnums['Boolean']
}

export interface MediasDocAccessFields_width_Update {
  __typename?: 'MediasDocAccessFields_width_Update'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields {
  __typename?: 'MediasFields'
  alt?: Maybe<MediasFields_alt>
  createdAt?: Maybe<MediasFields_createdAt>
  filename?: Maybe<MediasFields_filename>
  filesize?: Maybe<MediasFields_filesize>
  height?: Maybe<MediasFields_height>
  mimeType?: Maybe<MediasFields_mimeType>
  name?: Maybe<MediasFields_name>
  updatedAt?: Maybe<MediasFields_updatedAt>
  url?: Maybe<MediasFields_url>
  width?: Maybe<MediasFields_width>
}

export interface MediasFields_alt {
  __typename?: 'MediasFields_alt'
  create?: Maybe<MediasFields_alt_Create>
  delete?: Maybe<MediasFields_alt_Delete>
  read?: Maybe<MediasFields_alt_Read>
  update?: Maybe<MediasFields_alt_Update>
}

export interface MediasFields_alt_Create {
  __typename?: 'MediasFields_alt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_alt_Delete {
  __typename?: 'MediasFields_alt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_alt_Read {
  __typename?: 'MediasFields_alt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_alt_Update {
  __typename?: 'MediasFields_alt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_createdAt {
  __typename?: 'MediasFields_createdAt'
  create?: Maybe<MediasFields_createdAt_Create>
  delete?: Maybe<MediasFields_createdAt_Delete>
  read?: Maybe<MediasFields_createdAt_Read>
  update?: Maybe<MediasFields_createdAt_Update>
}

export interface MediasFields_createdAt_Create {
  __typename?: 'MediasFields_createdAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_createdAt_Delete {
  __typename?: 'MediasFields_createdAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_createdAt_Read {
  __typename?: 'MediasFields_createdAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_createdAt_Update {
  __typename?: 'MediasFields_createdAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_filename {
  __typename?: 'MediasFields_filename'
  create?: Maybe<MediasFields_filename_Create>
  delete?: Maybe<MediasFields_filename_Delete>
  read?: Maybe<MediasFields_filename_Read>
  update?: Maybe<MediasFields_filename_Update>
}

export interface MediasFields_filename_Create {
  __typename?: 'MediasFields_filename_Create'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_filename_Delete {
  __typename?: 'MediasFields_filename_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_filename_Read {
  __typename?: 'MediasFields_filename_Read'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_filename_Update {
  __typename?: 'MediasFields_filename_Update'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_filesize {
  __typename?: 'MediasFields_filesize'
  create?: Maybe<MediasFields_filesize_Create>
  delete?: Maybe<MediasFields_filesize_Delete>
  read?: Maybe<MediasFields_filesize_Read>
  update?: Maybe<MediasFields_filesize_Update>
}

export interface MediasFields_filesize_Create {
  __typename?: 'MediasFields_filesize_Create'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_filesize_Delete {
  __typename?: 'MediasFields_filesize_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_filesize_Read {
  __typename?: 'MediasFields_filesize_Read'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_filesize_Update {
  __typename?: 'MediasFields_filesize_Update'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_height {
  __typename?: 'MediasFields_height'
  create?: Maybe<MediasFields_height_Create>
  delete?: Maybe<MediasFields_height_Delete>
  read?: Maybe<MediasFields_height_Read>
  update?: Maybe<MediasFields_height_Update>
}

export interface MediasFields_height_Create {
  __typename?: 'MediasFields_height_Create'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_height_Delete {
  __typename?: 'MediasFields_height_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_height_Read {
  __typename?: 'MediasFields_height_Read'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_height_Update {
  __typename?: 'MediasFields_height_Update'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_mimeType {
  __typename?: 'MediasFields_mimeType'
  create?: Maybe<MediasFields_mimeType_Create>
  delete?: Maybe<MediasFields_mimeType_Delete>
  read?: Maybe<MediasFields_mimeType_Read>
  update?: Maybe<MediasFields_mimeType_Update>
}

export interface MediasFields_mimeType_Create {
  __typename?: 'MediasFields_mimeType_Create'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_mimeType_Delete {
  __typename?: 'MediasFields_mimeType_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_mimeType_Read {
  __typename?: 'MediasFields_mimeType_Read'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_mimeType_Update {
  __typename?: 'MediasFields_mimeType_Update'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_name {
  __typename?: 'MediasFields_name'
  create?: Maybe<MediasFields_name_Create>
  delete?: Maybe<MediasFields_name_Delete>
  read?: Maybe<MediasFields_name_Read>
  update?: Maybe<MediasFields_name_Update>
}

export interface MediasFields_name_Create {
  __typename?: 'MediasFields_name_Create'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_name_Delete {
  __typename?: 'MediasFields_name_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_name_Read {
  __typename?: 'MediasFields_name_Read'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_name_Update {
  __typename?: 'MediasFields_name_Update'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_updatedAt {
  __typename?: 'MediasFields_updatedAt'
  create?: Maybe<MediasFields_updatedAt_Create>
  delete?: Maybe<MediasFields_updatedAt_Delete>
  read?: Maybe<MediasFields_updatedAt_Read>
  update?: Maybe<MediasFields_updatedAt_Update>
}

export interface MediasFields_updatedAt_Create {
  __typename?: 'MediasFields_updatedAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_updatedAt_Delete {
  __typename?: 'MediasFields_updatedAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_updatedAt_Read {
  __typename?: 'MediasFields_updatedAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_updatedAt_Update {
  __typename?: 'MediasFields_updatedAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_url {
  __typename?: 'MediasFields_url'
  create?: Maybe<MediasFields_url_Create>
  delete?: Maybe<MediasFields_url_Delete>
  read?: Maybe<MediasFields_url_Read>
  update?: Maybe<MediasFields_url_Update>
}

export interface MediasFields_url_Create {
  __typename?: 'MediasFields_url_Create'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_url_Delete {
  __typename?: 'MediasFields_url_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_url_Read {
  __typename?: 'MediasFields_url_Read'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_url_Update {
  __typename?: 'MediasFields_url_Update'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_width {
  __typename?: 'MediasFields_width'
  create?: Maybe<MediasFields_width_Create>
  delete?: Maybe<MediasFields_width_Delete>
  read?: Maybe<MediasFields_width_Read>
  update?: Maybe<MediasFields_width_Update>
}

export interface MediasFields_width_Create {
  __typename?: 'MediasFields_width_Create'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_width_Delete {
  __typename?: 'MediasFields_width_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_width_Read {
  __typename?: 'MediasFields_width_Read'
  permission: ScalarsEnums['Boolean']
}

export interface MediasFields_width_Update {
  __typename?: 'MediasFields_width_Update'
  permission: ScalarsEnums['Boolean']
}

export interface MediasReadAccess {
  __typename?: 'MediasReadAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface MediasReadDocAccess {
  __typename?: 'MediasReadDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface MediasUpdateAccess {
  __typename?: 'MediasUpdateAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface MediasUpdateDocAccess {
  __typename?: 'MediasUpdateDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface Message {
  __typename?: 'Message'
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  createdBy: User
  id?: Maybe<ScalarsEnums['Int']>
  message?: Maybe<ScalarsEnums['String']>
  room: Chatroom
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
}

export interface MessageCreateAccess {
  __typename?: 'MessageCreateAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface MessageCreateDocAccess {
  __typename?: 'MessageCreateDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface MessageDeleteAccess {
  __typename?: 'MessageDeleteAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface MessageDeleteDocAccess {
  __typename?: 'MessageDeleteDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface MessageDocAccessFields {
  __typename?: 'MessageDocAccessFields'
  createdAt?: Maybe<MessageDocAccessFields_createdAt>
  createdBy?: Maybe<MessageDocAccessFields_createdBy>
  message?: Maybe<MessageDocAccessFields_message>
  room?: Maybe<MessageDocAccessFields_room>
  updatedAt?: Maybe<MessageDocAccessFields_updatedAt>
}

export interface MessageDocAccessFields_createdAt {
  __typename?: 'MessageDocAccessFields_createdAt'
  create?: Maybe<MessageDocAccessFields_createdAt_Create>
  delete?: Maybe<MessageDocAccessFields_createdAt_Delete>
  read?: Maybe<MessageDocAccessFields_createdAt_Read>
  update?: Maybe<MessageDocAccessFields_createdAt_Update>
}

export interface MessageDocAccessFields_createdAt_Create {
  __typename?: 'MessageDocAccessFields_createdAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface MessageDocAccessFields_createdAt_Delete {
  __typename?: 'MessageDocAccessFields_createdAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface MessageDocAccessFields_createdAt_Read {
  __typename?: 'MessageDocAccessFields_createdAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface MessageDocAccessFields_createdAt_Update {
  __typename?: 'MessageDocAccessFields_createdAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface MessageDocAccessFields_createdBy {
  __typename?: 'MessageDocAccessFields_createdBy'
  create?: Maybe<MessageDocAccessFields_createdBy_Create>
  delete?: Maybe<MessageDocAccessFields_createdBy_Delete>
  read?: Maybe<MessageDocAccessFields_createdBy_Read>
  update?: Maybe<MessageDocAccessFields_createdBy_Update>
}

export interface MessageDocAccessFields_createdBy_Create {
  __typename?: 'MessageDocAccessFields_createdBy_Create'
  permission: ScalarsEnums['Boolean']
}

export interface MessageDocAccessFields_createdBy_Delete {
  __typename?: 'MessageDocAccessFields_createdBy_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface MessageDocAccessFields_createdBy_Read {
  __typename?: 'MessageDocAccessFields_createdBy_Read'
  permission: ScalarsEnums['Boolean']
}

export interface MessageDocAccessFields_createdBy_Update {
  __typename?: 'MessageDocAccessFields_createdBy_Update'
  permission: ScalarsEnums['Boolean']
}

export interface MessageDocAccessFields_message {
  __typename?: 'MessageDocAccessFields_message'
  create?: Maybe<MessageDocAccessFields_message_Create>
  delete?: Maybe<MessageDocAccessFields_message_Delete>
  read?: Maybe<MessageDocAccessFields_message_Read>
  update?: Maybe<MessageDocAccessFields_message_Update>
}

export interface MessageDocAccessFields_message_Create {
  __typename?: 'MessageDocAccessFields_message_Create'
  permission: ScalarsEnums['Boolean']
}

export interface MessageDocAccessFields_message_Delete {
  __typename?: 'MessageDocAccessFields_message_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface MessageDocAccessFields_message_Read {
  __typename?: 'MessageDocAccessFields_message_Read'
  permission: ScalarsEnums['Boolean']
}

export interface MessageDocAccessFields_message_Update {
  __typename?: 'MessageDocAccessFields_message_Update'
  permission: ScalarsEnums['Boolean']
}

export interface MessageDocAccessFields_room {
  __typename?: 'MessageDocAccessFields_room'
  create?: Maybe<MessageDocAccessFields_room_Create>
  delete?: Maybe<MessageDocAccessFields_room_Delete>
  read?: Maybe<MessageDocAccessFields_room_Read>
  update?: Maybe<MessageDocAccessFields_room_Update>
}

export interface MessageDocAccessFields_room_Create {
  __typename?: 'MessageDocAccessFields_room_Create'
  permission: ScalarsEnums['Boolean']
}

export interface MessageDocAccessFields_room_Delete {
  __typename?: 'MessageDocAccessFields_room_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface MessageDocAccessFields_room_Read {
  __typename?: 'MessageDocAccessFields_room_Read'
  permission: ScalarsEnums['Boolean']
}

export interface MessageDocAccessFields_room_Update {
  __typename?: 'MessageDocAccessFields_room_Update'
  permission: ScalarsEnums['Boolean']
}

export interface MessageDocAccessFields_updatedAt {
  __typename?: 'MessageDocAccessFields_updatedAt'
  create?: Maybe<MessageDocAccessFields_updatedAt_Create>
  delete?: Maybe<MessageDocAccessFields_updatedAt_Delete>
  read?: Maybe<MessageDocAccessFields_updatedAt_Read>
  update?: Maybe<MessageDocAccessFields_updatedAt_Update>
}

export interface MessageDocAccessFields_updatedAt_Create {
  __typename?: 'MessageDocAccessFields_updatedAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface MessageDocAccessFields_updatedAt_Delete {
  __typename?: 'MessageDocAccessFields_updatedAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface MessageDocAccessFields_updatedAt_Read {
  __typename?: 'MessageDocAccessFields_updatedAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface MessageDocAccessFields_updatedAt_Update {
  __typename?: 'MessageDocAccessFields_updatedAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface MessageFields {
  __typename?: 'MessageFields'
  createdAt?: Maybe<MessageFields_createdAt>
  createdBy?: Maybe<MessageFields_createdBy>
  message?: Maybe<MessageFields_message>
  room?: Maybe<MessageFields_room>
  updatedAt?: Maybe<MessageFields_updatedAt>
}

export interface MessageFields_createdAt {
  __typename?: 'MessageFields_createdAt'
  create?: Maybe<MessageFields_createdAt_Create>
  delete?: Maybe<MessageFields_createdAt_Delete>
  read?: Maybe<MessageFields_createdAt_Read>
  update?: Maybe<MessageFields_createdAt_Update>
}

export interface MessageFields_createdAt_Create {
  __typename?: 'MessageFields_createdAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface MessageFields_createdAt_Delete {
  __typename?: 'MessageFields_createdAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface MessageFields_createdAt_Read {
  __typename?: 'MessageFields_createdAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface MessageFields_createdAt_Update {
  __typename?: 'MessageFields_createdAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface MessageFields_createdBy {
  __typename?: 'MessageFields_createdBy'
  create?: Maybe<MessageFields_createdBy_Create>
  delete?: Maybe<MessageFields_createdBy_Delete>
  read?: Maybe<MessageFields_createdBy_Read>
  update?: Maybe<MessageFields_createdBy_Update>
}

export interface MessageFields_createdBy_Create {
  __typename?: 'MessageFields_createdBy_Create'
  permission: ScalarsEnums['Boolean']
}

export interface MessageFields_createdBy_Delete {
  __typename?: 'MessageFields_createdBy_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface MessageFields_createdBy_Read {
  __typename?: 'MessageFields_createdBy_Read'
  permission: ScalarsEnums['Boolean']
}

export interface MessageFields_createdBy_Update {
  __typename?: 'MessageFields_createdBy_Update'
  permission: ScalarsEnums['Boolean']
}

export interface MessageFields_message {
  __typename?: 'MessageFields_message'
  create?: Maybe<MessageFields_message_Create>
  delete?: Maybe<MessageFields_message_Delete>
  read?: Maybe<MessageFields_message_Read>
  update?: Maybe<MessageFields_message_Update>
}

export interface MessageFields_message_Create {
  __typename?: 'MessageFields_message_Create'
  permission: ScalarsEnums['Boolean']
}

export interface MessageFields_message_Delete {
  __typename?: 'MessageFields_message_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface MessageFields_message_Read {
  __typename?: 'MessageFields_message_Read'
  permission: ScalarsEnums['Boolean']
}

export interface MessageFields_message_Update {
  __typename?: 'MessageFields_message_Update'
  permission: ScalarsEnums['Boolean']
}

export interface MessageFields_room {
  __typename?: 'MessageFields_room'
  create?: Maybe<MessageFields_room_Create>
  delete?: Maybe<MessageFields_room_Delete>
  read?: Maybe<MessageFields_room_Read>
  update?: Maybe<MessageFields_room_Update>
}

export interface MessageFields_room_Create {
  __typename?: 'MessageFields_room_Create'
  permission: ScalarsEnums['Boolean']
}

export interface MessageFields_room_Delete {
  __typename?: 'MessageFields_room_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface MessageFields_room_Read {
  __typename?: 'MessageFields_room_Read'
  permission: ScalarsEnums['Boolean']
}

export interface MessageFields_room_Update {
  __typename?: 'MessageFields_room_Update'
  permission: ScalarsEnums['Boolean']
}

export interface MessageFields_updatedAt {
  __typename?: 'MessageFields_updatedAt'
  create?: Maybe<MessageFields_updatedAt_Create>
  delete?: Maybe<MessageFields_updatedAt_Delete>
  read?: Maybe<MessageFields_updatedAt_Read>
  update?: Maybe<MessageFields_updatedAt_Update>
}

export interface MessageFields_updatedAt_Create {
  __typename?: 'MessageFields_updatedAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface MessageFields_updatedAt_Delete {
  __typename?: 'MessageFields_updatedAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface MessageFields_updatedAt_Read {
  __typename?: 'MessageFields_updatedAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface MessageFields_updatedAt_Update {
  __typename?: 'MessageFields_updatedAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface MessageReadAccess {
  __typename?: 'MessageReadAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface MessageReadDocAccess {
  __typename?: 'MessageReadDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface MessageUpdateAccess {
  __typename?: 'MessageUpdateAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface MessageUpdateDocAccess {
  __typename?: 'MessageUpdateDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface Messages {
  __typename?: 'Messages'
  docs?: Maybe<Array<Maybe<Message>>>
  hasNextPage?: Maybe<ScalarsEnums['Boolean']>
  hasPrevPage?: Maybe<ScalarsEnums['Boolean']>
  limit?: Maybe<ScalarsEnums['Int']>
  nextPage?: Maybe<ScalarsEnums['Int']>
  offset?: Maybe<ScalarsEnums['Int']>
  page?: Maybe<ScalarsEnums['Int']>
  pagingCounter?: Maybe<ScalarsEnums['Int']>
  prevPage?: Maybe<ScalarsEnums['Int']>
  totalDocs?: Maybe<ScalarsEnums['Int']>
  totalPages?: Maybe<ScalarsEnums['Int']>
}

export interface PayloadPreference {
  __typename?: 'PayloadPreference'
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  id?: Maybe<ScalarsEnums['Int']>
  key?: Maybe<ScalarsEnums['String']>
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
  user: PayloadPreference_User_Relationship
  value?: Maybe<ScalarsEnums['JSON']>
}

export interface PayloadPreference_User {
  __typename?: 'User'
  $on: $PayloadPreference_User
}

export interface PayloadPreference_User_Relationship {
  __typename?: 'PayloadPreference_User_Relationship'
  relationTo?: Maybe<ScalarsEnums['PayloadPreference_User_RelationTo']>
  value?: Maybe<PayloadPreference_User>
}

export interface PayloadPreferences {
  __typename?: 'PayloadPreferences'
  docs?: Maybe<Array<Maybe<PayloadPreference>>>
  hasNextPage?: Maybe<ScalarsEnums['Boolean']>
  hasPrevPage?: Maybe<ScalarsEnums['Boolean']>
  limit?: Maybe<ScalarsEnums['Int']>
  nextPage?: Maybe<ScalarsEnums['Int']>
  offset?: Maybe<ScalarsEnums['Int']>
  page?: Maybe<ScalarsEnums['Int']>
  pagingCounter?: Maybe<ScalarsEnums['Int']>
  prevPage?: Maybe<ScalarsEnums['Int']>
  totalDocs?: Maybe<ScalarsEnums['Int']>
  totalPages?: Maybe<ScalarsEnums['Int']>
}

export interface PayloadPreferencesCreateAccess {
  __typename?: 'PayloadPreferencesCreateAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface PayloadPreferencesCreateDocAccess {
  __typename?: 'PayloadPreferencesCreateDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface PayloadPreferencesDeleteAccess {
  __typename?: 'PayloadPreferencesDeleteAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface PayloadPreferencesDeleteDocAccess {
  __typename?: 'PayloadPreferencesDeleteDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface PayloadPreferencesDocAccessFields {
  __typename?: 'PayloadPreferencesDocAccessFields'
  createdAt?: Maybe<PayloadPreferencesDocAccessFields_createdAt>
  key?: Maybe<PayloadPreferencesDocAccessFields_key>
  updatedAt?: Maybe<PayloadPreferencesDocAccessFields_updatedAt>
  user?: Maybe<PayloadPreferencesDocAccessFields_user>
  value?: Maybe<PayloadPreferencesDocAccessFields_value>
}

export interface PayloadPreferencesDocAccessFields_createdAt {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt'
  create?: Maybe<PayloadPreferencesDocAccessFields_createdAt_Create>
  delete?: Maybe<PayloadPreferencesDocAccessFields_createdAt_Delete>
  read?: Maybe<PayloadPreferencesDocAccessFields_createdAt_Read>
  update?: Maybe<PayloadPreferencesDocAccessFields_createdAt_Update>
}

export interface PayloadPreferencesDocAccessFields_createdAt_Create {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesDocAccessFields_createdAt_Delete {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesDocAccessFields_createdAt_Read {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesDocAccessFields_createdAt_Update {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesDocAccessFields_key {
  __typename?: 'PayloadPreferencesDocAccessFields_key'
  create?: Maybe<PayloadPreferencesDocAccessFields_key_Create>
  delete?: Maybe<PayloadPreferencesDocAccessFields_key_Delete>
  read?: Maybe<PayloadPreferencesDocAccessFields_key_Read>
  update?: Maybe<PayloadPreferencesDocAccessFields_key_Update>
}

export interface PayloadPreferencesDocAccessFields_key_Create {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Create'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesDocAccessFields_key_Delete {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesDocAccessFields_key_Read {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Read'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesDocAccessFields_key_Update {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Update'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesDocAccessFields_updatedAt {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt'
  create?: Maybe<PayloadPreferencesDocAccessFields_updatedAt_Create>
  delete?: Maybe<PayloadPreferencesDocAccessFields_updatedAt_Delete>
  read?: Maybe<PayloadPreferencesDocAccessFields_updatedAt_Read>
  update?: Maybe<PayloadPreferencesDocAccessFields_updatedAt_Update>
}

export interface PayloadPreferencesDocAccessFields_updatedAt_Create {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesDocAccessFields_updatedAt_Delete {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesDocAccessFields_updatedAt_Read {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesDocAccessFields_updatedAt_Update {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesDocAccessFields_user {
  __typename?: 'PayloadPreferencesDocAccessFields_user'
  create?: Maybe<PayloadPreferencesDocAccessFields_user_Create>
  delete?: Maybe<PayloadPreferencesDocAccessFields_user_Delete>
  read?: Maybe<PayloadPreferencesDocAccessFields_user_Read>
  update?: Maybe<PayloadPreferencesDocAccessFields_user_Update>
}

export interface PayloadPreferencesDocAccessFields_user_Create {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Create'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesDocAccessFields_user_Delete {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesDocAccessFields_user_Read {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Read'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesDocAccessFields_user_Update {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Update'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesDocAccessFields_value {
  __typename?: 'PayloadPreferencesDocAccessFields_value'
  create?: Maybe<PayloadPreferencesDocAccessFields_value_Create>
  delete?: Maybe<PayloadPreferencesDocAccessFields_value_Delete>
  read?: Maybe<PayloadPreferencesDocAccessFields_value_Read>
  update?: Maybe<PayloadPreferencesDocAccessFields_value_Update>
}

export interface PayloadPreferencesDocAccessFields_value_Create {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Create'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesDocAccessFields_value_Delete {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesDocAccessFields_value_Read {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Read'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesDocAccessFields_value_Update {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Update'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesFields {
  __typename?: 'PayloadPreferencesFields'
  createdAt?: Maybe<PayloadPreferencesFields_createdAt>
  key?: Maybe<PayloadPreferencesFields_key>
  updatedAt?: Maybe<PayloadPreferencesFields_updatedAt>
  user?: Maybe<PayloadPreferencesFields_user>
  value?: Maybe<PayloadPreferencesFields_value>
}

export interface PayloadPreferencesFields_createdAt {
  __typename?: 'PayloadPreferencesFields_createdAt'
  create?: Maybe<PayloadPreferencesFields_createdAt_Create>
  delete?: Maybe<PayloadPreferencesFields_createdAt_Delete>
  read?: Maybe<PayloadPreferencesFields_createdAt_Read>
  update?: Maybe<PayloadPreferencesFields_createdAt_Update>
}

export interface PayloadPreferencesFields_createdAt_Create {
  __typename?: 'PayloadPreferencesFields_createdAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesFields_createdAt_Delete {
  __typename?: 'PayloadPreferencesFields_createdAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesFields_createdAt_Read {
  __typename?: 'PayloadPreferencesFields_createdAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesFields_createdAt_Update {
  __typename?: 'PayloadPreferencesFields_createdAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesFields_key {
  __typename?: 'PayloadPreferencesFields_key'
  create?: Maybe<PayloadPreferencesFields_key_Create>
  delete?: Maybe<PayloadPreferencesFields_key_Delete>
  read?: Maybe<PayloadPreferencesFields_key_Read>
  update?: Maybe<PayloadPreferencesFields_key_Update>
}

export interface PayloadPreferencesFields_key_Create {
  __typename?: 'PayloadPreferencesFields_key_Create'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesFields_key_Delete {
  __typename?: 'PayloadPreferencesFields_key_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesFields_key_Read {
  __typename?: 'PayloadPreferencesFields_key_Read'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesFields_key_Update {
  __typename?: 'PayloadPreferencesFields_key_Update'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesFields_updatedAt {
  __typename?: 'PayloadPreferencesFields_updatedAt'
  create?: Maybe<PayloadPreferencesFields_updatedAt_Create>
  delete?: Maybe<PayloadPreferencesFields_updatedAt_Delete>
  read?: Maybe<PayloadPreferencesFields_updatedAt_Read>
  update?: Maybe<PayloadPreferencesFields_updatedAt_Update>
}

export interface PayloadPreferencesFields_updatedAt_Create {
  __typename?: 'PayloadPreferencesFields_updatedAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesFields_updatedAt_Delete {
  __typename?: 'PayloadPreferencesFields_updatedAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesFields_updatedAt_Read {
  __typename?: 'PayloadPreferencesFields_updatedAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesFields_updatedAt_Update {
  __typename?: 'PayloadPreferencesFields_updatedAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesFields_user {
  __typename?: 'PayloadPreferencesFields_user'
  create?: Maybe<PayloadPreferencesFields_user_Create>
  delete?: Maybe<PayloadPreferencesFields_user_Delete>
  read?: Maybe<PayloadPreferencesFields_user_Read>
  update?: Maybe<PayloadPreferencesFields_user_Update>
}

export interface PayloadPreferencesFields_user_Create {
  __typename?: 'PayloadPreferencesFields_user_Create'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesFields_user_Delete {
  __typename?: 'PayloadPreferencesFields_user_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesFields_user_Read {
  __typename?: 'PayloadPreferencesFields_user_Read'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesFields_user_Update {
  __typename?: 'PayloadPreferencesFields_user_Update'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesFields_value {
  __typename?: 'PayloadPreferencesFields_value'
  create?: Maybe<PayloadPreferencesFields_value_Create>
  delete?: Maybe<PayloadPreferencesFields_value_Delete>
  read?: Maybe<PayloadPreferencesFields_value_Read>
  update?: Maybe<PayloadPreferencesFields_value_Update>
}

export interface PayloadPreferencesFields_value_Create {
  __typename?: 'PayloadPreferencesFields_value_Create'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesFields_value_Delete {
  __typename?: 'PayloadPreferencesFields_value_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesFields_value_Read {
  __typename?: 'PayloadPreferencesFields_value_Read'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesFields_value_Update {
  __typename?: 'PayloadPreferencesFields_value_Update'
  permission: ScalarsEnums['Boolean']
}

export interface PayloadPreferencesReadAccess {
  __typename?: 'PayloadPreferencesReadAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface PayloadPreferencesReadDocAccess {
  __typename?: 'PayloadPreferencesReadDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface PayloadPreferencesUpdateAccess {
  __typename?: 'PayloadPreferencesUpdateAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface PayloadPreferencesUpdateDocAccess {
  __typename?: 'PayloadPreferencesUpdateDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface Renting {
  __typename?: 'Renting'
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  createdBy: User
  deliveryFee?: Maybe<ScalarsEnums['Float']>
  endDate: ScalarsEnums['DateTime']
  file?: Maybe<Media>
  id?: Maybe<ScalarsEnums['Int']>
  insuranceFee?: Maybe<ScalarsEnums['Float']>
  rentalFee?: Maybe<ScalarsEnums['Float']>
  rentedBy?: Maybe<Renting_RentedBy>
  rentedTo?: Maybe<Renting_RentedTo>
  startDate: ScalarsEnums['DateTime']
  status?: Maybe<ScalarsEnums['Renting_status']>
  totalPrice?: Maybe<ScalarsEnums['Float']>
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
}

export interface RentingCreateAccess {
  __typename?: 'RentingCreateAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface RentingCreateDocAccess {
  __typename?: 'RentingCreateDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface RentingDeleteAccess {
  __typename?: 'RentingDeleteAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface RentingDeleteDocAccess {
  __typename?: 'RentingDeleteDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface RentingDocAccessFields {
  __typename?: 'RentingDocAccessFields'
  createdAt?: Maybe<RentingDocAccessFields_createdAt>
  createdBy?: Maybe<RentingDocAccessFields_createdBy>
  deliveryFee?: Maybe<RentingDocAccessFields_deliveryFee>
  endDate?: Maybe<RentingDocAccessFields_endDate>
  file?: Maybe<RentingDocAccessFields_file>
  insuranceFee?: Maybe<RentingDocAccessFields_insuranceFee>
  rentalFee?: Maybe<RentingDocAccessFields_rentalFee>
  rentedBy?: Maybe<RentingDocAccessFields_rentedBy>
  rentedTo?: Maybe<RentingDocAccessFields_rentedTo>
  startDate?: Maybe<RentingDocAccessFields_startDate>
  status?: Maybe<RentingDocAccessFields_status>
  totalPrice?: Maybe<RentingDocAccessFields_totalPrice>
  updatedAt?: Maybe<RentingDocAccessFields_updatedAt>
}

export interface RentingDocAccessFields_createdAt {
  __typename?: 'RentingDocAccessFields_createdAt'
  create?: Maybe<RentingDocAccessFields_createdAt_Create>
  delete?: Maybe<RentingDocAccessFields_createdAt_Delete>
  read?: Maybe<RentingDocAccessFields_createdAt_Read>
  update?: Maybe<RentingDocAccessFields_createdAt_Update>
}

export interface RentingDocAccessFields_createdAt_Create {
  __typename?: 'RentingDocAccessFields_createdAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_createdAt_Delete {
  __typename?: 'RentingDocAccessFields_createdAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_createdAt_Read {
  __typename?: 'RentingDocAccessFields_createdAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_createdAt_Update {
  __typename?: 'RentingDocAccessFields_createdAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_createdBy {
  __typename?: 'RentingDocAccessFields_createdBy'
  create?: Maybe<RentingDocAccessFields_createdBy_Create>
  delete?: Maybe<RentingDocAccessFields_createdBy_Delete>
  read?: Maybe<RentingDocAccessFields_createdBy_Read>
  update?: Maybe<RentingDocAccessFields_createdBy_Update>
}

export interface RentingDocAccessFields_createdBy_Create {
  __typename?: 'RentingDocAccessFields_createdBy_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_createdBy_Delete {
  __typename?: 'RentingDocAccessFields_createdBy_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_createdBy_Read {
  __typename?: 'RentingDocAccessFields_createdBy_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_createdBy_Update {
  __typename?: 'RentingDocAccessFields_createdBy_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_deliveryFee {
  __typename?: 'RentingDocAccessFields_deliveryFee'
  create?: Maybe<RentingDocAccessFields_deliveryFee_Create>
  delete?: Maybe<RentingDocAccessFields_deliveryFee_Delete>
  read?: Maybe<RentingDocAccessFields_deliveryFee_Read>
  update?: Maybe<RentingDocAccessFields_deliveryFee_Update>
}

export interface RentingDocAccessFields_deliveryFee_Create {
  __typename?: 'RentingDocAccessFields_deliveryFee_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_deliveryFee_Delete {
  __typename?: 'RentingDocAccessFields_deliveryFee_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_deliveryFee_Read {
  __typename?: 'RentingDocAccessFields_deliveryFee_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_deliveryFee_Update {
  __typename?: 'RentingDocAccessFields_deliveryFee_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_endDate {
  __typename?: 'RentingDocAccessFields_endDate'
  create?: Maybe<RentingDocAccessFields_endDate_Create>
  delete?: Maybe<RentingDocAccessFields_endDate_Delete>
  read?: Maybe<RentingDocAccessFields_endDate_Read>
  update?: Maybe<RentingDocAccessFields_endDate_Update>
}

export interface RentingDocAccessFields_endDate_Create {
  __typename?: 'RentingDocAccessFields_endDate_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_endDate_Delete {
  __typename?: 'RentingDocAccessFields_endDate_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_endDate_Read {
  __typename?: 'RentingDocAccessFields_endDate_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_endDate_Update {
  __typename?: 'RentingDocAccessFields_endDate_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_file {
  __typename?: 'RentingDocAccessFields_file'
  create?: Maybe<RentingDocAccessFields_file_Create>
  delete?: Maybe<RentingDocAccessFields_file_Delete>
  read?: Maybe<RentingDocAccessFields_file_Read>
  update?: Maybe<RentingDocAccessFields_file_Update>
}

export interface RentingDocAccessFields_file_Create {
  __typename?: 'RentingDocAccessFields_file_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_file_Delete {
  __typename?: 'RentingDocAccessFields_file_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_file_Read {
  __typename?: 'RentingDocAccessFields_file_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_file_Update {
  __typename?: 'RentingDocAccessFields_file_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_insuranceFee {
  __typename?: 'RentingDocAccessFields_insuranceFee'
  create?: Maybe<RentingDocAccessFields_insuranceFee_Create>
  delete?: Maybe<RentingDocAccessFields_insuranceFee_Delete>
  read?: Maybe<RentingDocAccessFields_insuranceFee_Read>
  update?: Maybe<RentingDocAccessFields_insuranceFee_Update>
}

export interface RentingDocAccessFields_insuranceFee_Create {
  __typename?: 'RentingDocAccessFields_insuranceFee_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_insuranceFee_Delete {
  __typename?: 'RentingDocAccessFields_insuranceFee_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_insuranceFee_Read {
  __typename?: 'RentingDocAccessFields_insuranceFee_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_insuranceFee_Update {
  __typename?: 'RentingDocAccessFields_insuranceFee_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_rentalFee {
  __typename?: 'RentingDocAccessFields_rentalFee'
  create?: Maybe<RentingDocAccessFields_rentalFee_Create>
  delete?: Maybe<RentingDocAccessFields_rentalFee_Delete>
  read?: Maybe<RentingDocAccessFields_rentalFee_Read>
  update?: Maybe<RentingDocAccessFields_rentalFee_Update>
}

export interface RentingDocAccessFields_rentalFee_Create {
  __typename?: 'RentingDocAccessFields_rentalFee_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_rentalFee_Delete {
  __typename?: 'RentingDocAccessFields_rentalFee_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_rentalFee_Read {
  __typename?: 'RentingDocAccessFields_rentalFee_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_rentalFee_Update {
  __typename?: 'RentingDocAccessFields_rentalFee_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_rentedBy {
  __typename?: 'RentingDocAccessFields_rentedBy'
  create?: Maybe<RentingDocAccessFields_rentedBy_Create>
  delete?: Maybe<RentingDocAccessFields_rentedBy_Delete>
  fields?: Maybe<RentingDocAccessFields_rentedBy_Fields>
  read?: Maybe<RentingDocAccessFields_rentedBy_Read>
  update?: Maybe<RentingDocAccessFields_rentedBy_Update>
}

export interface RentingDocAccessFields_rentedBy_Create {
  __typename?: 'RentingDocAccessFields_rentedBy_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_rentedBy_Delete {
  __typename?: 'RentingDocAccessFields_rentedBy_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_rentedBy_Fields {
  __typename?: 'RentingDocAccessFields_rentedBy_Fields'
  user?: Maybe<RentingDocAccessFields_rentedBy_user>
}

export interface RentingDocAccessFields_rentedBy_Read {
  __typename?: 'RentingDocAccessFields_rentedBy_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_rentedBy_Update {
  __typename?: 'RentingDocAccessFields_rentedBy_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_rentedBy_user {
  __typename?: 'RentingDocAccessFields_rentedBy_user'
  create?: Maybe<RentingDocAccessFields_rentedBy_user_Create>
  delete?: Maybe<RentingDocAccessFields_rentedBy_user_Delete>
  read?: Maybe<RentingDocAccessFields_rentedBy_user_Read>
  update?: Maybe<RentingDocAccessFields_rentedBy_user_Update>
}

export interface RentingDocAccessFields_rentedBy_user_Create {
  __typename?: 'RentingDocAccessFields_rentedBy_user_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_rentedBy_user_Delete {
  __typename?: 'RentingDocAccessFields_rentedBy_user_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_rentedBy_user_Read {
  __typename?: 'RentingDocAccessFields_rentedBy_user_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_rentedBy_user_Update {
  __typename?: 'RentingDocAccessFields_rentedBy_user_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_rentedTo {
  __typename?: 'RentingDocAccessFields_rentedTo'
  create?: Maybe<RentingDocAccessFields_rentedTo_Create>
  delete?: Maybe<RentingDocAccessFields_rentedTo_Delete>
  fields?: Maybe<RentingDocAccessFields_rentedTo_Fields>
  read?: Maybe<RentingDocAccessFields_rentedTo_Read>
  update?: Maybe<RentingDocAccessFields_rentedTo_Update>
}

export interface RentingDocAccessFields_rentedTo_Create {
  __typename?: 'RentingDocAccessFields_rentedTo_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_rentedTo_Delete {
  __typename?: 'RentingDocAccessFields_rentedTo_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_rentedTo_Fields {
  __typename?: 'RentingDocAccessFields_rentedTo_Fields'
  item?: Maybe<RentingDocAccessFields_rentedTo_item>
  user?: Maybe<RentingDocAccessFields_rentedTo_user>
}

export interface RentingDocAccessFields_rentedTo_Read {
  __typename?: 'RentingDocAccessFields_rentedTo_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_rentedTo_Update {
  __typename?: 'RentingDocAccessFields_rentedTo_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_rentedTo_item {
  __typename?: 'RentingDocAccessFields_rentedTo_item'
  create?: Maybe<RentingDocAccessFields_rentedTo_item_Create>
  delete?: Maybe<RentingDocAccessFields_rentedTo_item_Delete>
  read?: Maybe<RentingDocAccessFields_rentedTo_item_Read>
  update?: Maybe<RentingDocAccessFields_rentedTo_item_Update>
}

export interface RentingDocAccessFields_rentedTo_item_Create {
  __typename?: 'RentingDocAccessFields_rentedTo_item_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_rentedTo_item_Delete {
  __typename?: 'RentingDocAccessFields_rentedTo_item_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_rentedTo_item_Read {
  __typename?: 'RentingDocAccessFields_rentedTo_item_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_rentedTo_item_Update {
  __typename?: 'RentingDocAccessFields_rentedTo_item_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_rentedTo_user {
  __typename?: 'RentingDocAccessFields_rentedTo_user'
  create?: Maybe<RentingDocAccessFields_rentedTo_user_Create>
  delete?: Maybe<RentingDocAccessFields_rentedTo_user_Delete>
  read?: Maybe<RentingDocAccessFields_rentedTo_user_Read>
  update?: Maybe<RentingDocAccessFields_rentedTo_user_Update>
}

export interface RentingDocAccessFields_rentedTo_user_Create {
  __typename?: 'RentingDocAccessFields_rentedTo_user_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_rentedTo_user_Delete {
  __typename?: 'RentingDocAccessFields_rentedTo_user_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_rentedTo_user_Read {
  __typename?: 'RentingDocAccessFields_rentedTo_user_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_rentedTo_user_Update {
  __typename?: 'RentingDocAccessFields_rentedTo_user_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_startDate {
  __typename?: 'RentingDocAccessFields_startDate'
  create?: Maybe<RentingDocAccessFields_startDate_Create>
  delete?: Maybe<RentingDocAccessFields_startDate_Delete>
  read?: Maybe<RentingDocAccessFields_startDate_Read>
  update?: Maybe<RentingDocAccessFields_startDate_Update>
}

export interface RentingDocAccessFields_startDate_Create {
  __typename?: 'RentingDocAccessFields_startDate_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_startDate_Delete {
  __typename?: 'RentingDocAccessFields_startDate_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_startDate_Read {
  __typename?: 'RentingDocAccessFields_startDate_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_startDate_Update {
  __typename?: 'RentingDocAccessFields_startDate_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_status {
  __typename?: 'RentingDocAccessFields_status'
  create?: Maybe<RentingDocAccessFields_status_Create>
  delete?: Maybe<RentingDocAccessFields_status_Delete>
  read?: Maybe<RentingDocAccessFields_status_Read>
  update?: Maybe<RentingDocAccessFields_status_Update>
}

export interface RentingDocAccessFields_status_Create {
  __typename?: 'RentingDocAccessFields_status_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_status_Delete {
  __typename?: 'RentingDocAccessFields_status_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_status_Read {
  __typename?: 'RentingDocAccessFields_status_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_status_Update {
  __typename?: 'RentingDocAccessFields_status_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_totalPrice {
  __typename?: 'RentingDocAccessFields_totalPrice'
  create?: Maybe<RentingDocAccessFields_totalPrice_Create>
  delete?: Maybe<RentingDocAccessFields_totalPrice_Delete>
  read?: Maybe<RentingDocAccessFields_totalPrice_Read>
  update?: Maybe<RentingDocAccessFields_totalPrice_Update>
}

export interface RentingDocAccessFields_totalPrice_Create {
  __typename?: 'RentingDocAccessFields_totalPrice_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_totalPrice_Delete {
  __typename?: 'RentingDocAccessFields_totalPrice_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_totalPrice_Read {
  __typename?: 'RentingDocAccessFields_totalPrice_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_totalPrice_Update {
  __typename?: 'RentingDocAccessFields_totalPrice_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_updatedAt {
  __typename?: 'RentingDocAccessFields_updatedAt'
  create?: Maybe<RentingDocAccessFields_updatedAt_Create>
  delete?: Maybe<RentingDocAccessFields_updatedAt_Delete>
  read?: Maybe<RentingDocAccessFields_updatedAt_Read>
  update?: Maybe<RentingDocAccessFields_updatedAt_Update>
}

export interface RentingDocAccessFields_updatedAt_Create {
  __typename?: 'RentingDocAccessFields_updatedAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_updatedAt_Delete {
  __typename?: 'RentingDocAccessFields_updatedAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_updatedAt_Read {
  __typename?: 'RentingDocAccessFields_updatedAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingDocAccessFields_updatedAt_Update {
  __typename?: 'RentingDocAccessFields_updatedAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields {
  __typename?: 'RentingFields'
  createdAt?: Maybe<RentingFields_createdAt>
  createdBy?: Maybe<RentingFields_createdBy>
  deliveryFee?: Maybe<RentingFields_deliveryFee>
  endDate?: Maybe<RentingFields_endDate>
  file?: Maybe<RentingFields_file>
  insuranceFee?: Maybe<RentingFields_insuranceFee>
  rentalFee?: Maybe<RentingFields_rentalFee>
  rentedBy?: Maybe<RentingFields_rentedBy>
  rentedTo?: Maybe<RentingFields_rentedTo>
  startDate?: Maybe<RentingFields_startDate>
  status?: Maybe<RentingFields_status>
  totalPrice?: Maybe<RentingFields_totalPrice>
  updatedAt?: Maybe<RentingFields_updatedAt>
}

export interface RentingFields_createdAt {
  __typename?: 'RentingFields_createdAt'
  create?: Maybe<RentingFields_createdAt_Create>
  delete?: Maybe<RentingFields_createdAt_Delete>
  read?: Maybe<RentingFields_createdAt_Read>
  update?: Maybe<RentingFields_createdAt_Update>
}

export interface RentingFields_createdAt_Create {
  __typename?: 'RentingFields_createdAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_createdAt_Delete {
  __typename?: 'RentingFields_createdAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_createdAt_Read {
  __typename?: 'RentingFields_createdAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_createdAt_Update {
  __typename?: 'RentingFields_createdAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_createdBy {
  __typename?: 'RentingFields_createdBy'
  create?: Maybe<RentingFields_createdBy_Create>
  delete?: Maybe<RentingFields_createdBy_Delete>
  read?: Maybe<RentingFields_createdBy_Read>
  update?: Maybe<RentingFields_createdBy_Update>
}

export interface RentingFields_createdBy_Create {
  __typename?: 'RentingFields_createdBy_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_createdBy_Delete {
  __typename?: 'RentingFields_createdBy_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_createdBy_Read {
  __typename?: 'RentingFields_createdBy_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_createdBy_Update {
  __typename?: 'RentingFields_createdBy_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_deliveryFee {
  __typename?: 'RentingFields_deliveryFee'
  create?: Maybe<RentingFields_deliveryFee_Create>
  delete?: Maybe<RentingFields_deliveryFee_Delete>
  read?: Maybe<RentingFields_deliveryFee_Read>
  update?: Maybe<RentingFields_deliveryFee_Update>
}

export interface RentingFields_deliveryFee_Create {
  __typename?: 'RentingFields_deliveryFee_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_deliveryFee_Delete {
  __typename?: 'RentingFields_deliveryFee_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_deliveryFee_Read {
  __typename?: 'RentingFields_deliveryFee_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_deliveryFee_Update {
  __typename?: 'RentingFields_deliveryFee_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_endDate {
  __typename?: 'RentingFields_endDate'
  create?: Maybe<RentingFields_endDate_Create>
  delete?: Maybe<RentingFields_endDate_Delete>
  read?: Maybe<RentingFields_endDate_Read>
  update?: Maybe<RentingFields_endDate_Update>
}

export interface RentingFields_endDate_Create {
  __typename?: 'RentingFields_endDate_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_endDate_Delete {
  __typename?: 'RentingFields_endDate_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_endDate_Read {
  __typename?: 'RentingFields_endDate_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_endDate_Update {
  __typename?: 'RentingFields_endDate_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_file {
  __typename?: 'RentingFields_file'
  create?: Maybe<RentingFields_file_Create>
  delete?: Maybe<RentingFields_file_Delete>
  read?: Maybe<RentingFields_file_Read>
  update?: Maybe<RentingFields_file_Update>
}

export interface RentingFields_file_Create {
  __typename?: 'RentingFields_file_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_file_Delete {
  __typename?: 'RentingFields_file_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_file_Read {
  __typename?: 'RentingFields_file_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_file_Update {
  __typename?: 'RentingFields_file_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_insuranceFee {
  __typename?: 'RentingFields_insuranceFee'
  create?: Maybe<RentingFields_insuranceFee_Create>
  delete?: Maybe<RentingFields_insuranceFee_Delete>
  read?: Maybe<RentingFields_insuranceFee_Read>
  update?: Maybe<RentingFields_insuranceFee_Update>
}

export interface RentingFields_insuranceFee_Create {
  __typename?: 'RentingFields_insuranceFee_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_insuranceFee_Delete {
  __typename?: 'RentingFields_insuranceFee_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_insuranceFee_Read {
  __typename?: 'RentingFields_insuranceFee_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_insuranceFee_Update {
  __typename?: 'RentingFields_insuranceFee_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_rentalFee {
  __typename?: 'RentingFields_rentalFee'
  create?: Maybe<RentingFields_rentalFee_Create>
  delete?: Maybe<RentingFields_rentalFee_Delete>
  read?: Maybe<RentingFields_rentalFee_Read>
  update?: Maybe<RentingFields_rentalFee_Update>
}

export interface RentingFields_rentalFee_Create {
  __typename?: 'RentingFields_rentalFee_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_rentalFee_Delete {
  __typename?: 'RentingFields_rentalFee_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_rentalFee_Read {
  __typename?: 'RentingFields_rentalFee_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_rentalFee_Update {
  __typename?: 'RentingFields_rentalFee_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_rentedBy {
  __typename?: 'RentingFields_rentedBy'
  create?: Maybe<RentingFields_rentedBy_Create>
  delete?: Maybe<RentingFields_rentedBy_Delete>
  fields?: Maybe<RentingFields_rentedBy_Fields>
  read?: Maybe<RentingFields_rentedBy_Read>
  update?: Maybe<RentingFields_rentedBy_Update>
}

export interface RentingFields_rentedBy_Create {
  __typename?: 'RentingFields_rentedBy_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_rentedBy_Delete {
  __typename?: 'RentingFields_rentedBy_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_rentedBy_Fields {
  __typename?: 'RentingFields_rentedBy_Fields'
  user?: Maybe<RentingFields_rentedBy_user>
}

export interface RentingFields_rentedBy_Read {
  __typename?: 'RentingFields_rentedBy_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_rentedBy_Update {
  __typename?: 'RentingFields_rentedBy_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_rentedBy_user {
  __typename?: 'RentingFields_rentedBy_user'
  create?: Maybe<RentingFields_rentedBy_user_Create>
  delete?: Maybe<RentingFields_rentedBy_user_Delete>
  read?: Maybe<RentingFields_rentedBy_user_Read>
  update?: Maybe<RentingFields_rentedBy_user_Update>
}

export interface RentingFields_rentedBy_user_Create {
  __typename?: 'RentingFields_rentedBy_user_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_rentedBy_user_Delete {
  __typename?: 'RentingFields_rentedBy_user_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_rentedBy_user_Read {
  __typename?: 'RentingFields_rentedBy_user_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_rentedBy_user_Update {
  __typename?: 'RentingFields_rentedBy_user_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_rentedTo {
  __typename?: 'RentingFields_rentedTo'
  create?: Maybe<RentingFields_rentedTo_Create>
  delete?: Maybe<RentingFields_rentedTo_Delete>
  fields?: Maybe<RentingFields_rentedTo_Fields>
  read?: Maybe<RentingFields_rentedTo_Read>
  update?: Maybe<RentingFields_rentedTo_Update>
}

export interface RentingFields_rentedTo_Create {
  __typename?: 'RentingFields_rentedTo_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_rentedTo_Delete {
  __typename?: 'RentingFields_rentedTo_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_rentedTo_Fields {
  __typename?: 'RentingFields_rentedTo_Fields'
  item?: Maybe<RentingFields_rentedTo_item>
  user?: Maybe<RentingFields_rentedTo_user>
}

export interface RentingFields_rentedTo_Read {
  __typename?: 'RentingFields_rentedTo_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_rentedTo_Update {
  __typename?: 'RentingFields_rentedTo_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_rentedTo_item {
  __typename?: 'RentingFields_rentedTo_item'
  create?: Maybe<RentingFields_rentedTo_item_Create>
  delete?: Maybe<RentingFields_rentedTo_item_Delete>
  read?: Maybe<RentingFields_rentedTo_item_Read>
  update?: Maybe<RentingFields_rentedTo_item_Update>
}

export interface RentingFields_rentedTo_item_Create {
  __typename?: 'RentingFields_rentedTo_item_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_rentedTo_item_Delete {
  __typename?: 'RentingFields_rentedTo_item_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_rentedTo_item_Read {
  __typename?: 'RentingFields_rentedTo_item_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_rentedTo_item_Update {
  __typename?: 'RentingFields_rentedTo_item_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_rentedTo_user {
  __typename?: 'RentingFields_rentedTo_user'
  create?: Maybe<RentingFields_rentedTo_user_Create>
  delete?: Maybe<RentingFields_rentedTo_user_Delete>
  read?: Maybe<RentingFields_rentedTo_user_Read>
  update?: Maybe<RentingFields_rentedTo_user_Update>
}

export interface RentingFields_rentedTo_user_Create {
  __typename?: 'RentingFields_rentedTo_user_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_rentedTo_user_Delete {
  __typename?: 'RentingFields_rentedTo_user_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_rentedTo_user_Read {
  __typename?: 'RentingFields_rentedTo_user_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_rentedTo_user_Update {
  __typename?: 'RentingFields_rentedTo_user_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_startDate {
  __typename?: 'RentingFields_startDate'
  create?: Maybe<RentingFields_startDate_Create>
  delete?: Maybe<RentingFields_startDate_Delete>
  read?: Maybe<RentingFields_startDate_Read>
  update?: Maybe<RentingFields_startDate_Update>
}

export interface RentingFields_startDate_Create {
  __typename?: 'RentingFields_startDate_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_startDate_Delete {
  __typename?: 'RentingFields_startDate_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_startDate_Read {
  __typename?: 'RentingFields_startDate_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_startDate_Update {
  __typename?: 'RentingFields_startDate_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_status {
  __typename?: 'RentingFields_status'
  create?: Maybe<RentingFields_status_Create>
  delete?: Maybe<RentingFields_status_Delete>
  read?: Maybe<RentingFields_status_Read>
  update?: Maybe<RentingFields_status_Update>
}

export interface RentingFields_status_Create {
  __typename?: 'RentingFields_status_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_status_Delete {
  __typename?: 'RentingFields_status_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_status_Read {
  __typename?: 'RentingFields_status_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_status_Update {
  __typename?: 'RentingFields_status_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_totalPrice {
  __typename?: 'RentingFields_totalPrice'
  create?: Maybe<RentingFields_totalPrice_Create>
  delete?: Maybe<RentingFields_totalPrice_Delete>
  read?: Maybe<RentingFields_totalPrice_Read>
  update?: Maybe<RentingFields_totalPrice_Update>
}

export interface RentingFields_totalPrice_Create {
  __typename?: 'RentingFields_totalPrice_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_totalPrice_Delete {
  __typename?: 'RentingFields_totalPrice_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_totalPrice_Read {
  __typename?: 'RentingFields_totalPrice_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_totalPrice_Update {
  __typename?: 'RentingFields_totalPrice_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_updatedAt {
  __typename?: 'RentingFields_updatedAt'
  create?: Maybe<RentingFields_updatedAt_Create>
  delete?: Maybe<RentingFields_updatedAt_Delete>
  read?: Maybe<RentingFields_updatedAt_Read>
  update?: Maybe<RentingFields_updatedAt_Update>
}

export interface RentingFields_updatedAt_Create {
  __typename?: 'RentingFields_updatedAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_updatedAt_Delete {
  __typename?: 'RentingFields_updatedAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_updatedAt_Read {
  __typename?: 'RentingFields_updatedAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface RentingFields_updatedAt_Update {
  __typename?: 'RentingFields_updatedAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface RentingReadAccess {
  __typename?: 'RentingReadAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface RentingReadDocAccess {
  __typename?: 'RentingReadDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface RentingUpdateAccess {
  __typename?: 'RentingUpdateAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface RentingUpdateDocAccess {
  __typename?: 'RentingUpdateDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface Renting_RentedBy {
  __typename?: 'Renting_RentedBy'
  user?: Maybe<User>
}

export interface Renting_RentedTo {
  __typename?: 'Renting_RentedTo'
  item?: Maybe<Item>
  user?: Maybe<User>
}

export interface Rentings {
  __typename?: 'Rentings'
  docs?: Maybe<Array<Maybe<Renting>>>
  hasNextPage?: Maybe<ScalarsEnums['Boolean']>
  hasPrevPage?: Maybe<ScalarsEnums['Boolean']>
  limit?: Maybe<ScalarsEnums['Int']>
  nextPage?: Maybe<ScalarsEnums['Int']>
  offset?: Maybe<ScalarsEnums['Int']>
  page?: Maybe<ScalarsEnums['Int']>
  pagingCounter?: Maybe<ScalarsEnums['Int']>
  prevPage?: Maybe<ScalarsEnums['Int']>
  totalDocs?: Maybe<ScalarsEnums['Int']>
  totalPages?: Maybe<ScalarsEnums['Int']>
}

export interface Tag {
  __typename?: 'Tag'
  alt?: Maybe<ScalarsEnums['String']>
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  createdBy: User
  id?: Maybe<ScalarsEnums['Int']>
  name: ScalarsEnums['String']
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
}

export interface Tags {
  __typename?: 'Tags'
  docs?: Maybe<Array<Maybe<Tag>>>
  hasNextPage?: Maybe<ScalarsEnums['Boolean']>
  hasPrevPage?: Maybe<ScalarsEnums['Boolean']>
  limit?: Maybe<ScalarsEnums['Int']>
  nextPage?: Maybe<ScalarsEnums['Int']>
  offset?: Maybe<ScalarsEnums['Int']>
  page?: Maybe<ScalarsEnums['Int']>
  pagingCounter?: Maybe<ScalarsEnums['Int']>
  prevPage?: Maybe<ScalarsEnums['Int']>
  totalDocs?: Maybe<ScalarsEnums['Int']>
  totalPages?: Maybe<ScalarsEnums['Int']>
}

export interface TagsCreateAccess {
  __typename?: 'TagsCreateAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface TagsCreateDocAccess {
  __typename?: 'TagsCreateDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface TagsDeleteAccess {
  __typename?: 'TagsDeleteAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface TagsDeleteDocAccess {
  __typename?: 'TagsDeleteDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface TagsDocAccessFields {
  __typename?: 'TagsDocAccessFields'
  alt?: Maybe<TagsDocAccessFields_alt>
  createdAt?: Maybe<TagsDocAccessFields_createdAt>
  name?: Maybe<TagsDocAccessFields_name>
  updatedAt?: Maybe<TagsDocAccessFields_updatedAt>
}

export interface TagsDocAccessFields_alt {
  __typename?: 'TagsDocAccessFields_alt'
  create?: Maybe<TagsDocAccessFields_alt_Create>
  delete?: Maybe<TagsDocAccessFields_alt_Delete>
  read?: Maybe<TagsDocAccessFields_alt_Read>
  update?: Maybe<TagsDocAccessFields_alt_Update>
}

export interface TagsDocAccessFields_alt_Create {
  __typename?: 'TagsDocAccessFields_alt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface TagsDocAccessFields_alt_Delete {
  __typename?: 'TagsDocAccessFields_alt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface TagsDocAccessFields_alt_Read {
  __typename?: 'TagsDocAccessFields_alt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface TagsDocAccessFields_alt_Update {
  __typename?: 'TagsDocAccessFields_alt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface TagsDocAccessFields_createdAt {
  __typename?: 'TagsDocAccessFields_createdAt'
  create?: Maybe<TagsDocAccessFields_createdAt_Create>
  delete?: Maybe<TagsDocAccessFields_createdAt_Delete>
  read?: Maybe<TagsDocAccessFields_createdAt_Read>
  update?: Maybe<TagsDocAccessFields_createdAt_Update>
}

export interface TagsDocAccessFields_createdAt_Create {
  __typename?: 'TagsDocAccessFields_createdAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface TagsDocAccessFields_createdAt_Delete {
  __typename?: 'TagsDocAccessFields_createdAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface TagsDocAccessFields_createdAt_Read {
  __typename?: 'TagsDocAccessFields_createdAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface TagsDocAccessFields_createdAt_Update {
  __typename?: 'TagsDocAccessFields_createdAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface TagsDocAccessFields_name {
  __typename?: 'TagsDocAccessFields_name'
  create?: Maybe<TagsDocAccessFields_name_Create>
  delete?: Maybe<TagsDocAccessFields_name_Delete>
  read?: Maybe<TagsDocAccessFields_name_Read>
  update?: Maybe<TagsDocAccessFields_name_Update>
}

export interface TagsDocAccessFields_name_Create {
  __typename?: 'TagsDocAccessFields_name_Create'
  permission: ScalarsEnums['Boolean']
}

export interface TagsDocAccessFields_name_Delete {
  __typename?: 'TagsDocAccessFields_name_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface TagsDocAccessFields_name_Read {
  __typename?: 'TagsDocAccessFields_name_Read'
  permission: ScalarsEnums['Boolean']
}

export interface TagsDocAccessFields_name_Update {
  __typename?: 'TagsDocAccessFields_name_Update'
  permission: ScalarsEnums['Boolean']
}

export interface TagsDocAccessFields_updatedAt {
  __typename?: 'TagsDocAccessFields_updatedAt'
  create?: Maybe<TagsDocAccessFields_updatedAt_Create>
  delete?: Maybe<TagsDocAccessFields_updatedAt_Delete>
  read?: Maybe<TagsDocAccessFields_updatedAt_Read>
  update?: Maybe<TagsDocAccessFields_updatedAt_Update>
}

export interface TagsDocAccessFields_updatedAt_Create {
  __typename?: 'TagsDocAccessFields_updatedAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface TagsDocAccessFields_updatedAt_Delete {
  __typename?: 'TagsDocAccessFields_updatedAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface TagsDocAccessFields_updatedAt_Read {
  __typename?: 'TagsDocAccessFields_updatedAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface TagsDocAccessFields_updatedAt_Update {
  __typename?: 'TagsDocAccessFields_updatedAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface TagsFields {
  __typename?: 'TagsFields'
  alt?: Maybe<TagsFields_alt>
  createdAt?: Maybe<TagsFields_createdAt>
  name?: Maybe<TagsFields_name>
  updatedAt?: Maybe<TagsFields_updatedAt>
}

export interface TagsFields_alt {
  __typename?: 'TagsFields_alt'
  create?: Maybe<TagsFields_alt_Create>
  delete?: Maybe<TagsFields_alt_Delete>
  read?: Maybe<TagsFields_alt_Read>
  update?: Maybe<TagsFields_alt_Update>
}

export interface TagsFields_alt_Create {
  __typename?: 'TagsFields_alt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface TagsFields_alt_Delete {
  __typename?: 'TagsFields_alt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface TagsFields_alt_Read {
  __typename?: 'TagsFields_alt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface TagsFields_alt_Update {
  __typename?: 'TagsFields_alt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface TagsFields_createdAt {
  __typename?: 'TagsFields_createdAt'
  create?: Maybe<TagsFields_createdAt_Create>
  delete?: Maybe<TagsFields_createdAt_Delete>
  read?: Maybe<TagsFields_createdAt_Read>
  update?: Maybe<TagsFields_createdAt_Update>
}

export interface TagsFields_createdAt_Create {
  __typename?: 'TagsFields_createdAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface TagsFields_createdAt_Delete {
  __typename?: 'TagsFields_createdAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface TagsFields_createdAt_Read {
  __typename?: 'TagsFields_createdAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface TagsFields_createdAt_Update {
  __typename?: 'TagsFields_createdAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface TagsFields_name {
  __typename?: 'TagsFields_name'
  create?: Maybe<TagsFields_name_Create>
  delete?: Maybe<TagsFields_name_Delete>
  read?: Maybe<TagsFields_name_Read>
  update?: Maybe<TagsFields_name_Update>
}

export interface TagsFields_name_Create {
  __typename?: 'TagsFields_name_Create'
  permission: ScalarsEnums['Boolean']
}

export interface TagsFields_name_Delete {
  __typename?: 'TagsFields_name_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface TagsFields_name_Read {
  __typename?: 'TagsFields_name_Read'
  permission: ScalarsEnums['Boolean']
}

export interface TagsFields_name_Update {
  __typename?: 'TagsFields_name_Update'
  permission: ScalarsEnums['Boolean']
}

export interface TagsFields_updatedAt {
  __typename?: 'TagsFields_updatedAt'
  create?: Maybe<TagsFields_updatedAt_Create>
  delete?: Maybe<TagsFields_updatedAt_Delete>
  read?: Maybe<TagsFields_updatedAt_Read>
  update?: Maybe<TagsFields_updatedAt_Update>
}

export interface TagsFields_updatedAt_Create {
  __typename?: 'TagsFields_updatedAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface TagsFields_updatedAt_Delete {
  __typename?: 'TagsFields_updatedAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface TagsFields_updatedAt_Read {
  __typename?: 'TagsFields_updatedAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface TagsFields_updatedAt_Update {
  __typename?: 'TagsFields_updatedAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface TagsReadAccess {
  __typename?: 'TagsReadAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface TagsReadDocAccess {
  __typename?: 'TagsReadDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface TagsUpdateAccess {
  __typename?: 'TagsUpdateAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface TagsUpdateDocAccess {
  __typename?: 'TagsUpdateDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface User {
  __typename?: 'User'
  bio?: Maybe<ScalarsEnums['String']>
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  email: ScalarsEnums['EmailAddress']
  firstName?: Maybe<ScalarsEnums['String']>
  hash?: Maybe<ScalarsEnums['String']>
  id?: Maybe<ScalarsEnums['Int']>
  lastName?: Maybe<ScalarsEnums['String']>
  lockUntil?: Maybe<ScalarsEnums['DateTime']>
  loginAttempts?: Maybe<ScalarsEnums['Float']>
  password: ScalarsEnums['String']
  phone: ScalarsEnums['String']
  profileImage?: Maybe<Media>
  province?: Maybe<ScalarsEnums['String']>
  rating?: Maybe<ScalarsEnums['Float']>
  requestsMade?: Maybe<Array<Renting>>
  requestsReceived?: Maybe<Array<Renting>>
  resetPasswordExpiration?: Maybe<ScalarsEnums['DateTime']>
  resetPasswordToken?: Maybe<ScalarsEnums['String']>
  roles: Array<ScalarsEnums['User_roles']>
  salt?: Maybe<ScalarsEnums['String']>
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
}

export interface Users {
  __typename?: 'Users'
  docs?: Maybe<Array<Maybe<User>>>
  hasNextPage?: Maybe<ScalarsEnums['Boolean']>
  hasPrevPage?: Maybe<ScalarsEnums['Boolean']>
  limit?: Maybe<ScalarsEnums['Int']>
  nextPage?: Maybe<ScalarsEnums['Int']>
  offset?: Maybe<ScalarsEnums['Int']>
  page?: Maybe<ScalarsEnums['Int']>
  pagingCounter?: Maybe<ScalarsEnums['Int']>
  prevPage?: Maybe<ScalarsEnums['Int']>
  totalDocs?: Maybe<ScalarsEnums['Int']>
  totalPages?: Maybe<ScalarsEnums['Int']>
}

export interface UsersCreateAccess {
  __typename?: 'UsersCreateAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface UsersCreateDocAccess {
  __typename?: 'UsersCreateDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface UsersDeleteAccess {
  __typename?: 'UsersDeleteAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface UsersDeleteDocAccess {
  __typename?: 'UsersDeleteDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface UsersDocAccessFields {
  __typename?: 'UsersDocAccessFields'
  bio?: Maybe<UsersDocAccessFields_bio>
  createdAt?: Maybe<UsersDocAccessFields_createdAt>
  email?: Maybe<UsersDocAccessFields_email>
  firstName?: Maybe<UsersDocAccessFields_firstName>
  lastName?: Maybe<UsersDocAccessFields_lastName>
  password?: Maybe<UsersDocAccessFields_password>
  phone?: Maybe<UsersDocAccessFields_phone>
  profileImage?: Maybe<UsersDocAccessFields_profileImage>
  province?: Maybe<UsersDocAccessFields_province>
  rating?: Maybe<UsersDocAccessFields_rating>
  requestsMade?: Maybe<UsersDocAccessFields_requestsMade>
  requestsReceived?: Maybe<UsersDocAccessFields_requestsReceived>
  roles?: Maybe<UsersDocAccessFields_roles>
  updatedAt?: Maybe<UsersDocAccessFields_updatedAt>
}

export interface UsersDocAccessFields_bio {
  __typename?: 'UsersDocAccessFields_bio'
  create?: Maybe<UsersDocAccessFields_bio_Create>
  delete?: Maybe<UsersDocAccessFields_bio_Delete>
  read?: Maybe<UsersDocAccessFields_bio_Read>
  update?: Maybe<UsersDocAccessFields_bio_Update>
}

export interface UsersDocAccessFields_bio_Create {
  __typename?: 'UsersDocAccessFields_bio_Create'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_bio_Delete {
  __typename?: 'UsersDocAccessFields_bio_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_bio_Read {
  __typename?: 'UsersDocAccessFields_bio_Read'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_bio_Update {
  __typename?: 'UsersDocAccessFields_bio_Update'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_createdAt {
  __typename?: 'UsersDocAccessFields_createdAt'
  create?: Maybe<UsersDocAccessFields_createdAt_Create>
  delete?: Maybe<UsersDocAccessFields_createdAt_Delete>
  read?: Maybe<UsersDocAccessFields_createdAt_Read>
  update?: Maybe<UsersDocAccessFields_createdAt_Update>
}

export interface UsersDocAccessFields_createdAt_Create {
  __typename?: 'UsersDocAccessFields_createdAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_createdAt_Delete {
  __typename?: 'UsersDocAccessFields_createdAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_createdAt_Read {
  __typename?: 'UsersDocAccessFields_createdAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_createdAt_Update {
  __typename?: 'UsersDocAccessFields_createdAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_email {
  __typename?: 'UsersDocAccessFields_email'
  create?: Maybe<UsersDocAccessFields_email_Create>
  delete?: Maybe<UsersDocAccessFields_email_Delete>
  read?: Maybe<UsersDocAccessFields_email_Read>
  update?: Maybe<UsersDocAccessFields_email_Update>
}

export interface UsersDocAccessFields_email_Create {
  __typename?: 'UsersDocAccessFields_email_Create'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_email_Delete {
  __typename?: 'UsersDocAccessFields_email_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_email_Read {
  __typename?: 'UsersDocAccessFields_email_Read'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_email_Update {
  __typename?: 'UsersDocAccessFields_email_Update'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_firstName {
  __typename?: 'UsersDocAccessFields_firstName'
  create?: Maybe<UsersDocAccessFields_firstName_Create>
  delete?: Maybe<UsersDocAccessFields_firstName_Delete>
  read?: Maybe<UsersDocAccessFields_firstName_Read>
  update?: Maybe<UsersDocAccessFields_firstName_Update>
}

export interface UsersDocAccessFields_firstName_Create {
  __typename?: 'UsersDocAccessFields_firstName_Create'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_firstName_Delete {
  __typename?: 'UsersDocAccessFields_firstName_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_firstName_Read {
  __typename?: 'UsersDocAccessFields_firstName_Read'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_firstName_Update {
  __typename?: 'UsersDocAccessFields_firstName_Update'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_lastName {
  __typename?: 'UsersDocAccessFields_lastName'
  create?: Maybe<UsersDocAccessFields_lastName_Create>
  delete?: Maybe<UsersDocAccessFields_lastName_Delete>
  read?: Maybe<UsersDocAccessFields_lastName_Read>
  update?: Maybe<UsersDocAccessFields_lastName_Update>
}

export interface UsersDocAccessFields_lastName_Create {
  __typename?: 'UsersDocAccessFields_lastName_Create'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_lastName_Delete {
  __typename?: 'UsersDocAccessFields_lastName_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_lastName_Read {
  __typename?: 'UsersDocAccessFields_lastName_Read'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_lastName_Update {
  __typename?: 'UsersDocAccessFields_lastName_Update'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_password {
  __typename?: 'UsersDocAccessFields_password'
  create?: Maybe<UsersDocAccessFields_password_Create>
  delete?: Maybe<UsersDocAccessFields_password_Delete>
  read?: Maybe<UsersDocAccessFields_password_Read>
  update?: Maybe<UsersDocAccessFields_password_Update>
}

export interface UsersDocAccessFields_password_Create {
  __typename?: 'UsersDocAccessFields_password_Create'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_password_Delete {
  __typename?: 'UsersDocAccessFields_password_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_password_Read {
  __typename?: 'UsersDocAccessFields_password_Read'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_password_Update {
  __typename?: 'UsersDocAccessFields_password_Update'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_phone {
  __typename?: 'UsersDocAccessFields_phone'
  create?: Maybe<UsersDocAccessFields_phone_Create>
  delete?: Maybe<UsersDocAccessFields_phone_Delete>
  read?: Maybe<UsersDocAccessFields_phone_Read>
  update?: Maybe<UsersDocAccessFields_phone_Update>
}

export interface UsersDocAccessFields_phone_Create {
  __typename?: 'UsersDocAccessFields_phone_Create'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_phone_Delete {
  __typename?: 'UsersDocAccessFields_phone_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_phone_Read {
  __typename?: 'UsersDocAccessFields_phone_Read'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_phone_Update {
  __typename?: 'UsersDocAccessFields_phone_Update'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_profileImage {
  __typename?: 'UsersDocAccessFields_profileImage'
  create?: Maybe<UsersDocAccessFields_profileImage_Create>
  delete?: Maybe<UsersDocAccessFields_profileImage_Delete>
  read?: Maybe<UsersDocAccessFields_profileImage_Read>
  update?: Maybe<UsersDocAccessFields_profileImage_Update>
}

export interface UsersDocAccessFields_profileImage_Create {
  __typename?: 'UsersDocAccessFields_profileImage_Create'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_profileImage_Delete {
  __typename?: 'UsersDocAccessFields_profileImage_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_profileImage_Read {
  __typename?: 'UsersDocAccessFields_profileImage_Read'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_profileImage_Update {
  __typename?: 'UsersDocAccessFields_profileImage_Update'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_province {
  __typename?: 'UsersDocAccessFields_province'
  create?: Maybe<UsersDocAccessFields_province_Create>
  delete?: Maybe<UsersDocAccessFields_province_Delete>
  read?: Maybe<UsersDocAccessFields_province_Read>
  update?: Maybe<UsersDocAccessFields_province_Update>
}

export interface UsersDocAccessFields_province_Create {
  __typename?: 'UsersDocAccessFields_province_Create'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_province_Delete {
  __typename?: 'UsersDocAccessFields_province_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_province_Read {
  __typename?: 'UsersDocAccessFields_province_Read'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_province_Update {
  __typename?: 'UsersDocAccessFields_province_Update'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_rating {
  __typename?: 'UsersDocAccessFields_rating'
  create?: Maybe<UsersDocAccessFields_rating_Create>
  delete?: Maybe<UsersDocAccessFields_rating_Delete>
  read?: Maybe<UsersDocAccessFields_rating_Read>
  update?: Maybe<UsersDocAccessFields_rating_Update>
}

export interface UsersDocAccessFields_rating_Create {
  __typename?: 'UsersDocAccessFields_rating_Create'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_rating_Delete {
  __typename?: 'UsersDocAccessFields_rating_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_rating_Read {
  __typename?: 'UsersDocAccessFields_rating_Read'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_rating_Update {
  __typename?: 'UsersDocAccessFields_rating_Update'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_requestsMade {
  __typename?: 'UsersDocAccessFields_requestsMade'
  create?: Maybe<UsersDocAccessFields_requestsMade_Create>
  delete?: Maybe<UsersDocAccessFields_requestsMade_Delete>
  read?: Maybe<UsersDocAccessFields_requestsMade_Read>
  update?: Maybe<UsersDocAccessFields_requestsMade_Update>
}

export interface UsersDocAccessFields_requestsMade_Create {
  __typename?: 'UsersDocAccessFields_requestsMade_Create'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_requestsMade_Delete {
  __typename?: 'UsersDocAccessFields_requestsMade_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_requestsMade_Read {
  __typename?: 'UsersDocAccessFields_requestsMade_Read'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_requestsMade_Update {
  __typename?: 'UsersDocAccessFields_requestsMade_Update'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_requestsReceived {
  __typename?: 'UsersDocAccessFields_requestsReceived'
  create?: Maybe<UsersDocAccessFields_requestsReceived_Create>
  delete?: Maybe<UsersDocAccessFields_requestsReceived_Delete>
  read?: Maybe<UsersDocAccessFields_requestsReceived_Read>
  update?: Maybe<UsersDocAccessFields_requestsReceived_Update>
}

export interface UsersDocAccessFields_requestsReceived_Create {
  __typename?: 'UsersDocAccessFields_requestsReceived_Create'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_requestsReceived_Delete {
  __typename?: 'UsersDocAccessFields_requestsReceived_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_requestsReceived_Read {
  __typename?: 'UsersDocAccessFields_requestsReceived_Read'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_requestsReceived_Update {
  __typename?: 'UsersDocAccessFields_requestsReceived_Update'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_roles {
  __typename?: 'UsersDocAccessFields_roles'
  create?: Maybe<UsersDocAccessFields_roles_Create>
  delete?: Maybe<UsersDocAccessFields_roles_Delete>
  read?: Maybe<UsersDocAccessFields_roles_Read>
  update?: Maybe<UsersDocAccessFields_roles_Update>
}

export interface UsersDocAccessFields_roles_Create {
  __typename?: 'UsersDocAccessFields_roles_Create'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_roles_Delete {
  __typename?: 'UsersDocAccessFields_roles_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_roles_Read {
  __typename?: 'UsersDocAccessFields_roles_Read'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_roles_Update {
  __typename?: 'UsersDocAccessFields_roles_Update'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_updatedAt {
  __typename?: 'UsersDocAccessFields_updatedAt'
  create?: Maybe<UsersDocAccessFields_updatedAt_Create>
  delete?: Maybe<UsersDocAccessFields_updatedAt_Delete>
  read?: Maybe<UsersDocAccessFields_updatedAt_Read>
  update?: Maybe<UsersDocAccessFields_updatedAt_Update>
}

export interface UsersDocAccessFields_updatedAt_Create {
  __typename?: 'UsersDocAccessFields_updatedAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_updatedAt_Delete {
  __typename?: 'UsersDocAccessFields_updatedAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_updatedAt_Read {
  __typename?: 'UsersDocAccessFields_updatedAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface UsersDocAccessFields_updatedAt_Update {
  __typename?: 'UsersDocAccessFields_updatedAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields {
  __typename?: 'UsersFields'
  bio?: Maybe<UsersFields_bio>
  createdAt?: Maybe<UsersFields_createdAt>
  email?: Maybe<UsersFields_email>
  firstName?: Maybe<UsersFields_firstName>
  lastName?: Maybe<UsersFields_lastName>
  password?: Maybe<UsersFields_password>
  phone?: Maybe<UsersFields_phone>
  profileImage?: Maybe<UsersFields_profileImage>
  province?: Maybe<UsersFields_province>
  rating?: Maybe<UsersFields_rating>
  requestsMade?: Maybe<UsersFields_requestsMade>
  requestsReceived?: Maybe<UsersFields_requestsReceived>
  roles?: Maybe<UsersFields_roles>
  updatedAt?: Maybe<UsersFields_updatedAt>
}

export interface UsersFields_bio {
  __typename?: 'UsersFields_bio'
  create?: Maybe<UsersFields_bio_Create>
  delete?: Maybe<UsersFields_bio_Delete>
  read?: Maybe<UsersFields_bio_Read>
  update?: Maybe<UsersFields_bio_Update>
}

export interface UsersFields_bio_Create {
  __typename?: 'UsersFields_bio_Create'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_bio_Delete {
  __typename?: 'UsersFields_bio_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_bio_Read {
  __typename?: 'UsersFields_bio_Read'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_bio_Update {
  __typename?: 'UsersFields_bio_Update'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_createdAt {
  __typename?: 'UsersFields_createdAt'
  create?: Maybe<UsersFields_createdAt_Create>
  delete?: Maybe<UsersFields_createdAt_Delete>
  read?: Maybe<UsersFields_createdAt_Read>
  update?: Maybe<UsersFields_createdAt_Update>
}

export interface UsersFields_createdAt_Create {
  __typename?: 'UsersFields_createdAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_createdAt_Delete {
  __typename?: 'UsersFields_createdAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_createdAt_Read {
  __typename?: 'UsersFields_createdAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_createdAt_Update {
  __typename?: 'UsersFields_createdAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_email {
  __typename?: 'UsersFields_email'
  create?: Maybe<UsersFields_email_Create>
  delete?: Maybe<UsersFields_email_Delete>
  read?: Maybe<UsersFields_email_Read>
  update?: Maybe<UsersFields_email_Update>
}

export interface UsersFields_email_Create {
  __typename?: 'UsersFields_email_Create'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_email_Delete {
  __typename?: 'UsersFields_email_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_email_Read {
  __typename?: 'UsersFields_email_Read'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_email_Update {
  __typename?: 'UsersFields_email_Update'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_firstName {
  __typename?: 'UsersFields_firstName'
  create?: Maybe<UsersFields_firstName_Create>
  delete?: Maybe<UsersFields_firstName_Delete>
  read?: Maybe<UsersFields_firstName_Read>
  update?: Maybe<UsersFields_firstName_Update>
}

export interface UsersFields_firstName_Create {
  __typename?: 'UsersFields_firstName_Create'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_firstName_Delete {
  __typename?: 'UsersFields_firstName_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_firstName_Read {
  __typename?: 'UsersFields_firstName_Read'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_firstName_Update {
  __typename?: 'UsersFields_firstName_Update'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_lastName {
  __typename?: 'UsersFields_lastName'
  create?: Maybe<UsersFields_lastName_Create>
  delete?: Maybe<UsersFields_lastName_Delete>
  read?: Maybe<UsersFields_lastName_Read>
  update?: Maybe<UsersFields_lastName_Update>
}

export interface UsersFields_lastName_Create {
  __typename?: 'UsersFields_lastName_Create'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_lastName_Delete {
  __typename?: 'UsersFields_lastName_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_lastName_Read {
  __typename?: 'UsersFields_lastName_Read'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_lastName_Update {
  __typename?: 'UsersFields_lastName_Update'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_password {
  __typename?: 'UsersFields_password'
  create?: Maybe<UsersFields_password_Create>
  delete?: Maybe<UsersFields_password_Delete>
  read?: Maybe<UsersFields_password_Read>
  update?: Maybe<UsersFields_password_Update>
}

export interface UsersFields_password_Create {
  __typename?: 'UsersFields_password_Create'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_password_Delete {
  __typename?: 'UsersFields_password_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_password_Read {
  __typename?: 'UsersFields_password_Read'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_password_Update {
  __typename?: 'UsersFields_password_Update'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_phone {
  __typename?: 'UsersFields_phone'
  create?: Maybe<UsersFields_phone_Create>
  delete?: Maybe<UsersFields_phone_Delete>
  read?: Maybe<UsersFields_phone_Read>
  update?: Maybe<UsersFields_phone_Update>
}

export interface UsersFields_phone_Create {
  __typename?: 'UsersFields_phone_Create'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_phone_Delete {
  __typename?: 'UsersFields_phone_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_phone_Read {
  __typename?: 'UsersFields_phone_Read'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_phone_Update {
  __typename?: 'UsersFields_phone_Update'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_profileImage {
  __typename?: 'UsersFields_profileImage'
  create?: Maybe<UsersFields_profileImage_Create>
  delete?: Maybe<UsersFields_profileImage_Delete>
  read?: Maybe<UsersFields_profileImage_Read>
  update?: Maybe<UsersFields_profileImage_Update>
}

export interface UsersFields_profileImage_Create {
  __typename?: 'UsersFields_profileImage_Create'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_profileImage_Delete {
  __typename?: 'UsersFields_profileImage_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_profileImage_Read {
  __typename?: 'UsersFields_profileImage_Read'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_profileImage_Update {
  __typename?: 'UsersFields_profileImage_Update'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_province {
  __typename?: 'UsersFields_province'
  create?: Maybe<UsersFields_province_Create>
  delete?: Maybe<UsersFields_province_Delete>
  read?: Maybe<UsersFields_province_Read>
  update?: Maybe<UsersFields_province_Update>
}

export interface UsersFields_province_Create {
  __typename?: 'UsersFields_province_Create'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_province_Delete {
  __typename?: 'UsersFields_province_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_province_Read {
  __typename?: 'UsersFields_province_Read'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_province_Update {
  __typename?: 'UsersFields_province_Update'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_rating {
  __typename?: 'UsersFields_rating'
  create?: Maybe<UsersFields_rating_Create>
  delete?: Maybe<UsersFields_rating_Delete>
  read?: Maybe<UsersFields_rating_Read>
  update?: Maybe<UsersFields_rating_Update>
}

export interface UsersFields_rating_Create {
  __typename?: 'UsersFields_rating_Create'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_rating_Delete {
  __typename?: 'UsersFields_rating_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_rating_Read {
  __typename?: 'UsersFields_rating_Read'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_rating_Update {
  __typename?: 'UsersFields_rating_Update'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_requestsMade {
  __typename?: 'UsersFields_requestsMade'
  create?: Maybe<UsersFields_requestsMade_Create>
  delete?: Maybe<UsersFields_requestsMade_Delete>
  read?: Maybe<UsersFields_requestsMade_Read>
  update?: Maybe<UsersFields_requestsMade_Update>
}

export interface UsersFields_requestsMade_Create {
  __typename?: 'UsersFields_requestsMade_Create'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_requestsMade_Delete {
  __typename?: 'UsersFields_requestsMade_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_requestsMade_Read {
  __typename?: 'UsersFields_requestsMade_Read'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_requestsMade_Update {
  __typename?: 'UsersFields_requestsMade_Update'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_requestsReceived {
  __typename?: 'UsersFields_requestsReceived'
  create?: Maybe<UsersFields_requestsReceived_Create>
  delete?: Maybe<UsersFields_requestsReceived_Delete>
  read?: Maybe<UsersFields_requestsReceived_Read>
  update?: Maybe<UsersFields_requestsReceived_Update>
}

export interface UsersFields_requestsReceived_Create {
  __typename?: 'UsersFields_requestsReceived_Create'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_requestsReceived_Delete {
  __typename?: 'UsersFields_requestsReceived_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_requestsReceived_Read {
  __typename?: 'UsersFields_requestsReceived_Read'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_requestsReceived_Update {
  __typename?: 'UsersFields_requestsReceived_Update'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_roles {
  __typename?: 'UsersFields_roles'
  create?: Maybe<UsersFields_roles_Create>
  delete?: Maybe<UsersFields_roles_Delete>
  read?: Maybe<UsersFields_roles_Read>
  update?: Maybe<UsersFields_roles_Update>
}

export interface UsersFields_roles_Create {
  __typename?: 'UsersFields_roles_Create'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_roles_Delete {
  __typename?: 'UsersFields_roles_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_roles_Read {
  __typename?: 'UsersFields_roles_Read'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_roles_Update {
  __typename?: 'UsersFields_roles_Update'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_updatedAt {
  __typename?: 'UsersFields_updatedAt'
  create?: Maybe<UsersFields_updatedAt_Create>
  delete?: Maybe<UsersFields_updatedAt_Delete>
  read?: Maybe<UsersFields_updatedAt_Read>
  update?: Maybe<UsersFields_updatedAt_Update>
}

export interface UsersFields_updatedAt_Create {
  __typename?: 'UsersFields_updatedAt_Create'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_updatedAt_Delete {
  __typename?: 'UsersFields_updatedAt_Delete'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_updatedAt_Read {
  __typename?: 'UsersFields_updatedAt_Read'
  permission: ScalarsEnums['Boolean']
}

export interface UsersFields_updatedAt_Update {
  __typename?: 'UsersFields_updatedAt_Update'
  permission: ScalarsEnums['Boolean']
}

export interface UsersReadAccess {
  __typename?: 'UsersReadAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface UsersReadDocAccess {
  __typename?: 'UsersReadDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface UsersUnlockAccess {
  __typename?: 'UsersUnlockAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface UsersUnlockDocAccess {
  __typename?: 'UsersUnlockDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface UsersUpdateAccess {
  __typename?: 'UsersUpdateAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface UsersUpdateDocAccess {
  __typename?: 'UsersUpdateDocAccess'
  permission: ScalarsEnums['Boolean']
  where?: Maybe<ScalarsEnums['JSONObject']>
}

export interface chatroomAccess {
  __typename?: 'chatroomAccess'
  create?: Maybe<ChatroomCreateAccess>
  delete?: Maybe<ChatroomDeleteAccess>
  fields?: Maybe<ChatroomFields>
  read?: Maybe<ChatroomReadAccess>
  update?: Maybe<ChatroomUpdateAccess>
}

export interface chatroomDocAccess {
  __typename?: 'chatroomDocAccess'
  create?: Maybe<ChatroomCreateDocAccess>
  delete?: Maybe<ChatroomDeleteDocAccess>
  fields?: Maybe<ChatroomDocAccessFields>
  read?: Maybe<ChatroomReadDocAccess>
  update?: Maybe<ChatroomUpdateDocAccess>
}

export interface itemsAccess {
  __typename?: 'itemsAccess'
  create?: Maybe<ItemsCreateAccess>
  delete?: Maybe<ItemsDeleteAccess>
  fields?: Maybe<ItemsFields>
  read?: Maybe<ItemsReadAccess>
  readVersions?: Maybe<ItemsReadVersionsAccess>
  update?: Maybe<ItemsUpdateAccess>
}

export interface itemsDocAccess {
  __typename?: 'itemsDocAccess'
  create?: Maybe<ItemsCreateDocAccess>
  delete?: Maybe<ItemsDeleteDocAccess>
  fields?: Maybe<ItemsDocAccessFields>
  read?: Maybe<ItemsReadDocAccess>
  readVersions?: Maybe<ItemsReadVersionsDocAccess>
  update?: Maybe<ItemsUpdateDocAccess>
}

export interface mediasAccess {
  __typename?: 'mediasAccess'
  create?: Maybe<MediasCreateAccess>
  delete?: Maybe<MediasDeleteAccess>
  fields?: Maybe<MediasFields>
  read?: Maybe<MediasReadAccess>
  update?: Maybe<MediasUpdateAccess>
}

export interface mediasDocAccess {
  __typename?: 'mediasDocAccess'
  create?: Maybe<MediasCreateDocAccess>
  delete?: Maybe<MediasDeleteDocAccess>
  fields?: Maybe<MediasDocAccessFields>
  read?: Maybe<MediasReadDocAccess>
  update?: Maybe<MediasUpdateDocAccess>
}

export interface messageAccess {
  __typename?: 'messageAccess'
  create?: Maybe<MessageCreateAccess>
  delete?: Maybe<MessageDeleteAccess>
  fields?: Maybe<MessageFields>
  read?: Maybe<MessageReadAccess>
  update?: Maybe<MessageUpdateAccess>
}

export interface messageDocAccess {
  __typename?: 'messageDocAccess'
  create?: Maybe<MessageCreateDocAccess>
  delete?: Maybe<MessageDeleteDocAccess>
  fields?: Maybe<MessageDocAccessFields>
  read?: Maybe<MessageReadDocAccess>
  update?: Maybe<MessageUpdateDocAccess>
}

export interface Mutation {
  __typename?: 'Mutation'
  createChatroom: (
    args: {
      data: mutationChatroomInput
      draft?: Maybe<Scalars['Boolean']>
    }
  ) => Maybe<Chatroom>
  createItem: (args: { data: mutationItemInput; draft?: Maybe<Scalars['Boolean']> }) => Maybe<Item>
  createMedia: (
    args: {
      data: mutationMediaInput
      draft?: Maybe<Scalars['Boolean']>
    }
  ) => Maybe<Media>
  createMessage: (
    args: {
      data: mutationMessageInput
      draft?: Maybe<Scalars['Boolean']>
    }
  ) => Maybe<Message>
  createPayloadPreference: (
    args: {
      data: mutationPayloadPreferenceInput
      draft?: Maybe<Scalars['Boolean']>
    }
  ) => Maybe<PayloadPreference>
  createRenting: (
    args: {
      data: mutationRentingInput
      draft?: Maybe<Scalars['Boolean']>
    }
  ) => Maybe<Renting>
  createTag: (args: { data: mutationTagInput; draft?: Maybe<Scalars['Boolean']> }) => Maybe<Tag>
  createUser: (args: { data: mutationUserInput; draft?: Maybe<Scalars['Boolean']> }) => Maybe<User>
  deleteChatroom: (args: { id: Scalars['Int'] }) => Maybe<Chatroom>
  deleteItem: (args: { id: Scalars['Int'] }) => Maybe<Item>
  deleteMedia: (args: { id: Scalars['Int'] }) => Maybe<Media>
  deleteMessage: (args: { id: Scalars['Int'] }) => Maybe<Message>
  deletePayloadPreference: (args: { id: Scalars['Int'] }) => Maybe<PayloadPreference>
  deleteRenting: (args: { id: Scalars['Int'] }) => Maybe<Renting>
  deleteTag: (args: { id: Scalars['Int'] }) => Maybe<Tag>
  deleteUser: (args: { id: Scalars['Int'] }) => Maybe<User>
  forgotPasswordUser: (
    args: {
      disableEmail?: Maybe<Scalars['Boolean']>
      email: Scalars['String']
      expiration?: Maybe<Scalars['Int']>
    }
  ) => ScalarsEnums['Boolean']
  loginUser: (
    args?: {
      email?: Maybe<Scalars['String']>
      password?: Maybe<Scalars['String']>
    }
  ) => Maybe<usersLoginResult>
  logoutUser?: Maybe<ScalarsEnums['String']>
  refreshTokenUser: (args?: { token?: Maybe<Scalars['String']> }) => Maybe<usersRefreshedUser>
  resetPasswordUser: (
    args?: {
      password?: Maybe<Scalars['String']>
      token?: Maybe<Scalars['String']>
    }
  ) => Maybe<usersResetPassword>
  restoreVersionItem: (args?: { id?: Maybe<Scalars['Int']> }) => Maybe<Item>
  unlockUser: (args: { email: Scalars['String'] }) => ScalarsEnums['Boolean']
  updateChatroom: (
    args: {
      autosave?: Maybe<Scalars['Boolean']>
      data: mutationChatroomUpdateInput
      draft?: Maybe<Scalars['Boolean']>
      id: Scalars['Int']
    }
  ) => Maybe<Chatroom>
  updateItem: (
    args: {
      autosave?: Maybe<Scalars['Boolean']>
      data: mutationItemUpdateInput
      draft?: Maybe<Scalars['Boolean']>
      id: Scalars['Int']
    }
  ) => Maybe<Item>
  updateMedia: (
    args: {
      autosave?: Maybe<Scalars['Boolean']>
      data: mutationMediaUpdateInput
      draft?: Maybe<Scalars['Boolean']>
      id: Scalars['Int']
    }
  ) => Maybe<Media>
  updateMessage: (
    args: {
      autosave?: Maybe<Scalars['Boolean']>
      data: mutationMessageUpdateInput
      draft?: Maybe<Scalars['Boolean']>
      id: Scalars['Int']
    }
  ) => Maybe<Message>
  updatePayloadPreference: (
    args: {
      autosave?: Maybe<Scalars['Boolean']>
      data: mutationPayloadPreferenceUpdateInput
      draft?: Maybe<Scalars['Boolean']>
      id: Scalars['Int']
    }
  ) => Maybe<PayloadPreference>
  updateRenting: (
    args: {
      autosave?: Maybe<Scalars['Boolean']>
      data: mutationRentingUpdateInput
      draft?: Maybe<Scalars['Boolean']>
      id: Scalars['Int']
    }
  ) => Maybe<Renting>
  updateTag: (
    args: {
      autosave?: Maybe<Scalars['Boolean']>
      data: mutationTagUpdateInput
      draft?: Maybe<Scalars['Boolean']>
      id: Scalars['Int']
    }
  ) => Maybe<Tag>
  updateUser: (
    args: {
      autosave?: Maybe<Scalars['Boolean']>
      data: mutationUserUpdateInput
      draft?: Maybe<Scalars['Boolean']>
      id: Scalars['Int']
    }
  ) => Maybe<User>
  verifyEmailUser: (args?: { token?: Maybe<Scalars['String']> }) => Maybe<ScalarsEnums['Boolean']>
}

export interface payload_preferencesAccess {
  __typename?: 'payload_preferencesAccess'
  create?: Maybe<PayloadPreferencesCreateAccess>
  delete?: Maybe<PayloadPreferencesDeleteAccess>
  fields?: Maybe<PayloadPreferencesFields>
  read?: Maybe<PayloadPreferencesReadAccess>
  update?: Maybe<PayloadPreferencesUpdateAccess>
}

export interface payload_preferencesDocAccess {
  __typename?: 'payload_preferencesDocAccess'
  create?: Maybe<PayloadPreferencesCreateDocAccess>
  delete?: Maybe<PayloadPreferencesDeleteDocAccess>
  fields?: Maybe<PayloadPreferencesDocAccessFields>
  read?: Maybe<PayloadPreferencesReadDocAccess>
  update?: Maybe<PayloadPreferencesUpdateDocAccess>
}

export interface Query {
  __typename?: 'Query'
  Access?: Maybe<Access>
  Chatroom: (args: { draft?: Maybe<Scalars['Boolean']>; id: Scalars['Int'] }) => Maybe<Chatroom>
  Chatrooms: (
    args?: {
      draft?: Maybe<Scalars['Boolean']>
      limit?: Maybe<Scalars['Int']>
      page?: Maybe<Scalars['Int']>
      sort?: Maybe<Scalars['String']>
      where?: Maybe<Chatroom_where>
    }
  ) => Maybe<Chatrooms>
  Item: (args: { draft?: Maybe<Scalars['Boolean']>; id: Scalars['Int'] }) => Maybe<Item>
  Items: (
    args?: {
      draft?: Maybe<Scalars['Boolean']>
      limit?: Maybe<Scalars['Int']>
      page?: Maybe<Scalars['Int']>
      sort?: Maybe<Scalars['String']>
      where?: Maybe<Item_where>
    }
  ) => Maybe<Items>
  Media: (args: { draft?: Maybe<Scalars['Boolean']>; id: Scalars['Int'] }) => Maybe<Media>
  Medias: (
    args?: {
      draft?: Maybe<Scalars['Boolean']>
      limit?: Maybe<Scalars['Int']>
      page?: Maybe<Scalars['Int']>
      sort?: Maybe<Scalars['String']>
      where?: Maybe<Media_where>
    }
  ) => Maybe<Medias>
  Message: (args: { draft?: Maybe<Scalars['Boolean']>; id: Scalars['Int'] }) => Maybe<Message>
  Messages: (
    args?: {
      draft?: Maybe<Scalars['Boolean']>
      limit?: Maybe<Scalars['Int']>
      page?: Maybe<Scalars['Int']>
      sort?: Maybe<Scalars['String']>
      where?: Maybe<Message_where>
    }
  ) => Maybe<Messages>
  PayloadPreference: (
    args: {
      draft?: Maybe<Scalars['Boolean']>
      id: Scalars['Int']
    }
  ) => Maybe<PayloadPreference>
  PayloadPreferences: (
    args?: {
      draft?: Maybe<Scalars['Boolean']>
      limit?: Maybe<Scalars['Int']>
      page?: Maybe<Scalars['Int']>
      sort?: Maybe<Scalars['String']>
      where?: Maybe<PayloadPreference_where>
    }
  ) => Maybe<PayloadPreferences>
  Renting: (args: { draft?: Maybe<Scalars['Boolean']>; id: Scalars['Int'] }) => Maybe<Renting>
  Rentings: (
    args?: {
      draft?: Maybe<Scalars['Boolean']>
      limit?: Maybe<Scalars['Int']>
      page?: Maybe<Scalars['Int']>
      sort?: Maybe<Scalars['String']>
      where?: Maybe<Renting_where>
    }
  ) => Maybe<Rentings>
  Tag: (args: { draft?: Maybe<Scalars['Boolean']>; id: Scalars['Int'] }) => Maybe<Tag>
  Tags: (
    args?: {
      draft?: Maybe<Scalars['Boolean']>
      limit?: Maybe<Scalars['Int']>
      page?: Maybe<Scalars['Int']>
      sort?: Maybe<Scalars['String']>
      where?: Maybe<Tag_where>
    }
  ) => Maybe<Tags>
  User: (args: { draft?: Maybe<Scalars['Boolean']>; id: Scalars['Int'] }) => Maybe<User>
  Users: (
    args?: {
      draft?: Maybe<Scalars['Boolean']>
      limit?: Maybe<Scalars['Int']>
      page?: Maybe<Scalars['Int']>
      sort?: Maybe<Scalars['String']>
      where?: Maybe<User_where>
    }
  ) => Maybe<Users>
  docAccessChatroom: (args: { id: Scalars['Int'] }) => Maybe<chatroomDocAccess>
  docAccessItem: (args: { id: Scalars['Int'] }) => Maybe<itemsDocAccess>
  docAccessMedia: (args: { id: Scalars['Int'] }) => Maybe<mediasDocAccess>
  docAccessMessage: (args: { id: Scalars['Int'] }) => Maybe<messageDocAccess>
  docAccessPayloadPreference: (args: { id: Scalars['Int'] }) => Maybe<payload_preferencesDocAccess>
  docAccessRenting: (args: { id: Scalars['Int'] }) => Maybe<rentingDocAccess>
  docAccessTag: (args: { id: Scalars['Int'] }) => Maybe<tagsDocAccess>
  docAccessUser: (args: { id: Scalars['Int'] }) => Maybe<usersDocAccess>
  initializedUser?: Maybe<ScalarsEnums['Boolean']>
  meUser?: Maybe<usersMe>
  versionItem: (args?: { id?: Maybe<Scalars['Int']> }) => Maybe<ItemVersion>
  versionsItems: (
    args?: {
      limit?: Maybe<Scalars['Int']>
      page?: Maybe<Scalars['Int']>
      sort?: Maybe<Scalars['String']>
      where?: Maybe<versionsItem_where>
    }
  ) => Maybe<versionsItems>
}

export interface rentingAccess {
  __typename?: 'rentingAccess'
  create?: Maybe<RentingCreateAccess>
  delete?: Maybe<RentingDeleteAccess>
  fields?: Maybe<RentingFields>
  read?: Maybe<RentingReadAccess>
  update?: Maybe<RentingUpdateAccess>
}

export interface rentingDocAccess {
  __typename?: 'rentingDocAccess'
  create?: Maybe<RentingCreateDocAccess>
  delete?: Maybe<RentingDeleteDocAccess>
  fields?: Maybe<RentingDocAccessFields>
  read?: Maybe<RentingReadDocAccess>
  update?: Maybe<RentingUpdateDocAccess>
}

export interface Subscription {
  __typename?: 'Subscription'
}

export interface tagsAccess {
  __typename?: 'tagsAccess'
  create?: Maybe<TagsCreateAccess>
  delete?: Maybe<TagsDeleteAccess>
  fields?: Maybe<TagsFields>
  read?: Maybe<TagsReadAccess>
  update?: Maybe<TagsUpdateAccess>
}

export interface tagsDocAccess {
  __typename?: 'tagsDocAccess'
  create?: Maybe<TagsCreateDocAccess>
  delete?: Maybe<TagsDeleteDocAccess>
  fields?: Maybe<TagsDocAccessFields>
  read?: Maybe<TagsReadDocAccess>
  update?: Maybe<TagsUpdateDocAccess>
}

export interface usersAccess {
  __typename?: 'usersAccess'
  create?: Maybe<UsersCreateAccess>
  delete?: Maybe<UsersDeleteAccess>
  fields?: Maybe<UsersFields>
  read?: Maybe<UsersReadAccess>
  unlock?: Maybe<UsersUnlockAccess>
  update?: Maybe<UsersUpdateAccess>
}

export interface usersDocAccess {
  __typename?: 'usersDocAccess'
  create?: Maybe<UsersCreateDocAccess>
  delete?: Maybe<UsersDeleteDocAccess>
  fields?: Maybe<UsersDocAccessFields>
  read?: Maybe<UsersReadDocAccess>
  unlock?: Maybe<UsersUnlockDocAccess>
  update?: Maybe<UsersUpdateDocAccess>
}

export interface usersJWT {
  __typename?: 'usersJWT'
  collection: ScalarsEnums['String']
  email: ScalarsEnums['EmailAddress']
  roles: Array<ScalarsEnums['usersJWT_roles']>
}

export interface usersLoginResult {
  __typename?: 'usersLoginResult'
  exp?: Maybe<ScalarsEnums['Int']>
  token?: Maybe<ScalarsEnums['String']>
  user?: Maybe<User>
}

export interface usersMe {
  __typename?: 'usersMe'
  collection?: Maybe<ScalarsEnums['String']>
  exp?: Maybe<ScalarsEnums['Int']>
  token?: Maybe<ScalarsEnums['String']>
  user?: Maybe<User>
}

export interface usersRefreshedUser {
  __typename?: 'usersRefreshedUser'
  exp?: Maybe<ScalarsEnums['Int']>
  refreshedToken?: Maybe<ScalarsEnums['String']>
  user?: Maybe<usersJWT>
}

export interface usersResetPassword {
  __typename?: 'usersResetPassword'
  token?: Maybe<ScalarsEnums['String']>
  user?: Maybe<User>
}

export interface versionsItems {
  __typename?: 'versionsItems'
  docs?: Maybe<Array<Maybe<ItemVersion>>>
  hasNextPage?: Maybe<ScalarsEnums['Boolean']>
  hasPrevPage?: Maybe<ScalarsEnums['Boolean']>
  limit?: Maybe<ScalarsEnums['Int']>
  nextPage?: Maybe<ScalarsEnums['Int']>
  offset?: Maybe<ScalarsEnums['Int']>
  page?: Maybe<ScalarsEnums['Int']>
  pagingCounter?: Maybe<ScalarsEnums['Int']>
  prevPage?: Maybe<ScalarsEnums['Int']>
  totalDocs?: Maybe<ScalarsEnums['Int']>
  totalPages?: Maybe<ScalarsEnums['Int']>
}

export interface $PayloadPreference_User {
  User?: User
}

export interface GeneratedSchema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined
}

export interface ScalarsEnums extends MakeNullable<Scalars> {
  ItemUpdate__status_MutationInput: ItemUpdate__status_MutationInput | undefined
  ItemUpdate_periodType_MutationInput: ItemUpdate_periodType_MutationInput | undefined
  ItemUpdate_rentingStatus_MutationInput: ItemUpdate_rentingStatus_MutationInput | undefined
  ItemVersion_Version__status: ItemVersion_Version__status | undefined
  ItemVersion_Version_periodType: ItemVersion_Version_periodType | undefined
  ItemVersion_Version_rentingStatus: ItemVersion_Version_rentingStatus | undefined
  Item__status: Item__status | undefined
  Item__status_Input: Item__status_Input | undefined
  Item__status_MutationInput: Item__status_MutationInput | undefined
  Item_periodType: Item_periodType | undefined
  Item_periodType_Input: Item_periodType_Input | undefined
  Item_periodType_MutationInput: Item_periodType_MutationInput | undefined
  Item_rentingStatus: Item_rentingStatus | undefined
  Item_rentingStatus_Input: Item_rentingStatus_Input | undefined
  Item_rentingStatus_MutationInput: Item_rentingStatus_MutationInput | undefined
  PayloadPreferenceUpdate_UserRelationshipInputRelationTo:
    | PayloadPreferenceUpdate_UserRelationshipInputRelationTo
    | undefined
  PayloadPreference_UserRelationshipInputRelationTo:
    | PayloadPreference_UserRelationshipInputRelationTo
    | undefined
  PayloadPreference_User_RelationTo: PayloadPreference_User_RelationTo | undefined
  PayloadPreference_user_Relation_RelationTo: PayloadPreference_user_Relation_RelationTo | undefined
  RentingUpdate_status_MutationInput: RentingUpdate_status_MutationInput | undefined
  Renting_status: Renting_status | undefined
  Renting_status_Input: Renting_status_Input | undefined
  Renting_status_MutationInput: Renting_status_MutationInput | undefined
  UserUpdate_roles_MutationInput: UserUpdate_roles_MutationInput | undefined
  User_roles: User_roles | undefined
  User_roles_Input: User_roles_Input | undefined
  User_roles_MutationInput: User_roles_MutationInput | undefined
  usersJWT_roles: usersJWT_roles | undefined
  versionsItem_version___status_Input: versionsItem_version___status_Input | undefined
  versionsItem_version__periodType_Input: versionsItem_version__periodType_Input | undefined
  versionsItem_version__rentingStatus_Input: versionsItem_version__rentingStatus_Input | undefined
}
