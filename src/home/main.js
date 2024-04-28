const NAV_CART = document.getElementById('nav-cart');
const LISTA_VINHOS = document.getElementById('lista-vinhos');
const wines = JSON.parse(localStorage.getItem('wines')) || [];

updateCartPrice();

wines.forEach(vinho => {
  const wishList = JSON.parse(localStorage.getItem('wish-list'))
  const isWishListed = wishList.some(wish => wish.id === vinho.id);
  console.log(isWishListed)
  LISTA_VINHOS.innerHTML += `
    <li id="vinho-${vinho.id}" class="vinho">
      <img class="vinho__image" src="https://via.placeholder.com/300" alt="Imagem do vinho" onclick="view(${vinho.id})">
      <section class="vinho__info">
        <div class="vinho__title">
          <h3 class="vinho__name">${vinho.nome}</h3>
          <p class="vinho__type">${vinho.tipo}</p>
        </div>
        <p class="vinho__price">R$ ${vinho.preco}</p>
        <div class="vinho__buttons">
          <button class="vinho__button vinho__button--cart" onclick="addToCart(${vinho.id})">
            Adicionar ao carrinho
          </button>
          <img 
            role="button" 
            id="wishlist-icon" 
            class="vinho__button vinho__button--wishlist ${isWishListed ? 'vinho__button--wishlist-active' : ''}"
            src="../assets/heart.svg" 
            onclick="addToWishList(${vinho.id})"
          >
        </div>
      </section>
    </li>
  `;
});

function updateCartPrice() {
  const CART = JSON.parse(localStorage.getItem('cart'));

  if (NAV_CART.children.length > 1) {
    NAV_CART.removeChild(NAV_CART.lastElementChild);
  }

  NAV_CART.innerHTML += `
    <span>R$ ${CART.price}</span>
  `
}

function addToCart(id) {
  const vinho = wines.find(vinho => vinho.id == id);

  let storedCart = JSON.parse(localStorage.getItem('cart'));

  if (!storedCart) {
    storedCart = { items: [], preco: 0 };
  }

  storedCart.items.push(vinho);
  storedCart.price += vinho.preco;

  localStorage.setItem('cart', JSON.stringify(storedCart));
  updateCartPrice();
}

function addToWishList(id) {
  let storedWishList = JSON.parse(localStorage.getItem('wish-list'));
  const vinho = wines.find(vinho => vinho.id == id);
  const isWishListed = storedWishList.some(wine => wine.id === id)

  vinhoElement = document.getElementById(`vinho-${id}`);
  wishListButton = vinhoElement.querySelector('.vinho__button--wishlist')

  if (isWishListed) {
    storedWishList = storedWishList.filter(vinho => vinho.id !== id);
    wishListButton.classList.remove('vinho__button--wishlist-active');
  } else {
    storedWishList.push(vinho);
    wishListButton.classList.add('vinho__button--wishlist-active');
  }

  localStorage.setItem('wish-list', JSON.stringify(storedWishList));
}

function view(id) {
  selectedWine = wines.find(wine => wine.id == id);
  localStorage.setItem('selected-wine', JSON.stringify(selectedWine));

  window.location.assign(window.location.origin + '/src/vinho')
}
