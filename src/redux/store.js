import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counter.reducer'
import globalReducer from './global/global.reducer'

export default configureStore({
    reducer: {
        counter: counterReducer,
        global: globalReducer
    },
})