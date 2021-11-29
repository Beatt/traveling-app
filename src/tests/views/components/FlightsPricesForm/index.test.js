import * as React from "react"
import { mount } from "enzyme"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import FlightsPricesForm from "../../../../views/components/FlightsPricesForm"

describe("FlightsPricesForm", function () {
  let props
  beforeEach(() => {
    props = {
      flightsGetByCityIdAndDate: jest.fn(),
      flightsPricesGet: jest.fn(),
      saveFlight: jest.fn(),
    }
  })

  let createWrapper
  beforeEach(() => {
    createWrapper = async () => {
      let wrapper
      await act(async () => {
        wrapper = await mount(
          <BrowserRouter>
            <FlightsPricesForm {...props} />
          </BrowserRouter>
        )
      })
      wrapper.update()

      return wrapper
    }
  })

  it("Select flight", async () => {
    jest.spyOn(props, "saveFlight").mockResolvedValue({
      message: "Todo ok",
      to: "/flights/return",
    })
    jest.spyOn(props, "flightsGetByCityIdAndDate").mockResolvedValue({
      data: [
        {
          id: 1,
          flight_at: "2021-11-25T06:00:00.000Z",
          time_departure: "09:00:00",
          time_arrival: "10:30:00",
          to_city: 1,
          from_city: 2,
        },
        {
          id: 2,
          flight_at: "2021-11-25T06:00:00.000Z",
          time_departure: "09:00:00",
          time_arrival: "10:30:00",
          to_city: 1,
          from_city: 2,
        },
      ],
    })

    jest
      .spyOn(props, "flightsPricesGet")
      .mockResolvedValueOnce({
        data: [
          {
            id: 7,
            price: 1100,
            type: "BASICO",
            seats: 10,
            flight_id: 1,
          },
          {
            id: 8,
            price: 1700,
            type: "PLUS",
            seats: 8,
            flight_id: 1,
          },
        ],
      })
      .mockResolvedValueOnce({
        data: [
          {
            id: 1,
            price: 800,
            type: "BASICO",
            seats: 10,
            flight_id: 2,
          },
          {
            id: 2,
            price: 1900,
            type: "PLUS",
            seats: 8,
            flight_id: 2,
          },
        ],
      })

    const wrapper = await createWrapper()

    wrapper
      .find('[data-testid="flightBasicPriceSelected7"]')
      .at(0)
      .simulate("click")

    await act(async () => {
      await wrapper.find('button[type="submit"]').at(0).simulate("submit")
    })
    wrapper.update()

    expect(props.saveFlight).toHaveBeenCalledWith(7)
    expect(window.location.href).toBe("http://localhost/flights/return")
  })
})
