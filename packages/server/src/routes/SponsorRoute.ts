import { SponsorController } from '../controller/SponsorController';
import { EMethod, IRoute } from '../types';

const SponsorBasePath = '/api/sponsor';
export const SponsorRoutes: Array<IRoute> = [
  {
    method: EMethod.GET,
    route: `${SponsorBasePath}`,
    controller: SponsorController,
    action: 'getSponsors',
  },
  {
    method: EMethod.POST,
    route: `${SponsorBasePath}`,
    controller: SponsorController,
    action: 'createSponsor',
  },
  {
    method: EMethod.PUT,
    route: `${SponsorBasePath}/:id`,
    controller: SponsorController,
    action: 'updateSponsor',
  },
  {
    method: EMethod.DELETE,
    route: `${SponsorBasePath}/:id`,
    controller: SponsorController,
    action: 'deleteSponsor',
  },
  {
    method: EMethod.GET,
    route: `${SponsorBasePath}/list`,
    controller: SponsorController,
    action: 'getSponsorList',
  },
];
