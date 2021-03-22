import {configureStore, getDefaultMiddleware, combineReducers} from '@reduxjs/toolkit'
import phoneBookReducer from './phoneBook/phoneBookReducer'
import logger from 'redux-logger'
import authReducer from './authorization/authReducer'
import storage from 'redux-persist/lib/storage' 
import 
{
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
}from 'redux-persist'


const authPersistConfig = {
    key: 'token',
    storage,
    whitelist: ['token']
}
const rootReducer = combineReducers({
    phoneBook: phoneBookReducer,
    authorization: persistReducer(authPersistConfig, authReducer)
})

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        },
    }),
    logger,
    ]

const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: process.env.NODE_ENV === 'development',
})

const persistor = persistStore(store)
 
// eslint-disable-next-line import/no-anonymous-default-export
export default {store, persistor}