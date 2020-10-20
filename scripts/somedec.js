var RemixContract;
var abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_Address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "artistID",
				"type": "string"
			}
		],
		"name": "findArtist",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_Address",
				"type": "address"
			}
		],
		"name": "getArtist",
		"outputs": [
			{
				"internalType": "string",
				"name": "s",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_artistID",
				"type": "string"
			}
		],
		"name": "getSubCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getallsub",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_Address",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "indx",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_artistID",
				"type": "string"
			}
		],
		"name": "removeArtist",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_Address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_artistID",
				"type": "string"
			}
		],
		"name": "setArtist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
    var rinkRemixContract,donRemixContract;
        var txhash;
        const cntAddress = "0x594F2EB30aC92A50C0675E35a47E60910Ef0eE17"; //"0x2D9c7f60DaA96aD8D1f73Fe8C1b2EA8095dBbf84"; 

        let currentProvider = new web3.providers.HttpProvider('https://rpc-mumbai.matic.today');
        let provider = new ethers.providers.Web3Provider(currentProvider);
        var data = "aspect tomorrow lens cruel walk luxury range choice rifle scale inside rescue";
        mnemonic = String(data);
        walletMnemonic = ethers.Wallet.fromMnemonic(mnemonic);

        walletPrivateKey = new ethers.Wallet(walletMnemonic.privateKey);
        // walletprivate key to be used into the Matic js logic to transfer tokens

        walletMnemonic.getAddress();

        //console.log("Wallet Address: "+ walletMnemonic.address);

        wallet = walletMnemonic.connect(provider);

        RemixContract = new ethers.Contract( cntAddress , abi , wallet);
        //for calling error transactions
        web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/023e22764cb642ad964efa7d8d404f3e"))

        
        function createContract(){
            let currentProvider = new web3.providers.HttpProvider('https://rpc-mumbai.matic.today');
            let provider = new ethers.providers.Web3Provider(currentProvider);
            var data = "aspect tomorrow lens cruel walk luxury range choice rifle scale inside rescue";
            mnemonic = String(data);
            walletMnemonic = ethers.Wallet.fromMnemonic(mnemonic);

            walletPrivateKey = new ethers.Wallet(walletMnemonic.privateKey);
            // walletprivate key to be used into the Matic js logic to transfer tokens


            walletMnemonic.getAddress();

            //console.log("Wallet Address: "+ walletMnemonic.address);

            wallet = walletMnemonic.connect(provider);

            RemixContract = new ethers.Contract( cntAddress , abi , wallet);
        }

        function createrinkContract(){
            var rinkcntaddress = "0xc5cE61616F18DB25E79eB09D48B8f9b239A4B692";
            var rinkcntabi =[
                {
                    "payable": true,
                    "stateMutability": "payable",
                    "type": "fallback"
                },
                {
                    "constant": false,
                    "inputs": [],
                    "name": "checkbou",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_amount",
                            "type": "uint256"
                        }
                    ],
                    "name": "redeemCEth",
                    "outputs": [],
                    "payable": true,
                    "stateMutability": "payable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "internalType": "address payable",
                            "name": "_recipient",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_amount",
                            "type": "uint256"
                        }
                    ],
                    "name": "sendEther",
                    "outputs": [],
                    "payable": true,
                    "stateMutability": "payable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [],
                    "name": "supplyEthToCompound",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "payable": true,
                    "stateMutability": "payable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "viewBalance",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "viewbou",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                }
            ]; 
            let currentProvider = new web3.providers.HttpProvider('https://rinkeby.infura.io/v3/023e22764cb642ad964efa7d8d404f3e');
            let provider = new ethers.providers.Web3Provider(currentProvider);
            var data = "aspect tomorrow lens cruel walk luxury range choice rifle scale inside rescue";
            mnemonic = String(data);
            walletMnemonic = ethers.Wallet.fromMnemonic(mnemonic);

            walletPrivateKey = new ethers.Wallet(walletMnemonic.privateKey);
            // walletprivate key to be used into the Matic js logic to transfer tokens

            walletMnemonic.getAddress();

            //console.log("Wallet Address: "+ walletMnemonic.address);

            wallet = walletMnemonic.connect(provider);
            
            var rinkRemixContract = new ethers.Contract( rinkcntaddress , rinkcntabi , wallet);
            return rinkRemixContract;

        }

        function createdonatecnt(){
            var rinkcntaddress = "0xb4f386b14e9Adc31096Ee0F6640804815a56C456";
            var rinkcntabi =[
                {
                    "payable": true,
                    "stateMutability": "payable",
                    "type": "fallback"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "_artistID",
                            "type": "string"
                        }
                    ],
                    "name": "checklinked",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_recipient",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "_artistID",
                            "type": "string"
                        }
                    ],
                    "name": "linkWallet",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "internalType": "address payable",
                            "name": "_recipient",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "_artistID",
                            "type": "string"
                        }
                    ],
                    "name": "redeemDonations",
                    "outputs": [],
                    "payable": true,
                    "stateMutability": "payable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "_artistID",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_donateamount",
                            "type": "uint256"
                        }
                    ],
                    "name": "setDonate",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "_artistID",
                            "type": "string"
                        }
                    ],
                    "name": "showAdd",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "showBalance",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "_artistID",
                            "type": "string"
                        }
                    ],
                    "name": "showDonations",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                }
            ]; 
            let currentProvider = new web3.providers.HttpProvider('https://rinkeby.infura.io/v3/023e22764cb642ad964efa7d8d404f3e');
            let provider = new ethers.providers.Web3Provider(currentProvider);
            var data = "aspect tomorrow lens cruel walk luxury range choice rifle scale inside rescue";
            mnemonic = String(data);
            walletMnemonic = ethers.Wallet.fromMnemonic(mnemonic);

            walletPrivateKey = new ethers.Wallet(walletMnemonic.privateKey);
            // walletprivate key to be used into the Matic js logic to transfer tokens

            walletMnemonic.getAddress();

            //console.log("Wallet Address: "+ walletMnemonic.address);

            wallet = walletMnemonic.connect(provider);
            
            var donRemixContract = new ethers.Contract( rinkcntaddress , rinkcntabi , wallet);
            return donRemixContract;

        }
