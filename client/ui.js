const taskForm = document.querySelector("#taskForm");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = taskForm["taskForm-title"].value;
  const description = taskForm["taskForm-description"].value;

  App.createTask(title, description);
});
