var txDefaultOrig =
{
  gasLimit: 3141592,
  gasPrice: 18000000000,
  ethereumNode: "https://mainnet.infura.io:443",
  alertNode: {
    url : "https://alerts.gnosis.pm",
    authCode: null,
    name: "Mainnet",
    managementPage: "https://alerts.gnosis.pm/api/alert/manage/?code={auth-code}",
    managementRoute: "api/alert/manage"
  },
  connectionChecker:{
    method : "OPTIONS",
    url : "https://www.google.com",
    checkInterval: 5000
  },
  wallet: "injected",
  defaultChainID: null,
  // Mainnet
  walletFactoryAddress: "0x12ff9a987c648c5608b2c2a76f58de74a3bf1987",
  //ledgerAPI: "http://localhost:" + ledgerPort,
  tokens: [
    {
      'address': '0x3597bfd533a99c9aa083587b074434e61eb0a258',
      'name': 'DENT',
      'symbol': 'DENT',
      'decimals': 8
    }
  ]
};

if (isElectron) {
  txDefaultOrig.wallet = "remotenode";
}

var txDefault = {
  ethereumNodes : [
    {
      url : "https://mainnet.infura.io:443",
      name: "Remote Mainnet"
    },
    {
      url : "https://ropsten.infura.io:443",
      name: "Remote Ropsten"
    },
    {
      url : "https://kovan.infura.io:443",
      name: "Remote Kovan"
    },
    {
      url : "http://localhost:8545",
      name: "Local node"
    }
  ],
  alertNodes: {
    'mainnet': {
      url: 'https://alerts.gnosis.pm',
      authCode: null,
      name: 'Mainnet',
      networkId: 1,
      managementPage: "https://alerts.gnosis.pm/api/alert/manage/?code={auth-code}"
    },
    'kovan': {
      url: 'https://testalerts.gnosis.pm',
      authCode: null,
      name: 'Kovan',
      networkId: 42,
      managementPage: "https://testalerts.gnosis.pm/api/alert/manage/?code={auth-code}"
    }
  },
  walletFactoryAddresses: {
    'mainnet': {
      name: 'Mainnet',
      address: txDefaultOrig.walletFactoryAddress
    },
    'ropsten': {
      name: 'Ropsten',
      address: '0x5cb85db3e237cac78cbb3fd63e84488cac5bd3dd'
    },
    'kovan': {
      name: 'Kovan',
      address: '0x6C4c60F01999408CfD872Fdcf739912509A15da5'
    },
    'privatenet': {
      name: 'Privatenet',
      address: '0xd79426bcee5b46fde413ededeb38364b3e666097'
    }
  }
};

/**
* Reload configuration
*/
function loadConfiguration () {
  var userConfig = JSON.parse(localStorage.getItem("userConfig"));
  Object.assign(txDefault, txDefaultOrig, userConfig);
}

loadConfiguration();
