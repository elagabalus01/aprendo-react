import React, {useState} from 'react'


let value = 0;


function ConunterApp({value}){

    let initialValue = value;
    let toggle = true;

    let offset = 1;

    const [counter, setCount] = useState(value)

    const incrementar = function(){
        setCount((value)=>value+offset)
        console.log("valor toggle y offset ", toggle, offset)

    }

    const reset = function(){
        console.log("Ejecutando el reset")
        setCount(initialValue)
    }

    const alterToggle = function(){
        toggle = !toggle;
        offset = offset * -1
    }


    return (
        <>
            <h1>Countador</h1>
            <h1>valor actual {counter}</h1>
            <button onClick={incrementar}>{offset}</button>
            <button onClick={alterToggle}>toggle</button>
            <button aria-label="btn-reset" onClick={reset}>reset</button>

        </>
    )
}

export default ConunterApp
