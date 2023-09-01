import {getByAltText, render} from "@testing-library/react";
import PrimerComponente from "../../src/primer-componente/primer-componente.jsx";

describe("prueba primer componetne", ()=>{
    test("debe hacer match con el titulo", ()=>{
        const title = "titulo desde prueba"
        const {container, getByText} = render(<PrimerComponente title={title}/>)
        ///expect(container).toMatchSnapshot()
        expect(getByText(title)).toBeTruthy()
        const h1 = container.querySelectorAll('h1')
        expect(h1[1].innerHTML).toContain(title)
    })

    test("debe hacer match con el titulo", ()=>{
        const title = "titulo desde prueba"
        const {getAllByText} = render(<PrimerComponente title={title}/>)
        ///expect(container).toMatchSnapshot()
        expect(getAllByText("100").length).toBe(1)

    })
})
