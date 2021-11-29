import axios from "axios"
import { API_URL } from "./constants"

export const citiesGet = () => axios.get(`${API_URL}/api/v1/cities`)
