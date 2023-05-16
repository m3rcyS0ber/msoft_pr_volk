function toRoman(n) {
    let arr = {
        "M":    1000,
        "CM":   900,
        "D":    500,
        "CD":   400,
        "C":    100,
        "XC":   90,
        "L":    50,
        "XL":   40,
        "X":    10,
        "IX":   9,
        "V":    5,
        "IV":   4,
        "I":    1
    }
    let res = ''
    for ( let i in arr ) {
        while ( n >= arr[i] ) {
            res += i;
            n -= arr[i];
        }
    }
    return res;
}
function fromRoman(str){
    str = str.toUpperCase();
    let arr = {
        "CM":   900,
        "M":    1000,
        "CD":   400,
        "D":    500,
        "XC":   90,
        "C":    100,
        "XL":   40,
        "L":    50,
        "IX":   9,
        "X":    10,
        "IV":   4,
        "V":    5,
        "I":    1
    }
    let romank = Object.keys(arr);
    let romanv = Object.values(arr);
    let res = 0;
    let temp = 0;
    for(let r in romank){
        temp = str.indexOf(romank[r]);
        while(temp != -1){
            res += romanv[r];
            str = str.replace(romank[r],"-");
            temp = str.indexOf(romank[r]);
        }
    }
    return res;
}
console.log(toRoman(2491));
console.log(fromRoman("MMCDXCI"));