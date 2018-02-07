const web3 = require("./modules/web3Connection").testnet();


const abi2GT = require("./abi/2GT.json");
const abiICO = require("./abi/ICO.json");
const abiEUR = require("./abi/EUR.json");
const abiFactory = require("./abi/factory.json");


//"pony aim olive task wealth tip run review trust equal foster addict"

//const token = new web3.eth.Contract(abi2GT, "0x5c38f8af8c97d31fa7d700e3f69659774f6790fc")
const token = new web3.eth.Contract(abi2GT, "0xdb1146fa6b125b9ca5528adff843eb18cd2f55b0")

const ico = new web3.eth.Contract(abiICO, "0xd8298240cbf9cccffec6d3290d717b28dd7b380e")

const eur =  new web3.eth.Contract(abiEUR, "0x38da57742a216a18b2c7eadbb9e2a973bd911355")

const factory =  new web3.eth.Contract(abiFactory, "0xf8a7f2055d87e7d87bd39ce79bff44bdb7c119d9")
// token.methods.mint("0xecb91251949cbc1de7b44e0aecc6b3d6bae35232", 2000000000000000000).send({from:"0x8f77d49909f084c902627752ee6c51c49c28dfae",gas: 2000000, gasPrice: 20000000000})
//   .on('receipt', receipt=>{
//     console.log(receipt)
//   })
//   .on('error', console.log)


//   token.methods.finishMinting().send({
//     from:"0x8f77d49909f084c902627752ee6c51c49c28dfae",
//     gas: 200000, 
//     gasPrice: web3.utils.toWei("20", "gwei")
//   })
//   .on('transactionHash', hash=>{
//     web3.eth.getTransaction(hash).then(console.log)
//   })
//   .on('receipt', receipt=>{
//     console.log(receipt)
//   })
//   .on('error', console.log)

// token.methods.testVal().call((err, result)=>{
//   console.log('result: ', result);
//   console.log('err: ', err);
//  })

// web3.eth.getTransaction("0x8165026ce781054a951ba7226eed2c9347208a875b98cab1c08458a5c9694871", function(error, result) {
//   console.log('transaction: ', result);
  
// });

// web3.eth.getTransactionReceipt("0x8165026ce781054a951ba7226eed2c9347208a875b98cab1c08458a5c9694871", function(error, result) {
//   console.log('receipt: ', result);
  
// });

//web3.eth.getCoinbase().then(console.log)

eur.getPastEvents("allEvents", {fromBlock: 0})
  .then(events=>{
    console.log(events)
  })
 
//console.log(web3.utils.isAddress("0x8f77d49909f084c902627752ee6c51c49c28dfae"))

eur.methods.totalSupply().call().then(console.log)
//eur.methods.balanceOf("0x23d97416bB635EA54130e61190311C53B21C4110").call().then(console.log)

// web3.eth.getAccounts(function (error, accounts) {
//   factory.methods.createTokenContract("SOMETOKEN", "STK", "Me", 18).send({from: accounts[0], gas:4000000}).then(console.log)  
// });
//factory.methods.getTokenCount().call().then(console.log)
// web3.eth.getTransactionReceipt("0x908916581f11869f63c572fa036c9654e944c1b5ed0f1548cf459622f49a8b01", function(error, result) {
//   console.log(result)
// });
//factory.getPastEvents('allEvents').then(events=>{
//  console.log(events)
  // events.map(event=>{
  //   console.log(event.returnValues)
  // })
//})


// let newToken = new web3.eth.Contract(abiEUR, "0x6f4c0336BD7E78015c2b14292A36d12eBC0076fA")
// web3.eth.getAccounts(function (error, accounts) {
//   newToken.methods.addSupply(10000, "0xecb91251949cbc1de7b44e0aecc6b3d6bae35232").send({from: accounts[0], gas:4000000}).then(()=>{
//     newToken.methods.balanceOf("0xecb91251949cbc1de7b44e0aecc6b3d6bae35232").call().then(console.log)  
//   })
// })
//factory.methods.tokens().call().then(console.log)

//eur.methods.addSupply(100,"0xb9c6d251ccc54d2c1a4142a4466ce3b203f02edb").send({from:"0x7b27306862374646cf507057be07637a8d9f0e14", gas:40000}).then(console.log)

// web3.eth.getAccounts(function (error, result) {
//   console.log(result)
// });

// web3.eth.getBalance("0x7b27306862374646cF507057Be07637A8D9F0E14",  function(error, result) {
//   console.log('result: ', result);
  
// });

// eur.getPastEvents("allEvents").then(res=>{
//   console.log(res)
// })