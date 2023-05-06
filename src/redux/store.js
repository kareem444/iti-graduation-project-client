import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counter.reducer'
import globalReducer from './global/global.reducer'
import userReducer from './user/user.reducer'
import orderReducer from './order/order.reducer'

export default configureStore({
    reducer: {
        counter: counterReducer,
        global: globalReducer,
        user: userReducer,
        order: orderReducer
    },
})