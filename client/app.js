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
      const counter = await taskRef.taskCounter();
      let finalHtml = "";

      [...Array(counter.toNumber()).keys()].map(async (elem) => {
        const taskResponse = await taskRef.task(elem);
        const taskObject = {
          id: taskResponse[0],
          title: taskResponse[1],
          description: taskResponse[2],
          done: taskResponse[3],
          createdAt: taskResponse[4],
        };
        let taskElement = `
          <article>
            <span>${taskObject.id}</span>
            <span>${taskObject.title}</span>
            <span>${taskObject.description}</span>
            <span>${taskObject.done}</span>
          </article>
        `;
        finalHtml += taskElement;
        document.querySelector("#list").appendChild(taskElement);
      });
    }
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
    console.log({ result: result.logs[0].args });
  },
};

App.init();
