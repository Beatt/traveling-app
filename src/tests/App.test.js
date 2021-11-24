import { mount } from "enzyme"
import App from "../App"

it("renders learn react link", () => {
  const wrapper = mount(<App />)
  expect(wrapper.find(".App-link")).toHaveLength(1)
})
