LISTA_VINHOS = document.getElementById('lista-vinhos');

vinhos.forEach(vinho => {
  LISTA_VINHOS.innerHTML += `
    <li class="vinho">
      <img class="vinho__image" src="https://via.placeholder.com/150" alt="Imagem do vinho">
      <section class="vinho__info">
        <div class="vinho__title">
          <h3 class="vinho__name">${vinho.nome}</h3>
          <p class="vinho__type">${vinho.tipo}</p>
        </div>
        <p class="vinho__price">R$ ${vinho.preco}</p>
        <div class="vinho__buttons">
          <button class="vinho__button vinho__button--cart" onclick="addToCart(${vinho.id})">Adicionar ao carrinho</button>
          <img role="button" class="vinho__button vinho__button--wishlist" src="../assets/heart.svg" onclick="addToWishList(${vinho.id})">
        </div>
      </section>
    </li>
  `;
});
