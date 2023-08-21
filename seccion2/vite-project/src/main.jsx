import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import PrimerComponente from './primer-componente/primer-componente.jsx'
import './index.css'
import CounterApp from "./counter-app/counter-app.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
      <PrimerComponente title="HOLA MUNDO DESDE LA PROP" />
      <CounterApp/>
  </React.StrictMode>,
)
