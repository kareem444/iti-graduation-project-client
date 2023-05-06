import { useMutation, useQuery } from "@tanstack/react-query";

import {
  ENDPOINT_MY_ORDERS,
  ENDPOINT_ONE_ORDER,
  ENDPOINT_ORDERS,
  ENDPOINT_ORDERS_SELLER,
} from "../utils/constants/endpoints.constants";
import {
  KEY_REPO_GET_OREDER,
  KEY_REPO_ORDERS,
  KEY_REPO_GET_ALL_MY_ORDERS,
  KEY_REPO_GET_MY_ORDERS,
} from "../utils/constants/queries_keys.constants";
import AxiosApiHelper from "../helper/axios_api.helper";

export const RepoGetOrders = () => {
  return useQuery([KEY_REPO_ORDERS], () =>
    AxiosApiHelper.get(ENDPOINT_ORDERS_SELLER + "/myorders")
  );
};

export const RepoGetMyOrders = () => {
  return useQuery([KEY_REPO_GET_MY_ORDERS], () =>
    AxiosApiHelper.get(ENDPOINT_MY_ORDERS)
  );
};

export const RepoGetAllMyOrders = () => {
  return useQuery([KEY_REPO_GET_ALL_MY_ORDERS], () =>
    AxiosApiHelper.get(ENDPOINT_ORDERS_SELLER)
  );
};

export const RepGetOneOrder = (orderId) => {
  return useQuery([[KEY_REPO_GET_OREDER], orderId], () =>
    AxiosApiHelper.get(ENDPOINT_ONE_ORDER + "/" + orderId)
  );
};

export const RepoCreateOrder = () => {
  return useMutation((data) => AxiosApiHelper.post(ENDPOINT_ORDERS, data));
};

export const RepoUpdateOrder = () => {
  return useMutation((id, data) =>
    AxiosApiHelper.patch(ENDPOINT_ORDERS + "/" + id, data)
  );
};

export const RepoDeleteProduct = () => {
  return useMutation((id) => AxiosApiHelper.delete(ENDPOINT_ORDERS + "/" + id));
};
