serial.redirectToUSB()
radio.setGroup(212)
basic.forever(function () {
    radio.sendValue("cX", pins.digitalReadPin(DigitalPin.P0))
    radio.sendValue("cY", pins.digitalReadPin(DigitalPin.P1))
    serial.writeLine("" + (pins.analogReadPin(AnalogPin.P0)))
})
