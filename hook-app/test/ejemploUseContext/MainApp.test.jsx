import {render, screen} from "@testing-library/react";
import {MainApp} from "../../src/ejemploUseContext/MainApp.jsx";
import {MemoryRouter} from "react-router-dom";

describe("pruebas sobre <MainApp?>", ()=>{

    test("debe mostrar homa page", ()=>{

        render(
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>

        )
        screen.debug()

        expect(screen.getByText('HOME PAGE')).toBeTruthy()

    })


    test("debe mostrar login page", ()=>{

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>

        )
        screen.debug()

        expect(screen.getByText('Login page')).toBeTruthy()

    })

})
