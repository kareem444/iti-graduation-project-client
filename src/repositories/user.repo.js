import { useMutation, useQuery } from '@tanstack/react-query'
import {
    ENDPOINT_AUTH_REGISTER,
    ENDPOINT_CONTACTS,
    ENDPOINT_USERS,
    ENDPOINT_USER_PROFILE
} from '../utils/constants/endpoints.constants'
import {
    KEY_REPO_GET_ALL_USERS,
    KEY_REPO_GET_One_USER,
    KEY_REPO_USER_PROFILE
} from '../utils/constants/queries_keys.constants'
import AxiosApiHelper from '../helper/axios_api.helper'
import useAuth from '../custom_hooks/use_auth'
import { useDispatch } from 'react-redux'
import { showErrorAlert, showSuccessAlert } from '../redux/global/global.reducer'

export const RepoCreateUser = () => {
    const dispatch = useDispatch();

    return useMutation(
        async (data) =>
            await AxiosApiHelper.post(
                ENDPOINT_AUTH_REGISTER,
                data
            ), {
        onSuccess: () => {
            dispatch(showSuccessAlert("User created successfully"));
        },
        onError: (error) => {
            dispatch(showErrorAlert(error));
        },
    }
    );
};

export const RepoGetAllUsers = () => {
    const dispatch = useDispatch();

    return useQuery(KEY_REPO_GET_ALL_USERS, () =>
        AxiosApiHelper.get(ENDPOINT_USERS), {
        onError: error => {
            dispatch(showErrorAlert(error))
        }
    }
    )
}

export const RepoGetOneUser = userId => {
    const dispatch = useDispatch();
    return useQuery([KEY_REPO_GET_One_USER, userId], () =>
        AxiosApiHelper.get(ENDPOINT_USERS + '/' + userId), {
        onError: error => {
            dispatch(showErrorAlert(error))
        }
    }
    )
}

export const RepoUserProfile = () => {
    const dispatch = useDispatch();
    return useQuery(
        [KEY_REPO_USER_PROFILE],
        () => AxiosApiHelper.get(ENDPOINT_USER_PROFILE),
        {
            enabled: false,
            onError: error => {
                dispatch(showErrorAlert(error))
            }
        }
    )
}

export const RepoUpdateMyProfile = () => {
    const dispatch = useDispatch();
    const { authData, setAuth } = useAuth()

    return useMutation(
        data => {
            const formData = new FormData()
            if (data.name) {
                formData.append('name', data.name)
            }
            if (data.email) {
                formData.append('email', data.email)
            }
            if (data.bio) {
                formData.append('bio', data.bio)
            }
            if (data.file) {
                formData.append('file', data.file)
            }

            return AxiosApiHelper.patch(ENDPOINT_USERS, formData, {
                'Content-Type': 'multipart/form-data'
            })
        },
        {
            onSuccess: (response, data) => {
                if (data.file != null) {
                    data["avatar"] = URL.createObjectURL(data.file)
                }
                setAuth({
                    ...authData,
                    ...data
                })
                dispatch(showSuccessAlert("Profile updated successfully"))
            },
            onError: error => {
                dispatch(showErrorAlert(error))
            }
        }
    )
}

export const RepoUpdateUser = () => {
    const dispatch = useDispatch();

    return useMutation(
        data => {
            return AxiosApiHelper.patch(ENDPOINT_USERS, data, {
                'Content-Type': 'multipart/form-data'
            })
        }, {
        onSuccess: () => {
            dispatch(showSuccessAlert("User Updated successfully"));
        },
        onError: (error) => {
            dispatch(showErrorAlert(error));
        },
    }
    )
}

export const RepoDeleteUser = () => {
    return useMutation(id => AxiosApiHelper.delete(ENDPOINT_CONTACTS + '/' + id))
}

// export const RepoCreateUser = () => {
//     const queryClient = useQueryClient()
//     return useMutation((data) =>
//         AxiosApiHelper.post(ENDPOINT_CONTACTS, data), {
//         onSuccess: () => {
//             //#region This will cause the get all users function to refetch and get new to data of the users

//             queryClient.invalidateQueries(KEY_REPO_GET_ALL_USERS)

//             //#endregion

//             //#region This will update the old users cached data without causing any refresh

//             queryClient.setQueryData(KEY_REPO_GET_ALL_USERS, (oldDate) => {
//                 return {
//                     ...oldDate,
//                     data: [...oldDate.data, data]
//                 }
//             })

//             //#endregion
//         },

//         //#region implement optimistic update
//         onMutate: (newUser) => {
//             // Cancel any outgoing retches (so they don't overwrite our optimistic update)
//             queryClient.cancelQueries(KEY_REPO_GET_ALL_USERS)
//             // Update the cached data with the new data
//             const previousUsers = queryClient.getQueryData(KEY_REPO_GET_ALL_USERS)
//             queryClient.setQueryData(KEY_REPO_GET_ALL_USERS, (oldDate) => {
//                 return {
//                     ...oldDate,
//                     data: [...oldDate.data, newUser]
//                 }
//             })
//             // Return the previous value
//             return { previousUsers }
//         },
//         // If the mutation fails, use the value returned from onMutate to roll back
//         onError: (err, newUser, context) => {
//             queryClient.setQueryData(KEY_REPO_GET_ALL_USERS, context.previousUsers)
//         },
//         // Always refetch after error or success:
//         onSettled: () => {
//             queryClient.invalidateQueries(KEY_REPO_GET_ALL_USERS)
//         },
//         //#endregion
//     }
//     )
// }
