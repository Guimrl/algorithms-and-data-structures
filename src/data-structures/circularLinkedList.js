const DaysOfWeek = {
  MONDAY: "Segunda-feira",
  TUESDAY: "Terça-feira",
  WEDNESDAY: "Quarta-feira",
  THURSDAY: "Quinta-feira",
  FRIDAY: "Sexta-feira",
  SATURDAY: "Sábado",
  SUNDAY: "Domingo"
};

const createNode = (day) => {
  return {
    day: day,
    next: null
  };
}

export const weekList = (num) => {
  const daysOfWeek = Object.values(DaysOfWeek)

  const list = {
    head: null,
    tail: null
  };

  if (num <= 0) {
    console.log("O número de dias deve ser maior que zero");
    return null
  }

  for(let i = 0; i < num; i++) {
    const day = daysOfWeek[i % daysOfWeek.length];
    add(list, day)
  }

  return list;
}

const add = (list, day) => {
  const newNode = createNode(day);

  if (!list.head) {
    list.head = newNode;
    list.tail = newNode;
    newNode.next = list.head;
  } else {
    list.tail.next = newNode;
    list.tail = newNode;
    newNode.next = list.head
  }
}

export const display = (list) => {
  list.head ?? console.log("A lista está vazia");

  let current = list.head;
  
  do {
    console.log(current.day);
    current = current.next;
  } while (current !== list.head)
}
