import { createSlice } from '@reduxjs/toolkit'
import CounterState from './counter.state'
import fetchUserById from './counter.actions'
import { REDUCER_COUNTER } from '../../utils/constants/string.constants'


export const counterSlice = createSlice({
    name: REDUCER_COUNTER,
    initialState: CounterState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        addUsers: (state, action) => {
            state.users = action.payload
        },
    },
    extraReducers: (builder) => {
        // builder
        //     .addCase(fetchUserById.pending, (state, action) => {
        //         console.log("set loading to true");
        //     })
        //     .addCase(fetchUserById.fulfilled, (state, action) => {
        //         state.users.push(action.payload)
        //     })
        //     .addCase(fetchUserById.rejected, (state, action) => {
        //         console.log("show error message");
        //     })
    },
})

export const { increment, decrement, incrementByAmount, addUsers } = counterSlice.actions

export default counterSlice.reducer