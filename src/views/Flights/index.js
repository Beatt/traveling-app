import * as React from "react"
import FlightsForm from "./FlightsForm"
import { citiesGet } from "../../api/citie"

const Flights = () => {
  return (
    <div className="section-md">
      <div className="pure-g">
        <div className="pure-u-1 pure-u-md-1-5" />
        <div className="pure-u-1 pure-u-md-3-5">
          <FlightsForm {...{ citiesGet }} flightsPost={() => {}} />
        </div>
      </div>
    </div>
  )
}

export default Flights
