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

export enum ItemUpdate__status_MutationInput {
  draft = 'draft',
  published = 'published',
}

export interface ItemVersion_Version_Image_alt_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface ItemVersion_Version_Image_createdAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface ItemVersion_Version_Image_filename_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface ItemVersion_Version_Image_filesize_operator {
  equals?: InputMaybe<Scalars['Float']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Float']>
  greater_than_equal?: InputMaybe<Scalars['Float']>
  less_than?: InputMaybe<Scalars['Float']>
  less_than_equal?: InputMaybe<Scalars['Float']>
  not_equals?: InputMaybe<Scalars['Float']>
}

export interface ItemVersion_Version_Image_height_operator {
  equals?: InputMaybe<Scalars['Float']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Float']>
  greater_than_equal?: InputMaybe<Scalars['Float']>
  less_than?: InputMaybe<Scalars['Float']>
  less_than_equal?: InputMaybe<Scalars['Float']>
  not_equals?: InputMaybe<Scalars['Float']>
}

export interface ItemVersion_Version_Image_id_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface ItemVersion_Version_Image_mimeType_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface ItemVersion_Version_Image_name_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface ItemVersion_Version_Image_updatedAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface ItemVersion_Version_Image_url_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface ItemVersion_Version_Image_where {
  AND?: InputMaybe<Array<InputMaybe<ItemVersion_Version_Image_where_and>>>
  OR?: InputMaybe<Array<InputMaybe<ItemVersion_Version_Image_where_or>>>
  alt?: InputMaybe<ItemVersion_Version_Image_alt_operator>
  createdAt?: InputMaybe<ItemVersion_Version_Image_createdAt_operator>
  filename?: InputMaybe<ItemVersion_Version_Image_filename_operator>
  filesize?: InputMaybe<ItemVersion_Version_Image_filesize_operator>
  height?: InputMaybe<ItemVersion_Version_Image_height_operator>
  id?: InputMaybe<ItemVersion_Version_Image_id_operator>
  mimeType?: InputMaybe<ItemVersion_Version_Image_mimeType_operator>
  name?: InputMaybe<ItemVersion_Version_Image_name_operator>
  updatedAt?: InputMaybe<ItemVersion_Version_Image_updatedAt_operator>
  url?: InputMaybe<ItemVersion_Version_Image_url_operator>
  width?: InputMaybe<ItemVersion_Version_Image_width_operator>
}

export interface ItemVersion_Version_Image_where_and {
  alt?: InputMaybe<ItemVersion_Version_Image_alt_operator>
  createdAt?: InputMaybe<ItemVersion_Version_Image_createdAt_operator>
  filename?: InputMaybe<ItemVersion_Version_Image_filename_operator>
  filesize?: InputMaybe<ItemVersion_Version_Image_filesize_operator>
  height?: InputMaybe<ItemVersion_Version_Image_height_operator>
  id?: InputMaybe<ItemVersion_Version_Image_id_operator>
  mimeType?: InputMaybe<ItemVersion_Version_Image_mimeType_operator>
  name?: InputMaybe<ItemVersion_Version_Image_name_operator>
  updatedAt?: InputMaybe<ItemVersion_Version_Image_updatedAt_operator>
  url?: InputMaybe<ItemVersion_Version_Image_url_operator>
  width?: InputMaybe<ItemVersion_Version_Image_width_operator>
}

export interface ItemVersion_Version_Image_where_or {
  alt?: InputMaybe<ItemVersion_Version_Image_alt_operator>
  createdAt?: InputMaybe<ItemVersion_Version_Image_createdAt_operator>
  filename?: InputMaybe<ItemVersion_Version_Image_filename_operator>
  filesize?: InputMaybe<ItemVersion_Version_Image_filesize_operator>
  height?: InputMaybe<ItemVersion_Version_Image_height_operator>
  id?: InputMaybe<ItemVersion_Version_Image_id_operator>
  mimeType?: InputMaybe<ItemVersion_Version_Image_mimeType_operator>
  name?: InputMaybe<ItemVersion_Version_Image_name_operator>
  updatedAt?: InputMaybe<ItemVersion_Version_Image_updatedAt_operator>
  url?: InputMaybe<ItemVersion_Version_Image_url_operator>
  width?: InputMaybe<ItemVersion_Version_Image_width_operator>
}

