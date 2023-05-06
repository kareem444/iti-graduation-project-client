import { useMutation } from "@tanstack/react-query";
import { ENDPOINT_RATES } from "../utils/constants/endpoints.constants";
import AxiosApiHelper from "../helper/axios_api.helper";
import { useDispatch } from "react-redux";
import { showErrorAlert } from "../redux/global/global.reducer";

export const RepoCreateRate = () => {
    const dispatch = useDispatch();

    return useMutation((data) => AxiosApiHelper.post(ENDPOINT_RATES + "/" + data.id, { rate: data.rate }), {
        onError: (error) => {
            dispatch(showErrorAlert(error));
        },
    });
};
