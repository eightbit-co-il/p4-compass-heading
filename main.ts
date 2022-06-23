let כיוון = 0
basic.forever(function () {
    כיוון = Math.map(input.compassHeading(), 0, 359, 0, 16)
    if (כיוון < 1) {
        basic.showArrow(ArrowNames.North)
    } else if (כיוון < 3) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (כיוון < 5) {
        basic.showArrow(ArrowNames.East)
    } else if (כיוון < 7) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (כיוון < 9) {
        basic.showArrow(ArrowNames.South)
    } else if (כיוון < 11) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (כיוון < 13) {
        basic.showArrow(ArrowNames.West)
    } else if (כיוון < 15) {
        basic.showArrow(ArrowNames.NorthWest)
    } else {
        basic.showArrow(ArrowNames.North)
    }
})
