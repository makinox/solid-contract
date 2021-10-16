App = {
  web3Provider: undefined,

  init: () => {
    console.log("init");
    App.loadEthereum();
  },

  loadEthereum: () => {
    if (window.ethereum) {
      console.log("ethereum exist");
      App.web3Provider = window.ethereum;
    } else {
      console.log("Please install a ethereum wallet in your browser");
    }
  },
};

App.init();
