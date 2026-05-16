enum RadioMessage {
    message1 = 49434
}
kittenwifi.on_wifi_disconnected(function () {
    kittenwifi.wifi_join("Redmi 10", "secure connection")
    kittenwifi.wifi_join("", "")
    kittenwifi.wifi_join("", "")
    kittenwifi.wifi_join("", "")
})
input.onButtonPressed(Button.A, function () {
    if (TPM_20 == control.deviceSerialNumber()) {
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
input.onButtonPressed(Button.AB, function () {
    if (Firmware_version == 11) {
        basic.showString("11")
        basic.showString("I")
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.Tortoise)
        basic.showString("" + (control.deviceSerialNumber()))
    }
})
input.onButtonPressed(Button.B, function () {
    if (TPM_20 == control.deviceSerialNumber()) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # . # .
            . . # . .
            `)
        serial.redirectToUSB()
        serial.redirect(
        SerialPin.USB_TX,
        SerialPin.USB_RX,
        BaudRate.BaudRate115200
        )
    } else {
        control.reset()
    }
})
let Firmware_version = 0
let bootloader_security_checksum = 0
let TPM_20 = 0
basic.showLeds(`
    . # . . .
    . . # . .
    . # # # .
    . # # . .
    . # # # .
    `)
TPM_20 += control.deviceSerialNumber()
bootloader_security_checksum += control.deviceSerialNumber()
Firmware_version += 11
basic.pause(2000)
if (bootloader_security_checksum == control.deviceSerialNumber()) {
    music.play(music.stringPlayable("C F D F - G F C5 ", 151), music.PlaybackMode.UntilDone)
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
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    control.reset()
}
basic.forever(function () {
    if (input.temperature() > 38) {
        basic.clearScreen()
    }
})
