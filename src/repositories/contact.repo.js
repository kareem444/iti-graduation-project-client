import { useMutation, useQuery } from "@tanstack/react-query";
import AxiosApiHelper from "../helper/axios_api.helper";
import { useDispatch } from "react-redux";
import { showErrorAlert, showSuccessAlert } from "../redux/global/global.reducer";
import { ENDPOINT_CONTACTS } from './../utils/constants/endpoints.constants';
import { KEY_REPO_GET_ALL_CONTACTS, KEY_REPO_GET_One_CONTACT } from "../utils/constants/queries_keys.constants";

export const RepoCreateContact = () => {
    const dispatch = useDispatch();

    return useMutation((data) => AxiosApiHelper.post(ENDPOINT_CONTACTS, data), {
        onSuccess: () => {
            dispatch(showSuccessAlert("Contact Created successfully"));
        },
        onError: (error) => {
            dispatch(showErrorAlert(error));
        },
    });
};

export const RepoGetAllContacts = () => {
    
    const dispatch = useDispatch();
    return useQuery([KEY_REPO_GET_ALL_CONTACTS], () =>
    AxiosApiHelper.get(ENDPOINT_CONTACTS), {
        onError: error => {
            dispatch(showErrorAlert(error))
        }
    }
    )
};
export const RepoDeleteContact = () => {
    const dispatch = useDispatch();

    return useMutation(id => AxiosApiHelper.delete(ENDPOINT_CONTACTS + '/' + id),{
        onSuccess: () => {
            dispatch(showSuccessAlert("Contact deleted successfully"));
        },
        onError: (error) => {
            dispatch(showErrorAlert(error));
        },
    })
}


export const RepoGetOneContact = contactId => {
    const dispatch = useDispatch();
    return useQuery([KEY_REPO_GET_One_CONTACT, contactId], () =>
    AxiosApiHelper.get(ENDPOINT_CONTACTS + '/' + contactId), {
        onError: error => {
            dispatch(showErrorAlert(error))
        }
    }
    )
}