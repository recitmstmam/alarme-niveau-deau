basic.forever(function () {
    if (Environment.ReadWaterLevel(AnalogPin.P2) > 10) {
        music.ringTone(262)
    } else {
        music.stopAllSounds()
    }
})
