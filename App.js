import React from 'react';
import {AppProvider} from './src/context/AppContext';
import Routes from './src/navigation/Routes';

const App = () => {
    return (
        <AppProvider>
            <Routes />
        </AppProvider>
    );
};

export default App;
