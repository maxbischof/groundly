import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Communication() {
  const { id } = useParams()
  const [communication, setCommunication] = useState()

  useEffect(() => {
    axios.get('/communications/' + id).then((res) => setCommunication(res.data))
  }, [id])

  return (
    <>
      <p>Callsign: {communication?.callSign}</p>
      <p>Estimated: {communication?.estimated}</p>
      <p>Fuel requested: {communication?.requestFuel.toString()}</p>
      <p>
        Fuel requested approved: {communication?.approveFuelRequest.toString()}
      </p>
    </>
  )
}
