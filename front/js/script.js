//je recupere les données depuis api
fetch('http://localhost:3000/api/products')
//premiere promesse
  .then(Response => Response.json())
  //deuxième promesse
  .then(donnees => {
    Products(donnees);
  })

//Affichage des produits
function Products(donnees){
    for (product of donnees) {
      //Pour trouver ID dans index.html
      const itemProduct = document.getElementById(`items`);
      //Le modifier`` et ajouter tous les elements +
      itemProduct.innerHTML += `
        <a href="./product.html?id=${product._id}">
        <article>
          <img src="${product.imageUrl}" alt="${product.altTXT}">
          <h3 class="productName">${product.name}</h3>
          <p class="productDescription">${product.description}</p>
        </article>
        </a>
        `;
    }
}