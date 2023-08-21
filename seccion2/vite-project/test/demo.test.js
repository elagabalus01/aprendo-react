test('esta prueba no debe fallar', ()=>{
    console.log("Hola mundo")
    throw new Error("HAY UN ERROR EN ESTA PRUEBA")
})

describe("pruebas", ()=>{
        test("Prueba", ()=>{
        let message = "Hola mundo"
        let message2 = message.trim()

        expect(message).toBe(message2)
    })

})
