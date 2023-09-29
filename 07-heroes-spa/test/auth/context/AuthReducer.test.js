import {authReducer} from "../../../src/auth/index.js";
import {types} from "../../../src/auth/types/types.js";

describe("pruebas AuthReducer", ()=>{

    test("pruebas estado inicial", ()=>{
        const state= authReducer({logged: false}, {})
        expect(state.logged).toBeFalsy()
    })

    test('debe de (login) llamar el login autenticar y establecer el user',()=>{

        const state= authReducer({}, {
            type: types.login,
            username: 'elagabalus'
        })
        expect(state.logged).toBeTruthy()
        expect(state.username).toBe('elagabalus')
    })
    test("debe de (logout) borrar el name del usuario y logged en false", ()=>{

        const state= authReducer({}, {
            type: types.logout
        })
        expect(state.logged).toBeFalsy()
        expect(state.username).toBeNull()

    })


})