export interface ItemVersion_Version_Image_width_operator {
  equals?: InputMaybe<Scalars['Float']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Float']>
  greater_than_equal?: InputMaybe<Scalars['Float']>
  less_than?: InputMaybe<Scalars['Float']>
  less_than_equal?: InputMaybe<Scalars['Float']>
  not_equals?: InputMaybe<Scalars['Float']>
}

export enum ItemVersion_Version__status {
  draft = 'draft',
  published = 'published',
}

export interface Item_Image_alt_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Item_Image_createdAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Item_Image_filename_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Item_Image_filesize_operator {
  equals?: InputMaybe<Scalars['Float']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Float']>
  greater_than_equal?: InputMaybe<Scalars['Float']>
  less_than?: InputMaybe<Scalars['Float']>
  less_than_equal?: InputMaybe<Scalars['Float']>
  not_equals?: InputMaybe<Scalars['Float']>
}

export interface Item_Image_height_operator {
  equals?: InputMaybe<Scalars['Float']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Float']>
  greater_than_equal?: InputMaybe<Scalars['Float']>
  less_than?: InputMaybe<Scalars['Float']>
  less_than_equal?: InputMaybe<Scalars['Float']>
  not_equals?: InputMaybe<Scalars['Float']>
}

export interface Item_Image_id_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Item_Image_mimeType_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Item_Image_name_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Item_Image_updatedAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Item_Image_url_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Item_Image_where {
  AND?: InputMaybe<Array<InputMaybe<Item_Image_where_and>>>
  OR?: InputMaybe<Array<InputMaybe<Item_Image_where_or>>>
  alt?: InputMaybe<Item_Image_alt_operator>
  createdAt?: InputMaybe<Item_Image_createdAt_operator>
  filename?: InputMaybe<Item_Image_filename_operator>
  filesize?: InputMaybe<Item_Image_filesize_operator>
  height?: InputMaybe<Item_Image_height_operator>
  id?: InputMaybe<Item_Image_id_operator>
  mimeType?: InputMaybe<Item_Image_mimeType_operator>
  name?: InputMaybe<Item_Image_name_operator>
  updatedAt?: InputMaybe<Item_Image_updatedAt_operator>
  url?: InputMaybe<Item_Image_url_operator>
  width?: InputMaybe<Item_Image_width_operator>
}

export interface Item_Image_where_and {
  alt?: InputMaybe<Item_Image_alt_operator>
  createdAt?: InputMaybe<Item_Image_createdAt_operator>
  filename?: InputMaybe<Item_Image_filename_operator>
  filesize?: InputMaybe<Item_Image_filesize_operator>
  height?: InputMaybe<Item_Image_height_operator>
  id?: InputMaybe<Item_Image_id_operator>
  mimeType?: InputMaybe<Item_Image_mimeType_operator>
  name?: InputMaybe<Item_Image_name_operator>
  updatedAt?: InputMaybe<Item_Image_updatedAt_operator>
  url?: InputMaybe<Item_Image_url_operator>
  width?: InputMaybe<Item_Image_width_operator>
}

export interface Item_Image_where_or {
  alt?: InputMaybe<Item_Image_alt_operator>
  createdAt?: InputMaybe<Item_Image_createdAt_operator>
  filename?: InputMaybe<Item_Image_filename_operator>
  filesize?: InputMaybe<Item_Image_filesize_operator>
  height?: InputMaybe<Item_Image_height_operator>
  id?: InputMaybe<Item_Image_id_operator>
  mimeType?: InputMaybe<Item_Image_mimeType_operator>
  name?: InputMaybe<Item_Image_name_operator>
  updatedAt?: InputMaybe<Item_Image_updatedAt_operator>
  url?: InputMaybe<Item_Image_url_operator>
  width?: InputMaybe<Item_Image_width_operator>
}

