pragma solidity ^0.5.12;
 
contract donation {

struct artisId
{
    address artistadd;
    uint donate;
}



mapping(string => artisId) setofdcounts;

function setDonate(string memory _artistID, uint _donateamount) public {
    setofdcounts[_artistID].donate = setofdcounts[_artistID].donate + _donateamount;
}

function linkWallet(address _recipient, string memory _artistID) public {
    setofdcounts[_artistID].artistadd = _recipient;
}

function checklinked(string memory _artistID)  public view returns(bool){
    if(setofdcounts[_artistID].artistadd != address(0)){
        return true;    
    }
    return false;
}

function showAdd(string memory _artistID)  public view returns(address){
    return setofdcounts[_artistID].artistadd;
}

function showDonations(string memory _artistID) public view returns(uint){
    return setofdcounts[_artistID].donate;
}

function showBalance() public view returns(uint){
    
    return address(this).balance;
}

function redeemDonations(address payable _recipient, string memory _artistID ) public payable {
        //send some ethers in wei
        
        _recipient.transfer(setofdcounts[_artistID].donate);
        
        setofdcounts[_artistID].donate=0;
    }
    
    function() external payable { }
}
 
   