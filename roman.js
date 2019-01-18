// rewriting roman numbers in js


let roman = "X"   

let map = new Map()
map.set("I", 1)
map.set("V", 5)
map.set("X", 10)
map.set("L", 50)
map.set("C", 100)
map.set("D", 500)
map.set("M", 1000)

alert(roman + " = " + romanToDec(roman))

function romanToDec(roman) {
    let currentDigit = map.get(roman.charAt(0))

    if (roman.length == 1)
        return currentDigit

    let nextDigit = map.get(roman.charAt(1))

    if (currentDigit < nextDigit)
        currentDigit *= -1

    return currentDigit + romanToDec(roman.substring(1))
}