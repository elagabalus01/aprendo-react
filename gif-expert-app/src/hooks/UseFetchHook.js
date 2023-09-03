import {useEffect, useState} from "react";
import {getGifts} from "../helpers/getGIfts.js";

export const useFetchHook = (category) => {

    const [images, setImages] = useState([])


    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getGifts(category).then((images)=>{
                setImages(images)
                setIsLoading(false)
            }
        )
    }, []);

    return {
        images,
        isLoading
    }

}
