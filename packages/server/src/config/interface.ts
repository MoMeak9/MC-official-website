import { NextFunction, Request, Response } from 'express';
import { Request as JWTRequest } from 'express-jwt';

export interface Req extends Request, JWTRequest {
  file: any;
}

export type Res = Response;

export type Next = NextFunction;
