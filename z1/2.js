let a = [1, 4, 6];
let b = [11, 33, 22];

let bmap = b.map(function(x, i) {
    return { index: i, value: x };
})

bmap = bmap.sort((x, y) => x.value - y.value )

a = bmap.map(x => {
    return a[x.index]
})

console.log(a);

