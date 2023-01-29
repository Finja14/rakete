basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            # . # . #
            `)
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            # . # . #
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            # . # . #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . # . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        if (true) {
        	
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
})
