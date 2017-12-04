const mongoose = require('./init')

const Rainfall = mongoose.model('Rainfall', {
  city: { type: String, required: [true, 'City is required'] },
  year: { type: Number,  required: [true, 'year is required'] },
  month: { type: Number,  required: [true, 'month is required'] },
  day: { type: Number,  required: [true, 'day is required'] },
  amount: { type: Number, required: [true, 'Amount of rain is required'] }
})



module.exports = Rainfall