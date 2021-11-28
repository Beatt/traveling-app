import * as React from "react"
import { Route, Routes } from "react-router-dom"
import NotFound from "../views/NotFound"
import Flights from "../views/Flights"

const Router = () => (
  <Routes>
    <Route exact path="/" element={<Flights />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default Router
