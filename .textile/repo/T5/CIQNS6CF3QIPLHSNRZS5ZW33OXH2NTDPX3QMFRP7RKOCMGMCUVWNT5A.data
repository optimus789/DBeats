function supplyeth(useraddr){
    var jsonres;
    var jdata = { 'userAddress' : ''+useraddr ,'apiId': 'd990063b-2cc8-493e-9f75-037222976af1','params': [],'gasLimit':'0x7A120'};
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
    var jdata =  { 'userAddress' : ''+useraddr ,'apiId': '3d1a2fdd-f681-41a6-86b9-0c2b34884d7b','params': [amount],'gasLimit':'0x7A120'};
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

function checkbalance(useraddr){
    var jsonres;
    var jdata = { 'userAddress' :''+useraddr ,'apiId': 'fbe96220-65da-4030-b9c0-b9e712e404f7','params': [],'gasLimit':'0x55730'};
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
    var jdata = { 'userAddress' :''+useraddr ,'apiId': '7d70c70c-a084-4467-a932-5b4e833f8238','params': [],'gasLimit':'0x55730'};
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

function sendEther(useraddr,amount){
    var jsonres;
    var jdata =  { 'userAddress' :''+useraddr,'apiId': '6573797f-9aaa-43a2-ba65-83207e09e6ef','params': [useraddr,amount],'gasLimit':'0x7A120'};
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