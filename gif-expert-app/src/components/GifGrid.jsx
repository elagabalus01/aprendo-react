import {getGifts} from '../helpers/getGIfts.js'
import {useEffect, useState} from "react";
import {GiftItem} from "./GiftItem.jsx";
import '../css/styles.css'
import {useFetchHook} from "../hooks/UseFetchHook.js";
export const GifGrid = ({category})=>{

    const [counter, setCounter] = useState(10)

    const {images, isLoading} = useFetchHook(category)


    return (
        <>
            <h3>{category}</h3>
            { isLoading && (<h2>Cargando...</h2>)}
            <div className="card-grid">
                {
                    images.map(({id, title, url})=>(
                    <GiftItem key={id} title={title} url={url} />
                ))
            }
            </div>
            <p>{counter}</p>
            <button onClick={()=> setCounter(counter + 1)} > +1</button>
        </>
    )
}
