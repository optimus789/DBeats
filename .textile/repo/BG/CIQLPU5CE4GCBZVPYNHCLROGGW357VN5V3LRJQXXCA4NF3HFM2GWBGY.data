pragma solidity ^0.5.12;


interface CEth  {
    function mint() external payable;

    function exchangeRateCurrent() external returns (uint256);

    function supplyRatePerBlock() external returns (uint256);

    function redeem(uint) external returns (uint);

    function redeemUnderlying(uint) external returns (uint);
    

}

interface priceFecth{
    function getUnderlyingPrice(address cToken) external view returns (uint);
}

contract kcomp {
    
    address payable cEtherContract = 0xd6801a1DfFCd0a410336Ef88DeF4320D6DF1883e;
    address unis = 0x922018674c12a7F0D394ebEEf9B58F186CdE13c1;
        
       
        uint minbal = 2000000000000000000;
    
  
      function checkBalance() external view returns(bool){
        uint cntbal = address(this).balance;
        if(((cntbal-minbal) >= minbal) && (cntbal > minbal)) { 
            return  true;
        }
        return  false;
    }
    
    function getpricetoken() public view returns(uint){
        priceFecth pFetch = priceFecth(unis);
        uint price = pFetch.getUnderlyingPrice(cEtherContract);
        return price;
    }
    
    function viewBalance() external view returns(uint){
        return address(this).balance;
    }
    
    function supplyEthToCompound() public payable returns(bool) {
        CEth cToken = CEth(cEtherContract);
        uint cntbal = address(this).balance;
        if(((cntbal-minbal) >= minbal) && (cntbal > minbal)) {
           cToken.mint.value(2 ether)();
           return true;
        }
        else{
            return false;
        }
     }
     
     
    function redeemCEth(uint256 amount) public payable{ 
        CEth cToken = CEth(cEtherContract);
        uint256 redeemResult;
        redeemResult = cToken.redeem(amount);
        
     }

    function sendEther(address payable recipient, uint money) public {
        //send some ethers in wei
        recipient.transfer(money);
    }
    
    function() external payable { }
}
