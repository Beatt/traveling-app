import * as Yup from "yup"

export default Yup.object({
  to: Yup.string().required("Required"),
  from: Yup.string().required("Required"),
  time: Yup.string().required("Required"),
  seats: Yup.number()
    .min(1, "Elige por lo menos un boleto")
    .max(6, "Solo se permiten 6 boletos por cliente")
    .required("Required"),
})
