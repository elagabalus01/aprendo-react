import {useCounter} from "../hook/index.js";
import {Small} from "./Small.jsx";
import {useState} from "react";

export const Memorize = ()=>{

    const {counter, increment} = useCounter()
    const [show, setShow] = useState(true)

    return (
        <>
            <h1> counter

                <Small value={counter}>  </Small>
            </h1>
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
