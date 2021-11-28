import Snackbar from "node-snackbar"
import "node-snackbar/src/sass/snackbar.sass"

export default {
  show: ({ message }) =>
    Snackbar.show({ pos: "top-right", actionText: "Cerrar", text: message }),
}
