import {getHeroesByOwner, getHeroeById} from "../src/otros-ejemplos/08-imp-exp.js";

describe("probando getHeroesByOwner", ()=>{
    test("validando heores", ()=>{
       let listaHeores = getHeroesByOwner("DC")
        console.log(listaHeores.length)
       expect(listaHeores.length).toBe(3)

    })


    test("validando heores marvel", ()=>{
       let listaHeores = getHeroesByOwner("Marvel")
       expect(listaHeores.length).toBe(2)

    })

})
