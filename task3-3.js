
function delayedMessage(message, delay, callback) {
    setTimeout(() => {
        console.log(message);  
        callback();  
    }, delay);
}


function onMessagePrinted() {
    console.log("Message has been printed!");
}


delayedMessage("Hello, this is a delayed message!", 2000, onMessagePrinted);  
delayedMessage("Hello, this is a delayed message!", 5000, onMessagePrinted);  