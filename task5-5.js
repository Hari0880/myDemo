const EventEmitter = require('events');

class EventManagement extends EventEmitter {
    constructor() {
        super();  // Inherit the functionality of EventEmitter
    }

    startEvent() {
        console.log("Event started.");
        this.emit('start');  // Emit 'start' event
    }

    inProgressEvent() {
        console.log("Event in progress.");
        this.emit('in-progress');  // Emit 'in-progress' event
    }

    completeEvent() {
        console.log("Event completed.");
        this.emit('completed');  // Emit 'completed' event
    }
}

module.exports = EventManagement;  // Export the EventManagement class
