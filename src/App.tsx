import React from 'react';
import './App.css';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {QueryClient, QueryClientProvider} from "react-query";

import {store, persistor} from '@state/index';
import HomePage from "@pages/Home";

const queryClient = new QueryClient();

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <QueryClientProvider client={queryClient}>
                    {/* no routing needed */}
                    <HomePage/>
                </QueryClientProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;
