import request from '../utils/request';

const { KEY } = require('../config');
type Command = {
  uuid?: string;
  command: string;
  remote_uuid?: string;
  apikey?: string;
};
export const api = {
  getServerInfo: '/status/LightWorldMC',
  commandServer: 'http://mcsm.lwmc.net/api/protected_instance/command',
};

export function queryServerInfo() {
  return request({
    url: api.getServerInfo,
    method: 'get',
  });
}

export function commandServer(params: Command) {
  params.uuid = params.uuid || process.env.UUID;
  params.remote_uuid = params.remote_uuid || process.env.REMOTE_UUID;
  params.apikey = params.apikey || process.env.APIKEY;

  return request({
    method: 'get',
    url: api.commandServer,
    params,
  });
}
