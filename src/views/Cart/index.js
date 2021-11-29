import * as React from "react"
import Services from "../../services"
import { flightsPricesByIdGet } from "../../api/flightsPrices"
import CartForm from "./CartForm"

const { saveCheckout } = Services.flightService
const { getCart, clearCart } = Services.cartService

const Checkout = () => {
  return (
    <div className="section-md">
      <CartForm
        {...{ flightsPricesByIdGet, saveCheckout, clearCart, getCart }}
      />
    </div>
  )
}

export default Checkout
