import { FlightService } from "./FlightService"
import { CartService } from "./CartService"

const flightService = new FlightService(window.localStorage)
const cartService = new CartService(window.localStorage)

export default {
  flightService,
  cartService,
}
