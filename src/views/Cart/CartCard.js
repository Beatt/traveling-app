import * as React from "react"
import { useSelector } from "react-redux"
import { findCityNameById, formatToMoney } from "../helpers"

const CartCard = ({ index, flight, removeFlight }) => {
  const cities = useSelector((state) => state.cities.data)
  return (
    <div className="checkout-flight-card">
      <div className="pure-g">
        <div className="pure-u-1 pure-u-sm-2-5">
          <p className="checkout-flight-card__label">Saliendo</p>
          <p className="mb-20">
            {findCityNameById(cities, flight.from)} - {flight.startDate}
          </p>
          <p className="checkout-flight-card__label">Precio</p>
          <p className="mb-20">
            {flight.prices.priceFrom && formatToMoney(flight.prices.priceFrom)}
          </p>
        </div>
        <div className="pure-u-1 pure-u-md-2-5">
          <p className="checkout-flight-card__label">Asientos</p>
          <p className="mb-20">{flight.seats}</p>
        </div>
        <div className="pure-u-1 pure-u-sm-1-5">
          <p className="checkout-flight-card__label">Llegando</p>
          <p className="mb-20">
            {findCityNameById(cities, flight.to)} - {flight.endDate}
          </p>
          <p className="checkout-flight-card__label">Precio</p>
          <p className="mb-20">
            {flight.prices.priceTo && formatToMoney(flight.prices.priceTo)}
          </p>
          <a
            href="#"
            onClick={() => removeFlight(index)}
            data-testid={`remove${index}`}
          >
            Eliminar
          </a>
        </div>
      </div>
    </div>
  )
}

export default CartCard
