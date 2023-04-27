import { useMutation } from '@tanstack/react-query'
import { ENDPOINT_AUTH_LOGIN, ENDPOINT_AUTH_REGISTER } from '../utils/constants/endpoints.constants'
import AxiosApiHelper from '../helper/axios_api.helper'

export const RepoAuthRegister = () => {
    return useMutation(async (d) => {
        let data = d

        if (d.role == "client") {
            data = {
                email: d.email,
                password: d.password,
                name: d.name,
            }
        }

        return await AxiosApiHelper.post(ENDPOINT_AUTH_REGISTER, data)
    }
    )
}

export const RepoAuthLogin = () => {
    return useMutation((data) =>
        AxiosApiHelper.post(ENDPOINT_AUTH_LOGIN, data)
    )
}
