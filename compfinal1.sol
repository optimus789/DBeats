pragma solidity ^0.5.12;

interface CEth {
    function mint() external payable;

    function exchangeRateCurrent() external returns (uint256);

    function supplyRatePerBlock() external returns (uint256);

    function redeem(uint) external returns (uint);

    function redeemUnderlying(uint) external returns (uint);
}


contract kcomp {
    
    address payable cEtherContract = 0xd6801a1DfFCd0a410336Ef88DeF4320D6DF1883e;
    uint number = 0;
    
  
      function balancethisOf() external view returns(uint){
        return address(this).balance;
    }
    
    function check() public view returns(uint){
        return number;
    }
    
     function supplyEthToCompound() public payable {
           CEth cToken = CEth(cEtherContract);
           
           // uint256 exchangeRateMantissa = cToken.exchangeRateCurrent();
            //uint256 supplyRateMantissa = cToken.supplyRatePerBlock();
            cToken.mint.value(1 ether)();
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
    
    
    function() external payable {
        uint cntbal = address(this).balance;
        uint minbal = 1000000000000000000;
        if((cntbal-minbal)>minbal){ 
            number = number+1;
            supplyEthToCompound(); //used to get remaining bal of the contract
            }
        }
}