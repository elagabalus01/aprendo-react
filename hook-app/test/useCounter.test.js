import {useCounter} from "../src/hook/index.js";
import {act, renderHook} from "@testing-library/react";

describe('Pruebas en el useCounter', ()=>{
    test("probando useCounter",()=>{

        const {result} = renderHook(()=>useCounter())
        const {counter, decrement, increment, reset} = result.current

        expect(counter).toBe(10)

        expect(decrement).toEqual(expect.any(Function))
        expect(increment).toEqual(expect.any(Function))
        expect(reset).toEqual(expect.any(Function))

    })

    test('seteo del valor default', ()=>{
        const {result} = renderHook(()=>useCounter(100))
        const {counter} = result.current
        expect(counter).toBe(100)
    })


    test('Debe incrementar el contador', ()=>{
        const {result} = renderHook(()=>useCounter(10))
        const {counter, increment} = result.current

        act(()=>{
            increment()
        })


        expect(result.current.counter).toBe(11)

    })

    test('Debe incrementar el contador', ()=>{
        const {result} = renderHook(()=>useCounter(10))
        const {counter, increment} = result.current

        act(()=>{
            increment()
            increment(4)
        })


        expect(result.current.counter).toBe(15)

    })


    test('Debe decrementar el contador', ()=>{
        const {result} = renderHook(()=>useCounter(10))
        const {counter, decrement} = result.current

        act(()=>{
            decrement()
            decrement(4)
        })


        expect(result.current.counter).toBe(5)

    })


})
