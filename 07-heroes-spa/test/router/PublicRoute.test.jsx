import {AuthContext, LoginPage} from "../../src/auth/index.js";
import {PublicRoute} from "../../src/router/PublicRoute.jsx";
import {render, screen} from "@testing-library/react";
import {MemoryRouter, Route, Routes} from "react-router-dom";

describe("Prueba PrivateRouter", () => {

    test("Debe renderizar rutas publicas", () => {

        const mensaje = "Hola mundo"

        const state = {
            authState: {
                logged: false
            }
        }
        render(<AuthContext.Provider value={state}>
            <PublicRoute>
                <h1>{mensaje}</h1>
            </PublicRoute>
        </AuthContext.Provider>)

        screen.debug()

        const resultado = screen.getByText(mensaje)


        expect(resultado).toBeTruthy()
    })

    test("No debe renderizar rutas publicas si esta logueado y debe redireccionar a marvel", () => {

        const mensaje = "PAGINA DE MARVEL"

        const state = {
            authState: {
                logged: true
            }
        }
        render(
            <AuthContext.Provider value={state}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="/marvel" element={
                            <h1>PAGINA DE MARVEL</h1>
                        }/>
                        <Route path="/login" element={
                            <PublicRoute>
                                <LoginPage></LoginPage>
                            </PublicRoute>
                        }/>
                    </Routes>

                </MemoryRouter>

            </AuthContext.Provider>
        )

        screen.debug()

        const resultado = screen.getByText(mensaje)
        expect(resultado).toBeTruthy()
    })

})
