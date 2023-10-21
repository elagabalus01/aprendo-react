import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, incrementByAmount} from "./store/slices/counter";

function App() {
    const { counter } = useSelector( state => state.counter )
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
          <label>count is {counter}</label>
          <br/>
        <button onClick={() => dispatch(increment())}>
            increment
        </button>
         <button onClick={() => dispatch(decrement())}>
             decrement
        </button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
            increment by amount
        </button>
      </div>
    </>
  )
}

export default App
