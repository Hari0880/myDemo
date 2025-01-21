function gree(callB,name){
    let msg = "good morning "+name
    callB(msg)
}
function callB(msg) {
    console.log(msg)
}

gree(callB,"hari")