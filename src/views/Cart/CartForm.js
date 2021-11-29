import * as React from "react"
import Modal from "react-modal"
import { useFormik } from "formik"
import { Link, useNavigate } from "react-router-dom"
import validationSchema from "./validationSchema"
import "./styles.scss"
import { formatToMoney } from "../helpers"
import CartCard from "./CartCard"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

Modal.setAppElement(document.getElementsByTagName("body"))

const { useEffect, useState } = React

const CartForm = ({
  saveCheckout,
  getCart,
  flightsPricesByIdGet,
  clearCart,
}) => {
  const navigate = useNavigate()
  const [modalIsOpen, setIsOpen] = useState(false)
  const [flights, setFlights] = useState(getCart() || [])
  const formik = useFormik({
    initialValues: {
      fullName: "",
      surnames: "",
      address: "",
      email: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  })

  useEffect(() => {
    const prices = flights.map((currentFlight) => currentFlight.prices)
    for (const price of prices) {
      Promise.all([
        flightsPricesByIdGet(price.to),
        flightsPricesByIdGet(price.from),
      ]).then((res) => {
        price.priceTo = res[0].data.price
        price.priceFrom = res[1].data.price
        setFlights([...flights])
      })
    }
  }, [])

  useEffect(() => {
    if (!flights.length) {
      clearCart()
    }
  }, [flights])

  function getTotal() {
    let totalBag = 0
    for (let i = 0; i < flights.length; i++) {
      totalBag += flights[i].prices.priceTo + flights[i].prices.priceFrom
    }
    return formatToMoney(totalBag)
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  async function handleSubmit(values) {
    const { fullName, surnames, address, email } = values

    await saveCheckout({
      fullName: fullName,
      surnames: surnames,
      address: address,
      email: email,
      flights,
    })
    clearCart()
    navigate(
      `/thanks?fullName=${fullName}&surnames=${surnames}&address=${address}&email=${email}`
    )
  }

  function removeFlight(flightSelect) {
    setFlights(flights.filter((flight, index) => index !== flightSelect))
  }

  function clearCar() {
    setFlights([])
  }

  if (!flights.length) {
    return (
      <div className="alert alert-info">
        <h1>Sin viajes</h1>
        <p>
          Por favor regresa al inicio y selecciona por lo menos un viaje o haz
          clic <Link to="/">aquí</Link>
        </p>
      </div>
    )
  }

  return (
    <div className="pure-g">
      <div className="pure-u-1">
        <h1>Resumen de viaje</h1>
      </div>
      <div className="pure-u-1 text-right mb-20">
        <a href="#" data-testid="clearCart" onClick={clearCar}>
          Limpiar carrito
        </a>
      </div>
      <div className="pure-u-1">
        {flights.map((flight, index) => (
          <CartCard key={index} {...{ flight, index, removeFlight }} />
        ))}
        <div className="pure-g">
          <div className="pure-u-1 text-right">
            <h3 data-testid="total" className="mb-20">
              Total: {getTotal()}
            </h3>
          </div>
        </div>
        <div className="pure-g">
          <div className="pure-u-1 pure-u-md-4-5" />
          <div className="pure-u-1 pure-u-md-1-5 text-right">
            <button
              type="button"
              onClick={() => openModal()}
              className="btn btn-secondary btn-block"
            >
              Reservar
            </button>
          </div>
        </div>
      </div>
      <div className="pure-u-1">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <form onSubmit={formik.handleSubmit}>
            <h3 className="mb-20">¡Estas a unos pasos de reservar tu vuelo!</h3>
            <div className="pure-g">
              <div className="pure-u-1">
                {formik.errors.flights ? (
                  <div className="error">{formik.errors.flights}</div>
                ) : null}
              </div>
              <div className="pure-u-1 pure-u-sm-11-24">
                <div className="form-content">
                  <label htmlFor="checkout_fullName">Nombre completo</label>
                  <input
                    type="text"
                    id="checkout_fullName"
                    name="fullName"
                    {...formik.getFieldProps("fullName")}
                  />
                  {formik.touched.fullName && formik.errors.fullName ? (
                    <div className="error">{formik.errors.fullName}</div>
                  ) : null}
                </div>
              </div>
              <div className="pure-u-1 pure-u-sm-2-24" />
              <div className="pure-u-1 pure-u-sm-11-24">
                <div className="form-content">
                  <label htmlFor="checkout_surnames">Apellidos</label>
                  <input
                    type="text"
                    id="checkout_surnames"
                    name="surnames"
                    {...formik.getFieldProps("surnames")}
                  />
                  {formik.touched.surnames && formik.errors.surnames ? (
                    <div className="error">{formik.errors.surnames}</div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="pure-g">
              <div className="pure-u-1 pure-u-sm-11-24">
                <div className="form-content">
                  <label htmlFor="checkout_address">Dirección</label>
                  <input
                    type="text"
                    id="checkout_address"
                    name="address"
                    {...formik.getFieldProps("address")}
                  />
                  {formik.touched.address && formik.errors.address ? (
                    <div className="error">{formik.errors.address}</div>
                  ) : null}
                </div>
              </div>
              <div className="pure-u-1 pure-u-sm-2-24" />
              <div className="pure-u-1 pure-u-sm-11-24">
                <div className="form-content">
                  <label htmlFor="checkout_email">Correo</label>
                  <input
                    type="text"
                    id="checkout_email"
                    name="email"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="pure-g">
              <div className="pure-u-1-2">
                <button
                  className="btn btn-block"
                  type="button"
                  onClick={closeModal}
                >
                  Cancelar
                </button>
              </div>
              <div className="pure-u-1-2">
                <button className="btn btn-primary btn-block" type="submit">
                  Guardar
                </button>
              </div>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  )
}

export default CartForm
