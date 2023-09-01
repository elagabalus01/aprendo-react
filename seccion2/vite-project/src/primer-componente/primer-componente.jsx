import React from 'react'
import PropTypes from "prop-types";
import ReactDOM from "react-dom/client";

const holaMundo = [1,2,3,445]

const prueba = ()=>'Hola mundo cruel desde una funciòn'

function PrimerComponente({title, subtitle}){
    return (
        <>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>Hola mundo</p>
        </>
    )
}

PrimerComponente.prototype = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}
export default PrimerComponente;
