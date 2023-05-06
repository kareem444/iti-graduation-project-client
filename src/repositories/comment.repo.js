import { useMutation } from "@tanstack/react-query";
import { ENDPOINT_COMMENTS } from "../utils/constants/endpoints.constants";
import AxiosApiHelper from "../helper/axios_api.helper";
import { useDispatch } from "react-redux";
import { showErrorAlert } from "../redux/global/global.reducer";

export const RepoCreateComment = () => {
    const dispatch = useDispatch();

    return useMutation((data) => AxiosApiHelper.post(ENDPOINT_COMMENTS + "/" + data.id, { comment: data.comment }), {
        onError: (error) => {
            dispatch(showErrorAlert(error));
        },
    });
};
