import { Factory } from "fishery"
import faker from "faker"

export default Factory.define(() => ({
  to: faker.datatype.number,
  from: faker.datatype.number,
}))
