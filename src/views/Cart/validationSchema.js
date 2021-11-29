import * as Yup from "yup"

export default Yup.object({
  fullName: Yup.string().required("Requerido"),
  surnames: Yup.string().required("Requerido"),
  address: Yup.string().required("Requerido"),
  email: Yup.string().required("Requerido"),
})
