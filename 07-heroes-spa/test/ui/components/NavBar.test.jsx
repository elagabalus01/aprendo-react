import {fireEvent, render, screen} from "@testing-library/react";
import {AuthContext} from "../../../src/auth/index.js";
import {Navbar} from "../../../src/ui/index.js";
import {removeUnnecessaryItems} from "@babel/preset-env/lib/filter-items.js";
import {MemoryRouter, useNavigate} from "react-router-dom";

const mockUseNavigate = jest.fn()

jest.mock('react-router-dom', ()=>({

    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=> mockUseNavigate

}))

describe("pruebas NavBar", ()=>{
    test("debe mostrar el nombre del usuario logueado", ()=>{

        const username = 'elagabalus'
        const saludoNavBar = `Hola: ${username}`

        const state = {

            authState: {
                logged: true,
                username: username
            }

        }

        render(
            <AuthContext.Provider value={state}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar></Navbar>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        screen.debug()

        const result = screen.getByText(saludoNavBar)

        expect(result).toBeTruthy()
    })

    test("debe llamar al logout", ()=>{
        const logOutMock = jest.fn()

        const username = 'elagabalus'
        const saludoNavBar = `Hola: ${username}`

        const state = {

            authState: {
                logged: true,
                username: username
            },
            logout: logOutMock

        }

        render(
            <AuthContext.Provider value={state}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar></Navbar>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        screen.debug()

        const buttonLogOut = screen.getByRole('button')

        fireEvent.click(buttonLogOut, {})

        expect(logOutMock).toHaveBeenCalled()
        expect(mockUseNavigate).toHaveBeenCalledWith('/login',{replace: true})
        screen.debug()
    })


})
