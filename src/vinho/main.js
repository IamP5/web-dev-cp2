const SELECTED_WINE = JSON.parse(localStorage.getItem('selected-wine'));
const RECIPES = JSON.parse(localStorage.getItem('recipes'));
const WINE_ELEMENT = document.getElementById('selected-wine');
const RECIPES_ELEMENT = document.getElementById('recipes');
const NAV_CART = document.getElementById('nav-cart');

let wishList = JSON.parse(localStorage.getItem('wish-list'));
let cart = JSON.parse(localStorage.getItem('cart'));

updateCartPrice();

if (SELECTED_WINE) {
  const recipesForSelectedWine = RECIPES.find(recipe => recipe.wineType === SELECTED_WINE.tipo).recipes;

  WINE_ELEMENT.innerHTML = `
    <img src="https://via.placeholder.com/400x600" alt="Wine image" class="wine-card__image">
    <div class="wine-card">
      <h2 id="wine" class="wine-card__name">${SELECTED_WINE.nome}</h2>
      <p class="wine-card__type">Tipo de vinho: ${SELECTED_WINE.tipo}</p>
      <p class="wine-card__description">${SELECTED_WINE.descricao}</p>
      <p class="wine-card__price">Preço: R$ ${SELECTED_WINE.preco}</p>
      <button class="wine-card__cart-btn" onclick="addToCart()">Add to Cart</button>
      <button class="wine-card__wishlist-btn" onclick="addToWishList()">Add to Wishlist</button>
    </div>
  `;

  recipesForSelectedWine.forEach(recipe => {
    RECIPES_ELEMENT.innerHTML += `
      <div class="recipe-card">
        <h3 class="recipe-card__name">${recipe.name}</h3>
        <p class="recipe-card__description">${recipe.description}</p>
      </div>
    `;
  });
} else {
  WINE_ELEMENT.innerHTML = '<p>Vinho não encontrado</p>';
}

function updateCartPrice() {
  const CART = JSON.parse(localStorage.getItem('cart'));

  if (NAV_CART.children.length > 1) {
    NAV_CART.removeChild(NAV_CART.lastElementChild);
  }

  NAV_CART.innerHTML += `
    <span>R$ ${CART.price}</span>
  `
}

function addToCart() {
  cart.items.push(SELECTED_WINE);
  cart.price += SELECTED_WINE.preco;

  localStorage.setItem('cart', JSON.stringify(cart));

  alert('Produto adicionado ao carrinho!');
  updateCartPrice();
}

function addToWishList() {
  const isWishListed = wishList.some(wine => wine.id === SELECTED_WINE.id);

  wishListButton = WINE_ELEMENT.querySelector('.wine-card__wishlist-btn')

  if (isWishListed) {
    wishList = wishList.filter(vinho => vinho.id !== SELECTED_WINE.id);
    wishListButton.classList.remove('vinho__button--wishlist-active');
    alert('Produto removido da lista de desejos!');
  } else {
    wishList.push(SELECTED_WINE);
    wishListButton.classList.add('vinho__button--wishlist-active');
    alert('Produto adicionado à lista de desejos!');
  }

  localStorage.setItem('wish-list', JSON.stringify(wishList));

}
