import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  ENDPOINT_MYPRODUCTS,
  ENDPOINT_PRODUCTS,
  ENDPOINT_ORDERS_SELLER,
} from "../utils/constants/endpoints.constants";
import {
  KEY_REPO_GET_ALL_MY_PRODUCTS,
  KEY_REPO_GET_ALL_PRODUCTS,
  KEY_REPO_GET_One_PRODUCT,
} from "../utils/constants/queries_keys.constants";
import AxiosApiHelper from "../helper/axios_api.helper";
// import {} from "./../utils/constants/endpoints.constants";

export const RepoGetAllProducts = () => {
  return useQuery([KEY_REPO_GET_ALL_PRODUCTS], () =>
    AxiosApiHelper.get(ENDPOINT_PRODUCTS)
  );
};

export const RepoGetAllMyProducts = () => {
  return useQuery([KEY_REPO_GET_ALL_MY_PRODUCTS], () =>
    AxiosApiHelper.get(ENDPOINT_MYPRODUCTS)
  );
};

export const RepGetOneProduct = (productId) => {
  return useQuery(
    [KEY_REPO_GET_One_PRODUCT, productId],
    () =>
      AxiosApiHelper.get(
        ENDPOINT_PRODUCTS + "/" + productId
      )
  );
};

export const RepoCreateProduct = () => {
  return useMutation(
    async (data) =>
      await AxiosApiHelper.postNewProduct(
        ENDPOINT_PRODUCTS,
        data
      )
  );
};

export const RepoUpdateProduct = () => {
  return useMutation((id, data) =>
    AxiosApiHelper.patch(ENDPOINT_PRODUCTS + "/" + id, data)
  );
};

export const RepoDeleteProduct = () => {
  return useMutation((id) =>
    AxiosApiHelper.delete(ENDPOINT_PRODUCTS + "/" + id)
  );
};
