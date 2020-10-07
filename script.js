let arrayOfTodos = [
  {
    userId: 14,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 20,
    id: 2,
    title: "delectus aut autem",
    completed: false,
  },
];

let x = 20;
let node;
let button;

let complete = document.querySelectorAll(".todo-button");

const fetchTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => (arrayOfTodos = json));
};

const logTodos = () => {
  console.log(arrayOfTodos);
};

const populateTodos = () => {
  let buttons = [];
  for (let i = 0; i < x; i++) {
    node = document.createElement("li");
    document.getElementById("todo-list").appendChild(node);
    node.classList.add(i);
    button = document.createElement("button");
    button.classList.add("todo-button");
    let textnode = document.createTextNode(arrayOfTodos[i].title);
    node.appendChild(textnode);
    buttons.push(button);
    console.log(buttons);
    console.log(buttons[i]);
    buttons[i].onclick = () => {
      console.log(node);
      node.classList.add("incomplete");
      node.classList.remove("completed");
    };

    if (arrayOfTodos[i].completed == false) {
      node.classList.add("incomplete");

      node.appendChild(button);
    } else {
      node.classList.add("completed");
    }
  }

  x + 20;
};
