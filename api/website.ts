import { AxiosPromise } from "axios";
import request from "@/utils/requires";

export const api = {
  getServerInfo: "/api/website/getServerInfo",
};

export function getServerInfo(): AxiosPromise {
  return request({
    url: api.getServerInfo,
    method: "get",
  });
}
