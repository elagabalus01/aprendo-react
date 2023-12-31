import {MultipleCustomHooks} from "../../src/components/MultipleCustomHooks.jsx";
import {render, screen} from "@testing-library/react";

import 'whatwg-fetch'
import {useFetch} from "../../src/hook/index.js";
import {useCounter} from "../../src/hook/useCounter.js"

jest.mock("../../src/hook/index.js")

jest.mock("../../src/hook/useCounter.js")


describe("pruebas en MultipleCustomHooks", ()=>{

    const incrementMockFunction = jest.fn()


    useCounter.mockReturnValue(
            {
                counter : 1,
                increment: incrementMockFunction
            }
        )

    beforeEach(()=>{
        jest.clearAllMocks()
    })



    test("debe mostrar el componente por defacto", ()=>{

        useFetch.mockReturnValue(
            {
                data: [{
                    author: 'elagabalus',
                    quote: "Hola mundo"
                }],
                isLoading: true,
                hasError: null
            }
        )

        render(<MultipleCustomHooks></MultipleCustomHooks>)
        screen.debug()

        expect(screen.getByText("Loading..."))
        expect(screen.getByText("BreakingBad Quotes"))

        /*const nextButton = screen.getByRole('button', {
                name: 'Next quote'
            }
        )

        console.log(nextButton.disabled)*/
    })

    test("Mock", ()=>{

        useFetch.mockReturnValue(
            {
                data: [{
                    author: 'elagabalus',
                    quote: "Hola mundo"
                }],
                isLoading: true,
                hasError: null
            }
        )

        render(<MultipleCustomHooks></MultipleCustomHooks>)



    })


})
