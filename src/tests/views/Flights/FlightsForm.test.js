import * as React from "react"
import { mount } from "enzyme"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import { FlightsFormPages } from "../../objectPages/FlightsFormPages"
import FlightsForm from "../../../views/Flights/FlightsForm"

describe("FlightsForm", function () {
  let props
  beforeEach(() => {
    props = {
      saveFlight: jest.fn(),
      cities: jest.fn(),
    }
  })

  let createWrapper
  beforeEach(() => {
    createWrapper = async () => {
      let wrapper
      await act(async () => {
        wrapper = await mount(
          <BrowserRouter>
            <FlightsForm {...props} />
          </BrowserRouter>
        )
      })
      return wrapper.update()
    }
  })

  beforeEach(() => {
    jest.spyOn(props, "cities").mockReturnValue([
      {
        id: "e66723d9-64b2-47ec-88a2-d56519a58ba2",
        name: "Ciudad de México",
      },
      {
        id: "793f1900-a9af-4a02-80f9-82752e01ad64",
        name: "Monterrey",
      },
      {
        id: "6168169c-fdb4-4434-9131-fb7e9ee68581",
        name: "Guadalajara",
      },
    ])
  })

  it("Create flight", async () => {
    jest.spyOn(props, "saveFlight").mockResolvedValue({})

    const wrapper = await createWrapper()

    FlightsFormPages.selectedFromCiudadMexico(wrapper)
    FlightsFormPages.selectedToGuadalajara(wrapper)
    FlightsFormPages.fillStartDate(wrapper, "2021-12-08")
    FlightsFormPages.fillEndDate(wrapper, "2021-12-10")
    FlightsFormPages.fillSeats(wrapper, "3")

    await FlightsFormPages.submit(wrapper)

    expect(props.saveFlight).toHaveBeenCalledWith({
      endDate: "2021-12-10",
      to: "6168169c-fdb4-4434-9131-fb7e9ee68581",
      from: "e66723d9-64b2-47ec-88a2-d56519a58ba2",
      startDate: "2021-12-08",
      seats: 3,
    })
  })

  it("Show error message when create flight failed", async () => {
    jest.spyOn(props, "saveFlight").mockRejectedValue({})

    const wrapper = await createWrapper()

    FlightsFormPages.fillRandomFlight(wrapper)

    await FlightsFormPages.submit(wrapper)

    expect(window.document.body.textContent).toEqual(
      expect.stringContaining("Lo sentimos ha ocurrido un error!")
    )
  })
})
