import bubbleSort from "./algorithms/bubbleSort.js";
import quickSort from "./algorithms/quickSort.js";
import random from "./utils/random.js";
import selectionSort from "./algorithms/selectionSort.js";

//------- bubbleSort -------//
// const arr = random(8)
// console.log(arr);
// bubbleSort(arr);
// console.log(arr)


// //------- quickSort -------//
// const arr2 = random(9)
// console.log(arr2)
// const quick = quickSort(arr2)
// console.log(quick)

//------- selectionSort -------//
const arr2 = random(8)
console.log(arr2)
const sel = selectionSort(arr2)
console.log(sel)