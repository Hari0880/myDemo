const EventManagement = require('./task5-5.js');  // Import the EventManagement class

// Create an instance of the EventManagement class
const eventManager = new EventManagement();

// Listen for 'start' event
eventManager.on('startEvent', () => {
    console.log("Listener: Event has started.");
});

// Listen for 'in-progress' event
eventManager.on('inProgressEvent', () => {
    console.log("Listener: Event is in progress.");
});

// Listen for 'completed' event
eventManager.on('completeEvent', () => {
    console.log("Listener: Event is completed.");
});

// Trigger events
eventManager.emit('startEvent');        // Will trigger 'start' event
eventManager.emit('inProgressEvent');   // Will trigger 'in-progress' event
eventManager.emit('completeEvent');     // Will trigger 'completed' event
