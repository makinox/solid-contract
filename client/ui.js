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

  const infoSection = document.querySelector("#info");
  infoSection.className = `flex justify-evenly ${window.FluidContainer_styles()}`;

  const wallet = document.querySelector("#info article");
  wallet.className = `items-center justify-center ${window.Card_styles({
    css: {
      maxWidth: "600px",
    },
  })}`;

  const form = document.querySelector("#taskForm");
  form.className = `${window.Card_styles({
    css: {
      width: "600px",
      padding: "0 20px",
    },
  })}`;

  const submitButton = document.querySelector("#taskForm button");
  submitButton.className = `${window.ButtonContained()}`;

  const contracts = document.querySelectorAll("#list article");
  contracts.forEach((el) => {
    el.className = `${window.Card_styles()}`;
  });

  const contractsButton = document.querySelectorAll("#list article button");
  contractsButton.forEach((el) => {
    el.className = `${window.ButtonContained()}`;
  });
});
