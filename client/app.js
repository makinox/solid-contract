App = {
  web3Provider: undefined,
  contracts: {},
  web3: undefined,
  activeAccount: "",

  init: () => {
    console.log("init");
    App.loadEthereum();
    App.loadContracts();
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
    } else if (window.web3) {
      web3 = new Web3(window.web3.currentProvider);
    } else {
      console.log("Please install a ethereum wallet in your browser");
    }
  },

  render: async () => {
    document.getElementById("address").innerHTML = App.activeAccount;
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
