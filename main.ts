input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    if (input.lightLevel() > 255) {
        basic.showString("KERESS MEG 3 QR KÓDOT")
        basic.showString("SOK SZERENCSÉT")
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showString("VILAGITS RA A MICROBITRE")
    if (input.lightLevel() != 1) {
        basic.showString("KERESS MEG ENGEM")
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Hello!")
    basic.showString("KEZDODIK A JATEK")
    basic.showString("NYOMD MEG A P2")
})
input.onGesture(Gesture.TiltLeft, function () {
    if (input.temperature() == 30) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
        basic.showString("NYERTÉL")
    }
})
music.setVolume(16)
music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.ForeverInBackground)
basic.showString("A+B")
