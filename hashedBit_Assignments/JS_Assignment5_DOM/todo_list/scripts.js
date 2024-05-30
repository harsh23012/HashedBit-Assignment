document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("add-btn");
  const todoInput = document.getElementById("todo-input");
  const detailsInput = document.getElementById("details-input");
  const todoList = document.getElementById("todo-list");

  addBtn.addEventListener("click", addTodo);
  todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  });
  detailsInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  });

  function addTodo() {
    const todoText = todoInput.value.trim();
    const detailsText = detailsInput.value.trim();
    if (todoText !== "") {
      const li = document.createElement("li");
      const todoSpan = document.createElement("span");
      const detailsSpan = document.createElement("span");

      todoSpan.textContent = todoText;
      detailsSpan.textContent = detailsText;
      detailsSpan.style.display = "block";

      li.appendChild(todoSpan);
      li.appendChild(detailsSpan);

      li.addEventListener("click", () => {
        li.classList.toggle("completed");
      });

      todoList.appendChild(li);
      todoInput.value = "";
      detailsInput.value = "";
    }
  }
});
