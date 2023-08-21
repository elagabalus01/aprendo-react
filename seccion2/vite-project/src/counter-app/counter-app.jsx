import React, {useState} from 'react'


let value = 0;


function ConunterApp(){

    let toggle = true;

    let offset = 1;

    const [counter, setCount] = useState(0)

    const incrementar = function(){
        setCount((value)=>value+offset)
        console.log("valor toggle y offset ", toggle, offset)

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
            <button onClick={alterToggle}>Alter toggle</button>

        </>
    )
}

export default ConunterApp
