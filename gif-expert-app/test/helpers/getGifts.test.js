import {getGifts} from "../../src/helpers/getGIfts.js";

describe("getGift test", ()=>{
    test("prueba", async()=>{
        const response = await getGifts("python")

        expect(response.length).toBeGreaterThan(0);

        expect(response[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })


    })
})
