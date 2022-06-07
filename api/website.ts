import { AxiosPromise } from "axios";
import request from "@/utils/requires";

const base = "/api/website/";

export const api = {
  getServerInfo: `${base}getServerInfo`,
  getPeriod: `${base}period`,
  getTeamMember: `${base}teamMember`,
};

export function getServerInfo(): AxiosPromise {
  return request({
    url: api.getServerInfo,
    method: "get",
  });
}

export function getPeriod(): AxiosPromise {
  return request({
    url: api.getServerInfo,
    method: "get",
  });
}

export function getTeamMember(): AxiosPromise {
  return request({
    url: api.getTeamMember,
    method: "get",
  });
}



