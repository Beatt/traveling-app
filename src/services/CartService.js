const CART_PREFIX = "cart"

export class CartService {
  constructor(localStorage) {
    this.localStorage = localStorage
  }

  saveCart(flight) {
    let cart = JSON.parse(localStorage.getItem(CART_PREFIX))
    if (cart === null) {
      cart = []
    }

    cart.push(flight)

    localStorage.setItem(CART_PREFIX, JSON.stringify(cart))
  }

  clearCart() {
    localStorage.removeItem(CART_PREFIX)
  }

  getCart() {
    return JSON.parse(localStorage.getItem(CART_PREFIX))
  }
}
