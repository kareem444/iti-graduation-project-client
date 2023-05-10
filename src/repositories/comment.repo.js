import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ENDPOINT_COMMENTS } from "../utils/constants/endpoints.constants";
import AxiosApiHelper from "../helper/axios_api.helper";
import { useDispatch } from "react-redux";
import {
    showErrorAlert,
    showSuccessAlert,
} from "../redux/global/global.reducer";
import { KEY_REPO_GET_One_PRODUCT } from "../utils/constants/queries_keys.constants";

export const RepoCreateComment = () => {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();

    return useMutation(
        (data) =>
            AxiosApiHelper.post(ENDPOINT_COMMENTS + "/" + data.id, {
                comment: data.comment,
            }),
        {
            onSuccess: (d, data) => {
                queryClient.invalidateQueries([
                    KEY_REPO_GET_One_PRODUCT,
                    data.productId,
                ]);
                dispatch(showSuccessAlert("Comment created successfully"));
            },
            onError: (error) => {
                dispatch(showErrorAlert(error));
            },
        }
    );
};

export const RepoDeleteComment = () => {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();

    return useMutation(
        (data) =>
            AxiosApiHelper.delete(
                ENDPOINT_COMMENTS +
                "/" +
                data.productId +
                "commentId?commentId=" +
                data.commentId
            ),
        {
            onSuccess: (d, data) => {
                queryClient.invalidateQueries([
                    KEY_REPO_GET_One_PRODUCT,
                    data.productId,
                ]);
                dispatch(showSuccessAlert("Comment delete successfully"));
            },
            onError: (error) => {
                dispatch(showErrorAlert(error));
            },
        }
    );
};
