import {fireEvent, render, screen} from "@testing-library/react";
import {LoginPage} from "../../src/ejemploUseContext/LoginPage.jsx";
import {UserContext} from "../../src/ejemploUseContext/context/UserContext.jsx";




describe("prueba LoginPage",()=>{

    test("debe mostrar el componente sin el usuario", ()=>{

        render(
            <UserContext.Provider value={{user: null}} >
                <LoginPage/>
            </UserContext.Provider>

        )

        screen.debug()

        const pre = screen.getByLabelText('pre-label')

        expect(pre.innerHTML).toBe("null")

    })

    test("debe de llamar el set user cuando se hace click en el boton", ()=>{

    })

    test("click en agregar usuario", ()=>{

        const mockSetUser = jest.fn()

        render(
            <UserContext.Provider value={{user:"elagabalus", setUser: mockSetUser}} >
                <LoginPage/>
            </UserContext.Provider>

        )

        screen.debug()

        const botonAgregar = screen.getByRole("button")

        fireEvent.click(botonAgregar)

        const pre = screen.getByLabelText('pre-label')

        expect(pre.innerHTML).toBe("null")

    })

    test("debe de llamar el set user cuando se hace click en el boton", ()=>{

        const mockSetUser = jest.fn()

        render(
            <UserContext.Provider value={{user:"elagabalus", setUser: mockSetUser}} >
                <LoginPage/>
            </UserContext.Provider>

        )

        screen.debug()

        const botonAgregar = screen.getByRole("button")

        fireEvent.click(botonAgregar)

        expect(mockSetUser).toBeCalledWith({id:123, name: 'Angel', email: 'angelsantander609@gmail.com'})

        const pre = screen.getByLabelText('pre-label')

        expect(pre.innerHTML).toContain("elagabalus")


    })

})
