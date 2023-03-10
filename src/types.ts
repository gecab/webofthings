
import express from 'express';
export type PrimitiveJsonType =
  | 'null'
  | 'boolean'
  | 'object'
  | 'array'
  | 'number'
  | 'integer'
  | 'string';

export type AnyType = null | boolean | number | string | Record<string, unknown> | unknown[];


export interface Form {
  op?: string | string[];
  href?: string;
  contentType?: string;
  subprotocol?:string;
}

export interface SecurityScheme {
  scheme: string;
  in: string;
  name: string
}

export interface responseArray {
  eventName: string;
  response: express.Response | {
   send: () => void
  }
}
