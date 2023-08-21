import {getUser, getUsuarioActivo} from "../src/otros-ejemplos/05-funciones.js";


describe('pruebas sobre 05-funciones', function () {

    test('test getUser',()=> {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const realUser = getUser();
        expect(testUser).toEqual(realUser)

    })

    test('test getUsuarioActivo',()=> {
        const testUser = {
            uid: '01',
            username: 'elagabalus'
        }

        const realUser = getUsuarioActivo('elagabalus');

        expect(testUser.username).toStrictEqual(realUser.username)

    })
});
