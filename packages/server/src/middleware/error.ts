import { Request, Response, NextFunction, request } from 'express';
import { AuthFailed, NotFount } from '../utils/HttpException';

export const defaultErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  switch (err.name) {
    case 'UnauthorizedError': {
      const authFailed = new AuthFailed('token验证失败');
      res.status(authFailed.code).send(authFailed);
      break;
    }
    case 'NotFoundError': {
      const authFailed = new NotFount('资源不存在', 404);
      res.status(authFailed.code).send(authFailed);
      break;
    }
    default:
      res.status(err.code || 500).send(err);
  }
};
