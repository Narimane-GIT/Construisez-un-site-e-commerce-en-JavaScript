const paramsString = window.location.search
const searchParams = new URLSearchParams(paramsString)
const id = searchParams.get("id")
if (id != null) {
    let image, title, descriptions
}

fetch(`http://localhost:3000/api/products/${id}`)
.then(response => response.json())
.then((res) => articleData(res))

function articleData(kanap) {
    console.log({kanap})
    const name = kanap.name
    const altTXT = kanap.altTXT
    const colors = kanap.colors
    const color = kanap.color
    const price = kanap.price
    const description = kanap.description
    const imageUrl = kanap.imageUrl
    image = imageUrl
    title =name
    descriptions = description
    putImage(imageUrl, altTXT)
    putTitle(name)
    putPrice(price)
    putDescription(description)
    putColors(colors)

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

function putColors(colors) {
    const select = document.querySelector("#colors")         
    if (select != null) {
        colors.forEach((color) => {
            const option = document.createElement("option")
            option.value = color
            option.textContent = color                        
            select.appendChild(option)
            
        })
    }

}       

const button = document.querySelector("#addToCart")
if (button != null) {
    button.addEventListener("click", (e) => {
        const color = document.querySelector("#colors").value
        const quantity =document.querySelector("#quantity").value
        if (color == null || color === "" || quantity == null || quantity == 0) {
            alert("SVP, choisissez une couleur et une quantité")
            return 
        }
        cartSave(color, quantity)
        window.location.href = "cart.html"
    }
    )
} 
function cartSave(color, quantity) {
    const donnees = {
      id: id,
      imageUrl: image,
      name: title,
      description: descriptions,
      color: color,
      quantity: quantity,
    }
    localStorage.setItem(id, JSON.stringify(donnees))
}