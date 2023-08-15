const random = (count) => {
  const numbers = [];
  for (let i = 0; i < count; i++) {
    const number = Math.floor(Math.random() * 100);
    numbers.push(number);
  }
  return numbers
}

export default random;
