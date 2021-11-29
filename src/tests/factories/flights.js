import { Factory } from "fishery"
import faker from "faker"
import flighsPrices from "./flighsPrices"

export default Factory.define(() => ({
  from: faker.datatype.number,
  to: faker.datatype.number,
  seats: faker.datatype.number({ min: 1, max: 6 }),
  startDate: faker.date.future().toISOString().split("T")[0],
  endDate: faker.date.future().toISOString().split("T")[0],
  prices: flighsPrices.build(),
}))
