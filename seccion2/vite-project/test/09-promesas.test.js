import {getHeroeByIdAsync} from "../src/otros-ejemplos/09-promesas.js";

describe("prueba 09 promesas", ()=>{
    test("prueba metodo asincrono", (done)=>{
        const id = 1
        getHeroeByIdAsync(id).then((hero)=>{
                expect(hero).toEqual(
                    {
                        id: 1,
                        name: 'Batman',
                        owner: 'DC'
                    }
                )
                done()
            }
        )
    })

    test("prueba metodo asincrono debe fallar", (done)=>{
        const id = 100
        getHeroeByIdAsync(id)
            .then(heroe =>{
                expect(heroe).toBeFalsy()
                done()
            })
            .catch((error)=>{
                expect(error).toBe('No se pudo encontrar el héroe')
                done()
            }
        )
    })

})
