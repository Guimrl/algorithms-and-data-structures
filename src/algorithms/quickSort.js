const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  const pivotIndex = Math.floor(array.length / 2);
  const pivot = array[pivotIndex];
  const left = [];
  const right = [];

  for (let i = 0; i < array.length; i++) {
    console.log(`posicao ${i}`)
    if (i === pivotIndex) {
      console.log(`${i} é igual a ${pivotIndex}`)
      continue;
    }

    if (array[i] < pivot) {
      console.log(`array[i] igual a ${array[i]}`)
      console.log(`pivot igual a ${pivot}`)
      left.push(array[i]);
      console.log(`left igual a ${left}`)
    } else {
      right.push(array[i]);
      console.log(`right igual a ${right}`)
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

export default quickSort;
