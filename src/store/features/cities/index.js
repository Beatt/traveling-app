import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { citiesGet } from "../../../api/citie"

export const retrieveCities = createAsyncThunk("cities/retrieve", async () => {
  const { data } = await citiesGet()
  return data
})

export const slice = createSlice({
  name: "cities",
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(retrieveCities.fulfilled, (state, action) => {
      state.data = action.payload
    })
  },
})

export default slice.reducer
