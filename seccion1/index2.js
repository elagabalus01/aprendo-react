import {heroes} from './heroes.js'


console.log(heroes)

const getHeroById = (id) => heroes.find( element => element.id === id)


console.log(getHeroById(1))


console.log(getHeroById(2))

console.log(getHeroById(3))


const getHeroByOwner = (owner) => heroes.filter( element => element.owner === owner)

console.log(getHeroByOwner('DC'))
console.log(getHeroByOwner('Marvel'))
