import * as React from "react"
import * as Redux from "react-redux"
import { mount } from "enzyme"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import CartForm from "../../../views/Cart/CartForm"
import { CheckoutFormPages } from "../../objectPages/CheckoutFormPages"

describe("CartForm", function () {
  let props
  beforeEach(() => {
    props = {
      saveCheckout: jest.fn(),
      getCart: jest.fn(),
      flightsPricesByIdGet: jest.fn(),
      clearCart: jest.fn(),
    }
  })

  let createWrapper
  beforeEach(() => {
    createWrapper = async () => {
      let wrapper
      await act(async () => {
        wrapper = await mount(
          <BrowserRouter>
            <CartForm {...props} />
          </BrowserRouter>
        )
      })
      wrapper.update()
      return wrapper
    }
  })

  beforeEach(() => {
    jest.spyOn(props, "getCart").mockReturnValue([
      {
        from: "1",
        to: "2",
        seats: "6",
        startDate: "2021-12-02",
        endDate: "2021-12-22",
        prices: { to: 1, from: 2 },
      },
      {
        from: "1",
        to: "2",
        seats: "6",
        startDate: "2021-12-24",
        endDate: "2021-12-27",
        prices: { to: 3, from: 4 },
      },
    ])
  })

  beforeEach(() => {
    jest
      .spyOn(props, "flightsPricesByIdGet")
      .mockResolvedValue({ data: { price: 100 } })
  })

  beforeEach(() => {
    jest.spyOn(Redux, "useSelector").mockReturnValue([])
  })

  it("Reservate flights", async () => {
    const wrapper = await createWrapper()

    CheckoutFormPages.clickingContinueButton(wrapper)
    CheckoutFormPages.fillFullName(wrapper, "Gabriel Geovanni")
    CheckoutFormPages.fillSurnames(wrapper, "Jiménez")
    CheckoutFormPages.fillAddress(wrapper, "3a poniente 19")
    CheckoutFormPages.fillEmail(wrapper, "correo@example.com")
    await CheckoutFormPages.submit(wrapper)

    expect(props.saveCheckout).toHaveBeenCalledWith({
      fullName: "Gabriel Geovanni",
      surnames: "Jiménez",
      address: "3a poniente 19",
      email: "correo@example.com",
      flights: [
        {
          from: "1",
          to: "2",
          seats: "6",
          startDate: "2021-12-02",
          endDate: "2021-12-22",
          prices: { to: 1, from: 2, priceFrom: 100, priceTo: 100 },
        },
        {
          from: "1",
          to: "2",
          seats: "6",
          startDate: "2021-12-24",
          endDate: "2021-12-27",
          prices: { to: 3, from: 4, priceFrom: 100, priceTo: 100 },
        },
      ],
    })
  })

  it("Remove flight", async () => {
    const wrapper = await createWrapper()

    wrapper.find('[data-testid="remove0"]').simulate("click")

    CheckoutFormPages.clickingContinueButton(wrapper)
    CheckoutFormPages.fillFullName(wrapper, "Gabriel Geovanni")
    CheckoutFormPages.fillSurnames(wrapper, "Jiménez")
    CheckoutFormPages.fillAddress(wrapper, "3a poniente 19")
    CheckoutFormPages.fillEmail(wrapper, "correo@example.com")
    await CheckoutFormPages.submit(wrapper)

    expect(props.saveCheckout).toHaveBeenCalledWith({
      fullName: "Gabriel Geovanni",
      surnames: "Jiménez",
      address: "3a poniente 19",
      email: "correo@example.com",
      flights: [
        {
          from: "1",
          to: "2",
          seats: "6",
          startDate: "2021-12-24",
          endDate: "2021-12-27",
          prices: { to: 3, from: 4, priceFrom: 100, priceTo: 100 },
        },
      ],
    })
  })

  it("Show total", async () => {
    const wrapper = await createWrapper()

    expect(wrapper.find('[data-testid="total"]').text()).toBe("Total: $400.00")
  })

  it("Clear cart", async () => {
    const wrapper = await createWrapper()

    wrapper.find('[data-testid="clearCart"]').simulate("click")

    expect(wrapper.text()).toEqual(
      expect.stringContaining(
        "Por favor regresa al inicio y selecciona por lo menos un viaje o haz clic aquí"
      )
    )
  })
})
