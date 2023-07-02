// Retrieve tasks from local storage or use default tasks
let arr = JSON.parse(localStorage.getItem("tasks")) || ["bathing", "sleeping"];

// Function to update the display with tasks
const updateDisplay = () => {
  let ull = document.getElementById("ull");
  ull.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {

    let li = document.createElement("li");
    li.textContent = arr[i]  ;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.classList.add("delete-button");
    
    deleteButton.addEventListener("click", () => {
         deleteTask(i);
    });

    li.appendChild(deleteButton);
    ull.appendChild(li);
  }
};

// Function to add a new task
const addTask = () => {
  let input = document.getElementById("input");
  let text = input.value.trim();

  if (text !== "") {
    arr.push(text);
    localStorage.setItem("tasks", JSON.stringify(arr));
    input.value = "";
    updateDisplay();
  }
};

// Function to delete a task
const deleteTask = (index) => {
  arr.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(arr));
  updateDisplay();
};

// Event listener for adding a task
let addButton = document.getElementById("mybtn");
addButton.addEventListener("click", addTask);

// Event listener for deleting a task
let deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", () => {
  deleteTask(arr.length - 1);
});

// Initial display update
updateDisplay();
