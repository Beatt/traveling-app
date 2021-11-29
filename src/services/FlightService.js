export class FlightService {
  constructor(localStorage) {
    this.localStorage = localStorage
  }

  saveFlight(data) {
    try {
      const prices = {
        to: "",
        from: "",
      }
      localStorage.setItem("flight", JSON.stringify({ ...data, prices }))
      return Promise.resolve()
    } catch {
      throw Error("Lo sentimos ha ocurrido un error al guardar tu vuelo")
    }
  }

  getFlight() {
    return JSON.parse(localStorage.getItem("flight"))
  }

  saveFlightPrices(price, type) {
    const flight = JSON.parse(localStorage.getItem("flight"))
    flight.prices[type] = price
    localStorage.setItem("flight", JSON.stringify(flight))
    return flight
  }

  removeFlight() {
    localStorage.removeItem("flight")
  }

  saveCheckout() {}
}
