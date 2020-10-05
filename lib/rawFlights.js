const getCurrentFlights = (res) => {
  const flights = [...res.data]

  const time = new Date()
  const hourBack = new Date().setHours(time.getHours() - 1)
  const hourFor = new Date().setHours(time.getHours() + 1)

  const currentFlights = flights.filter(
    (flight) =>
      'arrival' in flight.flight &&
      new Date(flight.flight['arrival'].estimated) > hourBack &&
      new Date(flight.flight['arrival'].estimated) < hourFor
  )

  currentFlights.sort((a, b) => {
    let dateA = new Date(a.flight.arrival.estimated)
    let dateB = new Date(b.flight.arrival.estimated)
    return dateA - dateB
  })

  return currentFlights
}

module.exports = {
  getCurrentFlights,
}
