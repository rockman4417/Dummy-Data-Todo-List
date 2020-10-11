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

const list = document.getElementById("todo-list");
let node;
let button;
let x = 20;
let selectedId;
let filteredTodos = [];
let complete = document.querySelectorAll(".todo-button");
let buttons = [];
let textnode;
let completedList = [];
let incompletedList = [];
let copiedArray = [];

const fetchTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => (arrayOfTodos = json));
};

const logTodos = () => {
  console.log(arrayOfTodos);
};

const populateTodos = () => {
  for (let i = 0 + x - 20; i < x; i++) {
    node = document.createElement("li");
    list.appendChild(node);
    node.classList.add(i);
    button = document.createElement("button");
    button.innerHTML = "done";
    button.classList.add("todo-button");
    textnode = document.createTextNode(arrayOfTodos[i].title);
    node.appendChild(textnode);
    buttons.push(button);
    buttons[i].onclick = () => {
      console.log(buttons[i].parentElement);
      buttons[i].parentElement.classList.add("completed");
      buttons[i].parentElement.classList.remove("incomplete");
      buttons[i].classList.add("hide");
      completedList.push(incompletedList[i]);
      incompletedList = incompletedList.filter(
        (array) => array != incompletedList[i]
      );
    };

    if (arrayOfTodos[i].completed == false) {
      node.classList.add("incomplete");

      node.appendChild(button);
    } else {
      node.classList.add("completed");
    }
  }

  x += 20;
};

const filterTodos = () => {
  buttons = [];
  list.innerHTML = "";
  selectedId = document.getElementById("myInput").value;

  filteredTodos = arrayOfTodos.filter((array) => array.userId == selectedId);
  completedList = filteredTodos.filter((array) => array.completed);
  incompletedList = filteredTodos.filter((array) => array.completed == false);
  // console.log(filteredTodos);
  // console.log(completedList);
  // console.log(incompletedList);

  for (let i = 0; i < filteredTodos.length; i++) {
    node = document.createElement("li");
    list.appendChild(node);
    node.classList.add(i);
    button = document.createElement("button");
    button.innerHTML = "done";
    button.classList.add("todo-button");
    textnode = document.createTextNode(filteredTodos[i].title);
    node.appendChild(textnode);
    buttons.push(button);
    buttons[i].onclick = () => {
      buttons[i].parentElement.classList.add("completed");
      buttons[i].parentElement.classList.remove("incomplete");
      buttons[i].classList.add("hide");
      completedList.push(incompletedList[i]);
      incompletedList = incompletedList.filter(
        (array) => array != incompletedList[i]
      );
    };

    if (arrayOfTodos[i].completed == false) {
      node.classList.add("incomplete");

      node.appendChild(button);
    } else {
      node.classList.add("completed");
    }
  }
};

const showComplete = () => {
  buttons = [];
  list.innerHTML = "";

  for (let i = 0; i < completedList.length - 1; i++) {
    node = document.createElement("li");
    list.appendChild(node);
    node.classList.add(i);

    textnode = document.createTextNode(completedList[i].title);
    node.appendChild(textnode);

    node.classList.add("completed");
  }
};

const showIncomplete = () => {
  buttons = [];
  list.innerHTML = "";

  for (let i = 0; i < incompletedList.length; i++) {
    node = document.createElement("li");
    list.appendChild(node);
    node.classList.add(i);
    button = document.createElement("button");
    button.innerHTML = "done";
    button.classList.add("todo-button");

    textnode = document.createTextNode(incompletedList[i].title);
    node.appendChild(textnode);
    buttons.push(button);
    buttons[i].onclick = () => {
      buttons[i].parentElement.classList.add("completed");
      buttons[i].parentElement.classList.remove("incomplete");
      buttons[i].classList.add("hide");
      console.log(i);
      completedList.push(incompletedList[i]);

      incompletedList = incompletedList.filter(
        (listItem) => listItem !== incompletedList[i]
      );
    };

    node.classList.add("incomplete");

    node.appendChild(button);
  }
};
