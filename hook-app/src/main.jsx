import React from 'react'
import ReactDOM from 'react-dom/client'
import {HooksApp} from "./HooksApp.jsx";
import {CounterApp} from "./components/CounterApp.jsx";
import {CounterWithCustomHook} from "./components/CounterWithCustomHook.jsx";
import {EjemploUseEffect} from "./components/EjemploUseEffect.jsx";
import {FormWithCusstomHook} from "./components/FormWithCusstomHook.jsx";
import {MultipleCustomHooks} from "./components/MultipleCustomHooks.jsx";
import {FocusScreen} from "./components/FocusScreen.jsx";
import {EjemploLayoutEffect} from "./components/EjemploLayoutEffect.jsx";
import {Memorize} from "./components/Memorize.jsx";
import {MemoHook} from "./components/MemoHook.jsx";
import {CallbackHook} from "./components/CallbackHook.jsx";
import {Padre} from "./components/07-tarea-memo/Padre.jsx";

import './intro-reducer/introReducer.js'
import {TodoApp} from "./intro-reducer/TodoApp.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <TodoApp/>

  //</React.StrictMode>,
)
