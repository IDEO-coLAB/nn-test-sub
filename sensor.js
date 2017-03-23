const Nomad = require('nomad-stream')

const nomad = new Nomad()
// Stock ticker ID
const subIds = [ 'QmXsfKnoKZAKMJkhhzoAFeQUBcR3Sy6uNDzhUVcabkKEe1' ]

nomad.subscribe(subIds, function(message) {
  console.log('SUBSCRIBER RECEIVED:', message.message)
})
