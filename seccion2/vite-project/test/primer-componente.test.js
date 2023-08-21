import {getSaludo} from "../src/otros-ejemplos/index.js";

describe("pruebas en el primer componente", ()=>{
    test("prueba funcion saludo", ()=>{
        const expected = 'Hola Angel'
        const real = getSaludo('Angel')
        expect(real).toBe(expected)
    })
})
