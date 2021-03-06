App = {
  web3Provider: undefined,
  contracts: {},
  web3: undefined,
  activeAccount: "",

  init: () => {
    console.log("init");
    App.loadEthereum();
    App.loadContracts();
    App.renderTask();
  },

  loadEthereum: async () => {
    if (window.ethereum) {
      console.log("ethereum exist");
      App.web3Provider = window.ethereum;
      const account = await App.web3Provider.request({
        method: "eth_requestAccounts",
      });
      App.activeAccount = account[0];
      App.render();
      App.renderTask();
    } else if (window.web3) {
      web3 = new Web3(window.web3.currentProvider);
    } else {
      console.log("Please install a ethereum wallet in your browser");
    }
  },

  render: async () => {
    document.getElementById("address").innerHTML = App.activeAccount;
  },

  renderTask: async () => {
    const taskRef = await App.taskc;
    if (taskRef) {
      console.log({ task: await taskRef });
      const counter = 1;
      let finalHtml = "";

      for (let i = 0; i <= counter; i++) {
        const taskResponse = await taskRef.task(i);
        const taskObject = {
          id: taskResponse[0],
          title: taskResponse[1],
          description: taskResponse[2],
          done: taskResponse[3],
          createdAt: taskResponse[4],
        };
        let taskElement = `
          <article>
          <div class="card-header">
            <span>${taskObject.title}</span>
            <span>${taskObject.id}</span>
          </div>
          <div class="card-body flex flex-col">
            <span>${taskObject.description}</span>
            <span>created at: ${2020202}</span>
            <span>done: ${taskObject.done}</span>
            <button onclick="App.toogleDone(${
              taskObject.id
            })">toggleDone</button>
          </div>
        </article>
        `;
        finalHtml += taskElement;
      }

      document.querySelector("#list").innerHTML = finalHtml;
    }
  },

  toogleDone: async (id) => {
    console.log({ id });
    const taskRef = await App.taskc;
    if (taskRef) {
      await taskRef.toggleDone(parseInt(id, 10), {
        from: App.activeAccount,
      });
    }
    App.renderTask();
  },

  loadContracts: async () => {
    const response = await fetch("TaskContract.json");
    const data = await response.json();
    App.contracts.taskContract = TruffleContract(data);
    App.contracts.taskContract.setProvider(App.web3Provider);
    App.taskc = App.contracts.taskContract.deployed();
  },

  createTask: async (title, description) => {
    const taskRef = await App.taskc;
    const result = await taskRef.createTask(title, description, {
      from: App.activeAccount,
    });
    App.renderTask();
  },
};

App.init();
