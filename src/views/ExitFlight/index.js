import * as React from "react"
import { flightsGetByCityIdAndDate } from "../../api/flights"
import { flightsPricesGet } from "../../api/flightsPrices"
import FlightsPricesForm from "../components/FlightsPricesForm"
import Services from "../../services"
import { renderDestino } from "../helpers"

const { getFlight, saveFlightPrices } = Services.flightService

const { useCallback } = React

const ExitFlight = () => {
  const flightSelected = getFlight()
  const saveFlight = useCallback((data) => {
    try {
      saveFlightPrices(data, "to")
      return Promise.resolve({
        message: "Se ha guardado el vuelo correctamente",
        to: "/flights/return",
      })
    } catch (e) {
      throw new Error("¡Ha ocurrido un problema!")
    }
  }, [])

  const cityId = flightSelected.to
  const date = flightSelected.startDate
  const type = "to"

  return (
    <div className="section-md">
      <h1>Elige tu vuelo de Salida</h1>
      <p className="mb-20">{renderDestino(flightSelected)}</p>
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
            cancelTo="/"
          />
        </div>
      </div>
    </div>
  )
}

export default ExitFlight
