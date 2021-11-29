import * as React from "react"
import { Link } from "react-router-dom"

const NavBar = () => (
  <div className="navbar">
    <div className="pure-g">
      <div className="pure-u-2-24 pure-u-md-4-24" />
      <div className="pure-u-10-24 pure-u-md-12-24">
        <p>
          <Link to="/">Traveling APP</Link>
        </p>
      </div>
      <div className="pure-u-10-24 pure-u-md-4-24">
        <div className="navbar-icon">
          <Link to="/cart" className="btn btn-secondary">
            Carrito
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default NavBar
