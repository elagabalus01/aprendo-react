import React from 'react'
import ReactDOM from 'react-dom/client'
import {JournalApp} from "./JournalApp.jsx";
import {AppRouter} from "./router/AppRouter.jsx";
import {BrowserRouter} from "react-router-dom";
import {AppTheme} from "./theme/AppTheme.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AppTheme>
            <JournalApp/>
        </AppTheme>
    </BrowserRouter>

)
