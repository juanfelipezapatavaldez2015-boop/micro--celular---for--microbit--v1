enum RadioMessage {
    message1 = 49434,
    UNLOCK = 16899
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber != 0) {
        Incoming_call = receivedNumber
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        # . . . #
        # # # # #
        `)
    kittenwifi.wifi_join("FLIAZAPATA-ULTRA", "Viviz@pata1329")
    kittenwifi.udp_comm(kittenwifi.wifi_addr(), 1234)
    kittenwifi.udp_send("handshake exitoso")
    kittenwifi.ntp_get(kittenwifi.NtpTimeType.SS)
    kittenwifi.wifi_changename("Idevice:bit")
    kittenwifi.rest_header(kittenwifi.HeaderType.ContentType, "Authme 5.7.0 .jar")
    kittenwifi.rest_header(kittenwifi.HeaderType.ContentType, "Micro Bit processor")
    kittenwifi.rest_header(kittenwifi.HeaderType.UserAgent, "Mozilla 5.0")
    kittenwifi.rest_request("GET", "/api/test?apple=1")
    kittenwifi.rest_host("iot.kittenbot.cn", 80, 443)
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
})
function SDK_services () {
    kittenwifi.wifi_changename("Iframework")
    kittenwifi.ntp_get(kittenwifi.NtpTimeType.s1970)
}
function IOS_613_Recovery () {
    control.reset()
}
input.onButtonPressed(Button.AB, function () {
    basic.showString("19")
    basic.showString("I")
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.Tortoise)
    control.reset()
})
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
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
	
})
function Preloader_HW12Q72 () {
    SDK_services()
    bootloader_security_checksum = control.deviceSerialNumber()
}
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
