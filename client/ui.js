const taskForm = document.querySelector("#taskForm");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log({
    title: taskForm["taskForm-title"].value,
    description: taskForm["taskForm-description"].value,
  });
});
