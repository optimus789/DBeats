pragma solidity ^0.6.0;
 
contract dbeats {
struct Data
{
string subs;
}
mapping(address => Data[]) setOfArtists;

 function setArtist(address _Address, string memory _artistID) public {
    Data memory d;
    d.subs = _artistID;
    setOfArtists[_Address].push(d);
}

function getArtist(address _Address ) public view returns (string memory s){
    uint ind = setOfArtists[_Address].length;
    
    string memory finalword = "";
        
        
        //ind = ind - 1;
        for(uint i=0;i<ind;i++){
        Data storage p = setOfArtists[_Address][i];
        string memory best1 = p.subs;
        finalword = string (abi.encodePacked(finalword,  best1,","));
        
        }
        return(finalword);
        
    
    }
    
    
    
}
 
   