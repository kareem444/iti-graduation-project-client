import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counter.reducer'

export default configureStore({
    reducer: {
        counter: counterReducer
    },
})