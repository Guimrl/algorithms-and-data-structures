const queue = (count) => {
  if (count <= 0) {
    return console.log("O número de elementos deve ser maior que zero");
  }

  const elements = [];

  const size = () => elements.length;
  
  const isEmpty = () => elements.length === 0;

  const enqueue = (item) => {
    if (elements.length < count) {
      elements.push(item);
    } else {
      console.log("A fila está cheia");
    }
  }

  const dequeue = () => {
    if (!isEmpty()) {
      return elements.shift();
    }
    return null;
  }

  const peek = () => {
    if (!isEmpty()) {
      return elements[0];
    }
    return null;
  }

  const display = () => {
    if (isEmpty()) {
      return console.log("A fila está vazia.");
    } else {
      return console.log(elements)
    }
  }

  return {
    enqueue,
    dequeue,
    size,
    peek,
    display
  };
}

export default queue;
