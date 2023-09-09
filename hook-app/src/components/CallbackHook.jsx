import {useCallback, useState} from "react";
import {ShowIncremente} from "./ShowIncremente.jsx";

export const CallbackHook = ()=>{
    const [counter, setCounter] = useState(10)

    const incrementeFather = useCallback(
        (value = 0) => {
        setCounter((counter)=>counter + value)
    }, []);


    //const incrementeFather = ()=>{
    //    setCounter(counter + 1)
    //}


    return (
        <>
            <h1>
                useCallback hook: {counter}
            </h1>
            <ShowIncremente incrementeFunction={incrementeFather}></ShowIncremente>
        </>
    )
}
