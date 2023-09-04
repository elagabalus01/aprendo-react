import {useState} from "react";

export const CounterApp = ()=>{

    const [counter, setCounter] = useState({
        counter1: 1,
        counter2: 2,
        counter3: 3
    })


    return (
        <>
            <h1>Counter app</h1>
            <h2>{counter.counter1}</h2>
            <h2>{counter.counter2}</h2>
            <h2>{counter.counter3}</h2>

            <button className={"btn"} onClick={()=>{
                setCounter({
                    counter1: counter.counter1 +1,
                    counter2: counter.counter2,
                    counter3: counter.counter3
                })
            }}> +1 </button>

        </>
    )


}
