import {getGifts} from '../helpers/getGIfts.js'
import {useEffect, useState} from "react";
import {GiftItem} from "./GiftItem.jsx";
import '../css/styles.css'
export const GifGrid = ({category})=>{

    const [images, setImages] = useState([])

    const [counter, setCounter] = useState(10)

    useEffect(() => {
        getGifts(category).then((images)=>
            setImages(images)
        )
    }, []);



    return (
        <>
            <h3>{category}</h3>
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
