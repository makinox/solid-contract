App = {
  web3Provider: undefined,
  web3: undefined,

  init: () => {
    console.log("init");
    App.loadEthereum();
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
};

App.init();
