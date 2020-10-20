pragma solidity ^0.6.0;
 
contract matstorage {
struct Data
{
    string subs;
}

struct artisId
{
    uint subcount;
}


mapping(address => Data[]) setOfArtists;

mapping(string => artisId) setofcounts;

uint totalsubcount;

 function setArtist(address _Address, string memory _artistID) public {
    Data memory d;
    d.subs = _artistID;
    setOfArtists[_Address].push(d);
    setofcounts[_artistID].subcount++;
    totalsubcount++;
}

/*function setSubCount(string memory _artistID) public {
    artisId memory a;
    a.subcount++;
    setofcounts[_artistID].subcount++;
}*/

function getallsub() public view returns(uint){
    return totalsubcount;
}

function getSubCount(string memory _artistID) public view returns(uint){
    return setofcounts[_artistID].subcount;

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
    //0x55D997bF0b0556c3A749480Fd2D4f6e557f66A7D
function findArtist(address _Address, string memory artistID) public view returns(uint){
    uint ind = setOfArtists[_Address].length;
 
    for(uint i=0;i<ind;i++){
        Data storage p = setOfArtists[_Address][i];
        string memory best1 = p.subs;
            if(keccak256(abi.encodePacked(best1)) == keccak256(abi.encodePacked(artistID))){
                    return i;
                }
        }
    }
    
function removeArtist(address _Address, uint indx,string memory _artistID) public returns(bool){
    //string storage []arr1 =  setOfArtists[_Address];
    uint indlast = setOfArtists[_Address].length;
    Data storage p = setOfArtists[_Address][indx];
    Data storage q = setOfArtists[_Address][indlast-1];
    setofcounts[_artistID].subcount--;
    totalsubcount--;
    p.subs = q.subs;
    setOfArtists[_Address].pop();
        if(setOfArtists[_Address].length<indlast-1){
            return true;
        }
        else{
            return false;
        }
    }
}
 
   