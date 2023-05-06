import { useMutation } from "@tanstack/react-query";
import { ENDPOINT_CONTACTS } from "../utils/constants/endpoints.constants";
import AxiosApiHelper from "../helper/axios_api.helper";
import { useDispatch } from "react-redux";
import { showErrorAlert } from "../redux/global/global.reducer";

export const RepoCreateContact = () => {
    const dispatch = useDispatch();

    return useMutation((data) => AxiosApiHelper.post(ENDPOINT_CONTACTS, data), {
        onError: (error) => {
            dispatch(showErrorAlert(error));
        },
    });
};