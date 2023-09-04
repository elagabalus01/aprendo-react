import React from 'react'
import ReactDOM from 'react-dom/client'
import {HooksApp} from "./HooksApp.jsx";
import {CounterApp} from "./components/CounterApp.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HooksApp />
      <CounterApp></CounterApp>
  </React.StrictMode>,
)
