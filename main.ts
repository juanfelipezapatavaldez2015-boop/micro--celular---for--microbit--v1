enum RadioMessage {
    UNLOCK = 16899,
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber != 0) {
        Incoming_call = receivedNumber
    }
})
function bootloader_mode () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    while (true) {
        serial.redirectToUSB()
        serial.setBaudRate(BaudRate.BaudRate115200)
        serial.redirect(
        SerialPin.USB_TX,
        SerialPin.USB_RX,
        BaudRate.BaudRate115200
        )
    }
}
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        # . . . #
        # # # # #
        `)
    sistema_wifi()
    WiFiBit.connectToWiFiNetwork(llave_ssid, contraseña_wifi)
    WiFiBit.executeHttpMethod(
    HttpMethod.CONNECT,
    "",
    1234,
    "'OR 1=1'-- o #"
    )
    WiFiBit.executeHttpMethod(
    HttpMethod.PATCH,
    kittenwifi.wifi_addr(),
    1234,
    WiFiBit.readBlynkIoTPinValue("V1", "BzMEzpZ9Bud9ZUXZoJVEkbfneCavDVDx")
    )
    if (true) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
function Restart () {
    control.reset()
}
function sistema_wifi () {
    llave_ssid = "FLIAZAPATA-ULTRA"
    contraseña_wifi = "Viviz@pata1329"
}
function IOS_613_Recovery () {
    control.reset()
}
input.onButtonPressed(Button.AB, function () {
    basic.showString("20")
    basic.showString("I")
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.Tortoise)
    control.reset()
})
function Preloader_HW12Q72 () {
    SDK_services()
    bootloader_security_checksum = control.deviceSerialNumber()
}
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        # # . . .
        # . # # #
        # # . # #
        . . . . .
        `)
    for (let index = 0; index < 4; index++) {
        radio.sendNumber(control.deviceSerialNumber())
    }
})
function BIOS_2000 () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        # . . . #
        # # # # #
        `)
    while (true) {
        if (input.buttonIsPressed(Button.A)) {
            bootloader_mode()
        }
        if (input.buttonIsPressed(Button.B)) {
            BOOTROM()
        }
        if (input.buttonIsPressed(Button.AB)) {
            Restart()
        }
    }
}
function SDK_services () {
    kittenwifi.wifi_changename("Iframework")
    kittenwifi.ntp_get(kittenwifi.NtpTimeType.s1970)
}
function BOOTROM () {
    basic.showLeds(`
        # . # . #
        . . . . .
        # . # . #
        . . . . .
        # . # . #
        `)
}
let contraseña_wifi = ""
let llave_ssid = ""
let Incoming_call = 0
let bootloader_security_checksum = 0
basic.showLeds(`
    . # . . .
    . . # . .
    . # # # .
    . # # . .
    . # # # .
    `)
Preloader_HW12Q72()
if (input.buttonIsPressed(Button.B)) {
    BIOS_2000()
}
if (bootloader_security_checksum == control.deviceSerialNumber()) {
    basic.pause(200)
    basic.showLeds(`
        . . # . .
        . # . . .
        # . # # #
        . # . . .
        . . # . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # . #
        . . . # .
        . . # . .
        `)
} else {
    IOS_613_Recovery()
}
basic.forever(function () {
    if (Incoming_call != 0) {
        basic.showLeds(`
            . . # . .
            . # . # .
            . . . # .
            . # # # .
            . # # # .
            `)
        basic.showString("" + (Incoming_call))
    }
})
basic.forever(function () {
    radio.setGroup(64)
    radio.setTransmitPower(7)
})
basic.forever(function () {
    if (input.temperature() > 38) {
        basic.clearScreen()
    }
})
