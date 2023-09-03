import {useFetchHook} from "../../src/hooks/UseFetchHook.js";
import {renderHook, waitFor} from "@testing-library/react";
import * as assert from "assert";

describe("pruebas useFetchHook", ()=>{
    test("prueba del hook valor inicial", ()=>{
        const {result} = renderHook(()=> useFetchHook("HI"))

        console.log(result)

        const {images, isLoading} = result.current

        expect(images.length).toBe(0)

        expect(isLoading).toBe(true)
    })

    test("prueba del hook valor al renderizar ", async ()=>{
        const {result} = renderHook(()=> useFetchHook("HI"))

        console.log(result)

        await waitFor(
            ()=>{
                expect(result.current.images.length).toBeGreaterThan(0)
            }
        )

        const {images, isLoading} = result.current

        expect(images.length).toBeGreaterThan(0)

        expect(isLoading).toBe(false)
    })


})
