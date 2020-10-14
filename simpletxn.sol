pragma solidity ^0.6.12;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 */
contract Storage {
    
    
    address payable recipient;
    address payable cntaddr = 0xd6801a1DfFCd0a410336Ef88DeF4320D6DF1883e;
    uint256 number;
    

    /**
     * @dev Store value in variable
     * @param num value to store
     */
    function store(uint256 num) public {
        number = num;
    }
    
    function stake() external payable {
        
    }
    
    function pay() public {
        cntaddr.call{gas:452000}.value(1 ether)(abi.encodeWithSignature("mint()"));
        
    }
    
    function withdraw() public{
        cntaddr.call{gas:452000}{value:996378533}(abi.encodeWithSignature("redeem()"));

    }
    
    function balanceOf() external view returns(uint){
        return address(this).balance;
    }
    
    /**
     * @dev Return value 
     * @return value of 'number'
     */
    function retrieve() public view returns (uint256){
        return number;
    }
    
    function sendEther(address payable recipient, uint money) public{
        recipient.transfer(money);
    }
     function send1Ether(address payable recipient) public{
        recipient.transfer(1 ether);
    }
}