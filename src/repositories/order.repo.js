import {
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { ENDPOINT_ORDERS } from "../utils/constants/endpoints.constants";
import {
  KEY_REPO_GET_OREDER,
  KEY_REPO_ORDERS,
} from "../utils/constants/queries_keys.constants";
import AxiosApiHelper from "../helper/axios_api.helper";

export const RepoGetOrders = () => {
  return useQuery([KEY_REPO_ORDERS], () =>
    AxiosApiHelper.get(ENDPOINT_ORDERS + "/myorders")
  );
};

export const RepGetOneOrder = (orderId) => {
  return useQuery([[KEY_REPO_GET_OREDER], orderId], () =>
    AxiosApiHelper.get(ENDPOINT_ORDERS + "/" + orderId)
  );
};

export const RepoCreateOrder = () => {
  return useMutation((data) =>
    AxiosApiHelper.post(ENDPOINT_ORDERS, data)
  );
};

export const RepoDeleteProduct = () => {
  return useMutation((id) =>
    AxiosApiHelper.delete(ENDPOINT_ORDERS + "/" + id)
  );
};
