import { act } from "react-dom/test-utils"

export class CheckoutFormPages {
  static clickingContinueButton(wrapper) {
    wrapper.find('button[type="button"]').simulate("click")
  }

  static fillFullName(wrapper, value) {
    const fullName = wrapper.find('input[name="fullName"]')
    fullName.instance().value = value
    fullName.simulate("change")
  }

  static fillSurnames(wrapper, value) {
    const fullName = wrapper.find('input[name="surnames"]')
    fullName.instance().value = value
    fullName.simulate("change")
  }

  static fillAddress(wrapper, value) {
    const fullName = wrapper.find('input[name="address"]')
    fullName.instance().value = value
    fullName.simulate("change")
  }

  static fillEmail(wrapper, value) {
    const fullName = wrapper.find('input[name="email"]')
    fullName.instance().value = value
    fullName.simulate("change")
  }

  static async submit(wrapper) {
    await act(async () => {
      await wrapper.find('button[type="submit"]').simulate("submit")
    })
    wrapper.update()
  }
}
