import * as React from "react"
import "./styles.scss"
import { useNavigate } from "react-router-dom"
import { formatToMoney } from "../../helpers"
import Snackbar from "../../../components/Snackbar"

const { useState, useEffect } = React

const FLIGHT_TYPES = {
  BASIC: 0,
  PLUS: 1,
}

const FlightsPricesForm = ({
  flightsGetByCityIdAndDate,
  flightsPricesGet,
  cityId,
  date,
  type,
  cancelTo,
  saveFlight,
}) => {
  const navigate = useNavigate()
  const [flights, setFlights] = useState([])
  const [flightSelected, setFlightSelected] = useState({})

  useEffect(() => {
    flightsGetByCityIdAndDate(cityId, type).then(({ data }) => {
      for (const flight of data) {
        flightsPricesGet(flight.id).then((flightsPricesRes) => {
          setFlights((prevState) => {
            return [
              ...prevState,
              {
                ...flight,
                prices: [...flightsPricesRes.data],
                flightPricesSelected: {
                  id: null,
                },
              },
            ]
          })
        })
      }
    })
  }, [])

  function handleSelectFlightPrice(id) {
    setFlightSelected(id)
  }

  function renderFlightPriceByType(flight, flightType) {
    return flightSelected === flight.prices[flightType].id
      ? "Seleccionado"
      : "Seleccionar"
  }

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const { message, to } = await saveFlight(flightSelected)
      Snackbar.show({ message })
      navigate(to)
    } catch ({ message }) {
      Snackbar.show({ message })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="pure-g">
      <div className="pure-u-1">
        <div className="flight-header">
          <div className="pure-g">
            <div className="pure-u-3-5">Fecha de selección: {date}</div>
            <div className="pure-u-1-5 text-center">Precio plus</div>
            <div className="pure-u-1-5 text-center">Precio básico</div>
          </div>
        </div>
      </div>
      <div className="pure-u-1">
        {flights.map((flight) => (
          <div key={flight.id} className="flight-container">
            <div className="pure-g">
              <div className="pure-u-1 pure-u-sm-3-5">
                <div className="flight-card">
                  <div className="flight-card__departure-time">
                    {flight.time_departure}
                  </div>
                  <div className="flight-card__time">
                    <span>1 hora 30 min</span>
                    <span />
                    <span>Sin escalas</span>
                  </div>
                  <div className="flight-card__arrival-time">
                    {flight.time_arrival}
                  </div>
                </div>
              </div>
              <div className="pure-u-1 pure-u-sm-2-5">
                <div className="pure-g">
                  <div className="pure-u-1 pure-u-sm-1-2 text-center">
                    <div className="flight-prices">
                      <h3>{formatToMoney(flight.prices[0].price)}</h3>
                      <p className="mb-20">MXN</p>
                      <a
                        href="#"
                        data-testid={`flightBasicPriceSelected${flight.prices[0].id}`}
                        onClick={(event) => {
                          event.preventDefault()
                          handleSelectFlightPrice(flight.prices[0].id)
                        }}
                      >
                        {renderFlightPriceByType(flight, FLIGHT_TYPES.BASIC)}
                      </a>
                    </div>
                  </div>
                  <div className="pure-u-1 pure-u-sm-1-2 text-center">
                    <div className="flight-prices">
                      <h3>{formatToMoney(flight.prices[1].price)}</h3>
                      <p className="mb-20">MXN</p>
                      <a
                        href="#"
                        onClick={(event) => {
                          event.preventDefault()
                          handleSelectFlightPrice(flight.prices[1].id)
                        }}
                      >
                        {renderFlightPriceByType(flight, FLIGHT_TYPES.PLUS)}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pure-u-1">
        <div className="pure-g">
          <div className="pure-u-1 pure-u-sm-3-5" />
          <div className="pure-u-1 pure-u-sm-1-5">
            <button
              type="button"
              className="btn btn-block"
              onClick={() => navigate(cancelTo)}
            >
              Cancelar
            </button>
          </div>
          <div className="pure-u-1 pure-u-sm-1-5">
            <button type="submit" className="btn btn-primary btn-block">
              Continuar
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default FlightsPricesForm
