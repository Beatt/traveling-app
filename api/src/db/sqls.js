export default {
  citiesAll: `
    SELECT *
    FROM traveling.city
  `,
  flightsTo: `
    SELECT *
    FROM traveling.flight
    WHERE traveling.flight.flight_at = $1
    AND to_city = $2
  `,
  flightsFrom: `
    SELECT *
    FROM traveling.flight
    WHERE traveling.flight.flight_at = $1
    AND to_from = $2
  `,
  flightPriceByFlightId: `
    SELECT *
    FROM traveling.flight_price
    WHERE flight_id = $1
  `,
}
