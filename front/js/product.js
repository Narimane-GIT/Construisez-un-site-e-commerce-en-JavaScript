const paramsString = window.location.search
const searchParams = new URLSearchParams(paramsString)
const id = searchParams.get("id");

fetch(`http://localhost:3000/api/products/${id}`)
.then(response => response.json())
.then((res) => articleData(res))

function articleData(kanap) {
    console.log({kanap})
    const _id = kanap._id
    const name = kanap.name
    const altTXT = kanap.altTXT
    const colors = kanap.colors
    const price = kanap.price
    const description = kanap.description
    const imageUrl = kanap.imageUrl
    putImage(imageUrl, altTXT)
    putTitle(name)
    putPrice(price)
    putDescription(description)
    putSettings(colors)
}

function putImage(imageUrl, altTXT) {
    const image = document.createElement("img")
    image.src = imageUrl
    image.alt = altTXT
    const parent = document.querySelector(".item__img")
    if (parent != null) parent.appendChild(image)

} 
function putTitle(name) {
    const h1 = document.querySelector("#title")
    if (h1 != null) h1.textContent = name
}
 
function putPrice(price) {
    const span = document.querySelector("#price")
    if (span != null) span.textContent = price
}

function putDescription (description) {
    const p = document.querySelector("#description")
    if (p != null) p.textContent = description
}

function putSettings (colors) {
    const select = document.querySelector("#colors")
    if (select != null) select.textContent = colors
}