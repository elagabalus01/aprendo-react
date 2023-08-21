let apiKey = 'IUjobpvBtPcT3XMwhDOZvMOmryoplKMf'

let random = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`


const asyncFunction = async ()=>{

    const response = await fetch(random)

    const json = await response.json()

    const {data: {images : {original: {url}}}} = json
    const image = document.createElement("img")
    image.src = url;
    document.body.append(image)
    console.log(url)
}

asyncFunction()

