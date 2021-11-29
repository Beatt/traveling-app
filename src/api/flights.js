import axios from "axios"
import { API_URL } from "./constants"

export const flightsGetByCityIdAndDate = (cityId, date, type) =>
  axios.get(
    `${API_URL}/api/v1/flights?city_id=${cityId}&date=${date}&type=${type}`
  )
