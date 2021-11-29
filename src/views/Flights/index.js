import * as React from "react"
import { useSelector } from "react-redux"
import FlightsForm from "./FlightsForm"
import Services from "../../services"

const { saveFlight } = Services.flightService

const Flights = () => {
  const cities = useSelector((state) => state.cities.data)

  return (
    <div className="section-md">
      <h1>Selecciona tu destino</h1>
      <div className="pure-g">
        <div className="pure-u-1">
          {!!cities.length && <FlightsForm {...{ saveFlight, cities }} />}
        </div>
      </div>
    </div>
  )
}

export default Flights
