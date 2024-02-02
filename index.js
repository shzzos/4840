// Создание объекта Корзины
const shoppingCart = {
  items: [],
  total: 0,
  
  // Метод добавления товара
  addItem: function(name, price, quantity) {
    const item = {
      name: name,
      price: price,
      quantity: quantity
    };
    this.items.push(item);
    this.total += price * quantity;
  },
  
  // Метод удаления товара
  removeItem: function(name) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === name) {
        const removedItem = this.items.splice(i, 1)[0];
        this.total -= removedItem.price * removedItem.quantity;
        break;
      }
    }
  },
  
  // Метод обновления количества товара
  updateQuantity: function(name, quantity) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === name) {
        const item = this.items[i];
        this.total -= item.price * item.quantity;
        item.quantity = quantity;
        this.total += item.price * item.quantity;
        break;
      }
    }
  },
  
  // Метод расчета общей стоимости
  calculateTotal: function() {
    return this.total;
  },
  
  // Метод очистки корзины
  clearCart: function() {
    this.items = [];
    this.total = 0;
  },
  
  // Дополнительное задание: метод применения скидки
  applyDiscount: function(discountCode) {
    // Здесь можно добавить логику проверки и применения скидки по коду
    // В данном примере просто уменьшаем общую стоимость на 10%
    this.total *= 0.9;
  }
};

// Тестирование
shoppingCart.addItem("Телефон", 100, 1);
shoppingCart.addItem("Ноутбук", 500, 2);
console.log(shoppingCart.calculateTotal()); // 1100

shoppingCart.removeItem("Телефон");
console.log(shoppingCart.calculateTotal()); // 1000

shoppingCart.updateQuantity("Ноутбук", 3);
console.log(shoppingCart.calculateTotal()); // 2000

shoppingCart.applyDiscount("DISCOUNTCODE");
console.log(shoppingCart.calculateTotal()); // 1800

shoppingCart.clearCart();
console.log(shoppingCart.calculateTotal()); // 0
