import * as React from "react"
import { Route, Routes } from "react-router-dom"
import NotFound from "../views/NotFound"
import Flights from "../views/Flights"
import ExitFlight from "../views/ExitFlight"
import ReturnFlight from "../views/ReturnFlight"
import Cart from "../views/Cart"
import Thanks from "../views/Thanks"

const Router = () => (
  <Routes>
    <Route exact path="/" element={<Flights />} />
    <Route path="/flights/available" element={<ExitFlight />} />
    <Route path="/flights/return" element={<ReturnFlight />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/thanks" element={<Thanks />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default Router
