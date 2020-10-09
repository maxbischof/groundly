import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Communication() {
  const { id } = useParams()
  const [communication, setCommunication] = useState()
  const [requestedFuel, setRequestedFuel] = useState()

  useEffect(() => {
    axios.get('/communications/' + id).then((res) => setCommunication(res.data))
  }, [id])

  function handleChange(event) {
    console.log('dsdf')
    console.log(event.target.value)
    setRequestedFuel(event.target.value)
  }

  function onSubmit(event) {
    event.preventDefault()
    axios
      .put('/communications/' + id, {
        requestedFuel: requestedFuel,
      })
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <p>Callsign: {communication?.callSign}</p>
      <p>Estimated: {communication?.estimated}</p>
      <p>Fuel requested: {communication?.requestedFuel.toString()}</p>
      <form onSubmit={onSubmit}>
        <label>
          Request fuel:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" onChange={handleChange} />
      </form>
      <p>
        Fuel requested approved: {communication?.approveFuelRequest.toString()}
      </p>
    </>
  )
}
