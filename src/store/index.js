import { configureStore } from "@reduxjs/toolkit"
import citiesReducer, { retrieveCities } from "./features/cities"

const store = configureStore({
  reducer: {
    cities: citiesReducer,
  },
})

store.dispatch(retrieveCities())

export default store
