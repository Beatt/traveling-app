import express from "express"
import cors from "cors"
import * as config from "./config"
import pgApiWrapper from "./db/pg-api"

const buildUrl = (version, path) => `/api/${version}/${path}`

async function main() {
  const server = express()
  server.use(
    cors({
      origin: "http://localhost:3000",
    })
  )
  const pgApi = await pgApiWrapper()

  server.use(buildUrl("v1", "ping"), (req, res) => {
    res.json(new Date().toLocaleString())
  })

  server.use(buildUrl("v1", "cities"), async (req, res) => {
    res.json(await pgApi.citiesAll())
  })

  server.use(buildUrl("v1", "flights"), async (req, res) => {
    const { city_id } = req.query
    if (req.query.type === "to") {
      return res.json(await pgApi.flightsTo(city_id))
    }

    return res.json(await pgApi.flightsFrom(city_id))
  })

  server.use(buildUrl("v1", "flightsPrices/:id"), async (req, res) => {
    const { id } = req.params

    res.json(await pgApi.flightPriceById(id))
  })

  server.use(buildUrl("v1", "flightsPrices"), async (req, res) => {
    const { flight_id } = req.query

    res.json(await pgApi.flightPriceByFlightId(flight_id))
  })

  server.listen(config.port, () => {
    console.log(`Server URL: http://localhost:${config.port}/`)
  })
}

main()
