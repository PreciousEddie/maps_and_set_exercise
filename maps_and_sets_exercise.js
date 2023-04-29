//1. {1,2,3,4}
//2. "ref"
//3. {[1,2,3] => true},{[1,2,3] => false}

const hasDuplicate = arr => new Set(arr).size !== arr.length

function vowels(vowel) {
    return "aeiou".includes(vowel);
}

function vowelCount(str) {
    const newMap = new Map();
    for (let vowel of str) {
        let lowerCase = vowel.toLowerCase()
        if (vowel(lowerCase)) {
            if (newMap.has(lowerCase)) {
                newMap.set(lowerCase, newMap.get(lowerCase) + 1);
            } else {
                newMap.set(lowerCase, 1);
            }
        }
    }
    return newMap;
}