export interface Item_Image_width_operator {
  equals?: InputMaybe<Scalars['Float']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Float']>
  greater_than_equal?: InputMaybe<Scalars['Float']>
  less_than?: InputMaybe<Scalars['Float']>
  less_than_equal?: InputMaybe<Scalars['Float']>
  not_equals?: InputMaybe<Scalars['Float']>
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

export interface Item_description_operator {
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
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
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  not_equals?: InputMaybe<Scalars['String']>
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
  createdAt?: InputMaybe<Item_createdAt_operator>
  description?: InputMaybe<Item_description_operator>
  id?: InputMaybe<Item_id_operator>
  image?: InputMaybe<Item_image_operator>
  name?: InputMaybe<Item_name_operator>
  tags?: InputMaybe<Item_tags_operator>
  updatedAt?: InputMaybe<Item_updatedAt_operator>
}

export interface Item_where_and {
  _status?: InputMaybe<Item__status_operator>
  createdAt?: InputMaybe<Item_createdAt_operator>
  description?: InputMaybe<Item_description_operator>
  id?: InputMaybe<Item_id_operator>
  image?: InputMaybe<Item_image_operator>
  name?: InputMaybe<Item_name_operator>
  tags?: InputMaybe<Item_tags_operator>
  updatedAt?: InputMaybe<Item_updatedAt_operator>
}

export interface Item_where_or {
  _status?: InputMaybe<Item__status_operator>
  createdAt?: InputMaybe<Item_createdAt_operator>
  description?: InputMaybe<Item_description_operator>
  id?: InputMaybe<Item_id_operator>
  image?: InputMaybe<Item_image_operator>
  name?: InputMaybe<Item_name_operator>
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

export interface User_id_operator {
  equals?: InputMaybe<Scalars['Int']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Int']>
  greater_than_equal?: InputMaybe<Scalars['Int']>
  less_than?: InputMaybe<Scalars['Int']>
  less_than_equal?: InputMaybe<Scalars['Int']>
  not_equals?: InputMaybe<Scalars['Int']>
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
  createdAt?: InputMaybe<User_createdAt_operator>
  email?: InputMaybe<User_email_operator>
  id?: InputMaybe<User_id_operator>
  phone?: InputMaybe<User_phone_operator>
  roles?: InputMaybe<User_roles_operator>
  updatedAt?: InputMaybe<User_updatedAt_operator>
}

export interface User_where_and {
  createdAt?: InputMaybe<User_createdAt_operator>
  email?: InputMaybe<User_email_operator>
  id?: InputMaybe<User_id_operator>
  phone?: InputMaybe<User_phone_operator>
  roles?: InputMaybe<User_roles_operator>
  updatedAt?: InputMaybe<User_updatedAt_operator>
}

export interface User_where_or {
  createdAt?: InputMaybe<User_createdAt_operator>
  email?: InputMaybe<User_email_operator>
  id?: InputMaybe<User_id_operator>
  phone?: InputMaybe<User_phone_operator>
  roles?: InputMaybe<User_roles_operator>
  updatedAt?: InputMaybe<User_updatedAt_operator>
}

export interface mutationItemInput {
  _status?: InputMaybe<Item__status_MutationInput>
  createdAt?: InputMaybe<Scalars['String']>
  createdBy?: InputMaybe<Scalars['Int']>
  description?: InputMaybe<Scalars['String']>
  image?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  tags?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  updatedAt?: InputMaybe<Scalars['String']>
}

export interface mutationItemUpdateInput {
  _status?: InputMaybe<ItemUpdate__status_MutationInput>
  createdAt?: InputMaybe<Scalars['String']>
  createdBy?: InputMaybe<Scalars['Int']>
  description?: InputMaybe<Scalars['String']>
  image?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
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
  name: Scalars['String']
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
  createdAt?: InputMaybe<Scalars['String']>
  email: Scalars['String']
  hash?: InputMaybe<Scalars['String']>
  lockUntil?: InputMaybe<Scalars['String']>
  loginAttempts?: InputMaybe<Scalars['Float']>
  password: Scalars['String']
  phone: Scalars['String']
  resetPasswordExpiration?: InputMaybe<Scalars['String']>
  resetPasswordToken?: InputMaybe<Scalars['String']>
  roles: Array<InputMaybe<User_roles_MutationInput>>
  salt?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['String']>
}

export interface mutationUserUpdateInput {
  createdAt?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  hash?: InputMaybe<Scalars['String']>
  lockUntil?: InputMaybe<Scalars['String']>
  loginAttempts?: InputMaybe<Scalars['Float']>
  password?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
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

export interface versionsItem_version__image_operator {
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  not_equals?: InputMaybe<Scalars['String']>
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
  version__createdAt?: InputMaybe<versionsItem_version__createdAt_operator>
  version__createdBy?: InputMaybe<versionsItem_version__createdBy_operator>
  version__description?: InputMaybe<versionsItem_version__description_operator>
  version__image?: InputMaybe<versionsItem_version__image_operator>
  version__name?: InputMaybe<versionsItem_version__name_operator>
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
  version__createdAt?: InputMaybe<versionsItem_version__createdAt_operator>
  version__createdBy?: InputMaybe<versionsItem_version__createdBy_operator>
  version__description?: InputMaybe<versionsItem_version__description_operator>
  version__image?: InputMaybe<versionsItem_version__image_operator>
  version__name?: InputMaybe<versionsItem_version__name_operator>
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
  version__createdAt?: InputMaybe<versionsItem_version__createdAt_operator>
  version__createdBy?: InputMaybe<versionsItem_version__createdBy_operator>
  version__description?: InputMaybe<versionsItem_version__description_operator>
  version__image?: InputMaybe<versionsItem_version__image_operator>
  version__name?: InputMaybe<versionsItem_version__name_operator>
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
  ItemVersion_Version__status: true,
  Item__status: true,
  Item__status_Input: true,
  Item__status_MutationInput: true,
  JSON: true,
  JSONObject: true,
  PayloadPreferenceUpdate_UserRelationshipInputRelationTo: true,
  PayloadPreference_UserRelationshipInputRelationTo: true,
  PayloadPreference_User_RelationTo: true,
  PayloadPreference_user_Relation_RelationTo: true,
  String: true,
  UserUpdate_roles_MutationInput: true,
  User_roles: true,
  User_roles_Input: true,
  User_roles_MutationInput: true,
  usersJWT_roles: true,
  versionsItem_version___status_Input: true,
}
export const generatedSchema = {
  Access: {
    __typename: { __type: 'String!' },
    canAccessAdmin: { __type: 'Boolean!' },
    items: { __type: 'itemsAccess' },
    medias: { __type: 'mediasAccess' },
    payload_preferences: { __type: 'payload_preferencesAccess' },
    tags: { __type: 'tagsAccess' },
    users: { __type: 'usersAccess' },
  },
  Item: {
    __typename: { __type: 'String!' },
    _status: { __type: 'Item__status' },
    createdAt: { __type: 'DateTime' },
    createdBy: { __type: 'User' },
    description: { __type: 'String' },
    id: { __type: 'Int' },
    image: { __type: 'Media', __args: { where: 'Item_Image_where' } },
    name: { __type: 'String' },
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
    createdAt: { __type: 'DateTime' },
    createdBy: { __type: 'User' },
    description: { __type: 'String' },
    image: { __type: 'Media', __args: { where: 'ItemVersion_Version_Image_where' } },
    name: { __type: 'String' },
    tags: { __type: '[Tag!]' },
    updatedAt: { __type: 'DateTime' },
  },
  ItemVersion_Version_Image_alt_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  ItemVersion_Version_Image_createdAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  ItemVersion_Version_Image_filename_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  ItemVersion_Version_Image_filesize_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  ItemVersion_Version_Image_height_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  ItemVersion_Version_Image_id_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  ItemVersion_Version_Image_mimeType_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  ItemVersion_Version_Image_name_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  ItemVersion_Version_Image_updatedAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  ItemVersion_Version_Image_url_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  ItemVersion_Version_Image_where: {
    AND: { __type: '[ItemVersion_Version_Image_where_and]' },
    OR: { __type: '[ItemVersion_Version_Image_where_or]' },
    alt: { __type: 'ItemVersion_Version_Image_alt_operator' },
    createdAt: { __type: 'ItemVersion_Version_Image_createdAt_operator' },
    filename: { __type: 'ItemVersion_Version_Image_filename_operator' },
    filesize: { __type: 'ItemVersion_Version_Image_filesize_operator' },
    height: { __type: 'ItemVersion_Version_Image_height_operator' },
    id: { __type: 'ItemVersion_Version_Image_id_operator' },
    mimeType: { __type: 'ItemVersion_Version_Image_mimeType_operator' },
    name: { __type: 'ItemVersion_Version_Image_name_operator' },
    updatedAt: { __type: 'ItemVersion_Version_Image_updatedAt_operator' },
    url: { __type: 'ItemVersion_Version_Image_url_operator' },
    width: { __type: 'ItemVersion_Version_Image_width_operator' },
  },
  ItemVersion_Version_Image_where_and: {
    alt: { __type: 'ItemVersion_Version_Image_alt_operator' },
    createdAt: { __type: 'ItemVersion_Version_Image_createdAt_operator' },
    filename: { __type: 'ItemVersion_Version_Image_filename_operator' },
    filesize: { __type: 'ItemVersion_Version_Image_filesize_operator' },
    height: { __type: 'ItemVersion_Version_Image_height_operator' },
    id: { __type: 'ItemVersion_Version_Image_id_operator' },
    mimeType: { __type: 'ItemVersion_Version_Image_mimeType_operator' },
    name: { __type: 'ItemVersion_Version_Image_name_operator' },
    updatedAt: { __type: 'ItemVersion_Version_Image_updatedAt_operator' },
    url: { __type: 'ItemVersion_Version_Image_url_operator' },
    width: { __type: 'ItemVersion_Version_Image_width_operator' },
  },
  ItemVersion_Version_Image_where_or: {
    alt: { __type: 'ItemVersion_Version_Image_alt_operator' },
    createdAt: { __type: 'ItemVersion_Version_Image_createdAt_operator' },
    filename: { __type: 'ItemVersion_Version_Image_filename_operator' },
    filesize: { __type: 'ItemVersion_Version_Image_filesize_operator' },
    height: { __type: 'ItemVersion_Version_Image_height_operator' },
    id: { __type: 'ItemVersion_Version_Image_id_operator' },
    mimeType: { __type: 'ItemVersion_Version_Image_mimeType_operator' },
    name: { __type: 'ItemVersion_Version_Image_name_operator' },
    updatedAt: { __type: 'ItemVersion_Version_Image_updatedAt_operator' },
    url: { __type: 'ItemVersion_Version_Image_url_operator' },
    width: { __type: 'ItemVersion_Version_Image_width_operator' },
  },
  ItemVersion_Version_Image_width_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Item_Image_alt_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Item_Image_createdAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  Item_Image_filename_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Item_Image_filesize_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Item_Image_height_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Item_Image_id_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Item_Image_mimeType_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Item_Image_name_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Item_Image_updatedAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  Item_Image_url_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Item_Image_where: {
    AND: { __type: '[Item_Image_where_and]' },
    OR: { __type: '[Item_Image_where_or]' },
    alt: { __type: 'Item_Image_alt_operator' },
    createdAt: { __type: 'Item_Image_createdAt_operator' },
    filename: { __type: 'Item_Image_filename_operator' },
    filesize: { __type: 'Item_Image_filesize_operator' },
    height: { __type: 'Item_Image_height_operator' },
    id: { __type: 'Item_Image_id_operator' },
    mimeType: { __type: 'Item_Image_mimeType_operator' },
    name: { __type: 'Item_Image_name_operator' },
    updatedAt: { __type: 'Item_Image_updatedAt_operator' },
    url: { __type: 'Item_Image_url_operator' },
    width: { __type: 'Item_Image_width_operator' },
  },
  Item_Image_where_and: {
    alt: { __type: 'Item_Image_alt_operator' },
    createdAt: { __type: 'Item_Image_createdAt_operator' },
    filename: { __type: 'Item_Image_filename_operator' },
    filesize: { __type: 'Item_Image_filesize_operator' },
    height: { __type: 'Item_Image_height_operator' },
    id: { __type: 'Item_Image_id_operator' },
    mimeType: { __type: 'Item_Image_mimeType_operator' },
    name: { __type: 'Item_Image_name_operator' },
    updatedAt: { __type: 'Item_Image_updatedAt_operator' },
    url: { __type: 'Item_Image_url_operator' },
    width: { __type: 'Item_Image_width_operator' },
  },
  Item_Image_where_or: {
    alt: { __type: 'Item_Image_alt_operator' },
    createdAt: { __type: 'Item_Image_createdAt_operator' },
    filename: { __type: 'Item_Image_filename_operator' },
    filesize: { __type: 'Item_Image_filesize_operator' },
    height: { __type: 'Item_Image_height_operator' },
    id: { __type: 'Item_Image_id_operator' },
    mimeType: { __type: 'Item_Image_mimeType_operator' },
    name: { __type: 'Item_Image_name_operator' },
    updatedAt: { __type: 'Item_Image_updatedAt_operator' },
    url: { __type: 'Item_Image_url_operator' },
    width: { __type: 'Item_Image_width_operator' },
  },
  Item_Image_width_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Item__status_operator: {
    all: { __type: '[Item__status_Input]' },
    equals: { __type: 'Item__status_Input' },
    exists: { __type: 'Boolean' },
    in: { __type: '[Item__status_Input]' },
    not_equals: { __type: 'Item__status_Input' },
    not_in: { __type: '[Item__status_Input]' },
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
  Item_description_operator: {
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
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
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    not_equals: { __type: 'String' },
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
    createdAt: { __type: 'Item_createdAt_operator' },
    description: { __type: 'Item_description_operator' },
    id: { __type: 'Item_id_operator' },
    image: { __type: 'Item_image_operator' },
    name: { __type: 'Item_name_operator' },
    tags: { __type: 'Item_tags_operator' },
    updatedAt: { __type: 'Item_updatedAt_operator' },
  },
  Item_where_and: {
    _status: { __type: 'Item__status_operator' },
    createdAt: { __type: 'Item_createdAt_operator' },
    description: { __type: 'Item_description_operator' },
    id: { __type: 'Item_id_operator' },
    image: { __type: 'Item_image_operator' },
    name: { __type: 'Item_name_operator' },
    tags: { __type: 'Item_tags_operator' },
    updatedAt: { __type: 'Item_updatedAt_operator' },
  },
  Item_where_or: {
    _status: { __type: 'Item__status_operator' },
    createdAt: { __type: 'Item_createdAt_operator' },
    description: { __type: 'Item_description_operator' },
    id: { __type: 'Item_id_operator' },
    image: { __type: 'Item_image_operator' },
    name: { __type: 'Item_name_operator' },
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
    createdAt: { __type: 'ItemsDocAccessFields_createdAt' },
    description: { __type: 'ItemsDocAccessFields_description' },
    image: { __type: 'ItemsDocAccessFields_image' },
    name: { __type: 'ItemsDocAccessFields_name' },
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
    createdAt: { __type: 'ItemsFields_createdAt' },
    description: { __type: 'ItemsFields_description' },
    image: { __type: 'ItemsFields_image' },
    name: { __type: 'ItemsFields_name' },
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
    name: { __type: 'String!' },
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
    createdAt: { __type: 'DateTime' },
    email: { __type: 'EmailAddress!' },
    hash: { __type: 'String' },
    id: { __type: 'Int' },
    lockUntil: { __type: 'DateTime' },
    loginAttempts: { __type: 'Float' },
    password: { __type: 'String!' },
    phone: { __type: 'String!' },
    resetPasswordExpiration: { __type: 'DateTime' },
    resetPasswordToken: { __type: 'String' },
    roles: { __type: '[User_roles!]!' },
    salt: { __type: 'String' },
    updatedAt: { __type: 'DateTime' },
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
  User_id_operator: {
    equals: { __type: 'Int' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Int' },
    greater_than_equal: { __type: 'Int' },
    less_than: { __type: 'Int' },
    less_than_equal: { __type: 'Int' },
    not_equals: { __type: 'Int' },
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
    createdAt: { __type: 'User_createdAt_operator' },
    email: { __type: 'User_email_operator' },
    id: { __type: 'User_id_operator' },
    phone: { __type: 'User_phone_operator' },
    roles: { __type: 'User_roles_operator' },
    updatedAt: { __type: 'User_updatedAt_operator' },
  },
  User_where_and: {
    createdAt: { __type: 'User_createdAt_operator' },
    email: { __type: 'User_email_operator' },
    id: { __type: 'User_id_operator' },
    phone: { __type: 'User_phone_operator' },
    roles: { __type: 'User_roles_operator' },
    updatedAt: { __type: 'User_updatedAt_operator' },
  },
  User_where_or: {
    createdAt: { __type: 'User_createdAt_operator' },
    email: { __type: 'User_email_operator' },
    id: { __type: 'User_id_operator' },
    phone: { __type: 'User_phone_operator' },
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
    createdAt: { __type: 'UsersDocAccessFields_createdAt' },
    email: { __type: 'UsersDocAccessFields_email' },
    password: { __type: 'UsersDocAccessFields_password' },
    phone: { __type: 'UsersDocAccessFields_phone' },
    roles: { __type: 'UsersDocAccessFields_roles' },
    updatedAt: { __type: 'UsersDocAccessFields_updatedAt' },
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
    createdAt: { __type: 'UsersFields_createdAt' },
    email: { __type: 'UsersFields_email' },
    password: { __type: 'UsersFields_password' },
    phone: { __type: 'UsersFields_phone' },
    roles: { __type: 'UsersFields_roles' },
    updatedAt: { __type: 'UsersFields_updatedAt' },
  },
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
  mutation: {
    __typename: { __type: 'String!' },
    createItem: { __type: 'Item', __args: { data: 'mutationItemInput!', draft: 'Boolean' } },
    createMedia: { __type: 'Media', __args: { data: 'mutationMediaInput!', draft: 'Boolean' } },
    createPayloadPreference: {
      __type: 'PayloadPreference',
      __args: { data: 'mutationPayloadPreferenceInput!', draft: 'Boolean' },
    },
    createTag: { __type: 'Tag', __args: { data: 'mutationTagInput!', draft: 'Boolean' } },
    createUser: { __type: 'User', __args: { data: 'mutationUserInput!', draft: 'Boolean' } },
    deleteItem: { __type: 'Item', __args: { id: 'Int!' } },
    deleteMedia: { __type: 'Media', __args: { id: 'Int!' } },
    deletePayloadPreference: { __type: 'PayloadPreference', __args: { id: 'Int!' } },
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
    updatePayloadPreference: {
      __type: 'PayloadPreference',
      __args: {
        autosave: 'Boolean',
        data: 'mutationPayloadPreferenceUpdateInput!',
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
  mutationItemInput: {
    _status: { __type: 'Item__status_MutationInput' },
    createdAt: { __type: 'String' },
    createdBy: { __type: 'Int' },
    description: { __type: 'String' },
    image: { __type: 'String' },
    name: { __type: 'String!' },
    tags: { __type: '[Int]' },
    updatedAt: { __type: 'String' },
  },
  mutationItemUpdateInput: {
    _status: { __type: 'ItemUpdate__status_MutationInput' },
    createdAt: { __type: 'String' },
    createdBy: { __type: 'Int' },
    description: { __type: 'String' },
    image: { __type: 'String' },
    name: { __type: 'String' },
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
    name: { __type: 'String!' },
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
    createdAt: { __type: 'String' },
    email: { __type: 'String!' },
    hash: { __type: 'String' },
    lockUntil: { __type: 'String' },
    loginAttempts: { __type: 'Float' },
    password: { __type: 'String!' },
    phone: { __type: 'String!' },
    resetPasswordExpiration: { __type: 'String' },
    resetPasswordToken: { __type: 'String' },
    roles: { __type: '[User_roles_MutationInput]!' },
    salt: { __type: 'String' },
    updatedAt: { __type: 'String' },
  },
  mutationUserUpdateInput: {
    createdAt: { __type: 'String' },
    email: { __type: 'String' },
    hash: { __type: 'String' },
    lockUntil: { __type: 'String' },
    loginAttempts: { __type: 'Float' },
    password: { __type: 'String' },
    phone: { __type: 'String' },
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
    docAccessItem: { __type: 'itemsDocAccess', __args: { id: 'Int!' } },
    docAccessMedia: { __type: 'mediasDocAccess', __args: { id: 'Int!' } },
    docAccessPayloadPreference: { __type: 'payload_preferencesDocAccess', __args: { id: 'Int!' } },
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
  versionsItem_version__image_operator: {
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    not_equals: { __type: 'String' },
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
    version__createdAt: { __type: 'versionsItem_version__createdAt_operator' },
    version__createdBy: { __type: 'versionsItem_version__createdBy_operator' },
    version__description: { __type: 'versionsItem_version__description_operator' },
    version__image: { __type: 'versionsItem_version__image_operator' },
    version__name: { __type: 'versionsItem_version__name_operator' },
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
    version__createdAt: { __type: 'versionsItem_version__createdAt_operator' },
    version__createdBy: { __type: 'versionsItem_version__createdBy_operator' },
    version__description: { __type: 'versionsItem_version__description_operator' },
    version__image: { __type: 'versionsItem_version__image_operator' },
    version__name: { __type: 'versionsItem_version__name_operator' },
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
    version__createdAt: { __type: 'versionsItem_version__createdAt_operator' },
    version__createdBy: { __type: 'versionsItem_version__createdBy_operator' },
    version__description: { __type: 'versionsItem_version__description_operator' },
    version__image: { __type: 'versionsItem_version__image_operator' },
    version__name: { __type: 'versionsItem_version__name_operator' },
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
  items?: Maybe<itemsAccess>
  medias?: Maybe<mediasAccess>
  payload_preferences?: Maybe<payload_preferencesAccess>
  tags?: Maybe<tagsAccess>
  users?: Maybe<usersAccess>
}

export interface Item {
  __typename?: 'Item'
  _status?: Maybe<ScalarsEnums['Item__status']>
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  createdBy?: Maybe<User>
  description?: Maybe<ScalarsEnums['String']>
  id?: Maybe<ScalarsEnums['Int']>
  image: (args?: { where?: Maybe<Item_Image_where> }) => Maybe<Media>
  name?: Maybe<ScalarsEnums['String']>
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
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  createdBy?: Maybe<User>
  description?: Maybe<ScalarsEnums['String']>
  image: (args?: { where?: Maybe<ItemVersion_Version_Image_where> }) => Maybe<Media>
  name?: Maybe<ScalarsEnums['String']>
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
  createdAt?: Maybe<ItemsDocAccessFields_createdAt>
  description?: Maybe<ItemsDocAccessFields_description>
  image?: Maybe<ItemsDocAccessFields_image>
  name?: Maybe<ItemsDocAccessFields_name>
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
  createdAt?: Maybe<ItemsFields_createdAt>
  description?: Maybe<ItemsFields_description>
  image?: Maybe<ItemsFields_image>
  name?: Maybe<ItemsFields_name>
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
  name: ScalarsEnums['String']
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
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  email: ScalarsEnums['EmailAddress']
  hash?: Maybe<ScalarsEnums['String']>
  id?: Maybe<ScalarsEnums['Int']>
  lockUntil?: Maybe<ScalarsEnums['DateTime']>
  loginAttempts?: Maybe<ScalarsEnums['Float']>
  password: ScalarsEnums['String']
  phone: ScalarsEnums['String']
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
  createdAt?: Maybe<UsersDocAccessFields_createdAt>
  email?: Maybe<UsersDocAccessFields_email>
  password?: Maybe<UsersDocAccessFields_password>
  phone?: Maybe<UsersDocAccessFields_phone>
  roles?: Maybe<UsersDocAccessFields_roles>
  updatedAt?: Maybe<UsersDocAccessFields_updatedAt>
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
  createdAt?: Maybe<UsersFields_createdAt>
  email?: Maybe<UsersFields_email>
  password?: Maybe<UsersFields_password>
  phone?: Maybe<UsersFields_phone>
  roles?: Maybe<UsersFields_roles>
  updatedAt?: Maybe<UsersFields_updatedAt>
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

export interface Mutation {
  __typename?: 'Mutation'
  createItem: (args: { data: mutationItemInput; draft?: Maybe<Scalars['Boolean']> }) => Maybe<Item>
  createMedia: (
    args: {
      data: mutationMediaInput
      draft?: Maybe<Scalars['Boolean']>
    }
  ) => Maybe<Media>
  createPayloadPreference: (
    args: {
      data: mutationPayloadPreferenceInput
      draft?: Maybe<Scalars['Boolean']>
    }
  ) => Maybe<PayloadPreference>
  createTag: (args: { data: mutationTagInput; draft?: Maybe<Scalars['Boolean']> }) => Maybe<Tag>
  createUser: (args: { data: mutationUserInput; draft?: Maybe<Scalars['Boolean']> }) => Maybe<User>
  deleteItem: (args: { id: Scalars['Int'] }) => Maybe<Item>
  deleteMedia: (args: { id: Scalars['Int'] }) => Maybe<Media>
  deletePayloadPreference: (args: { id: Scalars['Int'] }) => Maybe<PayloadPreference>
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
  updatePayloadPreference: (
    args: {
      autosave?: Maybe<Scalars['Boolean']>
      data: mutationPayloadPreferenceUpdateInput
      draft?: Maybe<Scalars['Boolean']>
      id: Scalars['Int']
    }
  ) => Maybe<PayloadPreference>
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
  docAccessItem: (args: { id: Scalars['Int'] }) => Maybe<itemsDocAccess>
  docAccessMedia: (args: { id: Scalars['Int'] }) => Maybe<mediasDocAccess>
  docAccessPayloadPreference: (args: { id: Scalars['Int'] }) => Maybe<payload_preferencesDocAccess>
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
  ItemVersion_Version__status: ItemVersion_Version__status | undefined
  Item__status: Item__status | undefined
  Item__status_Input: Item__status_Input | undefined
  Item__status_MutationInput: Item__status_MutationInput | undefined
  PayloadPreferenceUpdate_UserRelationshipInputRelationTo:
    | PayloadPreferenceUpdate_UserRelationshipInputRelationTo
    | undefined
  PayloadPreference_UserRelationshipInputRelationTo:
    | PayloadPreference_UserRelationshipInputRelationTo
    | undefined
  PayloadPreference_User_RelationTo: PayloadPreference_User_RelationTo | undefined
  PayloadPreference_user_Relation_RelationTo: PayloadPreference_user_Relation_RelationTo | undefined
  UserUpdate_roles_MutationInput: UserUpdate_roles_MutationInput | undefined
  User_roles: User_roles | undefined
  User_roles_Input: User_roles_Input | undefined
  User_roles_MutationInput: User_roles_MutationInput | undefined
  usersJWT_roles: usersJWT_roles | undefined
  versionsItem_version___status_Input: versionsItem_version___status_Input | undefined
}
