import bubbleSort from "./algorithms/bubbleSort.js";
import quickSort from "./algorithms/quickSort.js";
import random from "./utils/random.js";
import selectionSort from "./algorithms/selectionSort.js";
import { weekList, display } from "./data-structures/circularLinkedList.js"
import queue from "./data-structures/queue.js";

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
// const arr2 = random(8)
// console.log(arr2)
// const selection = selectionSort(arr2)
// console.log(selection)









//------- circularLinkedList -------//
// const numOfDays = 18;
// const circularLinkedList = weekList(numOfDays)
// console.log(`Lista dos próximos ${numOfDays} dias: `)
// display(circularLinkedList)


//------- queue -------//
// const myQueue = queue(4);
// const sorted = random(5);
// console.log(sorted)

// for (const number of sorted) {
//   console.log("add: ", number)
//   myQueue.enqueue(number);
// }
// for (let i = myQueue.size(); myQueue.size() > 0; i ++) {
//   console.log("first",myQueue.peek());
//   console.log("size", myQueue.size());
//   console.log("dequeue");
//   myQueue.dequeue();
//   myQueue.display()
// }

console.log(random(5).limit(10))
