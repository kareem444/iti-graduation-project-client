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
        showSuccessAlert: (state, action) => {
            state.showSuccessAlert = true;
            state.successMessage = action.payload
        },
        hideErrorAlert: (state) => {
            state.showErrorAlert = false
        },
        hideSuccessAlert: (state) => {
            state.showSuccessAlert = false
        }
    },
})

export const { showErrorAlert, hideErrorAlert , hideSuccessAlert, showSuccessAlert} = globalSlice.actions

export default globalSlice.reducer