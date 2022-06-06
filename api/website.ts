import { AxiosPromise } from "axios";
import request from "@/utils/requires";

export const api = {
  getServerInfo: "/api/website/getServerInfo",
  getSponsorList: "/sponsor/list"
};

export function getServerInfo(): AxiosPromise {
  return request({
    url: api.getServerInfo,
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

