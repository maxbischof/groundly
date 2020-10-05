import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Flight from './Flight'

export default function Arrivals() {
  const [flights, setFlights] = useState()

  useEffect(() => {
    axios.get('/arrivals').then((res) => setFlights(res.data))
  }, [])
  return (
    <>
      {flights?.map((flight) => (
        <Flight
          key={flight.flight.aircraftType.registration}
          from={flight.flight.departureAirport}
          to={flight.flight.arrivalAirport}
          callSign={
            flight.flight.flightNumber.airlineCode +
            '' +
            flight.flight.flightNumber.trackNumber
          }
          estimated={flight.flight.arrival.estimated}
          scheduled={flight.flight.arrival.scheduled}
          actual={flight.flight.arrival.actual}
        />
      ))}
    </>
  )
}
