import * as React from "react"
import { BrowserRouter } from "react-router-dom"
import NavBar from "./NavBar"
import Router from "./Router"

const App = () => (
  <BrowserRouter>
    <NavBar />
    <div className="pure-g">
      <div className="pure-u-2-24" />
      <div className="pure-u-20-24">
        <Router />
      </div>
    </div>
  </BrowserRouter>
)

export default App
