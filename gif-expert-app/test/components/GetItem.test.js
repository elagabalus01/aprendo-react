import {render, screen} from "@testing-library/react";
import {GiftItem} from "../../src/components";


describe("Prueba con propetypes", ()=>{
    const title = "titulo desde prueba"
    const url = "www.google.com"

    test("Prueba", ()=>{
        console.log("Hola mudno")

        const {container, getByText} = render(<GiftItem title={title} url={url}/>)
        ///expect(container).toMatchSnapshot()
        expect(getByText(title)).toBeTruthy()

        expect(container).toMatchSnapshot()

    })

    test("Prueba", ()=>{
        /*expect(render(<GiftItem/>)).toThrow();*/
    })

    test("Asignacion de propiedades", ()=>{
        render(<GiftItem title={title} url={url}/>)
        const imgTag = screen.getByRole("img")
        expect(imgTag.src).toContain(url)
        expect(imgTag.alt).toBe(title)
    })


    test("Debe contener el titulo", ()=>{
        render(<GiftItem title={title} url={url}/>)
        expect(screen.getByText(title)).toBeTruthy()
    })

})
