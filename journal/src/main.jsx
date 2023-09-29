import React from 'react'
import ReactDOM from 'react-dom/client'
import {JournalApp} from "./JournalApp.jsx";
import {AppRouter} from "./router/AppRouter.jsx";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <JournalApp/>
    </BrowserRouter>

)
