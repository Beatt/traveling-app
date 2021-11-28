import * as React from "react"
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"
import Snackbar from "../../components/Snackbar"
import validationSchema from "./validationSchema"

const { useState } = React

const FlightsForm = ({ flightsPost, cities }) => {
  const navigate = useNavigate()
  const [citiesTo] = useState(cities || [])
  const [citiesFrom] = useState(cities || [])
  const formik = useFormik({
    initialValues: {
      to: "",
      from: "",
      time: "",
      seats: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  })

  async function handleSubmit(values) {
    try {
      await flightsPost({
        from: values.from,
        to: values.to,
        time: values.time,
        seats: values.seats,
      })
      navigate("/flights/available")
    } catch {
      Snackbar.show({ message: "Lo sentimos ha ocurrido un error!" })
    }
  }

  function renderCities(items) {
    return items.map(({ id, name }) => (
      <option key={id} value={id}>
        {name}
      </option>
    ))
  }

  return (
    <form className="form-block" onSubmit={formik.handleSubmit}>
      <div className="pure-g">
        <div className="pure-u-1 pure-u-sm-11-24">
          <div className="form-content">
            <label htmlFor="flight_from">Origen</label>
            <select
              id="flight_from"
              name="from"
              {...formik.getFieldProps("from")}
            >
              <option value="">Selecciona una opción</option>
              {renderCities(citiesFrom)}
            </select>
            {formik.touched.from && formik.errors.from ? (
              <div className="error">{formik.errors.from}</div>
            ) : null}
          </div>
        </div>
        <div className="pure-u-1 pure-u-sm-2-24" />
        <div className="pure-u-1 pure-u-sm-11-24">
          <div className="form-content">
            <label htmlFor="flight_to">Destino</label>
            <select id="flight_to" name="to" {...formik.getFieldProps("to")}>
              <option value="">Selecciona una opción</option>
              {renderCities(citiesTo)}
            </select>
            {formik.touched.to && formik.errors.to ? (
              <div className="error">{formik.errors.to}</div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="pure-g">
        <div className="pure-u-1 pure-u-sm-11-24">
          <div className="form-content">
            <label htmlFor="flight_time">Horario</label>
            <input
              type="text"
              id="time"
              name="time"
              {...formik.getFieldProps("time")}
            />
            {formik.touched.time && formik.errors.time ? (
              <div className="error">{formik.errors.time}</div>
            ) : null}
          </div>
        </div>
        <div className="pure-u-1 pure-u-sm-2-24" />
        <div className="pure-u-1 pure-u-sm-11-24">
          <div className="form-content">
            <label htmlFor="flight_seats">Asientos</label>
            <input
              type="text"
              id="flight_seats"
              name="seats"
              {...formik.getFieldProps("seats")}
            />
            {formik.touched.seats && formik.errors.seats ? (
              <div className="error">{formik.errors.seats}</div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="pure-g">
        <div className="pure-u-1 text-right">
          <button className="btn btn-primary btn-block" type="submit">
            Buscar vuelo
          </button>
        </div>
      </div>
    </form>
  )
}

export default FlightsForm
