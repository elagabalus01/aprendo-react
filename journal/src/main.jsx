import React from 'react'
import ReactDOM from 'react-dom/client'
import {JournalApp} from "./JournalApp.jsx";
import {AppRouter} from "./router/AppRouter.jsx";
import {BrowserRouter} from "react-router-dom";
import {AppTheme} from "./theme/AppTheme.jsx";
import {Provider} from "react-redux";
import {store} from "./store/index.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <AppTheme>
                <JournalApp/>
            </AppTheme>
        </BrowserRouter>
    </Provider>
)
