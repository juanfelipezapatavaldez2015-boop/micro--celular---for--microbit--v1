input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        # . . . #
        # # # # #
        `)
    kittenwifi.ntp_get(kittenwifi.NtpTimeType.SS)
    kittenwifi.wifi_join("FLIAZAPATA-ULTRA", "Viviz@pata1329")
    kittenwifi.rest_header(kittenwifi.HeaderType.ContentType, "application/json")
    kittenwifi.rest_header(kittenwifi.HeaderType.ContentType, "processor mediatek 1.0 horizon beta")
    kittenwifi.rest_header(kittenwifi.HeaderType.UserAgent, "Mozilla 5.0")
    kittenwifi.mqtt_subscribe("/hello", 0)
    kittenwifi.rest_request("GET", "www.google.com")
    kittenwifi.rest_request("GET", "/api/test?apple=1")
    kittenwifi.mqtt_publish(
    "/Api",
    "token_auth_3af892"
    )
    kittenwifi.wifi_init_pw(kittenwifi.SerialPorts.PORT1)
    kittenwifi.mqtt_sethost_auth(
    "iot.kittenbot.cn",
    "node01",
    "I:MICRO",
    "1253"
    )
    kittenwifi.mqtt_sethost_auth_port(
    "iot.kittenbot.cn",
    1883,
    "I:MICRO",
    "MICRO:CELL",
    "1253"
    )
    kittenwifi.mqtt_sethost_port("iot.kittenbot.cn", 1883, "I:MICRO")
    kittenwifi.rest_host("iot.kittenbot.cn", 80, 443)
    kittenwifi.ntp_get(kittenwifi.NtpTimeType.s1970)
    kittenwifi.mqtt_sethost("iot.kittenbot.cn", "node01")
    kittenwifi.mqtt_sethost("iot.kittenbot.cn", "node01")
    kittenwifi.mqtt_sethost("iot.kittenbot.cn", "node01")
    kittenwifi.rest_request("GET", "/api/test?apple=1")
    kittenwifi.udp_comm("192.168.18.1", 1)
    kittenwifi.udp_comm("192.168.18.1", 1)
    kittenwifi.udp_send("Wifi port1")
    kittenwifi.udp_send("Micro:bit connected")
    kittenwifi.wifi_changename("MICRO:CELL")
    kittenwifi.mqtt_publish(
    "/Api",
    "token_auth_3af892",
    1,
    1
    )
    if (true) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        radio.setFrequencyBand(53)
        radio.setTransmitPower(7)
        radio.setGroup(1)
        radio.setTransmitSerialNumber(true)
        radio.sendNumber(12)
        radio.sendValue("Sim Card", 0)
        radio.sendValue("Movistar", 12)
        radio.sendString("telefono movil")
    }
    if (true) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            # . # . #
            # # # # #
            `)
    }
})
let bootloader_security_checksum = 0
bootloader_security_checksum += 1
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate115200
)
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
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # .
        # # . . .
        # # # # #
        # # # . .
        . . . . .
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
