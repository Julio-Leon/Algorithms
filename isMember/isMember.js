words = ["bing", "bang", "boom"];

const isMember = (arr, str) => {
    for (let i = 0; i < arr.length; i++) {
        let isInArray = true
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i].length !== str.length) {
                isInArray = false
            }
            if (str.charAt(j) === '*') {
                continue;
            }
            if (arr[i].charAt(j) !== str.charAt(j)) {
                isInArray = false
            }
        }
        if (isInArray) return true
    }
    return false
}

console.log(isMember(words, 'b*ngg'))