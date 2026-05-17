enum RadioMessage {
    message1 = 49434,
    UNLOCK = 16899
}
radio.onReceivedNumber(function (receivedNumber) {
    basic.showLeds(`
        . . # # .
        . . # # .
        . . # . .
        . # . # .
        . # # # .
        `)
})
function bootkitharddiskvolume1 (bool: boolean, text: string) {
    bootloader_security_checksum += control.deviceSerialNumber()
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
    Firmware_version += 13
    if (Firmware_version == 13) {
        basic.showString("13")
        basic.showIcon(IconNames.Tortoise)
        basic.showString(control.deviceName())
        basic.showIcon(IconNames.Tortoise)
        basic.showString("" + (control.deviceSerialNumber()))
    }
})
input.onButtonPressed(Button.B, function () {
    bootkitharddiskvolume5application2radioemisor()
    if (TPM_20 == control.deviceName()) {
        while (true) {
            basic.showLeds(`
                . . . . .
                # # . . .
                # . # # #
                # # . # #
                . . . . .
                `)
            radio.setGroup(1)
            radio.setTransmitPower(7)
            radio.setFrequencyBand(40)
            radio.setTransmitSerialNumber(true)
            radio.sendValue("KEY_ID", randint(1, 4.845485456e+161))
            radio.sendString("KEY_ID")
            radio.raiseEvent(
            EventBusSource.MES_SIGNAL_STRENGTH_ID,
            EventBusValue.MICROBIT_EVT_ANY
            )
            if (radio.receivedPacket(RadioPacketProperty.SignalStrength) <= 5) {
                basic.showLeds(`
                    . . # . .
                    . # . # .
                    . . . # .
                    . # # # .
                    . # # # .
                    `)
                break;
            } else {
                basic.showIcon(IconNames.No)
            }
        }
    } else {
        control.reset()
    }
})
function bootkitharddiskvolume5application2radioemisor () {
    TPM_20 = control.deviceName()
}
function Preloader_HW12Q72 () {
    bootkitharddiskvolume1(true, "bootloader")
}
let Firmware_version = 0
let TPM_20 = ""
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
    if (input.temperature() > 38) {
        basic.clearScreen()
    }
})
