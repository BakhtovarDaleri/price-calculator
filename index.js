function totalSum(priceItem, amountItem, discountItem) {
  const totalPrice = priceItem * amountItem; //Общая цена без скидки

  const discountAmount = totalPrice * (discountItem / 100); // Сумма скидки

  const finalPrice = totalPrice - discountAmount; // Итоговая цена

  return finalPrice;
}

// Получаем данные от пользователя
const priceItem = prompt("Введите стоимость товара:");
const amountItem = prompt("Введите количество товара:");
const discountItem = 20; // Скидка в процентах

const result = totalSum(priceItem, amountItem, discountItem);
console.log(result);
