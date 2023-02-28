const numberOfProdcuts = localStorage.length

const cart = []

for (let i=0; i < numberOfProdcuts; i++) {
    const product = localStorage.getItem(localStorage.key(i))
    const productObj = JSON.parse(product)
}

