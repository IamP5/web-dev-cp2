LISTA_VINHOS = document.getElementById('lista-vinhos');

let wishList = JSON.parse(localStorage.getItem('wish-list'));

createElements();

function createElements() {
  LISTA_VINHOS.innerHTML = '';

  wishList.forEach(vinho => {
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
              class="vinho__button vinho__button--wishlist vinho__button--wishlist-active"
              src="../assets/heart.svg" 
              onclick="removeFromWishList(${vinho.id})"
            >
          </div>
        </section>
      </li>
    `;
  });
}

function addToCart(id) {
  const vinho = wishList.find(vinho => vinho.id == id);

  let storedCart = JSON.parse(localStorage.getItem('cart'));

  storedCart.items.push(vinho);
  storedCart.price += vinho.preco;

  localStorage.setItem('cart', JSON.stringify(storedCart));
}

function removeFromWishList(id) {
  wishList = wishList.filter(vinho => vinho.id !== id);
  localStorage.setItem('wish-list', JSON.stringify(wishList));

  createElements();
}

function view(id) {
  selectedWine = wishList.find(wine => wine.id == id);
  localStorage.setItem('selected-wine', JSON.stringify(selectedWine));

  window.location.assign(window.location.origin + '/src/vinho')
}
