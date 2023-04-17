import AxiosApiHelper from '../../helper/axios_api.helper'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { addUsers, increment } from './counter.reducer'
import { REDUCER_COUNTER } from '../../utils/constants/string.constants'

const fetchUserById = createAsyncThunk(
    `${REDUCER_COUNTER}/fetchByIdStatus`,
    async (userId, thunkAPI) => {
        try {
            const response = await AxiosApiHelper.get("users")
            console.log(response);
            thunkAPI.dispatch(addUsers(response))
            return response.data
        } catch (error) {
            thunkAPI.dispatch(increment())
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export default fetchUserById