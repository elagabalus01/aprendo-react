import {getByAltText, render, screen} from "@testing-library/react";
import PrimerComponente from "../../src/primer-componente/primer-componente.jsx";

describe("prueba primer componetne", ()=>{

    const title = "ESTE ES EL TITULO";
    const subtitulo = "EL SUBTITULO"

    test("Debe hacer match con el snapshot", ()=>{
        const {container} = render(<PrimerComponente title={title}></PrimerComponente>)

        expect(container).toMatchSnapshot()
    })

    test("Debe mostrar el mensaje hola mudno", ()=>{
        render(<PrimerComponente title={title}></PrimerComponente>)
        expect(screen.getByText(title)).toBeTruthy()
    })


    test("Debe mostrar el titulo en un h1", ()=>{
        render(<PrimerComponente title={title}></PrimerComponente>)

        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title)
    })


    test("Debe mostrar el subtitulo en un h2", ()=>{
        render(<PrimerComponente title={title} subtitle={subtitulo}></PrimerComponente>)

        expect(screen.getAllByText(subtitulo).length).toBe(1)
    })


})
