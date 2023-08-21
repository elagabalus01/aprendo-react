console.log("HOLA MUDNO")

function saludar(nombre){
    return `Saludos ${nombre}`
}

console.log(saludar("Angel"))


const saludar2 = function (nombre){
    return `Saludos ${nombre}`
}

console.log(saludar2("Angel"))

const saludarLambda = (nombre) => `Saludos ${nombre}`


console.log(saludarLambda("elagabalus"))

function getUsuarioActivo(nombre){
    return {
        uid: "123456",
        username: nombre
    }
}

console.log(getUsuarioActivo("elagabalus"))


class User{

    uid = "123456"
    username

    constructor(nombre){
        this.username = nombre
    }
}


const getUsuarioActivo2 = (nombre) =>
    new User(nombre)


console.log(getUsuarioActivo2("Angel"))


const getUsuarioActivo3 = (nombre) => ( {
        uid: "123456",
        username: nombre
})

console.log(getUsuarioActivo3("elagabalus"))


const {username} = new User("ANgel")

console.log(username)

class Padre{
    user
    attr
    constructor(user, attr) {

        this.user = user;
        this.attr = attr;
    }
}


let obj = new Padre(new User("elagabalus"), 2)

console.log(obj)

const {user: {uid}} = obj

console.log(uid)


