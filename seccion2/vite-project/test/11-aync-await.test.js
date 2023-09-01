import {getImagen} from "../src/otros-ejemplos/11-async-await.js";

describe('pruebas en 11-async-await.js', function () {
    test("det imagen debe retornar url de la imagen",async()=>{
        const url = await getImagen()
        expect(typeof  url).toBe("string")
    })
});
