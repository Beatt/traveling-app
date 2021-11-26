import * as React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../views/Home"
import NotFound from "../views/NotFound"

const Router = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default Router
