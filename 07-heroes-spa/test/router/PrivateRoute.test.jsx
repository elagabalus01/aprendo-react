import {AuthContext, LoginPage} from "../../src/auth/index.js";
import {render, screen} from "@testing-library/react";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import {PrivateRoute} from "../../src/router/PrivateRoute.jsx";

describe("Prueba PrivateRouter", () => {

    test("Debe renderizar rutas privadas si esta logueado", () => {

        const mensaje = "Hola mundo"

        const state = {
            authState: {
                logged: true
            }
        }
        render(<AuthContext.Provider value={state}>
            <PrivateRoute>
                <h1>{mensaje}</h1>
            </PrivateRoute>
        </AuthContext.Provider>)

        screen.debug()

        const resultado = screen.getByText(mensaje)


        expect(resultado).toBeTruthy()
    })

    test("Debe renderizar rutas publicas si no esta logeado", () => {

        const mensaje = "PAGINA DE LOGIN"

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
                            <PrivateRoute>
                                <h1>Private Page</h1>
                            </PrivateRoute>
                            }/>
                        <Route path="/login" element={
                                <h1>{mensaje}</h1>
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
