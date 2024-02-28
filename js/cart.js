function updateTotalPrice(cardIndex) {
  const priceElement = document.getElementById(`price-${cardIndex}`);
  const quantityInput = document.getElementById(`quantity-${cardIndex}`);
  const totalPriceElement = document.getElementById(`total-price-${cardIndex}`);
  const price = parseInt(priceElement.innerText.replace(/,/g, ''));
  const quantity = parseInt(quantityInput.value);
  const totalPrice = (price * quantity).toLocaleString();
  totalPriceElement.innerText = totalPrice;
}

function updateQuantity(change, cardIndex) {
  const quantityInput = document.getElementById(`quantity-${cardIndex}`);
  let newQuantity = parseInt(quantityInput.value) + change;

  // 수량이 0보다 작아지지 않도록 검사
  if (newQuantity < 0) {
    newQuantity = 0;
  }

  quantityInput.value = newQuantity;
  updateTotalPrice(cardIndex);
}

document.addEventListener('DOMContentLoaded', function () {
  for (let i = 1; i <= 5; i++) {
    // 수량 변경 이벤트 리스너
    const quantityInput = document.getElementById(`quantity-${i}`);
    quantityInput.addEventListener('change', function () {
      updateTotalPrice(i);
    });

    // +, - 버튼 이벤트 리스너
    const decrementButton = quantityInput.previousElementSibling;
    const incrementButton = quantityInput.nextElementSibling;

    decrementButton.addEventListener('click', function () {
      updateQuantity(-1, i);
    });
    incrementButton.addEventListener('click', function () {
      updateQuantity(1, i);
    });
  }
});
