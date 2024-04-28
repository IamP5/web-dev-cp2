const SELECTED_WINE = JSON.parse(localStorage.getItem('selected-wine'));
const WINE_ELEMENT = document.getElementById('selected-wine');

let wishList = JSON.parse(localStorage.getItem('wish-list')) || [];

if (SELECTED_WINE) {
  WINE_ELEMENT.innerHTML = `
    <img src="https://via.placeholder.com/400x600" alt="Wine image" class="wine-card__image">
    <div class="wine-card">
      <h2 id="wine" class="wine-card__name">${SELECTED_WINE.nome}</h2>
      <p class="wine-card__type">Type: ${SELECTED_WINE.tipo}</p>
      <p class="wine-card__description">${SELECTED_WINE.descricao}</p>
      <p class="wine-card__price">Price: ${SELECTED_WINE.preco}</p>
      <button class="wine-card__cart-btn">Add to Cart</button>
      <button class="wine-card__wishlist-btn" onclick="addToWishList()">Add to Wishlist</button>
    </div>
  `;
} else {
  WINE_ELEMENT.innerHTML = '<p>Vinho não encontrado</p>';
}

function addToWishList() {
  const isWishListed = wishList.some(wine => wine.id === SELECTED_WINE.id);

  wishListButton = WINE_ELEMENT.querySelector('.wine-card__wishlist-btn')

  if (isWishListed) {
    wishList = wishList.filter(vinho => vinho.id !== SELECTED_WINE.id);
    wishListButton.classList.remove('vinho__button--wishlist-active');
  } else {
    wishList.push(SELECTED_WINE);
    wishListButton.classList.add('vinho__button--wishlist-active');
  }

  localStorage.setItem('wish-list', JSON.stringify(wishList));
}
