import * as React from "react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import NavBar from "./NavBar"
import Router from "./Router"
import store from "../store"

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <NavBar />
      <div className="pure-g">
        <div className="pure-u-2-24" />
        <div className="pure-u-20-24">
          <Router />
        </div>
      </div>
    </BrowserRouter>
  </Provider>
)

export default App
