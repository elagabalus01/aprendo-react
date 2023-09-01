import {fireEvent, render, screen} from "@testing-library/react";
import CounterApp from "../../src/counter-app/counter-app.jsx";

describe("PRUEBAS SOBRE COUNTER APP", ()=>{

    const valorInicial = 100

    test("debe hacer match con el snapshot", ()=>{
        const {container}= render(<CounterApp></CounterApp>)
        expect(container).toMatchSnapshot()
    })

    test("debe mostrar e valor inicial de 100", ()=>{
        const {getAllByText}= render(<CounterApp value={valorInicial}></CounterApp>)
        expect(screen.getByText(`valor actual ${valorInicial}`)).toBeTruthy()
    })

    test("debe incrementar con el boton +1", ()=>{
        render(<CounterApp value={valorInicial}></CounterApp>)
        fireEvent.click(screen.getByText('1'))

        expect(screen.getByText(`valor actual ${valorInicial + 1}`)).toBeTruthy()

    })


    test("debe decrementar con el boton -1", ()=>{
        render(<CounterApp value={valorInicial}></CounterApp>)
        fireEvent.click(screen.getByText('toggle'))
        screen.debug()
        fireEvent.click(screen.getByText('1'))
        expect(screen.getByText(`valor actual ${valorInicial - 1}`)).toBeTruthy()

    })

    test("Reset", ()=>{
        render(<CounterApp value={valorInicial}></CounterApp>)
        fireEvent.click(screen.getByText('1'))
        fireEvent.click(screen.getByText('1'))
        fireEvent.click(screen.getByText('1'))
        fireEvent.click(screen.getByText('1'))
        //fireEvent.click(screen.getByText('reset'))

        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))

        expect(screen.getByText(`valor actual ${valorInicial}`)).toBeTruthy()

    })

})
