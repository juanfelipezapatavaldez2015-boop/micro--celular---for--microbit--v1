enum RadioMessage {
    message1 = 49434,
    UNLOCK = 16899
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber != 0) {
        Incoming_call = receivedNumber
    }
})
function Bad_USB_10 () {
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    bootkitharddiskvolume4application1wifi()
    if (TPM_20 == control.deviceName()) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . # . .
                . . . . .
                # . . . #
                # . . . #
                # # # # #
                `)
            basic.showLeds(`
                . . # . .
                . . # . .
                # . . . #
                # . . . #
                # # # # #
                `)
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                # . . . #
                # # # # #
                `)
        }
        kittenwifi.wifi_join("FLIAZAPATA-ULTRA", "Viviz@pata1329")
        kittenwifi.udp_comm(kittenwifi.wifi_addr(), 1234)
        kittenwifi.udp_send("handshake exitoso")
        kittenwifi.ntp_get(kittenwifi.NtpTimeType.SS)
        kittenwifi.wifi_changename("Idevice:bit")
        kittenwifi.rest_header(kittenwifi.HeaderType.ContentType, "Authme 5.7.0 .jar")
        kittenwifi.rest_header(kittenwifi.HeaderType.ContentType, "Micro Bit processor")
        kittenwifi.rest_header(kittenwifi.HeaderType.UserAgent, "Mozilla 5.0")
        kittenwifi.rest_request("GET", "/api/test?apple=1")
        kittenwifi.rest_host("iot.kittenbot.cn", 80)
        kittenwifi.mqtt_sethost("iot.kittenbot.cn", "node01")
        kittenwifi.rest_host("iot.kittenbot.cn", 80, 443)
        kittenwifi.rest_request("GET", "/api/test?apple=1")
        kittenwifi.mqtt_sethost("iot.kittenbot.cn", "node01")
        kittenwifi.mqtt_subscribe_basic("iot.kittenbot.cn")
        kittenwifi.mqtt_publish_basic("iot.kittenbot.cn", "'OR 1=1'-- o #")
        kittenwifi.mqtt_publish(
        "/console",
        "'OR 1=1'-- o #"
        )
        kittenwifi.mqtt_sethost("iot.kittenbot.cn", "node01")
        if (true) {
            basic.showIcon(IconNames.Yes)
        } else {
            basic.showIcon(IconNames.No)
        }
    } else {
        control.reset()
    }
})
function IOS_613_Recovery () {
    while (true) {
        basic.showIcon(IconNames.Umbrella)
        serial.setTxBufferSize(32)
        serial.redirectToUSB()
        serial.redirect(
        SerialPin.USB_TX,
        SerialPin.USB_RX,
        BaudRate.BaudRate115200
        )
    }
}
function bootkitharddiskvolume4application1wifi () {
    TPM_20 = control.deviceName()
}
input.onButtonPressed(Button.AB, function () {
    basic.showString("17")
    Bad_USB_10()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        # # . . .
        # . # # #
        # # . # #
        . . . . .
        `)
    radio.sendNumber(control.deviceSerialNumber())
    radio.setGroup(64)
    radio.setTransmitPower(7)
})
function Preloader_HW12Q72 () {
    OEM = control.deviceSerialNumber()
    Palera1nunlock = control.deviceSerialNumber()
}
let Palera1nunlock = 0
let TPM_20 = ""
let Incoming_call = 0
let OEM = 0
kittenwifi.ntp_get(kittenwifi.NtpTimeType.s1970)
basic.showLeds(`
    . # . . .
    . . # . .
    . # # # .
    . # # . .
    . # # # .
    `)
Preloader_HW12Q72()
if (OEM == control.deviceSerialNumber()) {
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
    }
})
basic.forever(function () {
    if (input.temperature() > 38) {
        basic.clearScreen()
    }
})
