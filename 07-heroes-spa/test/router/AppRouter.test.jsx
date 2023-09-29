import {render, screen} from "@testing-library/react";
import {AppRouter} from "../../src/router/AppRouter.jsx";
import {AuthContext} from "../../src/auth/index.js";
import {MemoryRouter} from "react-router-dom";

describe("Pruebas sobre AppRouter", ()=>{

    test("debe mostrar la pagina si esta logueado", ()=>{

        const state = {
            authState: {
                logged: true
            }
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={state}>
                <AppRouter/>
            </AuthContext.Provider>

            </MemoryRouter>

        )

        screen.debug()

        const text = screen.getAllByText("Marvel")


        expect(text.length).toBeGreaterThanOrEqual(1)


    })

    test("debe mostrar login si no esta logueado", ()=>{

        const state = {
            authState: {
                logged: false
            }
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={state}>
                <AppRouter/>
            </AuthContext.Provider>

            </MemoryRouter>

        )

        screen.debug()

        const text = screen.getAllByText("Login")


        expect(text.length).toBeGreaterThanOrEqual(1)


    })

})
