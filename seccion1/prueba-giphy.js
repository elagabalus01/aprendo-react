let apiKey = 'IUjobpvBtPcT3XMwhDOZvMOmryoplKMf'

let random = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`

const request = fetch(random)

/*
request.then((items)=>{
    items.json().then(item =>{
        console.log(item)
    })
})
*/



request.then((items)=>
    items.json()
).then(({data}) =>{

    const {url} = data.images.original
    const img= document.createElement("img")
    img.src = url;
    document.body.append(img)
    console.log(url)
})



