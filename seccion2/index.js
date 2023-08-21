const miPromesa = new Promise((resolve, reject)=>{
    console.log("Dentro de la promesa")

    resolve("HOLA MUNDO")
    return "PRUEBA"
})

miPromesa.then((mensaje)=>{
    console.log("NO SE")
    console.log(mensaje)
}).then(otro=>{
    console.log("Esto es otra cosa ", otro)
})

const resultado = async () => {
    respuesta = await new Promise((resolve)=>{
        resolve("HOLA MUNDO")
        return "PRUEBA"
    })
    console.log(respuesta)
}

console.log(await resultado())
