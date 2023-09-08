import {useCounter} from "../hook/index.js";
import {Small} from "./Small.jsx";
import {useMemo, useState} from "react";

export const MemoHook = ()=>{

    const {counter, increment} = useCounter(4000)
    const [show, setShow] = useState(true)


    const heavy =(numIteraciones)=>{
        for (let i = 0; i < numIteraciones; i++){
            console.log("heavy")
        }
        return `${numIteraciones} iteraciones realizadas`
    }

    const pruebaMemo = useMemo(() => heavy(counter), [counter]);


    return (
        <>
            <h1> counter

                <small> {counter} </small>
            </h1>
            <h4> {pruebaMemo}</h4>
            <button
                className="btn btn-primary"
                onClick={()=> {
                    increment()
                }}
            >
                +1
            </button>

            <button className="btn btn-primary"
            onClick={()=>{setShow(!show)}}>
                Show/hide {JSON.stringify(show)}
            </button>

        </>
    )
}
