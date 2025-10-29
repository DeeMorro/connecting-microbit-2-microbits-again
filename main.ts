// Micro:bit 1 - Sender
input.onButtonPressed(Button.A, function () {
    radio.sendString("Hello from 1!")
})
// Micro:bit 2 to N - Relay
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    // Pause to display the message
    basic.pause(1000)
    radio.sendString("Hey from 2!")
})
