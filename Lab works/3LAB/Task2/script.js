const todoForm = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const todoList = document.getElementById("todoList");

function createTodoItem(taskText) {
  // <li class="item">
  const li = document.createElement("li");
  li.className = "item";

  // left block
  const left = document.createElement("div");
  left.className = "item-left";

  // checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // text
  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = taskText;

  // delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.className = "delete-btn";
  deleteBtn.setAttribute("aria-label", "Delete task");
  deleteBtn.textContent = "🗑";

  // events
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      li.classList.add("done");
    } else {
      li.classList.remove("done");
    }
  });

  deleteBtn.addEventListener("click", () => {
    // removeChild requirement
    todoList.removeChild(li);
  });

  // build structure using appendChild requirement
  left.appendChild(checkbox);
  left.appendChild(span);

  li.appendChild(left);
  li.appendChild(deleteBtn);

  return li;
}

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = taskInput.value.trim();
  if (text.length === 0) return;

  const item = createTodoItem(text);
  todoList.appendChild(item);

  taskInput.value = "";
  taskInput.focus();
});
