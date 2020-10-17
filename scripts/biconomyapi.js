function supplyeth(useraddr){
    var jsonres;
    var jdata = { 'userAddress' : ''+useraddr ,'apiId': '5d1dbd3a-4069-4b51-8fc0-3502038ee7dd','params': [],'gasLimit':'0x6DDD0'};
    $.ajax({
        type: "POST",
        url: "https://api.biconomy.io/api/v2/meta-tx/native",
        headers: {"x-api-key" : "w7drmz352.e3ebfd00-e924-4641-8fbd-bcb414e5970c"},
        data: JSON.stringify(jdata),
        contentType: 'application/json',
        async: false,
        success: function (res) {
            alert(JSON.stringify(res));
           // var res = JSON.parse(res);
            console.log(res);
            jsonres=res.txHash;
        },
        error: function (err){
            console.log("Error Occured ");
        },
  });
  return jsonres;
}

/*function verifytxn(txhash){
    var gjson = getJSON("https://api-rinkeby.etherscan.io/api?module=transaction&action=getstatus&txhash="+txhash+"&apikey=JDRCFSFRBEEJNJ1UR2QUYUMVMUF6AC9UK8");
    gjson = JSON.parse(gjson);

}*/

function redeemeth(useraddr,amount){
    //amount = 995832105 for 0.25eth
    var jsonres;
    var jdata =  { 'userAddress' : ''+useraddr ,'apiId': '27453ce1-71a3-42ac-9d54-d8eae758f40c','params': [amount],'gasLimit':'0x6DDD0'};
    $.ajax({
        type: "POST",
        url: "https://api.biconomy.io/api/v2/meta-tx/native",
        headers: {"x-api-key" : "w7drmz352.e3ebfd00-e924-4641-8fbd-bcb414e5970c"},
        data:  JSON.stringify(jdata),
        contentType: 'application/json',
        async: false,
        success: function (res) {
            alert(JSON.stringify(res));
           // var res = JSON.parse(res);
        console.log(res);
            jsonres=res.txHash;
        },
        error: function (err){
            console.log("Error Occured ");
        },
  });
  return jsonres;
}

function checkBou(useraddr){
    var jsonres;
    var jdata = { 'userAddress' :''+useraddr ,'apiId': 'f0f1b6e2-36c9-4564-9715-398905ae277a','params': [],'gasLimit':'0x6DDD0'};
    $.ajax({
        type: "POST",
        url: "https://api.biconomy.io/api/v2/meta-tx/native",
        headers: {"x-api-key" : "w7drmz352.e3ebfd00-e924-4641-8fbd-bcb414e5970c"},
        data: JSON.stringify(jdata),
        contentType: 'application/json',
        dataType: 'JSON',
        async: false,
        success: function (res) {
            alert(JSON.stringify(res));
            //var res = JSON.parse(res);
            console.log(res);
            jsonres=res.result;
        },
        error: function (err){
            console.log("Error Occured ");
        },
  });
  return jsonres;
}
function viewbalance(useraddr){
    var jsonres;
    var jdata = { 'userAddress' :''+useraddr ,'apiId': '20b5337e-907a-4643-8a95-7a0b5f3adf0d','params': [],'gasLimit':'0x55730'};
    $.ajax({
        type: "POST",
        url: "https://api.biconomy.io/api/v1/meta-tx/getData",
        headers: {"x-api-key" : "w7drmz352.e3ebfd00-e924-4641-8fbd-bcb414e5970c"},
        data: JSON.stringify(jdata),
        contentType: 'application/json',
        dataType: 'JSON',
        async: false,
        success: function (res) {
            alert(JSON.stringify(res));
            //var res = JSON.parse(res);
            console.log(res);
            jsonres=res.result;
        },
        error: function (err){
            console.log("Error Occured ");
        },
  });
  return jsonres;
}
function viewBou(useraddr){
    var jsonres;
    var jdata = { 'userAddress' :''+useraddr ,'apiId': 'cefb20fe-a458-40bd-b31d-1d7e68ff0ab9','params': [],'gasLimit':'0x55730'};
    $.ajax({
        type: "POST",
        url: "https://api.biconomy.io/api/v1/meta-tx/getData",
        headers: {"x-api-key" : "w7drmz352.e3ebfd00-e924-4641-8fbd-bcb414e5970c"},
        data: JSON.stringify(jdata),
        contentType: 'application/json',
        dataType: 'JSON',
        async: false,
        success: function (res) {
            alert(JSON.stringify(res));
            //var res = JSON.parse(res);
            console.log(res);
            jsonres=res.result;
        },
        error: function (err){
            console.log("Error Occured ");
        },
  });
  return jsonres;
}

function sendEther(useraddr,amount){
    var jsonres;
    var jdata =  { 'userAddress' :''+useraddr,'apiId': '2d22222b-519d-4415-8972-a4166ad9832d','params': [useraddr,amount],'gasLimit':'0x6DDD0'};
    $.ajax({
        type: "POST",
        url: "https://api.biconomy.io/api/v2/meta-tx/native",
        headers: {"x-api-key" : "w7drmz352.e3ebfd00-e924-4641-8fbd-bcb414e5970c"},
        data:JSON.stringify(jdata),
        contentType: 'application/json',
        async: false,
        success: function (res) {
            alert(JSON.stringify(res));
            //var res = JSON.parse(res);
            console.log(res);
            jsonres=res.txHash;
        },
        error: function (err){
            console.log("Error Occured ");

        },
  });
  return jsonres;
}

/*curl --request POST 
'https://api.biconomy.io/api/v2/meta-tx/native'  
--header 'x-api-key: w7drmz352.e3ebfd00-e924-4641-8fbd-bcb414e5970c'  
--header 'Content-Type: application/json' 
--data-raw '{ 
    "userAddress": "0x93ba13F5958cEf4A4beB2f40E9282012125B329c",
"apiId": "7d70c70c-a084-4467-a932-5b4e833f8238",
"params": [],
"gasLimit":"0x55730" }'*/