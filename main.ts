input.onButtonPressed(Button.A, function () {
    if (SElinux == 0) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            # . . . #
            # # # # #
            `)
        kittenwifi.wifi_join("FLIAZAPATA-ULTRA", "Viviz@pata1329")
        kittenwifi.ntp_get(kittenwifi.NtpTimeType.SS)
        kittenwifi.rest_header(kittenwifi.HeaderType.ContentType, "application/json")
        kittenwifi.rest_header(kittenwifi.HeaderType.ContentType, "processor mediatek 1.0 3310 horizon beta")
        kittenwifi.rest_header(kittenwifi.HeaderType.UserAgent, "Mozilla 5.0")
        kittenwifi.rest_header(kittenwifi.HeaderType.ContentType, "hw_product:9856810520262024")
        kittenwifi.rest_request("GET", "/api/test?apple=1")
        kittenwifi.mqtt_publish(
        "/console",
        "'OR 1=1'-- o #"
        )
        kittenwifi.mqtt_sethost("iot.kittenbot.cn", "node01")
        kittenwifi.udp_comm("192.168.18.1", 4)
        kittenwifi.udp_send("Micro:bit connected")
        kittenwifi.mqtt_publish(
        "shell console",
        "'OR 1=1'-- o #"
        )
        kittenwifi.mqtt_sethost_port("iot.kittenbot.cn", 1883, "00000009")
        kittenwifi.rest_host("iot.kittenbot.cn", 80, 443)
        kittenwifi.mqtt_sethost("iot.kittenbot.cn", "node01")
        kittenwifi.mqtt_sethost("iot.kittenbot.cn", "node01")
        kittenwifi.mqtt_sethost("iot.kittenbot.cn", "node01")
        kittenwifi.rest_request("GET", "/api/test?apple=1")
        kittenwifi.mqtt_sethost_auth(
        "iot.kittenbot.cn",
        "node01",
        "'OR 1=1'-- o #",
        ""
        )
        kittenwifi.mqtt_sethost("iot.kittenbot.cn", "node01")
        kittenwifi.mqtt_sethost("iot.kittenbot.cn", "node01")
        kittenwifi.mqtt_subscribe_basic("iot.kittenbot.cn")
        kittenwifi.mqtt_publish_basic("iot.kittenbot.cn", "'OR 1=1'-- o #")
        kittenwifi.mqtt_publish(
        "/console",
        "'OR 1=1'-- o #"
        )
        kittenwifi.mqtt_sethost("iot.kittenbot.cn", "node01")
        kittenwifi.udp_comm("192.168.0.100", 1234)
        if (true) {
            basic.showIcon(IconNames.Yes)
        } else {
            basic.showIcon(IconNames.No)
        }
    } else {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . . . #
            . # . # .
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Firmware_version == 10) {
        basic.pause(5000)
        basic.showString("10")
        basic.pause(1000)
    } else {
        serial.redirectToUSB()
        serial.setBaudRate(BaudRate.BaudRate115200)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            # . . . #
            # # # # #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (true) {
        if (baseband == 9856810520262024) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                # . . . #
                # # # # #
                `)
            radio.setFrequencyBand(53)
            radio.setTransmitPower(7)
            radio.setGroup(1)
            radio.setTransmitSerialNumber(true)
            radio.sendNumber(12)
            radio.sendValue("baseband", 9856810520262024)
            radio.sendValue("device", 12)
            radio.sendString("shell console debug")
            if (true) {
                basic.showIcon(IconNames.Yes)
            }
        } else {
            control.reset()
        }
    } else {
        basic.showString("B")
    }
})
let boot_system = 0
let SElinux = 0
let downgrade_counter = 0
let update_counter = 0
let Firmware_version = 0
let bootloader_security_checksum = 0
let Debug_mode = 0
let baseband = 0
basic.showLeds(`
    . # . . .
    . . # . .
    . # # # .
    . # # . .
    . # # # .
    `)
let USB_OTA_DOWNLOADER = "DOWNLOAD"
let hw_product9856810520262024 = "hw_product:9856810520262024"
baseband = 9856810520262024
Debug_mode += 5
bootloader_security_checksum += 1
Firmware_version += 10
update_counter += 0 * 12
downgrade_counter += 0 * 1
SElinux += 0
boot_system += 1
basic.pause(2000)
radio.setGroup(1)
radio.setTransmitPower(7)
radio.setFrequencyBand(56)
basic.pause(2000)
if (bootloader_security_checksum == 1) {
	
} else {
    serial.redirectToUSB()
    serial.setTxBufferSize(32)
    basic.showLeds(`
        . # . . .
        . . # . .
        . # # # .
        . # # . .
        . # # # .
        `)
    basic.pause(500)
    control.reset()
}
if (boot_system == 1) {
    basic.showLeds(`
        . # . . .
        . . # . .
        . # # # .
        . # # . .
        . # # # .
        `)
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
    bootloader_security_checksum = 0
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
    if (input.buttonIsPressed(Button.A)) {
        kittenwifi.wifi_changename("microbit")
    } else {
    	
    }
})
basic.forever(function () {
    if (USB_OTA_DOWNLOADER == "DOWNLOAD") {
        serial.redirectToUSB()
        serial.redirect(
        SerialPin.P0,
        SerialPin.P1,
        BaudRate.BaudRate115200
        )
    }
})
basic.forever(function () {
    if (hw_product9856810520262024 == "hw_product:9856810520262024") {
        if (Firmware_version == 10) {
            if (input.buttonIsPressed(Button.AB)) {
                basic.showString("I")
                basic.showIcon(IconNames.Heart)
                basic.showIcon(IconNames.Tortoise)
            }
        } else {
        	
        }
    } else {
    	
    }
})
