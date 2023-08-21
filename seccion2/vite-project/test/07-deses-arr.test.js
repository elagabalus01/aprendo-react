import {retornaArreglo} from "../src/otros-ejemplos/07-deses-arr.js";

describe("prueas en 07 deses arr",()=>{
    test("probando desestructuración de arreglos", ()=>{
        const [letters, numbers] = retornaArreglo()
        expect(typeof letters).toBe('string')
        expect(typeof numbers).toBe('number')
    })
})


