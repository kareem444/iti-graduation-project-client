import { createSlice } from '@reduxjs/toolkit'
import { REDUCER_USER } from '../../utils/constants/string.constants'
import UserState from './user.state';

export const userSlice = createSlice({
    name: REDUCER_USER,
    initialState: UserState,
    reducers: {
        setAuth: (state, action) => {
            state.user = action.payload
        },
        deleteAuth: (state) => {
            state.user = null
        }
    },
})

export const { setAuth, deleteAuth } = userSlice.actions

export default userSlice.reducer