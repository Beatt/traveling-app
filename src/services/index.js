import { FlightService } from "./FlightService"

const flightService = new FlightService(window.localStorage)

export default {
  flightService,
}
