import { UserController } from '../controller/UserController';
import { EMethod, IRoute } from '../types';

const UserBasePath = '/api/user';
export const UserRoutes: Array<IRoute> = [
  {
    method: EMethod.POST,
    route: `${UserBasePath}/login`,
    controller: UserController,
    action: 'login',
  },
  {
    method: EMethod.POST,
    route: `${UserBasePath}/register`,
    controller: UserController,
    action: 'register',
  },
  {
    method: EMethod.GET,
    route: `${UserBasePath}/getUserInfo`,
    controller: UserController,
    action: 'getUserInfo',
  },
  {
    method: EMethod.POST,
    route: `${UserBasePath}/sendCode`,
    controller: UserController,
    action: 'sendCode',
  },
  {
    method: EMethod.GET,
    route: `${UserBasePath}/getAllUsers`,
    controller: UserController,
    action: 'getAllUsers',
  },
  {
    method: EMethod.POST,
    route: `${UserBasePath}/updateUserInfo`,
    controller: UserController,
    action: 'updateUserInfo',
  },
  {
    method: EMethod.POST,
    route: `${UserBasePath}/updateUserImg`,
    controller: UserController,
    action: 'updateUserImg',
  },
  {
    method: EMethod.POST,
    route: `${UserBasePath}/changePassword`,
    controller: UserController,
    action: 'changePassword',
  },
];
