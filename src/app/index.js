import * as React from "react"
import { BrowserRouter } from "react-router-dom"
import NavBar from "./NavBar"
import Navigation from "./Navigation"

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Navigation />
  </BrowserRouter>
)

export default App
