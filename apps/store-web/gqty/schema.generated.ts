/**
 * GQty AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { SchemaUnionsKey } from "gqty";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: string;
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
}

export interface PayloadPreferenceUpdate_UserRelationshipInput {
  relationTo?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars["JSON"]>;
}

export enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
  users = "users",
}

export interface PayloadPreference_UserRelationshipInput {
  relationTo?: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars["JSON"]>;
}

export enum PayloadPreference_UserRelationshipInputRelationTo {
  users = "users",
}

export enum PayloadPreference_User_RelationTo {
  users = "users",
}

export interface PayloadPreference_createdAt_operator {
  equals?: InputMaybe<Scalars["DateTime"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["DateTime"]>;
  greater_than_equal?: InputMaybe<Scalars["DateTime"]>;
  less_than?: InputMaybe<Scalars["DateTime"]>;
  less_than_equal?: InputMaybe<Scalars["DateTime"]>;
  like?: InputMaybe<Scalars["DateTime"]>;
  not_equals?: InputMaybe<Scalars["DateTime"]>;
}

export interface PayloadPreference_id_operator {
  equals?: InputMaybe<Scalars["Int"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["Int"]>;
  greater_than_equal?: InputMaybe<Scalars["Int"]>;
  less_than?: InputMaybe<Scalars["Int"]>;
  less_than_equal?: InputMaybe<Scalars["Int"]>;
  not_equals?: InputMaybe<Scalars["Int"]>;
}

export interface PayloadPreference_key_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contains?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  like?: InputMaybe<Scalars["String"]>;
  not_equals?: InputMaybe<Scalars["String"]>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

export interface PayloadPreference_updatedAt_operator {
  equals?: InputMaybe<Scalars["DateTime"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["DateTime"]>;
  greater_than_equal?: InputMaybe<Scalars["DateTime"]>;
  less_than?: InputMaybe<Scalars["DateTime"]>;
  less_than_equal?: InputMaybe<Scalars["DateTime"]>;
  like?: InputMaybe<Scalars["DateTime"]>;
  not_equals?: InputMaybe<Scalars["DateTime"]>;
}

export interface PayloadPreference_user_Relation {
  relationTo?: InputMaybe<PayloadPreference_user_Relation_RelationTo>;
  value?: InputMaybe<Scalars["JSON"]>;
}

export enum PayloadPreference_user_Relation_RelationTo {
  users = "users",
}

export interface PayloadPreference_value_operator {
  contains?: InputMaybe<Scalars["JSON"]>;
  equals?: InputMaybe<Scalars["JSON"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  intersects?: InputMaybe<Scalars["JSON"]>;
  like?: InputMaybe<Scalars["JSON"]>;
  not_equals?: InputMaybe<Scalars["JSON"]>;
  within?: InputMaybe<Scalars["JSON"]>;
}

export interface PayloadPreference_where {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_where_or>>>;
  createdAt?: InputMaybe<PayloadPreference_createdAt_operator>;
  id?: InputMaybe<PayloadPreference_id_operator>;
  key?: InputMaybe<PayloadPreference_key_operator>;
  updatedAt?: InputMaybe<PayloadPreference_updatedAt_operator>;
  user?: InputMaybe<PayloadPreference_user_Relation>;
  value?: InputMaybe<PayloadPreference_value_operator>;
}

export interface PayloadPreference_where_and {
  createdAt?: InputMaybe<PayloadPreference_createdAt_operator>;
  id?: InputMaybe<PayloadPreference_id_operator>;
  key?: InputMaybe<PayloadPreference_key_operator>;
  updatedAt?: InputMaybe<PayloadPreference_updatedAt_operator>;
  user?: InputMaybe<PayloadPreference_user_Relation>;
  value?: InputMaybe<PayloadPreference_value_operator>;
}

export interface PayloadPreference_where_or {
  createdAt?: InputMaybe<PayloadPreference_createdAt_operator>;
  id?: InputMaybe<PayloadPreference_id_operator>;
  key?: InputMaybe<PayloadPreference_key_operator>;
  updatedAt?: InputMaybe<PayloadPreference_updatedAt_operator>;
  user?: InputMaybe<PayloadPreference_user_Relation>;
  value?: InputMaybe<PayloadPreference_value_operator>;
}

export interface User_createdAt_operator {
  equals?: InputMaybe<Scalars["DateTime"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["DateTime"]>;
  greater_than_equal?: InputMaybe<Scalars["DateTime"]>;
  less_than?: InputMaybe<Scalars["DateTime"]>;
  less_than_equal?: InputMaybe<Scalars["DateTime"]>;
  like?: InputMaybe<Scalars["DateTime"]>;
  not_equals?: InputMaybe<Scalars["DateTime"]>;
}

export interface User_email_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars["EmailAddress"]>>>;
  contains?: InputMaybe<Scalars["EmailAddress"]>;
  equals?: InputMaybe<Scalars["EmailAddress"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["EmailAddress"]>>>;
  like?: InputMaybe<Scalars["EmailAddress"]>;
  not_equals?: InputMaybe<Scalars["EmailAddress"]>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars["EmailAddress"]>>>;
}

export interface User_id_operator {
  equals?: InputMaybe<Scalars["Int"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["Int"]>;
  greater_than_equal?: InputMaybe<Scalars["Int"]>;
  less_than?: InputMaybe<Scalars["Int"]>;
  less_than_equal?: InputMaybe<Scalars["Int"]>;
  not_equals?: InputMaybe<Scalars["Int"]>;
}

export interface User_updatedAt_operator {
  equals?: InputMaybe<Scalars["DateTime"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["DateTime"]>;
  greater_than_equal?: InputMaybe<Scalars["DateTime"]>;
  less_than?: InputMaybe<Scalars["DateTime"]>;
  less_than_equal?: InputMaybe<Scalars["DateTime"]>;
  like?: InputMaybe<Scalars["DateTime"]>;
  not_equals?: InputMaybe<Scalars["DateTime"]>;
}

export interface User_where {
  AND?: InputMaybe<Array<InputMaybe<User_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<User_where_or>>>;
  createdAt?: InputMaybe<User_createdAt_operator>;
  email?: InputMaybe<User_email_operator>;
  id?: InputMaybe<User_id_operator>;
  updatedAt?: InputMaybe<User_updatedAt_operator>;
}

export interface User_where_and {
  createdAt?: InputMaybe<User_createdAt_operator>;
  email?: InputMaybe<User_email_operator>;
  id?: InputMaybe<User_id_operator>;
  updatedAt?: InputMaybe<User_updatedAt_operator>;
}

export interface User_where_or {
  createdAt?: InputMaybe<User_createdAt_operator>;
  email?: InputMaybe<User_email_operator>;
  id?: InputMaybe<User_id_operator>;
  updatedAt?: InputMaybe<User_updatedAt_operator>;
}

export interface mutationPayloadPreferenceInput {
  createdAt?: InputMaybe<Scalars["String"]>;
  key?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<PayloadPreference_UserRelationshipInput>;
  value?: InputMaybe<Scalars["JSON"]>;
}

export interface mutationPayloadPreferenceUpdateInput {
  createdAt?: InputMaybe<Scalars["String"]>;
  key?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>;
  value?: InputMaybe<Scalars["JSON"]>;
}

export interface mutationUserInput {
  createdAt?: InputMaybe<Scalars["String"]>;
  email: Scalars["String"];
  hash?: InputMaybe<Scalars["String"]>;
  lockUntil?: InputMaybe<Scalars["String"]>;
  loginAttempts?: InputMaybe<Scalars["Float"]>;
  password: Scalars["String"];
  resetPasswordExpiration?: InputMaybe<Scalars["String"]>;
  resetPasswordToken?: InputMaybe<Scalars["String"]>;
  salt?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["String"]>;
}

export interface mutationUserUpdateInput {
  createdAt?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  hash?: InputMaybe<Scalars["String"]>;
  lockUntil?: InputMaybe<Scalars["String"]>;
  loginAttempts?: InputMaybe<Scalars["Float"]>;
  password?: InputMaybe<Scalars["String"]>;
  resetPasswordExpiration?: InputMaybe<Scalars["String"]>;
  resetPasswordToken?: InputMaybe<Scalars["String"]>;
  salt?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["String"]>;
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Boolean: true,
  DateTime: true,
  EmailAddress: true,
  Float: true,
  Int: true,
  JSON: true,
  JSONObject: true,
  PayloadPreferenceUpdate_UserRelationshipInputRelationTo: true,
  PayloadPreference_UserRelationshipInputRelationTo: true,
  PayloadPreference_User_RelationTo: true,
  PayloadPreference_user_Relation_RelationTo: true,
  String: true,
};
export const generatedSchema = {
  Access: {
    __typename: { __type: "String!" },
    canAccessAdmin: { __type: "Boolean!" },
    payload_preferences: { __type: "payload_preferencesAccess" },
    users: { __type: "usersAccess" },
  },
  PayloadPreference: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTime" },
    id: { __type: "Int" },
    key: { __type: "String" },
    updatedAt: { __type: "DateTime" },
    user: { __type: "PayloadPreference_User_Relationship!" },
    value: { __type: "JSON" },
  },
  PayloadPreferenceUpdate_UserRelationshipInput: {
    relationTo: {
      __type: "PayloadPreferenceUpdate_UserRelationshipInputRelationTo",
    },
    value: { __type: "JSON" },
  },
  PayloadPreference_User: {
    __typename: { __type: "String!" },
    $on: { __type: "$PayloadPreference_User!" },
  },
  PayloadPreference_UserRelationshipInput: {
    relationTo: { __type: "PayloadPreference_UserRelationshipInputRelationTo" },
    value: { __type: "JSON" },
  },
  PayloadPreference_User_Relationship: {
    __typename: { __type: "String!" },
    relationTo: { __type: "PayloadPreference_User_RelationTo" },
    value: { __type: "PayloadPreference_User" },
  },
  PayloadPreference_createdAt_operator: {
    equals: { __type: "DateTime" },
    exists: { __type: "Boolean" },
    greater_than: { __type: "DateTime" },
    greater_than_equal: { __type: "DateTime" },
    less_than: { __type: "DateTime" },
    less_than_equal: { __type: "DateTime" },
    like: { __type: "DateTime" },
    not_equals: { __type: "DateTime" },
  },
  PayloadPreference_id_operator: {
    equals: { __type: "Int" },
    exists: { __type: "Boolean" },
    greater_than: { __type: "Int" },
    greater_than_equal: { __type: "Int" },
    less_than: { __type: "Int" },
    less_than_equal: { __type: "Int" },
    not_equals: { __type: "Int" },
  },
  PayloadPreference_key_operator: {
    all: { __type: "[String]" },
    contains: { __type: "String" },
    equals: { __type: "String" },
    exists: { __type: "Boolean" },
    in: { __type: "[String]" },
    like: { __type: "String" },
    not_equals: { __type: "String" },
    not_in: { __type: "[String]" },
  },
  PayloadPreference_updatedAt_operator: {
    equals: { __type: "DateTime" },
    exists: { __type: "Boolean" },
    greater_than: { __type: "DateTime" },
    greater_than_equal: { __type: "DateTime" },
    less_than: { __type: "DateTime" },
    less_than_equal: { __type: "DateTime" },
    like: { __type: "DateTime" },
    not_equals: { __type: "DateTime" },
  },
  PayloadPreference_user_Relation: {
    relationTo: { __type: "PayloadPreference_user_Relation_RelationTo" },
    value: { __type: "JSON" },
  },
  PayloadPreference_value_operator: {
    contains: { __type: "JSON" },
    equals: { __type: "JSON" },
    exists: { __type: "Boolean" },
    intersects: { __type: "JSON" },
    like: { __type: "JSON" },
    not_equals: { __type: "JSON" },
    within: { __type: "JSON" },
  },
  PayloadPreference_where: {
    AND: { __type: "[PayloadPreference_where_and]" },
    OR: { __type: "[PayloadPreference_where_or]" },
    createdAt: { __type: "PayloadPreference_createdAt_operator" },
    id: { __type: "PayloadPreference_id_operator" },
    key: { __type: "PayloadPreference_key_operator" },
    updatedAt: { __type: "PayloadPreference_updatedAt_operator" },
    user: { __type: "PayloadPreference_user_Relation" },
    value: { __type: "PayloadPreference_value_operator" },
  },
  PayloadPreference_where_and: {
    createdAt: { __type: "PayloadPreference_createdAt_operator" },
    id: { __type: "PayloadPreference_id_operator" },
    key: { __type: "PayloadPreference_key_operator" },
    updatedAt: { __type: "PayloadPreference_updatedAt_operator" },
    user: { __type: "PayloadPreference_user_Relation" },
    value: { __type: "PayloadPreference_value_operator" },
  },
  PayloadPreference_where_or: {
    createdAt: { __type: "PayloadPreference_createdAt_operator" },
    id: { __type: "PayloadPreference_id_operator" },
    key: { __type: "PayloadPreference_key_operator" },
    updatedAt: { __type: "PayloadPreference_updatedAt_operator" },
    user: { __type: "PayloadPreference_user_Relation" },
    value: { __type: "PayloadPreference_value_operator" },
  },
  PayloadPreferences: {
    __typename: { __type: "String!" },
    docs: { __type: "[PayloadPreference]" },
    hasNextPage: { __type: "Boolean" },
    hasPrevPage: { __type: "Boolean" },
    limit: { __type: "Int" },
    nextPage: { __type: "Int" },
    offset: { __type: "Int" },
    page: { __type: "Int" },
    pagingCounter: { __type: "Int" },
    prevPage: { __type: "Int" },
    totalDocs: { __type: "Int" },
    totalPages: { __type: "Int" },
  },
  PayloadPreferencesCreateAccess: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
    where: { __type: "JSONObject" },
  },
  PayloadPreferencesCreateDocAccess: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
    where: { __type: "JSONObject" },
  },
  PayloadPreferencesDeleteAccess: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
    where: { __type: "JSONObject" },
  },
  PayloadPreferencesDeleteDocAccess: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
    where: { __type: "JSONObject" },
  },
  PayloadPreferencesDocAccessFields: {
    __typename: { __type: "String!" },
    createdAt: { __type: "PayloadPreferencesDocAccessFields_createdAt" },
    key: { __type: "PayloadPreferencesDocAccessFields_key" },
    updatedAt: { __type: "PayloadPreferencesDocAccessFields_updatedAt" },
    user: { __type: "PayloadPreferencesDocAccessFields_user" },
    value: { __type: "PayloadPreferencesDocAccessFields_value" },
  },
  PayloadPreferencesDocAccessFields_createdAt: {
    __typename: { __type: "String!" },
    create: { __type: "PayloadPreferencesDocAccessFields_createdAt_Create" },
    delete: { __type: "PayloadPreferencesDocAccessFields_createdAt_Delete" },
    read: { __type: "PayloadPreferencesDocAccessFields_createdAt_Read" },
    update: { __type: "PayloadPreferencesDocAccessFields_createdAt_Update" },
  },
  PayloadPreferencesDocAccessFields_createdAt_Create: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesDocAccessFields_createdAt_Delete: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesDocAccessFields_createdAt_Read: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesDocAccessFields_createdAt_Update: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesDocAccessFields_key: {
    __typename: { __type: "String!" },
    create: { __type: "PayloadPreferencesDocAccessFields_key_Create" },
    delete: { __type: "PayloadPreferencesDocAccessFields_key_Delete" },
    read: { __type: "PayloadPreferencesDocAccessFields_key_Read" },
    update: { __type: "PayloadPreferencesDocAccessFields_key_Update" },
  },
  PayloadPreferencesDocAccessFields_key_Create: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesDocAccessFields_key_Delete: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesDocAccessFields_key_Read: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesDocAccessFields_key_Update: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesDocAccessFields_updatedAt: {
    __typename: { __type: "String!" },
    create: { __type: "PayloadPreferencesDocAccessFields_updatedAt_Create" },
    delete: { __type: "PayloadPreferencesDocAccessFields_updatedAt_Delete" },
    read: { __type: "PayloadPreferencesDocAccessFields_updatedAt_Read" },
    update: { __type: "PayloadPreferencesDocAccessFields_updatedAt_Update" },
  },
  PayloadPreferencesDocAccessFields_updatedAt_Create: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesDocAccessFields_updatedAt_Delete: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesDocAccessFields_updatedAt_Read: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesDocAccessFields_updatedAt_Update: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesDocAccessFields_user: {
    __typename: { __type: "String!" },
    create: { __type: "PayloadPreferencesDocAccessFields_user_Create" },
    delete: { __type: "PayloadPreferencesDocAccessFields_user_Delete" },
    read: { __type: "PayloadPreferencesDocAccessFields_user_Read" },
    update: { __type: "PayloadPreferencesDocAccessFields_user_Update" },
  },
  PayloadPreferencesDocAccessFields_user_Create: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesDocAccessFields_user_Delete: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesDocAccessFields_user_Read: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesDocAccessFields_user_Update: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesDocAccessFields_value: {
    __typename: { __type: "String!" },
    create: { __type: "PayloadPreferencesDocAccessFields_value_Create" },
    delete: { __type: "PayloadPreferencesDocAccessFields_value_Delete" },
    read: { __type: "PayloadPreferencesDocAccessFields_value_Read" },
    update: { __type: "PayloadPreferencesDocAccessFields_value_Update" },
  },
  PayloadPreferencesDocAccessFields_value_Create: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesDocAccessFields_value_Delete: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesDocAccessFields_value_Read: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesDocAccessFields_value_Update: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesFields: {
    __typename: { __type: "String!" },
    createdAt: { __type: "PayloadPreferencesFields_createdAt" },
    key: { __type: "PayloadPreferencesFields_key" },
    updatedAt: { __type: "PayloadPreferencesFields_updatedAt" },
    user: { __type: "PayloadPreferencesFields_user" },
    value: { __type: "PayloadPreferencesFields_value" },
  },
  PayloadPreferencesFields_createdAt: {
    __typename: { __type: "String!" },
    create: { __type: "PayloadPreferencesFields_createdAt_Create" },
    delete: { __type: "PayloadPreferencesFields_createdAt_Delete" },
    read: { __type: "PayloadPreferencesFields_createdAt_Read" },
    update: { __type: "PayloadPreferencesFields_createdAt_Update" },
  },
  PayloadPreferencesFields_createdAt_Create: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesFields_createdAt_Delete: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesFields_createdAt_Read: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesFields_createdAt_Update: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesFields_key: {
    __typename: { __type: "String!" },
    create: { __type: "PayloadPreferencesFields_key_Create" },
    delete: { __type: "PayloadPreferencesFields_key_Delete" },
    read: { __type: "PayloadPreferencesFields_key_Read" },
    update: { __type: "PayloadPreferencesFields_key_Update" },
  },
  PayloadPreferencesFields_key_Create: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesFields_key_Delete: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesFields_key_Read: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesFields_key_Update: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesFields_updatedAt: {
    __typename: { __type: "String!" },
    create: { __type: "PayloadPreferencesFields_updatedAt_Create" },
    delete: { __type: "PayloadPreferencesFields_updatedAt_Delete" },
    read: { __type: "PayloadPreferencesFields_updatedAt_Read" },
    update: { __type: "PayloadPreferencesFields_updatedAt_Update" },
  },
  PayloadPreferencesFields_updatedAt_Create: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesFields_updatedAt_Delete: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesFields_updatedAt_Read: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesFields_updatedAt_Update: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesFields_user: {
    __typename: { __type: "String!" },
    create: { __type: "PayloadPreferencesFields_user_Create" },
    delete: { __type: "PayloadPreferencesFields_user_Delete" },
    read: { __type: "PayloadPreferencesFields_user_Read" },
    update: { __type: "PayloadPreferencesFields_user_Update" },
  },
  PayloadPreferencesFields_user_Create: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesFields_user_Delete: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesFields_user_Read: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesFields_user_Update: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesFields_value: {
    __typename: { __type: "String!" },
    create: { __type: "PayloadPreferencesFields_value_Create" },
    delete: { __type: "PayloadPreferencesFields_value_Delete" },
    read: { __type: "PayloadPreferencesFields_value_Read" },
    update: { __type: "PayloadPreferencesFields_value_Update" },
  },
  PayloadPreferencesFields_value_Create: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesFields_value_Delete: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesFields_value_Read: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesFields_value_Update: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  PayloadPreferencesReadAccess: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
    where: { __type: "JSONObject" },
  },
  PayloadPreferencesReadDocAccess: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
    where: { __type: "JSONObject" },
  },
  PayloadPreferencesUpdateAccess: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
    where: { __type: "JSONObject" },
  },
  PayloadPreferencesUpdateDocAccess: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
    where: { __type: "JSONObject" },
  },
  User: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTime" },
    email: { __type: "EmailAddress!" },
    hash: { __type: "String" },
    id: { __type: "Int" },
    lockUntil: { __type: "DateTime" },
    loginAttempts: { __type: "Float" },
    password: { __type: "String!" },
    resetPasswordExpiration: { __type: "DateTime" },
    resetPasswordToken: { __type: "String" },
    salt: { __type: "String" },
    updatedAt: { __type: "DateTime" },
  },
  User_createdAt_operator: {
    equals: { __type: "DateTime" },
    exists: { __type: "Boolean" },
    greater_than: { __type: "DateTime" },
    greater_than_equal: { __type: "DateTime" },
    less_than: { __type: "DateTime" },
    less_than_equal: { __type: "DateTime" },
    like: { __type: "DateTime" },
    not_equals: { __type: "DateTime" },
  },
  User_email_operator: {
    all: { __type: "[EmailAddress]" },
    contains: { __type: "EmailAddress" },
    equals: { __type: "EmailAddress" },
    in: { __type: "[EmailAddress]" },
    like: { __type: "EmailAddress" },
    not_equals: { __type: "EmailAddress" },
    not_in: { __type: "[EmailAddress]" },
  },
  User_id_operator: {
    equals: { __type: "Int" },
    exists: { __type: "Boolean" },
    greater_than: { __type: "Int" },
    greater_than_equal: { __type: "Int" },
    less_than: { __type: "Int" },
    less_than_equal: { __type: "Int" },
    not_equals: { __type: "Int" },
  },
  User_updatedAt_operator: {
    equals: { __type: "DateTime" },
    exists: { __type: "Boolean" },
    greater_than: { __type: "DateTime" },
    greater_than_equal: { __type: "DateTime" },
    less_than: { __type: "DateTime" },
    less_than_equal: { __type: "DateTime" },
    like: { __type: "DateTime" },
    not_equals: { __type: "DateTime" },
  },
  User_where: {
    AND: { __type: "[User_where_and]" },
    OR: { __type: "[User_where_or]" },
    createdAt: { __type: "User_createdAt_operator" },
    email: { __type: "User_email_operator" },
    id: { __type: "User_id_operator" },
    updatedAt: { __type: "User_updatedAt_operator" },
  },
  User_where_and: {
    createdAt: { __type: "User_createdAt_operator" },
    email: { __type: "User_email_operator" },
    id: { __type: "User_id_operator" },
    updatedAt: { __type: "User_updatedAt_operator" },
  },
  User_where_or: {
    createdAt: { __type: "User_createdAt_operator" },
    email: { __type: "User_email_operator" },
    id: { __type: "User_id_operator" },
    updatedAt: { __type: "User_updatedAt_operator" },
  },
  Users: {
    __typename: { __type: "String!" },
    docs: { __type: "[User]" },
    hasNextPage: { __type: "Boolean" },
    hasPrevPage: { __type: "Boolean" },
    limit: { __type: "Int" },
    nextPage: { __type: "Int" },
    offset: { __type: "Int" },
    page: { __type: "Int" },
    pagingCounter: { __type: "Int" },
    prevPage: { __type: "Int" },
    totalDocs: { __type: "Int" },
    totalPages: { __type: "Int" },
  },
  UsersCreateAccess: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
    where: { __type: "JSONObject" },
  },
  UsersCreateDocAccess: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
    where: { __type: "JSONObject" },
  },
  UsersDeleteAccess: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
    where: { __type: "JSONObject" },
  },
  UsersDeleteDocAccess: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
    where: { __type: "JSONObject" },
  },
  UsersDocAccessFields: {
    __typename: { __type: "String!" },
    createdAt: { __type: "UsersDocAccessFields_createdAt" },
    email: { __type: "UsersDocAccessFields_email" },
    password: { __type: "UsersDocAccessFields_password" },
    updatedAt: { __type: "UsersDocAccessFields_updatedAt" },
  },
  UsersDocAccessFields_createdAt: {
    __typename: { __type: "String!" },
    create: { __type: "UsersDocAccessFields_createdAt_Create" },
    delete: { __type: "UsersDocAccessFields_createdAt_Delete" },
    read: { __type: "UsersDocAccessFields_createdAt_Read" },
    update: { __type: "UsersDocAccessFields_createdAt_Update" },
  },
  UsersDocAccessFields_createdAt_Create: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersDocAccessFields_createdAt_Delete: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersDocAccessFields_createdAt_Read: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersDocAccessFields_createdAt_Update: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersDocAccessFields_email: {
    __typename: { __type: "String!" },
    create: { __type: "UsersDocAccessFields_email_Create" },
    delete: { __type: "UsersDocAccessFields_email_Delete" },
    read: { __type: "UsersDocAccessFields_email_Read" },
    update: { __type: "UsersDocAccessFields_email_Update" },
  },
  UsersDocAccessFields_email_Create: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersDocAccessFields_email_Delete: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersDocAccessFields_email_Read: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersDocAccessFields_email_Update: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersDocAccessFields_password: {
    __typename: { __type: "String!" },
    create: { __type: "UsersDocAccessFields_password_Create" },
    delete: { __type: "UsersDocAccessFields_password_Delete" },
    read: { __type: "UsersDocAccessFields_password_Read" },
    update: { __type: "UsersDocAccessFields_password_Update" },
  },
  UsersDocAccessFields_password_Create: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersDocAccessFields_password_Delete: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersDocAccessFields_password_Read: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersDocAccessFields_password_Update: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersDocAccessFields_updatedAt: {
    __typename: { __type: "String!" },
    create: { __type: "UsersDocAccessFields_updatedAt_Create" },
    delete: { __type: "UsersDocAccessFields_updatedAt_Delete" },
    read: { __type: "UsersDocAccessFields_updatedAt_Read" },
    update: { __type: "UsersDocAccessFields_updatedAt_Update" },
  },
  UsersDocAccessFields_updatedAt_Create: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersDocAccessFields_updatedAt_Delete: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersDocAccessFields_updatedAt_Read: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersDocAccessFields_updatedAt_Update: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersFields: {
    __typename: { __type: "String!" },
    createdAt: { __type: "UsersFields_createdAt" },
    email: { __type: "UsersFields_email" },
    password: { __type: "UsersFields_password" },
    updatedAt: { __type: "UsersFields_updatedAt" },
  },
  UsersFields_createdAt: {
    __typename: { __type: "String!" },
    create: { __type: "UsersFields_createdAt_Create" },
    delete: { __type: "UsersFields_createdAt_Delete" },
    read: { __type: "UsersFields_createdAt_Read" },
    update: { __type: "UsersFields_createdAt_Update" },
  },
  UsersFields_createdAt_Create: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersFields_createdAt_Delete: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersFields_createdAt_Read: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersFields_createdAt_Update: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersFields_email: {
    __typename: { __type: "String!" },
    create: { __type: "UsersFields_email_Create" },
    delete: { __type: "UsersFields_email_Delete" },
    read: { __type: "UsersFields_email_Read" },
    update: { __type: "UsersFields_email_Update" },
  },
  UsersFields_email_Create: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersFields_email_Delete: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersFields_email_Read: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersFields_email_Update: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersFields_password: {
    __typename: { __type: "String!" },
    create: { __type: "UsersFields_password_Create" },
    delete: { __type: "UsersFields_password_Delete" },
    read: { __type: "UsersFields_password_Read" },
    update: { __type: "UsersFields_password_Update" },
  },
  UsersFields_password_Create: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersFields_password_Delete: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersFields_password_Read: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersFields_password_Update: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersFields_updatedAt: {
    __typename: { __type: "String!" },
    create: { __type: "UsersFields_updatedAt_Create" },
    delete: { __type: "UsersFields_updatedAt_Delete" },
    read: { __type: "UsersFields_updatedAt_Read" },
    update: { __type: "UsersFields_updatedAt_Update" },
  },
  UsersFields_updatedAt_Create: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersFields_updatedAt_Delete: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersFields_updatedAt_Read: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersFields_updatedAt_Update: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
  },
  UsersReadAccess: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
    where: { __type: "JSONObject" },
  },
  UsersReadDocAccess: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
    where: { __type: "JSONObject" },
  },
  UsersUnlockAccess: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
    where: { __type: "JSONObject" },
  },
  UsersUnlockDocAccess: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
    where: { __type: "JSONObject" },
  },
  UsersUpdateAccess: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
    where: { __type: "JSONObject" },
  },
  UsersUpdateDocAccess: {
    __typename: { __type: "String!" },
    permission: { __type: "Boolean!" },
    where: { __type: "JSONObject" },
  },
  mutation: {
    __typename: { __type: "String!" },
    createPayloadPreference: {
      __type: "PayloadPreference",
      __args: { data: "mutationPayloadPreferenceInput!", draft: "Boolean" },
    },
    createUser: {
      __type: "User",
      __args: { data: "mutationUserInput!", draft: "Boolean" },
    },
    deletePayloadPreference: {
      __type: "PayloadPreference",
      __args: { id: "Int!" },
    },
    deleteUser: { __type: "User", __args: { id: "Int!" } },
    forgotPasswordUser: {
      __type: "Boolean!",
      __args: { disableEmail: "Boolean", email: "String!", expiration: "Int" },
    },
    loginUser: {
      __type: "usersLoginResult",
      __args: { email: "String", password: "String" },
    },
    logoutUser: { __type: "String" },
    refreshTokenUser: {
      __type: "usersRefreshedUser",
      __args: { token: "String" },
    },
    resetPasswordUser: {
      __type: "usersResetPassword",
      __args: { password: "String", token: "String" },
    },
    unlockUser: { __type: "Boolean!", __args: { email: "String!" } },
    updatePayloadPreference: {
      __type: "PayloadPreference",
      __args: {
        autosave: "Boolean",
        data: "mutationPayloadPreferenceUpdateInput!",
        draft: "Boolean",
        id: "Int!",
      },
    },
    updateUser: {
      __type: "User",
      __args: {
        autosave: "Boolean",
        data: "mutationUserUpdateInput!",
        draft: "Boolean",
        id: "Int!",
      },
    },
    verifyEmailUser: { __type: "Boolean", __args: { token: "String" } },
  },
  mutationPayloadPreferenceInput: {
    createdAt: { __type: "String" },
    key: { __type: "String" },
    updatedAt: { __type: "String" },
    user: { __type: "PayloadPreference_UserRelationshipInput" },
    value: { __type: "JSON" },
  },
  mutationPayloadPreferenceUpdateInput: {
    createdAt: { __type: "String" },
    key: { __type: "String" },
    updatedAt: { __type: "String" },
    user: { __type: "PayloadPreferenceUpdate_UserRelationshipInput" },
    value: { __type: "JSON" },
  },
  mutationUserInput: {
    createdAt: { __type: "String" },
    email: { __type: "String!" },
    hash: { __type: "String" },
    lockUntil: { __type: "String" },
    loginAttempts: { __type: "Float" },
    password: { __type: "String!" },
    resetPasswordExpiration: { __type: "String" },
    resetPasswordToken: { __type: "String" },
    salt: { __type: "String" },
    updatedAt: { __type: "String" },
  },
  mutationUserUpdateInput: {
    createdAt: { __type: "String" },
    email: { __type: "String" },
    hash: { __type: "String" },
    lockUntil: { __type: "String" },
    loginAttempts: { __type: "Float" },
    password: { __type: "String" },
    resetPasswordExpiration: { __type: "String" },
    resetPasswordToken: { __type: "String" },
    salt: { __type: "String" },
    updatedAt: { __type: "String" },
  },
  payload_preferencesAccess: {
    __typename: { __type: "String!" },
    create: { __type: "PayloadPreferencesCreateAccess" },
    delete: { __type: "PayloadPreferencesDeleteAccess" },
    fields: { __type: "PayloadPreferencesFields" },
    read: { __type: "PayloadPreferencesReadAccess" },
    update: { __type: "PayloadPreferencesUpdateAccess" },
  },
  payload_preferencesDocAccess: {
    __typename: { __type: "String!" },
    create: { __type: "PayloadPreferencesCreateDocAccess" },
    delete: { __type: "PayloadPreferencesDeleteDocAccess" },
    fields: { __type: "PayloadPreferencesDocAccessFields" },
    read: { __type: "PayloadPreferencesReadDocAccess" },
    update: { __type: "PayloadPreferencesUpdateDocAccess" },
  },
  query: {
    __typename: { __type: "String!" },
    Access: { __type: "Access" },
    PayloadPreference: {
      __type: "PayloadPreference",
      __args: { draft: "Boolean", id: "Int!" },
    },
    PayloadPreferences: {
      __type: "PayloadPreferences",
      __args: {
        draft: "Boolean",
        limit: "Int",
        page: "Int",
        sort: "String",
        where: "PayloadPreference_where",
      },
    },
    User: { __type: "User", __args: { draft: "Boolean", id: "Int!" } },
    Users: {
      __type: "Users",
      __args: {
        draft: "Boolean",
        limit: "Int",
        page: "Int",
        sort: "String",
        where: "User_where",
      },
    },
    docAccessPayloadPreference: {
      __type: "payload_preferencesDocAccess",
      __args: { id: "Int!" },
    },
    docAccessUser: { __type: "usersDocAccess", __args: { id: "Int!" } },
    initializedUser: { __type: "Boolean" },
    meUser: { __type: "usersMe" },
  },
  subscription: {},
  usersAccess: {
    __typename: { __type: "String!" },
    create: { __type: "UsersCreateAccess" },
    delete: { __type: "UsersDeleteAccess" },
    fields: { __type: "UsersFields" },
    read: { __type: "UsersReadAccess" },
    unlock: { __type: "UsersUnlockAccess" },
    update: { __type: "UsersUpdateAccess" },
  },
  usersDocAccess: {
    __typename: { __type: "String!" },
    create: { __type: "UsersCreateDocAccess" },
    delete: { __type: "UsersDeleteDocAccess" },
    fields: { __type: "UsersDocAccessFields" },
    read: { __type: "UsersReadDocAccess" },
    unlock: { __type: "UsersUnlockDocAccess" },
    update: { __type: "UsersUpdateDocAccess" },
  },
  usersJWT: {
    __typename: { __type: "String!" },
    collection: { __type: "String!" },
    email: { __type: "EmailAddress!" },
  },
  usersLoginResult: {
    __typename: { __type: "String!" },
    exp: { __type: "Int" },
    token: { __type: "String" },
    user: { __type: "User" },
  },
  usersMe: {
    __typename: { __type: "String!" },
    collection: { __type: "String" },
    exp: { __type: "Int" },
    token: { __type: "String" },
    user: { __type: "User" },
  },
  usersRefreshedUser: {
    __typename: { __type: "String!" },
    exp: { __type: "Int" },
    refreshedToken: { __type: "String" },
    user: { __type: "usersJWT" },
  },
  usersResetPassword: {
    __typename: { __type: "String!" },
    token: { __type: "String" },
    user: { __type: "User" },
  },
  [SchemaUnionsKey]: { PayloadPreference_User: ["User"] },
} as const;

export interface Access {
  __typename?: "Access";
  canAccessAdmin: ScalarsEnums["Boolean"];
  payload_preferences?: Maybe<payload_preferencesAccess>;
  users?: Maybe<usersAccess>;
}

export interface PayloadPreference {
  __typename?: "PayloadPreference";
  createdAt?: Maybe<ScalarsEnums["DateTime"]>;
  id?: Maybe<ScalarsEnums["Int"]>;
  key?: Maybe<ScalarsEnums["String"]>;
  updatedAt?: Maybe<ScalarsEnums["DateTime"]>;
  user: PayloadPreference_User_Relationship;
  value?: Maybe<ScalarsEnums["JSON"]>;
}

export interface PayloadPreference_User {
  __typename?: "User";
  $on: $PayloadPreference_User;
}

export interface PayloadPreference_User_Relationship {
  __typename?: "PayloadPreference_User_Relationship";
  relationTo?: Maybe<ScalarsEnums["PayloadPreference_User_RelationTo"]>;
  value?: Maybe<PayloadPreference_User>;
}

export interface PayloadPreferences {
  __typename?: "PayloadPreferences";
  docs?: Maybe<Array<Maybe<PayloadPreference>>>;
  hasNextPage?: Maybe<ScalarsEnums["Boolean"]>;
  hasPrevPage?: Maybe<ScalarsEnums["Boolean"]>;
  limit?: Maybe<ScalarsEnums["Int"]>;
  nextPage?: Maybe<ScalarsEnums["Int"]>;
  offset?: Maybe<ScalarsEnums["Int"]>;
  page?: Maybe<ScalarsEnums["Int"]>;
  pagingCounter?: Maybe<ScalarsEnums["Int"]>;
  prevPage?: Maybe<ScalarsEnums["Int"]>;
  totalDocs?: Maybe<ScalarsEnums["Int"]>;
  totalPages?: Maybe<ScalarsEnums["Int"]>;
}

export interface PayloadPreferencesCreateAccess {
  __typename?: "PayloadPreferencesCreateAccess";
  permission: ScalarsEnums["Boolean"];
  where?: Maybe<ScalarsEnums["JSONObject"]>;
}

export interface PayloadPreferencesCreateDocAccess {
  __typename?: "PayloadPreferencesCreateDocAccess";
  permission: ScalarsEnums["Boolean"];
  where?: Maybe<ScalarsEnums["JSONObject"]>;
}

export interface PayloadPreferencesDeleteAccess {
  __typename?: "PayloadPreferencesDeleteAccess";
  permission: ScalarsEnums["Boolean"];
  where?: Maybe<ScalarsEnums["JSONObject"]>;
}

export interface PayloadPreferencesDeleteDocAccess {
  __typename?: "PayloadPreferencesDeleteDocAccess";
  permission: ScalarsEnums["Boolean"];
  where?: Maybe<ScalarsEnums["JSONObject"]>;
}

export interface PayloadPreferencesDocAccessFields {
  __typename?: "PayloadPreferencesDocAccessFields";
  createdAt?: Maybe<PayloadPreferencesDocAccessFields_createdAt>;
  key?: Maybe<PayloadPreferencesDocAccessFields_key>;
  updatedAt?: Maybe<PayloadPreferencesDocAccessFields_updatedAt>;
  user?: Maybe<PayloadPreferencesDocAccessFields_user>;
  value?: Maybe<PayloadPreferencesDocAccessFields_value>;
}

export interface PayloadPreferencesDocAccessFields_createdAt {
  __typename?: "PayloadPreferencesDocAccessFields_createdAt";
  create?: Maybe<PayloadPreferencesDocAccessFields_createdAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_createdAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_createdAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_createdAt_Update>;
}

export interface PayloadPreferencesDocAccessFields_createdAt_Create {
  __typename?: "PayloadPreferencesDocAccessFields_createdAt_Create";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesDocAccessFields_createdAt_Delete {
  __typename?: "PayloadPreferencesDocAccessFields_createdAt_Delete";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesDocAccessFields_createdAt_Read {
  __typename?: "PayloadPreferencesDocAccessFields_createdAt_Read";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesDocAccessFields_createdAt_Update {
  __typename?: "PayloadPreferencesDocAccessFields_createdAt_Update";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesDocAccessFields_key {
  __typename?: "PayloadPreferencesDocAccessFields_key";
  create?: Maybe<PayloadPreferencesDocAccessFields_key_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_key_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_key_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_key_Update>;
}

export interface PayloadPreferencesDocAccessFields_key_Create {
  __typename?: "PayloadPreferencesDocAccessFields_key_Create";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesDocAccessFields_key_Delete {
  __typename?: "PayloadPreferencesDocAccessFields_key_Delete";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesDocAccessFields_key_Read {
  __typename?: "PayloadPreferencesDocAccessFields_key_Read";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesDocAccessFields_key_Update {
  __typename?: "PayloadPreferencesDocAccessFields_key_Update";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesDocAccessFields_updatedAt {
  __typename?: "PayloadPreferencesDocAccessFields_updatedAt";
  create?: Maybe<PayloadPreferencesDocAccessFields_updatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_updatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_updatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_updatedAt_Update>;
}

export interface PayloadPreferencesDocAccessFields_updatedAt_Create {
  __typename?: "PayloadPreferencesDocAccessFields_updatedAt_Create";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesDocAccessFields_updatedAt_Delete {
  __typename?: "PayloadPreferencesDocAccessFields_updatedAt_Delete";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesDocAccessFields_updatedAt_Read {
  __typename?: "PayloadPreferencesDocAccessFields_updatedAt_Read";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesDocAccessFields_updatedAt_Update {
  __typename?: "PayloadPreferencesDocAccessFields_updatedAt_Update";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesDocAccessFields_user {
  __typename?: "PayloadPreferencesDocAccessFields_user";
  create?: Maybe<PayloadPreferencesDocAccessFields_user_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_user_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_user_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_user_Update>;
}

export interface PayloadPreferencesDocAccessFields_user_Create {
  __typename?: "PayloadPreferencesDocAccessFields_user_Create";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesDocAccessFields_user_Delete {
  __typename?: "PayloadPreferencesDocAccessFields_user_Delete";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesDocAccessFields_user_Read {
  __typename?: "PayloadPreferencesDocAccessFields_user_Read";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesDocAccessFields_user_Update {
  __typename?: "PayloadPreferencesDocAccessFields_user_Update";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesDocAccessFields_value {
  __typename?: "PayloadPreferencesDocAccessFields_value";
  create?: Maybe<PayloadPreferencesDocAccessFields_value_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_value_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_value_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_value_Update>;
}

export interface PayloadPreferencesDocAccessFields_value_Create {
  __typename?: "PayloadPreferencesDocAccessFields_value_Create";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesDocAccessFields_value_Delete {
  __typename?: "PayloadPreferencesDocAccessFields_value_Delete";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesDocAccessFields_value_Read {
  __typename?: "PayloadPreferencesDocAccessFields_value_Read";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesDocAccessFields_value_Update {
  __typename?: "PayloadPreferencesDocAccessFields_value_Update";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesFields {
  __typename?: "PayloadPreferencesFields";
  createdAt?: Maybe<PayloadPreferencesFields_createdAt>;
  key?: Maybe<PayloadPreferencesFields_key>;
  updatedAt?: Maybe<PayloadPreferencesFields_updatedAt>;
  user?: Maybe<PayloadPreferencesFields_user>;
  value?: Maybe<PayloadPreferencesFields_value>;
}

export interface PayloadPreferencesFields_createdAt {
  __typename?: "PayloadPreferencesFields_createdAt";
  create?: Maybe<PayloadPreferencesFields_createdAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_createdAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_createdAt_Read>;
  update?: Maybe<PayloadPreferencesFields_createdAt_Update>;
}

export interface PayloadPreferencesFields_createdAt_Create {
  __typename?: "PayloadPreferencesFields_createdAt_Create";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesFields_createdAt_Delete {
  __typename?: "PayloadPreferencesFields_createdAt_Delete";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesFields_createdAt_Read {
  __typename?: "PayloadPreferencesFields_createdAt_Read";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesFields_createdAt_Update {
  __typename?: "PayloadPreferencesFields_createdAt_Update";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesFields_key {
  __typename?: "PayloadPreferencesFields_key";
  create?: Maybe<PayloadPreferencesFields_key_Create>;
  delete?: Maybe<PayloadPreferencesFields_key_Delete>;
  read?: Maybe<PayloadPreferencesFields_key_Read>;
  update?: Maybe<PayloadPreferencesFields_key_Update>;
}

export interface PayloadPreferencesFields_key_Create {
  __typename?: "PayloadPreferencesFields_key_Create";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesFields_key_Delete {
  __typename?: "PayloadPreferencesFields_key_Delete";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesFields_key_Read {
  __typename?: "PayloadPreferencesFields_key_Read";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesFields_key_Update {
  __typename?: "PayloadPreferencesFields_key_Update";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesFields_updatedAt {
  __typename?: "PayloadPreferencesFields_updatedAt";
  create?: Maybe<PayloadPreferencesFields_updatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_updatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_updatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_updatedAt_Update>;
}

export interface PayloadPreferencesFields_updatedAt_Create {
  __typename?: "PayloadPreferencesFields_updatedAt_Create";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesFields_updatedAt_Delete {
  __typename?: "PayloadPreferencesFields_updatedAt_Delete";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesFields_updatedAt_Read {
  __typename?: "PayloadPreferencesFields_updatedAt_Read";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesFields_updatedAt_Update {
  __typename?: "PayloadPreferencesFields_updatedAt_Update";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesFields_user {
  __typename?: "PayloadPreferencesFields_user";
  create?: Maybe<PayloadPreferencesFields_user_Create>;
  delete?: Maybe<PayloadPreferencesFields_user_Delete>;
  read?: Maybe<PayloadPreferencesFields_user_Read>;
  update?: Maybe<PayloadPreferencesFields_user_Update>;
}

export interface PayloadPreferencesFields_user_Create {
  __typename?: "PayloadPreferencesFields_user_Create";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesFields_user_Delete {
  __typename?: "PayloadPreferencesFields_user_Delete";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesFields_user_Read {
  __typename?: "PayloadPreferencesFields_user_Read";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesFields_user_Update {
  __typename?: "PayloadPreferencesFields_user_Update";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesFields_value {
  __typename?: "PayloadPreferencesFields_value";
  create?: Maybe<PayloadPreferencesFields_value_Create>;
  delete?: Maybe<PayloadPreferencesFields_value_Delete>;
  read?: Maybe<PayloadPreferencesFields_value_Read>;
  update?: Maybe<PayloadPreferencesFields_value_Update>;
}

export interface PayloadPreferencesFields_value_Create {
  __typename?: "PayloadPreferencesFields_value_Create";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesFields_value_Delete {
  __typename?: "PayloadPreferencesFields_value_Delete";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesFields_value_Read {
  __typename?: "PayloadPreferencesFields_value_Read";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesFields_value_Update {
  __typename?: "PayloadPreferencesFields_value_Update";
  permission: ScalarsEnums["Boolean"];
}

export interface PayloadPreferencesReadAccess {
  __typename?: "PayloadPreferencesReadAccess";
  permission: ScalarsEnums["Boolean"];
  where?: Maybe<ScalarsEnums["JSONObject"]>;
}

export interface PayloadPreferencesReadDocAccess {
  __typename?: "PayloadPreferencesReadDocAccess";
  permission: ScalarsEnums["Boolean"];
  where?: Maybe<ScalarsEnums["JSONObject"]>;
}

export interface PayloadPreferencesUpdateAccess {
  __typename?: "PayloadPreferencesUpdateAccess";
  permission: ScalarsEnums["Boolean"];
  where?: Maybe<ScalarsEnums["JSONObject"]>;
}

export interface PayloadPreferencesUpdateDocAccess {
  __typename?: "PayloadPreferencesUpdateDocAccess";
  permission: ScalarsEnums["Boolean"];
  where?: Maybe<ScalarsEnums["JSONObject"]>;
}

export interface User {
  __typename?: "User";
  createdAt?: Maybe<ScalarsEnums["DateTime"]>;
  email: ScalarsEnums["EmailAddress"];
  hash?: Maybe<ScalarsEnums["String"]>;
  id?: Maybe<ScalarsEnums["Int"]>;
  lockUntil?: Maybe<ScalarsEnums["DateTime"]>;
  loginAttempts?: Maybe<ScalarsEnums["Float"]>;
  password: ScalarsEnums["String"];
  resetPasswordExpiration?: Maybe<ScalarsEnums["DateTime"]>;
  resetPasswordToken?: Maybe<ScalarsEnums["String"]>;
  salt?: Maybe<ScalarsEnums["String"]>;
  updatedAt?: Maybe<ScalarsEnums["DateTime"]>;
}

export interface Users {
  __typename?: "Users";
  docs?: Maybe<Array<Maybe<User>>>;
  hasNextPage?: Maybe<ScalarsEnums["Boolean"]>;
  hasPrevPage?: Maybe<ScalarsEnums["Boolean"]>;
  limit?: Maybe<ScalarsEnums["Int"]>;
  nextPage?: Maybe<ScalarsEnums["Int"]>;
  offset?: Maybe<ScalarsEnums["Int"]>;
  page?: Maybe<ScalarsEnums["Int"]>;
  pagingCounter?: Maybe<ScalarsEnums["Int"]>;
  prevPage?: Maybe<ScalarsEnums["Int"]>;
  totalDocs?: Maybe<ScalarsEnums["Int"]>;
  totalPages?: Maybe<ScalarsEnums["Int"]>;
}

export interface UsersCreateAccess {
  __typename?: "UsersCreateAccess";
  permission: ScalarsEnums["Boolean"];
  where?: Maybe<ScalarsEnums["JSONObject"]>;
}

export interface UsersCreateDocAccess {
  __typename?: "UsersCreateDocAccess";
  permission: ScalarsEnums["Boolean"];
  where?: Maybe<ScalarsEnums["JSONObject"]>;
}

export interface UsersDeleteAccess {
  __typename?: "UsersDeleteAccess";
  permission: ScalarsEnums["Boolean"];
  where?: Maybe<ScalarsEnums["JSONObject"]>;
}

export interface UsersDeleteDocAccess {
  __typename?: "UsersDeleteDocAccess";
  permission: ScalarsEnums["Boolean"];
  where?: Maybe<ScalarsEnums["JSONObject"]>;
}

export interface UsersDocAccessFields {
  __typename?: "UsersDocAccessFields";
  createdAt?: Maybe<UsersDocAccessFields_createdAt>;
  email?: Maybe<UsersDocAccessFields_email>;
  password?: Maybe<UsersDocAccessFields_password>;
  updatedAt?: Maybe<UsersDocAccessFields_updatedAt>;
}

export interface UsersDocAccessFields_createdAt {
  __typename?: "UsersDocAccessFields_createdAt";
  create?: Maybe<UsersDocAccessFields_createdAt_Create>;
  delete?: Maybe<UsersDocAccessFields_createdAt_Delete>;
  read?: Maybe<UsersDocAccessFields_createdAt_Read>;
  update?: Maybe<UsersDocAccessFields_createdAt_Update>;
}

export interface UsersDocAccessFields_createdAt_Create {
  __typename?: "UsersDocAccessFields_createdAt_Create";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersDocAccessFields_createdAt_Delete {
  __typename?: "UsersDocAccessFields_createdAt_Delete";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersDocAccessFields_createdAt_Read {
  __typename?: "UsersDocAccessFields_createdAt_Read";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersDocAccessFields_createdAt_Update {
  __typename?: "UsersDocAccessFields_createdAt_Update";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersDocAccessFields_email {
  __typename?: "UsersDocAccessFields_email";
  create?: Maybe<UsersDocAccessFields_email_Create>;
  delete?: Maybe<UsersDocAccessFields_email_Delete>;
  read?: Maybe<UsersDocAccessFields_email_Read>;
  update?: Maybe<UsersDocAccessFields_email_Update>;
}

export interface UsersDocAccessFields_email_Create {
  __typename?: "UsersDocAccessFields_email_Create";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersDocAccessFields_email_Delete {
  __typename?: "UsersDocAccessFields_email_Delete";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersDocAccessFields_email_Read {
  __typename?: "UsersDocAccessFields_email_Read";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersDocAccessFields_email_Update {
  __typename?: "UsersDocAccessFields_email_Update";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersDocAccessFields_password {
  __typename?: "UsersDocAccessFields_password";
  create?: Maybe<UsersDocAccessFields_password_Create>;
  delete?: Maybe<UsersDocAccessFields_password_Delete>;
  read?: Maybe<UsersDocAccessFields_password_Read>;
  update?: Maybe<UsersDocAccessFields_password_Update>;
}

export interface UsersDocAccessFields_password_Create {
  __typename?: "UsersDocAccessFields_password_Create";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersDocAccessFields_password_Delete {
  __typename?: "UsersDocAccessFields_password_Delete";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersDocAccessFields_password_Read {
  __typename?: "UsersDocAccessFields_password_Read";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersDocAccessFields_password_Update {
  __typename?: "UsersDocAccessFields_password_Update";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersDocAccessFields_updatedAt {
  __typename?: "UsersDocAccessFields_updatedAt";
  create?: Maybe<UsersDocAccessFields_updatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_updatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_updatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_updatedAt_Update>;
}

export interface UsersDocAccessFields_updatedAt_Create {
  __typename?: "UsersDocAccessFields_updatedAt_Create";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersDocAccessFields_updatedAt_Delete {
  __typename?: "UsersDocAccessFields_updatedAt_Delete";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersDocAccessFields_updatedAt_Read {
  __typename?: "UsersDocAccessFields_updatedAt_Read";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersDocAccessFields_updatedAt_Update {
  __typename?: "UsersDocAccessFields_updatedAt_Update";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersFields {
  __typename?: "UsersFields";
  createdAt?: Maybe<UsersFields_createdAt>;
  email?: Maybe<UsersFields_email>;
  password?: Maybe<UsersFields_password>;
  updatedAt?: Maybe<UsersFields_updatedAt>;
}

export interface UsersFields_createdAt {
  __typename?: "UsersFields_createdAt";
  create?: Maybe<UsersFields_createdAt_Create>;
  delete?: Maybe<UsersFields_createdAt_Delete>;
  read?: Maybe<UsersFields_createdAt_Read>;
  update?: Maybe<UsersFields_createdAt_Update>;
}

export interface UsersFields_createdAt_Create {
  __typename?: "UsersFields_createdAt_Create";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersFields_createdAt_Delete {
  __typename?: "UsersFields_createdAt_Delete";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersFields_createdAt_Read {
  __typename?: "UsersFields_createdAt_Read";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersFields_createdAt_Update {
  __typename?: "UsersFields_createdAt_Update";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersFields_email {
  __typename?: "UsersFields_email";
  create?: Maybe<UsersFields_email_Create>;
  delete?: Maybe<UsersFields_email_Delete>;
  read?: Maybe<UsersFields_email_Read>;
  update?: Maybe<UsersFields_email_Update>;
}

export interface UsersFields_email_Create {
  __typename?: "UsersFields_email_Create";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersFields_email_Delete {
  __typename?: "UsersFields_email_Delete";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersFields_email_Read {
  __typename?: "UsersFields_email_Read";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersFields_email_Update {
  __typename?: "UsersFields_email_Update";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersFields_password {
  __typename?: "UsersFields_password";
  create?: Maybe<UsersFields_password_Create>;
  delete?: Maybe<UsersFields_password_Delete>;
  read?: Maybe<UsersFields_password_Read>;
  update?: Maybe<UsersFields_password_Update>;
}

export interface UsersFields_password_Create {
  __typename?: "UsersFields_password_Create";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersFields_password_Delete {
  __typename?: "UsersFields_password_Delete";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersFields_password_Read {
  __typename?: "UsersFields_password_Read";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersFields_password_Update {
  __typename?: "UsersFields_password_Update";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersFields_updatedAt {
  __typename?: "UsersFields_updatedAt";
  create?: Maybe<UsersFields_updatedAt_Create>;
  delete?: Maybe<UsersFields_updatedAt_Delete>;
  read?: Maybe<UsersFields_updatedAt_Read>;
  update?: Maybe<UsersFields_updatedAt_Update>;
}

export interface UsersFields_updatedAt_Create {
  __typename?: "UsersFields_updatedAt_Create";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersFields_updatedAt_Delete {
  __typename?: "UsersFields_updatedAt_Delete";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersFields_updatedAt_Read {
  __typename?: "UsersFields_updatedAt_Read";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersFields_updatedAt_Update {
  __typename?: "UsersFields_updatedAt_Update";
  permission: ScalarsEnums["Boolean"];
}

export interface UsersReadAccess {
  __typename?: "UsersReadAccess";
  permission: ScalarsEnums["Boolean"];
  where?: Maybe<ScalarsEnums["JSONObject"]>;
}

export interface UsersReadDocAccess {
  __typename?: "UsersReadDocAccess";
  permission: ScalarsEnums["Boolean"];
  where?: Maybe<ScalarsEnums["JSONObject"]>;
}

export interface UsersUnlockAccess {
  __typename?: "UsersUnlockAccess";
  permission: ScalarsEnums["Boolean"];
  where?: Maybe<ScalarsEnums["JSONObject"]>;
}

export interface UsersUnlockDocAccess {
  __typename?: "UsersUnlockDocAccess";
  permission: ScalarsEnums["Boolean"];
  where?: Maybe<ScalarsEnums["JSONObject"]>;
}

export interface UsersUpdateAccess {
  __typename?: "UsersUpdateAccess";
  permission: ScalarsEnums["Boolean"];
  where?: Maybe<ScalarsEnums["JSONObject"]>;
}

export interface UsersUpdateDocAccess {
  __typename?: "UsersUpdateDocAccess";
  permission: ScalarsEnums["Boolean"];
  where?: Maybe<ScalarsEnums["JSONObject"]>;
}

export interface Mutation {
  __typename?: "Mutation";
  createPayloadPreference: (args: {
    data: mutationPayloadPreferenceInput;
    draft?: Maybe<Scalars["Boolean"]>;
  }) => Maybe<PayloadPreference>;
  createUser: (args: {
    data: mutationUserInput;
    draft?: Maybe<Scalars["Boolean"]>;
  }) => Maybe<User>;
  deletePayloadPreference: (args: {
    id: Scalars["Int"];
  }) => Maybe<PayloadPreference>;
  deleteUser: (args: { id: Scalars["Int"] }) => Maybe<User>;
  forgotPasswordUser: (args: {
    disableEmail?: Maybe<Scalars["Boolean"]>;
    email: Scalars["String"];
    expiration?: Maybe<Scalars["Int"]>;
  }) => ScalarsEnums["Boolean"];
  loginUser: (args?: {
    email?: Maybe<Scalars["String"]>;
    password?: Maybe<Scalars["String"]>;
  }) => Maybe<usersLoginResult>;
  logoutUser?: Maybe<ScalarsEnums["String"]>;
  refreshTokenUser: (args?: {
    token?: Maybe<Scalars["String"]>;
  }) => Maybe<usersRefreshedUser>;
  resetPasswordUser: (args?: {
    password?: Maybe<Scalars["String"]>;
    token?: Maybe<Scalars["String"]>;
  }) => Maybe<usersResetPassword>;
  unlockUser: (args: { email: Scalars["String"] }) => ScalarsEnums["Boolean"];
  updatePayloadPreference: (args: {
    autosave?: Maybe<Scalars["Boolean"]>;
    data: mutationPayloadPreferenceUpdateInput;
    draft?: Maybe<Scalars["Boolean"]>;
    id: Scalars["Int"];
  }) => Maybe<PayloadPreference>;
  updateUser: (args: {
    autosave?: Maybe<Scalars["Boolean"]>;
    data: mutationUserUpdateInput;
    draft?: Maybe<Scalars["Boolean"]>;
    id: Scalars["Int"];
  }) => Maybe<User>;
  verifyEmailUser: (args?: {
    token?: Maybe<Scalars["String"]>;
  }) => Maybe<ScalarsEnums["Boolean"]>;
}

export interface payload_preferencesAccess {
  __typename?: "payload_preferencesAccess";
  create?: Maybe<PayloadPreferencesCreateAccess>;
  delete?: Maybe<PayloadPreferencesDeleteAccess>;
  fields?: Maybe<PayloadPreferencesFields>;
  read?: Maybe<PayloadPreferencesReadAccess>;
  update?: Maybe<PayloadPreferencesUpdateAccess>;
}

export interface payload_preferencesDocAccess {
  __typename?: "payload_preferencesDocAccess";
  create?: Maybe<PayloadPreferencesCreateDocAccess>;
  delete?: Maybe<PayloadPreferencesDeleteDocAccess>;
  fields?: Maybe<PayloadPreferencesDocAccessFields>;
  read?: Maybe<PayloadPreferencesReadDocAccess>;
  update?: Maybe<PayloadPreferencesUpdateDocAccess>;
}

export interface Query {
  __typename?: "Query";
  Access?: Maybe<Access>;
  PayloadPreference: (args: {
    draft?: Maybe<Scalars["Boolean"]>;
    id: Scalars["Int"];
  }) => Maybe<PayloadPreference>;
  PayloadPreferences: (args?: {
    draft?: Maybe<Scalars["Boolean"]>;
    limit?: Maybe<Scalars["Int"]>;
    page?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Scalars["String"]>;
    where?: Maybe<PayloadPreference_where>;
  }) => Maybe<PayloadPreferences>;
  User: (args: {
    draft?: Maybe<Scalars["Boolean"]>;
    id: Scalars["Int"];
  }) => Maybe<User>;
  Users: (args?: {
    draft?: Maybe<Scalars["Boolean"]>;
    limit?: Maybe<Scalars["Int"]>;
    page?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Scalars["String"]>;
    where?: Maybe<User_where>;
  }) => Maybe<Users>;
  docAccessPayloadPreference: (args: {
    id: Scalars["Int"];
  }) => Maybe<payload_preferencesDocAccess>;
  docAccessUser: (args: { id: Scalars["Int"] }) => Maybe<usersDocAccess>;
  initializedUser?: Maybe<ScalarsEnums["Boolean"]>;
  meUser?: Maybe<usersMe>;
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface usersAccess {
  __typename?: "usersAccess";
  create?: Maybe<UsersCreateAccess>;
  delete?: Maybe<UsersDeleteAccess>;
  fields?: Maybe<UsersFields>;
  read?: Maybe<UsersReadAccess>;
  unlock?: Maybe<UsersUnlockAccess>;
  update?: Maybe<UsersUpdateAccess>;
}

export interface usersDocAccess {
  __typename?: "usersDocAccess";
  create?: Maybe<UsersCreateDocAccess>;
  delete?: Maybe<UsersDeleteDocAccess>;
  fields?: Maybe<UsersDocAccessFields>;
  read?: Maybe<UsersReadDocAccess>;
  unlock?: Maybe<UsersUnlockDocAccess>;
  update?: Maybe<UsersUpdateDocAccess>;
}

export interface usersJWT {
  __typename?: "usersJWT";
  collection: ScalarsEnums["String"];
  email: ScalarsEnums["EmailAddress"];
}

export interface usersLoginResult {
  __typename?: "usersLoginResult";
  exp?: Maybe<ScalarsEnums["Int"]>;
  token?: Maybe<ScalarsEnums["String"]>;
  user?: Maybe<User>;
}

export interface usersMe {
  __typename?: "usersMe";
  collection?: Maybe<ScalarsEnums["String"]>;
  exp?: Maybe<ScalarsEnums["Int"]>;
  token?: Maybe<ScalarsEnums["String"]>;
  user?: Maybe<User>;
}

export interface usersRefreshedUser {
  __typename?: "usersRefreshedUser";
  exp?: Maybe<ScalarsEnums["Int"]>;
  refreshedToken?: Maybe<ScalarsEnums["String"]>;
  user?: Maybe<usersJWT>;
}

export interface usersResetPassword {
  __typename?: "usersResetPassword";
  token?: Maybe<ScalarsEnums["String"]>;
  user?: Maybe<User>;
}

export interface $PayloadPreference_User {
  User?: User;
}

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  PayloadPreferenceUpdate_UserRelationshipInputRelationTo:
    | PayloadPreferenceUpdate_UserRelationshipInputRelationTo
    | undefined;
  PayloadPreference_UserRelationshipInputRelationTo:
    | PayloadPreference_UserRelationshipInputRelationTo
    | undefined;
  PayloadPreference_User_RelationTo:
    | PayloadPreference_User_RelationTo
    | undefined;
  PayloadPreference_user_Relation_RelationTo:
    | PayloadPreference_user_Relation_RelationTo
    | undefined;
}
