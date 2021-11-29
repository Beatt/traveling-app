import axios from "axios"
import { API_URL } from "./constants"

export const flightsPricesGet = (flightId) =>
  axios.get(`${API_URL}/api/v1/flightsPrices?flight_id=${flightId}`)

export const flightsPricesByIdGet = (id) =>
  axios.get(`${API_URL}/api/v1/flightsPrices/${id}`)
