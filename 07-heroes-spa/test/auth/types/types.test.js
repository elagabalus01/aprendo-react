import {types} from "../../../src/auth/types/types.js";

describe("pruebas sobre types", ()=>{

    test("debe contener los types de login y logout", ()=>{
        expect(types.logout).toBeTruthy()
        expect(types.login).toBeTruthy()
    })


})
