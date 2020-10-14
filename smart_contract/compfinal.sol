pragma solidity ^0.5.12;

contract kcomp {
    
    address payable cEtherContract = 0xd6801a1DfFCd0a410336Ef88DeF4320D6DF1883e;
        
       
        uint minbal = 1000000000000000000;
    
  
      function checkBalance() external view returns(bool){
        uint cntbal = address(this).balance;
        if(((cntbal-minbal) >= minbal) && (cntbal > minbal)) { 
            return  true;
        }
        return  false;
    }
    
    function viewBalance() external view returns(uint){
        return address(this).balance;
    }
    
     function supplyEthToCompound() public payable {
           CEth cToken = CEth(cEtherContract);
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
    
    function() external payable { }
}

interface CEth  {
    function mint() external payable;

    function exchangeRateCurrent() external returns (uint256);

    function supplyRatePerBlock() external returns (uint256);

    function redeem(uint) external returns (uint);

    function redeemUnderlying(uint) external returns (uint);
}