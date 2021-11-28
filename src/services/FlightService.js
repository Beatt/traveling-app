export class FlightService {
  constructor(localStorage) {
    this.localStorage = localStorage
  }

  flightsPost(data) {
    console.log(data)
    localStorage.setItem("flight", JSON.stringify(data))
    try {
      return Promise.resolve()
    } catch {
      throw Error("Lo sentimos ha ocurrido un error al guardar tu vuelo")
    }
  }
}
