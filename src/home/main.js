LISTA_VINHOS = document.getElementById('lista-vinhos');

vinhos.forEach(vinho => {
  LISTA_VINHOS.innerHTML += `
    <li id="vinho-${vinho.id}" class="vinho">
      <img class="vinho__image" src="https://via.placeholder.com/300" alt="Imagem do vinho">
      <section class="vinho__info">
        <div class="vinho__title">
          <h3 class="vinho__name">${vinho.nome}</h3>
          <p class="vinho__type">${vinho.tipo}</p>
        </div>
        <p class="vinho__price">R$ ${vinho.preco}</p>
        <div class="vinho__buttons">
          <button class="vinho__button vinho__button--cart" onclick="addToCart(${vinho.id})">Adicionar ao carrinho</button>
          <img role="button" id="wishlist-icon" class="vinho__button vinho__button--wishlist" src="../assets/heart.svg" onclick="addToWishList(${vinho.id})">
        </div>
      </section>
    </li>
  `;
});



function addToCart(id) {
  const vinho = vinhos.find(vinho => vinho.id === id);
  carrinho.itens.push(vinho);
  carrinho.preco += vinho.preco;

  console.log(carrinho);
}

function addToWishList(id) {
  const vinho = vinhos.find(vinho => vinho.id === id);

  vinhoElement = document.getElementById(`vinho-${id}`);
  wishListButton = vinhoElement.querySelector('.vinho__button--wishlist')

  if (wishListButton.classList.contains('vinho__button--wishlist-active')) {
    listaDeDesejos = listaDeDesejos.filter(vinho => vinho.id !== id);
    wishListButton.classList.remove('vinho__button--wishlist-active');
  } else {
    listaDeDesejos.push(vinho);
    wishListButton.classList.add('vinho__button--wishlist-active');
  }

  console.log(listaDeDesejos);
}
