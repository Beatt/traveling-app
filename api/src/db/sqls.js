export default {
  citiesAll: `
    SELECT *
    FROM traveling.city
  `,
  flightsTo: `
    SELECT *
    FROM traveling.flight
    WHERE to_city = $1
  `,
  flightsFrom: `
    SELECT *
    FROM traveling.flight
    WHERE from_city = $1
  `,
  flightPriceByFlightId: `
    SELECT *
    FROM traveling.flight_price
    WHERE flight_id = $1
  `,
  flightPriceById: `
    SELECT *
    FROM traveling.flight_price
    WHERE id = $1
  `,
}
