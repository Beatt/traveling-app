import cities from "../tests/factories/cities"

export const citiesGet = () => Promise.resolve({ data: cities.buildList(5) })
