import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export default function Flight({
  from,
  to,
  callSign,
  estimated,
  scheduled,
  actual,
}) {
  let history = useHistory()

  function startCommunication() {
    axios
      .post('/create', {
        callSign: callSign,
        estimated: estimated,
        scheduled: scheduled,
        actual: actual,
      })
      .then((response) => {
        history.push('/communications/' + response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{from}</td>
            <td></td>
            <td>{to}</td>
          </tr>
        </tbody>
      </table>

      <p>Callsign: {callSign}</p>
      <p>Date: {new Date(estimated).toDateString()}</p>

      <table>
        <thead>
          <tr>
            <th>Scheduled</th>
            <th>Estimated</th>
            <th>Actual</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{new Date(scheduled).toTimeString().substring(0, 8)}</td>
            <td>{new Date(estimated).toTimeString().substring(0, 8)}</td>
            <td>{new Date(actual).toTimeString().substring(0, 8)}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={startCommunication}>Start communication</button>
    </div>
  )
}
