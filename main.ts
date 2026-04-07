input.onButtonPressed(Button.A, function () {
    if (SElinux == 0) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            # . . . #
            # # # # #
            `)
        kittenwifi.ntp_get(kittenwifi.NtpTimeType.SS)
        kittenwifi.wifi_join("FLIAZAPATA-ULTRA", "Viviz@pata1329")
        kittenwifi.rest_request("GET", "/api/test?apple=1")
        kittenwifi.udp_comm("192.168.18.228", 1234)
        if (direccion_ip_del_wifi == 1) {
            kittenwifi.udp_comm("192.168.18.228", 1234)
            kittenwifi.wifi_init(SerialPin.P1, SerialPin.P2)
            kittenwifi.mqtt_publish(
            "/patch",
            "'OR 1=1'-- o #"
            )
            kittenwifi.mqtt_sethost("iot.kittenbot.cn", "node01")
            kittenwifi.mqtt_sethost("iot.kittenbot.cn", "node01")
            kittenwifi.mqtt_sethost("iot.kittenbot.cn", "node01")
        } else {
            basic.showIcon(IconNames.Diamond)
        }
        kittenwifi.rest_header(kittenwifi.HeaderType.ContentType, "application/json")
        kittenwifi.rest_header(kittenwifi.HeaderType.ContentType, "processor mediatek 1.0 horizon beta")
        kittenwifi.rest_header(kittenwifi.HeaderType.UserAgent, "Mozilla 5.0")
        kittenwifi.wifi_changename("I:micro device")
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
        if (true) {
        	
        } else {
            basic.showLeds(`
                # # # # .
                # # # # #
                # # . . .
                # # # # .
                . . . . .
                `)
            control.reset()
        }
        if (true) {
            basic.showIcon(IconNames.Yes)
        } else {
            basic.showIcon(IconNames.No)
        }
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
})
input.onButtonPressed(Button.AB, function () {
    if (Firmware_version == 7) {
        basic.clearScreen()
        basic.pause(1000)
        basic.showString("7")
        basic.pause(1000)
        serial.redirectToUSB()
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
    if (baseband == 9856810520262024) {
        if (SElinux == 0) {
            if (true) {
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
            } else {
                basic.showLeds(`
                    . . # . .
                    . # . # .
                    # . # . #
                    # . # . #
                    # # # # #
                    `)
            }
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
    } else {
        control.reset()
    }
})
let Sistema_Operativo = 0
let SElinux = 0
let debug_mode_checksum = 0
let downgrade_counter = 0
let update_counter = 0
let Firmware_version = 0
let kernel_version = 0
let direccion_ip_del_wifi = 0
let bootloader_security_checksum = 0
let Debug_mode = 0
let baseband = 0
baseband = 9856810520262024
Debug_mode += 5
bootloader_security_checksum += 1
direccion_ip_del_wifi += 1
kernel_version += 11
Firmware_version += 7
update_counter += 0 * 2
downgrade_counter += 0 * 1
debug_mode_checksum += 1
SElinux += 0
Sistema_Operativo += 25
kittenwifi.wifi_join("FLIAZAPATA-ULTRA", "Viviz@pata1329")
kittenwifi.ntp_get(kittenwifi.NtpTimeType.s1970)
basic.pause(3000)
if (bootloader_security_checksum == 1) {
    kittenwifi.udp_comm("192.168.0.100", 1234)
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
    basic.showLeds(`
        # # # # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # .
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # .
        # # . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # .
        # # . . .
        # # # # #
        # # # . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # .
        # # . . .
        # # # # #
        # # # . .
        # . . . .
        `)
    control.reset()
}
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
radio.setGroup(1)
radio.setTransmitPower(7)
radio.setFrequencyBand(56)
radio.raiseEvent(
EventBusSource.MICROBIT_ID_RADIO,
EventBusValue.MICROBIT_EVT_ANY
)
radio.setTransmitSerialNumber(true)
