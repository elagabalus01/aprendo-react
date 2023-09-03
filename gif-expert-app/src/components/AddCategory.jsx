import {useState} from "react";
import {findRenderedDOMComponentWithTag} from "react-dom/test-utils";
import PropTypes from "prop-types";

export const AddCategory = ({onNewCategory})=> {
    const [inputValue, setInputValue] = useState('')
    const onInputChange = ({target})=>{
        console.log(target)
        setInputValue(target.value)
    }


    const onSubmit = (event)=>{
        event.preventDefault()
        console.log(inputValue)
        if(inputValue.trim().length <= 1){return}
        /*setCategories((currentValue)=>{
            return [...currentValue, inputValue]
        })*/
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmit} aria-label={"form"}>
            <input
                type="text"
                placeholder="Buscar gif"
                value = { inputValue}
                onChange={onInputChange}
            />
        </form>
    )

}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
