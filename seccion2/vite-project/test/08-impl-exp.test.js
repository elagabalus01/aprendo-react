import {getHeroesByOwner, getHeroeById} from "../src/otros-ejemplos/08-imp-exp.js";

describe("probando getHeroesByOwner", ()=>{
    test("validando heores", ()=>{
       let listaHeores = getHeroesByOwner("DC")
       expect(listaHeores.size).toBe(3)

    })
})
