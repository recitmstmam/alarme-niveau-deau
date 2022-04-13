basic.forever(function () {
    basic.showString("" + (Environment.ReadSoilHumidity(AnalogPin.P1)))
    while (Environment.ReadSoilHumidity(AnalogPin.P1) > 20) {
        music.setVolume(255)
        music.ringTone(262)
        basic.pause(200)
        music.stopAllSounds()
        basic.pause(200)
    }
    music.stopAllSounds()
})
