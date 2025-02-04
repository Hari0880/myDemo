const os = require('os')

let time = os.uptime()
let minutes = Math.floor((time/60))
let hours = Math.floor(minutes/60)
let days = Math.floor(hours/24)
console.log(minutes%60)
console.log(hours)
console.log(days)