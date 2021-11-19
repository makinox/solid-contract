window.addEventListener("DOMContentLoaded", (event) => {
  const taskForm = document.querySelector("#taskForm");

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = taskForm["taskForm-title"].value;
    const description = taskForm["taskForm-description"].value;

    App.createTask(title, description);
  });

  // Apliying styles
  const navbar = document.querySelector("nav");
  navbar.className = window.TopBar_styles({});

  const section = document.querySelector("nav section");
  section.className = `flex items-center justify-between ${window.FluidContainer_styles()}`;
});
