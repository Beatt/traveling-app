import { Factory } from "fishery"
import faker from "faker"

export default Factory.define(() => ({
  id: faker.datatype.uuid(),
  name: faker.lorem.word(),
}))
