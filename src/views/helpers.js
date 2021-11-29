import { useSelector } from "react-redux"

export const formatToMoney = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value)

export const findCityNameById = (cities, id) => {
  const cityFind = cities.find((city) => city.id === +id)
  return !cityFind ? "" : cityFind.name
}

export const renderDestino = (flightSelected) => {
  const cities = useSelector((state) => state.cities.data)
  return `${findCityNameById(cities, flightSelected.from)} a ${findCityNameById(
    cities,
    flightSelected.to
  )}`
}

export const renderLlega = (flightSelected) => {
  const cities = useSelector((state) => state.cities.data)
  return `${findCityNameById(cities, flightSelected.to)} a ${findCityNameById(
    cities,
    flightSelected.from
  )} `
}
