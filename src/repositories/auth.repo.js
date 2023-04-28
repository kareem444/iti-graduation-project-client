import { useMutation } from '@tanstack/react-query'
import {
    ENDPOINT_AUTH_LOGIN,
    ENDPOINT_AUTH_REGISTER
} from '../utils/constants/endpoints.constants'
import AxiosApiHelper from '../helper/axios_api.helper'
import useAuth from '../custom_hooks/use_auth'
import { useDispatch } from 'react-redux'
import { showErrorAlert } from '../redux/global/global.reducer'

export const RepoAuthRegister = () => {
    const { setAuth } = useAuth()
    const dispatch = useDispatch();

    return useMutation(
        async d => {
            let data = d

            if (d.role == 'client') {
                data = {
                    email: d.email,
                    password: d.password,
                    name: d.name
                }
            }

            return await AxiosApiHelper.post(ENDPOINT_AUTH_REGISTER, data)
        },
        {
            onSuccess: data => {
                setAuth(data)
            },
            onError: error => {
                dispatch(showErrorAlert(error))
            }
        }
    )
}

export const RepoAuthLogin = () => {
    const { setAuth } = useAuth()
    const dispatch = useDispatch();

    return useMutation(data => AxiosApiHelper.post(ENDPOINT_AUTH_LOGIN, data), {
        onSuccess: data => {
            setAuth(data)
        }, onError: error => {
            dispatch(showErrorAlert(error))
        }
    })
}
