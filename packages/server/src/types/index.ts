import { Request } from 'express-jwt';

export enum EMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}

export interface IRoute {
  method: EMethod;
  route: string;
  controller: any;
  formData?: boolean | string;
  action: string;
}

export interface IPaperQuestion {
  type?: string;
  score?: number;
  content?: string;
  solution?: string;
}

export interface Req extends Request {
  file?: Express.Multer.File;
  files?: Express.Multer.File[];
}
