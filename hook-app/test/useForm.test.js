import {act, renderHook} from "@testing-library/react";
import {useForm} from "../src/hook/index.js";


describe("debe regresar valor por defecto", ()=>{

    test("debe regresar estado inicial", ()=>{
        const {result} = renderHook(()=>{return useForm()})
        const {formState, onInputChange, onResetForm} = result.current
        expect(formState).toBeFalsy()
    })

    test("debe regresar estado inicial", ()=>{

        const inicitalState = {
            nombre: 'elagabalus',
            edad: 24
        }

        const {result} = renderHook(()=>{return useForm(inicitalState)})
        const {formState, onInputChange, onResetForm} = result.current
        expect(formState).toBe(inicitalState)
        expect(onInputChange).toEqual(expect.any(Function))
        expect(onResetForm).toEqual(expect.any(Function))

    })

    test("debe cambiar el nombre del formulario", ()=>{
        const inicitalState = {
            nombre: 'elagabalus',
            edad: 24
        }

        const {result} = renderHook(()=>{return useForm(inicitalState)})

        const {formState, onInputChange, onResetForm} = result.current;

        act(()=>{
            onInputChange({
                target:{
                    name: 'nombre',
                    value: 'angel'
                }
            })
        })

        expect(result.current.formState.nombre).toEqual('angel')


    })

    test("debe realizar el reset del formulario", ()=>{
        const inicitalState = {
            nombre: 'elagabalus',
            edad: 24
        }

        const {result} = renderHook(()=>{return useForm(inicitalState)})

        const {formState, onInputChange, onResetForm} = result.current;

        act(()=>{
            onResetForm()
        })

        expect(result.current.formState.nombre).toEqual('elagabalus')


    })



})
