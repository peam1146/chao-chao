/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    items: Item;
    medias: Media;
    tags: Tag;
    chatroom: Chatroom;
    message: Message;
    renting: Renting;
    reviews: Review;
    report: Report;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {};
}
export interface User {
  id: string;
  profileImage?: string | Media;
  phone: string;
  firstName?: string;
  lastName?: string;
  bio?: string;
  rating?: number;
  province?: string;
  stripeCustomerID?: string;
  roles: ('admin' | 'User')[];
  requestsMade?: string[] | Renting[];
  requestsReceived?: string[] | Renting[];
  review?: string[] | Review[];
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
export interface Media {
  id: string;
  name?: string;
  alt?: string;
  createdBy: string | User;
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
}
export interface Renting {
  id: string;
  rentedBy?: {
    user?: string | User;
  };
  rentedTo?: {
    user?: string | User;
    item?: string | Item;
  };
  startDate: string;
  endDate: string;
  status?: 'PENDING' | 'PROCESSING' | 'WAIT_PAID' | 'COMPLETED';
  totalPrice?: number;
  rentalFee?: number;
  insuranceFee?: number;
  deliveryFee?: number;
  file?: string | Media;
  createdBy: string | User;
  updatedAt: string;
  createdAt: string;
}
export interface Item {
  id: string;
  name: string;
  description?: string;
  image: string[] | Media[];
  price?: number;
  availableAt?: string;
  period?: number;
  periodType?: 'days' | 'weeks' | 'months' | 'years';
  rentingStatus?: 'available' | 'unavailable' | 'negotiating';
  start?: string;
  end?: string;
  tags?: string[] | Tag[];
  createdBy: string | User;
  rating?: number;
  stripeProductID?: string;
  review?: string[] | Review[];
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface Tag {
  id: string;
  name: string;
  alt?: string;
  createdBy: string | User;
  updatedAt: string;
  createdAt: string;
}
export interface Review {
  id: string;
  description: string;
  rating: number;
  reviewToUser?: string | User;
  reviewToItem?: string | Item;
  option: 'ITEM' | 'USER';
  createdBy: string | User;
  updatedAt: string;
  createdAt: string;
}
export interface Chatroom {
  id: string;
  user1_id: string | User;
  user2_id: string | User;
  lastMessage?: string | Message;
  user1LastViewed?: string;
  user2LastViewed?: string;
  updatedAt: string;
  createdAt: string;
}
export interface Message {
  id: string;
  message?: string;
  createdAt: string;
  createdBy: string | User;
  room: string | Chatroom;
  updatedAt: string;
}
export interface Report {
  id: string;
  reportMessage: string;
  createdBy: string | User;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadMigration {
  id: string;
  name?: string;
  batch?: number;
  updatedAt: string;
  createdAt: string;
}


declare module 'payload' {
  export interface GeneratedTypes {
    collections: {
      'users': User
      'items': Item
      'medias': Media
      'tags': Tag
      'chatroom': Chatroom
      'message': Message
      'renting': Renting
      'reviews': Review
      'report': Report
      'payload-preferences': PayloadPreference
      'payload-migrations': PayloadMigration
    }

  }
}