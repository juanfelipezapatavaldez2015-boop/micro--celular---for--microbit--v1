enum RadioMessage {
    message1 = 49434,
    UNLOCK = 16899
}
input.onButtonPressed(Button.A, function () {
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
})
input.onButtonPressed(Button.AB, function () {
    if (Firmware_version == 12) {
        basic.showString("12")
    }
})
input.onButtonPressed(Button.B, function () {
    name += 1
    while (true) {
        radio.setGroup(1)
        radio.setTransmitPower(7)
        radio.setFrequencyBand(40)
        radio.sendValue("KEY_ID", randint(0, 8.465485958698595e+61))
        basic.clearScreen()
        basic.pause(10)
        basic.showLeds(`
            . . . . .
            # # . . .
            # . # # #
            # # . # #
            . . . . .
            `)
    }
})
let name = 0
let Firmware_version = 0
let bootloader_security_checksum = 0
basic.showLeds(`
    . # . . .
    . . # . .
    . # # # .
    . # # . .
    . # # # .
    `)
bootloader_security_checksum += control.deviceSerialNumber()
Firmware_version += 12
if (bootloader_security_checksum == control.deviceSerialNumber()) {
    basic.pause(200)
    basic.showLeds(`
        . . # . .
        . # . . .
        # . # # #
        . # . . .
        . . # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # . #
        . . . # .
        . . # . .
        `)
} else {
    basic.showIcon(IconNames.Umbrella)
    serial.setTxBufferSize(32)
    serial.redirectToUSB()
    serial.redirect(
    SerialPin.USB_TX,
    SerialPin.USB_RX,
    BaudRate.BaudRate115200
    )
}
basic.forever(function () {
    if (input.temperature() > 38) {
        basic.clearScreen()
    }
})
