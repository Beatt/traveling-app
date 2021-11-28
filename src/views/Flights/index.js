import * as React from "react"
import { useSelector } from "react-redux"
import FlightsForm from "./FlightsForm"
import Services from "../../services"

const { flightsPost } = Services.flightService

const Flights = () => {
  const cities = useSelector((state) => state.cities.data)

  return (
    <div className="section-md">
      <h1>Vuela fácil</h1>
      <p className="mb-20">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        adipisci, amet cupiditate doloribus ipsa iusto libero, molestias
        mollitia, nulla praesentium repellendus reprehenderit tempora veniam!
        Asperiores facere facilis ipsa officiis qui.
      </p>
      <div className="pure-g">
        <div className="pure-u-1">
          {!!cities.length && <FlightsForm {...{ flightsPost, cities }} />}
        </div>
      </div>
    </div>
  )
}

export default Flights
