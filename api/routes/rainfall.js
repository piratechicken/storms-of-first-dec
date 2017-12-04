const express = require('express')
const Rainfall = require('../models/rainfall')

const router = express.Router()

router.get('/rainfall', (req, res) => {
  Rainfall.find()
  .then(data => {
    res.json(data)
  })
  .catch(error => {
    res.status(400).json({ error: error.message })
  })
})

router.get('/rainfall/:city/:year/:month', (req, res) => {
  const city = req.params.city
  const year = req.params.year
  const month = req.params.month

  Rainfall.find({
    city: city,
    year: year,
    month: month
  })
    .then(data => {
      let total = 0
      let dataLength = data.length

      data.forEach((day) => {
        total += day.amount
        console.log(total)
      })
      let ave = total / dataLength
      let sortedData = data.slice().sort( (a,b) => a.amount-b.amount )
      let maxRainfall = sortedData[dataLength - 1].amount
      let maxRainfallDay = sortedData[dataLength - 1].day
      console.log(sortedData)
      let median
      if(dataLength % 2 === 0) {
        const item1 = parseInt( (dataLength+1) / 2 - 1)
        const item2 = parseInt( (dataLength+1) / 2 )
        const item1Amount = sortedData[item1].amount
        const item2Amount = sortedData[item2].amount
        console.log(item1, item2)
        median = (item1Amount + item2Amount) / 2
      }
      else {
        const item = parseInt( (dataLength+1) / 2 - 1)
        console.log(item)
        median = sortedData[item].amount
      }

      return res.json({ 
        city: city,
        month: month,
        year: year,
        totalRainfall: total,
        aveDailyRain: ave,
        medianRainfall: median,
        maxRainfall: maxRainfall,
        maxRainfallDay: maxRainfallDay
      })
    })
    .catch(error => {
      res.status(400).json({ error: error.message })
    })

    console.log(city, year, month)

})
module.exports = router