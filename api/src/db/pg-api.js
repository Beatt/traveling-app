import pgClient from "./pg-client"
import sqls from "./sqls"

const pgApiWrapper = async () => {
  const { pgPool } = await pgClient()
  const pgQuery = (text, params = {}) =>
    pgPool.query(text, Object.values(params))

  return {
    citiesAll: async () => {
      const pgResp = await pgQuery(sqls.citiesAll)
      return pgResp.rows
    },
    flightsTo: async (cityId) => {
      const pgResp = await pgQuery(sqls.flightsTo, { $1: cityId })
      return pgResp.rows
    },
    flightsFrom: async (cityId) => {
      const pgResp = await pgQuery(sqls.flightsFrom, { $1: cityId })
      return pgResp.rows
    },
    flightPriceByFlightId: async (id) => {
      const pgResp = await pgQuery(sqls.flightPriceByFlightId, { $1: id })
      return pgResp.rows
    },
    flightPriceById: async (id) => {
      const pgResp = await pgQuery(sqls.flightPriceById, { $1: id })
      return pgResp.rows[0] || {}
    },
  }
}

export default pgApiWrapper
