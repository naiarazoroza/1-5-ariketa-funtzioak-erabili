function ezkerrera_biratu () {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.NorthWest)
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.SouthWest)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.SouthEast)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.NorthEast)
    basic.showArrow(ArrowNames.North)
}
function eskuinera_biratu () {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.NorthEast)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.SouthEast)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.SouthWest)
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.NorthWest)
    basic.showArrow(ArrowNames.North)
}
basic.forever(function () {
    if (input.isGesture(Gesture.TiltRight)) {
        eskuinera_biratu()
    }
    if (input.isGesture(Gesture.TiltLeft)) {
        ezkerrera_biratu()
    }
})
