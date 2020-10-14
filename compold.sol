pragma solidity ^0.6.12;

interface CEth {
    function mint() external payable;

    function exchangeRateCurrent() external returns (uint256);

    function supplyRatePerBlock() external returns (uint256);

    function redeem(uint) external returns (uint);
    
    function balanceOf(address account) external returns (uint);

    function redeemUnderlying(uint) external returns (uint);
    
}


contract compoundcntr {

    address payable recipient;
    address payable pcntaddr = 0xd6801a1DfFCd0a410336Ef88DeF4320D6DF1883e;
    address cntaddr = 0xd6801a1DfFCd0a410336Ef88DeF4320D6DF1883e;

    
    function stake() external payable {
        
    }
    function check() public view returns (uint256){
        uint a = 1600000000000000000;
        uint256 b = uint256(uint(a));
        return b; 
    }
     
    function balancethisOf() external view returns(uint){
        return address(this).balance;
    }
    
    
    function pay() public payable {
        //9.96351294 ceth tkn
        CEth cToken = CEth(pcntaddr);
        cToken.mint{value:0.06 ether}{gas:160000}();
    }
    

    function withdraw(uint money) public returns(uint) {
        //239123399 ceth worth of 0.06 eth
        //CEth cToken = CEth(pcntaddr);
        //uint256 redeemResult;
        //uint tokens = cToken.balanceOf(address(this));
        //redeemResult = cToken.redeem{gas:300000}(money);
        //return redeemResult;
        //string memory a = string(abi.encodePacked("redeem(", money, ")"));
        pcntaddr.call{gas:4520000}(abi.encodeWithSignature("redeem(1391142360000000)"));
        return 1;
        //pcntaddr.call(abi.encodeWithSignature(keccak256("")) );
        
    }
    1900000000000000000
    
    function sendEther(address payable recipient, uint money) public{
        //send some ethers in wei
        recipient.transfer(money);
    }
     function send1Ether(address payable recipient) public{
        recipient.transfer(1 ether);
    }
}