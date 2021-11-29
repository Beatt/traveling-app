import * as React from "react"
import { flightsGetByCityIdAndDate } from "../../api/flights"
import { flightsPricesGet } from "../../api/flightsPrices"
import FlightsPricesForm from "../components/FlightsPricesForm"
import Services from "../../services"
import { renderLlega } from "../helpers"

const { getFlight, saveFlightPrices, removeFlight } = Services.flightService

const { saveCart } = Services.cartService

const { useCallback } = React

const ReturnFlight = () => {
  const flightSelected = getFlight()
  const saveFlight = useCallback((data) => {
    try {
      const flight = saveFlightPrices(data, "from")
      saveCart(flight)
      removeFlight()
      return Promise.resolve({
        message: "Se ha guardado el vuelo correctamente",
        to: "/",
      })
    } catch (e) {
      throw new Error("¡Ha ocurrido un problema!")
    }
  }, [])

  const cityId = flightSelected.from
  const date = flightSelected.endDate
  const type = "from"

  return (
    <div className="section-md">
      <h1>Elige tu vuelo de regreso</h1>
      <p className="mb-20">{renderLlega(flightSelected)}</p>
      <div className="pure-g">
        <div className="pure-u-1">
          <FlightsPricesForm
            {...{
              flightsGetByCityIdAndDate,
              flightsPricesGet,
              date,
              cityId,
              type,
              saveFlight,
            }}
            cancelTo="/flights/available"
          />
        </div>
      </div>
    </div>
  )
}

export default ReturnFlight
