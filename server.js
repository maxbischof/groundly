const express = require('express')
const app = express()
const port = 3001
const axios = require('axios')
const https = require('https')
require('dotenv').config()
const rawFlights = require('./lib/rawFlights')

const authentificationKey = process.env.FRAPORT_API_KEY
let flights = null

const axiosInstance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
})

axiosInstance
  .get('https://developer.fraport.de/api/flights/1.0/flight/FRA/arrival/', {
    headers: { Authorization: authentificationKey },
  })
  .then((res) => {
    flights = rawFlights.getCurrentFlights(res)
  })
  .catch((err) => console.log('There was a problem loading flight data.' + err))

app.get('/arrivals', (req, res) => {
  res.send(flights)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
