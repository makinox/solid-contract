App = {
  web3Provider: undefined,
  contracts: {},
  web3: undefined,

  init: () => {
    console.log("init");
    App.loadEthereum();
    App.loadContracts();
  },

  loadEthereum: async () => {
    if (window.ethereum) {
      console.log("ethereum exist");
      App.web3Provider = window.ethereum;
      await App.web3Provider.request({ method: "eth_requestAccounts" });
    } else if (window.web3) {
      web3 = new Web3(window.web3.currentProvider);
    } else {
      console.log("Please install a ethereum wallet in your browser");
    }
  },

  loadContracts: async () => {
    const response = await fetch("TaskContract.json");
    const data = await response.json();
    App.contracts.taskContract = TruffleContract(data);
    App.contracts.taskContract.setProvider(App.web3Provider);
    App.taskc = App.contracts.taskContract.deployed();
  },
};

App.init();
