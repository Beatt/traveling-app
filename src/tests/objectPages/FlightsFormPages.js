import { act } from "react-dom/test-utils"
import faker from "faker"

export class FlightsFormPages {
  static selectedFromCiudadMexico(wrapper) {
    const field = wrapper.find('[name="from"]').at(0)
    field.instance().value = "e66723d9-64b2-47ec-88a2-d56519a58ba2"
    field.simulate("change")
  }

  static selectedToGuadalajara(wrapper) {
    const field = wrapper.find('[name="to"]').at(0)
    field.instance().value = "6168169c-fdb4-4434-9131-fb7e9ee68581"
    field.simulate("change")
  }

  static fillDate(wrapper, value) {
    const field = wrapper.find('[name="time"]').at(0)
    field.instance().value = value
    field.simulate("change")
  }

  static fillSeats(wrapper, value) {
    const field = wrapper.find('[name="seats"]').at(0)
    field.instance().value = value
    field.simulate("change")
  }

  static fillRandomFlight(wrapper) {
    FlightsFormPages.selectedFromCiudadMexico(wrapper)
    FlightsFormPages.selectedToGuadalajara(wrapper)
    FlightsFormPages.fillDate(wrapper, faker.date.recent().toLocaleDateString())
    FlightsFormPages.fillSeats(
      wrapper,
      faker.datatype.number({ min: 1, max: 9 })
    )
  }

  static async submit(wrapper) {
    await act(async () => {
      await wrapper.find('button[type="submit"]').simulate("submit")
    })
    wrapper.update()
  }
}
