import { createSlice } from '@reduxjs/toolkit'
import GlobalState from './global.state'
import { REDUCER_GLOBAL } from '../../utils/constants/string.constants'

export const globalSlice = createSlice({
    name: REDUCER_GLOBAL,
    initialState: GlobalState,
    reducers: {
        showErrorAlert: (state, action) => {
            state.showErrorAlert = true;
            state.error = action.payload
        },
        hideErrorAlert: (state) => {
            state.showErrorAlert = false
        },
    },
})

export const { showErrorAlert, hideErrorAlert } = globalSlice.actions

export default globalSlice.reducer