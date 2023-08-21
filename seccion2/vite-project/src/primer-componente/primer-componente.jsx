import React from 'react'
import PropTypes from "prop-types";
import ReactDOM from "react-dom/client";

const holaMundo = [1,2,3,445]

const prueba = ()=>'Hola mundo cruel desde una funciòn'

function PrimerComponente({title, subtitle}){
    return (
        <>
            <h1>{prueba()}</h1>
            <h1>{title}</h1>
            <p>Hola mundo</p>
        </>
    )
}

PrimerComponente.prototype = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}
export default PrimerComponente;
