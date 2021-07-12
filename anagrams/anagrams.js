const areAnagrams = (stringA, stringB) => {

    const lowerStringA = stringA.toLowerCase()
    const lowerStringB = stringB.toLowerCase()

    let stringAValue = 0
    for (let i = 0; i < stringA.length; i++) {
        charVal = lowerStringA.codePointAt(i)
        if (charVal >= 97 && charVal <= 122) {
            stringAValue += charVal
        }
    }

    let stringBValue = 0
    for (let i = 0; i < stringB.length; i++) {
        charVal = lowerStringB.codePointAt(i)
        if (charVal >= 97 && charVal <= 122) {
            stringBValue += charVal
        }
    }
    return stringAValue === stringBValue ? true : false
}

// console.log(areAnagrams('rail safety', 'fairy tales'))
// console.log(areAnagrams('RAIL! SAFETY!', 'fairy tales'))
// console.log(areAnagrams('ac', 'bb'))