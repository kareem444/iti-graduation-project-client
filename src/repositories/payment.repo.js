import {
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { ENDPOINT_CREATE_PAYMENTS, ENDPOINT_INTENT_STRIPE, ENDPOINT_PAYMENTS } from "../utils/constants/endpoints.constants";
import {
  KEY_REPO_GET_USER_PAYMENT,
  KEY_REPO_GET_PAYMENTS,
} from "../utils/constants/queries_keys.constants";

import AxiosApiHelper from "../helper/axios_api.helper";

export const RepoGetAllPayments = () => {
  return useQuery([KEY_REPO_GET_PAYMENTS], () =>
    AxiosApiHelper.get(ENDPOINT_PAYMENTS + "/my_payments")
  );
};

export const RepoGetOnePayment = (orderId) => {
  return useQuery(
    [[KEY_REPO_GET_USER_PAYMENT], orderId],
    () =>
      AxiosApiHelper.get(ENDPOINT_PAYMENTS + "/" + orderId)
  );
};

export const RepoCreatePayment = () => {
  return useMutation((orderId) =>
    AxiosApiHelper.post(ENDPOINT_CREATE_PAYMENTS + "/" + orderId)
  );
};

export const RepoIntentStrip = () => {
  return useMutation((data) =>
    AxiosApiHelper.post(ENDPOINT_INTENT_STRIPE, data)
  );
};
