const CART = JSON.parse(localStorage.getItem('cart'));
const CART_EL = document.getElementById('cart');

let discountApplied = false;

cartItems = CART.items.reduce((acc, item) => {
  const found = acc.find(x => x.id === item.id);
  if (found) {
    found.quantity += 1;
  } else {
    item.quantity = 1;
    acc.push(item);
  }
  return acc;
}, []);

CART_EL.innerHTML = `
  <ul>
    ${cartItems.map(item => {
  const itemTotal = item.quantity * item.preco;
  total = itemTotal;
  return `
        <li>
          <span>${item.quantity}x</span>
          <span>${item.nome}: </span>
          <span>R$ ${itemTotal.toFixed(2)}</span>
        </li>
      `;
}).join('')}
      </ul>
      <div>
        <span>Total: R$ ${CART.price}</span>
      </div>
    `;

function applyDiscount() {
  const discount = document.getElementById('discount-code').value;

  if (discountApplied) {
    alert('Desconto já aplicado');
    document.getElementById('discount-code').value = '';
    return;
  }
  if (discount !== 'FIAP2024') {
    document.getElementById('discount-code').value = '';
    alert('Cupom inválido');
    return;
  }

  const discountValue = CART.price * 0.1;
  const totalWithDiscount = CART.price - discountValue;

  document.getElementById('discount-code').value = '';

  CART_EL.innerHTML += `
    <span>Desconto: R$ ${discountValue.toFixed(2)}</span><br>
    <span>Total com desconto: R$ ${totalWithDiscount.toFixed(2)}</span>
  `;

  discountApplied = true;
}

function checkout() {
  localStorage.setItem('cart', JSON.stringify({ items: [], price: 0 }));
  alert('Compra realizada com sucesso!');

  window.location.assign(window.location.origin + '/src/home');
}