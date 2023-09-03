import {AddCategory} from "../../src/components/index.js";
import {fireEvent, render, screen} from "@testing-library/react"


describe("AddCategory test", ()=>{
    const inputValue = "Hola mundo"
    test("debe cambiar el valor de la caja de texto", ()=>{
        render(<AddCategory onNewCategory={()=>{}}></AddCategory>)

        const input = screen.getByRole("textbox");
        fireEvent.input(input, {
            target: {
                value: inputValue
            }
        })

        screen.debug()

        expect(input.value).toBe(inputValue)

    })

    test("se debe ejecutar onNewCategory si el input value tiene valor", ()=>{

        const onNewCategory = jest.fn()


        render(<AddCategory onNewCategory={onNewCategory}></AddCategory>)
        const input = screen.getByRole("textbox");

        const form = screen.getByRole("form");

        fireEvent.input(input, {
            target: {
                value: inputValue
            }
        })

        fireEvent.submit(form)

        expect(input.value).toBe('')

        expect(onNewCategory).toHaveBeenCalled()
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
        screen.debug()

    })


    test("No debe ser llamado si tiene input vacio", ()=>{

        const onNewCategory = jest.fn()


        render(<AddCategory onNewCategory={onNewCategory}></AddCategory>)
        const input = screen.getByRole("textbox");

        const form = screen.getByRole("form");

        fireEvent.input(input, {
            target: {
                value: null
            }
        })

        fireEvent.submit(form)

        expect(input.value).toBe('')

        expect(onNewCategory).toHaveBeenCalledTimes(0)
        screen.debug()

    })
})
