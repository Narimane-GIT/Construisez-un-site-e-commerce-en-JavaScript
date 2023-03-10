
const cart = []
searchItems()
console.log(cart  )
cart.forEach((product) => displayItem(product))

function searchItems() {
  const prodcutsQuantity = localStorage.length  
  for (let i = 0; i < prodcutsQuantity; i++) {
    const product = localStorage.getItem(localStorage.key(i))
    const productObj = JSON.parse(product)
    cart.push(productObj)
}  
}



function displayItem(product) {
    const article = putArticle(product)
    displayArticle(article)
    const div = putImage(product)
    article.appendChild(div)

    const cartItemContent = putCartItemContent(product)
    article.appendChild(cartItemContent)
}
function putCartItemContent(product) {
    const div = document.createElement("div")
    div.classList.add("cart__item__content")

    const h2 = document.createElement("h2")
    h2.textContent = product.name
    const p = document.createElement("p")
    p.textContent = product.color
    const p2 = document.createElement("p")
    p2.textContent = product.price + "€"

    div.appendChild(h2)
    div.appendChild(p)
    div.appendChild(p2)
    return div
}

function displayArticle(article) {  
    document.querySelector("#cart__items").appendChild
    (article)
}

function putArticle(product) {
    const article = document.createElement("article")
    article.classList.add("cart__item")
    article.dataset.id = product.id
    article.dataset.color = product.color
    return article


}

function putImage(product) {
    const div = document.createElement("div")
    div.classList.add("cart__item__img")

    const image = document.createElement('img')
    image.src = product.imageUrl
    image.alt = product.altTXT
    div.appendChild(image)
    return div
}  
