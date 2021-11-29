import * as React from "react"
import { useSearchParams } from "react-router-dom"

const Thanks = () => {
  const [searchParams] = useSearchParams()
  return (
    <div className="section-md">
      <div className="pure-g">
        <div className="pure-u-1 pure-u-md-1-3" />
        <div className="pure-u-1 pure-u-md-1-3">
          <h1>
            ¡Gracias! <br />
            Hemos reservado tus vuelos.
          </h1>
          <p className="mb-20">Nombre: {searchParams.get("fullName")}</p>
          <p className="mb-20">Apellidos: {searchParams.get("surnames")}</p>
          <p className="mb-20">Dirección: {searchParams.get("address")}</p>
          <p className="mb-20">Correo: {searchParams.get("email")}</p>
        </div>
        <div className="pure-u-1 pure-u-md-1-3" />
      </div>
    </div>
  )
}

export default Thanks
