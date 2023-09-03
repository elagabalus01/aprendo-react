import {useState} from "react";
import {AddCategory, GifGrid} from "./components";
export const GifExpertApp = ()=>{

    const [categories, setCategories]= useState([])

    const onAddCategory = (category)=>{
        console.log("AGREGANDO")
        if(categories.includes(category)) return;
        setCategories((currentCategories)=>{
            return [...currentCategories, category]
        })
    }

    return (<>
        <h1>GIF EXPERT APP</h1>
        <AddCategory onNewCategory={(event)=>onAddCategory(event)}></AddCategory>
        {categories.map(
            categoria=> <GifGrid key={categoria} category={categoria}></GifGrid>
        )}

        <button onClick={onAddCategory}>Agregar</button>

        </>)
}
