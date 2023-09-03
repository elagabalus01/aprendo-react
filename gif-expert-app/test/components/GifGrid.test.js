import {render, screen} from "@testing-library/react";
import {GifGrid} from "../../src/components/index.js";
import {useFetchHook} from "../../src/hooks/UseFetchHook.js";

jest.mock("../../src/hooks/UseFetchHook.js")

describe("gifGrid test", ()=>{



    const category = "PRUEBA"

    test("gifGrid test", ()=>{

        useFetchHook.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category}></GifGrid>)

        expect(screen.getByText("Cargando..."))

        expect(screen.getByText(category))

    })

    test("gifGrid test", ()=>{

        useFetchHook.mockReturnValue({
            images: [
                {
                    id: 1,
                    title: "prueba",
                    url: "google.com"
                }
            ],
            isLoading: true
        })

        render(<GifGrid category={category}></GifGrid>)

        expect(screen.getByText("Cargando..."))

        expect(screen.getByText(category))

        screen.debug()

        expect(screen.getAllByRole('img').length).toBe(1)

    })

})
