let a = ["bella","label","roller"];
let b = ["cool","lock","cook"];

function searchDoubles(arr) {
    for (let i = 0; i < arr.length ; i++) {
        arr[i] = arr[i].split('');
    }
    for(let i = 1; i < arr.length ; i++) {
        for(let x = 0; x < arr[0].length ; x++) {
            let tempword = arr[0][x];
            for(let z = 0; z < arr[i].length ; z++) {
                if(arr[i][z] === tempword) console.log(tempword);
            }
        }
    }
    return arr;
}

console.log(searchDoubles(a));