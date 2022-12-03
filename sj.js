let str = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, quam recusandae. Ratione, nisi pariatur officia et porro, mollitia quae nemo odit ex rerum similique enim perspiciatis ea. Excepturi, perspiciatis minus!"
let arr = str.split("")
// const unli = [a, i, o, u, e]
// const undosh = [q, w, r, t, y, p, s, d, f, g, h, j, k, l, z, x, c, v, b, n, m]
// for (let i = 0; i < unli.length; i++) {
//     if (arr == unli)
//         box += unli[i]
//     else if (arr == undosh) count++

// }
// console.log("Unli hariflar: " + unli);
// console.log(count);
// let box = 0
let count = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "a" || arr[i] == "i" || arr[i] == "o" || arr[i] == "u" || arr[i] == "e") {
        count++
        console.log(arr[i]);
    }
}
console.log(count);