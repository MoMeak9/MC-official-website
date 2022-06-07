import { AxiosPromise } from "axios";
import request from "@/utils/requires";

const base = "/api/website/";

export const api = {
  getServerInfo: `${base}getServerInfo`,
  getPeriod: `${base}period`,
  getTeamMember: `${base}teamMember`,
  getSponsorList: `${base}sponsor/list`
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

export function getSponsorList(param: object = { page: 1, pageSize: 10 }): AxiosPromise {
  return request({
    url: api.getSponsorList,
    method: "get",
    params: param,
  });
}
