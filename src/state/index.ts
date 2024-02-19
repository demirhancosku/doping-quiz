import {configureStore} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';

import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';


import {rootReducer} from './reducers';

const persistConfig = {
    key: 'root',
    storage,
};

// TODO: check this
// @ts-ignore
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

// TODO: check this before send
// @ts-ignore
export const persistor = persistStore(store);