const os = require('os')

function calMemo(){
let freemem0 = os.freemem();
let total = os.totalmem()
let curr = total-freemem0
console.clear()
console.log("total memory",total)
console.log("free memory",freemem0)
console.log(" memory", curr)
console.log((freemem0/total)*100)

}
setInterval(calMemo, 5000);