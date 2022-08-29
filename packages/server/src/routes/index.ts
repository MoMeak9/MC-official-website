import { UserRoutes } from './UserRoute';
import { WebsiteRoutes } from './WebsiteRoute';
// import { SponsorRoutes } from './SponsorRoute';
import { IRoute } from '../types';

export const Routes: Array<IRoute> = [
  ...UserRoutes,
  ...WebsiteRoutes,
  // ...SponsorRoutes,
];
