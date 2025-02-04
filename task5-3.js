const EventEmitter = require('events')
let myEmitter = new EventEmitter();

myEmitter.once("userDetails",(name,age)=>{
    console.log("hello ! "+name+" your age "+age)
})

myEmitter.emit("userDetails","hari",22)