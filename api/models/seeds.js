const Rainfall = require('./rainfall')
// Rainfall model

// Rainfall.remove( { } )
// .then (rain => {
//   console.log('Rainfall: ', rain)
// })
// .catch( error => {
//   console.error(error)
// })

// Rainfall.create([
//   {
//     city: 'Melbourne',
//     year: 2017,
//     month: 11,
//     day: 27,
//     amount: 15.0
//   },
//   {
//     city: 'Melbourne',
//     year: 2017,
//     month: 11,
//     day: 28,
//     amount: 12.0
//   },
  // {
  //   city: 'Melbourne',
  //   year: 2017,
  //   month: 11,
  //   day: 29,
  //   amount: 8.0
  // },
  // {
  //   city: 'Melbourne',
  //   year: 2017,
  //   month: 11,
  //   day: 30,    
  //   amount: 12.0
  // },
  // {
  //   city: 'Melbourne',
  //   year: 2017,
  //   month: 12,
  //   day: 1,
  //   amount: 20.5
  // },
  // {
  //   city: 'Melbourne',
  //   year: 2017,
  //   month: 12,
  //   day: 2,    
  //   amount: 43.5
  // },
  // {
  //   city: 'Melbourne',
  //   year: 2017,
  //   month: 12,
  //   day: 3,    
  //   amount: 5.0
  // }
])
.then( () => {

  Rainfall.find()
  .then (rain => {
    console.log('Rainfall: ', rain)
  })
  .catch( error => {
    console.error(error)
  })
})