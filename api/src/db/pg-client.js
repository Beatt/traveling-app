import pg from "pg"

import { pgConnectionString } from "../config"

export default async function pgClient() {
  const pgPool = new pg.Pool({
    connectionString: pgConnectionString,
  })

  pgPool.on("error", (err) => {
    console.error("Unexpected PG client error", err)
    process.exit(-1)
  })

  return {
    pgPool,
    pgClose: async () => await pgPool.end(),
  }
}
